---
title: SubtleCrypto
slug: Web/API/SubtleCrypto
l10n:
  sourceCommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

**`SubtleCrypto`** は[ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API) のインターフェイスで、数々の低水準の暗号化関数を提供します。 `SubtleCrypto` の機能にアクセスするには、 {{domxref("crypto_property", "crypto")}} プロパティから取得した {{domxref("Crypto")}} オブジェクトの {{domxref("Crypto.subtle", "subtle")}} プロパティを使用します。

> [!WARNING]
> このAPIは、数多くの低レベル暗号プリミティブを提供しています。これらを悪用するのはとても簡単で、その落とし穴は非常に微妙なものです。
>
> 基本的な暗号機能を正しく使用すると想定されていても、安全な鍵管理と全体的なセキュリティシステムの設計を正しく行うのは非常に難しく、一般的にはセキュリティの専門家の領域です。
>
> セキュリティシステムの設計と実装に誤りがあると、システムのセキュリティが完全に機能しなくなる可能性があります。
>
> 学び、実験してください。しかし、このテーマに詳しい人物が徹底的にレビューする前に、あなたの作品の安全性を保証したり、ほのめかしたりしないでください。[暗号 101 コース](https://www.crypto101.io/)は、安全なシステムの設計と実装するために学び始めるには最適な場所です。

## インスタンスプロパティ

_このインターフェイスには親インターフェイスがないので、何もプロパティを継承していません。_

## インスタンスメソッド

_このインターフェイスには親インターフェイスがないので、何もメソッドを継承していません。_

- {{domxref("SubtleCrypto.encrypt()")}}
  - : 引数に与えられた平文テキストおよびアルゴリズム、鍵に対応する暗号化されたデータで履行される {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.decrypt()")}}
  - : 引数に与えられた暗号化されたテキストおよびアルゴリズム、鍵に対応する平文データで履行される {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.sign()")}}
  - : 引数に与えられたテキストおよびアルゴリズム、鍵に対応する署名で履行される {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.verify()")}}
  - : 引数に与えられた署名が、同じく引数に与えられたテキストおよびアルゴリズム、鍵と一致するかどうかを示す論理値で履行される {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.digest()")}}
  - : 引数に与えられたアルゴリズムとテキストから生成されたダイジェストで履行される {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.generateKey()")}}
  - : 対称アルゴリズムの場合は新しく生成された {{domxref("CryptoKey")}} で、非対称アルゴリズムの場合は新しく生成された 2 つの鍵を含む {{domxref("CryptoKeyPair")}} で履行される {{jsxref("Promise")}} を返します。これらは、引数として指定されたアルゴリズム、使用法、抽出可能性と一致します。
- {{domxref("SubtleCrypto.deriveKey()")}}
  - : 引数に与えられたマスターキーと特定のアルゴリズムによりもたらされる、新たに生成された {{domxref("CryptoKey")}} で履行される {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.deriveBits()")}}
  - : 引数に与えられたマスターキーと特定のアルゴリズムによりもたらされる、新たに生成された擬似乱数のビット列を含むバッファーで履行される {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.importKey()")}}
  - : 引数に与えられた書式およびアルゴリズム、生の鍵データ、使用法、抽出可能性に対応する {{domxref("CryptoKey")}} で履行される {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.exportKey()")}}
  - : 要求された書式の鍵を含むバッファーで履行される {{jsxref("Promise")}} を返します。
- {{domxref("SubtleCrypto.wrapKey()")}}
  - : 安全でない環境で使用（転送や保存）するために、ラップされた対称鍵で履行される {{jsxref("Promise")}} を返します。返されるラップされたバッファーは、引数に与えられた書式内にあり、与えられたアルゴリズムで与えられたラッピング鍵によりラップされた鍵を含みます。
- {{domxref("SubtleCrypto.unwrapKey()")}}
  - : 引数に与えられたラップされた鍵に対応する {{domxref("CryptoKey")}} の {{jsxref("Promise")}} を返します。

## SubtleCrypto の使用

この API で実装する機能は、暗号化機能と鍵管理機能の 2 つに分けることができます。

### 暗号化関数

これらは、システムにプライバシーや認証などのセキュリティ機能を実装するために使用することができる関数です。 `SubtleCrypto` API は以下の暗号化関数を提供ししています。

- {{DOMxRef("SubtleCrypto.sign","sign()")}} および {{DOMxRef("SubtleCrypto.verify","verify()")}}: デジタル署名の作成と検証
- {{DOMxRef("SubtleCrypto.encrypt","encrypt()")}} および {{DOMxRef("SubtleCrypto.decrypt","decrypt()")}}: データの暗号化と復号
- {{DOMxRef("SubtleCrypto.digest","digest()")}}: あるデータの固定長で衝突に強いダイジェストを作成します。

### 鍵管理関数

{{DOMxRef("SubtleCrypto.digest", "digest()")}} を除き、 API 内の暗号機能はすべて暗号鍵を使用しています。 `SubtleCrypto` API では、暗号鍵は {{DOMxRef("CryptoKey")}} オブジェクトを使用して表します。署名や暗号化などの演算処理を実行するには、 {{DOMxRef("CryptoKey")}} オブジェクトを {{DOMxRef("SubtleCrypto.sign","sign()")}} または {{DOMxRef("SubtleCrypto.encrypt","encrypt()")}} 関数に渡します。

#### キーの生成と導出

{{DOMxRef("SubtleCrypto.generateKey","generateKey()")}} および {{DOMxRef("SubtleCrypto.deriveKey","deriveKey()")}} 関数は、どちらも新しい {{DOMxRef("CryptoKey")}} オブジェクトを作成します。

この違いは、 `generateKey()` が呼び出すたびに新しい鍵を生成するのに対し、 `deriveKey()` は最初の鍵素材から鍵を導出する点です。同じ鍵素材を 2 回に分けて `deriveKey()` を呼び出すと、同じ基盤値がある 2 つの `CryptoKey` オブジェクトを取得することができます。この例は、例えばパスワードから暗号鍵を導出し、後で同じパスワードから同じ鍵を導出してデータを復号したい場合に有益です。

#### 鍵のインポートとエクスポート

アプリの外部で鍵を利用できるようにするには、鍵をエクスポートする必要があります。それが {{DOMxRef("SubtleCrypto.exportKey","exportKey()")}} です。エクスポート形式はいくつか選べます。

`exportKey()` の逆は {{DOMxRef("SubtleCrypto.importKey","importKey()")}} です。他のシステムから鍵をインポートすることができ、 [PKCS #8](https://datatracker.ietf.org/doc/html/rfc5208) や [JSON Web Key](https://datatracker.ietf.org/doc/html/rfc7517) のような標準形式に対応しているため、これを支援することができます。 `exportKey()` 関数は暗号化されていない形式で鍵をエクスポートします。

鍵が機密性の高いものである場合、 {{DOMxRef("SubtleCrypto.wrapKey","wrapKey()")}} を使用してください。これは鍵をエクスポートし、別の鍵を使用して暗号化するもので、 API では「鍵ラッピング鍵」と呼ばれています。

`wrapKey()` の逆は {{DOMxRef("SubtleCrypto.unwrapKey","unwrapKey()")}} で、鍵を復号してからインポートします。

#### 鍵の格納

`CryptoKey` オブジェクトは、[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を使用して格納することができます。すなわち、標準のウェブストレージ API を使用して、鍵を格納したり受け取ったりすることができます。この仕様書では、ほとんどの開発者が [IndexedDB API](/ja/docs/Web/API/IndexedDB_API) を使用して `CryptoKey` オブジェクトを格納することを想定しています。

### 対応しているアルゴリズム

ウェブ暗号 API が提供した暗号関数は、 1 つ以上の異なる「暗号アルゴリズム」によって実行することができます。関数の `algorithm` 引数は、使用するアルゴリズムを示します。アルゴリズムによっては追加の引数が必要です。このような場合、 `algorithm` 引数は追加の引数を含めるために辞書オブジェクトになります。

下記の表は、どのアルゴリズムがどの暗号処理を運営するのに適しているかをまとめたものです。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">
        <a href="/ja/docs/Web/API/SubtleCrypto/sign">sign()</a><br /><a
          href="/ja/docs/Web/API/SubtleCrypto/verify"
          >verify()</a
        >
      </th>
      <th scope="col">
        <a href="/ja/docs/Web/API/SubtleCrypto/encrypt">encrypt()</a><br /><a
          href="/ja/docs/Web/API/SubtleCrypto/decrypt"
          >decrypt()</a
        >
      </th>
      <th scope="col">
        <a href="/ja/docs/Web/API/SubtleCrypto/digest">digest()</a>
      </th>
      <th scope="col">
        <a href="/ja/docs/Web/API/SubtleCrypto/deriveBits">deriveBits()</a
        ><br /><a href="/ja/docs/Web/API/SubtleCrypto/deriveKey"
          >deriveKey()</a
        >
      </th>
      <th scope="col">
        <a href="/ja/docs/Web/API/SubtleCrypto/wrapKey">wrapKey()</a><br /><a
          href="/ja/docs/Web/API/SubtleCrypto/unwrapKey"
          >unwrapKey()</a
        >
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">RSASSA-PKCS1-v1_5</th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">RSA-PSS</th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">ECDSA</th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HMAC</th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">RSA-OAEP</th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row">AES-CTR</th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row">AES-CBC</th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row">AES-GCM</th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row">SHA-1</th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">SHA-256</th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">SHA-384</th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">SHA-512</th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">ECDH</th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HKDF</th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">PBKDF2</th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AES-KW</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API)
- [SubtleCrypto の暗号以外の使用法](/ja/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto)
- [ウェブセキュリティ](/ja/docs/Web/Security)
- [プライバシー、権限、情報セキュリティについて](/ja/docs/Web/Privacy)
- {{domxref("Crypto")}} および {{domxref("Crypto.subtle")}}.
- [Crypto 101](https://www.crypto101.io/): 暗号化の入門コースです（英語）。
