---
title: Svelte 对 TypeScript 的支持
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript
l10n:
  sourceCommit: 7ff3d643b325985bf4b4b756a15f2fef347e7e8c
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}

在上一篇文章中，我们学习了 Svelte store 的知识，并且实现了自己的自定义 store 来将应用程序的信息持久化到 Web 存储中。我们还学习了如何使用 transition 指令在 Svelte 中为 DOM 元素实现动画效果。

现在，我们将学习如何在 Svelte 应用程序中使用 TypeScript。首先，我们将了解 TypeScript 是什么以及它能为我们带来什么好处。然后，我们将看看如何配置项目以使用 TypeScript 文件。最后，我们将查看我们的应用程序，并了解我们需要进行哪些修改才能充分利用 TypeScript 的特性。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        <p>建议你至少熟悉核心的 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS</a> 和 <a href="/zh-CN/docs/Learn_web_development/Core/Scripting">JavaScript</a> 语言，并了解<a href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">终端/命令行</a>的知识。</p>
        <p>你需要安装有 Node 和 npm 的终端来编译和构建你的应用程序。</p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习如何在开发 Svelte 应用程序时配置和使用 TypeScript。</td>
    </tr>
  </tbody>
</table>

请注意，我们的应用程序已经完全可用，将其转换为 TypeScript 是完全可选的。对于是否使用 TypeScript，存在不同的意见，在本篇文章中，我们将简要讨论使用 TypeScript 的利弊。即使你不打算采用它，本章的内容也将对你有所帮助，帮助你了解 TypeScript 提供了什么并帮助你做出自己的决定。如果你对 TypeScript 完全不感兴趣，可以跳到下一篇文章，在那里我们将探讨部署 Svelte 应用程序的不同选项、更多资源等内容。

## 与我们一起编写代码

### Git

克隆 GitHub 存储库（如果尚未完成），请使用以下命令：

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

然后运行以下命令以获取当前应用程序状态：

```bash
cd mdn-svelte-tutorial/07-typescript-support
```

或者直接下载文件夹的内容：

```bash
npx degit opensas/mdn-svelte-tutorial/07-typescript-support
```

记得运行 `npm install && npm run dev` 以在开发模式下启动应用程序。

### REPL

