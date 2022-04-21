// @ts-expect-error No typings.
Snipcart.events.on('item.adding', (parsedCartItem) => {
    console.log(parsedCartItem);
});