---
title: "HTMLButtonElement: value プロパティ"
short-title: value
slug: Web/API/HTMLButtonElement/value
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{ APIRef("HTML DOM") }}

**`value`** は {{DOMxRef("HTMLButtonElement")}} インターフェイスのプロパティで、この {{htmlelement("button")}} 要素の現在の値を文字列で表します。値が設定されていない場合は空文字列になります。これはこの要素の [`value`](/ja/docs/Web/HTML/Element/button#value) 属性を反映します。

## 値

この {{htmlelement("button")}} 要素の値を含む文字列です。

## 例

```js
const buttonElement = document.getElementById("given-name");
console.log(`value: ${buttonElement.value}`);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("button")}}
- {{DOMXref("HTMLButtonElement.type")}}
- {{DOMXref("HTMLButtonElement.labels")}}
