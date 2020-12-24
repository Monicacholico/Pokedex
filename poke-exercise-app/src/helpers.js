


function choice(items) {
    let randomItem = Math.floor(Math.random() * items.length);
    return items[randomItem];
}


export {choice};