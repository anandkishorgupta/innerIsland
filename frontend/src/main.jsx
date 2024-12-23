import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { AppContextProvider } from "./context/AppContext.jsx";
import { store } from './store.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Provider>,
)
