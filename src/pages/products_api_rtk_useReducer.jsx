import CardHeader from "../components/elements/card_products/header";
import CardFooter from "../components/elements/card_products/footer";
import CardBody from "../components/elements/card_products/body";
import CardProducts from "../components/fragments/cardProducts";
import { useState, useEffect, Fragment } from "react";
import { getProducts } from "../utils/api";
import CartsProductsUseReducer from "../components/fragments/cartsProductsUseReducer";
import { useDispatch } from "react-redux";
import cartSlice from "../redux/cartSlice";
import Navbar from "../components/fragments/navbar";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";
import productSlice from "../redux/productSlice";

const ThunkFunctionProduct = (setLoading) => {
  return async (dispatch) => {
    const response = await getProducts();
    const products = await response.json();
    dispatch(productSlice.actions.receiveProduct(products));
    setLoading(false);
  };
};
const ProductApiRTKUseReducerPage = () => {
  useAuth("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((data) => data.products);

  const HandlerCarts = (id) => {
    dispatch(cartSlice.actions.addCarts({ id }));
  };

  useEffect(() => {
    dispatch(ThunkFunctionProduct(setLoading));
  }, []);

  return (
    <Fragment>
      {loading ? (
        <p>Loading data</p>
      ) : (
        <div>
          <Navbar />
          <div className="flex">
            <div className="flex gap-3 flex-wrap p-5 w-8/12">
              {products.map((product) => {
                return (
                  <CardProducts key={product.id}>
                    <CardHeader image={product.image} />
                    <CardBody
                      name={product.title}
                      description={product.description}
                    />
                    <CardFooter
                      price={product.price}
                      id={product.id}
                      HandlerCarts={HandlerCarts}
                    />
                  </CardProducts>
                );
              })}
            </div>
            <CartsProductsUseReducer products={products} loading={loading} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProductApiRTKUseReducerPage;
