---
title: Vue 中的条件渲染：编辑现有的待办事项
slug: Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties","Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}

是时候添加一个我们仍然缺少，但十分重要的功能了——编辑现有的待办事项。为此，我们将利用 Vue 的条件渲染（即 `v-if` 和 `v-else`）来让我们能在现有待办视图和用于更新待办的编辑视图之间切换。我们还将实现删除待办事项的功能。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        <p>
          熟悉核心的 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a
            href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS</a> 和 <a
            href="/zh-CN/docs/Learn_web_development/Core/Scripting">JavaScript</a> 语言，了解<a
            href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >终端/命令行</a
          >知识。
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
      <td>学习如何使用 Vue 中的条件渲染。</td>
    </tr>
  </tbody>
</table>

## 创建编辑组件

我们可以先创建一个单独的组件来处理编辑功能。在你的 `components` 文件夹下，创建一个名为 `ToDoItemEditForm.vue` 的新文件。复制下面的代码到那个文件：

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

> [!NOTE]
> 先理解上面的代码，然后再阅读下面的说明，以确保你在继续学习之前弄清楚该组件的所有功能。这是一个有用的方法，它可以帮助你巩固到目前为止所学到的一切。

这段代码完成了编辑功能的核心部分。我们创建了一个表单，其中包含一个 `<input>` 标签，用于编辑我们的待办事项的名称。

还有一个“Save”按钮和“Cancel”按钮：

- 当“Save”按钮被点击时，组件通过 `item-edited` 事件创建一个新标签。
- 当“Cancel”按钮被点击时，组件通过 `edit-cancelled` 事件发出信号。

## 修改 ToDoItem 组件

在给我们的应用程序添加 `ToDoItemEditForm` 之前，我们需要对 `ToDoItem` 组件做出一些修改。具体来说，我们需要一个变量来监控是否有事项正在被编辑，以及一个按钮来切换那个变量。由于删除和编辑是密切相关的，我们也将添加一个“Delete”按钮。

像下面展示的这样，更新你的 `ToDoItem` 的模板。

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

我们在整个模板外面添加了一个用于布局的包装元素 `<div>`。

我们还添加了“Edit”和“Delete”按钮：

- 当点击“Edit”按钮时，将切换显示 `ToDoItemEditForm` 组件，这样我们就可以通过一个名为 `toggleToItemEditForm()` 的事件处理函数，来编辑我们的待办事项。这个处理函数将设置 `isEditing` 标志为真。要做到这一点，我们需要首先在我们的 `data()` 属性中定义它。
- 当点击“Delete”按钮时，将通过名为 `deleteToDo()` 的事件处理函数删除 todo 项。在这个处理函数中，我们将向父组件发送 `item-deleted` 事件来更新列表。

接下来我们定义点击事件处理函数和必要的 `isEditing` 标志。

在现有的 `isDone` 属性下面添加 `isEditing`：

```js
data() {
  return {
    isDone: this.done,
    isEditing: false
  };
}
```

现在将你的方法添加到 `methods` 属性中，放在 `data()` 属性下面：

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

## 通过 v-if 和 v-else 有条件地显示组件

