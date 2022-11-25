# 특정 깃헙 레파지토리의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구현



</br>



## 프로젝트 실행 법

```
npm install

git token 발급 후 config.js에 USER : "발급 받은 token" 추가

npm start
```

</br>


</br>

## 구현 목록 & 구현 영상

![preonBoarding_1](https://user-images.githubusercontent.com/95282989/203702906-cc5b838c-fb54-4b17-96fa-0606c80e2929.gif)




- [x] 이슈 목록 및 상세 화면 기능 구현
- [x] 상세 페이지 이동시 로딩 화면 구현
- [x] 스크롤 이벤트로 인피니티 스크롤 구현
- [x] 다섯번째 항목에 광고 추가, 클릭 시 해당 사이트로 이동 로직 구현

</br>



</br>

## 사용 라이브러리
</br>

<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img alt="octokit" src ="https://img.shields.io/badge/octokit-071D49?&style=flat&logo=Axios&logoColor=white"> <img alt="emotion" src ="https://img.shields.io/badge/Emotion-512BD4?&style=flat&logoColor=white"> <img alt="react-markdown" src="https://img.shields.io/badge/react_markdown-9999FF?&style=flat&logoColor=white"> 


</br>


---

</br>

## 폴더 구조


```
📦 src
├── 📂 api
│      └── 📜 client.js
│ 
├── 📂 components
│       ├──📜 Advertisement.jsx
│       ├──📜 Detail.jsx
│       ├──📜 Error.jsx
│       ├──📜 Detail.jsx
│       ├──📜 Header.jsx
│       ├──📜 Issue.jsx
│       ├──📜 Loading.jsx
│       └──📜 Main.jsx
│  
├── 📂 contexts
│       └── 📜 issueContext.js.js
│  
├── 📂 Page
│       ├──📜 DetailPage.jsx
│       └──📜 Home.jsx
│
├── 📜 App.js
├── 📜 config.js
└── 📜 index.jsx

```



</br>


## 무한 스크롤 구현


```javascript
// src/components/Main.jsx

const pageNum = useRef(1);

const octokitApii = () => {
  pageNum.current += 1;
  setLoading(true);
  try {
    octokitApi(pageNum.current, setIssue, setLoading);
  } catch (err) {
    setError(true);
    console.log(err);
  }
};
  
```

useRef를 사용해 pageNum를 변수로 만들어 초기값을 1로 지정, 후에 데이터를 받아올 때 1이 아닌 이후의 데이터를 받아올 수 있도록 1을 더해주도록 했습니다. 1이 더해진 값을 `octokitApi` 함수에 데이터와 로딩 state와 함께 인자로 넘겨 데이터를 받아오게 했습니다.

<br/>

```javascript
// src/components/Main.jsx

useEffect(() => {
  let timer;
  window.addEventListener("scroll", () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollHeight + scrollTop >= clientHeight - 10) {
        octokitApii();
      }
    }, 400);
  });
}, []);
  
```


스크롤 이벤트를 사용하여 무한스크롤 구현하였습니다. `timer` 변수 초기 값을 null로 지정하여 `useEffect`가 처음 실행될 땐 `clearTimeout` 은 실행되지 않게 했고 이후 스크롤 바가 하단에 있을 때 `setTimeout` 을 사용해 0.4초 후에 `octokitApii` 함수가 실행되도록 했습니다.


</br>


## 상세페이지의 마크다운 


```javascript

// src/components/Detail.jsx 

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

  <IssueBody>
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
  </IssueBody>

```

`ReactMarkdown` 라이브러리를 사용해 받아온 데이터의 마크 다운 문법을 렌더링 할 수 있도록 했습니다. link, table, checklist 등의 형식을 그리기 위해 추가로 `remark-gfm` 라이브러리를 사용했습니다.



</br>



