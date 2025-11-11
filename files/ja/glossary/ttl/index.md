---
title: TTL
slug: Glossary/TTL
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Time To Live (TTL) は、ネットワークにおけるパケットの寿命、またはキャッシュされたデータの有効期限を意味します。

## ネットワーク

ネットワークでは、パケットに埋め込まれている TTL は通常、そのパケットが破棄されるまでの、ホップ数または有効期限のタイムスタンプとして定義されています。ネットワークをさまよった時間が長すぎるパケットを解放することで、ネットワークの輻輳を回避する手段を提供します。

## キャッシュ

キャッシュでは、 TTL （符号なし 32 ビット整数）は {{Glossary("Response header", "HTTP レスポンスヘッダー")}}または {{Glossary("DNS")}} クエリーの一部です。
リクエスト元がリソースをキャッシュできる期間を秒単位で示します。

## 関連情報

- [TTL](https://ja.wikipedia.org/wiki/Time_to_live) （ウィキペディア）
- [RFC 2181](https://datatracker.ietf.org/doc/html/rfc2181#section-8) (IETF)
- [RFC1035](https://datatracker.ietf.org/doc/html/rfc1035) (IETF)
