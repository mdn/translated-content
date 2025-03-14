---
title: "Crypto: randomUUID() メソッド"
short-title: randomUUID()
slug: Web/API/Crypto/randomUUID
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

**`randomUUID()`** は {{domxref("Crypto")}} インターフェイスのメソッドで、暗号強度の強い乱数生成器を用いて v4 {{Glossary("UUID")}} を生成するのに用いられます。

## 構文

```js-nolint
randomUUID()
```

### 引数

なし。

### 返値

ランダムに生成された 36 文字の v4 UUID を格納した文字列。

## 例

メソッドにグローバルの {{domxref("crypto_property", "crypto")}} プロパティを通してアクセスします。

```js
/* self.crypto.randomUUID() が利用可能であることを仮定しています */

let uuid = self.crypto.randomUUID();
console.log(uuid); // 例えば "36b8f84d-df4e-4d49-b662-bcde71a8764f"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Web Crypto API")}}
- {{domxref("Crypto")}} オブジェクトを取得する {{ domxref("crypto_property", "crypto") }}。
- {{domxref("Crypto.getRandomValues")}} 任意の量の安全なランダムバイト列の生成源。
