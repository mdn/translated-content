---
title: "Svelte의 동적인 동작: 변수와 props 작용"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props
l10n:
  sourceCommit: 4def230f85756724b59660e3cd9de363db724ef8
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

이제 마크업과 스타일이 준비되었으므로 Svelte 할 일 목록 앱에 필요한 기능 개발을 시작할 수 있습니다. 이 문서에서는 변수와 props를 사용한 동적인 앱을 만들어 할 일을 추가 및 삭제하고, 완료로 표시하거나 상태별로 필터링할 수 있습니다.

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
        컴포넌트 생성, props를 활용한 데이터 전달, 마크업에 JavaScript 표현식 렌더링, 컴포넌트 상태 수정 및 전체 목록 순회 같은 몇 가지 기본 Svelte 개념을 배우고 실습합니다.
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

그런 다음 현재 앱의 위치로 이동하기 위해 다음을 실행하세요.

```bash
cd mdn-svelte-tutorial/03-adding-dynamic-behavior
```

폴더의 내용을 직접 다운로드 할 수도 있습니다.

```bash
npx degit opensas/mdn-svelte-tutorial/03-adding-dynamic-behavior
```

`npm install && npm run dev` 명령어로 실행하여 개발 모드에서 앱을 실행해주세요.

### REPL

REPL을 사용하여 우리와 함께 코딩하려면 <https://svelte.dev/repl/c862d964d48d473ca63ab91709a0a5a0?version=3.23.2>에서 시작하세요.

## 할 일 작업

우리의 `Todos.svelte` 컴포넌트는 현재 정적 마크업만 표시하고 있습니다. 좀 더 역동적으로 만들어 봅시다. 마크업에서 작업 정보를 가져와 `todos` 배열에 저장할 것입니다. 또한 총 작업 수와 완료된 작업을 추적하기 위해 두 개의 변수를 생성합니다.

컴포넌트의 상태는 이 세 가지 최상위 변수로 표시됩니다.

1. `src/components/Todos.svelte` 상단에 `<script>` 섹션을 생성하고 다음과 같이 콘텐츠 일부를 제공합니다.

   ```html
   <script>
     let todos = [
       { id: 1, name: "Create a Svelte starter app", completed: true },
       { id: 2, name: "Create your first component", completed: true },
       { id: 3, name: "Complete the rest of the tutorial", completed: false },
     ];
     let totalTodos = todos.length;
     let completedTodos = todos.filter((todo) => todo.completed).length;
   </script>
   ```

   이제 정보를 활용해 무언가를 해봅시다.

