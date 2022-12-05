import React, {useEffect} from 'react';
import '../styles/Fabric.scss'

function Fabric() {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    console.log('count:', count)
  }, [])
  return (
    <div className="fabric_box">
      
    </div>
  );
}

export default Fabric;