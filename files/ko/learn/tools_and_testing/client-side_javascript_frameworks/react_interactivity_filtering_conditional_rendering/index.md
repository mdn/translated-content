---
title: React 상호작용: 편집, 필터링, 조건부 렌더링
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

React 여정이 거의 끝나가면서(적어도 지금은) Todo 목록 앱의 주요 기능 영역에 마무리 작업을 추가할 것입니다. 여기에는 기존 작업을 편집할 수 있도록 허용하고 전체 작업, 완료된 작업, 완료되지 않은 작업 간에 작업 목록을 필터링하는 기능이 포함됩니다. 그 과정에서 조건부 UI 렌더링을 살펴보겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        <p>
          핵심 <a href="/ko/docs/Learn/HTML">HTML</a>, <a href="/ko/docs/Learn/CSS">CSS</a> 및 <a href="/ko/docs/Learn/JavaScript">JavaScript</a> 언어에 대한 지식, <a href="/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >터미널/명령줄</a>에 대한 지식.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        React의 조건부 렌더링과 앱에서 목록 필터링 및 편집 UI 구현에 대해 알아봅니다.
      </td>
    </tr>
  </tbody>
</table>

## 작업 이름 편집

아직 작업 이름을 편집할 수 있는 사용자 인터페이스가 없습니다. 이에 대해서는 잠시 후에 살펴보겠습니다. 우선 `App.js`에서 최소한 `editTask()` 함수를 구현할 수 있습니다. 대상 객체를 찾기 위해 `id`를 사용하기 때문에 `deleteTask()`와 유사하지만 작업을 업데이트할 이름이 포함된 `newName` 속성도 사용합니다. [`Array.prototype.filter()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 대신 [`Array.prototype.map()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)을 사용하겠습니다. 왜냐하면 배열에서 무언가를 삭제하는 대신 몇 가지 변경 사항이 포함된 새 배열을 반환하려고 하기 때문입니다.

`App` 구성 요소 내부의 다른 함수와 같은 위치에 `editTask()` 함수를 추가합니다.

```jsx
function editTask(id, newName) {
  const editedTaskList = tasks.map((task) => {
    // 이 작업이 편집된 작업과 동일한 ID를 갖는 경우
    if (id === task.id) {
      //
      return { ...task, name: newName };
    }
    return task;
  });
  setTasks(editedTaskList);
}
```

`deleteTask`와 동일한 방식으로 `editTask`를 `<Todo />` 구성 요소에 prop으로 전달합니다.

```jsx
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    editTask={editTask}
  />
));
```

이제 `Todo.js`를 엽니다. 우리는 리팩토링을 할 것입니다.

## 편집을 위한 UI

사용자가 작업을 편집할 수 있도록 하려면 사용자 인터페이스를 제공해야 합니다. 먼저, 첫 번째 import 문을 다음과 같이 업데이트하여 이전에 `App` 구성 요소에서 했던 것처럼 `useState`를 `Todo` 구성 요소로 가져옵니다.

```jsx
import React, { useState } from "react";
```

이제 이를 사용하여 기본 상태가 `false`인 `isEditing` 상태를 설정합니다. `Todo(props) { }` 구성 요소 정의 바로 위에 다음 줄을 추가합니다.

```jsx
const [isEditing, setEditing] = useState(false);
```

다음으로 `<Todo />` 구성 요소를 다시 생각해 보겠습니다. 지금부터는 지금까지 사용했던 단일 템플릿이 아닌 두 가지 가능한 "템플릿" 중 하나를 표시하기를 원합니다.

- "보기" 템플릿은 할 일을 볼 때 사용됩니다. 이것이 지금까지 튜토리얼에서 사용한 것입니다.
- 할 일을 편집할 때 "편집" 템플릿. 우리는 이것을 만들려고 합니다.

이 코드 블록을 `useState()` 후크 아래, `return` 문 위에 있는 `Todo()` 함수에 복사하세요.

