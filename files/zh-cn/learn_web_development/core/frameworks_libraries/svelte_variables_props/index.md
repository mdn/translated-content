---
title: Svelte 中的动态行为：变量和属性
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Svelte_components", "Learn_web_development/Core/Frameworks_libraries")}}

现在我们已经准备好了标记和样式，我们可以开始为 Svelte 待办清单应用程序开发所需的功能。在本篇文章中，我们将使用变量和属性使我们的应用程序动态化，允许我们新增和删除待办事项，标记它们为完成并通过状态过滤它们。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        <p>
          推荐你至少熟悉基本的
          <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS</a> 和
          <a href="/zh-CN/docs/Learn_web_development/Core/Scripting">JavaScript</a>
          等编程语言，并具备<a
            href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >终端/命令行环境</a
          >的基本知识。
        </p>
        <p>
          你将需要一个已安装了 Node.js 和 npm 的终端来编译和构建你的应用程序。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        学习并实践一些基本的 Svelte 概念，如创建组件、使用属性传递数据、将 JavaScript 表达式渲染到我们的标记、修改组件的状态以及遍历列表。
      </td>
    </tr>
  </tbody>
</table>

## 与我们一起编写代码

### Git

克隆 Github 仓库（如果你还没有完成）如下：

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

然后获取当前应用程序状态，执行如下：

```bash
cd mdn-svelte-tutorial/03-adding-dynamic-behavior
```

或者直接下载文件夹内容：

```bash
npx degit opensas/mdn-svelte-tutorial/03-adding-dynamic-behavior
```

记得执行 `npm install && npm run dev` 以开发模式运行你的应用程序。

### REPL

要使用 REPL 和我们一起编写代码，点击以下链接：

<https://svelte.dev/repl/c862d964d48d473ca63ab91709a0a5a0?version=3.23.2>

## 处理待办事项

目前我们的 `Todos.svelte` 组件只显示静态标记，让我们开始让它变得更加动态。我们将从标记语言中获取任务信息并将其存储在 `todos` 数组中。另外我们将创建两个变量来持续追踪任务总数和已完成的任务。

我们组件的状态将由这三个顶层变量代表。

