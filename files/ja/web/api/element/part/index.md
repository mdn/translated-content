---
title: "Element: part プロパティ"
short-title: part
slug: Web/API/Element/part
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ ApiRef("DOM") }}

**`part`** は {{domxref("Element")}} インターフェイスのプロパティで、この要素の部品識別子（すなわち `part` 属性を使用して設定されたもの）を {{domxref("DOMTokenList")}} で返します。これらはシャドウ DOM の部品を {{cssxref("::part")}} 擬似要素でスタイル付けするために使用することができます。

## 値

{{domxref("DOMTokenList")}} オブジェクトです。

## 例

以下は、 [shadow-part](https://mdn.github.io/web-components-examples/shadow-part/) の例から抜粋したものです。ここでは、 `part` 属性を使用してシャドウ部品を見つけ、 `part` プロパティを使用して各タブの部品識別子を変更し、タブがクリックされたときに正しいスタイルがアクティブなタブに適用されるようにしています。

```js
const tabs = [];
const children = this.shadowRoot.children;

for (const elem of children) {
  if (elem.getAttribute("part")) {
    tabs.push(elem);
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.part = "tab";
    });
    e.target.part = "tab active";
  });

  console.log(tab.part);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::part")}}
- [part](/ja/docs/Web/HTML/Global_attributes#part)
