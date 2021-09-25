---
title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
tags:
  - CSP
  - Content Security Policy
  - HTTP
  - Reference
  - セキュリティ
  - header
browser-compat: http.headers.csp.Content-Security-Policy
translation_of: Web/HTTP/Headers/Content-Security-Policy
---
{{HTTPSidebar}}

HTTP の **`Content-Security-Policy`** レスポンスヘッダーは、ウェブサイト管理者が、あるページにユーザーエージェントが読み込みを許可されたリソースを管理できるようにします。いくつかの例外を除いて、大半のポリシーにはサーバーオリジンとスクリプトエンドポイントの指定を含んでいます。これはクロスサイトスクリプティング攻撃 ({{Glossary("Cross-site_scripting", "クロスサイトスクリプティング")}}) を防ぐのに役立ちます。

より詳細な情報は、[Content Security Policy (CSP)](/ja/docs/Web/HTTP/CSP) の入門記事を参照してください。

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

## 構文

```
Content-Security-Policy: <policy-directive>; <policy-directive>
```

ここで、 `<policy-directive>` は `<directive> <value>` の形であり、内部に区切り文字はありません。

## ディレクティブ

### フェッチディレクティブ

フェッチディレクティブは、特定のリソース種別を読み込むことができる場所を制御します。

- {{CSP("child-src")}}

  - : [ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)と、{{HTMLElement("frame")}} や {{HTMLElement("iframe")}} のような要素によって読み込まれる入れ子の閲覧コンテキストのための有効なソースを定義します。

    > **警告:** 複合した閲覧コンテキストやワーカーを制御するには、 **`child-src`** の代わりに、それぞれ {{CSP("frame-src")}} および {{CSP("worker-src")}} を使用してください。

- {{CSP("connect-src")}}
  - : スクリプトインターフェイスによって読み込まれる URL を制限します。
- {{CSP("default-src")}}
  - : 別の {{Glossary("Fetch directive", "Fetch ディレクティブ")}}に対する代替として提供します。
- {{CSP("font-src")}}
  - : {{cssxref("@font-face")}} によって読み込まれるフォントのための有効なソースを指定します。
- {{CSP("frame-src")}}
  - : {{HTMLElement("frame")}} や {{HTMLElement("iframe")}} のような要素によって読み込まれる入れ子のコンテンツの閲覧のための有効なソースを指定します。
- {{CSP("img-src")}}
  - : 画像やファビコンのための有効なソースを定義します。
- {{CSP("manifest-src")}}
  - : アプリケーションのマニフェストファイルのための有効なソースを指定します。
- {{CSP("media-src")}}
  - : {{HTMLElement("audio")}}、{{HTMLElement("video")}}、{{HTMLElement("track")}} 要素によって読み込むメディアのための有効なソースを指定します。
- {{CSP("object-src")}}

  - : {{HTMLElement("object")}}、 {{HTMLElement("embed")}}、{{HTMLElement("applet")}} 要素のための有効なソースを指定します。

    > **Note:** `object-src` で制御される要素は、おそらく古い HTML 要素に該当すると見なされ、標準化された新しい機能が利用できません (セキュリティ属性の `sandbox` や `<iframe>` の `allow` など)。従って、このフェッチディレクティブで制限を掛けることが**推奨されます** (例えば、可能であれば `object-src 'none'` を設定するなど)。

- {{CSP("prefetch-src")}}{{experimental_inline}}
  - : 事前にフェッチされるか描画される有効なソースを指定します。
- {{CSP("script-src")}}
  - : JavaScript のための有効なソースを指定します。
- {{CSP("script-src-elem")}}{{experimental_inline}}
  - : JavaScript の {{HTMLElement("script")}} 要素のための有効なソースを指定します。
- {{CSP("script-src-attr")}}{{experimental_inline}}
  - : JavaScript のインラインイベントハンドラーのための有効なソースを指定します。
- {{CSP("style-src")}}
  - : スタイルシートのための有効なソースを指定します。
- {{CSP("style-src-elem")}}{{experimental_inline}}
  - : スタイルシートの {{HTMLElement("style")}} および {{HTMLElement("link")}} 要素に `rel="stylesheet"` がついたものののための有効なソースを指定します。
- {{CSP("style-src-attr")}}{{experimental_inline}}
  - : 個々の DOM 要素に適用されるインラインスタイルの有効なソースを指定します。
- {{CSP("worker-src")}}{{experimental_inline}}
  - : {{domxref("Worker")}}、{{domxref("SharedWorker")}}、{{domxref("ServiceWorker")}} スクリプトのための有効なソースを指定します。

