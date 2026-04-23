---
title: "CSP: frame-src"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/frame-src
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`frame-src`** ディレクティブは、 {{HTMLElement("frame")}} や {{HTMLElement("iframe")}} のような要素を使用して埋め込まれた閲覧コンテキストの読み込みに有効なソースを指定します。

> [!NOTE]
> **`frame-src`** は、ページ内の iframe がどこから読み込まれるかを指定することができます。
> これは、ページを埋め込むことができる親ソースを指定することができる **`frame-ancestors`** とは異なります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Fetch directive", "フェッチディレクティブ")}}</td>
    </tr>
    <tr>
      <th scope="row">代替</th>
      <td>
        このディレクティブがない場合、ユーザーエージェントは {{CSP("child-src")}} ディレクティブを探します（さらにこの代替は {{CSP("default-src")}} ディレクティブです）。
      </td>
    </tr>
  </tbody>
</table>

## 構文

```http
Content-Security-Policy: frame-src 'none';
Content-Security-Policy: frame-src <source-expression-list>;
```

このディレクティブは、次のいずれかの値を指定することができます。

- `'none'`
  - : この種類のリソースは読み込まれません。単一引用符は必須です。
- `<source-expression-list>`
  - : ソース表現の値を空白で区切ったリストです。この種類のリソースは、指定されたソース表現のいずれかと一致した場合に読み込まれます。このディレクティブでは、以下のソース表現の値が適用できます。
    - [`<host-source>`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## 例

### 違反する場合

この CSP ヘッダーがある場合、

```http
Content-Security-Policy: frame-src https://example.com/
```

以下の {{HTMLElement("iframe")}} はブロックされ、読み込まれません。

```html
<iframe src="https://not-example.com/"></iframe>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("frame")}} および {{HTMLElement("iframe")}}
- {{CSP("frame-ancestors")}}
