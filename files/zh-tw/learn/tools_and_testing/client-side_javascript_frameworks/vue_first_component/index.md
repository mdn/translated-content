---
title: 建立第一個 Vue 元件
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

現在是時候來更深入了解 Vue ，以及建立我們自訂的元件——我們將從建立一個元件開始，這個元件代表待辦清單裡的每一個項目。在過程中，我們會學到一些重要的概念，例如在元件裡面調用其他元件，使用 props 傳遞資料，以及儲存它的狀態（ state ）。

> **備註：** 如果你需要根據我們的版本來檢查你的程式碼，你可以從 [todo-vue 存放庫](https://github.com/mdn/todo-vue)找到 Vue 範例應用程式最終版本的程式碼。有關實際運行的版本，請看 <https://mdn.github.io/todo-vue/dist/> 。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">預備知識：</th>
      <td>
        <p>
          熟悉 <a href="/zh-TW/docs/Learn/HTML">HTML</a> 、
          <a href="/zh-TW/docs/Learn/CSS">CSS</a> 以及
          <a href="/zh-TW/docs/Learn/JavaScript">JavaScript</a> 核心語言，具備
          <a
            href="/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >terminal/command line</a
          >
          的知識。
        </p>
        <p>
          Vue 元件是由 Javascript
          物件（用來管理應用程式的資料）及樣版語法（用來映射成 DOM
          結構）所組成的。此外，你將需要使用終端機安裝 node 和 npm
          ，以便下載及使用一些 Vue
          的進階功能（像是單一檔案的元件或是渲染函式）。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>
        學習如何建立一個 Vue 元件，將其渲染到另一個元件裡，使用 props
        傳遞資料，以及儲存它的狀態（ state ）。
      </td>
    </tr>
  </tbody>
</table>

## 建立一個 ToDoItem 元件

來建立我們的一個元件，這個元件會顯示一個待辦項目，我們會使用它來建立待辦清單。

1. 在你的 `moz-todo-vue/src/components` 資料夾裡建立一個新檔案並命名為 `ToDoItem.vue` 。在程式編輯器打開這個檔案。
2. 在檔案頂端加上 `<template></template>` 來建立元件的模板。
3. 在 template 區塊底下建立一個 `<script></script>` 區塊。在 `<script>` 標籤之間加上一個預設匯出的物件 `export default {}` ，這是你的元件物件。

現在你的檔案應該會像這樣：

```html
<template> </template>
<script>
  export default {};
</script>
```

我們現在開始為 `ToDoItem` 添加實際內容。目前 Vue 模板只允許存在一個根元素——用一個元素來包裝在 template 區塊裡面的所有內容（這個情況在 Vue 3 發布後會改變）。我們將使用一個 [`<div>`](/zh-TW/docs/Web/HTML/Element/div) 來做為根元素。

1. 現在在元件 template 裡面新增一個空的 `<div>` 。
2. 在這個 `<div>` 裡面，新增一個 checkbox 和一個相對應的 label。在 checkbox 加上一個 `id` 屬性，並在 label 加上 `for` 屬性，使 checkbox 對應到 label 。如下所示。

   ```html
   <template>
     <div>
       <input type="checkbox" id="todo-item" checked="false" />
       <label for="todo-item">My Todo Item</label>
     </div>
   </template>
   ```

### 在我們的應用程式裡使用 TodoItem

目前一切都很好，但是我們還沒把元件加到應用程式裡面，所以沒辦法測試它是否可以正常運作。現在讓我們把它加到應用程式裡。

1. 再一次打開 `App.vue` 。
2. 在 `<script>` 標籤的頂端，加上以下內容來匯入 `ToDoItem` 元件：

   ```js
   import ToDoItem from "./components/ToDoItem.vue";
   ```

3. 在元件物件裡面添加 `components` 屬性，然後在它裡面添加 `ToDoItem` 元件來註冊它。

現在你的 `<script>` 內容應該會像這樣：

```js
import ToDoItem from "./components/ToDoItem.vue";

export default {
  name: "app",
  components: {
    ToDoItem,
  },
};
```

這和之前 Vue CLI 註冊 `HelloWorld` 元件是同樣的方法。

要在應用程式裡實際渲染 `ToDoItem` 元件，你需要在 `<template>` 元素裡面呼叫它——加上 `<to-do-item></to-do-item>` 元素。請注意，元件檔案名稱和它在 JavaScript 的表示法通常是用大駝峰式命名法（ PascalCase ，例如： `ToDoList` ），而相對應的自訂元素是用 kebab-case（例如： `<to-do-list>` ）。

1. 在 [`<h1>`](/zh-TW/docs/Web/HTML/Element/Heading_Elements) 底下建立一個無序清單（ [`<ul>`](/zh-TW/docs/Web/HTML/Element/ul) ）包含單一個清單項目（ [`<li>`](/zh-TW/docs/Web/HTML/Element/li) ）。
2. 在清單項目（ \<li> ）裡面加上 `<to-do-item></to-do-item>` 。

現在你的 `App.vue` 的 `<template>` 內容應該會像這樣：

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

如果你再次查看渲染應用程式，現在應該會看到你渲染的 `ToDoItem` 元件，它包含一個 checkbox 和 label 。

![目前應用程式的渲染狀態——包含一個標題（ To-Do List ），一個 checkbox 和 label](rendered-todoitem.png)

## 使用 prop 讓元件變得更彈性

到目前爲止我們的 `ToDoItem` 元件還不是很實用，因為這個元件一個頁面只能使用一次（元件內 label 的 id 是唯一值），而且我們也沒有辦法設定 label 的文字內容。

所以我們可以透過 prop 新增一些狀態到我們的元件，你可以將 prop 想像成是傳入函式的參數，它會讓元件有一些初始狀態可以用來渲染到畫面上。

### 宣告 prop

在 Vue 中，宣告 prop 的方法有兩種：

- 第一種方法是將 prop 寫成字串存進陣列中，陣列中的每個元素都對應到一個 prop 的名稱。
- 第二種方法是寫一個物件，將 prop 作為物件的 key，這種寫法可以設定 prop 的初始值、型別、是否為必要值以及簡單的驗證。

> **備註：** Prop 驗證只有在開發環境下有效，所以在正式上線的環境中無法使用。此外，作為 prop 驗證的函式在元件被創建之前就會被呼叫，因此該函式無法取得元件中的任何狀態或是其他 prop。

對於 `ToDoItem` 這個元件，我們會透過第二種方法宣告 prop，也就是物件的形式。

1. 回到 `ToDoItem.vue` 檔
2. 在 `export default {}` 的物件中加入一個 `props` 屬性，值為一個空物件
3. 在 `props` 物件中加入兩個屬性，分別是 `label` 和 `done`
4. `label` 的值是一個物件帶有兩個屬性

   1. 第一個屬性是 `required`，它的值為 `true`。這會告訴 Vue 我們預期元件必須要接收到一個名為 `label` 的 prop。如果元件沒有接受到的話，Vue 會發出警告通知我們。
   2. 第二個屬性是 `type`，它的值為 `String`。這會告訴 Vue 我們預期 prop 的型別是一個字串。

5. 接著是 `done` 這個 prop

   1. 首先設定 `default` 屬性為 `false`，意思是當元件沒有接收到 `done` 的時候，`done` 的初始值為 false（要注意只有在 prop 不是必需的時候才會設定初始值）
   2. 接著設定 `type` 這個屬性為 `Boolean`，這會告訴 Vue 我們預期 `done` 是一個布林值

你的物件現在看起來應該要像是這樣：

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

### 使用完成宣告的 prop

有了這些宣告好的 prop 後，我們現在可以在樣板內使用這些 prop，讓我們先從在樣板內加入一個 `label` 的 prop 開始。

在你的 `<template>` 中，把 `<label>` 的內容換成 `\{{label}}`

`\{{}}` 是一個 Vue 的樣板語法，它讓我們可以在樣板印出 JavaScript 表達式的結果。當我們在 Vue 的樣板中看到 `\{{}}` 時，必須要知道它是拿來顯示文字的而不是 HTML。以現在這個案例來說，我們會印出 `label` 這個 prop 的值。

現在你的樣板看起來應該會是像這樣：

```html
<template>
  <div>
    <input type="checkbox" id="todo-item" checked="false" />
    <label for="todo-item">\{{label}}</label>
  </div>
</template>
```

回到瀏覽器後你會看到之前渲染的 todo item，但是沒有看到 label。接著打開你的開發者工具，你會發現在主控台中出現了下列的警告：

```plain
[Vue warn]: Missing required prop: "label"

found in

---> <ToDoItem> at src/components/ToDoItem.vue
       <App> at src/App.vue
         <Root>
```

這是因為我們設定 `label` 為 required，但是我們在元件中沒有接收到，而且又在元件的樣板中使用了 `label`，也就是說我們在父元件中沒有傳入 `label` 這個 prop，讓我們來修正這個問題。

在你的 `App.vue` 檔中，將 `label` 這個屬性加到 `<to-do-item></to-do-item>` 上，就像一般的 HTML 屬性寫法一樣：

```html
<to-do-item label="My ToDo Item"></to-do-item>
```

現在再回到瀏覽器的畫面，你會看到 label 出現了，而且主控台也沒有出現警告。

這就是一個簡單的 prop 例子，接下來我們會說說 Vue 如何維持資料的狀態。

## Vue's data object

If you change the value of the `label` prop passed into the `<to-do-item></to-do-item>` call in your App component, you should see it update. This is great. We have a checkbox, with an updatable label. However, we're currently not doing anything with the "done" prop — we can check the checkboxes in the UI, but nowhere in the app are we recording whether a todo item is actually done.

To achieve this, we want to bind the component's `done` prop to the `checked` attribute on the [`<input>`](/zh-TW/docs/Web/HTML/Element/input) element, so that it can serve as a record of whether the checkbox is checked or not. However, it's important that props serve as one-way data binding — a component should never alter the value of its own props. There are a lot of reasons for this. In part, components editing props can make debugging a challenge. If a value is passed to multiple children, it could be hard to track where the changes to that value were coming from. In addition, changing props can cause components to re-render. So mutating props in a component would trigger the component to rerender, which may in-turn trigger the mutation again.

To work around this, we can manage the `done` state using Vue's `data` property. The `data` property is where you can manage local state in a component, it lives inside the component object alongside the `props` property and has the following structure:

```js
data() {
  return {
    key: value
  }
}
```

You'll note that the `data` property is a function. This is to keep the data values unique for each instance of a component at runtime — the function is invoked separately for each component instance. If you declared data as just an object, all instances of that component would share the same values. This is a side-effect of the way Vue registers components and something you do not want.

You use `this` to access a component's props and other properties from inside data, as you may expect. We'll see an example of this shortly.

> **備註：** Because of the way that `this` works in arrow functions (binding to the parent's context), you wouldn't be able to access any of the necessary attributes from inside `data` if you used an arrow function. So don't use an arrow function for the `data` property.

So let's add a `data` property to our `ToDoItem` component. This will return an object containing a single property that we'll call `isDone`, whose value is `this.done`.

Update the component object like so:

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

Vue does a little magic here — it binds all of your props directly to the component instance, so we don't have to call `this.props.done`. It also binds other attributes (`data`, which you've already seen, and others like `methods`, `computed`, etc.) directly to the instance. This is, in part, to make them available to your template. The down-side to this is that you need to keep the keys unique across these attributes. This is why we called our `data` attribute `isDone` instead of `done`.

So now we need to attach the `isDone` property to our component. In a similar fashion to how Vue uses `\{{}}` expressions to display JavaScript expressions inside templates, Vue has a special syntax to bind JavaScript expressions to HTML elements and components: **`v-bind`**. The `v-bind` expression looks like this:

```plain
v-bind:attribute="expression"
```

In other words, you prefix whatever attribute/prop you want to bind to with `v-bind:`. In most cases, you can use a shorthand for the `v-bind` property, which is to just prefix the attribute/prop with a colon. So `:attribute="expression"` works the same as `v-bind:attribute="expression"`.

So in the case of the checkbox in our `ToDoItem` component, we can use `v-bind` to map the `isDone` property to the `checked` attribute on the `<input>` element. Both of the following are equivalent:

```html
<input type="checkbox" id="todo-item" v-bind:checked="isDone" />

<input type="checkbox" id="todo-item" :checked="isDone" />
```

You're free to use whichever pattern you would like. It's best to keep it consistent though. Because the shorthand syntax is more commonly used, this tutorial will stick to that pattern.

So let's do this. Update your `<input>` element now to replace `checked="false"` with `:checked="isDone"`.

Test out your component by passing `:done="true"` to the `ToDoItem` call in `App.vue`. Note that you need to use the `v-bind` syntax, because otherwise `true` is passed as a string. The displayed checkbox should be checked.

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

Try changing `true` to `false` and back again, reloading your app in between to see how the state changes.

## Giving Todos a unique id

Great! We now have a working checkbox where we can set the state programmatically. However, we can currently only add one `ToDoList` component to the page because the `id` is hardcoded. This would result in errors with assistive technology since the `id` is needed to correctly map labels to their checkboxes. To fix this, we can programmatically set the `id` in the component data.

We can use the [lodash](https://www.npmjs.com/package/lodash) package's `uniqueid()` method to help keep the index unique. This package exports a function that takes in a string and appends a unique integer to the end of the prefix. This will be sufficient for keeping component `id`s unique.

Let's add the package to our project with npm; stop your server and enter the following command into your terminal:

```bash
npm install --save lodash.uniqueid
```

> **備註：** If you prefer yarn, you could instead use `yarn add lodash.uniqueid`.

We can now import this package into our `ToDoItem` component. Add the following line at the top of `ToDoItem.vue`'s `<script>` element:

```js
import uniqueId from "lodash.uniqueid";
```

Next, add an `id` field to our data property, so the component object ends up looking like so (`uniqueId()` returns the specified prefix — `todo-` — with a unique string appended to it):

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

Next, bind the `id` to both our checkbox's `id` attribute and the label's `for` attribute, updating the existing `id` and `for` attributes as shown:

```html
<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" />
    <label :for="id">\{{label}}</label>
  </div>
</template>
```

## Summary

And that will do for this article. At this point we have a nicely-working `ToDoItem` component that can be passed a label to display, will store its checked state, and will be rendered with a unique `id` each time it is called. You can check if the unique `id`s are working by temporarily adding more `<to-do-item></to-do-item>` calls into `App.vue`, and then checking their rendered output with your browser's DevTools.

Now we're ready to add multiple `ToDoItem` components to our App. In our next article we'll look at adding a set of todo item data to our `App.vue` component, which we'll then loop through and display inside `ToDoItem` components using the `v-for` directive.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
