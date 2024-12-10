---
title: HTTP ヘッダー
short-title: ヘッダー
slug: Web/HTTP/Headers
l10n:
  sourceCommit: a8f881645d776d1303a0a25bd884f95e1b2805e1
---

{{HTTPSidebar}}

**HTTP ヘッダー**により、 HTTP リクエストやレスポンスでクライアントやサーバーが追加情報を渡すことができます。 HTTP ヘッダーは、大文字小文字を区別しないヘッダー名とそれに続くコロン (`:`)、 値で構成されます。値の前にある{{Glossary("Whitespace", "ホワイトスペース")}}は無視されます。

私的な独自のヘッダーは、以前は `X-` 接頭辞を使用していましたが、この慣習は、標準外のフィールドが標準になったときに不便が発生するため、2012 年 6 月の [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) で非推奨になりました。それ以外のヘッダーは [IANA HTTP フィールド名レジストリー](https://www.iana.org/assignments/http-fields/http-fields.xhtml)に収録されており、その基になったものは [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) で定義されていました。
IANA レジストリーはヘッダーを、"permanent"（標準で定義）、"provisional"（新しい）、 "deprecated"（使用は非推奨）、"obsolete"（使用できなくなった）などの状態に関する情報を含めて掲載しています。

ヘッダーは、そのコンテキストに応じて分類できます。

- {{Glossary("Request header", "リクエストヘッダー")}}
  - : 読み込むリソースについての情報や、そのリソースをリクエストしているクライアントに関する詳細な情報を持ちます。
- {{Glossary("Response header", "レスポンスヘッダー")}}
  - : レスポンスに関する追加情報、例えば場所や提供しているサーバーに関する情報を保持します。
- {{Glossary("Representation header", "表現ヘッダー")}}
  - : リソースの本体に関する情報、例えば [MIME タイプ](/ja/docs/Web/HTTP/MIME_types)や適用されるエンコード／圧縮方式などについての情報を持ちます。
- {{Glossary("Payload header","ペイロードヘッダー")}}
  - : 転送されるデータの表現から独立した情報、例えばコンテンツの長さや転送に使われるエンコード方式などを持ちます。

またヘッダーは、{{Glossary("Proxy_server", "プロキシーサーバー")}}がどのように扱うかに応じてグループ化されます。

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
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : URL のクエリー引数がキャッシュ照合にどのように影響するかを定義する一連のルールを指定します。これらのルールは、URL 引数が異なる同じ URL を別個のブラウザーキャッシュ項目として保存するかどうかを決定します。

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
  - : 新しいものを元のサーバーにリクエストするのではなく、キャッシュされたレスポンスが使用できるよう決定するために、リクエストヘッダーを一致させる方法を定めます。

## 接続管理

- {{HTTPHeader("Connection")}}
  - : 現在の転送が完了した後も、ネットワークコネクションを維持するかを制御します。
- {{HTTPHeader("Keep-Alive")}}
  - : 持続的なコネクションをどれだけの期間維持するかを制御します。

## コンテンツネゴシエーション

詳しくは、[コンテンツネゴシエーションの記事](/ja/docs/Web/HTTP/Content_negotiation)を参照してください。

- {{HTTPHeader("Accept")}}
  - : 送り返すことができるデータの{{Glossary("MIME_type", "種類")}}をサーバーに通知します。
- {{HTTPHeader("Accept-Encoding")}}
  - : 送り返すリソースで使用できるエンコードアルゴリズム (一般的には[圧縮アルゴリズム](/ja/docs/Web/HTTP/Compression)) をサーバーに通知します。
- {{HTTPHeader("Accept-Language")}}
  - : 送り返すリソースで期待する自然言語をサーバーに通知します。これはヒントであり、必ずしもユーザーの完全な制御下にあるものではありません。サーバーはユーザーの選択 (ドロップダウンリストで選ぶ言語など) を明示的に上書きしないように、常に注意を払うべきです。
- {{HTTPHeader("Accept-Patch")}}
  - : リクエストコンテンツネゴシエーションのレスポンスヘッダーで、サーバーが {{HTTPMethod("PATCH")}} リクエストで理解できる[メディア型](/ja/docs/Web/HTTP/MIME_types)を通知します。
- {{HTTPHeader("Accept-Post")}}
  - : リクエストコンテンツネゴシエーションのレスポンスヘッダーで、サーバーが {{HTTPMethod("POST")}} リクエストで理解できる[メディア型](/ja/docs/Web/HTTP/MIME_types)を通知します。

## 制御

- {{HTTPHeader("Expect")}}
  - : リクエストを適切に扱うためにサーバーが実行しなければならないと期待されていることを示します。
- {{HTTPHeader("Max-Forwards")}}
  - : [`TRACE`](/ja/docs/Web/HTTP/Methods/TRACE) を使用する場合、リクエストが送信者に反映されるまでにできる最大のホップ数を示します。

## クッキー

- {{HTTPHeader("Cookie")}}
  - : 過去に {{HTTPHeader("Set-Cookie")}} ヘッダーでサーバーから送信されて保存している [HTTP クッキー](/ja/docs/Web/HTTP/Cookies)を持ちます。
- {{HTTPHeader("Set-Cookie")}}
  - : サーバーからユーザーエージェントにクッキーを送信します。

## CORS

詳細は、[CORS のドキュメント](/ja/docs/Web/HTTP/CORS)を参照してください。

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : credentials フラグが真であるときに、リクエストへのレスポンスを開示してよいかを示します。
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : {{Glossary("Preflight_request", "プリフライトリクエスト")}}へのレスポンスで使用し、実際のリクエストを行うときに使用できる HTTP ヘッダーを指定します。
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : プリフライトリクエストへのレスポンスで、リソースへアクセスするときに使用できるメソッドを指定します。
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : レスポンスが共有可能かを示します。
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
  - : [リソースタイミング API](/ja/docs/Web/API/Performance_API/Resource_timing) の機能を通じて受け取った属性の値を見ることができるオリジンを指定します。そうでなければオリジン間の制約によってゼロとして報告されます。

## ダウンロード

- {{HTTPHeader("Content-Disposition")}}
  - : 転送したリソースをインラインで表示すべきか (ヘッダーが存在しない場合の既定の動作)、またはダウンロードとして扱い、「名前を付けて保存」ウィンドウを表示すべきかを示します。

## インテグリティダイジェスト

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : {{HTTPHeader("Content-Encoding")}} および {{HTTPHeader("Content-Range")}} に依存する HTTP メッセージ（メッセージコンテンツ）内のオクテットストリームの{{Glossary("digest","ダイジェスト")}}を提供します。
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : 転送前に、対象とするリソースの選択された表現の{{Glossary("digest","ダイジェスト")}}を提供します。
    {{HTTPHeader("Content-Digest")}} とは異なり、ダイジェストは {{HTTPHeader("Content-Encoding")}} や {{HTTPHeader("Content-Range")}} を考慮しません。
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : {{HTTPHeader("Content-Digest")}} ヘッダーのウィッシュの状態です。
    これは、 `Content-` における {{HTTPHeader("Want-Repr-Digest")}} に相当します。
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : {{HTTPHeader("Repr-Digest")}} ヘッダーのウィッシュの状態です。
    これは、 `Repr-` における {{HTTPHeader("Want-Content-Digest")}} に相当します。

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
- {{HTTPHeader("Via")}}
  - : フォワードプロキシーとリバースプロキシーの両方が追加するヘッダーであり、リクエストヘッダーとレスポンスヘッダーのどちらでも見られます。

## 範囲付きリクエスト

HTTP の[範囲付きリクエスト](/ja/docs/Web/HTTP/Range_requests)により、クライアントはサーバーからリソースの一部をリクエストすることができます。
範囲付きリクエストは、ランダムアクセスに対応しているメディアプレーヤーや、大きなファイルの一部のみが必要なデータツール、ダウンロードを一時停止したり再開したりできるダウンロードマネージャーなどのアプリケーションに便利です。

- {{HTTPHeader("Accept-Ranges")}}
  - : サーバーが範囲付きリクエストに対応するかどうか、対応していれば対応する場合は、範囲を表すことができる単位を示します。
- {{HTTPHeader("Range")}}
  - : サーバーが返すべきである文書の範囲を示します。
- {{HTTPHeader("If-Range")}}
  - : 指定した ETag または日時がリモートのリソースにマッチする場合に限定した、条件付き範囲付きリクエストを生成します。異なるバージョンのリソースから 2 つの範囲をダウンロードすることを防ぎます。
- {{HTTPHeader("Content-Range")}}
  - : 部分的なメッセージが、メッセージ本文全体のどこに位置するかを示します。

## リダイレクト

- {{HTTPHeader("Location")}}
  - : ページのリダイレクト先の URL を示します。
- {{HTTPHeader("Refresh")}}
  - : ブラウザーにページを再読み込みするか、別のページにリダイレクトするように指示します。 [`http-equiv="refresh"`](/ja/docs/Web/HTML/Element/meta#http-equiv) を持つ `meta` 要素と同じ値をとります。

## リクエストコンテキスト

- {{HTTPHeader("From")}}
  - : リクエストを行うユーザーエージェントを操作している人間の、インターネット電子メールアドレスを持ちます。
- {{HTTPHeader("Host")}}
  - : サーバーのドメイン名（バーチャルホスト向け）およびサーバーが待ち受けている TCP ポート番号（省略可能）を指定します。
- {{HTTPHeader("Referer")}}
  - : 現在リクエストしているページへリンクしていた、前のウェブページのアドレスです。
- {{HTTPHeader("Referrer-Policy")}}
  - : {{HTTPHeader("Referer")}} ヘッダーで送信するどのリファラー情報をリクエストに含めるかを制御します。
- {{HTTPHeader("User-Agent")}}
  - : リクエストを行うユーザーエージェントソフトウェアのアプリケーションタイプ、オペレーティングシステム、ベンダー、バージョンを、ネットワークプロトコルのピアが識別できるようにする文字列を持ちます。

## レスポンスコンテキスト

- {{HTTPHeader("Allow")}}
  - : リソースがサポートする HTTP リクエストメソッドを示します。
- {{HTTPHeader("Server")}}
  - : リクエストを扱うサーバーが使用するソフトウェアの情報を持ちます。

## セキュリティ

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : サーバーが指定された文書の埋め込み方針を宣言するために使います。
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : 他のドメインがウィンドウを開いたり制御したりすることを防ぎます。
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : このヘッダーが適用されたリソースのレスポンスが他のドメインから読み取られるのを防ぎます。[CORP の説明記事](/ja/docs/Web/HTTP/Cross-Origin_Resource_Policy)を参照してください。
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP")}})
  - : ユーザーエージェントがページで読み込むことを許可するリソースを制御します。
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : ウェブの開発者がポリシーの効果を適用せずに監視することで、実験を行うことができます。これらの違反レポートは、 HTTP `POST` リクエストによって指定した URI へ送信される {{Glossary("JSON")}} 文書で構成されます。
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : サイトが[証明書の透過性](/ja/docs/Web/Security/Certificate_Transparency)の報告と実施にオプトインできるようにし、そのサイトに対して誤って発行された資格情報を使用しているかどうかを検出できるようにします。
- {{HTTPHeader("Permissions-Policy")}}
  - : 自身のフレームまたはその中に埋め込まれた {{htmlelement("iframe")}} で、ブラウザーの機能を使用することを許可または拒否する仕組みを提供します。
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : ウェブサイト所有者が、 1 つ以上のエンドポイントを指定し、 CSP 違反レポート、 {{HTTPHeader("Cross-Origin-Opener-Policy")}} レポート、その他の一般的な違反などのエラーを受信するために使用します。
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})
  - : HTTP の代わりに HTTPS による通信を強制します。
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : 暗号化や認証されたレスポンスについて、クライアントの設定を表す信号をサーバーに送信して、{{CSP("upgrade-insecure-requests")}} ディレクティブを正しく扱うことができます。
- {{HTTPHeader("X-Content-Type-Options")}}
  - : ブラウザーで MIME スニッフィングを無効化して、{{HTTPHeader("Content-Type")}} で指定したタイプを強制的に使用させます。
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : ブラウザーがページを {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}} の内部に表示することを許可するかを示します。
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : クロスドメインポリシーファイル (`crossdomain.xml`) を許可するかどうかを指定します。このファイルは、 Adobe の Flash Player、Adobe Acrobat、Microsoft Silverlight、Apache Flex などのクライアントに、[同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)によって制限されているドメイン間のデータを処理する許可を与えるポリシーを定義することができます。詳細については、 [Cross-domain Policy File Specification](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf) を参照してください。
- {{HTTPHeader("X-Powered-By")}}
  - : ホスティング環境やその他のフレームワークによって設定される可能性があり、アプリケーションや訪問者に有益ではない情報を含みます。潜在的な脆弱性が発現することを防ぐために、このヘッダーは設定しないでください。
