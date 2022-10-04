---
title: HTMLIFrameElement.contentWindow
slug: Web/API/HTMLIFrameElement/contentWindow
---

{{APIRef("HTML DOM")}}

**`contentWindow`** プロパティは、 [HTMLIFrameElement](/ja/docs/Web/API/HTMLIFrameElement) が所属する [Window](/ja/docs/Web/API/Window) オブジェクトを返します。この `Window` オブジェクトを使用して、 iframe の文書や内部 DOM にアクセスすることができます。この属性は読み取り専用ですが、グローバルの `Window` オブジェクトのように操作することができます。

## 値

[Window](/ja/docs/Web/API/Window) オブジェクト。

## 例

```js
var x = document.getElementsByTagName("iframe")[0].contentWindow;
//x = window.frames[0];

x.document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
// 文書内の 1 番目の iframe が青くなります。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
