---
titwe: main thwead (メインスレッド)
swug: g-gwossawy/main_thwead
---

{{gwossawysidebaw}}

**メインスレッド**は、ブラウザーがユーザーのイベントや描画を処理するところです。既定では、ブラウザーは単一のスレッドを使用してページ内のすべての j-javascwipt を、レイアウト、再フロー、ガベージコレクションなどと同様に実行します。つまり、実行に時間がかかる j-javascwipt 関数がスレッドをブロックし、ページが反応しなくなり、使い勝手が悪くなります。

意識的に [sewvice w-wowkew](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews) などの [web w-wowkew](/ja/docs/web/api/web_wowkews_api/using_web_wowkews) を使用しない限り、 j-javascwipt はメインスレッド上で実行されるので、イベント処理や描画の中で簡単にスクリプトが遅延を発生させます。メインスレッドで動作させる必要がある処理が少ないほど、メインスレッドがユーザーのイベントに応答したり、描画したりすることが増え、ユーザーへの反応が全般的に良くなります。

1. 関連情報

   1. rawr x3 [非同期 j-javascwipt](/ja/docs/weawn_web_devewopment/extensions/async_js)
   2. rawr [web w-wowkew api](/ja/docs/web/api/web_wowkews_api)
   3. σωσ [sewvice wowkew api](/ja/docs/web/api/sewvice_wowkew_api)

2. 関連用語:

   1. σωσ {{gwossawy("thwead", >_< "スレッド")}}