- {{HTTPHeader("X-XSS-Protection")}}
  - : クロスサイトスクリプティングのフィルタリングを有効化します。

## メタデータ読み取りリクエストヘッダー

{{Glossary("Fetch metadata request header", "メタデータ読み取りリクエストヘッダー")}}は、リクエストが発生したときのコンテキストに関する情報を提供します。サーバーはこれを利用して、リクエストがどこから来たのか、リソースがどのように使用されるのかに基づいて、リクエストを許可すべきかどうかを判断することができます。

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : リクエスト開始元のオリジンと宛先のオリジンとの関係を示します。これは構造化ヘッダーで、値はトークンであり、取りうる値は `cross-site`, `same-origin`, `same-site`, `none` です。
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : サーバーへのリクエストモードを示します。これは構造化ヘッダーで、値はトークンであり、取りうる値は `cors`, `navigate`, `nested-navigate`, `no-cors`, `same-origin`, `websocket` です。
- {{HTTPHeader("Sec-Fetch-User")}}
  - : ナビゲーションリクエストがユーザー操作によって起動されたかどうかを示します。これは構造化ヘッダーであり、論理値で、取りうる値は `?0` ならば偽、 `?1` ならば真です。
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : リクエストの宛先を示します。これは構造化ヘッダーで、値はトークンであり、取りうる値は `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker`, `xslt` です。

