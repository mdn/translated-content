---
title: React 시작하기
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
---

<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}</div>

<p class="summary">이 문서에서는 React를 소개합니다. 우리는 React에 대한 약간의 배경지식과 사용 예시, 로컬 컴퓨터에 React 툴체인을 설정하는 방법을 배우고 프로세스에서의 React 동작 원리를 배우기 위해서 간단한 입문 앱을 만들어 봅니다.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">필요한 사전 지식:</th>
   <td>
    <p>코어 <a href="/ko/docs/Learn/HTML">HTML</a>, <a href="/ko/docs/Learn/CSS">CSS</a>, 및 <a href="/ko/docs/Learn/JavaScript">JavaScript</a> 언어에 익숙할 것. <a href="/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">터미널/커맨드라인</a>에 대한 지식.</p>
       <p>React는 JSX(JavaScript와 XML)라는 HTML-in-JavaScript 문법을 사용합니다. HTML와 JavaScript에 익숙하다면 JSX를 배우는 것에 도움이 됩니다. 또한 애플리케이션에서 발생하는 버그가 JavaScript와 관련이 있는지 아니면 React의 구체적인 도메인과 관련이 있는지 수월하게 식별하는 것에 도움이 됩니다.</p>
   </td>
  </tr>
  <tr>
   <th scope="row">목표:</th>
   <td>React 로컬 개발 환경을 구성하고 입문 앱을 만들어서 기본적인 동작 원리를 이해한다.</td>
  </tr>
 </tbody>
</table>

## Hello React

