---
title: 'CSP: require-sri-for'
slug: Web/HTTP/Headers/Content-Security-Policy/require-sri-for
---

{{deprecated_header}}

[HTTP](/ja/docs/Web/HTTP) の {{HTTPHeader("Content-Security-Policy")}} における **`require-sri-for`** ディレクティブは、クライアントにページ上でスクリプトやスタイルの[サブリソース完全性](/ja/docs/Web/Security/Subresource_Integrity)を要求することを指示します。

## 構文

```
Content-Security-Policy: require-sri-for script;
Content-Security-Policy: require-sri-for style;
Content-Security-Policy: require-sri-for script style;
```

- `script`
  - : {{Glossary("SRI")}} をスクリプトに要求します。
- `style`
  - : {{Glossary("SRI")}} をスタイルシートに要求します。
- `script style`
  - : {{Glossary("SRI")}} をスクリプトとスタイルシートの両方に要求します。

## 例

このディレクティブを使ってスクリプトやスタイルに SRI を要求するようにサイトを設定している場合の設定です。

```
Content-Security-Policy: require-sri-for script style
```

以下のような {{HTMLElement("script")}} 要素は正しい `integrity` 属性を使用している場合に限り、読み込まれます。

```html example-good
<script src="https://code.jquery.com/jquery-3.1.1.slim.js"
        integrity="sha256-5i/mQ300M779N2OVDrl16lbohwXNUdzL/R2aVUXyXWA="
        crossorigin="anonymous"></script>
```

しかし、 `integrity` のないスクリプトは読み込まれなくなります。

```html example-bad
<script src="https://code.jquery.com/jquery-3.1.1.slim.js"></script>
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- [サブリソース完全性](/ja/docs/Web/Security/Subresource_Integrity)
