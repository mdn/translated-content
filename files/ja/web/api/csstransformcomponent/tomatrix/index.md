---
title: CSSTransformComponent.toMatrix()
slug: Web/API/CSSTransformComponent/toMatrix
l10n:
  sourceCommit: da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`toMatrix()`** は {{domxref("CSSTransformComponent")}} インターフェイスのメソッドで、 {{domxref('DOMMatrix')}} オブジェクトを返します。

すべての座標変換関数は、数学的には 4x4 の変換行列として表すことができます。これについては、 [Understanding the CSS Transforms matrix](https://dev.opera.com/articles/understanding-the-css-transforms-matrix/) で詳しく説明しています。

> [!NOTE]
> `is2D` プロパティは、どのような変換を行うか、すなわちどのような種類の行列が返されるかに影響します。CSS の 2D と 3D の変換は、その歴史的な理由から異なる形になっています。2D と 3D の変換についての簡単な説明は [Using CSS transforms](/ja/docs/Web/CSS/Guides/Transforms/Using) に記載されています。

## 構文

```js-nolint
toMatrix()
```

### 引数

なし。

### 返値

{{domxref('DOMMatrix')}} オブジェクトです。

### 例外

- {{jsxref("TypeError")}}
  - : 行列の生成に関わる長さが px と互換性のない単位である場合（例えば、相対的な長さやパーセンテージなど）、発生します。

## 例

To Do

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
