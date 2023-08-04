---
title: 组件化我们的 React App
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

此时，我们的 App 是一个单体。在我们能使用它之前，我们需要把它分解成可管理的、可描述的组件。React 对于什么是组件和什么不是组件并没有任何硬性规定，这完全取决于你！在这篇文章，我们将向你展示一种合理分解 App 的方法。

<table>
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        <p>
          熟悉核心 <a href="/zh-CN/docs/Learn/HTML">HTML</a>、<a href="/zh-CN/docs/Learn/CSS">CSS</a>
           和 <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言，了解<a
            href="/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >终端/命令行</a
          >。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        展示一种合理分解待办事项 App 的方法。
      </td>
    </tr>
  </tbody>
</table>

## 定义第一个组件

在缺乏经验的情况下，定义一个组件会比较棘手，不过这些提示可以帮助你：

- 如果它在程序里看起来是个明显的“块”，那它可能是个组件。
- 如果它在程序里经常会被复用，那它可能是个组件。

第二条很有价值：使用通用的 UI 元素作为组件，可以让你只更改一处，就能更改所有使用该组件的地方。现在你也不必马上把所有东西都拆成组件。让我们从第二点开始做起，将 UI 中重用最多、最重要的部分抽取为一个组件：一个待办事件项。

## 编写 `<Todo />`

在制作组件之前，我们应该为它新建一个文件。实际上我们应该为它新建一个文件夹。下面的命令可以新建一个 `component` 文件夹，在这之中又新建了一个叫做 `Todo.js` 的文件。在你运行这些命令之前，请确保你在 App 的根目录下。

```bash
mkdir src/components
touch src/components/Todo.js
```

新的 `Todo.js` 文件是空的。打开它，并添加第一行。

```js
import React from "react";
```

既然我们要做一个叫做 `Todo` 的组件，就要在 `Todo.js` 中加入相关代码。如下所示，这段代码中，我们使用了一行代码定义了函数并导出了它。

```js
export default function Todo() {
  return (
    // …
  );
}
```

目前为止很顺利，但我们的组件必须返回一些东西！回到 `src/App.js`，从无序列表中复制第一个 [`<li>`](/zh-CN/docs/Web/HTML/Element/li) 并将其粘贴到 `Todo.js`，代码看起来像这样：

```js
export default function Todo() {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor="todo-0">
          Eat
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">Eat</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Eat</span>
        </button>
      </div>
    </li>
  );
}
```

> **备注：** 组件必须返回一些东西。如果你试图渲染一个不返回任何东西的组件，React 会在浏览器中提示出现错误。

到现在为止，我们的 `Todo` 组件已经完成，我们可以使用它了。在 `App.js` 中，在文件顶部添加以下代码，导入 `Todo` 组件：

```js
import Todo from "./components/Todo";
```

导入组件之后，你可以调用 `<Todo />` 组件来替换 `App.js` 中的所有 `<li>`。你的 `<ul>` 看起来应该像这样：

```js
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  <Todo />
  <Todo />
  <Todo />
</ul>
```

当你查看浏览器时，你会注意到一些不幸的事：现在你的清单重复显示了三次！

![在 App 中，Todo 组件重复出现，因为标签被硬编码到组件中](todo-list-repeating-todos.png)

我们想得不仅仅是 Eat，我们还有其他事情要做。接下来我们将尝试使用不一样的方式来调用组件，渲染出不同的内容。

## 制作 _不同_ 的 `<Todo />`

组件之所以强大，是因为它们让我们可以重用 UI 的各个部分，并让我们可以引用一处作为 UI 各个部分的源头。问题是，我们通常不希望重复使用每个组件的全部内容；我们希望重复使用大多数部分，并改变小部分内容。这就是 props 的用处。

### `name` 里有什么？

为了跟踪我们要完成的任务名称，我们应该确保每个 `<Todo />` 组件渲染一个不同的名称。

在 `App.js` 中，给每个 `<Todo />` 传递一个 name prop。我们使用之前的任务名称来传递：

