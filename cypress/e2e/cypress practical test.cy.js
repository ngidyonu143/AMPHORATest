describe('template spec', () => {
  it('Valid login', () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get('.authorization-link a').first().click();
    cy.get('#email').type("gideonbadn@gmail.com");
    cy.get('#pass').first().type("Gidyonu@1");
    cy.get(`[name="send"]`).first().click();
    cy.contains('.base').first().should("Home Page");

  })

  it('verify error message is displayed upon entering invalid credentials', () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get('.authorization-link a').first().click();
    cy.contains('#email-error').should("The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");

  });

  it('End to End test', () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get('.authorization-link a').first().click();
    cy.get('#email').type("gideonbadn@gmail.com");
    cy.get('#pass').first().type("Gidyonu@1");
    cy.get(`[name="send"]`).first().click();
    cy.get('#ui-id-5').trigger('mouseover');
    cy.get('#ui-id-17 >span').eq(1).trigger('mouseover');
    // cy.get("#ui-id-11 span").click();
    cy.get('a[href*="men/tops-men/jackets-men"]', { timeout: 5000 })
      .should('exist')
      .click({ force: true });
    cy.get('div[data-role="title"]').eq(1).click();
        cy.get('[option-id="169"]').eq(11).click();
        cy.get(`[class="product details product-item-details"]`).first().trigger('mouseover');
        // Click on the first product
    cy.get('.product-item-info').first().within(() => {
      cy.get('.product-item-link').click();
    });

    // Select size L
    // cy.get('div.swatch-attribute.size').within(() => {
    //   cy.get('div[option-label="L"]').click();
    // });

    // Select a color
    cy.get('div.swatch-attribute.color div.swatch-option').first().click();

    // Add to cart
    cy.get('#product-addtocart-button').click();

    // Check for success message
    cy.get('.message-success', { timeout: 10000 })
      .should('contain', 'You added');

    // Open mini-cart
    cy.get('.showcart').click();
    cy.get('a').contains('View and Edit Cart').click();

    // Verify item is in cart
    cy.get('.product-item-name', { timeout: 10000 }).should('exist');

    // Remove item from cart
    cy.get('.action.action-delete').click();

    // Confirm cart is empty
    cy.get('.cart-empty', { timeout: 10000 })
      .should('contain', 'You have no items in your shopping cart.');
  });
  })
