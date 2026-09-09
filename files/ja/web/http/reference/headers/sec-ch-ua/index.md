---
title: Sec-CH-UA ヘッダー
short-title: Sec-CH-UA
slug: Web/HTTP/Reference/Headers/Sec-CH-UA
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

HTTP の **`Sec-CH-UA`** {{Glossary("Request header", "リクエストヘッダー")}}は、[ユーザーエージェントのクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)の一種であり、ユーザーエージェントのブランド名およびメジャーバージョン情報を提供します。

`Sec-CH-UA` ヘッダーは、ブラウザーに関連付けられたそれぞれのブランドとその主要なバージョンを、カンマ区切りのリストとして提供します。
したがって、サーバーはこのヘッダーを利用して、共通するブランドだけでなく、それぞれのバージョンにおける具体的なカスタマイズ内容に基づいて、レスポンスをカスタマイズすることができます。

`Sec-CH-UA` は[低エントロピーヒント](/ja/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints)です。
ユーザーエージェントの権限ポリシーによってブロックされていない限り、サーバーが {{HTTPHeader("Accept-CH")}} を送信してオプトインする必要はなく、デフォルトで送信されます。

ヘッダーには、任意の位置、任意の名前で、「偽の」ブランドを含めることができます。
これは、サーバーが未知のユーザーエージェントを即座に拒否することを防ぐために設計された機能であり、ユーザーエージェントにブランド ID について虚偽の情報を報告させることを目的としています。

> [!NOTE]
> {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} ヘッダーは `Sec-CH-UA` と同じですが、それぞれのブランドの主要バージョン番号ではなく、完全なバージョン番号を記載しています。

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
      <td>はい（<code>Sec-</code> 接頭辞）</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Sec-CH-UA: "<brand>";v="<significant version>", …
```

この値は、ユーザーエージェントのブランド一覧に含まれるブランドと、それに関連付けられたメジャーバージョン番号をカンマ区切りで列挙したものです。

### ディレクティブ

- `<brand>`
  - : "Chromium" や "Google Chrome" といったユーザーエージェントに関連付けられたブランド、あるいは `"Not A;Brand"` のような意図的に誤ったブランド。
- `<significant version>`
  - : ウェブ上で公開されている、識別可能な機能に関連付けられた「マーケティング用」のバージョン番号。

## 解説

ブランドとは、Chromium、Opera、Google Chrome、Microsoft Edge、Firefox、Safari などのユーザーエージェントの商品名のことです。
1 つのユーザーエージェントには、複数のブランドが関連付けられている場合があります。
例えば、Opera、Chrome、Edge はすべて Chromium をベースとしており、`Sec-CH-UA` ヘッダーには両方のブランドが指定されます。

_significant version_ とは、そのブランドのメジャーリリースを判別するために使用される「マーケティング用」のバージョン識別子です。
例えば、完全なバージョン番号が "96.0.4664.45" である Chromium ビルドの場合、significant version 番号は "96" となります。

## 例

### 様々な Sec-CH-UA ブランド

`Sec-CH-UA` は[低エントロピーヒント](/ja/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints)です。
ユーザーエージェントの権限ポリシーによってブロックされていない限り、サーバーが {{HTTPHeader("Accept-CH")}} を送信してオプトインする必要はなく、デフォルトで送信されます。

Chromium、Chrome、Edge、Opera の各デスクトップブラウザーの文字列を下記に示します。
これらはすべて "Chromium" というブランドを共有していますが、その由来を示す追加のブランド名も付いている点に注意してください。
また、意図的に誤ったブランド文字列も存在し、これは任意の位置に現れる可能性があり、テキストの内容も異なります。

```http
Sec-CH-UA: "(Not(A:Brand";v="8", "Chromium";v="98"
```

```http
Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
```

```http
Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Microsoft Edge";v="96"
```

```http
Sec-CH-UA: "Opera";v="81", " Not;A Brand";v="99", "Chromium";v="95"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)
- [ユーザーエージェントクライアントヒント API](/ja/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP キャッシュ: Vary](/ja/docs/Web/HTTP/Guides/Caching#vary) および {{HTTPHeader("Vary")}}
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
