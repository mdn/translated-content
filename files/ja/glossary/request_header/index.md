---
title: Request header (リクエストヘッダー)
slug: Glossary/Request_header
tags:
  - Glossary
  - WebMechanics
translation_of: Glossary/Request_header
---
<p><strong>リクエストヘッダー</strong>は、 HTTP リクエストで使用される {{glossary("header", "HTTP ヘッダー")}}であり、メッセージの内容には関連しないものです。 {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language", "Accept-*")}}, {{HTTPHeader("If-Modified-Since", "If-*")}} などのリクエストヘッダーは、条件付きリクエストを行うことができます。他の {{HTTPHeader("Cookie")}}, {{HTTPHeader("User-Agent")}}, {{HTTPHeader("Referer")}} などはサーバーが回答を作成するための文脈を明確にします。</p>

<p>リクエストに現れるすべてのヘッダーが<em>リクエストヘッダー</em>であるとは限りません。例えば、 {{HTTPMethod("POST")}} リクエストの中に現れる {{HTTPHeader("Content-Length")}} は、実際にはリクエストメッセージの本文の長さを表す{{glossary("entity header", "エンティティヘッダー")}}です。しかし、これらのエンティティヘッダーもそのような場面ではリクエストヘッダーと呼ばれることがよくあります。</p>

<p>加えて、 <a href="/ja/docs/Glossary/CORS">CORS</a> では、常に認証が考慮され、{{glossary("preflight request", "プリフライト")}}リクエストへのレスポンスで明確に列挙されないリクエストヘッダーの一部を{{glossary('simple header', '単純ヘッダー')}}として定義しています。</p>

<p>{{HTTPMethod("GET")}} リクエストに続くリクエストヘッダーをいくつか示します。</p>

<pre class="notranslate">GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0</pre>

<p>正確に言えば、この例の中にある {{HTTPHeader("Content-Length")}} ヘッダーは他のようなリクエストヘッダーではなく、{{glossary("entity header", "エンティティヘッダー")}}です。</p>

<pre class="notranslate">POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
</pre>

<h2 id="Learn_more" name="Learn_more">詳細情報</h2>

<h3 id="Technical_reference" name="Technical_reference">技術リファレンス</h3>

<ul>
 <li><a href="/ja/docs/Web/HTTP/Headers">すべての HTTP ヘッダーの一覧</a></li>
</ul>
