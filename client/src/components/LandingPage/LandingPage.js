import { Button, Row } from 'antd';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../Config';
import AntCard from '../commons/AntCard';
import MainImage from './Section/MainImage';

function LandingPage() {
  const navigate = useNavigate();

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const page = 1
    fetchMovies(page);
  }, [])

  const loadMoreItems = () => {
    console.log('클릭')
    fetchMovies(CurrentPage + 1);
  };

  return (
    <>
      <div style={{ width: '100%' }}>
        {/* Main Image */}
        {MainMovieImage &&
          <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
            title={`${MainMovieImage.title}`}
            overview={MainMovieImage.overview} />}

        <div style={{ width: '85%', margin: '1rem auto', position: 'relative' }}>
          <h2 style={{ display: 'inline' }}> 새로 나온 영화</h2>
          <Button onClick={() => navigate(1)} style={{ position: 'absolute', right: '0' }} > 다음 페이지 </Button>
          <hr />

          {/* Movie Grid Card  */}
          <Row gutter={[10, 10]}>
            {Movies.map(movie => {
              return (
                <React.Fragment key={movie.id}>
                  <AntCard
                    landingPage
                    path={`${IMAGE_BASE_URL}w400${movie.poster_path}`}
                    title={movie.title}
                    movieId={movie.id}
                  />
                </React.Fragment>
              )
            })}
          </Row>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <button onClick={loadMoreItems}> 더보기 </button>
        </div>
      </div>
    </>

  )

  function fetchMovies(page) {
    const endpoint = `${API_URL}/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

    axios(endpoint)
      .then(response => {
        setMovies([...Movies, ...response.data.results]);
        setMainMovieImage(response.data.results[0]);
        setCurrentPage(response.data.page)
      })
  }
}

export default LandingPage