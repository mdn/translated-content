---
title: Accessibility in React
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

마지막 자습서 글에서는, 키보드만 사용하는 사용자와 스크린 리더 사용자 모두의 사용성을 개선하고 혼란을 줄일 수 있는 React의 포커스 관리를 포함하여, (말장난을 의도한) 접근성에 초점을 맞추어 보겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        <p>
          <a href="/ko/docs/Learn/HTML">HTML</a>,
          <a href="/ko/docs/Learn/CSS">CSS</a>, 및
          <a href="/ko/docs/Learn/JavaScript">JavaScript</a> 언어 핵심에 대한 친숙도,
          knowledge of the
          <a
            href="/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >터미널/커멘드 라인</a
          >에 대한 지식.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>React 키보드 접근성 구현에 대해 알아보겠습니다.</td>
    </tr>
  </tbody>
</table>

## 키보드 사용자 포함하기

이 시점에서, 우리는 구현하기로 한 모든 기능을 완료했습니다. 사용자는 새 할 일을 추가하고, 할 일을 선택 및 선택 취소하고, 할 일을 삭제하거나, 작업 이름을 편집할 수 있습니다. 또한, 모든 할 일, 활성화된 할 일 또는 완료된 할 일별로 할 일 목록을 필터링할 수 있습니다.

또는, 적어도, 마우스로 이러한 모든 작업을 수행할 수 있습니다. 안타깝게도, 이러한 기능은 키보드만 사용하는 사용자가 쉽게 접근할 수 없습니다. 지금부터 살펴보겠습니다.

## 키보드 사용성 문제 탐색

새 할 일을 추가하려는 것과 같이, 애플리케이션 상단의 입력을 클릭하여 시작합니다. 해당 입력 주위에 두꺼운 점선 윤곽선이 표시됩니다. 이 윤곽선은 브라우저가 현재 이 요소에 포커스를 맞추고 있다는 시각적 표시기입니다. <kbd>Tab</kbd> 키를 누르면, 입력 아래에 "추가" 버튼 주위에 윤곽선이 나타나는 것을 볼 수 있습니다. 이는 브라우저의 포커스가 이동되었음을 나타냅니다.

<kbd>Tab</kbd>을 몇 번 더 누르면, 이 점선 포커스 표시기가 각 필터 버튼 사이를 이동하는 것을 볼 수 있습니다. 포커스 표시기가 첫 번째 "편집" 버튼 주위에 올 때까지 계속 진행합니다. <kbd>Enter</kbd>키를 누르세요.

`<Todo />` 컴포넌트는 우리가 디자인한 대로, 템플릿을 전환하고, 할 일 이름을 편집할 수 있는 양식을 볼 수 있습니다.

그러나, 포커스 표시기는 어디로 갔나요?

`<Todo />` 컴포넌트에서 템플릿 사이를 전환할 때, 이전에 있던 요소를 완전히 제거하여 다른 요소로 교체합니다. 즉, 포커스를 맞추던 요소가 사라지고, 포커스가 전혀 맞지 않습니다. 이는 다양한 사용자, 특히 키보드에 의존하는 사용자나 스크린 리더를 사용하는 사용자에게 혼란을 줄 수 있습니다.

키보드 및 스크린 리더 사용자의 경험을 개선하려면, 브라우저의 포커스를 직접 관리해야 합니다.

## 템플릿 간의 포커싱

사용자가 보기에서 편집으로 `<Todo />` 템플릿을 전환할 때, 이름을 바꾸는 데 사용되는 `<input />`에 포커스를 맞추어야 합니다. 그들이 편집에서 보기로 다시 전환할 때, 포커스를 다시 "편집" 버튼으로 옮겨야 합니다.

### 요소 타켓팅

