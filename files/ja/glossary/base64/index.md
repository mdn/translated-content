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
<p><strong>Base64</strong> とは、<a href="https://en.wikipedia.org/wiki/Binary-to-text_encoding">バイナリーからテキストへの符号化</a>を行う手法のグループであり、バイナリーデータを 64 を基数とする表現に変換することで、 ASCII 文字列で表すことができます。<em>Base64</em> という呼び方は、<a href="https://ja.wikipedia.org/wiki/MIME#Content-Transfer-Encoding">MIME の Content-Transfer-Encoding</a> における特定の符号化方式の名前に由来します。</p>

<p>Base64 符号化方式がよく使われるのは、テキストデータを扱うよう設計されたメディア上で、バイナリーデータを格納または転送する必要がある場合です。Base64 符号化により、転送中に変換されることなく、バイナリーデータがそのままであることを保証できます。Base64 は、<a href="https://ja.wikipedia.org/wiki/MIME">MIME</a> による電子メールや <a href="/ja/docs/Web/XML">XML</a> における複合型データの格納など、多くのアプリケーションで幅広く使われています。</p>

<p>ウェブにおける base64 符号化のよくある用途の一つが、バイナリーデータを符号化することで <a href="/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URIs">data: URL</a> に入れられるようにすることです。</p>

<p>JavaScript には、Base64 文字列のエンコードとデコードのそれぞれに対応した、次の 2 つの関数があります。</p>

<ul>
 <li><code><a href="/ja/docs/Web/API/WindowOrWorkerGlobalScope/btoa">btoa()</a></code>: バイナリーデータの「文字列」から base64 で符号化された ASCII 文字列を生成します ("btoa" は "binary to ASCII" と読んでください)。</li>
 <li><code><a href="/ja/docs/Web/API/WindowOrWorkerGlobalScope/atob">atob()</a></code>: base64 で符号化された文字列をデコードします ("atob" は "ASCII to binary" と読んでください)。</li>
</ul>

<p><code>atob()</code> と <code>btoa()</code> のアルゴリズムは、 <a href="https://datatracker.ietf.org/doc/html/rfc4648">RFC 4648</a> section 4 で定義されています。</p>

<p>なお、 <code>btoa()</code> はバイナリーデータを受け取ることを期待しているため、与えられた文字列に UTF-16 表現の 2 バイト以上を占める文字が含まれていると例外が発生します。詳しくは、 <code><a href="/ja/docs/Web/API/WindowOrWorkerGlobalScope/btoa">btoa()</a></code> のドキュメントを参照してください。</p>

<h4 id="Encoded_size_increase">符号化によるサイズの増加</h4>

<p>Base64 の 1 文字はデータのちょうど 6 ビット分を表します。そのため、入力される文字列やバイナリーファイルに含まれる 3 バイト (3×8 ビット = 24 ビット) は、4 桁の Base64 で表されます (4×6 = 24 ビット)。</p>

<p>このことにより、Base64 で表された文字列またはファイルは、元のサイズの 133% の大きさになると言えます (33% の増加)。エンコードされるデータが小さい場合は、さらに増加幅が大きくなります。例えば、<code>length === 1</code> である文字列 <code>"a"</code> は、エンコードされて <code>length === 4</code> の文字列 <code>"YQ=="</code> になり、これは 300% の増加です。</p>
