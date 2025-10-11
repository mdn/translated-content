---
title: "TrustedTypePolicy: createScriptURL() メソッド"
short-title: createScriptURL()
slug: Web/API/TrustedTypePolicy/createScriptURL
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`createScriptURL()`** methodは {{domxref("TrustedTypePolicy")}} インターフェイスのメソッドで、 {{domxref("TrustedScriptURL")}} オブジェクトを {{domxref("TrustedTypePolicyFactory.createPolicy()")}} で作成されたポリシーを使用して作成します。

## 構文

```js-nolint
createScriptURL(input)
createScriptURL(input, args)
```

### 引数

- `input`
  - : このポリシーによって無害化された文字列です。
- `args` {{optional_inline}}
  - : {{domxref("TrustedTypePolicy")}} で表される関数に渡される追加の引数です。

### 返値

{{domxref("TrustedScriptURL")}} オブジェクトです。

### 例外

- {{jsxref("TypeError")}}
  - : {{domxref("TrustedTypePolicy")}} に入力データで実行する関数がない場合に発生します。

## 例

以下の例では、外部リソースへの URL を含む文字列が `createScriptURL()` の入力データとして使用されています。ポリシーは、この URL が許可されたものであることを確認してから、外部スクリプトの実行を引き起こす可能性のある注入先へ挿入できます。

```js
const escaped = escapeURLPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
