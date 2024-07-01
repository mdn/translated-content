---
title: "HTMLIFrameElement: contentWindow プロパティ"
short-title: contentWindow
slug: Web/API/HTMLIFrameElement/contentWindow
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`contentWindow`** プロパティは、[HTMLIFrameElement](/ja/docs/Web/API/HTMLIFrameElement) が所属する [Window](/ja/docs/Web/API/Window) オブジェクトを返します。この `Window` オブジェクトを使用して、iframe の文書や内部 DOM にアクセスすることができます。この属性は読み取り専用ですが、グローバルの `Window` オブジェクトのように操作することができます。

## 値

[Window](/ja/docs/Web/API/Window) オブジェクト。

## 例

```js
const x = document.querySelector("iframe").contentWindow;
//x = window.frames[0];

x.document.querySelector("body").style.backgroundColor = "blue";
// 文書内の最初の iframe が青くなる
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
