---
title: window.scroll
slug: Web/API/Window/scroll
---

{{ApiRef}}

## 概要

ウィンドウを文書内の特定の位置までスクロールします。

## 構文

```
window.scroll(x-coord,y-coord)
window.scroll(options)
```

### 引数

- `x-coord` : 左上を基準とした、表示させたい文書の水平軸上のピクセル
- `y-coord` : 左上を基準とした、表示させたい文書の垂直軸上のピクセル

または

- `options` : 三つのプロパティを持たせられるオブジェクト

  - `top` `y-coord` と同じです
  - `left` `x-coord` と同じです
  - `behavior` `smooth`、 `instant`、 `auto` のうちどれか一つを含む文字列。初期値は `auto` です

## 例

```html
<!-- 100 個目の垂直ピクセル上にウィンドウの最上部を配置します。 -->

<button onClick="scroll(0, 100);">click to scroll down 100 pixels</button>
```

#### スクロールの動作を変更する

スクロールの仕方を変えたいなら、options で指定してください

```js
window.scroll({
  top: 1000,
  behavior: "smooth",
});
```

## 注記

効果としては、 {{domxref("window.scrollTo")}} もこのメソッドと同じです。 繰り返し特定の距離をスクロールさせるには {{domxref("window.scrollBy")}} を使用してください。

次のページもご覧下さい : {{domxref("window.scrollByLines")}} 、 {{domxref("window.scrollByPages")}} 、 {{domxref("Element.scrollIntoView()")}}

## 仕様

{{Specifications}}