以下のリクエストヘッダーは、厳密には「メタデータ読み取りリクエストヘッダー」ではありませんが、同様にリソースがどのように使用されるかのコンテキストに関する情報を提供します。サーバーはキャッシュの動作や返す情報を変更するためにこれらを使用するかもしれません。

- {{HTTPHeader("Sec-Purpose")}}
  - : リクエストがユーザーエージェントによって直ちに使用される以外の目的である場合に、その目的を示します。このヘッダーは現在一つの可能な値 `prefetch` を持っており、これはリソースが将来のナビゲーションのために優先的に読み取られていることを示します。
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : サービスワーカーの起動中に、リソースに対して {{domxref("Window/fetch", "fetch()")}} で先制的なリクエストをする際に送られるリクエストヘッダーです。この値は {{domxref("NavigationPreloadManager.setHeaderValue()")}} で設定され、通常の `fetch()` 処理とは異なる形でリソースを返すべきことをサーバーに通知するために使用することができます。

## サーバー送信イベント

- {{HTTPHeader("Reporting-Endpoints")}}
  - : [報告 API](/ja/docs/Web/API/Reporting_API) を使用する際に、ブラウザーが警告およびエラーレポートを送信すべきサーバーエンドポイントを指定するレスポンスヘッダーです。
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : [報告 API](/ja/docs/Web/API/Reporting_API) を使用する際に、ブラウザーが警告およびエラーレポートを送信すべきサーバーエンドポイントを指定するレスポンスヘッダーです。

