---
title: HTTP ヘッダー
slug: Web/HTTP/Headers
tags:
  - HTTP
  - HTTP ヘッダー
  - Networking
  - Reference
  - header
  - ネットワーク
  - ヘッダー
  - リファレンス
translation_of: Web/HTTP/Headers
---
{{HTTPSidebar}}

**HTTP ヘッダー**により、 HTTP リクエストやレスポンスでクライアントやサーバーが追加情報を渡すことができます。 HTTP ヘッダーは、大文字小文字を区別しないヘッダー名とそれに続くコロン (`:`)、 値で構成されます。値の前にある{{Glossary("Whitespace", "ホワイトスペース")}}は無視されます。

私的な独自のヘッダーは、以前は `X-` 接頭辞を使用していましたが、この慣習は 2012 年 6 月の [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) で非推奨になりました。これは、標準外のフィールドが標準になったときに発生する不便さのためです。それ以外のヘッダーは [IANA レジストリー](https://www.iana.org/assignments/message-headers/perm-headers.html)に収録されており、その基になったものは [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) です。また IANA は[新たに提案された HTTP ヘッダーのレジストリー](https://www.iana.org/assignments/message-headers/prov-headers.html)も管理しています。

ヘッダーは、そのコンテキストに応じて分類できます。

- {{Glossary("Request header", "リクエストヘッダー")}}は、読み込むリソースについての情報や、そのリソースをリクエストしているクライアントに関する詳細な情報を持ちます。
- {{Glossary("Response header", "レスポンスヘッダー")}}は、レスポンスに関する追加情報、例えば場所や提供しているサーバーに関する情報を保持します。
- {{Glossary("Representation header", "表現ヘッダー")}}は、リソースの本体に関する情報、例えば  [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)や適用されるエンコード／圧縮方式などについての情報を持ちます。
- {{Glossary("Payload header","ペイロードヘッダー")}}は、転送されるデータの表現から独立した情報、例えばコンテンツの長さや転送に使われるエンコード方式などを持ちます。

またヘッダーは、{{Glossary("Proxy_server", "プロキシーサーバー")}}がどのように扱うかに応じてグループ化されます。

- {{ httpheader("Connection") }}
- {{ httpheader("Keep-Alive") }}
- {{ httpheader("Proxy-Authenticate") }}
- {{ httpheader("Proxy-Authorization") }}
- {{ httpheader("TE") }}
- {{ httpheader("Trailer") }}
- {{ httpheader("Transfer-Encoding") }}
- {{ httpheader("Upgrade") }} ([プロトコルのアップグレードの仕組み](/ja/docs/Web/HTTP/Protocol_upgrade_mechanism)も参照)

<!---->

- エンドツーエンドヘッダー
  - : これらのヘッダーは、メッセージの最終的な宛先、すなわちリクエストならばサーバー、レスポンスならばクライアントに伝送し*なければなりません*。中間のプロキシーはヘッダーを変更せずに再伝送しなければならず、またキャッシュには保存しなければなりません。
- ホップバイホップヘッダー
  - : これらのヘッダーは単一のトランスポート層の接続にのみ意味を持ち、プロキシーが再転送したり、キャッシュを行ったりしては*いけません*。なお、 {{httpheader("Connection")}} ヘッダーを用いて設定する場合があるのはホップバイホップヘッダーのみです。

## 認証

- {{HTTPHeader("WWW-Authenticate")}}
  - : リソースへアクセスに使用すべき認証方法を定義します。
- {{HTTPHeader("Authorization")}}
  - : サーバーでユーザーエージェントを認証するための資格情報を持ちます。
- {{HTTPHeader("Proxy-Authenticate")}}
  - : プロキシーサーバーの背後にあるリソースへアクセスできるようにするために使用すべき認証方法を定義します。
- {{HTTPHeader("Proxy-Authorization")}}
  - : プロキシーサーバーでユーザーエージェントを認証するための資格情報を持ちます。

## キャッシュ

- {{HTTPHeader("Age")}}
  - : オブジェクトがプロキシーのキャッシュに存在する時間を秒数で表します。
- {{HTTPHeader("Cache-Control")}}
  - : リクエストおよびレスポンスで、キャッシュ機能に関するディレクティブです。
- {{HTTPHeader("Clear-Site-Data")}}
  - : リクエストしているウェブサイトに関連付けられた閲覧用のデータ (クッキー、ストレージ、キャッシュなど) を消去します。
- {{HTTPHeader("Expires")}}
  - : レスポンスが古くなると考えられる日時を表します。
- {{HTTPHeader("Pragma")}}
  - : リクエストからレスポンスへの流れの中でさまざまな影響がある、実装依存のヘッダーです。 `Cache-Control` ヘッダーが未実装である HTTP/1.0 キャッシュとの後方互換性のために使用します。
- {{HTTPHeader("Warning")}}
  - : 起こりうる問題に関する一般警告情報です。

## クライアントヒント

HTTP の{{Glossary("Client_hints", "クライアントヒント")}}とは、端末の種類やネットワークの状態など、クライアントに関する有用な情報を提供する一連のリクエストヘッダーのことで、サーバーはこれらの条件に合わせて提供するコンテンツを最適化することができます。

サーバーは、 {{HTTPHeader("Accept-CH")}} を使用して、クライアントが関心を持っているクライアントヒントヘッダーを積極的に要求します。クライアントは、要求されたヘッダーを後続のリクエストに含めることがあります。

- {{HTTPHeader("Accept-CH")}} {{experimental_inline}}
  - : サーバーはクライアントヒントに対応していることを、 `Accept-CH` ヘッダーフィールドまたは HTML の `<meta>` 要素の [`http-equiv`](/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) 属性で同等の指定をすることで広報することができます。
- {{HTTPHeader("Accept-CH-Lifetime")}} {{experimental_inline}} {{deprecated_inline}}
  - : サーバーは、指定された期間サーバーが対応する一連のクライアントヒントを記憶するようクライアントに依頼し、そのサーバーのオリジンに対するその後のリクエストでクライアントヒントを配信できるようにすることができます。

クライアントヒントの様々なカテゴリーを以下に示します。

### 端末クライアントヒント

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}}{{experimental_inline}}
  - : 数値で、選択された画像レスポンスの CSS ピクセルに対する物理ピクセルの比を示します。
