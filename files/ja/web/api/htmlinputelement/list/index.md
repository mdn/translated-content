---
title: "HTMLInputElement: list プロパティ"
short-title: list
slug: Web/API/HTMLInputElement/list
l10n:
  sourceCommit: 46bcde62d3767fdba91163dfa30fa4b9fdaac5a6
---

{{ApiRef("HTML DOM")}}

**`list`** は {{domxref("HTMLInputElement")}} インターフェイスの読み取り専用プロパティで、この要素の [`list`](/ja/docs/Web/HTML/Element/input#list) 属性が指し示す {{domxref("HTMLDataListElement")}} を返します。`list` 属性が定義されていない場合、または `list` 属性の値が同じツリー内のどの `<datalist>` にも関連付けられていない場合は、`null` が返されます。

> [!NOTE]
> これは読み取り専用のプロパティです。 `<datalist>` を要素に関連付けるには、{{domxref("Element.setAttribute", "setAttribute()")}} を使用して `list` 属性の値を設定します。

## 値

{{domxref("HTMLDataListElement")}} または `null` です。

## 例

次の HTML があったとします。

```html
<label for="planet">出身の惑星は？</label>
<input id="planet" type="text" list="superhero" />
<datalist id="superhero">
  <option value="Azarath" />
  <option value="Krypton" />
  <option value="Tamaran" />
</datalist>
```

この `<input>` に関連付けられた `<datalist>` を受け取るには次のようにします。

```js
const inputElement = document.querySelector("#planet");
console.log(inputElement.list); // superhero の HTMLDatalistElement を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
- {{domxref("HTMLDataListElement")}}
- {{domxref("HTMLOptionElement")}}
- {{domxref("HTMLCollection")}}
- {{htmlelement("input")}}
- {{htmlelement("datalist")}}
- {{htmlelement("option")}}
