---
title: "React 상호작용: 편집하기, 필터링, 조건부 렌더링"
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering
original_slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

React 여정이 거의 끝나감에 따라(적어도 지금은), Todo 목록 애플리케이션의 주요 기능 영역에 마무리 작업을 추가할 것입니다. 여기에는 기존 할 일을 편집할 수 있도록 허용하고, 모든 할 일, 완료된 할 일 및 완료되지 않은 할 일 간의 할 일 목록을 필터링하는 것이 포함됩니다. 그 과정에서 조건부 UI 렌더링을 살펴보겠습니다.

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
        React의 조건부 렌더링에 대해 배우고 애플리케이션에서 목록 필터링 및 편집 UI를 구현합니다.
      </td>
    </tr>
  </tbody>
</table>

## 할 일 이름 편집

아직 할 일 이름을 편집하기 위한 사용자 인터페이스가 없습니다. 우리는 잠시 후에 그것을 얻을 것입니다. 우선 `App.js`에서 적어도 `editTask()` 함수를 구현할 수 있습니다. 대상 객체를 찾기 위해 `id`를 사용하기 때문에, `deleteTask()`와 비슷하지만 할 일을 업데이트할 이름이 포함된 `newName` 속성도 사용합니다. 배열에서 무언가를 삭제하는 대신, 약간의 변경사항이 있는 새 배열을 반환하고 싶기 때문에 [`Array.prototype.filter()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 대신 [`Array.prototype.map()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)을 사용합니다.

`App` 컴포넌트 내부의 `editTask()` 함수를 다른 함수와 동일한 위치에 추가합니다.

```jsx
function editTask(id, newName) {
  const editedTaskList = tasks.map((task) => {
    // 이 할 일이 편집된 작업과 동일한 ID를 갖는 경우
    if (id === task.id) {
      //
      return { ...task, name: newName };
    }
    return task;
  });
  setTasks(editedTaskList);
}
```

`deleteTask`와 같은 방식으로 `editTask`를 `<Todo />` 컴포넌트에 속성으로 전달합니다.

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

이제 `Todo.js`를 엽니다. 우리는 약간의 리팩토링을 할 것입니다.

## 편집을 위한 UI

사용자가 할 일을 편집할 수 있도록 하려면, 그렇게 할 수 있는 사용자 인터페이스를 제공해야 합니다. 먼저 `App` 컴포넌트에서 이전에 했던 것처럼 `useState`를 `Todo` 컴포넌트로 가져옵니다. 첫 번째 import 문을 다음과 같이 업데이트합니다.

```jsx
import React, { useState } from "react";
```

이제 이것을 사용하여 `isEditing` 상태를 설정하고, 기본 상태는 `false`여야 합니다. `Todo(props) {}` 컴포넌트 정의의 맨 위에 다음 행을 추가하십시오.

```jsx
const [isEditing, setEditing] = useState(false);
```

다음으로, `<Todo />` 컴포넌트를 다시 생각해 보겠습니다. 이제부터 지금까지 사용된 단일 템플릿이 아닌, 두 가지 가능한 "템플릿" 중 하나를 표시하려고 합니다.

- "보기" 템플릿, 단지 할 일을 볼 때, 이것이 지금까지 튜토리얼에서 사용한 것입니다.
- 할 일을 편집할 때, "편집" 템플릿입니다. 우리는 이것을 만들려고 합니다.

이 코드 블록을 `useState()` 훅 아래, `return`문 위에 있는 `Todo()` 함수에 복사합니다.

```jsx
const editingTemplate = (
  <form className="stack-small">
    <div className="form-group">
      <label className="todo-label" htmlFor={props.id}>
        {props.name}의 새로운 이름
      </label>
      <input id={props.id} className="todo-text" type="text" />
    </div>
    <div className="btn-group">
      <button type="button" className="btn todo-cancel">
        취소
        <span className="visually-hidden">{props.name} 이름 바꾸기</span>
      </button>
      <button type="submit" className="btn btn__primary todo-edit">
        저장
        <span className="visually-hidden">{props.name}의 새로운 이름</span>
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
        편집 <span className="visually-hidden">{props.name}</span>
      </button>
      <button
        type="button"
        className="btn btn__danger"
        onClick={() => props.deleteTask(props.id)}>
        삭제 <span className="visually-hidden">{props.name}</span>
      </button>
    </div>
  </div>
);
```

