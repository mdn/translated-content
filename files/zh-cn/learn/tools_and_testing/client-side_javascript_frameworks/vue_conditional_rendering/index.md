---
title: Vue 中的条件渲染：编辑现有的待办事项
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Now it is time to add one of the major parts of functionality that we're still missing — the ability to edit existing todo items. To do this, we will take advantage of Vue's conditional rendering capabilities — namely `v-if` and `v-else` — to allow us to toggle between the existing todo item view, and an edit view where you can update todo item labels. We'll also look at adding functionality to delete todo items.
是时候添加一个我们仍然缺少，但十分重要的功能了————编辑现有的待办事项。为此，我们将利用 Vue 的条件渲染（即 `v-if` 和 `v-else`）来让我们能在现有待办视图和用于更新待办的编辑视图之间切换。我们还将实现删除待办事项的功能。

<table>
  <tbody>
    <tr>
      <th scope="row">预备条件：</th>
      <td>
        <p>
          熟悉核心的 <a href="/zh-CN/docs/Learn/HTML">HTML</a>、<a
            href="/zh-CN/docs/Learn/CSS">CSS</a> 和 <a
            href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言，了解<a
            href="/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
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

## Creating an editing component
创建编辑组件

We can start by creating a separate component to handle the editing functionality. In your `components` directory, create a new file called `ToDoItemEditForm.vue`. Copy the following code into that file:
我们可以先创建一个单独的组件来处理编辑功能。在“components”目录中，创建一个名为“ToDoItemEditForm.vue”的新文件。将以下代码复制到该文件中:

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

> **Note:** Walk through the above code then read the below description to make sure you understand everything the component is doing before moving on. This is a useful way to help reinforce everything you've learned so far.
**注意:**浏览以上代码，然后阅读下面的描述，以确保在继续之前理解组件正在做的所有事情。这是一种有用的方法，可以帮助你巩固到目前为止所学的知识。

This code sets up the core of the edit functionality. We create a form with an `<input>` field for editing the name of our to-do.
这段代码设置了编辑功能的核心。我们创建了一个带有“<input>”字段的表单，用于编辑待办事项的名称。

There is a "Save" button and a "Cancel" button:
有“保存”按钮和“取消”按钮:

- When the "Save" button is clicked, the component emits the new label via an `item-edited` event.
- When the "Cancel" button is clicked, the component signals this by emitting an `edit-cancelled` event.
- 当单击“Save”按钮时，组件通过“item-edited”事件发出新标签。
- 当单击“Cancel”按钮时，组件通过发出“edit-cancelled”事件来发出信号。

## Modifying our ToDoItem component
修改ToDoItem组件

Before we can add `ToDoItemEditForm` to our app, we need to make a few modifications to our `ToDoItem` component. Specifically, we need to add a variable to track if the item is being edited, and a button to toggle that variable. We'll also add a `Delete` button since deletion is closely related.
在我们可以添加' ToDoItemEditForm '到我们的应用程序之前，我们需要对' ToDoItem '组件做一些修改。具体来说，我们需要添加一个变量来跟踪条目是否正在被编辑，以及一个按钮来切换该变量。我们还将添加一个“删除”按钮，因为删除与此密切相关。

Update your `ToDoItem`'s template as shown below.
如下所示更新您的ToDoItem模板。

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

We've added a wrapper `<div>` around the whole template for layout purposes.
为了布局，我们在整个模板周围添加了一个包装器' <div> '。

We've also added "Edit" and "Delete" buttons:
我们还增加了“编辑”和“删除”按钮:

- The "Edit" button, when clicked, will toggle displaying the `ToDoItemEditForm` component so we can use it to edit our todo item, via an event handler function called `toggleToItemEditForm()`. This handler will set an `isEditing` flag to true. To do that, we'll need to first define it inside our `data()` property.
- The "Delete" button, when clicked, will delete the todo item via an event handler function called `deleteToDo()`. In this handler we'll emit an `item-deleted` event to our parent component so the list can be updated.
- “编辑”按钮，点击时，将切换显示' ToDoItemEditForm '组件，以便我们可以使用它来编辑我们的todo项目，通过一个事件处理函数称为' toggleToItemEditForm() '。这个处理程序将把“isEditing”标记设置为true。要做到这一点，我们首先需要在' data() '属性中定义它。
- 点击“删除”按钮时，将通过名为“deleteToDo()”的事件处理函数删除待办事项项。在这个处理程序中，我们将向父组件发出一个' item-deleted '事件，以便更新列表。

