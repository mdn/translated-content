---
title: "CSP: report-uri"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{deprecated_header}}

> [!WARNING]
> {{CSP("report-to")}} ディレクティブは、 `report-uri` ディレクティブを置き換えるためのものであり、 `report-to` に対応するブラウザーでは、 `report-uri` ディレクティブは無視されます。
>
> しかし、 `report-to` の対応が進むまでは、次のように両方のヘッダー指定することができます。
>
> ```http
> Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
> ```

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`report-uri`** ディレクティブは非推奨で、ディレクティブは、コンテンツセキュリティポリシーに違反する試みを報告するよう、 ユーザーエージェントに指示します。
これらの違反レポートは、指定された URI への HTTP POST リクエストで送られる [JSON 文書](#違反レポートの構文)で構成されます。

このディレクティブは、それ自体には何の効果もなく、他のディレクティブと組み合わせて初めて意味を持つものです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Reporting directive", "報告ディレクティブ")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        このディレクティブは {{HTMLElement("meta")}} 要素には対応していません。
      </th>
    </tr>
  </tbody>
</table>

## 構文

```http
Content-Security-Policy: report-uri <uri>;
Content-Security-Policy: report-uri <uri> <uri>;
```

- \<uri>
  - : 報告の POST 先となるURI。

### 違反レポートの構文

レポートの JSON オブジェクトは、 HTTP の `POST` 操作で、 {{HTTPHeader("Content-Type")}} を `application/csp-report` として送信されます。

> [!NOTE] 違反レポートは攻撃者によって制御されたデータであるとみなすべきです。
> コンテンツは、格納またはレンダリングする前に正規化する必要があります。
> これは、 [script-sample](#script-sample) プロパティが指定されている場合、特に当てはまります。

レポートの JSON オブジェクトには、単一の最上位プロパティ `"csp-report"` があり、以下のプロパティを持つオブジェクトが含まれています。

- `blocked-uri`
  - : コンテンツセキュリティポリシーによって読み込みがブロックされたリソースの URI です。
    ブロックされた URI が `document-uri` とは異なるオリジンのものである場合、ブロックされた URI はスキーム、ホスト、ポートのみを含むように切り詰められます。
- `disposition`
  - : {{HTTPHeader("Content-Security-Policy-Report-Only")}} ヘッダーと `Content-Security-Policy` のどちらが使用されているかによって、 `"enforce"` または `"report"` のどちらかになります。
- `document-uri`
  - : 違反が発生した文書の URI です。
- `effective-directive`
  - : その施行が違反の発生原因となったディレクティブです。
    一部のブラウザー、例えば Chrome では、強制ディレクティブが `style-src` であった場合でも、 `style-src-elem`/`style-src-attr` という値が提供される場合があります。
- `original-policy`
  - : HTTP の `Content-Security-Policy` ヘッダーで指定された元のポリシーです。
- `referrer` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 違反が発生した文書のリファラーです。
- `script-sample`
  - : 違反が発生したインラインスクリプト、イベントハンドラー、スタイル設定の最初の 40 文字。
    外部ファイルに起因する違反はレポートに含まれません。

    これは、 [`script-src*`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) および [`style-src*`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) の違反で、対応する `Content-Security-Policy` ディレクティブが [`'report-sample'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample) のキーワードを含む場合にのみ適用されます。

- `status-code`
  - : このグローバルオブジェクトがインスタンス化されたリソースの HTTP ステータスコード。
- `violated-directive` {{deprecated_inline}}
  - : このディレクティブの適用が違反を発生させました。 `violated-directive` は、 `effective-directive` フィールドの以前の名前であり、同じ値が含まれています。

## 例

### Content-Security-Policy の CSP 違反レポート

`http://example.com/signup.html` にページがあるとしましょう。
これは以下のポリシーを使用しており、 `cdn.example.com` から読み込まれたスタイルシートを除き、すべてを禁止しています。

```http
Content-Security-Policy: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports
```

`signup.html` の HTML は次のようなものです。

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

間違いが見つけられますか？ このスタイルシートは `cdn.example.com` からのみ読み込みが許可されていますが、ウェブサイトは自身のオリジン (`http://example.com`) から読み込もうとしています。
CSP を適用できるブラウザーであれば、この文書に来た際に、次の違反レポートを `POST` リクエストとして `http://example.com/_/csp-reports` に送信します。

```json
{
  "csp-report": {
    "blocked-uri": "http://example.com/css/style.css",
    "disposition": "report",
    "document-uri": "http://example.com/signup.html",
    "effective-directive": "style-src-elem",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports",
    "referrer": "",
    "status-code": 200,
    "violated-directive": "style-src-elem"
  }
}
```

ご覧の通り、レポートには `blocked-uri` に違反リソースへのフルパスが含まれます。
これは常にそうであるとは限りません。
例えば、`signup.html` が `http://anothercdn.example.com/stylesheet.css` から CSS を読み込もうとした場合、ブラウザーはオリジン (`http://anothercdn.example.com`) のみを記載し、オリジン間リソースに関する機密情報の漏洩を防ぐために、フルパスは記載しません。
CSP仕様書には、この動作について[説明が記載されています](https://www.w3.org/TR/CSP/#security-violation-reports)。

### Content-Security-Policy-Report-Only の CSP 違反レポート

`report-uri` ディレクティブは、 {{httpheader("Content-Security-Policy-Report-Only")}} レスポンスヘッダーでも使用することができます。
このヘッダーにより、検査時にブラウザーが違反を報告することはできますが、ブロックはしません。

HTTP ヘッダーもほぼ同じです。

```http
Content-Security-Policy-Report-Only: default-src 'none'; style-src cdn.example.com; report-to /_/csp-reports
```

このレポートは、 disposition が `"report"` であることと、もちろん `"original-policy"` を除いて同一です。

```json
{
  "csp-report": {
    "blocked-uri": "http://example.com/css/style.css",
    "disposition": "report",
    "document-uri": "http://example.com/signup.html",
    "effective-directive": "style-src-elem",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports",
    "referrer": "",
    "status-code": 200,
    "violated-directive": "style-src-elem"
  }
}
```

### CSP 違反のログ記録

サーバーが次の `Content-Security-Policy` ヘッダーで、レスポンスを送信すると指定された場合、

```http
Content-Security-Policy: default-src https:; report-uri /csp-violation-report-endpoint/
```

`/csp-violation-report-endpoint/` は、例えば以下のような PHP を実行し、違反の詳細を JSON でログ出力し、違反がログファイルに追加された最初のものであれば、管理者にメールを送信することが可能です。

```php
<?php

// Start configure
$log_file = dirname(__FILE__) . '/csp-violations.log';
$log_file_size_limit = 1000000; // bytes - once exceeded no further entries are added
$email_address = 'admin@example.com';
$email_subject = 'Content-Security-Policy violation';
// End configuration

$current_domain = preg_replace('/www\./i', '', $_SERVER['SERVER_NAME']);
$email_subject = $email_subject . ' on ' . $current_domain;

http_response_code(204); // HTTP 204 No Content

$json_data = file_get_contents('php://input');

// We pretty print the JSON before adding it to the log file
if ($json_data = json_decode($json_data)) {
  $json_data = json_encode($json_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

  if (!file_exists($log_file)) {
    // Send an email
    $message = "The following Content-Security-Policy violation occurred on " .
      $current_domain . ":\n\n" .
      $json_data .
      "\n\nFurther CPS violations will be logged to the following log file, but no further email notifications will be sent until this log file is deleted:\n\n" .
      $log_file;
    mail($email_address, $email_subject, $message,
         'Content-Type: text/plain;charset=utf-8');
  } else if (filesize($log_file) > $log_file_size_limit) {
    exit(0);
  }

  file_put_contents($log_file, $json_data, FILE_APPEND | LOCK_EX);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- {{CSP("report-to")}}
