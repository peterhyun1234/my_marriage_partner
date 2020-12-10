import styles from '../../styles/forTemplate/first.module.css'
import { Button } from '@material-ui/core';

export default function FirstTemplate() {
    return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div className={styles.bigBox}>
          <p className={styles.title}>
            W&nbsp;&nbsp;E&nbsp;&nbsp;D&nbsp;&nbsp;D&nbsp;&nbsp;I&nbsp;&nbsp;N&nbsp;&nbsp;G 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            I&nbsp;&nbsp;N&nbsp;&nbsp;V&nbsp;&nbsp;I&nbsp;&nbsp;T&nbsp;&nbsp;A&nbsp;&nbsp;T&nbsp;&nbsp;I&nbsp;&nbsp;O&nbsp;&nbsp;N
          </p>
          <p className={styles.destDate}>
            11.28
          </p>
          <p>
            홍길동 그리고 김미정
          </p>
          <div>
            <img src="/main.jpg" alt="Vercel Logo" className={styles.mainImg} />
          </div>
          <p>
            2020년 11월 28일(토) 오후 3:30
          </p>
          <p>
            만동우프리미엄 / 3층 블라썸홀
          </p>
        </div>
        <div className={styles.smallBox}>
          <h1 className={styles.title}>
            초대합니다
          </h1>
          <p>invatation</p>          
          <br></br>
          <p>뭐라머라 와서 축하해주세요. 뭐라머라 와서 축하해주세요. 뭐라머라 와서 축하해주세요. 뭐라머라 와서 축하해주세요. 뭐라머라 와서 축하해주세요.</p>          
          <hr width ="90%" className={styles.sampleLine}></hr>
          <p>신랑 홍길동 + (전화 아이콘)</p>          
          <p>신부 전현빈 + (전화 아이콘)</p>          
        </div>
        <div className={styles.bigBox}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
        </div>
        <div className={styles.smallBox}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
    )
}