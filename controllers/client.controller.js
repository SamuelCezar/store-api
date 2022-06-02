import ClientService from "../services/client.service.js";

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
    logger.info(`POST / client - ${JSON.stringify(client)}`);
  } catch (error) {
    next(error);
  }
}

async function getClients(req, res, next) {
  try {
    return res.send(await ClientService.getClients());
  } catch (error) {
    next(error);
  }
}

async function getClient(req, res, next) {
  try {
    res.send(await ClientService.getClient(req.params.id));
  } catch (error) {
    next(error);
  }
}

async function deleteClient(req, res, next) {
  try {
    res.send(await ClientService.deleteClient(req.params.id));
    res.end();
  } catch (error) {
    next(error);
  }
}

export default { createClient, getClients, getClient, deleteClient };
