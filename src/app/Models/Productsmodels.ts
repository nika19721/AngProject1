export class ProductsClass{
    id!:number;
    name?:string;
    price?: number;
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