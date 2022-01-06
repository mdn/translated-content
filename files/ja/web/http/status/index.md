---
title: HTTP レスポンスステータスコード
slug: Web/HTTP/Status
tags:
  - HTTP
  - HTTP ステータスコード
  - Landing
  - Reference
  - ウェブ
  - ステータスコード
  - 概要
translation_of: Web/HTTP/Status
---
<div>{{HTTPSidebar}}</div>

<p class="summary"><span class="seoSummary">HTTP レスポンスステータスコードは、特定の <a href="/ja/docs/Web/HTTP">HTTP</a> リクエストが正常に完了したどうかを示します。レスポンスは 5 つのクラスに分類されています。</span></p>

<ol>
 <li><span class="seoSummary">情報レスポンス (<code>100</code>–<code>199</code>), </span></li>
 <li><span class="seoSummary">成功レスポンス (<code>200</code>–<code>299</code>), </span></li>
 <li><span class="seoSummary">リダイレクト (<code>300</code>–<code>399</code>), </span></li>
 <li><span class="seoSummary">クライアントエラー (<code>400</code>–<code>499</code>), </span></li>
 <li><span class="seoSummary">サーバエラー (<code>500</code>–<code>599</code>)</span></li>
</ol>

<p>以下のステータスコードは <a href="https://tools.ietf.org/html/rfc2616#section-10">RFC 2616 の第10章</a>で定義されています。更新版の仕様書は <a href="https://tools.ietf.org/html/rfc7231#section-6.5.1">RFC 7231</a> にあります。</p>

<div class="blockIndicator note">
<p>この一覧にないレスポンスを受け取った場合、これは標準外のレスポンスであり、おそらくそのサーバーソフトウェアに固有のものです。</p>
</div>

<h2 id="Information_responses" name="Information_responses">情報レスポンス</h2>

<dl>
 <dt>{{HTTPStatus(100, "100 Continue")}}</dt>
 <dd>これは暫定レスポンスで、その時点までのすべてに問題がなく、クライアントはリクエストを継続してよい、またもしリクエストが完了している場合はレスポンスを無視してよいことを示します。</dd>
 <dt>{{HTTPStatus(101, "101 Switching Protocol")}}</dt>
 <dd>このコードはクライアントからの {{HTTPHeader("Upgrade")}} リクエストヘッダーのレスポンスとして送信され、サーバーはプロトコルを切り替えていることを示します。</dd>
 <dt>{{HTTPStatus(102, "102 Processing")}} ({{Glossary("WebDAV")}})</dt>
 <dd>このコードは、サーバーはリクエストを受け取って処理しているが、まだレスポンスを提供できないことを示します。</dd>
 <dt>{{HTTPStatus(103, "103 Early Hints")}}</dt>
 <dd>このステータスコードは主に {{HTTPHeader("Link")}} ヘッダーとともに使用され、サーバーがリソースを準備している間、ユーザーエージェントがリソースの<a href="/ja/docs/Web/HTML/Preloading_content">先読み</a>を開始できるようにするためのものです。</dd>
</dl>

<h2 id="Successful_responses" name="Successful_responses">成功レスポンス</h2>

