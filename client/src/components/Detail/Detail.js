import { Button, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../Config';
import MainImage from '../LandingPage/Section/MainImage';
import ImageList from './ImageList';
import MovieInfo from './MovieInfo';
import axios from "axios";




const Detail = () => {
  const { movieId } = useParams()
  const navigate = useNavigate();

  // [state]
  const [Movie, setMovie] = useState({});
  const [Casts, setCasts] = useState([]);
  const [Crew, setCrew] = useState([]);
  const [ActorToggle, setActorToggle] = useState(false);
  const [CrewToggle, setCrewToggle] = useState(false);

  useEffect(() => {

    // [특정 영화 정보] URL
    let endpointinfo = `${API_URL}${movieId}?api_key=${API_KEY}`
    // console.log(endpointinfo)

    let endpointCrew = `${API_URL}${movieId}/credits?api_key=${API_KEY}`
    // console.log(endpointCrew)

    // [특정 영화 정보] 영화 아이디로 정보 요청
    // fetch(endpointinfo)
    //   .then(response => response.json())
    //   .then(response => {
    //     // console.log(response)
    //     setMovie(response);
    //   })

    axios(endpointinfo)
      .then(response => {
        setMovie(response.data);
      })

    // [출연진] 영화 배우, 제작진 정보 요청
    // fetch(endpointCrew)
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log(response.crew);
    //     setCasts(response.cast);
    //     return response.crew;
    //   })
    //   .then((response) => {  // 중복 되는 제작진 제거
    //     const idSave = new Set();
    //     const searchCrew = response.filter((crew) => {
    //       const isIn = idSave.has(crew.id);
    //       idSave.add(crew.id);
    //       return !isIn;
    //     })
    //     setCrew(searchCrew);
    //   })
    axios(endpointCrew)
      .then(response => {
        setCasts(response.data.cast);
        return response.data.crew;
      })
      .then((response) => {  // 중복 되는 제작진 제거
        const idSave = new Set();
        const searchCrew = response.filter((crew) => {
          const isIn = idSave.has(crew.id);
          idSave.add(crew.id);
          return !isIn;
        })
        setCrew(searchCrew);
      })
  }, []);

  //// 버튼 핸들러
  function toggleActorView() {
    // console.log('버튼클릭')
    setActorToggle(!ActorToggle)
    // console.log(ActorToggle)
  }

  function toggleCrewView() {
    setCrewToggle(!CrewToggle)
  }

  return (
    <>

      {/* Header */}
      {Movie && <MainImage image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
        title={Movie.title}
        overview={Movie.overview}
        tagline={Movie.tagline} />}

      {/* 영화 목록 버튼 */}
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Button onClick={() => navigate(-1)} > 영화 목록 </Button>
      </div>

      {/* Body */}
      <div style={{
        width: '85%',
        margin: '30px auto'
      }}>

        {/* Movie Info */}
        <MovieInfo movie={Movie} />
        <br />
        {/* Actors Grid */}
        <div style={{
          textAlign: 'center',
          margin: '30px',
        }}>
          <Button onClick={toggleActorView} style={{ margin: '0 30px' }} type={ActorToggle ? 'primary' : 'dashed'}> 배우 목록 </Button>
          <Button onClick={toggleCrewView} style={{ margin: '0 30px' }} type={CrewToggle ? 'primary' : 'dashed'}> 제작진 목록 </Button>
        </div>
        {ActorToggle && <div>
          <Divider style={{ border: '#0ff ' }}>배우 목록</Divider>
          <ImageList targets={Casts} />  </div>
        }
        {CrewToggle && <div>
          <Divider style={{ border: '#777' }}>제작진 목록</Divider>
          <ImageList targets={Crew} />
        </ div>}


      </div>

    </>
  )
}

export default Detail