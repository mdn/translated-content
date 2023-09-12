---
title: React 앱 컴포넌트화
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

이 시점에서 우리의 앱은 모놀리식입니다. 우리는 이를 작동시키기 전에, 관리 가능하고, 기술적인 컴포넌트로 나눌 필요가 있습니다. React는 컴포넌트로 무엇이고 무엇이 아닌지에 대한 엄격한 규칙은 없으며, 당신에게 달려 있습니다! 이 글에서는 우리의 앱을 컴포넌트로 나누는 합리적인 방법을 보여줄 것입니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        <p>
        코어 <a href="/ko/docs/Learn/HTML">HTML</a>, <a href="/ko/docs/Learn/CSS">CSS</a>, 및 <a href="/ko/docs/Learn/JavaScript">JavaScript</a> 언어에 익숙할 것. <a href="/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">터미널/커맨드라인</a>에 대한 지식.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        할 일 목록 앱을 컴포넌트로 나누는 합리적인 방법을 보여주고자 합니다.
      </td>
    </tr>
  </tbody>
</table>

## 첫 번째 컴포넌트 정의하기

컴포넌트를 정의하는 것은 연습이 필요할 때까지는 까다로워 보일 수 있지만, 요점은 다음과 같습니다.

- 만약 당신의 앱의 명확한 "조각"을 나타낸다면, 아마도 컴포넌트일 것입니다.
- 만약 자주 재사용된다면, 아마도 컴포넌트일 것입니다.

특히 두번째 항목은 중요합니다. 자주 재사용되는 UI 요소를 컴포넌트로 만들면, 코드를 한 곳에서 변경하고 그 컴포넌트가 사용되는 모든 곳에서 변경 사항을 볼 수 있습니다. 모든 것을 컴포넌트로 분리할 필요는 없습니다. 두번째 항목을 영감으로 삼아, 가장 재사용되고 중요한 UI 조각인 todo list의 항목을 컴포넌트로 만들어 보겠습니다.

## `<Todo />` 만들기

컴포넌트를 만들기 전에, 새로운 파일을 만들어야 합니다. 사실, 우리는 컴포넌트를 위한 디렉토리를 만들어야 합니다. 다음 명령어는 `components` 디렉토리를 만들고, 그 안에 `Todo.js`라는 파일을 만듭니다. 이 명령어를 실행하기 전에, 당신이 앱의 루트에 있는지 확인하세요!

```bash
mkdir src/components
touch src/components/Todo.js
```

`Todo.js` 파일은 현재 비어있습니다! 열어서 다음의 첫 번째 줄을 추가하세요.

```jsx
import React from "react";
```

`Todo`라는 컴포넌트를 만들 것이므로, 다음과 같이 `Todo.js`에 코드를 추가할 수 있습니다. 이 코드에서, 우리는 함수를 다음과 같이 정의하고 내보냅니다.

```jsx
function Todo() {
  return (
    // …
  );
}

export default Todo;
```

지금까지는 괜찮지만, 우리의 컴포넌트는 무언가를 반환해야 합니다! `src/App.js`로 돌아가서, 정렬되지 않은 목록 안에 있는 첫 번째 [`<li>`](/ko/docs/Web/HTML/Element/li)를 복사하고, `Todo.js`에 붙여넣어서 다음과 같이 만드세요.

```jsx
export default function Todo() {
  return (
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
  );
}
```

> **참고:** 컴포넌트는 항상 무언가를 반환해야 합니다. 만약 앞으로 컴포넌트를 렌더링하려고 할 때, 아무것도 반환하지 않는 컴포넌트를 만든다면, React는 브라우저에 에러를 표시할 것입니다.

우리가 만든 `Todo` 컴포넌트가 완성되어 사용할 수 있습니다. `App.js`에 다음과 같이 `Todo`를 가져오는 코드를 파일의 상단에 추가하세요.

```jsx
import Todo from "./components/Todo";
```

해당 컴포넌트를 가져왔다면, `App.js`의 모든 `<li>` 요소를 `<Todo />` 컴포넌트로 바꿀 수 있습니다. `<ul>`는 다음과 같이 읽을 수 있습니다.

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  <Todo />
  <Todo />
  <Todo />
