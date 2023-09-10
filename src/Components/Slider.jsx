import React from 'react'
import { Carousel } from 'react-bootstrap';
import Crlimg1 from './Images/Carousel/banner1.jpg';
import Crlimg2 from './Images/Carousel/pic1.jpeg';
import Crlimg3 from './Images/Carousel/pic2.jpeg';
import Crlimg4 from './Images/Carousel/pic3.jpeg';
import Crlimg5 from './Images/Carousel/pic4.jpeg';
import { HashLink as Link } from 'react-router-hash-link'


function Slider() {
  return (
    <div className='container'>
      <Carousel className=" custom-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src= {Crlimg1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src={Crlimg2}
            alt="Second slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src={Crlimg3}
            alt="Third slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src={Crlimg4}
            alt="Fourth slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src={Crlimg5}
            alt="Third slide"
          />
          
        </Carousel.Item>
      </Carousel>

        <div className='container text-center mt-3'> 
             <h4>Tourist Places To Tamil Nadu</h4> 
             <h4>Here Are The Top Places To Visit In Tamil Nadu In 2023</h4>
        </div>

        <div className="container anc1 mt-5">
  <div className="row text-center">
    <div className="col-sm">
      <Link to="#chennai" style={{ color: 'blue',textDecoration: 'none',fontWeight:'600'   }}>Chennai</Link>
    </div>
    <div className="col-sm">
      <Link to="#kodaikanal" style={{ color: 'blue',textDecoration: 'none' ,fontWeight:'600'  }}>Kodaikanal</Link>
    </div>
    <div className="col-sm">
      <Link to="#madurai" style={{ color: 'blue',textDecoration: 'none',fontWeight:'600'   }}>Madurai</Link>
    </div>
    <div className="col-sm">
      <Link to="#kumbakonam" style={{ color: 'blue',textDecoration: 'none' ,fontWeight:'600'  }}>Kumbakonam</Link>
    </div>
    <div className="col-sm">
      <Link to="#theni" style={{ color: 'blue',textDecoration: 'none',fontWeight:'600'   }}>Theni</Link>
    </div>
  </div>
</div>

<div className="container anc2 mt-1 mb-2">
  <div className="row text-center">
    <div className="col-sm">
      <Link to="#rameshwaram" style={{ color: 'blue',textDecoration: 'none',fontWeight:'600'  }}>Rameshwaram</Link>
    </div>
    <div className="col-sm">
      <Link to="#ooty" style={{ color: 'blue' ,textDecoration: 'none',fontWeight:'600'  }}>Ooty</Link>
    </div>
    <div className="col-sm">
      <Link to="#kanyakumari" style={{ color: 'blue',textDecoration: 'none',fontWeight:'600'   }}>Kanyakumari</Link>
    </div>
    <div className="col-sm">
      <Link to="#yercaud" style={{ color: 'blue',textDecoration: 'none',fontWeight:'600'   }}>Yercaud</Link>
    </div>
    <div className="col-sm">
      <Link to="#hogenakkal" style={{ color: 'blue' ,textDecoration: 'none',fontWeight:'600'  }}>Hogenakkal</Link>
    </div>
  </div>
</div>


    </div>

  );
}

export default Slider
