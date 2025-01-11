---
title: "React 상호 작용: 이벤트 및 상태"
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state
original_slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

컴포넌트 계획이 완료되었으므로, 이제 애플리케이션을 완전히 정적인 UI에서 실제로 상호 작용하고 변경할 수 있는 애플리케이션으로 업데이트할 때입니다. 이 글에서는 이벤트와 상태를 파헤쳐 작업을 성공적으로 추가 및 삭제하고, 완료된 작업을 토글할 수 있는 애플리케이션으로 끝낼 것입니다.

<table>
  <tbody>
    <tr>
      <th scope="row">전제조건:</th>
      <td>
        <p>
          <a href="/ko/docs/Learn/HTML">HTML</a>,
          <a href="/ko/docs/Learn/CSS">CSS</a>, 및
          <a href="/ko/docs/Learn/JavaScript">JavaScript</a> 언어 핵심에 대한 친숙도,
          <a
            href="/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >터미널/커멘드 라인</a
          >에 대한 지식.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        React에서 이벤트 및 상태를 처리하는 방법을 배우고, 이를 사용해 사례 연구 애플리케이션을 대화형으로 만들기 시작합니다.
      </td>
    </tr>
  </tbody>
</table>

## 이벤트 처리

지금까지 기본 JavaScript만 작성했다면, 일부 DOM 노드를 쿼리하고 여기에 이벤트 수신기를 연결하는, 별도의 JavaScript 파일이 있는 형태가 익숙할 수 있습니다.

```jsx
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("hi!");
});
```

React에서는, 다음과 같이 JSX의 요소에 직접 이벤트 처리기를 작성합니다.

```jsx
<button type="button" onClick={() => alert("hi!")}>
  안녕하세요!
</button>
```

> [!NOTE]
> 이는 HTML에서 인라인 이벤트 처리기를 사용하지 말라고 조언하는 경향이 있는 모범사례 조건과 관련하여 직관에 반하는 것처럼 보일 수 있지만, JSX는 실제로 JavaScript의 일부라는 점을 기억하세요.

위의 예에서는, `<button>` 요소에 `onClick` props을 추가하고 있습니다. 해당 props의 값은 간단한 경고를 트리거하는 함수입니다.

여기서 `onClick` props은 특별한 의미가 있습니다. 사용자가 버튼을 클릭할 때 주어진 기능을 실행하도록 React에 지시합니다. 참고해야 할 몇 가지 다른 사항이 있습니다.

- `onClick`의 camel-cased 특성이 중요합니다. JSX는 `onclick`을 인식하지 않습니다(다시 말하지만 JavaScript에서 특정 목적을 위해 이미 사용되고 있습니다. 표준 [`onclick`](/ko/docs/Web/API/Element/click_event) 처리기 속성)과 관련은 있지만 다릅니다.
- 모든 브라우저 이벤트는 JSX에서 `on` 뒤에 이벤트 이름이 오는 형식을 따릅니다.

`Form.js` 컴포넌트에서 시작하여, 이것을 애플리케이션에 적용해 보겠습니다.

### form 제출 처리