<dl>
 <dt>{{HTTPStatus(200, "200 OK")}}</dt>
 <dd>リクエストが成功したことを示します。成功が意味することは、 HTTP メソッドにより異なります。
 <ul>
  <li><code>GET</code>: リソースが読み込まれ、メッセージ本文で転送された。</li>
  <li><code>HEAD</code>: メッセージ本文にエンティティヘッダーある。</li>
  <li><code>PUT</code> または <code>POST</code>: 操作の結果を表すリソースがメッセージ本文で送信される。</li>
  <li><code>TRACE</code>: メッセージ本文に、サーバーが受け取ったリクエストメッセージが含まれている。</li>
 </ul>
 </dd>
 <dt>{{HTTPStatus(201, "201 Created")}}</dt>
 <dd>リクエストは成功し、その結果新たなリソースが作成されたことを示します。これは一般的に、 POST リクエストや、一部の PUT リクエストを送信した後のレスポンスになります。</dd>
 <dt>{{HTTPStatus(202, "202 Accepted")}}</dt>
 <dd>リクエストは受理されたが、まだ実行されていないことを示します。これはあいまいであり、なぜなら HTTP ではリクエストを処理した結果を示す非同期なレスポンスを後から送信する方法がないためです。リクエストは別のプロセスかサーバーが処理する、またはバッチ処理する予定です。</dd>
 <dt>{{HTTPStatus(203, "203 Non-Authoritative Information")}}</dt>
 <dd>このレスポンスコードは、返されるメタ情報のセットが生成元のサーバーから得られるセットと同一ではなく、ローカルまたは第三者の持つ複製から収集したことを表します。これは主に、他のリソースのミラーやバックアップを使用したときに使用されます。このような場合以外は、このステータスより "200 OK" のほうが好ましいレスポンスです。</dd>
 <dt>{{HTTPStatus(204, "204 No Content")}}</dt>
 <dd>リクエストに対して送信するコンテンツはありませんが、ヘッダーは有用であることを示します。ユーザーエージェントはこのリソースに関するキャッシュ済みのヘッダーを、新たな内容に更新します。</dd>
 <dt>{{HTTPStatus(205, "205 Reset Content")}}</dt>
 <dd>ユーザーエージェントに対し、リクエストを送信した文書をリセットするよう伝達します。</dd>
 <dt>{{HTTPStatus(206, "206 Partial Content")}}</dt>
 <dd>このレスポンスコードは、クライアントが {{HTTPHeader("Range")}} ヘッダーを送信し、リソースの一部だけをリクエストした時に使用されます。</dd>
 <dt>{{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV")}})</dt>
 <dd>複数のステータスコードがあてはまる状況で、複数のリソースに関する情報を伝えます。</dd>
 <dt>{{HTTPStatus(208, "208 Already Reported")}} ({{Glossary("WebDAV")}})</dt>
 <dd>同じコレクションに繰り返し複数のバインディングする内部メンバーを列挙することを避けるため、 <code>&lt;dav:propstat&gt;</code> レスポンスエレメントの内部で使用します。</dd>
 <dt>{{HTTPStatus(226, "226 IM Used")}} (<a href="https://tools.ietf.org/html/rfc3229">HTTP Delta encoding</a>)</dt>
 <dd>サーバーはリソースへの <code>GET</code> リクエストの処理を完了しており、レスポンスは現在のインスタンスに適用された 1 つ以上の instance manipulation の結果を表します。</dd>
</dl>

<h2 id="Redirection_messages" name="Redirection_messages">リダイレクションメッセージ</h2>

<dl>
 <dt>{{HTTPStatus(300, "300 Multiple Choice")}}</dt>
 <dd>リクエストに対して複数のレスポンスがあることを示します。ユーザーエージェントやユーザーは、それらからひとつを選択します。 (複数のレスポンスからひとつを選ぶ方法は標準化されていませんが、選択肢へリンクする HTML が推奨されており、それによってユーザーが選択することができます。)</dd>
 <dt>{{HTTPStatus(301, "301 Moved Permanently")}}</dt>
 <dd>リクエストされたリソースの URL が永遠に変更されたことを示します。レスポンスで新しい URL が与えられます。</dd>
 <dt>{{HTTPStatus(302, "302 Found")}}</dt>
 <dd>このレスポンスコードは、リクエストされたリソースの URI が<em>一時的に</em>変更されたことを示します。 URI は将来、さらに変更される可能性があります。従って、クライアントは将来のリクエストでも同じ URI を使用するべきです。</dd>
 <dt>{{HTTPStatus(303, "303 See Other")}}</dt>
 <dd>サーバーはこのレスポンスを、リクエストされたリソースを別の URI で GET リクエストを使用して取得するようクライアントを誘導するために送信します。</dd>
 <dt>{{HTTPStatus(304, "304 Not Modified")}}</dt>
 <dd>これはキャッシュ用に使用します。このレスポンスコードはクライアントに対して、レスポンスは変更されていないことを示します。よって、クライアントはキャッシュ済みのレスポンスを使い続けます。</dd>
 <dt><code>305 Use Proxy</code> {{deprecated_inline}}</dt>
 <dd>これは旧バージョンの HTTP 仕様書で、リクエストされたレスポンスはプロキシからアクセスしなければならないことを示していました。プロキシのインバンド設定に関するセキュリティの懸念により、このレスポンスコードは非推奨になりました。</dd>
 <dt><code>306 unused</code></dt>
 <dd>このレスポンスコードはもう使用されず、予約済みです。 HTTP/1.1 仕様書の旧バージョンでは使用されていました。</dd>
 <dt>{{HTTPStatus(307, "307 Temporary Redirect")}}</dt>
 <dd>サーバーはこのレスポンスを、リクエストされたリソースを別の URI で、元のリクエストと同じメソッドを使用して取得するようクライアントを誘導するために送信します。これは <code>302 Found</code> HTTP レスポンスコードと同じ意味を持ちますが、ユーザーエージェントは使用する HTTP メソッドを<em>変更してはならない</em>点が異なります。始めのリクエストで <code>POST</code> を用いた場合は、次のリクエストでも <code>POST</code> を使用しなければなりません。</dd>
 <dt>{{HTTPStatus(308, "308 Permanent Redirect")}}</dt>
 <dd>これは、リソースが <code>Location:</code> HTTP レスポンスヘッダーで指定した別の URI へ永続的に置かれていることを示します。これは <code>301 Moved Permanently</code> HTTP レスポンスコードと同じ意味を持ちますが、ユーザーエージェントは使用する HTTP メソッドを<em>変更してはならない</em>点が異なります。始めのリクエストで <code>POST</code> を用いた場合は、次のリクエストでも <code>POST</code> を使用しなければなりません。</dd>
</dl>

<h2 id="Client_error_responses" name="Client_error_responses">クライアントエラーレスポンス</h2>

<dl>
 <dt>{{HTTPStatus(400, "400 Bad Request")}}</dt>
 <dd>構文が無効であるためサーバーがリクエストを理解できないことを示します。</dd>
 <dt>{{HTTPStatus(401, "401 Unauthorized")}}</dt>
 <dd>HTTP 標準では "unauthorized" (不許可) と定義されていますが、意味的にはこのレスポンスは "unauthenticated" (未認証) です。つまり、クライアントはリクエストされたレスポンスを得るためには認証を受けなければなりません。</dd>
 <dt>{{HTTPStatus(402, "402 Payment Required")}} {{experimental_inline}}</dt>
 <dd>このレスポンスコードは、将来のために予約されています。このコードは当初、デジタル決済システムで使用するために作成されましたが、ごく稀にしか使用されておらず、標準的な慣例はありません。</dd>
 <dt>{{HTTPStatus(403, "403 Forbidden")}}</dt>
 <dd>認証されていないなどの理由でクライアントにコンテンツのアクセス権がなく、サーバーが適切なレスポンスの返信を拒否していることを示します。 401 とは異なり、クライアントの識別子がサーバーに知られています。</dd>
 <dt>{{HTTPStatus(404, "404 Not Found")}}</dt>
 <dd>サーバーがリクエストされたリソースを発見できないことを示します。ブラウザーでは、これは URL が解釈できなかったことを意味します。 API では、これは通信先が有効であるものの、リソース自体が存在しないことを意味することがあります。サーバーは認証されていないクライアントからリソースの存在を隠すために、 403 の代わりにこのレスポンスを返すことがあります。このレスポンスコードはウェブで頻繁に見られるため、おそらくもっとも有名なコードでしょう。</dd>
 <dt>{{HTTPStatus(405, "405 Method Not Allowed")}}</dt>
 <dd>サーバーがリクエストメソッドを理解しているものの、無効にされており使用することができません。例えば、 API がリソースを DELETE することを禁止できます。 <code>GET</code> および <code>HEAD</code> の二つは必須で、無効にすることができず、このエラーコードを返してはいけません。</dd>
 <dt>{{HTTPStatus(406, "406 Not Acceptable")}}</dt>
 <dd>このレスポンスは、ウェブサーバーが <a href="/ja/docs/HTTP/Content_negotiation#Server-driven_negotiation">サーバー駆動型コンテンツネゴシエーション</a> を行った結果、ユーザーエージェントから与えられた条件に合うコンテンツが見つからない場合に送信されます。</dd>
 <dt>{{HTTPStatus(407, "407 Proxy Authentication Required")}}</dt>
 <dd>これは 401 に似ていますが、プロキシサーバーが認証を要求している点が異なります。</dd>
 <dt>{{HTTPStatus(408, "408 Request Timeout")}}</dt>
 <dd>このレスポンスはクライアントが以前にリクエストを行っていない、アイドル状態のコネクションにおいて一部のサーバーが送信します。サーバーは使用していないコネクションの終了を望むことを示します。このレスポンスは Chrome、 Firefox 27 以降、IE9 など、閲覧を高速化するための HTTP 事前接続機能を使用する一部のブラウザーでよく使用します。また、一部のサーバーはこのメッセージを送らずにコネクションを閉じることに注意してください。</dd>
 <dt>{{HTTPStatus(409, "409 Conflict")}}</dt>
 <dd>このレスポンスは、リクエストがサーバーの現在の状態と矛盾する場合に送られるでしょう。</dd>
 <dt>{{HTTPStatus(410, "410 Gone")}}</dt>
 <dd>このレスポンスは、リクエストされたコンテンツがサーバーから永久に削除され、転送先アドレスがない場合に送られます。クライアントはこのリソースへのキャッシュやリンクを削除することが期待されます。 HTTP 仕様書ではこのコードを「期間限定のプロモーションサービス」に使用することを意図しています。 API はこのステータスコードの場合、削除されたリソースを無理に示そうとするべきではありません。</dd>
 <dt>{{HTTPStatus(411, "411 Length Required")}}</dt>
 <dd>サーバーが <code>Content-Length</code> ヘッダー項目を要求しているが、リクエストで定義されていないために、サーバーがリクエストを拒否したことを示します。</dd>
 <dt>{{HTTPStatus(412, "412 Precondition Failed")}}</dt>
 <dd>サーバー側で適合しない前提条件が、クライアント側のヘッダーに含まれていることを示します。</dd>
 <dt>{{HTTPStatus(413, "413 Payload Too Large")}}</dt>
 <dd>リクエストの本体がサーバーで定めている上限を超えていることを示します。サーバーはコネクションを閉じるか、<code>Retry-After</code> ヘッダー項目を返します。</dd>
 <dt>{{HTTPStatus(414, "414 URI Too Long")}}</dt>
 <dd>クライアントがリクエストした URI が、サーバーで扱える長さを超えていることを示します。</dd>
 <dt>{{HTTPStatus(415, "415 Unsupported Media Type")}}</dt>
 <dd>リクエストされたデータのメディア形式をサーバーが対応しておらず、サーバーはリクエストを拒否したことを示します。</dd>
 <dt>{{HTTPStatus(416, "416 Range Not Satisfiable")}}</dt>
 <dd>リクエスト内の <code>Range</code> ヘッダー項目で指定された範囲を満たすことができないことを示します。指定した範囲が、目的の URI のデータサイズを超えている可能性があります。</dd>
 <dt>{{HTTPStatus(417, "417 Expectation Failed")}}</dt>
 <dd>このレスポンスコードは、<code>Expect</code> リクエストヘッダーで指定された内容がサーバー側と適合しないことを示します。</dd>
 <dt>{{HTTPStatus(418, "418 I'm a teapot")}}</dt>
 <dd>サーバーは、ティーポットでコーヒーを淹れようとする試みを拒否します。</dd>
 <dt>{{HTTPStatus(421, "421 Misdirected Request")}}</dt>
 <dd>リクエストは、レスポンスを生成できないサーバーに送られました。リクエストの URI に含まれているスキームや権限の組み合わせに対してレスポンスを生成するよう設定されていないサーバーが、このコードを送ることがあります。</dd>
 <dt>{{HTTPStatus(422, "422 Unprocessable Entity")}} ({{Glossary("WebDAV")}})</dt>
 <dd>リクエストは適正ですが、意味が誤っているために従うことができません。</dd>
 <dt>{{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV")}})</dt>
 <dd>アクセス中のリソースはロックされています。</dd>
 <dt>{{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV")}})</dt>
 <dd>前のリクエストが失敗したため、このリクエストも失敗しました。</dd>
 <dt>{{HTTPStatus(425, "425 Too Early")}}</dt>
 <dd>サーバーが、繰り返される可能性のあるリクエストを処理するリスクを望まないことを示します。</dd>
 <dt>{{HTTPStatus(426, "426 Upgrade Required")}}</dt>
 <dd>サーバーは現在のプロトコルを使用したリクエストの実行を拒否しましたが、クライアントが別のプロトコルにアップグレードした後は受け入れることができます。サーバーは必要なプロトコルを示すために、426 のレスポンスで {{HTTPHeader("Upgrade")}} ヘッダー項目を送信しなければなりません。</dd>
 <dt>{{HTTPStatus(428, "428 Precondition Required")}}</dt>
 <dd>オリジンサーバーはリクエストが条件付きになることを必要としています。このレスポンスは「ロストアップデート問題」 (クライアントがリソースの状態を取得して変更およびサーバーに送信している間に、第三者がサーバーの状態を変更して競合が発生すること) を防ごうとするものです。</dd>
 <dt>{{HTTPStatus(429, "429 Too Many Requests")}}</dt>
 <dd>ユーザーは一定の時間内に大量のリクエストを送信しました ("レート制限")。</dd>
 <dt>{{HTTPStatus(431, "431 Request Header Fields Too Large")}}</dt>
 <dd>ヘッダー項目が大きすぎるため、サーバーはリクエストの処理を望みません。ヘッダー項目のサイズを削減した後に、リクエストを再送信できます。</dd>
 <dt>{{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}</dt>
 <dd>ユーザーエージェントが政府によって検閲されたウェブページなど、違法なリソースをリクエストしています。</dd>
</dl>

<h2 id="Server_error_responses" name="Server_error_responses">サーバーエラーレスポンス</h2>

<dl>
 <dt>{{HTTPStatus(500, "500 Internal Server Error")}}</dt>
 <dd>サーバー側で処理方法がわからない事態が発生したことを示します。</dd>
 <dt>{{HTTPStatus(501, "501 Not Implemented")}}</dt>
 <dd>リクエストメソッドをサーバーが対応しておらず、扱えないことを示します。サーバーが対応しなければならない (従って、このコードを返してはならない) メソッドは <code>GET</code> と <code>HEAD</code> だけです。</dd>
 <dt>{{HTTPStatus(502, "502 Bad Gateway")}}</dt>
 <dd>このエラーレスポンスは、リクエストの処理に必要なレスポンスを受け取るゲートウェイとして動作するサーバーが無効なレスポンスを受け取ったことを示します。</dd>
 <dt>{{HTTPStatus(503, "503 Service Unavailable")}}</dt>
 <dd>サーバーはリクエストを処理する準備ができていないことを示します。一般的な原因は、サーバーがメンテナンスや過負荷でダウンしていることです。このレスポンスとともに問題について説明する、ユーザーにわかりやすいページを送信するべきであることに注意してください。このレスポンスは一時的な状況について使用するものであり、また可能であれば、サービスが復旧する前に <code>Retry-After:</code> HTTP ヘッダーに予定時刻を含めるべきです。また、これら一時的な状況のレスポンスは通常キャッシュされるべきではないことから、ウェブ管理者はこのレスポンスとともに送られるキャッシュ関連のヘッダーに注意しなければなりません。</dd>
 <dt>{{HTTPStatus(504, "504 Gateway Timeout")}}</dt>
 <dd>このエラーレスポンスは、ゲートウェイとして動作するサーバーが時間内にレスポンスを得られない場合に送られます。</dd>
 <dt>{{HTTPStatus(505, "505 HTTP Version Not Supported")}}</dt>
 <dd>リクエストで使用した HTTP のバージョンをサーバーが対応していないことを示します。</dd>
 <dt>{{HTTPStatus(506, "506 Variant Also Negotiates")}}</dt>
 <dd>サーバーに内部構成エラーがあることを示します。選択したバリアントリソースが透過的コンテンツネゴシエーション自体に携わるよう設定されており、ネゴシエーションプロセスが正しく終了しなかったことを示します。</dd>
 <dt>{{HTTPStatus(507, "507 Insufficient Storage")}} ({{Glossary("WebDAV")}})</dt>
 <dd>サーバーがリクエストを完了させるのに必要な表現を保存することができなかったため、メソッドがリソースに対して実行できなかったことを示します。</dd>
 <dt>{{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV")}})</dt>
 <dd>サーバーは、リクエストの処理中に無限ループを検出しました。</dd>
 <dt>{{HTTPStatus(510, "510 Not Extended")}}</dt>
 <dd>サーバーがリクエストを処理するために、リクエストをさらに拡張することが必要です。</dd>
 <dt>{{HTTPStatus(511, "511 Network Authentication Required")}}</dt>
 <dd>ステータスコード 511 は、クライアントがネットワークでアクセスするために認証が必要であることを示します。</dd>
</dl>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.status")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes">Wikipedia の、HTTP ステータスコードの一覧</a></li>
 <li><a href="http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml">HTTP ステータスコードの、IANA 公式レジストリー</a></li>
</ul>
