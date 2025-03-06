---
title: Svelte 进阶：响应式、生命周期以及无障碍
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility
original_slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_components","Learn_web_development/Core/Frameworks_libraries/Svelte_stores", "Learn_web_development/Core/Frameworks_libraries")}}

在上一篇文章中，我们为待办事项列表添加了更多功能，并开始将应用程序组织成组件。在本文中，我们将添加应用程序的最终功能，并进一步组件化我们的应用程序。我们将学习处理与更新对象和数组相关的响应式问题。为了避免常见的问题，我们需要深入了解 Svelte 的响应式系统。我们还将解决一些无障碍聚焦问题，以及其他一些问题。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        <p>
          至少，建议你熟悉核心
          <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS</a>
          和 <a href="/zh-CN/docs/Learn_web_development/Core/Scripting">JavaScript</a>
          语言，并且了解<a
            href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >终端/命令行</a
          >的使用。
        </p>
        <p>
          你需要安装了 Node.js 和 npm 的终端来编译和构建应用程序。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        学习一些高级的 Svelte 技巧，包括解决响应性问题、与组件生命周期相关的键盘无障碍问题等等。
      </td>
    </tr>
  </tbody>
</table>

我们将重点关注涉及焦点管理的一些无障碍问题。为此，我们将利用一些访问 DOM 节点和执行 [`focus()`](/zh-CN/docs/Web/API/HTMLElement/focus) 和 [`select()`](/zh-CN/docs/Web/API/HTMLInputElement/select) 等方法的技术。我们还将学习如何声明以及清除 DOM 元素的事件监听器。

我们也需要学习一些组件生命周期的知识，以了解这些 DOM 节点何时在 DOM 中挂载（mount）和卸载（unmount），以及我们如何访问它们。我们还将学习 `action` 指令，它将允许我们以可重用和声明性的方式扩展 HTML 元素的功能。

最后，我们将进一步了解组件。到目前为止，我们已经看到组件如何使用属性共享数据，并使用事件和双向数据绑定与其父组件通信。现在，我们将看到组件如何暴露方法和变量。

本文将在课程中开发以下新组件：

- `MoreActions`：显示 _Check All_（全选）和 _Remove Completed_（移除已完成）按钮，并发出处理其功能所需的相应事件。
- `NewTodo`：显示用于添加新待办事项的 `<input>` 字段和 _Add_（添加）按钮。
- `TodosStatus`：显示“x out of y items completed”（“x 个已完成，共 y 个项目”）的状态标题。

## 与我们一起编写代码

### Git

使用以下命令克隆 GitHub 仓库（如果尚未完成）：

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

然后运行以下命令以进入当前应用状态：

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

或者直接下载文件夹的内容：

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

记得运行 `npm install && npm run dev` 以在开发模式下启动应用。

### REPL

要使用 REPL 与我们一起编码，请访问以下链接：

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## 处理 MoreActions 组件

现在我们来处理*全选*和*移除已完成*按钮。让我们创建一个组件，这个组件负责显示这些按钮并发出相应的事件。

1. 创建新文件，`components/MoreActions.svelte`。
2. 当点击第一个按钮时，我们将发出 `checkAll` 事件，表示所有待办事项应该被全选或取消全选。当点击第二个按钮时，我们将发出 `removeCompleted` 事件，表示所有已完成的待办事项应该被移除。将以下内容放入你的 `MoreActions.svelte` 文件中：

   ```svelte
   <script>
     import { createEventDispatcher } from "svelte";
     const dispatch = createEventDispatcher();

     let completed = true;

     const checkAll = () => {
       dispatch("checkAll", completed);
       completed = !completed;
     };

     const removeCompleted = () => dispatch("removeCompleted");
   </script>

   <div class="btn-group">
     <button type="button" class="btn btn__primary" on:click={checkAll}>{completed ? 'Check' : 'Uncheck'} all</button>
     <button type="button" class="btn btn__primary" on:click={removeCompleted}>Remove completed</button>
   </div>
   ```

   我们还包含了 `completed` 变量，用于在全选和取消全选之间进行切换。

3. 回到 `Todos.svelte`，我们要导入我们的 `MoreActions` 组件，并创建两个函数来处理 `MoreActions` 组件发出的事件。

   在现有的导入语句下面添加以下导入语句：

   ```js
   import MoreActions from "./MoreActions.svelte";
   ```

4. 然后在 `<script>` 部分的末尾添加下面描述的函数：

   ```js
   const checkAllTodos = (completed) =>
     todos.forEach((t) => (t.completed = completed));

   const removeCompletedTodos = () =>
     (todos = todos.filter((t) => !t.completed));
   ```

5. 现在转到 `Todos.svelte` 标记部分的底部，用 `MoreActions` 组件调用替换我们从 `MoreActions.svelte` 复制的 `<div class="btn-group">` 元素，如下所示：

   ```svelte
   <!-- MoreActions -->
   <MoreActions
     on:checkAll={(e) => checkAllTodos(e.detail)}
     on:removeCompleted={removeCompletedTodos}
   />
   ```

