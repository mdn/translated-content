---
title: ウェブセキュリティ
slug: Web/Security
tags:
  - Landing
  - Security
  - Web
  - セキュリティ
translation_of: Web/Security
---
<div class="summary">
<p>ウェブサイトや公開ウェブアプリケーションが安全であることを保証するのは重要なことです。コードの中の単純なバグが、個人情報の漏洩という結果を招くことがありますし、データを盗む方法を見つけようとしている悪い輩があちこちにいます。<span class="seoSummary">以下に紹介するセキュリティ方面の記事では、コードの安全性を確保する際に助けとなる情報を提供しています。</span></p>
</div>

<h2 id="Content_security" name="Content_security">コンテンツセキュリティ</h2>

<dl>
 <dt><a href="/ja/docs/Web/HTTP/CSP">コンテンツセキュリティポリシー (CSP)</a></dt>
 <dd><strong>コンテンツセキュリティポリシー</strong> ({{Glossary("CSP")}}) は、クロスサイトスクリプティング ({{Glossary("XSS")}}) やデータインジェクション攻撃などのような、特定の種類の攻撃を検知し、影響を軽減するために追加できるセキュリティレイヤーです。これらの攻撃はデータの窃取からサイトの改ざん、マルウェアの拡散に至るまで、様々な目的に用いられます。</dd>
</dl>

<h2 id="Connection_security" name="Connection_security">コネクションセキュリティ</h2>

<dl>
 <dt><a href="/ja/docs/Web/Security/Transport_Layer_Security">Transport layer security (TLS)</a></dt>
 <dd>Transport Layer Security ({{Glossary("TLS")}}) プロトコルは、ネットワークで結ばれた二つのアプリケーションや端末が、私的にかつ強固に情報交換するための標準です。TLS を使用するアプリケーションは、セキュリティ引数を選択することができ、これは、データのセキュリティと信頼性に大きな影響を与える可能性があります。この記事では、TLS の概要と、コンテンツを保護するために必要な決定の種類について説明します。</dd>
 <dt>HTTPS</dt>
 <dd><strong>HTTPS</strong> (<strong><em>HyperText Transfer Protocol Secure</em></strong>) は、{{Glossary("HTTP")}} プロトコルの暗号化バージョンです。{{Glossary("SSL")}} または {{Glossary("TLS")}} を使用して、クライアントとサーバー間のすべての通信を暗号化します。この安全な接続により、クライアントは意図したサーバーに接続されていることを確認し、機密データを交換することができます。</dd>
 <dt><a href="/ja/docs/Web/HTTP/Headers/Strict-Transport-Security">HTTP Strict-Transport-Security</a></dt>
 <dd><code>Strict-Transport-Security:</code> は <a href="/ja/docs/Web/HTTP">HTTP</a> のヘッダーで、ウェブサイトを HTTPS を使用してのみアクセスできるようにするものです。</dd>
 <dt><a href="/ja/docs/Web/Security/Certificate_Transparency">電子証明書の透明性</a></dt>
 <dd><strong>電子証明書の透明性</strong>は、証明書の誤発行を防止し、監視するために設計されたオープンなフレームワークです。新しく発行された証明書は、公開されている、多くの場合独立した CT ログに「記録」され、発行された TLS 証明書の追加のみの暗号的に保証された記録を維持します。</dd>
 <dt><a href="/ja/docs/Web/Security/Mixed_content">混在コンテンツ</a></dt>
 <dd>HTTPS のページの中に通常の平文の HTTP で送られてくるコンテンツが含まれている場合、<strong>混在コンテンツ</strong>と呼ばれます。このようなページは部分的にしか暗号化されておらず、盗聴者や中間者攻撃者が暗号化されていないコンテンツにアクセスできてしまいます。</dd>
 <dt><a href="/ja/docs/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content">混在コンテンツでブロックされるウェブサイトを修正するには</a></dt>
 <dd>ウェブサイトを HTTPS で配信している場合、ページ上にある <a href="/ja/docs/Web/Security/Mixed_content#Mixed_active_content">能動的な混在コンテンツ</a>はすべて既定でブロックされます。結果として、ユーザーからはそのウェブサイトが壊れているように見えるかもしれません (iframe やプラグインが読み込まれないなど)。一方、<a href="/ja/docs/Web/Security/Mixed_content/#Mixed_passivedisplay_content">受動的な混在コンテンツ</a>は既定で表示されますが、このようなコンテンツをブロックするようにユーザーが設定することも可能です。このページでは、ウェブ開発者として知っておくべきことを説明します。</dd>
 <dt><a href="/ja/docs/Web/Security/Secure_Contexts">安全なコンテキスト</a></dt>
 <dd><strong>安全なコンテキスト (Secure Context)</strong> とは、(HTTPS/TLS を介して) コンテンツが安全に配信され、安全<strong>ではない</strong>コンテキストとの通信の可能性が限られているという合理的な確信がある <code>Window</code>、または <code>Worker</code> のことです。多くの Web API が安全なコンテキストでのみ利用可能です。安全なコンテキストの主目的は、{{interwiki("wikipedia", "中間者攻撃", "中間者攻撃者")}}が被害者に更なる危険にさらす可能性がある強力な API にアクセスするのを防ぐことにあります。</dd>
 <dt><a href="/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts">安全なコンテキストに制限されている機能</a></dt>
 <dd>このリファレンスは、安全なコンテキストでのみ使用できるウェブプラットフォーム機能の一覧です。</dd>
 <dt><a href="/ja/docs/Web/Security/Weak_Signature_Algorithm">脆弱な署名アルゴリズム</a></dt>
 <dd>{{Glossary("Digital certificate", "デジタル証明書")}}の{{Glossary("Signature/Security", "電子署名")}}に用いられるハッシュアルゴリズムの強度は、証明書のセキュリティにおいて核心的な要素です。この記事では、脆弱になったため、可能であれば避けるものと知られている署名アルゴリズムについて、いくらかの情報を提供します。</dd>
 <dt>301 および 302 レスポンスコードによるリダイレクト</dt>
 <dd>執筆予定</dd>
