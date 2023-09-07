---
title: 使用 Vue event、method 和 model 添加一个新的 todo 表单
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

我们现在已经有了样本数据，还有一个循环，它获取每一位数据并将其呈现在我们应用程序的 `ToDoItem` 中。接下来我们真正需要的是允许我们的用户在应用程序中输入他们自己的待办事项的能力，为此我们需要一个“text”类型的 `<input>`，当数据输入时触发的事件提交，一个在提交时触发以添加数据并重新呈现列表的方法，以及一个控制数据的模型。这就是我们将在本文中介绍的内容。

<table>
  <tbody>
    <tr>
      <th scope="row">先决条件：</th>
      <td>
        <p>
          熟悉核心 <a href="/zh-CN/docs/Learn/HTML">HTML</a>、<a
            href="/zh-CN/docs/Learn/CSS"
            >CSS</a
          >
          和 <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言，了解
          <a
            href="/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools /Command_line"
            >终端/命令行</a
          >。
        </p>
        <p>
          Vue 组件被编写为管理应用程序数据的 JavaScript 对象和映射到底层 DOM
          结构的基于 HTML 的模板语法的组合。对于安装，以及使用 Vue
          的一些更高级的功能（如单文件组件或渲染功能），你需要一个安装了 node +
          npm 的终端。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解如何在 Vue 中处理表单，以及通过关联、事件、模型和方法。</td>
    </tr>
  </tbody>
</table>

## 创建一个新的待办事项表单

我们的 app 可以展示待办事项列表，但是我们不能更新该列表，除非手动更改代码。让我们新建一个组件来允许我们添加新的待办项。

1. 在 components 目录下，新建文件 `ToDoForm.vue`。

2. 创建一个空的 `<template>` 和 `<script>`：

   ```html
   <template></template>

   <script>
     export default {};
   </script>
   ```

3. 新建一个 HTML 表单来允许我们输入新的待办项并把它提交到 app。我们需要一个 [`<form>`](/zh-CN/docs/Web/HTML/Element/form)，它里面包含一个 [`<label>`](/zh-CN/docs/Web/HTML/Element/label)、一个 [`<input>`](/zh-CN/docs/Web/HTML/Element/input)、一个 [`<button>`](/zh-CN/docs/Web/HTML/Element/button)。更新后的模版如下：

   ```html
   <template>
     <form>
       <label for="new-todo-input"> What needs to be done? </label>
       <input
         type="text"
         id="new-todo-input"
         name="new-todo"
         autocomplete="off" />
       <button type="submit">Add</button>
     </form>
   </template>
   ```

   因此，现在我们有一个 form 组件可以用来输入新的待办项的标题，它最终会渲染成 `ToDoItem` 的 label。

4. 我们把这个组件添加到 app 中，返回 `App.vue` 然后在 `<script>` 添加下面的语句：

   ```js
   import ToDoForm from "./components/ToDoForm";
   ```

5. 在你的 App 组件中注册它

   ```js
   components: {
     ToDoItem, ToDoForm;
   }
   ```

6. 最后将 `ToDoForm` 组件添加到 App 中的 `<template>` 中，像下面这样：

   ```html
   <template>
     <div id="app">
       <h1>My To-Do List</h1>
       <to-do-form></to-do-form>
       <ul>
         <li v-for="item in ToDoItems" :key="item.id">
           <to-do-item
             :label="item.label"
             :done="item.done"
             :id="item.id"></to-do-item>
         </li>
       </ul>
     </div>
   </template>
   ```

现在，当你查看正在运行的站点时，你应该会看到显示的新表单。

![Our todo list app rendered with a text input to enter new todos](rendered-form-with-text-input.png)

如果你填写并单击“添加”按钮，页面会将表单发送回服务器，但这并不是我们真正想要的。我们真正想要做的是在 [`submit` 事件](/zh-CN/docs/Web/API/HTMLFormElement/submit_event)上运行一个方法，该方法将添加 `App` 中定义的 `ToDoItem` 数据列表的新待办事项。为此，我们需要向组件实例添加一个方法。

## 创建一个方法并用 v-on 绑定这个方法到一个事件上

我们需要将方法添加到 `ToDoForm` 组件对象中，以使方法可用。这是在组件的 `methods` 属性中完成的，它与 `data()`、`props` 等位于同一位置。`methods` 属性包含我们可能需要在组件中调用的任何方法。引用时，方法已完全运行，因此使用它们在模板内显示信息不是一个好主意。为了显示通过计算获得的数据，你应该使用 `computed` 属性，我们稍后会介绍。

