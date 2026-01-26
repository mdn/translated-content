---
title: Referer
slug: Web/HTTP/Reference/Headers/Referer
original_slug: Web/HTTP/Headers/Referer
---

**`Referer`** リクエストヘッダーには、現在リクエストされているページへのリンク先を持った直前のウェブページのアドレスが含まれています。 `Referer` ヘッダーにより、サーバーは人々がどこから訪問しに来たかを識別し、分析、ログ、キャッシュの最適化などに利用することができます。

> [!WARNING]
> このヘッダーには無害な用途が多数ありますが、ユーザーのセキュリティとプライバシーに望ましくない結果をもたらす可能性もあります。 詳細情報と緩和策については [Referer header: privacy and security concerns](/ja/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) を参照してください。

なお、 referer は実際には "referrer" という単語のスペルミスです。詳しくは [Wikipedia の HTTP リファラ](https://ja.wikipedia.org/wiki/HTTPリファラ)を参照してください。

次のような場合は、ブラウザーは `Referer` ヘッダーを送信しません。

- 参照していたリソースがローカルの "file" または "data" の URI の場合
- 安全ではない HTTP リクエストが使用されており、それを参照しているページが安全なプロトコル (HTTPS) で受信された場合

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}
      </th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```
Referer: <url>
```

## ディレクティブ

- \<url>
  - : 現在リクエスト中のページにつながるリンクがある直前のページの、絶対または相対アドレスです。 URL フラグメント (つまり "#section") およびユーザー情報 ("https\://username:password\@example.com/foo/bar/" の "username:password" の部分) は含まれません。リファラーポリシーによっては、オリジン、パス、クエリー文字列が含まれる場合があります。

## 例

```
Referer: https://developer.mozilla.org/ja/docs/Web/JavaScript
Referer: https://example.com/page?q=123
Referer: https://example.com/
```

## 仕様書

| 仕様書                              | 題名                                                          |
| ----------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Referer", "5.5.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP リファラ - Wikipedia](https://ja.wikipedia.org/wiki/HTTPリファラ)
- {{HTTPHeader("Referrer-Policy")}}
