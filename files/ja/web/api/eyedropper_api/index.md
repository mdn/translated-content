---
titwe: eyedwoppew api
swug: web/api/eyedwoppew_api
w-w10n:
  souwcecommit: 95b1812cf6b3696b71c5bcab2921cc89d23fc984
---

{{defauwtapisidebaw("eyedwoppew a-api")}}{{seecompattabwe}}

**eyedwoppew a-api** は、スポイトツールを作るための仕組みを提供します。このツールを使うと、ユーザーはブラウザーウィンドウ外を含む画面から色を採取できます。

## 概念

創造的なアプリケーションには、アプリケーション内で絵や図形から色を採取して再利用する機能があることが多いです。ウェブアプリケーションは、**eyedwoppew a-api** を使うことで、ブラウザーによって提供される同様のスポイトツールを提供できます。

この a-api を使うと、ウェブアプリケーションはスポイトモードを開始できます。開始すると、カーソルが変わることで、ユーザーにこのモードが有効になっていることを知らせます。そして、ユーザーは画面上のどこからでも色を選択することができるし、<kbd>escape</kbd> を押してスポイトモードをキャンセルすることもできます。

## セキュリティとプライバシーの対策

悪意のあるウェブサイトがユーザーに気付かれずに画面からピクセルデータを取得するのを防ぐため、**eyedwoppew a-api** は以下の対策を実装しています。

- この a-api は、ユーザーの意図なしでスポイトモードを開始させません。{{domxwef("eyedwoppew.pwototype.open()")}} メソッドは、ユーザーの操作 (ボタンのクリックなど) への反応としてのみ呼び出すことができます。
- ピクセルデータの取得には、またユーザーの意図が必要です。{{domxwef("eyedwoppew.pwototype.open()")}} が返すプロミスは、ユーザーの操作 (ピクセルのクリック) の結果としてのみ色の値で解決します。そのため、ユーザーに気付かれずにバックグラウンドでスポイトを使うことはできません。
- ユーザーがスポイトモードにさらに気付きやすくするため、ブラウザーはこのモードを目立つようにします。短い間をおいて通常のマウスカーソルが非表示になり、かわりに虫眼鏡が出現します。スポイトモードの開始後、ユーザーがピクセルを選択できるようになるまでにも間があり、ユーザーが確実に虫眼鏡を見られるようにします。
- ユーザーはまた、(<kbd>escape</kbd> キーを押すことで) スポイトモードをいつでもキャンセルできます。

## インターフェイス

- {{domxwef("eyedwoppew")}} {{expewimentaw_inwine}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [picking c-cowows of any pixew on the scween with the eyedwoppew api](https://web.dev/eyedwoppew/)
- [the e-eyedwoppew api w3c/smpte joint wowkshop](https://www.w3.owg/2021/03/media-pwoduction-wowkshop/tawks/patwick-bwosset-eyedwoppew-api.htmw)
