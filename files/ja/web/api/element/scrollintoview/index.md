---
title: "Element: scrollIntoView() メソッド"
short-title: scrollIntoView()
slug: Web/API/Element/scrollIntoView
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

{{domxref("Element")}} インターフェイスの **`scrollIntoView()`** メソッドは、 `scrollIntoView()` が呼び出された要素がユーザーに見えるところまで、要素の親コンテナーをスクロールします。

## 構文

```js-nolint
scrollIntoView()
scrollIntoView(alignToTop)
scrollIntoView(scrollIntoViewOptions)
```

### 引数

- `alignToTop` {{optional_inline}}

  - : 論理値です。

    - `true` の場合、要素の上端がスクロール可能な祖先の表示範囲の上端に来るようにスクロールします。 `scrollIntoViewOptions: {block: "start", inline: "nearest"}` に相当します。これが既定値です。
    - `false` の場合、要素の下端がスクロール可能祖先の表示範囲の下端に来るようにスクロールします。 `scrollIntoViewOptions: {block: "end", inline: "nearest"}` に相当します。

- `scrollIntoViewOptions` {{optional_inline}}
  {{experimental_inline}}

  - : 以下のプロパティを持つオブジェクトです。

    - `behavior` {{optional_inline}}
      - : スクロールを即座に行うか、滑らかにアニメーションさせるかを決定します。このオプションは文字列であり、以下のいずれかの値を取ります。
        - `smooth`: スクロールをスムーズなアニメーションで行う
        - `instant`: スクロールを単一のジャンプで即座に行う
        - `auto`: スクロールの動作を {{cssxref("scroll-behavior")}} の計算値によって指定する
    - `block` {{optional_inline}}
      - : 垂直方向の配置を定義します。
        `start`, `center`, `end`, `nearest` のいずれかです。既定値は `start` です。
    - `inline` {{optional_inline}}
      - : 水平方法の配置を定義します。
        `start`, `center`, `end`, `nearest` のいずれかです。既定値は `nearest` です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
```

## メモ

他の要素のレイアウトによっては、要素の上部または下部まで完全にスクロールされない場合があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.scrollIntoViewIfNeeded()")}} {{non-standard_inline}}
