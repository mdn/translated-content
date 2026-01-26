---
title: "TrustedTypePolicyFactory: getAttributeType() メソッド"
short-title: getAttributeType()
slug: Web/API/TrustedTypePolicyFactory/getAttributeType
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`getAttributeType()`** は {{domxref("TrustedTypePolicyFactory")}} インターフェイスのメソッドで、ウェブ開発者が要素に対して信頼型が要求されるか、場合に必要な場合にどの信頼型を使用するかを調べることができます。

## 構文

```js-nolint
getAttributeType(tagName, attribute)
getAttributeType(tagName, attribute, elementNS)
getAttributeType(tagName, attribute, elementNS, attrNS)
```

### 引数

- `tagName`
  - : HTML タグの名前の入った文字列です。
- `attribute`
  - : 属性の入った文字列です。
- `elementNS` {{optional_inline}}
  - : 名前空間が入った文字列。空の場合、既定で HTML 名前空間が使用されます。
- `attrNS` {{optional_inline}}
  - : 名前空間が入った文字列。空の場合、既定で null となる。

### 返値

以下のいずれかの文字列。

- `"TrustedHTML"`
- `"TrustedScript"`
- `"TrustedScriptURL"`

または null です。

## 例

この例では、 {{htmlelement("script")}} 要素と `src` 属性を `getAttributeType()` に渡すと、"TrustedScriptURL" が返されます。

```js
console.log(trustedTypes.getAttributeType("script", "src")); // "TrustedScriptURL"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
