---
title: "Element: ariaAutoComplete プロパティ"
short-title: ariaAutoComplete
slug: Web/API/Element/ariaAutoComplete
l10n:
  sourceCommit: 0cadcbcd77aeb0da27a33de28ce233a558801dc4
---

{{DefaultAPISidebar("DOM")}}

**`ariaAutoComplete`** は {{domxref("Element")}} インターフェイスのプロパティで、[`aria-autocomplete`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) 属性の値を反映します。この属性は、テキストを入力することで、コンボボックス、検索ボックス、テキストボックスに対して、ユーザーの意図する値の 1 つ以上の予測を表示させることができるかどうかを示し、予測が発生した場合にどのように表示するかを指定します。

## 値

以下のいずれかの値を持つ文字列です。

- `"inline"`
  - : ユーザーが入力を行っているとき、指定された入力を補完するための 1 つの方法を提案するテキストが、キャレットの後に動的に挿入されることがあります。
- `"list"`
  - : ユーザーが入力を提供している場合、指定された入力を補完する可能性のある値の集合を含む要素が表示されることがあります。
- `"both"`
  - : ユーザーが入力を提供している場合、指定された入力を補完する可能性のある値の集合を含む要素が表示されることがあります。表示された場合、集合の中の 1 つの値が自動的に選択され、自動的に選択された値を補完するために必要なテキストが入力のキャレットの後に現れます。
- `"none"`
  - : ユーザーが入力を行っているとき、ユーザーがどのように入力を補完しようとしているかを意図する自動提案の表示を行いません。

## 例

この例では、IDが `animal` の要素の `aria-autocomplete` 属性は "`inline`" に設定されています。これは `listbox` ポップアップを呼び出すコンボボックスに期待される値です。

```html
<div class="animals-combobox">
  <label for="animal">Animal</label>
  <input
    id="animal"
    type="text"
    role="combobox"
    aria-autocomplete="inline"
    aria-controls="animals-listbox"
    aria-expanded="false"
    aria-haspopup="listbox" />
  <ul id="animals-listbox" role="listbox" aria-label="Animals">
    <li id="animal-cat" role="option">Cat</li>
    <li id="animal-dog" role="option">Dog</li>
  </ul>
</div>
```

```js
let el = document.getElementById("animal");
console.log(el.ariaAutoComplete); // inline
el.ariaAutoComplete = "list";
console.log(el.ariaAutoComplete); // list
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
