import { Login, Logout } from '../../actions/auth';

test('should generate login action', () => {
  const action = Login('1234');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: '1234',
  });
});

test('should generate login action', () => {
  const action = Logout();
  expect(action).toEqual({
    type: 'LOGOUT',
  });
});
