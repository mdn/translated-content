---
title: Element.part
slug: Web/API/Element/part
tags:
  - API
  - Element
  - プロパティ
  - リファレンス
  - part
browser-compat: api.Element.part
---
{{ ApiRef("DOM") }}

**`part`** は {{domxref("Element")}} インターフェイスのプロパティで、この要素の部品識別子（すなわち `part` 属性を使用して設定されたもの）を {{domxref("DOMTokenList")}} で返します。これらはシャドウ DOM の部品を {{cssxref("::part")}} 擬似要素でスタイル付けするために使用することができます。

## 構文

```js
let elementPartList = element.part
```

## 例

以下は、 [shadow-part](https://mdn.github.io/web-components-examples/shadow-part/) の例から抜粋したものです。ここでは、 `part` 属性を使用してシャドウ部品を見つけ、 `part` プロパティを使用して各タブの部品識別子を変更し、タブがクリックされたときに正しいスタイルがアクティブなタブに適用されるようにしています。

```js
let tabs = [];
let children = this.shadowRoot.children;

for(let elem of children) {
  if(elem.getAttribute('part')) {
    tabs.push(elem);
  }
}

tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    tabs.forEach((tab) => {
      tab.part = 'tab';
    })
    e.target.part = 'tab active';
  })

  console.log(tab.part);
})
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::part")}}
- {{htmlattrxref("part")}}
