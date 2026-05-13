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
            component={Link}
            to="/"
            className={styles.link}
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/create-startup"
            className={styles.link}
          >
            Create
          </Button>

          <Button
            component={Link}
            to="/my-startups"
            className={styles.link}
          >
            My Startups
          </Button>

          <Button
            component={Link}
            to="/login"
            className={styles.link}
          >
            Login
          </Button>

          <Button
            component={Link}
            to="/register"
            className={styles.registerBtn}>
            Register
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}