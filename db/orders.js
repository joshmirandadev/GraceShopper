const client = require("./client");

async function getOrdersByUser(id){

    try{

        const { rows: [orders] } = await client.query(`
        
        SELECT *
        INSERT INTO order(id, product, quantity, total)
        FROM orders
        WHERE id=$1
        `,[id])
        
        return orders;
    }catch(error){
        throw error;
    }
}


module.exports ={
    getOrdersByUser
}