import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  // (theme) => // importa as funcoes declaradas no theme no App.js
    
  root: {
    padding: theme.spacing(0), // o px cada numero, 2 * 8 = 16px // para customizar tem q ir no theme e colocar o spacing: 4px por exemplo
    height: "100vh",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,

  },
  icons: {
      paddingRight: theme.spacing(5)

  },
  menuButton: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(6)

  },
  logo: {
      height: 30,
      paddingLeft: theme.spacing(2)
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: 'none',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  listItemText: {
      fontSize: 14
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src='/images/preto.png' alt='logo' className={classes.logo}/>
          <div className={classes.grow}></div>

          <IconButton
            edge="start"
            className={classes.icons}
            color="inherit"
            aria-label="menu"
          >
            <VideoCallIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.icons}
            color="inherit"
            aria-label="menu"
          >
            <AppsIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.icons}
            color="inherit"
            aria-label="menu"
          >
            <MoreVertIcon />
          </IconButton>
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          <Button startIcon={<AccountCircleIcon/>} color="secondary" variant="outlined">Fazer Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            
              <ListItem button>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText classes={{primary: classes.listItemText}}  primary='Inicio' />
              </ListItem>
              <ListItem button>
                <ListItemIcon><WhatshotIcon/></ListItemIcon>
                <ListItemText classes={{primary: classes.listItemText}}  primary='Em Alta' />
              </ListItem>
              <ListItem button>
                <ListItemIcon><SubscriptionsIcon/></ListItemIcon>
                <ListItemText classes={{primary: classes.listItemText}}  primary='Inscrições' />
              </ListItem>
         
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText classes={{primary: classes.listItemText}} primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
