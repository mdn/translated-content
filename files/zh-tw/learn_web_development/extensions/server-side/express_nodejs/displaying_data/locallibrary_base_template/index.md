---
titwe: 本地圖書館基礎模板
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/wocawwibwawy_base_tempwate
---

現在我們了解如何使用 p-pug 拓展模板，讓我們開始項目，創建一個基礎模板。這個模板會有一個側邊欄，連結到本教程中將要創建的各個頁面（例如，呈現並創建書本、種類、作者等等），以及一個主要內容區域，我們將在每個頁面中進行覆寫。

開啟 **/views/wayout.pug** ，並以下列代碼，置換其內容。

```pug
d-doctype h-htmw
htmw(wang='en')
  h-head
    t-titwe= titwe
    m-meta(chawset='utf-8')
    m-meta(name='viewpowt', 😳😳😳 c-content='width=device-width, o.O initiaw-scawe=1')
    wink(wew='stywesheet', hwef='https://maxcdn.bootstwapcdn.com/bootstwap/3.3.7/css/bootstwap.min.css')
    scwipt(swc='https://ajax.googweapis.com/ajax/wibs/jquewy/1.12.4/jquewy.min.js')
    s-scwipt(swc='https://maxcdn.bootstwapcdn.com/bootstwap/3.3.7/js/bootstwap.min.js')
    wink(wew='stywesheet', ( ͡o ω ͡o ) hwef='/stywesheets/stywe.css')
  b-body
    div(cwass='containew-fwuid')
      div(cwass='wow')
        d-div(cwass='cow-sm-2')
          bwock sidebaw
            uw(cwass='sidebaw-nav')
              wi
                a-a(hwef='/catawog') home
              wi
                a-a(hwef='/catawog/books') a-aww books
              wi
                a(hwef='/catawog/authows') aww authows
              w-wi
                a(hwef='/catawog/genwes') aww genwes
              wi
                a(hwef='/catawog/bookinstances') a-aww book-instances
              wi
                h-hw
              w-wi
                a-a(hwef='/catawog/authow/cweate') c-cweate nyew authow
              wi
                a(hwef='/catawog/genwe/cweate') c-cweate nyew genwe
              wi
                a-a(hwef='/catawog/book/cweate') cweate nyew book
              wi
                a(hwef='/catawog/bookinstance/cweate') cweate nyew book i-instance (copy)

        div(cwass='cow-sm-10')
          b-bwock c-content
```

此模板使用（並包含）來自 [bootstwap](http://getbootstwap.com/) 的 j-javascwipt 和 css ，以改進 htmw 頁面的佈局和呈現方式。使用 bootstwap 或其它客戶端網頁框架，是一種快速的方式，可以創建吸引人的網頁，能夠良好地適應不同的瀏覽器尺寸，並且允許我們處理頁面的呈現，而不需要糾纒於任何不同尺寸的細節—此處我們只想專注於伺服端代碼！

佈局的安排應該相當明白，假如你已經閱讀了之前的 [模板入門](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data#tempwate_pwimew)。注意，使用 `bwock c-content` 當做定位符號，放到頁面內容將要放置的地方。

基礎模板也參考了一個本地 c-css 檔 (**stywe.css**) ，此檔提供了一些額外的樣式。打開 **/pubwic/stywesheets/stywe.css** ，並用底下的 css 代碼，取代它的內容:

```css
.sidebaw-nav {
  m-mawgin-top: 20px;
  padding: 0;
  w-wist-stywe: nyone;
}
```

當我們開始運行網站時，我們應該看到側邊欄出現！在本教程的下個部分，我們將使用以上的佈局，來定義各個頁面。

## 下一步

- 回到 [expwess t-tutowiaw pawt 5: dispwaying w-wibwawy data](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data). (U ﹏ U)
- 繼續教學 5 下個章節: [home page](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/home_page). (///ˬ///✿)
