---
title: CSSStyleDeclaration.getPropertyValue()
slug: Web/API/CSSStyleDeclaration/getPropertyValue
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{ APIRef("CSSOM") }}

**CSSStyleDeclaration.getPropertyValue()** メソッドインターフェイスは、指定された CSS プロパティの値を含む文字列を返します。

## 構文

```js-nolint
getPropertyValue(property)
```

### 引数

- `property`
  - : 文字列で、チェックするプロパティ名（ハイフン区切り）を表します。

### 返値

プロパティの値が入った文字列です。設定されていなかった場合、空文字列を返します。

## 例

次の JavaScript コードは、 CSS セレクタールールの `margin` プロパティの値を問い合わせます。

```js
const declaration = document.styleSheets[0].cssRules[0].style;
const value = declaration.getPropertyValue("margin"); // "1px 2px"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
