---
title: Crypto
slug: Web/API/Crypto
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("Web Crypto API")}}

**`Crypto`** インターフェイスは、現在のコンテキストで利用できる基本的な暗号機能を表します。
これは、暗号強度の強い乱数生成器と暗号プリミティブへのアクセスを許可します。

{{AvailableInWorkers}}

[ウェブ暗号 API](/ja/docs/Web/API/Web_Crypto_API) はグローバルの {{domxref("crypto_property", "crypto")}} プロパティからアクセスすることができ、これが `Crypto` オブジェクトです。

## インスタンスプロパティ

_このインターフェイスは、 {{domxref("Crypto/getRandomValues", "RandomSource")}} 上に定義されたプロパティを実装します。_

- {{domxref("Crypto.subtle")}} {{ReadOnlyInline}} {{SecureContext_inline}}
  - : ハッシュや署名、暗号化、復号など、共通の暗号プリミティブへのアクセスを提供する {{domxref("SubtleCrypto")}} オブジェクトを返します。

## インスタンスメソッド

_このインターフェイスは、 {{domxref("Crypto/getRandomValues", "RandomSource")}} 上に定義されたメソッドを実装します。_

- {{domxref("Crypto.getRandomValues()")}}
  - : 渡された {{ jsxref("TypedArray") }} を暗号強度の強い乱数値で埋めます。
- {{domxref("Crypto.randomUUID()")}}
  - : ランダムに生成された 36 文字の v4 UUID を返します。

## 使用上の注意

ウェブ暗号 API は、安全でないコンテキスト上で使用するのは避けるべきです。 `Crypto` インターフェイスが安全でないコンテキスト上に存在しいたとしてもです。
さらに、 `Crypto` の {{domxref("Crypto.getRandomValues", "getRandomValues()")}} メソッドは安全でないコンテキストでも使用できますが、 {{domxref("Crypto.subtle", "subtle")}} プロパティは使用できません。

一般的には、 `Crypto` は安全なコンテキストでのみ使用できるものとして扱うべきでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブセキュリティ](/ja/docs/Web/Security)
- [安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)
- [安全なコンテキストに制限されている機能](/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
- [Transport Layer Security](/ja/docs/Web/Security/Transport_Layer_Security)
- [Strict-Transport-Security](/ja/docs/Web/HTTP/Headers/Strict-Transport-Security)