```jsx
const editingTemplate = (
  <form className="stack-small">
    <div className="form-group">
      <label className="todo-label" htmlFor={props.id}>
        New name for {props.name}
      </label>
      <input id={props.id} className="todo-text" type="text" />
    </div>
    <div className="btn-group">
      <button type="button" className="btn todo-cancel">
        Cancel
        <span className="visually-hidden">renaming {props.name}</span>
      </button>
      <button type="submit" className="btn btn__primary todo-edit">
        Save
        <span className="visually-hidden">new name for {props.name}</span>
      </button>
    </div>
  </form>
);
const viewTemplate = (
  <div className="stack-small">
    <div className="c-cb">
      <input
        id={props.id}
        type="checkbox"
        defaultChecked={props.completed}
        onChange={() => props.toggleTaskCompleted(props.id)}
      />
      <label className="todo-label" htmlFor={props.id}>
        {props.name}
      </label>
    </div>
    <div className="btn-group">
      <button type="button" className="btn">
        Edit <span className="visually-hidden">{props.name}</span>
      </button>
      <button
        type="button"
        className="btn btn__danger"
        onClick={() => props.deleteTask(props.id)}>
        Delete <span className="visually-hidden">{props.name}</span>
      </button>
    </div>
  </div>
);
```

이제 두 개의 개별 상수 내에 정의된 두 개의 서로 다른 템플릿 구조("편집" 및 "보기")가 있습니다. 이는 `<Todo />`의 `return` 문이 이제 반복적이라는 것을 의미합니다. 여기에는 "view" 템플릿의 정의도 포함됩니다. **조건부 렌더링**을 사용하여 구성 요소가 어떤 템플릿을 반환하고 이에 따라 UI에 렌더링되는지 결정함으로써 이를 정리할 수 있습니다.

## 조건부 렌더링

JSX에서는 조건을 사용하여 브라우저에서 렌더링되는 내용을 변경할 수 있습니다. JSX에서 조건을 작성하려면 [ternary operator](/ko/docs/Web/JavaScript/Reference/Operators/Conditional_operator)를 사용할 수 있습니다.

`<Todo />` 컴포넌트의 경우 조건은 "이 작업을 편집 중입니까?"입니다. `Todo()` 내부의 `return` 문을 다음과 같이 변경합니다.

```jsx
return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
```

브라우저는 이전과 마찬가지로 모든 작업을 렌더링해야 합니다. 편집 템플릿을 보려면 지금은 코드에서 기본 `isEditing` 상태를 `false`에서 `true`로 변경해야 합니다. 다음 섹션에서는 편집 버튼을 통해 이를 전환하는 방법을 살펴보겠습니다!

## `<Todo />` 템플릿 토글

마침내 우리는 최종 핵심 기능을 대화형으로 만들 준비가 되었습니다. 우선, 사용자가 `viewTemplate`에서 "Edit" 버튼을 누를 때 `true` 값으로 `setEditing()`을 호출하여 템플릿을 전환하려고 합니다.

다음과 같이 `viewTemplate`의 "Edit" 버튼을 업데이트합니다.

```jsx
<button type="button" className="btn" onClick={() => setEditing(true)}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

이제 `editTemplate`의 "Cancel" 버튼에 동일한 `onClick` 핸들러를 추가하겠습니다. 하지만 이번에는 `isEditing`을 `false`로 설정하여 뷰 템플릿으로 다시 전환하겠습니다.

`editTemplate`의 "Cancel" 버튼을 다음과 같이 업데이트하세요.

```jsx
<button
  type="button"
  className="btn todo-cancel"
  onClick={() => setEditing(false)}>
  Cancel
  <span className="visually-hidden">renaming {props.name}</span>
