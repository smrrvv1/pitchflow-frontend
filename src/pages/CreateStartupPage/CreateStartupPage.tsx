import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { axiosApi } from '../../axiosApi';
import {StartupForm, type StartupFormData} from '../../components/StartupForm/StartupForm';

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
      }  catch (e: any) {
        console.log(
            e.response.data.detail[0]
        );
    }
};

    return (
      <div>
        <Typography
                variant="h4"
                align="center"
                sx={{
                    marginTop: '30px',
                }}>
                  Create Startup
            </Typography>

            <StartupForm
                onSubmit={createStartup}/>
      </div>
    )
  }