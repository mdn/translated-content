---
title: "HTMLIFrameElement: src プロパティ"
short-title: src
slug: Web/API/HTMLIFrameElement/src
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef}}

**`HTMLIFrameElement.src`** プロパティは文字列で、HTML の [`src`](/ja/docs/Web/HTML/Reference/Elements/iframe#src) 属性を反映し、埋め込まれるコンテンツのアドレスを保持します。

プログラムによって `<iframe>` の src 属性が（例えば、{{domxref("Element.removeAttribute()")}} によって）除去されると、`about:blank` がフレームに読み込まれるという現象が発生します。

## 構文

```js-nolint
src = iframeElt.src
iframeElt.src= src
```

## 例

```js
const iframe = document.createElement("iframe");
iframe.src = "/";
const body = document.querySelector("body");
body.appendChild(iframe); // 完全な URL をリファラーとして使用して画像を読み取り
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("HTMLEmbedElement.src")}}
- {{DOMxRef("HTMLImageElement.src")}}
- {{DOMxRef("HTMLMediaElement.src")}}
- {{DOMxRef("HTMLScriptElement.src")}}
- {{DOMxRef("HTMLTrackElement.src")}}
