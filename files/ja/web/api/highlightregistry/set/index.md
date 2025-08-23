---
title: "HighlightRegistry: set() メソッド"
short-title: set()
slug: Web/API/HighlightRegistry/set
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`set()`** は {{domxref("HighlightRegistry")}} インターフェイスのメソッドで、 `Highlight` オブジェクトを指定した名前でレジストリーに追加または更新します。

`HighlightRegistry` は {{jsxref("Map")}} 風オブジェクトであるため、これは {{jsxref("Map.set()")}} を使用するのと似ています。

## 構文

```js-nolint
set(name, highlight)
```

### 引数

- `name`
  - : 追加または更新する `Highlight` オブジェクトの名前です。名前は{{jsxref("String", "文字列", "", "nocode")}}である必要があります。
- `highlight`
  - : 追加または更新する `Highlight` オブジェクト。これは、 {{domxref("Highlight")}} インターフェイスのインスタンスである必要があります。

### 返値

`HighlightRegistry` オブジェクトです。

## 例

### set() の使用

```js
const fooHighlight = new Highlight();
CSS.highlights.set("foo", fooHighlight);
```

### set() を連鎖で使用

`set()` メソッドはレジストリーを返すため、次のようにメソッド呼び出しを連鎖させることができます。

```js
const fooHighlight = new Highlight();
const barHighlight = new Highlight();
const bazHighlight = new Highlight();

CSS.highlights
  .set("foo", fooHighlight)
  .set("bar", barHighlight)
  .set("baz", bazHighlight);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
