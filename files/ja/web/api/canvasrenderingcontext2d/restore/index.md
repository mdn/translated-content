---
title: "CanvasRenderingContext2D: restore() メソッド"
short-title: restore()
slug: Web/API/CanvasRenderingContext2D/restore
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.restore()`** はキャンバス 2D API のメソッドで、描画状態スタックの最上位の項目をポップすることで、直近に保存されたキャンバス状態を復元します。保存された状態がない場合、このメソッドは何も行いません。

[描画状態](/ja/docs/Web/API/CanvasRenderingContext2D/save#解説)についての詳細情報は、 {{domxref("CanvasRenderingContext2D.save()")}} を参照してください。

## 構文

```js-nolint
restore()
```

### 引数

None.

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 保存された状態の復元

この例では、現在の状態を保存するために `save()` メソッドを使用し、後で復元するために `restore()` を使用しています。これにより、後で現在の状態で矩形を再描画できるようになります。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 現在の状態を保存
ctx.save();

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// もっとも直近の save() の呼び出しで保存された状態を復元
ctx.restore();

ctx.fillRect(150, 40, 100, 100);
```

#### 結果

{{ EmbedLiveSample('Restoring_a_saved_state', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.save()")}}