## 転送エンコーディング

- {{HTTPHeader("Transfer-Encoding")}}
  - : エンティティをユーザーへ問題なく転送できるエンコード形式を指定します。
- {{HTTPHeader("TE")}}
  - : ユーザーエージェントが進んで受け入れる転送エンコーディングを指定します。
- {{HTTPHeader("Trailer")}}
  - : 送信者が chunk メッセージの終端に追加フィールドを含めることができます。

## WebSocket

[WebSockets API](/ja/docs/Web/API/WebSockets_API) で、 [WebSocket ハンドシェイク](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake)において使われるヘッダーです。

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : サーバーが WebSocket 接続へのアップグレードを望んでいることを示すレスポンスヘッダーです。
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : リクエストでは、このヘッダーはクライアントが対応している WebSocket 拡張機能を推奨する順番で示します。
    レスポンスでは、サーバーがクライアントの環境設定から選択した拡張機能を示します。
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : クライアントが明示的に `WebSocket` を開くための意図を確認するキーを持つリクエストヘッダーです。
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : リクエストでは、このヘッダーはクライアントが対応しているサブプロトコルを推奨する順番で示します。
    レスポンスでは、サーバーがクライアントの環境設定から選択したサブプロトコルを示します。
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : リクエストにおいて、このヘッダーはクライアントが使用する WebSocket プロトコルのバージョンを示します。
    レスポンスでは、リクエストされたプロトコルのバージョンがサーバーで対応していない場合にのみ送信され、サーバーが対応しているバージョンが掲載されています。

## その他