DOM 요소에 포커스를 맞추려면, React에 포커스를 맞추고 싶은 요소와 찾는 방법을 알려줘야 합니다. React의 [`useRef`](https://reactjs.org/docs/hooks-reference.html#useref)훅은 `current`라는 단일 속성을 가지는 객체를 생성합니다. 이 속성은 우리가 원하는 모든 것에 대한 참조가 될 수 있으며, 해당 참조는 나중에 조회할 수 있습니다. 이 방법은 DOM 요소를 참조하는 데 특히 유용합니다.

`useRef`를 포함하도록 `Todo.js` 상단의 `import` 문을 변경합니다.

```jsx
import React, { useRef, useState } from "react";
```

그런 다음, `Todo()` 함수의 훅 아래에 두 개의 새로운 상수를 만듭니다. 각각은 참조여야 합니다. 하나는 보기 템플릿의 "편집" 버튼용이고, 다른 하나는 편집 템플릿의 편집 필드용입니다.

```jsx
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
```

이 ref는 각각의 요소에 연결할 때까지 값을 가지지 않기 때문에 기본값은 `null`입니다. 이를 위해, 각 요소에 `ref` 속성을 추가하고 해당 값을 적절한 이름의 `ref` 객체로 설정합니다.

편집 템플릿의 텍스트 상자 `<input>`은 다음과 같이 업데이트되어야 합니다.

```jsx
<input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
  ref={editFieldRef}
/>
```

보기 템플릿의 "편집" 버튼은 다음과 같아야 합니다.

```jsx
<button
  type="button"
  className="btn"
  onClick={() => setEditing(true)}
  ref={editButtonRef}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

### useEffect로 참조에 포커싱하기

ref를 의도한 목적으로 사용하려면, 다른 React 훅인 [`useEffect()`](https://reactjs.org/docs/hooks-reference.html#useeffect)를 가져와야 합니다. `useEffect()`는 React가 주어진 컴포넌트를 렌더링한 후에 실행되고, 렌더링 프로세스에 추가하고 싶은 모든 부수효과를 실행하기 때문에 이름이 붙여졌습니다. 이 부수효과는 기본 함수 본문 내에서는 실행할 수 없습니다. `useEffect()`는 `<Todo />` 컴포넌트가 렌더링되고 React가 refs가 어디에 있는지 알기 전까지는 요소에 포커싱할 수 없기 때문에 현재 상황에서 유용합니다.

`useEffect`를 추가하도록 `Todo.js`의 import 문을 다시 변경합니다.

```jsx
import React, { useEffect, useRef, useState } from "react";
```

`useEffect()`는 함수를 인수로 받아들입니다. 이 함수는 컴포넌트가 렌더링된 후에 실행됩니다. 이것이 실제로 작동하는 것을 봅시다. 다음 `useEffect()` 호출을 `Todo()` 함수 본문의 `return` 문 바로 위에 놓고, 콘솔에 "부수 효과"라는 단어를 기록하는 함수를 전달합니다.

```jsx
useEffect(() => {
  console.log("side effect");
});
```

기본 렌더링 프로세스와 `useEffect()` 내에서 실행되는 코드의 차이점을 설명하기 위해 다른 로그를 추가합니다. 이 로그를 이전 추가 항목 아래에 놓아주세요.

```jsx
console.log("main render");
```

이제, 브라우저에서 애플리케이션을 열어줍니다. 각 메시지가 세 번 반복되는, 두 메시지가 모두 콘솔에 표시되어야 합니다. "부수 효과" 로그가 코드에서 처음으로 표시되더라도, "주 렌더링"이 먼저 기록되고, "부수 효과"이 두 번째로 기록되는 방법에 유의하세요.

```plain
main render (3)                                     Todo.js:100
side effect (3)                                     Todo.js:98
```

지금은 실험을 위한 것입니다. 이제 `console.log("main render")`를 삭제하고, 포커스 관리 구현으로 넘어갑시다.

### 편집 필드에 포커싱하기

이제 `useEffect()` 훅이 작동하는 것을 알았으므로, 이를 사용하여 포커스를 관리할 수 있습니다. 참고로 편집 템플릿으로 전환할 때 편집 필드에 포커싱을 두어야 합니다.

다음과 같이 읽도록 기존 `useEffect()` 훅을 업데이트합니다.

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  }
}, [isEditing]);
```

이러한 변경으로 인해 `isEditing`이 true인 경우, React는 `editFieldRef`의 현재 값을 읽고 브라우저 포커스를 해당 값으로 이동합니다. 또한 `useEffect()`에 배열을 두 번째 인수로 전달합니다. 이 배열은 `useEffect()`가 의존해야 하는 값의 목록입니다. 이 값을 포함하면 `useEffect()`는 해당 값 중 하나가 변경될 때만 실행됩니다. `isEditing` 값이 변경될 때만 포커스를 변경하려고 합니다.

지금 시도하면, "편집" 버튼을 클릭할 때 포커스가 해당 편집 `<edit>`으로 이동하는 것을 볼 수 있습니다!

### 포커스를 수정 버튼으로 다시 이동하기

언뜻 보기에, 편집 내용이 저장되거나 취소될 때 React가 포커스를 "편집" 버튼으로 다시 이동시키는 것은 믿을 수 없을 정도로 쉬워보이는 부분입니다. `isEditing`이 `false`인 경우 편집 버튼에 포커스를 맞추기 위해 `useEffect`에 조건을 추가할 수 있을까요? 지금 시도해 봅시다. `useEffect()` 호출을 다음과 같이 업데이트하세요.

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  } else {
    editButtonRef.current.focus();
  }
}, [isEditing]);
```

대부분 다음과 같이 작동합니다. 브라우저로 돌아가면 편집을 시작하고 끝낼 때 포커스가 Edit `<input>`과 "Edit" 버튼 사이를 이동하는 것을 볼 수 있습니다. 그러나, 새로운 문제를 발견했을 수도 있습니다. 마지막 `<Todo />` 컴포넌트의 "편집" 버튼은 애플리케이션과 상호 작용하기도 전에 페이지 로드에 즉시 포커스가 맞추어집니다!

우리의 `useEffect()` 훅은 우리가 설계한 대로 정확히 작동합니다. 컴포넌트가 렌더링되자마자 실행되고, `isEditing`이 `false`임을 확인하고, "Edit" 버튼에 포커스를 맞춥니다. `<Todo />`의 세 가지 인스턴스가 있기 때문에, 마지막 "편집" 버튼에 포커스가 있는 것을 볼 수 있습니다.

`isEditing`이 한 값에서 다른 값으로 변경될 때만 포커스가 변경되도록 접근 방식을 리팩터링해야 합니다.

## 더 강력해진 포커스 관리

세분화된 기준을 충족하려면, `isEditing`의 값뿐만 아니라, 그 값이 변경된 시점도 알아야 합니다. 그러기 위해서는, `isEditing` 상수의 이전 값을 읽을 수 있어야 합니다. 의사 코드를 사용하면, 논리가 다음과 같아야 합니다.

```jsx
if (wasNotEditingBefore && isEditingNow) {
  focusOnEditField();
}
if (wasEditingBefore && isNotEditingNow) {
  focusOnEditButton();
}
```

React 팀은 [컴포넌트의 이전 상태를 가져오는 방법](https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state)에 대해 논의했으며, 작업에 사용할 수 있는 예제 사용자 지정 훅을 제공했습니다.

`Todo()` 함수 위, `Todo.js` 상단 근처에 다음 코드를 붙여넣습니다.

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

이제 `Todo()` 상단의 훅 아래에 `wasEditing` 상수를 정의합니다. 이 상수가 `isEditing`의 이전 값을 추적하기를 원하므로, `isEditing`을 인수로 사용하여 `usePrevious`를 호출합니다.

```jsx
const wasEditing = usePrevious(isEditing);
```

이 상수를 사용하여, `useEffect()` 훅을 업데이트하여 이전에 논의한 의사 코드를 구현할 수 있습니다. 다음과 같이 업데이트하세요.

```jsx
useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  }
  if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);
