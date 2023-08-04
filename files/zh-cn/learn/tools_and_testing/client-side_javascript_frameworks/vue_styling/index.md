---
title: 使用 CSS 为 Vue 组件添加样式
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

现在终于到了使我们的应用程序看起来更好的时候了。在本文中，我们将探讨使用 CSS 样式化 Vue 组件的不同方法。

<table>
  <tbody>
    <tr>
      <th scope="row">先决条件：</th>
      <td>
        <p>
          熟悉核心 <a href="/zh-CN/docs/Learn/HTML">HTML</a>、<a
            href="/zh-CN/docs/Learn/CSS"
            >CSS</a
          > 和 <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言，了解<a
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
      <th scope="row">目的：</th>
      <td>了解有关设置 Vue 组件样式的信息。</td>
    </tr>
  </tbody>
</table>

## 使用 CSS 样式化 Vue 组件

在继续向我们的应用程序添加更多高级功能之前，我们应该添加一些基本的 CSS 使其看起来更好。Vue 具有三种样式化应用程序的方法：

- 外部 CSS 文件。
- 单文件组件（`.vue` 文件）中的全局样式。
- 单文件组件中组件范围的样式。

为帮助你熟悉每个应用程序，我们将所有三个功能结合使用，以使我们的应用程序具有更好的外观。

## 外部 CSS 文件的样式

你可以包括外部 CSS 文件，并将其全局应用于你的应用程序。让我们看看这是如何完成的。

首先，在 `src/assets` 目录中创建一个名为 `reset.css` 的文件。Webpack 将处理此文件夹中的文件。这意味着我们可以使用 CSS 预处理器（如 SCSS）或后处理器（如 PostCSS）。

尽管本教程不会使用此类工具，但最好知道在资产文件夹中包含此类代码后，它将自动进行处理。

将以下内容添加到 `reset.css` 文件中：

```css
/*reset.css*/
/* RESETS */
*,
*::before,
*::after {
  box-sizing: border-box;
}
*:focus {
  outline: 3px dashed #228bec;
}
html {
  font: 62.5% / 1.15 sans-serif;
}
h1,
h2 {
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
}
button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  appearance: none;
}
button::-moz-focus-inner {
  border: 0;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  /* 1 */
  overflow: visible;
}
input[type="text"] {
  border-radius: 0;
}
body {
  width: 100%;
  max-width: 68rem;
  margin: 0 auto;
  font:
    1.6rem/1.25 "Helvetica Neue",
    Helvetica,
    Arial,
    sans-serif;
  background-color: #f5f5f5;
  color: #4d4d4d;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
@media screen and (min-width: 620px) {
  body {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
/*END RESETS*/
```

接下来，在 `src/main.js` 文件中，如下导入 `reset.css` 文件：

```js
import "./assets/reset.css";
```

这将导致在构建步骤中拾取文件并自动将其添加到我们的网站。

重置样式应立即应用于该应用。下图显示了应用重置前后应用程序的外观。

之前：

![已添加部分样式的 todo 应用程序；该应用现在位于卡片中，但某些内部功能仍需要样式](todo-app-unstyled.png)

之后：

![已添加部分样式的 todo 应用程序；该应用现在位于卡片中，但某些内部功能仍需要样式](todo-app-reset-styles.png)

显著的更改包括列表项目符号删除、背景颜色更改以及基本按钮和输入样式更改。

## 向单文件组件添加全局样式

现在，我们已将 CSS 重置为在浏览器之间统一，需要对样式进行更多自定义。我们希望将某些样式应用于应用程序中的各个组件。虽然可以直接将这些文件添加到 `reset.css` 样式表中，但是我们将它们添加到 `App.vue` 文件的 `<style>` 标签中，以演示如何使用它们。

文件中已经存在一些样式。让我们删除它们，并用下面的样式替换它们。这些样式可以做一些事情——为按钮和输入添加一些样式，并自定义 `#app` 元素及其子元素。

