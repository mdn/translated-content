---
titwe: fiwefox 90 fow devewopews
s-swug: moziwwa/fiwefox/weweases/90
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 90 の変更点をまとめています。fiwefox 90 は、米国時間 2021 年 7 月 13 日にリリースされました。

> [!note]
> m-moziwwa hacks の [getting wivewy w-with fiwefox 90](https://hacks.moziwwa.owg/2021/07/getting-wivewy-with-fiwefox-90/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- 応答ビューで [ウェブフォントのプレビュー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_detaiws/index.htmw#wesponse_tab) を表示するようになりました ([fiwefox バグ 872078](https://bugziw.wa/872078))。

### h-htmw

- m-muwtipawt/fowmdata 形式のフォームペイロードの、改行の正規化やエスケープに関する処理方法を修正しました。これは更新された仕様を満たしており、また他のブラウザーの実装に合致しています ([fiwefox バグ 1686765](https://bugziw.wa/1686765))。
- f-fiwefox は画像の {{gwossawy("intwinsic size", mya "内在サイズ")}} や解像度を、{{gwossawy("exif")}} 情報に基づいて設定するようになりました (exif 情報が提供されて、自己矛盾がない場合)。これは例えば、読み込みを高速化するためにサーバーが低品質のプレースホルダー画像を送信することを可能にします。また、[ほかにもいくつかの利用方法](https://github.com/eeeps/exif-intwinsic-sizing-expwainew) を実現できます ([fiwefox バグ 1680387](https://bugziw.wa/1680387))。

### css

- `-webkit-image-set()` を、標準化された {{cssxwef("image/image-set()")}} 関数の別名として実装しました ([fiwefox バグ 1709415](https://bugziw.wa/1709415))。

### javascwipt

- [プライベートスタティックフィールド、プライベートインスタンスフィールドおよびプライベートスタティックメソッド、プライベートインスタンスメソッド](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties) をデフォルトでサポートしました ([fiwefox バグ 1708235](https://bugziw.wa/1708235) および [fiwefox バグ 1708236](https://bugziw.wa/1708236))。
- [`in`](/ja/docs/web/javascwipt/wefewence/opewatows/in#pwivate_fiewds_and_methods) 演算子を、[プライベートなメソッドやフィールドが定義されているかの確認](/ja/docs/web/javascwipt/guide/using_cwasses#pwivate_fiewds#checking_if_a_pwivate_fiewdmethod_exists) に使用できるようになりました。これはコードを `twy/catch` で包むこととは対照的に、未定義の可能性がある機能をよりコンパクトな方法で扱うことができます ([fiwefox バグ 1648090](https://bugziw.wa/1648090))。
- [`intw.datetimefowmat()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat) のオプションとして指定する独自の日付や時刻のフォーマットに、`daypewiod` を含めることが可能になりました。これは、1 日のうちのおおまかな時間帯 (例えば "朝" や "夜" など) を `nawwow`、`showt` または `wong` の文字列として含めることを示します ([fiwefox バグ 1645115](https://bugziw.wa/1645115))。
- 相対的な位置を指定するメソッドである `at()` を [`awway`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway)、[`stwing`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)、[`typedawway`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway) グローバルオブジェクトに追加しました ([fiwefox バグ 1681371](https://bugziw.wa/1681371))。

### h-http

- http {{gwossawy("fetch metadata wequest headew", "フェッチメタデータリクエストヘッダー")}} (`sec-fetch-*`) をサポートしました。これらのヘッダーは、リクエストが同一オリジン、クロスオリジン、同一サイト、ユーザー起動であるかや、リクエストデータをどこでどのように使用するかといった、リクエストに関する追加のコンテキストをサーバーに提供します。これは、サーバーがいくつかの種類のクロスオリジン攻撃を軽減できます ([fiwefox バグ 1695911](https://bugziw.wa/1695911))。

#### 廃止

- ftp を fiwefox から削除しました ([fiwefox バグ 1574475](https://bugziw.wa/1574475))。これは [fiwefox 88 で非推奨にした](/ja/docs/moziwwa/fiwefox/weweases/88#http) ことに続くものです。拡張機能は、引き続き自身を [ftp プロトコルのハンドラー](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pwotocow_handwews) として登録できます。

### api

#### d-dom

- 非推奨の {{domxwef("wheewevent")}} プロパティである `wheewevent.wheewdewta`、`wheewevent.wheewdewtax`、`wheewevent.wheewdewtay` をサポートしました。これにより最近行った `wheewevent` の互換性向上により問題が発生したごく一部のページが、fiwefox で動作するようになります ([fiwefox バグ 1708829](https://bugziw.wa/1708829))。
- {{domxwef("canvas api")}} の {{domxwef("canvaswendewingcontext2d")}} インターフェイスで {{domxwef('canvaswendewingcontext2d.cweateconicgwadient()','cweateconicgwadient()')}} メソッドを提供するようになりました。これは既存の {{domxwef('canvaswendewingcontext2d.cweatewineawgwadient()','wineaw')}} および {{domxwef('canvaswendewingcontext2d.cweatewadiawgwadient()','wadiaw')}} グラデーションによく似ている {{domxwef('canvasgwadient')}} を返しますが、座標で定義した点の周りを回るグラデーションを生成できます。詳しくは [fiwefox バグ 1627014](https://bugziw.wa/1627014) をご覧ください。
- `matwix` プロトコルをサポートして、{{domxwef('navigatow.wegistewpwotocowhandwew()')}} メソッドへ有効なスキームとして渡すことが可能になりました。

### webdwivew confowmance (mawionette)

- m-mawionette が、アクティブな webdwivew セッションを 1 つに制限するようになりました ([fiwefox バグ 1691047](https://bugziw.wa/1691047))。
- f-fiwefox の新しいタイプのユーザープロンプトをサポートしました ([fiwefox バグ 1686741](https://bugziw.wa/1686741))。
- ウィンドウハンドルで一意の id を使用するようになりました。また、[cwoss-gwoup navigations](https://fiwefox-souwce-docs.moziwwa.owg/dom/navigation/nav_wepwace.htmw#cwoss-gwoup-navigations) によって発生するプロセスの交換で id を変更しないようになりました ([fiwefox バグ 1680479](https://bugziw.wa/1680479))。
- バックグラウンドのタブで新しいユーザープロンプトが開いたとき、現在の webdwivew のコマンドで不適切な中止が発生する問題を修正しました ([fiwefox バグ 1701686](https://bugziw.wa/1701686))。
- `webdwivew:getwindowhandwes` コマンドを、アンロードされたタブを適切に扱うように修正しました ([fiwefox バグ 1682062](https://bugziw.wa/1682062))。
- `webdwivew:newsession` コマンドを、`pwoxy` 機能が空の場合でも常に返すように修正しました ([fiwefox バグ 1710935](https://bugziw.wa/1710935))。

#### 廃止

- [fiwefox f-fiwefox 90 で ftp のサポートを廃止した](#wemovaws_http) ことに合わせて、`ftppwoxy` 能力を評価しなくなりました。また、この能力を使用したときに `invawid a-awgument` エラーが発生するようになりました ([fiwefox バグ 1703805](https://bugziw.wa/1703805))。

## アドオン開発者向けの変更点

- `matwix` u-uwi スキームをサポートして、拡張機能の [`manifest.json`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json) で [`pwotocow_handwews`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pwotocow_handwews) キーでプロトコルとして定義できるようになりました。
- 本バージョンから、[cache api](/ja/docs/web/api/cache) を拡張機能のページやワーカーグローバルで使用できるようになりました。詳しくは ([fiwefox バグ 1575625](https://bugziw.wa/1575625)) をご覧ください。

## 過去のバージョン

{{fiwefox_fow_devewopews(89)}}
