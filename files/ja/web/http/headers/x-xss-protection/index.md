---
title: X-XSS-Protection
slug: Web/HTTP/Headers/X-XSS-Protection
---

{{HTTPSidebar}}

HTTP の **`X-XSS-Protection`** レスポンスヘッダーは Internet Explorer, Chrome, Safari の機能で、反射型クロスサイトスクリプティング ({{Glossary("XSS")}}) 攻撃を検出したときに、ページの読み込みを停止するためのものです。強い {{HTTPHeader("Content-Security-Policy")}} をサイトが実装して、インライン JavaScript の使用を無効にしていれば (`'unsafe-inline'`)、現在のブラウザーではこれらの防御は大枠で不要なものですが、まだ {{Glossary("CSP")}} に対応していない古いウェブブラウザーを使用しているユーザーには防御になります。

> **メモ:** - Chrome は [XSS Auditor を削除](https://www.chromestatus.com/feature/5021976655560704)しました
>
> - Firefox は対応しておらず、 [`X-XSS-Protection` を今後も実装しません](https://bugzilla.mozilla.org/show_bug.cgi?id=528661)
> - Edge は [XSS filter を廃止しました](https://blogs.windows.com/windowsexperience/2018/07/25/announcing-windows-10-insider-preview-build-17723-and-build-18204/)つまり、レガシーブラウザーをサポートする必要がない場合は、代わりに [`Content-Security-Policy`](/ja/docs/Web/HTTP/Headers/Content-Security-Policy) を使用し `unsafe-inline` を許可しないことをお勧めします。

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
  </tbody>
</table>

## 構文

```
X-XSS-Protection: 0
X-XSS-Protection: 1
X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; report=<reporting-uri>
```

- 0
  - : XSS フィルタリングを無効化します。
- 1
  - : XSS フィルタリングを有効化します (通常はブラウザーの既定値です)。クロスサイトスクリプティング攻撃を検知すると、ブラウザーはページをサニタイズします (安全でない部分を取り除きます)。
- 1; mode=block
  - : XSS フィルタリングを有効化します。攻撃を検知すると、ページをサニタイジングするよりも、ページのレンダリングを停止します。
- 1; report=\<reporting-URI> (Chromium only)
  - : XSS フィルタリングを有効化します。クロスサイトスクリプティング攻撃を検知すると、ブラウザーはページをサニタイズし、攻撃レポートを作成します。レポートを送信するために、 CSP {{CSP("report-uri")}} ディレクティブ機能を利用します。

## 例

XSS 攻撃が反映されたページを見つけたらその読み込みをブロックする場合。

```bash
X-XSS-Protection: 1; mode=block
```

PHP

```php
header("X-XSS-Protection: 1; mode=block");
```

Apache (.htaccess)

```bash
<IfModule mod_headers.c>
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

Nginx

```bash
add_header "X-XSS-Protection" "1; mode=block";
```

## 仕様書

仕様書や草案で定義されたものではありません。

## ブラウザーの互換性

{{Compat("http.headers.X-XSS-Protection")}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- [Controlling the XSS Filter – Microsoft](https://blogs.msdn.microsoft.com/ieinternals/2011/01/31/controlling-the-xss-filter/)
- [Understanding XSS Auditor – Virtue Security](https://www.virtuesecurity.com/blog/understanding-xss-auditor/)
- [The misunderstood X-XSS-Protection – blog.innerht.ml](https://blog.innerht.ml/the-misunderstood-x-xss-protection/)
