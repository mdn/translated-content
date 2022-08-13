---
title: Percent-encoding (パーセントエンコーディング)
slug: Glossary/percent-encoding
tags:
  - Glossary
  - WebMechanics
translation_of: Glossary/percent-encoding
---
<p>パーセントエンコーディング（Percent-encoding）は、{{Glossary("URL")}} のコンテキストで特定の意味を持つ 8 ビット文字をエンコードするメカニズムです。URL エンコードとも呼ばれます。エンコードは置換で構成されます。<code>'%'</code> の後に、置換文字の ASCII 値の 16進表現が続きます。</p>

<p>エンコードが必要な特殊文字は、<code>':'</code>, <code>'/'</code>, <code>'?'</code>, <code>'#'</code>, <code>'['</code>, <code>']'</code>, <code>'@'</code>, <code>'!'</code>, <code>'$'</code>, <code>'&amp;'</code>, <code>"'"</code>, <code>'('</code>, <code>')'</code>, <code>'*'</code>, <code>'+'</code>, <code>','</code>, <code>';'</code>, <code>'='</code>、および <code>'%'</code> 自体です。他の文字もエンコードできますが、エンコードする必要はありません。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td><code>':'</code></td>
   <td><code>'/'</code></td>
   <td><code>'?'</code></td>
   <td><code>'#'</code></td>
   <td><code>'['</code></td>
   <td><code>']'</code></td>
   <td><code>'@'</code></td>
   <td><code>'!'</code></td>
   <td><code>'$'</code></td>
   <td><code>'&amp;'</code></td>
   <td><code>"'"</code></td>
   <td><code>'('</code></td>
   <td><code>')'</code></td>
   <td><code>'*'</code></td>
   <td><code>'+'</code></td>
   <td><code>','</code></td>
   <td><code>';'</code></td>
   <td><code>'='</code></td>
   <td><code>'%'</code></td>
   <td><code>' '</code></td>
  </tr>
  <tr>
   <td><code>%3A</code></td>
   <td><code>%2F</code></td>
   <td><code>%3F</code></td>
   <td><code>%23</code></td>
   <td><code>%5B</code></td>
   <td><code>%5D</code></td>
   <td><code>%40</code></td>
   <td><code>%21</code></td>
   <td><code>%24</code></td>
   <td><code>%26</code></td>
   <td><code>%27</code></td>
   <td><code>%28</code></td>
   <td><code>%29</code></td>
   <td><code>%2A</code></td>
   <td><code>%2B</code></td>
   <td><code>%2C</code></td>
   <td><code>%3B</code></td>
   <td><code>%3D</code></td>
   <td><code>%25</code></td>
   <td><code>%20</code> または <code>+</code></td>
  </tr>
 </tbody>
</table>

<p>コンテキストに応じて、文字 <code>' '</code> は <code>'+'</code>（<code>application/x-www-form-urlencoded</code> メッセージで使用するパーセントエンコーディングバージョンなど）または URL のような <code>'%20'</code> に変換されます。</p>

<h2 id="Learn_more" name="Learn_more">より詳しく知る</h2>

<h3 id="General_knowledge" name="General_knowledge">一般知識</h3>

<ul>
 <li>ウィキペディアでの<a href="https://ja.wikipedia.org/wiki/パーセントエンコーディング">パーセントエンコーディング</a>の定義。</li>
</ul>

<h3 id="Technical_knowledge" name="Technical_knowledge">技術的知識</h3>

<ul>
 <li>{{RFC(3986)}} のセクション 2.1 に、このエンコーディングが定義されています。</li>
</ul>
