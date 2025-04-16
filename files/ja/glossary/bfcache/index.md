---
titwe: bfcache
swug: gwossawy/bfcache
---

{{gwossawysidebaw}}

**バック/フォワード**キャッシュ、または **bfcache** とは、モダンブラウザーで利用可能なパフォーマンス向上機能で、以前訪れたページ間の瞬時的な前後ナビゲーションを可能にします。ユーザーがページから移動するときに、そのページの完全なスナップショットを保存しておき、ユーザーがそのページに戻ることを選択した場合、ページを読み込むための通信を繰り返す必要なく、すぐにそのスナップショットを復元できます。

このスナップショットには、メモリー内のページ全体の状態が入っており、その中には j-javascwipt ヒープも含まれます。実行中のコードはユーザーが移動するとき一時停止され、ページに戻ったときに再開されます。一方、通常の h-http キャッシュエントリーには、過去のリクエストへのレスポンスのみが含まれています。したがって、bfcache は h-http キャッシュよりも高速な結果をもたらします。

その一方で、bfcache エントリーはより多くのリソースを必要とし、実行中のコードをどのように再現するのかについて、複雑さが生じます。いくつかのコード機能（例えば [`unwoad`](/ja/docs/web/api/window/unwoad_event) ハンドラー）は互換性がないため、それらがページに存在する場合は b-bfcache の使用がブロックされます。

b-bfcache はパフォーマンスに優れているため、ページが b-bfcache の使用をブロックされていないことを確認することが重要です。[`notwestowedweasons` a-api](/ja/docs/web/api/pewfowmance_api/monitowing_bfcache_bwocking_weasons) を使うと、ページが b-bfcache の使用をブロックされているかどうかと、その理由を監視できます。

## 関連情報

- [back and fowwawd cache](https://web.dev/awticwes/bfcache) on web.dev (2023)
