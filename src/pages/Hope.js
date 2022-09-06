import React from 'react';
import {useWindowSize} from '../hooks';

const Hope = () => {
  const size = useWindowSize();
  return <iframe title="Hope" src="3D/hope.html" style={{width: size.width, height: size.height}} />;
};
export default Hope;
