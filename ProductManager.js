class ProductManager {
  constructor(){
    this.products=[]
  }
  getNextID = ()=>{
    const count = this.products.length
    if ( count == 0) return 1

    const lastProduct = this.products[count-1]
    const lastID = lastProduct.id
    const nextID = lastID + 1

    return nextID

    
  }
  addProduct =(title,description,price,thumbnail,stock = required())=>{
    const id =this.getNextID()
    const required = ()=> {throw new Error ("falta un paramametro");};
    const product={
      id,
      title,
      description,
      price,
      thumbnail,
      stock
    }
    this.products.push(product)
  }
  getProduct = () =>{console.log(this.products) }

  getProductById  = (id) =>{
    const res = this.products.find(item => item.id === id);
    console.log(res)
    if(!res){
      console.log("no hay")
    }
  }
  deleteProductByID = (id) =>{
    const borrar = this.products.filter(product => product.id !== id)
    return borrar
  }
  updateProduct = (id) =>{
    const res = this.products.find(item => item.id === id);
    res.defineProperty(res)
  }
}
const añadir = new ProductManager()
añadir.addProduct("pan","harina",1,"link",1)
añadir.addProduct("pollo","carne",100,"links",2)

console.log(añadir.updateProduct(1))