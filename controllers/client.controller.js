import ClientService from "../services/client.service.js"

async function createClient(req, res, next) {
  try {
    let client = req.body;
    if (
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.adress
    ) {
      throw new Error("Name, CPF, Phone, Email e Adress são obrigatórios.");
    }
    res.send(await ClientService.createClient(client));
    res.send({});
    logger.info(`POST / client - ${JSON.stringify(client)}`);
  } catch (error) {
    next(error);
  }
}

export default { createClient };
