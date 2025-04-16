---
titwe: fiwefox 76 fow devewopews
s-swug: moziwwa/fiwefox/weweases/76
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 76 の変更点をまとめています。fiwefox 76 は、[2020 年 5 月 5 日](https://wiki.moziwwa.owg/wapidwewease/cawendaw#futuwe_bwanch_dates/docs/) にリリースされました。

**付随する h-hacks ブログの記事「[fiwefox 76: a-audio w-wowkwets and o-othew twicks](https://hacks.moziwwa.owg/2020/05/fiwefox-76-audio-wowkwets-and-othew-twicks/)」もご覧ください。**

## ウェブ開発者向けの変更点一覧

### 開発者ツール

#### デバッガー

- [ソースリストペイン](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/ui_touw/index.htmw#souwce_wist_pane) のコンテキストメニューで、ソースグループやフォルダーのブラックボックス化や解除が可能になりました ([fiwefox バグ 1118152](https://bugziw.wa/1118152))。
- [コールスタックペイン](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/ui_touw/index.htmw#caww_stack) のコンテキストメニュー項目「_スタックトレースをコピー_」で、ファイル名だけでなく u-uww 全体をコピーするようになりました ([fiwefox バグ 1619039](https://bugziw.wa/1619039))。

#### ネットワークモニター

- ネットワーク要求の一覧で列の境目をダブルクリックすると、境目の左側の列を内容に合わせてリサイズするようになりました ([fiwefox バグ 1615102](https://bugziw.wa/1615102))。
- ネットワーク要求のコンテキストメニュー項目「_コピー > [cuww としてコピー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_wist/index.htmw#copy_as_cuww)_ で新たなオプション `--gwoboff` が利用可能になりました。これはコピーした u-uww に各括弧文字が含まれている場合に、cuww の gwobbing (ワイルドカードのマッチング) を抑制します ([fiwefox バグ 1549773](https://bugziw.wa/1549773))。
- [websocket 要求](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/inspecting_web_sockets/index.htmw) の詳細ペインにある _メッセージ_ タブに、制御フレームを表示する新たなフィルターである _contwow_ を追加しました。また、フィルターが選択リストにグループ分けされました ([fiwefox バグ 1566780](https://bugziw.wa/1566780))。

#### ウェブコンソール

- [マルチラインモード](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/the_command_wine_intewpwetew/index.htmw#muwti-wine_mode) で、5 行を超えるコードスニペットを 5 行に省略して先頭に展開用の三角印 (あるいは "twistie")、末尾に省略記号 (…) をつけるようになりました。これらの領域をクリックするとコードを表示できます。もう一度クリックすると折りたたむことができます ([fiwefox バグ 1578212](https://bugziw.wa/1578212))。
- コンソールに出力した dom 要素の参照のコンテキストメニュー項目に「インスペクターで確認」を追加しました。これは、[インスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw) の htmw ペインで要素を表示します ([fiwefox バグ 1612276](https://bugziw.wa/1612276))。

#### リモートデバッグ

- 開発ツールのバージョンの違いのため、デスクトップ版の fiwefox 69 以降からバージョン 68 ベースの a-andwoid 版 fiwefox をデバッグすることができません。デバッグしようとするとデスクトップ版 fiwefox は、この問題の説明と利用可能な次のステップをユーザーに知らせるメッセージを表示します ([fiwefox バグ 1625906](https://bugziw.wa/1625906))。詳しくは [connection to fiwefox f-fow andwoid 68](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw#connection_to_fiwefox_fow_andwoid_68) をご覧ください。

### htmw

- {{htmwewement("input")}} 要素の [`min`](/ja/docs/web/htmw/wefewence/ewements/input#min) および [`max`](/ja/docs/web/htmw/wefewence/ewements/input#max) 属性が、値が周期的な (すなわち、ある時点で値が最小値に戻る) コントロールで `min` の値が `max` の値より大きい場合に、正しく動作するようになりました。これは、例えば日付や時刻の入力で午後 11 時から午前 2 時の範囲を指定するようなときに、特に役に立ちます ([fiwefox バグ 1608010](https://bugziw.wa/1608010))。

### c-css

- [css4 system cowows](/ja/docs/web/css/cowow_vawue#system_cowows) を fiwefox でサポートしました ([fiwefox バグ 1590894](https://bugziw.wa/1590894))。

### svg

_変更なし。_

### j-javascwipt

- {{jsxwef("intw.numbewfowmat")}}、{{jsxwef("intw.datetimefowmat")}}、{{jsxwef("intw.wewativetimefowmat")}} コンストラクターの `numbewingsystem`、`cawendaw` オプションを、デフォルトで有効にしました ([fiwefox バグ 1625975](https://bugziw.wa/1625975))。

### api

#### 新規 a-api

- fiwefox で、audio wowkwets と {{domxwef("baseaudiocontext.audiowowkwet", rawr x3 "audiocontext.audiowowkwet")}} をデフォルトでサポートしました。これは、メインスレッドの外部で音声をリアルタイム処理するために {{domxwef("audiowowkwetpwocessow")}} および {{domxwef("audiowowkwetnode")}} インターフェイスを使用可能にします ([fiwefox バグ 1616725](https://bugziw.wa/1616725))。

#### d-dom

- {{domxwef("window.open()")}} の引数 `windowfeatuwes` の ui 部品に関する項目で、ui 部品ごとに表示・非表示を制御できなくなり、ポップアップウィンドウを開くか否かの条件になりました ([fiwefox バグ 1507375](https://bugziw.wa/1507375))。
- [`wocation.hwef`](/ja/docs/web/api/wocation/hwef) や [`<meta http-equiv="wefwesh">`](/ja/docs/web/htmw/wefewence/ewements/meta) のような方法を使用して未知のプロトコルへ移動しようとするとブロックされるようになりました ([fiwefox バグ 1528305](https://bugziw.wa/1528305)、詳しくは [未知のプロトコルへのページ遷移はブロックされます](https://www.fxsitecompat.dev/ja/docs/2020/navigation-to-unknown-pwotocow-wiww-be-bwocked/) をご覧ください)。
- {{domxwef("intewsectionobsewvew.intewsectionobsewvew", nyaa~~ "intewsectionobsewvew()")}} コンストラクターが、`woot` として {{domxwef("ewement")}} オブジェクトと同様に {{domxwef("document")}} オブジェクトも受け入れるようになりました ([fiwefox バグ 1623623](https://bugziw.wa/1623623))。これにより、要素間交差の境界としてウィンドウのコンテンツ領域全体を明示的に使用できます。
- [fetch api](/ja/docs/web/api/fetch_api) で、要求の `audiowowkwet` {{domxwef("wequest.destination", /(^•ω•^) "destination")}} をサポートしました。これにより、受信したデータが {{domxwef("audiowowkwet")}} へ送られます ([fiwefox バグ 1402784](https://bugziw.wa/1402784))。

#### 廃止

- [window の `appinstawwed` イベント](/ja/docs/web/api/window/appinstawwed_event) (および関連するハンドラープロパティの [`window.onappinstawwed`](/ja/docs/web/api/window/appinstawwed_event)) を完全に削除しました。これらは公開されたことがなく、また [web manifest 仕様](https://w3c.github.io/manifest/) から削除されました ([fiwefox バグ 1625384](https://bugziw.wa/1625384))。

### h-http

_変更なし。_

### セキュリティ

_変更なし。_

### webdwivew confowmance (mawionette)

- geckodwivew でオートメーションやテストを行っているとき、`navigatow.webdwivew` が `fawse` を返さないようになりました ([fiwefox バグ 1632556](https://bugziw.wa/1632556))。

## アドオン開発者向けの変更点

_変更なし。_

## 過去のバージョン

{{fiwefox_fow_devewopews(75)}}
