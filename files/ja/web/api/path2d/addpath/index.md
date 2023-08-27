---
title: Path2D.addPath()
slug: Web/API/Path2D/addPath
---

{{APIRef("Canvas API")}}

Canvas 2D API の **`Path2D.addPath()`** メソッドは、パスに対して引数でパスを追加します。

## 構文

```
void path.addPath(path [, transform]);
```

### パラメーター

- `path`
  - : 追加する{{domxref("Path2D")}}パス
- `transform` {{optional_inline}}
  - : パスに追加する変換マトリックスとして使われる{{domxref("SVGMatrix")}}.

## 例

### `addPathメソッドを使用する`

これは`addPathメソッドを使用する簡単なコードスニペットです。`

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// rectで新しいパスを作成する
var p1 = new Path2D();
p1.rect(0, 0, 100, 100);

// rectで別のパスを作成する
var p2 = new Path2D();
p2.rect(0, 0, 100, 100);

// 右に縦300ポイント移動する変換マトリックスを作成する
var m = document
  .createElementNS("http://www.w3.org/2000/svg", "svg")
  .createSVGMatrix();
m.a = 1;
m.b = 0;
m.c = 0;
m.d = 1;
m.e = 300;
m.f = 0;

// 2番目のパスを最初のパスに追加する
p1.addPath(p2, m);

// 最後に、1番目のパスをキャンバスに描画する
ctx.fill(p1);
```

以下のコードを編集して、その変更が canvas に反映されることを確かめてください(現在のブラウザーが実際にこのメソッドをサポートしているか、以下のブラウザー互換テーブルをチェックしてください)

{{ EmbedLiveSample('Playable_code', 700, 500) }}

## 仕様

{{Specifications}}

## ブラウザー互換性

{{Compat("api.Path2D.addPath")}}

## 関連情報

- このインターフェイスは{{domxref("Path2D")}}に定義されています。
