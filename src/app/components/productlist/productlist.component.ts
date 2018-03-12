import { AddtocartService } from './../../services/addtocart.service';
import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-productlist',
	templateUrl: './productlist.component.html',
	styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
	public products = [];
	public addtocart_prodid = [];
	public count: number = 0;
	constructor(private _addTocart: AddtocartService) { }

	ngOnInit() {
		this.products = this._addTocart.addToCart();
	}

	addToCart(prodId) {
		this.addtocart_prodid.push({ productId: prodId.productId });
		console.log(this.addtocart_prodid);
	}

	/**
	 * Function to increment & decrement quantity
	 */

	incQuantity(product) {

	}

	decQuantity(product) {

	}




}
