---
title: React 애플리케이션 컴포넌트화
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

이 부분에서, 우리의 앱은 모놀리식입니다. 어떤 일을 하기 전에, 관리 가능하고, 설명가능한 컴포넌트들로 분리해야 합니다. React에는 무엇이 컴포넌트인지 아닌지에 대한 엄격한 규칙이 없습니다. 그것은 여러분에게 달려 있습니다! 이 기사에서는 애플리케이션을 컴포넌트로 나누는 현명한 방법을 보여줍니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
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
      <th scope="row">목표:</th>
      <td>
        할 일 목록 앱을 컴포넌트로 나누는 현명한 방법을 보여주고자 합니다.
      </td>
    </tr>
  </tbody>
</table>

## 첫 번째 컴포넌트 정의

컴포넌트를 정의하는 것은 약간의 연습이 되어 있을 때까지 까다로울 수 있지만, 요점은 다음과 같습니다.

- 애플리케이션의 명백한 "덩어리"를 나타내는 경우, 아마도 컴포넌트일 것입니다.
- 자주 재사용된다면, 컴포넌트일 가능성이 높습니다.

두 번째 항목은 특히 유용합니다. 공통 UI 요소에서 컴포넌트를 만들면 한 곳에서 코드를 변경하고 해당 컴포넌트가 사용되는 모든 곳에서 변경 사항을 볼 수 있습니다. 모든 것을 즉시 컴포넌트로 나눌 필요도 없습니다. 두 번째 항목을 영감으로 삼아 가장 많이 재사용되고, 가장 중요한 UI 부분인 할 일 목록 항목에서 컴포넌트를 만들어 보겠습니다.

## `<Todo />`를 만들어 주세요

컴포넌트를 만들기 전에, 새 파일을 만들어야 합니다. 사실, 우리는 컴포넌트만을 위한 디렉토리를 만들어야 합니다. 다음 명령은 `components` 디렉토리를 만든 다음, 그 안에 `Todo.js` 라는 파일을 만듭니다. 실행하기 전에 애플리케이션의 루트에 있는지 확인하세요!

```bash
mkdir src/components
touch src/components/Todo.js
```

우리의 새로운 `Todo.js` 파일은 현재 비어 있습니다! 그 파일을 열고, 첫 번째 줄에 아래 코드를 작성해주세요.

```jsx
import React from "react";
```

`Todo`라는 컴포넌트를 만들 것이므로, 다음과 같이 `Todo.js`에도 해당 코드를 추가할 수 있습니다. 이 코드에서는, 함수를 정의하고 내보냅니다.

```jsx
function Todo() {
  return (
    // …
  );
}

export default Todo;
```

지금까지는 괜찮지만, 컴포넌트가 무언가를 반환해야 합니다! `src/App.js`로 돌아가서, 정렬되지 않은 목록에서 첫 번째 [`<li>`](/ko/docs/Web/HTML/Element/li)를 복사하고 `Todo.js`에 붙여넣어 다음과 같이 코드가 작성됩니다.

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

> **참고:** 컴포넌트는 항상 무언가를 반환해야 합니다. 나중에 아무것도 반환하지 않는 컴포넌트를 렌더링하려고 하면, React가 브라우저에 오류를 표시합니다.

적어도 현재로서는, `Todo` 컴포넌트가 완성되었습니다. 이제 사용할 수 있습니다. `App.js`에서, 파일 상단 근처에 다음 줄을 추가하여 `Todo`를 가져옵니다.

```jsx
import Todo from "./components/Todo";
```

이 컴포넌트를 가져오면, `App.js`의 모든 `<li>` 요소를 `<Todo />` 컴포넌트 호출로 바꿀 수 있습니다. `<ul>`은 다음과 같아야 합니다.

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

브라우저를 다시 보면, 불행한 점을 발견할 수 있습니다. 이제 목록이 첫 번째 작업을 세 번 반복합니다!

![레이블이 컴포넌트에 하드코딩되어 있기 때문에 반복되는 할 일 컴포넌트가 있는 할 일 목록 앱](todo-list-repeating-todos.png)

우리는 먹고 싶을 뿐만 아니라, 해야할 다른 일이 있습니다. 다음으로 서로 다른 컴포넌트 호출이 고유한 콘텐츠를 렌더링하도록 만드는 방법을 살펴보겠습니다.

