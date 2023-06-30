const FakeStoreApi={
fetchAllProducts:async()=>{
    const res=await fetch("https://fakestoreapi.com/products");
    const result=await res.json();
    return result;
},
FetchProductById:async(productId)=>{
    const res=await fetch(`https://fakestoreapi.com/products/${productId}`);
    const result=await res.json();
    return result;
},
fetchProductByQuery:async(query)=>{
    const res=await fetch("https://fakestoreapi.com/products");
    const result=await res.json();
    return result.filter((product)=> product.title.toLowerCase().includes(query.toLowerCase()))
},
}
export {FakeStoreApi};
//https://api.escuelajs.co/api/v1/products/1