- {{HTTPHeader("Device-Memory")}} {{deprecated_inline}}{{experimental_inline}}
  - : 技術的には [Device Memory API](/ja/docs/Web/API/Device_Memory_API) の一部で、このヘッダーはクライアントが持つおよその RAM の量を表します。
- {{HTTPHeader("DPR")}} {{deprecated_inline}}{{experimental_inline}}
  - : クライアントの端末ピクセル比 (DPR)、すなわち CSS ピクセルあたりの物理ピクセル数を示します。
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}}{{experimental_inline}}
  - : 数値で、レイアウトビューポートの幅を CSS ピクセル数で示します。指定されたピクセル数は、それ以上の最小の整数に丸められます (つまり切り上げ)。
- {{HTTPHeader("Width")}} {{deprecated_inline}}{{experimental_inline}}
  - : `Width` リクエストヘッダーフィールドは数値で、要求するリソースの幅 (つまり画像の自身の寸法) を物理ピクセル数で示します。

### ネットワーククライアントヒント

ネットワーククライアントヒントにより、サーバーはネットワークの帯域やレイテンシーに基づいて、どの情報を送るかを選択することができます。

- {{HTTPHeader("Downlink")}}
  - : サーバーに対するクライアントのコネクションのおよその帯域を、 Mbps で表します。これは [Network Information API](/ja/docs/Web/API/Network_Information_API) の一部です。
- {{HTTPHeader("ECT")}}
  - : {{Glossary("effective connection type", "有効接続種別")}} (「ネットワークプロファイル」) は、そのコネクションのレイテンシーや帯域に最も近いものです。これは [Network Information API](/ja/docs/Web/API/Network_Information_API) の一部です。
- {{HTTPHeader("RTT")}}
  - : アプリケーション層のラウンドトリップ時間 (RTT) をミリ秒で表し、これにはサーバーの処理時間も含みます。これは [Network Information API](/ja/docs/Web/API/Network_Information_API) の一部です。
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : 論理型で、ユーザーエージェントのデータ利用の削減についての設定を示します。

## 条件付き

