---
title: bfcache
slug: Glossary/bfcache
---

{{GlossarySidebar}}

**バック/フォワード**キャッシュ、または **bfcache** とは、モダンブラウザーで利用可能なパフォーマンス向上機能で、以前訪れたページ間の瞬時的な前後ナビゲーションを可能にします。ユーザーがページから移動するときに、そのページの完全なスナップショットを保存しておき、ユーザーがそのページに戻ることを選択した場合、ページを読み込むための通信を繰り返す必要なく、すぐにそのスナップショットを復元できます。

このスナップショットには、メモリー内のページ全体の状態が入っており、その中には JavaScript ヒープも含まれます。実行中のコードはユーザーが移動するとき一時停止され、ページに戻ったときに再開されます。一方、通常の HTTP キャッシュエントリーには、過去のリクエストへのレスポンスのみが含まれています。したがって、bfcache は HTTP キャッシュよりも高速な結果をもたらします。

その一方で、bfcache エントリーはより多くのリソースを必要とし、実行中のコードをどのように再現するのかについて、複雑さが生じます。いくつかのコード機能（例えば [`unload`](/ja/docs/Web/API/Window/unload_event) ハンドラー）は互換性がないため、それらがページに存在する場合は bfcache の使用がブロックされます。

bfcache はパフォーマンスに優れているため、ページが bfcache の使用をブロックされていないことを確認することが重要です。[`notRestoredReasons` API](/ja/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) を使うと、ページが bfcache の使用をブロックされているかどうかと、その理由を監視できます。

## 関連情報

- [Back and forward cache](https://web.dev/articles/bfcache) on web.dev (2023)
