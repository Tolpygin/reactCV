import './Skills.css'
import info from '../info'

function Skills() {
	return (
		<div className='skills'>
			<h2>{info.skills}</h2>
            {info.skillsList.map(item => (
                <ul type='disc'>
				    <li>{item}</li>
			    </ul>
				))}
		</div>
	)
}

export default Skills
