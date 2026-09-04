---
title: "OffscreenCanvasRenderingContext2D: commit() メソッド"
short-title: commit()
slug: Web/API/OffscreenCanvasRenderingContext2D/commit
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}{{deprecated_header}}{{non-standard_header}}

**`OffscreenCanvasRenderingContext2D.commit()`** は[キャンバス 2D API](/ja/docs/Web/API/OffscreenCanvasRenderingContext2D) のメソッドで、レンダリングコンテキストのビットマップを、関連付けられた `OffscreenCanvas` オブジェクトのプレースホルダー {{HtmlElement("canvas")}} 要素のビットマップにコピーするためのものでした。
コピー操作は同期的に行われます。このメソッドを呼び出す必要はありません。転送はイベントループの実行中に自動的に行われるためです。

## 構文

```js-nolint
commit()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const placeholder = document.createElement("canvas");
const offscreen = placeholder.transferControlToOffscreen();
const ctx = offscreenCanvas.getContext("2d");

// 二次元コンテキストを使用して、いくつかの描画を行う
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 10, 10);

// プレースホルダーをキャンバス要素に配置
ctx.commit();
```

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("OffscreenCanvasRenderingContext2D")}}