1. 在 `src/components/Todos.svelte` 的顶部创建一个 `<script>` 区块并填充一些内容，如下所示：

   ```svelte
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

   现在让我们用这些信息做点什么。

2. 让我们从显示状态信息开始。找到 `id` 为 `list-heading` 的 `<h2>` 标题并用动态表达式替换已经硬编码的当前任务及已完成任务数量：

   ```svelte
   <h2 id="list-heading">{completedTodos} out of {totalTodos} items completed</h2>
   ```

3. 回到应用程序，你应该会看到和以前一样的“2 out of 3 items completed”信息，但这次的信息来自 `todos` 数组。
4. 为了证明这一点，回到数组并尝试改变一些待办事项对象的已完成属性值，甚至是新增一个新的待办事项对象。观察信息中的数字是如何被恰当地更新的。

## 从数据动态地生成待办事项

目前我们显示的待办事项都是静态的。而我们想要遍历 `todos` 数组中的每个项目并为每个任务渲染其标记，让我们马上动手吧。

HTML 没有表达逻辑的方式（如条件和循环），但 Svelte 可以做到。在这种情况下，我们使用 [`{#each}`](https://svelte.dev/docs#each) 指令来迭代 `todos` 数组。假如提供了第二个参数，将包含当前项目的索引。此外，可以提供一个键表达式，它将唯一识别每个项目。当数据发生变化时，Svelte 将使用它来更改列表，而不是在末尾添加或删除项目，所以始终指定键表达式是一种好的做法。最后，可以提供 `:else` 区块，它将在列表为空时渲染如此。

试一试吧。

1. 将现有的 `<ul>` 元素替换为以下的简化版本，以了解其工作原理：

   ```svelte
   <ul>
   {#each todos as todo, index (todo.id)}
     <li>
       <input type="checkbox" checked={todo.completed}/> {index}. {todo.name} (id: {todo.id})
     </li>
   {:else}
     Nothing to do here!
   {/each}
   </ul>
   ```

2. 回到应用程序，你会看到这样的画面：

   ![使用 each 块创建非常简单的待办事项输出](01-each-block.png)

3. 现在我们已经看到这是有效的，接下来让我们使用 `{#each}` 指令的每个循环生成一个完整的待办事项并在其中嵌入来自 `todos` 数组中的信息：`id`、`name` 和 `completed`。将现有的 `<ul>` 区块替换为以下内容：

   ```svelte
   <!-- To-dos -->
   <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
     {#each todos as todo (todo.id)}
     <li class="todo">
       <div class="stack-small">
         <div class="c-cb">
           <input
             type="checkbox"
             id="todo-{todo.id}"
             checked={todo.completed} />
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

   请注意我们如何使用大括号将 JavaScript 表达式嵌入 HTML 属性中，就像我们对勾选框的 `checked` 和 `id` 属性所做的那样。

我们已经将静态标记转为动态模板并从组件的状态来显示这些任务。做得好！

## 处理属性

由于待办事项清单是硬编码的，我们的 `Todos` 组件不是那么有用。为了将我们的组件变为一个通用的待办事项编辑器，我们应该允许它的上层组件可以传递待办事项清单以进行编辑。这将允许我们将它们存储至网络服务或本地存储区，以便之后将它们取回进行更新。所以让我们将数组变为一个 `prop`。

1. 在 `Todos.svelte` 中，将现有的 `let todos = …` 区块替换为 `export let todos = []`。

   ```js
   export let todos = [];
   ```

   起初这可能会让你觉得有点奇怪。这不像在 JavaScript 模块中使用 `export` 的常见方式！但这就是 Svelte 通过采用赋予有效语法其新用途来“扩展”JavaScript 的做法。在这种情况下，Svelte 使用 `export` 关键字将变量声明标记为属性，这意味着组件的消费者可以访问它。

   你也可以为属性指定默认初始值。如果组件的消费者没有在组件上指定属性，或者在实例化组件时属性的初始值未定义，则会使用该初始值。

   因此，通过 `export let todos = []` 我们告诉 Svelte 我们的 `Todos.svelte` 组件将可接受 `todos` 属性，而当省略该属性时，它将被初始化为一个空数组。

2. 回到应用程序，你将会看到“Nothing to do here!”信息。这是因为我们目前没有从 `App.svelte` 向它传递任何值，所以它使用默认值。
3. 现在让我们将待办事项移动到 `App.svelte` 并将它们作为属性传递给 `Todos.svelte` 组件。更新 `src/App.svelte` 如下：

   ```svelte
   <script>
     import Todos from "./components/Todos.svelte";

     let todos = [
       { id: 1, name: "Create a Svelte starter app", completed: true },
       { id: 2, name: "Create your first component", completed: true },
       { id: 3, name: "Complete the rest of the tutorial", completed: false }
     ];
   </script>

   <Todos todos={todos} />
   ```

4. 当属性和变量具有相同名称时，Svelte 允许你仅指定变量作为捷径，因此我们可以像这样重写最后一行。现在试试吧。

   ```svelte
   <Todos {todos} />
   ```

此时，你的待办事项渲染应该与以前一样，除了现在我们是从 `App.svelte` 组件来传递它们之外。

## 勾选和移除待办事项

让我们添加一些功能来勾选任务状态。Svelte 具有用于监听 DOM 事件的 `on:事件名称` 指令。让我们为勾选框的 `on:click` 事件添加一个处理器来切换已完成的状态。

1. 在 `src/components/Todos.svelte` 中，更新 `<input type="checkbox">` 元素如下：

   ```svelte
   <input type="checkbox" id="todo-{todo.id}"
     on:click={() => todo.completed = !todo.completed}
     checked={todo.completed}
   />
   ```

2. 接下来，我们将添加一个函数来从我们的 `todos` 数组中移除一个待办事项。在 `Todos.svelte` 的 `<script>` 区块底部，添加 `removeTodo()` 函数，如下：

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
   }
   ```

3. 我们将通过*Delete*按钮来调用它。更新 `click` 事件，如下：

   ```svelte
   <button type="button" class="btn btn__danger"
     on:click={() => removeTodo(todo)}
   >
     Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   在 Svelte 中处理器的一个常见错误是将执行函数的结果作为处理器传递，而不是传递函数。例如，如果你指定 `on:click={removeTodo(todo)}`，它将执行 `removeTodo(todo)` 并将结果作为处理器传递，但这不是我们想要的。

   在这种情况下，你必须指定 `on:click={() => removeTodo(todo)}` 作为处理器。如果 `removeTodo()` 没有接收参数，你可以使用 `on:event={removeTodo}`，但不能使用 `on:event={removeTodo()}`。这不是 Svelte 中的特殊语法——在这里我们只是使用常规的 JavaScript [箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)。

这是不错的进展——现在我们可以删除任务了。当待办事项的*Delete*按钮被按下时，相关的待办事项将从 `todos` 数组中移除，并更新用户界面以不再显示它。此外，我们现在可以勾选复选框，相关待办事项的已完成状态将在 `todos` 数组中被更新。

然而，“x out of y items completed”标题并未被更新。请继续阅读，了解出现这种情况的原因和解决方法。

## 待办事项响应性

正如我们所看到的，每当组件顶层变量的值被修改时，Svelte 都知道如何更新用户界面。在我们的应用程序中，每当勾选或删除待办事项时，`todos` 数组的值会直接更新，所以 Svelte 会自动更新 DOM。

然而，对于 `totalTodos` 和 `completedTodos` 来说情况并非如此。在下面的代码中，当组件被实例化且脚本被执行时，它们会被指定一个值，但是之后它们的值不会改变：

```js
let totalTodos = todos.length;
let completedTodos = todos.filter((todo) => todo.completed).length;
```

我们可以在勾选和移除待办事项后重新计算它们，但有一种更简单的方式可以做到。

可以通过在前面加上 `$:` 前缀，告诉 Svelte 我们希望 `totalTodos` 和 `completedTodos` 等变量具有响应性。Svelte 将生成代码以在它们依赖的数据发生变化时自动更新它们。

> [!NOTE]
> Svelte 使用 `$:` [JavaScript 标记语句语法](/zh-CN/docs/Web/JavaScript/Reference/Statements/label)来标记响应性语句。就像用于声明属性的 `export` 关键字一样，这可能看起来有点陌生。但这是 Svelte 利用有效的 JavaScript 语法并赋予其新用途的另一个例子——在这种情况下，意味着“每当任何引用的值发生变化时，就会重新执行此代码”。一旦习惯了，你就无法回头了。

更新 `src/components/Todos.svelte` 中的 `totalTodos` 和 `completedTodos` 变量定义，如下：

```js
$: totalTodos = todos.length;
$: completedTodos = todos.filter((todo) => todo.completed).length;
```

如果你现在检查你的应用程序，当待办事项完成或被删除时，你将会看到标题的数字被更新。做得好！

在幕后，Svelte 编译器会解析和分析我们的代码，生成依赖关系树，然后生成 JavaScript 代码，以便在依赖关系更新时重新评估每个响应式语句。Svelte 中的响应性是以非常轻量级和高性能的方式实现的，无需使用监听器（listener）、设置器（setter）、获取器（getter）或任何其他复杂机制。

## 添加新的待办事项

当前文章的下一个主要任务是添加一些用来添加新的待办事项的功能。

1. 首先，我们将创建一个变量来保存新待办事项的文字。将此声明添加到 `Todos.svelte` 文件的 `<script>` 区块中：

   ```js
   let newTodoName = "";
   ```

2. 现在，我们将在 `<input>` 中使用此值来添加新任务。为此，我们需要将 `newTodoName` 变量绑定到 `todo-0` 输入框，以使 `newTodoName` 变量的值与输入框的 `value` 属性保持同步。我们可以这样做：

   ```svelte
   <input value={newTodoName} on:keydown={(e) => newTodoName = e.target.value} />
   ```

   每当 `newTodoName` 变量的值发生变化时，它将反映在 `value` 输入框的属性中，并且每当按下输入框的某个键时，我们将更新 `newTodoName` 变量的内容。

   这是对输入框双向数据绑定的手动实现。但是我们不需要这样做——Svelte 提供了一种更简单的方式来将任何属性绑定到变量，使用 [`bind:property`](https://svelte.dev/docs#bind_element_property) 指令：

   ```svelte
   <input bind:value={newTodoName} />
   ```

   所以，让我们来实现它。更新 `todo-0` 输入框如下：

   ```svelte
   <input
     bind:value={newTodoName}
     type="text"
     id="todo-0"
     autocomplete="off"
     class="input input__lg" />
   ```

3. 测试是否有效的一个简单方式是添加一个响应式语句来记录 `newTodoName` 的内容。在 `<script>` 区块的末尾添加以下代码片段：

   ```js
   $: console.log("newTodoName: ", newTodoName);
   ```

   > [!NOTE]
   > 你可能已经注意到，响应式语句不仅限于变量声明。你可以在 `$:` 符号后面放上*任何* JavaScript 语句。

4. 现在试着回到 `localhost:5042`，按下 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd> 打开浏览器控制台，并在输入框中输入一些内容。你应该能看到你的输入被记录下来。此时，你可以根据需要删除响应式 `console.log()`。
5. 接下来，我们将创建一个函数来添加新的待办事项——`addTodo()`——它会将一个新的 `todo` 对象添加到 `todos` 数组中。将此函数添加到 `src/components/Todos.svelte` 的 `<script>` 区块的底部：

   ```js
   function addTodo() {
     todos.push({ id: 999, name: newTodoName, completed: false });
     newTodoName = "";
   }
   ```

   > [!NOTE]
   > 目前我们为每个待办事项都指定相同的 `id`，不用担心，我们会尽快解决这个问题。

6. 现在我们要更新我们的 HTML，以便在表单提交时调用 `addTodo()`。更新添加 NewTodo 的起始标签如下：

   ```svelte
   <form on:submit|preventDefault={addTodo}>
   ```

   [`on:事件名称`](https://svelte.dev/docs#on_element_event)指令支持使用 `|` 字符向 DOM 事件添加修饰词（modifier）。在这种情况下，`preventDefault` 修饰词告诉 Svelte 在运行处理器之前生成调用 `event.preventDefault()` 的代码。浏览前一个链接以查看其他可用的修饰词有哪些。

7. 假设你现在尝试添加新的待办事项，新的待办事项将被添加到待办事项数组中，但我们的用户界面不会更新。在 Svelte 中，[响应性是由指定操作来触发的](https://svelte.dev/docs#2_Assignments_are_reactive)。这意味着尽管 `addTodo()` 函数被执行，元素被新增到 `todos` 数组中，但 Svelte 不会检测到 push 方法修改了数组，所以它也不会刷新任务 `<ul>`。

   要解决这个问题，只需要将 `todos = todos` 添加到 `addTodo()` 函数的末尾，但在函数末尾包含它似乎很奇怪。相反，我们将移除 `push()` 方法并使用[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)来达到相同的结果：我们将为 `todos` 数组指定一个等于 `todos` 数组加上新对象的数值。

   > [!NOTE]
   > 数组（`Array`）有几个修改操作：[`push()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)、[`pop()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)、[`splice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)、[`shift()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)、[`unshift()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)、[`reverse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) 和 [`sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)。使用它们常常会导致难以追踪的副作用和错误。通过使用展开语法而不是 `push()`，我们可以避免改变数组本身，这被认为是一种良好的做法。

   更新你的 `addTodo()` 函数如下：

   ```js
   function addTodo() {
     todos = [...todos, { id: 999, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## 给每个待办事项唯一的 ID

如果现在尝试在你的应用程序中添加新的待办事项，你将可以添加新的待办事项并让它出现在用户界面中——一次。但如果你尝试第二次，它将没有效果，并且你将收到一个控制台消息“Error: Cannot have duplicate keys in a keyed each”（错误：不能有重复的键）。我们的待办事项需要唯一 ID。

1. 让我们声明一个由待办事项数量加 1 计算得出的 `newTodoId` 变量并使其具有响应性。将以下代码片段添加到 `<script>` 区块：

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

   > [!NOTE]
   > 如你所见，响应式陈述不仅限于单行。以下代码也可以生效，但可读性较差：`$: newTodoId = totalTodos ? Math.max(...todos.map((t) => t.id)) + 1 : 1`

2. Svelte 是如何做到这一点的？编译器会解析整个响应式语句并检测到它依赖于 `totalTodos` 变量和 `todos` 数组。所以每当它们中任何一个被修改时，都会重新评估代码并相应地更新 `newTodoId`。

   让我们在 `addTodo()` 函数中使用它。更新它如下：

   ```js
   function addTodo() {
     todos = [...todos, { id: newTodoId, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## 通过状态筛选待办事项

在本文的最后，让我们实现通过状态筛选待办事项的功能。我们将创建一个变量来保存当前的筛选器，并且编写一个辅助函数来返回经过筛选的待办事项。

1. 在我们的 `<script>` 区块底部新增以下内容：

   ```js
   let filter = "all";
   const filterTodos = (filter, todos) =>
     filter === "active"
       ? todos.filter((t) => !t.completed)
       : filter === "completed"
         ? todos.filter((t) => t.completed)
         : todos;
   ```

   我们使用 `filter` 变量来控制当前的筛选器：_all_、_active_、_completed_。只需将其中一个值赋给筛选器变量，即可使用该筛选器并更新待办事项列表。让我们看看它是如何实现的。

   `filterTodos()` 函数接收当前的筛选器和待办事项列表，并返回经过筛选的新待办事项数组。

2. 让我们更新筛选器按钮的标记以使其动态化，当用户点击其中一个筛选器按钮时，更新当前的筛选器。更新它如下：

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

   这段标记中发生了几件事情。

   我们通过将 `btn__primary` 类应用于筛选器按钮来显示当前使用的筛选器。为了有条件地将样式类应用于元素上，我们使用 `class:name={value}` 指令。如果值表达式的计算结果为真，那么类名将被应用。你可以将许多不同条件的指令放在同一个元素上。所以当我们写为 `class:btn__primary={filter === 'all'}` 时，如果筛选器（filter）变量的值等于 `'all'`，Svelte 将会应用 `btn__primary` 类。

   > [!NOTE]
   > Svelte 提供了一个便利的快捷方式，允许我们在类与变量名称相同时，可以将 `<div class:active={active}>` 缩短为 `<div class:active>`。

   `aria-pressed={filter === 'all'}` 也是类似的情况：当在大括号之间传入的 JavaScript 表达式的计算结果为真值时，`aria-pressed` 属性将被加入到按钮上。

   每当我们点击按钮时，我们通过触发 `on:click={() => filter = 'all'}` 来更新筛选器变量。继续阅读以了解 Svelte 响应式将如何处理其余部分。

3. 现在我们只需要在 `{#each}` 循环中使用辅助函数；像这样更新它：

   ```svelte
   …
     <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
     {#each filterTodos(filter, todos) as todo (todo.id)}
   …
   ```

   在分析我们的代码后，Svelte 检测到我们的 `filterTodos()` 函数依赖于变量 `filter` 和 `todos`。而就像嵌入在标记中的任何其他动态表达式一样，每当这些依赖发生变化时，DOM 都会相应地更新。所以每当 `filter` 或 `todos` 发生变化时，`filterTodos()` 函数将会重新评估并更新循环内的项目。

> [!NOTE]
> 响应式有时会很棘手。Svelte 将 `filter` 识别为依赖，是因为我们在 `filterTodos(filter, todo)` 表达式中引用它。而 `filter` 是一个顶层变量，所以我们可能会想把它从辅助函数参数（params）中删除，然后像这样调用它：`filterTodos(todo)`。这虽然能够工作，但现在 Svelte 将无法发现 `{#each filterTodos(todos) }` 依赖于 `filter` 并且当过滤器变更时，过滤后的待办事项列表不会再被更新。切记 Svelte 会分析我们的代码以找出依赖关系，所以最好明确解释它，而不是依赖于顶层变量的可见性。此外，让我们的代码清晰并明确地解释它正在使用的信息是一个很好的做法。

## 到目前为止的代码

### Git

如果想要查看本文结束后代码所呈现的最终结果，你可以按照以下方式访问你对我们的仓库的克隆：

```bash
cd mdn-svelte-tutorial/04-componentizing-our-app
```

或直接下载文件夹内容：

```bash
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```

记得执行 `npm install && npm run dev` 以开发模式来运行你的应用程序。

### REPL

如果想在 REPL 上看到当前代码状态，请点击以下链接：

<https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2>

## 总结

截至目前为止做得好！在本篇文章中，我们已经实现了大部分想要的功能。我们的应用程序可以显示、新增和删除待办事项，切换其完成状态、显示已完成的数量和使用过滤器。

回顾一下，我们涵盖了以下主题：

- 建立和使用组件
- 转换静态标记为动态模板
- 在标记语言嵌入 JavaScript 表达式
- 使用 `{#each}` 指令遍历列表
- 通过属性在组件之间传递信息
- 监听 DOM 事件
- 声明响应式语句
- 使用 `console.log()` 和响应式语句进行基本调试
- 使用 `bind:property` 指令绑定 HTML 属性
- 通过指定操作触发响应式
- 使用响应式表达式过滤数据
- 显式定义我们的响应依赖关系

在下一篇文章中，我们将新增更多功能，允许用户编辑待办事项。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Svelte_components", "Learn_web_development/Core/Frameworks_libraries")}}
