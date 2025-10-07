---
title: "TrustedTypePolicy: createHTML() メソッド"
short-title: createHTML()
slug: Web/API/TrustedTypePolicy/createHTML
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`createHTML()`** methodは {{domxref("TrustedTypePolicy")}} インターフェイスのメソッドで、 {{domxref("TrustedHTML")}} オブジェクトを {{domxref("TrustedTypePolicyFactory.createPolicy()")}} で作成されたポリシーを使用して作成します。

## 構文

```js-nolint
createHTML(input)
createHTML(input, args)
```

### 引数

- `input`
  - : このポリシーによって無害化された文字列です。
- `args` {{optional_inline}}
  - : {{domxref("TrustedTypePolicy")}} で表される関数に渡される追加の引数です。

### 返値

{{domxref("TrustedHTML")}} オブジェクトです。

### 例外

- {{jsxref("TypeError")}}
  - : {{domxref("TrustedTypePolicy")}} に入力データで実行する関数がない場合に発生します。

## 例

以下の例では、潜在的に危険なスクリプトを含む文字列が `createHTML()` の入力として使用されています。ユーザーによって挿入された危険なコードは、任意の注入先への挿入前に無害化される可能性があります。

```js
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
