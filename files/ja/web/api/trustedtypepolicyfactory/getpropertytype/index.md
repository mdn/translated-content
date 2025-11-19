---
title: "TrustedTypePolicyFactory: getPropertyType() メソッド"
short-title: getPropertyType()
slug: Web/API/TrustedTypePolicyFactory/getPropertyType
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`getPropertyType()`** は {{domxref("TrustedTypePolicyFactory")}} インターフェイスのメソッドで、要素のプロパティに対して信頼型が要求されるかどうかをウェブ開発者が調べることができるようにします。

## 構文

```js-nolint
getPropertyType(tagName, property)
getPropertyType(tagName, property, elementNS)
```

### 引数

- `tagName`
  - : HTML タグの名前が入った文字列です。
- `property`
  - : プロパティの入った文字列。例えば `"innerHTML"`。
- `elementNS` {{optional_inline}}
  - : 名前空間の入った文字列。空の場合は HTML 名前空間が既定値になります。

### 返値

以下のいずれかの文字列。

- `"TrustedHTML"`
- `"TrustedScript"`
- `"TrustedScriptURL"`

Or, `null`.

## 例

この例では、 {{htmlelement("div")}} 要素と `innerHTML` 属性を `getPropertyType()` に渡すと、 "TrustedHTML" が返されます。

```js
console.log(trustedTypes.getPropertyType("div", "innerHTML")); // "TrustedHTML"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
