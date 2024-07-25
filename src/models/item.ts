
export type ItemInfo = {
    listing_id: number,
    state: string,
    url: string,
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
    MainImage: {
        url_570xN: string
    }
}

export type ItemProps = {
    item: ItemInfo
}