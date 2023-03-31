import {client, productsCollection} from "../mongoConnect.js"

const editProducts = async () => {
  try {
  await client.connect()
  const updatedProduct = await productsCollection.findOneAndUpdate(
    {name: 'banana split'},
    {$set: {name: 'milkshake', price: 8}}
  )
  console.log(updatedProduct);
} catch (error) {
  console.log(error)
} finally {
  await client.close()
}
}
 editProducts()