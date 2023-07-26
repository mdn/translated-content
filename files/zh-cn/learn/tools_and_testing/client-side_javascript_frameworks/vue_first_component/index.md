---
title: 创建第一个 Vue 组件
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

现在是时候深入了解 Vue，并创建我们自己的自定义组件了--我们将从创建一个组件来表示待办事项列表中的每个项目开始。在这一过程中，我们将学习一些重要的概念，例如在其他组件中调用组件，通过道具向它们传递数据，以及保存数据状态。

> **备注：** 如果你需要根据我们的版本检查您的代码，你可以在我们的 [todo-vue](https://github.com/mdn/todo-vue) 仓库找到中找到示例 Vue 程序代码的完成版本。有关运行中的实时版本，请参见 <https://mdn.github.io/todo-vue/>。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提条件：</th>
      <td>
        <p>
          熟悉<a href="/zh-CN/docs/learn/HTML">HTML</a>、<a
            href="/zh-CN/docs/Learn/CSS"
            >CSS</a
          >、<a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a
          >核心语言，了解<a
            href="/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >终端或命令行</a
          >。
        </p>
        <p>
          Vue 组件是由管理应用程序数据的 JavaScript 对象和映射到基础 DOM
          结构的基于 HTML 的模板语法组成的。对于安装，以及使用 Vue
          的一些更高级的功能（如单文件组件或渲染函数），你需要一个安装了 node 和
          npm 的终端。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        学习如何创建一个 Vue 组件，将其渲染到另一个组件中，使用<a
          href="https://vuejs.org/v2/api/#props"
          >props</a
        >将数据传递到组件中，并保存其状态。
      </td>
    </tr>
  </tbody>
</table>

## 创建一个 ToDoItem 组件

让我们创建第一个组件，它将显示一个单一的待办事项。我们将用它来建立我们的待办事项列表。

1. 在你的`moz-todo-vue/src/components`目录下，创建一个`ToDoItem.vue`的新文件。在你的代码编辑器中打开该文件。
2. 通过在文件顶部添加`<template></template>`来创建组件的模板部分。
3. 在你的模板部分下面创建一个`<script></script>`部分。在`<script>`标签内，添加一个默认导出对象`export default {}`，这是你的组件对象。

你的文件现在应该是这样的：

```html
<template> </template>
<script>
  export default {};
</script>
```

现在我们可以开始为`ToDoItem`添加实际内容了。Vue 模板目前只允许一个根元素--一个元素需要包裹模板内的所有内容（Vue 3 发布后会改变这种情况）。我们将为该根元素使用一个[`<div>`](/zh-CN/docs/Web/HTML/Element/div)。

1. 现在在你的组件模板中添加一个空的`<div>`。
2. 在那个 `<div>` 里面，让我们添加一个 `checkbox` 和一个对应的 `label`。给复选框添加一个 `id`，并添加一个 `for` 属性，将复选框映射到标签上，如下所示：

   ```html
   <template>
     <div>
       <input type="checkbox" id="todo-item" checked="false" />
       <label for="todo-item">My Todo Item</label>
     </div>
   </template>
   ```

### 在应用程序中使用 TodoItem 组件

这一切都很顺利，但我们还没有将组件添加到我们的应用程序中，所以没有办法测试它，看看一切是否正常。我们现在就把它添加进去吧。

1. 再次打开`App.vue`文件。
2. 在`<script>`标签的顶部，添加以下内容来引入`ToDoItem`组件：

   ```js
   import ToDoItem from "./components/ToDoItem.vue";
   ```

3. 在你的组件对象里面，添加 `components` 属性，然后在它里面添加您的 ToDoItem 组件进行注册。

你的`<script>`内容现在应该是这样的：

```js
import ToDoItem from "./components/ToDoItem.vue";

export default {
  name: "app",
  components: {
    ToDoItem,
  },
};
```

这和之前 Vue CLI 注册`HelloWorld`组件的方式是一样的。

要在应用程序中实际展示 `ToDoItem` 组件，你需要在 `<template>` 模板内添加一个 `<to-do-item></to-do-item>` 元素。请注意，组件文件名及其在 JavaScript 中的表示方式总是用大写驼色（例如 `ToDoList`），而等价的自定义元素总是用连字符小写（例如 `<to-do-list>`）。

1. 在`<h1>`下面，创建一个无序列表 (`<ul>`)，其中包含一个列表项 (`<li>`)。
2. 在列表项 (\<li>) 里面添加`<to-do-item></to-do-item>`.

你的`App.vue`的`<template>`内容现在应该是这样的：

```html
<div id="app">
  <h1>To-Do List</h1>
  <ul>
    <li>
      <to-do-item></to-do-item>
    </li>
  </ul>
</div>
```

如果你再次查看你的应用程序的渲染情况，你现在应该看的到渲染的`ToDoItem`组件，由一个复选框和一个标签组成。

![The current rendering state of the app, which includes a title of To-Do List, and a single checkbox and label](rendered-todoitem.png)

## 使用 props 让组件动态化

我们的 `ToDoItem` 组件仍然不太可用，因为我们只能在页面上包含它一次（ID 必须唯一），而且我们没有办法设置 label 标签的文本。这一切都不是动态的。

我们需要的是一些组件状态。这可以通过在组件中添加 props 来实现。您可以认为 props 与函数中的输入类似。prop 的值给予了组件影响其显示的初始状态。

### 注册 props

在 Vue 中，注册 props 的方式有两种：

- 第一种方式是，以字符串数组的方式列出 props，数组中的每个实体对应一个 prop 名称。
- 第二种方法是将 props 定义为一个对象，每个 key 对应于 prop 名称。将 props 列为对象允许您指定默认值，将 props 标记为 required，执行基本的对象类型 (特别是 JavaScript 基本类型) ，并执行简单的 prop 校验。

> **备注：** 注意：prop 验证只能在 development 模式下进行，所以你不能在生产环境中严格依赖它。此外，prop 验证函数在组件实例创建之前被调用，因此它们不能访问组件状态 (或其他 props)。

针对 ToDoItem 组件，我们将使用对象注册法。

1. 回到 `ToDoItem.vue` 文件。
2. 在默认导出的 `default {}` 对象中添加一个 `props` 属性，该 props 属性含有一个空对象。
3. 在这个对象里，添加两个 key 为 `label` 和 `done` 属性。
4. `label` 的值应该是一个带有两个属性的对象（或者是 **props**，因为它们被调用在可找到的组件的 context）

   1. 第一个 `required` 属性，它的值是 `true`. 这将会告诉 Vue 说，我们希望每个该组件的实例都必须有个 label 字段。如果 `ToDoItem` 组件没有 label 字段的话，Vue 会提示警告。
   2. 第二是添加一个 `type` 属性。这个属性的值设为 JavaScript 的 `String` 类型。这等于告诉 Vue，我们希望 type 属性的值是 String 类型的。

5. 现在转向 `done` prop.

   1. 首先添加一个 `default` 属性，它的值是 `false`。这意味着当没有 `done` prop 被传递给 `ToDoItem` 组件时， `done` prop 的值会是 false（注意 default 属性不是必需的————我们只在非 required props 里才需要 `default` ）
   2. 接着，添加一个 `type` 属性，值为 `Boolean`。这将告诉 Vue，我们希望这个 prop 的值是 JavaScript 的 Boolean 类型。

你的组件对象现在看起来应该像是这样：

```js
<script>
  export default {
    props: {
      label: { required: true, type: String },
      done: { default: false, type: Boolean }
    }
  };
</script>
```

### 使用已注册的 props

随着组件对象中这些 props 的定义，我们可以在 template 里使用这些变量值。让我们开始向组件模版中添加 `label` prop。

在你的 `<template>` 中，将 `<label>` 标签的 contents 内容修改为 `\{{label}}`。

`\{{}}` 是 Vue 中的一个特殊的模版语法，它能在模版内打印类中定义的 JavaScript 表达式的结果，包括值和方法。重要的是，`\{{}}` 里的内容是作为文本显示，而非 HTML。在此例中，我们打印的是 `label` 的值。

现在，你组件的 template 部分应该是像这样：

```html
<template>
  <div>
    <input type="checkbox" id="todo-item" checked="false" />
    <label for="todo-item">\{{label}}</label>
  </div>
</template>
```

回到网页浏览器中，您将会看到 todo item 与之前相同，但是没有 label。转到浏览器的开发者工具，您会在控制台中看到这样的警告：

```
[Vue warn]: Missing required prop: "label"

found in

---> <ToDoItem> at src/components/ToDoItem.vue
       <App> at src/App.vue
         <Root>
```

这是因为我们将 `label` prop 标记为 required, 但我们从未给组件这个 prop————我们已经在 template 内定义了希望使用这个 prop 值的位置，但在调用时我们没有把它传递进组件。让我们修复这个问题。

在我们的 `App.vue` 文件中，像常规 HTML 属性那样，在 `<to-do-item></to-do-item>` 里添加一个 `label` 属性：

```html
<to-do-item label="My ToDo Item"></to-do-item>
```

现在您会在页面上看到 label 了，并且 console 里不会再出现警告提示。

这就是一个简单的 props。接下来我们将讨论 Vue 如何持久化数据状态

## Vue 的数据对象

如果您改变 传递到在您的 App 组件中访问的 `<to-do-item></to-do-item>` 的 `label` prop 值，您应该会看到该值被更新。这很 ok。我们现在有了一个 checkbox，一个可更新的 label 标签。然而，我们目前没有对 "done" prop 做任何事情——我们可以在 UI 中选中 checkbox，但在应用程序中，我们没有实际记录 todo item 是否已完成。

为了实现它，我们将组件的 `done` prop 与 [`<input>`](/zh-CN/docs/Web/HTML/Element/input) 标签的 `checked` 属性作绑定。这样就可以记录复选框是否被选中。但是，props 是一种单向数据绑定，组件永远不该改变自己的 props 的值，这点很重要。坚守这点的原因有很多。其一是，组件修改 props 会造成程序调试困难。如果一个值被传递进多个子组件，将很难定位这个值是在哪里被修改的。此外，修改 props 会造成组件重新渲染。所以，一个组件里突变的 props 会触发组件重新渲染，这可能会反过来再次触发 props 突变。

要变通解决此问题，我们可以使用 Vue 的`data` 属性来管理 `done` 的状态。`data` 属性是你可以用来在组件中管理本地状态，它与 `props` 属性一同位于组件对象中并具有以下结构：

```js
data() {
  return {
    key: value
  }
}
```

你将注意到 `data` 属性是一个函数。这是为了在运行时保持组件的每个实例的数据值是唯一的——为每个组件实例单独调用函数。如果将数据声明为仅一个对象，则该组件的所有实例将共享相同的值。这是 Vue 注册组件方式的副作用，也是你不想要的。

您可以使用 `this` 从内部数据访问组件的 props 和其他属性，如所你料。我们很快就会看到一个示例。

> **备注：** 由于 `this` 在箭头函数中的工作方式（绑定到父级的上下文），如果使用箭头函数，您将无法从内部 `data` 访问任何必要的属性。因此，不要对 `data` 属性使用箭头函数。

因此，让我们向 `ToDoItem` 组件添加一个 `data` 属性。这将返回一个包含单个属性的对象，即我们将调用 `isDone`，其值为 `this.done`。

按如下方式更新组件对象：

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
  data() {
    return {
      isDone: this.done,
    };
  },
};
```

Vue 在这里做了一点魔术 — 它把你所有的 props 直接绑定到组件实例上，所以我们不必调用 `this.props.done`。它还将其他属性（你已经看到 `data`，以及其他 `methods`，`computed` 等）直接绑该定到实例。这部分是为了使它们可用于的你模板。这样做的缺点是，你需要在这些属性中保持键的唯一性。这就是为什么我们将 `data` 属性为 `isDone` 而不是 `done`。

因此，现在我们需要将 `isDone` 属性附加到我们的组件。与 Vue 使用 `\{{}}` 表达式在模板中显示 JavaScript 表达式的方式类似，Vue 有一种特殊的语法将 JavaScript 表达式绑定到 HTML 元素和组件：**`v-bind`**。`v-bind` 表达式如下所示：

```
v-bind:attribute="expression"
```

换句话说，你可以在要绑定到的任何 attribute/prop 前面加上 `v-bind:`。在大多数情况下，你可以对 `v-bind:` 属性使用速记，即只在 attribute/prop 前面加上冒号。所以 `:attribute="expression"` 的工作方式与 `v-bind:attribute="expression"` 相同。

因此，对于 `ToDoItem` 组件中的复选框，我们可以使用 `v-bind` 将 `isDone` 属性映射到 `<input>` 元素上的 `checked` 属性。以下两项是等效的：

```html
<input type="checkbox" id="todo-item" v-bind:checked="isDone" />

