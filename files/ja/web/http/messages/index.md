---
title: HTTP メッセージ
slug: Web/HTTP/Messages
tags:
  - Guide
  - HTTP
  - WebMechanics
  - ガイド
translation_of: Web/HTTP/Messages
---
<div>{{HTTPSidebar}}</div>

<p class="summary">HTTP メッセージは、サーバーとクライアントがデータを交換する手段です。クライアントが送信してサーバーにアクションを起こさせる<em>リクエスト</em>と、サーバーの回答である<em>レスポンス</em>の、2 種類のメッセージがあります。</p>

<p>HTTP メッセージは ASCII でエンコードされたテキスト情報で構成されており、複数の行にまたがります。HTTP/1.1 およびそれより前のバージョンのプロトコルでは、メッセージがコネクション内でそのまま送信されます。HTTP/2 では、人間が読める形式のメッセージを HTTP フレームに分割して、最適化やパフォーマンスの向上を実現します。</p>

<p>ウェブ開発者やウェブ管理者がこれらテキスト形式の HTTP メッセージを作成することはめったにありません。ウェブブラウザー、プロキシ、ウェブサーバーといったソフトウェアが行います。それらは HTTP メッセージを設定ファイル (プロキシやサーバー)、API (ブラウザー)、あるいは他のインターフェイスによって提供します。</p>

<p><img alt="From a user-, script-, or server- generated event, an HTTP/1.x msg is generated, and if HTTP/2 is in use, it is binary framed into an HTTP/2 stream, then sent." src="https://mdn.mozillademos.org/files/13825/HTTPMsg2.png" style="height: 538px; width: 1174px;"></p>

<p>HTTP/2 のバイナリフレーム化方式は、適用される API や設定ファイルの変更を必要としないように設計されています。これはユーザーに対して透過的です。</p>

<p>HTTP のリクエストやレスポンスは似た構造を共用しており、以下の要素で構成されます。</p>

<ol>
 <li>実行するリクエスト、または成功か失敗かの状態を表す<em>開始行</em>。開始行は常に 1 行です。</li>
 <li>リクエストの詳細を示す、またはメッセージに含まれる本文を説明する、省略可能な <em>HTTP ヘッダー</em>一式。</li>
 <li>リクエストのメタ情報がすべて送信されたことを示す空行。</li>
 <li>リクエストに関連付けられたデータ (HTML フォームの内容など)、あるいはレスポンスに関連付けられたドキュメントを含む、省略可能な<em>本文</em>。本文が存在することやそのサイズは、開始行や HTTP ヘッダーで指定します。</li>
</ol>

<p>HTTP メッセージの開始行と HTTP ヘッダーは、まとめてリクエストの<em>ヘッド</em>として知られています。一方、ペイロードは<em>本文</em>として知られています。</p>

<p><img alt="Requests and responses share a common structure in HTTP" src="https://mdn.mozillademos.org/files/13827/HTTPMsgStructure2.png" style="height: 368px; width: 1239px;"></p>

<h2 id="HTTP_Requests" name="HTTP_Requests">HTTP リクエスト</h2>

<h3 id="Start_line" name="Start_line">開始行</h3>

<p>HTTP リクエストは、アクションを始めるためにクラアントからサーバーへ送られます。その<em>開始行</em>には、3 つの要素が含まれています。</p>

<ol>
 <li><em><a href="/ja/docs/Web/HTTP/Methods">HTTP メソッド</a></em>。実行するアクションを表わす動詞 ({{HTTPMethod("GET")}}、{{HTTPMethod("PUT")}}、{{HTTPMethod("POST")}} など) または名詞 ({{HTTPMethod("HEAD")}}、{{HTTPMethod("OPTIONS")}})。例えば <code>GET</code> はリソースを取り込むこと、<code>POST</code> はデータをサーバーへ送信すること (リソースを作成または変更する、あるいは返送する一時的なドキュメントを生成する) ことを示します。</li>
 <li><em>リクエスト対象</em>。通常は {{glossary("URL")}} ですが、プロトコル、ポート、ドメインの絶対パスは通常、リクエストの状況から明らかにされます。リクエスト対象の形式は、HTTP メソッドにより異なります。以下のような形式があります。
  <ul>
   <li>最後に <code>'?'</code> とクエリー文字列がある絶対パス。これは <em>origin form</em> として知られているもっとも一般的な形式であり、<code>GET</code>、<code>POST</code>、<code>HEAD</code>、<code>OPTIONS</code> メソッドで使用します。<br>
    <code>POST / HTTP/1.1<br>
    GET /background.png HTTP/1.0<br>
    HEAD /test.html?query=alibaba HTTP/1.1<br>
    OPTIONS /anypage.html HTTP/1.0</code></li>
   <li><em>absolute form</em> として知られている完全な URL は、主にプロキシへ接続する際に <code>GET</code> で使用します。<br>
    <code>GET http://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1</code></li>
   <li>ドメイン名とポート (省略可能。<code>':'</code> を前につける) で構成される、URL の authority の部分は <em>authority form</em> と呼ばれます。これは <code>CONNECT</code> で HTTP トンネルを設定するときに限り使用されます。<br>
    <code>CONNECT developer.mozilla.org:80 HTTP/1.1</code></li>
   <li>単なるアスタリスク (<code>'*'</code>) である <em>asterisk form</em> は <code>OPTIONS</code> で使用されており、サーバー全体を表します。<br>
    <code>OPTIONS * HTTP/1.1</code></li>
  </ul>
 </li>
 <li><em>HTTP バージョン</em>。これはメッセージの残りの部分の構造を定義しており、レスポンスで使用することを想定しているバージョンを示す役割もあります。</li>