- {{HTTPHeader("Last-Modified")}}
  - : リソースが最後に変更された日時であり、同じリソースの複数のバージョンを比較するために使用されます。 {{HTTPHeader("ETag")}} より正確さは低いのですが、環境によっては計算が容易です。{{HTTPHeader("If-Modified-Since")}} や {{HTTPHeader("If-Unmodified-Since")}} を使用する条件付きリクエストでは、リクエストの動作を変更するためにこの値を使用します。
- {{HTTPHeader("ETag")}}
  - : 一意な文字列であり、リソースのバージョンを識別します。 {{HTTPHeader("If-Match")}} や {{HTTPHeader("If-None-Match")}} を使用する条件付きリクエストでは、リクエストの動作を変更するためにこの値を使用します。
- {{HTTPHeader("If-Match")}}
  - : リクエストを条件付きにして、保存されたリソースが指定した ETag のいずれかに一致する場合に限りメソッドを適用します。
- {{HTTPHeader("If-None-Match")}}
  - : リクエストを条件付きにして、保存されたリソースが指定した ETag のいずれかに一致*しない*場合に限りメソッドを適用します。これはキャッシュを更新する (安全なリクエスト向け)、あるいはすでにリソースが存在する場合に新しいリソースのアップロードを止めるために使用します。
- {{HTTPHeader("If-Modified-Since")}}
  - : リクエストを条件付きにして、そのリソースが指定した日時より後に変更されている場合に限り転送するようリクエストします。キャッシュが期限切れである場合に限りデータを転送するために使用します。
- {{HTTPHeader("If-Unmodified-Since")}}
  - : リクエストを条件付きにして、そのリソースが指定した日時より後に変更されていない場合に限り転送するようリクエストします。これは、特定の範囲の新しい断片と古い断片の一貫性を保証する、あるいは既存の文書を変更するときに楽観的な並行性制御システムを実装するために使用します。
- {{HTTPHeader("Vary")}}
  - : 新しいものを元のサーバーにリクエストするのではなく、キャッシュされたレスポンスが使用できるよう決定するために、リクエストヘッダーを一致させる方法を定めます。/dd&gt;

## 接続制御

- {{HTTPHeader("Connection")}}
  - : 現在の転送が完了した後も、ネットワークコネクションを維持するかを制御します。
- {{HTTPHeader("Keep-Alive")}}
  - : 持続的なコネクションをどれだけの期間維持するかを制御します。

## コンテンツネゴシエーション

[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Content_negotiation)ヘッダーです。

- {{HTTPHeader("Accept")}}
  - : 送り返すことができるデータの{{Glossary("MIME_type", "種類")}}をサーバーに通知します。
- {{HTTPHeader("Accept-Encoding")}}
  - : 送り返すリソースで使用できるエンコードアルゴリズム (一般的には<a href="/ja/docs/Web/HTTP/Compression">圧縮アルゴリズム</a>) をサーバーに通知します。
- {{HTTPHeader("Accept-Language")}}
  - : 送り返すリソースで期待する自然言語をサーバーに通知します。これはヒントであり、必ずしもユーザーの完全な制御下にあるものではありません。サーバーはユーザーの選択 (ドロップダウンリストで選ぶ言語など) を明示的に上書きしないように、常に注意を払うべきです。

## 制御

- {{HTTPHeader("Expect")}}
  - : リクエストを適切に扱うためにサーバーが実行しなければならないと期待されていることを示します。
- {{HTTPHeader("Max-Forwards")}}
  - : TBD

## クッキー

- {{HTTPHeader("Cookie")}}
  - : 過去に {{HTTPHeader("Set-Cookie")}} ヘッダーでサーバーから送信されて保存している [HTTP クッキー](/ja/docs/Web/HTTP/Cookies)を持ちます。
- {{HTTPHeader("Set-Cookie")}}
  - : サーバーからユーザーエージェントにクッキーを送信します。
- {{HTTPHeader("Cookie2")}} {{deprecated_inline}}
  - : 過去に {{HTTPHeader("Set-Cookie2")}} ヘッダーでサーバーから送信された HTTP クッキーを伝えるために使われていましたが、仕様書から廃止されました。代わりに {{HTTPHeader("Cookie")}} を使用してください。
- {{HTTPHeader("Set-Cookie2")}} {{deprecated_inline}}
  - : サーバーからユーザーエージェントにクッキーを送信するために使用されていましたが、仕様書から廃止されました。代わりに {{HTTPHeader("Set-Cookie")}} を使用してください。

