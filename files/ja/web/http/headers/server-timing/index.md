---
title: Server-Timing
slug: Web/HTTP/Headers/Server-Timing
---

{{HTTPSidebar}}

**`Server-Timing`** ヘッダーは、指定されたリクエスト－レスポンスのサイクルについての 1 つ以上のメトリックと説明を通信します。ユーザーのブラウザーの開発ツール内や、 {{domxref("PerformanceServerTiming")}} インターフェイス内で、任意のバックエンドサーバーのタイミングメトリック (データベースの読み書き、 CPU 時間、ファイルシステムアクセス、など) を表面化させるために使用します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

`Server-Timing` ヘッダーの構文では、さまざまな方法でメトリックを通信することができます。サーバーメトリック名のみ、メトリックと値、メトリックと値と説明、メトリックと説明などです。

仕様書では、 HTTP のオーバーヘッドを最小化するために、名前と説明を (略語を使用したり可能な限り値を省略したりして) できるだけ短くすることを推奨しています。

```
// 単一の値のないメトリック
Server-Timing: missedCache

// 単一のメトリックと値
Server-Timing: cpu;dur=2.4

// 単一のメトリックと説明と値
Server-Timing: cache;desc="Cache Read";dur=23.2

// 二つのメトリックと値
Server-Timing: db;dur=53, app;dur=47.2

// Server-Timing as trailer
Trailer: Server-Timing
--- response body ---
Server-Timing: total;dur=123.4
```

## プライバシーとセキュリティ

`Server-Timing` ヘッダーは微妙なアプリケーションやインフラの情報を公開する可能性があります。どのメトリックが、いつ、サーバー側の誰に返されるかを制御することを検討してください。例えば、メトリックを認証されたユーザーのみに見せ、一般には見せないようにすることもできます。

## PerformanceServerTiming インターフェイス

`Server-Timing` ヘッダーのメトリックがブラウザーの開発者ツールに現れるのに加えて、 {{domxref("PerformanceServerTiming")}} インターフェイスでツールが JavaScript から自動的にメトリックを収集し処理することができます。このインターフェイスは同じオリジンに制約されていますが、 {{HTTPHeader("Timing-Allow-Origin")}} ヘッダーを使用することで、サーバーメトリックにアクセスすることができるドメインを指定することができます。このインターフェイスはブラウザーによっては、安全なコンテキスト (HTTPS) のみでしか利用できません。

## 仕様書

{{Specifications}}

## ブラウザーの対応

{{Compat}}

## 関連情報

- {{domxref("PerformanceServerTiming")}}
