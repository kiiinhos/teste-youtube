import {Hidden, makeStyles} from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import  Box  from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu'
import  Paper  from '@material-ui/core/Paper';
import  InputBase  from '@material-ui/core/InputBase';
import  Button  from '@material-ui/core/Button';
import  IconButton  from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle'



const useStyles =makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    cursor: 'pointer',
    height: 18,
    marginLeft: theme.spacing(3),
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 700,
  },
  input: {
    flex: 1,
  },
}))
function TopBar(){
  const classes = useStyles();
  return(
    
    <AppBar className={classes.root} color='default'>
      <Toolbar className={classes.toolbar}> 
       <Box display="flex" aligItems="center">
        <MenuIcon />
        <img src='/new-youtube-logo.svg' alt='logo' className={classes.logo} />
       </Box>
       <Hidden mdDown>
       <Box>
       <Paper component="form" className={classes.search}>
              <InputBase
                className={classes.input}
                placeholder="Pesquisar"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
       </Box>

       </Hidden>
       <Box display="flex">
       <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>
          <Button
              color="secondary"
              component="a"
              variant="outlined"
              startIcon={<AccountCircle />}
              >
              Fazer Login
            </Button>
       </Box>
      </Toolbar>
    </AppBar>
  )
}
export default TopBar;