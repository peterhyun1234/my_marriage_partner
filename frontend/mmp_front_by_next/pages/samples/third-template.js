import styles from '../../styles/forTemplate/third.module.css'
import { Button } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import DeleteIcon from '@material-ui/icons/Delete';
import GitHubIcon from '@material-ui/icons/GitHub';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
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

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// import { Map, GoogleApiWrapper } from "google-maps-react";

// import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, date, contents) {
  return {
    name,
    date,
    contents
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
        <TableCell align="right">{row.date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableCell component="th" scope="row">
                    {row.contents}
                  </TableCell>
                  <button className={styles.deleteBtn}><DeleteIcon/></button>
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
    name: PropTypes.string.isRequired,
    contents: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired,
};

const rows = [
  createData("전현빈", "2019-12-03", "오우 오우 너무너무 축하하고~오우 오우 너무너무 축하하고~오우 오우 너무너무 축하하고~오우 오우 너무너무 축하하고~오우 오우 너무너무 축하하고~오우 오우 너무너무 축하하고~"),
  createData("전성빈", "2020-12-03", "와우 와우 엄빌리버블~~와우 와우 엄빌리버블~~와우 와우 엄빌리버블~~"),
];


export default function ThirdTemplate() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const [name, setName] = React.useState('');
    const [contents, setContents] = React.useState('');

    function handleSubmit(event) {
      event.preventDefault();
      console.log( 'name:', name, 'contents: ', contents);
      setOpen(false);
    }

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
          <button className={styles.imgRegisterBtn} onClick={handleClickOpen}>
            <SmsOutlinedIcon style={{ fontSize: 15 }}/> 사진 재등록
          </button>
        </div>
        <div className={styles.bigBox}>
          <p className={styles.boxTitle}>
            BOARD
          </p>
          <hr width ="90%" className={styles.sampleLine}></hr>

          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead className={styles.tableHead}>
                <TableRow>
                  <TableCell />
                  <TableCell>작성자 이름</TableCell>
                  <TableCell align="right">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <button className={styles.sendMsgBtn} onClick={handleClickOpen}>
            <SmsOutlinedIcon style={{ fontSize: 15 }}/> 축하 메세지 작성
          </button>
        </div>
        <div className={styles.smallBox}>
          <p className={styles.boxTitle}>
            오시는 길
          </p>
          <p className={styles.boxSubTitle}>
            L&nbsp;&nbsp;O&nbsp;&nbsp;C&nbsp;&nbsp;A&nbsp;&nbsp;T&nbsp;&nbsp;I&nbsp;&nbsp;O&nbsp;&nbsp;N
          </p>
          
          {/* <RenderAfterNavermapsLoaded
            clientId={YOUR_CLIENT_ID}
          >
            <NaverMap 
              mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
              style={{
                width: '100%',
                height: '400px',
              }}
              defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
              defaultZoom={10}
            />
          </RenderAfterNavermapsLoaded> */}

          {/* <div className='styles.MapAPI'>
            <Map
              google={this.props.google}
              zoom={15}
              initialCenter={{ lat: 37.5, lng: 127 }}
            ></Map>
          </div> */}

          <br></br>
        </div>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerText}>자세한 설명과 소스는 링크 참조해주세요.</p>      
        <a
          href="https://github.com/peterhyun1234/my_marriage_partner"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.Github}
        >
          <GitHubIcon/> GitHub
        </a>
      </footer>
      <Dialog open={open} onClose={handleClose} onSubmit={handleSubmit} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">축하 메세지 작성</DialogTitle>
        <DialogContent>
          <TextField
            id="name"
            autoFocus
            margin="dense"
            label="성함을 입력해주세요"
            type="name"
            fullWidth                 
            value={name}
            onInput={ e=>setName(e.target.value)}
          />
          <TextField
            id="contents"
            autoFocus
            margin="dense"
            label="메세지 내용"
            type="contents"
            fullWidth
            value={contents}
            onInput={ e=>setContents(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            취소
          </Button>
          <Button onClick={handleSubmit} type="submit" color="primary">
            작성하기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}