更新 `App.vue` 文件的 `<style>` 元素，如下所示：

```html
<style>
  /* 全局样式 */
  .btn {
    padding: 0.8rem 1rem 0.7rem;
    border: 0.2rem solid #4d4d4d;
    cursor: pointer;
    text-transform: capitalize;
  }
  .btn__danger {
    color: #fff;
    background-color: #ca3c3c;
    border-color: #bd2130;
  }
  .btn__filter {
    border-color: lightgrey;
  }
  .btn__danger:focus {
    outline-color: #c82333;
  }
  .btn__primary {
    color: #fff;
    background-color: #000;
  }
  .btn-group {
    display: flex;
    justify-content: space-between;
  }
  .btn-group > * {
    flex: 1 1 auto;
  }
  .btn-group > * + * {
    margin-left: 0.8rem;
  }
  .label-wrapper {
    margin: 0;
    flex: 0 0 100%;
    text-align: center;
  }
  [class*="__lg"] {
    display: inline-block;
    width: 100%;
    font-size: 1.9rem;
  }
  [class*="__lg"]:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 620px) {
    [class*="__lg"] {
      font-size: 2.4rem;
    }
  }
  .visually-hidden {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }
  [class*="stack"] > * {
    margin-top: 0;
    margin-bottom: 0;
  }
  .stack-small > * + * {
    margin-top: 1.25rem;
  }
  .stack-large > * + * {
    margin-top: 2.5rem;
  }
  @media screen and (min-width: 550px) {
    .stack-small > * + * {
      margin-top: 1.4rem;
    }
    .stack-large > * + * {
      margin-top: 2.8rem;
    }
  }
  /* 全局样式结束 */
  #app {
    background: #fff;
    margin: 2rem 0 4rem 0;
    padding: 1rem;
    padding-top: 0;
    position: relative;
    box-shadow:
      0 2px 4px 0 rgba(0, 0, 0, 0.2),
      0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
  }
  @media screen and (min-width: 550px) {
    #app {
      padding: 4rem;
    }
  }
  #app > * {
    max-width: 50rem;
    margin-left: auto;
    margin-right: auto;
  }
  #app > form {
    max-width: 100%;
  }
  #app h1 {
    display: block;
    min-width: 100%;
    width: 100%;
    text-align: center;
    margin: 0;
    margin-bottom: 1rem;
  }
</style>
```

如果检查该应用，会发现我们的 todo 列表目前在卡片中呈现，一些 to-do 项目已经有了更好的格式。现在我们可以直截了当地开始编辑我们的组件，来使用这些样式。

![已添加部分样式的 todo 应用程序；该应用现在位于卡片中，但某些内部功能仍需要样式](todo-app-partial-styles.png)

### 在 Vue 中添加 CSS 类

我们应当在 `ToDoForm` 组件中的 `<button>` 元素上应用 CSS 按钮类。由于 Vue 模板是有效的 HTML 代码，这个步骤的实现与在纯 HTML 上实现类似——通过在元素中添加 `class=""` 属性实现。

在表单中的 `<button>` 元素上添加 `class="btn btn__primary btn__lg"`：

```html
<button type="submit" class="btn btn__primary btn__lg">Add</button>
```

我们可以做更多的语义和风格上的变化。由于我们的表格表示我们页面的一个特定部分，可以通过使用一个 `<h2>` 元素受益。然而，标签已经表明了表单的目的。为了避免重复，让我们用一个 `<h2>` 来包装我们的标签。还有一些其他的全局 CSS 样式，我们也可以添加。我们还将把 `input__lg` 类添加到我们的 `<input>` 元素中。

更新你的 `ToDoForm` 模板，它看起来像这样：

```html
<template>
  <form @submit.prevent="onSubmit">
    <h2 class="label-wrapper">
      <label for="new-todo-input" class="label__lg">
        What needs to be done?
      </label>
    </h2>
    <input
      type="text"
      id="new-todo-input"
      name="new-todo"
      autocomplete="off"
      v-model.lazy.trim="label"
      class="input__lg" />
    <button type="submit" class="btn btn__primary btn__lg">Add</button>
  </form>
</template>
```

