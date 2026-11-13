---
title: "HighlightRegistry: has() メソッド"
short-title: has()
slug: Web/API/HighlightRegistry/has
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`has()`** は {{domxref("HighlightRegistry")}} インターフェイスのメソッドで、指定された名前の {{domxref("Highlight")}} オブジェクトがこのレジストリーに存在するかどうかを示す論理値を返します。

`HighlightRegistry` は {{jsxref("Map")}} 風オブジェクトであるため、これは {{jsxref("Map.has()")}} を使用するのと似ています。

## 構文

```js-nolint
has(name)
```

### 引数

- `name`
  - : レジストリーで存在を検査する `Highlight` オブジェクトの名前。

### 返値

指定された名前のハイライトがレジストリーに存在する場合、 `true` を返します。それ以外の場合、 `false` を返します。

## 例

```js
const fooHighlight = new Highlight();
CSS.highlights.set("foo", fooHighlight);

myHighlight.has("foo"); // true
myHighlight.has("bar"); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
