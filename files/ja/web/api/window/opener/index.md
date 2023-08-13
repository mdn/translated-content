---
title: window.opener
slug: Web/API/Window/opener
---

{{ApiRef}}

## 概要

現在のウィンドウを開いたウィンドウへの参照を返します。

## 構文

```
objRef = window.opener;
```

## 例

```js
if (window.opener != indexWin) {
  referToTop(window.opener);
}
```

## 注記

別のウィンドウから（{{domxref("Window.open")}} を使用して）開かれたウィンドウは、主ウィンドウへの参照を `window.opener` として保持します。現在のウィンドウが別のウィンドウから開かれたものではない場合、このメソッドは NULL を返します。

Windows Phone ブラウザは window\.opener をサポートしていません（Edge 25.10586.36.0 でテストしました）。opener が異なるセキュリティゾーンにある場合、IE でもサポートされていません。