## CORS

*CORS についての詳細は、[こちら](CORS)を参照してください。*

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : レスポンスが共有可能かを示します。
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : credentials フラグが真であるときに、リクエストへのレスポンスを開示してよいかを示します。
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : {{Glossary("Preflight_request", "プリフライトリクエスト")}}へのレスポンスで使用し、実際のリクエストを行うときに使用できる HTTP ヘッダーを指定します。
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : プリフライトリクエストへのレスポンスで、リソースへアクセスするときに使用できるメソッドを指定します。
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : ヘッダー名を羅列して、レスポンスの一部として開示できるヘッダーを示します。
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : プリフライトリクエストの結果をキャッシュしてよい期間を示します。
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : 実際のリクエストを行う際に使用する HTTP ヘッダーをサーバーがわかるようにするため、プリフライトリクエストを発信する際に使用します。
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : 実際のリクエストを行う際に使用する [HTTP メソッド](/ja/docs/Web/HTTP/Methods)をサーバーがわかるようにするため、プリフライトリクエストを発信する際に使用します。
- {{HTTPHeader("Origin")}}
  - : どこから読み込みが発生したかを示します。
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : [Resource Timing API](/en-US/docs/Web/API/Resource_Timing_API) の機能を通じて受け取った属性の値を見ることができるオリジンを指定します。そうでなければオリジン間の制約によってゼロとして報告されます。

## ダウンロード

- {{HTTPHeader("Content-Disposition")}}
  - : 転送したリソースをインラインで表示すべきか (ヘッダーが存在しない場合の既定の動作)、またはダウンロードとして扱い、「名前を付けて保存」ウィンドウを表示すべきかを示します。

## メッセージ本文の情報

- {{HTTPHeader("Content-Length")}}
  - : リソースの大きさを、バイト単位の10進数で示します。
- {{HTTPHeader("Content-Type")}}
  - : リソースのメディア種別を示します。
- {{HTTPHeader("Content-Encoding")}}
  - : 圧縮アルゴリズムを指定するために使用します。
- {{HTTPHeader("Content-Language")}}
  - : 読者向けに言語を示すヘッダーであり、ユーザーが自身の好む言語に応じて区別することができます。
- {{HTTPHeader("Content-Location")}}
  - : 返すデータの代替データの場所を示します。

## プロキシー

- {{HTTPHeader("Forwarded")}}
  - : リクエストのパスにプロキシーが関与したときに変更または遺失した、プロキシーサーバーのクライアント側の情報を持ちます。
- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : HTTP プロキシーやロードバランサーを経由してウェブサーバーに接続するクライアントの、接続元 IP アドレスを識別します。
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : プロキシーやロードバランサーに接続するクライアントがリクエストした、オリジナルのホストを示します。
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : クライアントがプロキシーやロードバランサーに接続するために使用したプロトコル (HTTP または HTTPS) を識別します。
- {{HTTPHeader("Via")}}
  - : フォワードプロキシーとリバースプロキシーの両方が追加するヘッダーであり、リクエストヘッダーとレスポンスヘッダーのどちらでも見られます。

## リダイレクト

- {{HTTPHeader("Location")}}
  - : ページのリダイレクト先の URL を示します。

## リクエストコンテキスト

- {{HTTPHeader("From")}}
  - : リクエストを行うユーザーエージェントを操作している人間の、インターネット電子メールアドレスを持ちます。
- {{HTTPHeader("Host")}}
  - : サーバーのドメイン名 (バーチャルホスト向け) およびサーバーが待ち受けている TCP ポート番号 (省略可能) を指定します。
- {{HTTPHeader("Referer")}}
  - : 現在リクエストしているページへリンクしていた、前のウェブページのアドレスです。
- {{HTTPHeader("Referrer-Policy")}}
  - : {{HTTPHeader("Referer")}} ヘッダーで送信するどのリファラー情報をリクエストに含めるかを制御します。
- {{HTTPHeader("User-Agent")}}
  - : リクエストを行うユーザーエージェントソフトウェアのアプリケーションタイプ、オペレーティングシステム、ベンダー、バージョンを、ネットワークプロトコルのピアが識別できるようにする文字列を持ちます。 [Firefox ユーザーエージェント文字列リファレンス](/ja/docs/Web/HTTP/Headers/User-Agent/Firefox)もご覧ください。

