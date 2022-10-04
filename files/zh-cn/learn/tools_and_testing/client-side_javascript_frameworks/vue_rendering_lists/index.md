---
title: Rendering a list of Vue components
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

现在我们已经有了一个可以工作的组件。我们接下来添加更多的 `ToDoItem` 组件到 我们的 App。本文我们会添加一系列待办事项到 App.vue 组件并使用`v-for`指令遍历这些它们，将它们的每一项展示在`ToDoItem`组件中。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        <p>
          Familiarity with the core <a href="/zh-CN/docs/Learn/HTML">HTML</a>,
          <a href="/zh-CN/docs/Learn/CSS">CSS</a>, and
          <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> languages,
          knowledge of the
          <a
            href="/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >terminal/command line</a
          >.
        </p>
        <p>
          Vue components are written as a combination of JavaScript objects that
          manage the app's data and an HTML-based template syntax that maps to
          the underlying DOM structure. For installation, and to use some of the
          more advanced features of Vue (like Single File Components or render
          functions), you'll need a terminal with node + npm installed.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To learn how to loop through an array of data and render it in multiple
        components.
      </td>
    </tr>
  </tbody>
</table>

## 利用 v-for 指令渲染列表

一个有效的待办事项列表需要有多个被渲染的 to-do 项，Vue 中的`v-for` 可以用来实现这种效果。它是 Vue 自带的指令，用于在 template 中实现循环，我们可以利用它将数组中的各项重复渲染成指定的特征。我们将利用它迭代待办事项列表，将其中的每一项展示为单独的 ToDoItem 组件。

### 添加一些需要被渲染的数据

首先我们需要准备一个待办事项数组。添加 `data` 属性到 `App.vue` 组件对象中，它包含一个 `ToDoItems` 字段，其值是待办事项数组。在最终完成添加新的待办事项功能之前，我们可以先 mock 一些待办项目，每个待办项目可以用一个对象表示，这个对象含有 `name` 和 `done` 属性。

像下面这样添加一些待办项目让我们可以利用`v-for` 来对它们进行渲染。

```js
export default {
  name: 'app',
  components: {
    ToDoItem
  },
  data() {
    return {
      ToDoItems: [
        { label: 'Learn Vue', done: false },
        { label: 'Create a Vue project with the CLI', done: true },
        { label: 'Have fun', done: true },
        { label: 'Create a to-do list', done: false }
      ]
    };
  }
};
```

现在我们有了一个列表，可以用`v-for`去展示它们了。指令的作用方式和元素的属性类似，就 v-for 而言，它类似 js 中的`for...in`循环，`v-for="item in items"` — `iterms`是你要迭代的列表， `item` 是数组中当前元素的引用。

`v-for`获取每个迭代的元素，并渲染它和它的子元素。在我们的例子中，我们用`<li>`的形式展示每一个待办事项，接下来我们会通过每个待办事项传递数据到其对应的`ToDoItem`组件。

### Key 属性

在进行数据传递之前，我们要了解下`key`属性，它和`v-for`使用，用来帮助 Vue 标识列表中的元素，这样 Vue 就不需要在列表变化时重新创建它们。但是 Vue 需要一个唯一的标识，即`key`来识别哪些元素是被复用的。

为了让 Vue 能正确的比较`key` ，key 属性需要是 numeric 或者 string 类型。用 name 字段不是个好主意，因为这个字段会被用户输入控制，无法保证唯一性。

我们可以使用`lodash.uniqueid()` ，像我们前一章节那样。

1. 导入 `lodash.uniqueid` 到 `App` 组件。

    ```js
     import uniqueId from 'lodash.uniqueid';
    ```

2. 添加 `id` 字段到 `ToDoItems` 数组的每一个元素中，并且将他们赋值为 `uniqueId('todo-')`。

    `App.vue` `<script>` 元素内容如下：

    ```js
    import ToDoItem from './components/ToDoItem.vue';
    import uniqueId from 'lodash.uniqueid'

    export default {
      name: 'app',
      components: {
        ToDoItem
      },
      data() {
        return {
          ToDoItems: [
            { id: uniqueId('todo-'), label: 'Learn Vue', done: false },
            { id: uniqueId('todo-'), label: 'Create a Vue project with the CLI', done: true },
            { id: uniqueId('todo-'), label: 'Have fun', done: true },
            { id: uniqueId('todo-'), label: 'Create a to-do list', done: false }
          ]
        };
      }
    };
    ```

