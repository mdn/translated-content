---
title: "CanvasRenderingContext2D: isContextLost() メソッド"
short-title: isContextLost()
slug: Web/API/CanvasRenderingContext2D/isContextLost
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.isContextLost()`** はキャンバス 2D API のメソッドで、この描画コンテキストが失われている場合（そしてリセットされていない場合）に `true` を返します。
これは、ドライバーのクラッシュやメモリー不足などによって発生することがあります。

ユーザーエージェントがキャンバスのバッキングストレージが失われたことを検出した場合、 [`contextlost` イベント](/ja/docs/Web/API/HTMLCanvasElement/contextlost_event) を関連付けられた [`HTMLCanvasElement`](/ja/docs/Web/API/HTMLCanvasElement) に対して発生させます。
このイベントがキャンセルされなかった場合、バッキングストレージをデフォルト状態にリセットしようと試みます（これは {{domxref("CanvasRenderingContext2D.reset()")}} を呼び出すことに相当します）。
成功すると、[`contextrestored` イベント](/ja/docs/Web/API/HTMLCanvasElement/contextrestored_event) が発生し、コンテキストが再初期化および再描画の準備が整ったことを示します。

## 構文

```js-nolint
isContextLost()
```

### 引数

なし。

### 返値

描画コンテキストが失われている場合は `true` です。そうでなければ `false` です。

### 例

```js
const ctx = canvas.getContext("2d");

if (ctx.isContextLost()) {
  console.log("コンテキストが失われています");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- [`HTMLCanvasElement: contextlost` event](/ja/docs/Web/API/HTMLCanvasElement/contextlost_event)
- [`HTMLCanvasElement: contextrestored` event](/ja/docs/Web/API/HTMLCanvasElement/contextrestored_event)
