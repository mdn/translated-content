---
title: Element.scrollIntoView()
slug: Web/API/Element/scrollIntoView
---

{{APIRef("DOM")}}{{domxref("Element")}} インターフェイスの **`scrollIntoView()`** メソッドは、 `scrollIntoView()` が呼び出された要素がユーザーに見えるところまで、要素の親コンテナーをスクロールします。

## 構文

```
element.scrollIntoView();
element.scrollIntoView(alignToTop); // 論理型の引数
element.scrollIntoView(scrollIntoViewOptions); // オブジェクト型の引数
```

### 引数

- `alignToTop` {{optional_inline}}

  - : {{jsxref("Boolean")}} 値です。

    - `true` の場合、要素の上端がスクロール可能な祖先の表示範囲の上端に来るようにスクロールします。 `scrollIntoViewOptions: {block: "start", inline: "nearest"}` に相当します。これが既定値です。
    - `false` の場合、要素の下端がスクロール可能祖先の表示範囲の下端に来るようにスクロールします。 `scrollIntoViewOptions: {block: "end", inline: "nearest"}` に相当します。

- `scrollIntoViewOptions` {{optional_inline}} {{experimental_inline}}

  - : 以下のプロパティを持つオブジェクトです。

    - `behavior` {{optional_inline}}
      - : 推移のアニメーションを定義します。
        `auto` または `smooth` のどちらかです。既定値は `auto` です。
    - `block` {{optional_inline}}
      - : 垂直方向の配置を定義します。
        `start`, `center`, `end`, `nearest` の何れかです。既定値は `start` です。
    - `inline` {{optional_inline}}
      - : 水平方法の配置を定義します。
        `start`, `center`, `end`, `nearest` の何れかです。既定値は `nearest` です。

## 例

```js
var element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({block: "end"});
element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
```

## メモ

他の要素のレイアウトによっては、要素の上部または下部まで完全にスクロールされない場合があります。

## 仕様書

| 仕様書                                                                                                           | 状態                             | 備考     |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName("CSSOM View", "#dom-element-scrollintoview", "Element.scrollIntoView()")}} | {{Spec2("CSSOM View")}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.scrollIntoViewIfNeeded()")}} {{non-standard_inline}}
