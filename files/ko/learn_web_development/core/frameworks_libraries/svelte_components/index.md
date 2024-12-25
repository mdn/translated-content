---
title: Svelte 앱 컴포넌트화하기
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_components
original_slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components
l10n:
  sourceCommit: e9be22eaa7416206e3f263a058f0d509a7f81f88
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

지난 시간에 이어 할 일(to-do) 목록 앱을 개발합니다. 이번 시간의 핵심 목표는 앱을 관리 가능한 컴포넌트로 나누고 컴포넌트 간에 정보를 공유하는 방법을 배우는 것입니다. 우리는 앱을 구성한 다음 사용자가 기존 컴포넌트를 업데이트할 수 있도록 기능을 추가할 것입니다.

<table>
  <tbody>
    <tr>
      <th scope="row">전제 사항:</th>
      <td>
        <p>
          적어도
          <a href="/ko/docs/Learn/HTML">HTML</a>,
          <a href="/ko/docs/Learn/CSS">CSS</a>,
          <a href="/ko/docs/Learn/JavaScript">JavaScript</a>언어의 사용에 익숙하기를 권장합니다. 그리고
          <a
            href="/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >terminal/command line</a
          >의 사용법에 대해서도 지식이 있어야합니다.
        </p>
        <p>
        앱을 컴파일하고 구축하려면 node와 npm이 설치된 터미널이 필요합니다.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        앱을 컴포넌트로 나누고 컴포넌트 간에 정보를 공유하는 방법을 학습합니다.
      </td>
    </tr>
  </tbody>
</table>

## 함께 코드를 작성해봅시다

### Git

Git 레포지토리를 복제하세요(당신이 이미 복제를 한게 아니라면)

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

그런 다음 현재 앱의 위치로 이동하기 위해 다음을 실행하세요.

```bash
cd mdn-svelte-tutorial/04-componentizing-our-app
```

폴더의 내용을 직접 다운로드 할 수도 있습니다.

```bash
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```

`npm install && npm run dev` 명령어로 실행하여 개발 모드에서 앱을 실행해주세요.

### REPL

REPL을 사용하여 우리와 함께 코딩하려면
<https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2> 에서 시작하세요.

## 앱을 component로 나누기

Svelte에서 애플리케이션은 하나 이상의 컴포넌트로 구성됩니다. 컴포넌트는 HTML, CSS, 그리고 JavaScript를 포함하는 재사용 가능하고 독립적인 코드 블록으로, 확장자는 .svelte 입니다. 컴포넌트는 크기가 크거나 작을 수 있지만, 보통 명확하게 정의됩니다. 가장 모범적인 컴포넌트는 단일 기능을 가지고 있고 명확한 목적을 제공하는 것입니다.

컴포넌트를 정의하는 것의 이점은 코드를 관리 가능한 부분으로 구성하는 더 일반적인 모범 사례와 비슷합니다. 이러한 구성은 코드 각 부분의 관계를 이해하는 데 도움을 주며, 재사용을 촉진하고 코드를 보다 쉽게 이해하고 유지 관리하며 확장할 수 있게 합니다.

하지만 어떤 것을 컴포넌트로 분리해야 할까요?

규칙은 없습니다. 어떤 사람들은 직관적인 접근 방식을 선호하여 마크업을 살펴보고 각각의 독립적인 로직을 가진 것처럼 보이는 모든 컴포넌트와 하위 컴포넌트 주변에 박스를 그립니다.

다른 사람들은 새로운 함수나 객체를 생성해야 하는지 결정할 때 사용하는 것과 같은 방법을 적용합니다. 예를 들어, 단일 책임 원칙에 따르면 컴포넌트는 이상적으로 하나의 일만 해야 합니다. 컴포넌트가 너무 복잡해지면 더 작은 하위 컴포넌트로 분할되어야 합니다.

이 두 가지 접근 방식은 서로 보완해야 하며, 컴포넌트를 더 잘 구성하는 데 도움이 되어야 합니다.

결국, 우리는 앱을 다음 컴포넌트로 분할할 것입니다.

