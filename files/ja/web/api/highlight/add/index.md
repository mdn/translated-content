---
title: "Highlight: add() メソッド"
short-title: add()
slug: Web/API/Highlight/add
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`add()`** は {{domxref("Highlight")}} インターフェイスのメソッドで、 {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}} を使用してスタイル設定される、新しい {{domxref("Range")}} オブジェクトをハイライトに追加します。

`Highlight` は {{jsxref("Set")}} 風オブジェクトですので、これは {{jsxref("Set.add()")}} を使うのと似ています。

## 構文

```js-nolint
add(range)
```

### 引数

- `range`
  - : この `Highlight` に追加する {{domxref("Range")}} オブジェクトです。

### 返値

範囲が追加された `Highlight` オブジェクト。

## 例

以下のコードスニペットは、新しいハイライトオブジェクトに 2 つの範囲を追加する方法を示しています。

```js
const highlight = new Highlight();

const range1 = new Range();
const range2 = new Range();

highlight.add(range1).add(range2);

console.log(highlight.size); // 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
