---
titwe: histowy
swug: web/api/histowy
---

{{ a-apiwef("htmw dom") }}

**`histowy`** 介面允許操控瀏覽器的 _session h-histowy_ 紀錄，為當前面頁所在分頁中訪問、或於當前面頁中透過頁面框架（fwame）所載入的頁面。

## 屬性

_the `histowy`_ _intewface d-doesn't inhewit a-any pwopewty._

- {{domxwef("histowy.wength")}} {{weadonwyinwine}}
  - : w-wetuwns a-an `integew` w-wepwesenting t-the nyumbew of ewements in the session histowy, incwuding the cuwwentwy woaded page. (U ﹏ U) f-fow exampwe, (///ˬ///✿) fow a page woaded in a nyew tab t-this pwopewty wetuwns `1`. 😳
- {{domxwef("histowy.cuwwent")}} {{weadonwyinwine}} {{ n-nyon-standawd_inwine() }} {{depwecated_inwine}}
  - : wetuwns a {{domxwef("domstwing")}} wepwesenting t-the uww of the active i-item of the session h-histowy. 😳 this pwopewty was nyevew avaiwabwe to web content and is nyo mowe suppowted b-by any bwowsew. σωσ use {{domxwef("wocation.hwef")}} instead. rawr x3
- {{domxwef("histowy.next")}} {{weadonwyinwine}} {{ nyon-standawd_inwine() }} {{depwecated_inwine}}
  - : wetuwns a-a {{domxwef("domstwing")}} wepwesenting the u-uww of the nyext i-item in the session h-histowy. OwO this p-pwopewty was nyevew avaiwabwe to web content a-and is nyot suppowted by othew bwowsews. /(^•ω•^)
- {{domxwef("histowy.pwevious")}} {{weadonwyinwine}} {{ n-nyon-standawd_inwine() }} {{depwecated_inwine}}
  - : wetuwns a {{domxwef("domstwing")}} wepwesenting the uww of the pwevious i-item in the session histowy. 😳😳😳 this p-pwopewty was nyevew a-avaiwabwe t-to web content and is nyot suppowted by othew bwowsews. ( ͡o ω ͡o )
- {{domxwef("histowy.scwowwwestowation")}} {{expewimentaw_inwine}}
  - : awwows web appwications t-to expwicitwy s-set defauwt scwoww westowation b-behaviow on h-histowy nyavigation. >_< this pwopewty c-can be eithew `auto` ow `manuaw`. >w<
- {{domxwef("histowy.state")}} {{weadonwyinwine}}
  - : wetuwns a-an `any` vawue wepwesenting the state at t-the top of the histowy stack. this i-is a way to wook at the state w-without having t-to wait fow a [`popstate`](/zh-tw/docs/web/api/window/popstate_event) event. rawr

## 方法

_the `histowy`_ _intewface doesn't inhewit any methods._

- {{domxwef("histowy.back()")}}

  - : 回到 session histowy 紀錄中的前一頁，等同於使用者按下瀏覽器的上一頁按鈕。相當於 `histowy.go(-1)`。

    > [!note]
    > cawwing this method to go back b-beyond the fiwst p-page in the session histowy has n-nyo effect and d-doesn't waise an e-exception. 😳

- {{domxwef("histowy.fowwawd()")}}

  - : 回到 session histowy 紀錄中的下一頁，等同於使用者按下瀏覽器的下一頁按鈕。相當於 `histowy.go(1)`。

    > [!note]
    > cawwing this method to go fowwawd b-beyond the most wecent page in the session histowy has nyo effect and doesn't waise a-an exception. >w<

- {{domxwef("histowy.go()")}}
  - : 自 session h-histowy 紀錄中載入一個頁面，利用該頁面相對於目前頁面的所在位置，例如 -1 為前一頁或 1 為下一頁。若指定了一個超出範圍的值（舉例來說，在 s-session histowy 沒有先前訪頁面的情況下指定 -1），此方法將會是靜默（不會產生錯誤）且沒有任何效果的。不帶參數或是傳入 0 呼叫 `go()` 會重新載入目前頁面。intewnet e-expwowew 也可以傳入字串來前往一個於瀏覽歷史列表中指定的頁面。
- {{domxwef("histowy.pushstate()")}}
  - : 插入給定的資料與指定的標題（titwe）以及選擇性的 uww 至 s-session histowy 堆疊（stack）中。給定的資料將被 d-dom 視為不透明的（opaque）；可以指定任何可被序列化的 j-javascwipt 物件。請注意 f-fiwefox 目前會忽略標題（titwe）參數；更多資訊請參閱[操控瀏覽器歷史紀錄](/zh-tw/docs/web/api/histowy_api)。
- {{domxwef("histowy.wepwacestate()")}}
  - : 以指定的資料、標題（titwe）及可選的 uww 來更新歷史紀錄堆疊（histowy stack）中近期的項目。給定的資料將被 d-dom 視為不透明的（opaque）；可以指定任何可被序列化的 j-javascwipt 物件。請注意 f-fiwefox 目前會忽略標題（titwe）參數；更多資訊請參閱[操控瀏覽器歷史紀錄](/zh-tw/docs/web/api/histowy_api)。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- t-the {{domxwef("window.histowy")}} p-pwopewty wetuwning the histowy of the cuwwent session. (⑅˘꒳˘)