- `Alert.svelte`: 발생한 작업을 알리기 위한 일반 알림 상자입니다.
- `NewTodo.svelte`: 새로운 할 일(to-do) 항목을 입력할 수 있는 텍스트 입력란과 버튼입니다.
- `FilterButton.svelte`: 표시된 할 일(to-do) 항목에 필터를 적용할 수 있는 All, Active, Completed 버튼입니다.
- `TodosStatus.svelte`: "x개 중 y개의 항목 완료"라는 제목입니다.
- `Todo.svelte`: 개별 할 일(to-do) 항목입니다. 보이는 각각의 할 일(to-do) 항목은 이 컴포넌트의 별도 복사본에서 표시됩니다.
- `MoreActions.svelte`: 사용자 인터페이스 하단에 위치한 Check All 및 Remove Completed 버튼으로, 작업 항목에 대한 대량 작업을 수행할 수 있습니다.

![앱의 컴포넌트의 리스트를 시각적으로 표현](01-todo-components.png)

이번 시간에는 `FilterButton` 와 `Todo` 컴포넌트를 만들겠습니다; 다른 구성 요소는 다음 시간에 다루도록 하겠습니다.

시작합시다.

> [!NOTE]
> 처음 몇 개의 컴포넌트를 만드는 과정에서, 컴포넌트 간의 통신 방법과 각각의 장단점에 대해 배우게 될 것입니다.

## 필터 컴포넌트 추출하기

`FilterButton.svelte`를 생성하겠습니다.

1. 우선, `components/FilterButton.svelte`파일을 생성해주세요.
2. 이 파일 내에 `filter` prop을 선언한 다음, `Todos.svelte`에서 관련 마크업을 이 파일로 복사해 넣습니다. 그리고 파일에 다음 내용을 추가하세요.

   ```svelte
   <script>
     export let filter = 'all'
   </script>

   <div class="filters btn-group stack-exception">
     <button class="btn toggle-btn" class:btn__primary={filter === 'all'} aria-pressed={filter === 'all'} on:click={() => filter = 'all'} >
       <span class="visually-hidden">Show</span>
       <span>All</span>
       <span class="visually-hidden">tasks</span>
     </button>
     <button class="btn toggle-btn" class:btn__primary={filter === 'active'} aria-pressed={filter === 'active'} on:click={() => filter = 'active'} >
       <span class="visually-hidden">Show</span>
       <span>Active</span>
       <span class="visually-hidden">tasks</span>
     </button>
     <button class="btn toggle-btn" class:btn__primary={filter === 'completed'} aria-pressed={filter === 'completed'} on:click={() => filter = 'completed'} >
       <span class="visually-hidden">Show</span>
       <span>Completed</span>
       <span class="visually-hidden">tasks</span>
     </button>
   </div>
   ```

3. `Todos.svelte` 컴포넌트에서 `FilterButton` 컴포넌트를 사용하고자 합니다. 먼저, 그것을 import해야 합니다. `Todos.svelte <script>` section 상단에 다음을 추가하세요.

   ```js
   import FilterButton from "./FilterButton.svelte";
   ```

4. 이제 `<div class="filters...` 요소에서 현재 filter를 prop으로 하는 `FilterButton`컴포넌트로 교체합니다, 다음을 추가하세요.

   ```svelte
   <FilterButton {filter} />
   ```

> [!NOTE]
> HTML 속성 이름과 변수가 일치할 때, `{variable}`로 대체될 수 있습니다. 그래서 `<FilterButton filter={filter} />` 를 `<FilterButton {filter} />`로 대체할 수 있었습니다.

잘하고 있네요! 이제 앱을 한번 실행해 보세요. 필터 버튼을 클릭하면 선택된 상태가 되고 스타일이 적절히 업데이트됩니다. 하지만 문제가 있습니다. 할 일(to-do)들이 필터링되지 않습니다. 그 이유는 `filter` 변수가 `Todos` 컴포넌트에서 `FilterButton` 컴포넌트로 prop을 통해 전달되지만, `FilterButton` 컴포넌트에서 발생하는 변경사항이 부모로 다시 전달되지 않기 때문입니다 - 데이터 바인딩은 기본적으로 단방향입니다.- 이 문제를 해결할 방법을 살펴봅시다.

## 컴포넌트 간 데이터 공유: 핸들러를 prop으로 전달하기

자식 컴포넌트가 부모에게 변경사항을 알릴 수 있도록 하는 한 가지 방법은 핸들러를 prop으로 전달하는 것입니다. 자식 컴포넌트는 필요한 정보를 매개변수로 전달하면서 핸들러를 실행하고, 핸들러는 부모의 상태를 수정합니다.

