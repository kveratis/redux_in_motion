import {actions, types} from '../../orders';
import * as FLAVORS from '../../../constants/flavors';

describe('Orders placeOrder()', function() {
  it('should have the right action type', function() {
    const action = actions.placeOrder({});
    expect(action.type).toEqual(types.PLACE_ORDER);
  });

  /**
   * customerName: String
   * createdAt: Number
   * cone: Boolean
   * scoops: Object
   */

   it('should contain the customer name in the payload', function() {
    const action = actions.placeOrder({
      customerName: 'Cindy',
    });

    expect(action.payload.customerName).toEqual('Cindy');
   });

   it('should contain the date of creation in the payload', function() {
    const action = actions.placeOrder({
      createdAt: 5,
    });

    expect(action.payload.createdAt).toEqual(5);
   });

   it('should contain the current date of creation in the payload if no date is given', function() {
    const action = actions.placeOrder({});

    expect(typeof action.payload.createdAt).toEqual('number');
   });

   it('should contain the cone/cup option in the payload', function() {
    const action = actions.placeOrder({
      cone: true,
    });

    expect(action.payload.cone).toEqual(true);
   });

   it('should default to a cone if no cone option is given', function() {
    const action = actions.placeOrder({});

    expect(action.payload.cone).toEqual(true);
   });

   it('should contain the scoops object in the payload', function() {
    const action = actions.placeOrder({
      scoops: {
        [FLAVORS.VANILLA]: 1
      },
    });

    expect(action.payload.scoops).toEqual({[FLAVORS.VANILLA]: 1});
   });
});

describe('Orders fulfillOrder()', function() {
  it('should have the right action type', function() {
    const action = actions.fulfillOrder(5);
    expect(action.type).toEqual(types.FULFILL_ORDER);
  });

  it('should have the ID in the payload', function() {
    const action = actions.fulfillOrder(5);
    expect(action.payload).toEqual(5);
  });
});

describe('Orders payForOrder()', function() {
  it('should have the right action type', function() {
    const action = actions.payForOrder(5);
    expect(action.type).toEqual(types.PAY_FOR_ORDER);
  });

  it('should have the ID in the payload', function() {
    const action = actions.payForOrder(5);
    expect(action.payload).toEqual(5);
  });
});

describe('Orders cancelOrder()', function() {
  it('should have the right action type', function() {
    const action = actions.cancelOrder(5);
    expect(action.type).toEqual(types.CANCEL_ORDER);
  });

  it('should have the ID in the payload', function() {
    const action = actions.cancelOrder(5);
    expect(action.payload).toEqual(5);
  });
});