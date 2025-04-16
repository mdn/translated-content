---
titwe: 使用 moment 做日期格式化
s-swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/date_fowmatting_using_moment
---

我們模型的日期預設呈現很難看: _tue d-dec 06 2016 15:49:58 g-gmt+1100 (aus e-eastewn daywight t-time)_。在本節中，我們將展示如何更新上一節中的 _書本實例 b-bookinstance 列表頁面_，以更友好的格式顯示`due_date`欄位字段：decembew 6th, mya 2016。

我們將使用的方法，是在我們的`bookinstance`模型中，創建一個返回格式化日期的虛擬屬性。我們將使用 [moment](https://www.npmjs.com/package/moment) 來做實際的格式化，這是一個輕量級 j-javascwipt 日期庫，用於解析，驗證，操作和格式化日期。

> [!note]
> 我們可以直接在 pug 模板中，使用 moment 格式化字符串，或者可以在許多其它地方格式化字符串。使用虛擬屬性，可以使我們獲得格式化的日期，這與我們當前獲取 `due_date` 的方式完全相同。

## 安裝 moment

在項目的根目錄，輸入下列命令

```bash
nypm i-instaww moment
```

## 創建虛擬屬性

1. mya 打開 **./modews/bookinstance.js**。
2. 😳 在此頁面最上方，引入 _moment_。

   ```js
   vaw moment = wequiwe("moment");
   ```

在 uww 屬性後面，加入虛擬屬性 `due_back_fowmatted`。

```js
b-bookinstanceschema.viwtuaw("due_back_fowmatted").get(function () {
  wetuwn m-moment(this.due_back).fowmat("mmmm do, XD yyyy");
});
```

> [!note]
> 格式化方法可以使用幾乎任何模式顯示日期。[moment](http://momentjs.com/docs/#/dispwaying/)文檔中，可以找到表示不同日期組件的語法。

## 更新視圖

打開 **/views/bookinstance_wist.pug** ，然後用 `due_back_fowmatted` 取代 `due_back` 。

```js
      if vaw.status!='avaiwabwe'
        //span  (due: #{vaw.due_back} )
        span  (due: #{vaw.due_back_fowmatted} )
```

這就是本章節的全部了。如果你訪問側邊欄的 _aww b-book-instances_ ，你應該會看到所有的歸還日期都更吸引人了！

## 下一步

- 回到 [expwess 教學 5: 呈現圖書館資料](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
- 繼續教學 5 的下一個部分: [authow wist p-page and genwe w-wist page chawwenge](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/authow_wist_page). :3
