---
title: "Element: scrollTo() メソッド"
short-title: scrollTo()
slug: Web/API/Element/scrollTo
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}

**`scrollTo()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定された要素内を指定された座標までスクロールします。

## 構文

```js-nolint
scrollTo(x-coord, y-coord)
scrollTo(options)
```

### 引数

- `x-coord` は、要素の水平軸上で左上に表示したいピクセルです。
- `y-coord` は、要素の垂直軸状で左上に表示したいピクセルです。

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
element.scrollTo(0, 1000);
```

`options` を使用する場合:

```js
element.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.scrollTop")}}, {{domxref("Element.scrollLeft")}}
- {{domxref("Window.scrollTo()")}}
