const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);


const names = ["Lisa", "Mark", "Jay", "Bey"];

function writeCards(names, event) {
    let messages = [];
    for (let n = 0; n < names.length; n++) {
        messages.push(`Thank you, ${names[n]}, for the wonderful surprise gift!`)
    }
    console.log(messages)
    return messages;
};

writeCards(names);

function countDown(number) {
    while (number > -1) {
        console.log(number);
        number--
    }
};

countDown(10);