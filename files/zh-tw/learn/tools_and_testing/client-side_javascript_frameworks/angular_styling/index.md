---
title: 使用樣式點綴我們的 Angular 應用程式
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

現在，我們已經建立了基本的應用程式結構，並加入了內容，接著我們就要來對應用程式進行樣式的調整，透過本篇文章來學習如何使用樣式點綴我們的 Angular 應用程式。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">預備知識：</th>
      <td>
        熟悉 <a href="/zh-TW/docs/Learn/HTML">HTML</a>、<a
          href="/zh-TW/docs/Learn/CSS"
          >CSS</a
        >
        以及 <a href="/zh-TW/docs/Learn/JavaScript">JavaScript</a> 的核心，了解
        <a
          href="/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >終端機/命令列（terminal/command line）</a
        >相關知識。
      </td>
    </tr>
    <tr>
      <th scope="row">學習目標：</th>
      <td>學習如何使用樣式點綴 Angular 應用程式。</td>
    </tr>
  </tbody>
</table>

## 增加樣式到 Angular 中

Angular CLI 會產生兩種類型的樣式檔：

- 元件樣式：Angular CLI 提供了元件各自的樣式檔案。這些樣式檔只會套用在其所屬的元件。
- `styles.css`：在 `src` 目錄底下，除非你在元件層級指定樣式，否則這個檔案的樣式會套用到整個應用程式。

根據您是否使用 CSS 預處理器，CSS 檔案的副檔名也會有所變化，Angular 支援純 CSS、SCSS、Sass、Less、以及 Stylus。

在 `src/styles.css` 中，貼上以下樣式：

```css
body {
  font-family: Helvetica, Arial, sans-serif;
}

.btn-wrapper {
  /* flexbox */
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.btn {
  color: #000;
  background-color: #fff;
  border: 2px solid #cecece;
  padding: 0.35rem 1rem 0.25rem 1rem;
  font-size: 1rem;
}

.btn:hover {
  background-color: #ecf2fd;
}

.btn:active {
  background-color: #d1e0fe;
}

.btn:focus {
  outline: none;
  border: black solid 2px;
}

.btn-primary {
  color: #fff;
  background-color: #000;
  width: 100%;
  padding: 0.75rem;
  font-size: 1.3rem;
  border: black solid 2px;
  margin: 1rem 0;
}

.btn-primary:hover {
  background-color: #444242;
}

.btn-primary:focus {
  color: #000;
  outline: none;
  border: #000 solid 2px;
  background-color: #d7ecff;
}

.btn-primary:active {
  background-color: #212020;
}
```

在 `src/styles.css` 中的 CSS 會應用在整個應用程式，但是這些樣式不會影響到頁面上所有內容。下一步將要新增專門讓 `AppComponent` 套用的樣式。

在 `app.component.css` 中，增加以下樣式：

```css
body {
  color: #4d4d4d;
  background-color: #f5f5f5;
  color: #4d4d4d;
}

.main {
  max-width: 500px;
  width: 85%;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
  box-shadow:
    0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
}

@media screen and (min-width: 600px) {
  .main {
    width: 70%;
  }
}

label {
  font-size: 1.5rem;
  font-weight: bold;
  display: block;
  padding-bottom: 1rem;
}

.lg-text-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #000;
  display: block;
  box-sizing: border-box;
  font-size: 1rem;
}

.btn-wrapper {
  margin-bottom: 2rem;
}

.btn-menu {
  flex-basis: 32%;
}

.active {
  color: green;
}

ul {
  padding-inline-start: 0;
}

ul li {
  list-style: none;
}
```

最後，回到瀏覽器看看樣式更新之後的效果，現在看來比較有美感了。

## 結語

我們對 Angular 樣式的簡介也告一個段落了，接下來讓我們開始幫應用程式加上功能吧。在下一篇文章中，我們將建立一個適用於待辦事項的元件，並使其成為可以讓您標示完成、編輯以及刪除待辦事項。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
