/* eslint-disable no-console */
import React from 'react'
import { useListContext } from 'vtex.list-context'

const ProductListContent = () => {
  const { list } = useListContext()

  const listProductsFiltered = list?.filter(
    ({ props }: any) => props?.listName === 'test products'
  )

  const items = React.Children.toArray(listProductsFiltered ?? [])

  return (
    <section className={'vtex-list-context-0-x-list vtex-list-context-0-x-list--test-context '}>
      {items}
    </section>
  )
}

export default ProductListContent