很遗憾，[REPL 中目前尚不支持 TypeScript](https://github.com/sveltejs/sites/issues/156)。

## TypeScript：JavaScript 的可选静态类型

[TypeScript](https://www.typescriptlang.org/) 是 JavaScript 的超集，提供了可选的静态类型、类、接口和泛型等特性。TypeScript 的目标是通过其类型系统尽早发现错误，并使 JavaScript 开发更高效。其中一个重要的好处是在你输入代码时，TypeScript 使集成开发环境能够提供更丰富的环境，使发现常见错误更容易。

最重要的是，JavaScript 代码也是有效的 TypeScript 代码；TypeScript 是 JavaScript 的超集。你可以直接将大多数 `.js` 文件重命名为 `.ts` 文件，它们将正常工作。

我们的 TypeScript 代码能够在 JavaScript 可以运行的任何地方运行。这是如何实现的呢？TypeScript 将我们的代码“转译”为原生的 JavaScript。这意味着它解析 TypeScript 代码，并生成等效的原生 JavaScript 代码以供浏览器运行。

> [!NOTE]
> 如果你对 TypeScript 如何将代码转译为 JavaScript 感兴趣，可以查看 [TypeScript 演练场](https://www.typescriptlang.org/play/?target=1&e=4#example/hello-world)。

长期以来，原生 TypeScript 支持一直是 Svelte 呼声最高的特性请求。感谢 Svelte 团队和众多贡献者的辛勤工作，我们现在有了[官方解决方案](https://svelte.dev/blog/svelte-and-typescript)，可以进行测试。在本节中，我们将向你展示如何设置带有 TypeScript 支持的 Svelte 项目，以供尝试使用。

## 为什么要使用 TypeScript？

TypeScript 的主要优势包括：

- 提前发现错误：编译器在编译时检查类型并提供错误报告。
- 可读性：静态类型使代码结构性更强，使其自我说明并更易读。
- 强大的集成开发环境支持：类型信息使代码编辑器和集成开发环境能够提供代码导航、自动补全和更智能的提示等特性。
- 更安全的重构：类型使集成开发环境更了解你的代码，并在重构大量代码时为你提供帮助。
- 类型推断：即使不声明变量类型，也能利用许多 TypeScript 的特性。
- 支持新的和未来的 JavaScript 特性：TypeScript 将许多最新的 JavaScript 特性转译为普通的老式 JavaScript，使你能够在尚未本地支持这些特性的用户代理上使用它们。

TypeScript 也有一些缺点：

- 非真正的静态类型：类型仅在编译时检查，并且在生成的代码中被删除。
- 学习曲线陡峭：尽管 TypeScript 是 JavaScript 的超集而不是全新的语言，但学习曲线相当陡峭，尤其是在你没有任何静态语言（如 Java 或 C＃）的经验的情况下。
- 更多的代码：你需要编写和维护更多的代码。
- 不能替代自动化测试：尽管类型可以帮助你捕捉到几种错误，但 TypeScript 不能真正替代全面的自动化测试套件。
- 冗余代码：使用类型、类、接口和泛型可能导致过度设计的代码库。

似乎有广泛的共识认为，TypeScript 特别适用于大型项目，比如许多开发人员在同一个代码库上工作的情况下。事实上，它确实被一些大型项目使用，如 Angular 2、Vue 3、Ionic、Visual Studio Code、Jest，甚至 Svelte 编译器。尽管如此，一些开发人员甚至喜欢在像我们正在开发的小型项目中使用它。

最终，这取决于你的决定。在接下来的几节中，我们希望为你提供更多信息，以便你做出决策。

## 从头创建 Svelte TypeScript 项目

你可以使用[标准模板](https://github.com/sveltejs/template)开始新的 Svelte TypeScript 项目。你只需要运行以下终端命令（在你存储 Svelte 测试项目的位置运行它们——它会创建一个新的目录）：

```bash
npx degit sveltejs/template svelte-typescript-app

cd svelte-typescript-app

node scripts/setupTypeScript.js
```

这将创建包含 TypeScript 支持的起始项目，然后你可以根据需要进行修改。

然后，你需要让 npm 下载依赖并以开发模式启动项目，就像我们通常做的那样：

```bash
npm install

npm run dev
```

## 向现有的 Svelte 项目添加 TypeScript 支持

要向现有的 Svelte 项目添加 TypeScript 支持，你可以[按照这些说明](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project)进行操作。或者，你可以将 [`setupTypeScript.js`](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js) 文件下载到项目根文件夹内的 `scripts` 文件夹中，然后运行 `node scripts/setupTypeScript.js`。

你甚至可以使用 `degit` 下载该脚本。这将是我们开始将应用程序移植到 TypeScript 所需要的操作。

> [!NOTE]
> 在你开始将其转换为 TypeScript 之前，你可以运行 `npx degit opensas/mdn-svelte-tutorial/07-typescript-support svelte-todo-typescript` 来获取完整的 JavaScript 写的待办事项列表应用程序。

进入项目的根目录并输入以下命令：

```bash
npx degit sveltejs/template/scripts scripts       # 将脚本文件下载到 scripts 文件夹

node scripts/setupTypeScript.js                   # 运行它
# 转换为 TypeScript。
```

你需要重新运行依赖管理器以开始使用。

```bash
npm install                                       # 下载新的依赖项

npm run dev                                       # 以开发模式启动应用程序
```

这些指令适用于任何你想要转换为 TypeScript 的 Svelte 项目。只需注意，Svelte 社区正在不断改进 Svelte 对 TypeScript 的支持，因此你应定期运行 `npm update` 来获取最新的更改。

> [!NOTE]
> 如果你在 Svelte 应用程序中使用 TypeScript 时遇到任何问题，请查看[有关 TypeScript 支持的故障排除/常见问题解答部分](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#troubleshooting--faq)。

我们之前提到过，TypeScript 是 JavaScript 的超集，因此你的应用程序无需修改即可运行。目前，该应用程序仅是启用了 TypeScript 支持的常规 JavaScript 应用程序，而不会利用 TypeScript 提供的任何特性。你现在可以逐步添加类型。

一旦你配置好了 TypeScript，你就可以通过在组件的脚本部分开头添加 `<script lang='ts'>` 来在 Svelte 组件中使用它。要通过常规的 JavaScript 文件使用它，只需将文件扩展名从 `.js` 更改为 `.ts`。你还需要更新所有相应的导入语句，将 `import` 语句中的 `.ts` 文件扩展名删除。

> [!NOTE]
> 如果在 `import` 语句中使用 `.ts` 文件扩展名，TypeScript 会抛出错误，因此如果你有名为 `./foo.ts` 的文件，你必须将其导入为 `"./foo"`。更多信息请参阅 TypeScript 手册中的[捆绑程序、TypeScript 运行时和 Node.js 加载器的模块解析](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-for-bundlers-typescript-runtimes-and-nodejs-loaders)部分。

> [!NOTE]
> [目前尚不支持](https://github.com/sveltejs/svelte/issues/4701)在组件标记部分使用 TypeScript。你需要在标记中使用 JavaScript，并在 `<script lang='ts'>` 部分中使用 TypeScript。

## 使用 TypeScript 改进开发者体验

TypeScript 为代码编辑器和集成开发环境提供了大量信息，使它们能够提供更友好的开发体验。

我们将使用 [Visual Studio Code](https://code.visualstudio.com/) 进行快速测试，以查看编写组件时的自动补全提示和类型检查。

> [!NOTE]
> 如果你不想使用 VS Code，我们还提供了在终端中使用 TypeScript 错误检查的说明，稍后会介绍。

在多个代码编辑器中支持 Svelte 项目的 TypeScript 的工作正在进行中；到目前为止，[Svelte for VS Code 扩展](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)提供了最完整的支持，该扩展由 Svelte 团队开发和维护。该扩展提供类型检查、检查、重构、智能感知、悬停信息、自动补全和其他功能。这种开发者辅助功能是在项目中使用 TypeScript 的另一个好处。

> [!NOTE]
> 确保你正在使用 [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)，而不是已停用的旧版“Svelte”扩展（James Birtles 开发），如果你已安装旧版扩展，应将其卸载并安装官方的 Svelte 扩展。

假设你在 VS Code 应用程序中，在你的项目文件夹的根目录中，键入 `code .`（尾随的点告诉 VS Code 打开当前文件夹）以打开代码编辑器。VS Code 会告诉你有推荐安装的扩展。

![对话框显示此工作区有扩展推荐，包含安装及显示列表选项](01-vscode-extension-recommendations.png)

点击*全部安装*将安装 Svelte for VS Code 扩展。

![Svelte for VS Code 扩展信息](02-svelte-for-vscode.png)

我们还可以看到 `setupTypeScript.js` 文件对我们的项目进行了一些更改。`main.js` 文件已重命名为 `main.ts`，这意味着 VS Code 可以为我们的 Svelte 组件提供悬停信息：

![VS Code 截图显示当鼠标指针悬停在组件上时，会显示提示信息](03-vscode-hints-in-main-ts.png)

我们还可以立即获得类型检查。如果在 `App` 构造函数的选项参数中传递了一个未知属性（例如，拼写错误，如 `traget` 而不是 `target`），TypeScript 会报错：

![在 VS Code 中进行类型检查——App 对象被赋予了未知属性 traget](04-vscode-type-checking-in-main-ts.png)

在 `App.svelte` 组件中，`setupTypeScript.js` 脚本已将 `lang="ts"` 属性添加到 `<script>` 标签中。此外，由于类型推断，在许多情况下，我们甚至不需要指定类型就可以获得代码辅助。例如，如果你向 `Alert` 组件调用中添加 `ms` 属性，TypeScript 会根据默认值推断 `ms` 属性应该是数字：

![VS Code 类型推断和代码提示——ms 变量应该是数字](05-vscode-type-inference-and-code-assistance.png)

如果你传递的不是一个数字，它会报错：

![在 VS Code 中进行类型检查——ms 变量被赋予了非数字类型的值](06-vscode-type-checking-in-components.png)

应用程序模板配置了 `check` 脚本，该脚本对你的代码运行 `svelte-check`。该包允许你从命令行检测通常由代码编辑器显示的错误和警告，这适用于在持续集成（CI）流水线中运行。只需运行 `npm run check` 就会检查未使用的 CSS，并返回 A11y 提示和 TypeScript 编译错误。

在这种情况下，如果你在 VS Code 控制台或终端中运行 `npm run check`，你将遇到以下错误：

![在 VS Code 中运行 check 命令显示类型错误，ms 变量应该被赋予数字](07-vscode-svelte-check.png)

更妙的是，如果你从 VS Code 集成终端运行它（可以使用 <kbd>Ctrl</kbd> + <kbd>\`</kbd> 键盘快捷键打开它），按下 <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> 并单击文件名时，将会跳转到包含错误的行。

你还可以使用 `npm run check -- --watch` 来以观察模式运行 `check` 脚本。在这种情况下，每当你更改任何文件，脚本就会执行。如果你在常规终端中运行此命令，请将其保持在后台运行的单独终端窗口中，以便它可以持续报告错误，而不会干扰其他终端使用。

## 创建自定义类型

TypeScript 支持结构类型。结构类型是一种基于类型成员进行关联的方式，即使你没有明确定义类型。

我们将定义 `TodoType` 类型，以查看 TypeScript 如何在某组件期望类型为 `TodoType` 的内容时，强制任何传递该组件的内容与 `TodoType` 类型在结构上兼容。

1. 在 `src` 文件夹中创建 `types` 文件夹。
2. 在其中添加 `todo.type.ts` 文件。
3. 向 `todo.type.ts` 文件添加以下内容：

   ```ts
   export type TodoType = {
     id: number;
     name: string;
     completed: boolean;
   };
   ```

   > [!NOTE]
   > Svelte 模板使用 [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) 4.0.0 来支持 TypeScript。从该版本开始，你必须使用 `export`/`import` 类型语法来导入类型和接口。更多信息，请查看[故障排除指南的这个部分](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-import-interfaces-into-my-svelte-components-i-get-errors-after-transpilation)。

4. 现在，我们将在 `Todo.svelte` 组件中使用 `TodoType`。首先在 `<script>` 标签中添加 `lang="ts"`。
5. 使用 `import` 导入该类型并将其用于声明 `todo` 属性。将 `export let todo` 行替换为以下内容：

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

   请注意，在 `import` 语句中不允许使用 `.ts` 文件扩展名，并且在以上代码中拓展名已被省略。

6. 现在，在 `Todos.svelte` 里面，在调用 `MoreActions` 组件之前，使用字面对象作为 `Todo` 组件的参数来实例化后者，像这样：

   ```svelte
   <hr />

   <Todo todo={ { name: 'a new task with no id!', completed: false } } />

   <!-- MoreActions -->
   <MoreActions {todos}
   ```

7. 在 `Todos.svelte` 组件的 `<script>` 标签中添加 `lang='ts'`，以便它知道要使用我们指定的类型检查。

   我们将遇到以下错误：

   ![VS Code 中显示了类型错误，Todo 类型对象需要 id 属性。](08-vscode-structural-typing.png)

现在，你应该对 TypeScript 在构建 Svelte 项目的过程中所带来的帮助，有了一定了解。

现在，为了将我们的应用程序迁移到 TypeScript，我们将撤消这些更改，以便不会被检查警告所干扰。

1. 从 `Todos.svelte` 文件中移除有问题的待办事项和 `lang='ts'` 属性。
2. 还要从 `Todo.svelte` 中删除对 `TodoType` 的导入和 `lang='ts'`。

我们稍后会妥善处理它们。

## 将我们的待办事项应用程序迁移到 TypeScript

现在我们要将待办事项应用程序迁移到 TypeScript，以充分利用 TypeScript 的所有特性。

我们从在项目根目录中以监视模式运行检查脚本开始：

```bash
npm run check -- --watch
```

这应该会输出类似以下内容：

```bash
svelte-check "--watch"

Loading svelte-check in workspace: ./svelte-todo-typescript
Getting Svelte diagnostics...
====================================
svelte-check found no errors and no warnings
```

请注意，如果你正在使用像 VS Code 这样的支持 TypeScript 的代码编辑器，将 Svelte 组件进行移植的简单方法是在组件顶部添加 `<script lang='ts'>`，然后查找三个点的提示：

![VS Code 截图显示当你将 type="ts" 添加到组件时，它会给出三个点的提示](09-vscode-alert-hints.png)

### Alert.svelte

让我们从 `Alert.svelte` 组件开始。

1. 在 `Alert.svelte` 组件的 `<script>` 标签中添加 `lang="ts"`。你会在 `check` 脚本的输出中看到一些警告：

   ```bash
   npm run check -- --watch
   ```

   ```plain
   > svelte-check "--watch"

   ./svelte-todo-typescript
   Getting Svelte diagnostics...
   ====================================

   ./svelte-todo-typescript/src/components/Alert.svelte:8:7
   Warn: Variable 'visible' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     let visible

   ./svelte-todo-typescript/src/components/Alert.svelte:9:7
   Warn: Variable 'timeout' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     let timeout

   ./svelte-todo-typescript/src/components/Alert.svelte:11:28
   Warn: Parameter 'message' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
   Change = (message, ms) => {

   ./svelte-todo-typescript/src/components/Alert.svelte:11:37
   Warn: Parameter 'ms' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
   (message, ms) => {
   ```

2. 你可以通过指定相应的类型来解决这些问题，就像这样：

   ```ts
   export let ms = 3000

     let visible: boolean
     let timeout: number

     const onMessageChange = (message: string, ms: number) => {
       clearTimeout(timeout)
       if (!message) {               // 如果 message 为空，则隐藏 Alert
   ```

   > [!NOTE]
   > 不需要使用 `export let ms:number = 3000` 来指定 `ms` 的类型，因为 TypeScript 已经从默认值推断出了它的类型。

### MoreActions.svelte

现在我们将对 `MoreActions.svelte` 组件执行相同的操作。

1. 像之前一样，添加 `lang='ts'` 属性。TypeScript 将会对 `todos` 属性和在 `todos.filter((t) => ...)` 调用中的变量 `t` 发出警告。

   ```plain
   Warn: Variable 'todos' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     export let todos

   Warn: Parameter 't' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     $: completedTodos = todos.filter((t) => t.completed).length
   ```

2. 我们将使用之前定义的 `TodoType` 来告诉 TypeScript `todos` 是 `TodoType` 数组。将 `export let todos` 行替换为以下内容：

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

注意，现在 TypeScript 能够推断出 `todos.filter((t) => t.completed)` 中的变量 `t` 的类型为 `TodoType`。然而，我们可以像这样指定类型，如果这能使代码更易读：

```ts
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

大多数情况下，TypeScript 能够正确推断出响应式变量的类型，但有时在处理响应式赋值时可能会出现“implicitly has an 'any' type”的错误。在这种情况下，你可以在另一个语句中声明变量的类型，例如：

```ts
let completedTodos: number;
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

你不能在响应式赋值语句本身中指定类型。语句 `$: completedTodos: number = todos.filter[...]` 是无效的。更多信息，请阅读[如何在响应式赋值语句中指定类型？/我遇到了“implicitly has type 'any'”错误](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error)。

### FilterButton.svelte

现在我们来处理 `FilterButton` 组件。

1. 和之前的一样，在 `<script>` 标签中添加 `lang='ts'` 属性。注意这里没有出现警告——TypeScript 从默认值中推断出 filter 变量的类型。但是我们知道 filter 只有三个有效值：all、active 和 completed。因此，我们可以通过创建 enum Filter 来告诉 TypeScript 这些值。
2. 在 `types` 文件夹中创建名为 `filter.enum.ts` 的文件。
3. 给它添加以下内容：

   ```ts
   export enum Filter {
     ALL = "all",
     ACTIVE = "active",
     COMPLETED = "completed",
   }
   ```

4. 现在我们将在 `FilterButton` 组件中使用它。将 `FilterButton.svelte` 文件的内容替换为以下内容：

   ```svelte
   <!-- components/FilterButton.svelte -->
   <script lang="ts">
     import { Filter } from "../types/filter.enum";

     export let filter: Filter = Filter.ALL;
   </script>

   <div class="filters btn-group stack-exception">
     <button class="btn toggle-btn" class:btn__primary={filter === Filter.ALL} aria-pressed={filter === Filter.ALL} on:click={()=> filter = Filter.ALL} >
       <span class="visually-hidden">Show</span>
       <span>All</span>
       <span class="visually-hidden">tasks</span>
     </button>
     <button class="btn toggle-btn" class:btn__primary={filter === Filter.ACTIVE} aria-pressed={filter === Filter.ACTIVE} on:click={()=> filter = Filter.ACTIVE} >
       <span class="visually-hidden">Show</span>
       <span>Active</span>
       <span class="visually-hidden">tasks</span>
     </button>
     <button class="btn toggle-btn" class:btn__primary={filter === Filter.COMPLETED} aria-pressed={filter === Filter.COMPLETED} on:click={()=> filter = Filter.COMPLETED} >
       <span class="visually-hidden">Show</span>
       <span>Completed</span>
       <span class="visually-hidden">tasks</span>
     </button>
   </div>
   ```

这里我们只是导入了 `Filter` 枚举并在之前使用字符串值的地方使用它。

### Todos.svelte

我们还将在 `Todos.svelte` 组件中使用 `Filter` 枚举。

1. 首先，像之前一样，为它添加 `lang='ts'` 属性。
2. 接下来，导入 `Filter` 枚举。在现有的 `import` 语句下添加以下 `import` 语句：

   ```js
   import { Filter } from "../types/filter.enum";
   ```

3. 现在，我们将在所有引用当前的 filter 的地方使用它。将两个涉及 filter 的代码块替换为以下内容：

   ```ts
   let filter: Filter = Filter.ALL;
   const filterTodos = (filter: Filter, todos) =>
     filter === Filter.ACTIVE
       ? todos.filter((t) => !t.completed)
       : filter === Filter.COMPLETED
         ? todos.filter((t) => t.completed)
         : todos;

   $: {
     if (filter === Filter.ALL) {
       $alert = "Browsing all todos";
     } else if (filter === Filter.ACTIVE) {
       $alert = "Browsing active todos";
     } else if (filter === Filter.COMPLETED) {
       $alert = "Browsing completed todos";
     }
   }
   ```

4. `Todos.svelte` 中的 `check` 仍然会给我们一些警告。让我们来修复它们。

   首先导入 `TodoType`，然后告诉 TypeScript 我们的 `todos` 变量是一个 `TodoType` 数组。将 `export let todos = []` 替换为以下两行：

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];
   ```

5. 接下来，指定所有缺失的类型。变量 `todoStatus`（我们借助此变量，来以编程的方式访问 `TodosStatus` 组件暴露的方法）的类型是 `TodoStatus`，而每个 `todo` 的类型都为 `TodoType`。

   更新 `<script>` 部分，使其如下所示：

   ```ts
   import FilterButton from "./FilterButton.svelte";
   import Todo from "./Todo.svelte";
   import MoreActions from "./MoreActions.svelte";
   import NewTodo from "./NewTodo.svelte";
   import TodosStatus from "./TodosStatus.svelte";
   import { alert } from "../stores";

   import { Filter } from "../types/filter.enum";

   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];

   let todosStatus: TodosStatus; // 引用 TodoStatus 实例

   $: newTodoId =
     todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

   function addTodo(name: string) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
     $alert = `Todo '${name}' has been added`;
   }

   function removeTodo(todo: TodoType) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // 聚焦状态标题
     $alert = `Todo '${todo.name}' has been deleted`;
   }

   function updateTodo(todo: TodoType) {
     const i = todos.findIndex((t) => t.id === todo.id);
     if (todos[i].name !== todo.name)
       $alert = `todo '${todos[i].name}' has been renamed to '${todo.name}'`;
     if (todos[i].completed !== todo.completed)
       $alert = `todo '${todos[i].name}' marked as ${
         todo.completed ? "completed" : "active"
       }`;
     todos[i] = { ...todos[i], ...todo };
   }

   let filter: Filter = Filter.ALL;
   const filterTodos = (filter: Filter, todos: TodoType[]) =>
     filter === Filter.ACTIVE
       ? todos.filter((t) => !t.completed)
       : filter === Filter.COMPLETED
         ? todos.filter((t) => t.completed)
         : todos;

   $: {
     if (filter === Filter.ALL) {
       $alert = "Browsing all todos";
     } else if (filter === Filter.ACTIVE) {
       $alert = "Browsing active todos";
     } else if (filter === Filter.COMPLETED) {
       $alert = "Browsing completed todos";
     }
   }

   const checkAllTodos = (completed: boolean) => {
     todos = todos.map((t) => ({ ...t, completed }));
     $alert = `${completed ? "Checked" : "Unchecked"} ${todos.length} todos`;
   };
   const removeCompletedTodos = () => {
     $alert = `Removed ${todos.filter((t) => t.completed).length} todos`;
     todos = todos.filter((t) => !t.completed);
   };
   ```

### TodosStatus.svelte

我们在将 `todos` 传给 `TodosStatus.svelte`（和 `Todo.svelte`）组件时遇到了以下错误：

```plain
./src/components/Todos.svelte:70:39
Error: Type 'TodoType[]' is not assignable to type 'undefined'. (ts)
  <TodosStatus bind:this={todosStatus} {todos} />

./src/components/Todos.svelte:76:12
Error: Type 'TodoType' is not assignable to type 'undefined'. (ts)
     <Todo {todo}
```

这是因为 `TodosStatus` 组件中的 `todos` 属性没有默认值，继而 TypeScript 推断它的类型为 `undefined`，而不是与 `TodoType` 数组兼容的类型。我们的 `Todo` 组件也是同样的情况。

让我们来修复它。

1. 打开 `TodosStatus.svelte` 文件并添加 `lang='ts'` 属性。
2. 然后导入 `TodoType`，并将 `todos` 属性声明为 `TodoType` 数组。将 `<script>` 部分的第一行替换为以下内容：

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

3. 我们还需要指定 `headingEl`，将其绑定到标题标签。我们将其类型设置为 `HTMLElement`。请将 `let headingEl` 这一行更新如下：

   ```ts
   let headingEl: HTMLElement;
   ```

4. 最后，你会注意到一个错误报告，其与设置 `tabindex` 属性相关。这是因为 TypeScript 正在对 `<h2>` 元素进行类型检查，且期望 `tabindex` 的类型为 `number`。

   ![VS Code 中的 tabindex 提示，tabindex 期望的类型是数字，而不是字符串](10-vscode-tabindex-hint.png)

   为了修复这个问题，请将 `tabindex="-1"` 替换为 `tabindex={-1}`，像这样：

   ```svelte
   <h2 id="list-heading" bind:this="{headingEl}" tabindex={-1}>
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   这样，TypeScript 可以防止我们将其错误地赋值为字符串。

### NewTodo.svelte

接下来我们要处理 `NewTodo.svelte` 文件。

1. 像往常一样，添加 `lang='ts'` 属性。
2. 警告会提示我们需要为 `nameEl` 变量指定一个类型。将它的类型设置为 `HTMLElement`，像这样：

   ```ts
   let nameEl: HTMLElement; // 对 name 输入框 DOM 节点的引用
   ```

3. 最后，在这个文件中，我们需要为 `autofocus` 变量指定正确的类型。更新它的定义如下：

   ```ts
   export let autofocus: boolean = false;
   ```

### Todo.svelte

现在，只有调用 `Todo.svelte` 组件时才会触发 `npm run check` 的警告。让我们修复它们。

1. 打开 `Todo.svelte` 文件，并添加 `lang='ts'` 属性。
2. 让我们导入 `TodoType`，并设置 `todo` 属性的类型。将 `export let todo` 行替换为以下内容：

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

3. 我们收到的第一个警告是：TypeScript 提示我们要为 `update()` 函数的 `updatedTodo` 变量定义类型。这可能有点棘手，因为 `updatedTodo` 仅包含已更新的 `todo` 属性。这意味着它不是一个完整的 `todo`（它只有 `todo` 属性的子集）。

   针对这种情况，TypeScript 提供了几个[实用类型（utility type）](https://www.typescriptlang.org/docs/handbook/utility-types.html)，以便我们更轻松地应用这些常见的转换。我们现在需要的是 [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt) 实用类型，该实用类型允许我们表示给定类型的所有子集。`partial` 实用类型基于类型 `T` 返回新类型，在该新类型中，`T` 的每个属性都是可选的。

   我们将在 `update()` 函数中使用它——更新你的代码如下：

   ```ts
   function update(updatedTodo: Partial<TodoType>) {
     todo = { ...todo, ...updatedTodo }; // 将修改应用到 todo
     dispatch("update", todo); // 发出更新事件
   }
   ```

   这样，我们告诉 TypeScript，`updatedTodo` 变量是 `TodoType` 的属性子集。

4. 现在 svelte-check 提示我们需要定义 action 函数参数的类型：

   ```bash
   ./07-next-steps/src/components/Todo.svelte:45:24
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusOnInit = (node) => node && typeof node.focus === 'function' && node.focus()

   ./07-next-steps/src/components/Todo.svelte:47:28
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusEditButton = (node) => editButtonPressed && node.focus()
   ```

   我们只需要将节点变量定义为 `HTMLElement` 类型。在上面指示的两行中，将第一个 `node` 实例替换为 `node: HTMLElement`。

### actions.js

接下来我们要处理 `actions.js` 文件。

1. 将其重命名为 `actions.ts`，并添加节点参数的类型。最终代码应该如下所示：

   ```ts
   // actions.ts
   export function selectOnFocus(node: HTMLInputElement) {
     if (node && typeof node.select === "function") {
       // 确保 node 已定义且具有 select() 方法
       const onFocus = () => node.select(); // 事件处理器
       node.addEventListener("focus", onFocus); // 当 node 获得焦点时调用 onFocus()
       return {
         destroy: () => node.removeEventListener("focus", onFocus), // 当节点从 DOM 中移除时执行该函数
       };
     }
   }
   ```

2. 现在更新 `Todo.svelte` 和 `NewTodo.svelte` 中导入 actions 文件的部分。请记住，在 TypeScript 中，导入语句不包括文件扩展名。每个导入语句应如下所示：

   ```js
   import { selectOnFocus } from "../actions";
   ```

### 将 store 迁移到 TypeScript

现在我们需要将 `stores.js` 和 `localStore.js` 文件迁移到 TypeScript。

提示：脚本 `npm run check` 使用 [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check) 工具，它只会检查我们应用的 `.svelte` 文件。如果你想检查 `.ts` 文件，你可以运行 `npm run check && npx tsc --noemit`，这会告诉 TypeScript 编译器在不生成 `.js` 输出文件的情况下进行错误检查。你甚至可以在你的 `package.json` 文件中添加运行该命令的脚本。

我们从 `stores.js` 文件开始。

1. 将文件重命名为 `stores.ts`。
2. 将 `initialTodos` 数组的类型设置为 `TodoType[]`。最终内容如下：

   ```ts
   // stores.ts
   import { writable } from "svelte/store";
   import { localStore } from "./localStore.js";
   import type { TodoType } from "./types/todo.type";

   export const alert = writable("Welcome to the To-Do list app!");

   const initialTodos: TodoType[] = [
     { id: 1, name: "Visit MDN web docs", completed: true },
     { id: 2, name: "Complete the Svelte Tutorial", completed: false },
   ];

   export const todos = localStore("mdn-svelte-todo", initialTodos);
   ```

3. 在 `App.svelte`、`Alert.svelte` 和 `Todos.svelte` 中更新 `import` 语句。只需删除 `.js` 扩展名，像这样：

   ```js
   import { todos } from "../stores";
   ```

现在进入 `localStore.js`。

更新 `stores.ts` 中的 `import` 语句，像这样：

```js
import { localStore } from "./localStore";
```

1. 首先将文件重命名为 `localStore.ts`。
2. TypeScript 告诉我们需要指定 `key`、`initial` 和 `value` 变量的类型。第一个很简单：我们的本地 Web 存储的键应该是字符串类型的。

   但是 `initial` 和 `value` 应该是任何可以使用 [`JSON.stringify`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 方法转换为有效 JSON 字符串的对象，也就是任何满足一些限制条件的 JavaScript 对象：例如，`undefined`、函数和符号不是有效的 JSON 值。

   因此，我们将创建类型 `JsonValue` 来指定这些条件。

   在 `types` 文件夹中创建名为 `json.type.ts` 的文件。

3. 向它添加以下内容：

   ```ts
   export type JsonValue =
     | string
     | number
     | boolean
     | null
     | JsonValue[]
     | { [key: string]: JsonValue };
   ```

   `|` 运算符允许我们声明可以存储两种或两种以上类型值的变量。`JsonValue` 可以是字符串、数字以及布尔值等。在这种情况下，我们还使用了递归类型，指定 `JsonValue` 可以具有 `JsonValue` 数组，也可以具有包含 `JsonValue` 类型属性的对象。

4. 我们将导入 `JsonValue` 类型并使用它。将你的 `localStore.ts` 文件更新如下：

   ```ts
   // localStore.ts
   import { writable } from "svelte/store";

   import type { JsonValue } from "./types/json.type";

   export const localStore = (key: string, initial: JsonValue) => {
     // 接收本地存储的键和初始值

     const toString = (value: JsonValue) => JSON.stringify(value, null, 2); // 辅助函数
     const toObj = JSON.parse; // 辅助函数

     if (localStorage.getItem(key) === null) {
       // 本地存储中不存在该项
       localStorage.setItem(key, toString(initial)); // 使用初始值初始化本地存储
     }

     const saved = toObj(localStorage.getItem(key)); // 转换为对象

     const { subscribe, set, update } = writable(saved); // 创建底层的可写 store

     return {
       subscribe,
       set: (value: JsonValue) => {
         localStorage.setItem(key, toString(value)); // 以字符串形式保存到本地存储
         return set(value);
       },
       update,
     };
   };
   ```

现在，如果我们尝试使用无法通过 `JSON.stringify()` 转换为 JSON 的内容（例如包含函数属性的对象）创建 `localStore`，VS Code/`validate` 将会报错：

![VS Code 显示我们的 store 出错——尝试将不兼容 JSON stringify 的值设置为本地存储值失败](11-vscode-invalid-store.png)

最棒的是，它甚至可以与 [`$store` 自动订阅语法](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values)一起使用。如果我们尝试使用 `$store` 语法将无效的值保存到我们的 `todos` store 中，像这样：

```svelte
<!-- App.svelte -->
<script lang="ts">
  import Todos from "./components/Todos.svelte";
  import Alert from "./components/Alert.svelte";

  import { todos } from "./stores";

  // 这是无效的，内容无法使用 JSON.stringify 转换为 JSON
  $todos = { handler: () => {} };
</script>
```

检查脚本会报告以下错误：

```bash
> npm run check

Getting Svelte diagnostics...
====================================

./svelte-todo-typescript/src/App.svelte:8:12
Error: Argument of type '{ handler: () => void; }' is not assignable to parameter of type 'JsonValue'.
  Types of property 'handler' are incompatible.
    Type '() => void' is not assignable to type 'JsonValue'.
      Type '() => void' is not assignable to type '{ [key: string]: JsonValue; }'.
        Index signature is missing in type '() => void'. (ts)
 $todos = { handler: () => {} }
```

这是另一个说明指定类型可以使我们的代码更健壮的示例，其帮助我们在进入生产之前捕捉更多的错误。

这就是全部内容。我们已经将整个应用程序转换为使用 TypeScript。

## 使用泛型使我们的 store 更加健壮

我们的 store 已经被转换为 TypeScript，但我们可以做得更好。我们不应该存储任何类型的值——我们知道 alert store 应该包含字符串消息，待办事项 store 应该包含一个 `TodoType` 数组，等等。我们可以使用 [TypeScript 泛型](https://www.typescriptlang.org/docs/handbook/generics.html)，让 TypeScript 强制执行这一点。让我们了解更多。

### 理解 TypeScript 泛型

泛型允许我们创建可重用的代码组件，这些组件可以处理多种类型而不仅限于单一类型。它们可以应用于接口、类和函数。我们可以通过使用特殊语法，将泛型类型作为参数进行传递：它们在尖括号中指定，并且按照惯例用大写的单个字母字符表示。泛型类型允许我们获取用户提供的类型，并在稍后使用。

让我们看示例，一个简单的 `Stack` 类，我们可以 `push` 和 `pop` 元素，像这样：

```ts
export class Stack {
  private elements = [];

  push = (element) => this.elements.push(element);

  pop() {
    if (this.elements.length === 0) throw new Error("The stack is empty!");
    return this.elements.pop();
  }
}
```

在这种情况下，`elements` 是 `any` 类型的数组，因此 `push()` 和 `pop()` 方法都接收和返回类型为 `any` 的变量。因此，完全可以执行以下操作：

```js
const anyStack = new Stack();

anyStack.push(1);
anyStack.push("hello");
```

但是，如果我们想要 `Stack` 只能使用 `string` 类型，我们可以这样做：

```ts
export class StringStack {
  private elements: string[] = [];

  push = (element: string) => this.elements.push(element);

  pop(): string {
    if (this.elements.length === 0) throw new Error("The stack is empty!");
    return this.elements.pop();
  }
}
```

这样可以工作。但是如果我们想要使用数字，那么我们就必须复制我们的代码并创建一个 `NumberStack` 类。如果我们要处理一种我们还不知道的类型的堆栈（其类型由使用者定义），该怎么办呢？

为了解决这些问题，我们可以使用泛型。

这是使用泛型重新实现的 `Stack` 类：

```ts
export class Stack<T> {
  private elements: T[] = [];

  push = (element: T): number => this.elements.push(element);

  pop(): T {
    if (this.elements.length === 0) throw new Error("The stack is empty!");
    return this.elements.pop();
  }
}
```

我们定义了泛型类型 `T`，然后像使用特定类型一样使用它。现在 `elements` 是类型 `T` 元素组成的数组，`push()` 和 `pop()` 都接收和返回类型为 `T` 的变量。

下面是使用我们的泛型 `Stack` 的方式：

```ts
const numberStack = new Stack<number>();
numberStack.push(1);
```

现在，TypeScript 知道我们的栈只能接受数字，并且如果我们尝试推入其他类型的元素，它会报错：

![类型为 hello 的实参不能赋值给类型为 number 的参数](12-vscode-generic-stack-error.png)

TypeScript 还可以通过使用情况来推断泛型类型。泛型还支持默认值和约束。

泛型是一种强大的特性，可以使我们的代码抽象出具体使用的类型，使其更具通用性和重用性，同时保持类型安全。要了解更多信息，请参阅 [TypeScript 泛型介绍](https://www.typescriptlang.org/docs/handbook/generics.html)。

### 使用具有泛型的 Svelte store

Svelte store 在默认情况下支持泛型。而且，由于泛型类型推断的存在，我们甚至可以在不修改代码的情况下利用它。

在 `Todos.svelte` 文件中，如果为我们的 `$alert` store 分配 `number` 类型的值，将会出现以下错误：

![类型为 9999 的实参不能赋值给类型为 string 的参数](13-vscode-generic-alert-error.png)

这是因为当我们在 `stores.ts` 文件中定义 alert store 时：

```js
export const alert = writable("Welcome to the To-Do list app!");
```

TypeScript 推断出泛型类型为 `string`。如果我们想明确指定类型，可以采用以下方式：

```ts
export const alert = writable<string>("Welcome to the To-Do list app!");
```

现在我们将使 `localStore` store 支持泛型。请记住，我们定义了 `JsonValue` 类型，以防止 `localStore` store 被赋值一些 `JSON.stringify()` 无法持久化的值。现在，我们希望由 `localStore` 的使用者，来指定要持久化的数据类型，但是这些持久化的数据类型必须符合 `JsonValue` 类型，而不是任意类型。我们将通过泛型约束来指定：

```ts
export const localStore = <T extends JsonValue>(key: string, initial: T)
```

我们定义了泛型类型 `T`，并指定它必须与 `JsonValue` 类型兼容。然后我们将正确使用 `T` 类型。

我们的 `localStore.ts` 文件将变成以下内容——请在你的版本中尝试新代码：

```ts
// localStore.ts
import { writable } from "svelte/store";

import type { JsonValue } from "./types/json.type";

export const localStore = <T extends JsonValue>(key: string, initial: T) => {
  // 接收本地存储的键和初始值

  const toString = (value: T) => JSON.stringify(value, null, 2); // 辅助函数
  const toObj = JSON.parse; // 辅助函数

  if (localStorage.getItem(key) === null) {
    // 本地存储中不存在该项
    localStorage.setItem(key, toString(initial)); // 使用初始值初始化本地存储
  }

  const saved = toObj(localStorage.getItem(key)); // 转换为对象

  const { subscribe, set, update } = writable<T>(saved); // 创建底层的可写 store

  return {
    subscribe,
    set: (value: T) => {
      localStorage.setItem(key, toString(value)); // 也将值以字符串形式保存到本地存储
      return set(value);
    },
    update,
  };
};
```

由于泛型类型推断，TypeScript 已经知道我们的 `$todos` store 应该包含 `TodoType` 的数组：

![Todo 类型对象的属性 complete 应为 completed](14-vscode-generic-localstore-error.png)

再次强调，如果我们想明确指定类型，可以在 `stores.ts` 文件中这样做：

```ts
const initialTodos: TodoType[] = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];

export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
```

这就是 TypeScript 泛型简要介绍的全部内容了。

## 到目前为止的代码

### Git

要查看代码的最终状态，可以通过以下方式访问我们仓库的复制：

```bash
cd mdn-svelte-tutorial/08-next-steps
```

或直接下载文件夹内容：

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

记得运行 `npm install && npm run dev` 以在开发模式下启动应用程序。

### REPL

正如我们之前所说，REPL 中尚不支持 TypeScript。

## 总结

在本文中，我们将我们的待办事项应用程序迁移到 TypeScript。

我们首先了解了 TypeScript 及其带来的优势。然后，我们看到如何创建支持 TypeScript 的新 Svelte 项目。我们还学习了如何将现有的 Svelte 项目转换为使用 TypeScript——我们的待办事项应用程序。

我们演示了如何使用 [Visual Studio Code](https://code.visualstudio.com/) 和 [Svelte 扩展](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)来获得类型检查和自动补全等特性。我们还使用 `svelte-check` 工具从命令行检查 TypeScript 问题。

在下一篇文章中，我们将学习如何将应用程序编译和部署到生产环境。我们还将了解在线学习 Svelte 的其他资源。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}
