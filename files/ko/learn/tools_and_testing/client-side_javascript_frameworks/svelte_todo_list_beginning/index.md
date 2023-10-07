---
title: Svelte 할 일 목록 앱 시작
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning
l10n:
  sourceCommit: 4a5ceb89ac004d087669aeee3c26475c2207787f
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

이제 Svelte에서 작동하는 방식에 대한 기본적인 이해가 있으므로 예제 앱인 할 일 목록을 구축할 수 있습니다. 이 글에서는 먼저 앱의 요구되는 기능을 살펴본 다음 `Todos.svelte` 컴포넌트를 만들고 정적 마크업과 스타일을 배치하고 이어지는 문서들에서 진행할 할 일 목록 앱의 기능 개발을 시작 할 수 있는 모든 준비를 마칩니다.

우리는 사용자가 작업을 탐색, 추가 및 삭제할 수 있고 작업을 완료로 표시할 수 있기를 바랍니다. 이것이 이 튜토리얼 시리즈에서 개발할 기본 기능이 될 것이며 그 과정에서 몇 가지 고급 개념도 살펴볼 것입니다.

<table>
  <tbody>
    <tr>
      <th scope="row">전제사항:</th>
      <td>
        <p>
          적어도
          <a href="/ko/docs/Learn/HTML">HTML</a>,
          <a href="/ko/docs/Learn/CSS">CSS</a>, and
          <a href="/ko/docs/Learn/JavaScript">JavaScript</a>
          언어의 사용에 익숙하기를 권장합니다. 그리고
          <a
            href="/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >터미널/커맨트 라인</a
          >의 사용법에 대해서도 지식이 있어야합니다.
        </p>
        <p>
        당신은 앱을 컴파일하고 빌드하기 위한 노드와 npm이 설치된 터미널이 필요합니다.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        어떻게 Svelte 컴포넌트를 만드는 방법을 배우기 위해, 다른 컴포넌트 내부에 렌더링하고, props를 사용하여 데이터를 전달하고 state를 저장합니다.
      </td>
    </tr>
  </tbody>
</table>

## 함께 코드를 작성해봅시다

### Git

Git 레포지토리를 복제하세요(당신이 이미 복제를 한게 아니라면).

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

그런 다음 현재 앱의 상태로 이동하기 위해 다음을 실행하세요.

```bash
cd mdn-svelte-tutorial/02-starting-our-todo-app
```

폴더의 내용을 직접 다운로드 할 수도 있습니다.

```bash
npx degit opensas/mdn-svelte-tutorial/02-starting-our-todo-app
```

`npm install && npm run dev` 명령어로 실행하여 개발 모드에서 앱을 실행해주세요.

### REPL

REPL을 사용하여 우리와 함께 코딩하려면 <https://svelte.dev/repl/b7b831ea3a354d3789cefbc31e2ca495?version=3.23.2>에서 시작하세요.

## 할 일 목록 앱의 기능들

할 일 목록 앱이 준비되면 다음과 같이 표시됩니다.

![일반적인 할 일 목록 앱, '해야 할 일'이라는 제목이 있고 더 많은 할일을 입력할 수 있으며 할 일이 체크 박스와 함께 배열됨](01-todo-list-app.png)

이 UI를 사용하여 사용자는 다음을 수행할 수 있습니다.

- 작업 찾아보기
- 작업을 삭제하지 않고 완료/보류로 표시
- 작업 제거
- 새 작업 추가
- 상태별로 작업 필터링: 모든 작업, 활성 작업 또는 완료된 작업
- 작업 편집
- 모든 작업을 활성/완료로 표시
- 완료된 모든 작업 제거

## 첫 번째 컴포넌트 만들기

`Todos.svelte` 컴포넌트를 생성해 봅시다. 여기에는 할 일 목록이 포함됩니다.