- {{HTTPHeader("Alt-Svc")}}
  - : このサービスに到達するための代替方法を列挙するために使用されます。
- {{HTTPHeader("Alt-Used")}}
  - : 使用中の代替サービスを識別するために用いられます。
- {{HTTPHeader("Date")}}
  - : メッセージが発信された日時を保持します。
- {{HTTPHeader("Link")}}
  - : これは、HTTP ヘッダーで 1 つ以上のリンクをシリアライズする意味を提供するエンティティヘッダーフィールドです。意味付けは HTML の {{HTMLElement("link")}} 要素と同じです。
- {{HTTPHeader("Retry-After")}}
  - : ユーザーエージェントがフォローアップリクエストをする前に待つべき時間を示します。
- {{HTTPHeader("Server-Timing")}}
  - : 指定されたリクエストレスポンスサイクルについて、1 つ以上の指標および説明を伝えます。
- `Service-Worker-Allowed`
  - : [パス制限](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register)を除去するために、[サービスワーカースクリプトのレスポンス](https://w3c.github.io/ServiceWorker/#service-worker-script-response)にこのヘッダーを記載します。
- {{HTTPHeader("SourceMap")}}
  - : 生成されたコードを[ソースマップ](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)にリンクします。
- {{HTTPHeader("Upgrade")}}
  - : これは HTTP/1.1（のみ）のヘッダーで、すでに確立されているクライアント/サーバー接続を（同じトランスポートプロトコル上で）異なるプロトコルにアップグレードするために使用することができます。例えば、クライアントが HTTP 1.1 から HTTP 2.0 に接続をアップグレードしたり、HTTP や HTTPS 接続を WebSocket にアップグレードするために使用することができます。
- {{HTTPHeader("Priority")}}
  - : 指定された接続における特定のリソースリクエストの優先度に関するヒントを提供します。
    この値は、クライアントの優先度を示すリクエストで送信することも、サーバーがリクエストの優先度を変更することを選択した場合にレスポンスで送信することもできます。

## 実験的なヘッダー

### 帰属レポートヘッダー

[帰属レポート API](/ja/docs/Web/API/Attribution_Reporting_API)を使用すると、開発者がコンバージョンを測定することができます。例えば、ユーザーがあるサイトに埋め込まれた広告をクリックし、ベンダーのサイトで商品を購入した場合、そのコンバージョンに関するレポートにアクセスすることができます。サードパーティーのトラッキングクッキーに頼らずに、様々なヘッダーを頼りに、コンバージョンを示すために一致させる**ソース**と**トリガー**を登録します。

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : 現在のリクエストに対応するレスポンスが、帰属ソースまたはトリガーのいずれかを登録する ことによって、帰属レポートに参加する資格があることを示すために使用され ます。
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : `Attribution-Reporting-Eligible` ヘッダーを含むリクエストに対するレスポンスの一部として記載され、これは帰属ソースを登録するために使用されます。
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : `Attribution-Reporting-Eligible` ヘッダーを含むリクエストに対するレスポンスの一部として記載され、これは帰属トリガーを登録するために使用します。

### クライアントヒント

HTTP [クライアントヒント](/ja/docs/Web/HTTP/Client_hints)は一連のリクエストヘッダーで、端末の種類や ネットワークの状態といったクライアントに関する有益な情報を提供し、 サーバーがそれらの状態に応じて提供されるものを最適化できるようにします。

サーバーは {{HTTPHeader("Accept-CH")}} を使用して、クライアントに関心があるクライアントヒントヘッダーを積極的にリクエストします。クライアントはリクエストされたヘッダーをその後のリクエストに記載することを選べます。

- {{HTTPHeader("Accept-CH")}}
  - : サーバーは Accept-CH ヘッダーフィールドや HTML `<meta>` 要素の [`http-equiv`](/ja/docs/Web/HTML/Element/meta#http-equiv) 属性を使ってクライアントヒントに対応していることを告知できます。
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : サーバーは `Critical-CH` を {{HttpHeader("Accept-CH")}} とともに使用して、受け入れられるクライアントヒントも[重要なクライアントヒント](/ja/docs/Web/HTTP/Client_hints#critical_client_hints)であることを指定します。

クライアントヒントのカテゴリーを以下に一覧します。

#### ユーザーエージェントクライアントヒント

[UA クライアントヒント](/ja/docs/Web/HTTP/Client_hints#user-agent_client_hints)は、ユーザーエージェント、それが動作しているプラット フォーム/アーキテクチャ、ユーザーエージェントまたはプラットフォームで設定され ているユーザーの環境設定についての情報を提供するリクエストヘッダーです。

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : ユーザーエージェントのブランドとバージョンです。
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : ユーザーエージェントの基盤となっているプラットフォームアーキテクチャです。
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : ユーザーエージェントの基盤となっている CPU のビットのアーキテクチャ（例えば "64" ビット）です。
- {{HTTPHeader("Sec-CH-UA-Form-Factor")}} {{experimental_inline}}
  - : ユーザーエージェントのフォームファクター、ユーザーがユーザーエージェントを操作する方法を説明しています。
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : ユーザーエージェントの完全なバージョン文字列です。
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : ユーザーエージェントのブランドリストにある各ブランドの完全版。
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : ユーザーエージェントがモバイル端末で動作している、またはより一般的には「モバイル」ユーザー環境設定を推奨している場合。
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : ユーザーエージェントの端末モデル。
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : ユーザーエージェントの基盤となっているオペレーティングシステム/プラットフォーム。
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : ユーザーエージェントの基盤となっているオペレーティングシステムのバージョン。
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : ユーザーエージェントのバイナリーが 64 ビットの Windows 上の 32 ビットモードで動作しているかどうか。
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : ユーザーのダークまたはライトモードの環境設定。
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : ユーザーの環境設定として、アニメーションやコンテンツレイアウトの変化が少ないことが推奨されていること。
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : 透過率を低下させることを示すユーザーエージェントの環境設定を示すリクエストヘッダーです。

> [!NOTE]
> ユーザーエージェントクライアントヒントは、データの漏洩に使用することができる[権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)の委譲が必要であるため、[フェンスフレーム](/ja/docs/Web/API/Fenced_frame_API)内では利用できません。

#### 端末クライアントヒント

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 画像リソースを選択するために、画面の {{HTTPHeader("DPR")}} クライアントヒントが使用されるリクエストにおける、画像機器とピクセルの比 (DPR) を確認するために使用されるレスポンスヘッダーです。
- {{HTTPHeader("Device-Memory")}}
  - : 利用できるクライアント RAM メモリーのおおよその量。これは[端末メモリー API](/ja/docs/Web/API/Device_Memory_API) の一部です。
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : クライアント端末のピクセル比率（{{Glossary("CSS pixel","CSS ピクセル")}}ごとの物理的デバイスピクセル数）を提供したリクエストヘッダー。
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : クライアントのレイアウトビューポートの幅を {{Glossary("CSS pixel","CSS ピクセル")}}で指定するリクエストヘッダーです。
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : リソースの希望する幅を物理ピクセル（画像の内在サイズ）で示すリクエストヘッダーです。

#### ネットワーククライアントヒント

ネットワーククライアントヒントにより、サーバーはユーザーの選択に基いて送信する情報や ネットワークの帯域幅や遅延時間を選べます。

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : クライアントからサーバーへの接続のおおよその帯域幅（Mbps 単位）。これは[ネットワーク情報 API](/ja/docs/Web/API/Network_Information_API) の一部です。
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : 接続の遅延と帯域幅に最も一致する {{Glossary("effective connection type", "有効接続種別")}}（「ネットワークプロファイル」）。これは[ネットワーク情報 API](/ja/docs/Web/API/Network_Information_API) の一部です。
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : アプリケーション層のラウンドトリップ時間 (RTT)。ミリ秒単位で、サーバーの処理時間を記載します。これは[ネットワーク情報 API](/ja/docs/Web/API/Network_Information_API) の一部です。
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : 文字列 `on` で、ユーザーエージェントがデータ使用量を縮小することを推奨することを示します。

### プライバシー

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : ユーザーのトラッキング環境設定（トラッキング拒否）を示すリクエストヘッダー。
    非推奨のグローバルプライバシーコントロール (GPC) は、 {{HTTPHeader("Sec-GPC")}} ヘッダーを使用してサーバーに通知され、 {{domxref("navigator.globalPrivacyControl")}} を介してクライアントにアクセスできます。
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 対応するリクエストに適用されたトラッキングのステータスを示すレスポンスヘッダー。 DNT と併用します。
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : ウェブサイトやサービスワーカースクリプトが、ユーザーの個人情報を第三者に販売または共有することにユーザーが同意するかどうかを示します。

### セキュリティ

- {{HTTPHeader("Origin-Isolation")}} {{experimental_inline}}
  - : ウェブアプリケーションがそのオリジンを分離できるようにする仕組みを提供します。

### サーバー送信イベント

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : 開発者がネットワークエラー報告ポリシーを宣言できるようにする仕組みを定義します。

### トピック API

トピック API は、関心に基づく広告 (IBA) などの用途を開発者が実装するための仕組みを提供します。
詳しい情報は[トピック API](/ja/docs/Web/API/Topics_API) のドキュメントを参照してください。

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : [トピック API を有効にする機能](/ja/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api)によって生成されたリクエストに対するレスポンスを監視し、呼び出されたサイトの URL から推測される興味深いトピックをマークするために使用されるレスポンスヘッダーです。
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : 広告技術プラットフォームが個人設定された広告を選んで表示するために使用する、関連付けられたリクエストとともに、現在のユーザーが選択したトピックを送信するリクエストヘッダーです。

### その他

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : クライアントは [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header) ヘッダーフィールドを送信して、利用可能な署名を利用する意図を示したり、対応している署名の種類を示したりすることができます。
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : このリクエストが TLS early data で送信されたことを示します。
- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : レスポンスヘッダーは、関連付けられた文書 ({{domxref("Document")}}) がオリジンキー付き[エージェントクラスター](https://tc39.es/ecma262/#sec-agent-clusters)に配置されるべきであることを示すために使用されます。
    この分離により、ユーザーエージェントは、プロセスやスレッドなどのエージェントクラスターに対して、実装固有のリソースをより効率的に割り当てることができます。
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : 連合 ID プロバイダー (IdP) が送信するレスポンスヘッダーで、ログイン状態を設定します。つまり、現在のブラウザーで IdP にユーザーがログインしているかどうかということです。
    これはブラウザーで保存され、 [FedCM API](/ja/docs/Web/API/FedCM_API) で使用あれます。
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header) ヘッダーフィールドは、交換のための署名のリストを伝え、それぞれはその署名の権威を決定して、そして更新する方法についての情報を伴います。
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header) ヘッダーフィールドは、シグネチャに含めるためのレスポンスヘッダーフィールドの順序付きリストを識別します。
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : [投機ルール](/ja/docs/Web/API/Speculation_Rules_API) の JSON 定義を格納したテキストリソースを指す URL のリストを提供します。レスポンスが HTML 文書の場合、これらのルールは文書の投機ルール設定に追加されます。
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : ナビゲーション対象が、よりリスクの高い様々な読み込みモードを使用することをオプトインするために設定します。例えば、オリジン間、同一サイトの[事前レンダリング](/ja/docs/Web/API/Speculation_Rules_API#事前レンダリングの使用)には `Supports-Loading-Mode` の値として `credentialed-prerender` が要求されます。

## 標準外のヘッダー

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : HTTP プロキシーやロードバランサーを経由してウェブサーバーに接続するクライアントの、接続元 IP アドレスを識別します。
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : プロキシーやロードバランサーに接続するクライアントがリクエストした、オリジナルのホストを示します。
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : クライアントがプロキシーやロードバランサーに接続するために使用したプロトコル (HTTP または HTTPS) を識別します。
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : ユーザーがたどるであろうリンクや、ドキュメントが参照する画像、 CSS、 JavaScript などのリソースのドメイン名解決をブラウザーが事前に行う機能である、 DNS プリフェッチを制御します。
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) ヘッダーは、一般の検索エンジンの結果でウェブページをどのように索引付けをするかを示します。このヘッダーは `<meta name="robots" content="…">` と等価です。

## 非推奨のヘッダー

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : 実装固有のヘッダーで、リクエストとレスポンスの連鎖のどこにいてもさまざまな効果を持つことができます。`Cache-Control` ヘッダーがまだ存在しない HTTP/1.0 キャッシュとの後方互換性のために使用します。
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : 可能な問題についての一般的な警告情報。

## 協力

[新しい記事を書いたり](/ja/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header)、既存のものを改善したりすることにご協力ください。

<!-- Check https://github.com/mdn/content/issues/1458 for known missing pages -->

## 関連情報

- [Wikipedia の HTTP ヘッダーの一覧のページ](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)（英語）
- [IANA レジストリー](https://www.iana.org/assignments/http-fields/http-fields.xhtml)（英語）
- [HTTP Working Group](https://httpwg.org/specs/)（英語）
