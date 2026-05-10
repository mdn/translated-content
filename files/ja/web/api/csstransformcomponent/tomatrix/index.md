---
title: "CSSTransformComponent: toMatrix() メソッド"
short-title: toMatrix()
slug: Web/API/CSSTransformComponent/toMatrix
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSS Typed OM")}}

**`toMatrix()`** は {{domxref("CSSTransformComponent")}} インターフェイスのメソッドで、 {{domxref('DOMMatrix')}} オブジェクトを返します。

すべての座標変換関数は、数学的には 4x4 の変換行列として表すことができます。
> [!NOTE]
> `is2D` プロパティは、どのような変換を行うか、すなわちどのような種類の行列が返されるかに影響します。CSS の二次元と三次元の座標変換は、その歴史的な理由から異なる形になっています。二次元と三次元の座標変換についての簡単な説明は [CSS 座標変換の使用](/ja/docs/Web/CSS/Guides/Transforms/Using)に記載されています。

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
