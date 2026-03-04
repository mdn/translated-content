---
title: CONNECT リクエストメソッド
short-title: CONNECT
slug: Web/HTTP/Reference/Methods/CONNECT
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**`CONNECT`** は HTTP のメソッドで、{{Glossary("Proxy server", "プロキシー")}}に対して、宛先サーバーへの HTTP トンネルの確立をリクエストします。成功した場合、トンネルが閉じられるまで双方向のデータを透過的に転送します。

リクエストターゲットは、トンネル出力先のホストとポート番号のみをコロンで区切って構成されるもので、このメソッドに固有のものです（詳細は[構文](#構文)を参照）。
[2XX の成功レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status#successful_responses)は、プロキシーが「トンネルモード」に切り替わり、成功レスポンス本体内のデータがリクエスト対象のサーバーからのものであるという意味です。。

ウェブサイトがプロキシーの背後にある場合、かつ外部トラフィックはすべてプロキシーを経由しなければならないというネットワークルールが強制されている場合、`CONNECT` メソッドを使用すると、そのウェブサイトとの間で {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) 接続を確立することができます。

- クライアントはプロキシーに対し、目的の出力先への {{Glossary("TCP")}} 接続をトンネル処理するよう依頼する。
- プロキシーサーバーはクライアントに代わってサーバーへ保護された接続を確立します。
- 接続が確立されると、プロキシーサーバーはクライアントとの間で TCP ストリームを中継し続けます。

HTTP トンネルは、プロキシー経由でウェブサイトへの安全なアクセスをすることができるだけでなく、通常は制限されるトラフィック（SSH や FTP など）を HTTP(S) プロトコル経由で利用できる方法を提供します。

`CONNECT` はホップバイホップ (hop-by-hop) メソッドであり、ほとんどのオリジンサーバーが `CONNECT` を実装していないため、オリジンサーバーの前に別のインバウンドプロキシーがある場合にのみ、プロキシーは `CONNECT` リクエストを転送します。

> [!WARNING]
> `CONNECT` に対応するプロキシーを実行している場合は、その使用を既知のポートのセットまたは構成不可の安全なリクエスト対象のリストに制限してください。
> 任意のサーバーへのトンネル接続には重大なリスクが伴います。特に、ウェブトラフィック用に設計されていない既知または予約済みの TCP ポートを出力先とする場合、そのリスクは顕著です。
> プロキシーの設定が甘いと、例えば SMTP トラフィックを転送してスパムメールを中継するなどの悪用があります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本体</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">成功時のレスポンスの本体</th>
      <td>なし</td>
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
        <a href="/ja/docs/Learn_web_development/Extensions/Forms">HTML フォーム</a>での使用
      </th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## 構文

```http
CONNECT <host>:<port> HTTP/1.1
```

- `<host>`
  - : ホストは、登録済みホスト名（例: `example.com`）または IP アドレス（IPv4、IPv6）であることがあります。
- `<port>`
  - : 10 進数のポート番号（例：`80`、`443`）。デフォルトのポートは存在しないため、クライアントは必ずポート番号を送信**しなければなりません**。

## 例

### プロキシー認証

認証が必要なプロキシーサーバーへトンネルを作成するリクエストは、以下のようになります。
詳しくは {{HTTPHeader("Proxy-Authorization")}} ヘッダーを参照してください。

```http
CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)
- {{Glossary("Proxy server", "プロキシーサーバー")}}の用語解説
- {{HTTPHeader("Proxy-Authorization")}}
- [How To Use SSH Over An HTTP Proxy](https://www.dimoulis.net/posts/ssh-over-proxy/) dimoulis.net (2023)
