---
title: HTTP 認証
slug: Web/HTTP/Authentication
tags:
  - Access Control
  - Authentication
  - Guide
  - HTTP
  - Security
  - アクセス制限
  - セキュリティ
  - 認証
translation_of: Web/HTTP/Authentication
---
<div>{{HTTPSidebar}}</div>

<p class="summary"><span class="seoSummary">HTTP はアクセス制御と認証の基本的な枠組みを提供しています。このページでは、HTTP の認証の枠組みを紹介し、サーバーで HTTP の "Basic" 認証を使用してアクセスを制限する方法を紹介します。</span></p>

<h2 id="The_general_HTTP_authentication_framework" name="The_general_HTTP_authentication_framework">一般的な HTTP 認証の枠組み</h2>

<p>{{RFC("7235")}} は、サーバーがクライアント要求を {{glossary("challenge")}} し、クライアントが認証情報を提供するために使用できる HTTP 認証フレームワークを定義しています。</p>

<p>チャレンジとレスポンスの流れは以下のようになります。</p>

<ol>
 <li>サーバーは少なくとも１回のチャレンジで、クライアントに {{HTTPStatus("401")}} (Unauthorized) レスポンスステータスを返し、 {{HTTPHeader("WWW-Authenticate")}} レスポンスヘッダーを含めて認証方法に関する情報を提供します。</li>
 <li>サーバーで自身を認証したいクライアントは {{HTTPHeader("Authorization")}} リクエストヘッダフィールドに資格情報を含めることでそれを行うことができます。</li>
 <li>通常、クライアントはユーザーにパスワードのプロンプトを表示し、正しい <code>Authorization</code> ヘッダーを含むリクエストを発行します。</li>
</ol>

<p><img alt="クライアントとサーバーのライフライン間の HTTP メッセージを説明するシーケンス図。" src="https://mdn.mozillademos.org/files/14689/HTTPAuth.png" style="height: 335px; width: 710px;" title="Sequence Diagram of Client-server HTTP Authentication"></p>

<p>この図に示したような "Basic" 認証の場合、やり取りは安全のために HTTPS (TLS) 接続を介して<strong>行われなければなりません</strong>。</p>

<h3 id="Proxy_authentication" name="Proxy_authentication">プロキシ認証</h3>

<p><em>プロキシ認証</em>にも同じチャレンジとレスポンスのメカニズムを使用できます。リソース認証とプロキシ認証の両方が共存できるため、異なるヘッダーとステータスコードのセットが必要です。プロキシの場合、チャレンジのステータスコードは {{HTTPStatus("407")}} (Proxy Authentication Required) で、 {{HTTPHeader("Proxy-Authenticate")}} レスポンスヘッダーはプロキシサーバーに資格情報を提供するために、 {{HTTPHeader("Proxy-Authorization")}} リクエストヘッダーが使用されます。</p>

<h3 id="Access_forbidden" name="Access_forbidden">アクセスの不許可</h3>

<p>特定のリソースにアクセスするのに十分ではないが有効な資格情報を (プロキシ) サーバーが受け取った場合、サーバーは {{HTTPStatus("403")}} <code>Forbidden</code> ステータスコードを返す必要があります。 {{HTTPStatus("401")}} <code>Unauthorized</code> または {{HTTPStatus("407")}} <code>Proxy Authentication Required</code> とは異なり、このユーザーは認証できません。</p>

<h3 id="Authentication_of_cross-origin_images" name="Authentication_of_cross-origin_images">オリジン間の画像の認証</h3>

<p>ブラウザーによって最近修正された潜在的なセキュリティホールとして、サイト間での画像の認証があります。 <a href="/ja/docs/Mozilla/Firefox/Releases/59">Firefox 59</a> 以降、異なるオリジンから現在の文書に読み込まれる画像リソースは、 HTTP 認証ダイアログを起動することができなくなり ({{bug(1423146)}})、攻撃者が任意の画像をサードパーティ製のページに埋め込んでユーザーの認証情報を盗むことを防ぎます。</p>

<h3 id="Character_encoding_of_HTTP_authentication" name="Character_encoding_of_HTTP_authentication">HTTP 認証の文字エンコーディング</h3>

