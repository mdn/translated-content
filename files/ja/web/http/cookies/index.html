---
title: HTTP Cookie の使用
slug: Web/HTTP/Cookies
tags:
  - Cookies
  - Guide
  - HTTP
  - JavaScript
  - ウェブ開発
  - ガイド
  - クッキー
  - サーバー
  - ストレージ
  - プライバシー
  - プロトコル
  - リクエスト
  - 追跡
translation_of: Web/HTTP/Cookies
---
<div>{{HTTPSidebar}}</div>

<p class="summary"><span class="seoSummary"><dfn>HTTP Cookie</dfn> (ウェブ Cookie、ブラウザー Cookie) は、サーバーがユーザーのウェブブラウザーに送信する小さなデータであり、ブラウザーに保存され、その後のリクエストと共に同じサーバーへ返送されます。</span>一般的には、二つのリクエストが同じブラウザーから送信されたものであるかを知るために使用されます。例えば、ユーザーのログイン状態を維持することができます。Cookie は、<a href="/ja/docs/Web/HTTP/Overview#HTTP_is_stateless_but_not_sessionless">ステートレス</a>な HTTP プロトコルのためにステートフルな情報を記憶します。</p>

<p>Cookie は主に、以下の 3 つの用途で使用されます。</p>

<dl>
 <dt>セッション管理</dt>
 <dd>ログイン、ショッピングカート、ゲームのスコア、またはその他のサーバーが覚えておくべきもの</dd>
 <dt>パーソナライゼーション</dt>
 <dd>ユーザー設定、テーマ、その他の設定</dd>
 <dt>トラッキング</dt>
 <dd>ユーザーの行動の記録及び分析</dd>
</dl>

<p>Cookie は、クライアント側の汎用的な記憶領域として使用されたことがあります。これは他にクライアントへデータを保存する手段がなかった頃は合理的でしたが、現在では新しいストレージ API を使用することが推奨されています。 Cookie はすべてのリクエストで送信されるので、 (特にモバイルデータ通信で) 性能を悪化させる可能性があります。クライアントストレージ向けの新しい API として、<a href="/ja/docs/Web/API/Web_Storage_API" title="DOM Storage">Web Storage API</a> (<code>localStorage</code> および <code>sessionStorage</code>) と <a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a> があります。</p>

<div class="note">
<p>保存された Cookie (およびウェブページが使用できる他のストレージ) を確認するには、開発ツールの<a href="/ja/docs/Tools/Storage_Inspector">ストレージインスペクター</a>を有効化して、ストレージのツリーで Cookie を選択してください。</p>
</div>

<h2 id="Creating_cookies" name="Creating_cookies">Cookie の作成</h2>

<p>HTTP リクエストを受け取った後、サーバーはレスポンスで {{HTTPHeader("Set-Cookie")}} ヘッダーを送信することができます。通常 Cookie はブラウザーに保存され、また Cookie は同じサーバーに対して行われるリクエストと共に HTTP の {{HTTPHeader("Cookie")}} ヘッダーの中で送信されます。有効期限や期間を設定することができ、その後は Cookie が送信されなくなります。特定のドメインやパスへの追加の制約を設定することができ、Cookie をどこに送信するかを制限することができます。以下で言及されているヘッダー属性の詳細については、 {{HTTPHeader("Set-Cookie")}} のリファレンス記事を参照してください。</p>

<h3 id="The_Set-Cookie_and_Cookie_headers" name="The_Set-Cookie_and_Cookie_headers"><code>Set-Cookie</code> ヘッダーと <code>Cookie</code> ヘッダー</h3>

<p>HTTP の {{HTTPHeader("Set-Cookie")}} レスポンスヘッダーは、サーバーがユーザーエージェントへ Cookie を送信するために使用します。単純な Cookie は次のように設定されます。</p>

<pre class="syntaxbox notranslate">Set-Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;</pre>

<p>これは、サーバーからクライアントへ Cookie の組み合わせを保存するよう指示することを表します。</p>

<pre class="notranslate">HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[ページの内容]</pre>

<p id="The_client_sends_back_to_the_server_its_cookies_previously_stored">また、そのサーバーへのその後のすべてのリクエストにおいて、ブラウザーは以前格納されたすべてのクッキーを、 {{HTTPHeader("Cookie")}} ヘッダーを使用してサーバーへ送信します。</p>

