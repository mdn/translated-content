---
title: "CSP: base-uri"
slug: Web/HTTP/Headers/Content-Security-Policy/base-uri
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} の **`base-uri`** ディレクティブは、文書の {{HTMLElement("base")}} 要素で使用することができる URL を制限します。この値が存在しない場合は、任意の URI が許可されます。このディレクティブが存在しない場合、ユーザーエージェントは {{HTMLElement("base")}} 要素の値を使用します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Document directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} による代替</th>
      <td>設定しないと、任意の URL が許可されます。</td>
    </tr>
  </tbody>
</table>

## 構文

1 つまたは複数の*ソース*を base-uri ポリシーに使用することができます。

```http
Content-Security-Policy: base-uri <source>;
Content-Security-Policy: base-uri <source> <source>;
```

### ソース

このディレクティブは、他の CSP ディレクティブと同じように、引数のソース値のほとんどを使用します。 [CSP のソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy#ソース)。

なお、 `base-uri` ではいくつかの値、たとえば `'unsafe-inline'` や `'strict-dynamic'` などのキーワードは意味がありません。

## 例

### Meta タグの設定

```html
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'" />
```

### Apache の設定

```
<IfModule mod_headers.c>
Header set Content-Security-Policy "base-uri 'self'";
</IfModule>
```

### Nginx の設定

```
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