## 유일한 `<Todo />`를 만들어주세요

컴포넌트는 UI의 일부를 재사용하고, 해당 UI의 소스에 대해 한 곳을 참조할 수 있기 때문에 강력합니다. 문제는, 일반적으로 각 컴포넌트를 모두 재사용하고 싶지 않다는 것입니다. 우리는 대부분의 부품을 재사용하고, 작은 부품을 바꾸고 싶습니다. 속성이 들어오는 곳입니다.

### `이름`에는 무엇이 있나요?

완료하려는 작업의 이름을 추적하려면, 각 `<Todo />` 컴포넌트가 고유한 이름을 렌더링하는지 확인해야 합니다.

In `App.js`, give each `<Todo />` a name prop. Let's use the names of our tasks that we had before:
`App.js`에서 각 `<Todo />`에 이름 속성을 지정합니다. 이전에 수행했던 작업의 이름을 사용하겠습니다.

```jsx
<Todo name="Eat" />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

브라우저를 새로고침하면, 이전과 똑같은 내용이 표시됩니다. `<Todo />`에 몇 가지 속성을 제공했지만, 아직 사용하지 않습니다. `Todo.js`로 돌아가서 해결해 봅시다.

먼저 `Todo()` 함수 정의를 수정하여 `props`를 매개변수로 사용하도록 합니다. 이전에 했던 것처럼 `props`를 `console.log()`할 수 있습니다. 컴포넌트가 제대로 수신되고 있는지 확인하고 싶다면 말입니다.

컴포넌트가 `props`를 받고 있다고 확신하면, 모든 `Eat` 항목을 `name` 항목을 `name` 속성으로 바꿀 수 있습니다. 기억하세요. JSX 표현식 중간에 있을 때, 중괄호를 사용하여 변수 값을 주입합니다.

이 모든 것을 종합하면, `Todo()` 함수는 다음과 같아야 합니다.

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

이제 브라우저에 세 가지 고유한 작업이 표시됩니다. 하지만 또 다른 문제가 남아 있습니다. 모두 기본적으로 여전히 선택되어 있습니다.

![다른 할일 레이블이 있는 할일 목록이 이제 컴포넌트에 소품으로 전달됨](todo-list-unique-todos.png)

### `완료` 되었나요?

원래 정적 목록에서는, `Eat`만 확인했습니다. 다시 한 번, `<Todo />` 컴포넌트를 구성하는 UI의 대부분을 재사용하고 싶지만, 한 가지를 변경합니다. 그것은 다른 속성을 위한 좋은 직업입니다! `App.js`의 각 `<Todo />` 호출에 `completed`라는 새 소품을 제공합니다. 첫 번째(`Eat`) 값은 `true`여야 합니다. 나머지는 `false`여야 합니다.

```jsx
<Todo name="Eat" completed={true} />
<Todo name="Sleep" completed={false} />
<Todo name="Repeat" completed={false} />
```

이전과 마찬가지로, 이러한 속성을 실제로 사용하려면 `Todo.js`로 돌아가야 합니다. 값이 `completed` 속성과 동일하도록 `<input />`의 `defaultChecked` 속성을 변경합니다. 작업이 완료되면 Todo 컴포넌트의 `<input />` 요소는 다음과 같이 표시됩니다.

```jsx
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

그리고 `Eat`만 확인하도록 브라우저를 업데이트 해야 합니다.

![이제 다양한 체크 상태가 있는 할 일 목록 앱 - 일부 체크박스는 체크되어 있고 다른 체크박스는 체크되어 있지 않습니다](todo-list-differing-checked-states.png)

각 `<Todo />` 컴포넌트의 `completed` 소품을 변경하면, 브라우저는 이에 따라 렌더링된 해당 체크박스를 선택하거나 선택 취소합니다.

### `id` 좀 주세요

지금, `<Todo />` 컴포넌트는 모든 작업에 `todo-0`의 `id` 속성을 부여합니다. 이것은 [`id` 속성](/ko/docs/Web/HTML/Global_attributes/id)이 고유해야 하기 때문에, 잘못된 HTML입니다(CSS, JavaScript 등에서 문서 조각의 고유 식별자로 사용됨). 이는 각 `Todo`에 대해 고유한 값을 갖는 `id` 속성을 컴포넌트에 제공해야 함을 의미합니다.