<pre class="notranslate">GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry</pre>

<div class="note"><strong>注:</strong> 様々なサーバー側アプリケーションにおける <code>Set-Cookie</code> ヘッダーの使い方を紹介します。

<ul>
 <li><a href="https://secure.php.net/manual/ja/function.setcookie.php">PHP</a></li>
 <li><a href="https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_response_setheader_name_value">Node.JS</a></li>
 <li><a href="https://docs.python.org/3/library/http.cookies.html">Python</a></li>
 <li><a href="https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html">Ruby on Rails</a></li>
</ul>
</div>

<h3 id="Define_the_lifetime_of_a_cookie" name="Define_the_lifetime_of_a_cookie">Cookie の持続時間の定義</h3>

<p>Cookie の持続時間は2通りの方法で定義することができます。</p>

<ul>
 <li><em>セッション</em> Cookie は現在のセッションが終了すると削除されます。ブラウザーはいつ「現在のセッション」が終わったと見なすかを定義し、ブラウザーによっては再起動時に<em>セッションの復元</em>を使用するため、セッションクッキーが無期限に持続することがあります。</li>
 <li><em>持続的</em> Cookie は、 <code>Expires</code> 属性で指定された時刻、または <code>Max-Age</code> で指定された期間が経過した後に削除されます。</li>
</ul>

<p>例を示します。</p>

<pre class="notranslate">Set-Cookie: id=a3fWa; Expires=Wed, 31 Oct 2021 07:28:00 GMT;</pre>

<div class="note">
<p><strong>注</strong>: <code>Expires</code> の日付を設定した場合、設定された日時はサーバーではなく、Cookie が設定されるクライアントの日時に関連します。</p>
</div>

<p>サイトがユーザーを認証する場合、ユーザーが認証するたびに、すでに存在するセッションクッキーも含めて、セッションクッキーを再生成して再送する必要があります。この手法は、第三者がユーザーのセッションを再利用する<a href="/ja/docs/Web/Security/Types_of_attacks#Session_fixation">セッション固定攻撃</a>を防ぐのに役立ちます。</p>

<h3 id="Restrict_access_to_cookies" name="Restrict_access_to_cookies">Cookie へのアクセス制限</h3>

<p>クッキーが安全に送信され、意図しない第三者やスクリプトからアクセスされないようにするには、 <code>Secure</code> 属性と <code>HttpOnly</code> 属性の2つの方法があります。</p>

<p><code>Secure</code> 属性がついたクッキーは HTTPS プロトコル上の暗号化されたリクエストでのみサーバーに送信され、安全でない HTTP では決して送信されないため、{{Glossary("MitM", "中間者")}}攻撃者が簡単にアクセスすることはできません。(URL に <code>http:</code> を含む) 安全でないサイトは、 <code>Secure</code> 属性を使用してクッキーを設定することができません。ただし、<code>Secure</code> によってクッキー内の機密情報へのアクセスをすべて防げると思ってはいけません。例えば、クライアントのハードディスクへアクセスすることで読み取られる可能性があります。</p>

<p><code>HttpOnly</code> 属性を持つクッキーは、JavaScript の {{domxref("Document.cookie")}} API にはアクセスできません。サーバーに送信されるだけです。例えば、サーバー側のセッションを持続させるクッキーは JavaScript が利用する必要はないので、 <code>HttpOnly</code> 属性をつけるべきです。この予防策は、クロスサイトスクリプティング (<a href="/ja/docs/Web/Security/Types_of_attacks#Cross-site_scripting_(XSS)">XSS</a>) 攻撃を緩和するのに役立ちます。</p>

<p>例を示します。</p>

<pre class="notranslate">Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly</pre>

<h3 id="Define_where_cookies_are_sent" name="Define_where_cookies_are_sent">Cookie の送信先の定義</h3>

<p><code>Domain</code> および <code>Path</code> 属性は、Cookie の<em>スコープ</em>、つまり Cookie を送信する対象の URL を定義します。</p>

<h4 id="Domain_attribute" name="Domain_attribute">Domain 属性</h4>

