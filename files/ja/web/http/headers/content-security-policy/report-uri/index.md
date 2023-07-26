---
title: "CSP: report-uri"
slug: Web/HTTP/Headers/Content-Security-Policy/report-uri
l10n:
  sourceCommit: c49f6dcd20b14f28218aa26030ebbb2f54143521
---

{{HTTPSidebar}}{{deprecated_header}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`report-uri`** ディレクティブは非推奨で、ディレクティブは、コンテンツセキュリティポリシーに違反する試みを報告するよう、 ユーザーエージェントに指示します。これらの違反報告は、指定された URI への HTTP POST リクエストで送られる JSON 文書で構成されます。

> **警告:** {{CSP("report-to")}} ディレクティブは、非推奨の **`report-uri`** ディレクティブを置き換えるためのものですが、{{CSP("report-to")}} は、まだほとんどのブラウザーで対応されていません。
> そのため、現在のブラウザーとの互換性を保ちつつ、ブラウザーが {{CSP("report-to")}} に対応したときに前方互換性を持たせられるよう、 **`report-uri`** と {{CSP("report-to")}} の両方を指定することができるようになっています。
>
> ```http
> Content-Security-Policy: …; report-uri https://endpoint.com; report-to groupname
> ```
>
> {{CSP("report-to")}} に対応しているブラウザーでは、**`report-uri`** ディレクティブは無視されます。

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

## 例

詳細な情報と例は　{{HTTPHeader("Content-Security-Policy-Report-Only")}}　を参照してください。

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
