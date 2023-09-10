import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import i1 from './Imgpackages/Ooty/Ooty.jpeg';
import i2 from './Imgpackages/Chennai/Chennai.jpeg';
import i3 from './Imgpackages/Kodaikanal/Kodaikanal.jpeg';
import i4 from './Imgpackages/Yercaud/Yarcaud.jpeg';
import i5 from './Imgpackages/Kanyakumari/Kanyakumari.jpeg';
import i6 from './Imgpackages/Theni/Theni.jpeg';

export default function Package1() {
  return (
    <div>
 <Container>
       
       <h3 className='mt-5 text-center'>Tourist Packages Affordable</h3>
 {/* 1st row */}
      <Row className='mt-5 mb-4'style={{ justifyContent: 'space-between' }}>

            <Col xs={3} className='col-package' >
                <h5 className='text-center mt-3 mb-3'>Ooty Chronicles</h5>
                <img  className='img-package' src={i1}  alt="Ooty" />
                
                 <Row className="text-center pt-2">
                      <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-flight-100.png")}/></Col>
                      <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-hotel-64.png")}/></Col>
                      <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-skiing-100.png")}/></Col>
                      <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-car-64.png")}/></Col>
                 </Row>
                 <Row className='text-center mb-3'>
                  <Col style={{ fontSize: '11px' }}>2 Flights</Col>
                  <Col style={{ fontSize: '11px' }}>3 Hotels</Col>
                  <Col style={{ fontSize: '11px' }}>5 Activities</Col>
                  <Col style={{ fontSize: '11px' }}>2 Transfers</Col>
                 </Row>
                 <h6><span style={{color:'red'}}>2N</span> Ooty |<span style={{color:'red'}}>  2D</span> Ooty  </h6>
                  <Row className='mt-4'>
                      <Col xs={7}>
                         <ul style={{fontSize:'14px'}}>
                          <li> Botanical Gardens</li>
                          <li>Emerald Lake</li>
                          <li>Dolphin's Nose</li>                        
                         </ul>
                      </Col>
                      <Col xs={5}>
                          <h5 style={{ margin: '0', padding: '0' }}><b><i>Rs 13,000</i></b></h5>
                          <h6 style={{ margin: '0', padding: '0' }}><i>per person</i></h6>
                          <button className='btn-package'>Book</button>
                      </Col>
                  </Row>
            </Col>

            <Col xs={3} className='col-package' >
                <h5 className='text-center mt-3 mb-3'>Chennai Delights</h5>
                <img  className='img-package' src={i2}  alt="chennai" />
                
                 <Row className="text-center pt-2">
                      <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-flight-100.png")}/></Col>
                      <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-hotel-64.png")}/></Col>
                      <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-skiing-100.png")}/></Col>
                      <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-car-64.png")}/></Col>
                 </Row>
                 <Row className='text-center mb-3'>
                  <Col style={{ fontSize: '11px' }}>3 Flights</Col>
                  <Col style={{ fontSize: '11px' }}>5 Hotels</Col>
                  <Col style={{ fontSize: '11px' }}>4 Activities</Col>
                  <Col style={{ fontSize: '11px' }}>3 Transfers</Col>
                 </Row>
                 <h6><span style={{color:'red'}}>2N</span> Chennai |<span style={{color:'red'}}>  3D</span> Chennai  </h6>
                  <Row className='mt-4'>
                      <Col xs={7}>
                         <ul style={{fontSize:'14px'}}>
                          <li> Marina Beach</li>
                          <li>MGR Flim City</li>
                          <li>Marundeeswarar Temple</li>                        
                         </ul>
                      </Col>
                      <Col xs={5}>
                          <h5 style={{ margin: '0', padding: '0' }}><b><i>Rs 14,500</i></b></h5>
                          <h6 style={{ margin: '0', padding: '0' }}><i>per person</i></h6>
                          <button className='btn-package'>Book</button>
                      </Col>
                  </Row>
            </Col>

            <Col xs={3} className='col-package' >
                <h5 className='text-center mt-3 mb-3'>Kodaikanal Adventure</h5>
                <img  className='img-package' src={i3}  alt="kodaikanal" />
                
                 <Row className="text-center pt-2">
                      <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-flight-100.png")}/></Col>
                      <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-hotel-64.png")}/></Col>
                      <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-skiing-100.png")}/></Col>
                      <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-car-64.png")}/></Col>
                 </Row>
                 <Row className='text-center mb-3'>
                  <Col style={{ fontSize: '11px' }}>1 Flight</Col>
                  <Col style={{ fontSize: '11px' }}>3 Hotels</Col>
                  <Col style={{ fontSize: '11px' }}>6 Activities</Col>
                  <Col style={{ fontSize: '11px' }}>3 Transfers</Col>
                 </Row>
                 <h6><span style={{color:'red'}}>1N</span> Kodaikanal |<span style={{color:'red'}}>  2D</span> Kodaikanal  </h6>
                  <Row className='mt-4'>
                      <Col xs={7}>
                         <ul style={{fontSize:'14px'}}>
                          <li> Green Valley View</li>
                          <li>Kodai Lake</li>
                          <li>Bear Shola Falls</li>                        
                         </ul>
                      </Col>
                      <Col xs={5}>
                          <h5 style={{ margin: '0', padding: '0' }}><b><i>Rs 12,000</i></b></h5>
                          <h6 style={{ margin: '0', padding: '0' }}><i>per person</i></h6>
                          <button className='btn-package'>Book</button>
                      </Col>
                  </Row>
            </Col>

      </Row>
 {/* 2nd row */}
      <Row className='mt-5 mb-4'style={{ justifyContent: 'space-between' }}>

          <Col xs={3} className='col-package' >
              <h5 className='text-center mt-3 mb-3'>Yercaud Serenity</h5>
              <img  className='img-package' src={i4}  alt="Yercaud" />
              
              <Row className="text-center pt-2">
                    <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-flight-100.png")}/></Col>
                    <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-hotel-64.png")}/></Col>
                    <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-skiing-100.png")}/></Col>
                    <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-car-64.png")}/></Col>
              </Row>
              <Row className='text-center mb-3'>
                <Col style={{ fontSize: '11px' }}>1 Flight</Col>
                <Col style={{ fontSize: '11px' }}>3 Hotels</Col>
                <Col style={{ fontSize: '11px' }}>4 Activities</Col>
                <Col style={{ fontSize: '11px' }}>3 Transfers</Col>
              </Row>
              <h6><span style={{color:'red'}}>1N</span> Yercaud |<span style={{color:'red'}}>  2D</span> Yercaud  </h6>
                <Row className='mt-4'>
                    <Col xs={7}>
                      <ul style={{fontSize:'14px'}}>
                        <li> Pagoda Point</li>
                        <li>Emerald Lake</li>
                        <li>Botanical Garden</li>                        
                      </ul>
                    </Col>
                    <Col xs={5}>
                        <h5 style={{ margin: '0', padding: '0' }}><b><i>Rs 12,500</i></b></h5>
                        <h6 style={{ margin: '0', padding: '0' }}><i>per person</i></h6>
                        <button className='btn-package'>Book</button>
                    </Col>
                </Row>
          </Col>

          <Col xs={3} className='col-package' >
              <h5 className='text-center mt-3 mb-3'>Kanyakumari Horizons</h5>
              <img  className='img-package' src={i5}  alt="kanyakumari" />
              
              <Row className="text-center pt-2">
                    <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-flight-100.png")}/></Col>
                    <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-hotel-64.png")}/></Col>
                    <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-skiing-100.png")}/></Col>
                    <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-car-64.png")}/></Col>
              </Row>
              <Row className='text-center mb-3'>
                <Col style={{ fontSize: '11px' }}>3 Flights</Col>
                <Col style={{ fontSize: '11px' }}>5 Hotels</Col>
                <Col style={{ fontSize: '11px' }}>4 Activities</Col>
                <Col style={{ fontSize: '11px' }}>3 Transfers</Col>
              </Row>
              <h6><span style={{color:'red'}}>3N</span> Kanyakumari |<span style={{color:'red'}}>  2D</span> Kanyakumari  </h6>
                <Row className='mt-4'>
                    <Col xs={7}>
                      <ul style={{fontSize:'14px'}}>
                        <li> Kanyakumari Beach</li>
                        <li>Vivekananda Memorial</li>
                        <li>Thirparappu Falls</li>                        
                      </ul>
                    </Col>
                    <Col xs={5}>
                        <h5 style={{ margin: '0', padding: '0' }}><b><i>Rs 16,250</i></b></h5>
                        <h6 style={{ margin: '0', padding: '0' }}><i>per person</i></h6>
                        <button className='btn-package'>Book</button>
                    </Col>
                </Row>
          </Col>

          <Col xs={3} className='col-package' >
              <h5 className='text-center mt-3 mb-3'>Theni Odyssey</h5>
              <img  className='img-package' src={i6}  alt="Theni" />
              
              <Row className="text-center pt-2">
                    <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-flight-100.png")}/></Col>
                    <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-hotel-64.png")}/></Col>
                    <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-skiing-100.png")}/></Col>
                    <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-car-64.png")}/></Col>
              </Row>
              <Row className='text-center mb-3'>
                <Col style={{ fontSize: '11px' }}>2 Flights</Col>
                <Col style={{ fontSize: '11px' }}>4 Hotels</Col>
                <Col style={{ fontSize: '11px' }}>6 Activities</Col>
                <Col style={{ fontSize: '11px' }}>3 Transfers</Col>
              </Row>
              <h6><span style={{color:'red'}}>1N</span> Theni |<span style={{color:'red'}}>  2D</span> Theni  </h6>
                <Row className='mt-4'>
                    <Col xs={7}>
                      <ul style={{fontSize:'14px'}}>
                        <li> Chinna Suruli Falls</li>
                        <li>Kumbakkarai Falls</li>
                        <li>Meghamalai</li>                        
                      </ul>
                    </Col>
                    <Col xs={5}>
                        <h5 style={{ margin: '0', padding: '0' }}><b><i>Rs 11,000</i></b></h5>
                        <h6 style={{ margin: '0', padding: '0' }}><i>per person</i></h6>
                        <button className='btn-package'>Book</button>
                    </Col>
                </Row>
          </Col>

      </Row>

</Container>
        
    </div>

  )
}