1. 새 폴더 `src/components`를 만듭니다.

   > **참고:** `src` 폴더 안의 아무 곳에나 컴포넌트를 넣을 수 있습니다. 하지만 `components` 폴더는 따라야하는 규칙으로 인정되고 컴포넌트를 쉽게 찾을 수 있습니다.

2. 다음 내용을 포함하는 `src/components/Todos.svelte`라는 파일을 만드세요.

   ```html
   <h1>Svelte 할 일 목록</h1>
   ```

3. `public/index.html`에서 `title` 요소를 변경하여 *Svelte 할 일 목록*라는 텍스트를 포함하도록 합니다.

   ```html
   <title>Svelte 할 일 목록</title>
   ```

4. `src/App.svelte` 파일을 열고 다음의 내용으로 대체하세요.

   ```html
   <script>
     import Todos from "./components/Todos.svelte";
   </script>

   <Todos />
   ```

5. 개발 모드에서 Svelte는 컴포넌트에 존재하지 않는 속성을 지정할 때 브라우저 콘솔에 경고를 표시합니다. 이 경우에는 `App` 내부에서는 사용되지 않지만 `src/main.js` 내부의 `App` 컴포넌트를 인스턴스화할 때 지정되는 `name` 속성이 있습니다. 콘솔은 현재 "\<App>이 알 수 없는 속성 '이름'으로 생성되었습니다"라는 메시지를 표시해야 합니다. 이를 제거하려면 `src/main.js`에서 `name` 속성을 제거하세요. 이제 다음과 같이 표시됩니다.

   ```js
   import App from "./App.svelte";

   const app = new App({
     target: document.body,
   });

   export default app;
   ```

이제 테스트 서버 URL을 확인하면 `Todos.svelte` 컴포넌트가 렌더링되는 것을 볼 수 있습니다.

![basic component rendering which a title that says 'Svelte to-do list'](02-todos-component-rendered.png)

## 정적 마크업 추가

당장은 우리는 앱의 정적 마크업 표현으로 시작할 것이므로 앱이 어떻게 보이는지 확인할 수 있습니다. 다음을 복사하여 `Todos.svelte` 컴포넌트 파일에 붙여넣고 기존 콘텐츠를 대체합니다.

