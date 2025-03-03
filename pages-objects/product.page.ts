import type { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly stockValue: Locator;
    readonly addToCartButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.stockValue = page.locator('#availability');
        this.addToCartButton = page.getByTitle('Ajouter au panier');

    }

    async addProductToCart() {
      
        await expect(this.addToCartButton).toBeVisible();
        await this.addToCartButton.click();

    }}