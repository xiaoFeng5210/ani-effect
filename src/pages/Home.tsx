import React, {useState} from 'react';
import styles from '../styles/Home.module.scss';
import '../styles/common.scss'
import Names from "../components/home/Names";

function Home() {
    const [names] = useState([
        'fabric',
        '画板'
    ]);

    return (
        <div className={[styles.index_page, styles.centered].join(' ')}>
            <h1 className={styles.font_size}>Originality</h1>
            <pre className={styles.pre_content}>
               <Names names={names}/>
            </pre>
        </div>
    )
}

export default Home