<p><code>Domain</code> 属性は、Cookie を受信することができるホストを指定します。指定されていない場合は、既定でクッキーを設定したのと同じ{{Glossary("origin", "オリジン")}}となり、<em>サブドメインは除外されます</em>。 <code>Domain</code> が指定された場合、サブドメインは常に含まれます。したがって、 <code>Domain</code> を指定すると省略時よりも制限が緩和されます。ただし、サブドメイン間でユーザーに関する情報を共有する場合は有用になるでしょう。</p>

<p>例えば、<code>Domain=mozilla.org</code> を設定すると、<code>developer.mozilla.org</code> のようなサブドメインも含まれます。</p>

<h4 id="Path_attribute" name="Path_attribute">Path 属性</h4>

<p><code>Path</code> 属性は、 <code>Cookie</code> ヘッダーを送信するためにリクエストされた URL の中に含む必要がある URL のパスを示します。 <code>%x2F</code> ("/") の文字はディレクトリ区切り文字として解釈され、サブディレクトリにも同様に一致します。</p>

<p>例えば、<code>Path=/docs</code> を設定すると、以下のパスに一致します。</p>

<ul>
 <li><code>/docs</code></li>
 <li><code>/docs/Web/</code></li>
 <li><code>/docs/Web/HTTP</code></li>
</ul>

<h4 id="SameSite_attribute" name="SameSite_attribute">SameSite 属性</h4>

<p><code>SameSite</code> 属性により、サーバーがオリジン間リクエスト (ここで{{Glossary("Site", "サイト")}}は登録可能なドメインによって定義されます) と一緒にクッキーを送るべきではないことを要求することができます。これは、クロスサイトリクエストフォージェリ攻撃 ({{Glossary("CSRF")}}) に対していくらかの防御となります。</p>

<p>取ることができる値は <code>Strict</code>, <code>Lax</code>, <code>None</code> の3つです。 <code>Strict</code> では、クッキーはそれが発生したものと同じサイトに対してのみ送信されます。 <code>Lax</code> も似ていますが、ユーザーがリンクをたどるなど、外部のサイトからある URL に移動した場合は除きます。 <code>None</code> はサイト間リクエストの制限はありません。</p>

<p>次に例を示します。</p>

<pre class="notranslate">Set-Cookie: mykey=myvalue; SameSite=Strict</pre>

<p><code>SameSite</code> 属性の値は大文字小文字の区別はありません。</p>

<div class="blockIndicator note">
<p>ブラウザーは<a href="https://www.chromestatus.com/feature/5088147346030592">クッキーの既定値を <code>SameSite=Lax</code> にする</a>ように移行しつつあります。 Cookie をオリジン間で送信する必要がある場合は、 <code>None</code> ディレクティブを使って SameSite の制限を解除してください。<code>None</code> ディレクティブは <a href="#Secure_and_HttpOnly_cookies"><code>Secure</code></a> 属性を必要とします。</p>
</div>

<h4 id="Cookie_prefixes" name="Cookie_prefixes">Cookie の接頭辞</h4>

<p>Cookie の仕組みの設計では、クッキーが安全なオリジンに設定されているかどうか、クッキーが当初は<em>どこに</em>設定されたのかをサーバーが確認することができないようになっています。</p>

<p>サブドメイン上にある脆弱性のあるアプリケーションが <code>Domain</code> 属性を使用してクッキーを設定すると、ほかのすべてのサブドメインでクッキーにアクセスできるようにすることができます。この仕組みは<em>セッション固定</em>攻撃で悪用される可能性があります。主な対策方法は<a href="/ja/docs/Web/Security/Types_of_attacks#Session_fixation">セッション固定化</a>を参照してください。</p>

<p>しかし、<a href="https://ja.wikipedia.org/wiki/%E5%A4%9A%E5%B1%A4%E9%98%B2%E5%BE%A1_(%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3)">多層防御</a>として、 Cookie に関する特定の事実を主張するために <em>Cookie の接頭辞</em>を使うことが可能です。以下の二つの接頭辞が利用可能です。</p>

