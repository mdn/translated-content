---
title: サイトの安全化
slug: Web/Security/Securing_your_site
tags:
  - HTTP
  - Security
  - Web Development
  - Website Security
translation_of: Web/Security/Securing_your_site
---
<div>{{ draft() }}</div>

<p>サイトをより安全にする方法はいくつもあります。この記事はその方法を紹介するとともに他のより有益な記事へのリンクを掲載しています。</p>

<div class="note"><strong>メモ:</strong> この記事は作成途中であり、以下の事項に従うことによりあなたのサイトが完全にセキュアになることを保証するものではありません。</div>

<h2 id="User_information_security" name="User_information_security">ユーザー情報のセキュリティ</h2>

<dl>
 <dt><a href="/ja/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion">フォームオートコンプリートを無効にするには</a></dt>
 <dd>Geckoではフォームのオートコンプリートがサポートされています。つまり、ユーザがフォームに入力した値を記憶し、次回訪問時には自動的にその値が入力されることになります。ある特定のデータに関しては、この機能を無効にしたほうが適切かもしれません。</dd>
 <dt><a href="/ja/CSS/Privacy_and_the_:visited_selector">プライバシーと :visited セレクター</a></dt>
 <dd>この記事では悪質なサイトがユーザーの閲覧履歴を取得できないようにするために <code>getComputedStyle()</code> メソッドに加えられた変更について議論しています。</dd>
 <dt><a href="https://www.owasp.org/index.php/Password_Storage_Cheat_Sheet">安全なアルゴリズムを使用したパスワードのハッシュ</a> (OWASP)</dt>
 <dd>プレーンテキストでパスワードを格納すると、攻撃者がサイトのユーザーの正確なパスワードを知り、漏洩させることにつながり、ユーザーを危険にさらすことになります。古く安全ではないハッシュアルゴリズム (md5 など) を使用すると、同じ問題が浮上します。メッセージダイジェストアルゴリズム (md5 や sha) ではなくパスワード専用のハッシュアルゴリズム (Argon2, PBKDF2, scrypt, bcrypt など) を使用するようにしてください。この記事はパスワードを格納するときに使用することができるベストプラクティスのショーケースです。</dd>
</dl>

<h2 id="コンテンツセキュリティ">コンテンツセキュリティ</h2>

<dl>
 <dt><a href="/ja/docs/Web/Security/Securing_your_site/Configuring_server_MIME_types">サーバーの MIME タイプを正しく設定する</a></dt>
 <dd>MIME タイプを正しく設定しないと、幾つかの潜在的なセキュリティ上の問題が発生します。この記事ではそのうちのいくつかを紹介し、サーバーで MIME タイプを正しく設定する方法を示します。</dd>
 <dt><a href="/ja/docs/Web/Security/HTTP_Strict_Transport_Security">HTTP Strict Transport Security</a></dt>
 <dd><code>Strict-Transport-Security:</code> <a href="/ja/HTTP">HTTP</a> ヘッダーを使うと、そのサイトが HTTPS でのみアクセスされるべきであるということを示すことができます。</dd>
 <dt><a href="/ja/docs/Web/HTTP/CORS">HTTP アクセス制御</a></dt>
 <dd>Cross-Origin Resource Sharing 標準はどのコンテンツが他のドメインから読み込まれるかを示す方法を提供します。この仕組みによりあなたのサイトが意図せず使われることを防いだり、明示的に使用を許可できます。</dd>
 <dt><a href="/ja/docs/Web/Security/CSP">Content Security Policy</a></dt>
 <dd>{{Glossary("Cross-site_scripting", "クロスサイトスクリプティング (XSS)")}} やデータインジェクション攻撃を含む、特定の攻撃を検知したり軽減したりすることができる追加のセキュリティレイヤーです。これらの攻撃は、データの窃盗からサイトの改ざんやマルウェアの配布まで、あらゆることに利用されます。コードは被害者によって実行され、攻撃者がアクセス制御をバイパスしたり、成りすまししたりすることができるようになります。 Open Web Application Security Project によれば、 XSS は2017年に<a class="external external-icon" href="https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf" rel="noopener">よくあるウェブアプリの脆弱性の第7位</a>でした。</dd>
 <dt><a href="/ja/docs/Web/HTTP/X-Frame-Options">X-Frame-Options レスポンスヘッダー</a></dt>
 <dd>
 <p><code>X-Frame-Options:</code> <a href="/ja/HTTP">HTTP</a> レスポンスヘッダーはページを {{ HTMLElement("frame") }} 内に描画して良いかどうかを示すために使われます。これを使うことにより、自身のサイトが他のサイトに埋め込まれていないことを保証できるため、クリックジャッキングを防ぐことができます。</p>
 </dd>
 <dt>ウェブサイトの構成によるアクセス制御</dt>
 <dd>これはサイトを安全にするのに最良の方法です。 IP アドレスのブラックリスト、ウェブサイトの特定の領域へのアクセス制御、様々なファイルの保護、画像のホットリンクの防止、その他多数です。例えば、 <a href="https://httpd.apache.org/">Apache HTTP Server</a> でホスティングされているウェブサイトでは .htaccess ファイルが使用されます。</dd>
</dl>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a class="external" href="https://www.owasp.org/">Open Web Application Security Project (OWASP)</a></li>
 <li><a href="https://infosec.mozilla.org/guidelines/web_security/en-US/docs/">Mozilla Web Security Cheat Sheet</a></li>
</ul>

<div>{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}</div>
