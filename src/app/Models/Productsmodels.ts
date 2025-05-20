export class ProductsClass{
    id!:number;
    name?:string;
    price: number=0
    nuts?: boolean;
    image?: string;
    vegeterian?: boolean;
    spiciness?: number;
    categoryId?: number;
}

export class CategoryClass{
    id!: number;
  name?: string;
  products?: Products[]
  
}

export class Products{
      id!: number;
      name?: string;
      price?: number;
      nuts?: boolean;
      image?: string;
      vegeterian?: boolean;
      spiciness?: number;
      categoryId?: number;
}

export class Categgory{
    id!: number;
    name?: string;
}

export class basket{
    quantity?: number
    price?: number
    product?:productBasket[] 
 
    }

export class productBasket{
        id?: number
      name?: string
      price?: number
      nuts?: boolean
      image?: string
      vegeterian?: boolean
      spiciness?: number
      categoryId?: number
}

export class RegistrationClass{
    phoneNumber?: string
    password?: string
    email?: string
    firstName?: string
    lastName?: string
    role?: string
}