让我们也在 `App.vue` 文件中的 `<ul>` 标签上添加 `stack-large` 类。这将有助于改善我们待办事项的间距。

将它更新为这样：

```html
<ul aria-labelledby="list-summary" class="stack-large">
  …
</ul>
```

## 添加作用域样式

我们要添加样式的最后一个组件是我们的 `ToDoItem` 组件。为了使样式的定义靠近组件，我们可以在它里面添加一个 `<style>` 元素。然而，如果这些样式改变了这个组件之外的东西，要追踪到负责的样式并解决这个问题可能会很困难。这就是 `scoped` 属性有用的地方——它为你所有的样式附加了一个独特的 HTML `data` 属性选择器，防止它们在全局范围内发生冲突。

要使用 `scoped` 标识符，在 `ToDoItem.vue` 中创建一个 `<style>` 元素，位于文件的底部，并给它 `scoped` 属性：

```html
<style scoped>
  /* … */
</style>
```

然后，将以下 CSS 代码复制到新创建的 `<style>` 元素中：

```css
.custom-checkbox > .checkbox-label {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  display: block;
  margin-bottom: 5px;
}
.custom-checkbox > .checkbox {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  height: 2.5rem;
  margin-top: 0;
  padding: 5px;
  border: 2px solid #0b0c0c;
  border-radius: 0;
  appearance: none;
}
.custom-checkbox > input:focus {
  outline: 3px dashed #fd0;
  outline-offset: 0;
  box-shadow: inset 0 0 0 2px;
}
.custom-checkbox {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.25;
  display: block;
  position: relative;
  min-height: 40px;
  margin-bottom: 10px;
  padding-left: 40px;
  clear: left;
}
.custom-checkbox > input[type="checkbox"] {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: -2px;
  left: -2px;
  width: 44px;
  height: 44px;
  margin: 0;
  opacity: 0;
}
.custom-checkbox > .checkbox-label {
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  display: inline-block;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  cursor: pointer;
  touch-action: manipulation;
}
.custom-checkbox > label::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 2px solid currentcolor;
  background: transparent;
}
.custom-checkbox > input[type="checkbox"]:focus + label::before {
  border-width: 4px;
  outline: 3px dashed #228bec;
}
.custom-checkbox > label::after {
  box-sizing: content-box;
  content: "";
  position: absolute;
  top: 11px;
  left: 9px;
  width: 18px;
  height: 7px;
  transform: rotate(-45deg);
  border: solid;
  border-width: 0 0 5px 5px;
  border-top-color: transparent;
  opacity: 0;
  background: transparent;
}
.custom-checkbox > input[type="checkbox"]:checked + label::after {
  opacity: 1;
}
@media only screen and (min-width: 40rem) {
  label,
  input,
  .custom-checkbox {
    font-size: 19px;
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
```

现在我们需要在模板中添加一些 CSS 类来与我们的样式连接。

在根 `<div>` 中，添加一个 `custom-checkbox` 类。在 `<input>` 中，添加一个 `checkbox` 类。最后，在 `<label>` 中添加一个 `checkbox-label` 类。更新的模板如下所示：

```html
<template>
  <div class="custom-checkbox">
    <input type="checkbox" :id="id" :checked="isDone" class="checkbox" />
    <label :for="id" class="checkbox-label">\{{label}}</label>
  </div>
</template>
```

应用现在应该具有自定义的复选框，并且外观类似于下方的截图。

![具有完整样式的待办事项应用程序。现在可以正确设置输入表单的样式，并且待办事项现在具有间距和自定义复选框](todo-app-complete-styles.png)

## 总结

目前，我们已经做完了示例程序的样式设计。在下一篇文章中，我们将为我们的应用程序添加一些更多的功能，即使用一个计算属性来为我们的应用程序添加一个已完成的 todo 项目的计数。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
