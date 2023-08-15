---
title: Retry-After
slug: Web/HTTP/Headers/Retry-After
---

{{HTTPSidebar}}

**`Retry-After`** レスポンス HTTP ヘッダーは、ユーザーエージェントがフォローアップリクエストを行う前にどれくらい待つべきかを示します。このヘッダーが使用される主なケースは 3 つあります。

- {{HTTPStatus(503)}} (Service Unavailable) レスポンスで送信された場合、これはサービスが利用できないと予想される期間を示します。
- {{HTTPStatus(429)}} (Too Many Requests) レスポンスとともに送信された場合、これは新しいリクエストを行うまでどれくらい待つかを示します。
- {{HTTPStatus(301)}} (Moved Permanently) のようなリダイレクトレスポンスとともに送信された場合、リダイレクトされたリクエストを発行する前にユーザエージェントが待機するように要求される最小時間を示します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダータイプ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Retry-After: <http-date>
Retry-After: <delay-seconds>
```

## ディレクティブ

- \<http-date>
  - : 再試行する日付。HTTP の日付形式の詳細については {{HTTPHeader("Date")}} ヘッダーを参照してください。
- \<delay-seconds>
  - : レスポンスを受信してから遅延する秒数を示す負でない 10 進数の整数。

## 例

### スケジュールされたダウンタイムの処理

クライアントとサーバーの両方で `Retry-After` ヘッダーがサポートされているのは、依然として矛盾しています。ただし、Googlebot のような一部のクローラとスパイダーは `Retry-After` ヘッダーを尊重します。{{HTTPStatus(503)}} (Service Unavailable) レスポンスと共に送信すると便利です。これにより、ダウンタイムが終了したときに検索エンジンがサイトのインデックスを作成し続けるようになります。

```
Retry-After: Wed, 21 Oct 2015 07:28:00 GMT
Retry-After: 120
```

## 仕様

| 仕様書                                  | タイトル                                                      |
| --------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Retry-After", "7.1.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

{{Compat("http.headers.Retry-After")}}

## 関連情報

- [Google Webmaster blog: How to deal with planned site downtime](https://webmasters.googleblog.com/2011/01/how-to-deal-with-planned-site-downtime.html)
- {{HTTPStatus(503)}} (Service Unavailable)
- {{HTTPStatus(301)}} (Moved Permanently)
