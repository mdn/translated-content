---
title: Content-Security-Policy (CSP)
short-title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
l10n:
  sourceCommit: 232dc9186a6d79d7e12b3000999ad026d63e995e
---

{{HTTPSidebar}}

HTTP の **`Content-Security-Policy`** レスポンスヘッダーは、ウェブサイト管理者が、あるページにユーザーエージェントが読み込みを許可されたリソースを管理できるようにします。いくつかの例外を除いて、大半のポリシーにはサーバーオリジンとスクリプトエンドポイントの指定を含んでいます。これは{{Glossary("cross-site scripting", "クロスサイトスクリプティング")}}攻撃を防ぐのに役立ちます。

[コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/CSP) がブラウザーにどのように配信されるか、また、その外観や、用途、展開戦略など、詳細については、ガイドをご覧ください。

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

```http
Content-Security-Policy: <policy-directive>; <policy-directive>
```

ここで、 `<policy-directive>` は `<directive> <value>` の形であり、内部に区切り文字はありません。

## ディレクティブ

### フェッチディレクティブ

フェッチディレクティブは、特定のリソース種別を読み込むことができる場所を制御します。

- {{CSP("child-src")}}

  - : [ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)と、{{HTMLElement("frame")}} や {{HTMLElement("iframe")}} のような要素によって読み込まれる入れ子の閲覧コンテキストのための有効なソースを定義します。
    `frame-src` および `worker-src` の[代替](#代替)となります。

- {{CSP("connect-src")}}
  - : スクリプトインターフェイスによって読み込まれる URL を制限します。
- {{CSP("default-src")}}

  - : 別の{{Glossary("Fetch directive", "フェッチディレクティブ")}}に対する代替として提供します。

    他のすべてのフェッチディレクティブの[代替](#代替)となります。

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : {{HTMLElement("fencedframe")}} 要素に読み込む入れ子になった閲覧コンテキストの有効なソースを指定します。
- {{CSP("font-src")}}
  - : {{cssxref("@font-face")}} によって読み込まれるフォントのための有効なソースを指定します。
- {{CSP("frame-src")}}
  - : {{HTMLElement("frame")}} や {{HTMLElement("iframe")}} のような要素によって読み込まれた入れ子のコンテンツの閲覧のための有効なソースを指定します。
- {{CSP("img-src")}}
  - : 画像やファビコンのための有効なソースを定義します。
- {{CSP("manifest-src")}}
  - : アプリケーションのマニフェストファイルのための有効なソースを指定します。
- {{CSP("media-src")}}
  - : {{HTMLElement("audio")}}、{{HTMLElement("video")}}、{{HTMLElement("track")}} 要素によって読み込むメディアのための有効なソースを指定します。
- {{CSP("object-src")}}
  - : {{HTMLElement("object")}} や {{HTMLElement("embed")}} 要素のための有効なソースを指定します。
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 事前にフェッチされるか描画される有効なソースを指定します。
- {{CSP("script-src")}}

  - : JavaScript および WebAssembly のための有効なソースを指定します。

    `script-src-elem` および `script-src-attr` の[代替](#代替)となります。

- {{CSP("script-src-elem")}}
  - : JavaScript の {{HTMLElement("script")}} 要素のための有効なソースを指定します。
- {{CSP("script-src-attr")}}
  - : JavaScript のインラインイベントハンドラーのための有効なソースを指定します。
- {{CSP("style-src")}}

  - : スタイルシートのための有効なソースを指定します。

    `style-src-elem` および `style-src-attr` の[代替](#代替)となります。

- {{CSP("style-src-elem")}}
  - : スタイルシートの {{HTMLElement("style")}} および {{HTMLElement("link")}} 要素に `rel="stylesheet"` がついたものののための有効なソースを指定します。
- {{CSP("style-src-attr")}}
  - : 個々の DOM 要素に適用されるインラインスタイルの有効なソースを指定します。
- {{CSP("worker-src")}}
  - : {{domxref("Worker")}}、{{domxref("SharedWorker")}}、{{domxref("ServiceWorker")}} スクリプトのための有効なソースを指定します。

すべてのフェッチディレクティブには、単一の値として'none' を指定することができ、これは特定のリソースタイプを完全にブロックすることを意味します。または、1つ以上のソース表現値として指定することができ、これはそのリソースタイプの有効なソースを意味します。詳細は、[フェッチディレクティブの構文](#フェッチディレクティブの構文)を参照してください。

#### 代替

一部のフェッチディレクティブは、他にもっと細かいディレクティブの代替として機能します。これは、もっと細かいディレクティブが指定されていない場合、代替ディレクティブがそのリソースタイプに対してポリシーを提供して使用されるということを意味しています。

- `default-src` は他のすべてのフェッチディレクティブの代替となります。
- `script-src` は `script-src-attr` および `script-src-elem` の代替となります。
- `style-src` は `style-src-attr` および `style-src-elem` の代替となります。
- `child-src` は `frame-src` および `worker-src` の代替となります。

例えば、次のようになります。

- `img-src` が省略され、`default-src` があった場合、`default-src` で定義されたポリシーが画像に適用されます。
- `script-src-elem` が省略され、 `script-src` があった場合、 `script-src` で定義されたポリシーが `<script>` 要素に適用されます。
- `script-src-elem` と `script-src` がともに省略された場合、 `default-src` で定義されたポリシーが `<script>` 要素に適用されます。

### 文書ディレクティブ

文書ディレクティブは、ポリシーが適用される文書または[ワーカー](/ja/docs/Web/API/Web_Workers_API)環境のプロパティを管理します。

- {{CSP("base-uri")}}
  - : 文書の {{HTMLElement("base")}} 要素で使用される URL を制限します。
- {{CSP("sandbox")}}
  - : {{HTMLElement("iframe")}} と [`sandbox`](/ja/docs/Web/HTML/Element/iframe#sandbox) 属性に類似した、リクエストされあtリソースに対してサンドボックスを有効にします。

### ナビゲーションディレクティブ

ナビゲーションディレクティブは、例えばユーザーが移動する場所やフォームを送信する場所を管理します。

- {{CSP("form-action")}}
  - : 指定のコンテキストからフォームの送信先として使用される URL を制限します。
- {{CSP("frame-ancestors")}}
  - : {{HTMLElement("frame")}}、{{HTMLElement("iframe")}}、{{HTMLElement("object")}}、{{HTMLElement("embed")}} によってページに埋め込まれた有効な親を指定します。

### 報告ディレクティブ

報告ディレクティブは CSP 違反の報告過程を制御します。 {{HTTPHeader("Content-Security-Policy-Report-Only")}} ヘッダーも参照してください。

- {{CSP("report-to")}}

  - : CSP 違反情報を送信するための報告エンドポイントまたはエンドポイントグループを識別するトークンをブラウザーに提供します。
    トークンが表すエンドポイントは、他にも {{HTTPHeader("Reporting-Endpoints")}} などの HTTP ヘッダーでで指定されている場合があります。

    > [!WARNING]
    > このディレクティブは [`report-uri`](#report-uri) を置き換えることを意図しています。 `report-to` に対応したブラウザーでは、 `report-uri` ディレクティブは無視されます。
    > ただし、`report-to` が広く対応されるようになるまでは、次のようにどちらのヘッダーも指定してください（ここで、`endpoint_name` は別個に提供されたエンドポイントの名前です）。
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### その他のディレクティブ

- {{CSP("require-trusted-types-for")}} {{experimental_inline}}
  - : DOM XSS インジェクションシンクで [Trusted
    Types](/ja/docs/Web/API/Trusted_Types_API) を強制します。
- {{CSP("trusted-types")}} {{experimental_inline}}
  - : [Trusted Types](/ja/docs/Web/API/Trusted_Types_API) ポリシーのホワイトリストを指定するために使用します (Trusted Types は、アプリケーションが DOM XSS インジェクションシンクをロックダウンして、文字列の代わりにスプーフィング不可能な型付きの値のみを受け入れるようにします)。
- {{CSP("upgrade-insecure-requests")}}
  - : 安全でない URL (HTTP で提供されているもの) をすべて安全な URL (HTTPS で提供されているもの) に置き換えたかのように扱うようにユーザーエージェントに指示します。
    このディレクティブは、書き換えが必要な安全でない古い URL が大量にあるウェブサイトを対象としています。

### 非推奨のディレクティブ

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : ページが HTTPS を使用して読み込まれた際に、 HTTP を使用して資産を読み込むことを防止します。

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : ユーザーエージェントにコンテンツセキュリティポリシーの違反を報告するよう指示します。
    これは [`report-to`](#report-to) ディレクティブに置き換えられました。

## フェッチディレクティブの構文

すべてのフェッチディレクティブは、次のどちらかを指定します。

- 単一の値 `'none'` は、特定のリソース型を完全にブロックすべきであることを示します。
- 1 つ以上のソース式値は、そのリソース型に対する有効なソースを示します。

各ソース式は下記に列挙するいずれかの形式を取ります。 すべての形式がすべてのフェッチディレクティブに適用できるわけではないことに注意してください。適用できる形式については、各フェッチディレクティブのドキュメントを参照してください。

`<host-source>` および `<scheme-source>` 形式は引用符なしで、また、他にもすべて引用符で囲む必要があります。

### 'nonce-\<ノンス値>'

この値は、文字列 `nonce-` に続いて {{glossary("Base64", "base64 エンコード")}}された文字列から成ります。この文字列は、サーバーが HTTP レスポンスごとに生成するランダムな値です。例を示します。

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

サーバーは、同じ値をこの文書から読み込もうとする {{htmlelement("script")}} または {{htmlelement("style")}} の `nonce` 属性の値として含めることができます。

ブラウザーは CSP ディレクティブの値と要素属性の値を照合し、一致した場合のみリソースを読み込みます。

ディレクティブがノンスと `unsafe-inline` を持っている場合、ブラウザーは `unsafe-inline` を無視します。

さらなる使用例の情報については、 CSP ガイドの[ノンス](/ja/docs/Web/HTTP/CSP#ノンス)を参照してください。

> [!NOTE]
> ノンスソース式は {{htmlelement("script")}} および {{htmlelement("style")}} 属性にのみ適用できます。

### '\<ハッシュアルゴリズム>-<ハッシュ値>'

この値は、ハッシュアルゴリズムを識別する文字列に続いて、 {{glossary("Base64", "base64 エンコード")}}された文字列から成り、ハッシュ値を表します。

- ハッシュアルゴリズム識別子は、`sha256`、`sha384`、`sha512` のいずれかでなければなりません。
- ハッシュ値は、 `<script>` または `<style>` リソースの base64 エンコードされた{{glossary("Cryptographic_hash_function", "ハッシュ")}}であり、SHA-256、SHA-384、SHA-512 のいずれかのハッシュ関数を使用して計算されます。

例を示します。

```plain
'sha256-cd9827ad...'
```

ブラウザーが文書を受け取ると、 `<script>` および `<style>` 要素のコンテンツをハッシュ化し、その結果を CSP ディレクティブ内のハッシュと照合し、一致した場合のみリソースを読み込みます。

要素が（例えば [`src`](/ja/docs/Web/HTML/Element/script#src) 属性を使用して）外部リソースを読み込んだ場合、その要素には [`integrity`](/ja/docs/Web/HTML/Element/script#integrity) 属性もなければなりません。

ディレクティブにハッシュと `unsafe-inline` がある場合、ブラウザーは `unsafe-inline` を無視します。

より詳しい使用方法については、 CSP ガイドの[ハッシュ](/ja/docs/Web/HTTP/CSP#ハッシュ)の項目を参照してください。

> [!NOTE]
> ハッシュのソース式は、 {{htmlelement("script")}} および {{htmlelement("style")}} 要素にのみ適用できます。

### \<host-source>

リソースの有効なソースである{{glossary("host", "ホスト")}}の [URL](/ja/docs/Web/URI) または IP アドレスです。

スキーム、ポート番号、パスはオプションです。

スキームを省略した場合は、文書のオリジンのスキームが使用されます。

スキームが一致する場合、安全なアップグレードが許可されます。例えば：

- `http://example.com` は `https://example.com` からのリソースも許可します。
- `ws://example.org` は `wss://example.org` からのリソースも許可します。

ワイルドカード (`'*'`) は、サブドメイン、ホストアドレス、ポート番号に使用することができ、それぞれすべての有効な値が有効であることを示します。例を示します。

- `http://*.example.com` は、 HTTP または HTTPS で、 `example.com` のどのサブドメインからのリソースも許可します。

`/` で終わるパスは、それらが接頭辞である任意のパスと照合します。例を示します。

- `example.com/api/` は `example.com/api/users/new` からのリソースを許可します。

`/` で終わらないパスは正確に一致します。例を示します。

- `https://example.com/file.js` は `https://example.com/file.js` からのリソースを許可しますが、 `https://example.com/file.js/file2.js` からは許可しません。

### \<scheme-source>

[スキーム](/ja/docs/Web/URI/Schemes) （`https:` など）です。コロンは必須です。

安全なアップグレードが許可されています。

- `http:` は HTTPS を使用して読み込まれたリソースも許可します。
- `ws:` は WSS を使用して読み込まれたリソースも許可します。

### 'self'

指定された型のリソースは、文書と同じ{{glossary("origin", "オリジン")}}から読み込まれたもののみです。

安全なアップグレードが許可されています。

- この文書が `http://example.com` から提供され、 CSP が `'self'` であれば、 `https://example.com` からのリソースも許可します。
- この文書が `ws://example.com` から提供され、 CSP が `'self'` であれば、 `wss://example.com` からのリソースも許可します。

### 'unsafe-eval'

既定では、 CSP に `default-src` または `script-src` ディレクティブが含まれている場合、引数を JavaScript として評価する JavaScript の機能は無効になります。これには、[`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval)、{{domxref("Window.setTimeout()", "setTimeout()")}} の [`code`](/ja/docs/Web/API/Window/setTimeout#code) 引数、または {{jsxref("Function/Function()", "Function()")}} コンストラクターが含まれます。

この保護を解除するには、 `unsafe-eval` キーワードを使用することができます。これにより、 JavaScript で文字列を動的に評価できるようになります。

> [!WARNING]
> 開発者は `'unsafe-eval'` を避けるべきです。なぜなら、それは CSP が存在する目的の多くを無意味にするからです。

詳しい使い方の情報は、 CSP ガイドの [`eval()` と同様の API](/ja/docs/Web/HTTP/CSP#eval_and_similar_apis) を参照してください。

### 'wasm-unsafe-eval'

既定では、 CSP に `default-src` または `script-src` ディレクティブが含まれている場合、ページは [`WebAssembly.compileStreaming()`](/ja/docs/WebAssembly/JavaScript_interface/compileStreaming_static) などの関数を使用して WebAssembly をコンパイルすることは許可されません。

この保護を解除するには、 `wasm-unsafe-eval` キーワードを使用することができます。これは、 JavaScript の一般的な評価を可能にしないため、 `'unsafe-eval'` よりもはるかに安全な代替手段です。

### 'unsafe-inline'

既定では、 CSP に `default-src` または `script-src` ディレクティブが含まれている場合、インライン JavaScript の実行は許可されません。これには以下が含まれます。

- インラインの `<script>` タグ
- インタ印のイベントハンドラー属性
- `javascript:` URL

同様に、 CSP で `default-src` または `style-src` ディレクティブを記載している場合、インライン CSS は読み込まれません。

- インラインの `<style>` タグ
- {{domxref("HTMLElement.style", "style")}} 属性

この保護を解除し、これらのフォームをすべて読み込むことを許可するには、`unsafe-inline` キーワードを使用することができます。

> [!WARNING]
> 開発者は `'unsafe-inline'` を避けるべきです。なぜなら、 CSP を保有する多くの目的を無効にするからです。

詳しい使い方の情報は、 CSP ガイドの[インライン JavaScript](/ja/docs/Web/HTTP/CSP#inline_javascript) を参照してください。

### 'unsafe-hashes'

既定では、 CSP に `default-src` または `script-src` ディレクティブが含まれている場合、 `onclick` やインライン `style` 属性などのインラインイベントハンドラー属性は実行できません。

`'unsafe-hashes'` 式は、インラインイベントハンドラーやスタイル属性に[ハッシュ式](#ハッシュアルゴリズム-ハッシュ値)を使用することをブラウザーに許可します。例えば、 CSP には次のようなディレクティブが含まれているかもしれません。

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

ハッシュ値がインラインイベントハンドラー属性値または `style` 属性値のハッシュと一致する場合、そのコードは実行が許可されます。

> **メモ:** `'unsafe-hashes'` 値は安全ではありません。
>
> 特に、インラインイベントハンドラー属性のコンテンツが、インライン `<script>` 要素として文書内に注入される攻撃が可能になります。インラインイベントハンドラーが以下であると仮定します。
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> 攻撃者がこのコードを格納するインライン `<script>` 要素を注入できる場合、 CSP は自動的に実行を許可します。
>
> しかし、 `'unsafe-hashes'` は `'unsafe-inline'` よりもはるかに安全です。

### 'inline-speculation-rules'

既定では、 CSP に `default-src` または `script-src` ディレクティブが含まれている場合、インライン JavaScript の実行は許可されません。 `'inline-speculation-rules'` は、ブラウザーが [`type`](/ja/docs/Web/HTML/Element/script/type) 属性が [`speculationrules`](/ja/docs/Web/HTML/Element/script/type/speculationrules) であるインライン `<script>` 要素を読み込むことを許可します。

詳しくは[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) を参照してください。

### 'strict-dynamic'

`'strict-dynamic'` キーワードは、[ノンス](#nonce-ノンス値)または[ハッシュ](#ハッシュアルゴリズム-ハッシュ値)によってスクリプトに付与された信頼を、例えば、 {{domxref("Document.createElement()")}} を使用して新しい `<script>` タグを作成し、 {{domxref("Node.appendChild()")}} を使用して文書内のタグを挿入するなど、動的に読み込まれたスクリプトにも拡張します。

このキーワードがディレクティブに存在する場合、次のソース式の値はすべて無視されます。

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

より詳しい使用に関する情報は、 CSP ガイドの [`strict-dynamic` キーワード](/ja/docs/Web/HTTP/CSP#the_strict-dynamic_keyword)を参照してください。

### 'report-sample'

この式がスクリプトやスタイルを制御するディレクティブに含まれ、そのディレクティブがブラウザーにインラインスクリプト、インラインスタイル、またはイベントハンドラー属性をブロックさせる場合、ブラウザーが生成する[違反レポート](/ja/docs/Web/HTTP/CSP#違反の報告)には、ブロックされたリソースの最初の 40 文字を含む {{domxref("CSPViolationReportBody.sample", "sample")}} プロパティが含まれます。

## ワーカー内の CSP

[ワーカー](/ja/docs/Web/API/Worker)は、一般的に文書 (もしくは親ワーカー) のコンテンツセキュリティポリシーによって管理され*ません*。ワーカーに対してコンテンツセキュリティポリシーを指定するには、ワーカースクリプト自身が要求したリクエストに対して `Content-Security-Policy` レスポンスヘッダーを設定して下さい。

ワーカースクリプトのオリジンがグローバルで一意の識別子の場合 (例えば、URL がデータやブロブのスキーマの場合) は例外です。この場合、ワーカーは文書もしくは作成元のワーカーのコンテンツセキュリティポリシーを継承します。

## 複数のコンテンツセキュリティポリシー

CSP では、`Content-Security-Policy` ヘッダー、{{HTTPHeader("Content-Security-Policy-Report-Only")}} ヘッダーや {{HTMLElement("meta")}} 要素を経由したものを含む、リソースに対して複数のポリシーを指定することができます。

以下の例のように、 `Content-Security-Policy` ヘッダーを複数回使うことができます。ここでは {{CSP("connect-src")}} ディレクティブに特に注意してください。 2 つ目のポリシーでは接続を許可しているにもかかわらず、 1 つ目のポリシーには `connect-src 'none'` が含まれています。追加のポリシーを追加しても、保護されたリソースの機能が*さらに制限することができる*だけで、接続は許可されず、最も厳密なポリシーとして `connect-src 'none'` が強制されます。

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## 例

### 安全ではないインラインコードを無効にし、 HTTPS のリソースのみを許可する

この HTTP ヘッダーは、既定ではリソースの読み込み（画像、フォント、スクリプトなど）を HTTPS 経由のみ許可するように設定します。
`unsafe-inline` および `unsafe-eval` ディレクティブが設定されていないため、インラインスクリプトはブロックされます。

```http
Content-Security-Policy: default-src https:
```

HTML の {{htmlelement("meta")}} 要素を使用しても、同じ制限を適用することができます。

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### インラインコードと HTTPS リソースを許可するが、プラグインを無効にする

このポリシーは、修正すべきインラインコードを多用する既存のサイトで使用することができ、リソースが確実に HTTPS 経由で読み込まれるようにし、プラグインを無効にすることができます。

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### 検査時に違反を報告するが、違反を強制しない

この例では、 {{httpheader("Content-Security-Policy-Report-Only")}} ヘッダーと {{CSP("report-to")}} ディレクティブを使用して、前回と同じ制限を設定します。
この手法は、検査中に違反を報告するために使用しますが、コードの実行をブロックすることはありません。

レポートを送信するエンドポイント (URL)、 HTTP レスポンスヘッダーの {{HTTPHeader("Reporting-Endpoints")}} を使用して定義します。

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

CSP ポリシーでは、 {{CSP("report-to")}} ディレクティブを使用して、具体的なエンドポイントが報告先として選択されます。

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

{{CSP("report-uri")}} {{deprecated_inline}} ディレクティブも上記で指定されていることに注意してください。 `report-to` はまだ広くブラウザーが対応していないためです。

その他の例は、[Content Security Policy (CSP) の実装](/ja/docs/Web/Security/Practical_implementation_guides/CSP) を参照して下さい。

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
