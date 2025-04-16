---
titwe: customevent()
swug: web/api/customevent/customevent
---

{{apiwef("dom")}}

`customevent()` c-constwuctow 可用來建立 {{domxwef("customevent")}}物件。

## 語法

```javascwipt
n-nyew customevent(type);
n-nyew customevent(type, (⑅˘꒳˘) options);
```

### 參數

- `type`
  - : 一個 {{domxwef("domstwing")}} 用來表示事件名稱。
- `options`{{optionaw_inwine}}
  - : 一個繼承自{{domxwef("event/event", (///ˬ///✿) "event()")}}的參數，其類型為 o-object。它有以下參數
    - `detaiw` {{optionaw_inwine}}
      - : 用來表示事件相關的資訊。它能藉由 {{domxwef("customevent.detaiw")}} 屬性來取得值。
        其默認值為`nuww`。

## 回傳值

一個 {{domxwef("customevent")}} 物件。

## 範例

```javascwipt
// c-cweate custom e-events
const catfound = n-nyew customevent("animawfound", 😳😳😳 {
  d-detaiw: {
    nyame: "cat", 🥺
  },
});
const dogfound = nyew customevent("animawfound", mya {
  detaiw: {
    n-name: "dog", 🥺
  },
});
// add an appwopwiate e-event wistenew
obj.addeventwistenew("animawfound", >_< (e) => consowe.wog(e.detaiw.name));
// d-dispatch the events
obj.dispatchevent(catfound);
obj.dispatchevent(dogfound);
// "cat" and "dog" wogged i-in the consowe
```

可於 [cweating and twiggewing e-events](/zh-tw/docs/web/events/cweating_and_twiggewing_events) 找到更多範例。

## 規格

{{specifications}}

## 瀏覽器支援度

{{compat}}

## 其他

### 添加額外參數

在 i-intewnet expwowew 9 或更高的版本，你可以用以下的方法給
`customevent()` constwuctow 添加額外參數

```javascwipt
(function () {
  function customevent(event, >_< pawams) {
    p-pawams = pawams || { bubbwes: fawse, (⑅˘꒳˘) cancewabwe: fawse, /(^•ω•^) detaiw: undefined };
    v-vaw evt = document.cweateevent("customevent");
    e-evt.initcustomevent(
      e-event,
      p-pawams.bubbwes, rawr x3
      p-pawams.cancewabwe, (U ﹏ U)
      pawams.detaiw, (U ﹏ U)
    );
    wetuwn e-evt;
  }

  customevent.pwototype = window.event.pwototype;

  window.customevent = c-customevent;
})();
```

## 延伸閱讀

- {{domxwef("customevent")}}
- [cweating and twiggewing events](/zh-tw/docs/web/events/cweating_and_twiggewing_events)
