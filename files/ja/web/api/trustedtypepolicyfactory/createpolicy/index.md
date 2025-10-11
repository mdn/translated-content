---
title: "TrustedTypePolicyFactory: createPolicy() メソッド"
short-title: createPolicy()
slug: Web/API/TrustedTypePolicyFactory/createPolicy
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`createPolicy()`** は {{domxref("TrustedTypePolicyFactory")}} インターフェイスのメソッドで、 `policyOptions` として渡されたルールを実装した {{domxref("TrustedTypePolicy")}} オブジェクトを作成します。

## 構文

```js-nolint
createPolicy(policyName, policyOptions)
```

### 引数

- `policyName`
  - : 文字列で、このポリシーの名前です。
- `policyOptions` {{optional_inline}}
  - : 文字列を信頼できる値に変換するためのユーザー定義関数です。
    - `createHTML(input[,args])`
      - : {{domxref("TrustedHTML")}} オブジェクトを作成する際に実行するコードが含まれている、文字列の形のコールバック関数。
    - `createScript(input[,args])`
      - : {{domxref("TrustedScript")}} オブジェクトを作成する際に実行するコードが含まれている、文字列の形のコールバック関数。
    - `createScriptURL(input[,args])`
      - : {{domxref("TrustedScriptURL")}} オブジェクトを作成する際に実行するコードが含まれている、文字列の形のコールバック関数。

### 返値

{{domxref("TrustedTypePolicy")}} オブジェクトです。

### 例外

- {{jsxref("TypeError")}}
  - : ポリシー名が[コンテンツセキュリティポリシーの `trusted-types` ディレクティブ](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types)によって制限されており、この名前が許可リストに含まれていない場合に発生します。
- {{jsxref("TypeError")}}
  - : 名前が重複しており、[コンテンツセキュリティポリシーの trusted-types ディレクティブ](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types)が `allow-duplicates` を使用しない場合に発生します。

## 例

### HTML シンクのポリシーを作成

下記コードは、`"myEscapePolicy"` という名前のポリシーを作成し、HTML を無害化する関数 `createHTML()` を定義します。

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});
```

### 既定のポリシーの作成

信頼型が、[`require-trusted-types-for`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) ディレクティブが `script` に設定するコンテンツセキュリティポリシーによって強制されているサイトでは、スクリプトを受け入れるあらゆる注入スクリプトは、信頼型オブジェクトを期待します。代わりに文字列が挿入された場合、[既定のポリシー](/ja/docs/Web/API/Trusted_Types_API#既定のポリシー)が使用されます。

既定のポリシーは、コンソールにメッセージをログ出力し、開発者にアプリケーションのこの部分をリファクタリングして信頼型オブジェクトを使用するよう促します。同時に、返される値に、既定のポリシー、型、および注入先の使用に関する詳細情報を付加します。

```js
trustedTypes.createPolicy("default", {
  createScriptURL(s, type, sink) {
    console.log("Please refactor.");
    return `${s}?default-policy-used&type=${encodeURIComponent(
      type,
    )}&sink=${encodeURIComponent(sink)}`;
  },
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
