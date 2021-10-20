---
title: ウェブセキュリティ
slug: Web/Security
tags:
  - Landing
  - セキュリティ
  - ウェブ
translation_of: Web/Security
---
ウェブサイトや公開ウェブアプリケーションが安全であることを保証するのは重要なことです。コードの中の単純なバグが、個人情報の漏洩という結果を招くことがありますし、データを盗む方法を見つけようとしている悪い輩があちこちにいます。以下に紹介するセキュリティ方面の記事では、コードの安全性を確保する際に助けとなる情報を提供しています。

## コンテンツセキュリティ

- [コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/CSP)
  - : **コンテンツセキュリティポリシー** ({{Glossary("CSP")}}) は、クロスサイトスクリプティング ({{Glossary("XSS")}}) やデータインジェクション攻撃などのような、特定の種類の攻撃を検知し、影響を軽減するために追加できるセキュリティレイヤーです。これらの攻撃はデータの窃取からサイトの改ざん、マルウェアの拡散に至るまで、様々な目的に用いられます。

## コネクションセキュリティ

- [Transport layer security (TLS)](/ja/docs/Web/Security/Transport_Layer_Security)
  - : Transport Layer Security ({{Glossary("TLS")}}) プロトコルは、ネットワークで結ばれた 2 つのアプリケーションや端末が、私的にかつ強固に情報交換するための標準です。TLS を使用するアプリケーションは、セキュリティ引数を選択することができ、これは、データのセキュリティと信頼性に大きな影響を与える可能性があります。この記事では、TLS の概要と、コンテンツを保護するために必要な決定の種類について説明します。
- HTTPS
  - : **HTTPS** (**_HyperText Transfer Protocol Secure_**) は、{{Glossary("HTTP")}} プロトコルの暗号化バージョンです。{{Glossary("SSL")}} または {{Glossary("TLS")}} を使用して、クライアントとサーバー間のすべての通信を暗号化します。この安全な接続により、クライアントは意図したサーバーに接続されていることを確認し、機密データを交換することができます。
