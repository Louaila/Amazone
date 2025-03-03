import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.fr/');
  await page.getByRole('button', { name: 'Accepter' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).fill('tablette');
  await page.getByRole('button', { name: 'tablette', exact: true }).click();


  await page.getByRole('link', { name: 'Samsung Galaxy Tab A9+' }).nth(1).click();
  await page.getByRole('heading', { name: 'Samsung Galaxy Tab A9+' }).locator('#productTitle').click();
  await page.getByText('32,99€').click();
  await page.locator('#availability').getByText('En stock').click();
  await page.locator('#apex_offerDisplay_single_desktop').click();


  await page.getByTitle('Ajouter au panier').click();
  await page.getByRole('button', { name: 'Non, merci.' }).click();
  await page.getByRole('heading', { name: 'Ajouté au panier' }).click();
  await page.locator('#sw-threshold-message div').nth(3).click();
  await page.getByRole('button', { name: 'Passer la commande (1 article' }).click();
  await page.getByRole('textbox', { name: 'Adresse e-mail ou numéro de t' }).click();
  await page.locator('div').filter({ hasText: 'Veuillez activer les cookies pour continuer Erreur de clé d\'accès Une erreur sʼ' }).nth(1).click();
});


