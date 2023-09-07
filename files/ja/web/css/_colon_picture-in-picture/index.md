---
title: ":picture-in-picture"
slug: Web/CSS/:picture-in-picture
---

{{CSSRef}}

**`:picture-in-picture`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、現在ピクチャインピクチャモードの要素に一致します。

## 構文

```
:picture-in-picture
```

## 使用上のメモ

`:picture-in-picture` 擬似クラスを使用すると、動画がピクチャインピクチャと従来の表示モードの間で切り替わるときに、コンテンツの大きさ、スタイル、レイアウトを自動的に調整するようにスタイルシートを設定することができます。

## 例

この例では、動画が浮遊ウィンドウで表示されたときにボックスシャドウ付きになります。

### HTML

このページの HTML は次のようになります。

```html
<h1>MDN Web Docs Demo: :picture-in-picture pseudo-class</h1>

<p>
  This demo uses the <code>:picture-in-picture</code> pseudo-class to
  automatically change the style of a video entirely using CSS.
</p>

<video id="pip-video"></video>
```

ID が `"pip-video"` の {{HTMLElement("video")}} は、ピクチャインピクチャの浮遊ウィンドウに表示されているかどうかで、赤いボックスシャドウを持つか持たないかが変化します。

### CSS

The magic happens in the CSS.

```css
:picture-in-picture {
  box-shadow: 0 0 0 5px red;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Picture-in-picture API](/ja/docs/Web/API/Picture-in-Picture_API)
- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.autoPictureInPicture")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
