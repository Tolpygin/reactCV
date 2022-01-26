import instagram from './assets/images/instagram.webp'
import telegram from './assets/images/telegram.svg'
import vk from './assets/images/vk.png'
import mail from './assets/images/mail.svg'

const info = {
	name: "Толпыгин Михаил",
    age: "Возраст: 26 лет",
    interests: "Интересы: программирование, спорт, шахматы",
	links: [
		{ id: 'instagram', link: 'https://instagram.com/tmmesp', img: instagram },
		{ id: 'telegram', link: 'https://t.me/tmmesp', img: telegram },
		{ id: 'vk', link: 'https://vk.com/esp_mk', img: vk },
		{ id: 'mail', link: 'mailto:tolpygin14@yandex.ru', img: mail },
	],
    skills: "Навыки",
    skillsList: ["ECMAScript 6", "HTML 5", "CSS 3", "GIT",],
    contacts: "Контакты",
    contactsList: ["Телефон/WhatsApp: +79105051414", "Почта: tolpygin14@yandex.ru"]
}

export default info