<dl>
 <dt><code>__Host-</code></dt>
 <dd>Cookie 名にこの接頭辞がついている場合、 {{HTTPHeader("Set-Cookie")}} ヘッダーが受け入れられるのは <code>Secure</code> 属性で指定されており、安全なオリジンから送信されており、 <code>Domain</code> 属性を含んで<em>おらず</em>、 <code>Path</code> 属性が <code>/</code> に設定されている場合のみです。この場合、これらの Cookie は「ドメインにロックされている」と見なすことができます。</dd>
 <dt><code>__Secure-</code></dt>
 <dd>Cookie 名にこの接頭辞がある場合、 {{HTTPHeader("Set-Cookie")}} ディレクティブが受け入れられるのは、 <code>Secure</code> であり、安全なオリジンから送信されている場合のみです。これは <code>__Host-</code> 接頭辞よりも弱いものです。</dd>
</dl>

<p>これらの接頭辞が付いていて、制約に適合していないクッキーは、送られてもブラウザーが拒否します。これにより、仮にサブドメインで接頭辞の付いた Cookie を作成した場合、サブドメインに限定されるか、完全に無視されるかします。アプリケーションサーバーは、ユーザーが認証されているか、あるいは CSRF トークンが正しいかどうかを判断するときに、特定の Cookie 名をチェックするだけなので、これはセッションの固定化に対する防御手段として効果的に機能します。</p>

<div class="note">
<p>アプリケーションサーバ上では、ウェブアプリケーションは接頭辞を含む完全な Cookie 名をチェック<em>しなければなりません</em>。—ユーザーエージェントは、リクエストの {{HTTPHeader("Cookie")}} ヘッダーを送信する前に Cookie から接頭辞を削除<em>しません</em>。</p>
</div>

<p>Cookie の接頭辞とブラウザー対応の現在の状態については、 <a href="/ja/docs/Web/HTTP/Headers/Set-Cookie#Cookie_prefixes">Set-Cookie リファレンス記事の接頭辞の節</a>を参照してください。</p>

<h4 id="JavaScript_access_using_Document.cookies" name="JavaScript_access_using_Document.cookies">JavaScript でDocument.cookies を使用してアクセスする</h4>

<p>{{domxref("Document.cookie")}} プロパティを使用して新しい Cookie を作成することができますし、 <code>HttpOnly</code> フラグが設定されていない限り、既存の Cookie に JavaScript からアクセスすることもできます。</p>

<pre class="brush: js notranslate">document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
console.log(document.cookie);
// "yummy_cookie=choco; tasty_cookie=strawberry" をログに記録</pre>

<p>JavaScript で生成された Cookie は <code>HttpOnly</code> フラグを含むことができません。</p>

<p>後述する<a href="/ja/docs/Web/HTTP/Cookies#Security">セキュリティ</a>の節に記載したとおり、セキュリティの影響に注意してください。JavaScript で使用できる Cookie は、XSS によって盗まれる可能性があります。</p>

<h2 id="Security" name="Security">セキュリティ</h2>

<div class="note">
<p>情報をクッキーに保存するときは、すべてのクッキーの値がエンドユーザーから見え、変更できることを理解しておいてください。アプリケーションによっては、サーバー側で検索される不透明な識別子を使用するか、 JSON ウェブトークンのような代替の認証/機密性メカニズムを調べたほうが良いかもしれません。</p>
</div>

<p>クッキーへの攻撃を緩和する方法には次のようなものがあります。</p>

<ul>
 <li><code>HttpOnly</code> 属性を使用して、 JavaScript からクッキーの値にアクセスすることを防ぎます。</li>
 <li>機密情報 (認証を示す場合など) のために使用されたクッキーは、持続時間を短く、 <code>SameSite</code> 属性を <code>Strict</code> または <code>Lax</code> に設定してください。 (上記の <a href="#">SameSite Cookie</a> を参照。) <a href="/ja/docs/Web/HTTP/Headers/Set-Cookie#Browser_compatibility">SameSite に対応しているブラウザー</a>では、これは、認証クッキーがオリジン間リクエストと一緒に送信されないようにする効果があるので、そのようなリクエストはそのアプリケーションサーバーに対して事実上認証されていないことになります。</li>
</ul>

<h2 id="Tracking_and_privacy" name="Tracking_and_privacy">トラッキングとプライバシー</h2>

<h3 id="Third-party_cookies" name="Third-party_cookies">サードパーティの Cookie</h3>

