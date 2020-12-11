import {BrowserRouter, Route} from 'react-router-dom'

import Home from './components/Home'
import Nav from './components/Nav'
import ProjectDetails from './components/ProjectDetails'
import Projects from './components/Projects'
import './App.css';

function App() {
  const portfolioPieces= [
    {
      name:"textRPG",
      id: 1,
      language: "Javascript",
      link: 'https://github.com/NikkiHmltn/textRPG'
    },
    {
      name:"Bag of Holding",
      id: 2,
      language: "Node.js/Express",
      link: 'https://github.com/NikkiHmltn/bag-of-holding'
    }]
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route exact path="/projects" 
        render={() => {return <Projects projectItems={portfolioPieces} />
        }}/>
        <Route path="/projects/:id" render={(routeInfo) => {
          const id = routeInfo.match.params.id
          const targetProject = portfolioPieces.find((p) => p.id === parseInt(id))
          return <ProjectDetails project={targetProject} />
        }} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
