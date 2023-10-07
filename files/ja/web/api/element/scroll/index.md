---
title: "Element: scroll() メソッド"
short-title: scroll()
slug: Web/API/Element/scroll
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}

**`scroll()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定された要素内の特定の座標の組まで要素をスクロールさせます。

## 例

```js-nolint
scroll(x-coord, y-coord)
scroll(options)
```

### 引数

- `x-coord`
  - : 左上に表示させたいこの要素の横軸方向のピクセルです。
- `y-coord`
  - : 左上に表示させたいこの要素の縦軸方向のピクセルです。

\- または -

- `options`
  - : 以下の引数を含む辞書オブジェクトです。
    - `top`
      - : ウィンドウまたは要素をスクロールする Y 軸方向のピクセル数を指定します。
    - `left`
      - : ウィンドウまたは要素をスクロールする X 軸方向のピクセル数を指定します。
    - `behavior`
      - : スクロールを即座に行うか、滑らかにアニメーションさせるかを決定します。このオプションは文字列であり、以下のいずれかの値を取ります。
        - `smooth`: スクロールをスムーズなアニメーションで行う
        - `instant`: スクロールを単一のジャンプで即座に行う
        - `auto`: スクロールの動作を {{cssxref("scroll-behavior")}} の計算値によって指定する

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
// 1000 番目の垂直ピクセルを要素の先頭に置く
element.scroll(0, 1000);
```

`options` の使用例:

```js
element.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