```html
<!-- Todos.svelte -->
<div class="todoapp stack-large">
  <!-- 새로운 할일 -->
  <form>
    <h2 class="label-wrapper">
      <label for="todo-0" class="label__lg"> 무엇을 해야하나요? </label>
    </h2>
    <input type="text" id="todo-0" autocomplete="off" class="input input__lg" />
    <button type="submit" disabled="" class="btn btn__primary btn__lg">
      추가
    </button>
  </form>

  <!-- 필터 -->
  <div class="filters btn-group stack-exception">
    <button class="btn toggle-btn" aria-pressed="true">
      <span class="visually-hidden">나타내기</span>
      <span>모두 보기</span>
      <span class="visually-hidden">작업</span>
    </button>
    <button class="btn toggle-btn" aria-pressed="false">
      <span class="visually-hidden">나타내기</span>
      <span>활성화</span>
      <span class="visually-hidden">작업</span>
    </button>
    <button class="btn toggle-btn" aria-pressed="false">
      <span class="visually-hidden">나타내기</span>
      <span>완료</span>
      <span class="visually-hidden">작업</span>
    </button>
  </div>

  <!-- 할 일 상태 -->
  <h2 id="list-heading">3개 항목 중 2개 완료</h2>

  <!-- 할 일들 -->
  <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
    <!-- 할 일 1 (수정 모드) -->
    <li class="todo">
      <div class="stack-small">
        <form class="stack-small">
          <div class="form-group">
            <label for="todo-1" class="todo-label">
              'Svelte 시작 앱 만들기'의 새 이름
            </label>
            <input
              type="text"
              id="todo-1"
              autocomplete="off"
              class="todo-text" />
          </div>
          <div class="btn-group">
            <button class="btn todo-cancel" type="button">
              취소
              <span class="visually-hidden">Svelte 스타터 앱 만들기</span>
            </button>
            <button class="btn btn__primary todo-edit" type="submit">
              저장
              <span class="visually-hidden"
                >Svelte 스타터 앱 만들기의 새 이름</span
              >
            </button>
          </div>
        </form>
      </div>
    </li>

    <!-- 할 일 2 -->
    <li class="todo">
      <div class="stack-small">
        <div class="c-cb">
          <input type="checkbox" id="todo-2" checked />
          <label for="todo-2" class="todo-label"> 첫 번째 컴포넌트 생성 </label>
        </div>
        <div class="btn-group">
          <button type="button" class="btn">
            수정
            <span class="visually-hidden">첫 번째 새로운 컴포넌트 생성</span>
          </button>
          <button type="button" class="btn btn__danger">
            삭제
            <span class="visually-hidden">첫 번째 새로운 컴포넌트 생성</span>
          </button>
        </div>
      </div>
    </li>

    <!-- 할 일 3 -->
    <li class="todo">
      <div class="stack-small">
        <div class="c-cb">
          <input type="checkbox" id="todo-3" />
          <label for="todo-3" class="todo-label"> 나머지 튜토리얼 완료 </label>
        </div>
        <div class="btn-group">
          <button type="button" class="btn">
            수정
            <span class="visually-hidden">나머지 튜토리얼 완료</span>
          </button>
          <button type="button" class="btn btn__danger">
            삭제
            <span class="visually-hidden">나머지 튜토리얼 완료</span>
          </button>
        </div>
      </div>
    </li>
  </ul>

  <hr />

  <!-- 다른 액션 -->
  <div class="btn-group">
    <button type="button" class="btn btn__primary">모두 체크</button>
    <button type="button" class="btn btn__primary">완전히 삭제</button>
  </div>
</div>
```

렌더링된 것을 다시 확인하면 다음과 같이 표시됩니다.

![A to-do list app, but unstyled, with a title of `what needs to be done`, inputs, checkboxes, etc.](03-unstyled-todo-app.png)

위의 HTML 마크업은 스타일이 좋지 않으며 기능적으로도 쓸모가 없습니다. 그렇지만 마크업을 살펴보고 이것이 우리가 원하는 기능과 어떤 관련이 있는지 살펴보겠습니다.

- 새 작업을 입력하기 위한 레이블 및 텍스트 상자
- 작업 상태별로 필터링하는 세 개의 버튼
- 총 작업 수 및 완료된 작업을 표시하는 레이블
- 각 작업에 대한 항목을 포함하는 정렬되지 않은 목록
- 작업이 편집 중일 때, 각 항목에는 입력과 수정 사항을 취소하거나 저장하는 두 개의 버튼이 있습니다.
- 작업이 편집되지 않는 경우, 완료 상태를 설정하는 확인란과 작업을 편집하거나 삭제하는 두 개의 버튼이 있습니다.
- 마지막으로 모든 작업을 선택/선택 취소하고 완료된 작업을 제거하는 두 개의 버튼이 있습니다.

이어지는 문서에는 이러한 모든 기능이 작동하는 것 외에도 더 많은 기능을 얻을 수 있습니다.

### 할 일 목록의 접근성 관련 기능

여기에서 몇 가지 특이한 특성을 발견할 수 있습니다. 예를 들어

```html
<button class="btn toggle-btn" aria-pressed="true">
  <span class="visually-hidden">나타내기</span>
  <span>모두 보기</span>
  <span class="visually-hidden">작업</span>
</button>
```

여기서 'aria-pressed'는 버튼이 '누름' 또는 '누르지 않음'의 두 가지 상태 중 하나일 수 있음을 보조 기술(예: Screen Reader)에 알려줍니다. 켜짐과 꺼짐에 대한 아날로그로 생각하십시오. 값을 'true'로 설정하면 기본적으로 버튼을 누른 상태가 됩니다.

