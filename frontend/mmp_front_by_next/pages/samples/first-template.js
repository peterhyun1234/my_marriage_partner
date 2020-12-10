import styles from '../../styles/forTemplate/first.module.css'
import { Button } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];



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
          <p className={styles.boxTitle}>
            초대합니다
          </p>
          <p className={styles.boxSubTitle}>
            I&nbsp;&nbsp;N&nbsp;&nbsp;V&nbsp;&nbsp;I&nbsp;&nbsp;T&nbsp;&nbsp;A&nbsp;&nbsp;T&nbsp;&nbsp;I&nbsp;&nbsp;O&nbsp;&nbsp;N
          </p>        
          <br></br>
          <div className={styles.boxContents}>
            <p className={styles.boxText}>사랑은 소유가 아니라</p>
            <p className={styles.boxText}>동행임을 아는 두 사람은</p>
            <p className={styles.boxText}>잡은 손을 놓지 않되</p>
            <p className={styles.boxText}>함부로 잡아 끌지 않을 것이며</p>
            <p className={styles.boxText}>서로의 두 눈을 고요히 바라보아</p>
            <p className={styles.boxText}>말하지 않아도 같은 쪽으로 걸어가리라</p>
            <p className={styles.boxText}>'아름다운 날에 부치다' 박미라</p>
            <br></br>
            <p className={styles.boxText}>가을에 맺어진 인연이</p>
            <p className={styles.boxText}>가을에 동행을 시작하려고 합니다.</p>
            <p className={styles.boxText}>그 시작에 응원의 걸음을 청합니다.</p>
            <br></br>
            <p className={styles.boxText}>* 코로나19로 참석이 어려우신 분들은</p>
            <p className={styles.boxText}>마음으로 축하해주시면 감사하겠습니다.</p>
            <br></br>
          </div>
            
          <hr width ="90%" className={styles.sampleLine}></hr>
          <div>
            <span className={styles.boxText}>신랑 홍길동 </span>
            <button className={styles.phoneBtnMan}>
              <PhoneIcon/>
            </button>
          </div>
          <div>
            <span className={styles.boxText}>신부 김미정 </span>
            <button className={styles.phoneBtnWoman}>
              <PhoneIcon/>
            </button>
          </div>
        </div>
        <div className={styles.smallBox}>
          <p className={styles.boxTitle}>
            마음 전하는 곳
          </p>
          <p className={styles.boxSubTitle}>
            T&nbsp;&nbsp;H&nbsp;&nbsp;A&nbsp;&nbsp;N&nbsp;&nbsp;K&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y&nbsp;&nbsp;O&nbsp;&nbsp;U
          </p>        
          <br></br>
          <div className={styles.boxContents}>
            <p className={styles.boxText}>홍길동 신행은행 110-234-123456</p>
            <p className={styles.boxText}>김미정 국디은행 123456-12-123123</p>
          </div>
        </div>
        <div className={styles.bigBox}>
          <p className={styles.boxTitle}>
            사진 갤러리
          </p>
          <p className={styles.boxSubTitle}>
            G&nbsp;&nbsp;A&nbsp;&nbsp;L&nbsp;&nbsp;L&nbsp;&nbsp;E&nbsp;&nbsp;R&nbsp;&nbsp;Y
          </p>        
          <br></br>
          <AwesomeSlider animation="cubeAnimation" className={styles.sliderDiv}>
            <div data-src="/img1.jpg" />
            <div data-src="/img2.jpg" />
            <div data-src="/img3.jpg" />
            <div data-src="/img4.jpg" />
            <div data-src="/img5.jpg" />
          </AwesomeSlider>
          <br></br>
          <br></br>
        </div>
        <div className={styles.bigBox}>
          <p className={styles.boxTitle}>
            BOARD
          </p>
          <hr width ="90%" className={styles.sampleLine}></hr>

          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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