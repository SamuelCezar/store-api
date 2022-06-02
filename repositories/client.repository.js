import { connect } from "./db.js";

async function insertClient(client) {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO clients (name, cpf, email, phone, adress) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [
      client.name,
      client.cpf,
      client.email,
      client.phone,
      client.adress,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getClients() {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * from clients");
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getClient(id) {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM clients WHERE client_id = $1", [id]);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function deleteClient(id) {
    const conn = await connect();
    try {
      const res = await conn.query("DELETE FROM clients WHERE client_id = $1", [id]);
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  }

async function updateClient() {
  const conn = await connect();
  try {
    const sql = "";
    const res = await conn.query(sql);
    return res;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}



export default {
  insertClient,
  getClients,
  getClient,
  updateClient,
  deleteClient,
};
