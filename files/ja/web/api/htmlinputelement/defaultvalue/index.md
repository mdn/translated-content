---
title: "HTMLInputElement: defaultValue プロパティ"
short-title: defaultValue
slug: Web/API/HTMLInputElement/defaultValue
l10n:
  sourceCommit: bc141099823c9ae2e46f560ac674be2bc4118351
---

{{ApiRef("HTML DOM")}}

**`defaultValue`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、{{HTMLElement("input")}} 要素の元の（または既定の）値を示します。これは、この要素の [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) 属性を反映します。

## 値

`<input>` 要素の既定値、または元の値を表す文字列です。

## 例

以下の HTML があったとします。

```html
<label for="planet">Which planet were you born on?</label>
<input id="planet" type="text" value="Azarath" />
```

次のものは、ユーザーがテキスト入力に何を入力しても同じ結果を提供します。

```js
const inputElement = document.querySelector("#planet");
console.log(`元の値: ${inputElement.defaultValue}`); // "元の値: Azarath"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
