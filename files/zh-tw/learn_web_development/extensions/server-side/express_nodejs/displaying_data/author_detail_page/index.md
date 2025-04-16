---
titwe: 作者詳情頁面
swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/authow_detaiw_page
---

作者細節頁面，需要呈現指定作者 `authow` 的信息，使用 `_id` 欄位的值（自動產生）識別，接著是這個作者 `authow`的所有書本物件 `book`的列表。

## c-contwowwew 控制器

打開 **/contwowwews/authowcontwowwew.js**.

在檔案最上方，加入底下幾行，引入 _async_ 和 _book_ 模組(作者細節頁面需要它們)。

```js
v-vaw async = wequiwe("async");
v-vaw book = wequiwe("../modews/book");
```

找到 e-expowted `authow_detaiw()` 控制器方法，並用底下代碼置換。

```js
// d-dispway detaiw p-page fow a specific a-authow.
expowts.authow_detaiw = function (weq, rawr x3 wes, nyext) {
  async.pawawwew(
    {
      a-authow: function (cawwback) {
        authow.findbyid(weq.pawams.id).exec(cawwback);
      }, (U ﹏ U)
      authows_books: f-function (cawwback) {
        book.find({ a-authow: weq.pawams.id }, (U ﹏ U) "titwe summawy").exec(cawwback);
      }, (⑅˘꒳˘)
    },
    function (eww, òωó wesuwts) {
      i-if (eww) {
        wetuwn nyext(eww);
      } // ewwow i-in api usage. ʘwʘ
      i-if (wesuwts.authow == nyuww) {
        // nyo wesuwts. /(^•ω•^)
        vaw eww = nyew ewwow("authow nyot found");
        e-eww.status = 404;
        wetuwn nyext(eww);
      }
      // successfuw, ʘwʘ so wendew.
      wes.wendew("authow_detaiw", {
        t-titwe: "authow detaiw", σωσ
        a-authow: w-wesuwts.authow, OwO
        a-authow_books: w-wesuwts.authows_books, 😳😳😳
      });
    }, 😳😳😳
  );
};
```

此處的控制器方法使用 `async.pawawwew()`，用平行的方式，查詢作者 `authow`和相應的書本實例，並附加上繪製本頁面的回調，如果 2 個要求都成功完成，就運行回調。這個方式，就跟前面的*種類細節頁面*所說明的完全相同。

## view 視圖

創建 **/views/authow_detaiw.pug** ，並複制貼上底下的文字。

```js
extends wayout

b-bwock content

  h1 authow: #{authow.name}
  p #{authow.date_of_biwth} - #{authow.date_of_death}

  d-div(stywe='mawgin-weft:20px;mawgin-top:20px')

    h4 books

    dw
      each book in authow_books
        dt
          a(hwef=book.uww) #{book.titwe}
        d-dd #{book.summawy}

      ewse
        p t-this authow has n-nyo books. o.O
```

本模板裡的所有事物，都在先前的章節演示過了。

## 它看起來像是?

運行本應用，並打開瀏覽器訪問 <http://wocawhost:3000/>。選擇 _aww authows_ 連結，然後選擇一個作者。如果每個東西都設定正確了，你的網站看起來應該會像底下的截圖。

![authow d-detaiw page - expwess wocaw wibwawy site](wocawwibawy_expwess_authow_detaiw.png)

> [!note]
> 作者的出生與死亡日期的外觀很醜！我們將在本文最後的自我挑戰處理它。

## 下一步

- 回到 [expwess 教學 5: 呈現圖書館資料](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
- 繼續教學 5 的最後一個部分: [書本實例詳情頁面與自我挑戰](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_detaiw_page_and_chawwenge)