CSS를 포함하지 않았기 때문에 `visual-hidden` 클래스는 아직 효과가 없습니다. 하지만 스타일을 적용하면 이 클래스의 모든 요소는 화면을 볼 수 있는 사용자에게는 숨겨지고 Screen Reader 사용자는 계속 사용할 수 있습니다. 이는 볼 수 있는 사용자에게는 이러한 단어(클래스, 마크업)가 필요하지 않기 때문입니다. 추가 시각적 컨텍스트가 없는 Screen Reader 사용자를 위해 버튼이 수행하는 작업에 대한 자세한 정보를 제공하기 위해 존재합니다.

아래에서 다음 `<ul>` 요소를 찾을 수 있습니다.

```html
<ul
  role="list"
  className="todo-list stack-large"
  aria-labelledby="list-heading"></ul>
```

'role' 속성은 보조 기술이 요소가 어떤 의미론적 가치를 가지고 있는지 또는 그 목적이 무엇인지 설명하는 데 도움이 됩니다. `<ul>`은 기본적으로 목록처럼 취급되지만 추가하려는 스타일로 인해 해당 기능이 중단됩니다. 'role' 속성은 `<ul>` 요소에 대한 "목록" 의미를 복원합니다. 이것이 필요한 이유에 대해 자세히 알아보려면 Scott O'Hara의 기사 "Fixing Lists"를 참조하십시오.

`aria-labelledby` 속성은 보조 기술에 `id`가 `list-heading`인 `<h2>`를 아래 목록의 목적을 설명하는 레이블로 취급하고 있음을 알려줍니다. 이 연결을 만들면 목록에 더 많은 정보를 제공하여 Screen Reader 사용자가 목록의 목적을 더 잘 이해할 수 있습니다.

지금은 Svelte가 접근성을 다루는 방법에 대해 이야기하기에 좋은 시간인 것 같습니다. 지금 해봅시다.

## Svelte 접근성 지원

Svelte는 접근성을 특별히 강조합니다. 그 의도는 개발자가 "기본적으로" 더 접근하기 쉬운 코드를 작성하도록 장려하는 것입니다. 컴파일러이기 때문에 Svelte는 HTML 템플릿을 정적으로 분석하여 컴포넌트가 컴파일될 때 접근성 경고를 제공할 수 있습니다.

접근성(a11y로 줄임)이 항상 올바른 것은 아니지만 접근할 수 없는 마크업을 작성하면 Svelte가 경고하여 도움을 줍니다.

예를 들어, 해당 `alt` 속성 없이 `<img>` 요소를 `todos.svelte` 컴포넌트에 추가하는 경우.

```html
<h1>스벨트 할 일 목록</h1>

<img height="32" width="88" src="https://www.w3.org/WAI/wcag2A" />
```

컴파일러는 다음 경고를 발생시킵니다.

```bash
(!) Plugin svelte: A11y: <img> element should have an alt attribute
src/components/Todos.svelte
1: <h1>Svelte To-Do list</h1>
2:
3: <img height="32" width="88" src="https://www.w3.org/WAI/wcag2A">
   ^
created public/build/bundle.js in 220ms

[2020-07-15 04:07:43] waiting for changes...
```

편집기는 컴파일러를 호출하기 전에도 이 경고를 표시할 수 있습니다.

![A code editor window showing an image tag, with a popup error message saying that the element should have an alt attribute](04-svelte-accessibility-support.png)

