const {post,User} = require('../DBFAKE');
// const conn = require('../DB/config');
const GetAllPost = ()=>{
    let UserHaveID10 = post.filter((user,index)=>{
        return user.userId == 10;
    });
    return UserHaveID10;
}
const GetAllUser = ()=>{
    let GetUser = User.map((user,index)=>{
        return user;
    });
    return GetUser;
}

module.exports = {
    GetAllPost,
    GetAllUser,
}