---
title: "HighlightRegistry: get() メソッド"
short-title: get()
slug: Web/API/HighlightRegistry/get
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`get()`** は {{domxref("HighlightRegistry")}} インターフェイスのメソッドで、このレジストリーから名前付き {{domxref("Highlight")}} オブジェクトを返します。

`HighlightRegistry` は {{jsxref("Map")}} 風オブジェクトであるため、これは {{jsxref("Map.get()")}} を使用するのと似ています。

## 構文

```js-nolint
get(name)
```

### 引数

- `name`
  - : レジストリーから返す `Highlight` オブジェクトの名前。名前は{{jsxref("String", "文字列", "", "nocode")}}でなければなりません。

### 返値

指定された名前に関連付けられた `Highlight` オブジェクト、または `HighlightRegistry` 内で名前が見つからない場合は {{jsxref("undefined")}} です。

## 例

次のコードサンプルは、新しい `Highlight` を作成し、それをレジストリーに追加し、 `get()` メソッドを使用してその名前で取得する方法を示しています。

```js
const fooHighlight = new Highlight();
CSS.highlights.set("foo", fooHighlight);

console.log(CSS.highlights.get("foo")); // fooHighlight オブジェクトを返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