`Form()` 컴포넌트 함수의 맨 위에, `handleSubmit()`이라는 함수를 만듭니다. 이 함수는 [`submit` 이벤트의 기본 동작을 방지](/ko/docs/Learn/JavaScript/Building_blocks/Events#preventing_default_behavior)해야 합니다. 그런 다음 `alert()`를 트리거하여 원하는 대로 말할 수 있습니다. 결과는 다음과 같아야 합니다.

```jsx
function handleSubmit(e) {
  e.preventDefault();
  alert("Hello, world!");
}
```

이 함수를 사용하려면, [`<form>`](/ko/docs/Web/HTML/Element/form) 요소에 `onSubmit` 속성을 추가하고, 해당 값을 `handleSubmit` 함수로 설정합니다.

```jsx
<form onSubmit={handleSubmit}>
```

이제 브라우저로 돌아가서 "추가" 버튼을 클릭하면, "Hello, world!", 또는 원하는 대로 입력한 내용이 경고 대화 상자에 표시될 겁니다.

## 콜백 props

React 애플리케이션에서, 상호 작용은 하나의 컴포넌트에만 국한되는 경우가 거의 없습니다. 한 컴포넌트에서 발생하는 이벤트는 애플리케이션의 다른 부분에 영향을 미칩니다. 새로운 작업을 만들 수 있는 권한을 부여하기 시작하면 `<Form />` 컴포넌트에서 발생하는 일이 `<App />`에서 렌더링된 목록에 영향을 미칩니다.

우리는 `handleSubmit()` 함수가 궁극적으로 새 작업을 만드는 데 도움이 되기를 원하므로, `<Form />`에서 `<App />`로 정보를 전달하는 방법이 필요합니다. 표준 props를 사용하여 부모에서 자식으로 데이터를 전달하는 것과 같은 방식으로 자식에서 부모로 데이터를 전달할 수 없습니다. 대신 양식의 일부 데이터를 입력으로 기대하는 함수를 `<App />`에 작성한 다음 해당 함수를 props으로 `<Form />`에 전달할 수 있습니다. 이 props로서의 함수를 콜백 props이라고 합니다. 콜백 props이 있으면, `<Form />` 내부에서 호출하여 `<App />`에 올바른 데이터를 보낼 수 있습니다.

### 콜백을 통한 form 제출 처리

`App()` 컴포넌트 함수의 맨 위에 `name`이라는 단일 매개변수가 있는 `addTask()`라는 함수를 만듭니다.

```jsx
function addTask(name) {
  alert(name);
}
```

다음으로, `addTask()`를 `<Form />`에 prop으로 전달합니다. prop에는 원하는 이름을 지정할 수 있지만, 나중에 이해할 수 있는 이름을 선택해주세요. 함수의 이름과 함수가 수행할 작업을 일치시키는 의미에서 `addTask`도 좋습니다. `<Form />` 컴포넌트 호출은 다음과 같이 업데이트되어야 합니다.

```jsx
<Form addTask={addTask} />
```

마지막으로, `<Form />` 컴포넌트의 `handleSubmit()` 함수 내에서 이 props를 사용할 수 있습니다! 다음과 같이 업데이트하세요.

```jsx
function handleSubmit(e) {
  e.preventDefault();
  props.addTask("Say hello!");
}
```

브라우저에서 "추가" 버튼을 클릭하면 `addTask()` 콜백 함수가 작동한다는 것을 증명할 수 있지만, 입력 필드에 무엇을 입력하고 있는지 알려주는 알림을 받을 수 있다면 좋을 것입니다! 이것이 우리가 다음에 할 일입니다.

> [!NOTE]
> 콜백 props의 이름을 `addTask`로 지정하여 props이 무엇을 하는지 쉽게 이해할 수 있도록 했습니다. React 코드에서 접할 수 있는 또 다른 일반적인 규칙은 콜백 props 이름에 `on`이라는 단어를 접두사로 붙인 다음, 실행시킬 이벤트 이름을 붙이는 것입니다. 예를 들어, 우리는 form에 `addTask` 값을 가진 `onSubmit` props을 줄 수 있습니다.

## 상태와 `useState` hook

지금까지, 컴포넌트를 통해 데이터를 전달하기 위해 props를 사용했고 이 정도로도 충분했습니다. 그러나 이제 사용자 입력 및 데이터 업데이트를 처리해야 하기에 더 많은 것이 필요합니다.

우선, props는 컴포넌트의 부모에서 가져옵니다. 우리의 `<Form />`은 우리 작업의 새 이름을 물려받지 않을 것입니다. 우리의 `<input />` 요소는 `<Form />` 바로 안에 있으므로, `<Form />`은 새 이름을 만드는 일을 직접 담당합니다. 우리는 `<Form />`에게 자발적으로 자체 props을 생성하도록 요청할 수 없지만, 우리를 위해 자체 데이터 중 일부를 추적하도록 요청할 수 있습니다. 이와 같이, 컴포넌트 자체가 소유한 데이터를 **상태**라고 합니다. 상태는 컴포넌트가 상태를 소유할 뿐만 아니라, 나중에 업데이트할 수 있기 때문에 React의 또 다른 강력한 도구입니다. 컴포넌트가 받는 props를 업데이트하는 것은 불가능합니다. props를 읽을 수만 있습니다.

React는 상태처럼, 컴포넌트에 새로운 기능을 제공할 수 있는 다양한 특수 함수를 제공합니다. 이러한 함수를 **hook**이라고 하며, `useState` hook은 이름에서 알 수 있듯이, 컴포넌트에 상태를 부여하기 위해 정확히 필요한 것입니다.

React hook을 사용하려면, React 모듈에서 가져와야 합니다. `Form.js`에서 첫 번째 줄을 다음과 같이 변경합니다.

```jsx
import React, { useState } from "react";
```

이렇게 하면 `useState()` 함수를 자체적으로 가져올 수 있으며, 이 파일의 어디에서나 사용할 수 있습니다.

`useState()`는 컴포넌트에 대한 상태 조각을 생성하고, 유일한 매개변수는 해당 상태의 초기값을 결정합니다. 상태와 나중에 상태를 업데이트하는데 사용할 수 있는 함수, 두 개를 반환합니다.

한 번에 받아들이기에는 양이 많아, 시도해 봅시다. 우리는 자신을 `name` 상태로 만들고, `name` 상태를 업데이트하는 함수를 만들 것입니다.

`Form()` 내부의 `handleSubmit()` 함수 위에 다음을 작성합니다.

```jsx
const [name, setName] = useState("Use hooks!");
```

이 코드 줄에서 무슨 일이 일어나고 있나요?

- 초기 `name` 값을 "Use hooks!"로 설정하고 있습니다.
- `setName()`이라고 불리는 `name`을 수정하는 일을 하는 함수를 정의하고 있습니다.
- `useState()`는 이 두 가지를 반환하므로, [배열 비구조화](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)을 사용하여 두 가지를 별도의 변수로 캡처합니다.

### 상태 읽기

바로 실행 중인 `name` 상태를 볼 수 있습니다. form 입력에 `value` props을 추가하고, 해당 값을 `name`으로 설정합니다. 브라우저는 input 안에 "Use hooks!"를 렌더링합니다.

```jsx
<input
  type="text"
  id="new-todo-input"
  className="input input__lg"
  name="text"
  autoComplete="off"
  value={name}
/>
```

초기 상태는 빈 문자열이면 좋을 거 같습니다. "Use hooks!"를 빈 문자열로 변경해보세요.

```jsx
const [name, setName] = useState("");
```

### 사용자 입력 읽기

`name`의 값을 변경하기 전에, 사용자의 실시간 입력을 받아와야 합니다. 이를 위해, `onChange` 이벤트를 수신할 수 있습니다. `handleChange()` 함수를 작성하고 `<input />` 태그에서 입력을 받아봅시다.

```jsx
// `Form` 컴포넌트 상단 부근
function handleChange(e) {
  console.log("Typing!");
}

// return 문 아래로
<input
  type="text"
  id="new-todo-input"
  className="input input__lg"
  name="text"
  autoComplete="off"
  value={name}
  onChange={handleChange}
/>;
```

현재, 입력값은 입력할 때 변경되지 않지만, 브라우저는 "Typing!"이라는 단어를 JavaScript 콘솔에 기록하므로, 이벤트 수신기가 입력에 연결되어 있음을 알 수 있습니다. `handleChange()` 함수를 사용하여 `name` 상태를 업데이트해야 합니다.

변경된 입력 필드의 내용을 읽으려면 입력의 `value` props에 접근하면 됩니다. `handleChange()` 내부에서도 `e.target.value`를 읽어올 수 있습니다. `e.target`은 `change` 이벤트를 발생시킨 요소를 나타냅니다. 이것이 우리의 입력입니다. 따라서 `value`는 그 안에 있는 텍스트입니다.

`console.log()`로 이 값을 브라우저의 콘솔에서 볼 수 있습니다.

```jsx
function handleChange(e) {
  console.log(e.target.value);
}
```

### 상태 업데이트

로깅만으로는 충분하지 않습니다. 입력 값이 변경될 때 이름의 업데이트된 상태를 실제로 저장하고 싶습니다! 아래와 같이 `console.log()`를 `setName()`으로 변경합니다.

```jsx
function handleChange(e) {
  setName(e.target.value);
}
```

이제 이름을 인수로 사용하여 `props.addTask`를 호출하도록 `handleSubmit()` 함수를 변경해야 합니다. 콜백 props을 기억하십니까? 이것은 작업을 `App` 컴포넌트로 다시 보내는 역할을 하므로, 나중에 작업 목록에 추가할 수 있습니다. 모범 사례로서 form이 제출된 후 입력을 지워야 하므로 빈 문자열을 사용하여 `setName()`을 다시 호출합니다.

```jsx
function handleSubmit(e) {
  e.preventDefault();
  props.addTask(name);
  setName("");
}
```

마지막으로, 브라우저의 input 필드에 무언가를 입력하고 "추가"를 클릭하면 입력한 내용이 경고 대화 상자에 나타납니다.

이제 `Form.js` 파일은 다음과 같아야 합니다.

```jsx
import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
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
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
```

> [!NOTE]
> 작업 이름을 입력하지 않고 추가 버튼을 누르기만 하면 비어있는 작업을 제출할 수 있다는 사실을 알게 될 것입니다. 빈 작업이 추가되지 않도록 하는 방법을 생각할 수 있나요? 힌트로, `handleSubmit()` 함수에 일종의 검사를 추가해야 할 수도 있습니다.

## 종합 : 작업 추가

이벤트, 콜백 props 및 hook으로 연습했으므로 이제 사용자가 브라우저에서 새 작업을 추가할 수 있는 기능을 작성할 준비가 되었습니다.

### 상태로서의 작업

`useState`를 `App.js`로 가져와 작업을 상태로 저장할 수 있습니다. `React` 가져오기 라인을 다음과 같이 업데이트하세요.

```jsx
import React, { useState } from "react";
```

우리는 `props.tasks`를 `useState()` hook에 전달하려고 합니다. 이것은 초기 상태를 보존할 것입니다. `App()` 함수 정의 맨 위에 다음을 추가하세요.

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

이제 `props.tasks` 대신 `tasks` 매핑의 결과가 되도록 `taskList` 매핑을 변경할 수 있습니다. 이제 `taskList` 상수 선언은 다음과 같아야 합니다.

```jsx
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));
```

### 작업을 추가

이제 `addTask()` 함수에서 작업 목록을 업데이트하는 데 사용할 수 있는 `setTasks` hook이 있습니다. 그러나 한 가지 문제가 있습니다. `addTask()`의 `name` 인수를 `setTasks`로 전달할 수 없습니다. `tasks`는 객체의 배열이고 `name`은 문자열이기 때문입니다. 이렇게 하면, 배열이 문자열로 대체됩니다.

먼저, 기존 작업과 동일한 구조를 가진 객체에 `name`을 넣어야 합니다. `addTask()` 함수 내부에서 `newTask` 객체를 만들어 배열에 추가합니다.

그런 다음 이 새 작업이 추가된 새 배열을 만든 다음 작업 데이터의 상태를 이 새 상태로 업데이트해야 합니다. 이를 위해, 전개 구문을 사용하여 [기존 배열을 복사](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copy_an_array)하고 끝에 객체를 추가할 수 있습니다. 그런 다음 이 배열을 `setTasks()`에 전달하여 상태를 업데이트합니다.

모두 종합하면, `addTask()` 함수는 다음과 같아야 합니다.

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

이제 브라우저를 사용하여 데이터에 작업을 추가할 수 있습니다! 양식에 무엇이든 입력하고 "추가"를 클릭하면(또는 <kbd>Enter</kbd> 키를 누르면) UI에 새 할 일 항목이 표시됩니다!

**그러나, 또 다른 문제가 있습니다** `addTask()` 함수는 각 작업에 동일한 `id`를 부여합니다. 이는 접근성에 좋지 않으며, React가 `key` props으로 향후 작업을 구분하는 것을 불가능하게 만듭니다. 실제로 React는 DevToos 콘솔에 "경고: 같은 키를 가진 두 자식이 발생했습니다..."라는 경고를 표시합니다.

이 문제를 해결해야 합니다. 고유한 식별자를 만드는 것은 어려운 문제입니다. JavaScript 커뮤니티에서 유용한 라이브러리를 작성했습니다. 작고 작동하기 때문에 [nanoid](https://github.com/ai/nanoid)를 사용할 것입니다.

애플리케이션의 루트 디렉터리에 있는지 확인하고 다음 터미널 명령을 실행합니다.

```bash
npm install nanoid
```

> [!NOTE]
> yarn을 사용하는 경우, 대신 `yarn add nanoid`가 필요합니다.

이제 `nanoid`를 `App.js` 상단으로 가져올 수 있으므로 이를 사용하여 새 작업에 대한 고유 ID를 만들 수 있습니다. 우선 `App.js` 상단에 다음 구문을 추가합니다.

```jsx
import { nanoid } from "nanoid";
```

이제 `addTask()`를 업데이트하여 각 작업 ID가 접두사 `todo-`와 nanoid에 의해 생성된 고유한 문자열이 되도록 합시다. `newTask` 상수 선언을 다음과 같이 업데이트하세요.

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

모든 것을 저장하고, 애플리케이션을 다시 시도하세요. 이제 중복 ID에 대한 경고 없이 작업을 추가할 수 있습니다.

## 우회: 작업 개수 세기

새 작업을 추가해보면 문제가 있음을 알 수 있습니다. 실제 작업 수에 관계없이, 머리글에 남은 작업이 3개로 표시됩니다! `taskList`의 길이를 세고 이에 따라 제목의 텍스트를 변경하여 이 문제를 해결할 수 있습니다.

return 문 앞에, `App()` 정의 내부에 다음을 추가합니다.

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

목록에 단일 작업이 포함된 경우, 제목에 여전히 "작업"이라는 단어가 사용된다는 점을 제외하면, 거의 맞습니다. 이것도 변수로 만들 수 있습니다. 방금 추가한 코드를 다음과 같이 업데이트합니다.

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

이제 목록 제목의 텍스트 콘텐츠를 `headingText` 변수로 바꿀 수 있습니다. 다음과 같이 `<h2>`를 업데이트하세요.

```jsx
<h2 id="list-heading">{headingText}</h2>
```

## 작업 완료

체크박스를 클릭하면, 적절하게 선택 및 선택 취소되는 것을 알 수 있습니다. HTML의 기능으로 브라우저는 우리의 도움 없이 체크박스 입력이 선택되거나 선택 해제된 것을 기억하는 방법을 알고 있습니다. 그러나 이 기능은 문제를 보이지 않게 합니다. 체크박스를 전환해도 React 응용프로그램의 상태가 변경되지 않습니다. 이는 브라우저와 애플리케이션이 이제 동기화되지 않았음을 의미합니다. 브라우저를 애플리케이션과 다시 동기화하려면 자체 코드를 작성해야 합니다.

### 버그 증명

문제를 해결하기 전에, 문제가 발생하는 것을 관찰해 봅시다.

`App()` 컴포넌트에 `toggleTaskCompleted()` 함수를 작성하는 것으로 시작하겠습니다. 이 함수에는 `id` 매개변수가 있지만, 아직 사용하지 않을 것입니다. 지금은 배열의 첫 번째 작업을 콘솔에 기록합니다. 브라우저에서 선택하거나 선택 취소할 때 어떤 일이 발생하는지 검사할 것입니다.

`taskList` 상수 선언 바로 위에 다음을 추가하세요.

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}
```

다음으로, `taskList` 내부에 렌더링된 각 `<Todo />` 컴포넌트의 props에 `toggleTaskCompleted`를 추가합니다. 다음과 같이 업데이트하세요.

```jsx
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
  />
));
```

다음으로, `Todo.js` 컴포넌트로 이동하여 `<input />` 요소에 `onChange` 처리기를 추가합니다. 이 처리기는 익명 함수를 사용하여 `props.id` 매개변수로 `props.toggleTaskCompleted()`를 호출해야 합니다.

`<input />`은 이제 다음과 같아야 합니다.

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

모든 것을 저장하고 브라우저로 돌아가 첫 번째 작업인 Eat가 선택되었는지 확인합니다. JavaScript 콘솔을 연 다음 Eat 옆의 체크박스를 클릭합니다. 예상대로 체크가 해제됩니다. 그러나 JavaScript 콘솔은 다음과 같은 내용을 기록합니다.

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

브라우저에서 확인란의 선택이 취소되지만, 콘솔에서는 Eat가 아직 완료되었다고 알려줍니다. 이제 수정해보겠습니다!

### 브라우저와 데이터 동기화

`App.js`에서 `toggleTaskCompleted()` 함수를 다시 살펴보겠습니다. 토글된 작업의 `completed` props만 변경하고, 나머지는 그대로 두기를 원합니다. 이를 위해 작업 목록에 대해 `map()`을 실행하고 완료한 작업을 변경합니다.

`toggleTaskCompleted()` 함수를 다음과 같이 업데이트합니다.

```jsx
function toggleTaskCompleted(id) {
  const updatedTasks = tasks.map((task) => {
    // if this task has the same ID as the edited task
    if (id === task.id) {
      // use object spread to make a new object
      // whose `completed` props has been inverted
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  setTasks(updatedTasks);
}
```

여기에서, 원래 `tasks` 배열에 매핑되는 `updatedTasks` 상수를 정의합니다. 작업의 `id` props이 함수에 제공된 `id`와 일치하는 경우, [객체 전개 문법](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)을 사용하여 새 객체를 만들고, 반환하기 전에 해당 객체의 `completed` props을 토글합니다. 일치하지 않으면 원래 객체를 반환합니다.

그런 다음 상태를 업데이트하기 위해 이 새로운 배열로 `setTasks()`를 호출합니다.

## 작업 삭제

작업을 삭제하는 것은 완료된 상태를 토글하는 것과 유사한 패턴을 따릅니다. 상태를 업데이트하기 위한 함수를 정의한 다음, 해당 함수를 props으로 `<Todo />`에 전달하고 올바른 이벤트가 발생할 때 호출해야 합니다.

### `deleteTask` 콜백 props

여기서는 `App` 컴포넌트에 `deleteTask()` 함수를 작성하는 것으로 시작하겠습니다. `toggleTaskCompleted()`와 마찬가지로, 이 함수는 `id` 매개변수를 사용하며, 해당 `id`를 콘솔에 기록하여 시작할 것입니다. `toggleTaskCompleted()` 아래에 다음을 추가합니다.

```jsx
function deleteTask(id) {
  console.log(id);
}
```

다음으로, `<Todo />` 컴포넌트 배열에 다른 콜백 props을 추가합니다.

```jsx
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
  />
));
```

`Todo.js`에서 "삭제" 버튼을 눌렀을 때 `prop.deleteTask()`를 호출하려고 합니다. `deleteTask()`는 자신을 호출한 작업의 ID를 알아야, 상태에서 올바른 작업을 삭제할 수 있습니다.

다음과 같이 `Todo.js` 내부의 "삭제" 버튼을 업데이트합니다.

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

이제 애플리케이션 "삭제" 버튼을 클릭하면 브라우저 콘솔이 관련 작업이 ID를 기록해야 합니다.

## 상태 및 UI에서 작업 삭제

이제 `deleteTask()`가 올바르게 호출되었음을 알았으므로, `deleteTask()`에서 `setTasks()` hook을 호출하여 애플리케이션 UI에서 시각적으로 뿐만 아니라 애플리케이션 상태에서 해당 작업을 실제로 삭제할 수 있습니다. `setTasks()`는 배열을 인수로 예상하므로 `deleteTask()`에 전달된 ID와 ID가 일치하는 작업을 제외하여 기존 작업을 복사하는 새 배열을 제공해야 합니다.

이것은 [`Array.prototype.filter()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)를 사용할 수 있는 절호의 기회입니다. 각 작업을 테스트하고 `id` props가 `deleteTask()`에 전달된 `id` 인수와 일치하는 경우 새 배열에서 작업을 제외할 수 있습니다.

다음과 같이 `App.js` 파일 내에서 `deleteTask()` 함수를 업데이트합니다.

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

애플리케이션을 다시 사용해 보세요. 이제 애플리케이션에서 작업을 삭제할 수 있습니다!

## 요약

너무 길어질 수 있으니 이번 글은 여기서 마치겠습니다. 이 글을 통해 React가 이벤트를 처리하고 상태를 처리하는 방법, 작업을 추가하고 삭제하고 완료된 작업을 토글하는 기능을 구현하는 방법을 알려드렸습니다. 거의 다 왔습니다. 다음 문서에서는 기존 작업을 편집하고 모든 작업, 완료된 작업 및 완료되는 않은 작업 간에 작업 목록을 필터링하는 기능을 구현합니다. 그 과정에서 조건부 UI렌더링을 살펴보겠습니다.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
