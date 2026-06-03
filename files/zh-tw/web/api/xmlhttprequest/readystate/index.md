---
title: XMLHttpRequest：readyState 屬性
slug: Web/API/XMLHttpRequest/readyState
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

**XMLHttpRequest.readyState** 屬性會回傳 XMLHttpRequest 用戶端所處的狀態。一個 XHR 用戶端會處於以下其中一種狀態：

| 值  | 狀態               | 描述                                    |
| --- | ------------------ | --------------------------------------- |
| `0` | `UNSENT`           | 用戶端已被建立。`open()` 尚未被呼叫。   |
| `1` | `OPENED`           | `open()` 已被呼叫。                     |
| `2` | `HEADERS_RECEIVED` | `send()` 已被呼叫，且標頭和狀態皆可用。 |
| `3` | `LOADING`          | 下載中；`responseText` 持有部分資料。   |
| `4` | `DONE`             | 操作已完成。                            |

- UNSENT
  - : `XMLHttpRequest` 用戶端已被建立，但 `open()` 方法尚未被呼叫。
- OPENED
  - : `open()` 方法已被呼叫。在此狀態期間，可以使用 [setRequestHeader()](/zh-TW/docs/Web/API/XMLHttpRequest/setRequestHeader) 方法設定請求標頭，並可呼叫 [send()](/zh-TW/docs/Web/API/XMLHttpRequest/send) 方法來初始化擷取。
- HEADERS_RECEIVED
  - : `send()` 已被呼叫，所有重新導向（如果有的話）都已被遵循，且回應標頭已被接收。
- LOADING
  - : 正在接收回應主體。如果 [`responseType`](/zh-TW/docs/Web/API/XMLHttpRequest/responseType) 是「text」或空字串，[`responseText`](/zh-TW/docs/Web/API/XMLHttpRequest/responseText) 將在載入時持有部分文字回應。
- DONE
  - : 擷取操作已完成。這可能意味著資料傳輸已成功完成或失敗。

## 範例

```js
const xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.readyState); // readyState 會是 0

xhr.open("GET", "/api", true);
console.log("OPENED", xhr.readyState); // readyState 會是 1

xhr.onprogress = () => {
  console.log("LOADING", xhr.readyState); // readyState 會是 3
};

xhr.onload = () => {
  console.log("DONE", xhr.readyState); // readyState 會是 4
};

xhr.send(null);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