<p>Cookie はドメインに関連付けられます。このドメインが閲覧しているページのドメインと同じである場合、そのクッキーは、<em>ファーストパーティ Cookie</em> と呼ばれます。ドメインが異なる場合は、<em>サードパーティ Cookie</em> と呼びます。ウェブページをホスティングしているサーバーがファーストパーティ Cookie を設定する一方で、ページには他のドメインのサーバーに保存されている画像やその他のコンポーネント (例えば、広告バナー) が含まれている場合があり、サードパーティクッキーが設定されることがあります。これらは主にウェブ上での広告やトラッキングに使用されます。例えば <a href="https://policies.google.com/technologies/types">Google が使用している Cookie の種類</a>を参照してください。サードパーティのサーバーは、複数のサイトにアクセスした際に同じブラウザから送信されたクッキーに基づいて、ユーザーの閲覧履歴や習慣のプロファイルを構築することができます。 Firefox は既定で、トラッカーを含むことが知られているサードパーティのクッキーをブロックします。サードパーティのクッキー (またはトラッキングクッキー) は、他のブラウザーの設定や拡張機能によってもブロックされる場合があります。クッキーをブロックすると、一部のサードパーティ製コンポーネント (ソーシャルメディアウィジェットなど) が意図した通りに機能しなくなることがあります。</p>

<h3 id="Cookie-related_regulations" name="Cookie-related_regulations">Cookie に関する規制</h3>

<p>クッキーの使用を対象とした法規制には、以下のようなものがあります。</p>

<ul>
 <li>EU の 一般データ保護規則 (GDPR)</li>
 <li>EU の ePrivacy 指令</li>
 <li>カリフォルニア州消費者プライバシー法</li>
</ul>

<p>これらの規制は、これらの管轄区域 (EUとカリフォルニア州、特にカリフォルニア州の法律は総収入が2,500万ドルを超える事業体にのみ適用されるという注意事項がある) のユーザーがアクセスする<em>ワールドワイド</em>ウェブ上のあらゆるサイトに適用されるため、世界的な広がりを持っています。</p>

<p>これらの規制の要件には次のようなものがあります。</p>

<ul>
 <li>サイトがクッキーを使用することをユーザーに通知する。</li>
 <li>ユーザーが一部またはすべてのクッキーをオプトアウトできるようにする。</li>
 <li>ユーザーがクッキーを受け取らなくても、サービスの大部分を利用できるようにする。</li>
</ul>

<p>地域によっては、他にもクッキーの使用を管理する規制があるかもしれません。これらの規制を理解し遵守することは、自分自身の責任となります。これらの規制を遵守するのに役立つ「クッキー禁止」コードを提供している会社もあります。</p>

<h2 id="Other_ways_to_store_information_in_the_browser" name="Other_ways_to_store_information_in_the_browser">ブラウザーに情報を格納する他の方法</h2>

<p>ブラウザーにデータを保存する別のアプローチとして、 <a href="/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API">Web Storage API</a> があります。 <a href="/ja/docs/Web/API/Window/sessionStorage">window.sessionStorage</a> と <a href="/ja/docs/Web/API/Window/localStorage">window.localStorage</a> プロパティはセッションクッキーと持続的クッキーに対応していますが、ストレージの容量制限がクッキーより大きく、サーバーに送信されることはありません。より構造化された大量のデータは、 <a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB API</a> またはその上に構築されたライブラリを使用して保存することができます。</p>

<p>「ゾンビ」クッキーと呼ばれる、クッキーが削除された後に再作成されるようにするための他の技術が作成されています。これらの技術は、ユーザーのプライバシーとユーザー制御の原則に違反し、データプライバシー規制に違反する可能性があり、これらの技術を使用しているウェブサイトが法的責任にさらされる可能性があります。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Set-Cookie")}}</li>
 <li>{{HTTPHeader("Cookie")}}</li>
 <li>{{domxref("Document.cookie")}}</li>
 <li>{{domxref("Navigator.cookieEnabled")}}</li>
 <li><a href="/ja/docs/Tools/Storage_Inspector">ストレージインスペクターを使った Cookie の調査</a></li>
 <li><a class="external" href="https://tools.ietf.org/html/rfc6265">Cookie specification: RFC 6265</a></li>
 <li><a href="https://en.wikipedia.org/wiki/HTTP_cookie">HTTP cookie on Wikipedia</a></li>
 <li><a href="https://gdpr.eu/cookies/">Cookies, the GDPR, and the ePrivacy Directive</a></li>
</ul>
