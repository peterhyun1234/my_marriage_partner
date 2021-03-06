import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import GitHubIcon from '@material-ui/icons/GitHub';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import PostAddIcon from '@material-ui/icons/PostAdd';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

function sampleFunc(param){

  // let userInfo = {
  //     name: 'HB',
  //     age: 26
  // };
  
  // localStorage.setItem("user", JSON.stringify(userInfo));
  // let getinfo = localStorage.getItem("user");

  // console.log(getinfo);

}



export default function Home() {



  // sampleFunc("dd");

  
  

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    // console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleLogin = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key={"t1"} >
            <Link href="/samples/first-template"><ListItemIcon><Filter1Icon /></ListItemIcon></Link>
            <Link href="/samples/first-template"><ListItemText primary={"청첩장 예시 1"} /></Link>
        </ListItem>
        <ListItem button key={"t2"} >
            <Link href="/samples/second-template"><ListItemIcon><Filter2Icon /></ListItemIcon></Link>
            <Link href="/samples/second-template"><ListItemText primary={"청첩장 예시 2"} /></Link>
        </ListItem>
        <ListItem button key={"t3"} >
            <Link href="/samples/third-template"><ListItemIcon><Filter3Icon /></ListItemIcon></Link>
            <Link href="/samples/third-template"><ListItemText primary={"청첩장 예시 3"} /></Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={"make"} disabled={true}>
            <Link href="/wedding-page/make"><ListItemIcon><PostAddIcon /></ListItemIcon></Link>
            <Link href="/wedding-page/make"><ListItemText primary={"청첩장 만들기"} /></Link>
        </ListItem>
        <ListItem button key={"look"} >
            <Link href="/wedding-page/clientid-15234"><ListItemIcon><FindInPageIcon  /></ListItemIcon></Link>
            <Link href="/wedding-page/clientid-15234"><ListItemText primary={"내 청첩장 확인"} /></Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={"req"} >
            <Link href="/"><ListItemIcon><MailIcon /></ListItemIcon></Link>
            <Link href="/"><ListItemText primary={"개발자에게 건의"} /></Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
            {[''].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}><MenuIcon className={styles.menuButton}/></Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
            
          </IconButton>
          <p  className={styles.appBarTitle}>
            My Marriage Partner
          </p>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link href="/sign/in">
                    <a
                      className={styles.card}
                    >
                      <p>로그인</p>
                    </a>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/">
                    <a
                      className={styles.card}
                    >
                      <p>로그아웃</p>
                    </a>
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Head>
        <title>My Marriage Partner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="https://media.giphy.com/media/yrhhmre5fN2PtRujfo/giphy.gif" className={styles.helloImg}/>

        <p className={styles.description}>
          당신의 성공적인 결혼식을 도와드리고 싶습니다!
          <br></br>
          <code className={styles.code}>My Marriage Partner</code>
        </p>

        <div className={styles.grid}>
          <Link href="/samples/first-template">
            <a
              className={styles.smallBox}
            >
              <h3 className={styles.cardTitle}>청첩장 샘플 1</h3>
              <img src="/t1.png" className={styles.templateImg} />
              <br></br>
              <p className={styles.leftText}>차갑고 깔끔한 스타일에</p>
              <p className={styles.leftText}>잘 어울리는 디자인으로</p>
              <p className={styles.leftText}>주로 겨울에 사용됩니다.</p>
              <p className={styles.blueText}>자세히 보기</p>
            </a>
          </Link>

          <Link href="/samples/second-template">
            <a
              className={styles.smallBox}
            >
              <h3 className={styles.cardTitle}>청첩장 샘플 2</h3>
              <img src="/t2.png" className={styles.templateImg} />
              <br></br>
              <p className={styles.leftText}>활발하고 세련된 스타일에</p>
              <p className={styles.leftText}>잘 어울리는 디자인으로</p>
              <p className={styles.leftText}>주로 가을에 사용됩니다.</p>
              <p className={styles.blueText}>자세히 보기</p>
            </a>
          </Link>
          
          <Link href="/samples/third-template">
            <a
              className={styles.smallBox}
            >
              <h3 className={styles.cardTitle}>청첩장 샘플 3</h3>
              <img src="/t3.png" className={styles.templateImg} />
              <br></br>
              <p className={styles.leftText}>발랄하고 상쾌한 스타일에</p>
              <p className={styles.leftText}>잘 어울리는 디자인으로</p>
              <p className={styles.leftText}>주로 봄에 사용됩니다.</p>
              <p className={styles.blueText}>자세히 보기</p>
            </a>
          </Link>

          <Link href="/wedding-page/make">
            <a
              className={styles.smallBox}
            >
              <h3 className={styles.cardTitle}>청첩장 만들기</h3>
              <img src="/makewd.jpg" className={styles.makeImg} />
              <br></br>
              <p className={styles.leftText}>자신이 원하는대로 배경과</p>
              <p className={styles.leftText}>구조를 마음껏</p>
              <p className={styles.leftText}>디자인 해보세요.</p>
              <p className={styles.blueText}>만들러 가기</p>
            </a>
          </Link>

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
    </div>
    
  );


  // return (
  //   <div className={styles.container}>
  //     <Head>
  //       <title>Create Next App</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>

  //     <main className={styles.main}>
  //       <h1 className={styles.title}>
  //         Welcome to <a href="https://nextjs.org">Next.js!</a>
  //       </h1>

  //       <p className={styles.description}>
  //         Get started by editing{' '}
  //         <code className={styles.code}>pages/index.js</code>
  //       </p>

  //       <div className={styles.grid}>
  //         <Link href="/samples/first-template">
  //           <a
  //             className={styles.card}
  //           >
  //             <h3>First-sample &rarr;</h3>
  //             <p>Discover and deploy boilerplate example Next.js projects.</p>
  //           </a>
  //         </Link>

  //         <Link href="/samples/second-template">
  //           <a
  //             className={styles.card}
  //           >
  //             <h3>Second-sample &rarr;</h3>
  //             <p>Discover and deploy boilerplate example Next.js projects.</p>
  //           </a>
  //         </Link>
          
  //         <Link href="/samples/third-template">
  //           <a
  //             className={styles.card}
  //           >
  //             <h3>Third-sample &rarr;</h3>
  //             <p>Discover and deploy boilerplate example Next.js projects.</p>
  //           </a>
  //         </Link>

      

  //       </div>
  //     </main>

  //     <footer className={styles.footer}>
  //       <a
  //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Powered by{' '}
  //         <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
  //       </a>
  //     </footer>
  //   </div>
  // )
}
