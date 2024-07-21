function generateRandomNumber(num) {
    return Math.floor(Math.random() * num) 
}

const collectiveWisdom = {
    auraInfo: ['Red', 'Orange', 'Yellow', 'Indigo', 'Pink', 'Green'],
    fortuneOutput: ['Passion', 'Warmth', 'Freedom', 'Peace', 'Luxury'],
    quoteOfTheDay: ['Romanticise your life', 'Believe in the power within you', 'Let go and let God', 'Everything you want, wants you more']
}

let personalWisdom = []

for(let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)
    switch(prop) {
        case 'auraInfo': 
          personalWisdom.push(`Your aura is "${collectiveWisdom[prop][optionIdx]}".`)
        break
        case 'fortuneOutput': 
          personalWisdom.push(`You are radiating "${collectiveWisdom[prop][optionIdx]}".`)
        break
        case 'quoteOfTheDay': 
           personalWisdom.push(`Quote of the day: "${collectiveWisdom[prop][optionIdx]}".`)
           break
        default: 
           personalWisdom.push('There is not enough info.')
    
            }
}

function formatWisdom(wisdom) {
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
}
formatWisdom(personalWisdom);