<p>ブラウザーはユーザー名とパスワードに <code>utf-8</code> エンコーディングを使用します。</p>

<p>Firefox は <code>ISO-8859-1</code> を使用していましたが、他のブラウザーとの互換性のために <code>utf-8</code> に変更され、 {{bug(1419658)}} で説明されているような潜在的な問題を回避します。</p>

<h3 id="WWW-Authenticate_and_Proxy-Authenticate_headers" name="WWW-Authenticate_and_Proxy-Authenticate_headers">WWW-Authenticate および Proxy-Authenticate ヘッダー</h3>

<p>{{HTTPHeader("WWW-Authenticate")}} および {{HTTPHeader("Proxy-Authenticate")}} レスポンスヘッダーは、リソースへのアクセスに使用する認証メソッドを定義します。どの認証方式を使用するかを指定するため、認証を希望するクライアントは資格情報の提供方法を知ることができます。これらのヘッダーの構文は次のとおりです。</p>

<p>これらのヘッダーの構文は以下の通りです。</p>

<pre class="syntaxbox notranslate">WWW-Authenticate: &lt;type&gt; realm=&lt;realm&gt;
Proxy-Authenticate: &lt;type&gt; realm=&lt;realm&gt;
</pre>

<p>ここで、 <code>&lt;type&gt;</code> は認証スキームです ("Basic" は最も一般的なスキームであり、<a href="/ja/docs/Web/HTTP/Authentication#Basic_authentication_scheme">以下で紹介</a>します)。 <em>realm</em> は保護された領域を説明するため、または保護の範囲を示すために使用されます。これは、「ステージングサイトへのアクセス」などのようなメッセージにすることができ、それによってユーザーが、どの領域にアクセスしようとしているかを知ることができます。</p>

<h3 id="Authorization_and_Proxy-Authorization_headers" name="Authorization_and_Proxy-Authorization_headers">Authorization および Proxy-Authorization ヘッダー</h3>

<p>{{HTTPHeader("Authorization")}} および {{HTTPHeader("Proxy-Authorization")}} リクエストヘッダーには、(プロキシ) サーバーがユーザーエージェントを認証する資格情報が入ります。ここでは、 <code>&lt;type&gt;</code> が再び必要となり、その後に使用される認証方式によって符号化または暗号化された資格情報が続きます。</p>

<pre class="syntaxbox notranslate">Authorization: &lt;type&gt; &lt;credentials&gt;
Proxy-Authorization: &lt;type&gt; &lt;credentials&gt;
</pre>

<h3 id="Authentication_schemes" name="Authentication_schemes">認証方式</h3>

<p>一般的な HTTP 認証フレームワークは、いくつかの認証方式によって使用されます。スキームはセキュリティ強度とクライアント、またはサーバーソフトウェアでの可用性が異なる場合があります。</p>

<p>最も一般的な認証方式は "Basic" 認証方式であり、これについては以下で詳しく説明します。 IANA は<a class="external external-icon" href="https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml">認証スキームの一覧</a>を管理していますが、 Amazon AWS などのホストサービスが提供する他のスキームもあります。一般的な認証方式には次のものがあります。</p>

<dl>
 <dt><strong>Basic</strong></dt>
 <dd>{{rfc(7617)}} を参照。 base64 でエンコードされた資格情報です。詳しくは後述します。</dd>
 <dt><strong>Bearer</strong></dt>
 <dd>{{rfc(6750)}} を参照。 OAuth 2.0 で保護されたリソースにアクセスするベアラトークンです。</dd>
 <dt><strong>Digest</strong></dt>
 <dd>{{rfc(7616)}} を参照。 Firefox では md5 ハッシュだけに対応しています。 SHA 暗号化の対応については {{bug(472823)}} を参照。</dd>
 <dt><strong>HOBA</strong></dt>
 <dd>{{rfc(7486)}} 3章 を参照、HTTP オリジン認証 (<strong>H</strong>TTP <strong>O</strong>rigin-<strong>B</strong>ound <strong>A</strong>uthentication)、電子署名ベース</dd>
 <dt><strong>Mutual</strong></dt>
 <dd>{{rfc(8120)}} を参照</dd>
 <dt><strong>AWS4-HMAC-SHA256</strong></dt>
 <dd><a href="http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html">AWS docs</a> を参照</dd>
