import './App.css'
import Avatar from './components/Avatar'
import Bio from './components/Bio'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import Projects from './components/Projects'

function App() {
	return (
		<div className='app'>
			<Avatar />
			<Bio />
			<Projects />
			<Skills />
			<Contacts />
		</div>
	)
}


export default App
