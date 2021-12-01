//사용자 등록시 서버에 전송하는 정보의 데이터 모델
export interface User {
    name: string;
    email: string;
    username: string;
    password: string;
}

// 로그인시 서버에 보내는 정보의 데이터 모델
export interface Login{
    username: string;
    password: string;
}

//로그인된 사용자정보의 데이터 모델
//보안을 위해 서버가 패스워드 정보는 제외하고 보내주었음.
export interface UserNoPW{
    _id: string;
    name: string;
    email: string;
    username: string;

}