## レスポンスコンテキスト

- {{HTTPHeader("Allow")}}
  - : リソースがサポートする HTTP リクエストメソッドを示します。
- {{HTTPHeader("Server")}}
  - : リクエストを扱うサーバーが使用するソフトウェアの情報を持ちます。

## 範囲付きリクエスト

- {{HTTPHeader("Accept-Ranges")}}
  - : サーバーが範囲付きリクエストに対応するかどうか、対応していれば対応する場合は、範囲を表すことができる単位を示します。
- {{HTTPHeader("Range")}}
  - : サーバーが返すべきである文書の範囲を示します。
- {{HTTPHeader("If-Range")}}
  - : 指定した ETag または日時がリモートのリソースにマッチする場合に限定した、条件付き range request を生成します。異なるバージョンのリソースから 2 つの範囲をダウンロードすることを防ぎます。
- {{HTTPHeader("Content-Range")}}
  - : 部分的なメッセージが、メッセージ本文全体のどこに位置するかを示します。

## セキュリティ

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : サーバーが指定された文書の埋め込み方針を宣言するために使います。
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : 他のドメインがウィンドウを開いたり制御したりすることを防ぎます。
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : このヘッダーが適用されたリソースのレスポンスが他のドメインから読み取られるのを防ぎます。
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP")}})
  - : ユーザーエージェントがページで読み込むことを許可するリソースを制御します。
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : ウェブの開発者がポリシーの効果を適用せずに監視することで、実験を行うことができます。これらの違反レポートは、 HTTP `POST` リクエストによって指定した URI へ送信される {{Glossary("JSON")}} 文書で構成されます。
- {{HTTPHeader("Expect-CT")}}
  - : サイトが証明書の透明性要件の報告や実施を選択できるようにします。これにより、そのサイトで不正な証明書の使用に気づかないことを防ぎます。サイトが Expect-CT ヘッダーを有効にした場合、そのサイトの証明書が公開CTログに表示されることを Chrome が確認するようにリクエストしています。
- {{HTTPHeader("Feature-Policy")}}
  - : 自身のフレームまたはその中の iframe で、ブラウザーの機能を使用することを許可または拒否する仕組みを提供します。
- {{HTTPHeader("Origin-Isolation")}} {{experimental_inline}}
  - : ウェブアプリケーションをオリジンから独立させるための仕組みを提供します。
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})
  - : HTTP の代わりに HTTPS による通信を強制します。
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : 暗号化や認証されたレスポンスについて、クライアントの設定を表す信号をサーバーに送信して、{{CSP("upgrade-insecure-requests")}} ディレクティブを正しく扱うことができます。
- {{HTTPHeader("X-Content-Type-Options")}}
  - : ブラウザーで MIME スニッフィングを無効化して、{{HTTPHeader("Content-Type")}} で指定したタイプを強制的に使用させます。
