import instagram from './assets/images/instagram.webp'
import telegram from './assets/images/telegram.svg'
import vk from './assets/images/vk.png'
import mail from './assets/images/mail.svg'

const info = {
	name: 'Толпыгин Михаил',
	age: 'Возраст: 26 лет',
	interests: 'Интересы: программирование, спорт, шахматы',
	links: [
		{ id: 'instagram', link: 'https://instagram.com/tmmesp', img: instagram },
		{ id: 'telegram', link: 'https://t.me/tmmesp', img: telegram },
		{ id: 'vk', link: 'https://vk.com/esp_mk', img: vk },
		{ id: 'mail', link: 'mailto:tolpygin14@yandex.ru', img: mail } ,
	],
	skills: 'Навыки',
	skillsList: ['ECMAScript 6', 'HTML 5', 'CSS 3', 'GIT'],
	contacts: 'Контакты',
	contactsList: [
		'Телефон/WhatsApp: +79105051414',
		'Почта: tolpygin14@yandex.ru',
	],
	projects: [
		{ name: 'Slides', link: 'https://github.com/Tolpygin/Slides', img: 'https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
		{ name: 'BoardColor', link: 'https://github.com/Tolpygin/BoardColor', img: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
		{ name: 'AnotherOne', link: 'https://github.com/Tolpygin/CV', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'},
	],
}

export default info
