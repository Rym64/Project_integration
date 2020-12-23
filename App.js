import React, { useEffect, useState } from 'react';
import './App.css';
import List from './component/List';
import withListLoading from './component/withListLoading';
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'http://165.50.236.179/in/api.php';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>List Of Product</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          2021 {' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          Project Integration
        </div>
      </footer>
    </div>
  );
}
export default App;
