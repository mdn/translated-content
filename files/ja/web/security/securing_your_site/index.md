---
title: サイトの安全化
slug: Web/Security/Securing_your_site
---

サイトをより安全にする方法はいくつもあります。この記事では、その方法を紹介するとともに、他のより有益な記事へのリンクを掲載しています。

> **メモ:** この記事は作成途中であり、以下の事項に従うことによりあなたのサイトが完全にセキュアになることを保証するものではありません。

## ユーザー情報のセキュリティ

- [フォームオートコンプリートを無効にするには](/ja/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion)
  - : Geckoではフォームのオートコンプリートがサポートされています。つまり、ユーザがフォームに入力した値を記憶し、次回訪問時には自動的にその値が入力されることになります。ある特定のデータに関しては、この機能を無効にしたほうが適切かもしれません。
- [プライバシーと :visited セレクター](/ja/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : この記事では悪質なサイトがユーザーの閲覧履歴を取得できないようにするために `getComputedStyle()` メソッドに加えられた変更について議論しています。
- [安全なアルゴリズムを使用したパスワードのハッシュ](https://www.owasp.org/index.php/Password_Storage_Cheat_Sheet) (OWASP)
  - : プレーンテキストでパスワードを格納すると、攻撃者がサイトのユーザーの正確なパスワードを知り、漏洩させることにつながり、ユーザーを危険にさらすことになります。古く安全ではないハッシュアルゴリズム (md5 など) を使用すると、同じ問題が浮上します。メッセージダイジェストアルゴリズム (md5 や sha) ではなくパスワード専用のハッシュアルゴリズム (Argon2, PBKDF2, scrypt, bcrypt など) を使用するようにしてください。この記事はパスワードを格納するときに使用することができるベストプラクティスのショーケースです。

## コンテンツセキュリティ

- [サーバーの MIME タイプを正しく設定する](/ja/docs/Learn/Server-side/Configuring_server_MIME_types)
  - : MIME タイプを正しく設定しないと、幾つかの潜在的なセキュリティ上の問題が発生します。この記事ではそのうちのいくつかを紹介し、サーバーで MIME タイプを正しく設定する方法を示します。
- [HTTP Strict Transport Security](/ja/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : `Strict-Transport-Security:` [HTTP](/ja/docs/Web/HTTP) ヘッダーを使うと、そのサイトが HTTPS でのみアクセスされるべきであるということを示すことができます。
- [HTTP アクセス制御](/ja/docs/Web/HTTP/CORS)
  - : Cross-Origin Resource Sharing 標準はどのコンテンツが他のドメインから読み込まれるかを示す方法を提供します。この仕組みによりあなたのサイトが意図せず使われることを防いだり、明示的に使用を許可できます。
- [Content Security Policy](/ja/docs/Web/HTTP/CSP)
  - : {{Glossary("Cross-site_scripting", "クロスサイトスクリプティング (XSS)")}} やデータインジェクション攻撃を含む、特定の攻撃を検知したり軽減したりすることができる追加のセキュリティレイヤーです。これらの攻撃は、データの窃盗からサイトの改ざんやマルウェアの配布まで、あらゆることに利用されます。コードは被害者によって実行され、攻撃者がアクセス制御をバイパスしたり、成りすまししたりすることができるようになります。 Open Web Application Security Project によれば、 XSS は2017年に[よくあるウェブアプリの脆弱性の第7位](https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf)でした。
- [X-Frame-Options レスポンスヘッダー](/ja/docs/Web/HTTP/Headers/X-Frame-Options)
  - : `X-Frame-Options:` [HTTP](/ja/docs/Web/HTTP) レスポンスヘッダーはページを {{ HTMLElement("frame") }} 内に描画して良いかどうかを示すために使われます。これを使うことにより、自身のサイトが他のサイトに埋め込まれていないことを保証できるため、[クリックジャッキング](/ja/docs/Glossary/Clickjacking)を防ぐことができます。
- ウェブサイトの構成によるアクセス制御
  - : これはサイトを安全にするのに最良の方法です。 IP アドレスのブラックリスト、ウェブサイトの特定の領域へのアクセス制御、様々なファイルの保護、画像のホットリンクの防止、その他多数です。例えば、 [Apache HTTP Server](https://httpd.apache.org/) でホスティングされているウェブサイトでは .htaccess ファイルが使用されます。

## 関連情報

- [Open Web Application Security Project (OWASP)](https://www.owasp.org/)
- [Mozilla Web Security Cheat Sheet](https://infosec.mozilla.org/guidelines/web_security.html#web-security-cheat-sheet)

{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}
