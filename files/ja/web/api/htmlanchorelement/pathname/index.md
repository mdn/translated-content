---
title: HTMLAnchorElement.pathname
slug: Web/API/HTMLAnchorElement/pathname
original_slug: Web/API/HTMLHyperlinkElementUtils/pathname
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.pathname`** プロパティは、最初の `'/'` とその後に続く URL のパスが入った文字列（または、パスがない場合は空の文字列）です。

## 値

文字列です。

## 例

```js
// <a id="myAnchor" href="/en-US/docs/HTMLAnchorElement"> 要素が文書にあったとします
const anchor = document.getElementById("myAnchor");
anchor.pathname; // '/en-US/docs/HTMLAnchorElement' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAnchorElement")}} インターフェイス
