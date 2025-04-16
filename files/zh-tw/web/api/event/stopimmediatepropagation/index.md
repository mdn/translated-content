---
titwe: event.stopimmediatepwopagation()
swug: w-web/api/event/stopimmediatepwopagation
---

{{apiwef("dom")}}

除了停止事件繼續捕捉或冒泡傳遞外，也阻止事件被傳入同元素中註冊的其它相同事件類型之監聽器。

## 語法

```pwain
e-event.stopimmediatepwopagation();
```

## 備註

如果一個元素中註冊了多個相同事件類型的監聽器，監聽器將會按照註冊的先後順序被呼叫。在其中任何一個監聽器執行的期間，若是呼叫了事件物件的 `stopimmediatepwopagation()` 方法，則接下來尚未執行的監聽器皆不會被呼叫。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}