</dl>

<h2 id="Data_security" name="Data_security">データセキュリティ</h2>

<dl>
 <dt><a href="/ja/docs/Web/HTTP/Cookies">HTTP Cookie の使用</a></dt>
 <dd><dfn>HTTP Cookie</dfn> (ウェブ Cookie、ブラウザー Cookie) は、サーバーがユーザーのウェブブラウザーに送信する小さなデータであり、ブラウザーに保存されて次のリクエストと共に同じサーバーへ返送されます。一般的には、二つのリクエストが同じブラウザーから送信されたものであるかを知るために使用されます。例えば、ユーザーのログイン状態を維持することができます。</dd>
 <dt><a href="/ja/docs/Web/API/Window/localStorage">ローカルストレージ</a></dt>
 <dd><code>Window</code> オブジェクトの {{domxref("Window.localStorage")}} プロパティは、サーバーがクライアントにセッションを通して存在するデータを格納する一つの手段です。</dd>
</dl>

<h2 id="Information_leakage" name="Information_leakage">情報漏洩</h2>

<dl>
 <dt><a href="/ja/docs/Web/Security/Referer_header:_privacy_and_security_concerns">Referer ヘッダーのプライバシーとセキュリティの考慮事項</a></dt>
 <dd><a href="/ja/docs/Web/HTTP/Headers/Referer">HTTP の Referer ヘッダー</a>にまつわるプライバシーとセキュリティのリスクがあります。この記事ではこれらを説明し、これらのリスクを回避するためのアドバイスを提案します。</dd>
 <dt>Robots.txt</dt>
 <dd>執筆予定</dd>
 <dt>Site maps</dt>
 <dd>執筆予定</dd>
</dl>

<h2 id="Integrity" name="Integrity">完全性</h2>

