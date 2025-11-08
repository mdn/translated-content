---
title: "Highlight: delete() メソッド"
short-title: delete()
slug: Web/API/Highlight/delete
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`delete()`** は {{domxref("Highlight")}} インターフェイスのメソッドで、 `Highlight` オブジェクトから特定の {{domxref("Range")}} オブジェクトを除去します。

`Highlight` は {{jsxref("Set")}} 風オブジェクトですので、これは {{jsxref("Set.delete()")}} を使うのと似ています。

## 構文

```js-nolint
delete(range)
```

### 引数

- `range`
  - : `Highlight` から除去する {{domxref("Range")}} オブジェクトです。

### 返値

`range` が `Highlight` の中にあれば `true` を返し、そうでなければ `false` を返します。

## 例

次のコードスニペットは、2 つの範囲を持つ新しいハイライトを作成し、そのうちの 1 つを削除する方法を示しています。

```js
const range1 = new Range();
const range2 = new Range();

const highlight = new Highlight(range1, range2);
console.log(highlight.size); // 2

highlight.delete(range1);
console.log(highlight.size); // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
