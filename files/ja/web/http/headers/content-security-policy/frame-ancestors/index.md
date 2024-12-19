---
title: "CSP: frame-ancestors"
slug: Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
l10n:
  sourceCommit: 4e1857843b85afa11ce4889fc8029f73e54546ad
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) である **`frame-ancestors`** ディレクティブは {{HTMLElement("frame")}}、{{HTMLElement("iframe")}}、{{HTMLElement("object")}} 、{{HTMLElement("embed")}}、{{HTMLElement("applet")}} などを使ってページを埋め込むことのできる親を指定します。

このディレクティブを `'none'` にすることは、 {{HTTPHeader("X-Frame-Options")}}`: deny`（これは古いブラウザーも同様に対応しています）を設定するのに似ています。

> **メモ:** **`frame-ancestors`** は、ページを埋め込むことができる親ソースを指定することができます。
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

`frame-ancestors` ポリシーをこのように一つ以上セットできます。

```http
Content-Security-Policy: frame-ancestors <source>;
Content-Security-Policy: frame-ancestors <space separated list of sources>;
```

### ソース

\<source> は以下のうちのいずれかです。

> **メモ:** `frame-ancestors` ディレクティブの構文は他のソースリスト ({{CSP("default-src")}} など) のものと同様ですが、 `'unsafe-eval'` や `'unsafe-inline'` などは許可されていません。また、これは `default-src` の設定にフォールバックすることもありません。下記に示されたソースのみが許可されます。

- \<host-source>

  - : ホスト名または IP アドレスによるインターネットホストで、任意で {{Glossary("URL")}} スキームやポート番号を付けることができ、空白で区切ります。サイトのアドレスはワイルドカード (アスタリスク文字、`'*'`) で始めることができ、更にポート番号にワイルドカード (`'*'`) を使ってすべての有効なポート番号をソースとして示すことができます。
    例:

    - `http://*.example.com`: `http:` のスキームを使用した、 example.com のすべてのサブドメインからのすべての読み込みの試行に一致します。
    - `mail.example.com:443`: mail.example.com の 443 番ポートへのアクセスの試行に一致します。
    - `https://store.example.com`: `https:` を使用した store.example.com へのアクセスの試行に一致します。

    > **警告:** `host-source` にURLスキームが指定されておらず、 iframe が `https` URLから読み込まれている場合、 iframe を読み込んでいるページの URL も `https` でなければなりません。 CSP 仕様書の [オリジンでの URL 表現とリダイレクトカウントが一致するか？](https://w3c.github.io/webappsec-csp/#match-url-to-source-expression) によるものです。

- \<scheme-source>

  - : `http:` または `https:` のようなスキームです。コロンは必要です。単一引用符は使用しないでください。 data スキームも指定することができます (非推奨)。

    - `data:` コンテンツのソースとして [`data:` URL](/ja/docs/Web/URI/Schemes/data) が使えるようにします。
      _これは安全ではありません。攻撃者は任意の data: URI を挿入することもできます。使用は控え、スクリプトには絶対に使用しないでください。_
    - `mediastream:` コンテンツのソースとして [`mediastream:` URI](/ja/docs/Web/API/Media_Capture_and_Streams_API) が使えるようにします。
    - `blob:` コンテンツのソースとして [`blob:` URI](/ja/docs/Web/API/Blob) が使えるようにします。
    - `filesystem:` コンテンツのソースとして [`filesystem:` URI](/ja/docs/Web/API/FileSystem) が使えるようにします。

- `'self'`
  - : 保護された文書が提供されたオリジンを、同じ URL スキームおよびポート番号で参照します。単一引用符が必要です。ブラウザーによっては source ディレクティブから `blob` および `filesystem` を独自に除外していることがあります。これらのコンテンツ種別を許可する必要があるサイトは、Data 属性を使用して指定することができます。
- `'none'`
  - : 空のセットを参照します。つまり、一致する URL はありません。単一引用符が必要です。

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
