import AuthContext from '@/contexts/AuthContext';
import { useContext } from 'react';

const useAuth = () => {
    const auth=useContext(AuthContext);
    const isClient= typeof window !=='undefined';

    if(!isClient && !auth) return {};

    if(!auth){
        throw new Error('Your must be wrap authprovider for use auth')
    }
    return auth;
};

export default useAuth;