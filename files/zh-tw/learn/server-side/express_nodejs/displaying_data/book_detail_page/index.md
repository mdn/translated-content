---
title: 書本詳情頁面
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page
---

*書本細節頁面*需要呈現一本指定書本(`Book`)的信息, 使用它的 `_id` 字段值(自動產生)做為識別，接著是圖書館中書本實例(`BookInstance`)的信息。無論我們在哪裡呈現一個作者、種類、或書本實例，都應該連結到它的細節頁面。

## Controller 控制器

打開 **/controllers/bookController.js.** ，找到 exported `book_detail()` 控制器方法，用底下的代碼置換。

```js
// Display detail page for a specific book.
exports.book_detail = function (req, res, next) {
  async.parallel(
    {
      book: function (callback) {
        Book.findById(req.params.id)
          .populate("author")
          .populate("genre")
          .exec(callback);
      },
      book_instance: function (callback) {
        BookInstance.find({ book: req.params.id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.book == null) {
        // No results.
        var err = new Error("Book not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render.
      res.render("book_detail", {
        title: "Title",
        book: results.book,
        book_instances: results.book_instance,
      });
    },
  );
};
```

> **備註：** 我們不需要用 require 導入 _async_ 和 _BookInstance_，當我們實作主頁面控制器的時候，我們就已經引入這些模組。

此處的控制器方法使用 `async.parallel()`，用平行的方式找到 `Book` 以及它的相應複本 (`BookInstances`) 。這樣的處理方式，就跟上面的 _種類細節頁面_ 所說明的完全相同。

## View 視圖

創建 **/views/book_detail.pug** 並加入底下文字。

```js
extends layout

block content
  h1 #{title}: #{book.title}

  p #[strong Author:]
    a(href=book.author.url) #{book.author.name}
  p #[strong Summary:] #{book.summary}
  p #[strong ISBN:] #{book.isbn}
  p #[strong Genre:]&nbsp;
    each val, index in book.genre
      a(href=val.url) #{val.name}
      if index < book.genre.length - 1
        |,

  div(style='margin-left:20px;margin-top:20px')
    h4 Copies

    each val in book_instances
      hr
      if val.status=='Available'
        p.text-success #{val.status}
      else if val.status=='Maintenance'
        p.text-danger #{val.status}
      else
        p.text-warning #{val.status}
      p #[strong Imprint:] #{val.imprint}
      if val.status!='Available'
        p #[strong Due back:] #{val.due_back}
      p #[strong Id:]&nbsp;
        a(href=val.url) #{val._id}

    else
      p There are no copies of this book in the library.
```

在這個模板裡，幾乎每個東西都在先前的章節演示過了。

> **備註：** 與該書相關的種類列表，在模板中的實作，如以下代碼。除了最後一本書之外，在與本書相關的每個種類之後，都會添加一個逗號。
>
> ```plain
>   p #[strong Genre:]
>     each val, index in book.genre
>       a(href=val.url) #{val.name}
>       if index < book.genre.length - 1
>         |,
> ```

## 它看起來像是?

運行本應用，並打開瀏覽器訪問 <http://localhost:3000/>。選擇 _All books_ 連結，然後選擇其中一本書。如果每個東西都設定正確了，你的頁面看起來應該像是底下的截圖。

![Book Detail Page - Express Local Library site](locallibary_express_book_detail.png)

## 下一步

- 回到 [Express 教學 5: 呈現圖書館資料](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
- 繼續教學 5 下一個部分: [作者詳情頁面](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)
