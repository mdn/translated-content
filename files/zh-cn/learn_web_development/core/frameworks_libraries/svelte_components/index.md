---
title: 将我们的 Svelte 应用组件化
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_components
l10n:
  sourceCommit: e9be22eaa7416206e3f263a058f0d509a7f81f88
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props","Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}

在上一篇文章中，我们开始开发我们的待办事项列表应用。本文的主要目标是讲解如何将我们的应用拆分为可管理的组件，并在它们之间共享信息。我们将对应用进行组件化，并添加更多功能，以允许用户更新现有组件。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        <p>
          至少，建议你熟悉核心的
          <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a
            href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS</a> 和
          <a href="/zh-CN/docs/Learn_web_development/Core/Scripting">JavaScript</a>
          语言，并了解<a
            href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >终端/命令行</a
          >的知识。
        </p>
        <p>
          你需要安装了 Node.js 和 npm 的终端来编译和构建应用。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        学习如何将我们的应用拆分为组件并在它们之间共享信息。
      </td>
    </tr>
  </tbody>
</table>

## 与我们一起编写代码

### Git

克隆 GitHub 仓库（如果尚未完成）：

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

然后进入当前应用程序状态：

```bash
cd mdn-svelte-tutorial/04-componentizing-our-app
```

或者直接下载文件夹的内容：

```bash
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```

记得运行 `npm install && npm run dev` 以在开发模式下启动应用程序。

### REPL

要使用 REPL 跟随我们一起编码，请从以下链接开始：

<https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2>

## 将应用拆分为组件

在 Svelte 中，应用程序由一个或多个组件组成。组件是可重用的、自包含的代码块，将 HTML、CSS 和 JavaScript 组合在一起，写入 `.svelte` 文件中。组件可大可小，但通常具有明确定义：最有效的组件只服务于某个明确的目的。

定义组件的好处类似于将代码组织成可管理的片段的更一般的最佳实践。它将帮助你理解它们之间的关系，促进重用，并使你的代码更易于理解、维护和扩展。

但是，你如何知道什么应该拆分为组件呢？

这没有硬性规定。有些人更喜欢直观的方法，开始查看标记并在每个似乎具有自己逻辑的组件和子组件周围绘制封装。

其他人借鉴了一些用于创建新函数或对象的技术。其中一种技术是单一职责原则——也就是说，一个组件理想情况下只做一件事。如果它变得越来越庞大，应该将其拆分为更小的子组件。

这两种方法应相互补充，并帮助你决定如何更好地组织你的组件。

最终，我们将应用拆分为以下组件：

- `Alert.svelte`：用于通知已发生的操作的通用通知框。
- `NewTodo.svelte`：允许你输入新的待办事项的文本输入框和按钮。
- `FilterButton.svelte`：允许你对显示的待办事项应用过滤器的 _All_、_Active_ 和 _Completed_ 按钮。
- `TodosStatus.svelte`：显示“x out of y items completed”（已完成 x 个项目中的 y 个）标题。
- `Todo.svelte`：单个待办事项。每个可见的待办事项将在此组件的独立副本中显示。
- `MoreActions.svelte`：允许你在界面底部对待办事项执行批量操作的 _Check All_（全选）和 _Remove Completed_（删除已完成）按钮。

![我们应用程序中组件的图形表示](01-todo-components.png)

在本文中，我们将专注于创建 `FilterButton` 和 `Todo` 组件；我们将在以后的文章中介绍其他组件。

让我们开始吧。

> [!NOTE]
> 在创建我们的前几个组件的过程中，我们还将学习不同的组件间通信技术以及每种技术的优缺点。

## 提取我们的过滤器组件

我们将首先创建 `FilterButton.svelte` 组件。

1. 首先，创建一个新文件 `components/FilterButton.svelte`。
2. 在这个文件中，我们将声明 `filter` 属性，并从 `Todos.svelte` 中复制相关的标记。将以下内容添加到文件中：

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

3. 回到我们的 `Todos.svelte` 组件，我们想要使用我们的 `FilterButton` 组件。首先，我们需要导入它。在 `Todos.svelte` 的 `<script>` 区块的顶部添加以下行：

   ```js
   import FilterButton from "./FilterButton.svelte";
   ```

4. 现在，将 `<div class="filters...` 元素替换为对 `FilterButton` 组件的调用，该组件将当前的过滤器作为属性。以下一行就足够了：

   ```svelte
   <FilterButton {filter} />
   ```

