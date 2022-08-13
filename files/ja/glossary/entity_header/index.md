---
title: Entity header(エンティティヘッダー)
slug: Glossary/Entity_header
tags:
  - Glossary
  - WebMechanics
translation_of: Glossary/Entity_header
---
<p>エンティティヘッダーは、メッセージボディの内容を記述する{{glossary("header", "HTTP header")}}です。エンティティヘッダーは、HTTP リクエストとレスポンスの両方で使用されます。例えば{{HTTPHeader("Content-Length")}}、{{HTTPHeader("Content-Language")}}、{{HTTPHeader("Content-Encoding")}} は、エンティティヘッダーです。</p>

<p>エンティティヘッダー自体はリクエストヘッダーでもレスポンスヘッダーでもありませんが、リクエストヘッダー、レスポンスヘッダーはしばしばエンティティヘッダーを含みます。</p>

<p>次の例では、{{HTTPHeader("Content-Length")}} はエンティティヘッダーであり、{{HTTPHeader("Host")}}と{{HTTPHeader("User-Agent")}}は{{glossary("request header", "リクエストヘッダー")}}です：</p>

<pre>POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
</pre>

<h2 id="Learn_more" name="Learn_more">詳細情報</h2>

<h3 id="Technical_knowledge" name="Technical_knowledge">技術リファレンス</h3>

<ul>
 <li><a href="/ja/docs/Web/HTTP/Headers">全ての HTTP ヘッダー一覧</a></li>
</ul>