2. 상태 메시지를 표시하는 것으로 시작하겠습니다. `id`가 `list-heading`인 `<h2>` 제목을 찾아 하드코딩된 활성 및 완료된 작업 수를 동적 표현식으로 바꿉니다.

   ```html
   <h2 id="list-heading">
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

3. 앱으로 이동하면 이전과 같이 "3개 항목 중 2개 완료됨" 메시지를 볼 수 있지만, 이번에는 `todos` 배열에서 정보가 제공된 것입니다.
4. 이를 증명하기 위해 해당 배열로 이동하여 to-do 개체의 완료된 속성 값 중 일부를 변경하고 새로운 to-do 개체를 추가합니다. 메시지의 숫자가 어떻게 적절하게 업데이트되는지 확인하세요.

## 데이터에서 할 일을 동적으로 생성

현재 표시되는 할 일 항목은 모두 정적입니다. 우리는 `todos` 배열의 각 항목을 순회하고 각 작업에 대한 마크업을 렌더링하려고 하므로 지금 실행해 보겠습니다.

HTML에는 조건문 및 루프와 같은 논리를 표현하는 방법이 없습니다. 하지만 Svelte에서는 가능합니다. 이 경우에는 [`{#each}`](https://svelte.dev/docs#each) 지시문을 사용하여 `todos` 배열을 순회합니다. 두 번째 매개변수가 제공되면 현재 항목의 index가 포함됩니다. 또한 각 항목을 고유하게 식별하는 키 표현식을 제공할 수 있습니다. Svelte는 마지막에 항목을 추가하거나 제거하는 대신 데이터가 변경될 때 목록을 비교하는 데 표현식을 사용하며, 항상 키 표현식을 기입하는 것이 좋습니다. 마지막으로 `:else` 블록을 제공할 수 있으며 목록이 비어 있을 때 렌더링됩니다.

한 번 해봅시다.

1. 기존 `<ul>` 요소를 다음과 같은 단순화된 버전으로 대체하여 작동 방식을 파악합니다.

   ```html
   <ul>
     {#each todos as todo, index (todo.id)}
     <li>
       <input type="checkbox" checked="{todo.completed}" /> {index}. {todo.name}
       (id: {todo.id})
     </li>
     {:else} Nothing to do here! {/each}
   </ul>
   ```

2. 앱으로 돌아갑니다. 다음과 같은 내용이 표시됩니다.

   ![very simple to-do list output created using an each block](01-each-block.png)

3. 이제 이것이 작동하는 것을 확인했으므로 `{#each}` 지시문의 각 루프로 완전한 할 일 항목을 생성하고 내부에 `todos` 배열의 정보를 임베드합니다: `id`, `name` 및 `completed`. 기존 `<ul>` 블록을 다음으로 바꿉니다.

   ```html
   <!-- To-dos -->
   <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
     {#each todos as todo (todo.id)}
     <li class="todo">
       <div class="stack-small">
         <div class="c-cb">
           <input
             type="checkbox"
             id="todo-{todo.id}"
             checked="{todo.completed}" />
           <label for="todo-{todo.id}" class="todo-label"> {todo.name} </label>
         </div>
         <div class="btn-group">
           <button type="button" class="btn">
             Edit <span class="visually-hidden">{todo.name}</span>
           </button>
           <button type="button" class="btn btn__danger">
             Delete <span class="visually-hidden">{todo.name}</span>
           </button>
         </div>
       </div>
     </li>
     {:else}
     <li>Nothing to do here!</li>
     {/each}
   </ul>
   ```

   체크박스의 `checked` 및 `id` 속성과 마찬가지로 중괄호를 사용하여 HTML 속성에 JavaScript 표현식을 삽입하는 방법에 주목하세요.

정적 마크업을 컴포넌트의 상태에서 작업을 표시할 준비가 된 동적 템플릿으로 전환했습니다. 멋집니다! 우리는 거의 다 왔습니다.

## props 작업

할 일 목록이 하드코딩되어 있는 `Todos` 컴포넌트는 그다지 유용하지 않습니다. 컴포넌트를 범용 할 일 편집기로 바꾸려면 이 컴포넌트의 부모가 편집할 할 일 목록을 전달하도록 허용해야 합니다. 이렇게 하면 웹 서비스나 로컬 저장소에 저장하고 나중에 업데이트를 위해 검색할 수 있습니다. 배열을 `prop`로 바꾸겠습니다.

1. `Todos.svelte`에서 기존 `let todos = …` 블록을 `export let todos = []`로 대체합니다.

   ```js
   export let todos = [];
   ```

   처음에는 조금 이상하게 느껴질 수 있습니다. 그것은 JavaScript 모듈에서 `export`가 일반적으로 작동하는 방식이 아닙니다! 이것은 Svelte가 유효한 구문을 사용하고 새로운 목적을 부여하여 JavaScript를 '확장'하는 방법입니다. 이 경우 Svelte는 'export' 키워드를 사용하여 변수 선언을 속성 또는 prop으로 표시합니다. 이는 컴포넌트 사용자가 접근 할 수 있음을 의미합니다.

   prop에 대한 기본 초기 값을 지정할 수도 있습니다. 이것은 컴포넌트를 인스턴스화할 때 컴포넌트의 사용자가 컴포넌트에 prop을 지정하지 않거나 초기 값이 정의되지 않은 경우에 사용됩니다.

   따라서 `export let todos = []`를 사용하여 `Todos.svelte` 컴포넌트가 `todos` 속성을 받고, 생략한다면 빈 배열로 초기화된다는 것을 Svelte에 알립니다.

2. 앱을 보면 "여기서 할 일이 없습니다!"라는 메시지가 표시됩니다. 메시지. 이는 현재 `App.svelte`에서 어떤 값도 전달하지 않아 기본값을 사용하고 있기 때문입니다.
3. 이제 해야 할 일을 `App.svelte`로 이동하고 `Todos.svelte` 컴포넌트에 prop으로 전달합니다. 다음과 같이 `src/App.svelte`를 업데이트합니다.

   ```svelte
   <script>
     import Todos from "./components/Todos.svelte";

     let todos = [
       { id: 1, name: "Create a Svelte starter app", completed: true },
       { id: 2, name: "Create your first component", completed: true },
       { id: 3, name: "Complete the rest of the tutorial", completed: false },
     ];
   </script>

   <Todos todos={todos} />
   ```

4. 속성과 변수의 이름이 같은 경우, Svelte를 사용하면 변수를 편리한 바로 가기로 지정할 수 있으므로 마지막 줄을 이와 같이 다시 작성할 수 있습니다. 바로 시도해 보세요.

   ```svelte
   <Todos {todos} />
   ```

이 시점에서 해야 할 일은 `App.svelte` 컴포넌트에서 전달한다는 점을 제외하면 이전과 동일하게 렌더링되어야 합니다.

## 할 일 토글링과 제거

작업 상태를 전환하는 몇 가지 기능을 추가해 보겠습니다. Svelte에는 DOM 이벤트를 수신하기 위한 `on:eventname` 지시어가 있습니다. 체크박스 입력의 `on:click` 이벤트에 핸들러를 추가하여 완성된 값을 토글하도록 합시다.

1. 다음과 같이 `src/components/Todos.svelte` 내부의 `<input type="checkbox">` 요소를 업데이트합니다.

   ```svelte
   <input type="checkbox" id="todo-{todo.id}"
     on:click={() => todo.completed = !todo.completed}
     checked={todo.completed}
   />
   ```

2. 다음으로 `todos` 배열에서 할 일을 제거하는 함수를 추가합니다. `Todos.svelte`의 `<script>` 섹션 하단에 다음과 같이 `removeTodo()` 함수를 추가합니다.

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
   }
   ```

3. _Delete_ 버튼을 통해 호출하겠습니다. 다음과 같이 `click` 이벤트로 업데이트하세요.

   ```svelte
   <button type="button" class="btn btn__danger"
     on:click={() => removeTodo(todo)}
   >
     Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   Svelte의 핸들러에서 매우 흔한 실수는 함수를 전달하는 대신 함수 실행 결과를 핸들러로 전달하는 것입니다. 예를 들어 `on:click={removeTodo(todo)}`를 지정하면 `removeTodo(todo)`가 실행되고 그 결과가 핸들러로 전달되는데 이는 우리가 생각한 것과는 다릅니다.

   이 경우 `on:click={() => removeTodo(todo)}`를 핸들러로 지정해야 합니다. `removeTodo()`가 매개변수를 받지 못한 경우 `on:event={removeTodo}`를 사용할 수 있지만 `on:event={removeTodo()}`는 사용할 수 없습니다. 이것은 특별한 Svelte 구문이 아닙니다. 여기서는 일반 JavaScript [화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)를 사용하고 있습니다.

