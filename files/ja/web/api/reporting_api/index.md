---
title: レポート API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: dd1e8282ab6621b62399d65cad46177d426d1d93
---

{{DefaultAPISidebar("Reporting API")}}{{AvailableInWorkers}}

レポート API は、ウェブアプリケーションが、さまざまなプラットフォーム機能（たとえば、[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP)、[権限ポリシー](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy)、機能の非推奨に関するレポートなど）に基づいて、一貫性のある方法でレポートを提供するための汎用的なレポート機能を提供します。

## 概念と使い方

ウェブプラットフォームには、バグ修正や他の方法でウェブサイトを改善しようとするウェブ開発者にとって有用な情報を生み出す、さまざまな機能や問題が存在します。そのような情報には、次のようなものがあります。

- [コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP)違反。
- [権限ポリシー](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy)違反。
- [一貫性ポリシー](/ja/docs/Web/HTTP/Reference/Headers/Integrity-Policy)違反。
- [Cross-Origin-Embedder-Policy](/ja/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy) 違反。
- 非推奨機能の使用（ブラウザーでまもなく動作しなくなる機能を使用している場合）。
- クラッシュの発生。
- ユーザーエージェントによる干渉の発生（セキュリティ上のリスクとみなされたためや、自動再生される音声のように単に煩わしいという理由で、ブラウザーがコードの動作をブロックする場合など）。

レポート API の目的は、開発者が JavaScript オブジェクトとして表現されたレポートの形で、こうした情報を利用できるようにするための、一貫性のあるレポート提供メカニズムを提供することです。

レポートは、JavaScript のレポートオブザーバーを介して取得するか、リモートサーバーのエンドポイントに送信することができます。
レポートの種類と、これら 2 つのレポート作成方法については、以下の節で詳しく説明します。

### レポートの種類

レポートオブザーバーに送信されるレポートは、辞書オブジェクトのインスタンスです。
これらはすべて `type`、`url`、`body` プロパティを持ち、`type` はレポートの種類を示し、`body` はそのレポートの種類に固有のものです。

レポートエンドポイントに送信されるレポートは、基本的に同じものです。
唯一の違いは、サーバーレポートが、`user_agent` および `age` フィールドが追加されたオブジェクトの JSON シリアライズであるという点です。
以下の表には、文書化されているレポートの種類、それに対応するレポート辞書、および違反に関する注記が記載されています。
なお、JavaScript では観測できない `crash` レポート（観測元のページがクラッシュしているため）を除き、記載されているすべてのレポートはオブザーバーで確認可能であり、サーバーエンドポイントへ送信することができます。

| 種類                           | レポートオブジェクト                            | メモ                                                                                                 |
| ------------------------------ | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `coep`                         | {{domxref("COEPViolationReport")}}              | {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) 違反                                           |
| `coop`                         | `COOPViolationReport`                           | {{httpheader("Cross-Origin-Opener-Policy")}} (COOP) 違反                                             |
| `crash`                        | {{domxref("CrashReport")}}                      | ブラウザーのクラッシュレポート                                                                       |
| `csp-violation`                | {{domxref("CSPViolationReport")}}               | [コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/Guides/CSP) 違反                            |
| `deprecation`                  | {{domxref("DeprecationReport")}}                | このサイトで使用されている非推奨の機能。                                                             |
| `integrity-violation`          | {{domxref("IntegrityViolationReport")}}         | {{httpheader("Integrity-Policy")}} 違反                                                              |
| `intervention`                 | {{domxref("InterventionReport")}}               | ユーザーエージェントによってブロックされる機能（ページのパフォーマンスに著しい影響を与える広告など） |
| `permissions-policy-violation` | {{domxref("PermissionsPolicyViolationReport")}} | {{httpheader("Permissions-Policy")}} 違反                                                            |

