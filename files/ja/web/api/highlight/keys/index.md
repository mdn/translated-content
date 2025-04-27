---
title: "Highlight: keys() メソッド"
short-title: keys()
slug: Web/API/Highlight/keys
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`keys()`** は {{domxref("Highlight")}} インターフェイスのメソッドで、 {{domxref("Highlight.values()", "values()")}} メソッドの別名です。

`Highlight` は {{jsxref("Set")}} 風オブジェクトですので、これは {{jsxref("Set.keys()")}} を使うのと似ています。

## 構文

```js-nolint
keys()
```

### 返値

指定された `Highlight` 内のすべての `Range` オブジェクトを挿入順に反復処理する新しいイテレーターオブジェクト。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