6. 好的，让我们回到应用程序中尝试一下。你会发现*移除已完成*按钮正常工作，但*全选*/*全部取消*按钮却没有任何反应。

要明白这里发生了什么，我们需要深入了解 Svelte 的响应式。

## 响应式问题：更新对象和数组

为了查看发生了什么，我们可以在 `checkAllTodos()` 函数中将 `todos` 数组记录到控制台中。

1. 将现有的 `checkAllTodos()` 函数更新如下：

   ```js
   const checkAllTodos = (completed) => {
     todos.forEach((t) => (t.completed = completed));
     console.log("todos", todos);
   };
   ```

2. 返回浏览器，打开开发者工具控制台，然后点击*全选*/*全部取消*几次。

你会注意到，每次按下按钮时，数组都会成功更新（`todo` 对象的 `completed` 属性在 `true` 和 `false` 之间切换），但是 Svelte 无法意识到这一点。这也意味着，在这种情况下，像 `$: console.log('todos', todos)` 这样的响应式语句并没有太大用处。

为了弄清楚发生这种情况的原因，我们需要了解在更新数组和对象时 Svelte 中的响应式是如何工作的。

许多 Web 框架使用虚拟 DOM 技术来更新页面。基本上，虚拟 DOM 是网页内容的内存副本。框架更新这个虚拟表示，然后将其与“真实”DOM 同步。这比直接更新 DOM 要快得多，并允许框架应用许多优化技术。

这些框架通常会在每次对虚拟 DOM 更改后重新运行我们的 JavaScript 代码，并应用不同的方法来缓存资源消耗巨大的计算和优化执行。它们几乎不会尝试理解我们的 JavaScript 代码在做什么。

Svelte 不使用虚拟 DOM 表示。相反，它解析并分析我们的代码，创建依赖树，然后生成所需的 JavaScript 代码，这段生成的代码仅更新需要更新的 DOM 部分。这种方法通常会生成具有最小开销的优化 JavaScript 代码，但它也有其局限性。

有时候 Svelte 无法检测到正在监视的变量的更改。请记住，要告诉 Svelte 某个变量已经改变，你必须为它分配新值。一个简单的规则是**已更新的变量的名称必须出现在赋值语句的左侧**。

例如，在下面的代码片段中：

```js
const foo = obj.foo;
foo.bar = "baz";
```

除非你紧接着使用 `obj = obj`，否则 Svelte 不会更新对 `obj.foo.bar` 的引用。这是因为 Svelte 无法跟踪对象引用，所以我们必须通过执行赋值操作，来明确告诉它 `obj` 已经改变了。

> [!NOTE]
> 如果 `foo` 是顶级变量，你可以使用以下响应式语句轻松地告诉 Svelte 在 `foo` 更改时更新 `obj`：`$: foo, obj = obj`。通过这样做，我们将 `foo` 定义为依赖项，每当它更改时，Svelte 将运行 `obj = obj`。

在我们的 `checkAllTodos()` 函数中，当我们运行：

```js
todos.forEach((t) => (t.completed = completed));
```

Svelte 不会将 `todos` 标记为已更改，因为它不知道当我们在 `forEach()` 方法内部更新我们的 `t` 变量时，我们也正在修改 `todos` 数组。这是有道理的，因为否则 Svelte 将需要了解 `forEach()` 方法的内部工作方式；同样道理也适用于附属于对象或数组的任何方法。

尽管如此，我们可以应用多种技术来解决这个问题，所有这些技术都涉及对正在监视的变量进行新赋值。

正如我们已经看到的，我们可以通过自赋值来通知 Svelte 变量的更新，像这样：

```js
const checkAllTodos = (completed) => {
  todos.forEach((t) => (t.completed = completed));
  todos = todos;
};
```

这将解决问题。在内部，Svelte 将标记 `todos` 为已更改，并移除显然多余的自赋值。除了看起来有点奇怪之外，这种技术是完全可以的，有时它也是最简洁的方式。

我们还可以通过索引访问 `todos` 数组，像这样：

```js
const checkAllTodos = (completed) => {
  todos.forEach((t, i) => (todos[i].completed = completed));
};
```

对数组和对象的属性赋值，例如 `obj.foo += 1` 或 `array[i] = x`，与对值本身的赋值方式相同。当 Svelte 分析此代码时，它可以检测到 `todos` 数组正在被修改。

另一种解决方案是创建新数组，新数组中包含所有待办事项的副本，并在其中更新 `completed` 属性，然后将新数组分配给 `todos`，像这样：

```js
const checkAllTodos = (completed) => {
  todos = todos.map((t) => ({ ...t, completed }));
};
```

