const ballBtn = document.querySelector('img')
const inputBox = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = [
	'Nie licz na to!',
	'Moja odpowiedź to nie.',
	'Moje źródła mowią, że nie.',
	'Nie wygląda to dobrze.',
	'Mało prawdopodobne!',
	'To pewne!',
	'Zdecydowanie tak!',
	'Bez wątpienia.',
	'Możesz na tym polegać',
	'Tak jak to widzę, tak!',
	'Najprawdopodobniej.',
	'Dobre perspektywy.',
	'Znaki wskazują na tak!',
	'Tak!',
	'Niepewne, spróbuj ponownie.',
	'Zapytaj ponownie później.',
	'Lepiej nie mówić!',
	'Nie da się przewidzieć.',
	'Sokncentruj się i zapytaj ponownie.',
	'Weźźe wrzuć na luz.'
]

const showAnimation = () => {
	ballBtn.classList.add('shake-animation')
}

const showAnswer = el => {
	const randomNum = Math.floor(Math.random() * el.length)
	answer.innerHTML = `<span>Odpowiedź: </span> ${el[randomNum]}`
}

const checkInput = () => {
	const lastChar = inputBox.value.slice(-1)

	if (inputBox.value == '') {
		error.textContent = 'Musisz zadać jakieś pytanie!'
		answer.textContent = ''
	} else if (!inputBox.value == '' && lastChar !== '?') {
		error.textContent = 'Pytanie musi zawierać znak zapytania "?"'
		answer.textContent = ''
	} else {
		showAnswer(answers)
		error.textContent = ''
	}

	ballBtn.classList.remove('shake-animation')
}

ballBtn.addEventListener('click', e => {
	showAnimation(e)
	setTimeout(checkInput, 1000)
})
