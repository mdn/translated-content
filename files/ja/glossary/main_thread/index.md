---
title: Main thread (メインスレッド)
slug: Glossary/Main_thread
---

**メインスレッド**は、ブラウザーがユーザーのイベントや描画を処理するところです。既定では、ブラウザーは単一のスレッドを使用してページ内のすべての JavaScript を、レイアウト、再フロー、ガベージコレクションなどと同様に実行します。つまり、実行に時間がかかる JavaScript 関数がスレッドをブロックし、ページが反応しなくなり、使い勝手が悪くなります。

意識的に [Service worker](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers) などの [Web worker](/ja/docs/Web/API/Web_Workers_API/Using_web_workers) を使用しない限り、 JavaScript はメインスレッド上で実行されるので、イベント処理や描画の中で簡単にスクリプトが遅延を発生させます。メインスレッドで動作させる必要がある処理が少ないほど、メインスレッドがユーザーのイベントに応答したり、描画したりすることが増え、ユーザーへの反応が全般的に良くなります。

1. 関連情報

   1. [非同期 JavaScript](/ja/docs/Learn/JavaScript/Asynchronous)
   2. [Web worker API](/ja/docs/Web/API/Web_Workers_API)
   3. [Service worker API](/ja/docs/Web/API/Service_Worker_API)

2. [用語集](/ja/docs/Glossary)

   1. {{Glossary("Thread", "スレッド")}}
