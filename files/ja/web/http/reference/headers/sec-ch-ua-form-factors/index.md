---
title: Sec-CH-UA-Form-Factors ヘッダー
short-title: Sec-CH-UA-Form-Factors
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Form-Factors
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SecureContext_Header}}{{SeeCompatTable}}

HTTP の **`Sec-CH-UA-Form-Factors`** {{Glossary("request header", "リクエストヘッダー")}} は[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザーエージェントクライアントヒント)で、ユーザーエージェントの端末のフォームファクターに関する情報を提供します。

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
Sec-CH-UA-Form-Factors: <form-factor>
Sec-CH-UA-Form-Factors: <form-factor>, …, <form-factor>
```

### ディレクティブ

- `<form-factor>`
  - : 一般的な端末のフォームファクターを示す文字列。
    該当するすべてのフォームファクターを含めることができます。
    許容される値の意味は次のとおりです。
    - `"Desktop"`
      - : パーソナルコンピューター上で実行されるユーザーエージェント。
    - `"Automotive"`
      - : 車両に埋め込まれたユーザーエージェント。この場合、ユーザーが車両を運転する責任を持ち、操作能力には制限がある場合がある。
    - `"Mobile"`
      - : 通常、ユーザーが身につけて持ち歩く、小型のタッチ操作対応端末。
    - `"Tablet"`
      - : `"Mobile"` よりも大きく、通常はユーザーが持ち歩かないタッチ操作型の端末。
    - `"XR"`
      - : ユーザーの周囲の環境を拡張または置き換える没入型端末。
    - `"EInk"`
      - : 画面の更新が遅く、色解像度が制限されている、あるいはまったくないことを特徴とする端末。
    - `"Watch"`
      - : 画面が非常に小さい（通常は 2 インチ未満）モバイル端末で、ユーザーがすばやく目をやって確認できるような持ち方をするもの。

## 例

### Sec-CH-UA-Form-Factors の使用

サーバーは、クライアントからのリクエストに対するレスポンスに {{HTTPHeader("Accept-CH")}} を含めることで、`Sec-CH-UA-Form-Factors` ヘッダーを要求します。この際、希望するヘッダー名をトークンとして使用します。

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Form-Factors
```

クライアントは、このヒントを提供することを選択することができます。その後、リクエストに `Sec-CH-UA-Form-Factors` ヘッダーを追加することができます。
例えば、クライアントは次のようにヘッダーを追加することができます。

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Form-Factors: "EInk"
```

この場合、`"EInk"` は、その端末が画面の更新速度が遅く、色解像度が制限されているということの意味があります。そのため、このヒントに応じてレスポンスが異なる場合があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)
- [ユーザーエージェントクライアントヒント API](/ja/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP キャッシュ: Vary](/ja/docs/Web/HTTP/Guides/Caching#vary) および {{HTTPHeader("Vary")}} ヘッダー
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) - developer.chrome.com
