import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { axiosApi } from '../../axiosApi';
import {StartupForm, type StartupFormData} from '../../components/StartupForm/StartupForm';
import styles from './styles.module.css';

export const CreateStartupPage = () => {
  const navigate = useNavigate()

  const createStartup = async(
      startupData: StartupFormData
  ) => {
      try {
          await axiosApi.post('/startups/',
            {
                ...startupData,
                owner_id: 1,
            })

          navigate('/')
      }  catch (e) {
        console.log(e);
    }
};

    return (
      <div className={styles.wrapper}>
        <div className={styles.headerBlock}>
            <Typography
                variant="h3"
                className={styles.title}
            >
                Submit your startup
            </Typography>

            <Typography className={styles.subtitle}>
                Share your project idea and make it visible for investors
            </Typography>
        </div>

        <StartupForm
            onSubmit={createStartup}
        />
    </div>
)}