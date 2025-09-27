// import React, { useContext, useState } from 'react'
// import { UserContext } from '../context/UserContext';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../utils/axiosInstance';
// import { API_PATHS } from '../utils/apiPaths';
// import { authStyles as styles } from '../assets/dummystyle';
// import { Input } from '../components/Inputs';

// const Login = ({ setCurrentPage }) => {
    
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const { updateUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleLogin=async (e)=>{
//     e.preventDefault();
//     if(!validateEmail(email)){
//             setError('Please Enater a valid email address')
//             return;
//         }
//         if(!password){
//             setError('Please enter password')
//             return;
//         }
//         setError('');
//         try{
//             const response=await axiosInstance.post(API_PATHS.AUTH.LOGIN, {email, password});
//             const {token}=response.data;
//             if(token){
//                 localStorage.setItem('token',token);
//                 updateUser(response.data);
//                 navigate('/dashboard')
//             }

//         }catch(error){
//             setError(error.response?.data?.message || 'Something went wrong. Plaese try again.')

//         }
//   }
//   return (
//     <div className={styles.container}>
//         <div className={styles.headerWrapper}>
//             <h3 className={styles.title}>Welcome Back</h3>
//             <p className={styles.subtitle}>Sign in to continue building amazing resumes</p>
//         </div>
      
//       {/* form */}
//       <form onSubmit={handleLogin} className={styles.form}>
//          <Input value={email} onChange={ ({target}) => setEmail(target.value)}
//                 label='Email'
//                  placeholder='sofusofiya2004@gmail.com'
//                 type='email'
//                 />
//             <Input value={password} onChange={ ({target}) => setPassword(target.value)}
//                 label='Password'
//                 placeholder='Min 8 Characters'
//                 type='password'
//              />
//          {error && <div className={styles.errorMessage}>{error}</div>}

//          <button type='submit' className={styles.submitButton}>Sign In</button>
//          <p className={styles.switchText}>
//             Don't have an account{' '}
//             <button type='button' onClick={()=>setCurrentPage('signup')} className={styles.switchButton}>Sign Up</button>
//          </p>
             
        
//       </form>
//     </div>
//   )
// }

// export default Login

import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';
import { authStyles as styles } from '../assets/dummystyle';
import { Input } from '../components/Inputs';

// ✅ Add this helper (or import it from a utilities file)
function validateEmail(email) {
  // basic pattern for email format
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // ✅ now validateEmail is defined
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!password) {
      setError('Please enter password');
      return;
    }

    setError('');
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, { email, password });
      const { token } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        updateUser(response.data);
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.title}>Welcome Back</h3>
        <p className={styles.subtitle}>Sign in to continue building amazing resumes</p>
      </div>

      <form onSubmit={handleLogin} className={styles.form}>
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email"
          placeholder="sofusofiya2004@gmail.com"
          type="email"
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 Characters"
          type="password"
        />
        {error && <div className={styles.errorMessage}>{error}</div>}

        <button type="submit" className={styles.submitButton}>Sign In</button>
        <p className={styles.switchText}>
          Don&apos;t have an account{' '}
          <button
            type="button"
            onClick={() => setCurrentPage('signup')}
            className={styles.switchButton}
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
