---
title: XMLHttpRequest：status 屬性
slug: Web/API/XMLHttpRequest/status
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

**`XMLHttpRequest.status`** 唯讀屬性會回傳 `XMLHttpRequest` 回應的 HTTP [狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)數值。

在請求完成前，`status` 的值為 0。在發生 `XMLHttpRequest` 錯誤時，瀏覽器也會回報狀態為 0。

## 值

一個數字。

## 範例

```js
const xhr = new XMLHttpRequest();
console.log("UNSENT：", xhr.status);

xhr.open("GET", "/server");
console.log("OPENED：", xhr.status);

xhr.onprogress = () => {
  console.log("LOADING：", xhr.status);
};

xhr.onload = () => {
  console.log("DONE：", xhr.status);
};

xhr.send();

/**
 * 輸出如下：
 *
 * UNSENT：0
 * OPENED：0
 * LOADING：200
 * DONE：200
 */
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)列表
- [HTTP](/zh-TW/docs/Web/HTTP)
