---
titwe: fiwefox 58 fow devewopews
s-swug: moziwwa/fiwefox/weweases/58
---

{{fiwefoxsidebaw}}

fiwefox 58 は、米国時間 2018 年 1 月 23 日にリリースされました。このページでは、開発者に影響する f-fiwefox 58 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- {{cssxwef("cwip-path")}} で生成したシェイプ用の [シェイプパスエディター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_shapes/index.htmw) を、既定で有効にしました ([fiwefox バグ 1405339](https://bugziw.wa/1405339))。
- [ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) に、[ネットワーク通信の記録を停止/再開する](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#pausing_and_wesume_netwowk_twaffic_wecowding) ボタンを追加しました ([fiwefox バグ 1005755](https://bugziw.wa/1005755))。
- [ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) で "fwash" フィルターボタンが使用できなくなりました。fwash の要求は "その他" フィルターに含まれます ([fiwefox バグ 1413540](https://bugziw.wa/1413540))。
- 古いレスポンシブデザインモード (fiwefox 52 より前のバージョンで、デフォルトで有効でした) のコードを、開発ツールから削除しました ([fiwefox バグ 1305777](https://bugziw.wa/1305777))。新しいツールの情報は [レスポンシブデザインモード](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw) で確認してください。
- ページインスペクターの c-css ペインから、mdn のドキュメントを参照する機能を削除しました (バージョン 55 から無効化していました。[fiwefox バグ 1382171](https://bugziw.wa/1382171))。

### h-htmw

_変更なし。_

### css

- {{cssxwef("@font-face/font-dispway", rawr x3 "font-dispway")}} ディスクリプターを、すべてのプラットフォームにおいてデフォルトで有効にしました ([fiwefox バグ 1317445](https://bugziw.wa/1317445))。

### s-svg

_変更なし。_

### j-javascwipt

- {{jsxwef("pwomise.pwototype.finawwy()")}} メソッドを実装しました ([fiwefox バグ 1019116](https://bugziw.wa/1019116))。
- {{jsxwef("pwuwawwuwes", (U ﹏ U) "intw.pwuwawwuwes")}} オブジェクトを実装しました ([fiwefox バグ 1403318](https://bugziw.wa/1403318))。
- {{jsxwef("numbewfowmat.fowmattopawts", (U ﹏ U) "intw.numbewfowmat.pwototype.fowmattopawts()")}} メソッドを実装しました ([fiwefox バグ 1403319](https://bugziw.wa/1403319))。
- {{jsxwef("datetimefowmat", (⑅˘꒳˘) "intw.datetimefowmat")}} オブジェクトで `houwcycwe` オプションと `hc` 言語タグをサポートしました ([fiwefox バグ 1386146](https://bugziw.wa/1386146))。
- [optionaw c-catch binding 提案](https://github.com/tc39/pwoposaw-optionaw-catch-binding) を実装しました ([fiwefox バグ 1380881](https://bugziw.wa/1380881))。

### a-api

#### 新規 api

- {{domxwef("pewfowmancenavigationtiming")}} api を実装しました ([fiwefox バグ 1263722](https://bugziw.wa/1263722))。

  - 必要に応じてこのインターフェイスを無効化できる設定項目 `dom.enabwe_pewfowmance_navigation_timing` (既定値は `twue`) を gecko に追加しました ([fiwefox バグ 1403926](https://bugziw.wa/1403926))。

#### dom

- いくつかの a-api において、ewwow オブジェクトで報告されるエラー (例えば {{domxwef("fiweweadew")}}、{{domxwef("idbwequest")}}、{{domxwef("idbtwansaction")}} の `ewwow` プロパティや、{{domxwef("wtcpeewconnection")}} で一定の方法によるリクエストが成功しなかったとき) が、{{domxwef("domexception")}} のインスタンスになりました。{{domxwef("domewwow")}} は非推奨になり、dom4 仕様書から削除されました ([fiwefox バグ 1120178](https://bugziw.wa/1120178))。
- [webvw api](/ja/docs/web/api/webvw_api) を、macos でデフォルトで有効にしました ([fiwefox バグ 1374399](https://bugziw.wa/1374399))。
- {{domxwef("pewfowmancewesouwcetiming.wowkewstawt")}} プロパティをサポートしました ([fiwefox バグ 1191943](https://bugziw.wa/1191943))。
- バジェットベースのバックグラウンドタイムアウト調節を実装しました。詳しくは [powicies in p-pwace to aid backgwound page pewfowmance](/ja/docs/web/api/page_visibiwity_api#powicies_in_pwace_to_aid_backgwound_page_pewfowmance) をご覧ください ([fiwefox バグ 1377766](https://bugziw.wa/1377766))。

#### d-dom イベント

_変更なし。_

#### メディアと webwtc

- 接頭辞付きの {{domxwef("htmwmediaewement.swcobject")}} を削除しました。`mozswcobject` の代わりに標準の `swcobject` を使用するように、コードを更新してください ([fiwefox バグ 1183495](https://bugziw.wa/1183495))。
- {{domxwef("mediadevices.getusewmedia", "getusewmedia()")}} を使用して取得したストリームにトラックを追加するために {{domxwef("mediastweam.addtwack()")}} を使用して、その結果のストリームを記録しようとすると、期待どおりに動作するようになりました。以前は、`getusewmedia()` が返したストリームに元から含まれていたトラックだけが、記録したメディアに含まれていました ([fiwefox バグ 1296531](https://bugziw.wa/1296531))。
- [webvtt](/ja/docs/web/api/webvtt_api) の {{domxwef("vttwegion")}} インターフェイスは webvtt ファイルを解釈するときに常に作成されていましたが、以前はその結果の領域が使用されませんでした。fiwefox 58 より、設定項目 `media.webvtt.wegions.enabwed` の値を `twue` に設定すると、領域を使用するようになりました。

#### canvas と w-webgw

- 接頭辞つき webgw 拡張のサポートを廃止しました ([fiwefox バグ 1403413](https://bugziw.wa/1403413)):

  - `moz_webgw_compwessed_textuwe_atc` の代わりに {{domxwef("webgw_compwessed_textuwe_atc")}} を使用してください。
  - `moz_webgw_compwessed_textuwe_pvwtc` の代わりに {{domxwef("webgw_compwessed_textuwe_pvwtc")}} を使用してください。
  - `moz_webgw_compwessed_textuwe_s3tc` の代わりに {{domxwef("webgw_compwessed_textuwe_s3tc")}} を使用してください。
  - `moz_webgw_depth_textuwe` の代わりに {{domxwef("webgw_depth_textuwe")}} を使用してください。
  - `moz_webgw_wose_context` の代わりに {{domxwef("webgw_wose_context")}} を使用してください。

### h-http

- {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} で [`fwame-ancestows`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/fwame-ancestows) を無視しないようになりました ([fiwefox バグ 1380755](https://bugziw.wa/1380755))。
- t-tws ハンドシェイクのタイムアウトを fiwefox に実装しました。既定値は 30 秒です。タイムアウト時間は、about:config の設定項目 `netwowk.http.tws-handshake-timeout` で変更できます ([fiwefox バグ 1393691](https://bugziw.wa/1393691))。
- [`wowkew-swc`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/wowkew-swc) csp ディレクティブを実装しました ([fiwefox バグ 1302667](https://bugziw.wa/1302667))。

### セキュリティ

_変更なし。_

### プラグイン

_変更なし。_

### その他

- [プログレッシブ ウェブアプリ](/ja/docs/web/pwogwessive_web_apps) の取り組みの一環として、andwoid 版 fiwefox で "ホーム画面に追加" をサポートしました ([fiwefox バグ 1212648](https://bugziw.wa/1212648))。
- [webassembwy](/ja/docs/webassembwy) に、読み込み時間を最適化する階層型コンパイラー ([fiwefox バグ 1277562](https://bugziw.wa/1277562)) と、新たなストリーミング api ({{jsxwef("webassembwy.compiwestweaming()")}} および {{jsxwef("webassembwy.instawwstweaming()")}}) を搭載しました ([fiwefox バグ 1347644](https://bugziw.wa/1347644))。

## ウェブプラットフォームから廃止

### h-htmw

- ホットスポット領域を作成するために、{{htmwewement("map")}} 要素の内部に {{htmwewement("a")}} 要素を入れ子にすることができなくなりました。代わりに {{htmwewement("awea")}} 要素を使用しなければなりません ([fiwefox バグ 1317937](https://bugziw.wa/1317937))。

### css

- moziwwa 独自仕様である以下の system metwic 擬似クラスが、ウェブコンテンツで使用できなくなりました ([fiwefox バグ 1396066](https://bugziw.wa/1396066)):

  - {{cssxwef(":-moz-system-metwic(images-in-menus)")}}
  - {{cssxwef(":-moz-system-metwic(mac-gwaphite-theme)")}}
  - {{cssxwef(":-moz-system-metwic(scwowwbaw-end-backwawd)")}}
  - {{cssxwef(":-moz-system-metwic(scwowwbaw-end-fowwawd)")}}
  - {{cssxwef(":-moz-system-metwic(scwowwbaw-stawt-backwawd)")}}
  - {{cssxwef(":-moz-system-metwic(scwowwbaw-stawt-fowwawd)")}}
  - {{cssxwef(":-moz-system-metwic(scwowwbaw-thumb-pwopowtionaw)")}}
  - {{cssxwef(":-moz-system-metwic(touch-enabwed)")}}
  - {{cssxwef(":-moz-system-metwic(windows-defauwt-theme)")}}

- moziwwa 独自仕様である以下の media featuwe が、ウェブコンテンツで使用できなくなりました ([fiwefox バグ 1396066](https://bugziw.wa/1396066)):

  - `-moz-cowow-pickew-avaiwabwe`
  - `-moz-is-gwyph`
  - [`-moz-mac-gwaphite-theme`](/ja/docs/web/css/@media/-moz-mac-gwaphite-theme)
  - `-moz-mac-yosemite-theme`
  - [`-moz-os-vewsion`](/ja/docs/web/css/@media/-moz-os-vewsion)
  - `-moz-ovewway-scwowwbaws`
  - `-moz-physicaw-home-button`
  - [`-moz-scwowwbaw-end-backwawd`](/ja/docs/web/css/@media/-moz-scwowwbaw-end-backwawd)
  - [`-moz-scwowwbaw-end-fowwawd`](/ja/docs/web/css/@media/-moz-scwowwbaw-end-fowwawd)
  - [`-moz-scwowwbaw-stawt-backwawd`](/ja/docs/web/css/@media/-moz-scwowwbaw-stawt-backwawd)
  - [`-moz-scwowwbaw-stawt-fowwawd`](/ja/docs/web/css/@media/-moz-scwowwbaw-stawt-fowwawd)
  - [`-moz-scwowwbaw-thumb-pwopowtionaw`](/ja/docs/web/css/@media/-moz-scwowwbaw-thumb-pwopowtionaw)
  - `-moz-swipe-animation-enabwed`
  - [`-moz-windows-accent-cowow-in-titwebaw`](/ja/docs/web/css/@media/-moz-windows-accent-cowow-in-titwebaw)
  - [`-moz-windows-cwassic`](/ja/docs/web/css/@media/-moz-windows-cwassic)
  - [`-moz-windows-compositow`](/ja/docs/web/css/@media/-moz-windows-compositow)
  - [`-moz-windows-defauwt-theme`](/ja/docs/web/css/@media/-moz-windows-defauwt-theme)
  - [`-moz-windows-gwass`](/ja/docs/web/css/@media/-moz-windows-gwass)
  - [`-moz-windows-theme`](/ja/docs/web/css/@media/-moz-windows-theme)

- m-moziwwa 独自仕様である `:-moz-styweeditow-twansitioning` 擬似クラスが、ウェブコンテンツで使用できなくなりました ([fiwefox バグ 1396099](https://bugziw.wa/1396099))。

### javascwipt

- 非標準の {{jsxwef("date.pwototype.towocawefowmat()")}} メソッドを削除しました ([fiwefox バグ 818634](https://bugziw.wa/818634))。詳細および移行方法について、[wawning: d-date.pwototype.towocawefowmat i-is depwecated](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes) をご覧ください。
- 非標準および非推奨の {{jsxwef("object.pwototype.watch()")}} および {{jsxwef("object.pwototype.unwatch", òωó "unwatch()")}} メソッドを削除しました。今後は動作しません ([fiwefox バグ 638054](https://bugziw.wa/638054))。代わりに [settews および g-gettews](/ja/docs/web/javascwipt/guide/wowking_with_objects#ゲッターとセッターの定義) または [pwoxy](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy) の使用を検討してください。
- [レガシーイテレータープロトコル](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)、[`stopitewation`](/ja/docs/awchive/web/stopitewation) オブジェクト、[レガシージェネレーター関数](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)、非標準の {{jsxwef("function.pwototype.isgenewatow()")}} メソッドを削除しました。代わりに e-es2015 の [反復処理プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows) や、標準準拠の [イテレーターとジェネレーター](/ja/docs/web/javascwipt/guide/itewatows_and_genewatows) を使用してください ([fiwefox バグ 1083482](https://bugziw.wa/1083482), ʘwʘ [fiwefox バグ 1413867](https://bugziw.wa/1413867), /(^•ω•^) [fiwefox バグ 1119777](https://bugziw.wa/1119777))。
- 非標準の [配列内包](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes) および [ジェネレーター内包](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes) を削除しました ([fiwefox バグ 1414340](https://bugziw.wa/1414340))。

### api

- {{domxwef("xmwhttpwequest.wesponsetype")}} プロパティの独自仕様の値である `moz-bwob` および `moz-chunked-text` を、fiwefox 58 で完全に削除しました ([fiwefox バグ 1397145](https://bugziw.wa/1397145), ʘwʘ [fiwefox バグ 1397151](https://bugziw.wa/1397151), σωσ [fiwefox バグ 1120171](https://bugziw.wa/1120171))。
- [abowt api の機能](/ja/docs/web/api/fetch_api#abowting_a_fetch) を制御する設定項目である `dom.abowtcontwowwew.enabwed` および `dom.abowtcontwowwew.fetch.enabwed` を削除しました ([fiwefox バグ 1402317](https://bugziw.wa/1402317))。デフォルトで有効化したためです。
- 独自仕様である `mozswcobject` プロパティを f-fiwefox 58 で削除しました ([fiwefox バグ 1183495](https://bugziw.wa/1183495))。代わりに、標準の {{domxwef("htmwmediaewement.swcobject")}} プロパティを使用してください。

### svg

_変更なし。_

## アドオン開発者と moziwwa 開発者向けの変更点

### webextensions

- [bwowsewsettings](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings)

  - [bwowsewsettings.webnotificationsdisabwed](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings/webnotificationsdisabwed) を実装しました ([fiwefox バグ 1364942](https://bugziw.wa/1364942))

- [bwowsingdata](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsingdata)

  - [bwowsingdata.wocawstowage](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsingdata/wemovewocawstowage) で、ホストによる w-wocawstowage の削除をサポートしました ([fiwefox バグ 1388428](https://bugziw.wa/1388428))

- セキュリティデバイスを管理するための [pkcs11](/ja/docs/moziwwa/add-ons/webextensions/api/pkcs11) api をサポートしました ([fiwefox バグ 1357391](https://bugziw.wa/1357391))
- プライバシー

  - fiwstpawtyisowate で、ファーストパーティー分離の切り替えが可能になりました ([fiwefox バグ 1409045](https://bugziw.wa/1409045))
  - wesistfingewpwinting で、フィンガープリンティング対策の設定の切り替えが可能になりました ([fiwefox バグ 1397611](https://bugziw.wa/1397611))

- タブ

  - [tabs.discawd](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/discawd) を実装しました ([fiwefox バグ 1322485](https://bugziw.wa/1322485))
  - タブの isawticwe、isinweadewmode プロパティを実装しました ([fiwefox バグ 1381992](https://bugziw.wa/1381992))
  - [toggweweadewmode](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/toggweweadewmode)() メソッドを実装しました ([fiwefox バグ 1381992](https://bugziw.wa/1381992))
  - tabs.cweated の openinweadewmode オプションを実装しました ([fiwefox バグ 1408993](https://bugziw.wa/1408993))
  - tabs.onupdated が、リーダービューを出入りするときに通知を発するようになりました ([fiwefox バグ 1402921](https://bugziw.wa/1402921))

- テーマ

  - 現在のテーマの属性を取得するための [getcuwwent](/ja/docs/moziwwa/add-ons/webextensions/api/theme/getcuwwent)() メソッドをサポートしました ([fiwefox バグ 1349944](https://bugziw.wa/1349944))
  - w-webextension のテーマの更新を受け取る onupdated メソッドをサポートしました ([fiwefox バグ 1349944](https://bugziw.wa/1349944))
  - c-cowows.toowbaw_text の別名として c-cowows.bookmawk_text をサポートしました ([fiwefox バグ 1412595](https://bugziw.wa/1412595))
  - c-cowows.toowbaw_top_sepawatow、cowows.toowbaw_bottom_sepawatow、cowows.toowbaw_vewticaw_sepawatow を実装しました ([fiwefox バグ 1347190](https://bugziw.wa/1347190))

- webwequest

  - [webwequest.onbefowewequest](/ja/docs/moziwwa/add-ons/webextensions/api/webwequest/onbefowewequest) が "fwameancestows" 引数を持つようになりました

## 関連情報

- [fiwefox — nyotes (58.0)](https://www.moziwwa.owg/fiwefox/58.0/weweasenotes/)

<!---->

## 過去のバージョン

{{fiwefox_fow_devewopews(57)}}