现在我们有了一个可用的 `isEditing` 标志来表示事项正在被编辑（或者未被编辑）。如果 `isEditing` 为真，我们会用这个标志来展示我们的 `ToDoItemEditForm` 而不是复选框。为此，我们将使用另一个 Vue 指令：[`v-if`](https://cn.vuejs.org/api/built-in-directives.html#v-if)。

`v-if` 指令只会在传递给它的值为真的情况下渲染一个块。这和 `if` 语句在 JavaScript 起作用的方式相似。`v-if` 也有对应的 [`v-else-if`](https://cn.vuejs.org/api/built-in-directives#v-else-if) 和 [`v-else`](https://cn.vuejs.org/api/built-in-directives#v-else) 指令，在 Vue 模板中提供相当于 JavaScript 的 `else if` 和 `else` 逻辑。

需要注意的是，`v-else` 和 `v-else-if` 块需要是 `v-if`/`v-else-if` 块的第一个兄弟，否则 Vue 将无法识别它们。如果你需要条件渲染整个模板，你也可以将 `v-if` 添加到 `<template>` 标签上。

最后，由于 Vue 只会在一个事件渲染这些块中的一个，你可以在根组件使用 `v-if` + `v-else` 来只显示一个块。我们将在我们的应用程序中这样做，因为这将使我们能够用编辑表单替换显示待办事项的代码。

首先在 `ToDoItem` 组件的根 `<div>` 元素中添加 `v-if="!isEditing"` 属性，

```html
<div class="stack-small" v-if="!isEditing"></div>
```

接下来，在该 `<div>` 的关闭标签下面添加下面这行：

```html
<to-do-item-edit-form v-else :id="id" :label="label"></to-do-item-edit-form>
```

我们还需要导入和注册 `ToDoItemEditForm` 组件，这样我才能在这个模板里面使用它。在 `<script>` 元素的顶部添加这行：

```js
import ToDoItemEditForm from "./ToDoItemEditForm";
```

在组件对象中 `props` 属性上方添加一个 `components` 属性：

```js
components: {
  ToDoItemEditForm
},
```

现在，如果你打开你的应用程序并点击了一个待办事项的“Edit”按钮，你应该可以看到编辑表单代替了复选框。

![待办事项应用程序，显示有编辑和删除按钮，并且其中一个任务处于编辑模式，显示有编辑输入框和保存及取消按钮](todo-edit-delete.png)

然而，目前还没有退出编辑的方法。为了解决这个问题，我们需要在组件中添加一些更多的事件处理器。

## 退出编辑模式

首先，我们需要在 `ToDoItem` 组件的 `methods` 里添加一个 `itemEdited()` 方法。这个方法应该接受新的事项标签作为参数，向父组件发出一个 `itemEdited` 事件，并将 `isEditing` 设置为 `false`。

现在在你现存的方法下添加它：

```js
itemEdited(newLabel) {
  this.$emit('item-edited', newLabel);
  this.isEditing = false;
}
```

接下来，我们需要一个 `editCancelled()` 方法。这个方法没有参数，只是将 `isEditing` 设置回 `false`。在下面这个方法之前添加这个方法：

```js
editCancelled() {
  this.isEditing = false;
}
```

本节最后，我们将为 `ToDoItemEditForm` 组件发出的事件添加事件处理程序，并为每个事件添加适当的方法。

像这样更新你的 `<to-do-item-edit-form></to-do-item-edit-form>` 元素：

```html
<to-do-item-edit-form
  v-else
  :id="id"
  :label="label"
  @item-edited="itemEdited"
  @edit-cancelled="editCancelled">
</to-do-item-edit-form>
```

## 更新和删除 todo 项

现在，我们可以在编辑表单和复选框之间切换了。然而，我们实际上没有处理在 `App.vue` 中更新 `ToDoItems` 数组的操作。为了解决这个问题，我们需要监听 `item-edited` 事件，并相应地更新列表。我们还需要处理删除事件，以便删除待办事项。

在你的 `App.vue` 组件实体中添加下面新的方法，放在 `methods` 属性里现存方法下面：

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

- 对于 `item-deleted`，你需要把 `item.id` 传递给该方法。
- 对于 `item-edited`，你需要传递 `item.id` 和特殊的 `$event` 变量。这是一个特殊的 Vue 变量，用于传递事件数据给方法。当使用本地 HTML 事件（如 `click`）时，它将把本地事件对象传递给你的方法。

更新 `App.vue` 模板内的 `<to-do-item></to-do-item>` 元素，看起来像这样：

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

就这样——你现在应该能够编辑和删除列表中的项目了！

## 修复 `isDone` 状态的一个小错误

到目前为止似乎还不错，但实际上在添加编辑功能时，我们引入了一个错误。试着这样做：

1. 勾选（或取消勾选）任意一个 todo 复选框。
2. 按下该待办事项的“Edit”按钮。
3. 按“Cancel”按钮取消编辑。

注意你取消后复选框的状态——不仅应用程序忘记了复选框的状态，而且待办事项的完成状态现在也不正常了。如果你尝试再次勾选（或取消勾选）它，完成项的计数值将反向更改。这是因为在组件加载时，`data` 中的 `isDone` 只给出了值 `this.done`。

幸运的是，修复这个问题很容易：我们可以通过将我们的 `isDone` 数据转换为[计算属性](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties)来做到这一点。计算属性的另一个优点是，它们保留了[响应性](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals)，这意味着（在其他事情中）当模板发生变化时，它们的状态会被保存，就像我们现在做的那样。

所以，让我们来修复一下 `ToDoItem.vue`：

1. 从 `data()` 的属性中删除这一行：

   ```js
   isDone: this.done,
   ```

2. 在 `data() { }` 代码块的下面，添加以下内容：

   ```js
   computed: {
     isDone() {
       return this.done;
     }
   },
   ```

现在，当你保存并重新加载时，你将发现问题已经解决：当你在 todo 项的模板之间切换时，复选框的状态被保留了。

## 理解事件的混乱

最可能令人困惑的部分之一是：我们用来触发应用程序中所有交互的事件的混乱。为了更好地理解这一点，最好编写一个流程图、描述或图表，说明是什么事件，在哪里触发和监听，以及触发后会发生什么。

### App.vue

`<to-do-form>` 监听 `todo-added` 事件，由 `ToDoForm` 组件内的 `onSubmit()` 方法在提交表单时触发。**结果**：`addToDo()` 方法被调用，用于向 `ToDoItems` 数组添加新的 todo 项。

`<to-do-item>` 监听：

- `checkbox-changed` 事件由 `ToDoItem` 组件中的复选框 `<input>` 选中状态变化时触发。**结果**：`updateDoneStatus()` 方法被调用来更新相关 todo 项的完成状态。
- 当按下“Delete”按钮时，`ToDoItem` 组件内的 `deleteToDo()` 方法触发 `item-deleted` 事件。**结果**：`deleteToDo()` 方法被调用，来删除相关的 todo 项。
- 当监听到 `ToDoItemEditForm` 内部的 `onSubmit()` 方法触发的 `item-edited` 事件时，`ToDoItem` 组件中的 `itemEdited()` 方法触发 `item-edited` 事件。是的，两个不同的 `item-edited` 事件连锁发生了！**结果**：`editToDo()` 方法被调用，来更新相关 todo 项的标签。

### ToDoForm.vue

`<form>` 监听 `submit` 事件。**结果**：`onSubmit()` 方法被调用。该方法检查新标签是否为空，然后触发 `todo-added` 事件（随后 `App.vue` 中的元素监听到了该事件；见上文），最后清除新标签 `<input>`。

### ToDoItem.vue

满足`type="checkbox"` 的 `<input>` 元素监听 `change` 事件。**结果**：当勾选/取消勾选复选框时触发 `checkbox-changed` 事件（随后 `App.vue` 中的元素监听到了该事件；见上文）。

“Edit” `<button>` 监听 `click` 事件。**结果**：`toggleToItemEditForm()` 方法被调用。`this.isEditing` 变成 `true`，在重新渲染时，依次显示 todo 项的编辑表单。

“Delete” `<button>` 监听 `click` 事件。**结果**：`deleteToDo()` 方法被调用，它会触发 `item-deleted` 事件（随后 `App.vue` 中的元素监听到了该事件；见上文）。

`<to-do-item-edit-form>` 监听：

- `item-edited` 事件：当成功提交表单时，`ToDoItemEditForm` 组件中的 `onSubmit()` 方法会触发 `item-edited` 事件。**结果**：`itemEdited()` 方法被调用，它会触发 `item-edited` 事件（随后 `App.vue` 中的元素监听到了该事件；见上文），并设置 `this.isEditing` 为 `false`，这样在重新渲染时，编辑的表单将不再显示。
- `edit-cancelled` 事件：点击“Cancel”按钮时，`ToDoItemEditForm` 组件内的 `onCancel()` 方法会触发 `edit-cancelled` 事件。**结果**：`editCancelled()` 方法被调用，`isEditing` 被设置回 `false`，这样在重新渲染时，编辑的表单将不再显示。

### ToDoItemEditForm.vue

`<form>` 监听 `submit` 事件。**结果**：`onSubmit()` 方法被调用。该方法检查新的标签值是否为空，与旧的标签值是否相同。如果是，则发出 `item-edited` 事件（随后 `ToDoItem.vue` 中的元素监听到了该事件；见上文）。

“Cancel” `<button>` 监听 `click` 事件。**结果**：`onCancel()` 方法被调用。它触发 `edit-cancelled` 事件（随后 `ToDoItem.vue` 中的元素监听到了该事件；见上文）。

## 总结

这篇文章相当密集，我们在这里讨论了很多内容。现在我们的应用中有了编辑和删除功能，这非常令人兴奋。现在，我们的 Vue 系列已经接近尾声。最后一个要讨论的功能是焦点管理，或者换句话说：我们应如何提高应用程序的键盘无障碍。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties","Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}