</button>
```

이 코드를 사용하면 할 일 항목에서 "편집" 및 "취소" 버튼을 눌러 템플릿 간에 전환할 수 있습니다.

![The eat todo item showing the view template, with edit and delete buttons available](view.png)

![The eat todo item showing the edit template, with an input field to enter a new name, and cancel and save buttons available](edit.png)

다음 단계는 실제로 편집 기능이 작동하도록 만드는 것입니다.

## UI에서 편집

우리가 하려는 대부분의 작업은 `Form.js`에서 수행한 작업을 반영합니다. 사용자가 새 입력 필드에 입력하면 입력한 텍스트를 추적해야 합니다. 양식을 제출하면 콜백 소품을 사용하여 작업의 새 이름으로 상태를 업데이트해야 합니다.

새 이름을 저장하고 설정하기 위한 새 후크를 만드는 것부터 시작하겠습니다. 여전히 `Todo.js`에서 기존 후크 아래에 다음을 배치합니다.

```jsx
const [newName, setNewName] = useState("");
```

다음으로, 새 이름을 설정할 `handlerChange()` 함수를 만듭니다. 이것을 후크 아래, 템플릿 앞에 놓으십시오.

```jsx
function handleChange(e) {
  setNewName(e.target.value);
}
```

이제 `editingTemplate`의 `<input />` 필드를 업데이트하고, `newName`의 값 속성을 설정하고, `handlerChange()` 함수를 `onChange` 이벤트에 바인딩하겠습니다. 다음과 같이 업데이트하세요.

```jsx
<input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
/>
```

마지막으로 편집 양식의 `onSubmit` 이벤트를 처리하는 함수를 만들어야 합니다. 추가한 이전 함수 바로 아래에 다음을 추가합니다.

```jsx
function handleSubmit(e) {
  e.preventDefault();
  props.editTask(props.id, newName);
  setNewName("");
  setEditing(false);
}
```

`editTask()` 콜백 prop에는 편집 중인 작업의 ID와 새 이름이 필요하다는 점을 기억하세요.

`EditingTemplate`의 `<form>`에 다음 `onSubmit` 핸들러를 추가하여 이 함수를 양식의 제출 이벤트에 바인딩합니다.

```jsx
<form className="stack-small" onSubmit={handleSubmit}>
```

이제 브라우저에서 작업을 편집할 수 있습니다!

## 필터 버튼으로 돌아가기

이제 주요 기능이 완성되었으므로 필터 버튼에 대해 생각해 볼 수 있습니다. 현재는 "모두" 레이블이 반복되며 기능이 없습니다! `<Todo />` 구성 요소에서 사용한 일부 기술을 다음과 같이 다시 적용할 것입니다.

- 활성 필터를 저장하기 위한 후크를 만듭니다.
- 사용자가 모두, 완료, 미완료 사이에서 활성 필터를 변경할 수 있도록 하는 `<FilterButton />` 요소 배열을 렌더링합니다.

### 필터 후크 추가

필터를 읽고 설정하는 `App()` 함수에 새 후크를 추가합니다. 모든 작업이 처음에 표시되어야 하므로 기본 필터를 `All`로 설정하려고 합니다.

```jsx
const [filter, setFilter] = useState("All");
```

### 필터 정의

현재 우리의 목표는 두 가지입니다.

- 각 필터에는 고유한 이름이 있어야 합니다.
- 각 필터에는 고유한 동작이 있어야 합니다.

JavaScript 객체는 이름을 동작과 연결하는 좋은 방법입니다. 각 키는 필터의 이름입니다. 각 속성은 해당 이름과 관련된 동작입니다.

`App.js` 상단, 가져오기 아래, `App()` 함수 위에 `FILTER_MAP`이라는 객체를 추가해 보겠습니다.

```jsx
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
```

`FILTER_MAP`의 값은 `tasks` 데이터 배열을 필터링하는 데 사용할 함수입니다.

- `All` 필터는 모든 작업을 표시하므로 모든 작업에 대해 `true`를 반환합니다.
- `Active` 필터는 `completed` 속성이 `false`인 작업을 표시합니다.
- `Completed` 필터는 `completed` 속성이 `true`인 작업을 표시합니다.

이전 추가 항목 아래에 다음을 추가합니다. 여기서는 [`Object.keys()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) 메서드를 사용하여 `FILTER_NAMES` 배열을 수집합니다.

```jsx
const FILTER_NAMES = Object.keys(FILTER_MAP);
```

> **참고:** 이러한 상수를 `App()` 함수 외부에서 정의하는 이유는 이 상수가 내부에 정의되어 있으면 `<App />` 구성 요소가 다시 렌더링될 때마다 다시 계산되므로 이를 원하지 않기 때문입니다. 이 정보는 우리 애플리케이션이 무엇을 하든 절대 변하지 않습니다.

### 필터 렌더링

이제 `FILTER_NAMES` 배열이 있으므로 이를 사용하여 세 가지 필터를 모두 렌더링할 수 있습니다. `App()` 함수 내에서 우리는 이름 배열을 매핑하고 `<FilterButton />` 구성 요소를 반환하는 데 사용할 `filterList`라는 상수를 만들 수 있습니다. 여기에도 열쇠가 필요하다는 것을 기억하세요.

`taskList` 상수 선언 아래에 다음을 추가합니다.

```jsx
const filterList = FILTER_NAMES.map((name) => (
  <FilterButton key={name} name={name} />
));
```

