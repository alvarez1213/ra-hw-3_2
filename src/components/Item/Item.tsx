import React from 'react'
import './item.css'

import { ItemProps } from '../../models/item'

export const Item = (props: ItemProps) => {
  const { item } = props

  if (item['state'] === 'removed') return (<></>)

  let currency = item.currency_code
  if (item.currency_code === 'USD') {
    currency = '$'
  } else if (item.currency_code === 'EUR') {
    currency = '€'
  }

  let quantityLevel = 'level-high'
  if (item.quantity <= 10) {
    quantityLevel = 'level-low'
  } else if (item.quantity <= 20) {
    quantityLevel = 'level-medium'
  }

  return (
    <div key={item.listing_id} className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt="product" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{item.title.length > 50
          ? `${item.title} ...`
          : item.title
        }</p>
        <p className="item-price">{item.currency_code === 'USD' || item.currency_code === 'EUR'
          ? `${currency}${item.price}`
          : `${item.price} ${currency}`
        }</p>
        <p className={`item-quantity ${quantityLevel}`}>{item.quantity} left</p>
      </div>
    </div>
  )
}
