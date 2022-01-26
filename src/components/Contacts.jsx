import './Contacts.css'
import info from '../info'

function Contacts() {
	return (
		<div className='contacts'>
			<h2>{info.contacts}</h2>
            {info.contactsList.map(item => (
                <ul type='disc'>
				    <li>{item}</li>
			    </ul>
				))}
		</div>
	)
}

export default Contacts
