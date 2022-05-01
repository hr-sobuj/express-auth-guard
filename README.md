# Express Auth Guard
It will help to check whether the user is logged in or not in your express js application.


## How to install
```
npm i express-auth-guard
```

## How to use 

> :warning: **Please provide correct JWT_SECRET_KEY.


```
const authGuard = require('express-auth-guard'); 

let jwt_secret_key='slkdfjoapifjaksjasifaoidflak';

router.get('/', authGuard(jwt_secret_key), (req,res)=>{
    res.statu(200).json({
        msg:"Ok"
    })
});

```
## Get Token Information
```
console.log(req.user);
```


Powered by https://fb.com/habibur.rahman.sobuj.bd