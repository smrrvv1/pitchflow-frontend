import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router';

import styles from './styles.module.css';

export const Header = () => {
  return (
    <AppBar
      position="static"
      className={styles.header}
    >
      <Toolbar className={styles.toolbar}>
        <Typography variant="h5">
          Project Hub
        </Typography>

        <div className={styles.links}>
          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            Home
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/create-startup"
          >
            Create
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/my-startups"
          >
            My Startups
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/login"
          >
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}