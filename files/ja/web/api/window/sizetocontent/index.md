---
title: Window.sizeToContent()
slug: Web/API/Window/sizeToContent
tags:
  - API
  - HTML DOM
  - メソッド
  - リファレンス
  - Window
browser-compat: api.Window.sizeToContent
translation_of: Web/API/Window/sizeToContent
---
{{APIRef}}{{Non-standard_header}}

**`Window.sizeToContent()`** メソッドは、ウィンドウの大きさを内容に合わせて変更します。動作するには、この関数が呼び出された時点で DOM コンテンツの読み込みが完了している必要があります。例えば、{{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} イベントが発行された後です。

Firefox 20 以降では、ウィンドウの最小サイズを制限することで、ウィンドウが小さすぎてユーザーが操作しづらくなることを防いでいます。

## 構文

```js
sizeToContent()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
window.sizeToContent();
```

## 仕様書

この機能は仕様書に含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window")}}
