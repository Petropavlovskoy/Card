import React from "react";
import {Row} from 'reactstrap'
import NewsCard from "./NewsCard";

const NewsList = (props) => {
  const news = props.news;

  return <Row>
      {news.data.children && news.data.children.map((item) => {
        return <NewsCard news={item} key={item.data.title}></NewsCard>
      })}
    </Row>
  };

export default NewsList;