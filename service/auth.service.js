import firebase from "../config/firebase.config";

const socialMediaAuth = async(req,res) =>{
    const provider = req.body.provider;

    return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res)=>{
        return res.user;
    })
    .catch((err)=>{
        return err;
    })
}

export default socialMediaAuth;