Let's define our click handlers, and the necessary `isEditing` flag.
让我们定义我们的点击处理程序，以及必要的' isEditing '标志。

Add `isEditing` below your existing `isDone` data point:
在现有的“isDone”数据点下面添加“isEditing”

```js
data() {
  return {
    isDone: this.done,
    isEditing: false
  };
}
```

Now add your methods inside a methods property, right below your `data()` property:
现在将你的方法添加到一个methods属性中，就在你的' data() '属性的正下方:

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

## Conditionally displaying components via v:if and v:else
通过v:if和v:else有条件地显示组件

Now we have an `isEditing` flag that we can use to signify that the item is being edited (or not). If `isEditing` is true, we want to use that flag to display our `ToDoItemEditForm` instead of the checkbox. To do that, we'll use another Vue directive: [`v-if`](https://vuejs.org/api/built-in-directives.html#v-if).
现在我们有了一个' isEditing '标志，我们可以使用它来表示条目正在被编辑(或者没有)。如果' isEditing '为true，我们希望使用该标志来显示我们的' ToDoItemEditForm '而不是复选框。为此，我们将使用另一个Vue指令:[' v-if '](https://vuejs.org/api/built-in-directives.html#v-if)。

The `v-if` directive will only render a block if the value passed to it is truthy. This is similar to how an `if` statement works in JavaScript. `v-if` also has corresponding [`v-else-if`](https://vuejs.org/api/built-in-directives.html#v-else-if) and [`v-else`](https://vuejs.org/api/built-in-directives.html#v-else) directives to provide the equivalent of JavaScript `else if` and `else` logic inside Vue templates.
' v-if '指令只在传递给它的值为真值时才会呈现块。这类似于JavaScript中的if语句。' v-if '也有相应的[' v-else-if '](https://vuejs.org/api/built-in-directives.html#v-else-if)和[' v-else '](https://vuejs.org/api/built-in-directives.html#v-else)指令，在Vue模板中提供相当于JavaScript ' else if '和' else '逻辑。

It's important to note that `v-else` and `v-else-if` blocks need to be the first sibling of a `v-if`/`v-else-if` block, otherwise Vue will not recognize them. You can also attach `v-if` to a `<template>` tag if you need to conditionally render an entire template.
需要注意的是，' v-else '和' v-else-if '块必须是' v-if ' / ' v-else-if '块的第一个兄弟，否则Vue将无法识别它们。如果你需要有条件地呈现整个模板，你也可以将' v-if '附加到' <template> '标签上。

Lastly, you can use a `v-if` + `v-else` at the root of your component to display only one block or another, since Vue will only render one of these blocks at a time. We'll do this in our app, as it will allow us to replace the code that displays our to-do item with the edit form.
最后，您可以在组件的根使用' v-if ' + ' v-else '来只显示一个或另一个块，因为Vue一次只呈现其中一个块。我们将在我们的应用程序中这样做，因为它将允许我们用编辑表单替换显示待办事项的代码。

First of all add `v-if="!isEditing"` to the root `<div>` in your `ToDoItem` component,
首先添加' v-if="!isEditing" ' to the root ' <div> ' in your ' ToDoItem ' component，

```html
<div class="stack-small" v-if="!isEditing"></div>
```

Next, below that `<div>`'s closing tag add the following line:
接下来，在' <div> "的结束标记下面添加以下一行:

```html
<to-do-item-edit-form v-else :id="id" :label="label"></to-do-item-edit-form>
```

We also need to import and register the `ToDoItemEditForm` component, so we can use it inside this template. Add this line at the top of your `<script>` element:
我们还需要导入并注册' ToDoItemEditForm '组件，这样我们就可以在这个模板中使用它。将这一行添加到' <script> '元素的顶部:

```js
import ToDoItemEditForm from "./ToDoItemEditForm";
```

And add a `components` property above the `props` property inside the component object:
在component对象的props属性上方添加一个' components '属性:

```js
components: {
  ToDoItemEditForm
},
```

Now, if you go to your app and click a todo item's "Edit" button, you should see the checkbox replaced with the edit form.
现在，如果你打开你的应用程序，点击待办事项的“编辑”按钮，你应该会看到复选框被编辑表单替换了。

![The todo list app, with Edit and Delete buttons shown, and one of the todos in edit mode, with an edit input and save and cancel buttons shown](todo-edit-delete.png)
待办事项列表应用程序，显示了编辑和删除按钮，其中一个待办事项处于编辑模式，显示了编辑输入、保存和取消按钮

However, there's currently no way to go back. To fix that, we need to add some more event handlers to our component.
然而，目前没有办法回去。为了解决这个问题，我们需要向组件添加更多的事件处理程序。

## Getting back out of edit mode
退出编辑模式

First, we need to add an `itemEdited()` method to our `ToDoItem` component's `methods`. This method should take the new item label as an argument, emit an `itemEdited` event to the parent component, and set `isEditing` to `false`.
首先，我们需要向' ToDoItem '组件的'方法'添加' itemEdited() '方法。这个方法应该以新的项目标签作为参数，向父组件发出' itemEdited '事件，并将' isEditing '设置为' false '。

Add it now, below your existing methods:
现在就把它添加到你现有的方法下面:

```js
itemEdited(newLabel) {
  this.$emit('item-edited', newLabel);
  this.isEditing = false;
}
```

Next, we'll need an `editCancelled()` method. This method will take no arguments and just serve to set `isEditing` back to `false`. Add this method below the previous one:
接下来，我们需要一个' editCancelled() '方法。此方法将不带参数，只是用于将“isEditing”设置为“false”。将这个方法添加到前面的方法下面:

```js
editCancelled() {
  this.isEditing = false;
}
```

Last for this section, we'll add event handlers for the events emitted by the `ToDoItemEditForm` component, and attach the appropriate methods to each event.
在本节的最后，我们将为' ToDoItemEditForm '组件发出的事件添加事件处理程序，并将适当的方法附加到每个事件。

Update your `<to-do-item-edit-form></to-do-item-edit-form>` call to look like so:
更新' <to-do-item-edit-form></to-do-item-edit-form> '调用，如下所示:

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
更新和删除待办事项

Now we can toggle between the edit form and the checkbox. However, we haven't actually handled updating the `ToDoItems` array back in `App.vue`. To fix that, we need to listen for the `item-edited` event, and update the list accordingly. We'll also want to handle the delete event so that we can delete todo items.
现在我们可以在编辑表单和复选框之间切换。然而，我们还没有实际处理更新' ToDoItems '数组回到' App.vue '。为了解决这个问题，我们需要监听' item-edited '事件，并相应地更新列表。我们还需要处理delete事件，以便可以删除todo项。

Add the following new methods to your `App.vue`'s component object, below the existing methods inside the `methods` property:
添加以下新方法到你的应用程序。Vue的组件对象，在' methods '属性中现有方法的下面:

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

Next, we'll add the event listeners for the `item-deleted` and `item-edited` events:
接下来，我们将为' item-deleted '和' item-edited '事件添加事件监听器:

- For `item-deleted`, you'll need to pass the `item.id` to the method.
- For `item-edited`, you'll need to pass the `item.id` and the special `$event` variable. This is a special Vue variable used to pass event data to methods. When using native HTML events (like `click`), this will pass the native event object to your method.
- 对于' item-deleted '，你需要传递' item。Id '到方法。
- 对于“item-edited”，你需要传递“item”。Id '和特殊的' $event '变量。这是一个特殊的Vue变量，用于将事件数据传递给方法。当使用原生HTML事件(如' click ')时，这将把原生事件对象传递给你的方法。

Update the `<to-do-item></to-do-item>` call inside the `App.vue` template to look like this:
更新' App内的' <to-do-item></to-do-item> '调用。Vue的模板看起来像这样:

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

And there you have it — you should now be able to edit and delete items from the list!
现在你可以从列表中编辑和删除项目了!

## Fixing a small bug with isDone status
修复了一个isDone状态的小错误

This is great so far, but we've actually introduced a bug by adding in the edit functionality. Try doing this:
到目前为止，这是很棒的，但实际上我们通过添加编辑功能引入了一个错误。试着这样做:

1. Check (or uncheck) one of the todo checkboxes.
2. Press the "Edit" button for that todo item.
3. Cancel the edit by pressing the "Cancel" button.
1. 选中(或取消选中)其中一个todo复选框。
2. 按下该待办事项的“编辑”按钮。
3. 按“取消”按钮取消编辑。

Note the state of the checkbox after you cancel — not only has the app forgotten the state of the checkbox, but the done status of that todo item is now out of whack. If you try checking (or unchecking) it again, the completed count will change in the opposite way to what you'd expect. This is because the `isDone` inside `data` is only given the value `this.done` on component load.
注意你取消后复选框的状态——不仅应用程序忘记了复选框的状态，而且待办事项的完成状态现在也不正常了。如果您尝试再次检查(或取消检查)它，完成的计数将以与您所期望的相反的方式更改。这是因为“data”中的“isDone”只给出了值“This”。完成组件加载。

Fixing this is fortunately quite easy — we can do this by converting our `isDone` data item into a [计算属性](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties) — another advantage of computed properties is that they preserve [reactivity](https://vuejs.org/guide/essentials/reactivity-fundamentals.html), meaning (among other things) that their state is saved when the template changes like ours is now doing.
幸运的是，修复这个问题很容易——我们可以通过将我们的' isDone '数据项转换为[计算属性](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)来做到这一点——计算属性的另一个优点是它们保留了[反应性](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)，这意味着(在其他事情中)当模板发生变化时，它们的状态会被保存，就像我们现在做的那样。

So, let's implement the fix in `ToDoItem.vue`:
所以，让我们在' ToDoItem.vue '中实现修复:

1. Remove the following line from inside our `data()` property:
1. 从' data() '属性中删除以下一行:

   ```js
   isDone: this.done,
   ```

2. Add the following block below the data() { } block:
2. 在data(){}块下面添加以下块:

   ```js
   computed: {
     isDone() {
       return this.done;
     }
   },
   ```

Now when you save and reload, you'll find that the problem is solved — the checkbox state is now preserved when you switch between todo item templates.
现在，当您保存并重新加载时，您将发现问题已经解决—当您在todo项目模板之间切换时，复选框状态现在仍然保留。

## Understanding the tangle of events
了解事件的混乱

One of the most potentially confusing parts is the tangle of standard and custom events we've used to trigger all the interactivity in our app. To understand this better, it is a good idea to write out a flow chart, description, or diagram of what events are emitted where, where they are being listened for, and what happens as a result of them firing.
最可能令人困惑的部分之一是我们用来触发应用程序中所有交互的标准和自定义事件的混乱。为了更好地理解这一点，最好编写一个流程图、描述或图表，说明在哪里触发什么事件，在哪里侦听它们，以及它们触发后会发生什么。

### App.vue

`<to-do-form>` listens for:
' <to-do-form> '监听:

- `todo-added` event emitted by the `onSubmit()` method inside the `ToDoForm` component when the form is submitted.
  **Result**: `addToDo()` method invoked to add new todo item to the `ToDoItems` array.
- ' todo-added '事件，由' ToDoForm '组件内的' onSubmit() '方法在提交表单时触发。
**Result**: ' addToDo() '方法被调用，用于向' ToDoItems '数组添加新的todo项。

`<to-do-item>` listens for:
' <to-do-item> '监听:

- `checkbox-changed` event emitted by the checkbox `<input>` inside the `ToDoItem` component when it is checked or unchecked.
  **Result**: `updateDoneStatus()` method invoked to update done status of associated todo item.
- `item-deleted` event emitted by the `deleteToDo()` method inside the `ToDoItem` component when the "Delete" button is pressed.
  **Result**: `deleteToDo()` method invoked to delete associated todo item.
- `item-edited` event emitted by the `itemEdited()` method inside the `ToDoItem` component when the `item-edited` event emitted by the `onSubmit()` method inside the `ToDoItemEditForm` has been successfully listened for. Yes, this is a chain of two different `item-edited` events!
  **Result**: `editToDo()` method invoked to update label of associated todo item.
- ' checkbox-changed '事件由' ToDoItem '组件中的复选框' <input> '触发，当它被选中或取消选中时。
**Result**: ' updateDoneStatus() '方法被调用来更新相关todo项的完成状态。
- 当按下“Delete”按钮时，' ToDoItem '组件内的' deleteToDo() '方法触发' item-deleted '事件。
**Result**: ' deleteToDo() '方法被调用来删除相关的todo项。
- ' ToDoItem '组件中的' itemEdited() '方法触发的' item-edited '事件，当' ToDoItemEditForm '内部的' onSubmit() '方法触发的' item-edited '事件已成功侦听。是的，这是两个不同的“物品编辑”事件的连锁!
**结果**:' editToDo() '方法被调用来更新相关todo项的标签。

### ToDoForm.vue

`<form>` listens for `submit` event.
**Result**: `onSubmit()` method is invoked, which checks that the new label is not empty, then emits the `todo-added` event (which is then listened for inside `App.vue`, see above), and finally clears the new label `<input>`.
' <form> '监听' submit '事件。
**Result**: ' onSubmit() '方法被调用，该方法检查新标签是否为空，然后发出' todo-added '事件(然后在' App. exe '中监听该事件)。Vue '，见上文)，最后清除新标签' <input> '。

### ToDoItem.vue

The `<input>` of `type="checkbox"` listens for `change` events.
**Result**: `checkbox-changed` event emitted when the checkbox is checked/unchecked (which is then listened for inside `App.vue`; see above).
type="checkbox"的' <input> '监听' change '事件。
**Result**:当选中/取消选中复选框时触发' checkbox-changed '事件(然后在' App.vue '中监听' checkbox-changed '事件;见上文)。

"Edit" `<button>` listens for `click` event.
**Result**: `toggleToItemEditForm()` method is invoked, which toggles `this.isEditing` to `true`, which in turn displays the todo item's edit form on re-render.
"编辑" ' <按钮> '监听'点击'事件。
**Result**: ' toggleToItemEditForm() '方法被调用。isEditing '到' true '，在重新渲染时依次显示todo项的编辑表单。

"Delete" `<button>` listens for `click` event.
**Result**: `deleteToDo()` method is invoked, which emits the `item-deleted` event (which is then listened for inside `App.vue`; see above).
"删除" ' <按钮> '监听'点击'事件。
**Result**: ' deleteToDo() '方法被调用，它会触发' item-deleted '事件(然后在' App.vue '中侦听该事件;见上文)。

`<to-do-item-edit-form>` listens for:
<to-do-item-edit-form> '监听:

- `item-edited` event emitted by the `onSubmit()` method inside the `ToDoItemEditForm` component when the form is successfully submitted.
  **Result**: `itemEdited()` method is invoked, which emits the `item-edited` event (which is then listened for inside `App.vue`, see above), and sets `this.isEditing` back to `false`, so that the edit form is no longer shown on re-render.
- `edit-cancelled` event emitted by the `onCancel()` method inside the `ToDoItemEditForm` component when the "Cancel" button is clicked.
  **Result**: `editCancelled()` method is invoked, which sets `this.isEditing` back to `false`, so that the edit form is no longer shown on re-render.
- 当成功提交表单时，' ToDoItemEditForm '组件中的' onSubmit() '方法会触发' item-edited '事件。
**Result**: ' itemEdited() '方法被调用，它会触发' item-edited '事件(然后在' App. exe '中监听该事件。Vue '，见上文)，并设置'这个。isEditing '返回' false '，这样在重新渲染时，编辑的表单将不再显示。
- 点击“取消”按钮时，由“ToDoItemEditForm”组件内的“onCancel()”方法触发的“edit-cancelled”事件。
**Result**: ' editCancelled() '方法被调用。isEditing '返回' false '，这样在重新渲染时，编辑的表单将不再显示。

### ToDoItemEditForm.vue

`<form>` listens for `submit` event.
**Result**: `onSubmit()` method is invoked, which checks to see if the new label value is not blank, and not the same as the old one, and if so emits the `item-edited` event (which is then listened for inside `ToDoItem.vue`, see above).
' <form> '监听' submit '事件。
**Result**: ' onSubmit() '方法被调用，该方法检查新的标签值是否为空，并且与旧的标签值不相同，如果是，则发出' item-edited '事件(然后在' ToDoItem中监听该事件。Vue '，见上文)。

"Cancel" `<button>` listens for `click` event.
**Result**: `onCancel()` method is invoked, which emits the `edit-cancelled` event (which is then listened for inside `ToDoItem.vue`, see above).
“取消”“<按钮>”监听“点击”事件。
**Result**: ' onCancel() '方法被调用，它会触发' edit-cancelled '事件(然后在' ToDoItem中监听该事件。Vue '，见上文)。

## 总结

This article has been fairly intense, and we covered a lot here. We've now got edit and delete functionality in our app, which is fairly exciting. We are nearing the end of our Vue series now. The last bit of functionality to look at is focus management, or put another way, how we can improve our app's keyboard accessibility.
这篇文章相当密集，我们在这里讨论了很多内容。现在我们的应用中有了编辑和删除功能，这非常令人兴奋。现在，我们的Vue系列已经接近尾声。最后一个要讨论的功能是焦点管理，或者换句话说，我们如何提高应用程序的键盘可访问性。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
