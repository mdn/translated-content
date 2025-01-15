---
title: 使用 moment 做日期格式化
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment
original_slug: Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment
---

我們模型的日期預設呈現很難看: _Tue Dec 06 2016 15:49:58 GMT+1100 (AUS Eastern Daylight Time)_。在本節中，我們將展示如何更新上一節中的 _書本實例 BookInstance 列表頁面_，以更友好的格式顯示`due_date`欄位字段：December 6th, 2016。

我們將使用的方法，是在我們的`BookInstance`模型中，創建一個返回格式化日期的虛擬屬性。我們將使用 [moment](https://www.npmjs.com/package/moment) 來做實際的格式化，這是一個輕量級 JavaScript 日期庫，用於解析，驗證，操作和格式化日期。

> [!NOTE]
> 我們可以直接在 Pug 模板中，使用 moment 格式化字符串，或者可以在許多其它地方格式化字符串。使用虛擬屬性，可以使我們獲得格式化的日期，這與我們當前獲取 `due_date` 的方式完全相同。

## 安裝 moment

在項目的根目錄，輸入下列命令

```bash
npm install moment
```

## 創建虛擬屬性

1. 打開 **./models/bookinstance.js**。
2. 在此頁面最上方，引入 _moment_。

   ```js
   var moment = require("moment");
   ```

在 url 屬性後面，加入虛擬屬性 `due_back_formatted`。

```js
BookInstanceSchema.virtual("due_back_formatted").get(function () {
  return moment(this.due_back).format("MMMM Do, YYYY");
});
```

> [!NOTE]
> 格式化方法可以使用幾乎任何模式顯示日期。[moment](http://momentjs.com/docs/#/displaying/)文檔中，可以找到表示不同日期組件的語法。

## 更新視圖

打開 **/views/bookinstance_list.pug** ，然後用 `due_back_formatted` 取代 `due_back` 。

```js
      if val.status!='Available'
        //span  (Due: #{val.due_back} )
        span  (Due: #{val.due_back_formatted} )
```

這就是本章節的全部了。如果你訪問側邊欄的 _All book-instances_ ，你應該會看到所有的歸還日期都更吸引人了！

## 下一步

- 回到 [Express 教學 5: 呈現圖書館資料](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)
- 繼續教學 5 的下一個部分: [Author list page and Genre list page challenge](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page).