> [!NOTE]
> 请记住，当 HTML 属性名称和变量匹配时，可以用 `{变量}` 来替换它们。这就是为什么我们可以将 `<FilterButton filter={filter} />` 替换为 `<FilterButton {filter} />`。

到目前为止一切顺利！现在让我们试试该应用程序。你会注意到，当你点击过滤器按钮时，它们会被选中，并且样式会相应更新。但是我们有一个问题：待办事项没有被正确过滤。这是因为 `filter` 变量通过属性从 `Todos` 组件向下流动到 `FilterButton` 组件，但是在 `FilterButton` 组件中发生的更改不会向上流回其父组件——默认情况下，数据绑定是单向的。让我们看看解决这个问题的方法。

## 在组件之间共享数据：将处理器作为属性传递

让子组件通知其父组件发生的任何更改的一种方法是将处理器作为属性传递。子组件将执行处理器，并将所需的信息作为参数传递给父组件的处理器，从而修改父组件的状态。

在我们的例子中，`FilterButton` 组件将从其父组件接收一个 `onclick` 处理器。每当用户点击任何过滤器按钮时，子组件将调用 `onclick` 处理器，并将所选的过滤器作为参数传递回其父组件。

我们只需要声明 `onclick` 属性，并分配一个虚拟处理器以防止错误，就像这样：

```js
export let onclick = (clicked) => {};
```

并且我们将声明一个响应式语句 `$: onclick(filter)`，以在更新 `filter` 变量时调用 `onclick` 处理器。

1. 我们的 `FilterButton` 组件的 `<script>` 部分应该如下所示。现在更新它：

   ```js
   export let filter = "all";
   export let onclick = (clicked) => {};
   $: onclick(filter);
   ```

2. 现在，在 `Todos.svelte` 中调用 `FilterButton` 时，我们需要指定处理器。更新如下：

   ```svelte
   <FilterButton {filter} onclick={ (clicked) => filter = clicked }/>
   ```

当点击任何过滤器按钮时，我们只需要用新的过滤器更新 `filter` 变量。现在我们的 `FilterButton` 组件将再次正常工作。

## 使用 bind 指令实现更简单的双向数据绑定

在前面的示例中，我们意识到我们的 `FilterButton` 组件无法正常工作，是因为我们的应用程序状态通过 `filter` 属性从父组件流向子组件，但是无法返回。因此，我们添加了 `onclick` 属性，用于让子组件将新的 `filter` 值传递给父组件。

