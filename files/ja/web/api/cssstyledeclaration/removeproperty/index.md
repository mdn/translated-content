---
title: CSSStyleDeclaration.removeProperty()
slug: Web/API/CSSStyleDeclaration/removeProperty
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{ APIRef("CSSOM") }}

**`CSSStyleDeclaration.removeProperty()`** メソッドインターフェイスは、 CSS スタイル宣言オブジェクトからプロパティを削除します。

## 構文

```js-nolint
removeProperty(property)
```

### 引数

- `property`
  - 文字列で、削除するプロパティ名を表します。なお、複数語からなるプロパティ名はハイフン区切りであって、キャメルケースではありません。

### 返値

文字列で、削除される前の CSS プロパティの値と等しいものです。

### 例外

- `NoModificationAllowedError` {{domxref('DOMException')}}
  - : プロパティまたは宣言ブロックが読み取り専用の場合に発生します。

## 例

次の JavaScript コードは、 CSS の `background-color` プロパティをセレクタールールから削除します。

```js
const declaration = document.styleSheets[0].rules[0].style;
const oldValue = declaration.removeProperty("background-color");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
