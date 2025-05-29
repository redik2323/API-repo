Cypress.Commands.add('sendReq', (url, method, body = null) => {
  return cy.request({
    method,
    url,
    headers: {
      'Authorization': Cypress.env('API_TOKEN'),
      'Content-Type': 'application/json'
    },
    body,
    failOnStatusCode: false,
  });
});