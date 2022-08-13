---
title: Endianness (エンディアン)
slug: Glossary/Endianness
tags:
  - Coding
  - CodingScripting
  - Glossary
  - 用語集
translation_of: Glossary/Endianness
---
<p id="Summary"><strong>エンディアン</strong> (もしくは<strong>バイト順</strong>) は、コンピューターが数字を表現するために各バイトを構成する方法を説明するものです。</p>

<p>メモリの個々の領域にはインデックス、もしくはアドレスが付与されています。各バイトには 8 ビット (つまり <code>0x00</code> から <code>0xff</code> まで) の数値しか保存できないため、それ以上大きな値を保存するには 1 バイトよりも大きな領域を予約しなければなりません。1つの数値における複数のバイトの<em>順序</em>で断然最もよく使われているものは<strong>リトルエンディアン</strong>で、インテルのすべてのプロセッサーで使用されています。リトルエンディアンは小さいバイトから大きいバイトの順で (つまり、もっとも小さなバイトを最初または最下位のアドレスに) 格納するので、ちょうどヨーロッパの日付の書き方 (例えば 31 December 2050) と同様です。</p>

<p>当然、<strong>ビッグエンディアン</strong>は逆の順序で、 ISO 日付形式 (2050-12-31) と同様です。ビッグエンディアンはよく「ネットワークバイトオーダー」と呼ばれますが、これはインターネット標準では通常、標準 UNIX ソケットレベルからウェブバイナリデータ構造に至るまですべて、データをビッグエンディアンで格納することを要求しているためです。また、 68000 系や PowerPC のマイクロプロセッサーを使用した古い Mac では、ビッグエンディアンを使用していました。</p>

<p>例えば <code>0x12345678</code> (十進法では 305 419 896) は、それぞれ次のように表現されます</p>

<ul>
 <li><em>リトルエンディアン</em>: <code>0x78 0x56 0x34 0x12</code></li>
 <li><em>ビッグエンディアン</em>: <code>0x12 0x34 0x56 0x78</code></li>
 <li><em>ミックスドエンディアン</em> (古く非常に稀): <code>0x34 0x12 0x78 0x56</code></li>
</ul>

<section id="Quick_links">
<ol>
 <li>関連情報
  <ol>
   <li>{{jsxref("ArrayBuffer")}}</li>
   <li>{{jsxref("DataView")}}</li>
   <li><a href="/ja/docs/Web/JavaScript/Typed_arrays">型付き配列</a></li>
  </ol>
 </li>
 <li>Wikipedia 記事
  <ol>
   <li>{{Interwiki("wikipedia", "エンディアン")}}</li>
  </ol>
 </li>
 <li><a href="/ja/docs/Glossary">用語集</a>
  <ol>
   <li>{{Glossary("Data structure", "データ構造")}}</li>
  </ol>
 </li>
</ol>
</section>
