---
title: "HTMLOutputElement: name プロパティ"
short-title: name
slug: Web/API/HTMLOutputElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

**`name`** は {{domxref("HTMLOutputElement")}} インターフェイスのプロパティで、この {{HTMLElement("output")}} 要素の名前を示します。これは、要素の [`name`](/ja/docs/Web/HTML/Reference/Elements/output#name) 属性を反映しています。

## 値

要素の名前を表す文字列です。

## 例

```js
const outputElement = document.querySelector("#log");
console.log(`Element's name: ${outputElement.name}`);
outputElement.name = "sum"; // 要素の名前を設定または更新
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLOutputElement.defaultValue")}}
- {{domxref("HTMLOutputElement.htmlFor")}}
- {{domxref("HTMLOutputElement.labels")}}
