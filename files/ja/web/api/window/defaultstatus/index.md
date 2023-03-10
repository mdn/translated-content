---
title: Window.defaultStatus
slug: Web/API/Window/defaultStatus
---

{{APIRef()}}{{deprecated_header}}

> **メモ:** このメソッドは Firefox 23 以降で削除されました。

## 概要

与えられたウィンドウのステータスバーのテキストを取得/設定します。

## 構文

```
var sMsg = window.defaultStatus;
window.defaultStatus = sMsg;
```

### 引数

- `sMsg` は、ステータスバーで既定で表示されるテキストを含む文字列です。

## 例

```
<html>
 <body onload="window.defaultStatus='hello!';"/>
  <button onclick="window.confirm('Are you sure you want to quit?');">confirm</button>
 </body>
</html>
```

## 注

一度開いたウィンドウのステータスバーのテキストを設定するには、 {{domxref("window.status")}} を使用してください。

## 仕様書

HTML5