처음에 했던 것과 동일한 패턴을 따르기 위해, `<Todo />` 컴포넌트의 각 인스턴스에 `todo-i` 형식의 ID를 부여해 보겠습니다. 여기서 `i`는 매번 1씩 커집니다.

```jsx
<Todo name="Eat" completed={true} id="todo-0" />
<Todo name="Sleep" completed={false} id="todo-1" />
<Todo name="Repeat" completed={false} id="todo-2" />
```

이제 `Todo.js`로 돌아가서 `id` 속성을 사용하십시오. `<input />` 요소의 `id` 속성 값과 레이블의 `htmlFor` 속성 값을 대체해야 합니다.

```jsx
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

## 여태까지는 그런대로 잘됐다?

우리는 지금까지 React를 잘 활용하고 있지만, 더 잘할 수 있습니다! 우리의 코드는 반복적입니다. `<Todo />` 컴포넌트를 렌더링하는 세 줄은 각 속성의 값이라는 한 가지 차이점만 제외하면, 거의 동일합니다.

JavaScript의 핵심 기능 중 하나인 반복을 사용하여 코드를 정리할 수 있습니다. 반복을 사용하려면, 먼저 작업을 다시 생각해야 합니다.

## 데이터로서의 작업

각 작업에는 현재 이름, 확인 여부 및 고유 ID의 세 가지 정보가 포함되어 있습니다. 이 데이터는 객체로 잘 변환됩니다. 하나 이상의 작업이 있으므로, 객체 배열이 이 데이터를 나타내는 데 적합합니다.

In `src/index.js`, make a new `const` beneath the final import, but above `ReactDOM.render()`:
`src/index.js`에서, 마지막 가져오기 아래에 있지만 `ReactDOM.render()` 위에 새로운 `const`를 만듭니다.

```jsx
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
```

다음으로, `DATA`를 `tasks`라는 속성으로 `<App />`에 전달합니다. `src/index.js`의 마지막 줄은 다음과 같아야 합니다.

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
);
```

이 배열은 이제 App 컴포넌트에서 `props.tasks`로 사용할 수 있습니다. 원하는 경우, `console.log()`를 사용하여 확인할 수 있습니다.

> **참고:** `ALL_CAPS` 상수 이름은 JavaScript에서 특별한 의미가 없습니다. 다른 개발자에게 "이 데이터는 여기에서 정의된 후 절대 변경되지 않습니다"라고 말하는 규칙입니다.

## 반복으로 렌더링