```js
<Todo name="Eat" />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

当你刷新浏览器，你会看到和以前完全一样的东西。我们给了 `<Todo />` 一些 props，但还没有使用它们。让我们回到 `Todo.js` 修改一下。

首先修改你的 `Todo()` 函数定义，使其接受 `props` 参数。如果你想检查 `props` 是否被组件正确接收，你可以像之前那样使用 `console.log()` 检查你的 `props`。

一旦你确信你的组件得到了它的 `props`，你就可以用 `name` prop 来替换每次出现的 `Eat`。记住：当你在 JSX 表达式的中，你可以使用大括号来注入一个变量的值。

把所有这些操作汇总在一起，你的 `Todo()` 函数看起来应该像这样：

```js
export default function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor="todo-0">
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}
```

*现在*你的浏览器应该显示三个不同的任务。但另一个问题仍然存在：它们都是被默认勾选的。

![现在有了不同标签的待办事项，标签以 props 的形式传入组件。](todo-list-unique-todos.png)

### 是否 `completed`？

在原来的静态列表中，只有 `Eat` 被选中。我们想重新利用构成 `<Todo />` 组件的大部分 UI，但只修改一处。这个工作很适合另一个 prop! 在 `App.js` 中给每个 `<Todo />` 传递一个新的 props `completed`。第一个（`Eat`）的值应该是 `true`；剩下的应该是 `false`。

```js
<Todo name="Eat" completed={true} />
<Todo name="Sleep" completed={false} />
<Todo name="Repeat" completed={false} />
```

在这之前，我们必须确保 `Todo.js` 已经使用了这些 props。修改 `<input />` 上的 `defaultChecked` 属性，使其等于 `completed` prop。

```js
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

你的浏览器应该会更新，现在只有 `Eat` 被选中了。

![我们的待办事项现在有了不同的选中状态——一些复选框被选中了，其他的没有](todo-list-differing-checked-states.png)

如果你修改每个 `<Todo />` 组件的 `completed` prop，你的浏览器会根据选中或不选中去相应的渲染复选框。

### 请给我一些 `id`

我们的 `<Todo />` 组件给每个任务的 `id` 属性都设为 `todo-0` 了。这是个不好的 HTML 写法，因为 [`id` 属性](/zh-CN/docs/Web/HTML/Global_attributes/id)必须是不同的（它们被 CSS、JavaScript 等用作文档片段的唯一标识符）。这意味着我们需要给每一个 `Todo` 组件一个不同 `id` prop。

为了遵循最初的规则，让我们给每个 `<Todo />` 组件实例一个 `todo-i` 格式的 ID，其中数字 `i` 每次增加一。

```js
<Todo name="Eat" completed={true} id="todo-0" />
<Todo name="Sleep" completed={false} id="todo-1" />
<Todo name="Repeat" completed={false} id="todo-2" />
```

现在回到 `Todo.js` 来使用 `id` prop。需要替换 `<input />` 元素的 `id` 属性，以及 label 的 `htmlFor` 属性。

```js
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

## 到目前为止，还算不错？

目前为止，我们使用 React 很顺利，不过可以做的更好！我们的代码有些重复。渲染我们的 `<Todo />` 组件的三行文字几乎是相同的，只有一点不同：每个 prop 的值。

我们使用一个 Javascript 的核心能力来整理我们的代码：迭代。想使用迭代，我们首先应该重新思考我们的任务。

## 任务作为数据

现在每个任务都包含三份信息：它的名称、是否被选中，及它唯一的 ID。这些数据可以很好地转化为一个对象。因为我们有多个任务，所以用一个对象数组可以很好地表示这些数据。

在 `src/index.js` 中，在最后一条导入下面，在 `ReactDOM.render()` 上面，新建一个 `const` 数据。

```js
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
```

然后，我们将 `DATA` 作为一个 prop 传入 `<App />`，叫做 `tasks`。`src/index.js` 的最后一行看起来应该像这样：

```js
ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
```

这个数组现在可以在 App 组件中以 `props.tasks` 使用。你可以使用 `console.log()` 去检查它。

> **备注：** `ALL_CAPS` 这个常量名称在 JavaScript 中没有特殊意义；它们是一种惯例，告诉其他开发者“这个数据在这里定义后将永远不会改变”。

## 使用迭代进行渲染

为了渲染我们的对象数组，我们会把其中的每个对象变成一个 `<Todo />` 组件。JavaScript 给了我们一个数组方法，用于将数据转换为其他东西：[`Array.prototype.map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)。

在 return 语句的上方，新建一个叫 `taskList` 的 `const`，然后使用 `map()` 去转换它。我们先把 `tasks` 数组变成简单的东西：每个任务的 `name`：

```js
const taskList = props.tasks?.map((task) => task.name);
```

我们尝试使用 `taskList` 替换所有 `<ul>` 的 children：

```js
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>
```

