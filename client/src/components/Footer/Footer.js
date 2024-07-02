import { MehOutlined }from '@ant-design/icons';


function Footer() {
  return (
    <div style={{
      backgroundColor : '#001529',
      color : '#fff' ,
      height : '80px',
      alignItems : 'center',
      justifyContent : 'center',
      display : 'grid',
      fontSize : '1rem'
    }} >
      <p> <MehOutlined spin /> HIMEDIA <MehOutlined spin />  </p>
    </div>

  );
  
}

export default Footer;