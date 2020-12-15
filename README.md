# my_marriage_partner

모바일 청첩장 서비스 - 나의 결혼 파트너
------------------------------------
## 1. SW development process







### 1.1. 시나리오 (유즈케이스 다이어그램)
![sc1](https://user-images.githubusercontent.com/46476398/102211326-cad94880-3f16-11eb-8549-3d6d252d55ad.png)
![sc2](https://user-images.githubusercontent.com/46476398/102211332-cc0a7580-3f16-11eb-99a1-d083aba23839.png)
![sc3](https://user-images.githubusercontent.com/46476398/102211333-cca30c00-3f16-11eb-81ff-042a635fe271.png)

### 1.2. 시스템 구조
![structure](https://user-images.githubusercontent.com/46476398/102211345-d0cf2980-3f16-11eb-9924-f03e68ee9eb2.png)
    

### 1.3. ERD
![erd](https://user-images.githubusercontent.com/46476398/102211339-cf9dfc80-3f16-11eb-8c1a-91dccfdb2628.png)

### 1.4. REST API 예제
![rest](https://user-images.githubusercontent.com/46476398/102211344-d0369300-3f16-11eb-810e-f7286b614e94.png)


## 2. Front with Reactjs + Nextjs
![front](https://user-images.githubusercontent.com/46476398/102211347-d0cf2980-3f16-11eb-90be-b6956c5afbda.png)

---------------------------------------- 
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### 2.1. Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### 2.2. Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!



## 3. Gateway Server and API Servers (Node + express, MySQL, firebase)

### 3.1. Gateway server

### 3.1.1. How to install
``` bash
### Install Express Gateway
    $ npm install -g express-gateway

### Create an Express Gateway
    $ eg gateway create

### Follow the prompts and choose the Getting Started server template
    Follow the prompts and choose the Getting Started server template
    ➜ eg gateway create
    ? What is the name of your Express Gateway? my-gateway
    ? Where would you like to install your Express Gateway? my-gateway
    ? What type of Express Gateway do you want to create? (Use arrow keys)
    ❯ Getting Started with Express Gateway
    Basic (default pipeline with proxy)

### Run Express Gateway
    $ cd my-gateway && npm start
```

### 3.1.2. Create users and adopt credential for two way
```bash
### Create a new Express Gateway user.(게이트 웨어 켜진 상태에서!)
    $ eg users create
    ? Enter firstname [required]: peter
    ? Enter lastname [required]: jeon
    ? Enter username [required]: peterhyun
    ? Enter email:
    ? Enter email: undefined
    ? Enter redirectUri:
    ? Enter redirectUri: undefined
    √ Created 062ef359-ab0a-486a-800f-f963c2d9ee2f
    {
    "isActive": true,
    "username": "peterhyun",
    "id": "062ef359-ab0a-486a-800f-f963c2d9ee2f",
    "firstname": "peter",
    "lastname": "jeon",
    "createdAt": "Wed Sep 23 2020 14:21:09 GMT+0900 (GMT+09:00)",
    "updatedAt": "Wed Sep 23 2020 14:21:09 GMT+0900 (GMT+09:00)"
    }

### Need to create 2 credentials for this user: an OAuth2 credential, and a basic-auth (password) credential
    $ eg credentials create -c 062ef359-ab0a-486a-800f-f963c2d9ee2f -t oauth2
    $ eg credentials create -c (id) -t oauth2
    √ Created 062ef359-ab0a-486a-800f-f963c2d9ee2f
    {
    "isActive": true,
    "createdAt": "Wed Sep 23 2020 14:25:51 GMT+0900 (GMT+09:00)",
    "updatedAt": "Wed Sep 23 2020 14:25:51 GMT+0900 (GMT+09:00)",
    "autoGeneratePassword": true,
    "passwordKey": "secret",
    "id": "062ef359-ab0a-486a-800f-f963c2d9ee2f",
    "secret": "a934fb48-6771-4f47-a1b6-2f0b583432fe"
    }

    $ eg credentials create -c 062ef359-ab0a-486a-800f-f963c2d9ee2f -t basic-auth -p "password=???"
    $ eg credentials create -c (id) -t basic-auth -p "password=???"
    √ Created 062ef359-ab0a-486a-800f-f963c2d9ee2f
    {
    "isActive": true,
    "createdAt": "Wed Sep 23 2020 14:27:40 GMT+0900 (GMT+09:00)",
    "updatedAt": "Wed Sep 23 2020 14:27:40 GMT+0900 (GMT+09:00)",
    "autoGeneratePassword": true,
    "passwordKey": "password",
    "id": "062ef359-ab0a-486a-800f-f963c2d9ee2f"
    }

### The last step is where you need to create an application, or “app” 
### -> 어떤 앱에서 access token으로 사용할 지에 대한 인증
    $ eg apps create -u 062ef359-ab0a-486a-800f-f963c2d9ee2f
    $ eg apps create -u (id)
    ? Enter name [required]: testapp
    ? Enter redirectUri: https://www.github.com/peterhyun1234
    √ Created 8969cec7-cbfe-42a3-b6ce-9ab9b0cf8e94
    {
    "isActive": true,
    "id": "8969cec7-cbfe-42a3-b6ce-9ab9b0cf8e94",
    "userId": "062ef359-ab0a-486a-800f-f963c2d9ee2f",
    "name": "testapp",
    "redirectUri": "https://www.github.com/peterhyun1234",
    "createdAt": "Wed Sep 23 2020 14:31:26 GMT+0900 (GMT+09:00)",
    "updatedAt": "Wed Sep 23 2020 14:31:26 GMT+0900 (GMT+09:00)"
    }
```

### 3.1.3. How to use APIs

#### 3.1.3.1. app 등록
To get started, you need to visit the /oauth2/authorize endpoint and specify the following parameters in the URL query string:

* response_type: String containing either ‘bearer’ or ‘token’. For this example you’ll use ‘token’.
* client_id: String containing the id of your app from the output of eg apps create -u val. In this case, ‘8969cec7-cbfe-42a3-b6ce-9ab9b0cf8e94’, but it will be different for you.
* redirect_uri: String that must match the redirectUri you specified when running the eg apps create -u val command.

So, here’s how the full URL looks: 
> http://localhost:8080/oauth2/authorize?response_type=token&client_id=8969cec7-cbfe-42a3-b6ce-9ab9b0cf8e94&redirect_uri=https://www.github.com/peterhyun1234

#### 3.1.3.2. Access token를 이용한 API 사용
리다이렉션 된 uri에 억세스토큰 표시됨
> https://github.com/peterhyun1234#access_token=1f979f65b1a34adfa9de2a0b85902cfd%7C3a52df288d9c485daeddd194dfe50b1f&token_type=Bearer<br>

HTTP 리퀘스트 Authorization 헤더에  bearer으로 넣어서 사용가능


##### 3.1.3.2.1. Copy the access_token from the URL bar. The access_token is URI-encoded, so first decode it using Node.js’s shell.

```bash
$ node
Welcome to Node.js v12.18.3.
Type ".help" for more information.
> decodeURIComponent('1f979f65b1a34adfa9de2a0b85902cfd%7C3a52df288d9c485daeddd19
4dfe50b1f')
'1f979f65b1a34adfa9de2a0b85902cfd|3a52df288d9c485daeddd194dfe50b1f'
>
```

##### 3.1.3.2.2. Use curl to make an HTTP request with the token in the Authorization header

```bash
$ curl -H "Authorization: Bearer 1f979f65b1a34adfa9de2a0b85902cfd|3a52df288d9c485daeddd194dfe50b1f" http://localhost:8080/ip
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    31  100    31    0     0    140      0 --:--:-- --:--:-- --:--:--   140
{
  "origin": "202.30.15.49"
}
```


### 3.1.2. Ref by

#### 3.1.2.1. adopting micro services 
    https://medium.com/@oyedejipeace/building-a-simple-microservices-app-with-express-gateway-a8fd49d81aeb
#### 3.1.2.2. adopting security by using oauth2.0
    https://www.express-gateway.io/getting-started-with-oauth2/



### 3.2. API Servers with Express
#### 3.2.1. install node and npm (in ubuntu)
    $ sudo apt-get update 
    $ sudo apt-get install nodejs
    $ sudo apt-get install npm
    $ npm init --yes
    $ npm install express mysql --save --save-exact
> https://poiemaweb.com/nodejs-mysql
#### 3.2.2. Start node server with exit state(background)    
    $ nohup npm start &
    $ exit
#### 3.2.3. Start node server with auto_modifying state(Daemon process)
    $ nohup nodemon </dev/null &
    $ exit


### 3.3. Databases


#### 3.3.1. firebase for authentication 

    - 사용자에 대한 정보를 전달해서 서버의 역할을 줄임(인증)
    - 실시간으로 인증

#### 3.3.2. MySQL
    - 사용자의 요청과 로그를 데이터 형태로 정형화해서 저장
    - 서비스의 기능들을 MSA 구조로 분할하기 위해서 데이터 베이스를 사용

----------------------------------------   
## 4. contact
    e-mail: peterhyun1234@gmail.com