객체 배열을 렌더링하려면, 각 객체를 `<Todo />` 컴포넌트로 전환해야 합니다. JavaScript는 항목을 다른 것으로 변환하기 위한 배열 메서드를 제공합니다. [`Array.prototype.map()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

`App()`의 return 문 위에 `taskList`라는 새 `const`를 만듭니다. `props.tasks` 배열의 각 작업을 `name`으로 변환하여 시작하겠습니다.

```jsx
const taskList = props.tasks?.map((task) => task.name);
```

`<ul>`의 모든 자식을 `taskList`로 교체해 봅시다.

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>
```

이렇게 하면 모든 컴포넌트를 다시 표시할 수 있지만, 할 일이 더 있습니다. 브라우저는 현재 각 작업의 이름을 구조화되지 않은 텍스트로 렌더링합니다. HTML 구조인 `<li>`와 체크박스 및 버튼이 누락되었습니다!

![할 일 항목 레이블이 있는 할 일 목록 앱이 한 줄에 묶여 표시됩니다](todo-list-unstructured-names.png)

이 문제를 해결하려면, `map()` 함수에서 `<Todo />` 컴포넌트를 반환해야 합니다. JSX를 사용하면 JavaScript와 마크업 구조를 혼합할 수 있다는 점을 기억하세요! 이미 가지고 있는 것 대신 다음을 시도해 봅시다.

```jsx
const taskList = props.tasks.map((task) => <Todo />);
```

애플리케이션을 다시 살펴보세요. 이제 우리의 작업은 예전처럼 보이지만, 작업 자체의 이름이 없습니다. 매핑하는 각 작업에는 `<Todo />` 컴포넌트에 전달하려는 `id`, `name`, 및 `completed` 속성이 있습니다. 이 지식을 종합하면, 다음과 같은 코드를 얻을 수 있습니다.

```jsx
const taskList = props.tasks.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

이제 애플리케이션은 이전처럼 보이고, 코드가 덜 반복됩니다.

## 고유 키

이제 React는 작업을 배열에서 렌더링하므로, 올바르게 렌더링하기 위해 어느 것이 어떤 것인지 추적해야 합니다. React는 사물을 추적하기 위해 자체 추측을 시도하지만, `<Todo />` 컴포넌트에 `key` 속성을 전달하여 도움을 줄 수 있습니다. `key`는 React가 관리하는 특별한 소품입니다. 다른 목적으로 `key`라는 단어를 사용할 수 없습니다.

key는 고유해야 하므로, 각 작업 객체의 `id`를 키로 재사용할 것입니다. 다음과 같이 `taskList` 상수를 업데이트하세요.

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

**반복으로 렌더링하는 모든 항목에 항상 고유한 키를 전달해야 합니다.** 브라우저에서 명백한 변경사항은 없지만, 고유한 키를 사용하지 않으면, React가 콘솔에 경고를 기록하고 애플리케이션이 이상하게 작동할 수 있습니다!

## 애플리케이션의 나머지 부분 컴포넌트화

이제 가장 중요한 컴포넌트를 정리했으므로, 애플리케이션의 나머지 부분을 컴포넌트로 전환할 수 있습니다. 컴포넌트는 UI의 명백한 부분이거나, 재사용되는 UI의 한 부분이거나, 둘 다라는 점을 기억하면 두 가지 컴포넌트를 더 만들 수 있습니다.

- `<Form/>`
- `<FilterButton/>`

우리는 둘 다 필요하다는 것을 알고 있으므로, 일부 파일 생성 작업을 터미널 명령과 함께 일괄 처리할 수 있습니다. 애플리케이션의 루트 디렉터리에 있는지 확인하면서, 터미널에서 이 명령을 실행합니다.

```bash
touch src/components/Form.js src/components/FilterButton.js
```

### `<Form />`

`components/Form.js`를 열고 다음을 수행하세요.

- `Todo.js`에서 했던 것처럼 파일 상단에 `React`를 가져옵니다.
- `Todo()`와 동일한 기본 구조를 가진 새로운 `Form()` 컴포넌트를 만드세요.
- `App.js` 내부에서 `<form>` 태그 안에 있는 모든 항목을 복사하고, `Form()`의 `return` 문에 붙여넣어줍니다.
- 파일 끝에 `Form`을 내보냅니다

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

### \<FilterButton />

`FilterButton.js` 내부에 `Form.js`를 만들 때 했던 것과 동일한 작업을 수행하지만, `FilterButton()` 컴포넌트를 호출하고 `App.js`에서 `filters`라는 `class`가 있는 `<div>` 요소 내부의 첫 번째 버튼에 대한 HTML을 `return` 문으로 복사합니다.

파일은 다음과 같아야 합니다.

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

> **참고:** 각 버튼이 동일하다는 점에서 `<Todo />` 컴포넌트에 대해 처음 했던 것과 동일한 실수를 여기서 하고 있음을 알 수 있습니다. 괜찮습니다! 나중에 [필터 버튼으로 돌아가기](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons)에서 이 컴포넌트를 수정할 예정입니다.

## 모든 컴포넌트 가져오기

새로운 컴포넌트를 사용해봅시다.

`App.js` 상단에 `import` 문을 추가하여 가져오세요.

그런 다음, 컴포넌트를 렌더링하도록 `App()`의 `return` 문을 업데이트합니다. 완료되면, `App.js`는 다음과 같이 표시됩니다.

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

이 기사는 여기까지입니다. 애플리케이션을 컴포넌트로 멋지게 분할하고 효율적으로 렌더링하는 방법에 대해 자세히 살펴보았습니다. 이제 React에서 이벤트를 처리하는 방법을 살펴보고, 상호 작용을 추가하기 시작합니다.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
