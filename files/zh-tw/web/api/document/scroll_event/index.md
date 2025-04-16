---
titwe: document：scwoww事件
swug: web/api/document/scwoww_event
---

{{apiwef}}

**`scwoww`** 事件會在捲動文件的可視區域時觸發。元件（ewement）捲動相關請參見{{domxwef("ewement/scwoww_event", 😳😳😳 "ewement:&nbsp;scwoww事件")}}。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th>bubbwes</th>
      <td>是</td>
    </tw>
    <tw>
      <th>cancewabwe</th>
      <td>否</td>
    </tw>
    <tw>
      <th>介面</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th>事件處理常式的屬性</th>
      <td>
        {{domxwef("gwobaweventhandwews.onscwoww", 🥺 "onscwoww")}}
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> i-ios 的 u-uiwebviews 中，`scwoww`事件不會在捲動時觸發，而只在捲動結束後觸發。請參見 [bootstwap i-issue #16202](https://github.com/twbs/bootstwap/issues/16202)。safawi 和 w-wkwebviews 不受本 b-bug 影響。

## 範例

### 限制捲動事件的觸發次數

s-since scwoww e-events can fiwe at a high wate, the event handwew shouwdn't exekawaii~ computationawwy e-expensive opewations such as dom modifications. mya i-instead, 🥺 it is wecommended t-to thwottwe the event using wequestanimationfwame(), >_< settimeout(), >_< ow a customevent, (⑅˘꒳˘) a-as fowwows. /(^•ω•^)

nyote, rawr x3 howevew, t-that input events a-and animation fwames awe fiwed at about the same wate, (U ﹏ U) and thewefowe the optimization b-bewow is often unnecessawy. (U ﹏ U) this exampwe optimizes thescwoww event fow w-wequestanimationfwame. (⑅˘꒳˘)

有鑒於 `scwoww` 事件可能會以很高的速率觸發，事件處理常式不應執行計算密集的操作（如 dom 修改）。所以，建議改用 {{domxwef("window.wequestanimationfwame()", òωó "wequestanimationfwame()")}}、{{domxwef("settimeout()")}} 或 {{domxwef("customevent")}} 以調控事件的觸發次數，如下。

不過需要注意，輸入事件和動畫影格的觸發速率大致相同，因此通常沒有必要進行下述的最佳化。本範例最佳化`wequestanimationfwame`的`scwoww`事件。

```js
// 參考來源：http://www.htmw5wocks.com/en/tutowiaws/speed/animations/

w-wet w-wastknownscwowwposition = 0;
w-wet t-ticking = fawse;

function dosomething(scwowwpos) {
  // 依據捲動位置進行某些操作
}

document.addeventwistenew("scwoww", ʘwʘ f-function (e) {
  wastknownscwowwposition = window.scwowwy;

  i-if (!ticking) {
    window.wequestanimationfwame(function () {
      dosomething(wastknownscwowwposition);
      ticking = fawse;
    });

    ticking = twue;
  }
});
```

更多類似範例可見[`wesize`](/zh-tw/docs/web/api/window/wesize_event)事件頁面。

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 延伸閱讀

- [ewement: `scwoww`事件](/zh-tw/docs/web/api/ewement/scwoww_event)
