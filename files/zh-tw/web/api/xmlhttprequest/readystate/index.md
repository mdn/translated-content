---
title: XMLHttpRequest.readyState
slug: Web/API/XMLHttpRequest/readyState
---

{{APIRef('XMLHttpRequest')}}

**XMLHttpRequest.readyState** 屬性會回傳一個 XMLHttpRequest 客戶端物件目前的狀態。一個 XHR 客戶端可以為下列其中一種狀態：

| 值  | 狀態               | 說明                                                 |
| --- | ------------------ | ---------------------------------------------------- |
| `0` | `UNSENT`           | 客戶端已被建立，但 `open()` 方法尚未被呼叫。         |
| `1` | `OPENED`           | `open()` 方法已被呼叫。                              |
| `2` | `HEADERS_RECEIVED` | `send()` 方法已被呼叫，而且可取得 header 與狀態。    |
| `3` | `LOADING`          | 回應資料下載中，此時 `responseText` 會擁有部分資料。 |
| `4` | `DONE`             | 完成下載操作。                                       |

- UNSENT
  - : XMLHttpRequest 客戶端物件已被建立，但 open() 方法尚未被呼叫。
- OPENED
  - : open() 方法已被呼叫。於此狀態時，可以使用 [setRequestHeader()](/zh-TW/docs/Web/API/XMLHttpRequest/setRequestHeader) 方法設定請求標頭（request headers），並可呼叫 [send()](/zh-TW/docs/Web/API/XMLHttpRequest/send) 方法來發送請求。
- HEADERS_RECEIVED
  - : send() 方法已被呼叫，並且已接收到回應標頭（response header）。
- LOADING
  - : 正在接收回應內容（response's body）。如 [`responseType`](/zh-TW/docs/Web/API/XMLHttpRequest/responseType) 屬性為 "text" 或空字串，則 [`responseText`](/zh-TW/docs/Web/API/XMLHttpRequest/responseText) 屬性將會在載入的過程中擁有已載入部分之回應（response）內容中的文字。
- DONE
  - : 請求操作已完成。這意味著資料傳輸可能已成功完成或是已失敗。

> [!NOTE]
> 這些狀態名稱在 Internet Explorer 中略有不同。其中 `UNSENT`, `OPENED`, `HEADERS_RECEIVED`, `LOADING` 和 `DONE` 變成了 `READYSTATE_UNINITIALIZED` (0), `READYSTATE_LOADING` (1), `READYSTATE_LOADED` (2), `READYSTATE_INTERACTIVE` (3) 和`READYSTATE_COMPLETE` (4)。

## 範例

```js
var xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.readyState); // readyState will be 0

xhr.open("GET", "/api", true);
console.log("OPENED", xhr.readyState); // readyState will be 1

xhr.onprogress = function () {
  console.log("LOADING", xhr.readyState); // readyState will be 3
};

xhr.onload = function () {
  console.log("DONE", xhr.readyState); // readyState will be 4
};

xhr.send(null);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
