import React from 'react'

import Slider from './Slider';
import Chennai from './Chennai';
import Rameshwaram from './Rameshwaram';
import Kodaikanal from './Kodaikanal';
import Ooty from './Ooty';
import Kanyakumari from './Kanyakumari';
import Kumbakonam from './Kumbakonam';
import Madurai from './Madurai';
import Yercaud from './Yercaud';
import Theni from './Theni';
import Hogenakal from './Hogenakal';

export default function Home() {
  return (
    <div>
        <Slider/>
        <Chennai/>
        <Rameshwaram/>
        <Kodaikanal/>
        <Ooty/>
        <Kanyakumari/>
        <Kumbakonam/>
        <Madurai/>
        <Yercaud/>
        <Theni/>
    <Hogenakal/>
    </div>
  )
}