다시 말하지만 이것은 좋은 진전입니다. 이 시점에서 이제 작업을 삭제할 수 있습니다. 할 일 항목의 _Delete_ 버튼을 누르면 관련 할 일이 `todos` 배열에서 제거되고 더 이상 표시되지 않도록 UI가 업데이트됩니다. 또한 이제 확인란을 선택할 수 있으며 관련 할 일의 완료된 상태가 이제 `todos` 배열에서 업데이트됩니다.

그러나 "y개 항목 중 x개 완료" 제목이 업데이트되지 않습니다. 왜 이런 일이 발생하고 어떻게 해결할 수 있는지 알아보려면 계속 읽어보세요.

## 반응형 할 일 목록

이미 본 것처럼 컴포넌트 최상위 변수의 값이 수정될 때마다 Svelte는 UI를 업데이트하는 방법을 알고 있습니다. 우리 앱에서 `todos` 배열 값은 할 일이 토글되거나 삭제될 때마다 직접 업데이트되므로 Svelte는 자동으로 DOM을 업데이트합니다.

그러나 `totalTodos` 및 `completedTodos`의 경우에는 그렇지 않습니다. 다음 코드에서는 컴포넌트가 인스턴스화되고 스크립트가 실행될 때 값이 할당되지만 그 후에는 해당 값이 수정되지 않습니다.

