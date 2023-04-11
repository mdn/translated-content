---
title: "Vue 中的条件渲染：编辑现有的待办事项"
slug: >-
  Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

现在是时候添加我们还缺少的主要功能之一了--编辑现有的待办事项的能力。为此，我们将利用 Vue 的条件渲染功能--即 `v-if` 和 `v-else` --来允许我们在现有待办事项的视图和可以更新待办事项标签的编辑视图之间进行切换。我们还将考虑添加删除待办事项的功能。

<table>
  <tbody>
    <tr>
      <th scope="row">预备条件：</th>
      <td>
        <p>
          熟悉核心的  <a href="/en-US/docs/Learn/HTML">HTML</a>、
          <a href="/en-US/docs/Learn/CSS">CSS</a>、和
          <a href="/en-US/docs/Learn/JavaScript">JavaScript</a> 语言，了解
          <a
            href="/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >终端/命令行</a
          >.
        </p>
        <p>
          Vue 组件是由管理应用程序数据的 JavaScript 对象和映射到基础 DOM
          结构的基于 HTML 的模板语法组成的。为了进行安装并使用 Vue
          的一些更高级的功能（例如“单文件组件（SFC）”或渲染功能），你将需要一个装有
          node + npm 的终端。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习如何在 Vue 中做条件渲染</td>
    </tr>
  </tbody>
</table>

## 创建一个可编辑的组件

我们可以先创建一个单独的组件来处理编辑功能。在你的 `components` 文件夹下，创建一个名叫`ToDoItemEditForm.vue` 的新文件。复制下面的代码到那个文件：

```html
<template>
  <form class="stack-small" @submit.prevent="onSubmit">
    <div>
      <label class="edit-label">Edit Name for &quot;\{{label}}&quot;</label>
      <input
        :id="id"
        type="text"
        autocomplete="off"
        v-model.lazy.trim="newLabel" />
    </div>
    <div class="btn-group">
      <button type="button" class="btn" @click="onCancel">
        Cancel
        <span class="visually-hidden">editing \{{label}}</span>
      </button>
      <button type="submit" class="btn btn__primary">
        Save
        <span class="visually-hidden">edit for \{{label}}</span>
      </button>
    </div>
  </form>
</template>
<script>
  export default {
    props: {
      label: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        newLabel: this.label,
      };
    },
    methods: {
      onSubmit() {
        if (this.newLabel && this.newLabel !== this.label) {
          this.$emit("item-edited", this.newLabel);
        }
      },
      onCancel() {
        this.$emit("edit-cancelled");
      },
    },
  };
</script>
<style scoped>
  .edit-label {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #0b0c0c;
    display: block;
    margin-bottom: 5px;
  }
  input {
    display: inline-block;
    margin-top: 0.4rem;
    width: 100%;
    min-height: 4.4rem;
    padding: 0.4rem 0.8rem;
    border: 2px solid #565656;
  }
  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  form > * {
    flex: 0 0 100%;
  }
</style>
```

> **注意：** 理解上面的代码，然后阅读下面的说明，以确保你在继续学习之前弄清楚该组件的所有功能。这是一个有用的方法，它可以帮助你巩固到目前为止所学到的一切。

这段代码完成了编辑功能的核心部分。我们创建了一个表单，其中包含一个 `<input>` 标签，用于编辑我们的待办事项的名称。

有一个“保存”按钮和“取消”按钮：

- 当“保存”按钮被点击，组件通过一个 `item-edited` 事件发出一个标签。
- 当“取消”按钮被点击，组件通过  `edit-cancelled` 事件发出信号。

## 修改我们的 ToDoTtem 组件

在我们给我们的应用程序添加 `ToDoItemEditForm` 之前，我们需要对我们的 `ToDoItem` 组件做出一些修改。具体来说，我们需要一个变量来监控是否有事项正在被编辑，以及一个按钮来切换那个变量。由于删除是密切相关的，我们也将添加一个 `Delete` 按钮。

像下面展示的这样更新你的 `ToDoItem` 的模板。

