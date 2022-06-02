import pg from "pg";

async function connect() {
    if(global.connection) {
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "postgres://tlqcrruj:4yo42uv_egGB8C0L2N4PfJYvT-OuvvH1@kesavan.db.elephantsql.com/tlqcrruj"
    });
    global.connection = pool;
    
    return pool.connect();
}

export { connect };
