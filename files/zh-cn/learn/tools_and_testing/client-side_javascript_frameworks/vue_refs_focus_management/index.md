---
title: 使用 Vue 模板引用进行焦点管理
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

使用 Vue 所做的事情快要结束了。最后一个需要讲述的内容是焦点管理，换句话说，也是如何提升我们应用的键盘无障碍性。我们将看看如何使用 **Vue 模板引用**来处理这个问题——这是一个进阶功能，允许你直接访问虚拟 DOM 之下的底层 DOM 节点，或者从一个组件直接访问一个子组件的内部 DOM 结构。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
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
      <td>学习如何使用 Vue 模板引用（ref）进行焦点管理。</td>
    </tr>
  </tbody>
</table>

## 焦点管理问题

虽然我们完成了有效的编辑功能，但我们并没有为非鼠标用户提供良好的体验。具体来说，当用户激活“Edit”按钮时，我们将“Edit”按钮从 DOM 中移除，但我们并没有将用户的焦点移动到任何地方，所以实际上它只是消失了。这对键盘用户和非视觉用户来说可能会产生迷惑性。

了解一下发生了什么：

1. 重新加载页面，然后按下 <kbd>Tab</kbd> 键。你可以看到在添加新的待办事项的输入框中看到一个表示聚焦状态的框线。

2. 再次按下 <kbd>Tab</kbd> 键。焦点应当移动到“Add”按钮。

3. 再次按下 <kbd>Tab</kbd> 键。这次它应该在第一个复选框上。再按一次，焦点会在第一个“Edit”按钮上。
4. 按下 <kbd>Enter</kbd> 键激活“Edit”按钮。复选框将替换为我们的编辑组件，但聚焦线就消失了。

这种行为会很不协调。此外，当再次按下 <kbd>Tab</kbd> 时会发生什么，取决于你所使用的浏览器。同样地，如果你保存或取消了你的编辑，当你移回非编辑视图时，焦点会再次消失。

为了给用户一个更好的体验，我们将添加代码来控制焦点，以便在编辑表单显示时将其设置为编辑字段。当用户取消或保存他们的编辑时，我们也要把焦点放回“Edit”按钮上。为了设置焦点，我们需要多了解一点 Vue 的内部工作方式。

## 虚拟 DOM 和模板引用

Vue 和其他一些框架一样，使用一个虚拟 DOM（VDOM）来管理元素。这意味着 Vue 在内存中保留了我们应用程序中所有节点的表示。任何更新首先在内存中的节点上执行，然后所有需要对页面上的实际节点进行的更改都会被批量同步。

由于读写实际的 DOM 节点通常比虚拟节点开销更大，虚拟 DOM 可以带来更好的性能。然而，这也意味着在使用框架时，你往往不应该直接通过原生浏览器 API（如 [`Document.getElementById`](/zh-CN/docs/Web/API/Document/getElementById)）来编辑你的 HTML 元素，因为这会导致 VDOM 和真实 DOM 不同步。

