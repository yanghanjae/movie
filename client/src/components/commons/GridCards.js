import { Col } from 'antd';
import React from 'react';

const GridCards = (props) => {
  if(props.landingPage) {
    // [LandingPage]  처리.
    return (
      <Col lg={4} md={6} sm={12} xs={24} >
        <div>
          <a href={`/movie/${props.movieId}`}>
            <img
              style={{
                width: '100%',
                
              }}
              src={props.path}
              alt={props.title}
              title={props.title}
              
            />
          </a>
  
          {props.title}
        </div>
      </Col>
    )
  } else {
    // [ Detail] 처리
    return (
      <Col lg={4} md={6} sm={12} xs={24} >
        <div>
          <img
              style={{
                width: '100%',
              }}
              src={props.path}
              alt={props.name}
              title={props.name}
          />
          {props.name}
        </div>
      </Col>
    )
  }
}

export default GridCards