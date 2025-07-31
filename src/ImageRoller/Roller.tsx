import { Image } from './Image.tsx'
import JSX, { useCallback, useState, useEffect } from 'react'
import '../assets/GlobalColors.css'
import './Roller.css'
import { Header } from '../assets/header/Header.tsx';

interface columnData {
  startIndex: number;
  numOfColumns: number;
}

function Column(props: columnData) {
  return (
    <div className="col" style={{width: `${100/props.numOfColumns}%`}}>
      <Image positionNumber={3} index={props.startIndex} />
      <Image positionNumber={2} index={props.startIndex+1} /> 
      <Image positionNumber={1} index={props.startIndex+2} /> 
      <Image positionNumber={0} index={props.startIndex+3} /> 
    </div> 
  )
}

// max sizes for diffferent breakpoints, used to determine number of columns
const breakPoints = {
  Phone: 480, // 1
  Tablet: 768, // 2
  Computer: 1279, // 3
}

function Row() {
  // handles updating the component when the window resizes
  const [, updateState] = useState();
  // @ts-expect-error stfu it works
  const forceUpdate = useCallback(() => updateState({}), []);
  
  useEffect(() => {
    window.addEventListener('resize', forceUpdate);

    return () => {
      window.removeEventListener('resize', forceUpdate);
    }
  });
  // used to determine how many columns to show
  const wWidth = window.innerWidth;
  //console.log(wWidth);

  // @ts-expect-error JSX.Element is a type, stop complaining
  const tempColumns: JSX.Element[] | boolean[] = [true];
  for (const value in Object.values(breakPoints)) {
    if (wWidth >= +value) {
      tempColumns.push(true);
    }
  }
  
  // number of images = 4
  const columns = tempColumns.map((_, i) => <Column startIndex={i*4} numOfColumns={tempColumns.length} />);

  return (
    <div className='row'>
      {...columns}
    </div>
  );
}

function ImageRoller() {
  return (
    <>
      <Header />
      <div id="roller">
        <Row />
      </div>
    </>
  );
}

export default ImageRoller;