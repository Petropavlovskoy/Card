import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import useAxios from "axios-hooks";
import NewsList from "./NewsList";
import './styles/newsComponent.css';


const menuItems = [
  { nature: "earthPort" },
  { card: "Autos" },
  { people: "portraits" },
  { other: "photocritique" },
];

const NewComponent = (param) => {
  const [activeTab, setActiveTab] = useState('earthPort');

  //создаём запрос 
  //  loading - true когда данные запрашиваются и ещё не пришли
  // error - если данные запросились и что-то пошло не так
  // data: news - данные которые пришли
  const [{ data: news, loading, error }, refetch] = useAxios(
    `https://reddit.com/r/${activeTab}/top.json?limit=30`
  );

  console.log(news);

  return (
    <Container>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} style={{ padding: "0px" }}>
          <h1>Hello</h1>
          <h5>Here you can find beautiful news</h5>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 8, offset: 1 }} style={{ padding: "0px" }}>
          Cards
         {/*  Делаем проверку на то что это не загрузка
          то что данные существуют тогда рисуем список карточек */}
          {!loading && news && <NewsList news={news} />}
        </Col>
        <Col sm={{size: 2}} style={{ padding: "0px" }}>
          <ul>
            {menuItems.map((tab, i) =>{
              return(
                <li
                key = {i}
                className={Object.values(tab)[0] === activeTab ? 'active' : undefined}
                onClick = {() =>{
                  setActiveTab(Object.values(tab) [0]);
                  refetch();
                }}
                >
                  {Object.keys(tab)}
                </li>
              )
            } )}
          </ul>
          </Col>
      </Row>
    </Container>
  );
};

export default NewComponent;


