---
title: UTF-8
slug: Glossary/UTF-8
tags:
  - CodingScripting
  - Glossary
  - HTML
  - JavaScript
  - Utf-8
translation_of: Glossary/UTF-8
---
<p>UTF-8 (UCS Transformation Format 8) は World Wide Web において最も一般的な{{Glossary("Character encoding", "文字エンコーディング")}}です。 1 文字あたり 1～4 バイトで表します。UTF-8 は {{Glossary("ASCII")}} に対して後方互換性を持っており、すべての標準 Unicode 文字を表現することができます。</p>

<p>UTF-8 の最初の 128 文字は、ASCII の 128文字 (0～127) に正確に対応しており、つまり既存の ASCII 文字列はすでに UTF-8 として有効です。他の文字は 2～4 バイトを使用します。それぞれのバイトにはエンコードのためにいくつかのビットが予約されています。非 ASCII 文字は格納するために 2 バイト以上を必要とするため、バイト列が分割され再結合されない場合に破損する恐れがあります。</p>

<h2 id="Learn_more">関連情報</h2>

<h3 id="General_knowledge">一般知識</h3>

<ul>
 <li>ウィキペディアの {{Interwiki("wikipedia", "UTF-8")}}</li>
 <li><a href="https://www.unicode.org/faq/utf_bom.html#UTF8">FAQ about UTF-8 on Unicode website</a></li>
</ul>
