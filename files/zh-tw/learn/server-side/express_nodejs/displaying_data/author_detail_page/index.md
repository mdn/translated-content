---
title: 作者詳情頁面
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page
---

作者細節頁面，需要呈現指定作者 `Author` 的信息，使用 `_id` 欄位的值（自動產生）識別，接著是這個作者 `Author`的所有書本物件 `Book`的列表。

## Controller 控制器

打開 **/controllers/authorController.js**.

在檔案最上方，加入底下幾行，引入 _async_ 和 _Book_ 模組(作者細節頁面需要它們)。

```js
var async = require("async");
var Book = require("../models/book");
```

找到 exported `author_detail()` 控制器方法，並用底下代碼置換。

```js
// Display detail page for a specific Author.
exports.author_detail = function (req, res, next) {
  async.parallel(
    {
      author: function (callback) {
        Author.findById(req.params.id).exec(callback);
      },
      authors_books: function (callback) {
        Book.find({ author: req.params.id }, "title summary").exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      } // Error in API usage.
      if (results.author == null) {
        // No results.
        var err = new Error("Author not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render.
      res.render("author_detail", {
        title: "Author Detail",
        author: results.author,
        author_books: results.authors_books,
      });
    },
  );
};
```

此處的控制器方法使用 `async.parallel()`，用平行的方式，查詢作者 `Author`和相應的書本實例，並附加上繪製本頁面的回調，如果 2 個要求都成功完成，就運行回調。這個方式，就跟前面的*種類細節頁面*所說明的完全相同。

## View 視圖

創建 **/views/author_detail.pug** ，並複制貼上底下的文字。

```js
extends layout

block content

  h1 Author: #{author.name}
  p #{author.date_of_birth} - #{author.date_of_death}

  div(style='margin-left:20px;margin-top:20px')

    h4 Books

    dl
      each book in author_books
        dt
          a(href=book.url) #{book.title}
        dd #{book.summary}

      else
        p This author has no books.
```

本模板裡的所有事物，都在先前的章節演示過了。

## 它看起來像是?

運行本應用，並打開瀏覽器訪問 <http://localhost:3000/>。選擇 _All Authors_ 連結，然後選擇一個作者。如果每個東西都設定正確了，你的網站看起來應該會像底下的截圖。

![Author Detail Page - Express Local Library site](locallibary_express_author_detail.png)

> **備註：** 作者的出生與死亡日期的外觀很醜！我們將在本文最後的自我挑戰處理它。

## 下一步

- 回到 [Express 教學 5: 呈現圖書館資料](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
- 繼續教學 5 的最後一個部分: [書本實例詳情頁面與自我挑戰](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)
