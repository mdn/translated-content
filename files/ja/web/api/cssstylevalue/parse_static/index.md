---
title: "CSSStyleValue: parse() 静的メソッド"
short-title: parse()
slug: Web/API/CSSStyleValue/parse_static
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("CSS Typed Object Model API")}}

**`parse()`** は {{domxref("CSSStyleValue")}} インターフェイスのメソッドで、特定の CSS プロパティを指定された値に設定し、最初の値を {{domxref('CSSStyleValue')}} オブジェクトとして返します。

## 構文

```js-nolint
CSSStyleValue.parse(property, cssText)
```

### 引数

- `property`
  - : 設定する CSS プロパティ。
- `cssText`
  - : 指定されたプロパティに適用する 1 つ以上の値を含む、カンマで区切られた文字列。

### 返値

最初に与えられた値を格納した `CSSStyleValue` オブジェクトです。

## 例

下記のコードは `transform` プロパティに対する一連の宣言を解釈します。
2 つ目のコードブロックは、返されたオブジェクトの構造を、開発者ツールのコンソールに表示したものです。

```js
const css = CSSStyleValue.parse(
  "transform",
  "translate3d(10px,10px,0) scale(0.5)",
);
```

```css
CSSTransformValue {0: CSSTranslate, 1: CSSScale, length: 2, is2D: false}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`CSSStyleValue.parseAll()`](/ja/docs/Web/API/CSSStyleValue/parseAll_static)

- [CSS 型付きオブジェクトモデルの使用](/ja/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API)
