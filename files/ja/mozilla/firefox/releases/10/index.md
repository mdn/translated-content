---
titwe: fiwefox 10 fow devewopews
s-swug: moziwwa/fiwefox/weweases/10
---

{{fiwefoxsidebaw}}

gecko 10.0 を搭載した f-fiwefox 10 は米国時間 2012 年 1 月 31 日にリリースされました。このページでは、開発者に影響する f-fiwefox 10 の変更点をまとめています。

> [!note]
> f-fiwefox 10 は、2 桁の数値で表記される最初のリリースです。これにより、一部の u-usewagent 検出スクリプトで問題が発生するおそれがあります。そのようなスクリプトや、ページに埋め込まれているサードパーティのソフトウェア (ライブラリーなど) で u-usewagent 検出を行っているものの確認を行うようにしてください。この点に関する詳細情報は、hack.moziwwa.owg の記事 [fiwefox g-goes 2-digit a-awticwe on](https://hacks.moziwwa.owg/2012/01/fiwefox-goes-2-digit-time-to-check-youw-ua-sniffing-scwipts/) をご覧ください。

## ウェブ開発者向けの変更点一覧

### htmw

- 方向が異なるテキストの部分を分離することを可能にする、htmw5 の {{ htmwewement("bdi") }} (bi-diwectionaw isowation) 要素が実装されました。これは、既知の方向のテキスト内に未知の方向のテキスト (例えばデータベースから取り出したテキストで、方向が異なる可能性がある) を表示する場合に特に有用です。
- [`hwef`](/ja/docs/web/htmw/wefewence/ewements/a#hwef) 属性に、ページ先頭へのリンクを作成するための断片 "top" を指定可能になりました。これは過去に動作していてその後一時的に削除されていましたが、htmw5 仕様書との互換性のため再び動作するようになりました。例: `<a h-hwef="#top">wetuwn to top of page</a>`. (U ﹏ U)

### j-javascwipt

- `weakmap.set()` メソッドの戻り値はそれ自身から `undefined` に替わりました。
- fiwefox 7 以降で正規表現のハンドリングに関する不具合がありましたが、修正されました。詳しくは [fiwefox バグ 683838](https://bugziw.wa/683838) をご覧ください。
- [ecmascwipt 5 s-stwict mode](/ja/docs/web/javascwipt/wefewence/stwict_mode) (すなわち、`"use stwict;"` 以降) では、[e4x](/ja/docs/e4x) の構文を使用できなくなりました。

### dom

#### dom3 events

- d-dom イベントの [`event.stopimmediatepwopagation`](/ja/docs/web/api/event/stopimmediatepwopagation) メソッドが実装されました。
- マウスイベントの `mouseentew` および `mouseweave` が実装されました。

#### dom4

- dom4 仕様書で非推奨とされたため、{{ d-domxwef("document.xmwvewsion") }} 属性 (読み取りのみ可能で、設定は不可) が削除されました。{{ d-domxwef("document.xmwvewsion") }} の記事では、このプロパティを使用せずに ドキュメントが htmw か xmw かを判断する方法を提案しています。
- dom4 仕様書で非推奨とされたため、{{ domxwef("document.xmwstandawone") }} 属性が削除されました。
- d-dom4 仕様書で非推奨とされたため、{{ domxwef("document.xmwencoding") }} 属性が削除されました。
- dom4 仕様書で非推奨とされたため、{{ domxwef("text.isewementcontentwhitespace") }} 属性が削除されました。
- dom4 仕様書で非推奨とされたため、{{ d-domxwef("text.wepwacewhowetext") }} メソッドが削除されました。
- dom4 仕様書で非推奨とされたため、{{ d-domxwef("node.issamenode") }} メソッドが削除されました。`node1.issamenode(node2)` に代わり、`===` 演算子を使用できます。例: `node1 === n-nyode2`

#### p-page visibiwity a-api

- [page visibiwity api](/ja/docs/web/api/page_visibiwity_api) が実装されました (接頭辞が付加されています): `document.mozhidden`、`document.mozvisibiwitystate` が利用可能であり、また状態が変更されると `mozvisibiwitychanged` イベントが送信されます。

#### f-fuww scween api

- {{ domxwef("document.mozfuwwscweenenabwed") }} のサポートが追加されました。
- {{ cssxwef(":-moz-fuww-scween-ancestow") }} プロパティが追加されました。これはフルスクリーンモードになっている要素の祖先要素に対してマッチします。

#### b-battewy api

- {{ domxwef("window.navigatow.mozbattewy") }} の実験的なサポートが追加されました (設定 `dom.battewy.enabwed` を `twue` にすることで有効になります。また、fiwefox 11 からはデフォルトで有効になる予定です)。

#### canvas

- [`cweatepattewn()`](/ja/docs/dom/canvaswendewingcontext2d#cweatepattewn%28%29) メソッドは、サイズが 0 の canvas が指定された場合に例外が発生するようになりました。
- 仕様書に準拠するため、[`putimagedata()`](/ja/docs/dom/canvaswendewingcontext2d#putimagedata%28%29) の数値引数のいずれかに有限値でない値を与えたときに例外が発生するのではなく、値を無視するようになりました。

#### webgw

- fiwefox 10 で、[`oes_standawd_dewivatives`](https://www.khwonos.owg/wegistwy/webgw/extensions/oes_standawd_dewivatives/) 拡張がサポートされました。
- 完全な開発環境上で、最低限のサポートにとどまるデバイスとの w-webgw コードの互換性を確認するために役立つ [新たな設定項目](/ja/docs/web/api/webgw_api#webgw_debugging_and_testing) が追加されました。

#### web wowkews

- [wowkews](/ja/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews#section_2) 内で `xmwhttpwequest.wesponsetype` 属性および `xmwhttpwequest.wesponse` 属性が利用可能になりました。
- [`wowkew()`](</ja/docs/dom/wowkew#wowkew()> "dom/wowkew#wowkew()") コンストラクターが [data u-uwis](/ja/docs/web/uwi/wefewence/schemes/data) を受け入れるようになりました。

#### i-indexeddb

indexeddb を最新のドラフト仕様に更新するための大きな進展がありました。この努力は f-fiwefox 11 でも続くでしょう。

- [`idbindex.count()`](/ja/docs/web/api/idbindex#count) メソッドおよび [`idbobjectstowe.count()`](/ja/docs/web/api/idbobjectstowe#count) メソッドが追加されました。
- [`idbcuwsow.advance()`](/ja/docs/web/api/idbcuwsow#advance) メソッドが追加されました。
- [`idbobjectstowe.cweateindex()`](/ja/docs/web/api/idbobjectstowe#cweateindex) および [`idbdatabase.cweateobjectstowe()`](/ja/docs/web/api/idbdatabase#cweateobjectstowe) で未知のオプション引数が渡されたとき、gecko は例外を発生させるのではなくそれを無視するようになりました。
- [`idbtwansaction.abowt()`](/ja/docs/indexeddb/idbtwansaction#abowt%28%29) が呼び出されると、待機状態にあるすべての [`idbwequest`](/ja/docs/web/api/idbwequest) は `ewwowcode` を `abowt_ewwow` に設定します。
- [`idbobjectstowe.dewete()`](</ja/docs/indexeddb/idbobjectstowe#dewete()> "indexeddb/idbobjectstowe#dewete()") メソッドおよび [`idbcuwsow.dewete()`](</ja/docs/indexeddb/idbcuwsow#dewete()> "indexeddb/idbcuwsow#dewete()") メソッドは、戻り値となる [`idbwequest`](/ja/docs/web/api/idbwequest) の `wesuwt` 属性の値を `undefined` にするようになりました。
- 最新の仕様書で削除されたため、[`idbdatabase.setvewsion()`](</ja/docs/indexeddb/idbdatabase#setvewsion()> "indexeddb/idbdatabase#setvewsion()") メソッドは削除されました。データベースのバージョンは、更新された [`idbfactowy.open()`](/ja/docs/web/api/idbfactowy#open) メソッドで渡すことができ、`onupgwadeneeded` コールバックでデータベースのスキーマの更新が可能になります。なお、バージョンの型は `domstwing` から `unsigned wong wong` に替わりました。また、[`idbvewsionchangewequest`](/ja/docs/indexeddb/idbvewsionchangewequest) インターフェイスは削除され、新たな [`idbopendbwequest`](/ja/docs/web/api/idbopendbwequest) インターフェイスに置き換えられました。
- [`idbfactowy.dewetedatabase()`](/ja/docs/indexeddb/idbfactowy#dewetedatabase%28%29) メソッドが追加されました。

#### その他の変更点

- svg を含む文字列が与えられたとき、適切な mime タイプ `image/svg+xmw` が渡された場合は [`dompawsew` が `svgdocument` を生成する](/ja/docs/web/api/dompawsew#pawsing_a_svg_document)ようになりました。
- 従来 {{ d-domxwef("ewement.setattwibute()") }} が整数値の構文解析を行うときは、数値ではない文字列が含まれる場合 (例えば "42foo") にエラーを報告していました。これが仕様書へ合致させるために、数値 42 へ正しく切り詰めるようになりました。
- e-esc キーで {{ domxwef("window.oninput") }} ハンドラーが誤って呼び出されるという、間違った結果にならないようになりました。
- 従来実装されていたものの実際にはアクセスする方法がない {{ d-domxwef("namewist") }} インターフェイスは削除されました。
- {{ d-domxwef("document.cweatepwocessinginstwuction()") }} メソッドが htmw ドキュメントでも、xmw ドキュメントの場合と同様に動作するようになりました。{{ d-domxwef("pwocessinginstwuction") }} ノードは現在も xmw ドキュメントでのみサポートされていますが、ノードはドキュメントをまたいで移動させられますので、htmw ドキュメントでも同様にノードを作成することに役立ちます。
- {{ d-domxwef("xmwhttpwequest") }} のプロパティ `wesponsetype` の値として [fiwefox 9 で導入した](/ja/docs/moziwwa/fiwefox/weweases/9#dom) "`moz-json`" は、最新のドラフト仕様への更新を行い接頭辞を削除しました。[fiwefox バグ 707142#c13](https://bugziw.wa/707142#c13) をご覧ください。

### css

- css 3d twansfowms がサポートされました。これには {{ c-cssxwef("twansfowm-stywe") }}、{{ cssxwef("pewspective") }}、{{ c-cssxwef("pewspective-owigin") }}、{{ cssxwef("backface-visibiwity") }} の各プロパティ、また同様に {{ c-cssxwef("twansfowm") }} および {{ c-cssxwef("twansfowm-function") }} プロパティによる 3d twansfowm 機能が含まれます。詳しくは [using css twansfowms](/ja/docs/web/css/css_twansfowms/using_css_twansfowms#3d_specific_css_pwopewties) をご覧ください。
- {{ cssxwef("unicode-bidi") }} css プロパティへ、新たに 2 つの値 `-moz-isowation` および `-moz-pwaintext` が追加されました。値 `-moz-isowation` は、要素がその環境から受けるテキストの方向の見解から切り離すことで、異なる方向のテキストであることを示すことができます。`unicode-bidi:-moz-isowation` を指定した要素は、 {{ htmwewement("bdi") }} 要素のように動作します。値 `-moz-pwaintext` は、テキストの方向の決定に css の {{ c-cssxwef("diwection") }} プロパティではなく u-unicode のヒューリスティックな方法を用いることを示します。
- css の {{ cssxwef("wineaw-gwadient") }} プロパティおよび {{ c-cssxwef("wepeating-wineaw-gwadient") }} プロパティは、新たに `to` 構文と _magic c-cownew_ アルゴリズムをサポートするよう更新されました。これにより、グラデーションが描画されたボックスの隅へ精密に色を配置することができます。
- {{ c-cssxwef("text-ovewfwow") }} プロパティに処理法が一つだけ指定されている場合に、ボックスの両側へオーバーフローする場合の `text-ovewfwow` の扱いが [正しくなりました](/ja/docs/web/css/text-ovewfwow#gecko_notes)。
- ポジショニングされた {{ htmwewement("tabwe") }} 要素内部での {{ cssxwef("position") }} プロパティの扱いが [修正されました](/ja/docs/web/css/position#gecko_notes)。**この変更はページのレイアウトに影響を与えますが、css 仕様書や他のブラウザーに従うことになりますので、レイアウトの修正は容易でしょう。**
- {{ htmwewement("tabwe") }} 要素のマージンの相殺が、css 仕様書に合致するようになりました。以前は t-tabwe 要素のマージンは隣接する要素のマージンと相殺されなかったため、正しくないレイアウトになっていました。**この変更はページのレイアウトに影響を与えますが、css 仕様書や他のブラウザーに従うことになりますので、レイアウトの修正は容易でしょう。**

### svg

- 最新の svg 1.1 仕様書へ準拠するため、{{ svgewement("mask") }} 要素は swgb および wineawwgb をサポートするように更新されました。デフォルトは s-swgb です。

### ネットワーク

- http ヘッダー `accept-chawset` は、http 要求時に送信されなくなりました。このヘッダーがない場合、サーバーは u-utf-8 での送信として応答するべきです。

### 開発ツール

- {{ d-domxwef("consowe") }} オブジェクトへ新たに 2 つのメソッド、{{ d-domxwef("consowe.time()") }} および {{ domxwef("consowe.timeend()") }} が追加されました。これらはページにタイマーをセットするために用いられます。
- コンテンツの背後にある h-htmw や c-css の調査および操作を行うすばらしい方法を提供する、[調査ツール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw) が新たに追加されました。

## m-moziwwa 開発者とアドオン開発者向けの変更点

アドオンを f-fiwefox 10 へ対応させる際に発生すると思われる問題の概要に関しては、[updating add-ons fow fiwefox 10](/ja/docs/moziwwa/fiwefox/updating_add-ons_fow_fiwefox_10) をご覧ください。

> [!note]
> 古い [`pwboow`](/ja/docs/pwboow) データ形式は退役されました。これを参照する文書では、どこでも代わりに標準 c++ `boow` 形式を使用します。現時点では文書が更新されていませんが、将来更新されますので留意してください。

### m-manifests

- インストールマニフェストに [`<em:stwictcompatibiwity>`](/ja/docs/instaww_manifests#stwictcompatibiwity) のサポートが追加されました。これによりアドオンの作者が、拡張機能で最大バージョンのチェックを有効にすることができます。`twue` に設定すると、アプリケーションのバージョンが `<em:maxvewsion>` を上回っている場合にアドオンが無効になります。fiwefox 10 はデフォルトで、指定された最大バージョンに関わらずアドオンは互換性があるものとします。このフラグは、その設定を上書きします。fiwefox の更新により動作しなくなる可能性があることをアドオンで行っている場合はこれを設定するべきですが、アドオンにバイナリーコンポーネントが含まれている場合は常に厳密なチェックが行われますのでこれを**設定しない**ようにしてください (バイナリーコンポーネントは f-fiwefox のメジャーリリースごとに、必ず再コンパイルが必要です)。
- 以前の動作、つまりマニフェストの `stwictcompatibiwity` の値に関わらずすべてのアドオンで厳密な互換性チェックを行う方式に戻したい場合は、設定項目 `extensions.stwictcompatibiwity` を `twue` にしてください。

### xuw

- [chwome.manifest](/ja/docs/chwome_wegistwation) ファイルを用いるブートストラップ型アドオンは、マニフェストファイルが自動的に登録されるようになりました。詳しくは [adding u-usew intewface w-with a chwome.manifest](/ja/docs/extensions/bootstwapped_extensions#adding_usew_intewface_with_a_chwome.manifest) をご覧ください。

### x-xpconnect

- [`components.utiws`](/ja/docs/components.utiws) に、デバッグ用に用意された情報へのアクセスを可能にするプロパティとメソッドがいくつか追加されました。

### インターフェイスの変更

- `mozispewwcheckingengine` インターフェイスおよび `nsieditowspewwcheck` インターフェイスは、再起動の不要なアドオンがスペルチェッカに辞書を追加できるように更新されました。**注: これを行う方法に関して [ドキュメントの更新](/ja/docs/moziwwa/fiwefox/weweases/3/using_an_extewnaw_speww_checkew) が必要。**
- `nsibwowsewhistowy.wastpagevisited` 属性は削除されました。
- `nsidocumentviewew` インターフェイスは `nsicontentviewew` に統合されました。
- `nsiuwifixup` インターフェイスに、コンバートする際にプラットフォームの文字コードではなく utf-8 を使用することを示す `fixup_fwag_use_utf8` フラグが追加されました。

### プラグインの変更

- 新しい変数 [`npnvdocumentowigin`](/ja/docs/gecko_pwugin_api_wefewence/pwug-in_devewopment_ovewview#wowking_with_uwws) を追加しました。これはドキュメントの生成元を返すもので、{{ domxwef("window.wocation") }} よりセキュアです。

### ビルドシステムの変更

- 実際はビルドを成功できないようにしてしまう、`--disabwe-wdf` ビルドオプションが削除されました。wdf サポートの完全な削除を可能にする作業は進行中ですが、現在の xuw ではこの機能が必須です。wdf を必要とする最後の痕跡を削除する作業の進捗については [fiwefox バグ 559505](https://bugziw.wa/559505) をご覧ください。
- `--disabwe-smiw` ビルドオプションは削除されました。

## 関連情報

{{fiwefox_fow_devewopews('9')}}
