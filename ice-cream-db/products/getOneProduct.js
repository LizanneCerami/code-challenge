import {client, productsCollection} from "../mongoConnect.js";

const getOneProduct = async () => {
  try {
    await client.connect();
    const oneProduct = await productsCollection.findOne({ name: 'banana split'});
    console.log(oneProduct)
  } catch (error) {
    console.log(error)
  } finally {
    await client.close();
  }
}

getOneProduct()