이제 두 개의 서로 다른 상수 내에 정의된, "편집" 및 "보기"라는 두 가지 템플릿 구조가 있습니다. 이는 `<Todo />`의 `return` 문이 이제 반복된다는 것을 의미합니다. 또한 "보기" 템플릿의 정의도 포함됩니다. 컴포넌트가 반환하는 템플릿을 결정하기 위해 **조건부 렌더링**을 사용하여 이를 정리할 수 있으므로, UI에서 렌더링됩니다.

## 조건부 렌더링

JSX에서는, 조건을 사용하여 브라우저에서 렌더링되는 내용을 변경할 수 있습니다. JSX에서 조건을 작성하려면, [삼항 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Conditional_operator)를 사용할 수 있습니다.

`<Todo />` 컴포넌트의 경우, 우리의 조건은 "이 할 일이 편집되고 있는가?"입니다. `Todo()` 내부의 `return` 문을 다음과 같이 변경합니다.

```jsx
return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
```

브라우저는 이전과 마찬가지로 모든 할 일들을 렌더링해야 합니다. 편집 템플릿을 보려면, 현재 코드에서 기본 `isEditing` 상태를 `false`에서 `true`로 변경해야 합니다. 다음 섹션에서 편집 버튼 토글을 만드는 방법을 살펴보겠습니다!

## `<Todo />` 템플릿 토글

마침내, 최종 핵심 기능을 대화형으로 만들 준비가 되었습니다. 우선, 사용자가 `viewTemplate`에서 "편집" 버튼을 누를 때 값이 `true`인 `setEditing()`을 호출하여 템플릿을 전환할 수 있도록 합니다.

다음과 같이 `viewTemplate`에서 "편집" 버튼을 업데이트합니다.

```jsx
<button type="button" className="btn" onClick={() => setEditing(true)}>
  편집 <span className="visually-hidden">{props.name}</span>
</button>
```

이제 동일한 `onClick` 핸들러를 `editingTemplate`의 "Cancel" 버튼에 추가하지만, 이번에는 `isEditing`을 `false`로 설정하여 "보기" 템플릿으로 다시 전환합니다.

다음과 같이 `editingTemplate`에서 "취소" 버튼을 업데이트합니다.

```jsx
<button
  type="button"
  className="btn todo-cancel"
  onClick={() => setEditing(false)}>
  취소
  <span className="visually-hidden">{props.name} 이름 바꾸기</span>
</button>
```

이 코드를 사용하면, 할 일 항목에서 "편집" 및 "취소" 버튼을 눌러 템플릿 간에 전환할 수 있어야 합니다.

![사용 가능한 편집 및 삭제 버튼이 있는 보기 템플릿을 보여주는 eat todo 항목](view.png)

![새 이름을 입력할 수 있는 입력 필드와 사용 가능한 취소 및 저장 버튼이 있는 편집 템플릿을 보여주는 eat todo 항목](edit.png)

다음 단계는 실제로 편집 기능을 작동시키는 것입니다.

## UI에서 편집하기

우리가 하려는 많은 작업은 `Form.js`에서 수행한 작업을 반영할 것입니다. 사용자가 새 입력 필드에 입력할 때 입력하는 텍스트를 추적해야 합니다. 양식을 제출하면 콜백 속성을 사용하여 할 일의 새 이름으로 상태를 업데이트해야 합니다.

새 이름을 저장하고 설정하기 위한 새 훅을 만드는 것으로 시작하겠습니다. 여전히 `Todo.js`에서 기존 훅 아래에 다음을 추가합니다.

```jsx
const [newName, setNewName] = useState("");
```

다음으로, 새 이름을 설정할 `handleChange()` 함수를 만듭니다. 이 함수를 훅과 템플릿의 사이에 넣으세요.

```jsx
function handleChange(e) {
  setNewName(e.target.value);
}
```

이제 `editingTemplate`의 `<input />` 필드를 업데이트하고 `value` 속성을 `newName`으로 설정하고, `handleChange()` 함수를 `onChange` 이벤트에 바인딩합니다.

```jsx
<input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
/>
```

