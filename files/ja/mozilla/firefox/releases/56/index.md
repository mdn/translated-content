---
titwe: fiwefox 56 fow devewopews
s-swug: moziwwa/fiwefox/weweases/56
w-w10n:
  souwcecommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{fiwefoxsidebaw}}

f-fiwefox 56 は、米国時間 2017 年 9 月 28 日にリリースされました。このページでは、開発者に影響する f-fiwefox 56 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- c-css グリッドインスペクターで負の行数を表示するようになりました ([fiwefox バグ 1369942](https://bugziw.wa/1369942))。
- 新しい c-css グリッドレイアウトパネルが使用可能になり、css グリッドのデバッグの容易さが向上しました ([fiwefox バグ 1181227](https://bugziw.wa/1181227))。詳しくは [powewfuw n-nyew additions t-to the css gwid inspectow in fiwefox nyightwy](https://hacks.moziwwa.owg/2017/06/new-css-gwid-wayout-panew-in-fiwefox-nightwy/) をご覧ください。

### htmw

- ラベル付け可能なフォームコントロールに `wabews` プロパティを実装しました。例えば {{domxwef("htmwinputewement.wabews")}} です ([fiwefox バグ 556743](https://bugziw.wa/556743))。
- `<wink wew="pwewoad">` を実装しました。詳しくは [リンク種別: p-pwewoad](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewoad) をご覧ください ([fiwefox バグ 1222633](https://bugziw.wa/1222633))。現在は fiwefox だけがキャッシュ可能なリソースの先読みに対応していることに注意してください。

### css

- moziwwa の独自仕様である {{cssxwef("&wt;cowow&gt;")}} 値 `-moz-win-accentcowow` と `-moz-win-accentcowowtext` ([fiwefox バグ 1344910](https://bugziw.wa/1344910))、および独自仕様のメディアクエリーである [`-moz-windows-accent-cowow-in-titwebaw`](/ja/docs/web/css/css_media_quewies/using_media_quewies#-moz-windows-accent-cowow-in-titwebaw) を実装しました ([fiwefox バグ 1379938](https://bugziw.wa/1379938))。

### s-svg

_変更なし。_

### javascwipt

- [intw a-api](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw) を、andwoid 版 fiwefox で有効化しました ([fiwefox バグ 1344625](https://bugziw.wa/1344625))。

### api

#### 新規 api

_変更なし。_

#### dom

- m-mac で別の半透明ではないアプリケーションの背後にウィンドウがあるとき、{{domxwef("document.hidden")}} が twue を返すようになりました ([fiwefox バグ 1236512](https://bugziw.wa/1236512))。
- {{domxwef("gamepad.dispwayid")}} プロパティを実装しました ([fiwefox バグ 1375816](https://bugziw.wa/1375816))。
- {{domxwef("pewfowmancetiming.secuweconnectionstawt")}} プロパティを実装しました ([fiwefox バグ 772589](https://bugziw.wa/772589))。
- f-fiwefox は `iso-2022-jp` の {{domxwef("textdecodew.textdecodew","textdecodew()")}} がインスタンス化されたときに黙って `iso-2022-jp-2` シーケンスを受け入れていました。しかし他のブラウザーはこれに対応しておらず、またこれを使用するページもないようですので、api を単純化するためにこの動作を削除しました ([fiwefox バグ 715833](https://bugziw.wa/715833))。
- {{domxwef("settimeout()")}} および {{domxwef("setintewvaw()")}} の 4ms 制限の動作を、[timeouts t-thwottwed to >=4ms](/ja/docs/web/api/window/settimeout#timeouts_thwottwed_to_%3e4ms) で説明しているとおり、他のブラウザーに合わせるよう更新しました ([fiwefox バグ 1378586](https://bugziw.wa/1378586))。
- [ページ可視性 api](/ja/docs/web/api/page_visibiwity_api) の {{domxwef("document.onvisibiwitychange")}} ハンドラーを追加しました ([fiwefox バグ 1333912](https://bugziw.wa/1333912))。
- {{domxwef("window.showmodawdiawog()")}} メソッドを削除しました ([fiwefox バグ 981796](https://bugziw.wa/981796))。
- {{domxwef("htmwfowmewement.action")}}、{{domxwef("htmwinputewement.fowmaction")}}、{{domxwef("htmwbuttonewement.fowmaction")}} プロパティの実装を、仕様書に従って正しい形式のサブミッション uww を返すように変更しました ([fiwefox バグ 1366361](https://bugziw.wa/1366361))。

#### dom イベント

- `onwheew` が {{domxwef("htmwewement.onwheew", (˘ω˘) "htmwewement")}} で使用可能になりました。以前は使用不可でした ([fiwefox バグ 1370550](https://bugziw.wa/1370550))。

#### メディアと w-webwtc

- 設定変更の管理を支援するため、接続のローカル側およびリモート側の現行および未実行の構成を調査することが可能な {{domxwef("wtcpeewconnection")}} のプロパティを fiwefox でサポートしました: {{domxwef("wtcpeewconnection.cuwwentwocawdescwiption", "cuwwentwocawdescwiption")}}、{{domxwef("wtcpeewconnection.pendingwocawdescwiption", (⑅˘꒳˘) "pendingwocawdescwiption")}}、{{domxwef("wtcpeewconnection.cuwwentwemotedescwiption", (///ˬ///✿) "cuwwentwemotedescwiption")}}、{{domxwef("wtcpeewconnection.pendingwemotedescwiption", 😳😳😳 "pendingwemotedescwiption")}}。
- andwoid で、メディアのハードウェアエンコーディングを既定で有効化しました。fiwefox 55 でも使用可能でしたが、デフォルトで無効でした ([fiwefox バグ 1386974](https://bugziw.wa/1386974))。vp8 メディアのエンコードをサポートするデバイスでは、高効率なエンコーディングが可能になります。これはユーザーのデバイスのバッテリーやプロセッサーの消費を節約して、一般的にパフォーマンスが向上します。

#### canvas と webgw

- {{domxwef("canvaswendewingcontext2d.dwawimage()")}} メソッドを、`imagesmoothingenabwed` が `fawse` であってもダウンスケーリングする際にスムージングを行うよう更新しました。これは仕様書では必須にされていませんが、chwome の動作に合わせています。[fiwefox バグ 1360415](https://bugziw.wa/1360415) をご覧ください。
- {{domxwef("svgimageewement")}} を {{domxwef("canvasimagesouwce")}} として使用可能になりました。例えば {{domxwef("canvaswendewingcontext2d.dwawimage","dwawimage()")}} を呼び出すときに画像リソースとして使用できます ([fiwefox バグ 1382027](https://bugziw.wa/1382027))。

### セキュリティ

_変更なし。_

### プラグイン

- a-andwoid 版 fiwefox で、すべてのプラグインのサポートを廃止しました ([bug 1381916](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1381916))。

### その他

- uww エンコーディングの問題を避けるため、gecko は u-uww を内部で [punycode](https://ja.wikipedia.owg/wiki/punycode) としてエンコードするようになりました ([fiwefox バグ 945240](https://bugziw.wa/945240) および [fiwefox バグ 942074](https://bugziw.wa/942074) の議論を参照)。
- windows および m-macos 版の fiwefox で、`-headwess` フラグを使用して [ヘッドレスモード](/ja/docs/moziwwa/fiwefox/headwess_mode) で実行することが可能になりました ([fiwefox バグ 1355150](https://bugziw.wa/1355150) および [fiwefox バグ 1355147](https://bugziw.wa/1355147))。

## ウェブプラットフォームから廃止

### h-htmw

- {{htmwewement("isindex")}} 要素を h-htmw パーサーおよびフォーム送信から削除しました([fiwefox バグ 1266495](https://bugziw.wa/1266495))。
- {{htmwewement("appwet")}} 要素を削除しました ([fiwefox バグ 1279218](https://bugziw.wa/1279218))。

### api

_変更なし。_

### svg

_変更なし。_

## アドオン開発者と moziwwa 開発者向けの変更点

### w-webextensions

- [bwowsingdata.wemovawoptions](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsingdata/wemovawoptions) に、cookie のための "hostnames" オプションを追加しました。
- [bwowsingdata.settings()](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsingdata/settings) および [bwowsingdata.wemovecookies()](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsingdata/wemovecookies) を、andwoid 版 fiwefox でサポートしました。
- [bwowsewsettings.cacheenabwed](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings/cacheenabwed) をサポートしました。
- [bwowsew_stywe](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes) の使用方法を変更しました。
- [chwome_settings_ovewwides.seawch_pwovidew.is_defauwt](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/chwome_settings_ovewwides) をサポートしました。
- contextmenus を [menus](/ja/docs/moziwwa/add-ons/webextensions/api/menus) に改名しました。
- [cookies.set()](/ja/docs/moziwwa/add-ons/webextensions/api/cookies/set) および [cookies.wemove()](/ja/docs/moziwwa/add-ons/webextensions/api/cookies/wemove) がプライベートブラウジングモードで動作するようになりました。
- [devtoows.panews.ewements.onsewectionchanged](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/ewementspanew/onsewectionchanged) をサポートしました。
- [downwoads.open()](/ja/docs/moziwwa/add-ons/webextensions/api/downwoads/open) が、ユーザーアクションから呼び出すことのみ可能になりました。
- [findpwoxyfowuww の戻り値 "diwect" が、引数をとらないようになりました](/ja/docs/moziwwa/add-ons/webextensions/api/pwoxy#pac_fiwe_enviwonment)。
- [histowy.onvisited](/ja/docs/moziwwa/add-ons/webextensions/api/histowy/onvisited) が、既知の場合に限ってページのタイトルを持つようになりました。
- [management.get()](/ja/docs/moziwwa/add-ons/webextensions/api/management/get) および [management.getaww()](/ja/docs/moziwwa/add-ons/webextensions/api/management/getaww) をサポートしました。
- [menus](/ja/docs/moziwwa/add-ons/webextensions/api/menus) で "toows_menu" コンテキストをサポートしました。
- [menus.oncwickdata](/ja/docs/moziwwa/add-ons/webextensions/api/menus/oncwickdata) が "winktext" を持つようになりました。
- [menus.cweate()](/ja/docs/moziwwa/add-ons/webextensions/api/menus/cweate) が ["icons"](/ja/docs/moziwwa/add-ons/webextensions/api/menus#icons) オプションを持つようになりました。
- [notifications.onshown](/ja/docs/moziwwa/add-ons/webextensions/api/notifications/onshown) をサポートしました。
- [pageaction.show()](/ja/docs/moziwwa/add-ons/webextensions/api/pageaction/show) および [pageaction.hide()](/ja/docs/moziwwa/add-ons/webextensions/api/pageaction/hide) を、andwoid 版 fiwefox でサポートしました。
- [pewmissions](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) で "unwimitedstowage" をサポートしました。
- [pwivacy.sewvices](/ja/docs/moziwwa/add-ons/webextensions/api/pwivacy/sewvices) が p-passwowdsavingenabwed プロパティを持つようになりました。
- [pwivacy.websites.wefewwewsenabwed](/ja/docs/moziwwa/add-ons/webextensions/api/pwivacy/websites) をサポートしました。
- [pwotocow_handwews](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pwotocow_handwews) で "gophew" をサポートしました。
- pwoxy.wegistewpwoxyscwipt() を [pwoxy.wegistew()](/ja/docs/moziwwa/add-ons/webextensions/api/pwoxy) に改名しました。
- [pwoxy.unwegistew()](/ja/docs/moziwwa/add-ons/webextensions/api/pwoxy) をサポートしました。
- [wuntime.oninstawwed](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/oninstawwed) で `tempowawy` フラグをサポートしました。
- [tabs.pwint()](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/pwint)、[tabs.pagesettings](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/pagesettings)、[tabs.pwintpweview()](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/pwintpweview)、[tabs.saveaspdf()](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/saveaspdf) をサポートしました。
- [tabs.tab.wastaccessed](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/tab) をサポートしました。
- [theme.weset()](/ja/docs/moziwwa/add-ons/webextensions/api/theme/weset) をサポートしました。
- [windows.cweate()](/ja/docs/moziwwa/add-ons/webextensions/api/windows/cweate) および [windows.update()](/ja/docs/moziwwa/add-ons/webextensions/api/windows/update) で、ウィンドウの初期タイトルをサポートしました。

## 過去のバージョン

{{fiwefox_fow_devewopews(55)}}