<dl>
 <dt><a href="/ja/docs/Web/Security/Same-origin_policy">同一オリジンポリシー</a></dt>
 <dd><strong>同一オリジンポリシー</strong>とは、あるオリジンから読み込まれた文書やスクリプトについて、そのリソースから他の{{Glossary("origin", "オリジン")}}のリソースにアクセスできないように制限するものです。同一オリジンポリシーはウェブのセキュリティにおける重要な仕組みであり、悪意ある行動を起こしかねないリソースの分離を目的としています。</dd>
 <dt><a href="/ja/docs/Web/Security/Subresource_Integrity">サブリソース完全性</a></dt>
 <dd><ruby><strong>サブリソース完全性</strong><rp> (</rp><rt>Subresource Integrity</rt><rp>)</rp></ruby> (SRI) は、({{Glossary("CDN")}} などから) 取得したリソースが意図せず改ざんされていないかをブラウザーが検証するセキュリティ機能です。SRI を利用する際には、取得したリソースのハッシュ値と一致すべきハッシュ値を指定します。</dd>
 <dt><a href="/ja/docs/Web/HTTP/Headers/Access-Control-Allow-Origin">HTTP の Access-Control-Allow-Origin</a></dt>
 <dd><code><strong>Access-Control-Allow-Origin</strong></code> レスポンスヘッダーは、指定された{{glossary("origin", "オリジン")}}からのリクエストを行うコードでレスポンスが共有できるかどうかを示します。</dd>
 <dt><a href="/ja/docs/Web/HTTP/Headers/X-Content-Type-Options">HTTP X-Content-Type-Options</a></dt>
 <dd>
 <p><code><strong>X-Content-Type-Options</strong></code> は HTTP のレスポンスヘッダーで、{{HTTPHeader("Content-Type")}} ヘッダーで示された <a href="/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME タイプ</a>を変更せずに従うべきであることを示すために、サーバーによって使用されるマーカーです。これにより、<a href="/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types#MIME_sniffing">MIME タイプのスニッフィング</a>を抑止することができます。すなわち、Web マスターが自分が何をしているかを分かっていると言う手段です。</p>
 </dd>
</dl>

<h2 id="Clickjacking_protection" name="Clickjacking_protection">クリックジャックからの保護</h2>

<p id="sect1">クリックジャッキングでは、ユーザーがだまされて、ユーザーが期待するもの以外のアクションを実行するUI要素をクリックします。</p>

<dl>
 <dt><a href="/ja/docs/Web/HTTP/Headers/X-Frame-Options">HTTP X-Frame-Options</a></dt>
 <dd><strong><code>X-Frame-Options</code></strong> <a href="/ja/docs/Web/HTTP">HTTP</a> レスポンスヘッダーを使用して、ブラウザーが <a href="/ja/docs/Web/HTML/Element/frame" title="&lt;frame> is an HTML element which defines a particular area in which another HTML document can be displayed. A frame should be used within a &lt;frameset>."><code>&lt;frame&gt;</code></a>, <a href="/ja/docs/Web/HTML/Element/iframe" title="The HTML Inline Frame element (&lt;iframe>) represents a nested browsing context, embedding another HTML page into the current one."><code>&lt;iframe&gt;</code></a>, <a href="/ja/docs/Web/HTML/Element/embed" title="The HTML &lt;embed> element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in."><code>&lt;embed&gt;</code></a> または <a href="/ja/docs/Web/HTML/Element/object" title="The HTML &lt;object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin."><code>&lt;object&gt;</code></a> でページをレンダリングできるかどうかを示すことができます。サイトはこれを使用してコンテンツが他のサイトに埋め込まれないようにすることで、クリックジャッキング攻撃を回避できます。</dd>
 <dt><a href="/ja/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors">CSP: frame-ancestors</a></dt>
 <dd>HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) <code><strong>frame-ancestors</strong></code> ディレクティブは、 {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}}, または {{HTMLElement("applet")}} を使用して、ページを埋め込むことができる有効な親を指定します。</dd>
</dl>

<h2 id="User_information_security" name="User_information_security">ユーザー情報セキュリティ</h2>

<dl>
 <dt><a href="/ja/docs/Web/Security/Insecure_passwords">安全でないパスワード</a></dt>
 <dd>HTTP 経由でログインフォームを送信することは、ユーザのパスワードを抽出するために使用できる様々な攻撃があるため、特に危険です。ネットワーク盗聴者は、ネットワークを盗聴したり、転送中に提供されたページを変更したりすることで、ユーザのパスワードを盗むことができます。</dd>
 <dt><a href="/ja/docs/Web/CSS/Privacy_and_the_:visited_selector">プライバシーと :visited セレクター</a></dt>
 <dd>2010年頃までは、<a href="/ja/docs/Web/CSS">CSS</a> {{cssxref(":visited")}} セレクターにより、ウェブサイトがユーザーの閲覧履歴を明らかにし、そのユーザーがどのサイトを訪問したかを把握することができました。この問題を軽減するために、ブラウザーは訪問したリンクから取得できる情報量を制限しています。</dd>
