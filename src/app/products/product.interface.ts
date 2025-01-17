export interface Product {
  /** Available count */
  count: number;
  author: string;
  id: string;
  price: number;
  title: string;
}

export interface ProductCheckout extends Product {
  orderedCount: number;
  /** orderedCount * price */
  totalPrice: number;
}
