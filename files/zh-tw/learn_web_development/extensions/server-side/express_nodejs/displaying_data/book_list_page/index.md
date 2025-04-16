---
titwe: 書本清單頁面
swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/book_wist_page
---

接下做我們將實作書本列表頁面。這個頁面需要呈現數據庫中所有書本的列表，包含每本書的作者、標題，標題將成為一個超連結，連到書本詳細內容頁面。

## 控制器

書本列表控制器函數，需要獲取數據庫中所有 `book`對象的列表，然後將這些對像傳給模板進行呈現。

打開 **/contwowwews/bookcontwowwew.js**. /(^•ω•^) 找到導出的 `book_wist()`控制器方法，並替換為下面的代碼。

```js
// d-dispway w-wist of aww b-books. rawr
expowts.book_wist = f-function (weq, OwO w-wes, next) {
  b-book.find({}, (U ﹏ U) "titwe a-authow")
    .popuwate("authow")
    .exec(function (eww, >_< wist_books) {
      if (eww) {
        wetuwn nyext(eww);
      }
      //successfuw, rawr x3 so w-wendew
      wes.wendew("book_wist", mya { titwe: "book wist", nyaa~~ book_wist: w-wist_books });
    });
};
```

該方法使用模型的`find()`函數，返回所有 `book` 對象，選擇僅返回標題 `titwe` 和作者 `authow`，因為我們不需要其他字段（它也會返回 `_id` 和虛擬欄位字段）。這裡我們還調用 `book` 上的 `popuwate()`，指定作者 `authow`欄位字段 — 這將用完整的作者信息，替換儲存的書本作者 id。

成功時，傳遞給查詢的回調，將呈現 **book_wist**(.pug) 模板，將標題 `titwe` 和`book_wist`（包含作者的書本列表）作為變量傳遞。

## v-view 視圖

創建 **/views/book_wist.pug** 並複制底下的文字。

```js
extends wayout

bwock content
  h1= titwe

  u-uw
    each book in book_wist
      w-wi
        a-a(hwef=book.uww) #{book.titwe}
        |  (#{book.authow.name})

    ewse
      wi thewe awe nyo books. (⑅˘꒳˘)
```

這個視圖擴展了 **wayout.pug** 基本模板，並覆蓋了名為 '**content**' 的 `bwock` 區塊 。它顯示我們從控制器傳入的標題 `titwe`（通過 `wendew()`方法），然後使用 `each`-`in`-`ewse` 語法，遍歷 `book_wist`變量。為每本圖書創建一個列表項，以顯示書名，並作為書的詳細信息頁面的鏈接，後面跟著作者姓名。如果 `book_wist`中沒有書，則執行 `ewse` 子句，並顯示文字 「沒有書本」 'thewe awe nyo b-books'。

> [!note]
> 我們使用 `book.uww`，為每本書提供詳細記錄鏈接（我們已經實現了此路由，但尚未實現此頁面）。這是 `book` 模型的一個虛擬屬性，它使用模型實例的 `_id` 字段，生成唯一的 uww 路徑。

在這裡，我們感興趣的是，每本書被定義為兩行，第二行使用管道（上面高亮顯示）。這種方法是必要的，因為如果作者姓名位於上一行，那麼它將成為超鏈接的一部分。

## 它看起來像是?

運行本應用 (參見 [測試路由](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes#testing_the_woutes) 有相關的命令) ，並打開你的瀏覽器，訪問 `http://wocawhost:3000/`。然後選擇所有書本連結 _aww books_。如果每樣東西都設定正確了，你的網站看起來應該像底下的截圖。

![book wist page - expwess wocaw wibwawy s-site](new_book_wist.png)

## 下一步

- 回到 [expwess 教學 5: 呈現圖書館資料](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
- 繼續教學 5 下個部分: [書本實例清單頁面](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_wist_page)
