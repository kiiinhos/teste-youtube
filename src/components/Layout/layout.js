import {makeStyles} from '@material-ui/core'
import Head from 'next/head';
import TopBar from './TopBar'
import NavBar from './NavBar';

const useStyles =makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.background.dark,
    display:'flex',
    height:'100vh',
    overflow:'hidden',
    width:'100vw',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}))

function Layout({children,title}){
  const classes = useStyles();
  return <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale-1.0, width-device-width"/>
    </Head>
  <div className={classes.root}>
    <TopBar/>
    <NavBar/>
    <div className={classes.wrapper}>
      <div className={classes.content}>
      <div className={classes.content}>{children}</div>
      </div>
      </div> 
  </div>
  
  </div>
}

export default Layout;