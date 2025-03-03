import { type Page, type Locator, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly emptyCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emptyCart = page.getByRole('heading', { name: 'Votre panier Amazon est vide' });
    }

    async checkEmptyCart() {
        await expect(this.emptyCart).toBeVisible();
    }
}