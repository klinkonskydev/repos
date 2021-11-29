import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from '../pages/Main';
import { Repo } from '../pages/Repo';

export function Routes(){

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/repo/:repository" component={ Repo } />
      </Switch>
    </BrowserRouter>
  )
}