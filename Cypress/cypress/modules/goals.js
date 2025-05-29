export const createGoal = (goalName) => {
  return cy.sendReq(`team/${Cypress.env('TEAM_ID')}/goal`, 'POST', {
    name: goalName,
    due_date: Date.now() + 7 * 24 * 60 * 60 * 1000,
    description: 'Goal created via Cypress test'
  })
}

export const getGoalByID = (goalID) => {
  return cy.sendReq('/goal/'+goalID, 'GET');
}

export const updateGoal = (goalID, body = {}) => {
  return cy.sendReq('goal/'+goalID, 'PUT', body);
}

export const getAllGoals = () => {
  return cy.sendReq(`team/${Cypress.env('TEAM_ID')}/goal`, 'GET');
}

export const delGoalByID = (goalID) => {
  return cy.sendReq('goal/'+goalID, 'DELETE');
}