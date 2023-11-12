---
title: React todo list 시작하기
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

여러분이 React로 개념 증명을 만드는, 곧 사용자가 원하는 작업을 추가, 편집, 그리고 삭제할 수 있으며, 작업을 삭제하지 않고 완료로 표시할 수도 있는 앱을 만드는 작업을 맡게 되었다고 가정해 보겠습니다. 이 기사는 기본 `App` 컴포넌트 구조와 스타일링을 설정하는 방법에 대해서 다루며, 여러분은 개별 컴포넌트 정의와 상호작용성을 배울 준비를 갖추게 될 겁니다.

> **참고:** 여러분의 코드를 우리의 것과 비교하고 싶다면 [todo-react repository](https://github.com/mdn/todo-react) 에서 최종적인 버전의 샘플 React 앱 코드를 확인해보세요. 실행 중인 라이브 버전은 <https://mdn.github.io/todo-react-build/> 에서 볼 수 있습니다.

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">필요한 사전 지식:</th>
   <td>
    코어 <a href="/ko/docs/Learn/HTML">HTML</a>, <a href="/ko/docs/Learn/CSS">CSS</a>, 및 <a href="/ko/docs/Learn/JavaScript">JavaScript</a> 언어에 익숙할 것. <a href="/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">터미널/커맨드라인</a>에 대한 지식.
   </td>
  </tr>
  <tr>
   <th scope="row">목표:</th>
   <td>투두 리스트를 만들고 기본 <code>App</code> 구조와 스타일링을 설정한다.</td>
  </tr>
 </tbody>
</table>

## 우리가 만들 애플리케이션의 유저 스토리

소프트웨어 개발에서 유저 스토리(user story)는 사용자의 관점에서 실행 가능한 목표를 뜻합니다. 개발을 시작하기 전에 유저 스토리를 정의하는 것은 매우 도움이 됩니다. 우리의 애플리케이션은 다음과 같은 스토리를 만족해야 합니다:

나는 사용자로서, 다음의 것들을 할 수 있다:

- 작업 목록 읽기
- 마우스나 키보드로 작업 추가하기
- 마우스나 키보드를 사용하여 작업을 완료로 표시하기
- 마우스나 키보드를 사용하여 작업 삭제하기
- 마우스나 키보드를 사용하여 작업 편집하기
- 작업을 특정한 집합으로 나누어 보기: 전체 작업, 진행 중인 작업, 혹은 완료된 작업들.

이 스토리들을 하나하나 다뤄보겠습니다.

## 프로젝트를 실행하기 전 점검하기

create-react-app은 우리의 프로젝트에서 전혀 사용하지 않을 파일을 몇 개 만듭니다.

- 컴포넌트마다 스타일 시트를 만들지 않을 것이므로, 우선 `App.js`의 상단에 `App.css`를 임포트하고 있는 문을 지웁니다.
- `logo.svg` 파일 역시 사용하지 않을 것이므로, 이것을 임포트하고 있는 문 역시 삭제합니다.

그러고 나서 필요하지 않은 파일들을 삭제하기 위해 터미널에 아래의 커맨드들을 복사, 붙여넣기 합니다. 애플리케이션의 루트 디렉토리에서 터미널을 실행하고 있는지 확인하세요!

```shell
# 프로젝트의 src 디렉토리로 이동
cd src
# 파일들을 삭제
rm -- App.test.js App.css logo.svg serviceWorker.js setupTests.js
# 프로젝트의 루트 디렉토리로 다시 돌아오기
cd ..
```

참고:

- 삭제하려는 파일 중 두 개는 애플리케이션을 테스트하기 위해 사용됩니다. 이 기사에서는 테스팅에 대해 다루지 않습니다.
- 위의 터미널 작업을 수행하기 위해 서버를 멈추었다면, `npm start`를 사용하여 다시 시작해야 합니다.

## 프로젝트 시작 코드

프로젝트를 시작하기 위해 여러분이 지금 가지고 있는 것을 대신할 `App()` 함수와 애플리케이션을 꾸밀 CSS를 제공하겠습니다.

### JSX

아래의 스니펫을 복사하고 기존의 `App()` 함수 대신 `App.js`에 붙여넣으세요.

```js
function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
```

이제 `public/index.html`을 열고 [`<title>`](/ko/docs/Web/HTML/Element/title) 요소의 텍스트를 `TodoMatic`으로 바꾸세요. 이렇게 하면 우리의 애플리케이션 상단의 [`<h1>`](/ko/docs/Web/HTML/Element/Heading_Elements)과 일치할 겁니다.

```js
<title>TodoMatic</title>
```

브라우저를 새로고침하면, 아래 이미지처럼 보일 거예요.

![todo-matic app, unstyled, showing a jumbled mess of labels, inputs, and buttons](./unstyled-app.png)

예쁘지 않고 아무런 기능도 갖추지 않았지만, 괜찮습니다! 곧 꾸밀 거니까요. 우선, JSX가 유저 스토리에 어떻게 대응하는지 살펴봅시다:

- 새로운 작업을 쓰기 위한 [`<input type="text">`](/ko/docs/Web/HTML/Element/input/text)와 폼(form)을 제출하기 위한 버튼을 가진 [`<form>`](/ko/docs/Web/HTML/Element/form) 요소가 있습니다.
- 작업을 필터링하기 위한 여러 개의 버튼이 있습니다.
- 작업이 몇 개 남아있는지 알려주는 헤딩(heading)이 있습니다.
- 순서가 매겨지지 않은 세 개의 작업이 있습니다. 각각의 작업은 리스트 아이템([`<li>`](/ko/docs/Web/HTML/Element/li))이며, 편집하거나 삭제하기 위한 버튼과 완료를 표시할 체크 박스를 가지고 있습니다.

폼은 작업을 _만들_ 수 있게 해줍니다; 버튼들은 작업들을 _필터링할_ 수 있게 해줍니다; 헤딩과 리스트는 작업들을 _읽을_ 수 있게 해줍니다. 작업을 _편집하는_ UI는 현재는 없습니다. 이것도 괜찮습니다 – 나중에 만들 거니까요.

### 접근성 기능

익숙하지 않은 속성을 발견했을 겁니다. 예를 들어:

```js
<button type="button" className="btn toggle-btn" aria-pressed="true">
  <span className="visually-hidden">Show </span>
  <span>all</span>
  <span className="visually-hidden"> tasks</span>
</button>
```

`aria-pressed`은 보조 기술(예: 스크린 리더)에게 하나의 버튼이 두 개의 상태 `pressed`와 `unpressed`로 있을 수 있다는 것을 알려줍니다. `on`과 `off`라고 생각해보세요. 값을 `true`로 설정하는 것은 버튼을 기본적으로 눌린 상태라는 것을 의미합니다.

클래스 `visually-hidden`는 아직 CSS를 연결하지 않았으므로 아직 아무런 이펙트도 없습니다. 제대로 스타일을 설정하면 이 클래스를 가진 모든 요소가 시력이 정상인 사용자에게는 숨겨지며 스크린 리더 사용자에게만 보입니다 — 이 단어들은 시력이 정상인 사용자들에게 필요하지 않기 때문입니다; 단어들은 추가적인 시각적 맥락(visual context)을 가지고 있지 않은 스크린 리더 사용자들에게 버튼이 무엇을 하는지 더 많은 정보를 제공합니다.

아래에서 [`<ul>`](/ko/docs/Web/HTML/Element/ul) 요소를 찾을 수 있을 겁니다.

```js
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading"
>
```

`role` 속성은 보조 기술이 태그가 나타내고 있는 요소의 종류가 무엇인지 설명하는 데 도움이 됩니다. `<ul>`은 기본적으로 리스트처럼 취급되지만, 우리가 추가할 스타일은 리스트의 기능성을 해칩니다. `role="list"`는 `<ul>` 요소가 "리스트"의 의미를 회복하도록 합니다. 이것이 왜 필요한지 알고 싶다면, [Scott O'Hara's article, "Fixing Lists"](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html)을 참고하세요.

`aria-labelledby` 속성은 보조 기술에게 리스트 헤딩을 헤딩 아래의 리스트의 목적을 나타내는 라벨로 사용하고 있음을 알립니다. 이러한 연관을 만드는 것은 리스트가 더욱 정보가 많은 맥락을 가지게 하여, 스크린 리더 사용자가 리스트의 목적을 더 잘 이해할 수 있도록 합니다.

마지막으로, 리스트 항목 안의 라벨과 인풋들은 JSX에 고유한 속성을 가지고 있습니다.

```js
<input id="todo-0" type="checkbox" defaultChecked={true} />
<label className="todo-label" htmlFor="todo-0">
  Eat
</label>
```

`<input/ >`의 `defaultChecked` 속성은 React가 초기에 이 체크박스를 체크하도록 합니다. HTML에서처럼 `checked`를 사용한다면, React는 체크박스에 대한 이벤트를 다루는 것과 관련한 경고를 브라우저 콘솔에 출력할 것입니다. 지금은 크게 걱정하지 마세요 — 나중에 이벤트를 사용할 때 이야기할테니까요.

`htmlFor` 속성은 HTML에서는 `for` 속성과 대응합니다. JSX에서는 `for`을 속성으로 사용하지 않는데, `for`이 예약어(reserved word)이기 때문입니다. 그래서 React는 `htmlFor`을 대신 사용합니다.

참고:

- JSX 속성에 불리언 값들(`true`와 `false`)를 사용하기 위해서는 이 값들을 중괄호로 감싸야 합니다. `defaultChecked="true"`라고 적는다면, `defaultChecked`의 값은 문자열 리터럴인 `"true"`가 될 겁니다. 꼭 기억하세요 — JSX는 JavaScript이지, HTML이 아닙니다!
- 이전의 코드 스니펫에서 사용되었던 `aria-pressed` 속성은 `"true"`라는 값을 가지는데, 이것은 `aria-pressed`가 `checked`가 있는 방식에서 진짜 불리언 속성이 아니기 때문입니다.

### 스타일 적용하기

`src/index.css`에 기존에 있던 것 대신 아래의 CSS 코드를 붙여넣기하세요.

```css
/* RESETS */
*,
*::before,
*::after {
  box-sizing: border-box;
}
*:focus {
  outline: 3px dashed #228bec;
  outline-offset: 0;
}
html {
  font: 62.5% / 1.15 sans-serif;
}
h1,
h2 {
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
}
button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
}
button::-moz-focus-inner {
  border: 0;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
input[type="text"] {
  border-radius: 0;
}
body {
  width: 100%;
  max-width: 68rem;
  margin: 0 auto;
  font:
    1.6rem/1.25 Arial,
    sans-serif;
  background-color: #f5f5f5;
  color: #4d4d4d;
}
@media screen and (min-width: 620px) {
  body {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
/*END RESETS*/
/* GLOBAL STYLES */
.form-group > input[type="text"] {
  display: inline-block;
  margin-top: 0.4rem;
}
.btn {
  padding: 0.8rem 1rem 0.7rem;
  border: 0.2rem solid #4d4d4d;
  cursor: pointer;
  text-transform: capitalize;
}
.btn.toggle-btn {
  border-width: 1px;
  border-color: #d3d3d3;
}
.btn.toggle-btn[aria-pressed="true"] {
  text-decoration: underline;
  border-color: #4d4d4d;
}
.btn__danger {
  color: #fff;
  background-color: #ca3c3c;
  border-color: #bd2130;
}
.btn__filter {
  border-color: lightgrey;
}
.btn__primary {
  color: #fff;
  background-color: #000;
}
.btn-group {
  display: flex;
  justify-content: space-between;
}
.btn-group > * {
  flex: 1 1 49%;
}
.btn-group > * + * {
  margin-left: 0.8rem;
}
.label-wrapper {
  margin: 0;
  flex: 0 0 100%;
  text-align: center;
}
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}
[class*="stack"] > * {
  margin-top: 0;
  margin-bottom: 0;
}
.stack-small > * + * {
  margin-top: 1.25rem;
}
.stack-large > * + * {
  margin-top: 2.5rem;
}
@media screen and (min-width: 550px) {
  .stack-small > * + * {
    margin-top: 1.4rem;
  }
  .stack-large > * + * {
    margin-top: 2.8rem;
  }
}
.stack-exception {
  margin-top: 1.2rem;
}
/* END GLOBAL STYLES */
.todoapp {
  background: #fff;
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  position: relative;
  box-shadow:
    0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
}
@media screen and (min-width: 550px) {
  .todoapp {
    padding: 4rem;
  }
}
.todoapp > * {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}
.todoapp > form {
  max-width: 100%;
}
.todoapp > h1 {
  display: block;
  max-width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
}
.label__lg {
  line-height: 1.01567;
  font-weight: 300;
  padding: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;
}
.input__lg {
  padding: 2rem;
  border: 2px solid #000;
}
.input__lg:focus {
  border-color: #4d4d4d;
  box-shadow: inset 0 0 0 2px;
}
[class*="__lg"] {
  display: inline-block;
  width: 100%;
  font-size: 1.9rem;
}
[class*="__lg"]:not(:last-child) {
  margin-bottom: 1rem;
}
@media screen and (min-width: 620px) {
  [class*="__lg"] {
    font-size: 2.4rem;
  }
}
.filters {
  width: 100%;
  margin: unset auto;
}
/* Todo item styles */
.todo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.todo > * {
  flex: 0 0 100%;
}
.todo-text {
  width: 100%;
  min-height: 4.4rem;
  padding: 0.4rem 0.8rem;
  border: 2px solid #565656;
}
.todo-text:focus {
  box-shadow: inset 0 0 0 2px;
}
/* CHECKBOX STYLES */
.c-cb {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.25;
  display: block;
  position: relative;
  min-height: 44px;
  padding-left: 40px;
  clear: left;
}
.c-cb > label::before,
.c-cb > input[type="checkbox"] {
  box-sizing: border-box;
  top: -2px;
  left: -2px;
  width: 44px;
  height: 44px;
}
.c-cb > input[type="checkbox"] {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  margin: 0;
  opacity: 0;
}
.c-cb > label {
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  display: inline-block;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  cursor: pointer;
  touch-action: manipulation;
}
.c-cb > label::before {
  content: "";
  position: absolute;
  border: 2px solid currentColor;
  background: transparent;
}
.c-cb > input[type="checkbox"]:focus + label::before {
  border-width: 4px;
  outline: 3px dashed #228bec;
}
.c-cb > label::after {
  box-sizing: content-box;
  content: "";
  position: absolute;
  top: 11px;
  left: 9px;
  width: 18px;
  height: 7px;
  transform: rotate(-45deg);
  border: solid;
  border-width: 0 0 5px 5px;
  border-top-color: transparent;
  opacity: 0;
  background: transparent;
}
.c-cb > input[type="checkbox"]:checked + label::after {
  opacity: 1;
}
```

코드를 저장하고 브라우저로 되돌아오면, 이제 애플리케이션은 적당한 스타일을 가지게 될 겁니다.

## 요약

이제 우리의 투두 리스트는 조금 더 진짜 애플리케이션 같아졌습니다! 문제는, 이 앱이 실제로는 아무것도 하지 않는다는 거죠. 다음 챕터에서 해결해봅시다!

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
