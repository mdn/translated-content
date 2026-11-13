---
title: "HTMLOutputElement: value プロパティ"
short-title: value
slug: Web/API/HTMLOutputElement/value
l10n:
  sourceCommit: 45eeb37ecd89511a64b756af9469189d7a59b95e
---

{{ APIRef("HTML DOM") }}

**`value`** は {{DOMxRef("HTMLOutputElement")}} インターフェイスのプロパティで、この {{htmlelement("output")}} 要素の値を文字列として表します。値が設定されていない場合は空文字列となります。このプロパティは、{{domxref("Node.textContent","textContent")}} プロパティと同様に、要素のコンテンツを返したり設定したりします。

> [!NOTE]
> `<output>` 要素の `value` プロパティが設定されると、その要素は値モードになり、デフォルト値には {{DOMXref("HTMLOutputElement.defaultValue")}} プロパティを介してのみアクセスできるようになります。

## 値

{{htmlelement("output")}} 要素の内容の入った文字列です。

## 例

```js
const outputElement = document.getElementById("log");
console.log(`value: ${outputElement.value}`);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("output")}}
- {{DOMXref("HTMLOutputElement.defaultValue")}}
- {{DOMXref("HTMLOutputElement.labels")}}
- {{DOMXref("HTMLOutputElement.htmlFor")}}