### 文書ディレクティブ

文書ディレクティブは、ポリシーが適用される文書または[ワーカー](/ja/docs/Web/API/Web_Workers_API)環境のプロパティを管理します。

- {{CSP("base-uri")}}
  - : 文書の {{HTMLElement("base")}} 要素で使用される URL を制限します。
- {{CSP("sandbox")}}
  - : {{HTMLElement("iframe")}} と {{htmlattrxref("sandbox", "iframe")}} 属性に類似した要求リソースに対してサンドボックスを有効にします。

### ナビゲーションディレクティブ

ナビゲーションディレクティブは、例えばユーザーが移動する場所やフォームを送信する場所を管理します。

- {{CSP("form-action")}}
  - : 指定のコンテキストからフォームの送信先として使用される URL を制限します。
- {{CSP("frame-ancestors")}}
  - : {{HTMLElement("frame")}}、{{HTMLElement("iframe")}}、{{HTMLElement("object")}}、{{HTMLElement("embed")}}、{{HTMLElement("applet")}} によってページに埋め込まれた有効な親を指定します。
- {{CSP("navigate-to")}}{{experimental_inline}}
  - : {{HTMLElement("form")}} ({{CSP("form-action")}} が指定されていない場合)、{{HTMLElement("a")}}、{{DOMxRef("window.location")}}、{{DOMxRef("window.open")}} など、あらゆる方法で文書からナビゲーションを行うことができる URL を制限します。

### 報告ディレクティブ

報告ディレクティブは CSP 違反の報告過程を制御します。 {{HTTPHeader("Content-Security-Policy-Report-Only")}} ヘッダーも参照してください。

- {{CSP("report-uri")}}{{deprecated_inline}}

  - : ユーザーエージェントにコンテンツセキュリティポリシーの違反を報告するよう指示します。これらの違反の報告は、 {{Glossary("JSON")}} 文書を HTTP の `POST` リクエストで指定された URI に送信することで行われます。

     > **Warning:** {{CSP("report-to")}} ディレクティブは非推奨の **`report-uri`** ディレクティブを置き換えることを意図していますが、 {{CSP("report-to")}} はまだ多くのブラウザーが対応していません。そのため、ブラウザーで {{CSP("report-to")}} の対応が行われるまでは、現在のブラウザーとの互換性のため、 **`report-uri`** と {{CSP("report-to")}} の両方を指定することができます。
    >
    > ```html
    > Content-Security-Policy: ...; report-uri https://endpoint.example.com; report-to groupname
    > ```
    >
    > {{CSP("report-to")}} に対応しているブラウザーでは、 **`report-uri`** ディレクティブは無視されます。

- {{CSP("report-to")}}{{experimental_inline}}
  - : `SecurityPolicyViolationEvent` を発生させます。

### その他のディレクティブ

- {{CSP("require-sri-for")}}{{experimental_inline}}
  - : ページ上のスクリプトやスタイルに {{Glossary("SRI")}} の使用を要求します。
