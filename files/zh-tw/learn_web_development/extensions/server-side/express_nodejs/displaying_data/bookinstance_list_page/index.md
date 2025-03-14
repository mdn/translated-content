---
title: 書本實例清單頁面
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page
---

接下來，我們將實作圖書館中所有書本實例 (`BookInstance`) 的列表頁面。這個頁面需要包含與每個 `BookInstance` (鏈接到其詳細信息頁面) 關聯的書本 `Book` 標題，以及 `BookInstance`模型中的其他信息，包含每個副本的狀態，印記和唯一 ID。唯一 ID 的文字，應該鏈接到 `BookInstance` 詳細信息頁面。

## Controller 控制器

`BookInstance`列表控制器函數，需要獲取所有書本實例的列表，填充關聯的書本信息，然後將列表傳遞給模板以進行呈現。

打開 **/controllers/bookinstanceController.js**。找到導出的 `bookinstance_list()`控制器方法，並用以下代碼替換它（更改後的代碼以**粗體**顯示）。

```js
// Display list of all BookInstances.
exports.bookinstance_list = function (req, res, next) {
  BookInstance.find()
    .populate("book")
    .exec(function (err, list_bookinstances) {
      if (err) {
        return next(err);
      }
      // Successful, so render
      res.render("bookinstance_list", {
        title: "Book Instance List",
        bookinstance_list: list_bookinstances,
      });
    });
};
```

此方法使用模型的`find()`函數，返回所有 `BookInstance`對象。然後它將一個調用，以菊花鏈方式連接到 `populate()`，附加書本 `book`欄位字段，這將使用完整的 `Book`文檔，替換每個 `BookInstance`儲存的書本 ID。

成功時，傳遞給查詢的回調，會呈現 **bookinstance_list** (.pug)模板，並將標題`title`和書籍實例列表 `bookinstance_list`作為變量傳遞。

## View 視圖

創建 **/views/bookinstance_list.pug** ，並複制貼上底下的文字。

```js
extends layout

block content
  h1= title

  ul
    each val in bookinstance_list
      li
        a(href=val.url) #{val.book.title} : #{val.imprint} -
        if val.status=='Available'
          span.text-success #{val.status}
        else if val.status=='Maintenance'
          span.text-danger #{val.status}
        else
          span.text-warning #{val.status}
        if val.status!='Available'
          span  (Due: #{val.due_back} )

    else
      li There are no book copies in this library.
```

這個視圖與其他視圖非常相似。它擴展了佈局，替換內容區塊，顯示從控制器傳入的標題 `title`，並遍歷 `bookinstance_list` 中的所有書籍副本。對於每個副本，我們都會顯示它的狀態（用顏色編碼），如果書本不可用，則顯示其預期返回日期。這裡引入了一個新功能 — 我們可以在標籤之後使用點符號表示法，來指定一個類別。因此，`span.text-success` 將被編譯為 <`span class="text-success"`> (也可以用 Pug 編寫為 `span(class="text-success"`)。

## 它看起來像是?

運行本應用，打開瀏覽器訪問 <http://localhost:3000/>，然後選擇 All book-instances 連結。假如每個東西都設定正確了，你的網站看起來應該像是底下的截圖。

![BookInstance List Page - Express Local Library site](locallibary_express_bookinstance_list.png)

## 下一步

- 回到 [Express 教學 5: 呈現圖書館資料](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)
- 繼續教學 5 下一個部分: [格式化日期 － 使用 moment](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment).
