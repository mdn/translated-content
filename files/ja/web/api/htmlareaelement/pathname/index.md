---
title: HTMLAreaElement.pathname
slug: Web/API/HTMLAreaElement/pathname
original_slug: Web/API/HTMLHyperlinkElementUtils/pathname
---

{{ApiRef("HTML DOM")}}

**`HTMLAreaElement.pathname`** プロパティは、最初の `'/'` とその後に続く URL のパスが入った文字列（または、パスがない場合は空の文字列）です。

## 値

文字列です。

## 例

```js
// <area id="myArea" href="/en-US/docs/HTMLAreaElement"> 要素が文書にあったとします
const area = document.getElementById("myArea");
area.pathname; // '/en-US/docs/HTMLAreaElement' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
