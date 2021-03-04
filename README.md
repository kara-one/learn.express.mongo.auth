# Express Mongo JWT Auth
*learn.express.mongo.auth*

- Advanced authorization for NODE.JS. 
- Roles of users. Access limitation.
- Node.js, express, mongodb, JWT, token, bcrypt.

## Source
- Youtube https://www.youtube.com/watch?v=d_aJdcDq6AY
- Github https://github.com/utimur/profi_auth_with_roles_nodejs

## Install
```bash
npm install
npm run start
```

## API endpoints
url: https://localhost:5000/auth
- GET /users
    
    send auth token in Header key "Authorization" like as 
    ```
    Bearer <token>
    ```

- POST /registration 

    send JSON
    ```json
    {
        "username": "user",
        "password": "user",
    }
    ```
- POST /login 

    send JSON
    ```json
    {
        "username": "user",
        "password": "user",
    }
    ```