---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
tags:
  - Cookies
  - HTTP
  - Reference
  - ヘッダー
  - レスポンス
  - レスポンスヘッダー
translation_of: Web/HTTP/Headers/Set-Cookie
---
<div>{{HTTPSidebar}}</div>

<p><span class="seoSummary"><strong><code>Set-Cookie</code></strong> は HTTP のレスポンスヘッダーで、サーバーからユーザーエージェントへクッキーを送信するために使用され、ユーザーエージェントはそれを後でサーバーに送り返すことができます。</span></p>

<p>詳細については、<a href="/ja/docs/Web/HTTP/Cookies">HTTP クッキーのガイド</a>を参照してください。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>いいえ</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Set-Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;
Set-Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;; Expires=&lt;date&gt;
Set-Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;; Max-Age=&lt;non-zero-digit&gt;
Set-Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;; Domain=&lt;domain-value&gt;
Set-Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;; Path=&lt;path-value&gt;
Set-Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;; Secure
Set-Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;; HttpOnly

Set-Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;; SameSite=Strict
Set-Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;; SameSite=Lax
Set-Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;; SameSite=None

// 以下の例のように、複数のディレクティブも利用することができます。
Set-Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;; Domain=&lt;domain-value&gt;; Secure; HttpOnly
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt><code>&lt;cookie-name&gt;=&lt;cookie-value&gt;</code></dt>
 <dd>クッキーは名前と値の組で始まります。
 <ul>
  <li><code>&lt;cookie-name&gt;</code> は任意の US-ASCII 文字の集合で、制御文字、空白、タブを除いたものです。 <code>( ) &lt; &gt; @ , ; : \ " / [ ] ? = { }</code> のような区切り文字も含めることができません。</li>
  <li><code>&lt;cookie-value&gt;</code> は任意で二重引用符で囲むことができ、制御文字、{{glossary("Whitespace", "ホワイトスペース")}}、二重引用符、カンマ、セミコロン、バックスラッシュを除くすべての US-ASCII 文字が利用できます。 <strong>エンコーディング</strong>: 多くの実装ではクッキーの値に URL エンコーディングを施しますが、 RFC の仕様書では要求されていません。これは &lt;cookie-value&gt; に許可された文字についての要件を満足させるのに役立ちます。</li>
  <li><strong><code>__Secure-</code> の接頭辞</strong>{{non-standard_inline}}: <code>__Secure-</code> (接頭辞にダッシュを含む) で始まるクッキー名は、 <code>secure</code> フラグを設定することが必要で、安全なページ (HTTPS) でなければなりません。</li>
  <li><strong><code>__Host-</code> の接頭辞</strong>{{non-standard_inline}}: <code>__Host-</code> で始まるクッキー名は、 <code>secure</code> フラグを設定し、安全なページ (HTTPS) から読み込む必要があり、ドメインを指定することができず (従ってサブドメインにも送られません)、パスが <code>/</code> である必要があります。</li>
 </ul>
 </dd>
 <dt><code>Expires=&lt;date&gt;</code> {{optional_inline}}</dt>
 <dd>
 <p>クッキーの有効期限で、 HTTP の日時タイムスタンプです。詳細な書式は {{HTTPHeader("Date")}} を参照してください。</p>

 <p>指定されなかった場合は、クッキーは<strong>セッションクッキー</strong>の寿命になります。セッションはクライアントが終了したときに終了するので、セッションクッキーはその時点で削除されます。</p>

 <div class="blockIndicator warning">
 <p><strong>警告:</strong> 多くのウェブブラウザーはセッション復元と呼ばれる機能を持っており、これによってすべてのタブを保存し、次回ブラウザーを起動したときに復元することができます。ブラウザーを実際には閉じていないかのように、セッションクッキーも復元されます。</p>
 </div>

 <p>有効期限が設定されていた場合、期限はサーバーではなく、クッキーが設定されているクライアントからの相対時刻で設定されます。</p>
 </dd>
 <dt><code>Max-Age=&lt;number&gt; </code>{{optional_inline}}</dt>
 <dd>クッキーの期限までの秒数です。ゼロまたは負の数値の場合は、クッキーは直ちに期限切れになります。 <code>Expires</code> および <code>Max-Age</code> の両方が設定されていたら、 <code>Max-Age</code> が優先されます。</dd>
 <dt><code>Domain=&lt;domain-value&gt;</code> {{optional_inline}}</dt>
 <dd>クッキーを送信する先のホストです。
 <ul>
  <li>指定されなかった場合は、既定で現在の文書の URL におけるホスト名の部分になり、サブドメインを含みません。</li>
  <li>初期の仕様書とは逆に、ドメイン名の前のドット (<code>.example.com</code>) は無視されます。</li>
  <li>複数のホストやドメインの値を指定することは<em>できません</em>が、ドメイン<em>が</em>指定された場合、すべてのサブドメインが常に含まれます。</li>
 </ul>
 </dd>
 <dt><code>Path=&lt;path-value&gt;</code> {{optional_inline}}</dt>
 <dd>リクエストの URL に含まれるべきパスです。含まれていないと、ブラウザーは <code>Cookie</code> ヘッダーを送信しません。</dd>
 <dd>スラッシュ ("/") の文字はディレクトリ区切りとして解釈され、サブディレクトリも同様に一致します (例えば <code>Path=/docs</code> であれば、 <code>/docs</code>, <code>/docs/Web/</code>, <code>/docs/Web/HTTP</code> はすべて一致します)。</dd>
 <dt id="Secure"><code>Secure</code> {{optional_inline}}</dt>
 <dd>セキュアクッキーは、リクエストが SSL と HTTPS プロトコルを使用して行われた場合にのみサーバーに送信されます。ただし HTTP クッキーは、例えば情報が暗号化されないなど、安全ではない仕組みを継承しているので、機密な情報や敏感な情報を転送したり格納したりしないようにしてください。
 <p class="note"><strong>メモ:</strong> 安全ではないサイト (<code>http:</code>) は  <code>Secure</code> ディレクティブを付けてクッキーを設定することができなくなりました (Chrome 52 以降および Firefox 52 以降の新機能).</p>
 </dd>
 <dt id="HttpOnly"><code>HttpOnly</code> {{optional_inline}}</dt>
 <dd>JavaScript が {{domxref("Document.cookie")}} プロパティなどを介してこのクッキーにアクセスすることを禁止します。HttpOnly で作成されたクッキーは、JavaScript で開始されたリクエスト、例えば、 {{domxref("XMLHttpRequest.send()")}} や {{domxref("fetch()")}} と共に送信されます。これにより、クロスサイトスクリプティング ({{Glossary("XSS")}}) の攻撃を軽減します。</dd>
 <dt><code>SameSite=&lt;samesite-value&gt;</code> {{optional_inline}}</dt>
 <dd>
 <ul>
  <li><code>Strict</code>: ブラウザは same-site のリクエスト（つまり、クッキーを設定したのと同じサイトから発信されたリクエスト）に対してのみクッキーを送信します。リクエストが現在のURLとは異なるURLから発生した場合、<code>SameSite=Strict</code> 属性を持つクッキーは送信されません。</li>
  <li><code>Lax</code>: 画像やフレームをロードするための呼び出しなどのクロスサイトサブリクエストではクッキーが抑止されますが、ユーザーがリンクをクリックするなどして外部サイトからURLに移動すると送信されます。</li>
  <li><code>None</code>: ブラウザはクロスサイトと same-site の両方のリクエストでクッキーを送信します。</li>
 </ul>

 <p>クッキーがオリジン間リクエストで送信されないことを主張することで、クロスサイトリクエストフォージェリ攻撃 ({{Glossary("CSRF")}}) に対していくらか防御することができます。</p>

 <p class="note">ブラウザーは <a href="https://www.chromestatus.com/feature/5088147346030592">クッキーに <code>SameSite=Lax</code> の既定値</a>を持たせるよう移行しつつあります。オリジンをまたいでクッキーを送信する必要がある場合、 <code>None</code> ディレクティブを用いて SameSite の制約を外してください。 <code>None</code> ディレクティブは <a href="#Secure"><code>Secure</code></a> 属性を必要とします。</p>
 </dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Session_cookie" name="Session_cookie">セッションクッキー</h3>

