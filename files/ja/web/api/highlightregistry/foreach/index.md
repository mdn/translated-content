---
title: "HighlightRegistry: forEach() メソッド"
short-title: forEach()
slug: Web/API/HighlightRegistry/forEach
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`forEach()`** は {{domxref("HighlightRegistry")}} インターフェイスのメソッドで、レジストリーのすべての {{domxref("Highlight")}} オブジェクトに対して、挿入順に 1 回ずつ、指定された関数を実行します。

`HighlightRegistry` は {{jsxref("Map")}} 風オブジェクトであるため、これは {{jsxref("Map.forEach()")}} を使用するのと似ています。

## 構文

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 引数

- `callback`
  - : それぞれの `Highlight` オブジェクトについて呼び出される関数で、 3 つの引数を取ります。
    - `highlight`
      - : 現在のハイライトです。
    - `name`
      - : そのハイライトの名前です。
    - `registry`
      - : `forEach()` が呼び出されたレジストリーオブジェクトです。

- `thisArg`
  - : `callbackFn` の実行時に `this` として使用される値。

### 返値

なし ({{jsxref("undefined")}})。

## 例

以下のコードスニペットは、2 つの範囲を持つ新しいハイライトを作成し、 `forEach()` メソッドを使用してその範囲をログ出力する方法を示しています。

```js
function logAllHighlights(highlight, name) {
  console.log(`Highlight ${name} exists in the registry`, highlight);
}

const customHighlight1 = new Highlight();
const customHighlight2 = new Highlight();
const customHighlight3 = new Highlight();

CSS.highlights.set("custom-highlight-1", customHighlight1);
CSS.highlights.set("custom-highlight-2", customHighlight2);
CSS.highlights.set("custom-highlight-3", customHighlight3);

CSS.highlights.forEach(logAllHighlights);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
