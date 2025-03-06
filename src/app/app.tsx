import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../shared/routes';
import { MainPage } from '../pages/main/ui';
import { TasksPage } from '../pages/tasks/ui';

const App = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>

                <li>
                    <Link to={ROUTES.TASKS}>Tasks</Link>
                </li>
            </ul>

            <div>
                <Routes>
                    <Route path={ROUTES.ROOT} element={<Outlet />}>
                        <Route path={ROUTES.HOME} element={<MainPage />} />
                        <Route path={ROUTES.TASKS} element={<TasksPage />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
};

export default App;
