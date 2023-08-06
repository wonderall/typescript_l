# 코드 편집기 설정
1. npm 설치
2. npm init명령어로 NPM 프로젝트 초기화
3. TSC, TSLint, NodeJS 타입 선언 설치
- npm install --save-dev typescript tslint @type/node

# tsconfig.json
- 모든 타입스크립트 프로젝트는 루트 디렉터리에 tsconfig.json이라는 파일이 존재해야 한다.
- 어떤 파일을 컴파일하고, 어떤 자바스크립트 버전으로 방출하는지 등을 정의하는 파일
- 루트 디렉터리에 tsconfig.json 파일 만들고 코드 편집기 등을 이용하여 편집해 준다.
```json
{
"compilerOptions": {
    "target": "es2016",                                 
    "lib": ["es2016"],                                      
    "sourceMap": true,                                
    "esModuleInterop": true,                             
    "strict": true,                                      
    "skipLibCheck": true                                 
  },
  "include":[
    "src"
  ]
}
```
- ./node_modules/.bin/tsc --init 내장 명령을 이용해 타입스크립트 프로젝트를 자동으로 설정 가능하다.
- 타입스크립트 웹사이트에서 여러가지 설정값 확인 가능
# src 폴더 및 index.ts 만들기
mkdir src
touch src/index.ts
```
console.log("Hello, TypeScript!')
```
./node.modules/.bin/tsc 컴파일 실행

node ./dist/index.js로 실행

위와 같은 방법은 백지상태에서 설정하여 단계별로 차근차근 실행해본 방법

ts-node를 설치하여 명령 한 번으로 타입스크립트를 컴파일하고 실행할 수 있다.

typescript-node-starter 같은 뼈대 제공 도구를 이용해 프로젝트 디렉토리 구조를 빠르게 생성할 수 있다.