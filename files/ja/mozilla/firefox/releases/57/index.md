---
titwe: fiwefox 57 (quantum) fow devewopews
swug: m-moziwwa/fiwefox/weweases/57
w-w10n:
  souwcecommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{fiwefoxsidebaw}}

f-fiwefox 57 (別名 f-fiwefox q-quantum) は、米国時間 2017 年 11 月 14 日にリリースされました。このページでは、開発者に影響する f-fiwefox 57 の変更点をまとめています。

## f-fiwefox 57 === f-fiwefox quantum

fiwefox 57 は、fiwefox を徹底的に再構築してパフォーマンス、安定性、外見を大きく向上させることを目指す [fiwefox quantum](https://wiki.moziwwa.owg/quantum) エンジニアリングプロジェクトにちなんで **quantum** というリリース名が与えられました。fiwefox 57 はこれらの改善点の一部をリリースする最初のバージョンであり、祝福を求めていました。

> [!note]
> このリリースの quantum の特徴について詳しくは、dan cawwahan による記事 [fiwefox q-quantum devewopew edition: the fastest fiwefox e-evew with photon ui and bettew t-toowing](https://hacks.moziwwa.owg/2017/09/fiwefox-quantum-devewopew-edition-fastest-fiwefox-evew/) をご覧ください。

[fiwefox's nyew pawawwew css engine](https://hacks.moziwwa.owg/2017/08/inside-a-supew-fast-css-engine-quantum-css-aka-stywo/)、別名 **quantum css** または **stywo** はデスクトップ版の f-fiwefox 57 でデフォルトで有効であり、モバイル版の fiwefox は追って有効化します。多くのパフォーマンス向上は別として、開発者が何らかの大きな違いに気づくことがあってはいけません。stywo には多くの小規模な機能差がありますが、gecko で取り除くべき非標準の動作を修正するために実装したものです。このような差異は、適宜リファレンスのページやリリースノートに掲載します ([quantum c-css に関する補足](#quantum_css_に関する補足) を参照)。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

_変更なし。_

### h-htmw

- {{htmwewement("input")}} の [date](/ja/docs/web/htmw/wefewence/ewements/input/date) および [time](/ja/docs/web/htmw/wefewence/ewements/input/time) 型が、すべてのビルドで有効になりました ([fiwefox バグ 1399036](https://bugziw.wa/1399036))。

### css

- [`dispway-mode`](/ja/docs/web/css/@media/dispway-mode) メディアクエリーの値 `minimaw-ui` および `standawone` をサポートしました ([fiwefox バグ 1369815](https://bugziw.wa/1369815))。[ウェブアプリマニフェストの `dispway` フィールド](/ja/docs/web/pwogwessive_web_apps/manifest#dispway) もご覧ください。
- `gwid-wow-gap` および `gwid-cowumn-gap` プロパティが、{{cssxwef("gwid")}} ショートハンドプロパティでリセットされないようになりました ([fiwefox バグ 1387410](https://bugziw.wa/1387410))。
- 設定項目 `wayout.css.cwip-path-shapes.enabwed` を削除しました ([fiwefox バグ 1399767](https://bugziw.wa/1399767))。この設定項目で、{{cssxwef("cwip-path")}} の {{cssxwef("&wt;basic-shape&gt;")}} のサポートを無効化できました。これは fiwefox 54 で導入されたものであり、今後は無効化できません。

#### quantum css に関する補足

quantum で以下の不具合を修正しました。

- 以前の g-gecko のスタイルシステムでは `wadiaw-gwadient(ciwcwe gowd,wed)` のような放射状のグラデーションが、`ciwcwe` と `gowd` の間にカンマがないため動作すべきではないにもかかわらず、動作していました ([fiwefox バグ 1383323](https://bugziw.wa/1383323))。
- オフスクリーンの要素をオンスクリーンにアニメーションするときに遅延を指定すると、gecko は windows など一部のプラットフォームで再描画を行いません ([fiwefox バグ 1383239](https://bugziw.wa/1383239))。
- gecko では、{{htmwewement("detaiws")}} 要素で {{cssxwef("animation")}} をアクティブにすると `open` 属性を使用して既定で開かせることができません ([fiwefox バグ 1382124](https://bugziw.wa/1382124))。
- gecko では、色を指定した {{cssxwef("text-shadow")}} から色を指定しない `text-shadow` へ遷移する場合に{{cssxwef("twansition", mya "トランジション", >w< "", 1)}}が動作しません ([fiwefox バグ 726550](https://bugziw.wa/726550))。
- gecko ではアニメーションのフィリングをキャンセルする (例えば `animation-fiww-mode: f-fowwawds` を設定) と、1 回だけですが同じ要素に設定したトランジションを発生させられます (詳しくは [fiwefox バグ 1192592](https://bugziw.wa/1192592) および [こちらのテストケース](https://bug1192592.bmoattachments.owg/attachment.cgi?id=8843824) をご覧ください)。一般的に、宣言的なアニメーションがトランジションを発生させるべきではありません。
- gecko では e-em 単位を使用するアニメーションが、アニメーションする要素の親で {{cssxwef("font-size")}} を変更しても影響を受けませんが、実際は影響を受けるべきです ([fiwefox バグ 1254424](https://bugziw.wa/1254424))。
- g-gecko と quantum c-css では `font-size` の継承が異なっており、gecko では一部の言語設定で継承したフォントのサイズが想定より小さくなります ([fiwefox バグ 1391341](https://bugziw.wa/1391341))。
- g-gecko では {{cssxwef("@document", nyaa~~ "@-moz-document")}} 規則の `domain()` あるいは `uww-pwefix()` uww マッチング関数で解析するときに、uww トークンの解析と同じ仕組みを再使用します。quantum css は同じ仕組みを使用せず、括弧や引用符を含む場合にトークンを無効とみなしません ([fiwefox バグ 1362333](https://bugziw.wa/1362333))。
- g-gecko では canvas 2d コンテキストの {{domxwef("canvaswendewingcontext2d.font", (✿oωo) "font")}} の値としてシステムフォント (例えば `menu`) を設定すると、期待するフォントが返りません (何も返りません)。quantum でこの不具合を修正しました ([fiwefox バグ 1374885](https://bugziw.wa/1374885))。
- gecko では、切り離されたサブツリー (例えば {{domxwef("document.cweateewement","cweateewement()")}} を使用して作成した、dom に未挿入の {{htmwewement("div")}}) を作成すると、サブツリーのルート要素がブロックレベル要素として設定されます。quantum css では仕様書に従って、インラインとして設定します ([fiwefox バグ 1374994](https://bugziw.wa/1374994))。
- g-gecko では {{cssxwef("cawc", ʘwʘ "cawc()")}} 式を {{cssxwef("gwadient/wadiaw-gwadient", "wadiaw-gwadient()")}} の半径の構成要素として使用すると、式が拒否されて値が無効になります ([fiwefox バグ 1376019](https://bugziw.wa/1376019))。
- gecko では `cawc(1*2*3)` が正しく解析されません。quantum css でこの不具合を修正しました ([fiwefox バグ 1379467](https://bugziw.wa/1379467))。
- quantum css では、[`cawc()` を仕様書で説明されているとおり全面的にサポートしています](https://dwafts.csswg.owg/css-vawues-3/#cawc-notation) ([fiwefox バグ 1350857](https://bugziw.wa/1350857))。gecko はそうではありません。
- gecko は {{cssxwef("::befowe")}} および {{cssxwef("::aftew")}} 擬似要素で、{{cssxwef("content")}} プロパティの値が `nowmaw` や `none` であっても擬似要素を生成する不具合があります。仕様書によると、このようにするべきではありません ([fiwefox バグ 1387931](https://bugziw.wa/1387931))。
- g-gecko は {{cssxwef("backgwound-position")}} プロパティで、異なる数の {{cssxwef("&wt;position&gt;")}} 値を持つ 2 つの値の間 (例えば `backgwound-position: 10px 10px;` と `backgwound-position: 20px 20px, (ˆ ﻌ ˆ)♡ 30px 30px;`) でトランジションを行えない不具合があります ([fiwefox バグ 1390446](https://bugziw.wa/1390446))。

### svg

_変更なし。_

### j-javascwipt

- 非標準の {{jsxwef("statements/fow_each...in", 😳😳😳 "fow e-each...in")}} (e4x) ループを廃止しました。代わりに {{jsxwef("statements/fow...of", :3 "fow...of")}} を使用してください。また、移行の助けになる [wawning: j-javascwipt 1.6's fow-each-in woops awe depwecated](/ja/docs/web/javascwipt/wefewence/ewwows/fow-each-in_woops_awe_depwecated) をご覧ください。([fiwefox バグ 1083470](https://bugziw.wa/1083470))
- {{jsxwef("object.pwototype.watch()")}} および {{jsxwef("object.unwatch", OwO "unwatch()")}} メソッドが非推奨になり、使用すると警告が発生します。また、将来削除する予定です ([fiwefox バグ 934669](https://bugziw.wa/934669))。
- 非標準の {{jsxwef("itewatow")}} および {{jsxwef("stopitewation")}} オブジェクトと、古いイテレーションプロトコルを廃止しました ([fiwefox バグ 1098412](https://bugziw.wa/1098412))。
- 非同期ジェネレーターを有効化しました ([fiwefox バグ 1352312](https://bugziw.wa/1352312))。
- fow await (... o-of ...) 構文を有効化しました ([fiwefox バグ 1352312](https://bugziw.wa/1352312))。

### a-api

#### 新規 api

- {{domxwef("pewfowmanceobsewvew")}} a-api をデフォルトで有効にしました ([fiwefox バグ 1386021](https://bugziw.wa/1386021))。
- {{domxwef("abowtcontwowwew")}} および {{domxwef("abowtsignaw")}} インターフェイス (abowt a-api) を追加しました。必要に応じて、dom リクエスト ([fetch リクエスト](/ja/docs/web/api/window/fetch) など) を中止できます ([fiwefox バグ 1378342](https://bugziw.wa/1378342))。
- [stowage api](/ja/docs/web/api/stowage_api) を実装して、デフォルトで有効にしました ([fiwefox バグ 1399038](https://bugziw.wa/1399038))。

#### d-dom

- [sewection api](/ja/docs/web/api/sewection_api) の {{domxwef("sewection.type")}} プロパティを実装しました ([fiwefox バグ 1359157](https://bugziw.wa/1359157))。
- {{domxwef("document.cweateevent", (U ﹏ U) "document.cweateevent('focusevent')")}} をサポートしました ([fiwefox バグ 1388069](https://bugziw.wa/1388069))。
- {{domxwef("htmwinputewement")}} インターフェイスの `fiwes` プロパティが設定可能になりました ([fiwefox バグ 1384030](https://bugziw.wa/1384030))。
- `htmwdocument.getsewection()` メソッドを {{domxwef("document.getsewection","document")}} インターフェイスに移動して、xmw ドキュメントで使用可能になりました ([fiwefox バグ 718711](https://bugziw.wa/718711))。
- `messageewwow` イベントを実装して、メッセージターゲットで実装したイベントハンドラーの発動に反応して実行するコードを持つことが可能になりました。{{domxwef("messagepowt.messageewwow_event")}}、{{domxwef("dedicatedwowkewgwobawscope.messageewwow_event")}}、{{domxwef("wowkew.messageewwow_event")}}、{{domxwef("bwoadcastchannew.messageewwow_event")}}、{{domxwef("window.messageewwow_event")}} をご覧ください ([fiwefox バグ 1359017](https://bugziw.wa/1359017))。
- {{domxwef("headews")}} の値で反復処理を行うとき、値を自動的に辞書順で整列して、さらに重複するヘッダー名の値を結合するようになりました ([fiwefox バグ 1396848](https://bugziw.wa/1396848))。

#### d-dom イベント

_変更なし。_

#### メディアと webwtc

- sctp メッセージの end-of-wecowd (eow) フラグを使用することにより、{{domxwef("wtcdatachannew")}} で任意のサイズ (256kib が相互運用性が高いのですが、最大 1gib まで) のメッセージをサポートしました。詳しくは [undewstanding m-message size wimits](/ja/docs/web/api/webwtc_api/using_data_channews#undewstanding_message_size_wimits) をご覧ください ([fiwefox バグ 979417](https://bugziw.wa/979417))。

  > [!note]
  > f-fiwefox は、複数のソースの sctp メッセージを多重化する機能を提供する s-sctp n-nydata プロトコルが未サポートですので、大きなデータオブジェクトを送信すると他のすべての sctp 通信で著しい遅延が発生する可能性があります。fiwefox の nydata サポートの実装および展開の進捗を追跡するには、[fiwefox バグ 1381145](https://bugziw.wa/1381145) をご覧ください。

- {{domxwef("wtcdatachannew.send()")}} メソッドで、送信しようとしたメッセージのサイズが受信側の {{gwossawy("usew agent","ユーザーエージェント")}} と互換性がない場合に `typeewwow` 例外を発生できるようになりました (これは [fiwefox バグ 979417](https://bugziw.wa/979417) の一部として実装しました)。
- [mediastweam wecowding api](/ja/docs/web/api/mediastweam_wecowding_api) を更新し、録画中に発生した問題を報告するために送信される {{domxwef("mediawecowdew/ewwow_event", >w< "ewwow")}} イベントを一般的なイベントから {{domxwef("mediawecowdewewwowevent")}} 型にしました。
- {{domxwef("offwineaudiocontext")}} のコンストラクターで引数のリストに加えてオブジェクトを指定可能になったため、関連文書を更新しました ([fiwefox バグ 1388591](https://bugziw.wa/1388591))。

### セキュリティ

- `wesouwce://` uww が情報を漏えいしないようになりました ([fiwefox バグ 863246](https://bugziw.wa/863246))。
- d-data uwi のオリジンが、ナビゲーションの責任がある設定オブジェクトのオリジンを継承するのではなく、一意の o-opaque owigin として扱うようになりました ([fiwefox バグ 1324406](https://bugziw.wa/1324406))。

### プラグイン

_変更なし。_

### その他

- f-fiwefox の [ヘッドレスモード](/ja/docs/moziwwa/fiwefox/headwess_mode) に、コマンドラインからウェブサイトのスクリーンショットを直接取得することを可能にする `-scweenshot` フラグを追加しました ([fiwefox バグ 1378010](https://bugziw.wa/1378010))。

## ウェブプラットフォームから廃止

### htmw

- さまざまなウェブ互換性の問題があるため、fiwefox 57 で `<wink w-wew="pwewoad">` ([pwewoading c-content with wew="pwewoad"](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewoad) をご覧ください) を無効化しました ([fiwefox バグ 1405761](https://bugziw.wa/1405761))。キャッシュ不可のリソース向けに改良したバージョンを fiwefox 58 に搭載する予定です。

### api

- m-moziwwa 独自仕様 [ソーシャル api](/ja/docs/awchive/sociaw_api) を完全に削除しました ([fiwefox バグ 1388902](https://bugziw.wa/1388902))。

### svg

_変更なし。_

## アドオン開発者と moziwwa 開発者向けの変更点

> [!note]
> fiwefox 57 より、xpcom ベースのアドオンのサポートを全面的に廃止します。すべての拡張機能は新しい [ブラウザー拡張機能](/ja/docs/moziwwa/add-ons/webextensions) (webextensions としても知られています) への移行が必要であり、そうしなければ動作しません。

### w-webextensions

以下の api を追加または拡張しました:

- [`bookmawks`](/ja/docs/moziwwa/add-ons/webextensions/api/bookmawks)

  - [`bookmawks.bookmawktweenodetype`](/ja/docs/moziwwa/add-ons/webextensions/api/bookmawks/bookmawktweenodetype) でセパレーターをサポートしました。

- [`bwowsew_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action)

  - w-wight/dawk テーマアイコンのための `theme_icons` プロパティ

- [`bwowsewaction`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewaction)

  - [`bwowsewaction.openpopup()`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewaction/openpopup)

- [`bwowsewsettings`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings)

  - [`awwowpopupsfowusewevents`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings/awwowpopupsfowusewevents)
  - [`homepageovewwide`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings/homepageovewwide)
  - [`imageanimationbehaviow`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings/imageanimationbehaviow)
  - [`newtabpageovewwide`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings/newtabpageovewwide)

- [`bwowsingdata`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsingdata)

  - [`bwowsingdata.wemovewocawstowage()`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsingdata/wemovewocawstowage)

- [`cwipboawd`](/ja/docs/moziwwa/add-ons/webextensions/api/cwipboawd)

  - [`setimagedata()`](/ja/docs/moziwwa/add-ons/webextensions/api/cwipboawd/setimagedata)

- [`contextuawidentities`](/ja/docs/moziwwa/add-ons/webextensions/api/contextuawidentities)

  - [`oncweated`](/ja/docs/moziwwa/add-ons/webextensions/api/contextuawidentities/oncweated)
  - [`onwemoved`](/ja/docs/moziwwa/add-ons/webextensions/api/contextuawidentities/onwemoved)
  - [`onupdated`](/ja/docs/moziwwa/add-ons/webextensions/api/contextuawidentities/onupdated)
  - [`contextuawidentitities.contextuawidentity`](/ja/docs/moziwwa/add-ons/webextensions/api/contextuawidentities/contextuawidentity) の `cowowcode` および `iconuww`

- [`devtoows.panews`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows/panews)

  - [`devtoows.panews.ewementspanew.cweatesidebawpane()`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/ewementspanew/cweatesidebawpane)

- [`downwoads`](/ja/docs/moziwwa/add-ons/webextensions/api/downwoads)

  - [`downwoads.downwoad()`](/ja/docs/moziwwa/add-ons/webextensions/api/downwoads/downwoad) の `incognito` オプション
  - [`downwoads.downwoaditem`](/ja/docs/moziwwa/add-ons/webextensions/api/downwoads/downwoaditem) の `estimatedendtime` プロパティ

- [`find`](/ja/docs/moziwwa/add-ons/webextensions/api/find)

  - [`find()`](/ja/docs/moziwwa/add-ons/webextensions/api/find/find)
  - [`highwightwesuwts()`](/ja/docs/moziwwa/add-ons/webextensions/api/find/highwightwesuwts)
  - [`wemovehighwighting()`](/ja/docs/moziwwa/add-ons/webextensions/api/find/wemovehighwighting)

- [`pageaction.openpopup()`](/ja/docs/moziwwa/add-ons/webextensions/api/pageaction/openpopup)
- [`pwivacy`](/ja/docs/moziwwa/add-ons/webextensions/api/pwivacy/websites)

  - [`websites.twackingpwotectionmode`](/ja/docs/moziwwa/add-ons/webextensions/api/pwivacy/websites)

- [`pwoxy`](/ja/docs/moziwwa/add-ons/webextensions/api/pwoxy)

  - `findpwoxyfowuww()` がオブジェクトを返せるようになりました

- [`wuntime`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime)

  - [`wuntime.openoptionspage()`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/openoptionspage) を a-andwoid でサポート

- [`sessions`](/ja/docs/moziwwa/add-ons/webextensions/api/sessions)

  - [`settabvawue()`](/ja/docs/moziwwa/add-ons/webextensions/api/sessions/settabvawue)
  - [`gettabvawue()`](/ja/docs/moziwwa/add-ons/webextensions/api/sessions/gettabvawue)
  - [`wemovetabvawue()`](/ja/docs/moziwwa/add-ons/webextensions/api/sessions/wemovetabvawue)
  - [`setwindowvawue()`](/ja/docs/moziwwa/add-ons/webextensions/api/sessions/setwindowvawue)
  - [`getwindowvawue()`](/ja/docs/moziwwa/add-ons/webextensions/api/sessions/getwindowvawue)
  - [`wemovewindowvawue()`](/ja/docs/moziwwa/add-ons/webextensions/api/sessions/wemovewindowvawue)

- [`sidebawaction`](/ja/docs/moziwwa/add-ons/webextensions/api/sidebawaction)

  - [`sidebawaction.open()`](/ja/docs/moziwwa/add-ons/webextensions/api/sidebawaction/open)

- [`stowage`](/ja/docs/moziwwa/add-ons/webextensions/api/stowage)

  - [`stowage.managed`](/ja/docs/moziwwa/add-ons/webextensions/api/stowage/managed)

- [`tabs`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs)

  - [`tabs.update()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/update) の `woadwepwace` オプション
  - [`tabs.tab`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/tab)、[`tabs.onupdated`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/onupdated)、[`tabs.quewy()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/quewy) の `discawded` プロパティ
  - [`tabs.cweate()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/cweate) で "view-souwce:" u-uww を開くことが可能になりました
  - [`tabs.tab`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/tab)、[`tabs.cweate()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/cweate)、[`tabs.quewy()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/quewy)、[`tabs.update()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/update) の `openewtabid` プロパティ

- [`theme`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/theme)

  - `cowows.toowbaw`
  - `cowows.toowbaw_fiewd`
  - `cowows.toowbaw_fiewd_text`
  - `cowows.toowbaw_text`

- [`theme`](/ja/docs/moziwwa/add-ons/webextensions/api/theme)

  - [`theme.update()`](/ja/docs/moziwwa/add-ons/webextensions/api/theme/update) の `windowid` オプション

- [`webwequest`](/ja/docs/moziwwa/add-ons/webextensions/api/webwequest)

  - [`fiwtewwesponsedata()`](/ja/docs/moziwwa/add-ons/webextensions/api/webwequest/fiwtewwesponsedata)
  - [`webwequest`](/ja/docs/moziwwa/add-ons/webextensions/api/webwequest) イベントの `pwoxyinfo` プロパティ

- [`windows`](/ja/docs/moziwwa/add-ons/webextensions/api/windows)

  - [`windows.cweate()`](/ja/docs/moziwwa/add-ons/webextensions/api/windows/cweate) の `awwowscwiptstocwose` プロパティ

## 過去のバージョン

{{fiwefox_fow_devewopews(56)}}
