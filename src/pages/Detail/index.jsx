import React from "react";
import Header from "../../shared/components/Header";
import { Button, Container } from "reactstrap";
import {  useParams } from "react-router-dom";
import useAxios from "../../shared/hooks/useAxious";
import { getUsers, getUsersID } from "../../services/user";
import { useNavigate } from "react-router-dom";


const Detail = () => {
  const { id } = useParams();
  const { data, loading } = useAxios({ requestFn: () => getUsersID(id) });
  const usetInfo = data?.data;
  const Navigate =useNavigate()


  return (
    <>
      <Header />
      <Container>
        <div className="d-flex gap-4 m-5">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <div className="w-25">
                <img
                  className="img-fluid"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                  alt=""
                />
                <Button size="lg" color="dark" block onClick={()=>Navigate("setting")}>
                  setting
                </Button>
              </div>
              <div className="w-75">
                <p className="h1">{usetInfo?.name}</p>
                <p className="h2">{usetInfo?.email}</p>
                <p className="h4">{usetInfo?.phone}</p>
                <p className="h4">{usetInfo?.website}</p>
                <hr />
                <h2>Adress:</h2>
                <p className="h4">{usetInfo?.address.city}</p>
                <p className="h4">{usetInfo?.address.catchPhrase}</p>
                <p className="h4">{usetInfo?.address.name}</p>
                <hr />
                <h2>Company</h2>
                <p className="h4">{usetInfo?.company.name}</p>
                <p className="h4">{usetInfo?.company.catchPhrase}</p>
                <p className="h4">{usetInfo?.company.name}</p>
              </div>
            </>
          )}
        </div>
        <h1>Detail: {id}</h1>
      </Container>
    </>
  );
};

export default Detail;
