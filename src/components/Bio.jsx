import './Bio.css'
import info from '../info'

function Bio() {
	return (
		<div className='bio'>
			<h1>{info.name}</h1>
			<p>
				{info.age}
				<br />
				{info.interests}
				<br />
				<br />
			</p>

			<div className='bio-links'>
				{info.links.map(item => (
					<a href={item.link} target='_blank' rel='noreferrer'>
						<img src={item.img} alt={item.id} />
					</a>
				))}
			</div>
		</div>
	)
}

export default Bio
