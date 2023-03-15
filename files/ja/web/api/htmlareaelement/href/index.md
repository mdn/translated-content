---
title: HTMLAreaElement.href
slug: Web/API/HTMLAreaElement/href
original_slug: Web/API/HTMLHyperlinkElementUtils/href
---

{{ApiRef("HTML DOM")}}

**`HTMLAreaElement.href`** は{{Glossary("stringifier", "文字列化")}}プロパティで、URL 全体を含む文字列を返し、 href を更新することもできます。

## 値

文字列です。

## 例

```js
// <area id="myArea" href="https://developer.mozilla.org/en-US/HTMLAreaElement"> 要素が文書にあったとします
const area = document.getElementById("myArea");
area.href; // 'https://developer.mozilla.org/en-US/HTMLAreaElement' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