`FilterButton` 컴포넌트는 부모로부터 `onclick` 핸들러를 받을 것입니다. 사용자가 필터 버튼 중 하나를 클릭할 때마다, 자식은 선택된 필터를 매개변수로 부모에게 전달하면서 `onclick` 핸들러를 호출할 것입니다.

우리는 다음과 같이 오류를 방지하기 위해 더미 핸들러를 할당하면서 `onclick` prop을 선언할 것입니다.

```js
export let onclick = (clicked) => {};
```

그리고 `$: onclick(filter)`라는 반응형 선언을 사용하여 `filter` 변수가 업데이트될 때마다 `onclick` 핸들러를 호출하도록 하겠습니다.

1. FilterButton 컴포넌트의 `<script>` 섹션은 다음과 같이 보일 것입니다. 다음을 추가하세요.

   ```js
   export let filter = "all";
   export let onclick = (clicked) => {};
   $: onclick(filter);
   ```

2. 이제 `Todos.svelte` 내에서 `FilterButton`을 호출할 때, 핸들러를 지정해야 합니다. 다음과 같이 업데이트하세요.

   ```svelte
   <FilterButton {filter} onclick={ (clicked) => filter = clicked }/>
   ```

어떤 필터 버튼이 클릭되면, 새로운 필터로 필터 변수를 갱신하기만 하면 됩니다. 이제 `FilterButton` 컴포넌트가 다시 작동할 것입니다.

## 더 쉬운 양방향 데이터 바인딩을 위한 bind 지시문 사용

이전 단계에서 우리는 `FilterButton` 컴포넌트가 작동하지 않았던 것을 알게 되었는데, 그 이유는 애플리케이션 상태가 부모로부터 자식에게 `filter` prop을 통해 전달되었지만, 반대 방향으로는 전달되지 않았기 때문입니다. 그래서 자식 컴포넌트가 새로운 `filter` 값을 부모에게 전달할 수 있도록 `onclick` prop을 추가했습니다.

