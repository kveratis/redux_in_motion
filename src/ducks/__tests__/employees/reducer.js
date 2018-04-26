import { types, reducer } from '../../employees';

describe('Fetching Employees', function() {
  describe('Request Start', function() {
    it('should set the loading property to `true` when the fetching starts', function() {
      const result = reducer(undefined, {
        type: types.FETCH_EMPLOYEES_REQUEST,
      });

      expect(result.loading).toEqual(true);
    });
  });

  describe('Successful Fetch', function() {
    it('should set the loading property to `false` when the fetching ends', function() {
      const result = reducer({ loading: true }, {
        type: types.FETCH_EMPLOYEES_SUCCESS,
      });

      expect(result.loading).toEqual(false);
    });

    it('should store the employee data', function() {
      const fakeData = [1, 2, 3];
      const result = reducer(undefined, {
        type: types.FETCH_EMPLOYEES_SUCCESS,
        payload: fakeData,
      });

      expect(result.data).toEqual(fakeData);
    });
  });

  describe('Failed Fetch', function() {
    it('should set the loading property to `false` when the fetching fails', function() {
      const result = reducer({ loading: true }, {
        type: types.FETCH_EMPLOYEES_FAILURE,
      });

      expect(result.loading).toEqual(false);
    });

    it('should store the error message', function() {
      const errorMessage = 'Request failed with status code 404';
      const result = reducer(undefined, {
        type: types.FETCH_EMPLOYEES_FAILURE,
        payload: errorMessage,
      });

      expect(result.error).toEqual(errorMessage);
    });
  });
});