마지막으로, 편집 양식의 `onSubmit` 이벤트를 처리하는 함수를 만들어야 합니다. 이전에 추가한 함수 바로 아래에 다음을 추가합니다.

```jsx
function handleSubmit(e) {
  e.preventDefault();
  props.editTask(props.id, newName);
  setNewName("");
  setEditing(false);
}
```

`editTask()` 콜백 속성에는 편집 중인 할 일의 ID와 새 이름이 필요하다는 점을 기억하세요.

다음 `onSubmit` 핸들러를 `editingTemplate`의 `<form>`에 추가하여 이 함수를 양식의 `submit` 이벤트에 바인딩합니다.

```jsx
<form className="stack-small" onSubmit={handleSubmit}>
```

이제 브라우저에서 할 일을 편집할 수 있습니다!

## 필터 버튼으로 돌아가기

이제 주요 기능이 완성되었으니, 필터 버튼에 대해 생각해볼 수 있습니다. 현재, 필터 버튼은 "All" 레이블을 반복하며, 아무런 기능도 없습니다! 여기에는 `<Todo />` 컴포넌트에서 사용했던 몇 가지 기술을 다시 적용할 것입니다.

- 활성된 필터를 저장하기 위한 훅을 만듭니다.
- 사용자가 활성 필터를 모두, 완료됨, 완료되지 않음으로 변경할 수 있는 `<FilterButton />` 요소의 배열을 렌더링합니다.

### 필터 훅 추가하기

필터를 읽고 설정하는 `App()` 함수에 새 훅을 추가합니다. 모든 할 일이 처음에 표시되어야 하므로 기본 필터를 `All`로 지정합니다.

```jsx
const [filter, setFilter] = useState("All");
```

### 필터 정의

현재 우리의 목표는 두 가지입니다.

- 각 필터의 이름은 고유해야 합니다.
- 각 필터에는 고유한 행위가 있어야 합니다.

JavaScript 객체는 이름과 행위를 연결하는 좋은 방법입니다. 각 키는 필터의 이름입니다. 각 속성은 해당 이름과 관련된 행위입니다.

`App.js` 상단에, import 문들 아래에 있지만 `App()` 함수 위에, `FILTER_MAP` 이라는 객체를 추가해보겠습니다.

```jsx
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
```

`FILTER_MAP`의 값은 `tasks` 데이터 배열을 필터링하는 데 사용할 함수입니다.

- `All` 필터는 모든 할 일을 표시하므로, 모든 할 일에 대해 `true`를 반환합니다.
- `Active` 필터는 `completed` 속성이 `false`인 할 일을 표시합니다.
- `Completed` 필터는 `completed` 속성이 `true`인 할 일을 표시합니다.

