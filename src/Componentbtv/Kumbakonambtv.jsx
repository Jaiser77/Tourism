import React, { useState } from 'react';
import { Row,Col } from 'react-bootstrap'
import {Button,Offcanvas } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import Kumbakonam1 from './Imagesbtv/Kumbakonam/kumbakonam1.jpeg'
import Kumbakonam2 from './Imagesbtv/Kumbakonam/kumbakonam2.jpeg'
import Kumbakonam3 from './Imagesbtv/Kumbakonam/kumbakonam3.jpeg'

const Kumbakonam = () => {

    const [isModalOpen] = useState(false);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  
    const handleOpen = () => {
       setIsOffcanvasOpen(true);
    };
  
    const handleClose = () => {
      setIsOffcanvasOpen(false);
    };


  return (
    <div className='container dist2'>
      <h3 className='besttimetovisit-primary-heading' style={{ marginBottom: '0.2rem' }}>06. Kumbakonam</h3>
      <Row className="align-items-center">
        <Col md={6}> 
          <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
            >
            <Modal.Dialog show={isModalOpen} onHide={handleClose} backdrop={false}>
            <Modal.Header closeButton>
                <Modal.Title className='text-center modal-heading'><div className='ooty-heading'><b>More About Best Time To Travel To Kumbakonam</b></div></Modal.Title>
              </Modal.Header>
              <Modal.Body className=''>
                <div className='modal-img'>
                  <div className='row'>
                    <div className='col-sm-4'>
                    <img 
                        src={Kumbakonam1} 
                        alt="Dawn Source_img"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                    />
                    <p className='text-center'>Dawn <br />Source</p>
                    </div>
                    <div className='col-sm-4'>
                    <img 
                        src={Kumbakonam2} 
                        alt="Steemit Source-img"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                    />
                    <p className='text-center'>Steemit Source</p>
                    </div>
                    <div className='col-sm-4'>
                    <img 
                    src={Kumbakonam3} 
                    alt="Holydham Source_img"
                    className=''
                    style={{width:'100px',height:'150px'}}
                    />  
                    <p className='text-center'>Holydham Source</p>
                    </div>
                  </div>
                </div>
                 
                
                
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} style={{ fontWeight: 'bold' }}>Close</Button>
                <Button variant="primary" onClick={handleOpen} style={{ fontWeight: 'bold' }}>Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>

                    
            {/* Offcanvas */}
            <Offcanvas show={isOffcanvasOpen} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <div className='offcanvas-titlek'>
                <Offcanvas.Title className='offcanvas-title2'>Best Time To Visit In Kumbakonam</Offcanvas.Title>
                </div>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <h4 className='season-title'>Kumbakonam in Winter (October - February)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                The winters in Kumbakonam are pleasantly cold, with light sweaters helping you to survive the cold. The temperature ranges from 15 to 25 degrees Celcius, and the diurnal range of temperature isn't more than a maximum of 10 degrees Celcius. This season is most preferred by tourists to visit Kumbakonam, as exploring the city in this weather becomes comfortable and the temperature is pleasing most of the time during winter months
                </p>
                <h4 className='season-title'>Kumbakonam in Monsoon (June - August)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                The monsoon is associated with frequent and untimely shower spells in the region. The temperature drops down considerably after the scorching summers and the place witness a waste stretch of greenery as the rains give life to the flora of the region. The rains can though be problematic at times and can interfere with your exploration plans, but overall this season can also be preferred by tourists to pay a visit to Kumbakonam.
                </p>
                <h4 className='season-title'>Kumbakonam in Summer (March - May)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                Summers in the Deccan region of the country is undeniable hot, and the scorching sun might be an unpleasant experience. The summers are usually arid and heated up, and the temperature goes up to 40 degrees Celcius during the day. The season is majorly avoided by tourists to plan a visit to Kumbakonam because of the overall weather conditions.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
       </Col>
       <Col md={6}  className="text-right" >
             <h5 className='besttimetovisit-primary-sub-heading'>What is the best time to visit:</h5>
             <div className='dist-content1'>
             <p className='besttimetovisit2-text'> 
             The best time to visit Ooty is throughout the year as the weather is pleasant and great for sightseeing. The temperature usually ranges from 5-15 degrees throughout the year with colder nights. However, the peak season is from October to June when the weather is pleasant and you can get involved in outdoor activities. Ooty can be visited during monsoons (if you don't mind the rain) when the freshly washed surroundings give Ooty an ethereal charm. The annual Tea and Tourism Festival attracts crowds in huge numbers to visit the place and have a great time in this wonderful place.
             </p>
             <div className='dist-content2'>
             <p className='besttimetovisit2-text besttimetovisit-bottomtext'>
             The poised and elegant Queen of Hill Stations' welcomes you to the kingdom in the clouds. Individuals travel far and wide to partake in the awe-inspiring wonders of one of India's most beloved hill stations - Ootacamund or Ooty. Here, history and culture form a sweet medley, while nature sings to its own symphony. Colonial churches, Hindu temples, tribal museums and libraries brand the plains with stories.
             </p>
             </div>
             </div>
          </Col>
       </Row>
    </div>
  )
}

export default Kumbakonam