这种方法可以正常工作，但是 Svelte 提供了一种更简单、更直接的方法来实现双向数据绑定。通常情况下，数据通过属性从父组件向子组件流动。如果我们希望它也能从子组件向父组件流动，我们可以使用 [`bind:` 指令](https://svelte.dev/docs/element-directives#bind-property)。

通过使用 `bind`，我们告诉 Svelte，在 `FilterButton` 组件中对 `filter` 属性进行的任何更改都应该传播回父组件 `Todos`。也就是说，我们将父组件中的 `filter` 变量的值绑定到子组件中的值。

1. 在 `Todos.svelte` 中，将对 `FilterButton` 组件的调用更新如下：

   ```svelte
   <FilterButton bind:filter={filter} />
   ```

   如往常一样，Svelte 为我们提供了一个简洁的写法：`bind:value={value}` 等同于 `bind:value`。因此，在上面的示例中，你可以简单地写成 `<FilterButton bind:filter />`。

2. 子组件现在可以修改父组件的 filter 变量的值，因此我们不再需要 `onclick` 属性。将 `FilterButton` 的 `<script>` 元素修改为以下内容：

   ```svelte
   <script>
     export let filter = "all";
   </script>
   ```

3. 再次尝试你的应用程序，你应该仍然可以看到你的过滤器正常工作。

## 创建我们的 Todo 组件

现在，我们将创建一个 `Todo` 组件，用于封装每个单独的待办事项，包括复选框和一些编辑逻辑，以便你可以更改现有的待办事项。

我们的 `Todo` 组件将接收一个 `todo` 对象作为属性。让我们声明 `todo` 属性并将代码从 `Todos` 组件中移动到其中。暂时，我们将删除对 `removeTodo` 的调用，并替换为一个提示框。稍后我们将重新添加该功能。

1. 创建一个新的组件文件 `components/Todo.svelte`。
2. 将以下内容放入该文件中：

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

3. 现在，我们需要将 `Todo` 组件导入到 `Todos.svelte` 中。现在转到该文件，并在之前的导入语句下面添加以下 `import` 语句：

   ```js
   import Todo from "./Todo.svelte";
   ```

4. 接下来，我们需要更新 `{#each}` 块，以包含每个待办事项的 `<Todo>` 组件，而不是移动到 `Todo.svelte` 的代码。我们还将当前的 `todo` 对象作为一个属性传递给组件。

   将 `Todos.svelte` 中的 `{#each}` 块更新如下：

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

   待办事项列表将显示在页面上，复选框应该可以正常工作（尝试勾选/取消勾选几个，然后观察过滤器是否按预期工作），但是我们的“x out of y items completed”状态标题将不再相应地更新。这是因为我们的 `Todo` 组件通过属性接收待办事项，但没有向其父组件发送任何信息。我们将在以后修复这个问题。

## 在组件之间共享数据：属性向下传递、事件向上传播模式

`bind` 指令非常简单直观，可以让你在父组件和子组件之间共享数据。然而，当应用程序变得更大、更复杂时，便难以跟踪所有绑定的值。另一种方法是使用“属性向下传递、事件向上传播”通信模式。

基本上，该模式依赖于子组件通过属性从父组件接收数据，而父组件通过处理子组件发出的事件来更新其状态。因此，从父组件向子组件*流动*属性，从子组件向父组件*冒泡*事件。这种模式建立了一种可预测且更易于理解的信息双向流动方式。

让我们看看如何使用自定义事件重新实现缺失的*删除*按钮功能。

为了创建自定义事件，我们将使用 `createEventDispatcher` 程序。它将返回一个 `dispatch()` 函数，允许我们发出自定义事件。当你发出一个事件时，你需要传递事件的名称，以及（可选地）包含要传递给每个监听器的附加信息的对象。这些附加数据将在事件对象的 `detail` 属性中。

> [!NOTE]
> Svelte 中的自定义事件与常规 DOM 事件共享相同的 API。此外，你可以通过指定 `on:event` 通过将事件向上传递给父组件，而无需指定处理器。

我们将编辑我们的 `Todo` 组件，以发出一个 `remove` 事件，并传递被删除的待办事项作为附加信息。

1. 首先，在 `Todo` 组件的 `<script>` 部分的顶部添加以下行：

   ```js
   import { createEventDispatcher } from "svelte";
   const dispatch = createEventDispatcher();
   ```

2. 现在，在同一文件的标记部分更新*删除*按钮，如下所示：

   ```svelte
   <button type="button" class="btn btn__danger" on:click={() => dispatch('remove', todo)}>
     Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   使用 `dispatch('remove', todo)`，我们发出 `remove` 事件，并将要删除的 `todo` 作为附加数据传递。处理器将被调用，实参为可用的事件对象，附加数据位于 `event.detail` 属性中。

3. 现在我们要从 `Todos.svelte` 内部监听该事件，并根据情况采取行动。返回到该文件，并像下面这样更新对 `<Todo>` 组件的调用：

   ```svelte
   <Todo {todo} on:remove={(e) => removeTodo(e.detail)} />
   ```

   我们的处理程序接收 `e` 参数（事件对象），如前所述，在 `detail` 属性中保存了要删除的待办事项。

4. 现在，如果你再次尝试应用程序，你应该可以看到*删除*功能现在又正常工作了。所以我们的自定义事件已经按照我们的预期工作。此外，`remove` 事件监听器将数据更改发送回父组件，因此我们的“x out of y items completed”状态标题现在在删除待办事项时会适当地更新。

现在我们将处理 `update` 事件，以便父组件可以收到任何已修改的待办事项的通知。

## 更新待办事项

我们仍然需要实现编辑现有的待办事项的功能。我们将在 `Todo` 组件中包含一个编辑模式。进入编辑模式时，将显示一个 `<input>` 字段，允许我们编辑当前的待办事项名称，并提供两个按钮以确认或取消我们的更改。

### 处理事件

1. 我们需要一个变量来跟踪是否处于编辑模式，另一个变量来存储正在更新的任务的名称。在 `Todo` 组件的 `<script>` 部分底部添加以下变量定义：

   ```js
   let editing = false; // 跟踪编辑模式
   let name = todo.name; // 存储被编辑的待办事项名称
   ```

2. 我们需要决定 `Todo` 组件将发出哪些事件：
   - 我们可以为状态切换和名称编辑分别发出不同的事件（例如 `updateTodoStatus` 和 `updateTodoName`）。
   - 或者我们可以采用更通用的方法，为这两个操作发出一个单独的 `update` 事件。

   我们将采用第二种方法，以便演示一种不同的技术。这种方法的优点是，以后我们可以为待办事项添加更多字段，并且仍然可以使用相同的事件处理所有更新。

   让我们创建 `update()` 函数，该函数将接收更改并发出更新事件，该事件带有修改后的待办事项。再次将以下内容添加到 `<script>` 部分的底部：

   ```js
   function update(updatedTodo) {
     todo = { ...todo, ...updatedTodo }; // 将修改应用于待办事项
     dispatch("update", todo); // 发出更新事件
   }
   ```

   在这里，我们使用了[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)，将修改应用于原始的待办事项。

3. 接下来，我们将创建不同的函数来处理每个用户操作。当待办事项处于编辑模式时，用户可以保存或取消更改。当不在编辑模式时，用户可以删除待办事项、编辑待办事项或在完成和未完成之间切换其状态。

   在之前的函数下面添加以下函数，用于处理这些操作：

   ```js
   function onCancel() {
     name = todo.name; // 将名称恢复为初始值，并
     editing = false; // 退出编辑模式
   }

   function onSave() {
     update({ name }); // 更新待办事项名称
     editing = false; // 退出编辑模式
   }

   function onRemove() {
     dispatch("remove", todo); // 发出删除事件
   }

   function onEdit() {
     editing = true; // 进入编辑模式
   }

   function onToggle() {
     update({ completed: !todo.completed }); // 更新待办事项状态
   }
   ```

### 更新标记

现在我们需要更新 `Todo` 组件的标记，以在适当的操作发生时调用上述函数。

为了处理编辑模式，我们使用了布尔类型的 `editing` 变量。当它为 `true` 时，它应该显示用于编辑待办事项名称的 `<input>` 字段以及 _Cancel_ 和 _Save_ 按钮。当它不处于编辑模式时，它将显示复选框、待办事项名称以及编辑和删除待办事项的按钮。

为了实现这一点，我们将使用 [`if` 块](https://svelte.dev/docs/logic-blocks#if)。`if` 块会根据条件渲染标记。请注意，它不仅仅是根据条件显示或隐藏标记——它会根据条件在 DOM 中动态添加和移除元素。

例如，当 `editing` 为 `true` 时，Svelte 会显示更新表单；当它为 `false` 时，它会将其从 DOM 中移除并添加复选框。由于 Svelte 的响应性，仅仅分配 `editing` 变量的值就足以显示正确的 HTML 元素。

以下是基本的 `if` 块结构示例：

```svelte
<div class="stack-small">
  {#if editing}
  <!-- 用于编辑待办事项的标记：标签、输入文本、取消和保存按钮 -->
  {:else}
  <!-- 用于显示待办事项的标记：复选框、标签、编辑和删除按钮 -->
  {/if}
</div>
```

非编辑部分（即 `if` 块的 `{:else}` 部分（下半部分））与我们在 `Todos` 组件中的部分非常相似。唯一的区别在于，根据用户的操作，我们调用 `onToggle()`、`onEdit()` 和 `onRemove()`。

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

值得注意的是：

- 当用户点击*编辑*按钮时，我们执行 `onEdit()` 函数，该函数将 `editing` 变量设置为 `true`。
- 当用户点击复选框时，我们调用 `onToggle()` 函数，该函数执行 `update()`，并传递一个包含新 `completed` 值的对象作为参数。
- `update()` 函数会发出 `update` 事件，并传递原始待办事项的副本，以及应用的更改。
- 最后，`onRemove()` 函数会发出 `remove` 事件，并将待删除的 `todo` 作为附加数据传递。

编辑界面（上半部分）将包含 `<input>` 字段和两个用于取消或保存更改的按钮：

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

当用户点击*编辑*按钮时，`editing` 变量将被设置为 `true`，然后 Svelte 会从 DOM 中删除 `{:else}` 部分的标记，并将其替换为 `{#if}` 部分的标记。

`<input>` 的 `value` 属性将绑定到 `name` 变量，取消和保存更改的按钮分别调用 `onCancel()` 和 `onSave()`（我们之前添加了这些函数）：

- 当调用 `onCancel()` 时，`name` 将恢复为其原始值（当作为属性传递时），并且我们退出编辑模式（通过将 `editing` 设置为 `false`）。
- 当调用 `onSave()` 时，我们运行 `update()` 函数，将修改后的 `name` 传递给它，并退出编辑模式。

我们还借助 `disabled={!name}` 属性以在 `<input>` 为空时禁用*保存*按钮，并允许用户使用 <kbd>Escape</kbd> 键取消编辑，如下所示：

```plain
on:keydown={(e) => e.key === 'Escape' && onCancel()}
```

我们还使用 `todo.id` 为新的输入控件和标签创建唯一的 id。

1. 我们的 `Todo` 组件的完整更新标记如下。现在请更新你的标记：

   ```svelte
   <div class="stack-small">
   {#if editing}
     <!-- 用于编辑待办事项的标记：标签、输入文本、取消和保存按钮 -->
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
     <!-- 用于显示待办事项的标记：复选框、标签、编辑和删除按钮 -->
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
   > 我们可以进一步将其拆分为两个不同的组件，一个用于编辑待办事项，另一个用于显示待办事项。最终，这取决于你是否对在单个组件中处理这种复杂性感到舒适。你还应考虑进一步拆分的话，是否能够在其他的上下文中重用此组件。

2. 要使更新功能起作用，我们必须在 `Todos` 组件 中处理 `update` 事件。在 `Todos` 组件的 `<script>` 部分中添加以下处理器：

   ```js
   function updateTodo(todo) {
     const i = todos.findIndex((t) => t.id === todo.id);
     todos[i] = { ...todos[i], ...todo };
   }
   ```

   我们通过 `id` 在 `todos` 数组中找到相应的 `todo`，并使用展开语法更新其内容。在这种情况下，我们也可以只使用 `todos[i] = todo`，但这种实现更加健壮，允许 `Todo` 组件仅返回待办事项的更新部分。

3. 接下来，我们需要在 `<Todo>` 组件调用中监听 `update` 事件，并在发生此事件时运行 `updateTodo()` 函数来更改 `name` 和 `completed` 状态。更新你的 \<Todo> 调用如下：

   ```svelte
   {#each filterTodos(filter, todos) as todo (todo.id)}
   <li class="todo">
     <Todo {todo} on:update={(e) => updateTodo(e.detail)} on:remove={(e) =>
     removeTodo(e.detail)} />
   </li>
   ```

4. 再次尝试你的应用程序，你将看到你可以删除、添加、编辑、取消编辑和切换待办事项的完成状态。当待办事项完成时，“x out of y items completed”的状态标题将相应更新。

正如你所见，在 Svelte 中实现“属性向下传递、事件向上传播”模式很容易。尽管如此，对于简单的组件，`bind` 可能是一个不错的选择；Svelte 允许你自由选择。

> [!NOTE]
> Svelte 提供了更高级的机制来在组件之间共享信息：[Context API](https://svelte.dev/docs/svelte#setcontext) 和 [Store](https://svelte.dev/docs/svelte-store)。Context API 提供了一种机制，使组件及其后代组件能够在不传递数据和函数作为属性或分发大量事件的情况下进行通信。Store 允许你在不具有层次关系的组件之间共享响应式数据。我们将在本系列的后续内容中介绍 Store。

## 到目前为止的代码

### Git

要查看代码在本文末尾应该是什么样子的状态，可以按如下方式访问我们仓库的副本：

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

或直接下载文件夹的内容：

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

记得运行 `npm install && npm run dev` 以在开发模式下启动应用程序。

### REPL

要在 REPL 中查看代码的当前状态，请访问：

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## 总结

现在，我们已经完成了应用程序所需的所有功能。我们可以显示、添加、编辑和删除待办事项，将它们标记为已完成，并按状态进行筛选。

在本文中，我们涵盖了以下主题：

- 将功能提取到新组件中
- 使用作为属性接收到的处理程序将信息从子组件传递到父组件
- 使用 `bind` 指令将信息从子组件传递到父组件
- 使用 `if` 块有条件地渲染标记块
- 实现“属性向下传递、事件向上传播”通信模式
- 创建和监听自定义事件

在下一篇文章中，我们将继续将我们的应用程序组件化，并了解一些在处理 DOM 方面的高级技巧。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props","Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}
