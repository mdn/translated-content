---
title: From ヘッダー
short-title: From
slug: Web/HTTP/Reference/Headers/From
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`From`** {{Glossary("request header", "リクエストヘッダー")}}には、リクエスト元のユーザーエージェントを制御する管理者の E メールアドレスが含まれています。

ロボティックユーザーエージェント（クローラなど）を使用している場合は、`From` ヘッダーを送信する必要があります。ロボットが過度の不要なリクエストや無効なリクエストを送信しているなど、サーバーに問題が発生した場合は連絡できます。

> [!WARNING]
> アクセス制御または認証には `From` ヘッダーを使用しないでください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
From: <email>
```

## ディレクティブ

- `<email>`
  - : マシンが使用可能な電子メールアドレス。

## 例

```http
From: webmaster@example.org
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Host")}}
