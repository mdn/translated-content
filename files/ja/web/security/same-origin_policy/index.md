---
title: 同一オリジンポリシー
slug: Web/Security/Same-origin_policy
---

{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}

**同一オリジンポリシー**は重要なセキュリティの仕組みであり、ある{{Glossary("origin", "オリジン")}}によって読み込まれた文書やスクリプトが、他のオリジンにあるリソースにアクセスできる方法を制限するものです。

これにより、悪意のある可能性のあるドキュメントを隔離し、起こりうる攻撃のベクターを減らすことができます。例えば、インターネット上の悪意のあるウェブサイトがブラウザー内で JS を実行して、 (ユーザーがサインインしている) サードパーティのウェブメールサービスや (公開 IP アドレスを持たないことで攻撃者の直接アクセスから保護されている) 企業のイントラネットからデータを読み取り、そのデータを攻撃者に中継することを防ぎます。

## オリジンの定義

二つのページの{{Glossary("protocol", "プロトコル")}}、{{Glossary("port", "ポート番号")}} (もしあれば)、{{Glossary("host", "ホスト")}}が等しい場合、両者のページは同じオリジンです。これは「スキーム/ホスト/ポート番号のタプル」または時に単に「タプル」として参照されます (「タプル」は共に全体を構成する三つの部分の組み合わせを表します)。

以下の表は、各行の URL が `http://store.company.com/dir/page.html` と同じオリジンであるかを比較したものです。

| URL                                               | 結果         | 理由                                                |
| ------------------------------------------------- | ------------ | --------------------------------------------------- |
| `http://store.company.com/dir2/other.html`        | 同一オリジン | パスだけが異なる                                    |
| `http://store.company.com/dir/inner/another.html` | 同一オリジン | パスだけが異なる                                    |
| `https://store.company.com/page.html`             | 不一致       | プロトコルが異なる                                  |
| `http://store.company.com:81/dir/page.html`       | 不一致       | ポート番号が異なる (`http://` は既定で 80 番ポート) |
| `http://news.company.com/dir/page.html`           | 不一致       | ホストが異なる                                      |

### オリジンの継承

`about:blank` や `javascript:` の URL のページから実行されたスクリプトは、その URL にオリジンのサーバーについての情報が明示的に含まれていないため、その URL を開いた文書のオリジンを継承します。

> **メモ:** 例えば、 `about:blank` は (例えば {{domxref("Window.open()")}} メカニズムを使用して) 新しい空のポップアップウィンドウを生成し、その中に親スクリプトがコンテンツを書き込むために使用されます。ポップアップウィンドウにもコードが含まれた場合、そのコードはそれを生成したスクリプトと同じオリジンを継承します。

> **警告:** `data:` の URL は新しく、空のセキュリティコンテキストを生成します。

### IE における例外事項

Internet Explorer では、同一オリジンポリシーについて二つの大きな例外があります。

- 信頼済みゾーン
  - : 双方のドメインが*高く信頼されたゾーン* (企業のドメインなど) である場合は、同一オリジンの制限が適用されません。
- ポート番号
  - : IE は同一オリジンの確認要素にポート番号を含みません。従って、 `http://company.com:81/index.html` と `http://company.com/index.html` は同一オリジンとみなされ、制限は適用されません。

これらの例外事項は標準外であり、他のブラウザーはこのような挙動に対応していません。

## オリジンの変更

> **警告:** ここで説明している ({{domxref("document.domain")}} セッターを使用する) 方法は非推奨です。同一オリジンポリシーによるセキュリティ保護を弱め、ブラウザーのオリジンモデルを複雑にして、相互運用性の問題やセキュリティバグを引き起こすためです。

ページのオリジンは、いくつかの制限の下で変更されることがあります。スクリプトを用いると、 {{domxref("document.domain")}} の値を現在のドメインまたは上位ドメインに変更できます。スクリプトによって現在のドメインの上位ドメインへオリジンが変更された場合、より短くなったドメイン名は次回のオリジン検査時に用いられます。

例えば、 `http://store.company.com/dir/other.html` にあるドキュメント内のスクリプトが以下のコードを実行したと仮定します。

```js
document.domain = "company.com";
```

このコードが実行された後、そのページは `http://company.com/dir/page.html` におけるオリジンの検査を通過できます (許可を明示するために `http://company.com/dir/page.html` が自身の `document.domain` を "`company.com`" に変更したと仮定します。詳しくは {{domxref("document.domain")}} を参照してください)。しかし、 `company.com` が自身の `document.domain` を `othercompany.com` に変更することは**できません**。なぜなら `company.com` の上位ドメインではないためです。

