import { test } from '@playwright/test';
import { LandingPage } from '../pages-objects/landing.page';
import { ProductListPage } from '../pages-objects/product.list.page';
import { ProductPage } from '../pages-objects/product.page';
import { AddedToCartPage } from '../pages-objects/added.to.cart.page';
import { LoginPage } from '../pages-objects/login.page';
import { CartPage } from '../pages-objects/cart.page';

test('test happy path', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const productListPage = new ProductListPage(page);
    const productPage = new ProductPage(page);
    const addedToCartPage = new AddedToCartPage(page);

    await landingPage.navigateToWebsite();
    await landingPage.searchForProduct();
    await productListPage.selectProductInCatalog();
    await productPage.addProductToCart();
    await addedToCartPage.goToCheckOut();

});

test('test happy path with delivery options checked', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const productListPage = new ProductListPage(page);
    const productPage = new ProductPage(page);
    const addedToCartPage = new AddedToCartPage(page);

    await landingPage.navigateToWebsite();
    await landingPage.searchForProduct();
    await productListPage.selectProductInCatalog();
    await productPage.addProductToCart();
    await addedToCartPage.goToDeliveryOptions();

});

test('test add and delete a product on the added to cart page', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const productListPage = new ProductListPage(page);
    const productPage = new ProductPage(page);
    const addedToCartPage = new AddedToCartPage(page);
    const cartPage = new CartPage(page);

    await landingPage.navigateToWebsite();
    await landingPage.searchForProduct();
    await productListPage.selectProductInCatalog();
    await productPage.addProductToCart();
    await addedToCartPage.deleteProduct();
    await addedToCartPage.goToCart();
    await cartPage.checkEmptyCart();
});


test('test unhappy credentials path', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const loginPage = new LoginPage(page);

    await landingPage.navigateToWebsite();
    await landingPage.goToIdentification();
    await loginPage.enterWrongCredentials();
    await loginPage.checkAlert();
    
});


