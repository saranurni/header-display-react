import PropTypes from "prop-types";

// function createProductLIs(productsData) {
// return productsData.map((product) => (
// <li>
// {product.name} - {product.price}
// </li>
// ));
// }

// export default function Products({ products }) {
// return <ul>{createProductLIs(products)}</ul>;
// }

export default function Products({ products }) {
  const listItems = products.map((product) => (
    <li key={product.name}>
      {product.name} {product.price}
    </li>
  ));
  return <ul>{listItems}</ul>;
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};
