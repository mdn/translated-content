---
title: Element.scroll()
slug: Web/API/Element/scroll
tags:
  - API
  - Element
  - メソッド
  - Reference
  - Scroll
browser-compat: api.Element.scroll
translation_of: Web/API/Element/scroll
---
{{APIRef}}

**`scroll()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定された要素内の特定の座標の組まで要素をスクロールさせます。

## 例

```js
element.scroll(x-coord, y-coord)
element.scroll(options)
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
      - : スクロールをスムーズなアニメーションで行うか (`smooth`)、単一のジャンプで即座に行うか (`instant`)、ブラウザーの選択に任せるか (`auto`、既定値) を指定します。

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
  behavior: 'smooth'
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
