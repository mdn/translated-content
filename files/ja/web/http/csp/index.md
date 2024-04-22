---
title: コンテンツセキュリティポリシー (CSP)
slug: Web/HTTP/CSP
l10n:
  sourceCommit: 31c5401d7aa2b7f5146363cd9bf02a2221a5b20b
---

{{HTTPSidebar}}

**コンテンツセキュリティポリシー** ({{Glossary("CSP")}}) は、クロスサイトスクリプティング ({{Glossary("Cross-site_scripting")}}) やデータインジェクション攻撃などのような、特定の種類の攻撃を検知し、影響を軽減するために追加できるセキュリティレイヤーです。
これらの攻撃はデータの窃取からサイトの改ざん、マルウェアの拡散に至るまで、様々な目的に用いられます。

CSP は完全な後方互換性を保って設計されています（ただし、 CSP 2 については後方互換性がない点もあり、明示的に記述されています。詳細は[こちら](https://www.w3.org/TR/CSP2)の 1.1 章を参照してください）。
そのため、 CSP に未対応のブラウザーでも CSP 実装済のサーバーと通信でき、逆もまた同様です。 CSP 未対応のブラウザーは単に CSP を無視し、ウェブコンテンツにはこれまで通り標準の同一オリジンポリシーを適用します。
CSP ヘッダーを送信しないサーバーに対しても、ブラウザーは同様に標準の [同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy) を適用します。

CSP を有効にするには、ウェブサーバーから {{HTTPHeader("Content-Security-Policy")}} HTTP ヘッダーを返すように設定する必要があります（`X-Content-Security-Policy` ヘッダーに関する記述が時々ありますが、これは古いバージョンのものであり、今日このヘッダーを指定する必要はありません）。

他にも、 {{HTMLElement("meta")}} 要素を用いてポリシーを指定することも可能です。例を挙げます。

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; img-src https://*; child-src 'none';" />
```

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

コンテンツセキュリティポリシーを適用するには、該当するウェブページに {{HTTPHeader("Content-Security-Policy")}} HTTP ヘッダーを返すようにし、ユーザエージェントが読み込むことのできるリソースの情報を指定します。
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

サイト管理者がウェブアプリのユーザーに、任意のドメインからの画像読み込みを許可したい場合。ただし、音声や動画は信頼された配信元からのものだけに制限し、すべてのスクリプトは、信頼されたコードをホストする特定のサーバーのみに制限する。

```http
Content-Security-Policy: default-src 'self'; img-src *; media-src example.org example.net; script-src userscripts.example.com
```

この例では、コンテンツのデフォルト設定としてドキュメント自身のホストのみを許可していますが、以下の例外を認めています。

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

サイト管理者がウェブメールサイトについて、メール内の HTML を許可し、任意のドメインから画像の読み込みを許可するが、JavaScript や他に危険性のあるコンテンツは許可したくない場合。

```http
Content-Security-Policy: default-src 'self' *.example.com; img-src *
```

この例では、 {{CSP("script-src")}} を指定していないことに注意してください。この CSP を適用したサイトは、スクリプトに関して {{CSP("default-src")}} ディレクティブの設定を適用します。つまり、スクリプトは元のサーバーのものだけ読み込まれます。

## ポリシーのテスト

本番環境への適用をスムーズに行うため、CSP は report-only モードで動作させることが可能です。このモードの場合、ポリシーによるブロックは行われず、指定した URI へポリシー違反の内容が報告されます。また、新しいポリシーを本番環境に適用する前に試験運用する際にも report-only モードは利用できます。

ポリシーを report-only モードで動作させるには、以下のようにポリシーを {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP ヘッダーに指定します。

```http
Content-Security-Policy-Report-Only: policy
```

同じレスポンス中に {{HTTPHeader("Content-Security-Policy-Report-Only")}} ヘッダーと {{HTTPHeader("Content-Security-Policy")}} ヘッダーが存在した場合、どちらのポリシーも考慮されます。
`Content-Security-Policy` ヘッダーに指定したポリシーについてはブロックが行われ、`Content-Security-Policy-Report-Only` ヘッダーに指定したポリシーは報告のみが行われます。

## 報告機能の利用

既定では、違反内容は報告されません。違反内容の報告機能を有効にするには {{CSP("report-uri")}} ポリシーディレクティブを指定し、報告先の URI を 1 つ以上指定する必要があります。

```http
Content-Security-Policy: default-src 'self'; report-uri http://reportcollector.example.com/collector.cgi
```

URI を指定したら報告を受け取るサーバーを立ち上げます。受信した内容は適切に感じるどんな方法でも保存・処理することができます。

## 違反内容の報告の構文

違反内容は以下のデータを含んだ JSON オブジェクトで送信されます。

- `blocked-uri`
  - : コンテンツセキュリティポリシーによって読み込みがブロックされたリソースの URI。
    ブロックされた URI が `document-uri` とは異なるオリジンだった場合、ブロックされた URI はスキーム・ホスト・ポートのみを含むように切り詰められます。
- `disposition`
  - : `"enforce"` または `"report"` のいずれかで、 {{HTTPHeader("Content-Security-Policy-Report-Only")}} ヘッダーか `Content-Security-Policy` ヘッダーのどちらが使われているかで決まります。
- `document-uri`
  - : 違反が生じた文書の URI。
- `effective-directive`
  - : 実行により違反を起こしたディレクティブ。
    ブラウザーによっては異なる値を提供します。例えば Chrome の場合は実際に違反が発生したディレクティブが `style-src` でも `style-src-elem`/`style-src-attr` を提供します。
- `original-policy`
  - : `Content-Security-Policy` HTTP ヘッダーに元々指定されていたポリシー。
- `referrer` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 違反が生じた文書のリファラー。
- `script-sample`
  - : 違反を起こしたインラインスクリプト、イベントハンドラー、スタイルの最初の 40 文字。 `'report-sample'` が含まれている場合に `script-src*` と `style-src*` のみに適用されます。
- `status-code`
  - : グローバルオブジェクトが初期化されたリソースの HTTP ステータスコード。
- `violated-directive`
  - : 違反したポリシーセクションの名前。

## 違反報告の例

`http://example.com/signup.html` というページを例に考えます。ここでは次のようなポリシーを指定しており、 `cdn.example.com` のスタイルシートのみを許可しています。

```http
Content-Security-Policy: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports
```

`signup.html` の内容は次の通りです。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Sign Up</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    Here be content.
  </body>
</html>
```

間違いがあることにお気付きでしょうか？スタイルシートの読み込みは `cdn.example.com` からのみに制限されていますが、実際には自身のドメイン (`http://example.com`) から読み込もうとしています。このドキュメントを閲覧した際には、次のような違反内容が `http://example.com/_/csp-reports` へ POST リクエストで送信されます。

```json
{
  "csp-report": {
    "document-uri": "http://example.com/signup.html",
    "referrer": "",
    "blocked-uri": "http://example.com/css/style.css",
    "violated-directive": "style-src cdn.example.com",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports"
  }
}
```

ご覧の通り、`blocked-uri` には違反の原因となったリソースのフルパスが記録されています。
ただし、必ずフルパスが記録されるとは限りません。
例えば、 `signup.html` が `http://anothercdn.example.com/stylesheet.css` から CSS を読み込もうとした場合、`blocked-uri` にはフルパスではなくオリジンのみ (`http://anothercdn.example.com`) が記録されます。
この一見不思議な挙動は CSP の仕様書に [説明されています](https://www.w3.org/TR/CSP/#security-violation-reports)。
手短に言うと、この挙動はクロスオリジンのリソースに関する機密情報の漏えいを防ぐために規定されています。

## ブラウザーの互換性

{{Compat}}

### 互換性のメモ

一部のバージョンの Safari には、コンテンツセキュリティポリシーヘッダーが設定されていて Same Origin ヘッダーがないと、ブラウザーが自分自身でホストされたコンテンツやオフサイトコンテンツをブロックし、コンテンツセキュリティポリシーがそのコンテンツを許可していないという誤った報告をするという顕著な非互換があります。

## 関連情報

- HTTP の {{HTTPHeader("Content-Security-Policy")}} ヘッダー
- HTTP の {{HTTPHeader("Content-Security-Policy-Report-Only")}} ヘッダー
- [WebExtensions のコンテンツセキュリティ](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [ウェブワーカーでの CSP](/ja/docs/Web/HTTP/Headers/Content-Security-Policy#csp_in_workers)
- [プライバシー、許可、情報セキュリティ](/ja/docs/Web/Privacy)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Evaluate your Content Security Policy