</ol>

<h3 id="Headers" name="Headers">ヘッダー</h3>

<p>リクエストの <a href="/ja/docs/Web/HTTP/Headers">HTTP ヘッダー</a> は、HTTP ヘッダーの一定の基本構造に従います。大文字・小文字を区別しない文字列の後にコロン (<code>':'</code>) と、ヘッダーに応じた構造の値が続きます。値を含むヘッダー全体は 1 行で構成されており、とても長くなる場合もあります。</p>

<p>使用できるリクエストヘッダーは多数あります。これらはいくつかのグループに分類されます。</p>

<ul>
 <li><em>一般ヘッダー</em>は、 {{HTTPHeader("Via")}} など、メッセージ全体に適用されるものです。</li>
 <li><em>リクエストヘッダー</em>は、 {{HTTPHeader("User-Agent")}}, {{HTTPHeader("Accept-Type")}}, 指定するとリクエストを変更するもの ({{HTTPHeader("Accept-Language")}} など)、状況を示すもの ({{HTTPHeader("Referer")}} など)、条件を与えるもの ({{HTTPHeader("If-None")}} など) があります。</li>
 <li><em>エンティティヘッダー</em>は {{HTTPHeader("Content-Length")}} など、リクエストの本文に適用されます。当然ながら、リクエスト内に本文がない場合はこれらのヘッダーが送信されません。</li>
</ul>

<p><img alt="Example of headers in an HTTP request" src="https://mdn.mozillademos.org/files/13821/HTTP_Request_Headers2.png" style="height: 280px; width: 872px;"></p>

<h3 id="Body" name="Body">本文</h3>

<p>リクエストの最後の部分が本文です。本文が存在しないリクエストもあります。リソースを取り込むリクエストである <code>GET</code>, <code>HEAD</code>, <code>DELETE</code>, <code>OPTIONS</code> は通常、本文は不要です。サーバー内のデータを更新するためにデータを送信するリクエストもあり、 <code>POST</code> リクエストでよくあります (HTML フォームのデータを持つ)。</p>

<p>本文は、大きく 2 種類に分類されます。</p>

<ul>
 <li>単一リソースの本文。1 個のファイルで構成され、{{HTTPHeader("Content-Type")}} と {{HTTPHeader("Content-Length")}} の 2 つのヘッダーで定義されます。</li>
 <li><a href="/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data">複数リソースの本文</a>。マルチパートの本文で構成され、それぞれが異なる情報を持ちます。これは主に、 <a href="/ja/docs/Web/Guide/HTML/Forms">HTML フォーム</a>と関連付けられます。</li>
</ul>

<h2 id="HTTP_Responses" name="HTTP_Responses">HTTP レスポンス</h2>

<h3 id="Status_line" name="Status_line">ステータス行</h3>

<p>HTTP レスポンスの開始行は<em>ステータス行</em>と呼ばれ、以下の情報を持ちます。</p>

<ol>
 <li><em>プロトコルバージョン</em>。通常 <code>HTTP/1.1</code> です。</li>
 <li><em>ステータスコード</em>。リクエストが成功したか失敗したかを示します。一般的なステータスコードは {{HTTPStatus("200")}}, {{HTTPStatus("404")}}, {{HTTPStatus("302")}} です。</li>
 <li><em>ステータス文字列</em>。手短な単なる情報ですが、人間が HTTP メッセージを理解するのを助けるために、ステータスコードをテキストで説明します。</li>
</ol>

