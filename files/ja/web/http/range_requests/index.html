---
title: HTTP 範囲リクエスト
slug: Web/HTTP/Range_requests
tags:
  - HTTP
  - HTTP 範囲リクエスト
  - ガイド
translation_of: Web/HTTP/Range_requests
---
<div>{{HTTPSidebar}}</div>

<p class="summary">HTTP 範囲リクエストでは、サーバーからクライアントに HTTP メッセージの一部のみを送信できます。部分リクエストは、たとえば、大きなメディアや、一時停止や再開機能を持つファイルのダウンロードに役立ちます。</p>

<h2 id="Checking_if_a_server_supports_partial_requests" name="Checking_if_a_server_supports_partial_requests">サーバーが部分リクエストに対応しているかどうかの確認</h2>

<p>{{HTTPHeader("Accept-Ranges")}} が HTTP レスポンスに存在した場合 (そして値が "<code>none</code>" ではない場合)、サーバーは範囲リクエストに対応しています。これは例えば、 {{HTTPMethod("HEAD")}} リクエストを cURL で発行することで確認することができます。</p>

<pre class="notranslate">curl -I http://i.imgur.com/z4d4kWk.jpg

HTTP/1.1 200 OK
...
Accept-Ranges: bytes
Content-Length: 146515
</pre>

<p>このレスポンスの中で、 <code>Accept-Ranges: bytes</code> は範囲を定義する単位としてバイト数が使えることを示しています。ここで {{HTTPHeader("Content-Length")}} ヘッダーも受け取る画像の全体の長さを示すので有用です。</p>

<p>サイトが <code>Accept-Ranges</code> ヘッダーを省略した場合は、おそらく部分リクエストに対応していません。サイトによっては値として明示的に "<code>none</code>" を送信して、対応がないことを示すこともあります。アプリによっては、このような場合にダウンロードマネージャーが一時停止ボタンを無効化します。</p>

<pre class="notranslate">curl -I https://www.youtube.com/watch?v=EwTZ2xpQwpA

HTTP/1.1 200 OK
...
Accept-Ranges: none
</pre>

<h2 id="Requesting_a_specific_range_from_a_server" name="Requesting_a_specific_range_from_a_server">サーバーからの特定の範囲のリクエスト</h2>

<p>サーバーが範囲リクエストをサポートしている場合、そのリクエストを{{HTTPHeader("Range")}}で発行することができ、それはサーバーが返すべきドキュメントの一部分を指し示しています。</p>

<h3 id="Single_part_ranges" name="Single_part_ranges">単一部分のリクエスト</h3>

<p>リソースから単一の範囲を要求することが可能です。ここで再び、cURL を用いてこれを検証することができます。"<code>-H</code>"オプションはリクエストに対して、この場合、最初の1024バイトを要求する<code>Range</code> ヘッダーラインを付け加えることができます。</p>

<pre class="notranslate">curl http://i.imgur.com/z4d4kWk.jpg -i -H "Range: bytes=0-1023"</pre>

<p>発行されるリクエストは次のようになります:</p>

<pre class="notranslate">GET /z4d4kWk.jpg HTTP/1.1
Host: i.imgur.com
Range: bytes=0-1023</pre>

<p>サーバーは {{HTTPStatus("206")}} <code>Partial Content</code> ステータスコードとともに以下のレスポンスを返します:</p>

<pre class="notranslate">HTTP/1.1 206 Partial Content
Content-Range: bytes 0-1023/146515
Content-Length: 1024
...
(binary content)
</pre>

<p>{{HTTPHeader("Content-Length")}} はここでの場合、要求された範囲の大きさを返します(画像全体の大きさではありません)。 {{HTTPHeader("Content-Range")}} レスポンスヘッダーはこの部分的なメッセージが全体のリソースのうちのどの部分に属しているのかを指し示しています。</p>

<h3 id="Multipart_ranges" name="Multipart_ranges">複数部分のリクエスト</h3>

<p>{{HTTPHeader("Range")}} ヘッダーはまた、ドキュメントの複数の範囲を一度に取得する手段も提供しています。それら複数の範囲はカンマで区切ることで指定できます。</p>

