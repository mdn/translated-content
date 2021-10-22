---
title: CRLF
slug: Glossary/CRLF
tags:
  - CR
  - CRLF
  - Glossary
  - Infrastructure
  - LF
  - 改行
translation_of: Glossary/CRLF
---
<p>CR と LF はテキストファイルで改行に用いることができる<a href="https://ja.wikipedia.org/wiki/%E5%88%B6%E5%BE%A1%E6%96%87%E5%AD%97">制御文字</a>または<a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%83%88%E3%82%B3%E3%83%BC%E3%83%89">バイトコード</a>です。</p>

<ul>
 <li>CR = <strong>キャリッジリターン</strong> (<code>\r</code>、16進数で <code>0x0D</code>、10進数で13) — 次の行へ進まずに、カーソルを行の先頭へ移動する。</li>
 <li>LF = <strong>ラインフィード</strong> (<code>\n</code>、16進数で <code>0x0A</code>、10進数で10) — カーソルを行の先頭へ移動せずに、次の行へ下に移動する。</li>
</ul>

<p>CR に直接 LF が続くと (CRLF, <code>\r\n</code>, or <code>0x0D0A</code>)、カーソルを下へ移動してから行の先頭へ移動します。</p>

<h2 id="詳細情報Edit">詳細情報<a class="button section-edit only-icon" href="/ja/docs/Glossary/Smoke_Test$edit#Learn_more"><span>Edit</span></a></h2>

<h3 id="基礎知識">基礎知識</h3>

<ul>
 <li>Wikipedia 上の {{interwiki( "wikipedia", "ja:改行コード")}}</li>
 <li>Wikipedia 上の {{interwiki( "wikipedia", "ja:キャリッジ・リターン")}}</li>
</ul>