3. 添加 `v-for` 指令和 `key` 属性到 `<li>` 元素：

    ```html
    <ul>
      <li v-for="item in ToDoItems" :key="item.id">
        <to-do-item label="My ToDo Item" :done="true"></to-do-item>
      </li>
    </ul>
    ```

    这样改后，`<cli>`标签中的 js 脚本就可以访问`item`了，这意味着我们可以使用`v-bind`来传递`item`对象的字段给`ToDoItem`组件了。这非常有用，我们想让列表中的待办事项的`label`值展示到它的 label 中，而不是显示一个静态的"My Todo Item"。此外，我们想让它们的 checked 状态反应它们的`done`字段，而不是默认的`done="false"`。

4. 把 `label="My ToDo Item"` 改成 `:label="item.label"`, `:done="false"` 改成 `:done="item.done"` ：

    ```html
    <ul>
      <li v-for="item in ToDoItems" :key="item.id">
         <to-do-item :label="item.label" :done="item.done"></to-do-item>
      </li>
    </ul>
    ```

现在当你去看运行着的 app 时，你会发现待办事项显示了它们自己正确的名字，如果你查看源码的话，你会发现输入都有了唯一的 id。![The app with a list of todo items rendered.](rendered-todo-items.png)

## 让我们来一点小重构

我们可以做一点代码重构。因为我们已经要为每一个待办事项创建一个唯一 id，所以不妨把 id 作为 ToDoItem 的一个 prop，而不是在每个 checkbox 里生成它。

添加一个新的 prop `id` 到 `ToDoItem` 组件。

1. 标记它为 required，类型是 `String` 。
2. 为防止命名冲突，删除掉`data`属性中的`id`字段。
3. 删除掉 `import uniqueId from 'lodash.uniqueid';` 这行。

`ToDoItem` 中的 `<script>` 如下所示：

```js
export default {
    props: {
        label: {required: true, type: String},
        done: {default: false, type: Boolean},
        id: {required: true, type: String}
    },
    data() {
        return {
           isDone : this.done,
        }
    },
}
```

现在，在 `App.vue` 组件中将 `item.id` 作为一个 prop 传递给 `ToDoItem` 组件。你的 `App.vue` template 如下所示：

```html
<template>
  <div id="app">
    <h1>My To-Do List</h1>
    <ul>
      <li v-for="item in ToDoItems" :key="item.id">
        <to-do-item :label="item.label" :done="item.done" :id="item.id"></to-do-item>
      </li>
    </ul>
  </div>
</template>
```

你渲染后的站点看起来是没有变化的，但是这次重构使得`item.id`像其他参数一样，作为 prop 从`App.vue`传递给`ToDoItem`。现在代码变得更有逻辑性和一致。

## 总结

我们现在有了样例数据，然后我们用循环将每一项渲染成`ToDoItem`。

接下来我们需要让用户可以输入它们自己的待办事项，想做到这一点，我们需要一个文本输入`<input>`，当用户输入数据时触发一个事件，在事件响应函数中需要将数据添加到待办事项列表并且重新渲染列表，我们还需要一个模型操控数据。我们将在下一篇文章中获取这些知识。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## In this module

- [Introduction to client-side frameworks](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [Framework main features](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [Getting started with React](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [Beginning our React todo list](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [Componentizing our React app](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [React interactivity: Events and state](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [React interactivity: Editing, filtering, conditional rendering](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [Accessibility in React](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [React resources](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [Getting started with Ember](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [Ember app structure and componentization](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Ember interactivity: Events, classes and state](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Ember Interactivity: Footer functionality, conditional rendering](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Routing in Ember](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ember resources and troubleshooting](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Getting started with Vue](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [Creating our first Vue component](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [Rendering a list of Vue components](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [Adding a new todo form: Vue events, methods, and models](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [Styling Vue components with CSS](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [Using Vue computed properties](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Vue conditional rendering: editing existing todos](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [Focus management with Vue refs](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Vue resources](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)

- Svelte

  - [Getting started with Svelte](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - [Starting our Svelte Todo list app](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - [Dynamic behavior in Svelte: working with variables and props](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - [Componentizing our Svelte app](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - [Advanced Svelte: Reactivity, lifecycle, accessibility](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - [Working with Svelte stores](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - [TypeScript support in Svelte](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - [Deployment and next steps](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)
