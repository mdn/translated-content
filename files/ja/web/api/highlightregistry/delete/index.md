---
title: "HighlightRegistry: delete() メソッド"
short-title: delete()
slug: Web/API/HighlightRegistry/delete
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`delete()`** は {{domxref("HighlightRegistry")}} インターフェイスのメソッドで、この `HighlightRegistry` から名前付き {{domxref("Highlight")}} オブジェクトを除去します。

`HighlightRegistry` は {{jsxref("Map")}} 風オブジェクトであるため、これは {{jsxref("Map.delete()")}} を使用するのと似ています。

## 構文

```js-nolint
delete(customHighlightName)
```

### 引数

- `customHighlightName`
  - : この `HighlightRegistry` から除去する {{domxref("Highlight")}} オブジェクトの名前（{{jsxref("String", "文字列", "", "nocode")}}）。

### 返値

指定された名前の `Highlight` オブジェクトが `HighlightRegistry` にある場合は `true` を返し、そうでない場合は `false` を返します。

## 例

次のコードサンプルは、レジストリーのハイライトを登録し、それを除去します。

```js
const myHighlight = new Highlight(range1, range2);

CSS.highlights.set("my-highlight", myHighlight);

CSS.highlights.delete("foo"); // false
CSS.highlights.delete("my-highlight"); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
