import { configureStore, getDefaultMiddleware, Middleware } from 'redux-starter-kit';
import reducers from './reducers';
import saga from 'redux-saga';

// create the saga middleware
const middleWares: Middleware[] = [...getDefaultMiddleware(), saga()];

const store = configureStore({
	reducer: reducers,
	middleware: middleWares,
	devTools: process.env.NODE_ENV !== 'production'
});

export default store;