这让我们能够再次显示所有的组件，但我们还有更多的工作要做：目前浏览器将每个任务的名称显示为非结构化文本。我们忘记了 HTML 结构——`<li>`、复选框和按钮！

![我们的待办事项中，其标签刚好显示在一行上。](todo-list-unstructured-names.png)

为了解决这个问题，我们需要从 `map()` 函数 return 一个 `<Todo />` 组件——记住 JSX 允许我们将 JavaScript 和标记结构混合起来！让我们用下面的方法替代已有的试试：

```js
const taskList = props.tasks.map((task) => <Todo />);
```

回顾一下你的 App；现在你的任务看起来更像以前的样子，不过它们缺少自身的名字。记住，我们映射的每个任务都有 `id`、`name` 和 `checked` 属性，我们要把这些属性传递给 `<Todo />` 组件。如果你把它们放在一起，我们就会得到这样的代码：

```js
const taskList = props.tasks.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

现在 App 看起来像之前一样了，而我们的代码也变得没有那么重复了。

## 特殊的 key

现在 React 正在将我们的任务从一个数组中渲染出来，它必须跟踪谁是谁，以便正确的渲染它们。React 通过自行猜测来保持对每一项的追踪，不过我们通过给 `<Todo />` 传递一个 `key` prop 来帮助 React 保持追踪。`key` 是一个被 React 管理的特殊的 prop，你不能将其用于其他目的。

因为每个 key 必须是不同的，我们复用每个任务对象的 `id` 属性来作为它的 key。像这样更新你的 `taskList` 常量：

```js
const taskList = props.tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));
```

**你应该传递不同的 key 给任何使用迭代方式渲染的东西**。你的浏览器中不会有什么明显变化，不过如果你不使用不同的 key，React 会在你的 console 中记录一个警告，并且你的 App 可能会表现的很奇怪！

## 整合 App 的其他部分

现在我们已经把最重要的组件整理好了，我们可以把我们 App 的其他部分也变成组件。记住，组件要么是明显的 UI 片段，要么是重复使用的 UI 片段，或者两者都是，我们可以再制作这两个组件：

- `<Form/>`
- `<FilterButton/>`

既然我们知道需要两个文件，我们可以使用一个终端命令来批量新建文件。在你的终端中运行这段代码，注意要在你的 App 的根目录下：

```bash
touch src/components/Form.js src/components/FilterButton.js
```

### `<Form />` 组件

打开 `components/Form.js` 并按照以下几点来做：

- 在顶部导入 `React`，像我们在 `Todo.js` 中做的一样。
- 做一个新的 `Form()` 组件，其基本结构与 `Todo()` 相同，并导出该组件。
- 从 `App.js` 中复制 `<form>` 标签和它们之间的所有内容，并将它们粘贴到 `Form()` 的 `return` 语句中。
- 在文件末尾导出 `Form`。

你的 `Form.js` 文件应该看起来像这样：

```js
import React from "react";

function Form(props) {
  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
```

### \<FilterButton /> 组件

Do the same things you did to create `Form.js` inside `FilterButton.js`, but call the component `FilterButton()` and copy the HTML for the first button inside the `<div>` element with the `class` of `filters` from `App.js` into the `return` statement.

按照新建 `Form.js` 时的方法新建 `FilterButton.js`，但是组件名应该为 `FilterButton()` ，还要拷贝 `App.js` 中，`class` 为 `filters` 的 `<div>` 元素中的，第一个按钮的 HTML，然后放在 return 语句中。

文件看起来应该像这样：

```js
import React from "react";

function FilterButton(props) {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>all </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
```

> **备注：** 你可能会注意到，我们在这里犯了和第一次在 `<Todo />` 组件中同样的错误，即每个按钮将是相同的。没关系！我们将在以后修复这个组件，具体在 [Back to the filter buttons](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons)。

## 导入所有组件

让我们来使用所有的新组件。

在 `App.js` 的顶部再添加一些 `import` 语句，以导入它们。

然后更新 `App()` 中的 `return` 语句，使其渲染我们的组件。当你完成时，`App.js` 文件应该像这样：

```js
import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  const taskList = props.tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
```

有了这些，我们*几乎*已经准备好在 React App 中处理一些交互性问题了！

## 总结

本文到此为止——我们已经深入探讨了如何将你的 App 很好地分解成组件，并有效地渲染它们。现在我们将继续研究如何在 React 中处理事件，并添加一些交互性。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
