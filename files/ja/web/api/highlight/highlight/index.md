---
title: "Highlight: Highlight() コンストラクター"
short-title: Highlight()
slug: Web/API/Highlight/Highlight
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`Highlight()`** コンストラクターは、新しく構築された {{domxref("Highlight")}} オブジェクトを返します。これは {{domxref("Range")}} オブジェクトの集合を保持することができ、 {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}} を用いてスタイル設定することができます。

## 構文

```js-nolint
new Highlight()
new Highlight(range)
new Highlight(range1, range2, /* …, */ rangeN)
```

### 引数

- `range1`, …, `rangeN` {{optional_inline}}
  - : 新しいハイライトに追加する 1 つ以上の初期値の {{domxref("Range")}} オブジェクト群。

### 返値

新しい `Highlight` オブジェクトです。

## 例

以下のサンプルコードは、空のハイライトオブジェクトを作成し、そのオブジェクトに範囲を追加する方法を示しています。

```js
const highlight = new Highlight();
highlight.add(range1);
highlight.add(range2);
```

以下のサンプルコードは、新しいハイライトオブジェクトを作成し、構築中にそのオブジェクトに範囲を追加する方法を示しています。

```js
const highlight = new Highlight(range1, range2);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
