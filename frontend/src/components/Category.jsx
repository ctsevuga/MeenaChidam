import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    
    <Card className="w-120 h-50 mb-1 rounded">
      <Card.Body>
        <Link to={`/home/${category.CategoryNo}`}>
          <Card.Title as="div" className="product-title">
            <strong>{category.Category}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
   
  );
};

export default Category;
