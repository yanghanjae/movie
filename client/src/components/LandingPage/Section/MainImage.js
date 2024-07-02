import React from 'react';

function MainImage(props) {
  return (
    <div style={{
      position: 'relative',
      backgroundImage: `url(${props.image})`,
      width: '100%',
      height: '500px',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'

    }}>
      <div style={{
        position: 'absolute',
        color: ' #fff',
        maxWidth: '500px',
        bottom: '25px',
        left: '25px',
        textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'

      }}>
        <h2>{props.title}</h2>
        <h3 style={{ fontStyle: 'italic', fontWeight: 'bolder' }}>
          {props.tagline}
        </h3>
        <p>{props.overview}</p>
      </div>
    </div>
  )
}

export default MainImage