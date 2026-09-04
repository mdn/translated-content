---
title: Referer ヘッダー
short-title: Referer
slug: Web/HTTP/Reference/Headers/Referer
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

**`Referer`** {{Glossary("request header", "リクエストヘッダー")}}には、現在リクエストされているページへのリンク先を持った直前のウェブページのアドレスが含まれています。
`Referer` ヘッダーにより、サーバーはユーザーが訪問している参照元ページや、リクエストされたリソースが使用されている場所を特定することができます。
このデータは、分析、ログ記録、最適化されたキャッシュなどに使用することができます。

リンクをクリックすると、`Referer` にはそのリンクを含むページのアドレスが格納されます。
別のドメインにリソースリクエストを行う場合、`Referer` にはリクエストされたリソースを使用しているページのアドレスが格納されます。

`Referer` ヘッダーには、オリジン、パス、クエリー文字列を含めることができ、[URL フラグメント](/ja/docs/Web/URI/Reference/Fragment)（`#section` など）や `username:password` 情報を含んではならない。
リクエストの「リファラーポリシー」は、含めることができるデータを定義します。{{HTTPHeader("Referrer-Policy")}} に、詳細な[情報](/ja/docs/Web/HTTP/Reference/Headers/Referrer-Policy#ディレクティブ)と[例](/ja/docs/Web/HTTP/Reference/Headers/Referrer-Policy#例)があります。

リファラーポリシーで許可されている場合、`Referer` は、新しいページへのナビゲーションを発生させる HTTP の {{httpheader("Refresh")}} レスポンス（または同等の [`<meta http-equiv="refresh" content="...">`](/ja/docs/Web/HTML/Reference/Elements/meta/http-equiv)）に続くリクエストでもすべきです。

> [!NOTE]
> "referer" は実際には "referrer" という単語のスペルミスです。詳しくは [Wikipedia の HTTP リファラ](https://ja.wikipedia.org/wiki/HTTPリファラ)を参照してください。

> [!WARNING]
> このヘッダーは、ユーザーのセキュリティとプライバシーに望ましくない影響をもたらす可能性があります。詳細情報と緩和策については [Referer ヘッダーのプライバシーとセキュリティの考慮事項](/ja/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) を参照してください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Referer: <url>
```

## ディレクティブ

- `<url>`
  - : 現在リクエスト中のページにつながるリンクがある直前のページの、絶対または相対アドレスです。 URL フラグメント (つまり `#section`) およびユーザー情報 (`https://username:password@example.com/foo/bar/` の "username:password" の部分) は含まれません。
    [リファラーポリシー](/ja/docs/Web/HTTP/Reference/Headers/Referrer-Policy#ディレクティブ)によっては、オリジン、パス、クエリー文字列が含まれる場合があります。

## 例

```http
Referer: https://developer.mozilla.org/ja/docs/Web/JavaScript
Referer: https://example.com/page?q=123
Referer: https://example.com/
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Referrer-Policy")}}
- [同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)
- [フェッチ](/ja/docs/Web/API/Fetch_API): {{domxref("Request.referrerPolicy")}}
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
- [HTTP リファラ - Wikipedia](https://ja.wikipedia.org/wiki/HTTPリファラ)
