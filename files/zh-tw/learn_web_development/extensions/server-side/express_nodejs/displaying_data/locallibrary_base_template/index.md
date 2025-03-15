---
title: 本地圖書館基礎模板
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template
---

現在我們了解如何使用 Pug 拓展模板，讓我們開始項目，創建一個基礎模板。這個模板會有一個側邊欄，連結到本教程中將要創建的各個頁面（例如，呈現並創建書本、種類、作者等等），以及一個主要內容區域，我們將在每個頁面中進行覆寫。

開啟 **/views/layout.pug** ，並以下列代碼，置換其內容。

```pug
doctype html
html(lang='en')
  head
    title= title
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1')
    link(rel='stylesheet', href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css')
    script(src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js')
    script(src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js')
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    div(class='container-fluid')
      div(class='row')
        div(class='col-sm-2')
          block sidebar
            ul(class='sidebar-nav')
              li
                a(href='/catalog') Home
              li
                a(href='/catalog/books') All books
              li
                a(href='/catalog/authors') All authors
              li
                a(href='/catalog/genres') All genres
              li
                a(href='/catalog/bookinstances') All book-instances
              li
                hr
              li
                a(href='/catalog/author/create') Create new author
              li
                a(href='/catalog/genre/create') Create new genre
              li
                a(href='/catalog/book/create') Create new book
              li
                a(href='/catalog/bookinstance/create') Create new book instance (copy)

        div(class='col-sm-10')
          block content
```

此模板使用（並包含）來自 [Bootstrap](http://getbootstrap.com/) 的 JavaScript 和 CSS ，以改進 HTML 頁面的佈局和呈現方式。使用 Bootstrap 或其它客戶端網頁框架，是一種快速的方式，可以創建吸引人的網頁，能夠良好地適應不同的瀏覽器尺寸，並且允許我們處理頁面的呈現，而不需要糾纒於任何不同尺寸的細節—此處我們只想專注於伺服端代碼！

佈局的安排應該相當明白，假如你已經閱讀了之前的 [模板入門](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data#template_primer)。注意，使用 `block content` 當做定位符號，放到頁面內容將要放置的地方。

基礎模板也參考了一個本地 css 檔 (**style.css**) ，此檔提供了一些額外的樣式。打開 **/public/stylesheets/style.css** ，並用底下的 CSS 代碼，取代它的內容:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

當我們開始運行網站時，我們應該看到側邊欄出現！在本教程的下個部分，我們將使用以上的佈局，來定義各個頁面。

## 下一步

- 回到 [Express Tutorial Part 5: Displaying library data](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- 繼續教學 5 下個章節: [Home page](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page).