<p><strong>セッションクッキー</strong>はクライアントが終了したときに削除されます。 <code>Expires</code> や <code>Max-Age</code> ディレクティブを指定しないとクッキーはセッションクッキーになります。</p>

<pre class="notranslate">Set-Cookie: sessionId=38afes7a8</pre>

<h3 id="Permanent_cookie" name="Permanent_cookie">永続的クッキー</h3>

<p><strong>永続的クッキー</strong>は、クライアントが終了したときに期限切れにならず、特定の期限 (<code>Expires</code>) または特定の時間が過ぎた後 (<code>Max-Age</code>) に期限切れになります。</p>

<pre class="notranslate">Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
</pre>

<pre class="notranslate">Set-Cookie: id=a3fWa; Max-Age=2592000</pre>

<h3 id="Invalid_domains" name="Invalid_domains">不正なドメイン</h3>

<p>オリジンのサーバーを含まないドメインに所属するクッキーは、<a href="https://tools.ietf.org/html/rfc6265#section-4.1.2.3">ユーザーエージェントが拒否します</a>。</p>

<p>次のクッキーは <code>originalcompany.com</code> でホストされたサーバーから設定しようとすると拒否されます。</p>

<pre class="notranslate">Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk</pre>

<p>提供するドメインのサブドメインへのクッキーは拒否されます。</p>

