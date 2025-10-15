---
title: "CSP: base-uri"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/base-uri
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の {{HTTPHeader("Content-Security-Policy")}} の **`base-uri`** ディレクティブは、文書の {{HTMLElement("base")}} 要素で使用することができる URL を制限します。この値が存在しない場合は、任意の URI が許可されます。このディレクティブが存在しない場合、ユーザーエージェントは {{HTMLElement("base")}} 要素の値を使用します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Document directive","文書ディレクティブ")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} による代替</th>
      <td>なし。設定しないと、任意の URL が許可されます。</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Content-Security-Policy: base-uri 'none';
Content-Security-Policy: base-uri <source-expression-list>;
```

このディレクティブは、次のいずれかの値を指定することができます。

- `'none'`
  - : `<base>` 要素を使用してベース URI を設定することはできません。 単一引用符は必須です。
- `<source-expression-list>`
  - : ソース表現の値を空白で区切ったリストです。 `<base>` 要素は、その値が指定されたソース表現のいずれかと一致した場合、ベース URI を設定します。このディレクティブでは、以下のソース表現の値が適用できます。
    - [`<host-source>`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## 例

### Meta タグの設定

```html
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'" />
```

### Apache の設定

```apacheconf
<IfModule mod_headers.c>
Header set Content-Security-Policy "base-uri 'self'";
</IfModule>
```

### Nginx の設定

```nginx
add_header Content-Security-Policy "base-uri 'self';"
```

### 違反になる場合

ドメインが `example.com` ではないので、 {{HTMLElement("base")}} 要素の `href` を `https://example.com` に設定すると、 CSP 違反となります。

```html example-bad
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'" />
<base href="https://example.com/" />

<!--
// Error: Refused to set the document's base URI to 'https://example.com/'
// because it violates the following Content Security Policy
// directive: "base-uri 'self'"
-->
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPheader("Content-Security-Policy")}}
- {{HTMLElement("base")}}
- {{domxref("Node.baseURI")}}
