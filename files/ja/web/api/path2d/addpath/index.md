---
title: "Path2D: addPath() メソッド"
short-title: addPath()
slug: Web/API/Path2D/addPath
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Canvas API")}}

**`Path2D.addPath()`** は Canvas 2D API のメソッドで、ある {{domxref("Path2D")}} オブジェクトを他の `Path2D` オブジェクトに追加します。

## 構文

```js-nolint
addPath(path)
addPath(path, transform)
```

### 引数

- `path`
  - : 追加する {{domxref("Path2D")}} パスです。
- `transform` {{optional_inline}}
  - : {{domxref("DOMMatrix")}} オブジェクトで、追加されるパスの座標変換行列として使用されます。（技術的には `DOMMatrixInit` オブジェクトです。）

### 返値

なし ({{jsxref("undefined")}})。

## 例

### パスを既存のパスに追加

この例は、あるパスを他のパスに追加します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

まず、2 つの別々の {{domxref("Path2D")}} オブジェクトを作成し、それぞれに {{domxref("CanvasRenderingContext2D.rect()", "rect()")}} メソッドを使用して作成した長方形を含めます。次に、 {{Domxref("DOMMatrix.DOMMatrix", "DOMMatrix()")}} を使って行列を作成します。そして、 `addPath()` を使用して 2 番目のパスを 1 番目のパスに追加し、行列を適用して 2 番目のパスを右に移動します。
最後に、 {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} を使用して、 1 番目のパスを描画します。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// rect で新しいパスを作成する
let p1 = new Path2D();
p1.rect(0, 0, 100, 150);

// rect で別のパスを作成する
let p2 = new Path2D();
p2.rect(0, 0, 100, 75);

// 右に縦 300 ポイント移動する変換行列を作成する
let m = new DOMMatrix();
m.a = 1;
m.b = 0;
m.c = 0;
m.d = 1;
m.e = 200;
m.f = 0;

// 2 番目のパスを最初のパスに追加する
p1.addPath(p2, m);

// 最後に、 1 番目のパスをキャンバスに描画する
ctx.fill(p1);
```

#### 結果

{{ EmbedLiveSample('Adding_a_path_to_an_existing_path', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("Path2D")}}
