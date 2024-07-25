---
title: "Document: mozSetImageElement() メソッド"
short-title: mozSetImageElement()
slug: Web/API/Document/mozSetImageElement
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ ApiRef("DOM") }}{{ non-standard_header() }}

**`Document.mozSetImageElement()`** メソッドは、指定された background 要素 ID を持つ背景の CSS 背景として使用する要素を変更します。

## 構文

```js-nolint
mozSetImageElement(imageElementId, imageElement)
```

### 引数

- `imageElementId` は文字列で、{{ cssxref("element", "-moz-element") }} 関数を使用して背景画像を指定する要素の名前を示します。
- `imageElement` はその画像要素文字列に対応する背景として使用する新しい要素です。`null`を指定すると背景要素を除去します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例は、{{ HTMLElement("div") }} ブロックの背景を、ユーザーがブロックをクリックするたびに変更します。

[この例をライブで見る](https://mdn.dev/archives/media/samples/domref/mozSetImageElement.html).

```html
<style>
  #mybox {
    background-image: -moz-element(#canvasbg);
    text-align: center;
    width: 400px;
    height: 400px;
    cursor: pointer;
  }
</style>
```

The CSS defined by the {{ HTMLElement("style") }} block above is used by our {{HTMLElement("div")}} to use an element with the id "canvasbg" as its background.

```js
let c = 0x00;
function clicked() {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("width", 100);
  canvas.setAttribute("height", 100);

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = `#${c.toString(16)}0000`;
  ctx.fillRect(25, 25, 75, 75);

  c += 0x11;
  if (c > 0xff) {
    c = 0x00;
  }

  document.mozSetImageElement("canvasbg", canvas);
}
```

このコードは、ユーザーが {{ HTMLElement("div") }} 要素をクリックするたびに呼び出されます。
幅と高さを 100 ピクセルに設定した新しい {{ HTMLElement("canvas") }} を作成し、そこに 50 × 50 ピクセルの正方形を描画します。この関数が呼び出されるたびに、正方形は異なる色（赤の部品は毎回増えます）になるので、背景は赤のタイルのパターンで、ユーザーが要素をクリックするたびにだんだん明るく塗りつぶされます。

キャンバスが描画されると、`document.mozSetImageElement()` が呼び出され、背景要素の ID として "canvasbg" を使用している CSS の背景が新しいキャンバスに設定されます。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ cssxref("element", "-moz-element") }}
