---
title: HTMLAnchorElement.href
slug: Web/API/HTMLAnchorElement/href
original_slug: Web/API/HTMLHyperlinkElementUtils/href
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.href`** は{{Glossary("stringifier", "文字列化")}}プロパティで、URL 全体を含む文字列を返し、 href を更新することもできます。

## 値

文字列です。

## 例

```js
// <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> 要素が文書にあったとします
const anchor = document.getElementById("myAnchor");
anchor.href; // returns 'https://developer.mozilla.org/en-US/HTMLAnchorElement'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAnchorElement")}} インターフェイス