</ul>
```

브라우저를 새로고침하면, 불행히도 첫 번째 할 일이 세 번 반복되는 것을 알 수 있습니다.

![할 일 목록 앱, 라벨이 컴포넌트에 하드코딩되어 반복되는 컴포넌트](todo-list-repeating-todos.png)

우리는 먹는 것만 하고 싶지 않습니다. 다른 할 일도 있습니다. 다음에는 컴포넌트를 호출할 때 고유한 내용을 렌더링하는 방법을 살펴보겠습니다.

## 고유한 `<Todo />` 만들기

컴포넌트는 UI의 일부를 재사용하고, UI의 소스를 하나의 장소로 참조할 수 있기 때문에 강력합니다. 문제는, 우리는 일반적으로 모든 컴포넌트를 재사용하고 싶지 않습니다. 대부분의 부분을 재사용하고, 작은 부분을 변경하고 싶습니다. 이것이 props가 필요한 이유입니다.

### `name`에는 무엇이 들어갈까요?

할 일의 이름을 추적하기 위해서, 각 `<Todo />` 컴포넌트가 고유한 이름을 렌더링하도록 해야 합니다.

`App.js`에서 각 `<Todo />`에 `name` prop을 추가하세요. 이전에 사용했던 할 일의 이름을 사용해보겠습니다.

```jsx
<Todo name="Eat" />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

브라우저를 새로고침하면, 이전과 똑같은 것을 볼 수 있습니다. `<Todo />`에 props를 추가했지만, 아직 사용하지 않았습니다. `Todo.js`로 돌아가서 이 문제를 해결해보겠습니다.

먼저, `Todo()` 함수 정의를 수정해서 `props`를 매개변수로 받도록 하세요. 이전에 했던 것처럼 `props`를 `console.log()`로 출력해보면, 컴포넌트가 `props`를 올바르게 받고 있는지 확인할 수 있습니다.

컴포넌트가 `props`를 받고 있다고 확신이 들면, `Eat`을 `name` prop으로 바꿀 수 있습니다. JSX 표현식 안에서 변수의 값을 주입할 때는 중괄호를 사용한다는 것을 기억하세요.

위의 내용을 모두 합치면, `Todo()` 함수는 다음과 같이 읽을 수 있습니다.

```jsx
function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor="todo-0">
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;
```

"이제" 브라우저에서 세 가지 고유한 할 일을 볼 수 있습니다. 하지만, 여전히 모두 기본적으로 체크되어 있습니다.

![할 일 목록 앱, 이제 컴포넌트에 고유한 할 일 레이블이 전달되어 렌더링됩니다.](todo-list-unique-todos.png)

### `completed`인가요?

기존의 정적인 목록에서는 `Eat`만 체크되어 있었습니다. 다시 말하지만, `<Todo />` 컴포넌트를 구성하는 UI의 대부분을 재사용하고 싶지만, 한 가지를 바꾸고 싶습니다. 그것은 또 다른 prop을 위한 좋은 작업입니다! `App.js`에서 각 `<Todo />` 호출에 `completed`라는 새로운 prop을 추가하세요. 첫 번째(`Eat`)는 `true`의 값을 가져야 하고, 나머지는 `false`여야 합니다.

```jsx
<Todo name="Eat" completed={true} />
<Todo name="Sleep" completed={false} />
<Todo name="Repeat" completed={false} />
```

이전과 마찬가지로, 이제 `Todo.js`로 돌아가서 이 props를 사용해야 합니다. `<input />`의 `defaultChecked` 속성을 `completed` prop과 동일한 값으로 변경하세요. 변경이 완료되면, Todo 컴포넌트의 `<input />` 요소는 다음과 같이 읽을 수 있습니다.

```jsx
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

그러면 다음과 같이 브라우저에서 `Eat`만 체크된 것을 볼 수 있습니다.

![할 일 목록 앱, 이제 체크된 상태가 다릅니다. 일부 체크박스는 체크되어 있고, 다른 것은 그렇지 않습니다.](todo-list-differing-checked-states.png)

`<Todo />` 컴포넌트의 `completed` prop을 변경하면, 브라우저에서 렌더링된 체크박스가 그에 상응하는 체크 또는 체크 해제됩니다.

### `id`를 부여해주세요

지금은 `<Todo />` 컴포넌트가 모든 할 일에 `id` 속성을 `todo-0`으로 부여합니다. 이것은 [`id` 속성](/ko/docs/Web/HTML/Global_attributes/id)은 고유해야 한다는 점에서 나쁜 HTML입니다. (CSS, JavaScript 등에서 문서 조각을 식별하는 데 사용됩니다.) 이것은 각 `Todo`에 대해 고유한 값을 취하는 `id` prop을 컴포넌트에 부여해야 한다는 것을 의미합니다.

우리가 처음에 사용한 패턴을 따라서, `<Todo />` 컴포넌트의 각 인스턴스에 `todo-i` 형식의 ID를 부여해보겠습니다. 여기서 `i`는 매번 1씩 증가합니다.

```jsx
<Todo name="Eat" completed={true} id="todo-0" />
<Todo name="Sleep" completed={false} id="todo-1" />
<Todo name="Repeat" completed={false} id="todo-2" />
```

이제 `Todo.js`로 돌아가서 `id` prop을 사용해보겠습니다. `<input />` 요소의 `id` 속성의 값을, 그리고 레이블의 `htmlFor` 속성의 값을 바꿔야 합니다.

```jsx
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