在这种情况下，我们使用 [`map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 方法，它返回的结果是通过对数组中每个项执行给定的函数而生成的新数组。该函数使用[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)返回每个待办事项的副本，并相应地更新了每个副本的 `completed` 属性。这个解决方案的额外好处是返回了具有新对象的新数组，从而完全避免了对原始 `todos` 数组的修改。

> [!NOTE]
> Svelte 允许我们指定不同的选项来影响编译器的工作方式。 `<svelte:options immutable={true}/>` 选项告诉编译器你承诺不会修改任何对象。这允许它以更加激进的方式检查值是否已更改，并生成更简单和更高性能的代码。有关 `<svelte:options>` 的更多信息，请参阅 [Svelte 选项文档](https://svelte.dev/docs/special-elements#svelte-options)。

所有这些解决方案都涉及赋值操作，其中更新的变量位于等式的左侧。这些技术中的任何一种都将使 Svelte 注意到我们的 `todos` 数组已被修改。

**选择一种方法，并根据需要更新你的 `checkAllTodos()` 函数。现在你应该能够同时选中或取消选中所有待办事项。试试看吧！**

## 完善我们的 MoreActions 组件

我们将为我们的组件增加一些实用的细节。在没有任务要处理时，我们会禁用按钮。我们将通过接收 `todos` 数组作为属性，并相应地设置每个按钮的 `disabled` 属性来实现此功能。

1. 将你的 `MoreActions.svelte` 组件更新如下：

   ```svelte
   <script>
     import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();

     export let todos;

     let completed = true;

     const checkAll = () => {
       dispatch('checkAll', completed);
       completed = !completed;
     }

     const removeCompleted = () => dispatch('removeCompleted');

     $: completedTodos = todos.filter((t) => t.completed).length;
   </script>

   <div class="btn-group">
     <button type="button" class="btn btn__primary"
       disabled={todos.length === 0} on:click={checkAll}>{completed ? 'Check' : 'Uncheck'} all</button>
     <button type="button" class="btn btn__primary"
       disabled={completedTodos === 0} on:click={removeCompleted}>Remove completed</button>
   </div>
   ```

   我们还声明了响应式的 `completedTodos` 变量，用于启用或禁用*删除已完成*按钮。

2. 不要忘记从 `Todos.svelte` 中调用组件的位置将属性传递给 `MoreActions`：

   ```svelte
   <MoreActions {todos}
       on:checkAll={(e) => checkAllTodos(e.detail)}
       on:removeCompleted={removeCompletedTodos}
     />
   ```

## 使用 DOM：关注细节

现在我们已经完成了应用程序的所有必需功能，接下来我们将专注于一些无障碍特性，以改善我们的应用程序对仅使用键盘或屏幕阅读器的用户的可用性。

在当前状态下，我们的应用程序存在一些键盘无障碍问题，比如说在焦点管理方面。让我们了解一下这些问题。

## 探索我们的待办事项应用中的键盘无障碍问题

目前，对于使用键盘的用户来说，我们应用的焦点流动不够可预测或连贯。

如果你点击应用顶部的输入框，该输入框周围会出现粗实线框。这个实线框是你的视觉指示器，表示浏览器当前聚焦在这个元素上。

如果你是使用鼠标的用户，可能会忽略这个视觉提示。但是，如果你完全使用键盘工作，知道哪个控件有焦点非常重要。它告诉我们哪个控件将接收我们的按键输入。

如果你反复按下 <kbd>Tab</kbd> 键，你会看到实线焦点指示器在页面上的所有可以获得焦点的元素之间循环。如果将焦点移到*编辑*按钮上并按下 <kbd>Enter</kbd> 键，突然焦点就消失了，我们无法再知道哪个控件将接收我们的按键输入。

此外，如果按下 <kbd>Escape</kbd> 或 <kbd>Enter</kbd> 键，什么都不会发生。如果点击*取消*或*保存*，焦点再次消失。对于使用键盘的用户来说，这很令人困惑。

我们还希望添加一些实用特性，例如在必填字段为空时禁用*保存*按钮，在文本输入获得焦点时给予某些 HTML 元素焦点或自动选择内容。

要实现所有这些特性，我们需要以编程方式访问 DOM 节点，以运行诸如 [`focus()`](/zh-CN/docs/Web/API/HTMLElement/focus) 和 [`select()`](/zh-CN/docs/Web/API/HTMLInputElement/select) 等函数。我们还必须使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 和 [`removeEventListener()`](/zh-CN/docs/Web/API/EventTarget/removeEventListener) 以在控件获得焦点时运行特定的任务。

问题是，所有这些 DOM 节点是由 Svelte 在运行时动态创建的。因此，我们必须等待直到它们被创建并添加到 DOM 中，才能使用它们。为此，我们需要学习关于[组件生命周期](https://learn.svelte.dev/tutorial/onmount)的知识，以了解何时可以访问它们（稍后再详细讨论）。

## 创建 NewTodo 组件

让我们首先将我们的创建待办事项的表单提取到独立的组件中。根据我们目前所了解的知识，我们可以创建新的组件文件，并调整代码以发出 `addTodo` 事件，来传递新待办事项的名称和其他详细信息。

1. 创建名为 `components/NewTodo.svelte` 的新文件。
2. 将以下内容放入其中：

   ```svelte
   <script>
     import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();

     let name = '';

     const addTodo = () => {
       dispatch('addTodo', name);
       name = '';
     }

     const onCancel = () => name = '';

   </script>

   <form on:submit|preventDefault={addTodo} on:keydown={(e) => e.key === 'Escape' && onCancel()}>
     <h2 class="label-wrapper">
       <label for="todo-0" class="label__lg">What needs to be done?</label>
     </h2>
     <input bind:value={name} type="text" id="todo-0" autoComplete="off" class="input input__lg" />
     <button type="submit" disabled={!name} class="btn btn__primary btn__lg">Add</button>
   </form>
   ```

   这里我们使用 `bind:value={name}` 将 `<input>` 绑定到 `name` 变量，并使用 `disabled={!name}` 来在输入为空（即没有文本内容）时禁用*添加*按钮。我们还使用 `on:keydown={(e) => e.key === 'Escape' && onCancel()}` 处理了 <kbd>Escape</kbd> 键。当按下 <kbd>Escape</kbd> 键时，我们运行 `onCancel()`，这个函数会清空 `name` 变量。

3. 现在我们需要从 `Todos.svelte` 中导入并使用它，并更新 `addTodo()` 函数，使其接收新待办事项的名称作为实参。

   在 `Todos.svelte` 中的其他 `import` 语句下面添加以下 `import` 语句：

   ```js
   import NewTodo from "./NewTodo.svelte";
   ```

4. 并将 `addTodo()` 函数更新为以下内容：

   ```js
   function addTodo(name) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
   }
   ```

   `addTodo()` 现在直接接收新待办事项的名称，因此我们不再需要 `newTodoName` 变量来提供值。这部分由我们的 `NewTodo` 组件处理。

   > **备注：** `{ name }` 的语法只是 `{ name: name }` 的简写形式。它来自 JavaScript 本身，与 Svelte 无关，只是为 Svelte 的缩写语法提供了一些灵感。

5. 最后，在此部分中，将 NewTodo 表单标记替换为对 `NewTodo` 组件的调用，如下所示：

   ```svelte
   <!-- NewTodo -->
   <NewTodo on:addTodo={(e) => addTodo(e.detail)} />
   ```

## 使用 `bind:this={dom_node}` 指令处理 DOM 节点

现在，我们希望在每次按下*添加*按钮后，`NewTodo` 组件的 `<input>` 元素重新获得焦点。为此，我们需要对输入框的 DOM 节点的引用。Svelte 提供了一个方法来实现这一点，那就是使用 `bind:this={dom_node}` 指令。当指定了该指令后，一旦组件被挂载并且其 DOM 节点创建完成，Svelte 就会将对该 DOM 节点的引用分配给指定的变量。

我们将创建 `nameEl` 变量，并使用 `bind:this={nameEl}` 将其绑定到输入框上。然后在 `addTodo()` 中，在添加新待办事项后，我们将调用 `nameEl.focus()` 来重新将焦点设置到 `<input>` 上。当用户按下 <kbd>Escape</kbd> 键时，在 `onCancel()` 函数中，我们也将执行相同的操作。

请将 `NewTodo.svelte` 的内容更新如下：

```svelte
<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let name = '';
  let nameEl; // 对 name 输入框 DOM 节点的引用

  const addTodo = () => {
    dispatch('addTodo', name);
    name = '';
    nameEl.focus(); // 聚焦 name 输入框
  }

  const onCancel = () => {
    name = '';
    nameEl.focus(); // 聚焦 name 输入框
  }
