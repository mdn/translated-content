---
title: 書本實例詳情頁面與自我挑戰
slug: Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge
---

## 書本實例詳情頁面

`BookInstance` 詳情頁面，需要呈現每一個 `BookInstance` 的信息，用 `_id` 欄位字段值（自動產生）做識別。它包含了 `Book` 名稱 (也是一個連結，連到 *書本細節*頁面)，接著是紀錄中的其它的信息。

### Controller 控制器

打開 **/controllers/bookinstanceController.js**. 找到 exported `bookinstance_detail()` 控制器方法，並用底下代碼置換。

```js
// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function (req, res, next) {
  BookInstance.findById(req.params.id)
    .populate("book")
    .exec(function (err, bookinstance) {
      if (err) {
        return next(err);
      }
      if (bookinstance == null) {
        // No results.
        var err = new Error("Book copy not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render.
      res.render("bookinstance_detail", {
        title: "Book:",
        bookinstance: bookinstance,
      });
    });
};
```

該方法使用從 URL（使用路由）中提取的特定書本實例的 ID，調用`BookInstance.findById()`，並通過請求參數（`req.params.id`），在控制器中訪問。然後調用`populate()`來獲取相關 `Book` 的詳細信息。

### View 視圖

創建 **/views/bookinstance_detail.pug** ，並複製下面的內容。

```js
extends layout

block content

  h1 ID: #{bookinstance._id}

  p #[strong Title:]
    a(href=bookinstance.book.url) #{bookinstance.book.title}
  p #[strong Imprint:] #{bookinstance.imprint}

  p #[strong Status:]
    if bookinstance.status=='Available'
      span.text-success #{bookinstance.status}
    else if bookinstance.status=='Maintenance'
      span.text-danger #{bookinstance.status}
    else
      span.text-warning #{bookinstance.status}

  if bookinstance.status!='Available'
    p #[strong Due back:] #{bookinstance.due_back}
```

本模組中的所有東西，都在先前的章節演示過了。

### 它看起來像是?

運行本應用，並打開瀏覽器訪問 <http://localhost:3000/>/。選擇 _All book-instances_ 連結，然後選擇其中一本。如果每個東西都設定正確了，你的網站看起來應該像是底下的截圖。

![BookInstance Detail Page - Express Local Library site](locallibary_express_bookinstance_detail.png)

## 自我挑戰

目前，我們網站上顯示的大多數日期，都使用默認的 JavaScript 格式（例如 _Tue Dec 06 2016 15:49:58 GMT+1100_ （AUS 東部夏令時間））。本文的挑戰，是改善作者`Author`生命週期日期顯示的外觀信息（死亡/誔生日期）和*BookInstance 詳細信息*頁面，使用格式：December 6th, 2016。

> **備註：** 您可以使用與我們用於 _Book Instance List_ 的相同方法（將生命週期的虛擬屬性，添加到`Author`模型，並使用 [moment](https://www.npmjs.com/package/moment) 來設置日期字符串的格式）。

這個挑戰的要求：

1. 用 BookInstance 詳細信息頁面中的 `due_back_formatted` 替換 `due_back`。
2. 更新作者模塊以添加壽命虛擬屬性。壽命應該有兩個值： _date_of_birth - date_of_death_，這兩個值的格式與 `BookInstance.due_back_formatted`的日期格式相同。
3. 在當前使用 `date_of_birth` 和 `date_of_death`的所有視圖中，使用 `Author.lifespan` 。

## 下一步

- 回到 [Express 教學 5: 呈現圖書館資料](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
