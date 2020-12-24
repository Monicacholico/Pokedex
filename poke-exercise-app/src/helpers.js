let arr = [23, 45, 6,7, 78, 96, 54, 4, 3];


function choice(items) {
    let randomItem = Math.floor(Math.random() * items.length);
    return items[randomItem];
}

choice(arr);

export {choice};