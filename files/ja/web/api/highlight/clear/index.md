---
title: "Highlight: clear() メソッド"
short-title: clear()
slug: Web/API/Highlight/clear
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`clear()`** は {{domxref("Highlight")}} インターフェイスのメソッドで、 `Highlight` オブジェクトからすべての {{domxref("Range")}} オブジェクトを除去します。

`Highlight` は {{jsxref("Set")}} 風オブジェクトですので、これは {{jsxref("Set.clear()")}} を使うのと似ています。

## 構文

```js-nolint
clear()
```

### 返値

なし ({{jsxref("undefined")}})。

## 例

次のコードスニペットは、2 つの範囲を持つ新しいハイライトを作成し、それをクリアする方法を示しています。

```js
const highlight = new Highlight(range1, range2);
console.log(highlight.size); // 2

highlight.clear();
console.log(highlight.size); // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
