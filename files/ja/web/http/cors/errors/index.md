---
title: CORS のエラー
slug: Web/HTTP/CORS/Errors
tags:
  - CORS
  - HTTP
  - HTTPS
  - エラー
  - コンソール
  - セキュリティ
  - トラブル解決
  - メッセージ
  - 同一オリジン
translation_of: Web/HTTP/CORS/Errors
---
<div>{{HTTPSidebar}}</div>

<p><span class="seoSummary"><ruby><a href="/ja/docs/Web/HTTP/CORS">オリジン間リソース共有</a><rp> (</rp><rt>Cross-Origin Resource Sharing</rt><rp>) </rp></ruby> ({{Glossary("CORS")}}) は、サーバーが<a href="/ja/docs/Web/Security/Same-origin_policy">同一オリジンポリシー</a>を緩和することができる標準です。</span>例えば、サイトが埋め込み可能なサービスを提供する場合、このような制約を緩和する必要があるかもしれません。このような CORS の構成の設定は必ずしも簡単ではなく、いくらか冒険的です。これらのページでは、よくある CORS のエラーメッセージと解決方法を調査します。</p>

<p>CORS 構成が正しく設定されていないと、ブラウザーコンソールには <code>"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at $somesite"</code> のようなエラーを表示して、リクエストが CORS のセキュリティ規則を侵害しているためにブロックされたことを示します。これは必ずしも設定ミスとは限りません。実際には、ユーザーのウェブアプリケーションおよびリモートの外部サービスからのリクエストが、意図的に許可されていない場合もあります。しかし、ただし、エンドポイントが使用可能である場合、成功するためにはデバッグが必要です。</p>

<h2 id="Identifying_the_issue" name="Identifying_the_issue">問題の識別</h2>

<p>CORS の構成に関する問題を理解するために、どのリクエストが、なぜ失敗したのかを調べる必要があります。そのためには以下の手順が役立つかもしれません。</p>

<ol>
 <li>問題のウェブサイトやウェブアプリを実行し、<a href="/ja/docs/Tools">開発者ツール</a>を開く。</li>
 <li>失敗するトランザクションを再現してみて、<a href="/ja/docs/Tools/Web_Console">コンソール</a>で CORS 違反エラーメッセージが表示されるかを調べる。おそらく次のように見える。</li>
</ol>

<p><img alt="CORS エラーを表示している Firefox コンソール" src="https://mdn.mozillademos.org/files/16050/cors-error2.png"></p>

<p>エラーメッセージのテキストは以下のようなものになるでしょう。</p>

<pre>Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at <em>https://some-url-here</em>. (<em>Reason:
additional information here</em>).</pre>

<div class="note">
<p><strong>メモ:</strong> セキュリティ上の理由から、 CORS リクエストで何を失敗したかについては <em>JavaScript コードからは特定できません</em>。コードから分かることは、エラーが発生したことだけです。何を失敗したかを特定するための唯一の方法は、詳細をブラウザーのコンソールで見ることです。</p>
</div>

<h2 id="CORS_error_messages" name="CORS_error_messages">CORS のエラーメッセージ</h2>

<p>Firefox のコンソールは、 CORS のためにリクエストが失敗した場合はコンソールにメッセージを表示します。エラーテキストには、何が失敗したのかの分析が追加された「reason」の部分があります。 reason のメッセージは以下の通りです。メッセージをクリックすると、エラーをより詳細に説明し、可能な解決方法を提供する記事を開くことができます。</p>

<ul>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors/CORSDisabled">Reason: CORS disabled</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors/CORSDidNotSucceed">Reason: CORS request did not succeed</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded">Reason: CORS header ‘Origin’ cannot be added</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors/CORSExternalRedirectNotAllowed">Reason: CORS request external redirect not allowed</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp">Reason: CORS request not http</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin">Reason: CORS header ‘Access-Control-Allow-Origin’ missing</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin">Reason: CORS header ‘Access-Control-Allow-Origin’ does not match ‘xyz’</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials">Reason: Credential is not supported if the CORS header ‘Access-Control-Allow-Origin’ is ‘*’</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors/CORSMethodNotFound">Reason: Did not find method in CORS header ‘Access-Control-Allow-Methods’</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors/CORSMissingAllowCredentials">Reason: expected ‘true’ in CORS header ‘Access-Control-Allow-Credentials’</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed">Reason: CORS preflight channel did not succeed</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod">Reason: invalid token ‘xyz’ in CORS header ‘Access-Control-Allow-Methods’</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowHeader">Reason: invalid token ‘xyz’ in CORS header ‘Access-Control-Allow-Headers’</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight">Reason: missing token ‘xyz’ in CORS header ‘Access-Control-Allow-Headers’ from CORS preflight channel</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed">Reason: Multiple CORS header ‘Access-Control-Allow-Origin’ not allowed</a></li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>用語集: {{Glossary("CORS")}}</li>
 <li><a href="/ja/docs/Web/HTTP/CORS">CORS 入門</a></li>
 <li><a href="/ja/docs/Web/HTTP/Server-Side_Access_Control">サーバー側 CORS 設定</a></li>
 <li><a href="/ja/docs/Web/HTML/CORS_enabled_image">CORS 有効化の画像</a></li>
 <li><a href="/ja/docs/Web/HTML/CORS_settings_attributes">CORS の設定属性</a></li>
 <li><a href="https://www.test-cors.org">https://www.test-cors.org</a> – CORS リクエストの試験ページ</li>
</ul>
