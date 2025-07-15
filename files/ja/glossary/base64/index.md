---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Base64** とは、[バイナリーからテキストへの符号化](https://en.wikipedia.org/wiki/Binary-to-text_encoding)を行う手法のグループであり、バイナリーデータを 64 を基数とする表現に変換することで、{{glossary("ASCII")}} 文字列で表すことができます。_Base64_ という用語は、 [MIME の Content-Transfer-Encoding](https://ja.wikipedia.org/wiki/MIME#Content-Transfer-Encoding) における特定の符号化方式の名前に由来します。

Base64 エンコード方式は、ASCII テキスト（または任意のバイナリーデータを受け入れるにはまだ不十分な ASCII のスーパーセット）しか扱えないメディア上で保存や送信を行う際に、バイナリーデータをエンコードするために一般的に使用されます。これにより、転送中にデータが変更されることなく、そのままの状態を確実に保持します。Base64 の一般的な用途としては、以下のものがあります。

- [MIME](https://ja.wikipedia.org/wiki/MIME) による電子メールの場合
- [XML](/ja/docs/Web/XML) に複雑なデータを格納する場合
- バイナリーデータをエンコードして [`data:` URL](/ja/docs/Web/URI/Reference/Schemes/data) に含めることができるようにする場合

## Base64 文字

"Base64" という用語が自分自身で具体的な{{glossary("algorithm", "アルゴリズム")}}を参照するために使用される場合、それは一般的に {{rfc("4648", "", 4)}} で概説された Base64 のバージョンを参照します。これは、64 進数を表すための以下のアルファベットと、それとは別にパディング文字として `=` を使用します。

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

## URL およびファイル名セーフの Base64

この定義のよくある変形は、ファイル名および {{glossary("URL")}} 値で使用しても問題のない文字のみを利用できます。
{{rfc("4648", "", 5)}} で定義されているこのバージョンでは、パディングを省略し、 `+` と `/` を `-` と `_` に置き換えます。

パス部分またはクエリー引数にデータを格納しない場合は、このエンコード方式は必要ありません。例えば、[データ URL](/ja/docs/Web/URI/Reference/Schemes/data) はどちらもないので、標準の Base64 エンコードを使用することができます。

## 符号化によるサイズの増加

Base64 のそれぞれの 1 文字はデータの 6 ビット分（64 = 2<sup>6</sup>）を表します。そのため、入力される文字列やバイナリーファイルに含まれる 3 バイト（3×8 ビット = 24 ビット）は、4 桁の 6 ビットの Base64 で表されます（4×6 = 24 ビット）。

つまり、文字列やファイルを Base64 にすると、通常、その文字列のソースよりもおよそ 3 分の 1 大きくなります（正確なサイズの増加は、文字列の絶対長、その長さのモジュロ 3、パディング文字を使用しているかどうかなど、さまざまな要因に依存します）。

## 末尾の塊

base64 文字列は 4 文字の塊に分割することができ、最後の塊は 4 文字未満でもかまいません。最後の塊は、正確に 4 文字の長さになるように `=` 文字で埋められます。埋め文字を除いて、最後の塊は次のいずれかになります。

- 2 文字：1 バイト（8 ビット）のデータを表す 12 ビットをエンコードします。
- 3 文字：2 バイト（16 ビット）のデータを表す 18 ビットをエンコードします。
- 4 文字：3 バイト（24 ビット）のデータを表す 24 ビットをエンコードします。

最初の 2 つのケースでは、文字はデータを表さない 4 または 2 の余分な末尾ビットを持つことがあります。この場合、 [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648#section-3.5) では、エンコーダーはこれらのビットを 0 に設定し、デコーダーは 0 以外の場合にオプションでエラーを発生することを要求しています。例えば、エンコードされたデータが単一のバイト `0b01010101` の場合、2 つの文字 `0b010101` (`V`) および `0b010000` (`Q`) が必要であり、2 つ目の文字には 4 ビットの末尾ビットが 0 に設定されます。`VR==` （2 文字目が `0b010001` を表す）をデコードすると、技術的には同じバイト `0b01010101` になりますが、末尾のビットが 0 ではないため、デコーダはエラーを発生する場合があります。

## JavaScript の対応

{{jsxref("Uint8Array")}} クラスは、 {{jsxref("Uint8Array.fromBase64()")}}、{{jsxref("Uint8Array.prototype.toBase64()")}}、{{jsxref("Uint8Array.prototype.setFromBase64()")}} の各メソッドで、 base64 文字列との変換機能を提供しています。

Browsers also natively provide two JavaScript functions for decoding and encoding Base64 strings:

- {{domxref("Window.btoa()")}}（{{domxref("WorkerGlobalScope.btoa()", "ワーカーでも利用可能", "", "nocode")}}）: バイナリーデータの文字列から Base64 エンコード方式の ASCII 文字列を作成します（"btoa" は "binary to ASCII" と読んでください）。
- {{domxref("Window.atob()")}}（{{domxref("WorkerGlobalScope.atob()", "ワーカーでも利用可能", "", "nocode")}}）: Base64 エンコード方式の文字列をデコードします（"atob" は "ASCII to binary" と読んでください）。

> [!NOTE]
> Base64 はテキストエンコードではなくバイナリーエンコード方式ですが、`btoa` と `atob` はウェブプラットフォームがバイナリーデータ型に対応する前に追加されました。その結果、2 つの関数は文字列を使用してバイナリーデータを表しており、各文字の{{glossary("code point", "コードポイント")}}が各バイトの値を表します。このため、`btoa` は任意のテキストデータをエンコードするために使用することができます。例えば、テキストや HTML 文書の Base64 `data:` URL を作成する場合などです。
>
> しかし、バイトとコードポイントの対応が確実に成り立つのは `0x7f` までのコードポイントだけです。さらに、`0xff` を超えるコードポイントは、1 バイトの最大値を超えるために `btoa` でエラーが発生します。次の節では、任意の Unicode テキストをエンコードするときに、この制限を回避するためにどのように作業するかについて詳しく説明します。

## 関連情報

- JavaScript API:
  - {{domxref("Window.atob()")}}（{{domxref("WorkerGlobalScope.atob()", "ワーカーでも利用可能", "", "nocode")}}）
  - {{domxref("Window.btoa()")}}（{{domxref("WorkerGlobalScope.btoa()", "ワーカーでも利用可能", "", "nocode")}}）
  - {{jsxref("Uint8Array")}}
- [データ URL](/ja/docs/Web/URI/Reference/Schemes/data)
- [Base64](https://ja.wikipedia.org/wiki/Base64)（ウィキペディア）
- Base64 のアルゴリズム（[RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648) の説明）
