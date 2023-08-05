---
title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Headers/Content-Security-Policy-Report-Only
---

{{HTTPSidebar}}

HTTP の **`Content-Security-Policy-Report-Only`** レスポンスヘッダーにより、ウェブ開発者はポリシーの効果を監視する (ただし強制はしない) ことによりポリシーを試行することができます。これらの違反レポートは {{Glossary("JSON")}} の文書で構成され、 HTTP の `POST` リクエストを通して指定された URI に送信されます。

詳細については、[コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/CSP) のこの記事も参照してください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        This header is not supported inside a {{HTMLElement("meta")}}
        element.
      </th>
    </tr>
  </tbody>
</table>

## 構文

```
Content-Security-Policy-Report-Only: <policy-directive>; <policy-directive>
```

## ディレクティブ

{{HTTPHeader("Content-Security-Policy")}} ヘッダーのディレクティブは `Content-Security-Policy-Report-Only` にも適用することができます。

CSP の {{CSP("report-uri")}} ディレクティブをこのヘッダーで使用しないと、このヘッダーは負荷が高く何もしない機械となります。

## 例

このヘッダーは発生した違反を報告します。これを使用して、コンテンツセキュリティポリシーを反復的に処理できます。サイトがどのように動作するのかを観察したり、違反レポートや[マルウエアリダイレクト](https://secure.wphackedhelp.com/blog/wordpress-malware-redirect-hack-cleanup/)を監視したりして、 {{HTTPHeader("Content-Security-Policy")}} ヘッダーで強制することが要求されるポリシーを選択します。

```
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/
```

レポートを受信し続けながら、ポリシーの強制も行いたい場合は、 {{HTTPHeader("Content-Security-Policy")}} ヘッダーに {{CSP("report-uri")}} ディレクティブを指定して使用してください。

```
Content-Security-Policy: default-src https:; report-uri /csp-violation-report-endpoint/
```

## 違反レポートの構文

レポート JSON オブジェクトには、次のデータが含まれています。

- `blocked-uri`
  - : The URI of the resource that was blocked from loading by the Content Security Policy. If the blocked URI is from a different origin than the document-uri, then the blocked URI is truncated to contain just the scheme, host, and port.
- `disposition`
  - : Either `"enforce"` or `"report"` depending on whether the {{HTTPHeader("Content-Security-Policy")}} header or the `Content-Security-Policy-Report-Only` header is used.
- `document-uri`
  - : The URI of the document in which the violation occurred.
- `effective-directive`
  - : The directive whose enforcement caused the violation.
- `original-policy`
  - : The original policy as specified by the `Content-Security-Policy-Report-Only` HTTP header.
- `referrer`
  - : The referrer of the document in which the violation occurred.
- `script-sample`
  - : The first 40 characters of the inline script, event handler, or style that caused the violation.
- `status-code`
  - : The HTTP status code of the resource on which the global object was instantiated.
- `violated-directive`
  - : The name of the policy section that was violated.

## 違反レポートのサンプル

Let's consider a page located at `http://example.com/signup.html`. It uses the following policy, disallowing everything but stylesheets from `cdn.example.com`.

```
Content-Security-Policy-Report-Only: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports
```

The HTML of `signup.html` looks like this:

```html
<!doctype html>
<html>
  <head>
    <title>Sign Up</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    ... Content ...
  </body>
</html>
```

Can you spot the violation? Stylesheets are only allowed to be loaded from `cdn.example.com`, yet the website tries to load one from its own origin (`http://example.com`). A browser capable of enforcing CSP will send the following violation report as a POST request to `http://example.com/_/csp-reports`, when the document is visited:

```js
{
  "csp-report": {
    "document-uri": "http://example.com/signup.html",
    "referrer": "",
    "blocked-uri": "http://example.com/css/style.css",
    "violated-directive": "style-src cdn.example.com",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports",
    "disposition": "report"
  }
}
```

As you can see, the report includes the full path to the violating resource in `blocked-uri`. This is not always the case. For example, when the `signup.html` would attempt to load CSS from `http://anothercdn.example.com/stylesheet.css`, the browser would _not_ include the full path but only the origin (`http://anothercdn.example.com`). This is done to prevent leaking sensitive information about cross-origin resources.

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("http.headers.Content-Security-Policy-Report-Only")}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("report-uri")}} ディレクティブ
- [WebExtensions のコンテンツセキュリティ](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Display security and privacy policies In Firefox Developer Tools](/ja/docs/Tools/GCLI/Display_security_and_privacy_policies)
