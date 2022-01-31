import './Projects.css'
import info from '../info'
import React from 'react'

const { useState } = React

function Projects() {
	const [activeSlide, setActiveSlide] = useState(info.projects[0].name)
	function handleClick(slideName) {
		setActiveSlide(slideName)
	}
	return (
		<div className='projects'>
			{info.projects.map(item => (
				<div
					className={'slide' + (activeSlide === item.name ? ' active' : '')}
					onClick={() => handleClick(item.name)}
				>
					<h3>{item.name}</h3> <img src={item.img} alt={item.name} />
				</div>
			))}
		</div>
	)
}

export default Projects
