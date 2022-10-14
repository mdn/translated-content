---
title: TTL
slug: Glossary/TTL
---
TTL には以下の意味があります。

- ネットワーク内でパケットが破棄されるまで存在できる時間
- キャッシュの有効期限

## ネットワーキング

ネットワーキングでは、パケットに埋め込まれている TTL は通常、そのパケットが破棄されるまでの、ホップ数または有効期限のタイムスタンプとして定義されています。ネットワークを長過ぎる時間行き来したパケットを解放することで、ネットワークの輻輳を回避する手段を提供します。

## キャッシング

キャッシングでは、TTL(符号なし 32 ビット整数)は {{Glossary("Response header", "HTTP response header")}} または {{Glossary("DNS")}} クエリの一部です。
リクエスト元がリソースをキャッシュできる期間を秒単位で示します。

## 詳細情報

### 一般知識

- Wikipedia の [TTL](https://en.wikipedia.org/wiki/Time_to_live)

### 技術リファレンス

- IETF の [RFC 2181](https://tools.ietf.org/html/rfc2181#section-8)
- IETF の [RFC1035](https://tools.ietf.org/html/rfc1035)
