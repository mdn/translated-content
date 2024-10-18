---
title: "HTMLInputElement: name プロパティ"
short-title: name
slug: Web/API/HTMLInputElement/name
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`name`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、この {{HTMLElement("input")}} 要素の名前を示します。これは、この要素の [`name`](/ja/docs/Web/HTML/Element/input#name) 属性を反映します。

## 値

この要素の名前を表す文字列です。

## 例

次の HTML があったとします。

```html
<p>
  <label for="planet">あなたが生まれた惑星は？</label>
  <input id="planet" type="text" name="origin" />
</p>
```

`name` プロパティを使用して、`<input>` の名前を取得または設定することができます。

```js
const inputElement = document.querySelector("#planet");
console.log(`Element's name: ${inputElement.name}`); // "要素の name: origin"
inputElement.name = "planet"; // 要素の name を更新
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
