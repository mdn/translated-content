---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
---

{{HTTPSidebar}}

**HTTP の `CONNECT` メソッド**は、リクエストしたリソースを用いて双方向の通信を開始します。これはトンネリングを開始するときに使用されます。

例えば、 `CONNECT` メソッドは {{Glossary("SSL")}} ({{Glossary("HTTPS")}}) を使用したウェブサイトにアクセスする際に使用されます。クライアントは HTTP の{{Glossary("Proxy server", "プロキシサーバー")}}に希望する宛先への [TCP](/ja/docs/Glossary/TCP) コネクションをトンネリングするように依頼します。その場合、プロキシサーバーはクライアントに代わってコネクションの作成を継続します。一度コネクションがサーバーによって確立されると、{{Glossary("Proxy server", "プロキシサーバー")}}はクライアント宛て/クライアント発の TCP ストリームのプロキシーを継続します。

`CONNECT` はホップバイホップ (hop-by-hop) のメソッドです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本文</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">成功時のレスポンスの本文</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全性")}}</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "べき等性")}}</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "キャッシュ")}}</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Learn/Forms">HTML フォーム</a>での使用
      </th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## 構文

```
CONNECT www.example.com:443 HTTP/1.1
```

## 例

プロキシーサーバの中には、トンネルの作成に認証を必要とするものがあります。 {{HTTPHeader("Proxy-Authorization")}} ヘッダーも参照してください。

```
CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Glossary("Proxy server", "プロキシーサーバー")}}
- {{HTTPHeader("Proxy-Authorization")}}