</dl>

<h2 id="Basic_authentication_scheme" name="Basic_authentication_scheme">Basic 認証方式</h2>

<p>"Basic" HTTP 認証方式は {{rfc(7617)}} で定義されており、Base64 を使用してエンコードされたユーザー ID とパスワードのペアとしてクレデンシャルを送信します。</p>

<h3 id="Security_of_basic_authentication" name="Security_of_basic_authentication">Basic 認証の安全性</h3>

<p>ユーザー ID とパスワードはネットワークを介してクリアテキスト (base64 でエンコードされていますが、 base64 は可逆エンコードです) として渡されるため、 Basic 認証方式は<strong>安全ではありません</strong>。 Basic 認証と組み合わせて HTTPS/TLS を使用する必要があります。これらの追加のセキュリティ強化機能がない場合は、機密情報や重要な情報を保護するために Basic 認証を使用しないでください。</p>

<h3 id="Restricting_access_with_Apache_and_basic_authentication" name="Restricting_access_with_Apache_and_basic_authentication">Apache と Basic 認証によるアクセス制限</h3>

<p>Apache サーバー上のディレクトリをパスワードで保護するには、 <code>.htaccess</code> ファイルと <code>.htpasswd</code> ファイルが必要です。</p>

<p><code>.htaccess</code> ファイルは通常、次のようになります。</p>

<pre class="notranslate">AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user</pre>

<p><code>.htaccess</code> ファイルは <code>.htpasswd</code> ファイルを参照し、各行にはユーザー名とパスワードをコロン (":") で区切って記述します。実際のパスワードは<a href="https://httpd.apache.org/docs/2.4/misc/password_encryptions.html">暗号化されている</a> (この場合は md5) ので表示できません。必要に応じて <code>.htpasswd</code> ファイルの名前を変更することができますが、このファイルには誰にもアクセスできないように注意してください。(Apache は通常 <code>.ht*</code> ファイルへのアクセスを禁止するように設定されています)。</p>

<pre class="notranslate">aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
</pre>

<h3 id="Restricting_access_with_nginx_and_basic_authentication" name="Restricting_access_with_nginx_and_basic_authentication">nginx と Basic 認証によるアクセス制限</h3>

<p>nginx の場合は、保護する場所とパスワードで保護された領域に名前を指定する <code>auth_basic</code> ディレクティブを指定する必要があります。<code>auth_basic_user_file</code> ディレクティブは上の Apache の例のように、暗号化されたユーザー資格情報を含む <code>.htpasswd</code> ファイルを指します。</p>

<pre class="notranslate">location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}</pre>

<h3 id="Access_using_credentials_in_the_URL" name="Access_using_credentials_in_the_URL">URL 内の認証情報を使用したアクセス</h3>

<p>多くのクライアントでは次のように、ユーザー名とパスワードを含むエンコードされた URL を使用してログインプロンプトを回避できます。</p>

<pre class="example-bad notranslate">https://username:password@www.example.com/</pre>

<p><strong>これらの URL の使用は推奨されていません。</strong>Chrome ではセキュリティ上の理由から、URL の <code>username:password@</code> 部分も<a href="https://bugs.chromium.org/p/chromium/issues/detail?id=82250#c7">削除されます</a>。 Firefox ではサイトが実際に認証を要求するかどうかをチェックし、そうでない場合 Firefox はユーザーに「"username" というユーザー名で "www.example.com" というサイトにログインしようとしていますが、ウェブサイトは認証を必要としません。これはあなたを騙そうとしている可能性があります。」と警告します。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("WWW-Authenticate")}}</li>
 <li>{{HTTPHeader("Authorization")}}</li>
 <li>{{HTTPHeader("Proxy-Authorization")}}</li>
 <li>{{HTTPHeader("Proxy-Authenticate")}}</li>
 <li>{{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}</li>
</ul>