다음과 같이 `svelte-ignore`로 시작하는 [주석](https://svelte.dev/docs#Comments)을 사용하여 다음 마크업 블록에 대해 이 경고를 무시하도록 Svelte에 지시할 수 있습니다.

```html
<!-- svelte-ignore a11y-missing-attribute -->
<img height="32" width="88" src="https://www.w3.org/WAI/wcag2A" />
```

> **참고:** VSCode를 사용하면 _Quick fix…_ 링크를 클릭하거나 <kbd>Ctrl</kbd> + <kbd>.</kbd>를 눌러 무시 주석을 자동으로 추가할 수 있습니다.

이 경고를 전체적으로 비활성화하려면 다음과 같이 `Svelte` 플러그인 구성 내부의 `rollup.config.js` 파일에 `onwarn` 핸들러를 추가할 수 있습니다.

```js
plugins: [
  svelte({
    dev: !production,
    css: (css) => {
      css.write("public/build/bundle.css");
    },
    // 경고는 일반적으로 Rollup으로 바로 전달됩니다.
    // 예를 들어 특정 코드로 경고를 억제하기 위해 여기에서 선택적으로 처리할 수 있습니다.
    onwarn: (warning, handler) => {
      // screen readers에 대해 관심이 없다면 -> 이것은 하지마세요!!!
      if (warning.code === "a11y-missing-attribute") {
        return;
      }

      // Rollup이 다른 모든 경고를 정상적으로 처리하도록 합니다.
      handler(warning);
    },
  }),

  // …
];
```

의도적으로 이러한 경고는 컴파일러 자체에서 구현되며 프로젝트에 추가하도록 선택할 수 있는 플러그인으로 구현되지 않습니다. 아이디어는 기본적으로 마크업에서 a11y 문제를 확인하고 특정 경고를 선택적으로 제외할 수 있도록 하는 것입니다.

> **참고:** 예를 들어 빠른 프로토타입을 제작하는 동안과 같이 그럴 만한 이유가 있는 경우에만 이러한 경고를 비활성화해야 합니다. 훌륭한 웹 시민이 되어 최대한 광범위한 사용자 기반이 페이지에 액세스할 수 있도록 하는 것이 중요합니다.

Svelte가 확인하는 접근성 규칙은 JSX 요소에 대한 많은 접근성 규칙에 대한 정적 검사를 제공하는 ESLint용 플러그인[eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules)에서 가져옵니다. Svelte는 컴파일러에서 모두 구현하는 것을 목표로 하며 대부분은 이미 Svelte로 포팅되었습니다. GitHub에서 [여전히 누락된 접근성 검사](https://github.com/sveltejs/svelte/issues/820)를 확인할 수 있습니다. 해당 링크를 클릭하여 각 규칙의 의미를 확인할 수 있습니다.

## 마크업 스타일링

할 일 목록을 좀 더 보기 좋게 만들어 봅시다. `public/global.css` 파일의 내용을 다음으로 바꿉니다.

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
  appearance: none;
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
.btn__primary:disabled {
  color: darkgrey;
  background-color: #565656;
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
  border: 2px solid currentcolor;
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

마크업 스타일을 지정하면 이제 모든 것이 더 좋아 보입니다.

![할 일 목록 앱 스타일 지정, '해야 할 일' 제목, 더 많은 할 일을 추가하기 위한 입력, 체크박스가 있는 할 일 목록](05-styled-todo-app.png)

## 지금까지의 코드

### Git

이 문서의 끝에서 코드의 상태를 확인하려면 다음과 같이 저장소 사본에 접근하세요.

```bash
cd mdn-svelte-tutorial/03-adding-dynamic-behavior
```

또는 폴더의 콘텐츠를 직접 다운로드합니다.

```bash
npx degit opensas/mdn-svelte-tutorial/03-adding-dynamic-behavior
```

`npm install && npm run dev` 명령어로 실행하여 개발 모드에서 앱을 실행해주세요.

### REPL

REPL에서 코드의 현재 상태를 보려면 다음에 방문하십시오.

<https://svelte.dev/repl/c862d964d48d473ca63ab91709a0a5a0?version=3.23.2>

## 요약

마크업과 스타일 지정을 통해 할 일 목록 앱이 구체화되기 시작했으며 구현해야 하는 기능에 집중할 수 있도록 모든 준비가 완료되었습니다.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
