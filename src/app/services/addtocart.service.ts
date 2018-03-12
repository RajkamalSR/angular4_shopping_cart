import { Injectable } from '@angular/core';

@Injectable()
export class AddtocartService {

  constructor() { }

  addToCart(){
    return [
      {
        productId: '1001',
        productImgUrl: 'http://via.placeholder.com/350x150',
        productTitle: 'Product 1001',
        productCategoryId: 'C100',
        productDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        productAvalQuantity: 24,
        productReqQuantity: '',
        productCount:0
      },
      {
        productId: '1002',
        productImgUrl: 'http://via.placeholder.com/350x150',
        productTitle: 'Product 1002',
        productCategoryId: 'C100',
        productDesc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
        productAvalQuantity: 14,
        productReqQuantity: '',
        productCount:0
      },
      {
        productId: '1003',
        productImgUrl: 'http://via.placeholder.com/350x150',
        productTitle: 'Product 1003',
        productCategoryId: 'C100',
        productDesc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced',
        productAvalQuantity: 8,
        productReqQuantity: '',
        productCount:0
      }
      ,
      {
        productId: '1004',
        productImgUrl: 'http://via.placeholder.com/350x150',
        productTitle: 'Product 1004',
        productCategoryId: 'C101',
        productDesc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced',
        productAvalQuantity: 4,
        productReqQuantity: '',
        productCount:0
      }
    ]
  }

}
