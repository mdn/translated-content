---
title: "Highlight: forEach() メソッド"
short-title: forEach()
slug: Web/API/Highlight/forEach
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`forEach()`** は {{domxref("Highlight")}} インターフェイスのメソッドで、`Highlight` オブジェクト内の各 {{domxref("Range")}} オブジェクトに対して、指定された関数を、挿入順に 1 回ずつ実行します。

`Highlight` は {{jsxref("Set")}} 風オブジェクトですので、これは {{jsxref("Set.forEach()")}} を使うのと似ています。

## 構文

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 引数

- `callback`
  - : それぞれの `Range` オブジェクトについて呼び出される関数で、 3 つの引数を取ります。
    - `range`, `key`
      - : `Highlight` で現在処理されている `Range` オブジェクト。 `Highlight` にはキーがないため、 `range` は両方の引数に渡されます。
    - `highlight`
      - : `forEach()` が呼び出された `Highlight` オブジェクト。

- `thisArg`
  - : `callbackFn` の実行時に `this` として使用される値。

### 返値

なし ({{jsxref("undefined")}})。

## 例

以下のコードスニペットは、2 つの範囲を持つ新しいハイライトを作成し、 `forEach()` メソッドを使用してその範囲をログ出力する方法を示しています。

```js
function logRanges(range, key, highlight) {
  console.log(`Highlight object ${highlight} contains range ${range}`);
}

const text = new Text("Time is an illusion. Lunchtime doubly so.");

const range1 = document.createRange();
range1.setStart(text, 0);
range1.setEnd(text, 4);

const range2 = document.createRange();
range2.setStart(text, 21);
range2.setEnd(text, 30);

const myHighlight = new Highlight();
myHighlight.add(range1);
myHighlight.add(range2);

myHighlight.forEach(logRanges);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
