export interface SignUp{
    name:string,
    password:string,
    email:string,
}
export interface Login{
    email:string,
    password:string,
}
export interface Product{
    name:string,
    price:number,
    category:string,
    description:string,
    image:string,
}