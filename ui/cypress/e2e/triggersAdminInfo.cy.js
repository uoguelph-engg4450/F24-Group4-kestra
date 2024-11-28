describe("Trigger Admin Information Tests", () => {
    it("Check that the flow provides information", () => {
        cy.viewport(1920, 1080);
        Cypress.on('uncaught:exception', (err, runnable) => {return false})
        cy.visit("http://localhost:5173/flows");
        cy.contains("span", "Create").click();
        cy.wait(2000);
        cy.url().should('include', '/flows/new');
        cy.get('span.mtk22').first().click()
            .type('{selectall}{backspace} ')
        cy.get('div.view-line').children().children().click().type(`id: myflow
namespace: company.team
tasks:
- id: start_batch
    {backspace}type: io.kestra.core.tasks.scripts.Bash
commands:
- echo "Starting batch process..."{enter}
{backspace}{backspace}{backspace}
triggers:
- id: trigger
    {backspace}type: io.kestra.plugin.jdbc.sqlserver.Trigger{enter}
logLevel: WARN{enter}
url: "{{}{{} secret('db.erp.jdbc_uri') }}"
username: "{{}{{} secret('db.erp.username') }}"
password: "{{}{{} secret('db.erp.password') }}"
sql: >
 SELECT TOP(1) 
FROM fL_PLMS_PN_STYL_SIZE_SKU_RCV_M
WHERE TSK_PRCS_YN = 'N'
ORDER BY ModifIedAt
{backspace}fetchType: FETCH{enter}
fetchSize: 100{enter}
{backspace}- id: schedule
    {backspace}type: io.kestra.plugin.core.trigger.Schedule{enter}
cron: "@hourly"`);
cy.get('span.mtk22').first().click().type('{ctrl}', {release:false}).type('s');
cy.wait(2000);
if (cy.get('div.el-message-box').should('be.visible')) {
    cy.get('span').contains('OK').click();
}
cy.wait(2500);
cy.visit("http://localhost:5173/admin/triggers");
cy.get('span.caret-wrapper').eq(1).click();
cy.wait(1000);
cy.get('div.trigger').first().click();
cy.get('div[aria-label="Trigger details: trigger"]').should('be.visible');
cy.get('div.trigger').eq(1).click();
cy.get('div[aria-label="Trigger details: schedule"]').should('be.visible');
    });
});