<p>以下のクッキーは、 <code>example.com</code> にホスティングされたサーバーからセットされた場合は拒否されます。</p>

<pre class="notranslate">Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com</pre>

<h3 id="Cookie_prefixes" name="Cookie_prefixes">クッキーの接頭辞</h3>

<p><code>__Secure-</code> または <code>__Host-</code> の接頭辞が付いたクッキー名は、安全な (HTTPS の) オリジンから <code>secure</code> ディレクティブを設定した場合のみ使用することができます。</p>

<p>加えて、 <code>__Host-</code> の接頭辞が付いたクッキーは、 <code>/</code> (ホストの任意のパスという意味) を持つ必要があり、 <code>Domain</code> ディレクティブを持つことができません。</p>

<div class="blockIndicator warning">
<p>クッキーの接頭辞を実装していないクライアントでは、これらの保証を受けることができず、クッキーは常に受け入れられます。</p>
</div>

<pre class="notranslate">// どちらも安全な (HTTPS の) オリジンから受け入れられます
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

// Secure ディレクティブが無いため、拒否されます
Set-Cookie: __Secure-id=1

// Path=/ ディレクティブが無いため、拒否されます
Set-Cookie: __Host-id=1; Secure

// Domain を設定したため、拒否されます
Set-Cookie: __Host-id=1; Secure; Path=/; Domain=example.com
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">題名</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{RFC("6265", "Set-Cookie", "4.1")}}</td>
   <td>HTTP State Management Mechanism</td>
  </tr>
  <tr>
   <td><a href="https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-02">draft-ietf-httpbis-rfc6265bis-02</a></td>
   <td>Cookie Prefixes, Same-Site Cookies, and Strict Secure Cookies</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Set-Cookie")}}</p>

<h2 id="Compatibility_notes" name="Compatibility_notes">互換性のメモ</h2>

<ul>
 <li>Chrome 52 および Firefox 52 以降、セキュリティで保護されていないサイト (<code>http:</code>) では、 "secure" ディレクティブ付きでクッキーを設定することはできなくなりました。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/Cookies">HTTP クッキー</a></li>
 <li>{{HTTPHeader("Cookie")}}</li>
 <li>{{domxref("Document.cookie")}}</li>
</ul>