이전에 추가된 항목 아래에, 다음을 추가합니다. 여기서는 [`Object.keys()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)를 사용하여 `FILTER_NAMES` 배열을 수집합니다.

```jsx
const FILTER_NAMES = Object.keys(FILTER_MAP);
```

> [!NOTE]
> 우리는 `App()` 함수 외부에서 이러한 상수들을 정의하고 있습니다. 내부에 정의된 경우, `<App />` 컴포넌트가 다시 렌더링될 때마다 다시 계산되기 때문인데, 우리는 그것을 원하지 않습니다. 이 정보는 애플리케이션이 무엇을 하든 절대 변경되지 않습니다.

### 필터 렌더링

이제 `FILTER_NAMES` 배열이 있으므로, 이를 사용하여 세 가지 필터를 모두 렌더링할 수 있습니다. `App()` 함수 내에서 `filterList`라는 상수를 만들 수 있습니다. 이 상수는 이름 배열을 매핑하고 `<FilterButton />` 컴포넌트를 반환하는 데 사용할 것입니다. 여기서도 키가 필요하다는 것을 기억하세요.

`taskList` 상수 선언 아래에 다음을 추가합니다.

```jsx
const filterList = FILTER_NAMES.map((name) => (
  <FilterButton key={name} name={name} />
));
```

이제 `App.js`에서 반복되는 세 개의 `<FilterButton />`을 이 `filterList`로 바꾸어줍니다. 다음을 변경해주세요.

```jsx
<FilterButton />
<FilterButton />
<FilterButton />
```

이 코드로 변경해주세요.

```jsx-nolint
{filterList}
```

아직 작동하지 않습니다. 먼저 해야 할 일이 조금 더 있습니다.

### 상호 작용을 하는 필터

필터 버튼을 상호 작용할 수 있게 만들려면, 어떤 속성을 활용해야 하는지 고려해야 합니다.

- 우리는 `<FilterButton />`이 현재 눌렸는지 여부를 보고해야 하며, 이름이 필터 상태의 현재 값과 일치하면 눌러야 한다는 것을 알고 있습니다.
- 활성 필터를 설정하려면 `<FilterButton />`에 콜백이 필요하다는 것을 알고 있습니다. `setFilter` 훅을 직접 사용할 수 있습니다.

다음과 같이 `filterList` 상수를 업데이트합니다.

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

이전에 `<Todo />` 컴포넌트에서 했던 것과 같은 방식으로, 이제 `FilterButton.js`를 업데이트하여 제공된 속성을 활용해야 합니다. 다음을 각각 수행하고, 중괄호를 사용하여 이러한 변수를 읽어오는 것을 잊지 마세요!

- `all`을 `{props.name}`으로 바꾸어줍니다.
- `aria-pressed` 값을 `{props.isPressed}`로 설정합니다.
- 필터 이름으로 `props.setFilter()`를 호출하는 `onClick` 핸들러를 추가합니다.

모든 할 일이 완료되면, `FilterButton()` 함수는 다음과 같아야 합니다.

```jsx
function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}>
      <span className="visually-hidden">보여주다</span>
      <span>{props.name}</span>
      <span className="visually-hidden">할 일들</span>
    </button>
  );
}
```

브라우저를 다시 열어보세요. 서로 다른 버튼에 각각의 이름이 부여된 것을 볼 수 있습니다. 필터 버튼을 누르면, 해당 텍스트가 새로운 윤곽선에 나타나는 것을 볼 수 있습니다. 이는 해당 버튼이 선택되었음을 알려줍니다. 버튼을 클릭하는 동안 DevTool의 Page Inspector를 보면, 그에 따라 `aria-pressed` 속성 값이 변경되는 것을 볼 수 있습니다.

![애플리케이션의 3개 필터 버튼 - 모두, 활성화 및 완료됨 - 완료 주위에 포커스 강조 표시](filter-buttons.png)

그러나, 버튼은 여전히 UI에서 할 일을 실제로 필터링하지 않습니다! 이것으로 마무리하겠습니다.

### UI에서 할 일 필터링

지금은, `App()`의 `taskList` 상수가 할 일 상태를 매핑하고 모든 할 일에 대한 새로운 `<Todo />` 컴포넌트를 반환합니다. 이것은 우리가 원하는 것이 아닙니다! 할 일은 선택한 필터를 적용한 결과에 포함된 경우에만 렌더링되어야 합니다. 할 일 상태를 매핑하기 전에, 렌더링하지 않으려는 객체를 제거하기 위해 필터링([`Array.prototype.filter()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter))해야 합니다.

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

`Array.prototype.filter()`에서 사용할 콜백 함수를 결정하기 위해, 필터 상태의 키에 해당하는 `FILTER_MAP`의 값에 접근합니다. 예를 들어, 필터가 `All`인 경우, `FILTER_MAP[filter]`는 `() => true`로 평가됩니다.

이제 브라우저에서 필터를 선택하면 기준에 맞지 않는 할 일들이 제거됩니다. 목록 위의 제목에 있는 개수도 목록을 반영하도록 변경됩니다.

![필터 버튼이 있는 앱. 활성화가 강조 표시되어, 활성화된 할 일 항목만 표시됩니다.](filtered-todo-list.png)

## 요약

이제 애플리케이션이 기능적으로 완성되었습니다. 그러나, 이제 모든 기능을 구현했으므로, 더 많은 사용자가 애플리케이션을 사용할 수 있도록 몇 가지 개선 사항을 적용할 수 있습니다. 다음 글에서는 React에 포커스 관리를 포함하여, 사용성을 개선하고 키보드만 사용하는 사용자와 화면 판독기 사용자 모두의 혼란을 줄일 수 있는 방법을 살펴봄으로써, React 자습서의 내용을 마무리합니다.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
