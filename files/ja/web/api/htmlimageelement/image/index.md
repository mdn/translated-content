---
title: "HTMLImageElement: Image() コンストラクター"
short-title: Image()
slug: Web/API/HTMLImageElement/Image
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

**`Image()`** コンストラクターは、新しい {{DOMxRef("HTMLImageElement")}} インスタンスを作成します。機能的には {{DOMxRef("Document.createElement()", "document.createElement('img')")}} と同等です。

> [!NOTE]
> この関数を CSS の [`image()`](/ja/docs/Web/CSS/image/image) 関数と混同しないでください。

## 構文

```js-nolint
new Image()
new Image(width)
new Image(width, height)
```

### 引数

- `width` {{optional_inline}}
  - : 画像の幅（つまり [`width`](/ja/docs/Web/HTML/Element/img#width) 属性に対応する値）です。
- `height` {{optional_inline}}
  - : 画像の高さ（つまり [`height`](/ja/docs/Web/HTML/Element/img#height) 属性に対応する値）です。

## 使用上の注意

ビットマップ全体は、コンストラクターで指定されたサイズに関係なく読み込まれます。コンストラクターで指定されたサイズは、結果のインスタンスのプロパティ {{DOMxRef("HTMLImageElement.width")}} と {{DOMxRef("HTMLImageElement.height")}} を通して反映されます。画像の本来の幅と高さは CSS ピクセルで表され、プロパティ {{DOMxRef("HTMLImageElement.naturalWidth")}} と {{DOMxRef("HTMLImageElement.naturalHeight")}} を通して反映されます。コンストラクターでサイズが指定されていない場合、両プロパティのペアは同じ値を持ちます。

## 例

```js
const myImage = new Image(100, 200);
myImage.src = "picture.jpg";
document.body.appendChild(myImage);
```

これは、 {{HTMLElement("body")}} の中で次のような HTML タグを定義するのと同じです。

```html
<img width="100" height="200" src="picture.jpg" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
