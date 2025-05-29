import {createGoal} from '../modules/goals.js';
import {getGoalByID} from '../modules/goals.js';
import {updateGoal} from '../modules/goals.js';
import {getAllGoals} from '../modules/goals.js';
import {delGoalByID} from '../modules/goals.js';

describe('ClickUp Goal Lifecycle Test', () => {
  let goalID;
  const goalName = `Test Goal ${Date.now()}`;

  it('Create Goal', () => {
      createGoal(goalName).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.goal).to.have.property('id');
      goalID = res.body.goal.id;
    });
  });

  it('Get Goal', () => {
    cy.wrap(null).then(() => {
      expect(goalID).to.exist;
    });

    getGoalByID(goalID).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.goal.name).to.eq(goalName);
    });
  });

  it('Update Goal', () => {
    updateGoal(goalID, {name: `${goalName} - Updated`, description: 'Updated description'})
      .then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.goal.name).to.include('Updated');
    });
  });

  it('Get All Goals (getGoals)', () => {
    getAllGoals().then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.goals).to.be.an('array');

      const match = res.body.goals.find((g) => g.id === goalID);
      expect(match).to.exist;
    });
  });

  it('Delete Goal', () => {
//    cy.sendReq(`goal/${goalID}`, 'DELETE')
    delGoalByID(goalID).then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});