<input type="checkbox" id="todo-item" :checked="isDone" />
```

你可以自由使用任何您想要的模式。不过，最好保持一致。由于速记语法更常用，因此本教程将坚持该模式。

所以让我们这样做。立即更新你的 `<input>` 元素，将 `checked="false"` 替换为 `:checked="isDone"`。

通过将 `:done="true"` 传递给 `App.vue` 中的 `ToDoItem` 调用来测试你的组件。请注意，你需要使用 `v-bind` 语法，否则 `true` 将作为字符串传递。显示的复选框应该被选中。

```js
<template>
  <div id="app">
    <h1>My To-Do List</h1>
    <ul>
      <li>
        <to-do-item label="My ToDo Item" :done="true"></to-do-item>
      </li>
    </ul>
  </div>
</template>
```

尝试将 `true` 更改为 `false`，然后再返回，在两者之间重新加载应用以查看状态如何更改。

## 给 Todos 一个唯一的 ID

很好！我们现在有一个工作着的复选框，我们可以在其中以编程方式设置状态。但是，我们目前只能向页面添加一个 `ToDoList` 组件，因为 `id` 是硬编码的。这将导致辅助技术出错，因为需要 `id` 才能将标签正确映射到其复选框。为了解决这个问题，我们可以以编程方式在组件数据中设置 `id`。

我们可以使用 [lodash](https://www.npmjs.com/package/lodash) 包的 `uniqueid()` 方法来帮助保持索引的唯一性。此包导出一个函数，该函数接收字符串并将唯一整数追加到前缀的末尾。这足以保持组件 `id` 的唯一性。

让我们使用 npm 将包添加到我们的项目中;停止服务器并在终端中输入以下命令：

```bash
npm install --save lodash.uniqueid
```

> **备注：** 如果你更喜欢 yarn，则可以改用 `yarn add lodash.uniqueid`。

现在，我们可以将此包导入我们的 `ToDoItem` 组件中。在 `ToDoItem.vue` 的 `<script>` 元素的顶部添加以下行：

```js
import uniqueId from "lodash.uniqueid";
```

接下来，将字段 `id` 添加到我们的数据属性中，这样组件对象最终看起来就是这样（`uniqueId()` 返回指定的前缀——`todo`——并附加一个唯一的字符串）：

```js
import uniqueId from "lodash.uniqueid";

export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
  data() {
    return {
      isDone: this.done,
      id: uniqueId("todo-"),
    };
  },
};
```

接下来，将 `id` 绑定到复选框的 `id` 属性和标签的 `for` 属性，更新现有 `id` 和 `for` 属性，如下所示：

```html
<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" />
    <label :for="id">\{{label}}</label>
  </div>
</template>
```

## 总结

这将对本文有所帮助。此时，我们有一个工作良好的 `ToDoItem` 组件，可以传递一个标签来显示，将存储其检查状态，并在每次调用时使用唯一的 id 呈现。您可以通过在 `App.vue` 中临时添加更多 `<to-do-item></to-do-item>` 去调用，然后使用浏览器的 DevTools 检查其呈现的输出，从而检查唯一 `id` 是否正常工作。

现在，我们已准备好将多个 `ToDoItem` 组件添加到我们的应用中。在下一篇文章中，我们将介绍如何将一组待办事项数据添加到 `App.vue` 组件中，然后使用 `v-for` 指令在 `ToDoItem` 组件中循环显示这些数据。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
