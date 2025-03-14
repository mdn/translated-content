---
title: "Element: scrollBy() メソッド"
short-title: scrollBy()
slug: Web/API/Element/scrollBy
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}

**`scrollBy()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定された量だけ要素をスクロールします。

## 構文

```js-nolint
scrollBy(x-coord, y-coord)
scrollBy(options)
```

### 引数

- `x-coord` は、スクロールしたい水平ピクセル数です。
- `y-coord` は、スクロールしたい垂直ピクセル数です。

\- または -

- `options`
  - : 以下の引数を持つ辞書です。
    - `top`
      - : ウィンドウや要素をスクロールする Y 軸方向のピクセル数を指定します。
    - `left`
      - : ウィンドウや要素をスクロールする X 軸方向のピクセル数を指定します。
    - `behavior`
      - : スクロールを滑らかにアニメーションさせるか (`smooth`)、瞬時にジャンプさせるか (`instant`)、ブラウザーに選択させるか (`auto`, 既定値) を指定します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
// 要素をスクロール
element.scrollBy(300, 300);
```

`options` を使用する場合:

```js
element.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