これらの種類のリストは、`ReportingObserver()` コンストラクターに渡される [`options.types`](/ja/docs/Web/API/ReportingObserver/ReportingObserver#types) 引数にも記載されています。

### レポートオブザーバー

レポートは、レポートの取得対象となるウェブサイト内で JavaScript によって作成された {{domxref("ReportingObserver")}} オブジェクトを介して取得できます。
この方法は、サーバーへのレポート送信ほど確実ではありません。ページがクラッシュするとレポートの取得ができなくなる可能性があるためです。しかし、設定が簡単で、柔軟性が高いという利点があります。
`ReportingObserver` オブジェクトは、{{domxref("ReportingObserver.ReportingObserver", "ReportingObserver()")}} コンストラクターを使用して作成され、このコンストラクターには 2 つの引数が渡されます。

- 2 つの引数を取るコールバック関数。引数には、オブザーバーのレポートキューにあるレポートの配列と、同じ `ReportingObserver` オブジェクトのコピーが含まれます。これにより、コールバック内部から直接の監視制御が可能になります。このコールバックは、監視が開始されたときに実行されます。
- 収集するレポートの[種類](/ja/docs/Web/API/ReportingObserver/ReportingObserver#types)を指定したり、オブザーバーの作成前に生成されたレポートも監視対象とするかどうか (`buffered: true`) を設定できるオプション辞書。

その後、オブザーバー上でレポートの収集を開始するためのメソッド ({{domxref("ReportingObserver.observe()")}})、レポートキューに現在あるレポートを取得するためのメソッド ({{domxref("ReportingObserver.takeRecords()")}})、オブザーバーを切断してレコードの収集を停止するためのメソッド ({{domxref("ReportingObserver.disconnect()")}}) が利用可能になります。

### レポートサーバーのエンドポイント

レポートは、ユーザーエージェントによって、{{HTTPHeader("Content-Type")}} を `application/reports+json` に設定した `POST` 操作を通じて、リモートのサーバーエンドポイントに送信することもできます。
これらは、それぞれの[レポート型](#レポート型)に対応する辞書のシリアライズ形式です。
たとえば、CSP 違反レポートは、{{domxref("CSPViolationReport")}} オブジェクトのシリアライズデータです。

エンドポイントに送信されたレポートは、それに関連するウェブサイトの稼働状況とは無関係に取得することができます。これはとても有用です。例えば、クラッシュによってウェブサイトがダウンし、すべての処理が停止してしまった場合でも、レポートを取得することで、開発者は原因を特定するための手がかりを得ることができます。

> [!NOTE]
> レポートの配信が確実に保証されるわけではありません。重大なエラーが発生した場合、レポートが正常に取得されない可能性があります。

HTTP の {{httpheader("Reporting-Endpoints")}} ヘッダーは、ユーザーエージェントがレポートを送信するために利用可能な、さまざまなエンドポイントの名前と URL を指定するために使用されます。
これにより、特定の HTTP レスポンスヘッダー内でエンドポイント（場合によっては複数のエンドポイント）を指定し、関連するレポートがどのエンドポイントに送信されるかを示すことができます。
`crash`、 `deprecation`、`intervention` レポートなど、関連する HTTP ヘッダーを持たないレポートタイプは、通常、[`"default"` レポート送信エンドポイント](/ja/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) にレポートを送信します（これは、`Reporting-Endpoints` ヘッダーを使用して指定された、"default" という名前のエンドポイントにすぎません）。

各レポート型のサーバーエンドポイントを指定する方法は、以下の通りです。

`coep`

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} または {{HTTPHeader("Cross-Origin-Embedder-Policy-Report-Only")}} の `report-to` 引数

`csp-violation`

- {{HTTPHeader("Content-Security-Policy")}} または {{HTTPHeader("Content-Security-Policy-Report-Only")}} の {{CSP("report-to")}} ディレクティブ

`integrity-violation`

- {{httpheader("Integrity-Policy")}} または {{httpheader("Integrity-Policy-Report-Only")}} の [`endpoints`](/ja/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) フィールド

`permissions-policy-violation`

- {{HTTPHeader("Permissions-Policy")}} または {{HTTPHeader("Permissions-Policy-Report-Only")}} の `report-to` 引数
- [`"default"` エンドポイント](/ja/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint)

`crash`

- `crash-reporting` エンドポイント
- `default` エンドポイント

`deprecation`

- `default` エンドポイント

`intervention`

- `default` エンドポイント

### WebDriver によるレポートの生成

レポート API の仕様書では、テストレポートの生成の [WebDriver](/ja/docs/Web/WebDriver) 拡張機能も定義されています。これにより、自動化処理中にレポート生成をシミュレートすることができます。WebDriver を介して生成されたレポートは、読み込まれたウェブサイト内に存在する登録済みの `ReportingObserver` オブジェクトによって監視されます。この機能については、現時点ではまだドキュメント化されていません。

## インターフェイス

- {{domxref("CrashReportContext")}}
  - : 現在の最上位の閲覧コンテキストについて、任意のデータを記録するためのメソッドを提供します。このデータは、ブラウザーがクラッシュした際に {{domxref("CrashReport")}} に追加され、レポート送信先エンドポイントへ送信されます。
- {{domxref("ReportingObserver")}}
  - : レポートが生成されるたびに、それを収集・参照するために使用できるオブジェクト。

### 関連インターフェイス

- {{domxref("SecurityPolicyViolationEvent")}}
  - : 要素、文書、ワーカーの CSP に違反があった際に、それらに対して発生する `securitypolicyviolation` イベントのイベントオブジェクトを表します。
    これは、HTTP の [コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/Guides/CSP) 仕様の一部として定義されています。

## 辞書

- {{domxref("COEPViolationReport")}}
  - : {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) 違反の詳細を保持します。
- {{domxref("CrashReport")}}
  - : ブラウザークラッシュの詳細を保持します。
- {{domxref("CSPViolationReport")}}
  - : CSP 違反の詳細を保持します。
    これは、HTTP の[コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/Guides/CSP) 仕様の一部として定義されています。
- {{domxref("DeprecationReport")}}
  - : そのウェブサイトが使用している、非推奨となったウェブプラットフォーム機能の詳細を保持します。
- {{domxref("InterventionReport")}}
  - : ウェブサイトからのリクエストが、セキュリティ上の理由などでブラウザによって拒否された際に生成される、干渉レポートの詳細が含まれています。
- {{domxref("IntegrityViolationReport")}}
  - : {{httpheader("Integrity-Policy")}} で要求されるサブリソースの整合性保証を満たしていないためにブロックされたリソース、または {{httpheader("Integrity-Policy-Report-Only")}} を使用して設定された report-only ポリシーによってブロックされるリソースに関する情報が含まれています。
    これは、[サブリソースの完全性](/ja/docs/Web/Security/Defenses/Subresource_Integrity)仕様の一部として定義されています。
- {{domxref("PermissionsPolicyViolationReport")}}
  - : {{httpheader("Permissions-Policy")}} 違反の詳細を保持します。

## 関連 HTTP ヘッダー

これらの HTTP レスポンスヘッダーは、レポートが送信されるエンドポイントを定義します。

- {{HTTPHeader("Reporting-Endpoints")}}
  - : レポート用エンドポイントの名前と URL を設定します。
    これらのエンドポイントは、`report-to` ディレクティブで使用できます。このディレクティブは、{{httpheader("Content-Security-Policy")}} や {{HTTPHeader("Content-Security-Policy-Report-Only")}} を含む、さまざまな HTTP ヘッダーと組み合わせて使用できます。
- {{HTTPHeader("Report-To")}} {{deprecated_inline}}
  - : レポート API からは除外されましたが、一部のブラウザーはまだこれに対応しています。これは、レポートエンドポイントグループの名前と URL を設定するもので、特に`Reporting-Endpoints`への対応がまだ更新されていない[ネットワークエラーのロギング](/ja/docs/Web/HTTP/Guides/Network_Error_Logging)など、いくつかの HTTP ヘッダーと組み合わせて使用される場合があります。その他のレポート API のレポートでは、将来的に確実に対応されるよう、代わりに `Reporting-Endpoints` を使用してください。

## 例

### 非推奨の機能のレポート

この例では、`"deprecation"` レポートを、{{domxref("ReportingObserver")}} を使用して、そのレポートを報告するページ内で確認する方法を示しています。
なお、特定の HTTP ヘッダーの設定を必要とせず、MDN のライブサンプルとして実行できるため、ここでは `"deprecation"` レポートを表示するようにしています。

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 200px;
  margin: 10px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

まず、型が `"deprecation"` のレポートを監視するために、新しい {{domxref("ReportingObserver")}} オブジェクトを作成し、レポートを受信してログに記録するコールバックを渡します。

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reports.forEach((report) => {
    log(JSON.stringify(report, null, 2));
  });
}, options);

// オブザーバーを起動
observer.observe();
```

次に、同期 XHR（非推奨の API）を使用する以下のコードを呼び出します。
なお、これはオブザーバーの後に定義されており、オブザーバーの実行中に一度起動されます。

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/", false); // false = 同期モード（非推奨）
xhr.send();
```

#### 結果

非推奨レポートに対応しているブラウザーでは、下にレポートが表示されるはずです。
なお、`type` は `"deprecation"` であることに注意してください。

{{EmbedLiveSample("Using the `ReportingObserver` interface", "100%", "280px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Content Security Policy](/ja/docs/Web/HTTP/Guides/CSP)
- [`Permissions-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
