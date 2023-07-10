---
title: "HTMLIFrameElement: src プロパティ"
short-title: src
slug: Web/API/HTMLIFrameElement/src
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

**`HTMLIFrameElement.src`** プロパティは、この {{HTMLElement("iframe")}} 要素の HTML の [`referrerpolicy`](/ja/docs/Web/API/HTMLIFrameElement/referrerPolicy) 属性を反映し、リソースを読み取る際にどのリファラーを送信するかを定義します。

## 構文

```js-nolint
refStr = iframeElt.src
iframeElt.src= refStr
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

- {{DOMxRef("HTMLAnchorElement.src")}}
- {{DOMxRef("HTMLAreaElement.src")}}
- {{DOMxRef("HTMLAreaElement.src")}}.
