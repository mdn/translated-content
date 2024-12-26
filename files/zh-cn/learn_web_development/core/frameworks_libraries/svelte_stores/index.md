---
title: 使用 Svelte store
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_stores
original_slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores
l10n:
  sourceCommit: e9be22eaa7416206e3f263a058f0d509a7f81f88
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

在上一篇文章中，我们完成了应用程序的开发，将其组织为组件，并讨论了一些处理响应式、处理 DOM 节点以及暴露组件功能的高级技术。在本文中，我们将展示另一种在 Svelte 中处理状态管理的方式：[store](https://learn.svelte.dev/tutorial/writable-stores)。store 是全局数据存储库，用于保存值。组件可以订阅 store 并在其值发生变化时接收通知。

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
          语言，并且了解<a
            href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >终端/命令行</a
          >的使用方法。
        </p>
        <p>
          你需要安装了 node 和 npm 的终端，以编译和构建你的应用程序。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习如何使用 Svelte store</td>
    </tr>
  </tbody>
</table>

我们将使用 store，创建名为 `Alert` 的组件，用于在屏幕上显示通知。这个组件可以从任何组件中接收消息。在这种情况下，`Alert` 组件是独立于其他组件的——它不是任何其他组件的父组件或子组件，因此消息不符合组件层次结构。

我们还将看到如何开发自己的自定义 store，将待办事项信息持久化到 [Web 存储](/zh-CN/docs/Web/API/Web_Storage_API)中，使我们的待办事项在页面重新加载后保持不变。

## 与我们一起编写代码

### Git

使用以下命令克隆 GitHub 仓库（如果尚未完成）：

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

然后进入当前应用程序状态的目录：

```bash
cd mdn-svelte-tutorial/06-stores
```

或者直接下载文件夹的内容：

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

记得运行 `npm install && npm run dev` 以开发模式启动应用程序。

### REPL

要使用 REPL 和我们一起编写程序代码，点击如下链接：

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## 处理应用程序状态

我们已经学习如何使用属性、双向数据绑定和事件在组件之间进行通信。在所有这些情况下，我们处理的都是父子组件之间的通信。

但并不是所有的应用程序状态都应该放在应用程序的组件层次结构中。例如，关于已登录用户的信息，或者是否选择了深色主题。

有时，你的应用程序状态需要被多个没有层次关系的组件访问，或者被常规的 JavaScript 模块访问。

此外，当你的应用程序变得复杂，组件层次结构变得复杂时，组件之间传递数据可能变得非常困难。在这种情况下，转向全局数据存储可能是一个不错的选择。如果你已经使用过 [Redux](https://redux.js.org/) 或 [Vuex](https://vuex.vuejs.org/)，那么你应该很熟悉这种存储方式。Svelte store 提供了类似的状态管理特性。

store 是带有 `subscribe()` 方法的对象，允许感兴趣的一方在它的值变化时得到通知，并且还可以有一个可选的 `set()` 方法，用于设置 store 的新值。这套最小化的 API 被称为 [store 合约](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract)。

svelte 在 `svelte/store` 模块中提供了创建[可读](https://svelte.dev/docs/svelte-store#readable)、[可写](https://svelte.dev/docs/svelte-store#writable)和[派生](https://svelte.dev/docs/svelte-store#derived) store 的函数。

svelte 还提供了一种非常直观的将 store 集成到其响应式系统中的方式：[响应式 `$store` 语法](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values)。如果你按照 store 合约创建自己的 store，你将获得这种响应式的语法糖而无需多余代码。

## 创建 Alert 组件

为了展示如何使用 store，我们将创建 `Alert` 组件。这种小部件也被称为弹出通知、吐司提示或者提示气泡。

我们的 `Alert` 组件将由 `App` 组件显示，但任何组件都可以向其发送通知。每当有通知到达时，`Alert` 组件将负责在屏幕上显示它。

### 创建 store

让我们从创建一个可写 store 开始。任何组件都可以向这个 store 写入数据，`Alert` 组件将订阅它，并在 store 修改时显示消息。

1. 在你的 `src` 目录下创建一个名为 `stores.js` 的新文件。
2. 向新文件填入以下内容：

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> store 可以在 Svelte 组件之外定义和使用，所以你可以按照自己的方式组织它们。

在上面的代码中，我们从 `svelte/store` 导入 `writable()` 函数，并使用它创建了名为 `alert` 的新 store，初始值为“Welcome to the to-do list app!”（欢迎来到待办事项列表应用程序！）。然后我们通过 `export` 导出该 store。

### 创建实际的组件

现在让我们创建 `Alert` 组件，并看看如何从 store 中读取值。

1. 创建名为 `src/components/Alert.svelte` 的新文件。
2. 向新文件填充以下内容：

   ```svelte
   <script>
     import { alert } from '../stores.js'
     import { onDestroy } from 'svelte'

     let alertContent = ''

     const unsubscribe = alert.subscribe((value) => alertContent = value)

     onDestroy(unsubscribe)
   </script>

   {#if alertContent}
   <div on:click={() => alertContent = ''}>
     <p>{ alertContent }</p>
   </div>
   {/if}

   <style>
   div {
     position: fixed;
     cursor: pointer;
     margin-right: 1.5rem;
     margin-left: 1.5rem;
     margin-top: 1rem;
     right: 0;
     display: flex;
     align-items: center;
     border-radius: 0.2rem;
     background-color: #565656;
     color: #fff;
     font-weight: 700;
     padding: 0.5rem 1.4rem;
     font-size: 1.5rem;
     z-index: 100;
     opacity: 95%;
   }
   div p {
     color: #fff;
   }
   div svg {
     height: 1.6rem;
     fill: currentcolor;
     width: 1.4rem;
     margin-right: 0.5rem;
   }
   </style>
   ```

让我们逐步详细解析这段代码。

- 首先，我们导入了名为 `alert` 的 store。
- 接下来，我们导入了 `onDestroy()` 生命周期函数，它允许我们在组件卸载后执行回调函数。
- 然后，我们创建了名为 `alertContent` 的局部变量。请记住，我们可以从标记中访问顶层变量，并且每当它们被修改时，DOM 会相应地更新。
- 然后，我们调用了 `alert.subscribe()` 方法，并将回调函数作为参数传递给它。每当 store 的值发生变化时，回调函数将被调用，并将新值作为参数传递给它。在回调函数中，我们只是将接收到的值赋给局部变量，这将触发组件 DOM 的更新。
- `subscribe()` 方法还返回清理函数，用于释放订阅。因此，我们在组件初始化时订阅，在组件卸载时使用 `onDestroy` 取消订阅。
- 最后，我们在标记中使用了 `alertContent` 变量，如果用户点击警告，它会被清除。
- 最后，我们包含了一些 CSS 代码来为我们的 `Alert` 组件设置样式。

这个设置允许我们以响应式的方式使用 store。当 store 的值发生变化时，回调函数会被执行。在回调函数中，我们为局部变量赋予一个新值，通过 Svelte 的响应式，我们的标记和响应式依赖项都会相应地更新。

### 使用组件

现在让我们使用组件。

1. 在 `App.svelte` 中，我们将导入这个组件。在现有的导入语句下面添加以下导入语句：

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. 然后在 `Todos` 调用的上方调用 `Alert` 组件，如下所示：

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. 现在加载你的测试应用程序，你应该在屏幕上看到 `Alert` 消息。你可以点击它来关闭。

   ![屏幕右上角显示简单的通知，内容为“Welcome to the to-do list app”](01-alert-message.png)

## 使用响应式的 `$store` 语法使 store 具有响应式

这种方法能够工作，但每次想要订阅 store 时，都需要复制和粘贴所有这些代码：

```svelte
<script>
  import myStore from "./stores.js";
  import { onDestroy } from "svelte";

  let myStoreContent = "";

  const unsubscribe = myStore.subscribe((value) => (myStoreContent = value));

  onDestroy(unsubscribe);
</script>

{myStoreContent}
```

这对于 Svelte 来说太繁琐了！作为一个编译器，Svelte 提供了很多的资源来简化我们的工作。在这种情况下，Svelte 提供了响应式的 `$store` 语法，也称为自动订阅。简单来说，你只需在 store 前加上 `$` 符号，Svelte 就会自动生成使其具有响应式的代码。因此，我们之前的代码块可以替换为以下内容：

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

然后 `$myStore` 将完全具有响应式。这也适用于自定义的 store。如果你实现了 `subscribe()` 和 `set()` 方法（稍后我们将介绍），响应式的 `$store` 语法也将适用于你的 store。

1. 让我们将这个方法应用到 `Alert` 组件上。将 `Alert.svelte` 的 `<script>` 和标记部分更新如下：

   ```svelte
   <script>
     import { alert } from '../stores.js'
   </script>

   {#if $alert}
   <div on:click={() => $alert = ''}>
     <p>{ $alert }</p>
   </div>
   {/if}
   ```

2. 再次检查你的应用程序，你会发现它的效果与之前的一样。这样好多了！

在幕后，Svelte 已经生成了代码来声明局部变量 `$alert`，订阅名为 `alert` 的 store，在 store 的内容修改时更新 `$alert`，以及在组件卸载时取消订阅。每当我们将新值赋给 `$alert` 时，它还会生成 `alert.set()` 语句。

这个巧妙的技巧的最终结果是，你可以像使用响应式的局部变量一样轻松地访问全局的 store。

这是一个完美的例子，展示了 Svelte 如何通过编译器来提供更好的开发者体验，不仅节省了我们输入样板代码的时间，还生成了更不容易出错的代码。

## 写入 store

要写入存储库，只需要导入它并执行 `$store = '新值'`。让我们在 `Todos` 组件中使用它。

1. 在现有的导入语句下面，添加以下 `import` 语句：

   ```js
   import { alert } from "../stores.js";
   ```

2. 将你的 `addTodo()` 函数更新如下：

   ```js
   function addTodo(name) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
     $alert = `Todo '${name}' has been added`;
   }
   ```

3. 将 `removeTodo()` 更新如下：

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // 给状态标题设置焦点
     $alert = `Todo '${todo.name}' has been deleted`;
   }
   ```

4. 将 `updateTodo()` 函数更新为以下内容：

   ```js
   function updateTodo(todo) {
     const i = todos.findIndex((t) => t.id === todo.id);
     if (todos[i].name !== todo.name)
       $alert = `todo '${todos[i].name}' has been renamed to '${todo.name}'`;
     if (todos[i].completed !== todo.completed)
       $alert = `todo '${todos[i].name}' marked as ${
         todo.completed ? "completed" : "active"
       }`;
     todos[i] = { ...todos[i], ...todo };
   }
   ```

5. 在以 `let filter = 'all'` 开头的代码块下面，添加以下响应式块：

   ```js
   $: {
     if (filter === "all") {
       $alert = "Browsing all to-dos";
     } else if (filter === "active") {
       $alert = "Browsing active to-dos";
     } else if (filter === "completed") {
       $alert = "Browsing completed to-dos";
     }
   }
   ```

6. 最后，更新 `const checkAllTodos` 和 `const removeCompletedTodos` 代码块如下：

   ```js
   const checkAllTodos = (completed) => {
     todos = todos.map((t) => ({ ...t, completed }));
     $alert = `${completed ? "Checked" : "Unchecked"} ${todos.length} to-dos`;
   };
   const removeCompletedTodos = () => {
     $alert = `Removed ${todos.filter((t) => t.completed).length} to-dos`;
     todos = todos.filter((t) => !t.completed);
   };
   ```

7. 基本上，我们导入了 store 并在每个事件上更新它，这导致每次显示一个新的提示。再次查看你的应用程序，并尝试添加/删除/更新一些待办事项！

一旦我们执行 `$alert = …`，Svelte 将运行 `alert.set()`。我们的 `Alert` 组件（就像订阅 alert store 的每个组件一样）在 alert store 赋新值时将收到通知，并且由于 Svelte 的响应式，其标记将被更新。

我们可以在任何组件或 `.js` 文件中执行相同的操作。

> [!NOTE]
> 在 Svelte 组件之外，你不能使用 `$store` 语法。这是因为 Svelte 编译器不会触及 Svelte 组件之外的任何内容。在这种情况下，你需要依赖于 `store.subscribe()` 和 `store.set()` 方法。

## 改进我们的 Alert 组件

每次都需要点击提示才能将其关闭有些烦人。最好的方式是在几秒钟后自动消失。

让我们看看如何实现此功能。我们将指定一个属性来表示清除通知之前等待的毫秒数，然后我们将定义一个超时来移除提示。我们还要确保在 `Alert` 组件卸载时清除超时，以防止内存泄漏。

1. 将 `Alert.svelte` 组件的 `<script>` 部分更新如下：

   ```js
   import { onDestroy } from "svelte";
   import { alert } from "../stores.js";

   export let ms = 3000;
   let visible;
   let timeout;

   const onMessageChange = (message, ms) => {
     clearTimeout(timeout);
     if (!message) {
       // 如果消息为空，则隐藏提示
       visible = false;
     } else {
       visible = true; // 显示提示
       if (ms > 0) timeout = setTimeout(() => (visible = false), ms); // 并在 ms 毫秒后隐藏
     }
   };
   $: onMessageChange($alert, ms); // 每当 alert store 或 ms 属性发生变化时运行 onMessageChange

   onDestroy(() => clearTimeout(timeout)); // 确保我们清除超时
   ```

2. 将 `Alert.svelte` 中的标记部分更新如下：

   ```svelte
   {#if visible}
   <div on:click={() => visible = false}>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
     <p>{ $alert }</p>
   </div>
   {/if}
   ```

这里我们首先创建了默认值为 3000（毫秒）的属性 `ms`。然后，我们创建了 `onMessageChange()` 函数，它负责控制 Alert 是否可见。通过 `$: onMessageChange($alert, ms)`，我们告诉 Svelte 在 `$alert` store 或 `ms` 属性发生变化时运行此函数。

每当 `$alert` store 发生变化时，我们将清除任何等待的超时。如果 `$alert` 为空，我们将 `visible` 设置为 `false`，之后 `Alert` 会被从 DOM 中删除。如果不为空，我们将 `visible` 设置为 `true`，并使用 `setTimeout()` 函数以在 `ms` 毫秒后清除提示。

最后，使用 `onDestroy()` 生命周期函数，确保调用 `clearTimeout()` 函数。

我们还在提示段落上方添加了 SVG 图标，使其看起来更漂亮。再次尝试一下，你应该会看到这些更改。

## 使我们的 Alert 组件具有无障碍性

我们的 `Alert` 组件工作得很好，但对辅助技术来说并不友好。问题在于页面上动态添加和删除的元素。虽然对于能看到页面的用户来说很明显，但对于使用辅助技术（如屏幕阅读器）的用户来说可能不太明显。为了处理这些情况，我们可以利用 [ARIA 实时区域](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)，它提供了以编程方式公开动态内容更改的方法，以便辅助技术可以检测并宣布这些更改。

我们可以使用 `aria-live` 属性和礼让设置（politeness setting）来声明包含动态内容的区域，以便辅助技术可以宣布它们。礼让设置用于设置屏幕阅读器处理该区域更新的优先级。可能的设置有 `off`、`polite` 或 `assertive`。

对于常见情况，你还可以使用几个预定义的专门的 `role` 值，如 `log`、`status` 和 `alert`。

在我们的情况下，只需将 `role="alert"` 添加到 `<div>` 容器中，就可以解决问题，如下所示：

```svelte
<div role="alert" on:click={() => visible = false}>
```

通常情况下，使用屏幕阅读器测试应用程序是一个好主意，不仅可以发现可访问性问题，还可以熟悉视觉障碍人士如何使用 Web。你有几个选项，例如 Windows 上的 [NVDA](https://www.nvaccess.org/)、Chrome 上的 [ChromeVox](https://support.google.com/chromebook/answer/7031755)、Linux 上的 [Orca](https://wiki.gnome.org/Projects/Orca)、macOS 和 iOS 上的 [VoiceOver](https://www.apple.com/accessibility/vision/)，以及其他选项。

要了解有关检测和修复无障碍问题的更多信息，请查看我们的[解决常见的无障碍问题](/zh-CN/docs/Learn_web_development/Core/Accessibility/Tooling)文章。

## 使用 store 合约持久化我们的待办事项

我们的小应用程序可以轻松地管理我们的待办事项，但如果在重新加载时总是获得同样的硬编码待办事项列表，那就没有什么用了。为了使其真正有用，我们必须找到一种持久化我们的待办事项的方法。

首先，我们需要使 `Todos` 组件能够将更新后的待办事项返回给其父组件。我们可以通过发出带有待办事项列表的更新事件来实现，但仅将 `todos` 变量绑定起来就够了。让我们打开 `App.svelte` 并尝试一下。

1. 首先，在 `todos` 数组的下面添加以下行：

   ```js
   $: console.log("todos", todos);
   ```

2. 接下来，将 `Todos` 组件的调用更新如下：

   ```svelte
   <Todos bind:todos />
   ```

   > **备注：** `<Todos bind:todos />` 只是 `<Todos bind:todos={todos} />` 的简写形式。

3. 返回到你的应用程序，尝试添加一些待办事项，然后转到开发者工具的 Web 控制台。你会看到，我们对待办事项进行的每个修改都会通过 `bind` 指令反映在 `App.svelte` 中定义的 `todos` 数组中。

现在我们需要找到一种方法来持久化这些待办事项。我们可以在 `App.svelte` 组件中实现一些代码，将待办事项读取并保存到 [Web 存储](/zh-CN/docs/Web/API/Web_Storage_API)或 Web 服务中。但是，如果我们能开发出通用的存储机制来保存其内容，岂不是更好？这样我们就可以像使用其他存储一样使用它，并将持久化机制进行抽象。我们可以创建一个将内容同步到 Web 存储的 store，然后再开发另一个与 Web 服务同步的 store。在它们之间进行切换将变得非常简单，而且不需要修改 `App.svelte` 的任何代码。

### 保存待办事项

让我们首先使用常规的可写 store 来保存我们的待办事项。

1. 打开 `stores.js` 文件，在现有存储下面添加以下存储：

   ```js
   export const todos = writable([]);
   ```

2. 这很简单。现在我们需要导入该 store 并在 `App.svelte` 中使用它。只需记住，现在要访问待办事项，我们需要使用 `$todos` 以及响应式的 `$store` 语法。

   更新你的 `App.svelte` 文件如下：

   ```svelte
   <script>
     import Todos from "./components/Todos.svelte";
     import Alert from "./components/Alert.svelte";

     import { todos } from "./stores.js";

     $todos = [
       { id: 1, name: "Create a Svelte starter app", completed: true },
       { id: 2, name: "Create your first component", completed: true },
       { id: 3, name: "Complete the rest of the tutorial", completed: false }
     ];
   </script>

   <Alert />
   <Todos bind:todos={$todos} />
   ```

3. 尝试一下，一切应该正常工作。接下来，我们将看到如何定义自己的自定义存储。

### 如何实现 store 合约：理论

你可以通过实现 store 合约来创建自己的 store，而无需依赖于 `svelte/store`。它必须按照以下方式工作：

1. store 必须包含 `subscribe()` 方法，该方法必须接受订阅函数作为参数。每当 store 的值发生更改时，必须调用所有订阅函数。
2. `subscribe()` 方法必须返回 `unsubscribe()` 函数，当调用 `unsubscribe()` 函数时，必须停止订阅。
3. store 可以选择包含 `set()` 方法，该方法必须接受 store 的新值作为参数，并同步调用所有订阅函数。具有 `set()` 方法的 store 称为可写 store。

首先，让我们向 `App.svelte` 组件添加以下 `console.log()` 语句，以查看 `todos` store 及其内容的工作情况。将这些行添加到 `todos` 数组的下方：

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

现在运行应用程序，你将在 Web 控制台中看到类似于以下内容：

![在 Web 控制台中显示 todos store 的函数和内容](02-svelte-store-in-action.png)

如你所见，我们的 store 只是一个包含 `subscribe()`、`set()` 和 `update()` 方法的对象，而 `$todos` 则是我们的待办事项数组。

以下是一个（从头开始实现的）基本的可工作的 store：

```js
export const writable = (initial_value = 0) => {
  let value = initial_value; // store 的内容
  let subs = []; // 订阅者的处理器

  const subscribe = (handler) => {
    subs = [...subs, handler]; // 将处理器添加到订阅者数组中
    handler(value); // 用当前值调用处理函数
    return () => (subs = subs.filter((sub) => sub !== handler)); // 返回取消订阅的函数
  };

  const set = (new_value) => {
    if (value === new_value) return; // 相同的值，退出
    value = new_value; // 更新值
    subs.forEach((sub) => sub(value)); // 更新订阅者
  };

  const update = (update_fn) => set(update_fn(value)); // 更新函数

  return { subscribe, set, update }; // 存储器的接口
};
```

在这里，我们声明了 `subs`，它是订阅者数组。在 `subscribe()` 方法中，我们将处理器添加到 `subs` 数组中，并返回一个在执行时会从数组中删除该处理处理器的函数。

当我们调用 `set()` 时，我们更新 store 的值并将新值作为参数来调用每个处理器。

通常情况下，你不需要从头开始实现 store；相反，你可以使用可写 store 来创建具有特定逻辑的[自定义 store](https://learn.svelte.dev/tutorial/custom-stores)。在以下示例中，我们创建了计数器 store，它只允许我们将计数器加一或重置其值：

```js
import { writable } from "svelte/store";
function myStore() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    addOne: () => update((n) => n + 1),
    reset: () => set(0),
  };
}
```

如果我们的待办事项列表应用程序变得太复杂，我们可以让待办事项 store 处理所有状态修改。我们可以将所有修改 `todo` 数组的方法（如 `addTodo()`、`removeTodo()` 等）从我们的 `Todos` 组件移动到 store 中。如果有一个集中处理所有状态修改的地方，组件只需调用这些方法来修改应用程序的状态，并以响应式的方式显示 store 暴露的信息。有一个统一的处理状态修改的地方可以更容易地推理状态流并发现问题。

Svelte 不会强制你以特定的方式组织状态管理；它只提供了工具，你可以自由选择如何处理它。

### 实现自定义的待办事项 store

我们的待办事项列表应用程序并不特别复杂，因此我们不会将所有的修改方法移到中心位置。我们将保持它们原样，集中精力将待办事项持久化。

> [!NOTE]
> 如果你正在 Svelte REPL 上遵循本指南进行操作，你将无法完成此步骤。出于安全原因，Svelte REPL 在沙箱环境中工作，不允许你访问 Web 存储，你将收到“The operation is insecure”错误。要跟着完成本部分，你需要克隆存储库并转到 `mdn-svelte-tutorial/06-stores` 文件夹，或者你可以使用 `npx degit opensas/mdn-svelte-tutorial/06-stores` 直接下载该文件夹的内容。

要实现将其内容保存到 Web 存储的自定义 store，我们需要一个执行以下操作的可写 store：

- 最初从 Web 存储中读取值，如果不存在，则使用默认值进行初始化
- 每当值被修改时，更新 store 本身和本地存储中的数据

此外，由于 Web 存储只支持保存字符串值，我们需要在保存时将对象转换为字符串，加载值时再进行相反操作。

1. 在你的 `src` 目录中创建名为 `localStore.js` 的新文件。
2. 将以下内容添加到该文件中：

   ```js
   import { writable } from "svelte/store";

   export const localStore = (key, initial) => {
     // 接收本地存储的键和初始值

     const toString = (value) => JSON.stringify(value, null, 2); // 辅助函数
     const toObj = JSON.parse; // 辅助函数

     if (localStorage.getItem(key) === null) {
       // 本地存储中不存在该项
       localStorage.setItem(key, toString(initial)); // 使用初始值初始化本地存储
     }

     const saved = toObj(localStorage.getItem(key)); // 转换为对象

     const { subscribe, set, update } = writable(saved); // 创建底层的可写 store

     return {
       subscribe,
       set: (value) => {
         localStorage.setItem(key, toString(value)); // 也将其作为字符串保存到本地存储中
         return set(value);
       },
       update,
     };
   };
   ```

   - 我们的 `localStore` 是一个函数，当执行时，它会从 Web 存储中读取其内容，并返回带有三个方法的对象：`subscribe()`、`set()` 和 `update()`。
   - 当我们创建新的 `localStore` 时，我们需要指定 Web 存储的键和初始值。然后我们检查该值是否存在于 Web 存储中，如果不存在，则创建它。
   - 我们使用 [`localStorage.getItem(key)`](/zh-CN/docs/Web/API/Storage/getItem) 和 [`localStorage.setItem(key, value)`](/zh-CN/docs/Web/API/Storage/setItem) 方法来读取和写入 Web 存储中的信息，使用 [`toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 和 `toObj()`（使用 [`JSON.parse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)）辅助函数来转换值。
   - 接下来，我们将从 Web 存储中接收到的字符串内容转换为对象，并将该对象保存在我们的 store 中。
   - 最后，每当我们更新 store 的内容时，我们也会更新 Web 存储，Web 存储的新值为 store 的内容转换成的字符串。

   请注意，我们只需要重新定义 `set()` 方法，添加将值保存到 Web 存储的操作。其余的代码主要是初始化和转换相关的工作。

3. 现在，我们将在 `stores.js` 中使用本地存储来创建我们的本地持久化的待办事项 store。

   更新 `stores.js` 如下所示：

   ```js
   import { writable } from "svelte/store";
   import { localStore } from "./localStore.js";

   export const alert = writable("Welcome to the to-do list app!");

   const initialTodos = [
     { id: 1, name: "Visit MDN web docs", completed: true },
     { id: 2, name: "Complete the Svelte Tutorial", completed: false },
   ];

   export const todos = localStore("mdn-svelte-todo", initialTodos);
   ```

   通过使用 `localStore('mdn-svelte-todo', initialTodos)`，我们配置 store 将数据保存在 Web 存储中的键 `mdn-svelte-todo` 下。我们还设置了一些待办事项作为初始值。

4. 现在让我们删除 `App.svelte` 中硬编码的待办事项。更新它的内容如下所示。我们基本上只是删除了 `$todos` 数组和 `console.log()` 语句：

   ```svelte
   <script>
     import Todos from './components/Todos.svelte'
     import Alert from './components/Alert.svelte'

     import { todos } from './stores.js'
   </script>

   <Alert />
   <Todos bind:todos={$todos} />
   ```

   > [!NOTE]
   > 这是我们为了使用自定义存储所必须进行的唯一更改。`App.svelte` 完全不需要知道我们使用哪种类型的 store。

5. 现在再次运行你的应用程序。创建一些待办事项，然后关闭浏览器。你甚至可以停止 Svelte 服务器并重新启动它。当你重新访问该 URL 时，你的待办事项仍将存在。
6. 你还可以在开发者工具的控制台中进行检查。在 Web 控制台中，输入命令 `localStorage.getItem('mdn-svelte-todo')`。对应用程序进行一些更改，比如按下“全部取消”按钮，然后再次检查 Web 存储的内容。你将会看到类似以下的内容：

   ![带有 Web 控制台视图的待办事项应用程序，显示当在应用程序中更改待办事项时，相应的条目也在 Web 存储中更改](03-persisting-todos-to-local-storage.png)

Svelte store 提供了一种非常简单、轻量但功能强大的方式，以响应式的方式处理来自全局数据存储的复杂应用程序状态。由于 Svelte 会编译我们的代码，它可以提供 [`$store` 自动订阅语法](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values)，使我们可以通过与本地变量相同的方式处理存储。由于 store 具有很简单的 API，因此创建我们自己的自定义 store 来抽象 store 本身的内部工作方式非常简单。

## 彩蛋：过渡效果

现在让我们来做点有趣而不同寻常的事情：给我们的警告信息添加动画效果。Svelte 提供了一个完整的模块来定义[过渡效果](https://learn.svelte.dev/tutorial/transition)和[动画效果](https://learn.svelte.dev/tutorial/animate)，以使我们的用户界面更具吸引力。

通过使用 [transition:fn](https://svelte.dev/docs/element-directives#transition-fn)指令来应用过渡效果，当元素由于状态变化而进入或离开 DOM 时，过渡效果将被触发。`svelte/transition` 模块导出了七个函数：`fade`、`blur`、`fly`、`slide`、`scale`、`draw` 和 `crossfade`。

让我们给 `Alert` 组件添加一个 fly 过渡效果。我们将打开 `Alert.svelte` 文件，并从 `svelte/transition` 模块中导入 `fly` 函数。

1. 将以下 `import` 语句放在现有的导入语句下面：

   ```js
   import { fly } from "svelte/transition";
   ```

2. 要使用它，将打开的 `<div>` 标签更新如下：

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly
   >
   ```

   过渡效果还可以接收参数，例如：

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly="\{{delay: 250, duration: 300, x: 0, y: -100, opacity: 0.5}}"
   >
   ```

   > [!NOTE]
   > 双花括号不是特殊的 Svelte 语法。它只是将字面的 JavaScript 对象作为参数传递给 fly 过渡效果。

3. 再次尝试你的应用程序，你会发现通知现在看起来更具吸引力了一些。

> [!NOTE]
> 作为编译器，Svelte 可以通过排除未使用的特性来优化我们的打包文件大小。在这种情况下，如果我们使用 `npm run build` 为生产环境编译应用，我们的 `public/build/bundle.js` 文件的大小将略小于 22 KB。如果我们移除 `transitions:fly` 指令，Svelte 会聪明地意识到 `fly` 函数未被使用，`bundle.js` 文件的大小将降至仅为 18 KB。

这只是冰山一角。Svelte 提供了许多处理动画和过渡效果的选项。Svelte 还支持使用 `in:fn`/`out:fn` 指令在元素添加或从 DOM 中移除时应用不同的过渡效果，并允许你定义自己的[自定义 CSS](https://learn.svelte.dev/tutorial/custom-css-transitions) 和 [JavaScript](https://learn.svelte.dev/tutorial/custom-js-transitions) 过渡效果。它还提供了几个缓动函数，用于指定随时间变化的速率。你可以查看 [ease visualizer](https://svelte.dev/examples/easing) 来探索各种可用的缓动函数。

## 到目前为止的代码

### Git

要查看代码在本文结束时的状态，请按以下方式访问我们仓库的副本：

```bash
cd mdn-svelte-tutorial/07-next-steps
```

或直接下载文件夹的内容：

```bash
npx degit opensas/mdn-svelte-tutorial/07-next-steps
```

记得运行 `npm install && npm run dev` 以以开发模式启动应用程序。

### REPL

要在 REPL 中查看代码的当前状态，请访问：

<https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>

## 总结

在本文中，我们添加了两个新特性：`Alert` 组件和将 `todos` 持久化存储到 Web 存储。

- 这使我们能够展示一些高级的 Svelte 技术。我们开发了 `Alert` 组件，展示了如何使用 store 实现跨组件状态管理。我们还了解了如何自动订阅 store，以无缝地将其与 Svelte 响应式系统集成。
- 然后，我们学习了如何从头开始实现自己的 store，以及如何扩展 Svelte 的可写 store 以将数据持久化存储到 Web 存储中。
- 最后，我们介绍了如何使用 Svelte 的 `transition` 指令在 DOM 元素上实现动画效果。

在下一篇文章中，我们将学习如何为我们的 Svelte 应用程序添加 TypeScript 支持。为了充分利用其所有特性，我们还会将整个应用程序迁移到 TypeScript。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
