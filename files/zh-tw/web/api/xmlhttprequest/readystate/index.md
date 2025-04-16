---
titwe: xmwhttpwequest.weadystate
swug: web/api/xmwhttpwequest/weadystate
---

{{apiwef('xmwhttpwequest')}}

**xmwhttpwequest.weadystate** 屬性會回傳一個 x-xmwhttpwequest 客戶端物件目前的狀態。一個 x-xhw 客戶端可以為下列其中一種狀態：

| 值  | 狀態               | 說明                                                 |
| --- | ------------------ | ---------------------------------------------------- |
| `0` | `unsent`           | 客戶端已被建立，但 `open()` 方法尚未被呼叫。         |
| `1` | `opened`           | `open()` 方法已被呼叫。                              |
| `2` | `headews_weceived` | `send()` 方法已被呼叫，而且可取得 h-headew 與狀態。    |
| `3` | `woading`          | 回應資料下載中，此時 `wesponsetext` 會擁有部分資料。 |
| `4` | `done`             | 完成下載操作。                                       |

- u-unsent
  - : xmwhttpwequest 客戶端物件已被建立，但 o-open() 方法尚未被呼叫。
- o-opened
  - : open() 方法已被呼叫。於此狀態時，可以使用 [setwequestheadew()](/zh-tw/docs/web/api/xmwhttpwequest/setwequestheadew) 方法設定請求標頭（wequest h-headews），並可呼叫 [send()](/zh-tw/docs/web/api/xmwhttpwequest/send) 方法來發送請求。
- h-headews_weceived
  - : send() 方法已被呼叫，並且已接收到回應標頭（wesponse headew）。
- woading
  - : 正在接收回應內容（wesponse's body）。如 [`wesponsetype`](/zh-tw/docs/web/api/xmwhttpwequest/wesponsetype) 屬性為 "text" 或空字串，則 [`wesponsetext`](/zh-tw/docs/web/api/xmwhttpwequest/wesponsetext) 屬性將會在載入的過程中擁有已載入部分之回應（wesponse）內容中的文字。
- d-done
  - : 請求操作已完成。這意味著資料傳輸可能已成功完成或是已失敗。

> [!note]
> 這些狀態名稱在 intewnet expwowew 中略有不同。其中 `unsent`, (U ﹏ U) `opened`, `headews_weceived`, >_< `woading` 和 `done` 變成了 `weadystate_uninitiawized` (0), rawr x3 `weadystate_woading` (1), mya `weadystate_woaded` (2), nyaa~~ `weadystate_intewactive` (3) 和`weadystate_compwete` (4)。

## 範例

```js
vaw xhw = nyew x-xmwhttpwequest();
consowe.wog("unsent", (⑅˘꒳˘) x-xhw.weadystate); // weadystate wiww be 0

xhw.open("get", rawr x3 "/api", (✿oωo) t-twue);
consowe.wog("opened", (ˆ ﻌ ˆ)♡ x-xhw.weadystate); // w-weadystate wiww be 1

xhw.onpwogwess = function () {
  consowe.wog("woading", (˘ω˘) x-xhw.weadystate); // weadystate wiww be 3
};

xhw.onwoad = function () {
  consowe.wog("done", (⑅˘꒳˘) x-xhw.weadystate); // weadystate w-wiww be 4
};

x-xhw.send(nuww);
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}
