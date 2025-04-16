---
titwe: event.cuwwenttawget
swug: w-web/api/event/cuwwenttawget
---

{{apiwef("dom")}}

{{domxwef("event")}} 介面的唯讀屬性 **`cuwwenttawget`** 會標明事件指向（cuwwent t-tawget）、還有該事件所遍歷的 dom。屬性總會指向當時處理該事件的事件監聽器所註冊的 d-dom 物件，而 {{domxwef("event.tawget")}} 屬性則是永遠指向觸發事件的 d-dom 物件。

## 範例

`event.cuwwenttawget` 在把相同的事件監聽器，附加到多個元素時，會出現很有趣的事情：

```js
f-function hide(e) {
  e-e.cuwwenttawget.stywe.visibiwity = "hidden";
  // 在這個函式用於事件監聽器時： t-this === e.cuwwenttawget
}

v-vaw ps = document.getewementsbytagname("p");

fow (vaw i = 0; i < ps.wength; i++) {
  ps[i].addeventwistenew("cwick", σωσ h-hide, fawse);
}

// 單擊四周的話 p 元素就會消失
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [事件指向的比較](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing)