## 지금까지는 잘 되고 있나요?

React를 잘 사용하고 있지만, 더 나은 방법이 있습니다! 우리의 코드는 반복적입니다. `<Todo />` 컴포넌트를 렌더링하는 세 줄은 거의 동일합니다. 하나의 차이점만 있습니다: 각 prop의 값입니다.

JavaScript의 핵심 기능 중 하나인 반복을 사용하여 코드를 정리할 수 있습니다. 반복을 사용하기 위해서는 먼저 할 일을 다시 생각해야 합니다.

## 할 일을 데이터로

현재 각 할 일은 이름, 체크 여부, 고유 ID라는 세 가지 정보를 포함하고 있습니다. 이 데이터는 객체로 잘 표현됩니다. 여러 개의 할 일이 있으므로, 객체의 배열이 이 데이터를 잘 표현할 수 있습니다.

`src/index.js`에서, 마지막 import 아래에 새로운 `const`를 만드세요. 하지만 `ReactDOM.render()` 위에 위치해야 합니다.

```jsx
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
```

다음으로, `DATA`를 `tasks`라는 prop으로 `<App />`에 전달합니다. `src/index.js`의 마지막 줄은 다음과 같아야 합니다.

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
);
```

이 배열은 이제 `props.tasks`로 `<App />` 컴포넌트에서 사용할 수 있습니다. 원한다면 `console.log()`를 사용하여 확인할 수 있습니다.

> **참고:** `ALL_CAPS` (모두 대문자인) 상수 이름은 JavaScript에서 특별한 의미가 없습니다. 이것은 다른 개발자들에게 "이 데이터는 여기에서 정의된 후에는 절대로 변경되지 않을 것이다"라고 알려주는 관습입니다.

## 반복을 사용하여 렌더링하기

객체 배열을 렌더링하려면, 각 객체를 `<Todo />` 컴포넌트로 변환해야 합니다. JavaScript는 항목을 다른 것으로 변환하는 [`Array.prototype.map()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 배열 메서드를 제공합니다.

`App()`의 return 문 위에 `taskList`라는 새 `const`를 만드세요. `props.tasks` 배열의 각 할 일을 `name`으로 변환하는 것부터 시작해보겠습니다.

```jsx
const taskList = props.tasks?.map((task) => task.name);
```

`<ul>`의 모든 자식을 `taskList`로 바꿔보겠습니다.

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>
```

이렇게 하면 컴포넌트를 다시 표시하는 데 일부 도움이 되지만, 더 많은 작업이 필요합니다. 브라우저는 현재 각 할 일의 이름을 구조화되지 않은 텍스트로 렌더링합니다. HTML 구조인 `<li>`와 해당 체크박스와 버튼이 누락되었습니다!

![할 일 목록 앱에서 할 일 항목 레이블이 한 줄에 뭉쳐져 표시됩니다.](todo-list-unstructured-names.png)

이를 해결하려면 `map()` 함수에서 `<Todo />` 컴포넌트를 반환해야 합니다. JSX를 사용하면 JavaScript와 마크업 구조를 혼합할 수 있습니다! 이전에 작성한 코드 대신 다음을 시도해 보겠습니다.

```jsx
const taskList = props.tasks.map((task) => <Todo />);
```

앱을 다시 확인하세요. 이제 할 일이 이전과 비슷해 보이지만, 할 일 이름이 누락되었습니다. 매핑하는 각 할 일에는 `<Todo />` 컴포넌트에 전달할 `id`, `name`, `completed` 속성이 있습니다. 이를 함께 사용하면 다음과 같은 코드가 됩니다.

```jsx
const taskList = props.tasks.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

