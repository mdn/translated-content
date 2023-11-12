---
title: Beginning our React todo list
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}我們被賦予做出一個 React 原型 app 的任務--這個 app 將允許使用者新增、編輯、刪除任務；且可以標記任務完成而不被刪除。文章將會與您一起完成一個基本 `App` component 的結構與畫面，以便稍後與其他 component 互動。

> **備註：** 如果您需要檢查自己的程式碼與範例之間的差異，可以連到 [todo-react repository](https://github.com/mdn/todo-react)，這裡有我們完整的程式碼。 Todo list 作品示範：<https://mdn.github.io/todo-react-build/>。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">預備知識：</th>
      <td>
        <p>
          知道 <a href="/zh-TW/docs/Learn/HTML">HTML</a>,
          <a href="/zh-TW/docs/Learn/CSS">CSS</a>與<a
            href="/zh-TW/docs/Learn/JavaScript"
            >JavaScript</a
          >的核心語法、操作基本終端機指令
          <a
            href="/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >terminal/command line</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">實作目標：</th>
      <td>介紹待辦事項清單案例研究，並掌握基本<code>App</code>結構和樣式。</td>
    </tr>
  </tbody>
</table>

在軟體開發中，user story 透過使用者觀點傳達開發目標。動手開發前先定義好 user stories 可以幫助我們專注於需要工作的項目，而我們這個案例中的 app 需要實現以下功能：

使用者可以...

- 讀取任務清單
- 可以用滑鼠或鍵盤給清單增加新任務
- 可以用滑鼠或鍵盤為任務標記完成
- 可以用滑鼠或鍵盤刪除任務
- 可以用滑鼠或鍵盤編輯任務
- 可以分類查看特定子群組：全部任務、待處理任務、已完成任務

我們將一一處理這些使用者故事。

## 專案開始前，先清理一下

終端機指令 `create-react-app` 會產生一些我們這個專案用不到的檔案，讓我們來清理一下。

- 我們不需要個別 component 的樣式表，所以首先請刪除`App.js`檔案上方的`import './App.css'`
- 我們也不需使用 `logo.svg`，請一並刪除這項 import

接著，請複製貼上以下終端機指令，以刪除專案中不需要的檔案；刪除前請確認您在專案的根目錄中！

```bash
# 移動到專案中的src資料夾
cd src
# 刪除一些檔案
rm -- App.test.js App.css logo.svg serviceWorker.js setupTests.js
# 回到專案上一層
cd ..
```

小提示：

- 刪除的檔案之中包含兩個測試檔，這個練習中不會涵蓋測試教學。
- 如果您停止 server 以便在終端機中刪除上述檔案，請記得使用`npm start`指令再次連上 server

## 專案起點

作為專案起始點 starting point ，我們會提供兩件事：一個新的 `App()` function 來取代原生預設，以及一些 CSS 美化我們的 app。

### The JSX

複製以下片段貼到 `App.js` 中取代原先的 `App()` function:

```js
function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <fbutton type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
```

再來，請打開 `public/index.html` 改掉 [`<title>`](/zh-TW/docs/Web/HTML/Element/title) 元素中的文字，將文字改為 `TodoMatic`，這樣才能對應到上述 [`<h1>`](/zh-TW/docs/Web/HTML/Element/Heading_Elements) 的文字。

```html
<title>TodoMatic</title>
```

當您更新瀏覽器，您應該可以看到以下畫面：

![todo-matic app, unstyled, showing a jumbled mess of labels, inputs, and buttons](unstyled-app.png)

畫面醜醜的對吧，而且還沒有實際功能，沒關係讓我們馬上來美化它。

在此之前，回頭複習一下我們的 JSX，以及它與用戶故事的對應關係：

- 我們有一個 [`<form>`](/zh-TW/docs/Web/HTML/Element/form) 元素，其中包含可以寫入新任務的 [`<input type="text">`](/zh-TW/docs/Web/HTML/Element/input/text) 以及一個 button 來送出表單。
- 我們還有一個`<button>`陣列，用以過濾不同任務狀態(全部、待辦、完成)。
- 下方接著一個標題告訴我們擁有多少任務
- 我們有 3 個預設任務寫在無序清單`<ul>`元素中，其中包含的各項單一任務都是使用[`<li>`](/zh-TW/docs/Web/HTML/Element/li)。 並且在各項任務下方增加 [`<input type="checkbox">`](/zh-TW/docs/Web/HTML/Element/input/text)來勾選此任務是否完成，以及編輯、刪除按鈕`<button>`。

這個表單[`<form>`](/zh-TW/docs/Web/HTML/Element/form) 允許我們新增、管理任務， `<button>`幫助我們篩選任務狀態，`<ul><li>` 則負責展示任務清單。接著由於缺乏編輯任務的 UI，讓我們開始來處理畫面美化的部分吧。

### Accessibility features 無障礙設定

您可能已經注意到一些不常見的屬性，例如：

```html
<button type="button" className="btn toggle-btn" aria-pressed="true">
  <span className="visually-hidden">Show </span>
  <span>all</span>
  <span className="visually-hidden"> tasks</span>
</button>
```

`aria-pressed` 元素可以跟輔助工具對話(像是螢幕閱讀器)，這個 button 總是處於： `pressed` 或 `unpressed`其中之一的狀態。可以想像它們如同 `on` 與 `off`。設定 `true` 代表這個 button 預設開啟`pressed`。

class `visually-hidden` 在我們加入 CSS 前還不會有作用；當我們加入樣式後，這個 class 會對一般使用者隱藏，因為視覺使用者不需要這些文字；而仰賴閱讀器的使用者則可以聽到更多輔助文字來提高的讀取理解與體驗。

您還可以發現 [`<ul>`](/zh-TW/docs/Web/HTML/Element/ul) 元素中：

```html
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading"></ul>
```

`role` 屬性會向科技輔具說明各種元素分別代表什麼用途。雖然瀏覽器預設 `<ul>` 為清單，但是由於樣式表會破壞這個功能，因此需要使用 `role` 屬性保留 "list" 清單這個意思。如果您想了解更多 `role` 屬性的重要性，請參照 [Scott O'Hara's article,「Fixing Lists」](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html)。

`aria-labelledby` 屬性告訴科技輔具，我們將清單標題 list heading 設為 label，以描述下方的程式碼片段；將這些關聯設定好會幫助使用科技輔具的朋友更好的理解前因後果。

最後，我們清單中的 labels 與 inputs 對 JSX 而言將會有些特別的屬性：

```html
<input id="todo-0" type="checkbox" defaultChecked="{true}" />
<label className="todo-label" htmlFor="todo-0"> Eat </label>
```

`<input/ >`中的 `defaultChecked` 屬性會讓 React 預設勾選某項目。假如我們同一般寫 HTML 一樣使用 `checked`，React 會紀錄一些：handling events on the checkbox 警告到瀏覽器 console 中，而這些是我們想避免的。不過先別擔心，我們在稍後討論事件的章節會教大家解決這個問題。

`htmlFor` 屬性對應 HTML 中的 `for` 屬性 ，我們不能在 JSX 中使用`for` 屬性因為 `for` 是保留字，因此 React 使用 `htmlFor` 取代 `for`。

備註：

- 在 JSX 屬性使用 boolean 值 ：`true` 與 `false`， 必須將之包在`{ }`中，如果只寫 `defaultChecked="true"`，這個值將是 `"true"` — 一個字串 string literal。 請記得 — 這是 JavaScript，不是 HTML!
- `aria-pressed` 屬性在我們稍早寫的程式碼片段中有一個 `"true"` 的值，因為`aria-pressed` 不像`checked`真的是一個布林值屬性。

### Implementing our styles 實作 CSS 美化

將以下的 CSS 貼進 `src/index.css` 取代原本的預設內容：

```css
/* RESETS */
*,
*::before,
*::after {
  box-sizing: border-box;
}
*:focus {
  outline: 3px dashed #228bec;
  outline-offset: 0;
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
    1.6rem/1.25 Arial,
    sans-serif;
  background-color: #f5f5f5;
  color: #4d4d4d;
}
@media screen and (min-width: 620px) {
  body {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
/*END RESETS*/
/* GLOBAL STYLES */
.form-group > input[type="text"] {
  display: inline-block;
  margin-top: 0.4rem;
}
.btn {
  padding: 0.8rem 1rem 0.7rem;
  border: 0.2rem solid #4d4d4d;
  cursor: pointer;
  text-transform: capitalize;
}
.btn.toggle-btn {
  border-width: 1px;
  border-color: #d3d3d3;
}
.btn.toggle-btn[aria-pressed="true"] {
  text-decoration: underline;
  border-color: #4d4d4d;
}
.btn__danger {
  color: #fff;
  background-color: #ca3c3c;
  border-color: #bd2130;
}
.btn__filter {
  border-color: lightgrey;
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
  flex: 1 1 49%;
}
.btn-group > * + * {
  margin-left: 0.8rem;
}
.label-wrapper {
  margin: 0;
  flex: 0 0 100%;
  text-align: center;
}
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
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
.stack-exception {
  margin-top: 1.2rem;
}
/* END GLOBAL STYLES */
.todoapp {
  background: #fff;
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  position: relative;
  box-shadow:
    0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
}
@media screen and (min-width: 550px) {
  .todoapp {
    padding: 4rem;
  }
}
.todoapp > * {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}
.todoapp > form {
  max-width: 100%;
}
.todoapp > h1 {
  display: block;
  max-width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
}
.label__lg {
  line-height: 1.01567;
  font-weight: 300;
  padding: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;
}
.input__lg {
  padding: 2rem;
  border: 2px solid #000;
}
.input__lg:focus {
  border-color: #4d4d4d;
  box-shadow: inset 0 0 0 2px;
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
.filters {
  width: 100%;
  margin: unset auto;
}
/* Todo item styles */
.todo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.todo > * {
  flex: 0 0 100%;
}
.todo-text {
  width: 100%;
  min-height: 4.4rem;
  padding: 0.4rem 0.8rem;
  border: 2px solid #565656;
}
.todo-text:focus {
  box-shadow: inset 0 0 0 2px;
}
/* CHECKBOX STYLES */
.c-cb {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.25;
  display: block;
  position: relative;
  min-height: 44px;
  padding-left: 40px;
  clear: left;
}
.c-cb > label::before,
.c-cb > input[type="checkbox"] {
  box-sizing: border-box;
  top: -2px;
  left: -2px;
  width: 44px;
  height: 44px;
}
.c-cb > input[type="checkbox"] {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  margin: 0;
  opacity: 0;
}
.c-cb > label {
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  display: inline-block;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  cursor: pointer;
  touch-action: manipulation;
}
.c-cb > label::before {
  content: "";
  position: absolute;
  border: 2px solid currentColor;
  background: transparent;
}
.c-cb > input[type="checkbox"]:focus + label::before {
  border-width: 4px;
  outline: 3px dashed #228bec;
}
.c-cb > label::after {
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
.c-cb > input[type="checkbox"]:checked + label::after {
  opacity: 1;
}
```

儲存並更新瀏覽器後，您的 app 應當會有對應的美化。

## 小結

現在我們的待辦清單 app 終於比較像真正的 app 了！問題是它還沒真正提供功能，我們將在下一章解決這個問題。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
