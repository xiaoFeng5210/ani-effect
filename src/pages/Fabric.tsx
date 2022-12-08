import React, {useCallback, useEffect} from 'react';
import '../styles/Fabric.scss'
import {Button} from "@arco-design/web-react";

function Fabric() {
	const [count, setCount] = React.useState(0);
	useEffect(() => {
		console.log('count:', count)
	}, [count]);
	const handleSetCount = useCallback(() => {
		setCount(n => n + 1)
	}, [count]);

	return (
		<div className="fabric_box">
			<Button onClick={() => handleSetCount()}>{`测试按钮${count}`}</Button>
		</div>
	);
}

export default Fabric;