```html
<template>
  <div class="stack-small">
    <div class="custom-checkbox">
      <input
        type="checkbox"
        class="checkbox"
        :id="id"
        :checked="isDone"
        @change="$emit('checkbox-changed')" />
      <label :for="id" class="checkbox-label">\{{label}}</label>
    </div>
    <div class="btn-group">
      <button type="button" class="btn" @click="toggleToItemEditForm">
        Edit <span class="visually-hidden">\{{label}}</span>
      </button>
      <button type="button" class="btn btn__danger" @click="deleteToDo">
        Delete <span class="visually-hidden">\{{label}}</span>
      </button>
    </div>
  </div>
</template>
```

我们在整个模板外面添加了一个包装器 `<div>` 用于布局。

We've also added "Edit" and "Delete" buttons:
我们还添加了“编辑”和“删除”按钮：

- 当点击“编辑”按钮时，将切换显示 “ToDoItemEditForm”组件，这样我们就可以通过一个名为 “toggleToItemEditForm()”的事件处理函数来编辑我们的待办事项。这个处理函数将设置 `isEditing` 标志为真。要做到这一点，我们需要首先在我们的 `data()` 属性中定义它。

- 当点击“删除”按钮时，将通过名为 `deleteToDo()` 的事件处理函数删除待办事项。在这个处理器中我们将向我们的父组件发送 `item-deleted` 事件一更新列表。

接下来我们定义我们的点击事件处理器和必要的 `isEditing` 标志。

在现有的 `isDone` 数据点下面添加 `isEditing`：

```js
data() {
  return {
    isDone: this.done,
    isEditing: false
  };
}
```

现在将你的方法添加到 methods 属性中，就在你的 `data()` 属性下面：

```js
methods: {
    deleteToDo() {
      this.$emit('item-deleted');
    },
    toggleToItemEditForm() {
      this.isEditing = true;
    }
  }
```

## 通过 v:if 和 v:else 有条件地显示组件

