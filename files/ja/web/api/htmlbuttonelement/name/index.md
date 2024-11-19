---
title: "HTMLButtonElement: name プロパティ"
short-title: name
slug: Web/API/HTMLButtonElement/name
l10n:
  sourceCommit: d064784c78ec30c87ec3c3d9681b147999fd782f
---

{{ApiRef("HTML DOM")}}

**`name`** は {{domxref("HTMLButtonElement")}} インターフェイスのプロパティで、この {{HTMLElement("button")}} 要素の名前を示します。これは、この要素の [`name`](/ja/docs/Web/HTML/Element/button#name) 属性を反映します。

## 値

この要素の名前を表す文字列です。

## 例

```js
const buttonElement = document.querySelector("#myButton");
console.log(`Element's name: ${buttonElement.name}`);
buttonElement.name = "newName";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLButtonElement.value")}}
- {{domxref("HTMLButtonElement.type")}}
