---
title: User agent (ユーザーエージェント)
slug: Glossary/User_agent
tags:
  - Browser
  - Glossary
  - UA
  - User-agent
  - Web Browser
  - WebMechanics
  - agent
  - user agent
  - userAgent
translation_of: Glossary/User_agent
---
<p><span class="seoSummary">ユーザーエージェントは個人を表すコンピューターのプログラムで、例えば{{Glossary("World Wide Web", "ウェブ")}}における{{Glossary("Browser","ブラウザー")}}に当たるものです。</span></p>

<p>ブラウザーのほかに、ウェブページをスクレイピングするボット、ダウンロードマネージャー、その他のウェブにアクセスするアプリがユーザーエージェントになる可能性もあります。ブラウザーはサーバーに対してリクエストを行う際に毎回、 {{Glossary("HTTP")}} の {{HTTPHeader("User-Agent")}} ヘッダーに、ユーザーエージェント (UA) 文字列と呼ばれる自分自身を識別する文字列を含めます。この文字列はブラウザー、バージョン番号、ホストのオペレーティングシステムなどを識別します。</p>

<p><span class="objectBox objectBox-string">スパムボット、ダウンロードマネージャー、一部のブラウザーは、異なるクライアントであると見せかけるために偽の UA 文字列を送ることがあります。これは <em>user agent spoofing</em> と呼ばれています。</span></p>

<p><span class="objectBox objectBox-string">ユーザーエージェント文字列は、クライアント側の {{Glossary("JavaScript")}} で {{domxref("navigator.userAgent")}} を使用することでアクセスできます。</span></p>

<p>ユーザーエージェント文字列は、 <span class="objectBox objectBox-string"><code>"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0"</code> のようなものが一般的です。</span></p>

<h2 id="Learn_more" name="Learn_more">関連情報</h2>

<h3 id="General_knowledge" name="General_knowledge">一般知識</h3>

<ul>
 <li>Wikipedia の{{Interwiki("wikipedia", "ユーザーエージェント")}}</li>
</ul>

<h3 id="Technical_reference" name="Technical_reference">技術リファレンス</h3>

<ul>
 <li>{{domxref("navigator.userAgent")}}</li>
 <li><a href="/ja/docs/Web/HTTP/Browser_detection_using_the_user_agent">User Agent を用いたブラウザーの判定</a></li>
 <li>{{RFC(2616, "14.43")}}: The <code>User-Agent</code> header</li>
</ul>

<section id="Quick_links">
<ol>
 <li><a href="/ja/docs/Glossary">MDN Web Docs 用語集</a>

  <ol>
   <li>{{Glossary("Browser", "ブラウザー")}}</li>
  </ol>
 </li>
 <li>HTTP ヘッダー
  <ol>
   <li>{{HTTPHeader("User-agent")}}</li>
  </ol>
 </li>
</ol>
</section>