이제 `App.js`에서 반복되는 세 개의 `<FilterButton />`을 이 `filterList`로 대체하겠습니다. 다음을 교체하십시오.

```jsx
<FilterButton />
<FilterButton />
<FilterButton />
```

이것으로.

```jsx-nolint
{filterList}
```

아직 작동하지 않습니다. 먼저 해야 할 일이 좀 더 있습니다.

### 대화형 필터

필터 버튼을 대화형으로 만들려면 어떤 소품을 활용해야 하는지 고려해야 합니다.

- 우리는 `<FilterButton />`이 현재 눌려졌는지 여부를 보고해야 하며, 이름이 필터 상태의 현재 값과 일치하면 눌러야 한다는 것을 알고 있습니다.
- 우리는 활성 필터를 설정하기 위해 `<FilterButton />`에 콜백이 필요하다는 것을 알고 있습니다. `setFilter` 후크를 직접 사용할 수 있습니다.

다음과 같이 `filterList` 상수를 업데이트하십시오.

```jsx
const filterList = FILTER_NAMES.map((name) => (
  <FilterButton
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
  />
));
```

이전에 `<Todo />` 구성 요소에서 했던 것과 같은 방식으로, 이제 우리가 제공한 props를 활용하기 위해 `FilterButton.js`를 업데이트해야 합니다. 다음 각 작업을 수행하고 중괄호를 사용하여 이러한 변수를 읽는 것을 기억하세요!

- `all`를 `{props.name}`으로 바꿉니다.
- `aria-pressed` 값을 `{props.isPressed}`로 설정합니다.
- 필터 이름으로 `props.setFilter()`를 호출하는 `onClick` 핸들러를 추가합니다.

모든 작업이 완료되면 `FilterButton()` 함수는 다음과 같아야 합니다.

```jsx
function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}>
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}
```

브라우저를 다시 방문하세요. 서로 다른 버튼에 각각의 이름이 부여되어 있음을 확인해야 합니다. 필터 버튼을 누르면 텍스트에 새로운 윤곽선이 적용되는 것을 볼 수 있습니다. 이는 필터 버튼이 선택되었음을 의미합니다. 그리고 버튼을 클릭하는 동안 개발도구 페이지 검사기를 보면 `aria-pressed` 속성 값이 그에 따라 변경되는 것을 볼 수 있습니다.

![The three filter buttons of the app - all, active, and completed - with a focus highlight around completed](filter-buttons.png)

그러나 우리의 버튼은 여전히 ​​UI의 할 일을 실제로 필터링하지 않습니다. 이걸 끝내자.

### UI에서 작업 필터링

현재 `App()`의 `taskList` 상수는 작업 상태를 매핑하고 모든 작업에 대해 새로운 `<Todo />` 구성 요소를 반환합니다. 이것은 우리가 원하는 것이 아닙니다! 작업은 선택한 필터를 적용한 결과에 포함된 경우에만 렌더링되어야 합니다. 작업 상태를 매핑하기 전에 렌더링하고 싶지 않은 객체를 제거하기 위해 이를 필터링[`Array.prototype.filter()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 사용)해야 합니다.

다음과 같이 `taskList`를 업데이트하세요.

```jsx
const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
```

`Array.prototype.filter()`에서 사용할 콜백 함수를 결정하기 위해 필터 상태의 키에 해당하는 `FILTER_MAP`의 값에 액세스합니다. 예를 들어 필터가 `All`인 경우 `FILTER_MAP[filter]`는 `() => true`로 평가됩니다.

이제 브라우저에서 필터를 선택하면 해당 기준을 충족하지 않는 작업이 제거됩니다. 목록 위 제목의 개수도 목록을 반영하여 변경됩니다!

![The app with the filter buttons in place. Active is highlighted, so only the active todo items are being shown.](filtered-todo-list.png)

## 요약

이것이 전부입니다. 이제 앱이 기능적으로 완성되었습니다. 그러나 이제 모든 기능을 구현했으므로 더 많은 사용자가 앱을 사용할 수 있도록 몇 가지 개선 사항을 적용할 수 있습니다. 다음 기사에서는 키보드 전용 사용자와 스크린 리더 사용자 모두의 사용성을 향상시키고 혼란을 줄일 수 있는 React에 포커스 관리를 포함하는 방법을 살펴봄으로써 React 튜토리얼을 마무리합니다.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
