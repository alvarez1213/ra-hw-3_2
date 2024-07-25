import React from 'react'
import './listing.css'

import { ItemInfo, ListingProps } from '../../models'

import { Item } from '../Item'

export const Listing = (props: ListingProps) => {
  const { items } = props

  return (
    <div className="item-list">
      {items.map((item: ItemInfo) => (
        <Item
          item={item}
        />
      ))}
    </div>
  )
}