</script>

<form on:submit|preventDefault={addTodo} on:keydown={(e) => e.key === 'Escape' && onCancel()}>
  <h2 class="label-wrapper">
    <label for="todo-0" class="label__lg">What needs to be done?</label>
  </h2>
  <input bind:value={name} bind:this={nameEl} type="text" id="todo-0" autoComplete="off" class="input input__lg" />
  <button type="submit" disabled={!name} class="btn btn__primary btn__lg">Add</button>
</form>
```

尝试一下应用程序：在 `<input>` 字段中输入新的待办事项名称，按下 <kbd>Tab</kbd> 以将焦点转移到*添加*按钮，然后按下 <kbd>Enter</kbd> 或 <kbd>Escape</kbd> 键，可以看到输入框重新获得焦点。

### 为输入框设置自动聚焦

接下来，我们将为 `NewTodo` 组件添加 `autofocus` 属性，以指定 `<input>` 字段在页面加载时获得焦点。

1. 我们首先尝试的方法如下：尝试添加 `autofocus` 属性，并在 `<script>` 块中调用 `nameEl.focus()`。将 `NewTodo.svelte` 中的 `<script>` 部分的前四行更新如下：

   ```svelte
   <script>
     import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();

     export let autofocus = false;

     let name = '';
     let nameEl; // 引用名称输入框的 DOM 节点

     if (autofocus) nameEl.focus();
   ```

2. 现在返回到 `Todos` 组件，并将 `autofocus` 属性传递给 `<NewTodo>` 组件调用，如下所示：

   ```svelte
   <!-- NewTodo -->
   <NewTodo autofocus on:addTodo={(e) => addTodo(e.detail)} />
   ```

3. 如果现在尝试运行应用程序，你会发现页面现在是空白的，并且在开发者工具的控制台中会显示类似于 `TypeError: nameEl is undefined` 的错误。

要理解这里发生了什么，让我们更详细地讨论一下我们之前提到的[组件生命周期](https://learn.svelte.dev/tutorial/onmount)。

## 组件生命周期和 `onMount()` 函数

当某个组件被实例化时，Svelte 会运行其初始化代码（即该组件的 `<script>` 部分）。但是在那个时刻，组件的所有节点都还没有附加到 DOM 中，事实上，它们甚至还不存在。

那么，你如何知道组件何时已经被创建并挂载到 DOM 上？答案是每个组件都有一个生命周期，生命周期从组件创建开始，到组件销毁结束。有一些函数可以让你在生命周期的关键时刻运行代码。

`onMount()` 是最常使用的函数之一，它允许我们在组件被挂载到 DOM 上后立即运行回调函数。让我们尝试一下，看看 `nameEl` 变量会发生什么变化。

1. 首先，在 `NewTodo.svelte` 的 `<script>` 部分的开头添加以下行：

   ```js
   import { onMount } from "svelte";
   ```

2. 然后在该部分的末尾添加以下行：

   ```js
   console.log("initializing:", nameEl);
   onMount(() => {
     console.log("mounted:", nameEl);
   });
   ```

3. 现在，移除 `if (autofocus) nameEl.focus()` 这行代码，以避免之前出现的错误。
4. 应用程序现在将再次正常工作，并且你将在控制台中看到以下内容：

   ```plain
   initializing: undefined
   mounted: <input id="todo-0" class="input input__lg" type="text" autocomplete="off">
   ```

   如你所见，在组件初始化期间，`nameEl` 是 `undefined`，这是有道理的，因为 `<input>` 节点甚至还不存在。在组件被挂载后，Svelte 会将对 `<input>` DOM 节点的引用赋值给 `nameEl` 变量，这是由 `bind:this={nameEl}` 指令完成的。

5. 为了使自动聚焦功能正常工作，将之前添加的 `console.log()`/`onMount()` 代码块替换为以下内容：

   ```js
   onMount(() => autofocus && nameEl.focus()); // 如果 autofocus 为 true，则运行 nameEl.focus()
   ```

6. 再次打开你的应用程序，你将看到 `<input>` 字段在页面加载时获得焦点。

> [!NOTE]
> 你可以查看 Svelte 文档中的其他[生命周期函数](https://svelte.dev/docs/svelte)，并在[交互式教程](https://learn.svelte.dev/tutorial/onmount)中看到它们的实际应用。

## 使用 `tick()` 函数等待 DOM 更新

现在我们将解决 `Todo` 组件的焦点管理细节问题。首先，当我们按下*编辑*按钮进入编辑模式时，我们希望 `Todo` 组件的编辑框 `<input>` 获得焦点。就像之前一样，我们将在 `Todo.svelte` 中创建一个 `nameEl` 变量，并在将 `editing` 变量设置为 `true` 后调用 `nameEl.focus()`。

1. 打开 `components/Todo.svelte` 文件，在 editing 和 name 变量的下面添加 `nameEl` 变量声明：

   ```js
   let nameEl; // 对 name 输入框 DOM 节点的引用
   ```

2. 现在更新你的 `onEdit()` 函数如下：

   ```js
   function onEdit() {
     editing = true; // 进入编辑模式
     nameEl.focus(); // 将焦点设置到 name 输入框
   }
   ```

3. 最后，通过以下方式将 `nameEl` 绑定到 `<input>` 输入框：

   ```svelte
   <input
     bind:value={name}
     bind:this={nameEl}
     type="text"
     id="todo-{todo.id}"
     autocomplete="off"
     class="todo-text" />
   ```

4. 然而，如果你尝试更新应用程序，当你按下待办事项的*编辑*按钮时，控制台会出现类似“TypeError: nameEl is undefined”的错误。

那么这里发生了什么？当你在 Svelte 中更新组件的状态时，它不会立即更新 DOM。相反，它会等到下一个微任务来检查是否有其他需要应用的更改，包括其他组件。这样做可以避免不必要的工作，并允许浏览器更有效地批处理操作。

在这种情况下，当 `editing` 是 `false` 时，编辑 `<input>` 不可见，因为它不存在于 DOM 中。在 `onEdit()` 函数中，我们将 `editing` 设置为 `true`，然后立即尝试访问 `nameEl` 变量并执行 `nameEl.focus()`。问题在于，Svelte 还没有更新 DOM。

解决这个问题的一种方法是使用 {{domxref("Window.setTimeout", "setTimeout()")}} 函数，延迟调用 `nameEl.focus()`，直到下一个事件循环，并给 Svelte 更新 DOM 的机会。

现在尝试一下这个解决方案：

```js
function onEdit() {
  editing = true; // 进入编辑模式
  setTimeout(() => nameEl.focus(), 0); // 异步调用，将焦点设置到 name 输入框
}
```

上面的解决方案是可行的，但不够优雅。Svelte 提供了更好的处理方式。[`tick()` 函数](https://learn.svelte.dev/tutorial/tick) 返回一个 Promise，在任何待处理的状态更改应用到 DOM 后解析（如果没有待处理的状态更改，立即解析）。让我们尝试一下。

1. 首先，在 `<script>` 部分的开头与现有的导入一起导入 `tick`：

   ```js
   import { tick } from "svelte";
   ```

2. 接下来，在[异步函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)中使用 [`await`](/zh-CN/docs/Web/JavaScript/Reference/Operators/await) 调用 `tick()`；更新 `onEdit()` 如下：

   ```js
   async function onEdit() {
     editing = true; // 进入编辑模式
     await tick();
     nameEl.focus();
   }
   ```

3. 如果现在尝试，你将看到一切都按预期工作。

> [!NOTE]
> 要查看另一个使用 `tick()` 的示例，请访问 [Svelte 教程](https://learn.svelte.dev/tutorial/tick)。

## 使用 `use:action` 指令为 HTML 元素添加功能

接下来，我们希望在 `<input>` 元素获得焦点时自动选择所有文本。此外，我们希望使其能够轻松地在任何 HTML `<input>` 上重用且是以声明性的方式应用。我们将借助解决这个需求的过程来展示 Svelte 的一个非常强大的特性：[action](https://svelte.dev/docs/svelte-action)。我们利用这个特性向常规 HTML 元素添加功能。

要选择 DOM 输入节点的文本，我们需要调用 [`select()`](/zh-CN/docs/Web/API/HTMLInputElement/select) 方法。为了在节点获得焦点时调用此函数，我们需要一个类似于以下的事件监听器：

```js
node.addEventListener("focus", (event) => node.select());
```

为了避免内存泄漏，我们还应该在节点销毁时调用 [`removeEventListener()`](/zh-CN/docs/Web/API/EventTarget/removeEventListener) 函数。

> [!NOTE]
> 所有这些只是标准的 WebAPI 功能；这里没有任何内容是特定于 Svelte 的。

我们可以在我们的 `Todo` 组件中实现所有这些，每当我们将 `<input>` 添加或从 DOM 中移除时都必须执行这些操作。但是，我们必须非常小心，应当在节点添加到 DOM 后添加事件监听器，并在节点从 DOM 中移除之前删除监听器。此外，我们的解决方案不太可重用。

这就是 Svelte action 发挥作用的地方。基本上，它们允许我们在元素添加到 DOM 后以及从 DOM 中移除后运行函数。

在我们的当前用例中，我们将定义名为 `selectOnFocus()` 的函数，它将接收一个节点作为参数。该函数将向该节点添加一个事件监听器，以便在节点获得焦点时选择文本。然后，它将返回一个带有 `destroy` 属性的对象。`destroy` 属性是 Svelte 在从 DOM 中移除节点后执行的函数。在这里，我们将移除监听器，以确保不留下任何内存泄漏。

1. 让我们创建 `selectOnFocus()` 函数。将以下代码添加到 `Todo.svelte` 的 `<script>` 部分的底部：

   ```js
   function selectOnFocus(node) {
     if (node && typeof node.select === "function") {
       // 确保 node 已定义且具有 select() 方法
       const onFocus = (event) => node.select(); // 事件处理器
       node.addEventListener("focus", onFocus); // 当节点获得焦点时调用 onFocus()
       return {
         destroy: () => node.removeEventListener("focus", onFocus), // 当节点从 DOM 中移除时执行
       };
     }
   }
   ```

2. 现在，我们需要告诉 `<input>` 使用该函数，使用 [`use:action`](https://svelte.dev/docs/element-directives#use-action) 指令：

   ```svelte
   <input use:selectOnFocus />
   ```

   通过这个指令，我们告诉 Svelte 在组件挂载到 DOM 时立即运行此函数，并将 `<input>` 的 DOM 节点作为参数传递。它还负责在组件从 DOM 中删除时执行 `destroy` 函数。因此，通过 `use` 指令，Svelte 为我们处理了组件的生命周期。

   在我们的例子中，我们的 `<input>` 最终如下所示：更新组件的第一个标签/输入对（在编辑模板内）如下：

   ```svelte
   <label for="todo-{todo.id}" class="todo-label">New name for '{todo.name}'</label>
   <input
     bind:value={name}
     bind:this={nameEl}
     use:selectOnFocus
     type="text"
     id="todo-{todo.id}"
     autocomplete="off"
     class="todo-text" />
   ```

3. 让我们试试看。前往你的应用程序，点击一个待办事项的*编辑*按钮，然后使用 <kbd>Tab</kbd> 键将焦点移出 `<input>`。现在点击 `<input>`，你会看到整个输入文本被选中。

### 使动作可重用

现在让我们将这个函数真正地做成可在组件间重用的。`selectOnFocus()` 只是一个函数，其并没有依赖于 `Todo.svelte` 组件，因此我们可以将它提取到一个文件中并从那里使用它。

1. 在 `src` 文件夹中创建名为 `actions.js` 的新文件。
2. 给它添加以下内容：

   ```js
   export function selectOnFocus(node) {
     if (node && typeof node.select === "function") {
       // 确保 node 已定义并具有 select() 方法
       const onFocus = (event) => node.select(); // 事件处理器
       node.addEventListener("focus", onFocus); // 当 node 获得焦点时调用 onFocus()
       return {
         destroy: () => node.removeEventListener("focus", onFocus), // 当节点从 DOM 中移除时执行此操作
       };
     }
   }
   ```

3. 现在在 `Todo.svelte` 中导入它；在其他导入语句下面添加以下导入语句：

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

4. 并且从 `Todo.svelte` 中删除 `selectOnFocus()` 定义，因为我们不再需要它。

### 重用我们的 action

为了展示我们的 action 的可重用性，让我们在 `NewTodo.svelte` 中使用它。

1. 也在这个文件中导入 `actions.js` 中的 `selectOnFocus()`，如之前所述：

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

2. 在 `<input>` 元素中添加 `use:selectOnFocus` 指令，像这样：

   ```svelte
   <input
     bind:value={name}
     bind:this={nameEl}
     use:selectOnFocus
     type="text"
     id="todo-0"
     autocomplete="off"
     class="input input__lg" />
   ```

只需几行代码，我们就可以以高度可重用和声明性的方式为常规 HTML 元素添加特性。只需要一个 `import` 语句和一个类似 `use:selectOnFocus` 这样的清晰描述其目的的短指令，就可以实现这一点，而无需创建自定义包装元素，如 `TextInput`、`MyInput` 或类似的元素。此外，你可以为一个元素添加任意多个 `use:action` 指令。

此外，我们不需要费力处理 `onMount()`、`onDestroy()` 或 `tick()`——`use` 指令会为我们处理组件的生命周期。

### 其他操作改进

在之前的部分中，当使用 `Todo` 组件时，我们不得不处理 `bind:this`、`tick()` 和 `async` 函数，只是为了在 `<input>` 添加到 DOM 后立即将焦点移在它上面。

1. 以下是我们使用 action 来实现它的方式：

   ```js
   const focusOnInit = (node) =>
     node && typeof node.focus === "function" && node.focus();
   ```

2. 然后在我们的标记中，我们只需要添加另一个 `use:` 指令：

   ```svelte
   <input bind:value={name} use:selectOnFocus use:focusOnInit />
   ```

3. 现在我们的 `onEdit()` 函数可以简单得多：

   ```js
   function onEdit() {
     editing = true; // 进入编辑模式
   }
   ```

在我们继续之前，让我们回到我们的 `Todo.svelte` 组件，在用户按下*保存*或*取消*后，我们希望将焦点放在*编辑*按钮上。

我们可以尝试再次重用我们的 `focusOnInit` action，将 `use:focusOnInit` 添加到*编辑*按钮上。但是这样会引入一个细微的 bug。当你添加一个新的待办事项时，焦点将移到最近添加的待办事项的*编辑*按钮上。这是因为 `focusOnInit` action 在组件创建时运行。

这不是我们想要的——我们希望*编辑*按钮只在用户按下*保存*或*取消*后接收焦点。

1. 回到你的 `Todo.svelte` 文件。
2. 首先，我们将创建名为 `editButtonPressed` 的标志，并将其初始化为 `false`。在其他变量定义的下方添加以下内容：

   ```js
   let editButtonPressed = false; // 跟踪编辑按钮是否已按下，以便在取消或保存后将焦点放在它上面
   ```

3. 接下来，我们将修改*编辑*按钮的特性来保存这个标志，并创建一个 action。像这样更新 `onEdit()` 函数：

   ```js
   function onEdit() {
     editButtonPressed = true; // 用户按下了编辑按钮，焦点将返回到编辑按钮
     editing = true; // 进入编辑模式
   }
   ```

4. 在其下方，添加以下 `focusEditButton()` 的定义：

   ```js
   const focusEditButton = (node) => editButtonPressed && node.focus();
   ```

5. 最后，我们在*编辑*按钮上使用 `focusEditButton` action，像这样：

   ```svelte
   <button type="button" class="btn" on:click={onEdit} use:focusEditButton>
     Edit<span class="visually-hidden"> {todo.name}</span>
   </button>
   ```

6. 回去并再次尝试你的应用程序。此时，每当*编辑*按钮添加到 DOM 中时，`focusEditButton` action 就会执行，但只有当 `editButtonPressed` 标志为 `true` 时，它才会将焦点移到按钮上。

> [!NOTE]
> 在这里，我们只是初步介绍了 action 的功能。action 还可以具有响应式参数，并且 Svelte 允许我们检测这些参数的任何更改。因此，我们可以添加与 Svelte 响应式系统良好集成的功能。如果想更详细地了解 action，请考虑查看 [Svelte 互动教程](https://learn.svelte.dev/tutorial/actions)或 [Svelte `use:action` 文档](https://svelte.dev/docs/element-directives#use-action)。

## 组件绑定：使用 `bind:this={component}` 指令暴露组件方法和变量

还有一个无障碍问题需要解决。当用户点击*删除*按钮时，焦点消失了。

本文中要介绍的最后一个特性是在删除待办事项后将焦点设置在状态标题上。

为什么是状态标题？在这种情况下，具有焦点的元素已被删除，因此没有明确的候选项可以接收焦点。我们选择了状态标题，因为它靠近待办事项列表，并且它是向视觉用户提供任务删除的反馈的一种方式，同时还向屏幕阅读器用户指示发生了什么。

首先，我们将把状态标题提取为单独的组件。

1. 创建一个新文件，`components/TodosStatus.svelte`。
2. 将以下内容添加到文件中：

   ```svelte
   <script>
     export let todos;

     $: totalTodos = todos.length;
     $: completedTodos = todos.filter((todo) => todo.completed).length;
   </script>

   <h2 id="list-heading">
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

