---
title: "TrustedTypePolicy: createScript() メソッド"
short-title: createScript()
slug: Web/API/TrustedTypePolicy/createScript
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`createScript()`** methodは {{domxref("TrustedTypePolicy")}} インターフェイスのメソッドで、 {{domxref("TrustedScript")}} オブジェクトを {{domxref("TrustedTypePolicyFactory.createPolicy()")}} で作成されたポリシーを使用して作成します。

## 構文

```js-nolint
createScript(input)
createScript(input, args)
```

### 引数

- `input`
  - : このポリシーによって無害化された文字列です。
- `args` {{optional_inline}}
  - : {{domxref("TrustedTypePolicy")}} で表される関数に渡される追加の引数です。

### 返値

{{domxref("TrustedScript")}} オブジェクトです。

### 例外

- {{jsxref("TypeError")}}
  - : {{domxref("TrustedTypePolicy")}} に入力データで実行する関数がない場合に発生します。

## 例

以下の例では、潜在的に危険なスクリプトを含む文字列が `createScript()` の入力として使用されています。ポリシーはこのスクリプトを、実行される可能性のある注入先へ挿入する前に無害化できます。

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