이 방법도 괜찮지만, Svelte는 양방향 데이터 바인딩을 달성하기 위한 더 쉽고 직관적인 방법을 제공합니다. 데이터는 일반적으로 부모로부터 자식에게 prop을 통해 전달됩니다. 만약 우리가 데이터가 반대 방향, 즉 자식에서 부모로도 흐르기를 원한다면, [the `bind:` directive](https://svelte.dev/docs/element-directives#bind-property) 를 사용할 수 있습니다.

`bind`를 사용함으로써, `FilterButton` 컴포넌트에서 `filter` prop에 대한 모든 변경사항이 부모 컴포넌트인 `Todos`로 다시 전달되어야 함을 Svelte에 알릴 것입니다. 즉, 부모의 `filter` 변수 값을 자식의 값과 바인딩할 것입니다.

1. `Todos.svelte`에서, `FilterButton` 컴포넌트 호출을 다음과 같이 업데이트하세요.

   ```svelte
   <FilterButton bind:filter={filter} />
   ```

   Svelte는 축약형을 제공합니다. `bind:value={value}` 는 `bind:value`와 같습니다. 따라서 위 예제에서는 그냥 `<FilterButton bind:filter />`라고 작성할 수 있습니다.

2. 이제 자식 컴포넌트는 부모의 필터 변수 값을 수정할 수 있으므로 `onclick` prop은 더 이상 필요하지 않습니다. `FilterButton` 의 `<script>` 요소를 다음과 같이 수정하세요.

   ```svelte
   <script>
     export let filter = "all";
   </script>
   ```

3. 앱을 다시 실행해 보면 필터가 아까처럼 제대로 작동하는 것을 볼 수 있습니다.

## Todo 컴포넌트 생성하기

이제 각각의 할 일(to-do)을 캡슐화하는 `Todo` 컴포넌트를 생성할 것입니다. 이 컴포넌트는 체크박스와 일부 편집 로직을 포함하여 기존 to-do를 변경할 수 있습니다.

`Todo` 컴포넌트는 하나의 `todo` 객체를 prop으로 받게 됩니다. `todo` prop을 선언하고 `Todos` 컴포넌트에서 코드를 이동시킵시다. 일단 지금은 `removeTodo` 호출을 알림으로 대체하고 나중에 기능을 다시 추가하겠습니다.

1. 새 컴포넌트 파일 `components/Todo.svelte`를 생성합니다.
2. 이 파일 안에 다음 내용을 넣습니다.

   ```svelte
   <script>
     export let todo
   </script>

   <div class="stack-small">
     <div class="c-cb">
       <input type="checkbox" id="todo-{todo.id}"
         on:click={() => todo.completed = !todo.completed}
         checked={todo.completed}
       />
       <label for="todo-{todo.id}" class="todo-label">{todo.name}</label>
     </div>
     <div class="btn-group">
       <button type="button" class="btn">
         Edit <span class="visually-hidden">{todo.name}</span>
       </button>
       <button type="button" class="btn btn__danger" on:click={() => alert('not implemented')}>
         Delete <span class="visually-hidden">{todo.name}</span>
       </button>
     </div>
   </div>
   ```

3. 이제 `Todo` 컴포넌트를 `Todos.svelte`로 가져와야 합니다. 이 파일로 이동하여 이전의 `import` 문 아래에 다음 `import` 문을 추가하세요.

   ```js
   import Todo from "./Todo.svelte";
   ```

4. 다음으로, `Todo.svelte` 로 옮겨진 코드 대신 각 to-do마다 `<Todo>` 컴포넌트를 포함하도록 `{#each}` 블록을 업데이트 해야 합니다. 또한 현재 `todo` 객체를 prop으로 컴포넌트에 전달하고 있습니다.

`Todos.svelte` 내의 `{#each}` 블록을 다음과 같이 업데이트 하세요.

```svelte
<ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
  {#each filterTodos(filter, todos) as todo (todo.id)}
  <li class="todo">
    <Todo {todo} />
  </li>
  {:else}
  <li>Nothing to do here!</li>
  {/each}
</ul>
```

앱을 실행해보면, 페이지에 할 일(to-do) 목록이 표시되며 체크박스는 작동해야 합니다(몇 개를 체크하거나 체크 해제한 후 필터가 여전히 예상대로 작동하는지 시도해 보세요). 하지만 "x개 중 y개의 항목 완료" 상태 표시는 더 이상 업데이트되지 않습니다. 이는 Todo 컴포넌트가 할 일(to-do)을 prop을 통해 받고 있지만, 부모에게 어떠한 정보도 보내지 않기 때문입니다. 나중에 이 문제를 해결하겠습니다.

## 컴포넌트 간 데이터 공유: "props-down, events-up" 패턴

`bind` 지시문은 간단하게 구현할 수 있으며 부모와 자식 컴포넌트 간의 데이터 공유를 최소한의 노력으로 가능하게 합니다. 그러나 애플리케이션이 커지고 복잡해질수록 모든 바인딩된 값을 추적하는 것이 어려워질 수 있습니다. 다른 접근 방법으로는 "props-down, events-up" 통신 패턴이 있습니다.

기본적으로 이 패턴은 자식 컴포넌트가 부모로부터 props를 통해 데이터를 받고, 부모 컴포넌트가 자식 컴포넌트에서 발생한 이벤트를 처리하여 상태를 업데이트하는 것에 의존합니다. 따라서 props는 부모에서 자식으로 흘러 내려가고 이벤트는 자식에서 부모로 bubble up(부모에게 올라가며 같은 이벤트를 실행하는 것) 합니다. 이 패턴은 정보의 양방향 흐름을 설정하며, 예측 가능하고 이해하기 쉽습니다.

누락된 삭제 버튼 기능을 다시 구현하기 위해 우리만의 이벤트를 발생시키는 방법을 살펴보겠습니다.

사용자 정의 이벤트를 생성하기 위해 `createEventDispatcher` 유틸리티를 사용할 것입니다. 이 유틸리티는 사용자 정의 이벤트를 발생시킬 수 있는 `dispatch()` 함수를 반환합니다. 이벤트를 발행할 때는 이벤트의 이름과 선택적으로 리스너에게 전달하고 싶은 추가 정보가 담긴 객체를 전달해야 합니다. 이 추가 정보 데이터는 이벤트 객체의 `detail` 속성에서 사용할 수 있습니다.

> [!NOTE]
> Svelte의 사용자 정의 이벤트는 일반 DOM 이벤트와 동일한 API를 공유합니다. 또한, 핸들러 없이 `on:event`를 지정함으로써 이벤트를 부모 컴포넌트로 버블링시킬 수 있습니다.

우리는 `Todo` 컴포넌트를 수정하여 삭제되는 할 일(to-do)에 대한 추가 정보와 함께 `remove` 이벤트를 발생시킬 것입니다.

1. 먼저, `Todo` 컴포넌트의 `<script>` 섹션 상단에 다음을 추가하세요.

   ```js
   import { createEventDispatcher } from "svelte";
   const dispatch = createEventDispatcher();
   ```

2. Delete 버튼을 같은 파일의 마크다운 섹션에 다음과 같이 추가합니다.

   ```svelte
   <button type="button" class="btn btn__danger" on:click={() => dispatch('remove', todo)}>
   Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   `dispatch('remove', todo)`를 사용하여 `remove` 이벤트를 발생시키고, 삭제되는 `todo`를 추가 데이터로 전달하고 있습니다. 핸들러는 이벤트 객체를 사용할 수 있게 호출되며, 추가 데이터는 `event.detail` 속성에서 사용할 수 있습니다.

3. 이제 `Todos.svelte` 내부에서 이 이벤트를 수신하고 그에 따라 행동해야 합니다. 이 파일로 돌아가서 `<Todo>` 컴포넌트 호출을 다음과 같이 업데이트하세요.

   ```svelte
   <Todo {todo} on:remove={(e) => removeTodo(e.detail)} />
   ```

   핸들러는 `e` 매개변수(이벤트 객체)를 받으며, 이전에 설명한 바와 같이 삭제되는 할 일(to-do)이 `detail` 속성에 있습니다.

4. 앱을 다시 실행해 보면, 삭제 기능이 다시 작동하는 것을 볼 수 있습니다. 이처럼 우리의 사용자 정의 이벤트가 계획대로 작동했습니다. 또한, `remove` 이벤트 리스너가 데이터 변경을 부모에게 다시 전달하므로, 이제 할 일(to-do)이 삭제될 때 "x개 중 y개의 항목 완료" 상태 표시가 업데이트됩니다.

이제 부모 컴포넌트가 수정된 할 일(to-do)을 알 수 있도록 `update` 이벤트를 처리할 것입니다.

## to-do 업데이트

기존 할 일(to-do)을 편집할 수 있는 기능을 구현해야 합니다. Todo 컴포넌트에 편집 모드를 포함해야 합니다. 편집 모드로 진입할 때, 현재 할 일(to-do) 이름을 편집할 수 있도록 `<input>` 필드를 표시하고, 변경 사항을 확인하거나 취소할 수 있는 두 버튼을 만들어야 합니다.

### 이벤트 핸들링

1. 편집 모드 여부를 추적할 변수와 업데이트되는 작업 이름을 저장할 또 다른 변수가 필요합니다. `Todo` 컴포넌트의 `<script>` 섹션 하단에 다음 변수 정의를 추가하세요.

   ```js
   let editing = false; // 편집 모드 추적
   let name = todo.name; // 편집중인 할 일(to-do)의 이름을 유지합니다
   ```

2. `Todo` 컴포넌트가 발생시킬 이벤트를 결정해야 합니다.

   - 상태 토글과 이름 편집에 대해 서로 다른 이벤트를 발생시킬 수 있습니다(예를 들면, `updateTodoStatus`와 `updateTodoName`).
   - 또는 더 일반적인 접근 방식을 취하여 두 작업 모두에 대해 단일 `update` 이벤트를 발생시킬 수 있습니다.

   우리는 다른 기법을 사용해보기 위해 두 번째 접근 방식을 사용할 것입니다. 이 방식의 장점은 나중에 할 일(to-do)에 더 많은 필드를 추가하더라도 동일한 이벤트로 모든 업데이트를 처리할 수 있다는 것입니다.

   변경 사항을 받아 수정된 할 일(to-do)과 함께 업데이트 이벤트를 발생시킬 `update()` 함수를 만듭시다. 다시 `<script>` 섹션 하단에 다음을 추가하세요.

   ```js
   function update(updatedTodo) {
     todo = { ...todo, ...updatedTodo }; // 수정사항을 할 일(to-do)에 적용합니다
     dispatch("update", todo); // update 이벤트 방출(하위 컴포넌트에서 상위컴포넌트로 이벤트 전달)
   }
   ```

   여기에서는 [spread syntax](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax) 을 사용하여 원본 할 일(to-do)에 수정사항을 적용한 결과를 반환하고 있습니다.

3. 다음으로, 각 사용자 동작을 처리할 다른 함수들을 만들겠습니다. 할 일(to-do)이 편집 모드에 있을 때 사용자는 변경 사항을 저장하거나 취소할 수 있습니다. 편집 모드가 아닐 때 사용자는 할 일(to-do)을 삭제하거나 편집하거나, 완료된 상태와 활성 상태 사이에서 상태를 토글(선택)할 수 있습니다.

이전 함수 아래에 이러한 동작을 처리할 다음 함수 코드를 추가하세요.

```js
function onCancel() {
  name = todo.name; // 이름을 초기값으로 복원하고
  editing = false; // 편집 모드 종료
}

function onSave() {
  update({ name }); // 할 일(todo)이름 업데이트
  editing = false; // 편집 모드 종료
}

function onRemove() {
  dispatch("remove", todo); // remove 이벤트 방출
}

function onEdit() {
  editing = true; // 편집 모드로 들어갑니다
}

function onToggle() {
  update({ completed: !todo.completed }); // 할 일(todo) 상태에 대한 업데이트
}
```

### 마크업 업데이트

이제 적절한 조치가 취해졌을 때 위의 함수들을 호출하도록 `Todo` 컴포넌트의 마크업을 업데이트해야 합니다.

편집 모드를 처리하기 위해, 우리는 `editing`이라는 불린 변수를 사용하고 있습니다. `editing`이 `true`일 때는 할 일(to-do) 이름을 편집할 수 있는 `<input>` 필드와 취소 및 저장 버튼을 표시해야 합니다. 편집 모드가 아닐 때는 체크박스, 할 일(to-do) 이름, 할 일(to-do)을 편집하고 삭제할 수 있는 버튼을 표시합니다.

이를 위해 `if` 블록을 사용할 것입니다. `if` 블록은 조건에 따라 일부 마크업을 조건부로 렌더링합니다. 이 블록은 조건에 따라 마크업을 단순히 표시하거나 숨기는 것이 아니라, 조건에 따라 동적으로 DOM에서 요소를 추가하고 제거합니다.

예를 들어, `editing`이 `true`일 경우, Svelte는 업데이트 양식을 표시하고, `false`일 경우, 체크박스를 DOM에 추가하고 양식을 제거합니다. Svelte의 반응성 덕분에 편집 변수의 값을 할당하는 것만으로도 올바른 HTML 요소를 표시할 수 있습니다.

다음은 기본적인 `if` 블록 구조를 보여주는 예시입니다.

```svelte
<div class="stack-small">
  {#if editing}
  <!-- 작업관리 편집을 위한 마크업: 레이블, 입력 텍스트, 취소 및 저장 버튼 -->
  {:else}
  <!-- 작업관리를 표시하기 위한 마크업: 확인란, 레이블, 편집 및 삭제 버튼 -->
  {/if}
</div>
```

편집하지 않는 섹션 — `if` 블록의 `{:else}` 부분(하단) — 은 우리가 `Todos` 컴포넌트에서 사용했던 것과 매우 유사할 것입니다. 유일한 차이점은 사용자의 동작에 따라 `onToggle()`, `onEdit()`, `onRemove()`를 호출한다는 것입니다.

```svelte
{:else}
  <div class="c-cb">
    <input type="checkbox" id="todo-{todo.id}"
      on:click={onToggle} checked={todo.completed}
    >
    <label for="todo-{todo.id}" class="todo-label">{todo.name}</label>
  </div>
  <div class="btn-group">
    <button type="button" class="btn" on:click={onEdit}>
      Edit<span class="visually-hidden"> {todo.name}</span>
    </button>
    <button type="button" class="btn btn__danger" on:click={onRemove}>
      Delete<span class="visually-hidden"> {todo.name}</span>
    </button>
  </div>
{/if}
</div>
```

주목할 만한 사항은 다음과 같습니다.

- 사용자가 Edit 버튼을 누르면, `onEdit()`을 실행하여 `editing` 변수를 `true`로 설정합니다.
- 사용자가 체크박스를 클릭하면,`onToggle()` 함수를 호출하는데, 이 함수는 새로운 `completed` 값을 매개변수로 전달하여 `update()`를 실행합니다.
- `update()` 함수는 수정된 할 일(to-do)의 사본을 추가 정보로 전달하면서 `update` 이벤트를 발생시킵니다.
- 마지막으로, `onRemove()` 함수는 삭제될 `todo`를 추가 데이터로 전달하면서 `remove` 이벤트를 발생시킵니다.

편집 UI(상단)는 변경 사항을 취소하거나 저장하기 위한 `<input>` 필드와 두 버튼을 포함할 것입니다.

```svelte
<div class="stack-small">
{#if editing}
  <form on:submit|preventDefault={onSave} class="stack-small" on:keydown={(e) => e.key === 'Escape' && onCancel()}>
    <div class="form-group">
      <label for="todo-{todo.id}" class="todo-label">New name for '{todo.name}'</label>
      <input bind:value={name} type="text" id="todo-{todo.id}" autoComplete="off" class="todo-text" />
    </div>
    <div class="btn-group">
      <button class="btn todo-cancel" on:click={onCancel} type="button">
        Cancel<span class="visually-hidden">renaming {todo.name}</span>
        </button>
      <button class="btn btn__primary todo-edit" type="submit" disabled={!name}>
        Save<span class="visually-hidden">new name for {todo.name}</span>
      </button>
    </div>
  </form>
{:else}
[...]
```

사용자가 편집 버튼을 누르면 `editing` 변수가 `true`로 설정되고, Svelte는 DOM의 `{:else}` 부분에 있는 마크업을 제거하고 `{#if}` 섹션의 마크업으로 대체합니다.

`<input>`의 `value` 속성은 `name` 변수와 바인딩되며, 변경 사항을 취소하고 저장하는 버튼은 각각 `onCancel()`과 `onSave()`를 호출합니다(이전에 이 함수들을 추가했습니다):

- `onCancel()`이 호출될 때, `name`은 원래 값(prop으로 전달된 값)으로 복원되고 편집 모드를 종료합니다(`editing`을 `false`로 설정).
- `onSave()`가 호출되면, 수정된 `name`을 전달하여 `update()` 함수를 실행하고 편집 모드를 종료합니다.

또한 `<input>`이 비어 있을 때 저장 버튼을 비활성화하기 위해 `disabled={!name}` 속성을 사용하고, 사용자가 <kbd>Escape</kbd> 키를 사용하여 편집을 취소할 수 있도록 다음과 같이 설정합니다.

```plain
on:keydown={(e) => e.key === 'Escape' && onCancel()}
```

또한 `todo.id`를 사용하여 새 입력 컨트롤과 레이블에 대한 고유 ID를 생성합니다.

1. 우리의 `Todo` 컴포넌트의 업데이트된 마크업은 다음과 같습니다. 다음과 같이 업데이트하세요.

   ```svelte
   <div class="stack-small">
   {#if editing}
     <!-- 작업관리를 편집하기 위한 마크업: 레이블, 입력 텍스트, 취소 및 저장 버튼 -->
     <form on:submit|preventDefault={onSave} class="stack-small" on:keydown={(e) => e.key === 'Escape' && onCancel()}>
       <div class="form-group">
         <label for="todo-{todo.id}" class="todo-label">New name for '{todo.name}'</label>
         <input bind:value={name} type="text" id="todo-{todo.id}" autoComplete="off" class="todo-text" />
       </div>
       <div class="btn-group">
         <button class="btn todo-cancel" on:click={onCancel} type="button">
           Cancel<span class="visually-hidden">renaming {todo.name}</span>
           </button>
         <button class="btn btn__primary todo-edit" type="submit" disabled={!name}>
           Save<span class="visually-hidden">new name for {todo.name}</span>
         </button>
       </div>
     </form>
   {:else}
     <!-- 작업관리를 표시하기 위한 마크업: 확인란, 레이블, 편집 및 삭제 버튼 -->
     <div class="c-cb">
       <input type="checkbox" id="todo-{todo.id}"
         on:click={onToggle} checked={todo.completed}
       >
       <label for="todo-{todo.id}" class="todo-label">{todo.name}</label>
     </div>
     <div class="btn-group">
       <button type="button" class="btn" on:click={onEdit}>
         Edit<span class="visually-hidden"> {todo.name}</span>
       </button>
       <button type="button" class="btn btn__danger" on:click={onRemove}>
         Delete<span class="visually-hidden"> {todo.name}</span>
       </button>
     </div>
   {/if}
   </div>
   ```

   > [!NOTE]
   > 이를 두 개의 다른 컴포넌트로 더 나눌 수도 있습니다. 하나는 할 일(to-do)을 편집하기 위한 것이고 다른 하나는 그것을 표시하기 위한 것입니다. 이것은 단일 컴포넌트에서 이 수준의 복잡성을 다루는 것에 대해 얼마나 숙련되어 있는지에 따라 다릅니다. 또한 이를 더 분리하면 다른 컨텍스트에서 이 컴포넌트를 재사용할 수 있게 될지도 고려해야 합니다.

2. 업데이트 기능을 작동시키기 위해, `Todos` 컴포넌트에서 `update` 이벤트를 처리해야 합니다. 그 `<script>` 섹션에 이 핸들러를 추가하세요.

   ```js
   function updateTodo(todo) {
     const i = todos.findIndex((t) => t.id === todo.id);
     todos[i] = { ...todos[i], ...todo };
   }
   ```

   우리는 `todos` 배열에서 `id`로 `todo`를 찾아 스프레드 구문을 사용하여 내용을 업데이트합니다. 이 경우 `todos[i] = todo`를 사용할 수도 있었지만, 이 구현이 더 안정적이며 `Todo` 컴포넌트가 할 일(to-do)의 업데이트된 부분만 반환하도록 허용할 수 있습니다.

3. 다음으로, `<Todo>` 컴포넌트 호출에서 `update` 이벤트를 수신하고, 이벤트가 발생할 때 `updateTodo()` 함수를 실행하여 `name`과 `completed` 상태를 변경해야 합니다. `<Todo>` 호출을 다음과 같이 업데이트하세요.

   ```svelte
   {#each filterTodos(filter, todos) as todo (todo.id)}
   <li class="todo">
     <Todo {todo} on:update={(e) => updateTodo(e.detail)} on:remove={(e) =>
     removeTodo(e.detail)} />
   </li>
   ```

4. 앱을 다시 실행해 보면, 할 일(to-do)을 삭제, 추가, 편집, 편집 취소 및 완료 상태 토글을 할 수 있습니다. 또한 "x개 중 y개의 항목 완료" 상태 표시는 할 일(to-do)이 완료될 때 적절히 업데이트됩니다.

보시다시피, Svelte에서 "props-down, events-up" 패턴을 구현하는 것은 쉽습니다. 하지만, 간단한 컴포넌트의 경우 `bind`가 좋은 선택이 될 수 있습니다.

> [!NOTE]
> Svelte는 컴포넌트 간 정보를 공유하기 위한 더 고급 메커니즘을 제공합니다. [Context API](https://svelte.dev/docs/svelte#setcontext) and [Stores](https://svelte.dev/docs/svelte-store). Context API는 컴포넌트와 그 자식들이 데이터와 함수를 prop으로 전달하거나 많은 이벤트를 발생시키지 않고 서로 "소통"할 수 있는 메커니즘을 제공합니다. Stores는 계층적으로 관련되지 않은 컴포넌트 간에 반응성 데이터를 공유할 수 있도록 합니다. 이 시리즈에서 나중에 Stores에 대해 더 살펴볼 것입니다.

## 지금까지의 코드

### Git

이 문서의 끝에서 코드의 상태를 확인하려면 다음과 같이 저장소 사본에 접근하세요.

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

또는 폴더의 콘텐츠를 직접 다운로드합니다.

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

`npm install && npm run dev` 명령어로 실행하여 개발 모드에서 앱을 실행해주세요.

### REPL

REPL에서 코드의 현재 상태를 보려면 다음에 방문하십시오.

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## 요약

이제 우리 앱에 필요한 모든 기능이 준비되었습니다. 할 일(to-do)을 표시, 추가, 편집, 삭제할 수 있으며, 완료로 표시하고 상태별로 필터링할 수 있습니다.

요약하자면 다음 주제를 다뤘습니다.

- 새 컴포넌트로 기능 추출하기
- 핸들러를 prop으로 받아 자식으로부터 부모에게 정보 전달하기
- `bind` 지시문을 사용하여 자식으로부터 부모에게 정보 전달하기
- `if` 블록을 사용하여 조건부로 마크업 블록 렌더링하기
- "props-down, events-up" 통신 패턴 구현하기
- 사용자 정의 이벤트 생성 및 수신하기

다음 시간에는 앱의 컴포넌트화를 계속 진행하고 DOM과 작업할 때 사용하는 몇 가지 고급 기술을 살펴보겠습니다.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
