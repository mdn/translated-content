---
title: Styling Vue components with CSS
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties","Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

现在终于到了使我们的应用程序看起来更好的时候了。在本文中，我们将探讨使用 CSS 样式 Vue 组件的不同方法。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先决条件：</th>
      <td>
        <p>
          熟悉核心<a href="/zh-CN/docs/Learn/HTML">HTML</a>，<a
            href="/zh-CN/docs/Learn/CSS"
            >CSS</a
          >和<a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a>语言，了解<a
            href="/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >终端/命令行</a
          >。
        </p>
        <p>
          Vue 组件是由管理应用程序数据的 JavaScript 对象和映射到基础 DOM
          结构的基于 HTML 的模板语法组成的。为了进行安装并使用 Vue
          的一些更高级的功能（例如“单个文件组件”或渲染功能），您将需要一个装有
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
- 单个文件组件（`.vue`文件）中的全局样式。
- 单个文件组件中组件范围的样式。

为帮助您熟悉每个应用程序，我们将所有三个功能结合使用，以使我们的应用程序具有更好的外观。

## 外部 CSS 文件的样式

您可以包括外部 CSS 文件，并将其全局应用于您的应用程序。让我们看看这是如何完成的。

首先，`reset.css`在`src/assets`目录中创建一个名为的文件。Webpack 将处理此文件夹中的文件。这意味着我们可以使用 CSS 预处理器（如 SCSS）或后处理器（如 PostCSS）。

尽管本教程不会使用此类工具，但很高兴知道在资产文件夹中包含此类代码后，它将自动进行处理。

将以下内容添加到`reset.css`文件中：

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
  -webkit-appearance: none;
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
  font: 1.6rem/1.25 "Helvetica Neue", Helvetica, Arial, sans-serif;
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

接下来，在您的`src/main.js`文件中，如下导入`reset.css`文件：

```js
import './assets/reset.css';
```

这将导致在构建步骤中拾取文件并自动将其添加到我们的网站。

重置样式应立即应用于该应用。下图显示了应用重置前后应用程序的外观。

之前：

![已添加部分样式的 todo 应用程序；该应用现在位于卡片中，但某些内部功能仍需要样式](todo-app-unstyled.png)

后：![已添加部分样式的 todo 应用程序；该应用现在位于卡片中，但某些内部功能仍需要样式](todo-app-reset-styles.png)

显着的更改包括删除列表项目符号，更改背景颜色以及更改基本按钮和输入样式。

## 向单个文件组件添加全局样式

现在，我们已将 CSS 重置为在浏览器之间统一，我们需要对样式进行更多自定义。我们希望将某些样式应用于应用程序中的各个组件。虽然可以直接将这些文件添加到`reset.css`样式表中，但是我们将它们添加到的`<style>`标签中，`App.vue`以演示如何使用它们。

文件中已经存在一些样式。让我们删除它们，并用下面的样式替换它们。这些样式可以做一些事情 - 为按钮和输入添加一些样式，并自定义`#app`元素及其子元素。

更新`App.vue`文件的`<style>`元素，如下所示：

```css
<style>
/* Global styles */
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
/* End global styles */
#app {
  background: #fff;
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  padding-top: 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
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

If you check the app, you'll see that our todo list is now in a card, and we have some better formatting of our to-do items. Now we can go through and begin editing our components to use some of these styles.

![已添加部分样式的 todo 应用程序；该应用现在位于卡片中，但某些内部功能仍需要样式](todo-app-partial-styles.png)

### Adding CSS classes in Vue

We should apply the button CSS classes to the `<button>` in our `ToDoForm` component. Since Vue templates are valid HTML, this is done in the same way to how you might do it in plain HTML — by adding a `class=""` attribute to the element.

Add `class="btn btn__primary btn__lg"` to your form’s `<button>` element:

```html
<button type="submit" class="btn btn__primary btn__lg">
  Add
</button>
```

While we're here, there's one more semantic and styling change we can make. Since our form denotes a specific section of our page, it could benefit from an `<h2>` element. The label, however, already denotes the purpose of the form. To avoid repeating ourselves, let's wrap our label in an `<h2>`. There are a few other global CSS styles which we can add as well. We'll also add the `input__lg` class to our `<input>` element.

Update your `ToDoForm` template so that it looks like this:

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
      class="input__lg"
    />
    <button type="submit" class="btn btn__primary btn__lg">
      Add
    </button>
  </form>
</template>
```

Let's also add the `stack-large` class to the `<ul>` tag in our `App.vue` file. This will help improve the spacing of our to-do items a bit.

Update it as follows:

```html
<ul aria-labelledby="list-summary" class="stack-large">
```

## Adding scoped styles

The last component we want to style is our `ToDoItem` component. To keep the style definitions close to the component we can add a `<style>` element inside it. However, if these styles alter things outside of this component, it could be challenging to track down the styles responsible, and fix the problem. This is where the `scoped` attribute can be useful — this attaches a unique HTML `data` attribute selector to all of your styles, preventing them from colliding globally.

To use the `scoped` modifier, create a `<style>` element inside `ToDoItem.vue`, at the bottom of the file, and give it a `scoped` attribute:

```html
<style scoped>
</style>
```

Next, copy the following CSS into the newly created `<style>` element:

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
  -webkit-appearance: none;
  -moz-appearance: none;
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
  border: 2px solid currentColor;
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

Now we need to add some CSS classes to our template to connect the styles.

To the root `<div>`, add a `custom-checkbox` class. To the `<input>`, add a `checkbox` class. Last of all, to the `<label>` add a `checkbox-label` class. The updated template is below:

The app should now have custom checkboxes. Your app should look something like the screenshot below.

![具有完整样式的待办事项应用程序。现在可以正确设置输入表单的样式，并且待办事项现在具有间距和自定义复选框](todo-app-complete-styles.png)

## Summary

Our work is done on the styling of our sample app. In the next article we'll return to adding some more functionlity to our app, namely using a computed property to add a count of completed todo items to our app.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

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
  - [Ember 应用程序的结构和组件化](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [灰烬互动：事件，类和状态](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [灰烬交互性：页脚功能，条件渲染](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [在 Ember 中路由](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [灰烬资源和故障排除](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Vue 入门](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [创建我们的第一个 Vue 组件](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [渲染 Vue 组件列表](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [添加新的待办事项表单：Vue 事件，方法和模型](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [使用 CSS 样式化 Vue 组件](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [使用 Vue 计算的属性](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Vue 条件渲染：编辑现有待办事项](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [使用 Vue 裁判进行焦点管理](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Vue 资源](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)

- 斯维尔特

  - [Svelte 入门](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - [启动我们的 Svelte Todo 列表应用](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - [Svelte 中的动态行为：使用变量和道具](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - [组成我们的 Svelte 应用程序](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - [先进的 Svelte：反应性，生命周期，无障碍](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - [与 Svelte 商店合作](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - [Svelte 中的 TypeScript 支持](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - [部署和后续步骤](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)