```js
let totalTodos = todos.length;
let completedTodos = todos.filter((todo) => todo.completed).length;
```

할 일을 토글링하고 제거한 후에 다시 계산할 수 있지만 더 쉬운 방법이 있습니다.

Svelte에게 `totalTodos` 및 `completedTodos` 변수에 `$:` 접두사를 붙여서 반응형이 되기를 원한다고 말할 수 있습니다. Svelte는 의존하는 데이터가 변경될 때마다 자동으로 업데이트하는 코드를 생성합니다.

> **참고:** Svelte는 `$:` [JavaScript 레이블 문 구문](/ko/docs/Web/JavaScript/Reference/Statements/label)을 사용하여 반응형 구문을 표시합니다. props를 선언하는 데 사용되는 `export` 키워드처럼, 이것은 약간 낯설게 보일 수 있습니다. 이것은 Svelte가 유효한 JavaScript 구문을 활용하고 새로운 목적을 부여하는 또 다른 예입니다. 이 경우 "참조된 값이 변경될 때마다 이 코드를 다시 실행"하는 것을 의미합니다. 한 번 익숙해지면, 모르던 때로 돌아갈 수 없을 것입니다.

`src/components/Todos.svelte` 내부의 `totalTodos` 및 `completedTodos` 변수 정의를 다음과 같이 업데이트하세요.

```js
$: totalTodos = todos.length;
$: completedTodos = todos.filter((todo) => todo.completed).length;
```

이제 앱을 확인하면 할 일이 완료되거나 삭제될 때 제목의 숫자가 업데이트되는 것을 볼 수 있습니다. 멋지네요!

Svelte 컴파일러는 배후에서 종속성 트리를 만들기 위해 코드를 파싱하고 분석한 다음 종속성 중 하나가 업데이트될 때마다 각 반응 상태을 재평가하는 JavaScript 코드를 생성합니다. Svelte의 반응성은 리스너(listeners), 세터(setters), 게터(getters) 또는 기타 복잡한 메커니즘을 사용하지 않고 매우 가볍고 성능이 뛰어난 방식으로 구현됩니다.

## 새로운 할 일 추가

이제 문서의 다음 주요 작업입니다. 새 할 일을 추가하는 몇 가지 기능을 추가해 보겠습니다.

1. 먼저 새 할 일의 텍스트를 저장할 변수를 만듭니다. `Todos.svelte` 파일의 `<script>` 섹션에 다음 선언을 추가합니다.

   ```js
   let newTodoName = "";
   ```

