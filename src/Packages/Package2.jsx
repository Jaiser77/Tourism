import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import i1 from './Imgpackages/Ooty/ooty1 (2).jpeg';
import i2 from './Imgpackages/Madurai/Madurai.jpeg';
import i3 from './Imgpackages/Hogenakkal/hogenakkal3.jpeg';
export default function Package2() {
  return (
    <div> 
         <h3 className='mt-5 text-center'>Tourist Packages Premium</h3>
         <Container>
            <Row className='mt-5 mb-5'style={{ justifyContent: 'space-between' }}>
                  <Col xs={3} className='col-package pb-3' >
                      <h5 className='text-center mt-4 mb-4'>Ooty & Kodaikanal</h5>
                      <img  className='img-package' src={i1}  alt="Ooty&Kodaikanal" />
                      
                      <Row className="text-center pt-2">
                            <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-flight-100.png")}/></Col>
                            <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-hotel-64.png")}/></Col>
                            <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-skiing-100.png")}/></Col>
                            <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-car-64.png")}/></Col>
                      </Row>
                      <Row className='text-center mb-3'>
                        <Col style={{ fontSize: '11px' }}>3 Flights</Col>
                        <Col style={{ fontSize: '11px' }}>4 Hotels</Col>
                        <Col style={{ fontSize: '11px' }}>7 Activities</Col>
                        <Col style={{ fontSize: '11px' }}>4 Transfers</Col>
                      </Row>
                      <h6><span style={{color:'red'}}>2N</span> Ooty |<span style={{color:'red'}}>  3D</span> Ooty  </h6>
                      <h6><span style={{color:'red'}}>2N</span> Kodaikanal |<span style={{color:'red'}}>  2D</span> Kodaikanal </h6>
                        <Row className='mt-4'>
                            <Col xs={7}>
                              <ul style={{fontSize:'14px'}}>
                                <li> Botanical Gardens</li>
                                <li>Emerald Lake</li>
                                <li>Dolphin's Nose</li> 
                                <li>etc..</li>                        
                              </ul>
                            </Col>
                            <Col xs={5}>
                                <h5 style={{ margin: '0', padding: '0' }}><b><i>Rs 24,000</i></b></h5>
                                <h6 style={{ margin: '0', padding: '0' }}><i>per person</i></h6>
                                <button className='btn-package'>Book</button>
                            </Col>
                        </Row>
                  </Col>

                  <Col xs={3} className='col-package pb-3' >
                      <h5 className='text-center mt-3 mb-3'>Madurai & Kumbakonam</h5>
                      <img  className='img-package' src={i2}  alt="Madurai&Kumbakonam" />
                      
                      <Row className="text-center pt-2">
                            <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-flight-100.png")}/></Col>
                            <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-hotel-64.png")}/></Col>
                            <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-skiing-100.png")}/></Col>
                            <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-car-64.png")}/></Col>
                      </Row>
                      <Row className='text-center mb-3'>
                        <Col style={{ fontSize: '11px' }}>4 Flights</Col>
                        <Col style={{ fontSize: '11px' }}>6 Hotels</Col>
                        <Col style={{ fontSize: '11px' }}>7 Activities</Col>
                        <Col style={{ fontSize: '11px' }}>5 Transfers</Col>
                      </Row>
                      <h6><span style={{color:'red'}}>1N</span> Kumbakonam |<span style={{color:'red'}}>  2D</span> Kumbakonam </h6>
                      <h6><span style={{color:'red'}}>2N</span> Madurai |<span style={{color:'red'}}>  2D</span> Madurai </h6>
                        <Row className='mt-4'>
                            <Col xs={7}>
                              <ul style={{fontSize:'14px'}}>
                                <li> Vaigai Dam</li>
                                <li>Meghamalai</li>
                                <li>Sarangapani Temple</li> 
                                <li>etc..</li>                        
                              </ul>
                            </Col>
                            <Col xs={5}>
                                <h5 style={{ margin: '0', padding: '0' }}><b><i>Rs 23,000</i></b></h5>
                                <h6 style={{ margin: '0', padding: '0' }}><i>per person</i></h6>
                                <button className='btn-package'>Book</button>
                            </Col>
                        </Row>
                  </Col>

                  <Col xs={3} className='col-package pb-3' >
                      <h5 className='text-center mt-3 mb-3'>Yercaud & Hogenakkal</h5>
                      <img  className='img-package' src={i3}  alt="Yercaud&Hogenakkal" />
                      
                      <Row className="text-center pt-2">
                            <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-flight-100.png")}/></Col>
                            <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-hotel-64.png")}/></Col>
                            <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-skiing-100.png")}/></Col>
                            <Col><img className='img-package-icons' src={require("./Imgpackages/icons8-car-64.png")}/></Col>
                      </Row>
                      <Row className='text-center mb-3'>
                        <Col style={{ fontSize: '11px' }}>3 Flights</Col>
                        <Col style={{ fontSize: '11px' }}>5 Hotels</Col>
                        <Col style={{ fontSize: '11px' }}>6 Activities</Col>
                        <Col style={{ fontSize: '11px' }}>5 Transfers</Col>
                      </Row>
                      <h6><span style={{color:'red'}}>2N</span> Yercaud |<span style={{color:'red'}}>  1D</span> Yercaud </h6>
                      <h6><span style={{color:'red'}}>2N</span> Hogenakkal |<span style={{color:'red'}}>  3D</span> Hogenakkal </h6>
                        <Row className='mt-4'>
                            <Col xs={7}>
                              <ul style={{fontSize:'14px'}}>
                                <li> Pagoda Point</li>
                                <li>Emerald Lake</li>
                                <li>Hogenakkal Falls</li> 
                                <li>etc..</li>                        
                              </ul>
                            </Col>
                            <Col xs={5}>
                                <h5 style={{ margin: '0', padding: '0' }}><b><i>Rs 22,500</i></b></h5>
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