</dl>

<h2 id="Security-related_glossary_terms" name="Security-related_glossary_terms">セキュリティに関する用語集の用語</h2>

<div class="twocolumns">
<ul>
 <li>
  <p>{{Glossary("Block cipher mode of operation")}}</p>
 </li>
 <li>
  <p>{{Glossary("Certificate authority")}}</p>
 </li>
 <li>
  <p>{{Glossary("challenge", "Challenge-response authentication")}}</p>
 </li>
 <li>
  <p>{{Glossary("Cipher")}}</p>
 </li>
 <li>
  <p>{{Glossary("Cipher suite")}}</p>
 </li>
 <li>
  <p>{{Glossary("Ciphertext")}}</p>
 </li>
 <li>
  <p>{{Glossary("CORS")}}</p>
 </li>
 <li>
  <p>{{Glossary("CORS-safelisted request header")}}</p>
 </li>
 <li>
  <p>{{Glossary("CORS-safelisted response header")}}</p>
 </li>
 <li>
  <p>{{Glossary("Cross-site scripting")}}</p>
 </li>
 <li>
  <p>{{Glossary("Cryptanalysis")}}</p>
 </li>
 <li>
  <p>{{Glossary("Cryptographic hash function")}}</p>
 </li>
 <li>
  <p>{{Glossary("Cryptography")}}</p>
 </li>
 <li>
  <p>{{Glossary("CSP")}}</p>
 </li>
 <li>
  <p>{{Glossary("CSRF")}}</p>
 </li>
 <li>
  <p>{{Glossary("Decryption")}}</p>
 </li>
 <li>
  <p>{{Glossary("Digital certificate")}}</p>
 </li>
 <li>
  <p>{{Glossary("DTLS")}}</p>
 </li>
 <li>
  <p>{{Glossary("Encryption")}}</p>
 </li>
 <li>
  <p>{{Glossary("Forbidden header name")}}</p>
 </li>
 <li>
  <p>{{Glossary("Forbidden response header name")}}</p>
 </li>
 <li>
  <p>{{Glossary("Hash")}}</p>
 </li>
 <li>
  <p>{{Glossary("HMAC")}}</p>
 </li>
 <li>
  <p>{{Glossary("HPKP")}}</p>
 </li>
 <li>
  <p>{{Glossary("HSTS")}}</p>
 </li>
 <li>
  <p>{{Glossary("HTTPS")}}</p>
 </li>
 <li>
  <p>{{Glossary("Key")}}</p>
 </li>
 <li>
  <p>{{Glossary("MitM")}}</p>
 </li>
 <li>
  <p>{{Glossary("OWASP")}}</p>
 </li>
 <li>
  <p>{{Glossary("Preflight request")}}</p>
 </li>
 <li>
  <p>{{Glossary("Public-key cryptography")}}</p>
 </li>
 <li>
  <p>{{Glossary("Reporting directive")}}</p>
 </li>
 <li>
  <p>{{Glossary("Robots.txt")}}</p>
 </li>
 <li>
  <p>{{Glossary("Same-origin policy")}}</p>
 </li>
 <li>
  <p>{{Glossary("Session hijacking")}}</p>
 </li>
 <li>
  <p>{{Glossary("SQL injection")}}</p>
 </li>
 <li>
  <p>{{Glossary("Symmetric-key cryptography")}}</p>
 </li>
 <li>
  <p>{{Glossary("TOFU")}}</p>
 </li>
 <li>
  <p>{{Glossary("TLS")}}</p>
 </li>
</ul>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://lists.mozilla.org/listinfo/dev-security">Mozilla メーリングリスト</a></li>
 <li><a href="https://blog.mozilla.com/security/">ブログ</a></li>
 <li><a href="https://twitter.com/mozsec">@mozsec (Twitter)</a></li>
</ul>

<p>{{QuickLinksWithSubpages}}</p>
