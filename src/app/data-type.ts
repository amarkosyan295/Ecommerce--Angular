export interface Signup {
  name: string;
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface product {
  Name: string,
  Price: number,
  Category: string,
  Color: string,
  image: string,
  productDescription: string,
  id : number,
  quantity: undefined | number,
}
