---
title: AesCtrParams
slug: Web/API/AesCtrParams
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

{{ APIRef("Web Crypto API") }}

[ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API) の **`AesCtrParams`** 辞書は、[AES-CTR](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-ctr) アルゴリズムを用いる際、{{domxref("SubtleCrypto.encrypt()")}}・{{domxref("SubtleCrypto.decrypt()")}}・{{domxref("SubtleCrypto.wrapKey()")}}・{{domxref("SubtleCrypto.unwrapKey()")}} の引数 `algorithm` に渡すオブジェクトを表します。

AES はブロック暗号なので、メッセージをブロックに分割し、ブロック単位で暗号化を行います。CTR モードでは、メッセージのブロックを暗号化するたびに、追加のブロックを混ぜます。この追加のブロックは「カウンターブロック」と呼ばれます。

あるカウンターブロックの値は、同じ鍵では決して複数回用いてはいけません。

- メッセージの長さが _n_ ブロックのとき、それぞれのブロックで異なるカウンターブロックを用いなければいけません。
- 同じ鍵で複数のメッセージを暗号化する場合、全てのメッセージの全てのブロックで異なるカウンターブロックを用いなければいけません。

通常、これを実現するため、カウンターブロックの初期値を 2 個の連続した部分に分けます。

- {{Glossary("Nonce", "nonce")}} (1 回 (once) しか使用できない番号 (number)): カウンターブロックのうち nonce 部分は、メッセージ内の全ブロックで同じ値を用います。新しいメッセージを暗号化する際、毎回新しい nonce を選択します。nonce は秘密にする必要はありませんが、同じ鍵では決して再使用してはいけません。
- カウンター: カウンターブロックのこの部分は、ブロックを暗号化するたびにインクリメントされます。

要は、nonce により異なるメッセージで同じカウンターブロックが再使用されることを防ぎ、カウンターにより同じメッセージ内で同じカウンターブロックが再使用されることを防ぎます。

> [!NOTE]
> 詳しくは、[NIST SP800-38A standard の Appendix B](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D) を参照してください。

## インスタンスプロパティ

- `name`
  - : 文字列です。`AES-CTR` に設定してください。
- `counter`
  - : An {{jsxref("ArrayBuffer")}}・{{jsxref("TypedArray")}}・{{jsxref("DataView")}} のいずれかで、カウンターブロックの初期値を表します。16 バイト (AES のブロックサイズ) でなければいけません。このブロックの右から `length` ビットがカウンターとして用いられ、残りが nonce として用いられます。たとえば、`length` を 64 に設定した場合は、`counter` の前半が nonce となり、後半がカウンターとして用いられます。
- `length`
  - : `Number` で、カウンターブロックのうち実際にカウンターとして用いるビット数を表します。カウンターは、ラップアラウンドが起きないよう、十分長い必要があります。すなわち、メッセージが `n` ブロックで、カウンターが `m` ビットのとき、`n <= 2^m` が成り立つ必要があります。CTR を定義している [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) 標準では、カウンターブロックの半分をカウンターとして用いることを推奨しています。([Appendix B.2](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A73%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D) を参照してください) これは AES では 64 ビットになります。

## 例

{{domxref("SubtleCrypto.encrypt()")}} および {{domxref("SubtleCrypto.decrypt()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.encrypt()")}}・{{domxref("SubtleCrypto.decrypt()")}}・{{domxref("SubtleCrypto.wrapKey()")}}・{{domxref("SubtleCrypto.unwrapKey()")}} メソッドで "AES-CTR" アルゴリズムに対応しているブラウザーは、この型に対応しているはずです。

## 関連情報

- CTR モードは [NIST SP800-38A standard](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D) の section 6.5 で定義されています。
- {{domxref("SubtleCrypto.encrypt()")}}
- {{domxref("SubtleCrypto.decrypt()")}}
- {{domxref("SubtleCrypto.wrapKey()")}}
- {{domxref("SubtleCrypto.unwrapKey()")}}
