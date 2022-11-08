import React from 'react';
import { useState } from "react";
// import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.scss';
import '../styles/common.scss'

function Home() {
    const [names] = useState([
        'fabric'
    ]);
    
    return (
        <div className={[styles.index_page, styles.centered].join(' ')}>
            <h1 className={styles.font_size}>前端动效</h1>
            <pre className={styles.pre_content}>
                {
                    names.map((name, index) => {
                        return (<div className={styles.pre_item}>
                            <span className={['mr-2', 'op-5'].join(' ')}>{ index + 1 < 10 ? `00${index + 1}` : index + 1 <= 99 ? `0${index + 1}` : `${index + 1}` }</span>
                            <span>{ name }</span>
                        </div>)
                    })
                }
                
            </pre>
        </div>
    )
}

export default Home