3. 在 `Todos.svelte` 的开头导入该文件，在其他导入语句下面添加以下 `import` 语句：

   ```js
   import TodosStatus from "./TodosStatus.svelte";
   ```

4. 将 `Todos.svelte` 中的 `<h2>` 状态标题替换为对 `TodosStatus` 组件的调用，将 `todos` 作为属性传递给它，如下所示：

   ```svelte
   <TodosStatus {todos} />
   ```

5. 进行一些清理工作，从 `Todos.svelte` 中移除 `totalTodos` 和 `completedTodos` 变量。只需移除 `$：totalTodos = …` 和 `$：completedTodos = …` 行，还要在计算 `newTodoId` 时移除对 `totalTodos` 的引用，转而使用 `todos.length`。要做到这一点，请使用以下内容替换以 `let newTodoId` 开头的块：

   ```js
   $: newTodoId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
   ```

6. 一切都按预期工作——我们刚刚将最后一部分标记提取到了独立的组件中。

现在，我们需要找到一种方法，在删除待办事项后将焦点设置在 `<h2>` 状态标题上。

到目前为止，我们已经看到如何通过属性将信息传送到组件，并且组件可以通过发出事件或使用双向数据绑定与其父组件进行通信。子组件可以使用 `bind:this={dom_node}` 来获取对 `<h2>` 节点的引用，并使用双向数据绑定将其暴露给外部。但是，这样做将破坏组件的封装性；将焦点设置在组件上应该是组件自己的责任。

