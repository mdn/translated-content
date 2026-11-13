---
title: Server-Timing ヘッダー
short-title: Server-Timing
slug: Web/HTTP/Reference/Headers/Server-Timing
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP の **`Server-Timing`** {{Glossary("Response header", "レスポンスヘッダー")}}は、このリクエスト-レスポンスサイクルに関する 1 つ以上のパフォーマンス測定値 (performance metrics) をユーザーエージェントに伝達します。
これは、ユーザーのブラウザーの開発者ツールや {{domxref("PerformanceServerTiming")}} インターフェイスにおいて、バックエンドサーバーのタイミング指標（例えば、データベースの読み取り/書き込み、CPU 時間、ファイルシステムへのアクセスなど）を表示するために使用されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
  </tbody>
</table>

## 構文

```http
// 単一の指標
Server-Timing: <timing-metric>

// 複数の指標をカンマ区切りのリストで
Server-Timing: <timing-metric>, …, <timing-metricN>
```

`<timing-metric>` には名前があり、オプションで時間や説明を含めることができます。
例を示します。

```http
// 単一の値のない指標
Server-Timing: missedCache

// 単一の指標と測定値
Server-Timing: cpu;dur=2.4

// 単一の指標と説明と測定値
Server-Timing: cache;desc="Cache Read";dur=23.2

// 2 つの指標と測定値
Server-Timing: db;dur=53, app;dur=47.2
```

## ディレクティブ

- `<timing-metric>`
  - : 1 つ以上の指標のカンマ区切りのリストで、以下の要素がセミコロンで区切られているものです。
    - `<name>`
      - : `cacheHit` 同様に、実装に依存するか、サーバーによって定義される指標の名前トークン（空白文字や特殊文字を含まないもの）です。
    - `<duration>` {{optional_inline}}
      - : 文字列 `dur` で表される再生時間、その後に `=`、さらに値が続く形式です（同様に `dur=23.2`）。
    - `<description>` {{optional_inline}}
      - : 説明を文字列 `desc` として指定し、その後に `=` が続くようにし、さらにトークンまたは引用符で囲まれた文字列として、例えば `desc=prod` や `desc="DB lookup"` などのように値を指定します。

HTTP データのオーバーヘッドを最小限に抑えるため、名前や説明はできるだけ短くしてください（例えば、略語を使用したり、オプション値を除外したりするなど）。

## 解説

### プライバシーとセキュリティ

`Server-Timing` ヘッダーは微妙なアプリケーションやインフラの情報を公開する可能性があります。
どの指標が、いつ、サーバー側の誰に返されるかを制御することを検討してください。
例えば、指標を認証されたユーザーのみに見せ、一般には見せないようにすることもできます。

### PerformanceServerTiming インターフェイス

`Server-Timing` ヘッダーの指標がブラウザーの開発者ツールに現れるのに加えて、 {{domxref("PerformanceServerTiming")}} インターフェイスでツールが JavaScript から自動的に指標を収集し処理することができます。このインターフェイスは同じオリジンに制約されていますが、 {{HTTPHeader("Timing-Allow-Origin")}} ヘッダーを使用することで、サーバー指標にアクセスすることができるドメインを指定することができます。このインターフェイスはブラウザーによっては、保護されたコンテキスト (HTTPS) のみでしか利用できません。

`Server-Timing` ヘッダーの各要素は、{{domxref("PerformanceServerTiming")}} のプロパティに次のように割り当てられています。

- `"name"` -> {{domxref("PerformanceServerTiming.name")}}
- `"dur"` -> {{domxref("PerformanceServerTiming.duration")}}
- `"desc"` -> {{domxref("PerformanceServerTiming.description")}}

## 例

### Server-Timing ヘッダーを使用した指標の送信

次のレスポンスには、継続時間が `123.45` ミリ秒で、説明が "My custom metric" となっているメトリック `custom-metric` が含まれています。

```http
Server-Timing: custom-metric;dur=123.45;desc="My custom metric"
```

### Server-Timing を HTTP トレーラーとして

次のレスポンスでは、{{HTTPHeader("Trailer")}} ヘッダーを使用して、レスポンス本体の後に `Server-Timing` ヘッダーが続くことを示しています。
所要時間が `123.4` ミリ秒の指標 `custom-metric` が送信されます。

```http
HTTP/1.1 200 OK
Transfer-Encoding: chunked
Trailer: Server-Timing

--- response body ---
Server-Timing: custom-metric;dur=123.4
```

> [!WARNING]
> ブラウザーの開発者ツールのみが、`Server-Timing` ヘッダーを HTTP トレーラーとして使用し、「ネットワーク」→「タイミング」タブに情報を表示させることができます。
> フェッチ API では、HTTP トレーラーにアクセスすることはできません。
> 詳しくは[ブラウザーの互換性](#ブラウザーの互換性)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PerformanceServerTiming")}}
- {{HTTPHeader("Trailer")}} ヘッダー