공식적인 태그라인에 따르면, [React](https://reactjs.org/)는 사용자 인터페이스를 만들기 위한 라이브러리입니다. React는 프레임워크가 아니고, 심지어 웹에만 사용할 수 있는 것도 아닙니다. React는 다른 라이브러리들과 함께 특정한 환경을 렌더링하는 데 사용됩니다. 가령, [React Native](https://reactnative.dev/)는 모바일 애플리케이션을 만드는 데 사용될 수 있고, [React 360](https://opensource.fb.com/)은 가상 현실 애플리케이션을 만드는 데 사용할 수 있습니다. 그 밖에도 많은 가능성이 존재합니다.

웹을 만들기 위해서 사용자는 React를 [ReactDOM](https://reactjs.org/docs/react-dom.html)과 함께 사용해야 합니다. React와 ReactDOM은 다른 실제 웹 프레임워크들과 동일한 공간에서 논의되고 동일한 문제를 해결하기 위해 사용됩니다. React를 "프레임워크"로 지칭할 때는 통상적인 뜻으로 받아들이면 됩니다.

React의 주요한 목표는 개발자가 UI를 만들 때 일어나는 버그들을 최소화하는 것입니다. 이를 달성하기 위하여 React는 사용자 인터페이스의 일부를 나타내는 자족적이고, 논리적인 코드 조각인 컴포넌트들을 사용합니다. 이 컴포넌트들은 함께 전체 UI를 구성할 수 있고, React는 렌더링 작업의 대부분을 추상화하여 개발자가 UI 디자인에 집중할 수 있게 합니다.

## Use cases

이 모듈에서 다루고 있는 다른 프레임워크와 달리, React는 코드 컨벤션이나 파일 구조에 엄격한 규칙을 강제하지 않습니다. 이를 통해 팀은 그들에게 가장 적합한 컨벤션을 설정할 수 있고, 원하는 어떤 방식으로든 React를 쓸 수 있습니다. React는 하나의 버튼, 인터페이스의 일부분, 혹은 애플리케이션의 사용자 인터페이스 전체를 다룰 수 있습니다.

React는 [인터페이스의 일부분](https://reactjs.org/docs/add-react-to-a-website.html)을 위하여 사용할 수 있지만, jQuery와 같은 라이브러리 혹은 Vue와 같은 프레임워크처럼 애플리케이션 "안에 넣는" 것은 쉬운 일이 아닙니다. React는 애플리케이션 전체를 만들 때 사용하기가 보다 쉽습니다.

인터페이스를 JSX로 작성하는 것과 같이 React app의 많은 개발자-경험 혜택은 컴파일 과정이 필요합니다. Babel과 같은 컴파일러를 웹사이트에 추가하는 것은 코드를 느리게 만들기 때문에, 개발자들은 종종 빌드 과정에서 이러한 툴링을 설정합니다. React는 아주 무거운 툴링을 요구하지만 학습할 수 있습니다.

이 기사는 애플리케이션의 사용자 인터페이스 전체를 렌더링하기 위해 React를 사용하는 예시에 초점을 맞출 겁니다. 이 예시는 Facebook의 [create-react-tool](https://create-react-app.dev/) 툴이 제공하는 툴링을 사용합니다.

## React는 JavaScript를 어떻게 사용할까?

React는 많은 패턴에 모던 JavaScript의 특징을 이용합니다. JavaScript와 가장 다른 부분은 [JSX](https://reactjs.org/docs/introducing-jsx.html) 구문의 사용입니다. JSX는 JavaScript의 구문을 확장하여 HTML과 유사한 코드를 함께 사용할 수 있도록 합니다. 다음은 JSX 구문의 예시입니다.

```js
const heading = <h1>Mozilla Developer Network</h1>;
```

이 heading 상수는 **JSX 표현식(JSX expression)** 으로 알려져 있습니다. React는 애플리케이션에 [`<h1>`](/ko/docs/Web/HTML/Element/Heading_Elements) 태그를 렌더링할 때 이 표현식을 사용할 수 있습니다.

[`<header>`](/ko/docs/Web/HTML/Element/header) 태그로 heading을 감싸고 싶다고 가정해보겠습니다. JSX는 HTML에서 하던 것처럼 요소를 다른 요소 안에 중첩할 수 있습니다.

```js
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> **참고:** 위의 스니펫에 있는 괄호는 JSX에 유일하지도 않고, 여러분의 애플리케이션에 어떠한 영향을 주지도 않습니다. 이들은 여러 줄의 코드가 동일한 표현식의 부분이라는 것을 당신(과 컴퓨터)에게 알려줍니다. header 표현식은 다음과 같이도 쓸 수도 있습니다.

```js
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

하지만, 표현식을 시작하는 [`<header>`](/ko/docs/Web/HTML/Element/header) 태그가 클로징 태그와 상응하는 위치에 들여쓰기가 되어있지 않기 때문에 이 코드는 살짝 이상해 보입니다.

</div>

브라우저는 도움 없이는 JSX를 읽을 수 없습니다. ([Babel](https://babeljs.io/)이나 [Parcel](https://parceljs.org/)과 같은 툴을 사용하여 컴파일할 때 header 표현식은 다음과 같이 보일 것입니다.

```js
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

[`React.createElement()`](https://reactjs.org/docs/react-api.html#createelement) 를 사용하여 UI를 직접 작성해서 컴파일 단계를 생략할 수도 있습니다. 하지만, 이렇게 하면 JSX의 선언적인 장점을 잃을 것이고 코드는 읽기 더욱 어려워질 것입니다. 컴파일은 개발 과정에 있어 추가 과정이지만 React 커뮤니티의 많은 개발자는 JSX의 가독성이 그럴만한 가치가 있다고 생각합니다. 그리고 널리 사용되는 툴링은 JSX를 JavaScript로 컴파일하는 부분을 설정 과정의 일부로 만듭니다. 원하지 않는다면, 컴파일을 직접 구성하지 않아도 됩니다.

JSX는 HTML과 JavaScript를 섞은 것이기 때문에 어떤 개발자들은 JSX를 직관적이라고 생각합니다. 다른 이들은 JSX의 혼합된 본성 때문에 혼란스럽다고 하기도 합니다. 하지만 한번 익숙해지면 사용자 인터페이스를 더 빠르고 직관적으로 만들 수 있고 다른 이들이 여러분의 코드베이스를 한눈에 더 잘 이해할 수 있게 합니다.

JSX에 대해 더 알고 싶다면, React 팀의 [JSX in Depth](https://reactjs.org/docs/jsx-in-depth.html) 기사를 참고하세요.

## 첫번째 React 앱 준비하기

React를 사용하는 데에는 많은 방법이 있지만, 여기서는 커맨드-라인 인터페이스(command-line interface; CLI) 툴인 create-react-app을 사용할 겁니다. 이전에 말했듯이, 이 툴은 패키지를 설치하고 파일들을 생성하여 앞서 설명한 툴링들로 React 애플리케이션을 개발하는 과정을 신속히 처리합니다.

[create-react-app 없이 웹 사이트에 React를 추가하는 것](https://reactjs.org/docs/add-react-to-a-website.html)은 HTML 파일에서 [`<script>`](/ko/docs/Web/HTML/Element/script) 요소들을 복사해오는 것으로 가능하지만, create-react-app CLI는 React 애플리케이션을 만드는 가장 흔한 시작점입니다. 애플리케이션을 빌드하는 데에는 더 많은 시간이 걸리나 설정에 걸리는 시간은 줄일 수 있습니다.

### 요구되는 것들

create-react-app을 사용하기 위해선 [Node.js](https://nodejs.org/en/)를 설치해야 합니다. LTS(오랜 기간 지원된; long-term support) 버전을 사용하는 것을 추천합니다. Node는 npm (the node package manager)와 npx (the node package runner)를 포함합니다.

Node 대신에 Yarn package manager를 사용할 수도 있습니다. 하지만 이 튜토리얼의 설정에서는 npm을 사용하는 것을 권고합니다. npm과 yarn에 대해 더 자세한 정보는 [Package management basics](/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)를 참고하세요.

Windows를 이용하고 있다면 이 튜토리얼에서 언급되는 터미널 커맨드를 사용하기 위해, Unix/MacOS 터미널과 같은 기능을 제공하는 소프트웨어를 설치해야 합니다. **Gitbash** ([git for Windows toolset](https://gitforwindows.org/)의 일부) 혹은 **[Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about)** (**WSL**) 모두 적합합니다. 이 소프트웨어들이나 일반적인 터미널 커맨드에 대해서 더 자세히 알고 싶다면 [Command line carsh course](/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)를 참고하세요.

그리고 React와 ReactDOM이 꽤 최신 브라우저들에서만 작동한다는 것을 명심하세요. IE9+는 몇몇 폴리필을 통하여 가능합니다. 튜토리얼에서는 Firefox, Microsoft Edge, Safari, 혹은 Chrome과 같은 최신 브라우저를 사용하기를 권장합니다.

아래에서 더 자세한 정보를 찾아보세요.

- ["What is npm" on nodejs.org](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)
- ["Introducing npx" on the npm blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [The create-react-app documentation](https://create-react-app.dev/)

### 앱 초기화

create-react-app은 애플리케이션의 이름을 인수로 가집니다. create-react-app은 이 이름을 새로운 디렉토리를 만들 때 사용한 후 그 안에 중요한 파일들을 생성합니다. `cd`로 하드 드라이브에 애플리케이션을 저장하고 싶은 장소까지 이동하고 다음 명령어를 터미널에 실행하세요.

```bash
npx create-react-app moz-todo-react
```

이 명령어는 `moz-todo-react` 디렉토리를 만들고 다음과 같은 일들을 합니다.

- 앱의 기능에 필수적인 npm 패키지들을 설치합니다.
- 애플리케이션을 시작하고 서비스하기 위한 스크립트를 작성합니다.
- 기본적인 앱 아키텍처를 정의하는 파일과 디렉토리의 구조를 만듭니다.
- 컴퓨터에 깃이 설치되어있다면, 디렉토리를 깃 레포지토리로 초기화합니다.

> **참고:** yarn package manager를 설치했다면, create-react-app은 그것을 npm 대신 기본으로 사용할 것입니다. 두 패키지 매니저가 모두 설치되어있고 NPM을 명시적으로 사용하길 원한다면, create-react-app을 실행할 때 플래그 `--use-npm`을 사용하면 됩니다.

```bash
npx create-react-app moz-todo-react --use-npm
```

</div>

create-react-app은 실행되는 동안 터미널에 메시지들을 출력할 것입니다. 이건 매우 정상적인 일입니다! 몇 분 정도 걸리니, 차 한 잔 만들기에 좋은 시간이에요.

이 과정이 완료되면 `moz-todo-react` 디렉토리 안으로 `cd`를 실행한 후 `npm start` 커맨드를 실행하세요. create-react-app에 의해 설치된 스크립트는 localhost:3000에서 실행되고 있는 로컬 서버에서 실행을 시작할 것입니다. 새로운 브라우저 탭을 열고 앱을 열면, 브라우저는 다음과 같이 무언가를 표시하고 있을 겁니다.

![Screenshot of Firefox MacOS, open to localhost:3000, showing the default create-react-app application](./default-create-react-app.png)

### 애플리케이션 구조

create-react-app은 React 애플리케이션을 개발하기 위해 필요한 모든 것을 제공합니다. 초기 파일 구조는 다음과 같습니다:

```
moz-todo-react
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

**`src`** 디렉토리는 애플리케이션의 소스 코드가 있는 곳으로서, 가장 많은 시간을 보낼 곳입니다.

**`public`** 디렉토리는 앱을 개발하는 동안 브라우저가 읽을 파일들을 가지고 있습니다; 이들 중 가장 중요한 것은 `index.html` 입니다. React는 코드를 이 html 파일에 주입하여 브라우저가 코드를 실행할 수 있게 합니다. create-react-app function에 도움이 되는 다른 마크업도 있기 때문에, 무엇을 하는지 모른다면 함부로 편집하지 않도록 주의하세요. 애플리케이션의 타이틀에 반영되도록 `index.html` 파일의 [`<title>`](/ko/docs/Web/HTML/Element/title) 요소 안의 텍스트를 바꿔야 합니다. 정확한 페이지 타이틀은 접근성을 위해 중요하니까요!

`public` 디렉토리 또한 앱의 프로덕션 버전을 빌드하고 배포할 때 퍼블리시 됩니다. 이 튜토리얼에서는 배포에 대해 다루지 않지만, [Deploying our app](/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment) 튜토리얼에 기술된 것과 비슷한 해결책을 사용할 수 있을 겁니다.

`package.json` 파일은 Node.js/npm가 프로젝트를 조직하기 위해 사용하는, 프로젝트에 관련한 정보를 포함하고 있습니다. 이 파일은 React 애플리케이션에 유일하지 않은데요; create-react-app이 이 파일을 수정합니다. 튜토리얼을 완성하기 위해 이 파일을 이해할 필요는 전혀 없지만, 더 자세히 알고 싶다면 [What is the file `package.json`? on NodeJS.org](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/) 을 참고해주세요. [Package management basics](/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) 에서도 다루고 있답니다.

## 첫번째 React 컴포넌트 `</App>` 탐색하기

React에서, **컴포넌트**(**component**)는 앱의 일부를 렌더링하는 재사용가능한 모듈입니다. 이 부분들은 클 수도 작을 수도 있지만, 대개 정확하게 정의됩니다; 이들은 단일하고 명확한 목적만을 위해 일합니다.

`src/App.js`를 열어봅시다. 이 파일은 첫번째 컴포넌트 `App`과 몇 줄의 코드를 포함하고 있습니다.

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
```

`App.js` 파일은 세 개의 부분으로 나눌 수 있습니다: 상단의 [`import`](/ko/docs/Web/JavaScript/Reference/Statements/import) 문들, 중앙의 `App` 컴포넌트, 그리고 하단의 [`export`](/ko/docs/Web/JavaScript/Reference/Statements/export) 문들. 많은 React 컴포넌트들이 이 패턴을 따르고 있습니다.

### Import 문

상단의 `import` 문은 `App.js`가 다른 곳에 정의된 코드들을 사용할 수 있게 해줍니다. 이 명령문들을 자세히 들여다봅시다.

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
```

첫 번째 명령문은 React 라이브러리를 불러옵니다. React가 우리가 작성한 JSX를 `React.createElement()`로 변환하기 때문에, 모든 React 컴포넌트들은 반드시 `React` 모듈을 불러와야 합니다. 이 단계를 건너뛰면 애플리케이션은 오류를 발생시킬 겁니다.

두 번째 명령문은 `./logo.svg`로부터 로고를 불러옵니다. `./`를 경로의 시작에, `.svg` 익스텐션을 마지막에 사용한다는 것은 해당 파일이 로컬에 위치하며 JavaScript 파일이 아니라는 것을 뜻합니다. 실제로, `logo.svg` 파일은 소스 디렉토리 안에 있습니다.

`React` 모듈을 불러올 때는 경로나 익스텐션을 쓰지 않습니다. 이것들은 로컬 파일이 아니라, `package.json`의 의존성 목록에 포함되어 있습니다. 로컬과 이들의 구분을 꼭 주의하세요!

세 번째 명령문은 `App` 컴포넌트에 관련된 CSS를 불러옵니다. 어떤 변수 이름이나 `from` 지시가 없다는 것을 주목해주세요. 이 특별한 import 구문은 JavaScript 모듈 구문이 아니라 웹팩(Webpack)으로부터 온 것입니다. 웹팩은 create-react-app이 우리의 모든 JavaScript 파일을 함께 번들하고 브라우저에 제공하기 위해 사용하는 도구입니다.

### `App` 컴포넌트

`import`문들 이후, `App`이라고 이름 지어진 함수가 있습니다. 많은 JavaScript 커뮤니티가 `helloWorld`와 같은 카멜-케이스(camel-case) 이름을 선호하는 반면에, React 컴포넌트는 파스칼-케이스(pascal-case) 변수 이름을 사용합니다. 이는 JSX 요소가 React 컴포넌트이지, 정규 HTML 태그가 아니라는 것을 분명히 하기 위해서입니다. `App` 함수를 `app`으로 이름 짓는다면 브라우저는 오류를 발생시킬 겁니다.

이제 `App`을 자세히 들여다보겠습니다.

```js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
```

`App` 함수는 JSX 표현식을 반환합니다. 이 표현식은 브라우저가 궁극적으로 DOM에 렌더링할 것을 정의하고 있습니다.

표현식의 어떤 요소들은 HTML에 쓰인 것과 같이 속성들을 가지고 `attribute="value"`와 같은 패턴을 따르고 있습니다. 세 번째 줄에서, 여는 [`div`](/ko/docs/Web/HTML/Element/div) 태그는 `className` 속성을 가지고 있습니다. 이건 HTML의 [`class`](/ko/docs/Web/HTML/Global_attributes/class) 속성과 같지만, JSX는 JavaScript이므로 `class` 라는 단어를 쓸 수 없습니다. 거꾸로 말하자면, JavaScript는 이미 이 단어를 특별한 목적을 위해 사용하고 있어 코드 안에서 사용한다면 문제를 발생시킬 것입니다. 같은 이유로 몇 개의 다른 HTML 속성들이 HTML에서 그랬던 것과는 다르게 JSX에서 쓰이고 있습니다.

여섯 번째 줄의 [`<p>`](/ko/docs/Web/HTML/Element/p) 태그 안의 텍스트를 "Hello, world!"로 바꾸고, 파일을 저장하세요. 브라우저에서 `http://localhost:3000`에 실행되고 있는 개발 서버에 즉시 변화가 렌더링 되는 것을 볼 수 있을 겁니다. 이제 [`<a>`](/ko/docs/Web/HTML/Element/a) 태그를 지우고 저장해보세요. "Learn React" 링크가 사라질 겁니다.

이제 `App` 컴포넌트는 아래와 같을 겁니다.

```js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, World!</p>
      </header>
    </div>
  );
}
```

### Export 문

`App.js` 파일의 최하단에 있는 `export default App`라는 명령문은 `App` 컴포넌트들을 다른 모듈에서 사용할 수 있게 합니다.

## Interrogating the index

`src/index.js`를 열어봅시다. `App` 컴포넌트가 사용된 곳이기 때문입니다. 이 파일은 앱의 진입점이고, 초기에는 이렇게 생겼습니다.

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

`App.js`와 같이, 파일은 자신을 실행하기 위해 필요한 JS 모듈이나 다른 에셋들을 모두 임포트하며 시작합니다. `src/index.css`는 전체 앱에 적용되는 전역 스타일을 나타냅니다. `App` 컴포넌트가 임포트된 것도 볼 수 있는데요, 이것은 `App.js`의 하단에 있는 `export` 문 덕분에 가능한 것입니다.

일곱 번째 줄은 React의 `ReactDOM.render()` 함수를 호출하고 있습니다. 두 개의 인수는 다음과 같습니다:

- 렌더링하기 원하는 컴포넌트. 여기서는 `<App />`입니다.
- 렌더링 되길 원하는 컴포넌트들이 포함된 DOM 요소. 여기서는 `root`라는 ID를 가진 요소입니다. `public/index.html`을 본다면, 이것이 `<body>` 내부에 있는 `<div>` 요소라는 것을 알 수 있습니다.

이 모든 것이 React에게 우리가 루트로서, 혹은 첫 번째 컴포넌트로서 `App` 컴포넌트를 렌더링하길 원한다고 알려줍니다.

> **참고:** JSX에서, React 컴포넌트와 HTML 요소는 반드시 닫는 태그가 있어야 합니다. `<App>` 혹은 `<img>`라고만 쓰는 것은 오류를 발생시킬 것입니다.

[Service workers](/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers)는 앱 성능에 도움이 되고 오프라인에서 일할 수 있는 웹 애플리케이션의 기능을 제공하는 특별한 코드들이지만, 이 기사에서 다루는 범위는 아닙니다. 다섯 번째 줄과 코드 가장 아래에 있는 것은 지울 수 있습니다.

최종적인 `index.js`는 다음과 같을 것입니다:

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

## 변수와 props

다음으로, React에서 컴포넌트들을 편집하고 데이터와 작업하는 것을 조금 더 편하게 해주는 JavaScript 스킬들을 사용해보겠습니다. 변수가 어떻게 JSX 안에서 사용되는지에 대해, 그리고 props에 대해 소개합니다. props는 컴포넌트에 데이터를 전달하는 방법이며, 전달된 후에는 변수를 통하여 접근할 수 있습니다.

### JSX 안의 변수들

`App.js`으로 돌아가서, 아홉 번째 줄을 주목해봅시다:

```js
<img src={logo} className="App-logo" alt="logo" />
```

여기, `<img />` 태그의 `src` 속성값은 중괄호 안에 들어가 있습니다. 이것이 JSX가 변수를 인식하는 방법입니다. React는 `{logo}`를 보고 앱의 두번째 줄에 임포트된 로고를 가리키고 있음을 깨닫습니다. 그리고 로고 파일을 얻어와 그것을 렌더링합니다.

우리만의 변수를 만들어보도록 합시다. `App`의 반환문 이전에 `const subject = 'React';`를 추가합니다. `App` 컴포넌트는 이제 이런 모습을 가지게 됩니다:

```js
function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, World!</p>
      </header>
    </div>
  );
}
```

여덞 번째 줄의 단어 "world" 대신 우리가 만든 `subject` 변수를 사용해보도록 하겠습니다. 다음과 같습니다.

```js
function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, {subject}!</p>
      </header>
    </div>
  );
}
```

이제 저장하면 브라우저는 "Hello, world!" 대신에 "Hello, React!"를 표시할 것입니다.

변수는 편리하지만 방금 설정한 변수가 React의 기능들을 잘 활용한 것은 아닙니다. 이 변수는 나중에 props가 들어올 곳입니다.

### 컴포넌트 props

**prop**는 React 컴포넌트에 전달되는 모든 데이터를 뜻합니다. React props는 HTML 속성과 비교할 수 있습니다. HTML 요소는 속성을 가지고 있고 React 컴포넌트는 props를 가지고 있습니다. props는 컴포넌트 호출 안에 쓰이며 `prop="value"`와 같이 HTML 속성과 동일한 구문을 씁니다. React에서, 데이터의 흐름은 단방향(unidirectional)입니다: props는 오직 부모 컴포넌트에서 자식 컴포넌트로 내려갑니다. 그리고 props는 오로지 읽기 전용입니다.

`index.js`를 열고 `<App />` 호출에 첫 번째 prop를 전달해봅시다.

`<App />` 컴포넌트 호출에 `subject`의 prop를 `Clarice`라는 값으로 추가해봅시다. 이제 코드는 다음과 같을 것입니다:

```js
ReactDOM.render(<App subject="Clarice" />, document.getElementById("root"));
```

`App.js`로 돌아가서, App 함수를 다시 들여다봅시다. 간결함을 위해 `return` 문으로 요약하면 다음과 같이 읽어볼 수 있습니다:

```js
function App() {
  const subject = "React";
  return (
    // return statement
  );
}
```

`App` 함수의 시그네처(signature)를 바꾸어, `props`를 파라미터로 써 봅시다. 그리고 `subject` 상수를 지워 봅시다. 다른 함수 파라미터처럼, `props`를 브라우저 콘솔에 출력하도록 `console.log()`에 전달할 수 있습니다. `return` 문 이전에 다음과 같이 한 번 적어보세요.

```js
function App(props) {
  console.log(props);
  return (
    // return statement
  );
}
```

파일을 저장하고 브라우저의 JavaScript 콘솔을 검사해봅시다. 다음과 같이 출력된 것을 볼 수 있을 겁니다:

```js
Object { subject: "Clarice" }
```

객체 속성 `subject`는 `<App />` 컴포넌트 호출에 추가한 `subject` prop에 상응합니다. 그리고 문자열 `Clarice`는 prop의 값에 상응합니다. React에서 컴포넌트 props는 항상 이러한 방식으로 객체에 포함됩니다.

이제 `subject`가 props 중 하나이니, `App.js`에서 사용해봅시다. `subject` 상수를 바꾸어 문자열 `React`를 정의하는 대신에 `props.subject`의 값을 읽도록 합시다. 원한다면 `console.log()`를 지워도 좋습니다.

```js
function App(props) {
  const subject = props.subject;
  return (
    // return statement
  );
}
```

저장한다면 앱은 "Hello, Clarice!"로 당신을 환영해줄 것입니다. `index.js`로 돌아가 `subject`의 값을 수정하고, 저장한다면 텍스트 또한 바뀔 것입니다.

## 요약

이것으로 로컬에 React를 설치하는 방법과 입문 앱을 생성하는 방법, 그리고 기본적으로 어떻게 작동하는지를 포함하여 React에 대한 첫 탐색이 끝났습니다. 다음 기사에서는 첫 번째 애플리케이션으로 적절한 투두 리스트 만들기를 시작해 볼 것입니다. 하지만 그전에 우리가 배운 것들을 상기해봅시다.

React에서는:

- 컴포넌트는 필요한 모듈을 불러오고 그들 자신을 파일의 하단에서 내보낼 수 있습니다.
- 컴포넌트 함수는 `PascalCase`로 명명합니다.
- JSX 변수는 `{so}`와 같이 중괄호 사이에 넣어 읽을 수 있습니다.
- JSX 속성은 HTML 속성과 다르기 때문에 JavaScript의 예약어와 충돌하지 않습니다. 예를 들어 HTML의 `class`는 JSX에서는 `className`입니다. 여러 개의 단어로 된 속성을 `camelCase`로 명명한다는 것을 기억해주세요.
- props는 컴포넌트 호출에 속성처럼 쓰이고, 컴포넌트로 전달됩니다.

<p>{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}</p>