因此，我们需要 `TodosStatus` 组件公开一个方法，供其父组件调用以将焦点放在 `<h2>` 标题上。组件需要公开一些行为或信息以供使用者使用，这是一种非常常见的情况；让我们看看如何在 Svelte 中实现这一点。

我们已经了解 Svelte 使用 `export let varname = …` 来[声明属性](https://svelte.dev/docs/svelte-components#script-1-export-creates-a-component-prop)。但是，如果你不使用 `let` 导出 `const`、`class` 或 `function`，那么它们在组件外部是只读的。然而，函数表达式是有效的属性。在下面的示例中，前三个声明是属性，其余的是导出的值：

```svelte
<script>
  export let bar = "optional default initial value"; // 属性
  export let baz = undefined; // 属性
  export let format = (n) => n.toFixed(2); // 属性

  // 这些是只读的
  export const thisIs = "readonly"; // 只读导出

  export function greet(name) {
    // 只读导出
    alert(`Hello, ${name}!`);
  }

  export const greet = (name) => alert(`Hello, ${name}!`); // 只读导出
</script>
```

有了这个理解，我们回到我们的用例。我们将创建一个名为 `focus()` 的函数，它将焦点放在 `<h2>` 标题上。为此，我们需要 `headingEl` 变量来保存对 DOM 节点的引用，并使用 `bind:this={headingEl}` 将其绑定到 `<h2>` 元素上。我们的聚焦方法只需运行 `headingEl.focus()`。

1. 更新 `TodosStatus.svelte` 的内容如下：

   ```svelte
   <script>
     export let todos;

     $: totalTodos = todos.length;
     $: completedTodos = todos.filter((todo) => todo.completed).length;

     let headingEl;

     export function focus() {
       // 简写版本: export const focus = () => headingEl.focus()
       headingEl.focus();
     }
   </script>

   <h2 id="list-heading" bind:this={headingEl} tabindex="-1">
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   注意，我们在 `<h2>` 上添加了 `tabindex` 属性，以便允许元素通过编程方式接收焦点。

   正如我们之前所看到的，使用 `bind:this={headingEl}` 指令可以将 DOM 节点的引用存储在变量 `headingEl` 中。然后，我们使用 `export function focus()` 暴露一个函数，该函数将焦点放在 `<h2>` 标题上。

   我们如何从父组件访问这些导出的值呢？正如你可以使用 `bind:this={dom_node}` 指令绑定到 DOM 元素一样，你也可以使用 `bind:this={component}` 指令绑定到组件实例本身。因此，当你在 HTML 元素上使用 `bind:this` 时，你会得到对 DOM 节点的引用，当你在 Svelte 组件上使用它时，你会得到对该组件实例的引用。

2. 要绑定到 `TodosStatus` 实例，我们首先在 `Todos.svelte` 中创建 `todosStatus` 变量。在 `import` 语句下面添加以下行：

   ```js
   let todosStatus; // 对 TodosStatus 实例的引用
   ```

3. 接下来，在调用中添加 `bind:this={todosStatus}` 指令，如下所示：

   ```svelte
   <!-- TodosStatus -->
   <TodosStatus bind:this={todosStatus} {todos} />
   ```

4. 现在，我们可以从 `removeTodo()` 函数中调用 `exported focus()` 方法：

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // 将焦点放在状态标题上
   }
   ```

5. 回到你的应用程序。现在，如果删除任何待办事项，状态标题将获得焦点。突出显示待办事项数量的变化，无论是对于视觉用户还是对于屏幕阅读器用户都很有用。

> [!NOTE]
> 你可能想知道为什么需要为组件绑定声明一个新变量。为什么不能直接调用 `TodosStatus.focus()`？这是因为应用可能同时有多个 `TodosStatus` 实例，因此需要引用特定实例的方法。这就是为什么需要指定变量来绑定特定实例。

## 到目前为止的代码

### Git

如果想要查看本文结束后代码所呈现的最终结果，你可以按照以下方式访问你对我们的仓库的克隆：

```bash
cd mdn-svelte-tutorial/06-stores
```

或直接下载文件夹内容：

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

记得执行 `npm install && npm run dev` 以开发模式来运行你的应用程序。

### REPL

如果想在 REPL 上看到当前代码状态，请点击以下链接：

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## 总结

在本文中，我们已经向应用程序添加所有所需的功能，同时我们还解决了一些无障碍和可用性问题。我们还将应用程序拆分为可管理的组件，每个组件都有独特的任务。

与此同时，我们学习了一些进阶的 Svelte 技术，包括：

- 在更新对象和数组时处理响应式的注意事项
- 使用 `bind:this={dom_node}`（绑定 DOM 元素）来处理 DOM 节点
- 使用组件生命周期函数 `onMount()`
- 使用 `tick()` 函数强制 Svelte 解决待处理的状态更改
- 使用 `use:action` 指令以可重用且声明性的方式为 HTML 元素添加功能
- 使用 `bind:this={component}`（绑定组件）访问组件方法

在下一篇文章中，我们将学习如何使用 store 在组件之间进行通信，并为我们的组件添加动画效果。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_components","Learn_web_development/Core/Frameworks_libraries/Svelte_stores", "Learn_web_development/Core/Frameworks_libraries")}}
