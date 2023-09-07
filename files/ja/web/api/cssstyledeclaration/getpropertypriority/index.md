---
title: CSSStyleDeclaration.getPropertyPriority()
slug: Web/API/CSSStyleDeclaration/getPropertyPriority
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{ APIRef("CSSOM") }}

**CSSStyleDeclaration.getPropertyPriority()** メソッドインターフェイスは、その CSS プロパティに明示的に設定されたすべての優先度を文字列で返します。

## 構文

```js-nolint
getPropertyPriority(property)
```

### 引数

- `property`
  - : 文字列で、チェックするプロパティ名を表します。

### 返値

存在する場合は優先度（`"important"` など）を表します。
存在しない場合は、空文字列を返します。

## 例

以下の JavaScript コードは、 `margin` が CSS セレクターのルールで important と記されているかどうかをチェックします。

```js
const declaration = document.styleSheets[0].cssRules[0].style;
const isImportant = declaration.getPropertyPriority("margin") === "important";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
