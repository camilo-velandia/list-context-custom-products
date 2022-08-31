/* eslint-disable no-console */
import React from 'react'
import ProductSummaryListWithoutQuery from 'vtex.product-summary/ProductSummaryListWithoutQuery';
import productByIdentifier from "../graphql/productByIdentifier.gql";
import {useQuery} from 'react-apollo'

const CustomProducts = (props:any) => {

  const { ProductSummary, children  }:any = props;

  const {data} = useQuery(productByIdentifier, {
    variables: {
      field: "id",
      values: ["13","5047946","5048492","14","15","16","19"],
    },
    fetchPolicy: "no-cache"
  })

  return (
    <ProductSummaryListWithoutQuery
      products={data?.productsByIdentifier}
      ProductSummary={ProductSummary}
      listName="test products"
    >
      {children}
    </ProductSummaryListWithoutQuery>
  );
};

export default CustomProducts;

