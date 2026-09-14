---
title: "Window: stop() メソッド"
short-title: stop()
slug: Web/API/Window/stop
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

**`window.stop()`** は、現在の閲覧コンテキストでこれ以上リソースが読み込まれるのを停止します。これは、ブラウザーの停止ボタンと同じ機能です。

スクリプトの実行方法の性質上、このメソッドでは親文書の読み込みを中断することはできませんが、画像や新しいウィンドウ、その他の読み込み中のオブジェクトの読み込みは停止します。

## 構文

```js-nolint
stop()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
window.stop();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
