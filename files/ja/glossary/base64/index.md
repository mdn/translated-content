---
title: Base64
slug: Glossary/Base64
tags:
  - Advanced
  - Base64
  - JavaScript
  - Typed Arrays
  - URI
  - URL
  - Unicode Problem
  - atob()
  - btoa()
translation_of: Glossary/Base64
---
**Base64** とは、[バイナリーからテキストへの符号化](https://en.wikipedia.org/wiki/Binary-to-text_encoding)を行う手法のグループであり、バイナリーデータを 64 を基数とする表現に変換することで、 ASCII 文字列で表すことができます。_Base64_ という呼び方は、[MIME の Content-Transfer-Encoding](https://ja.wikipedia.org/wiki/MIME#Content-Transfer-Encoding) における特定の符号化方式の名前に由来します。

Base64 符号化方式がよく使われるのは、テキストデータを扱うよう設計されたメディア上で、バイナリーデータを格納または転送する必要がある場合です。Base64 符号化により、転送中に変換されることなく、バイナリーデータがそのままであることを保証できます。Base64 は、[MIME](https://ja.wikipedia.org/wiki/MIME) による電子メールや [XML](/ja/docs/Web/XML) における複合型データの格納など、多くのアプリケーションで幅広く使われています。

ウェブにおける base64 符号化のよくある用途の一つが、バイナリーデータを符号化することで [data: URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) に入れられるようにすることです。

JavaScript には、Base64 文字列のエンコードとデコードのそれぞれに対応した、次の 2 つの関数があります。

- [`btoa()`](/ja/docs/Web/API/WindowOrWorkerGlobalScope/btoa): バイナリーデータの「文字列」から base64 で符号化された ASCII 文字列を生成します ("btoa" は "binary to ASCII" と読んでください)。
- [`atob()`](/ja/docs/Web/API/WindowOrWorkerGlobalScope/atob): base64 で符号化された文字列をデコードします ("atob" は "ASCII to binary" と読んでください)。

`atob()` と `btoa()` のアルゴリズムは、 [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648) section 4 で定義されています。

なお、 `btoa()` はバイナリーデータを受け取ることを期待しているため、与えられた文字列に UTF-16 表現の 2 バイト以上を占める文字が含まれていると例外が発生します。詳しくは、 [`btoa()`](/ja/docs/Web/API/WindowOrWorkerGlobalScope/btoa) のドキュメントを参照してください。

#### 符号化によるサイズの増加

Base64 の 1 文字はデータのちょうど 6 ビット分を表します。そのため、入力される文字列やバイナリーファイルに含まれる 3 バイト (3×8 ビット = 24 ビット) は、4 桁の Base64 で表されます (4×6 = 24 ビット)。

このことにより、Base64 で表された文字列またはファイルは、元のサイズの 133% の大きさになると言えます (33% の増加)。エンコードされるデータが小さい場合は、さらに増加幅が大きくなります。例えば、`length === 1` である文字列 `"a"` は、エンコードされて `length === 4` の文字列 `"YQ=="` になり、これは 300% の増加です。
