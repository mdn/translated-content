---
title: "CSP: frame-ancestors"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) である **`frame-ancestors`** ディレクティブは {{HTMLElement("frame")}}、{{HTMLElement("iframe")}}、{{HTMLElement("object")}} 、{{HTMLElement("embed")}} などを使ってページを埋め込むことのできる親を指定します。

このディレクティブを `'none'` にすることは、 {{HTTPHeader("X-Frame-Options")}}`: deny`（これは古いブラウザーも同様に対応しています）を設定するのに似ています。

> [!NOTE]
> **`frame-ancestors`** は、ページを埋め込むことができる親ソースを指定することができます。
> これは、ページ内の iframe をどこから読み込むかを指定する **`frame-src`** とは異なります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Navigation directive", "ナビゲーションディレクティブ")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} による代替</th>
      <td>なし。設定しない場合はすべてを許可します。</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        このディレクティブは {{HTMLElement("meta")}} 要素では対応していません。
      </th>
    </tr>
  </tbody>
</table>

## 構文

```http
Content-Security-Policy: frame-ancestors 'none';
Content-Security-Policy: frame-ancestors <source-expression-list>;
```

このディレクティブは、次のいずれかの値を指定することができます。

- `'none'`
  - : この種類のリソースは埋め込まれません。単一引用符は必須です。
- `<source-expression-list>`
  - : ソース表現の値を空白で区切ったリストです。この種類のリソースは、埋め込み元が指定されたソース表現のいずれかと一致した場合に埋め込まれます。このディレクティブでは、以下のソース表現の値が適用できます。
    - [`<host-source>`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

> [!NOTE]
> `frame-ancestors` ディレクティブの構文は他のソースリスト（{{CSP("child-src")}} など）の構文と似ていますが、 `default-src` の設定に代替されることはありません。ポリシーで `default-src 'none'` と宣言しても、それでも誰でもリソースを埋め込むことができます。

## 例

```http
Content-Security-Policy: frame-ancestors 'none';

Content-Security-Policy: frame-ancestors 'self' https://www.example.org;

Content-Security-Policy: frame-ancestors 'self' https://example.org https://example.com https://store.example.com;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("X-Frame-Options")}}
- {{CSP("frame-src")}} CSP
