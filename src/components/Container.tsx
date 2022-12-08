import React from 'react'
import "~/styles/components/Container.scss"

interface Props {
	children: React.ReactNode[] | React.ReactNode
}

function Container(props: Props) {
	return (<div className="container_box">
		{props.children}
	</div>)
}

export default Container