---
title: Network Error Logging
slug: Web/HTTP/Network_Error_Logging
---

{{HTTPSidebar}}{{SeeCompatTable}}

ネットワークエラーロギングは、HTTP の {{HTTPHeader("NEL")}} *[レスポンスヘッダー](/ja/docs/Glossary/Response_header)*を使って設定できるメカニズムです。この実験的なヘッダーにより、ウェブサイトやアプリケーションは、対応しているブラウザーから、失敗した (必要であれば成功した) ネットワーク読み取りに関するレポートを受け取ることを選択することができます。

レポートは、 {{HTTPHeader("Report-To")}} ヘッダーで定義された報告グループに送信されます。

## 使用方法

ウェブアプリケーションは、 *[JSON エンコード](/ja/docs/Glossary/Response_header)*されたオブジェクトである NEL ヘッダーを使って、この動作を選択します。

```
NEL: { "report_to": "nel",
       "max_age": 31556952 }
```

ブラウザーから安全と認識されたオリジンが必要です。

以下のオブジェクトキーが NEL ヘッダーで指定されています。

- report_to
  - : ネットワークエラーレポートの送信先となる [Reporting API](/ja/docs/Web/API/Reporting_API) グループです。
- max_age
  - : ポリシーの有効期間を秒単位で指定します (HSTS ポリシーが時間制限されているのと同様の方法です)。参照される報告グループは、少なくとも NEL ポリシーと同程度の有効期間を持つ必要があります。
- include_subdomains
  - : true の場合、ポリシーは、ポリシーヘッダーが設定されているオリジンの下のすべてのサブドメインに適用されます。このオプションを有効にする場合は、サブドメインを含めるように報告グループを設定する必要があります。
- success_fraction
  - : 0 と 1 の間の浮動小数点値で、報告するネットワーク要求が成功した割合を指定します。既定値は 0 で、JSON ペイロードにキーが存在しない場合、成功したネットワークリクエストは報告されません。
- failure_fraction
  - : 0 と 1 の間の浮動小数点値で、報告する**失敗した**ネットワークリクエストの割合を指定します。既定値は 1 で、JSON ペイロードにキーが存在しない場合、失敗したすべてのネットワークリクエストが報告されます。

上記のレポートグループは、 {{HTTPHeader("Report-To")}} ヘッダー内で通常の方法で定義されます。例えば下記のようになります。

```
Report-To: { "group": "nel",
             "max_age": 31556952,
             "endpoints": [
               { "url": "https://example.com/csp-reports" }
             ] }
```

## エラーレポート

これらの例では、Reporting API のペイロード全体を示しています。最上位の **`"body"`** キーには、ネットワークエラーレポートが含まれています。

### HTTP 400 (Bad Request) response

```js
{
  "age": 20,
  "type": "network-error",
  "url": "https://example.com/previous-page",
  "body": {
    "elapsed_time": 338,
    "method": "POST",
    "phase": "application",
    "protocol": "http/1.1",
    "referrer": "https://example.com/previous-page",
    "sampling_fraction": 1,
    "server_ip": "137.205.28.66",
    "status_code": 400,
    "type": "http.error",
    "url": "https://example.com/bad-request"
  }
}
```

### DNS 名が未解決

なお、このレポートではフェーズが `dns` に設定されており、含めることのできる `server_ip` はありません。

```js
{
  "age": 20,
  "type": "network-error",
  "url": "https://example.com/previous-page",
  "body": {
    "elapsed_time": 18,
    "method": "POST",
    "phase": "dns",
    "protocol": "http/1.1",
    "referrer": "https://example.com/previous-page",
    "sampling_fraction": 1,
    "server_ip": "",
    "status_code": 0,
    "type": "dns.name_not_resolved",
    "url": "https://example-host.com/"
  }
}
```

ネットワークエラーの種類は、仕様で定義された以下の値のいずれかですが、ブラウザーは独自のエラー種別を追加して送信することができます。

- `dns.unreachable`
  - : ユーザーの DNS サーバーに到達できない
- `dns.name_not_resolved`
  - : ユーザーの DNS サーバーは応答したが、リクエストされた URI の IP アドレスに解決できなかった。
- `dns.failed`
  - : DNS サーバーへのリクエストが、以前のエラー (SERVFAIL など) でカバーされない理由で失敗した
- `dns.address_changed`
  - : セキュリティ上の理由から、オリジナルのレポートを配信したサーバーの IP アドレスが、エラー発生時の現在のサーバーの IP アドレスと異なる場合、レポートデータはこの問題に関する情報のみを含むようにダウングレードされ、タイプは `dns.address_changed` に設定されます。
- `tcp.timed_out`
  - : サーバーへの TCP コネクションがタイムアウトした
- `tcp.closed`
  - : TCP コネクションがサーバーから閉じられた
- `tcp.reset`
  - : TCP コネクションがリセットされた
- `tcp.refused`
  - : TCP コネクションがサーバーから拒否された
- `tcp.aborted`
  - : TCP コネクションが中止された
- `tcp.address_invalid`
  - : IP アドレスが無効である
- `tcp.address_unreachable`
  - : IP アドレスに到達できない
- `tcp.failed`
  - : TCP コネクションが直前のエラーによってカバーできない原因で失敗した
- `http.error`
  - : ユーザーエージェントがレスポンスの受信に成功したが、 [4xx](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5) または [5xx](https://datatracker.ietf.org/doc/html/rfc7231#section-6.6) のステータスコードであった
- `http.protocol.error`
  - : コネクションが HTTP プロトコルエラーのために中止された
- `http.response.invalid`
  - : レスポンスが空であるか、 content-length が合っていないか、エンコーディングが正しくないか、その他の状況でユーザーエージェントがレスポンスを処理できなかった
- `http.response.redirect_loop`
  - : リクエストはリダイレクトループが検出されたため中止された
- `http.failed`
  - : コネクションは直前のエラーでカバーされなかった HTTP プロトコルのエラーで失敗した

## 仕様書

| 仕様書                                                                             |
| ---------------------------------------------------------------------------------- |
| [Network Error Logging](https://w3c.github.io/network-error-logging/#introduction) |

## ブラウザーの互換性

{{Compat}}