<p>一般的に、ステータス行は <code>HTTP/1.1 404 Not Found.</code> のようになります。</p>

<h3 id="Headers_2" name="Headers_2">ヘッダー</h3>

<p>レスポンスの <a href="/ja/docs/Web/HTTP/Headers">HTTP ヘッダー</a>は、他のヘッダーと同様に一定の基本構造に従います。大文字・小文字を区別しない文字列の後にコロン (<code>':'</code>) と、ヘッダーの種類に応じた構造の値が続きます。値を含むヘッダー全体は 1 行で構成されます。</p>

<p>使用できるレスポンスヘッダーは多数あります。これらはいくつかのグループに分類されます。</p>

<ul>
 <li><em>一般ヘッダー</em>は {{HTTPHeader("Via")}} など、メッセージ全体に適用されるものです。</li>
 <li><em>レスポンスヘッダー</em>は {{HTTPHeader("Vary")}} や {{HTTPHeader("Accept-Ranges")}} など、ステータス行で伝えられないサーバーの追加情報を与えます。</li>
 <li><em>エンティティヘッダー</em>は {{HTTPHeader("Content-Length")}} など、レスポンスの本文に適用されます。通常、レスポンス内に本文がない場合はこのようなヘッダーは送信されません。</li>
</ul>

<p><img alt="Example of headers in an HTTP response" src="https://mdn.mozillademos.org/files/13823/HTTP_Response_Headers2.png" style="height: 344px; width: 805px;"></p>

<h3 id="Body_2" name="Body_2">本文</h3>

<p>レスポンスの最後の部分が本文です。本文を持たないレスポンスもあります。 {{HTTPStatus("201")}} <strong><code>Created</code></strong> や {{HTTPStatus("204")}} <strong><code>No Content</code></strong> といったステータスコードのレスポンスは通常、本文がありません。</p>

<p>本文は、大きく 3 種類に分類されます。</p>

<ul>
 <li>大きさが判明している 1 個のファイルで構成される、単一リソースの本文。 {{HTTPHeader("Content-Type")}} と {{HTTPHeader("Content-Length")}} の 2 つのヘッダーで定義されます。</li>
 <li>大きさが不明な 1 個のファイルで構成される、単一リソースの本文。 {{HTTPHeader("Transfer-Encoding")}} を <code>chunked</code> に設定して、 chunked 形式でエンコードされます。</li>
 <li><a href="/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data">複数リソースの本文</a>。マルチパートの本文で構成され、それぞれが異なる情報のセクションを持ちます。これは比較的まれです。</li>
</ul>

<h2 id="HTTP2_Frames" name="HTTP2_Frames">HTTP/2 フレーム</h2>

<p>HTTP/1.x のメッセージには、パフォーマンスの欠点があります。</p>

<ul>
 <li>ヘッダーは本文と異なり、圧縮されません。</li>
 <li>あるメッセージと次のメッセージでヘッダーが酷似していることがよくありますが、それでも複数のコネクションにわたって繰り返されます。</li>
 <li>多重化することができません。同じサーバーに対して複数のコネクションを開かなければなりません。また、ウォーム状態の TCP コネクションはコールド状態のコネクションより効率的です。</li>
</ul>

<p>HTTP/2 は次の段階に進みました。 HTTP/1.x のメッセージを、ストリーム内に埋め込まれるフレームに分割します。データのフレームとヘッダーのフレームは区別され、ヘッダーの圧縮が可能になります。<em>多重化</em>と呼ばれる処理によって複数のストリームがまとめられ、下層の TCP コネクションの効率を向上させることができます。</p>

<p><img alt="HTTP/2 modify the HTTP message to divide them in frames (part of a single stream), allowing for more optimization." src="https://mdn.mozillademos.org/files/13819/Binary_framing2.png" style="height: 735px; width: 810px;"></p>

<p>HTTP フレームは、ウェブ開発者によって透過的になります。これは HTTP/2 において、 HTTP/1.1 メッセージと基盤となるトランスポート層との間のさらなるステップです。 HTTP フレームを利用するためにウェブ開発者が使用する API を変更する必要はありません。ブラウザーとサーバーの両方で利用可能になれば、 HTTP/2 が有効になり使用されます。</p>

<h2 id="Conclusion" name="Conclusion">まとめ</h2>

<p>HTTP メッセージは、 HTTP を使用する際に重要なものです。その構造はシンプルであり、拡張性が高くなっています。 HTTP/2 のフレーム化機能は、 HTTP/1.x の構文と基盤となるトランスポートプロトコルの間の新たな中間層であり、根底は変わりません。実証された仕組みの上に構築されました。</p>
