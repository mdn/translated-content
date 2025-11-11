---
title: "Path2D: Path2D() コンストラクター"
short-title: Path2D()
slug: Web/API/Path2D/Path2D
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Canvas API")}}

**`Path2D()`** コンストラクターは、新たにインスタンス化した `Path2D` オブジェクトを返します。他のパスを引数に渡すこともできます（複製がつくられます）。また、[SVG パス](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)からなるデータを文字列で渡すこともできます。

## 構文

```js-nolint
new Path2D()
new Path2D(path)
new Path2D(d)
```

### 引数

- `path` {{optional_inline}}
  - : 他の`Path2D` オブジェクトを渡して呼び出すと、引数の `path` が複製されます。
- `d` {{optional_inline}}
  - : [SVG パス](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)を構成する文字列を渡して呼出すと、その内容のパスが新たにつくられます。

## 例

### パスを複製してつくる

これは、`Path2D` のパスを複製して作成する簡単なコードスニペットです。

```html hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let path1 = new Path2D();
path1.rect(10, 10, 100, 100);

let path2 = new Path2D(path1);
path2.moveTo(220, 60);
path2.arc(170, 60, 50, 0, 2 * Math.PI);

ctx.stroke(path2);
```

{{ EmbedLiveSample('Creating_and_copying_paths', 700, 180) }}

### SVG パスを使用する

これは、[SVG パスデータ](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths) を使用して `Path2D` のパスを作成する簡単なコードスニペットです。パスは点 (`M10 10`) に移ってから、水平に 80 ポイント右に移動し (`h 80`)、80 ポイント下がり (`v 80`)、80 ポイント左に移動し (`h -80`)、開始点に戻ります (`Z`)。

```html hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let p = new Path2D("M10 10 h 80 v 80 h -80 Z");
ctx.fill(p);
```

{{ EmbedLiveSample('Using_SVG_paths', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Path2D")}} インターフェイスに、このコンストラクターは属します。