2. 이제 `<input>`에서 이 값을 사용하여 새 작업을 추가합니다. 그렇게 하려면 `newTodoName` 변수를 `todo-0` 입력에 바인딩해야 `newTodoName` 변수 값이 입력의 `value` 속성과 동기화 상태를 유지합니다. 다음과 같이 할 수 있습니다.

   ```svelte
   <input value={newTodoName} on:keydown={(e) => newTodoName = e.target.value} />
   ```

   변수 `newTodoName`의 값이 변경될 때마다 입력의 `value` 속성에 반영되며 입력에서 키를 누를 때마다 변수 `newTodoName`의 내용을 업데이트합니다.

   이는 입력에 대한 양방향 데이터 바인딩을 수동으로 구현한 것입니다. 하지만 이렇게 할 필요는 없습니다 왜냐하면 Svelte는 [`bind:property`](https://svelte.dev/docs#bind_element_property) 지시문을 사용하여 모든 속성을 변수에 바인딩하는 더 쉬운 방법을 제공합니다.

   ```svelte
   <input bind:value={newTodoName} />
   ```

   자, 이것을 구현해 봅시다. 다음과 같이 `todo-0` 입력을 변경하세요.

   ```svelte
   <input
     bind:value={newTodoName}
     type="text"
     id="todo-0"
     autocomplete="off"
     class="input input__lg" />
   ```

3. 이것이 동작하는지 테스트하는 쉬운 방법은 `newTodoName`의 내용을 기록하는 반응형 구문을 추가하는 것입니다. `<script>` 섹션 끝에 이 스니펫을 추가합니다.

   ```js
   $: console.log("newTodoName: ", newTodoName);
   ```

   > **참고:** 아시다시피 반응형 구문은 변수 선언으로 제한되지 않습니다. `$:` 기호 뒤에 _any_ JavaScript 문을 넣을 수 있습니다.

4. 이제 `localhost:5042`로 돌아가서 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd>를 눌러 브라우저 콘솔을 열고 무언가를 입력하세요. 입력 필드. 항목이 기록된 것을 볼 수 있습니다. 이 시점에서 원하는 경우 반응형 `console.log()`를 삭제할 수 있습니다.
5. 다음으로 새로운 할 일을 추가하는 함수인 `addTodo()`를 만들겠습니다. 이 함수는 새로운 `todo` 객체를 `todos` 배열로 푸시합니다. `src/components/Todos.svelte` 내부의 `<script>` 블록 맨 아래에 다음을 추가합니다.

   ```js
   function addTodo() {
     todos.push({ id: 999, name: newTodoName, completed: false });
     newTodoName = "";
   }
   ```

   > **참고:** 지금은 모든 할 일에 동일한 `id`를 할당하지만 걱정하지 마세요. 곧 수정할 것입니다.

6. 이제 폼이 제출(submit)될 때마다 `addTodo()`를 호출하도록 HTML을 업데이트하려고 합니다. NewTodo 폼의 여는 태그를 다음과 같이 업데이트하세요.

   ```svelte
   <form on:submit|preventDefault={addTodo}>
   ```

   [`on:eventname`](https://svelte.dev/docs#on_element_event) 지시문은 `|` 문자를 사용하여 DOM 이벤트에 수식어를 추가하는 것을 지원합니다. 이 경우 `preventDefault` 수식어는 핸들러를 실행하기 전에 `event.preventDefault()`를 호출하는 코드를 생성하도록 Svelte에 지시합니다. 사용 가능한 다른 수식어를 보려면 이전 링크를 살펴보세요.

7. 이 시점에서 새 할 일을 추가하려고 하면 새 할 일은 할 일 배열에 추가되지만 UI는 업데이트되지 않습니다. Svelte에서는 [반응성은 할당으로 트리거됨](https://svelte.dev/docs#2_Assignments_are_reactive)을 기억하세요. 즉, `addTodo()` 함수가 실행되고 요소가 `todos` 배열에 추가되지만 Svelte는 push 메서드가 배열을 수정했음을 감지하지 못하므로 작업 `<ul>`을 새로 고치지 않습니다.

   `addTodo()` 함수의 끝에 `todos = todos`를 추가하면 문제가 해결되지만, 함수의 끝에 포함시켜야 하는 것이 이상해 보입니다. 대신 `push()` 메서드를 제거하고 [확산 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)을 사용하여 동일한 결과를 얻습니다. `todos` 배열에 새로운 개체를 추가한 것과 동일한 `todos` 배열을 할당합니다.

   > **참고:** `Array`에는 여러 가지 변경 연산자가 있습니다. [`push()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push), [`pop()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), [`splice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), [`shift()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift), [`unshift()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift), [`reverse()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) 및 [`sort()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). 연산자를 사용하면 종종 추적하기 어려운 부작용과 버그가 발생합니다. 확산 구문을 사용하여 `push()`로 배열 변경을 피하는 것은 좋은 사례로 간주됩니다.

   `addTodo()`를 다음과 같이 업데이트합니다.

   ```js
   function addTodo() {
     todos = [...todos, { id: 999, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## 각 할 일에 고유한 ID 부여

지금 앱에 새 할 일을 추가하려고 하면 새 할 일을 추가하고 UI에 한 번 표시할 수 있습니다. 두 번째 시도하면 작동하지 않고 "오류: 키는 중복 될 수 없습니다"라는 콘솔 메시지가 표시됩니다. 할 일에 대한 고유한 ID가 필요합니다.

1. 할 일의 수에 1을 더한 값으로 계산된 `newTodoId` 변수를 선언하고 반응형으로 만들어 봅시다. `<script>` 섹션에 다음 스니펫을 추가합니다.

   ```js
   let newTodoId;
   $: {
     if (totalTodos === 0) {
       newTodoId = 1;
     } else {
       newTodoId = Math.max(...todos.map((t) => t.id)) + 1;
     }
   }
   ```

   > **참고:** 보시다시피 반응형 구문은 한 줄로 제한되지 않습니다. 다음 구문은 정상 작동하지만 가독성이 약간 떨어집니다. `$: newTodoId = totalTodos ? Math.max(...todos.map((t) => t.id)) + 1 : 1`

2. Svelte는 어떻게 이것이 가능할까요? 컴파일러는 전체 반응형 구문을 파싱하고 `totalTodos` 변수와 `todos` 배열에 의존하는 것을 감지합니다. 따라서 둘 중 하나가 수정될 때마다 이 코드가 재평가되고 그에 따라 `newTodoId`가 업데이트됩니다.

   이것을 `addTodo()` 함수에서 사용해봅시다. 다음과 같이 업데이트하세요.

   ```js
   function addTodo() {
     todos = [...todos, { id: newTodoId, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## 상태별로 할 일 필터링

이 문서의 마지막은 할 일을 상태별로 필터링하는 기능을 구현해 보겠습니다. 현재 필터를 저장할 변수와 필터링된 할 일을 반환하는 도우미 함수를 만듭니다.

1. `<script>` 섹션 하단에 다음을 추가합니다.

   ```js
   let filter = "all";
   const filterTodos = (filter, todos) =>
     filter === "active"
       ? todos.filter((t) => !t.completed)
       : filter === "completed"
       ? todos.filter((t) => t.completed)
       : todos;
   ```

   활성 필터(_all_, _active_ 또는 _completed_)를 제어하기 위해 `filter` 변수를 사용합니다. 이 값 중 하나를 필터 변수에 할당하기만 하면 필터가 활성화되고 할 일 목록이 업데이트됩니다. 이를 달성하는 방법을 살펴보겠습니다.

   'filterTodos()' 함수는 현재 필터와 할 일 목록을 수신하고 그에 따라 필터링된 할 일의 새 배열을 반환합니다.

2. 필터 버튼 마크업을 변경하여 동적으로 만들고 사용자가 필터 버튼 중 하나를 누를 때 필터 상태를 변경하겠습니다. 다음과 같이 변경하세요.

   ```svelte
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

   이 마크업에는 몇 가지 진행 중인 것이 있습니다.

   활성 필터 버튼에 `btn__primary` 클래스를 적용하여 현재 필터를 표시합니다. 스타일 클래스를 요소에 조건부로 적용하려면 `class:name={value}` 지시문을 사용합니다. 값 표현식이 참으로 평가되면 클래스 이름이 적용됩니다. 조건이 다른 여러 지시문을 동일한 요소에 추가할 수 있습니다. 따라서 `class:btn__primary={filter === 'all'}`을 실행할 때 Svelte는 filter가 all인 경우 `btn__primary` 클래스를 적용합니다.

   > **참고:** Svelte는 클래스가 변수 이름과 일치할 때 `<div class:active={active}>`를 `<div class:active>`로 축소할 수 있는 바로 가기를 제공합니다.

   `aria-pressed={filter === 'all'}`에서도 비슷한 일이 발생합니다. 중괄호 사이에 전달된 JavaScript 표현식이 참으로 값으로 평가되면 `aria-pressed` 속성이 버튼에 추가됩니다.

   버튼을 클릭할 때마다 `on:click={() => filter = 'all'}`을 실행하여 필터 변수를 업데이트합니다. Svelte 반응성이 이 외의 나머지를 처리하는 방법을 알아 보려면 계속 읽어보세요.

3. 이제 `{#each}` 루프에서 도우미 함수를 사용해야 합니다. 다음과 같이 업데이트하세요.

   ```svelte
   …
     <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
     {#each filterTodos(filter, todos) as todo (todo.id)}
   …
   ```

   코드를 분석한 후 Svelte는 `filterTodos()` 함수가 `filter` 및 `todos` 변수에 의존한다는 것을 감지합니다. 그리고 마크업에 포함된 다른 동적 표현식과 마찬가지로 이러한 종속성이 변경될 때마다 그에 따라 DOM이 업데이트됩니다. 따라서 `filter` 또는 `todos`가 변경될 때마다 `filterTodos()` 함수가 재평가되고 루프 내부의 항목이 업데이트됩니다.

> **참고:** 때때로 반응성이 까다로울 수 있습니다. Svelte는 `filterTodos(filter, todo)` 표현식에서 참조하기 때문에 `filter`를 종속성으로 인식합니다. `filter`는 최상위 변수이므로 도우미 함수 params에서 제거하고 `filterTodos(todo)`와 같이 호출하고 싶을 수도 있습니다. 이것은 작동하지만 이제 Svelte는 `{#each filterTodos(todos) }`가 `filter`에 의존하고 필터가 변경될 때 필터링된 할 일 목록이 업데이트되지 않는다는 것을 알아낼 방법이 없습니다. Svelte는 종속성을 찾기 위해 코드를 분석하므로 이에 대해 명시하고 최상위 변수의 가시성에 의존하지 않는 것이 좋습니다. 게다가 어떤 정보를 사용하고 있는지에 대해 코드를 명확하고 명시적으로 만드는 것이 좋습니다.

## 지금까지의 코드

### Git

이 문서의 끝에서 코드의 상태를 확인하려면 다음과 같이 저장소 사본에 접근하세요.

```bash
cd mdn-svelte-tutorial/04-componentizing-our-app
```

또는 폴더의 콘텐츠를 직접 다운로드합니다.

```bash
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```

`npm install && npm run dev` 명령어로 실행하여 개발 모드에서 앱을 실행해주세요.

### REPL

REPL에서 코드의 현재 상태를 보려면 다음에 방문하십시오.

<https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2>

## Summary

이 정도면 충분합니다! 이 문서에서 우리는 이미 우리가 원하는 대부분의 기능을 구현했습니다. 우리의 앱은 할 일을 표시, 추가 및 삭제하고, 완료된 상태를 전환하고, 완료한 작업 수를 표시하고, 필터를 적용할 수 있습니다.

요약하자면 다음 주제를 다뤘습니다.

- 컴포넌트 생성 및 사용
- 정적 마크업을 라이브 템플릿으로 전환
- 마크업에 자바스크립트 표현식 포함
- `{#each}` 지시문을 사용하여 목록 순회
- props로 컴포넌트 간 정보 전달
- DOM 이벤트 처리
- 반응형 구문 선언
- `console.log()` 및 반응형 구문을 사용한 기본 디버깅
- `bind:property` 지시어로 HTML 속성 바인딩
- 과제에 대한 반응성 유발
- 반응식을 사용하여 데이터 필터링
- 반응형 종속성을 명시적으로 정의

우리는 사용자가 할 일을 편집할 수 있는 기능을 더 추가할 것입니다.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
