---
title: CSS `:picture-in-picture` 擬似クラス
short-title: :picture-in-picture
slug: Web/CSS/Reference/Selectors/:picture-in-picture
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

**`:picture-in-picture`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、現在ピクチャインピクチャモードの要素に一致します。

## 構文

```css
:picture-in-picture {
  /* ... */
}
```

## 使用上のメモ

`:picture-in-picture` 擬似クラスを使用すると、動画がピクチャインピクチャと従来の表示モードの間で切り替わるときに、コンテンツの大きさ、スタイル、レイアウトを自動的に調整するようにスタイルシートを設定することができます。

## 例

この例では、動画が浮遊ウィンドウで表示されたときにボックスシャドウ付きになります。

### HTML

このページの HTML は次のようになります。

```html-nolint
<h1>MDN Web Docs デモ: :picture-in-picture 擬似クラス</h1>

<p>
  このデモでは、<code>:picture-in-picture</code> 擬似クラスを使用して、CSS だけで動画のスタイルを自動的に変更しています。
</p>

<video id="pip-video"></video>
```

ID が `"pip-video"` の {{HTMLElement("video")}} は、ピクチャインピクチャの浮遊ウィンドウに表示されているかどうかで、赤いボックスシャドウを持つか持たないかが変化します。

### CSS

その秘密は CSS に現れます。

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
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
