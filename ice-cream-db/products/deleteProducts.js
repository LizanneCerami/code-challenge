import { client, productsCollection } from "../mongoConnect.js";

const deleteProducts = async () => {
  try {
    await client.connect();
    const itemDeleted = await productsCollection.deleteOne({
      name: "single scoop",
    });
    console.log(itemDeleted);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

deleteProducts();