이제 앱은 이전과 같이 보이며, 코드가 덜 반복됩니다.

## 고유 키

이제 React는 배열에서 할 일을 렌더링하므로, 올바르게 렌더링하려면 어떤 것이 어떤 것인지 추적해야 합니다. React는 추적을 위해 자체적으로 추측을 시도하지만, `<Todo />` 컴포넌트에 `key` prop을 전달하여 도움을 줄 수 있습니다. `key`는 React가 관리하는 특별한 prop입니다. 다른 용도로 `key`라는 단어를 사용할 수 없습니다.

key는 고유해야 하므로, 각 task 객체의 `id`를 키로 재사용할 것입니다. `taskList` 상수를 다음과 같이 업데이트하세요.

```jsx
const taskList = props.tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));
```

**반복문으로 렌더링하는 모든 것에 고유한 키를 전달해야 합니다.** 브라우저에서 명확한 변경 사항은 없지만, 고유한 키를 사용하지 않으면 React가 콘솔에 경고를 기록하고 앱이 이상하게 동작할 수 있습니다!

## 앱의 나머지 부분도 컴포넌트화하기

이제 가장 중요한 컴포넌트를 정리했으므로, 앱의 나머지 부분을 컴포넌트로 바꿀 수 있습니다. 컴포넌트는 UI의 명확한 부분, 재사용되는 UI의 부분 또는 둘 다일 수 있다는 것을 기억하세요. 두 개의 컴포넌트를 더 만들 수 있습니다.

- `<Form/>`
- `<FilterButton/>`

두 컴포넌트가 필요하다는 것을 알기 때문에, 터미널 명령으로 일부 파일 생성 작업을 함께 일괄 처리할 수 있습니다. 앱의 루트 디렉터리에 있는지 확인하고 다음 명령을 터미널에서 실행하세요.

```bash
touch src/components/Form.js src/components/FilterButton.js
```

### `<Form />`

`components/Form.js`를 열고 다음을 수행하세요.

- `Todo.js`에서 수행한 것처럼 파일 상단에서 `React`를 가져옵니다.
- `Todo()`와 동일한 기본 구조를 가진 새 `Form()` 컴포넌트를 만듭니다.
- `App.js` 내부에서 `<form>` 태그와 그 사이의 모든 내용을 복사하여 `Form()`의 `return` 문 내부에 붙여넣습니다.
- 파일 끝에서 `Form`을 내보냅니다.

`Form.js` 파일은 다음과 같아야 합니다.

```jsx
import React from "react";

function Form(props) {
  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          무엇을 해야 합니까?
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
        추가
      </button>
    </form>
  );
}

export default Form;
```

### `<FilterButton />`

`FilterButton.js` 내부에서 `Form.js`를 만드는 데 사용한 것과 동일한 작업을 수행합니다. 하지만, 컴포넌트를 `FilterButton()`으로 호출하고 `App.js`의 `class`가 `filters`인 `<div>` 요소 내부의 첫 번째 버튼에 대한 HTML을 `return` 문으로 복사합니다.

파일은 다음과 같이 보여야 합니다.

```jsx
import React from "react";

function FilterButton(props) {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>all </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
```

> **참고:** 여기서 `<Todo />` 컴포넌트를 처음 만들 때와 동일한 실수를 하고 있다는 것을 알 수 있습니다. 각 버튼이 동일할 것입니다. 괜찮습니다! [필터 버튼으로 돌아가기](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons)에서 이 컴포넌트를 나중에 수정할 것입니다.

## 모든 컴포넌트를 가져오기

그럼 지금까지 만든 새 컴포넌트들을 사용해 보겠습니다.

`App.js`의 맨 위에 `import` 문을 몇 개 더 추가하여 가져옵니다.

그런 다음 `App()`의 `return` 문을 업데이트하여 컴포넌트를 렌더링합니다. 완료하면 `App.js`는 다음과 같이 보일 것입니다.

```jsx
import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  const taskList = props.tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3개의 작업이 남음</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
```

이것으로, 우리는 React 앱에서 일부 상호작용을 다룰 준비가 거의 완료되었습니다!

## 요약

이 문서는 여기까지입니다. 앱을 컴포넌트로 잘 나누고 효율적으로 렌더링하는 방법에 대해 자세히 알아보았습니다. 이제 React에서 이벤트를 처리하는 방법을 살펴보고 상호 작용을 추가해 보겠습니다.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
