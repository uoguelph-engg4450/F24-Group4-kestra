describe('Dashboard Tests', () => {
  it('English test to check for overlapping conditions', () => {
    cy.visit('http://localhost:5173/dashboard?startDate=2024-09-25T23:46:49.018-04:00&endDate=2024-10-25T23:46:49.020-04:00&scope=USER');
    cy.get('label[data-test-id="date-filter-relative-selector"]').click();
    cy.get('div.el-radio-group.filter')
      .should('have.length', 1)
      .and('be.visible')
      .and(($div) => {
      const rect = $div[0].getBoundingClientRect();
      expect(rect.top).to.be.greaterThan(0);
      expect(rect.bottom).to.be.lessThan(Cypress.config('viewportHeight'));
      expect(rect.left).to.be.greaterThan(0);
      expect(rect.right).to.be.lessThan(Cypress.config('viewportWidth'));
      });
  });
  it('Russain test to check for overlapping conditions', () => {
    cy.visit('http://localhost:5173/settings');
    cy.get('div.el-row.row')
      .eq(5)
      .find('div')
      .first()
      .find('div')
      .contains('English')
      .click()
      cy.get('div.el-scrollbar').should('be.visible').find('span').contains('Russian').click();
    cy.visit('http://localhost:5173/dashboard?startDate=2024-09-25T23:46:49.018-04:00&endDate=2024-10-25T23:46:49.020-04:00&scope=USER');
    cy.get('label[data-test-id="date-filter-relative-selector"]').click();
    cy.get('div.el-radio-group.filter')
      .should('have.length', 1)
      .and('be.visible')
      .and(($div) => {
      const rect = $div[0].getBoundingClientRect();
      expect(rect.top).to.be.greaterThan(0);
      expect(rect.bottom).to.be.lessThan(Cypress.config('viewportHeight'));
      expect(rect.left).to.be.greaterThan(0);
      expect(rect.right).to.be.lessThan(Cypress.config('viewportWidth'));
      });
  });
  it('Polish test to check for overlapping conditions', () => {
    cy.visit('http://localhost:5173/settings');
    cy.get('div.el-row.row')
      .eq(5)
      .find('div')
      .first()
      .find('div')
      .contains('English')
      .click()
      cy.get('div.el-scrollbar').should('be.visible').find('span').contains('Polish').click();
    cy.visit('http://localhost:5173/dashboard?startDate=2024-09-25T23:46:49.018-04:00&endDate=2024-10-25T23:46:49.020-04:00&scope=USER');
    cy.get('label[data-test-id="date-filter-relative-selector"]').click();
    cy.get('div.el-radio-group.filter')
      .should('have.length', 1)
      .and('be.visible')
      .and(($div) => {
      const rect = $div[0].getBoundingClientRect();
      expect(rect.top).to.be.greaterThan(0);
      expect(rect.bottom).to.be.lessThan(Cypress.config('viewportHeight'));
      expect(rect.left).to.be.greaterThan(0);
      expect(rect.right).to.be.lessThan(Cypress.config('viewportWidth'));
      });
  });
});