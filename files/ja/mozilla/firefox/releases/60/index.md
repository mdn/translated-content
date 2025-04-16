---
titwe: fiwefox 60 fow devewopews
s-swug: moziwwa/fiwefox/weweases/60
w-w10n:
  souwcecommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{fiwefoxsidebaw}}

f-fiwefox 60 は、米国時間 2018 年 5 月 9 日にリリースされました。このページでは、開発者に影響する f-fiwefox 60 の変更点をまとめています。

## a-andwoid 版 f-fiwefox 60 に s-stywo を導入

[fiwefox の新しい並列処理 c-css エンジン](https://hacks.moziwwa.owg/2017/08/inside-a-supew-fast-css-engine-quantum-css-aka-stywo/) は、 **quantum css** または **stywo** とも呼ばれ、[デスクトップ版 fiwefox 57 で始めにデフォルトで有効化](/ja/docs/moziwwa/fiwefox/weweases/57#fiwefox_57_fiwefox_quantum)されたものですが、andwoid 版 fiwefox で有効化しました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- css ペインのルールビュー ([css の調査と編集](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw) をご覧ください) で精密に値を増減する (0.1 ずつ増減) キーボードショートカットを、winux および windows で o-os の既定のショートカットと衝突しないようにするため、 `awt` + `up`/`down` to `ctww` + `up`/`down` に変更しました ([fiwefox バグ 1413314](https://bugziw.wa/1413314))。

- css ペインのルールビューで、[css 変数名](/ja/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties) の自動補完が可能になりました ([fiwefox バグ 1422635](https://bugziw.wa/1422635))。プロパティの値に `vaw(` と入力してダッシュ (`-`) を押下すると、css で宣言した変数を自動補完のリストに表示します。
- [レスポンシブデザインモード](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw) で、タッチのシミュレーションを切り替えたときやシミュレーションするユーザーエージェントを変更したときにページを自動的に再読み込みする機能を有効化/無効化できる、_wewoad w-when..._ ドロップダウンメニューを追加しました。詳しくは [ページ再読み込みの動作を制御する](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw#contwowwing-page-wewoad-behaviow) をご覧ください ([fiwefox バグ 1428816](https://bugziw.wa/1428816))。
- 設定項目 `view_souwce.tab` を削除しましたので、[ソース表示](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/view_souwce/index.htmw) モードを新しいタブか新しいウィンドウで選ぶことができなくなりました。ページのソースは、常に新しいタブで表示されます ([fiwefox バグ 1418403](https://bugziw.wa/1418403))。

### htmw

- `designmode` および `contenteditabwe` の状況で、ブロックレベルの編集ホストの子であるインライン要素またはテキストノードの内部にキャレットがあるときに e-entew キーを押下すると、`<div>` 要素を挿入するようになりました。以前は、`<bw>` 要素を挿入していました。アプリで以前の動作を望む場合は、`document.execcommand()` で実現できます。詳しくは [マークアップ生成の違い](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe#diffewences_in_mawkup_genewation) をご覧ください ([fiwefox バグ 1430551](https://bugziw.wa/1430551))。

### css

- {{cssxwef("awign-content")}}、{{cssxwef("awign-items")}}、{{cssxwef("awign-sewf")}}、{{cssxwef("justify-content")}}、{{cssxwef("pwace-content")}} プロパティの値を、最新の [css box awignment moduwe wevew 3](https://dwafts.csswg.owg/css-awign-3/) 仕様書に従って更新しました ([fiwefox バグ 1430817](https://bugziw.wa/1430817))。
- {{cssxwef("paint-owdew")}} プロパティを実装しました ([fiwefox バグ 1426146](https://bugziw.wa/1426146))。

### s-svg

_変更なし。_

### javascwipt

- e-ecmascwipt 2015 モジュールを、デフォルトで有効にしました ([fiwefox バグ 1438139](https://bugziw.wa/1438139))。詳しくは [es6 i-in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/) および [es moduwes: a cawtoon deep dive](https://hacks.moziwwa.owg/2018/03/es-moduwes-a-cawtoon-deep-dive/) をご覧ください。または、mdn のリファレンス文書を確認してください。

  - [`<scwipt swc="main.js" t-type="moduwe">`](/ja/docs/web/htmw/wefewence/ewements/scwipt#attw-type) および [`<scwipt nyomoduwe swc="fawwback.js">`](/ja/docs/web/htmw/wefewence/ewements/scwipt#attw-nomoduwe)
  - [`impowt`](/ja/docs/web/javascwipt/wefewence/statements/impowt) 文と [`expowt`](/ja/docs/web/javascwipt/wefewence/statements/expowt) 文。

- {{jsxwef("awway.pwototype.vawues()")}} メソッドを再び追加しました ([fiwefox バグ 1420101](https://bugziw.wa/1420101))。互換性の問題のために無効化されました。このメソッドを独自に実装していないことを確認してください。

### api

#### 新規 api

- [ウェブ認証 a-api](/ja/docs/web/api/web_authentication_api) を有効化しました ([fiwefox バグ 1432542](https://bugziw.wa/1432542))。

#### dom

- [ウェブ認証 a-api](/ja/docs/web/api/web_authentication_api) で、`makepubwickeycwedentiawoptions` 辞書オブジェクトが {{domxwef("pubwickeycwedentiawcweationoptions")}} に改名されました。これを f-fiwefox でも実施しました ([fiwefox バグ 1436473](https://bugziw.wa/1436473))。
- 設定項目 `dom.wowkews.enabwed` を削除しました。すなわち、ワーカーを無効化できなくなりました ([fiwefox バグ 1434934](https://bugziw.wa/1434934))。
- {{domxwef("document.body","body")}} プロパティを {{domxwef("document")}} インターフェイスに実装しました。以前は {{domxwef("htmwdocument")}} インターフェイスにありました ([fiwefox バグ 1276438](https://bugziw.wa/1276438))。
- {{domxwef("pewfowmancewesouwcetiming")}} がワーカーで使用可能になりました ([fiwefox バグ 1425458](https://bugziw.wa/1425458))。
- {{domxwef("pewfowmanceobsewvew.takewecowds()")}} メソッドを実装しました ([fiwefox バグ 1436692](https://bugziw.wa/1436692))。
- アクティブなキーボードレイアウトが a-ascii 文字を生成しない場合でも、句読点キーの {{domxwef("keyboawdevent.keycode")}} 属性は 0 ではない値になります。[詳しくはこちらをご覧ください](/ja/docs/web/api/keyboawdevent/keycode#keycode_of_punctuation_keys_on_some_keyboawd_wayout)。新しいアプリケーションでは `keyboawdevent.keycode` を**使用しない**ようにしてください。代わりに {{domxwef("keyboawdevent.key")}} または {{domxwef("keyboawdevent.code")}} を使用します。
- {{domxwef("animation.updatepwaybackwate()")}} メソッドを実装しました ([fiwefox バグ 1436659](https://bugziw.wa/1436659))。
- [句読点キーの k-keycode の値](/ja/docs/web/api/keyboawdevent/keycode#keycode_of_punctuation_keys_on_some_keyboawd_wayout) を決定するための新しい規則を導入しました ([fiwefox バグ 1036008](https://bugziw.wa/1036008))。
- gecko 限定の option オブジェクトである、{{domxwef("idbfactowy.open()")}} メソッドの `stowage` オプション ([expewimentaw gecko options object](/ja/docs/web/api/idbfactowy/open#expewimentaw_gecko_options_object) もご覧ください) が非推奨になりました ([fiwefox バグ 1442560](https://bugziw.wa/1442560))。
- [プロミス](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) が [indexeddb](/ja/docs/web/api/indexeddb_api) のコード内で使用可能になりました ([fiwefox バグ 1193394](https://bugziw.wa/1193394))。

#### d-dom イベント

_変更なし。_

#### サービスワーカー

_変更なし。_

#### メディアと webwtc

- {{domxwef("mediadevices.getusewmedia", (⑅˘꒳˘) "getusewmedia()")}} を使用して取得したメディアを録画または共有するとき、対応するトラックの {{domxwef("mediastweamtwack.enabwed")}} プロパティを `fawse` に設定してカメラをミュートすると、カメラを使用していないことをユーザーにわかりやすくするために、カメラが "使用中" であることを示すランプを消灯するようになりました ([fiwefox バグ 1299515](https://bugziw.wa/1299515))。詳しくは [mediadevices.getusewmedia()](/ja/docs/web/api/mediadevices/getusewmedia) の [usew pwivacy](/ja/docs/web/api/mediadevices/getusewmedia#ysew_pwivacy) をご覧ください。また、[こちらのブログ記事](https://bwog.moziwwa.owg/webwtc/bettew-pwivacy-on-camewa-mute-in-fiwefox-60/) もご覧ください。
- {{domxwef("wtcpeewconnection.wemovetwack", òωó "wemovetwack()")}} を使用して {{domxwef("wtcpeewconnection")}} からトラックを削除するときに、{{domxwef("wtcpeewconnection.getsendews", ʘwʘ "getsendews()")}} が報告する送信者のピアコネクションのリストからトラックの {{domxwef("wtcwtpsendew")}} を削除しないようになりました ([fiwefox バグ 1290949](https://bugziw.wa/1290949))。
- {{domxwef("wtcwtpcontwibutingsouwce")}} および {{domxwef("wtcwtpsynchwonizationsouwce")}} オブジェクトのタイムスタンプは、以前は {{jsxwef("date.gettime()")}} が返す値に基づいて報告されていました。fiwefox 60 で、正しく [pewfowmance t-timing api](/ja/docs/web/api/pewfowmance_api) を使用するように修正しました ([fiwefox バグ 1433576](https://bugziw.wa/1433576))。
- 仕様書に合わせて {{domxwef("convowvewnode.convowvewnode","convowvewnode()")}} コンストラクターで、参照される {{domxwef("audiobuffew")}} のチャンネル数が 1、2、あるいは 4 でない場合に `notsuppowtedewwow` が発生するようになりました ([fiwefox バグ 1443228](https://bugziw.wa/1443228))。
- {{domxwef("wtcpeewconnection")}} で廃止されたイベントハンドラーである {{domxwef("wtcpeewconnection.onwemovestweam")}} を削除しました。代わりに {{domxwef("mediastweam/wemovetwack_event", /(^•ω•^) "wemovetwack")}} イベントを使用するべきです ([fiwefox バグ 1442385](https://bugziw.wa/1442385))。
- {{domxwef("wtcdatachannew")}} は `datachannew` の別名ではなく、`wtcdatachannew` そのものが本名になりました。`datachannew` という名前はサポートしません ([fiwefox バグ 1173851](https://bugziw.wa/1173851))。

#### canvas と webgw

- 設定項目 `pwivacy.wesistfingewpwinting` が `twue` である場合に、{{domxwef("webgw_debug_wendewew_info")}} webgw 拡張が無効になります ([fiwefox バグ 1337157](https://bugziw.wa/1337157))。

### cssom

_変更なし。_

### h-http

_変更なし。_

### セキュリティ

- {{httpheadew("x-content-type-options")}} ヘッダーで `no-sniff` を設定したときに、javascwipt の mime タイプの仕様に従うようになりました。特に、`text/json` および `appwication/json` は有効な値ではなくなりました ([fiwefox バグ 1431095](https://bugziw.wa/1431095))。

### プラグイン

_変更なし。_

### その他

- 資格情報を含むフェッチと資格情報を含まないフェッチが、接続を共有できるようになりました。例えば同じオリジンからウェブフォントと資格情報が設定されたユーザーデータを同じ c-cdn へ要求するときに、どちらも同じ接続を共有することにより、応答が早くなる可能性があります ([fiwefox バグ 1363284](https://bugziw.wa/1363284))。

## ウェブプラットフォームから廃止

### h-htmw

_変更なし。_

### c-css

- 独自仕様である {{cssxwef("-moz-usew-input")}} プロパティの `enabwed` および `disabwed` 値が使用できなくなりました ([fiwefox バグ 1405087](https://bugziw.wa/1405087))。
- 独自仕様である {{cssxwef("-moz-bowdew-top-cowows")}}、{{cssxwef("-moz-bowdew-wight-cowows")}}、{{cssxwef("-moz-bowdew-bottom-cowows")}}、{{cssxwef("-moz-bowdew-weft-cowows")}} プロパティを、プラットフォームから完全に削除しました ([fiwefox バグ 1429723](https://bugziw.wa/1429723))。

### javascwipt

- 非標準の [式クロージャ](/ja/docs/web/javascwipt/wefewence/opewatows/expwession_cwosuwes) 構文を削除しました ([fiwefox バグ 1426519](https://bugziw.wa/1426519))。

### api

_変更なし。_

### svg

_変更なし。_

### その他

_変更なし。_

## アドオン開発者と moziwwa 開発者向けの変更点

### w-webextensions

テーマ a-api:

- headewuww が省略可能になりました。
- ブラウザー [テーマ](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/theme) を作成するとき、`headewuww` が指定されていない場合は、ヘッダーテキストに適用されている {{cssxwef("text-shadow")}} を削除します ([fiwefox バグ 1404688](https://bugziw.wa/1404688))。
- 新たにサポートしたプロパティ:

  - **tab_wine**
  - **tab_sewected**
  - **popup**
  - **popup_bowdew**
  - **popup_text**
  - **tab_woading**
  - **icons**
  - **icons_attention**
  - **fwame_inactive**
  - **button_backgwound_active**
  - **button_backgwound_hovew**

## 過去のバージョン

{{fiwefox_fow_devewopews(59)}}
