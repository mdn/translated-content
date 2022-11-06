---
title: SubtleCrypto
slug: Web/API/SubtleCrypto
---

{{APIRef("Web Crypto API")}}

**`SubtleCrypto`** インターフェイスは、暗号プリミティブのセットを表します。これは、window コンテキスト ({{domxref("Window.crypto")}}) 内で利用可能な {{domxref("Crypto.subtle")}} プロパティを通して利用できます。

> **警告:** 仕様書より引用 (拙訳): "開発者は、SubtleCrypto インターフェイスを使用する際に、提供される様々なアルゴリズムの設計と実装の両面でセキュリティに関わる問題に注意を払うことが期待されます。生のアルゴリズムは、その使用に必要とされる独自のセキュリティパラメーターとコンポジションを表す多様なプロトコルとアプリケーションの実装において、開発者に最大限の柔軟性を許すために提供されます。"

## プロパティ

_このインターフェイスはどのプロパティも定義または継承しません。_

## メソッド

このインターフェイスはどのメソッドも継承しません。

- {{domxref("SubtleCrypto.encrypt()")}}
  - : 引数に与えられた平文テキストおよびアルゴリズム、鍵に対応する暗号化されたデータの {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.decrypt()")}}
  - : 引数に与えられた暗号化されたテキストおよびアルゴリズム、鍵に対応する平文データの {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.sign()")}}
  - : 引数に与えられたテキストおよびアルゴリズム、鍵に対応する署名の {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.verify()")}}
  - : 引数に与えられた署名が、同じく引数に与えられたテキストおよびアルゴリズム、鍵と一致するかどうかを示す {{jsxref("Boolean")}} 値の {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.digest()")}}
  - : 引数に与えられたアルゴリズムとテキストから生成されたダイジェストの {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.generateKey()")}}
  - : 引数に与えられたアルゴリズム、抽出可能性、使用法と一致する、対称アルゴリズムでは新たに生成された {{domxref("CryptoKey")}} の {{jsxref("Promise")}} を、非対称アルゴリズムでは 2 個の新たに生成された鍵を含む {{domxref("CryptoKeyPair")}} の {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.deriveKey()")}}
  - : 引数に与えられたマスターキーと特定のアルゴリズムによりもたらされる、新たに生成された {{domxref("CryptoKey")}} の {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.deriveBits()")}}
  - : 引数に与えられたマスターキーと特定のアルゴリズムによりもたらされる、疑似乱数ビットの新たに生成されたバッファーの {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.importKey()")}}
  - : 引数に与えられた書式およびアルゴリズム、生の鍵データ、使用法、抽出可能性に対応する {{domxref("CryptoKey")}} の {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.exportKey()")}}
  - : 要求された書式内の鍵を含むバッファーの {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.wrapKey()")}}
  - : 安全でない環境での使用法 (transfer, storage) について、ラップされた対称鍵の {{jsxref("Promise")}} を返します。返されるラップされたバッファーは、引数に与えられた書式内にあり、与えられたアルゴリズムで与えられたラッピング鍵によりラップされた鍵を含みます。
- {{domxref("SubtleCrypto.unwrapKey()")}}
  - : 引数に与えられたラップされた鍵に対応する {{domxref("CryptoKey")}} の {{jsxref("Promise")}} を返します。

## 仕様

| 仕様書                                                                                               | 策定状況                                 | 備考       |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------- |
| {{ SpecName('Web Crypto API', '#subtlecrypto-interface', 'SubtleCrypto') }} | {{ Spec2('Web Crypto API') }} | 初期定義。 |

## ブラウザーの実装状況

{{Compat("api.SubtleCrypto")}}

## 関連情報

- {{domxref("Crypto")}} および {{domxref("Crypto.subtle")}}。