- {{HTTPHeader("X-Download-Options")}}
  - : HTTP の [`X-Download-Options`](<https://docs.microsoft.com/ja-jp/previous-versions/windows/internet-explorer/ie-developer/compatibility/jj542450(v=vs.85)?#the-noopen-directive>) ヘッダーは、ブラウザー (Internet Explorer) がアプリケーションからのダウンロードでファイルを「開く」の選択肢を表示しないようにし、アプリケーションのコンテキストで実行するアクセス権を得ることがないようにして、ファイルとすることでフィッシング詐欺を防止します。 (メモ: [MS Edge bug](https://developer.microsoft.com/ja-jp/microsoft-edge/platform/issues/18488178/) に関連)
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : ブラウザーがページを {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}} の内部に表示することを許可するかを示します。
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : クロスドメインポリシーファイル (`crossdomain.xml`) を許可するかどうかを指定します。このファイルは、 Adobe の Flash Player、Adobe Acrobat、Microsoft Silverlight、Apache Flex などのクライアントに、[同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)によって制限されているドメイン間のデータを処理する許可を与えるポリシーを定義することができます。詳細については、 [Cross-domain Policy File Specification](https://www.adobe.com/devnet/articles/crossdomain_policy_file_spec.html) を参照してください。
- {{HTTPHeader("X-Powered-By")}}
  - : ホスティング環境やその他のフレームワークによって設定される可能性があり、アプリケーションや訪問者に有益ではない情報を含みます。潜在的な脆弱性が発現することを防ぐために、このヘッダーは設定しないでください。
- {{HTTPHeader("X-XSS-Protection")}}
  - : クロスサイトスクリプティングのフィルタリングを有効化します。

### HTTP Public Key Pinning (HPKP)

{{Glossary("HPKP", "HTTP Public Key Pinning")}} は非推奨となり、削除されて Certificate Transparency と {{HTTPHeader("Expect-CT")}} に置き換えられました。

- {{HTTPHeader("Public-Key-Pins")}}
  - : 偽造した証明書による {{Glossary("MITM")}} 攻撃の危険性を軽減するため、特定の暗号公開鍵とウェブサーバーを関連付けます。
- {{HTTPHeader("Public-Key-Pins-Report-Only")}}
  - : ピンニングに違反する場合でも、ヘッダーで指定した report-uri にレポートを送信して、クライアントからサーバーへの接続は許可します。

## メタデータ読み取りリクエストヘッダー

{{Glossary("Fetch metadata request header", "メタデータ読み取りリクエストヘッダー")}}は、リクエストが発生したときのコンテキストに関する情報を提供します。これによりサーバーは、リクエストがどこから来たのか、リソースがどのように使用されるのかに基づいて、リクエストを許可すべきかどうかを判断することができます。

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : リクエスト開始元のオリジンと宛先のオリジンとの関係を示すリクエストヘッダーです。これは構造化ヘッダーで、値はトークンであり、取りうる値は `cross-site`, `same-origin`, `same-site`, `none` です。
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : サーバーへのリクエストモードを示すリクエストヘッダーです。これは構造化ヘッダーで、値はトークンであり、取りうる値は `cors`, `navigate`, `nested-navigate`, `no-cors`, `same-origin`, `websocket` です。
- {{HTTPHeader("Sec-Fetch-User")}}
  - : ナビゲーションリクエストがユーザー操作によって起動されたかどうかを示すリクエストヘッダーです。これは構造化ヘッダーであり、論理値で、取りうる値は `?0` ならば偽、 `?1` ならば真です。
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : リクエストの宛先を示すリクエストヘッダーです。これは構造化ヘッダーで、値はトークンであり、取りうる値は `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker`, `xslt` です。

## Server-sent event

- {{HTTPHeader("Last-Event-ID")}}
  - : TBD
- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : 開発者がネットワークエラー報告ポリシーを宣言できるようにする仕組みを定義します。
- {{HTTPHeader("Ping-From")}}
  - : TBD
- {{HTTPHeader("Ping-To")}}
  - : TBD
- {{HTTPHeader("Report-To")}}
  - : 警告やエラーを送信るためのブラウザーに対するサーバーのエンドポイントを指定するために使用します。

## 転送エンコーディング

- {{HTTPHeader("Transfer-Encoding")}}
  - : エンティティをユーザーへ問題なく転送できるエンコード形式を指定します。
- {{HTTPHeader("TE")}}
  - : ユーザーエージェントが進んで受け入れる転送エンコーディングを指定します。
- {{HTTPHeader("Trailer")}}
  - : 送信者が chunk メッセージの終端に追加フィールドを含めることができます。

## WebSocket

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : TBD
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : TBD
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : TBD
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : TBD
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : TBD

## その他

- {{HTTPHeader("Accept-Push-Policy")}} {{experimental_inline}}
  - : クライアントはリクエストに対して求めるプッシュポリシーを、リクエスト内で [`Accept-Push-Policy`](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.1) ヘッダーフィールドを送信することで表現することができます。
- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : クライアントは [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.7) ヘッダーフィールドを送信して、利用可能な署名を利用する意図を示したり、対応している署名の種類を示したりすることができます。
- {{HTTPHeader("Alt-Svc")}}
  - : このサービスにたどり着く他の方法のリストに使用します。
- {{HTTPHeader("Date")}}
  - : メッセージを生成した日時です。
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : このリクエストが TLS early data で送信されたことを示します。
- {{HTTPHeader("Large-Allocation")}}
  - : 読み込み中のページは大量の割り当てが必要であることをブラウザーに伝えます。
- {{HTTPHeader("Link")}}
  - : [`Link`](https://datatracker.ietf.org/doc/html/rfc5988#section-5) エンティティヘッダーフィールドは、 HTTP ヘッダー内の1つ以上のリンクを記述する方法を提供します。意味的には HTML の {{HTMLElement("link")}} 要素と等価です。
- {{HTTPHeader("Push-Policy")}} {{experimental_inline}}
  - : [`Push-Policy`](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.2)はリクエストを処理するときのプッシュ通知に関するサーバーの動作を定義します。
- {{HTTPHeader("Retry-After")}}
  - : 後続のリクエストを行う前に、ユーザーエージェントがどれだけの期間待つべきかを示します。
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.1) ヘッダーフィールドは、交換のための署名のリストを伝え、それぞれはその署名の権威を決定して、そして更新する方法についての情報を伴います。
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.5.1.2) ヘッダーフィールドは、シグネチャに含めるためのレスポンスヘッダーフィールドの順序付きリストを識別します。
- {{HTTPHeader("Server-Timing")}}
  - : 指定されたリクエストとレスポンスのサイクルについて、１つ以上のメトリクスまたは説明を通信します。
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : [パス正弦](https://w3c.github.io/ServiceWorker/#path-restriction)を解除するために、[サービスワーカースクリプトのレスポンス](https://w3c.github.io/ServiceWorker/#service-worker-script-response)で使用します。
- {{HTTPHeader("SourceMap")}}
  - : 生成されたコードと <a href="/ja/docs/Tools/Debugger/How_to/Use_a_source_map">ソースマップ</a> を関連付けます。
- {{HTTPHeader("Upgrade")}}
  - : Upgrade ヘッダーフィールドに関連する RFC 文書は [RFC 7230, section 6.7](https://datatracker.ietf.org/doc/html/rfc7230#section-6.7) です。標準仕様では、現在のクライアント、サーバー、トランスポート層プロトコル接続で別のプロトコルへ更新または変更するための規則を定めています。例えば、このヘッダー標準ではサーバーが Upgrade ヘッダーフィールドを認めて実装すると決める前提で、クライアントが HTTP 1.1 から HTTP 2.0 へ変更することを可能にします。どちらの相手も、 Upgrade ヘッダーフィールドで指定された要件を受け入れる必要はありません。これはクライアントのヘッダーでもサーバーのヘッダーでも使用できます。Upgrade ヘッダーフィールドを指定した場合は、更新オプションを指ヘッダーonnection ヘッダーフィールドも送信者が送信しなければなりません。Connection ヘッダーフィールドについて、詳しくは[前述の RFC のセクション 6.1](https://datatracker.ietf.org/doc/html/rfc7230#section-6.1) をご覧ください。
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
  - : ユーザーがたどるであろうリンクや、ドキュメントが参照する画像、 CSS、 JavaScript などのリソースのドメイン名解決をブラウザーが事前に行う機能である、 DNS プリフェッチを制御します。
- {{HTTPHeader("X-Firefox-Spdy")}} {{deprecated_inline}} {{non-standard_inline}}
  - : TBD
- {{HTTPHeader("X-Pingback")}} {{non-standard_inline}}
  - : TBD
- {{HTTPHeader("X-Requested-With")}}
  - : TBD
- {{HTTPHeader("X-Robots-Tag")}}{{non-standard_inline}}
  - : [`X-Robots-Tag`](https://developers.google.com/search/reference/robots_meta_tag#xrobotstag) ヘッダーは、一般の検索エンジンの結果でウェブページをどのように索引付けをするかを示します。このヘッダーは `&lt;meta name="robots" content="..."&gt;` と等価です。
- {{HTTPHeader("X-UA-Compatible")}} {{non-standard_inline}}
  - : 使用する文書モードを示すために Internet Explorer で使用されています。

## 協力

[新しい記事を書いたり](/en-US/docs/MDN/Contribute/Howto/Document_an_HTTP_header)、既存のものを改善したりすることにご協力ください。

## 関連情報

- [Wikipedia の HTTP ヘッダーの一覧のページ](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA レジストリー](https://www.iana.org/assignments/message-headers/perm-headers.html)
- [HTTP Working Group](https://httpwg.org/specs/)