```

`useEffect()`의 논리는 이제 `wasEditing`에 의존하므로, 종속성 배열에 제공합니다.

다시 "편집" 및 "취소" 버튼을 사용하여 `<Todo />` 컴포넌트의 템플릿 사이를 전환하세요. 이 섹션의 시작 부분에서 논의한 문제 없이, 브라우저 포커스 표시기가 적절하게 움직이는 것을 볼 수 있습니다.

## 사용자가 할 일을 삭제할 때 포커싱하기

마지막 키보드 경험의 차이가 있습니다. 사용자가 목록에서 할 일을 삭제하면, 포커스가 사라집니다. 우리는 이전 변경 사항과 유사한 패턴을 따를 것입니다. 새로운 ref를 만들고, `usePrevious()` 훅을 활용하여, 사용자가 할 일을 삭제할 때마다 목록 제목에 집중할 수 있습니다.

### 왜 목록 제목인가요?

때로는, 포커스를 보내고 싶은 곳이 분명합니다. `<Todo />` 템플릿을 토글할 때, "돌아가기" 위한 원점인 "편집" 버튼이 있었습니다. 그러나 이 경우, DOM에서 요소를 완전히 제거하므로 돌아갈 곳이 없습니다. 그 다음으로 좋은 점은 근처 어딘가에 직관적인 위치가 있다는 것입니다. 목록 제목은 사용자가 삭제할 목록 항목에 가깝고, 그 부분에 포커스를 맞추면 사용자에게 남은 작업 수를 알려주기 때문에, 최선의 선택입니다.

### ref 만들기

`useRef()` 및 `useEffect()` 훅을 `App.js`로 가져옵니다. 아래에서 둘 다 필요합니다.

```jsx
import React, { useState, useRef, useEffect } from "react";
```

그런 다음 `App()` 함수 내에서 새 ref를 선언합니다. `return` 문 바로 위에 좋은 위치가 있습니다.

```jsx
const listHeadingRef = useRef(null);
```

### 제목 준비

`<h2>`와 같은 제목 요소는 일반적으로 포커스를 맞출 수 없습니다. 이는 문제가 되지 않는데, [`tabindex="-1"`](/ko/docs/Web/HTML/Global_attributes/tabindex) 속성을 추가하여 프로그래밍 방식으로 모든 요소를 포커스 가능하게 만들 수 있습니다. 이는 JavaScript로만 포커스 가능함을 의미합니다. [`<button>`](/ko/docs/Web/HTML/Element/button) 또는 [`<a>`](/ko/docs/Web/HTML/Element/a) 요소로 할 수 있는 것과 같은 방식으로 탭 인덱스가 `-1`인 요소에 포커스를 맞추기 위해 <kbd>Tab</kbd>을 누를 수 없습니다. (`tabindex="0"`을 사용해서 해결할 수 있지만, 이 경우에는 적절하지 않습니다.)

JSX에서 `tabIndex`로 작성된 `tabindex` 속성을 `headingRef`와 함께 할 일 목록 위 제목에 추가해 보겠습니다.

```jsx
<h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  {headingText}
</h2>
```

> **참고:** `tabindex` 속성은 접근성 한계 사례에 적합하지만, 남용하지 않도록 **매우 주의**해야 합니다. 포커스 가능하게 만드는 것이 어떤 식으로든 사용자에게 도움이 될 것이라고 절대적으로 확신하는 경우에만 요소에 `tabindex`를 적용하세요. 대부분의 경우, 버튼, anchor태그 및 입력(input)과 같이 자연스럽게 포커스를 받을 수 있는 요소를 활용해야 합니다. `tabindex`의 무책임한 사용은 키보드 및 스크린 리더 사용자에게 심각한 부정적인 영향을 미칠 수 있습니다.

### 이전 상태를 가져오기

사용자가 목록에서 할 일을 삭제할 때만 ref(`ref` 속성을 통해)와 연결된 요소에 집중하려고 합니다. 이를 위해서는 이전에 이미 사용했던 `usePrevious()` 훅이 필요합니다. import 문들 바로 아래에 있는 `App.js` 파일의 맨 위에 추가하세요.

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

이제 `App()` 함수 내부의 `return` 문 위에 다음을 추가합니다.

```jsx
const prevTaskLength = usePrevious(tasks.length);
```

여기서 우리는 `usePrevious()`를 호출하여 다음과 같이 할 일 상태의 길이를 추적합니다.

> **참고:** 이제 두 개의 파일에서 `usePrevious()`를 활용하고 있으므로, 효율성이 좋은 리팩터는 `usePrevious()` 함수를 자체 파일로 이동하고, 해당 파일에서 내보내고, 당신이 이 사용자 지정 훅을 필요로 하는 곳에 가져오는 것입니다. 이 작업을 마치면 연습으로 해보세요

### `useEffect()`를 사용하여 제목 포커스 제어

이전에 얼마나 많은 할 일이 있었는지 저장했으므로, 이제 할 일의 수가 변경될 때 실행되도록 `useEffect()` 훅을 설정할 수 있습니다. 이 훅은 현재 가지고 있는 할 일의 수가 이전보다 적은 경우(즉, 작업을 삭제한 경우) 제목에 포커스를 설정합니다!

이전에 추가한 항목 바로 아래, `App()` 함수 본문에 다음을 추가합니다.

```jsx
useEffect(() => {
  if (tasks.length - prevTaskLength === -1) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);
```

이전보다 지금 할 일이 적은 경우에만 목록 제목에 포커싱을 두려고 합니다. 이 훅에 전달된 종속성은 해당 값(현재 할 일의 개수 또는 이전 할 일의 개수) 중 하나가 변경될 때만 다시 실행을 시도하도록 합니다.

이제, 브라우저에서 할 일을 삭제하면, 목록 위의 머리글 주위에 점선 포커스 윤곽선이 표시되는 것을 볼 수 있습니다.

## 완성

처음부터 React 애플리케이션 구축을 완료하였습니다! 축하합니다! 여기에서 배운 기술은 React를 계속 사용하면서 구축할 수 있는 훌륭한 기반이 될 것입니다.

대부분의 경우, 컴포넌트와 컴포넌트 상태 및 props에 대해 신중하게 생각하는 것만으로도 React 프로젝트에 효과적으로 기여할 수 있습니다. 항상 최고의 HTML을 작성해야 한다는 점을 기억하세요.

`useRef()` 및 `useEffect()`는 다소 고급 기능이며, 이러한 기능을 사용하는 것을 자랑스럽게 생각하세요! 더 많이 연습할 수 있는 기회를 찾으세요, 그렇게 하면 사용자를 위한 포괄적인 경험을 만들 수 있기 때문입니다. 기억하세요, 우리 애플리케이션은 키보드 없이는 키보드 사용자가 접근할 수 없었을 것입니다!

> **참고:** 우리 버전과 비교하여 코드를 확인해야 하는 경우, [todo-react repository](https://github.com/mdn/todo-react)에서 샘플 React 애플리케이션 코드의 완성된 버전을 찾을 수 있습니다. 실행 중인 라이브 버전은, <https://mdn.github.io/todo-react>을 참고하세요.

마지막 기사에서는 학습을 더 진행하는 데 사용할 수 있는 React 리소스 목록을 제공합니다.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
