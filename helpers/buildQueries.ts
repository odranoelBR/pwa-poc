const products = `
query {
  products(pageSize: 150000) {
    products {
      id
      slug
    }
  }
}

`;

const categories = `
query {
  categories(pageSize:10000){
    categories{
      parent {
        slug
        id
      }
      id
      slug
    }
  }
}

`;

export { products, categories };
