---
title: コンテンツセキュリティポリシー (CSP)
slug: Web/HTTP/CSP
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

**コンテンツセキュリティポリシー** ({{Glossary("CSP")}}) は、クロスサイトスクリプティング ({{Glossary("Cross-site_scripting")}}) やデータインジェクション攻撃などのような、特定の種類の攻撃を検知し、影響を軽減するために追加できるセキュリティレイヤーです。
これらの攻撃はデータの窃取からサイトの改ざん、マルウェアの拡散に至るまで、様々な目的に用いられます。

CSP は完全な後方互換性を保って設計されています（ただし、 CSP 2 については後方互換性がない点もあり、明示的に記述されています。詳細は[こちら](https://www.w3.org/TR/CSP2)の 1.1 章を参照してください）。
CSP に対応していないブラウザーは CSP を無視し、通常通り機能します。CSP が追加するようなさらなる制限はなく、標準の[同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)の保護のみが適用されます。

CSP を有効にするには、ウェブサーバーから {{HTTPHeader("Content-Security-Policy")}} HTTP ヘッダーを返すように設定する必要があります（`X-Content-Security-Policy` ヘッダーに関する記述が時々ありますが、これは古いバージョンのものであり、今日このヘッダーを指定する必要はありません）。

他にも、 {{HTMLElement("meta")}} 要素を用いてポリシーを指定することも可能です。例を挙げます。

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; img-src https://*; child-src 'none';" />
```

> [!NOTE]
> 一部の機能、例えば CSP 違反レポートの送信などは HTTP ヘッダーを使用する場合にのみ利用できます。

## 脅威

### クロスサイトスクリプティングの軽減

CSP の第一の目的は XSS 攻撃の軽減と報告です。 XSS 攻撃とは、サーバーから取得したコンテンツをブラウザーが信頼する性質を悪用した攻撃です。
ブラウザーはコンテンツの送信元を信頼するため、たとえ実際の送信元が見かけ上とは異なっていたとしても、悪意あるスクリプトが被害者のブラウザー上で実行されてしまいます。

サーバー管理者が CSP を利用する場合、ブラウザーが実行可能なスクリプトの有効なソースとみなすドメインを指定することにより、 XSS の発生する箇所を削減・根絶することができます。
CSP に対応したブラウザーは、サーバーから指定された許可リストに載っているドメインのスクリプトのみ実行し、他のスクリプトはすべて無視します（インラインスクリプトや HTML 属性値のイベントハンドラーも無視する対象に含まれます）。

究極的な防衛策として、スクリプトを決して実行させたくないサイトは、スクリプトの実行を全面的に拒否することも可能です。

### パケット盗聴攻撃の軽減

取得するコンテンツのドメインを制限することに加えて、サーバーは通信に使うプロトコルを指定することも可能です。
例えば、（セキュリティの観点からはこれが理想的ですが）すべてのコンテンツを HTTPS で取得されるようにサーバーから指定することが出来ます。
データ通信におけるセキュリティ戦略を完全なものとするには、HTTPS 通信を強制するだけではなく、すべての [Cookie に secure フラグ](/ja/docs/Web/HTTP/Cookies) を付けたり、HTTP ページから対応する HTTPS ページへの自動リダイレクトを整備することも必要です。
また、ブラウザーが暗号化された通信路のみを用いてサイトに接続することを保証するため、{{HTTPHeader("Strict-Transport-Security")}} HTTP ヘッダーを利用することも可能です。

## CSP の適用

コンテンツセキュリティポリシーを適用するには、該当するウェブページに {{HTTPHeader("Content-Security-Policy")}} HTTP ヘッダーを返すようにし、ユーザーエージェントが読み込むことのできるリソースの情報を指定します。
例えば、画像のアップロードや表示を行うページの場合、画像の出元は任意の場所で構いませんが、フォームの action 属性値は特定のエンドポイントに制限する必要があります。
コンテンツセキュリティポリシーを適切に設計すれば、クロスサイトスクリプティング攻撃に対する耐性を高めることができます。
この記事では、適切なヘッダーの作成方法と記述例を紹介します。

### ポリシーの設定

ポリシーの設定には {{HTTPHeader("Content-Security-Policy")}} HTTP ヘッダーを以下のように用います。

```http
Content-Security-Policy: policy
```

`policy` の箇所には、適用したいコンテンツセキュリティポリシーを表すディレクティブから構成される文字列が入ります。

### ポリシーの記述

ポリシーはポリシーディレクティブを列挙することで表現します。このポリシーディレクティブは、特定の種類のリソースや、ポリシーの適用範囲をそれぞれ表すものです。
ポリシーには {{CSP("default-src")}} ディレクティブを指定するべきでしょう。このディレクティブは、ポリシーについて特に指定のないリソースに対するフォールバックの役目を果たします（一覧については {{CSP("default-src")}} の説明を参照してください）。
また、インラインスクリプトや `eval()` の実行を防ぐには {{CSP("default-src")}} や {{CSP("script-src")}} を指定する必要があります。
さらに、{{HTMLElement("style")}} 要素や `style` 属性によるインラインスタイルの適用を防ぐには {{CSP("default-src")}} や {{CSP("style-src")}} の指定が必要となります。
さまざまな種別のアイテムに対して特定のディレクティブが存在します。フォント、フレーム、画像、音声・動画、スクリプト、ワーカーなど、各々の種別に固有のポリシーを持たせることができます。

ポリシーディレクティブの一覧については [Content-Security-Policy ヘッダー](/ja/docs/Web/HTTP/Headers/Content-Security-Policy)を参照してください。

## 一般的な適用例

この章では、一般的なセキュリティポリシーの適用例を示します。

### 例 1

サイト管理者が、すべてのコンテンツをサイト自身のドメイン（サブドメインを除く）から取得させたい場合。

```http
Content-Security-Policy: default-src 'self'
```

### 例 2

サイト管理者が、信頼されたドメインとそのすべてのサブドメインからのコンテンツを許可したい場合（CSPがセットされたドメインと同一とは限らない）。

```http
Content-Security-Policy: default-src 'self' example.com *.example.com
```

### 例 3

サイト管理者がウェブアプリのユーザーに、任意のドメインからの画像読み込みを許可したい場合。
ただし、音声や動画は信頼された配信元からのものだけに制限し、すべてのスクリプトは、信頼されたコードをホストする特定のサーバーのみに制限する。

```http
Content-Security-Policy: default-src 'self'; img-src *; media-src example.org example.net; script-src userscript.example.com
```

この例では、既定で、コンテンツはこの文書のオリジンからのみ許可されていますが、以下の例外があります。

- 画像は任意の場所から読み込まれます（ワイルドカード "\*" による指定に注意）。
- メディアは example.org と example.net のものだけが許可されます（ただしサブドメインは許可されません）。
- 実行可能なスクリプトは userscripts.example.com のものだけ許可されます。

### 例 4

サイト管理者がオンラインバンキングのウェブサイトについて、リクエスト時の盗聴攻撃を防ぐため、すべてのコンテンツを TLS で読み込むようにしたい場合。

```http
Content-Security-Policy: default-src https://onlinebanking.example.com
```

この例では、ドメインを単一オリジン onlinebanking.example.com のみに制限し、かつドキュメントへのアクセスを HTTPS のみに制限しています。

### 例 5

サイト管理者がウェブメールサイトについて、メール内の HTML に対して、任意のドメインから画像の読み込みを許可するが、JavaScript や他に危険性のあるコンテンツは許可したくない場合。

```http
Content-Security-Policy: default-src 'self' *.example.com; img-src *
```

なお、この例では {{CSP("script-src")}} が指定されていないため、代替として、JavaScript ソースには {{CSP("default-src")}} ディレクティブが使用されます。

## ポリシーのテスト

本番環境への適用をスムーズに行うため、CSP は report-only モードで動作させることが可能です。このモードの場合、ポリシーによるブロックは行われず、指定した URI へポリシー違反の内容が報告されます。また、新しいポリシーを本番環境に適用する前に試験運用する際にも report-only モードは利用できます。

ポリシーを report-only モードで動作させるには、以下のようにポリシーを {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP ヘッダーに指定します。

```http
Content-Security-Policy-Report-Only: policy
```

同じレスポンス中に {{HTTPHeader("Content-Security-Policy-Report-Only")}} ヘッダーと {{HTTPHeader("Content-Security-Policy")}} ヘッダーが存在した場合、どちらのポリシーも考慮されます。
`Content-Security-Policy` ヘッダーに指定したポリシーについてはブロックが行われ、`Content-Security-Policy-Report-Only` ヘッダーに指定したポリシーは報告のみが行われます。

## 違反の報告

CSP 違反を報告するための推奨される方法は、[報告 API](/ja/docs/Web/API/Reporting_API) を使用し、{{HTTPHeader("Reporting-Endpoints")}} でエンドポイントを宣言し、そのうちの 1 つを CSP 報告対象として指定するものです。 `Content-Security-Policy` ヘッダーの {{CSP("report-to")}} ディレクティブを使用します。

> [!WARNING]
> CSP {{CSP("report-uri")}} ディレクティブを使用して、CSP 違反レポートの送信先 URL を指定することもできます。
> この場合、`POST` 操作により、少し異なる形式の JSON レポートが {{HTTPHeader("Content-Type")}} を `application/csp-report` として送信されます。
> この方法は非推奨ですが、{{CSP("report-to")}} がすべてのブラウザーで対応されるまでは、両方を宣言しておく必要があります。
> この手法の詳細については、{{CSP("report-uri")}} のトピックを参照してください。

サーバーは、HTTP の {{HTTPHeader("Reporting-Endpoints")}} レスポンスヘッダーを使用して、レポートの送信先に関する情報をクライアントに通知することができます。
このヘッダーでは、カンマで区切られた 1 つ以上のエンドポイント URL を定義します。
例えば、レポートを受け入れる名前付きレポートエンドポイント `csp-endpoint` を `https://example.com/csp-reports` で定義する場合、サーバーのレスポンスヘッダーは次のようになります。

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

異なる種類のレポートを処理する複数のエンドポイントを設定したい場合は、次のように指定します。

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

`Content-Security-Policy` ヘッダーの {{CSP("report-to")}} ディレクティブを使用して、特定の定義したエンドポイントをレポートに使用するように指定することができます。例えば、CSP 違反のレポートを `default-src` で `https://example.com/csp-reports` に送信するようにするには、次の例のようなレスポンスヘッダーを送信します。

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

CSP 違反が発生すると、ブラウザーはレポートを JSON オブジェクトとして、HTTP の `POST` 操作で、 {{HTTPHeader("Content-Type")}} を `application/reports+json` として送信します。
レポートは、シリアライズされた {{domxref("Report")}} オブジェクトの形であり、その中の `type` プロパティの値が `"csp-violation"` で、`body` の値は {{domxref("CSPViolationReportBody")}} オブジェクトがシリアライズされた形です。

よくあるオブジェクトは、次のように見えます。

```json
{
  "age": 53531,
  "body": {
    "blockedURL": "inline",
    "columnNumber": 39,
    "disposition": "enforce",
    "documentURL": "https://example.com/csp-report",
    "effectiveDirective": "script-src-elem",
    "lineNumber": 121,
    "originalPolicy": "default-src 'self'; report-to csp-endpoint-name",
    "referrer": "https://www.google.com/",
    "sample": "console.log(\"lo\")",
    "sourceFile": "https://example.com/csp-report",
    "statusCode": 200
  },
  "type": "csp-violation",
  "url": "https://example.com/csp-report",
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}
```

サーバーを、指定された JSON 形式とコンテンツタイプでレポートを受信するよう設定する必要があります。
これらのリクエストを処理するサーバーは、お客様のニーズに最適な方法で受信したレポートを格納したり処理したりすることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### 互換性のメモ

一部のバージョンの Safari には、コンテンツセキュリティポリシーヘッダーが設定されていて Same Origin ヘッダーがないと、ブラウザーが自分自身でホストされたコンテンツやオフサイトコンテンツをブロックし、コンテンツセキュリティポリシーがそのコンテンツを許可していないという誤った報告をするという顕著な非互換があります。

## 関連情報

- HTTP の {{HTTPHeader("Content-Security-Policy")}} ヘッダー
- HTTP の {{HTTPHeader("Content-Security-Policy-Report-Only")}} ヘッダー
- [WebExtensions のコンテンツセキュリティ](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [ウェブワーカーでの CSP](/ja/docs/Web/HTTP/Headers/Content-Security-Policy#ワーカー内の_csp)
- [プライバシー、許可、情報セキュリティ](/ja/docs/Web/Privacy)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Evaluate your Content Security Policy