- [HTTP Strict-Transport-Security](/ja/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : `Strict-Transport-Security:` は [HTTP](/ja/docs/Web/HTTP) のヘッダーで、ウェブサイトを HTTPS を使用してのみアクセスできるようにするものです。
- [電子証明書の透明性](/ja/docs/Web/Security/Certificate_Transparency)
  - : **電子証明書の透明性**は、証明書の誤発行を防止し、監視するために設計されたオープンなフレームワークです。新しく発行された証明書は、公開されている、多くの場合独立した CT ログに「記録」され、発行された TLS 証明書の追加のみの暗号的に保証された記録を維持します。
- [混在コンテンツ](/ja/docs/Web/Security/Mixed_content)
  - : HTTPS のページの中に通常の平文の HTTP で送られてくるコンテンツが含まれている場合、**混在コンテンツ**と呼ばれます。このようなページは部分的にしか暗号化されておらず、盗聴者や中間者攻撃者が暗号化されていないコンテンツにアクセスできてしまいます。
- [混在コンテンツでブロックされるウェブサイトを修正するには](/ja/docs/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content)
  - : ウェブサイトを HTTPS で配信している場合、ページ上にある [能動的な混在コンテンツ](/ja/docs/Web/Security/Mixed_content#mixed_active_content)はすべて既定でブロックされます。結果として、ユーザーからはそのウェブサイトが壊れているように見えるかもしれません (iframe やプラグインが読み込まれないなど)。一方、[受動的な混在コンテンツ](/ja/docs/Web/Security/Mixed_content#mixed_passivedisplay_content)は既定で表示されますが、このようなコンテンツをブロックするようにユーザーが設定することも可能です。このページでは、ウェブ開発者として知っておくべきことを説明します。
- [安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)
  - : **安全なコンテキスト (Secure Context)** とは、(HTTPS/TLS を介して) コンテンツが安全に配信され、安全**ではない**コンテキストとの通信の可能性が限られているという合理的な確信がある `Window`、または `Worker` のことです。多くの Web API が安全なコンテキストでのみ利用可能です。安全なコンテキストの主目的は、{{interwiki("wikipedia", "中間者攻撃", "中間者攻撃者")}}が被害者に更なる危険にさらす可能性がある強力な API にアクセスするのを防ぐことにあります。
- [安全なコンテキストに制限されている機能](/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
  - : このリファレンスは、安全なコンテキストでのみ使用できるウェブプラットフォーム機能の一覧です。
- [脆弱な署名アルゴリズム](/ja/docs/Web/Security/Weak_Signature_Algorithm)
  - : {{Glossary("Digital certificate", "デジタル証明書")}}の{{Glossary("Signature/Security", "電子署名")}}に用いられるハッシュアルゴリズムの強度は、証明書のセキュリティにおいて核心的な要素です。この記事では、脆弱になったため、可能であれば避けるものと知られている署名アルゴリズムについて、いくらかの情報を提供します。
- 301 および 302 レスポンスコードによるリダイレクト
  - : 執筆予定

## データセキュリティ

- [HTTP Cookie の使用](/ja/docs/Web/HTTP/Cookies)
  - : HTTP Cookie (ウェブ Cookie、ブラウザー Cookie) は、サーバーがユーザーのウェブブラウザーに送信する小さなデータであり、ブラウザーに保存されて次のリクエストと共に同じサーバーへ返送されます。一般的には、二つのリクエストが同じブラウザーから送信されたものであるかを知るために使用されます。例えば、ユーザーのログイン状態を維持することができます。
- [ローカルストレージ](/ja/docs/Web/API/Window/localStorage)
  - : `Window` オブジェクトの {{domxref("Window.localStorage")}} プロパティは、サーバーがクライアントにセッションを通して存在するデータを格納する一つの手段です。

## 情報漏洩

- [Referer ヘッダーのプライバシーとセキュリティの考慮事項](/ja/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
  - : [HTTP の Referer ヘッダー](/ja/docs/Web/HTTP/Headers/Referer)にまつわるプライバシーとセキュリティのリスクがあります。この記事ではこれらを説明し、これらのリスクを回避するためのアドバイスを提案します。
- Robots.txt
  - : 執筆予定
- Site maps
  - : 執筆予定

## 完全性

- [同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)
  - : **同一オリジンポリシー**とは、あるオリジンから読み込まれた文書やスクリプトについて、そのリソースから他の{{Glossary("origin", "オリジン")}}のリソースにアクセスできないように制限するものです。同一オリジンポリシーはウェブのセキュリティにおける重要な仕組みであり、悪意ある行動を起こしかねないリソースの分離を目的としています。
- [サブリソース完全性](/ja/docs/Web/Security/Subresource_Integrity)
  - : **サブリソース完全性** (Subresource Integrity) (SRI) は、({{Glossary("CDN")}} などから) 取得したリソースが意図せず改ざんされていないかをブラウザーが検証するセキュリティ機能です。SRI を利用する際には、取得したリソースのハッシュ値と一致すべきハッシュ値を指定します。
- [HTTP の Access-Control-Allow-Origin](/ja/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
  - : **`Access-Control-Allow-Origin`** レスポンスヘッダーは、指定された{{glossary("origin", "オリジン")}}からのリクエストを行うコードでレスポンスが共有できるかどうかを示します。
- [HTTP X-Content-Type-Options](/ja/docs/Web/HTTP/Headers/X-Content-Type-Options)
  - : **`X-Content-Type-Options`** は HTTP のレスポンスヘッダーで、{{HTTPHeader("Content-Type")}} ヘッダーで示された [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)を変更せずに従うべきであることを示すために、サーバーによって使用されるマーカーです。これにより、[MIME タイプのスニッフィング](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing)を抑止することができます。すなわち、ウェブマスターが自分が何をしているかを分かっていると言う手段です。

## クリックジャックからの保護

クリックジャックでは、ユーザーがだまされて、ユーザーが期待するもの以外のアクションを実行する UI 要素をクリックします。

- [HTTP X-Frame-Options](/ja/docs/Web/HTTP/Headers/X-Frame-Options)
  - : **`X-Frame-Options`** [HTTP](/ja/docs/Web/HTTP) レスポンスヘッダーを使用して、ブラウザーが [`<frame>`](/ja/docs/Web/HTML/Element/frame "<frame> は、他の HTML 文書を表示するための特定の領域を定義する HTML 要素です。フレームは、<frameset> の中で使用します。"), [`<iframe>`](/ja/docs/Web/HTML/Element/iframe "HTML インラインフレーム要素 (<iframe>) は、別の HTML ページを現在のページに埋め込むことで、入れ子式の閲覧コンテキストを表します。"), [`<embed>`](/ja/docs/Web/HTML/Element/embed "HTML の <embed> 要素は、外部のコンテンツを文書内の指定された場所に埋め込みます。このコンテンツは、外部のアプリケーションや、ブラウザーのプラグインなどのインタラクティブなコンテンツのソースによって提供されます。"), [`<object>`](/ja/docs/Web/HTML/Element/object "HTML の <object> 要素は、外部リソースを表します。これは、画像、ネストされた閲覧コンテキスト、またはプラグインによって処理されるリソースとして扱うことができます。") でページをレンダリングできるかどうかを示すことができます。サイトはこれを使用してコンテンツが他のサイトに埋め込まれないようにすることで、クリックジャッキング攻撃を回避できます。
- [CSP: frame-ancestors](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
  - : HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** ディレクティブは、 {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}}, {{HTMLElement("applet")}} を使用して、ページを埋め込むことができる有効な親を指定します。

## ユーザー情報セキュリティ

- [安全でないパスワード](/ja/docs/Web/Security/Insecure_passwords)
  - : HTTP 経由でログインフォームを送信することは、ユーザのパスワードを抽出するために使用できる様々な攻撃があるため、特に危険です。ネットワーク盗聴者は、ネットワークを盗聴したり、転送中に提供されたページを変更したりすることで、ユーザのパスワードを盗むことができます。
- [プライバシーと :visited セレクター](/ja/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : 2010 年頃までは、[CSS](/ja/docs/Web/CSS) {{cssxref(":visited")}} セレクターにより、ウェブサイトがユーザーの閲覧履歴を明らかにし、そのユーザーがどのサイトを訪問したかを把握することができました。この問題を軽減するために、ブラウザーは訪問したリンクから取得できる情報量を制限しています。

## セキュリティに関する用語集の用語

- {{Glossary("Block cipher mode of operation")}}
- {{Glossary("Certificate authority")}}
- {{Glossary("challenge", "Challenge-response authentication")}}
- {{Glossary("Cipher")}}
- {{Glossary("Cipher suite")}}
- {{Glossary("Ciphertext")}}
- {{Glossary("CORS")}}
- {{Glossary("CORS-safelisted request header")}}
- {{Glossary("CORS-safelisted response header")}}
- {{Glossary("Cross-site scripting")}}
- {{Glossary("Cryptanalysis")}}
- {{Glossary("Cryptographic hash function")}}
- {{Glossary("Cryptography")}}
- {{Glossary("CSP")}}
- {{Glossary("CSRF")}}
- {{Glossary("Decryption")}}
- {{Glossary("Digital certificate")}}
- {{Glossary("DTLS")}}
- {{Glossary("Encryption")}}
- {{Glossary("Forbidden header name")}}
- {{Glossary("Forbidden response header name")}}
- {{Glossary("Hash")}}
- {{Glossary("HMAC")}}
- {{Glossary("HPKP")}}
- {{Glossary("HSTS")}}
- {{Glossary("HTTPS")}}
- {{Glossary("Key")}}
- {{Glossary("MitM")}}
- {{Glossary("OWASP")}}
- {{Glossary("Preflight request")}}
- {{Glossary("Public-key cryptography")}}
- {{Glossary("Reporting directive")}}
- {{Glossary("Robots.txt")}}
- {{Glossary("Same-origin policy")}}
- {{Glossary("Session hijacking")}}
- {{Glossary("SQL injection")}}
- {{Glossary("Symmetric-key cryptography")}}
- {{Glossary("TOFU")}}

<!---->

- {{Glossary("TLS")}}

## 関連情報

- [ブログ](https://blog.mozilla.com/security/)</li>
- [@mozsec (Twitter)](https://twitter.com/mozsec)</li>

{{QuickLinksWithSubpages}}
