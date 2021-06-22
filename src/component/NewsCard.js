import React, { useState } from "react";
import {CardBody, Card, CardImg, CardText, CardTitle, Col} from 'reactstrap'

const NewsCard = (props) => {
  const news = props.news.data;
const [isImgLoaded, setIsImgLoaded] = useState(true);
return (
  isImgLoaded && (
    <Col sm={6}>
    <Card>
      <CardImg
      top
      wifth = "100%"
      src = {news.url}
      alt = "card image"
      onError = { () => setIsImgLoaded (false)}
      >
{/* 
onError - нужно для того чтб не загружать изображения которые 
не могут адресоваться */}
      </CardImg>
      <CardBody>
<CardTitle> {news.title} </CardTitle>
<CardText> {news.author}</CardText>


      </CardBody>
    </Card>
  </Col>
  )
 
)
  }

export default NewsCard 