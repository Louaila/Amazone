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



// const { test, expect } = require('@playwright/test');
 
// test('Search for a pair of sneakers and order the first model found on Amazon', async ({ page }) => {  
//   await page.goto('https://www.amazon.fr');
  
//   // close the pop up
//   await page.getByLabel('Accepter').click();
//   // Enter the search term
//   await page.getByPlaceholder('Rechercher Amazon.fr').fill('baskets');
//   // Click on the search button
//   await page.getByRole('button', { name: 'Go' }).click();
  
// });
 
// All tests are for amazon.fr
 
// Test case 1 : Verify navigation to amazon.fr
// Step 1: Open the browser and navigate to the amazon.fr 
// Expected Result: Verify that the current URL is amazon.fr



// Test case 2 : Verify cookie acceptance
// Step 1: Open the browser and navigate to the amazon.fr
// Step 2: Accept cookies
// Expected Result: Verify that the cookies are accepted (the button disappears after the click)


// Test case 3 : Verify product search
// Step 1: Open the browser and navigate to the amazon.fr and Close the pop-up
// Step 2: Search for "sneakers"
// Expected Result: Verify that the search results are displayed
 
// Test case 4 : Verify selection of the first product
// Step 1: Navigate to amazon.fr, perform the search
// Step 2: Select the first product
// Expected Result: Verify that the product page is displayed (e.g., check the product title element)
 
// Test case 5 : Verify adding product to cart
// Step 1: Navigate to amazon.fr, perform the search and select the product
// Step 2: Add to cart
// Expected Result: Verify that the product is added to the cart (e.g., check for a confirmation message)
 
// Test case 6 : Verify accessing the cart
// Step 1: Navigate to amazon.fr, perform the search and add the product to the cart
// Step 2: Go to the cart
// Expected Result: Verify that the product is present in the cart
 
// Test case 7 : Verify the checkout process
// Step 1: Navigate to amazon.fr, perform the search, add the product to the cart and go to the cart
// Step 2: Proceed to checkout
// Expected Result: Verify that the checkout process is initiated (e.g., check for the presence of the checkout page)