相反，如果你需要访问底层 DOM 节点（比如设置焦点时），你可以使用 [Vue 模板引用](https://cn.vuejs.org/guide/essentials/template-refs.html)。对于自定义的 Vue 组件，你也可以使用 refs 来直接访问子组件的内部结构，然而这样做应该是谨慎的，因为这会使代码更难推理和理解。

要在一个组件中使用模板引用，你需要在你想访问的元素上添加一个 `ref` 属性，并为该属性的值添加一个字符串标识符。值得注意的是，在一个组件中，引用必须是唯一的。在同一时间呈现的两个元素不应该有相同的引用。

### 向我们的应用添加模板引用

现在，我们向 `ToDoItem.vue` 中的“Edit”按钮附加模板引用。像这样更新代码：

```html
<button
  type="button"
  class="btn"
  ref="editButton"
  @click="toggleToItemEditForm">
  Edit
  <span class="visually-hidden">\{{label}}</span>
</button>
```

为了访问与我们的引用相关的值，我们使用组件实例上提供的 `$refs` 属性。当我们点击“Edit”按钮时，要看到 ref 的值，在我们的 `toggleToItemEditForm()` 方法中添加 `console.log()`，像这样：

```js
toggleToItemEditForm() {
  console.log(this.$refs.editButton);
  this.isEditing = true;
}
```

如果你在这时激活“Edit”按钮，你应该看到控制台中引用了一个 HTML `<button>` 元素。

## Vue 的 $nextTick() 方法

我们想在用户保存或取消他们的编辑时将焦点设置在“Edit”按钮上。要做到这一点，我们需要在 `ToDoItem` 组件的 `itemEdited()` 和 `editCancelled()` 方法中处理焦点。

为了方便起见，创建一个不需要参数的新方法，叫做 `focusOnEditButton()`。在这个方法中，把你的 `ref` 分配给一个变量，然后在这个模板引用上调用 `focus()` 方法。

```js
focusOnEditButton() {
  const editButtonRef = this.$refs.editButton;
  editButtonRef.focus();
}
```

然后，在 `itemEdited()` 和 `editCancelled()` 方法的末尾添加 `this.focusOnEditButton()` 调用：

```js
itemEdited(newItemName) {
  this.$emit("item-edited", newItemName);
  this.isEditing = false;
  this.focusOnEditButton();
},
editCancelled() {
  this.isEditing = false;
  this.focusOnEditButton();
},
```

试着编辑，然后通过键盘保存/取消一个待办事项。你会注意到焦点没有被设置，所以我们仍然有一个问题要解决。如果你打开你的控制台，你会看到一个错误，大意是“_不能访问属性 "focus"，editButtonRef 是 undefined 的_”。这看起来很奇怪。当你激活“Edit”按钮时，你的按钮的 ref 之前是被定义的，但现在它不是了。这到底是怎么回事？

记住，当我们把 `isEditing` 改为 `true` 时，我们不再渲染“Edit”按钮的组件部分。这意味着没有元素可以绑定引用，所以它变成了 `undefined`。

你现在可能在想：“我们在访问 `ref` 之前不是设置了 `isEditing=false` 吗，现在 `v-if` 不是应该显示这个按钮吗？”这就是虚拟 DOM 起作用的地方。因为 Vue 试图优化和批处理变化，当我们把 `isEditing` 设置为 `false` 时，它不会立即更新 DOM。所以当我们调用 `focusOnEditButton()` 时，“Edit”按钮还没有被渲染。

相反，我们需要等到 Vue 经历了下一个 DOM 更新周期之后。为了做到这一点，Vue 组件有一个特殊的方法，叫做 `$nextTick()`。这个方法接受一个回调函数，然后在 DOM 更新后执行。

由于 `focusOnEditButton()` 方法需要在 DOM 更新后被调用，我们可以将现有的函数体包裹在 `$nextTick()` 调用中。

```js
focusOnEditButton() {
  this.$nextTick(() => {
    const editButtonRef = this.$refs.editButton;
    editButtonRef.focus();
  });
}
```

现在，当你激活“Edit”按钮，然后通过键盘取消或保存你的修改时，焦点应该返回到“Edit”按钮。成功了！

## Vue 生命周期方法

接下来，我们需要在点击“Edit”按钮时将焦点移到编辑表单的 `<input>` 元素。然而，由于我们的编辑表单和“Edit”按钮在不同的组件中，我们不能仅仅在“Edit”按钮的点击事件处理器中设置焦点。相反，我们可以利用每当“Edit”按钮被点击时，我们就删除并重新挂载 `ToDoItemEditForm` 组件的这一事实来处理这个问题。

那么，这是如何工作的呢？Vue 组件经历了一系列的事件，被称为**生命周期**。这个生命周期从元素被创建并添加到 VDOM（_mounted_）之前，一直到它们被从 VDOM 中移除（_destroyed_）。

Vue 让你在这个生命周期的不同阶段使用**生命周期方法**运行方法。这对于像数据获取这样的事情很有用，你可能需要在组件渲染之前，或者在一个属性改变之后获取数据。下面是生命周期方法的列表，按照它们被触发的顺序排列。

1. `beforeCreate()`：在你的组件的实例被创建之前运行。数据和事件尚不可用。
2. `created()`：在你的组件被初始化后，但在组件被添加到 VDOM 前运行。这通常是数据获取发生的地方。
3. `beforeMount()`：在你的模板被编译后，但在你的组件被渲染到实际的 DOM 前运行。
4. `mounted()`：在你的组件被安装到 DOM 后运行。可以在这里访问 `refs`。
5. `beforeUpdate()`：当你的组件中的数据发生变化时，但在变化被渲染到 DOM 之前，就会运行。
6. `updated()`：只要你的组件中的数据发生变化，并且在变化被渲染到 DOM 之后，就会运行。
7. `beforeDestroy()`：在一个组件从 DOM 中移除之前运行。
8. `destroyed()`：在一个组件被从 DOM 中移除后运行。
9. `activated()`：只用于用特殊的 `keep-alive` 标签包装的组件。在组件被激活后运行。
10. `deactivated()`：只用于用特殊的 `keep-alive` 标签包装的组件。在组件被停止激活后运行。

> **备注：** Vue 文档提供了一个[很好的图表，可以直观地看到这些钩子何时发生](https://cn.vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)。这篇文章来自 [Digital Ocean 社区博客，更深入地探讨了生命周期方法](https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle)。

现在我们已经了解了生命周期方法，让我们用一个方法在我们的 `ToDoItemEditForm` 组件被安装时触发焦点。

在 `ToDoItemEditForm.vue` 中，像这样向 `<input>` 元素附加 `ref="labelInput"` 属性：

```html
<input
  :id="id"
  ref="labelInput"
  type="text"
  autocomplete="off"
  v-model.lazy.trim="newName" />
```

接下来，在你的组件对象中添加一个 `mounted()` 属性——**注意，这不应该放在 `methods` 属性里面，而应该与 `props`、`data()` 和 `methods` 处于同一个层次**。生命周期方法是独立的特殊方法，不应与用户定义方法放在一起。这些方法不接受参数。注意，你不能在这里使用箭头函数，因为我们需要访问 `this` 来访问我们的 `labelInput` 模板引用。

```js
mounted() {

}
```

在 `mounted()` 方法中，将你的 `labelInput` 引用分配给一个变量，然后调用该引用的 `focus()` 函数。你不必在这里使用 `$nextTick`，因为当 `mounted()` 被调用时，该组件已经被添加到 DOM 中。

```js
mounted() {
   const labelInputRef = this.$refs.labelInput;
   labelInputRef.focus();
}
```

现在，当你用键盘激活“Edit”按钮时，焦点应该立即被移到待编辑的 `<input>` 元素上。

## 删除待办事项项目时的焦点管理

还有一个地方我们需要考虑焦点管理：当用户删除一个待办事项时。当点击“Edit”按钮时，将焦点移到编辑名称文本框中是有意义的，而当取消或从编辑界面保存时，将焦点移回“Edit”按钮。

然而，与编辑表格不同的是，当一个元素被删除时，我们没有一个明确的位置让焦点转移。我们还需要一种方法来为辅助技术用户提供信息，确认一个元素被删除。

我们已经在追踪我们的列表标题中的元素数量——`App.vue` 中的 `<h2>`——并且它与我们的待办事项列表相关。这使得当我们删除一个节点时，它是一个合理的移动焦点的地方。

首先，我们需要给我们的列表标题添加一个引用。我们还需要给它添加一个 `tabindex="-1"`，这使得该元素可以通过程序聚焦（即可以通过 JavaScript 聚焦），而默认情况下它是不可以的。

在 `App.vue` 中，更新你的 `<h2>`，如下所示：

```html
<h2 id="list-summary" ref="listSummary" tabindex="-1">\{{listSummary}}</h2>
```

> **备注：** [`tabindex`](/zh-CN/docs/Web/HTML/Global_attributes/tabindex) 是一个真正强大的工具，可以处理某些无障碍问题。然而，应该谨慎地使用它。过度使用 `tabindex="-1"` 会给各种用户带来问题，所以只在需要的地方使用它。你也几乎不应该使用 `tabindex` > = `0`，因为它可能给用户带来问题，因为它可能使 DOM 流和标签顺序不匹配，和/或在标签顺序中添加非交互式元素。这可能会让用户感到困惑，特别是那些使用屏幕阅读器和其他辅助技术的用户。

现在我们有了一个 `ref`，并且让浏览器知道我们可以通过编程聚焦到 `<h2>` 上，我们需要对它设置焦点。在 `deleteToDo()` 的结尾，使用 `listSummary` 引用来设置焦点在 `<h2>`。由于 `<h2>` 总是在应用程序中渲染出来，你不必刻意使用生命周期方法的 `$nextTick` 来处理焦点。

```js
deleteToDo(toDoId) {
    const itemIndex = this.ToDoItems.findIndex((item) => item.id === toDoId);
    this.ToDoItems.splice(itemIndex, 1);
    this.$refs.listSummary.focus();
}
```

现在，当你从列表中删除一个项目时，焦点应该上移到列表标题上。这应该会为我们所有的用户提供一个合理的聚焦体验。

## 总结

这就是使用 Vue 进行焦点管理的全部内容，同时也是我们的应用的全部内容！恭喜你完成了我们所有的 Vue 教程。在下一篇文章中，我们将用一些进一步的资源来结束你的 Vue 学习。

> **备注：** 如果你需要对照我们的版本检查你的代码，你可以在我们的 todo-vue 仓库中找到一个完成版本的 Vue 应用示例代码。关于运行中的实时版本，请看 <https://mdn.github.io/todo-vue/>。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