<pre class="notranslate">curl http://www.example.com -i -H "Range: bytes=0-50, 100-150"</pre>

<p>サーバーは {{HTTPStatus("206")}} <code>Partial Content</code> ステータスコードと {{HTTPHeader("Content-Type")}}<code>: multipart/byteranges; boundary=3d6b6a416f9b5</code> ヘッダを伴ってレスポンスを返し、そこでは指定した複数のバイト範囲に関するデータが後ろに続いていることがわかります。 各々のバイト範囲において対応する <code>Content-Type</code> と <code>Content-Range</code> ヘッダーフィールドが含まれており、それぞれのボディ部分を区切るための境界文字列が境界パラメーターによって指定されています。</p>

<pre class="notranslate">HTTP/1.1 206 Partial Content
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 282

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 0-50/1270

&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Example Do
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-150/1270

eta http-equiv="Content-type" content="text/html; c
--3d6b6a416f9b5--</pre>

<h3 id="Conditional_range_requests" name="Conditional_range_requests">条件付き範囲リクエスト</h3>

<p>リソースのさらなる部分に対してリクエストを再開する際、最後にバイト範囲の断片を受け取ったときから、サーバー側で格納されているリソースが変更されていないことを保証する必要があります。</p>

<p>{{HTTPHeader("If-Range")}} HTTPリクエストヘッダは範囲リクエストに対して条件付けを付与することができます。条件が満たされた場合、範囲リクエストが発行され、サーバーは適切なボディとともに {{HTTPStatus("206")}} <code>Partial Content</code> ステータスを返します。もし条件が満たされなかった場合、全てのリソースが {{HTTPStatus("200")}} <code>OK</code> ステータスとともに返されます。このヘッダは {{HTTPHeader("Last-Modified")}} validatorあるいは {{HTTPHeader("ETag")}} を伴って用いられます。両方を同時に使うことはありません。</p>

<pre class="notranslate">If-Range: Wed, 21 Oct 2015 07:28:00 GMT </pre>

<h2 id="Partial_request_responses" name="Partial_request_responses">部分的なリクエストのレスポンス</h2>

<p>範囲リクエストを用いる際、これに関連した３つのステータスコードが存在します。</p>

<ul>
 <li>範囲リクエストが成功した際 {{HTTPStatus("206")}} <code>Partial Content</code> ステータスコードがサーバーから返されます。</li>
 <li>範囲リクエストが元のリソースの境界を越え出た場合 (つまり範囲を示す値がリソースより外にはみ出た場合) 、サーバーは {{HTTPStatus("416")}} <code>Requested Range Not Satisfiable</code> ステータスコードを返します。</li>
 <li>範囲リクエストがサポートされていない場合、サーバーから {{HTTPStatus("200")}} <code>OK</code> ステータスコードが返されます。</li>
</ul>

<h2 id="Comparison_to_chunked_Transfer-Encoding" name="Comparison_to_chunked_Transfer-Encoding">チャンク <code>Transfer-Encoding</code> との比較</h2>

<p>{{HTTPHeader("Transfer-Encoding")}} ヘッダーを用いることでチャンクごとのエンコーディングが可能になります。これは大きいサイズのデータがクライアントに送られ、リクエストが完全に処理されるまでレスポンス全体のサイズが判明しない場合に有用です。サーバーはクライアントに対して、バッファリングも実際の大きさも確かめることなく、即座にデータを送ります。これはレイテンシーの向上に導きます。範囲リクエストとチャンクの使用は共用可能であり、互いに指定されていようといなかろうと気にせず使用することが可能です。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連するステータスコード {{HTTPStatus("200")}}, {{HTTPStatus("206")}}, {{HTTPStatus("416")}}.</li>
 <li>関連するヘッダー: {{HTTPHeader("Accept-Ranges")}}, {{HTTPHeader("Range")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("If-Range")}}, {{HTTPHeader("Transfer-Encoding")}}.</li>
 <li><a href="https://blogs.msdn.microsoft.com/ieinternals/2011/06/03/download-resumption-in-internet-explorer/">Download resumption in Internet Explorer</a></li>
</ul>
