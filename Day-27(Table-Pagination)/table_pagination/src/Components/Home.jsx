import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Pagination from "react-bootstrap/Pagination";

const Home = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const getData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setData(response.data.products);
  };
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
  });
  return (
    <>
      <div className="container">
        <h1>Product List</h1>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Images</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, idx) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>
                        <img
                          src={item.thumbnail}
                          style={{ width: "100px", height: "100px" }}
                          alt={item.name}
                        ></img>
                      </td>
                    </tr>
                  </>
                );
              })
            ) : (
              <div className="d-flex justify-content-center mt-4 align-items-center">
                Loading...
                <Spinner animation="grow" />
              </div>
            )}
          </tbody>
        </table>
        <div className="d-flex justify-content-end">
          <Pagination>
            <Pagination.Prev onClick={handlePrevios} disabled={page === 1} />
            {Array(pageCount)
              .fill(null)
              .map((ele, index) => {
                return (
                  <>
                    <Pagination.Item
                      active={page === index + 1 ? true : false}
                      onClick={() => setPage(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  </>
                );
              })}
            <Pagination.Next
              onClick={handleNext}
              disabled={page === pageCount}
            />
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default Home;
