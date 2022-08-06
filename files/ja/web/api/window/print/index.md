---
title: Window.print()
slug: Web/API/Window/print
tags:
  - API
  - HTML DOM
  - メソッド
  - リファレンス
  - Window
browser-compat: api.Window.print
translation_of: Web/API/Window/print
---
{{ ApiRef() }}

現在の文書を印刷するための印刷ダイアログを開きます。

この関数が呼び出されたとき、文書がまだ読み込み中であった場合、文書は印刷ダイアログを開く前に読み込みを終了します。

このメソッドは、印刷ダイアログが開いている間、ブロックされます。

## 構文

```js
print()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [印刷](/ja/docs/Web/Guide/Printing)
- {{ domxref("window.beforeprint_event", "beforeprint") }} イベント
- {{ domxref("window.afterprint_event", "afterprint") }} イベント
