---
title: "HighlightRegistry: clear() メソッド"
short-title: clear()
slug: Web/API/HighlightRegistry/clear
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`clear()`** は {{domxref("HighlightRegistry")}} インターフェイスのメソッドで、この `HighlightRegistry` からすべての {{domxref("Highlight")}} オブジェクトを除去します。

`HighlightRegistry` は {{jsxref("Map")}} 風オブジェクトであるため、これは {{jsxref("Map.clear()")}} を使用するのと似ています。

## 構文

```js-nolint
clear()
```

### 返値

なし ({{jsxref("undefined")}})。

## 例

以下のコードスニペットは、2 つのハイライトオブジェクトをレジストリーに登録し、その後、レジストリーを消去します。

```js
const customHighlight1 = new Highlight(range1, range2);
const customHighlight2 = new Highlight(range3, range4, range5);

CSS.highlights.set("custom-highlight-1", customHighlight1);
CSS.highlights.set("custom-highlight-2", customHighlight2);

console.log(CSS.highlights.size); // 2

CSS.highlights.clear();
console.log(CSS.highlights.size); // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
