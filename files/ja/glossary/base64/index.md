---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: 3b8be0ad781b128b70ef0d208de84932755eb4d0
---

{{GlossarySidebar}}

**Base64** とは、[バイナリーからテキストへの符号化](https://en.wikipedia.org/wiki/Binary-to-text_encoding)を行う手法のグループであり、バイナリーデータを 64 を基数とする表現に変換することで、{{glossary("ASCII")}} 文字列で表すことができます。_Base64_ という用語は、 [MIME の Content-Transfer-Encoding](https://ja.wikipedia.org/wiki/MIME#Content-Transfer-Encoding) における特定の符号化方式の名前に由来します。

"Base64" という用語が自分自身で具体的な{{glossary("algorithm", "アルゴリズム")}}を参照するために使用される場合、それは一般的に [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648) の第 4 章で概説された Base64 のバージョンを参照します。これは、64 進数を表すための以下のアルファベットと、同時にパディング文字として `=` を使用します。

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

よくある変化形は "Base64 URL safe" で、{{glossary("URL")}} のパス部分やクエリー引数で問題が発生する可能性のある文字を避けるために、パディングを除外して `+/` を `-_` に置き換えます。パス部分またはクエリー引数にデータを格納しない場合は、このエンコード方式は必要ありません。例えば、[データ URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) にはどちらもないので、標準の Base64 エンコードを使用することができます。

Base64 エンコード方式は、ASCII テキスト（または任意のバイナリーデータを受け入れるにはまだ不十分な ASCII のスーパーセット）しか扱えないメディア上で保存や送信を行う際に、バイナリーデータをエンコードするために一般的に使用されます。これにより、転送中にデータが変更されることなく、そのままの状態を確実に保持します。Base64 の一般的な用途としては、以下のものがあります。

- [MIME](https://ja.wikipedia.org/wiki/MIME) による電子メールの場合
- [XML](/ja/docs/Web/XML) に複雑なデータを格納する場合
- バイナリーデータをエンコードして [`data:` URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) に含めることができるようにする場合

## 符号化によるサイズの増加

Base64 の 1 文字はデータのちょうど 6 ビット分を表します。そのため、入力される文字列やバイナリーファイルに含まれる 3 バイト（3×8 ビット = 24 ビット）は、4 桁の Base64 で表されます（4×6 = 24 ビット）。

つまり、文字列やファイルを Base64 にすると、通常、その文字列のソースよりもおよそ 3 分の 1 大きくなります（正確なサイズの増加は、文字列の絶対長、その長さのモジュロ 3、パディング文字を使用しているかどうかなど、さまざまな要因に依存します）。

## JavaScript の対応

ブラウザーは、Base64 文字列をデコードしたりエンコードしたりするための 2 つの JavaScript の関数をネイティブで提供しています。

- {{domxref("Window.btoa()")}}（{{domxref("WorkerGlobalScope.btoa()", "ワーカーでも利用可能", "", "nocode")}}）: バイナリーデータの文字列から Base64 エンコード方式の ASCII 文字列を作成します（"btoa" は "binary to ASCII" と読んでください）。
- {{domxref("Window.atob()")}}（{{domxref("WorkerGlobalScope.atob()", "ワーカーでも利用可能", "", "nocode")}}）: Base64 エンコード方式の文字列をデコードします（"atob" は "ASCII to binary" と読んでください）。

> [!NOTE]
> Base64 はテキストエンコードではなくバイナリーエンコード方式ですが、`btoa` と `atob` はウェブプラットフォームがバイナリーデータ型に対応する前に追加されました。その結果、2 つの関数は文字列を使用してバイナリーデータを表しており、各文字の{{glossary("code point", "コードポイント")}}が各バイトの値を表します。このため、`btoa` は任意のテキストデータをエンコードするために使用することができます。例えば、テキストや HTML 文書の Base64 `data:` URL を作成する場合などです。
>
> しかし、バイトとコードポイントの対応が確実に成り立つのは `0x7f` までのコードポイントだけです。さらに、`0xff` を超えるコードポイントは、1 バイトの最大値を超えるために `btoa` でエラーが発生します。次の節では、任意の Unicode テキストをエンコードするときに、この制限を回避するためにどのように作業するかについて詳しく説明します。

## 「Unicode 問題」

`btoa` は入力文字列のコードポイントをバイト値として解釈するため、文字列に対して `btoa` を呼び出すと、文字のコードポイントが `0xff` を超えた場合に "Character Out Of Range" 例外が発生します。任意の Unicode テキストをエンコードする必要がある使用する用途では、まず文字列を {{glossary("UTF-8")}} で構成されるバイト列に変換し、それからバイト列をエンコードする必要があります。

最も単純な解決策は、 `TextEncoder` と `TextDecoder` を使用して文字列の UTF-8 と単一のバイト表現を変換することです。

```js
function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join("");
  return btoa(binString);
}

// 使用方法
bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"
```

## 任意のバイナリーデータの変換

前の節の `bytesToBase64` と `base64ToBytes` 関数を直接使用して、Base64 文字列と [`Uint8Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) を変換することができます。

パフォーマンスを向上させるために、[`FileReader`](/ja/docs/Web/API/FileReader) と [`fetch`](/ja/docs/Web/API/Fetch_API) API を介して、base64 データ URL 同士の非同期変換がウェブプラットフォーム内でネイティブにできます。

```js
async function bytesToBase64DataUrl(bytes, type = "application/octet-stream") {
  return await new Promise((resolve, reject) => {
    const reader = Object.assign(new FileReader(), {
      onload: () => resolve(reader.result),
      onerror: () => reject(reader.error),
    });
    reader.readAsDataURL(new File([bytes], "", { type }));
  });
}

async function dataUrlToBytes(dataUrl) {
  const res = await fetch(dataUrl);
  return new Uint8Array(await res.arrayBuffer());
}

// 使用方法
await bytesToBase64DataUrl(new Uint8Array([0, 1, 2])); // "data:application/octet-stream;base64,AAEC"
await dataUrlToBytes("data:application/octet-stream;base64,AAEC"); // Uint8Array [0, 1, 2]
```

## 関連情報

- JavaScript API:
  - {{domxref("Window.atob()")}}（{{domxref("WorkerGlobalScope.atob()", "ワーカーでも利用可能", "", "nocode")}}）
  - {{domxref("Window.btoa()")}}（{{domxref("WorkerGlobalScope.btoa()", "ワーカーでも利用可能", "", "nocode")}}）
- [データ URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)
- [Base64](https://ja.wikipedia.org/wiki/Base64)（ウィキペディア）
- Base64 のアルゴリズム（[RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648) の説明）
