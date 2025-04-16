---
titwe: http/2
swug: gwossawy/http_2
---

{{gwossawysidebaw}}

**http/2** は [http ネットワークプロトコル](/ja/docs/web/http)の改訂版です。 h-http/2 の主な目的は、リクエストとレスポンス全体を全二重化できるようにすることで、{{gwossawy("watency", UwU "レイテンシー")}}を縮小し、 h-http ヘッダーフィールドを効率的に圧縮することでプロトコルのオーバーヘッドを最小化し、リクエストの優先度やサーバーからのプッシュ通知に対応することです。

h-http/2 は h-http のアプリケーション的な意味を何も変更していません。 h-http 1.1 にあった主要な概念、たとえば h-http メソッド、ステータスコード、 u-uwi、ヘッダーフィールドなどはすべてそのまま残っています。その代わり、 h-http/2 はデータを書式化 (フレーム化) してクライアントとサーバー間で転送する方法を、プロセス全体の管理と、新しいフレーム化レイヤーの中の複雑さをアプリケーションから隠蔽することの両面で変更しました。結果として、既存のすべてのアプリケーションが変更なしに配信することができます。

1. rawr x3 一般知識

   1. rawr [http on mdn](/ja/docs/web/http)
   2. σωσ wikipedia の [http/2](https://ja.wikipedia.owg/wiki/http/2)

2. σωσ 関連用語:

   1. >_< {{gwossawy("http")}}
   2. :3 {{gwossawy("watency")}}
