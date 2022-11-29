---
title: Crypto
slug: Web/API/Crypto
---

{{APIRef("Web Crypto API")}}

**`Crypto`** インターフェイスは、現在のコンテキストで利用できる基本的な暗号機能を表します。これは、暗号強度の強い乱数生成器と暗号プリミティブへのアクセスを許可します。

このインターフェイスを持つオブジェクトは、{{domxref("Window.crypto")}} プロパティを通じてウェブコンテキスト上で利用可能です。

## プロパティ

_このインターフェイスは、{{domxref("RandomSource")}} 上に定義されたプロパティを実装します。_

- {{domxref("Crypto.subtle")}} {{experimental_inline}}{{readOnlyInline}}
  - : ハッシュや署名、暗号化、復号など、共通の暗号プリミティブへのアクセスを提供する {{domxref("SubtleCrypto")}} オブジェクトを返します。

## メソッド

_このインターフェイスは、{{domxref("RandomSource")}} 上に定義されたメソッドを実装します。_

- {{domxref("Crypto.getRandomValues()")}}
  - : 渡された {{ jsxref("TypedArray") }} を暗号強度の強い乱数値で埋めます。
- {{domxref("Crypto.randomUUID()")}}
  - : ランダムに生成された 36 文字の v4 UUID を返します。

## 仕様

{{Specifications}}

## ブラウザーの実装状況

{{Compat("api.Crypto")}}

## 関連情報

- [Components.utils.importGlobalProperties](/ja/docs/Components.utils.importGlobalProperties)