ブラウザーはポート番号を個別に検査します。 `document.domain` を呼び出すと、 `document.domain = document.domain` の場合も含め、ポート番号が `null` で上書きされます。従って、スクリプトの最初に `document.domain = "company.com"` を設定しただけでは、 `company.com:8080` と `company.com` とは互いにアクセス**できません**。双方のポートが `null` になるように、双方で設定しなければなりません。

この仕組みにはいくつかの制限があります。例えば、 [`document-domain`](/ja/docs/Web/HTTP/Headers/Feature-Policy/document-domain) の [`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy) が有効になっている場合や、文書がサンドボックス化された [`<iframe>`](/ja/docs/Web/HTML/Element/iframe) 内にある場合は、 "`SecurityError`" の [`DOMException`](/ja/docs/Web/API/DOMException) が発生します。また、この方法でオリジンを変更しても、多くの Web API ([`localStorage`](/ja/docs/Web/API/Window/localStorage), [`indexedDB`](/ja/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/ja/docs/Web/API/BroadcastChannel), [`SharedWorker`](/ja/docs/Web/API/SharedWorker) など) で使用されているオリジンチェックには影響しません。失敗事例のより詳細なリストは、 [Document.domain > Failures](/ja/docs/Web/API/Document/domain#failures) にあります。

> **メモ:** サブドメインから親ドメインへアクセスさせるために `document.domain` を使用する際は、親ドメインとサブドメインの双方で同じ値を `document.domain` に設定することが必要です。この作業は、親ドメインを元の値に戻す際にも必要です。これを怠ると権限エラーが発生します。

## 異なるオリジンへのネットワークアクセス

{{domxref("XMLHttpRequest")}} や {{htmlelement("img")}} 要素を使用する場合など、 同一オリジンポリシーは 2 つのオリジン間における通信を制御します。一般にこれらの通信は 3 つのカテゴリに分類されます。

- 異なるオリジンへの*書き込み*は、概して許可されます。例えばリンクやリダイレクト、フォームの送信などがあります。まれに使用される HTTP リクエストの際は[プリフライト](/ja/docs/Web/HTTP/CORS#preflighted_requests)が必要です。
- 異なるオリジンの*埋め込み*は、概して許可されます。例は後述します。
- 異なるオリジンからの*読み込み*は一般に許可されませんが、埋め込みによって読み取り権限がしばしば漏れてしまいます。例えば埋め込み画像の幅や高さ、埋め込みスクリプトの動作内容、あるいは[埋め込みリソースでアクセス可能なもの](https://bugzilla.mozilla.org/show_bug.cgi?id=629094)を読み取ることができます。

以下に挙げるのは、異なるオリジンに埋め込むことができるリソースの例です。

- JavaScript を `<script src="..."></script>` で使用する場合。構文に関するエラーメッセージは、同一オリジンのスクリプトについてのみ読み取り可能です。
- CSS を `<link rel="stylesheet" href="...">` で使用する場合。 CSS は[緩い構文規則](https://scarybeastsecurity.blogspot.com/2009/12/generic-cross-browser-cross-domain.html)を持っているため、オリジンをまたぐ CSS には適切な `Content-Type` ヘッダーを付加することが必要です。制約はブラウザーにより異なり、ブラウザーごとの詳細は [Internet Explorer](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/gg622939(v=vs.85)?redirectedfrom=MSDN>), [Firefox](https://www.mozilla.org/en-US/security/advisories/mfsa2010-46/), [Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=9877), [Safari](https://support.apple.com/kb/HT4070) ([日本語訳](https://support.apple.com/kb/HT4070?viewlocale=ja_JP)) (CVE-2010-0051 までスクロールしてください), [Opera](https://security.opera.com/cross-domain-data-theft-with-css-load-opera-security-advisories/) の各項目を参照してください。
- {{htmlelement("img")}} で表示された画像。
- {{htmlelement("video")}} および {{htmlelement("audio")}} で再生されたメディア。
- {{htmlelement("object")}} または {{htmlelement("embed")}} で埋め込まれた外部リソース。
- {{cssxref("@font-face")}} が適用されたフォント。異なるオリジンのフォントを許容するブラウザーもありますが、同一オリジンを要求するものもあります。
- {{htmlelement("iframe")}} に関連するあらゆること。このような形のオリジン間のやりとりを防ぐため、サイトに {{HTTPHeader("X-Frame-Options")}} ヘッダーを使用することができます。

### 異なるオリジンへのアクセスを許可する方法

異なるオリジンへのアクセスを許可するには、 [CORS](/ja/docs/Web/HTTP/CORS) を使用してください。 CORS は {{Glossary("HTTP")}} の一部で、ブラウザーがコンテンツの読み込みを許可する他のホストをサーバーが指定できるようにするものです。

### 異なるオリジンへのアクセスをブロックする方法

- 異なるオリジンへの書き込みを防ぐには、リクエスト内の [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf) トークンと呼ばれる推測できないトークンをチェックしてください。このトークンを知っているページのオリジンをまたがった読み込みを防ぎます。
- 異なるオリジンからのリソースの読み込みを防ぐには、そのリソースが埋め込まれないようにします。リソースの埋め込まれると情報が漏えいする場合があるため、多くの場合は埋め込みの抑止が必要になります。
- 異なるオリジンによる埋め込みを防ぐには、リソースの形式が先ほど述べたような埋め込み可能な形式だと思われないようにします。ほとんどの場合、ブラウザーは `Content-Type` を尊重しません。例えば `<script>` タグで HTML 文書を指した場合、ブラウザーは HTML を JavaScript としてパースしようとします。リソースがサイトの入口ではない場合は、埋め込みを抑止するため CSRF トークンも使用するとよいでしょう。

## 異なるオリジンへのスクリプトからの API によるアクセス

{{domxref("HTMLIFrameElement.contentWindow", "iframe.contentWindow")}}, {{domxref("window.parent")}}, {{domxref("window.open")}}, {{domxref("window.opener")}} といった JavaScript API を用いると、ドキュメントが直接互いに参照することができます。2 つのドキュメントが同一のオリジンではない場合、 {{domxref("Window")}} オブジェクトや {{domxref("Location")}} オブジェクトなど、限られたオブジェクトにのみアクセスすることができます。詳しくは次の 2 つのセクションで説明します。

{{domxref("window.postMessage")}} を使用すると、異なるオリジンの文書間における通信がさらに可能となります。

仕様書: [HTML Living Standard § Cross-origin objects](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects).

### Window

以下に示した `Window` のプロパティは、異なるオリジンからのアクセスが許可されています。

| メソッド                          |
| --------------------------------- |
| {{domxref("window.blur")}}        |
| {{domxref("window.close")}}       |
| {{domxref("window.focus")}}       |
| {{domxref("window.postMessage")}} |

| 属性                           |                   |
| ------------------------------ | ----------------- |
| {{domxref("window.closed")}}   | 読み取り専用      |
| {{domxref("window.frames")}}   | 読み取り専用      |
| {{domxref("window.length")}}   | 読み取り専用      |
| {{domxref("window.location")}} | 読み取り/書き込み |
| {{domxref("window.opener")}}   | 読み取り専用      |
| {{domxref("window.parent")}}   | 読み取り専用      |
| {{domxref("window.self")}}     | 読み取り専用      |
| {{domxref("window.top")}}      | 読み取り専用      |
| {{domxref("window.window")}}   | 読み取り専用      |

一部のブラウザーでは、仕様書で定められたものより多くのプロパティでアクセスが許可されています。

### Location

以下に示した `Location` のプロパティは、異なるオリジンからのアクセスが許可されています。

| メソッド                        |
| ------------------------------- |
| {{domxref("location.replace")}} |

| 属性                         |              |
| ---------------------------- | ------------ |
| {{domxref("URLUtils.href")}} | 書き込みのみ |

一部のブラウザーでは、仕様書で定められたものより多くのプロパティでアクセスが許可されています。

## オリジンをまたいだデータストレージアクセス

[ウェブストレージ](/ja/docs/Web/API/Web_Storage_API)や [IndexedDB](/ja/docs/Web/API/IndexedDB_API) など、ブラウザー内部に保存されるデータへのアクセスは、オリジンによって権限が分かれています。それぞれのオリジンが個別にストレージを持ち、あるオリジンの JavaScript から別のオリジンに属するストレージを読み書きすることはできません。

{{glossary("Cookie", "Cookie")}} におけるオリジンの定義は異なります。ページは自身のドメインまたは任意の親ドメイン (親ドメインが public suffix ではない場合に限る) 用の Cookie を設定できます。 ドメインが public suffix であるかを判断する際、Firefox と Chrome は [Public Suffix List](https://publicsuffix.org/) を使用します。 Internet Explorer は独自の方法で public suffix であるかを判断します。使用しているスキーム (HTTP/HTTPS) やポートに関係なく、ブラウザーはサブドメインも含めて Cookie を使用可能にします。Cookie の設定時に `Domain`, `Path`, `Secure`, `HttpOnly` の各フラグを用いることで、その Cookie の利用範囲を制限できます。Cookie を読み取るとき、Cookie を設定した場所から知ることはできません。安全な https 接続のみ使用していたとしても、参照している Cookie は安全でない接続を通じて設定された可能性があります。

## 関連情報

- [Same Origin Policy at W3C](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [Same-origin policy at web.dev](https://web.dev/secure/same-origin-policy)
- {{httpheader("Cross-Origin-Resource-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}

## 原典情報

- 著者: Jesse Ruderman
