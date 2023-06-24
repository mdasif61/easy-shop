import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import app from "./firebase.config";


const auth=getAuth(app);
export const googleAuth=new GoogleAuthProvider();

export default auth;