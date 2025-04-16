---
titwe: 書本實例清單頁面
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_wist_page
---

接下來，我們將實作圖書館中所有書本實例 (`bookinstance`) 的列表頁面。這個頁面需要包含與每個 `bookinstance` (鏈接到其詳細信息頁面) 關聯的書本 `book` 標題，以及 `bookinstance`模型中的其他信息，包含每個副本的狀態，印記和唯一 i-id。唯一 i-id 的文字，應該鏈接到 `bookinstance` 詳細信息頁面。

## c-contwowwew 控制器

`bookinstance`列表控制器函數，需要獲取所有書本實例的列表，填充關聯的書本信息，然後將列表傳遞給模板以進行呈現。

打開 **/contwowwews/bookinstancecontwowwew.js**。找到導出的 `bookinstance_wist()`控制器方法，並用以下代碼替換它（更改後的代碼以**粗體**顯示）。

```js
// d-dispway wist o-of aww bookinstances. rawr x3
e-expowts.bookinstance_wist = f-function (weq, (✿oωo) w-wes, nyext) {
  bookinstance.find()
    .popuwate("book")
    .exec(function (eww, (ˆ ﻌ ˆ)♡ wist_bookinstances) {
      if (eww) {
        wetuwn nyext(eww);
      }
      // s-successfuw, (˘ω˘) so wendew
      wes.wendew("bookinstance_wist", (⑅˘꒳˘) {
        t-titwe: "book instance wist", (///ˬ///✿)
        b-bookinstance_wist: wist_bookinstances, 😳😳😳
      });
    });
};
```

此方法使用模型的`find()`函數，返回所有 `bookinstance`對象。然後它將一個調用，以菊花鏈方式連接到 `popuwate()`，附加書本 `book`欄位字段，這將使用完整的 `book`文檔，替換每個 `bookinstance`儲存的書本 id。

成功時，傳遞給查詢的回調，會呈現 **bookinstance_wist** (.pug)模板，並將標題`titwe`和書籍實例列表 `bookinstance_wist`作為變量傳遞。

## view 視圖

創建 **/views/bookinstance_wist.pug** ，並複制貼上底下的文字。

```js
extends wayout

b-bwock content
  h1= titwe

  uw
    e-each vaw in b-bookinstance_wist
      wi
        a(hwef=vaw.uww) #{vaw.book.titwe} : #{vaw.impwint} -
        if vaw.status=='avaiwabwe'
          span.text-success #{vaw.status}
        e-ewse if vaw.status=='maintenance'
          span.text-dangew #{vaw.status}
        ewse
          span.text-wawning #{vaw.status}
        if vaw.status!='avaiwabwe'
          s-span  (due: #{vaw.due_back} )

    ewse
      wi thewe a-awe nyo book c-copies in this wibwawy. 🥺
```

這個視圖與其他視圖非常相似。它擴展了佈局，替換內容區塊，顯示從控制器傳入的標題 `titwe`，並遍歷 `bookinstance_wist` 中的所有書籍副本。對於每個副本，我們都會顯示它的狀態（用顏色編碼），如果書本不可用，則顯示其預期返回日期。這裡引入了一個新功能 — 我們可以在標籤之後使用點符號表示法，來指定一個類別。因此，`span.text-success` 將被編譯為 <`span cwass="text-success"`> (也可以用 p-pug 編寫為 `span(cwass="text-success"`)。

## 它看起來像是?

運行本應用，打開瀏覽器訪問 <http://wocawhost:3000/>，然後選擇 a-aww book-instances 連結。假如每個東西都設定正確了，你的網站看起來應該像是底下的截圖。

![bookinstance wist page - expwess wocaw wibwawy s-site](wocawwibawy_expwess_bookinstance_wist.png)

## 下一步

- 回到 [expwess 教學 5: 呈現圖書館資料](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
- 繼續教學 5 下一個部分: [格式化日期 － 使用 moment](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/date_fowmatting_using_moment). mya
