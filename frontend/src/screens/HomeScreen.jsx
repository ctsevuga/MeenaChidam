import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
// import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';

import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';

const HomeScreen = () => {
  const { CategoryNo} = useParams();
  console.log(CategoryNo);
  const [keyword, setKeyword] = useState(true);
  const { data, isLoading, error } = useGetProductsQuery(CategoryNo);
  console.log(data)

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1>Latest Products</h1>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>NAME</th>
                <th>PRICE</th>
                
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* {data?.products?.map((product) => ( */}

              {data?.map((product) => (
                <tr key={product._id}>
                  {/* <td>{product._id}</td> */}
                  <td>{product.name}</td>
                  <td>₹ {product.price}</td>
                  
                  <td>
                    <LinkContainer to={`/product/${product._id}`}>
                      <Button variant='dark' className='text-white btn-sm mx-2'>
                        View
                      </Button>
                    </LinkContainer>
 
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          /> */}
        </>
      )}
    </>
  );
};

export default HomeScreen;
