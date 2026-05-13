import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

export const Header = () => {
  return (
    <AppBar
      position="static"
      className={styles.header}
    >
      <Toolbar className={styles.toolbar}>
        <Typography 
        variant="h5"
        className={styles.logo}>
          Project Hub
        </Typography>

        <div className={styles.links}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            className={styles.link}
          >
            Home
          </Button>

          <Button
            component={Link}
            color="inherit"
            to="/create-startup"
            className={styles.link}
          >
            Create
          </Button>

          <Button
            component={Link}
            color="inherit"
            to="/my-startups"
            className={styles.link}
          >
            My Startups
          </Button>

          <Button
            component={Link}
            color="inherit"
            to="/login"
            className={styles.link}
          >
            Login
          </Button>

          <Button
            component={Link}
            color="inherit"
            to="/register"
            className={styles.registerBtn}>
            Register
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}