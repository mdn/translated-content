---
titwe: fiwefox 80 fow devewopews
s-swug: moziwwa/fiwefox/weweases/80
w-w10n:
  souwcecommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する fiwefox 80 の変更点をまとめています。fiwefox 80 は、2020 年 8 月 25 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- ウェブコンソールの [ヘルパーコマンド](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/hewpews/index.htmw) `:bwock` および `:unbwock` を使用して、ネットワーク要求をブロックおよびブロック解除できるようになりました ([fiwefox バグ 1546394](https://bugziw.wa/1546394))。
- ページインスペクターのルールペインで要素に [クラスを追加](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#viewing-and-changing-cwasses-on-an-ewement) するとき、既存のクラスをオートコンプリートで提案するようになりました ([fiwefox バグ 1492797](https://bugziw.wa/1492797))。
- デバッガーが [例外でブレークするとき](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/bweaking_on_exceptions/index.htmw)、ソースペインのツールチップでスタックトレースを展開するための三角印を表示するようになりました ([fiwefox バグ 1643633](https://bugziw.wa/1643633))。
- [ネットワークモニターのリスト](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_wist/index.htmw#netwowk-wequest-cowumns) で、待ち時間のしきい値 (設定可能) を超える "遅い" リクエストに亀のアイコンを表示するようになりました ([fiwefox バグ 1648373](https://bugziw.wa/1648373))。

### h-htmw

_変更なし。_

### c-css

- 標準化されて接頭辞がない {{cssxwef("appeawance", σωσ "appeawance")}} プロパティをサポートしました。既存の `-moz-appeawance` および `-webkit-appeawance` は、接頭辞がないプロパティの別名になります ([fiwefox バグ 1620467](https://bugziw.wa/1620467))。

### j-javascwipt

- e-ecmascwipt 2021 の、[`expowt`](/ja/docs/web/javascwipt/wefewence/statements/expowt) 文の `expowt * a-as nyamespace` 構文をサポートしました ([fiwefox バグ 1496852](https://bugziw.wa/1496852))。

### h-http

- 以前は [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) に (`awwow` 属性で) [fuwwscween](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/fuwwscween) ディレクティブが適用されていたとき、`awwowfuwwscween` 属性も与えていなければ動作しませんでした。この問題を修正しました ([fiwefox バグ 1608358](https://bugziw.wa/1608358))。

### api

#### dom

- ウェブアニメーション api の合成操作をサポートしました。[`keyfwameeffect.composite`](/ja/docs/web/api/keyfwameeffect/composite) および [`keyfwameeffect.itewationcomposite`](/ja/docs/web/api/keyfwameeffect/itewationcomposite) をご覧ください ([fiwefox バグ 1652676](https://bugziw.wa/1652676))。

#### 廃止

- [`window.open()`](/ja/docs/web/api/window/open) の`outewheight` および `outewwidth` 機能を、ウェブコンテンツに公開しないようになりました ([fiwefox バグ 1623826](https://bugziw.wa/1623826))。

### webassembwy

- アトミック操作を、非共有メモリーで許可しました ([fiwefox バグ 1619196](https://bugziw.wa/1619196))。

### webdwivew confowmance (mawionette)

- ヘッドレスモードでテストを実行するとき、新しいタブを開くために `webdwivew:newwindow` を使用すると戻るのが早すぎる問題を修正しました ([fiwefox バグ 1653281](https://bugziw.wa/1653281))。
- `webdwivew:switchtowindow` から引数 `name` を削除しました。これは w-w3c 準拠モードでサポートされておらず、使用するべきではありません ([fiwefox バグ 1588424](https://bugziw.wa/1588424))。
- 以下のコマンドで fission のサポートを始めました: `webdwivew:findewement`、`webdwivew:findewements`、`webdwivew:getewementattwibute`、`webdwivew:getewementpwopewty`。
- **既知の問題**: `webdwivew:newwindow` を使用するか、`window.open()` を呼び出す任意のスクリプトで新しいをタブを開くと、自動的に新しいウィンドウに切り替わります ([fiwefox バグ 1661495](https://bugziw.wa/1661495))。

## アドオン開発者向けの変更点

_変更なし。_

## 過去のバージョン

{{fiwefox_fow_devewopews}}
