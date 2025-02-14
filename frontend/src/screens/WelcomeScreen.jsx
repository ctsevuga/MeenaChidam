import { Row, Col } from "react-bootstrap";

import { useGetCategoriesQuery } from "../slices/categoriesApiSlice";
import FormContainer from "../components/FormContainer";
import { useState, useEffect } from "react";
import "../components/UI/styles.css";
import Category from "../components/Category";
import { FaHandPointRight } from "react-icons/fa";

const WelcomeScreen = () => {
  const [categoryList, setCategoryList] = useState([]);

  const {
    data: categories,
    refetch,
    isLoading,
    error,
  } = useGetCategoriesQuery();
  // console.log(categoryList);
  useEffect(() => {
    if (categories) {
      setCategoryList(categories);
    }
  }, [categories, categoryList]);

  return (
    <>
      <header className="header">
        <div className="hero text-white pt-7">
          <div className="container-xxl margin-bottom: -500px">
            <div className="row">
              <div className="col-md-6">
                <div className="image-container mb-5 px-4">
                  <img
                    src="images/header-ebook.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-container p-4 d-flex flex-column justify-content-center h-100 mb-2">
                  <h5 className="display-7 fw-bold">
                    Welcome to MeenaChidam e-Commerce
                  </h5>
                  <Row>
                    <img
                      src="images/Sanacks-Collections.png"
                      alt=""
                      className="img-fluid roundedCircle width=50%"
                    />
                  </Row>

                  <section className="register text-success py-3 overflow-hidden">
                   
                    <Row>
                      {categoryList.map((category) => (
                        <Col key={category.id} sm={12} md={12} lg={12} xl={12}>
                          <Category category={category} />
                        </Col>
                      ))}
                    </Row>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default WelcomeScreen;
