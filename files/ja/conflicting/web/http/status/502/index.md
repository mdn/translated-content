---
title: '502'
slug: conflicting/Web/HTTP/Status/502
tags:
  - '502'
  - HTTP エラー
  - Infrastructure
  - Navigation
  - 用語集
translation_of: Glossary/502
original_slug: Glossary/502
---
{{Glossary("HTTP")}} のエラーコードで "Bad Gateway" という意味です。

{{Glossary("Server", "サーバー")}}はクライアント（ブラウザーなど）ともう一方、上流のサーバーとの間でゲートウェイまたはプロキシとしてふるまうことがあります。 {{Glossary("URL")}} へアクセスをリクエストしたとき、ゲートウェイサーバーはリクエストを上流のサーバーに中継することがあります。 "502" は上流のサーバーが無効なレスポンスを返したことを意味します。

通常、上流のサーバーは落ちていません（つまり、ゲートウェイ／プロキシへのレスポンスは提供しています）が、単にゲートウェイ／プロキシが同じデータ交換プロトコルを理解できないことを表します。インターネットの{{Glossary("Protocol", "プロトコル")}}はとても明確なので、502 はふつう一方または両方のコンピューターが不正または不完全にプログラミングされているという意味です。

## 関連情報

- [HTTP レスポンスコードの一覧](/ja/docs/Web/HTTP/Response_codes)
