---
title: RsaHashedKeyGenParams
slug: Web/API/RsaHashedKeyGenParams
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/ja/docs/Web/API/Web_Crypto_API) の辞書 **`RsaHashedKeyGenParams`** は、RSA ベース、すなわちアルゴリズムとして [RSASSA-PKCS1-v1_5](/ja/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/ja/docs/Web/API/SubtleCrypto/sign#rsa-pss), [RSA-OAEP](/ja/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) のいずれかを指定する鍵ペアを生成する際に {{domxref("SubtleCrypto.generateKey()")}} の引数 `algorithm` として渡すべきオブジェクトを表します。

## インスタンスプロパティ

- `name`
  - : 文字列。使用したいアルゴリズムにより、`RSASSA-PKCS1-v1_5`, `RSA-PSS`, `RSA-OAEP` のいずれかに設定するべきです。
- `modulusLength`
  - : {{jsxref("Number")}}。RSA の法の長さ (ビット数) です。最低でも 2,048 にするべきです。 [SP 800-131A Rev. 2](https://csrc.nist.gov/publications/detail/sp/800-131a/rev-2/final) の例を参照してください。現在、4,096 にすることを薦めている組織もあります。
- `publicExponent`
  - : {{jsxref("Uint8Array")}}。公開指数です。他の値を用いるいい理由が無い限り、65,537 ( `[0x01, 0x00, 0x01]` ) を指定してください。
- `hash`

  - : 用いる[ダイジェスト関数](/ja/docs/Web/API/SubtleCrypto/digest)の名前を表す文字列です。`SHA-256`, `SHA-384`, `SHA-512` のうちのいずれかを指定できます。

    > **警告:** 技術的にはここに `SHA-1` を指定することもできますが、SHA-1 は脆弱であるとみなされているため強く非推奨です。

## 例

{{domxref("SubtleCrypto.generateKey()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.generateKey()")}} メソッドにおいて RSA ベースのアルゴリズムをどれかサポートしているブラウザーは、この型をサポートするはずです。

## 関連情報

- {{domxref("SubtleCrypto.generateKey()")}}