- {{CSP("require-trusted-types-for")}}{{experimental_inline}}
  - : DOM XSS インジェクションシンクで [Trusted
    Types](https://w3c.github.io/webappsec-trusted-types/dist/spec/) を強制します。
- {{CSP("trusted-types")}}{{experimental_inline}}
  - :  [Trusted Types](https://w3c.github.io/webappsec-trusted-types/dist/spec/) ポリシーのホワイトリストを指定するために使用します (Trusted Types は、アプリケーションが DOM XSS インジェクションシンクをロックダウンして、文字列の代わりにスプーフィング不可能な型付きの値のみを受け入れるようにします)。
- {{CSP("upgrade-insecure-requests")}}
  - : 安全でない URL (HTTP で提供されているもの) をすべて安全な URL (HTTPS で提供されているもの) に置き換えたかのように扱うようにユーザエージェントに指示します。このディレクティブは、書き換えが必要な安全でない古い URL が大量にあるウェブサイトを対象としています。

### 非推奨のディレクティブ

- {{CSP("block-all-mixed-content")}}{{deprecated_inline}}
  - : ページが HTTPS を使用して読み込まれた際に、 HTTP を使用して資産を読み込むことを防止します。
- {{CSP("plugin-types")}}{{deprecated_inline}}
  - : 読み込まれるリソースの種類を限定することで、文書に埋め込まれるプラグインの組を制限します。
- {{CSP("referrer")}}{{deprecated_inline}}{{non-standard_inline}}
  - : ページから離れる際の [Referer](/ja/docs/Web/HTTP/Headers/Referer) (綴り注意) ヘッダー内の情報を指定するために使用されていました。代わりに {{HTTPHeader("Referrer-Policy")}} ヘッダーを使用してください。

## 値

### キーワード値

- `none`
  - : すべてのリソースの読み込みを許可しません。
- `self`
  - : 現在のオリジンからのみリソースの読み込みを許可します。
- `strict-dynamic` {{experimental_inline}}
  - : TBD
- `report-sample` {{experimental_inline}}
  - : TBD

### unsafe キーワード値

- `unsafe-inline`
  - : インラインリソースの使用を許可します。
- `unsafe-eval`
  - : {{jsxref("Global_Objects/eval", "eval")}} や {{domxref("Window.setImmediate", "setImmediate")}}{{non-standard_inline}}、`window.execScript` {{non-standard_inline}} のような動的コード評価の使用を許可します。
- `unsafe-hashes` {{experimental_inline}}
  - : TBD
- `unsafe-allow-redirects` {{experimental_inline}}
  - : TBD

### ホスト値

- Host
  - : 指定されたホストからのリソースの読み込みのみを許可します。オプションでスキーム、ポート番号、パスを指定することができます。例: `example.com`, `*.example.com`, `https://*.example.com:12/path/to/file.js`
- Scheme:
  - : 特定のスキームによるリソースの読み込みのみを許可します。常に "`:`" で終える必要があります。例: `https:`, `http:`, `data:` など

### その他の値

- nonce-\*
  - : スクリプトを許可するための暗号化された (一度しか使われない) ノンスです。サーバーは、ポリシーを送信するたびに、一意のノンス値を生成する必要があります。リソースのポリシーを迂回することは容易ではないため、推測されないノンスを提供することが重要です。これは [script の nonce 属性](/ja/docs/Web/HTML/Element/script#attr-nonce)と組み合わせて使用します。例: `nonce-DhcnhD3khTMePgXwdayK9BsMqXjhguVV`
- sha\*-\*
  - : sha256、sha384、sha512 のいずれかです。その後にダッシュと sha\* の値が続きます。例: `sha256-jzgBGA4UWFFmpOBq0JpdsySukE1FrEN5bUpoK8Z29fY=`

<h2 id="CSP_in_workers">ワーカー内の CSP</h2>

[ワーカー](/ja/docs/Web/API/Worker)は、一般的に文書 (もしくは親ワーカー) のコンテンツセキュリティポリシーによって管理され*ません*。ワーカーに対してコンテンツセキュリティポリシーを指定するには、ワーカースクリプト自身が要求したリクエストに対して `Content-Security-Policy` レスポンスヘッダーを設定して下さい。

ワーカースクリプトのオリジンがグローバルで一意の識別子の場合 (例えば、URL がデータやブロブのスキーマの場合) は例外です。この場合、ワーカーは文書もしくは作成元のワーカーのコンテンツセキュリティポリシーを継承します。

## 複数の CSP

CSP では、`Content-Security-Policy` ヘッダー、{{HTTPHeader("Content-Security-Policy-Report-Only")}} ヘッダーや {{HTMLElement("meta")}} 要素を経由したものを含む、リソースに対して複数のポリシーを指定することができます。

以下の例のように、 `Content-Security-Policy` ヘッダーを複数回使うことができます。ここでは {{CSP("connect-src")}} ディレクティブに特に注意してください。 2 つ目のポリシーでは接続を許可しているにもかかわらず、 1 つ目のポリシーには `connect-src 'none'` が含まれています。追加のポリシーを追加しても、保護されたリソースの機能が*さらに制限することができる*だけで、接続は許可されず、最も厳密なポリシーとして `connect-src 'none'` が強制されます。

```
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## 例

例: 安全でないインラインの eval を無効にし、https 経由でのリソース (画像、フォント、スクリプトなど) 読み込みを許可します。

### HTTP ヘッダーの使用

```
Content-Security-Policy: default-src https:
```

### HTML の meta 要素の使用

```
<meta http-equiv="Content-Security-Policy" content="default-src https:">
```

例: 修正のためにインラインコードを多用している既存のサイトで、https 経由でのみ読み込まれるリソースを明確にし、プラグインを無効にします。

```
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

例: 上記のポリシーを実装せず、代わりに、発生するであろう違反を報告します。

```
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/
```

その他の例は、[Mozilla
Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security#Examples_5) を参照して下さい。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [コンテンツセキュリティポリシーを学ぶ](/ja/docs/Web/HTTP/CSP)
- [WebExtension のコンテンツセキュリティ](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Adopting a strict policy](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - コンテンツセキュリティポリシーを評価する
