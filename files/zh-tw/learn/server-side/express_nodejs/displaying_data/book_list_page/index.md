---
title: 書本清單頁面
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page
---

接下做我們將實作書本列表頁面。這個頁面需要呈現數據庫中所有書本的列表，包含每本書的作者、標題，標題將成為一個超連結，連到書本詳細內容頁面。

## 控制器

書本列表控制器函數，需要獲取數據庫中所有 `Book`對象的列表，然後將這些對像傳給模板進行呈現。

打開 **/controllers/bookController.js**. 找到導出的 `book_list()`控制器方法，並替換為下面的代碼。

```js
// Display list of all Books.
exports.book_list = function (req, res, next) {
  Book.find({}, "title author")
    .populate("author")
    .exec(function (err, list_books) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render("book_list", { title: "Book List", book_list: list_books });
    });
};
```

該方法使用模型的`find()`函數，返回所有 `Book` 對象，選擇僅返回標題 `title` 和作者 `author`，因為我們不需要其他字段（它也會返回 `_id` 和虛擬欄位字段）。這裡我們還調用 `Book` 上的 `populate()`，指定作者 `author`欄位字段 — 這將用完整的作者信息，替換儲存的書本作者 id。

成功時，傳遞給查詢的回調，將呈現 **book_list**(.pug) 模板，將標題 `title` 和`book_list`（包含作者的書本列表）作為變量傳遞。

## View 視圖

創建 **/views/book_list.pug** 並複制底下的文字。

```js
extends layout

block content
  h1= title

  ul
    each book in book_list
      li
        a(href=book.url) #{book.title}
        |  (#{book.author.name})

    else
      li There are no books.
```

這個視圖擴展了 **layout.pug** 基本模板，並覆蓋了名為 '**content**' 的 `block` 區塊 。它顯示我們從控制器傳入的標題 `title`（通過 `render()`方法），然後使用 `each`-`in`-`else` 語法，遍歷 `book_list`變量。為每本圖書創建一個列表項，以顯示書名，並作為書的詳細信息頁面的鏈接，後面跟著作者姓名。如果 `book_list`中沒有書，則執行 `else` 子句，並顯示文字 「沒有書本」 'There are no books'。

> **備註：** 我們使用 `book.url`，為每本書提供詳細記錄鏈接（我們已經實現了此路由，但尚未實現此頁面）。這是 `Book` 模型的一個虛擬屬性，它使用模型實例的 `_id` 字段，生成唯一的 URL 路徑。

在這裡，我們感興趣的是，每本書被定義為兩行，第二行使用管道（上面高亮顯示）。這種方法是必要的，因為如果作者姓名位於上一行，那麼它將成為超鏈接的一部分。

## 它看起來像是?

運行本應用 (參見 [測試路由](/zh-TW/docs/Learn/Server-side/Express_Nodejs/routes#Testing_the_routes) 有相關的命令) ，並打開你的瀏覽器，訪問 <http://localhost:3000/>。然後選擇所有書本連結 _All books_。如果每樣東西都設定正確了，你的網站看起來應該像底下的截圖。

![Book List Page - Express Local Library site](new_book_list.png)

## 下一步

- 回到 [Express 教學 5: 呈現圖書館資料](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
- 繼續教學 5 下個部分: [書本實例清單頁面](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)
