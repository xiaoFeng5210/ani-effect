import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../styles/Home.module.scss';

interface AppProps {
    names?: string[],
    children?: React.ReactNode
}

function Names({names}: AppProps) {
    return (
        <>
            {
                (names && names.length > 0) &&
                names.map((name, index) => {
                    return (<div className={styles.pre_item} key={index}>
                        <Link style={{textDecoration: 'none'}} to={String(index + 1)}>
                            <span
                                className={['mr-2', 'op-5'].join(' ')}>{index + 1 < 10 ? `00${index + 1}` : index + 1 <= 99 ? `0${index + 1}` : `${index + 1}`}</span>
                            <span>{name}</span>
                        </Link>

                    </div>)
                })
            }
        </>
    )
}

export default Names