# Express Auth Guard
It will help to check user are logged in or not.

## How to install
`npm i express-auth-guard`

## How to use 

```
const authGuard = require('express-auth-guard'); 

let secret_key='slkdfjoapifjaksjasifaoidflak';

router.get('/', authGuard(secret_key), (req,res)=>{
    res.statu(200).json({
        msg:"Ok"
    })
});

```


Powered by https://fb.com/habibur.rahman.sobuj.bd