现在我们有了一个可用的 `isEditing` 标志来表示事项正在被编辑（或者未被编辑）。如果 `isEditing` 为真，我们会用这个标志来展示我们的 `ToDoItemEditForm` 而不是复选框。为此，我们将使用另一个 Vue 指令：[`v-if`](https://vuejs.org/api/built-in-directives.html#v-if).

 `v-if` 指令只会在传递给它的值为真的情况下渲染一个块。这和 `if` 语句在 JavaScript 起作用的方式相似。`v-if` 也有对应的 [`v-else-if`](https://vuejs.org/api/built-in-directives.html#v-else-if) 和 [`v-else`](https://vuejs.org/api/built-in-directives.html#v-else) 指令，在Vue模板中提供相当于 JavaScript 的 `else if` 和 `else` 逻辑。

It's important to note that `v-else` and `v-else-if` blocks need to be the first sibling of a `v-if`/`v-else-if` block, otherwise Vue will not recognize them. You can also attach `v-if` to a `<template>` tag if you need to conditionally render an entire template.
需要注意的是，`v-else` 和 `v-else-if` 块需要是 `v-if`/`v-else-if` 块的第一个兄弟，否则 Vue 将无法识别它们。如果你需要条件渲染整个模板，你也可以将 `v-if` 添加到 `<template>` 标签上。

最后，由于 Vue 只会在一个事件渲染这些块中的一个，你可以在根组件使用 `v-if` + `v-else` 来只显示一个块。我们将在我们的应用程序中这样做，因为这将使我们能够用编辑表单替换显示待办事项的代码。

首先在你的 `ToDoItem` 组件的根`<div>` 添加 `v-if="!isEditing"` 

```html
<div class="stack-small" v-if="!isEditing"></div>
```

接下来，在该`<div>`的关闭标签下面添加下面这行：

```html
<to-do-item-edit-form v-else :id="id" :label="label"></to-do-item-edit-form>
```

我们还需要导入和注册`ToDoItemEditForm` 组件，这样我才能在这个模板里面使用它。在你的 `<script>` 元素的顶部添加这行：

```js
import ToDoItemEditForm from "./ToDoItemEditForm";
```

And add a `components` property above the `props` property inside the component object:

```js
components: {
  ToDoItemEditForm
},
```

现在，如果你打开你的应用程序并点击了一个待办事项的“编辑”按钮，你应该可以看到编辑表单代替了复选框。

![任务列表应用程序，显示有编辑和删除按钮，并且其中一个任务处于编辑模式，显示有编辑输入框和保存及取消按钮。](todo-edit-delete.png)

然而，目前还没有退出编辑的方法。为了解决这个问题，我们需要在组件中添加一些更多的事件处理程序。

## 退出编辑模式

首先，我们需要添加一个在我们  `ToDoItem` 组件的 `methods` 里添加一个 `itemEdited()` 方法。这个方法应该接受新的事项标签作为参数，向父组件发出一个`itemEdited`事件，并将 `isEditing` 设置为 `false`。

现在在你现存的方法下添加它：

```js
itemEdited(newLabel) {
  this.$emit('item-edited', newLabel);
  this.isEditing = false;
}
```

接下来，我们需要一个 `editCancelled()` 方法。这个方法没有参数，只是将`isEditing` 设置回 `false` 。在下面这个方法之前添加这个方法：

```js
editCancelled() {
  this.isEditing = false;
}
```

本节最后，我们将为 `ToDoItemEditForm` 组件发出的事件添加事件处理程序，并为每个事件添加适当的方法。

更新你的 `<to-do-item-edit-form></to-do-item-edit-form>` 调用，看起来像这样：

```html
<to-do-item-edit-form
  v-else
  :id="id"
  :label="label"
  @item-edited="itemEdited"
  @edit-cancelled="editCancelled">
</to-do-item-edit-form>
```

## Updating and deleting todo items

现在，我们可以在编辑表单和复选框之间切换了。然而，我们实际上没有处理在 `App.vue` 中更新 `ToDoItems` 数组的操作。为了解决这个问题，我们需要监听 `item-edited` 事件，并相应地更新列表。我们还需要处理删除事件，以便删除待办事项。

在你的 `App.vue` 组件实体中添加下面新的方法，在 `methods` 属性里现存方法下面：

```js
deleteToDo(toDoId) {
  const itemIndex = this.ToDoItems.findIndex((item) => item.id === toDoId);
  this.ToDoItems.splice(itemIndex, 1);
},
editToDo(toDoId, newLabel) {
  const toDoToEdit = this.ToDoItems.find((item) => item.id === toDoId);
  toDoToEdit.label = newLabel;
}
```

接下来，我们将为 `item-deleted` 和 `item-edited` 事件添加事件监听器：

- 对 `item-deleted`，你需要把 `item.id` 传递给该方法。
- For `item-edited`, you'll need to pass the `item.id` and the special `$event` variable. This is a special Vue variable used to pass event data to methods. When using native HTML events (like `click`), this will pass the native event object to your method.对于`item-edited`，你需要传递 `item.id` 和特殊的 `$event` 变量。这是一个特殊的 Vue 变量，用于传递事件数据给方法。当使用本地HTML事件（如 `click` ）时，它将把本地事件对象传递给你的方法。

更新`App.vue`模板内的`<to-do-item>`调用，看起来像这样：

```html
<to-do-item
  :label="item.label"
  :done="item.done"
  :id="item.id"
  @checkbox-changed="updateDoneStatus(item.id)"
  @item-deleted="deleteToDo(item.id)"
  @item-edited="editToDo(item.id, $event)">
</to-do-item>
```

就这样--你现在应该能够编辑和删除列表中的项目了!

## 修复 isDone 状态的一个小错误

到目前为止一切很好，但实际上在添加编辑功能时我们引入了一个错误。试着这样做：

1. Check (or uncheck) one of the todo checkboxes.
2. Press the "Edit" button for that todo item.
3. Cancel the edit by pressing the "Cancel" button.

Note the state of the checkbox after you cancel — not only has the app forgotten the state of the checkbox, but the done status of that todo item is now out of whack. If you try checking (or unchecking) it again, the completed count will change in the opposite way to what you'd expect. This is because the `isDone` inside `data` is only given the value `this.done` on component load.

Fixing this is fortunately quite easy — we can do this by converting our `isDone` data item into a [computed property](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties) — another advantage of computed properties is that they preserve [reactivity](https://vuejs.org/guide/essentials/reactivity-fundamentals.html), meaning (among other things) that their state is saved when the template changes like ours is now doing.

So, let's implement the fix in `ToDoItem.vue`:

1. Remove the following line from inside our `data()` property:

   ```js
   isDone: this.done,
   ```

2. Add the following block below the data() { } block:

   ```js
   computed: {
     isDone() {
       return this.done;
     }
   },
   ```

Now when you save and reload, you'll find that the problem is solved — the checkbox state is now preserved when you switch between todo item templates.

## Understanding the tangle of events

One of the most potentially confusing parts is the tangle of standard and custom events we've used to trigger all the interactivity in our app. To understand this better, it is a good idea to write out a flow chart, description, or diagram of what events are emitted where, where they are being listened for, and what happens as a result of them firing.

### App.vue

`<to-do-form>` listens for:

- `todo-added` event emitted by the `onSubmit()` method inside the `ToDoForm` component when the form is submitted.
  **Result**: `addToDo()` method invoked to add new todo item to the `ToDoItems` array.

`<to-do-item>` listens for:

- `checkbox-changed` event emitted by the checkbox `<input>` inside the `ToDoItem` component when it is checked or unchecked.
  **Result**: `updateDoneStatus()` method invoked to update done status of associated todo item.
- `item-deleted` event emitted by the `deleteToDo()` method inside the `ToDoItem` component when the "Delete" button is pressed.
  **Result**: `deleteToDo()` method invoked to delete associated todo item.
- `item-edited` event emitted by the `itemEdited()` method inside the `ToDoItem` component when the `item-edited` event emitted by the `onSubmit()` method inside the `ToDoItemEditForm` has been successfully listened for. Yes, this is a chain of two different `item-edited` events!
  **Result**: `editToDo()` method invoked to update label of associated todo item.

### ToDoForm.vue

`<form>` listens for `submit` event.
**Result**: `onSubmit()` method is invoked, which checks that the new label is not empty, then emits the `todo-added` event (which is then listened for inside `App.vue`, see above), and finally clears the new label `<input>`.

### ToDoItem.vue

The `<input>` of `type="checkbox"` listens for `change` events.
**Result**: `checkbox-changed` event emitted when the checkbox is checked/unchecked (which is then listened for inside `App.vue`; see above).

"Edit" `<button>` listens for `click` event.
**Result**: `toggleToItemEditForm()` method is invoked, which toggles `this.isEditing` to `true`, which in turn displays the todo item's edit form on re-render.

"Delete" `<button>` listens for `click` event.
**Result**: `deleteToDo()` method is invoked, which emits the `item-deleted` event (which is then listened for inside `App.vue`; see above).

`<to-do-item-edit-form>` listens for:

- `item-edited` event emitted by the `onSubmit()` method inside the `ToDoItemEditForm` component when the form is successfully submitted.
  **Result**: `itemEdited()` method is invoked, which emits the `item-edited` event (which is then listened for inside `App.vue`, see above), and sets `this.isEditing` back to `false`, so that the edit form is no longer shown on re-render.
- `edit-cancelled` event emitted by the `onCancel()` method inside the `ToDoItemEditForm` component when the "Cancel" button is clicked.
  **Result**: `editCancelled()` method is invoked, which sets `this.isEditing` back to `false`, so that the edit form is no longer shown on re-render.

### ToDoItemEditForm.vue

`<form>` listens for `submit` event.
**Result**: `onSubmit()` method is invoked, which checks to see if the new label value is not blank, and not the same as the old one, and if so emits the `item-edited` event (which is then listened for inside `ToDoItem.vue`, see above).

"Cancel" `<button>` listens for `click` event.
**Result**: `onCancel()` method is invoked, which emits the `edit-cancelled` event (which is then listened for inside `ToDoItem.vue`, see above).

## Summary

This article has been fairly intense, and we covered a lot here. We've now got edit and delete functionality in our app, which is fairly exciting. We are nearing the end of our Vue series now. The last bit of functionality to look at is focus management, or put another way, how we can improve our app's keyboard accessibility.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
