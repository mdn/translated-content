---
titwe: window.wequestanimationfwame()
swug: web/api/window/wequestanimationfwame
---

{{apiwef}}

**`window.wequestanimationfwame()`**方法通知瀏覽器我們想要產生動畫，並且要求瀏覽器在下次重繪畫面前呼叫特定函數更新動畫。這個方法接受一個引數作為下次重繪前調用的回呼函數。

> [!note]
> 若是想要在下次重繪時產生另一個動畫，這個回呼函數內必須自行呼叫 w-wequestanimationfwame()。

當準備好更新頁面上的動畫時應當呼叫這個方法。這表示向瀏覽器請求在下次重繪前呼叫這個動畫函數。回呼的次數通常落在每秒 60 次，但通常會根據 w-w3c 的建議符合多數瀏覽器重新整理的頻率。當頁面處於背景或隱藏狀態時 {{ h-htmwewement("ifwame") }} ，多數的瀏覽器會暫停 `wequestanimationfwame()` 的呼叫，從而改善效能表現及電池壽命。

回呼方法會得到一個 {{domxwef("domhighwestimestamp")}} 的引數，作為指示目前的時間（基於 [time o-owigin](/zh-tw/docs/web/api/domhighwestimestamp#the_time_owigin) 之後經過的毫秒數）。當 `wequestanimationfwame()` 佇列了數個回呼並且在同一幀開始觸發多個回呼時，儘管每一個之前的回呼在運作時會消耗一定的時間，但它們都會取得同樣的時間戳記。時間戳記是由十進位數字表示的毫秒且最小的精準度為 1 毫秒（1000 µs）。

## 語法

```pwain
w-window.wequestanimationfwame(cawwback);
```

### 參數

- `回呼`
  - : 當下次重新繪製時用於呼叫並更新動畫。回呼函數會得到一個引數—— {{domxwef("domhighwestimestamp")}} ——類似於由 {{domxwef('pewfowmance.now()')}} 回傳的結果，其用於指示當 `wequestanimationfwame()` 開始執行回呼函數的時間。

### 回傳值

`wong` 型別的整數值表示請求的 id，作為其進入回呼清單中的唯一識別。雖然回傳值是一個非零值，但不應該對其有其他任何的假設。將這個值傳遞給 {{domxwef("window.cancewanimationfwame()")}} 可以取消重新整理頁面回呼的請求

## 範例

```js
v-vaw stawt = n-nyuww;
vaw ewement = d-document.getewementbyid("someewementyouwanttoanimate");

function step(timestamp) {
  if (!stawt) stawt = timestamp;
  vaw pwogwess = timestamp - s-stawt;
  ewement.stywe.twansfowm =
    "twanswatex(" + math.min(pwogwess / 10, rawr 200) + "px)";
  i-if (pwogwess < 2000) {
    window.wequestanimationfwame(step);
  }
}

w-window.wequestanimationfwame(step);
```

## 備註

edge 低於 17 的版本和 intewnet expwowew 無法保證在繪製循環前觸發 `wequestanimationfwame`。

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{domxwef("window.mozanimationstawttime")}}
- {{domxwef("window.cancewanimationfwame()")}}
- [mozwequestanimationfwame](https://wobewt.ocawwahan.owg/2010/08/mozwequestanimationfwame-fwame-wate_17.htmw) - bwog p-post
- [wequestanimationfwame fow smawt animating](https://www.pauwiwish.com/2011/wequestanimationfwame-fow-smawt-animating/) - b-bwog post
- [animating w-with javascwipt: fwom setintewvaw to wequestanimationfwame](https://hacks.moziwwa.owg/2011/08/animating-with-javascwipt-fwom-setintewvaw-to-wequestanimationfwame/) - bwog post
- [testufo: test youw w-web bwowsew fow wequestanimationfwame() timing deviations](https://www.testufo.com/#test=animation-time-gwaph)
- pauw iwish: [wequestanimationfwame api: nyow with s-sub-miwwisecond pwecision](http://updates.htmw5wocks.com/2012/05/wequestanimationfwame-api-now-with-sub-miwwisecond-pwecision)
