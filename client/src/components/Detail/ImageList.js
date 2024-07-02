import React from 'react'
import { Row } from 'antd'
import { IMAGE_BASE_URL } from '../Config'
import AntCard from '../commons/AntCard'

const ImageList = ({ targets }) => {
  return (
    <Row gutter={[20, 20]} >
      {targets.map(cast => {
        return (
          <React.Fragment key={cast.id}>
            {cast.profile_path &&
              <AntCard
                path={`${IMAGE_BASE_URL}w400${cast.profile_path}`}
                name={cast.name}
              />}
          </React.Fragment>
        )
      })}
    </Row>
  )
}

export default ImageList