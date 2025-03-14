---
title: "FederatedCredential: FederatedCredential() コンストラクター"
short-title: FederatedCredential()
slug: Web/API/FederatedCredential/FederatedCredential
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("Credential Management API")}}{{SeeCompatTable}}

**`FederatedCredential()`** コンストラクターは、新しい {{domxref("FederatedCredential")}} オブジェクトを作成します。対応しているブラウザーでは、このクラスのインスタンスにグローバル {{domxref('fetch()')}} の `init` オブジェクトから受け取った `credential` を渡すことができます。

## 構文

```js-nolint
new FederatedCredential(init)
```

### 引数

- `init`

  - : オプションは次の通りです。

    - `provider`
      - : 文字列で、資格情報プロバイダーを識別します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
