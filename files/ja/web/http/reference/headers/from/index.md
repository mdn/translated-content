---
title: From
slug: Web/HTTP/Reference/Headers/From
original_slug: Web/HTTP/Headers/From
---

**`From`** リクエストヘッダーには、リクエスト元の user agent を制御する人のユーザーの E メールアドレスが含まれています。

ロボティックユーザーエージェント (クローラなど) を使用している場合は、`From` ヘッダーを送信する必要があります。ロボットが過度の不要なリクエストや無効なリクエストを送信しているなど、サーバーに問題が発生した場合は連絡できます。

> [!WARNING]
> アクセス制御または認証には `From` ヘッダーを使用しないでください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダータイプ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
From: <email>
```

## ディレクティブ

- \<email>
  - : マシンに使用可能な電子メールアドレス。

## 例

```
From: webmaster@example.org
```

## 仕様書

| 仕様書                           | タイトル                                                      |
| -------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "From", "5.5.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Host")}}
