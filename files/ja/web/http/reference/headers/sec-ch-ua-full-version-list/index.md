---
title: Sec-CH-UA-Full-Version-List ヘッダー
short-title: Sec-CH-UA-Full-Version-List
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Full-Version-List
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

HTTP の **`Sec-CH-UA-Full-Version-List`** {{Glossary("request header", "リクエストヘッダー")}} は[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザーエージェントクライアントヒント)で、このユーザーエージェントのブランドと完全なバージョン情報を提供します。

**`Sec-CH-UA-Full-Version-List`** ヘッダーは、ブラウザーに関連付けられたそれぞれのブランドのブランド名および完全なバージョン情報を、カンマ区切りのリストとして指定します。

ヘッダーには、任意の位置に、任意の名称の「偽の」ブランドを含めることができます。
これは、サーバーが未知のユーザーエージェントを即座に拒否することを防ぐために設計された機能であり、ユーザーエージェントにブランド ID について虚偽の情報を報告させることを目的としています。

> [!NOTE]
> これは {{HTTPHeader("Sec-CH-UA")}} と似ていますが、それぞれのブランドの主要なバージョン番号ではなく、完全なバージョン番号を記載します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}},
        <a href="/ja/docs/Web/HTTP/Guides/Client_hints">クライアントヒント</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい (<code>Sec-</code> 接頭辞)</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Sec-CH-UA-Full-Version-List: "<brand>";v="<full version>", …
```

この値は、ユーザーエージェントのブランド一覧に含まれるブランド名と、それに関連付けられた完全なバージョン番号をカンマ区切りで列挙したものです。

### ディレクティブ

- `<brand>`
  - : "Chromium", "Google Chrome" など、ユーザーエージェントに関連付けられたブランド。
    このブランド名は、`" Not A;Brand"` や `"(Not(A:Brand"` のように、同様に意図的に誤った表記となっていることがあります（実際の値は時間経過に伴う変化により予測不能であると想定されています）。
- `<full version>`
  - : 完全なバージョン番号、例えば 98.0.4750.0 などです。

## 解説

ブランドとは、Chromium、Opera、Google Chrome、Microsoft Edge、Firefox、Safari などのユーザーエージェントの商品名のことです。
1 つのユーザーエージェントには、複数のブランドが関連付けられている場合があります。
例えば、Opera、Chrome、Edge はすべて Chromium をベースとしており、`Sec-CH-UA-Full-Version-List` ヘッダーには両方のブランドが含まれます。

このヘッダーにより、サーバーは、共有ブランドと、それぞれのビルドにおける具体的なカスタマイズ設定の両方に基づいて、レスポンスをカスタマイズすることができます。

## 例

### Sec-CH-UA-Full-Version-List の使用

サーバーは、クライアントからの任意のリクエストに対するレスポンスに {{HTTPHeader("Accept-CH")}} を含めることで、`Sec-CH-UA-Full-Version-List` ヘッダーをリクエストします。この際、希望するヘッダー名をトークンとして使用します。

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version-List
```

クライアントは、このヒントを提供し、下記に示すように、その後のリクエストに `Sec-CH-UA-Full-Version-List` ヘッダーを追加することを選択できます。

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Full-Version-List: " Not A;Brand";v="99.0.0.0", "Chromium";v="98.0.4750.0", "Google Chrome";v="98.0.4750.0"
Sec-CH-UA-Platform: "Linux"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)
- [ユーザーエージェントクライアントヒント API](/ja/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP キャッシュ: Vary](/ja/docs/Web/HTTP/Guides/Caching#vary) および {{HTTPHeader("Vary")}} ヘッダー
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
