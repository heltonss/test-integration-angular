import { UsersComponent } from 'app/users/users.component';
import { routes } from 'app/app.routes';

describe('routes', () => {
    it('should contain a route for /users', () => {
        expect(routes).toContain({ path: 'users', component: UsersComponent})
    });
});