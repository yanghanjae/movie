import { Card, Col } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const AntCard = (props) => {
  const navigate = useNavigate();
  // [LandingPage] 처리
  if (props.landingPage) {
    return (
      <Col lg={4} md={6} sm={12} xs={24} >
        <Card hoverable
          style={{ width: '100%' }}
          cover={<img alt={props.title} src={props.path} />}
          onClick={() => navigate(`/detail/${props.movieId}`)}
        >
          <Meta title={props.title} />
        </Card>
      </Col>
    )
  } else {
    // [ Detail] 처리
    return (
      <Col lg={4} md={6} sm={12} xs={24} >
        <Card hoverable
          cover={<img alt={props.name}
            src={props.path} />}
        >
          <Meta title={props.name} />
        </Card>
      </Col>
    )
  }
}

export default AntCard