1. 在这个组件中，我们需要在 `ToDoForm` 组件对象内的 `methods` 属性中添加一个 `onSubmit()` 方法。我们将使用它来处理提交操作。就像这样：

   ```js
   export default {
     methods: {
       onSubmit() {
         console.log("form submitted");
       },
     },
   };
   ```

2. 接下来我们需要将该方法绑定到我们的 `<form>` 元素的 `submit` 事件处理程序。就像 Vue 如何使用 [`v-bind`](https://vuejs.org/v2/api/#v-bind) 语法来绑定属性，Vue 有用于事件处理的特殊指令：[`v-on`](https://vuejs.org/v2/api/#v-on)。`v-on` 指令通过 `v-on:event="method"` 语法工作。和 `v-bind` 很像，还有一个简写语法：`@event="method"`。为了保持一致性，我们将在此处使用简写语法。将 `submit` 处理程序添加到你的 `<form>` 元素，如下所示：

   ```html
   <form @submit="onSubmit"></form>
   ```

3. 当你运行此程序时，应用程序仍会将数据发布到服务器，从而导致刷新。由于我们在客户端上进行所有处理，因此没有服务器来处理回发。我们还会在页面刷新时丢失所有本地状态。为了防止浏览器发布到服务器，我们需要阻止事件的默认操作通过页面冒泡（[`Event .preventDefault()`](/zh-CN/docs/Web/API/Event/preventDefault)，在原生 JavaScript 中）。Vue 有一个特殊的语法叫做 **event modifiers** 可以在我们的模板中为我们处理这个问题。修饰符被附加到事件的末尾，带有一个点，如下所示：`@event.modifier`。以下是事件修饰符列表：

   - `.stop`：停止传播事件。等效于常规 JavaScript 事件中的 [`Event.stopPropagation()`](/zh-CN/docs/Web/API/Event/stopPropagation)。
   - `.prevent`：阻止事件的默认行为。等效于 [`Event.preventDefault()`](/zh-CN/docs/Web/API/Event/preventDefault)。
   - `.self`：仅当事件是从该确切元素分派时触发处理程序。
   - `{.key}`：仅通过指定键触发事件处理程序。 [MDN 有一个有效键值列表](/zh-CN/docs/Web/API/KeyboardEvent/key/Key_Values); 多词键只需转换为 kebab 大小写（例如 `page-down`）。
   - `.native`：监听组件根（最外层的包装）元素上的原生事件。
   - `.once`：监听事件，直到它被触发一次，然后不再触发。
   - `.left`：仅通过鼠标左键事件触发处理程序。
   - `.right`：仅通过鼠标右键事件触发处理程序。
   - `.middle`：仅通过鼠标中键事件触发处理程序。
   - `.passive`：等效于在 vanilla JavaScript 中使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 创建事件监听器时传入 `{ passive: true }` 参数。

   在这种情况下，我们需要使用 `.prevent` 处理程序来停止浏览器的默认提交操作。将 `.prevent` 添加到模板中的 `@submit` 处理程序中，如下所示：

   ```js
   <form @submit.prevent="onSubmit">
   ```

如果你现在尝试提交表单，你会注意到页面没有重新加载。如果打开控制台，可以看到我们在 `onSubmit()` 方法中添加的 [`console.log()`](/zh-CN/docs/Web/API/Console/log) 所输出结果。

## 用 v-model 来绑定数据到输入

接下来，我们需要一种从表单的 `<input>` 中获取值的方法，这样我们就可以将新的待办事项添加到我们的 `ToDoItems` 数据列表中。

我们首先需要的是表单中的 `data` 属性来跟踪待办事项的值。

1. 向我们的 `ToDoForm` 组件对象添加一个 `data()` 方法，该方法返回一个 `label` 字段。我们可以将 `label` 的初始值设置为空字符串。

   你的组件对象现在应该如下所示：

   ```js
   export default {
     methods: {
       onSubmit() {
         console.log("form submitted");
       },
     },
     data() {
       return {
         label: "",
       };
     },
   };
   ```

2. 我们现在需要一些方法将 `new-todo-input` 元素字段的值附加到 `label` 字段。Vue 对此有一个特殊的指令：[`v-model`](https://vuejs.org/v2/api/#v-model)。`v-model` 绑定到你在其上设置的数据属性，并使其与 `<input>` 保持同步。`v-model` 适用于所有不同的输入类型，包括复选框、单选框和选择输入。要使用 `v-model`，你需要向 `<input>` 添加一个结构为 `v-model="variable"` 的属性。

   所以在我们的例子中，我们会将它添加到我们的 `new-todo-input` 字段中，如下所示。现在就这样做：

   ```js
   <input
     type="text"
     id="new-todo-input"
     name="new-todo"
     autocomplete="off"
     v-model="label"
   />
   ```

   > **备注：** 你还可以通过事件和 `v-bind` 属性的组合将数据与 `<input>` 值同步。事实上，这就是 `v-model` 在幕后所做的。但是，确切的事件和属性组合因输入类型而异，并且比仅使用 `v-model` 快捷方式需要更多代码。

3. 让我们通过记录在我们的 `onSubmit()` 方法中提交的数据的值来测试我们对 `v-model` 的使用。在组件中，使用 `this` 关键字访问数据属性。所以我们使用 `this.label` 访问我们的 `label` 字段。

   更新你的 `onSubmit()` 方法，使其如下所示：

   ```js
   methods: {
     onSubmit() {
       console.log('Label value: ', this.label);
     }
   },
   ```

4. 现在回到你正在运行的应用程序，在 `<input>` 字段中添加一些文本，然后单击“添加”按钮。你应该会看到你输入的值已记录到控制台，例如：

   ```plain
   Label value: My value
   ```

## 使用修饰符改变 `v-model` 的行为

与事件修饰符类似，我们也可以添加修饰符来改变 `v-model` 的行为。在我们的案例中，有两个值得考虑。第一个，`.trim`，将删除输入之前或之后的空格。我们可以将修饰符添加到我们的 `v-model` 语句中，如下所示：`v-model.trim="label"`。

我们应该考虑的第二个修饰符称为 `.lazy`。当 `v-model` 同步文本输入的值时，此修饰符会发生变化。如前所述，`v-model` 同步通过使用事件更新变量来工作。对于文本输入，此同步使用 [`input` 事件](/zh-CN/docs/Web/API/HTMLElement/input_event)进行。通常，这意味着 Vue 在每次击键后都会同步数据。`.lazy` 修饰符导致 `v-model` 使用 [`change` 事件](/zh-CN/docs/Web/API/HTMLElement/change_event)代替。这意味着 Vue 只会在输入失去焦点或提交表单时同步数据。就我们的目的而言，这更合理，因为我们只需要最终数据。

要同时使用 `.lazy` 修饰符和 `.trim` 修饰符，我们可以将它们链接起来，例如 `v-model.lazy.trim="label"`。

如上所示更新你的 `v-model` 属性以链接 `lazy` 和 `trim`，然后再次测试你的应用。例如，尝试提交一个两端都有空格的值。

## 使用自定义事件将数据传递给父级

我们现在非常接近能够将新的待办事项添加到我们的列表中。接下来我们需要做的是将新创建的待办事项传递给我们的 `App` 组件。为此，我们可以让我们的 `ToDoForm` 发出一个传递数据的自定义事件，并让 `App` 监听它。这与 HTML 元素上的原生事件非常相似：子组件可以发出可以通过 `v-on` 监听的事件。

在 `ToDoForm` 的 `onSubmit` 事件中，我们添加一个 `todo-added` 事件。自定义事件的发射方式如下：`this.$emit("event-name")`。重要的是要知道事件处理程序区分大小写并且不能包含空格。Vue 模板也被转换为小写，这意味着 Vue 模板无法监听以大写字母命名的事件。

1. 将 `onSubmit()` 方法中的 `console.log()` 替换为以下内容：

   ```js
   this.$emit("todo-added");
   ```

2. 接下来，回到 `App.vue` 并添加一个 `methods` 属性到包含 `addToDo()` 方法的组件对象，如图所示 以下。目前，此方法只需将 `To-do added` 记录到控制台即可。

   ```js
   export default {
     name: "app",
     components: {
       ToDoItem,
       ToDoForm,
     },
     data() {
       return {
         ToDoItems: [
           { id: uniqueId("todo-"), label: "Learn Vue", done: false },
           {
             id: uniqueId("todo-"),
             label: "Create a Vue project with the CLI",
             done: true,
           },
           { id: uniqueId("todo-"), label: "Have fun", done: true },
           { id: uniqueId("todo-"), label: "Create a to-do list", done: false },
         ],
       };
     },
     methods: {
       addToDo() {
         console.log("To-do added");
       },
     },
   };
   ```

3. 接下来，将 `todo-added` 事件的事件监听器添加到 `<to-do-form></to-do-form>`，它在事件触发时调用 `addToDo()` 方法。使用 `@` 简写，监听器看起来像这样：`@todo-added="addToDo"`:

   ```html
   <to-do-form @todo-added="addToDo"></to-do-form>
   ```

4. 当你提交 `ToDoForm` 时，你应该会看到来自 `addToDo()` 方法的控制台日志。这很好，但我们仍然没有将任何数据传递回 `App.vue` 组件。我们可以通过将额外的参数传递给 `ToDoForm` 组件中的 `this.$emit()` 函数来做到这一点。

   在这种情况下，当我们触发事件时，我们希望将 `label` 数据连同它一起传递。这是通过在 `$emit()` 方法中包含你要作为另一个参数传递的数据来完成的：`this.$emit("todo-added", this.label)`。这类似于原生 JavaScript 事件如何包含数据，除了自定义 Vue 事件默认不包含事件对象。这意味着发出的事件将直接匹配你提交的任何对象。所以在我们的例子中，我们的事件对象只是一个字符串。

   像这样更新你的 `onSubmit()` 方法：

   ```js
   onSubmit() {
     this.$emit('todo-added', this.label)
   }
   ```

5. 要真正在 `App.vue` 中获取这些数据，我们需要向我们的 `addToDo()` 方法添加一个参数，其中包含 `label` 新的待办事项。返回 `App.vue` 并立即更新：

   ```js
   methods: {
     addToDo(toDoLabel) {
       console.log('To-do added:', toDoLabel);
     }
   }
   ```

如果你再次测试你的表单，你将看到在提交时输入的任何文本都已记录到控制台中。Vue 自动将 `this.$emit()` 中事件名称后面的参数传递给你的事件处理程序。

## 将新的待办事项添加到我们的数据中

现在我们在 `App.vue` 中获得了来自 `ToDoForm` 的数据，我们需要在 `ToDoItems` 数组中添加一个表示它的项目。这可以通过将新的待办事项对象推送到包含我们新数据的数组来完成。

1. 像这样更新你的 `addToDo()` 方法：

   ```js
   addToDo(toDoLabel) {
     this.ToDoItems.push({id:uniqueId('todo-'), label: toDoLabel, done: false});
   }
   ```

2. 再次尝试测试你的表单，你应该会看到新的待办事项被附加到列表的末尾。
3. 在我们继续之前，让我们做进一步的改进。如果你在输入为空时提交表单，则没有文本的待办事项仍会添加到列表中。为了解决这个问题，我们可以防止在 name 为空时触发 todo-added 事件。由于 `.trim` 指令已经对 name 进行了修剪，因此我们只需要测试空字符串。回到你的 `ToDoForm` 组件，像这样更新 `onSubmit()` 方法。如果标签值为空，我们就不发出 `todo-added` 事件。

   ```js
   onSubmit() {
     if(this.label === "") {
       return;
     }
     this.$emit('todo-added', this.label);
   }
   ```

4. 再次尝试你的表单。现在你将无法将空项目添加到待办事项列表中。

![我们的待办事项列表应用程序使用文本输入呈现以输入新待办事项](rendered-form-with-new-items.png)

## 使用 `v-model` 更新输入值

在我们的 `ToDoForm` 组件中还有一件事需要修复——提交后，`<input>` 仍然包含旧值。但这很容易解决——因为我们使用 `v-model` 将数据绑定到 `ToDoForm` 中的 `<input>`，如果 我们将 name 参数设置为空字符串，输入也会更新。

将你的 `ToDoForm` 组件的 `onSubmit()` 方法更新为：

```js
onSubmit() {
  if(this.label === "") {
    return;
  }
  this.$emit('todo-added', this.label);
  this.label = "";
}
```

现在，当你单击“添加”按钮时，“new-todo-input”将自行清除。

## 总结

非常好。我们现在可以将待办事项添加到我们的表单中！我们的应用程序现在开始感觉具有交互性，但一个问题是到目前为止我们完全忽略了它的外观和感觉。在下一篇文章中，我们将集中精力解决这个问题，看看 Vue 为组件样式提供的不同方式。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
