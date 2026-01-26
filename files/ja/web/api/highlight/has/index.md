---
title: "Highlight: has() メソッド"
short-title: has()
slug: Web/API/Highlight/has
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`has()`** は {{domxref("Highlight")}} インターフェイスのメソッドで、 {{domxref("Range")}} オブジェクトが `Highlight` オブジェクトに存在するかどうかを示す論理値を返します。

`Highlight` は {{jsxref("Set")}} 風オブジェクトですので、これは {{jsxref("Set.has()")}} を使うのと似ています。

## 構文

```js-nolint
has(range)
```

### 引数

- `range`
  - : `Highlight` オブジェクト内で存在を検査する `Range` オブジェクト。

### 返値

指定した範囲が `Highlight` オブジェクトに存在する場合、`true` を返します。それ以外の場合、`false` を返します。

## 例

以下のコードスニペットは、 2 つの範囲と、そのうちの 1 つを含むハイライトオブジェクトを作成します。次に、 `has()` メソッドを使用して、各範囲がハイライト内に存在するかどうかを調べます。

```js
const range1 = new Range();
const range2 = new Range();
const myHighlight = new Highlight(range1);

myHighlight.has(range1); // true
myHighlight.has(range2); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
