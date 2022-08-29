---
title: HTMLElement.tabIndex
slug: Web/API/HTMLElement/tabIndex
tags:
  - API
  - HTML DOM
  - HTMLElement
  - プロパティ
  - リファレンス
  - tabIndex
browser-compat: api.HTMLElement.tabIndex
translation_of: Web/API/HTMLElement/tabIndex
---
{{APIRef("HTML DOM")}}

**`tabIndex`** は {{DOMxRef("HTMLElement")}} インターフェイスのプロパティで、現在の要素のタブの順序を表します。

タブの順序は次のとおりです。

1. 正の `tabIndex` を持つ要素。 同一の `tabIndex` を持つ要素は、表示された順序でナビゲートすべきです。 ナビゲーションは、最も低い `tabIndex` から最も高い `tabIndex` に進みます。
2. `tabIndex` 属性に対応していない要素、または `tabIndex` 属性に対応しており、 `tabIndex` を `0` に割り当てる要素は、それらが表示された順序で。

無効になっている要素は、タブの順序に関与しません。

値は逐次的である必要はなく、特定の値で始まる必要もありません。 各ブラウザーは非常に大きな値を切り取りますが、値は負の値にすることもできます。

## 構文

整数です。

## 例

```js
const b1 = document.getElementById('button1');

b1.tabIndex = 1;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [キーボードでナビゲート可能な JavaScript ウィジェットのアクセシビリティ](/ja/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- HTML の [`tabindex`](/ja/docs/Web/HTML/Global_attributes/tabindex) グローバル属性
