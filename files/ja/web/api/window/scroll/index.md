---
title: "Window: scroll() メソッド"
short-title: scroll()
slug: Web/API/Window/scroll
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef}}

**`Window.scroll()`** メソッドは、ウィンドウを文書内の特定の位置までスクロールさせます。

## 構文

```js-nolint
scroll(xCoord, yCoord)
scroll(options)
```

### 引数

- `xCoord`
  - : 文書の水平軸上の、左上に表示させたいピクセルです。
- `yCoord`
  - : 文書の垂直軸上の、左上に表示させたいピクセルです。
- `options`
  - : 以下のプロパティが含まれているオブジェクトです。
    - `top`
      - : ウィンドウまたは要素をスクロールする Y 軸方向のピクセル数を指定します。
    - `left`
      - : ウィンドウまたは要素をスクロールする X 軸方向のピクセル数を指定します。
    - `behavior`
      - : スクロールを瞬時に行うか、滑らかにアニメーションするかを指定します。このオプションは文字列であり、以下のいずれかの値を設定しなければなりません。
        - `smooth`: スクロールを滑らかなアニメーションで行います。
        - `instant`: スクロールを単一のジャンプで直ちに行います。
        - `auto`: スクロールの動作は {{cssxref("scroll-behavior")}} の計算値で定められます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
// 垂直方向に 100 個目のピクセルをウィンドウの最上部を配置
window.scrollTo(0, 1000);
```

`options` の使用例:

```js
window.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## 注

{{domxref("Window.scrollTo()")}} はこのメソッドとほぼ同じです。相対スクロールについては、 {{domxref("Window.scrollBy()")}}, {{domxref("Window.scrollByLines()")}}, {{domxref("Window.scrollByPages()")}} を参照してください。

要素をスクロールするには、 {{domxref("Element.scrollTop")}} および {{domxref("Element.scrollLeft")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.scrollByLines()")}}
- {{domxref("Window.scrollByPages()")}}
- {{domxref("Element.scrollIntoView()")}}
