import React from 'react'
import './TimeToVisit.css';
import Introbtv from './Introbtv'

import Rameswaram from './Ramanathapurambtv';
import Kodaikanal from './Kodaikanalbtv';
import Ooty from './Ootybtv';
import Kanyakumari from './Kanyakumaribtv';
import Kumbakonam from './Kumbakonambtv';
import Chennai from './Chennaibtv';
import Madurai from './Maduraibtv';
import Yercaud from './Yercaudbtv';
import Theni from './Thenibtv';
import Hogenkkal from './Hogenakkalbtv';

function Besttimevisit() {
  return (
 <div>
       
     <Introbtv/>
     <Chennai/>
     <Rameswaram/>
     <Kodaikanal/>
     <Ooty/>
     <Kanyakumari/>
     <Kumbakonam/>
     <Madurai/>
     <Yercaud/>
     <Theni/>
     <Hogenkkal/>

 </div>
  )
}

export default Besttimevisit