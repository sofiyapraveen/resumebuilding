// import React, { createContext, useEffect, useState } from 'react';
// import axiosInstance from '../utils/axiosInstance';
// import { API_PATHS } from '../utils/apiPaths';

// export const UserContext = createContext();

// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (user) return;

//     const accessToken = localStorage.getItem('token');
//     if (!accessToken) {
//       setLoading(false);
//       return;
//     }

//     // Immediately-invoked async function
//     (async () => {
//       try {
//         const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE, {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         setUser(response.data);
//       } catch (error) {
//         console.error('User not authenticated', error);
//         clearUser();
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [user]);

//   const updateUser = (userData) => {
//     setUser(userData);
//     if (userData?.token) {
//       localStorage.setItem('token', userData.token);
//     }
//     setLoading(false);
//   };

//   const clearUser = () => {
//     setUser(null);
//     localStorage.removeItem('token');
//   };

//   return (
//     <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserProvider;


import React, { createContext, useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = async (token) => {
    try {
      const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
    } catch (err) {
      console.error('User not authenticated', err);
      clearUser();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserProfile(token);
    } else {
      setLoading(false);
    }
    // Run only once on mount
  }, []);

  const updateUser = (userData) => {
    setUser(userData);
    if (userData?.token) {
      localStorage.setItem('token', userData.token);
    }
    setLoading(false);
  };

  const clearUser = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
