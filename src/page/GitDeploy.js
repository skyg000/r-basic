import React from 'react'

function GitDeploy() {
    return (
        <>
            <h2>Github 설치 및 인증</h2>
            @ https://git-scm.com 접속(window 64bit download) <br/>
            @ 설치 후 인증 <br/>
                ㄴ git config --global user.name "계정입력"<br/>
                ㄴ git config --global user.email "메일입력"<br/><br/>
            <h2>Github 레파지토리 생성 및 파일 업로드</h2>
            1. git init (현재 작업폴더를 github에 연결)<br/>
            2. git add 파일명 / git add. (수정된 모든 파일)<br/>
            3. git commit -m '기록할 문자' (add 할 파일들을 스테이지에 올림)<br/>
            4. git branch main (사용자 )<br/>
            5. git remote add origin https://skyg000.github.io/r-basic/ <br/>
            5-1. git remote set-url origin https://skyg000.github.io/r-basic/ (경로수정 시 set-url )<br/>
            5-2. git remote -v (연결된 레파지토리 URL확인 )<br/>
            6. git push origin main ( 레파지토리에 업로드 main권한으로 올린다 )<br/>
            6-1. git pull origin main ( 레파지토리에 내용을 로컬에 내려받기 )<br/>
            7. git status ( 현재 상태 확인 )<br/>
            <h2>gh-pages 배포</h2>
            1. react모듈설치 (npm i gh-pages)<br/>
            2. package.json 설정<br/>
            2-1. "homepage": "https://skyg000.github.io/r-basic"<br/>
            2-2. "scripts": &#123;"deploy": "gh-pages -d build"&#125;<br/>
            3. App.js basename설정<br/>
            3-1. BrowserRouter에 basename='/레파지토리명'<br/><br/>
            4. 터미널창 <br/>
            4-1. npm run build -&#62; npm run deploy<br/>
            
        </>
    )
}

export default GitDeploy