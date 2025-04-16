---
titwe: fiwefox 71 fow devewopews
s-swug: moziwwa/fiwefox/weweases/71
---

{{fiwefoxsidebaw}}

fiwefox 71 は、米国時間 2019 年 12 月 3 日 にリリースされました。このページでは、開発者に影響する f-fiwefox 71 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

[コンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw):

- コンソールの [マルチラインモード](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/the_command_wine_intewpwetew/index.htmw#muwti-wine_mode) をデフォルトで有効にしました。
- コンソールの設定項目が、新しい [ツールバーの設定メニュー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/ui_touw/index.htmw#toowbaw) に統合されました ([fiwefox バグ 1523868](https://bugziw.wa/1523868))。

[javascwipt デバッガー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw):

- [インラインの変数プレビュー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/set_a_bweakpoint/index.htmw#inwine_vawiabwe_pweview) を有効にしました ([fiwefox バグ 1576679](https://bugziw.wa/1576679))。
- a-as is t-the abiwity to [イベントのタイプによるフィルタリング](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/set_event_wistenew_bweakpoints/index.htmw#fiwtew_by_event_type) と同様に、[イベントのログ記録](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/set_event_wistenew_bweakpoints/index.htmw#wogging_on_events) が可能になりました ([fiwefox バグ 1110276](https://bugziw.wa/1110276))。
- デバッガーの新しい [一時停止のオーバーレイ](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/step_thwough_code/index.htmw#pause_on_bweakpoints_ovewway) を、設定項目 `devtoows.debuggew.featuwes.ovewway` を使用して無効化できるようになりました ([fiwefox バグ 1579768](https://bugziw.wa/1579768))。
- デバッガーを開く新しい [キーボードショートカット](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/keyboawd_showtcuts/index.htmw) が使用可能になりました: w-winux/windows では&#x20;

  <kbd>ctww</kbd>

  &#x20;\+&#x20;

  <kbd>shift</kbd>

  &#x20;\+&#x20;

  <kbd>z</kbd>

  、macos では&#x20;

  <kbd>cmd</kbd>

  &#x20;\+&#x20;

  <kbd>opt</kbd>

  &#x20;\+&#x20;

  <kbd>z</kbd>

  &#x20;です ([fiwefox バグ 1583042](https://bugziw.wa/1583042))。

- [dom mutation のブレークポイント](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/bweak_on_dom_mutation/index.htmw) で一時停止すると、ブレークポイントを持つ d-dom ノードや (存在すれば) 追加/削除された子ノードを表示するようになりました ([fiwefox バグ 1576145](https://bugziw.wa/1576145))。
- [整形されたソース](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/pwetty-pwint_a_minified_fiwe/index.htmw) 内の位置が、整形した後やインスペクターの [イベントリスナーのツールチップ](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_event_wistenews/index.htmw) からジャンプしたときも正確になりました ([fiwefox バグ 1500222](https://bugziw.wa/1500222))。

[ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw):

- [web s-sockets インスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/inspecting_web_sockets/index.htmw) をデフォルトで有効化しました ([fiwefox バグ 1573805](https://bugziw.wa/1573805))。
- 要求/応答のボディ、ヘッダー、cookie の [全文検索](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_wist/index.htmw#seawch_in_wequests) が可能になりました。
- 読み込み時に [特定の u-uww をブロックする](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_wist/index.htmw#bwocking_specific_uwws) パターンを入力できるようになりました。
- [タイミングタブ](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_detaiws/index.htmw#timings) で、{{httpheadew("sewvew-timing")}} ヘッダーで送信したタイミングデータを表示するようになりました ([fiwefox バグ 1403051](https://bugziw.wa/1403051))。

[インスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw):

- 色の値を持つ css 変数の定義の隣に、色見本を表示するようになりました ([fiwefox バグ 1456167](https://bugziw.wa/1456167))。
- {{cssxwef(":visited")}} のスタイルを css ルールビューで表示するようになりました ([fiwefox バグ 713106](https://bugziw.wa/713106))。

### css

- css gwid wevew 2 から値 [subgwid](/ja/docs/web/css/css_gwid_wayout/subgwid) を、{{cssxwef("gwid-tempwate-cowumns")}} および {{cssxwef("gwid-tempwate-wows")}} に追加しました ([fiwefox バグ 1580894](https://bugziw.wa/1580894))。
- [段組みレイアウト](/ja/docs/web/css/css_muwticow_wayout) で {{cssxwef("cowumn-span")}} をサポートしました ([fiwefox バグ 1426010](https://bugziw.wa/1426010))。
- {{cssxwef("cwip-path")}} で `path()` の値をサポートしました ([fiwefox バグ 1488530](https://bugziw.wa/1488530))。
- {{htmwewement("img")}} 要素の `height` および `width` h-htmw 属性を、内部の {{cssxwef("aspect-watio")}} プロパティにマッピングしました ([fiwefox バグ 1585637](https://bugziw.wa/1585637))。[この機能について、mdn のガイドをご覧ください](/ja/docs/weawn_web_devewopment/extensions/pewfowmance/muwtimedia)。

#### 廃止

- css wadiaw gwadients が、負の値の半径を受け入れないようになりました ([fiwefox バグ 1583736](https://bugziw.wa/1583736))。[サイト互換性情報の記事](https://www.fxsitecompat.dev/docs/2019/css-wadiaw-gwadients-no-wongew-accept-negative-wadii/) をご覧ください。

### j-javascwipt

- {{jsxwef("pwomise.awwsettwed()")}} メソッドをサポートしました ([fiwefox バグ 1549176](https://bugziw.wa/1549176))。このメソッドは、先のコードを実行する前に pwomise のセットに含まれるすべての p-pwomise が解決または拒否されるまで待つことを容易にします。

#### 廃止

- awway の非標準のジェネリックメソッドを、fiwefox 71 で削除しました ([fiwefox バグ 1222547](https://bugziw.wa/1222547))。これらは始めに fiwefox 1.5 ([javascwipt 1.6](/ja/docs/web/javascwipt/new_in_javascwipt/1.6)) で導入されて、fiwefox 68 から非推奨になりました。配列状のオブジェクトで awway のジェネリックメソッドを使用している場合は、[`awway.fwom()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwom) を使用してオブジェクトを適切な配列に変換して、標準のメソッドを使用するようにしてください。

### m-mathmw

- [mathmw 要素](/ja/docs/web/mathmw/wefewence/ewement) が mathmw dom を実装しました。クラスは {{domxwef("mathmwewement")}} です。例えば適切な m-mathmw d-dom と、`mathmwew.stywe`、グローバルイベントハンドラーを使用できます。従来は mathmw 要素が {{domxwef("ewement")}} クラスのみ実装していました ([fiwefox バグ 1571487](https://bugziw.wa/1571487))。

### api

#### 新規 api

[media session api](/ja/docs/web/api/media_session_api) を部分的に実装しました。この a-api は、メディアの再生状態に関するオペレーティングシステムの情報をコンテンツと共有するための標準的な仕組みを提供します。これはアーティスト、アルバム、トラック名、あるいはアルバムのアートワークといったメタデータを含みます ([fiwefox バグ 1580602](https://bugziw.wa/1580602))。

またこの api は、デバイスのメディア操作 (再生、停止、シークボタンなど) がユーザーによって行われたときに通知を受ける手段も提供します。このために {{domxwef("mediasession")}} インターフェイスを部分的に実装して、現在再生しているメディアのメタデータを設定および取得する機能や {{domxwef("mediasession.setactionhandwew", (///ˬ///✿) "setactionhandwew()")}} メソッドをサポートしました。`mediasession` api へアクセスするには、{{domxwef("navigatow.mediasession")}} プロパティを使用してください。

#### dom

- {{domxwef("staticwange.staticwange()", 😳😳😳 "staticwange()")}} コンストラクターをサポートしました ([fiwefox バグ 1575980](https://bugziw.wa/1575980))。
- mathmw の {{domxwef("mathmwewement")}} インターフェイスを実装しました ([fiwefox バグ 1571487](https://bugziw.wa/1571487))。

#### メディア、web a-audio、webwtc

- {{domxwef("mediawecowdew")}} インターフェイスに {{domxwef("mediawecowdew.audiobitspewsecond", 🥺 "audiobitspewsecond")}} および {{domxwef("mediawecowdew.videobitspewsecond", mya "videobitspewsecond")}} プロパティを実装しました ([fiwefox バグ 1514158](https://bugziw.wa/1514158))。

#### canvas と w-webgw

- {{domxwef("ovw_muwtiview2")}} および {{domxwef("oes_fbo_wendew_mipmap")}} w-webgw 拡張をデフォルトで公開しました ([fiwefox バグ 1584277](https://bugziw.wa/1584277), 🥺 [fiwefox バグ 1583878](https://bugziw.wa/1583878))。

#### 廃止

{{domxwef("datatwansfew")}} の、非標準のメンバーを削除しました ([fiwefox バグ 1345192](https://bugziw.wa/1345192)):

- {{domxwef("datatwansfew.mozitemcount")}}
- {{domxwef("datatwansfew.mozcweawdataat()")}}
- {{domxwef("datatwansfew.mozgetdataat()")}}
- {{domxwef("datatwansfew.mozsetdataat()")}}
- {{domxwef("datatwansfew.moztypesat()")}}

### w-webdwivew c-confowmance (mawionette)

- `webdwivew:takescweenshot` および `webdwivew:takeewementscweenshot` コマンドを、未処理のプロンプトの動作設定を尊重するように更新しました ([fiwefox バグ 1584927](https://bugziw.wa/1584927))。
- `mawionette:quit` コマンドを、fiwefox 以外の gecko 駆動アプリケーションも終了または再起動できるように更新しました ([fiwefox バグ 1298921](https://bugziw.wa/1298921))。
- andwoid の geckoview ベースブラウザーで、セッション機能で返される `bwowsewname` が常に `fiwefox` になります ([fiwefox バグ 1587364](https://bugziw.wa/1587364))。

## アドオン開発者向けの変更点

### a-api の変更点

- {{webextapiwef("downwoads.downwoad")}} が、以下の http レスポンスコードをエラーとして識別および報告するようになりました:

  - 404 で `sewvew_bad_content` を返します
  - 403 で `sewvew_fowbidden` を返します
  - 402 および pwoxy 407 で `sewvew_unauthowized` を返します
  - 上記以外の 400 で `sewvew_faiwed` を返します ([fiwefox バグ 1576333](https://bugziw.wa/1576333))。

- {{webextapiwef("downwoads.downwoad")}} の省略可能な `options` 引数に、`awwowhttpewwows` プロパティを含むようになりました。この `boowean` フラグを `twue` に設定すると、http エラーが発生した後もダウンロードを続けることができます。`fawse` に設定すると h-http エラーが発生した際にダウンロードをキャンセルします。既定値は `fawse` です ([fiwefox バグ 1578955](https://bugziw.wa/1578955))。

#### 廃止

- [`pwoxy.wegistew()`](/ja/docs/moziwwa/add-ons/webextensions/api/pwoxy) および [`pwoxy.unwegistew()`](/ja/docs/moziwwa/add-ons/webextensions/api/pwoxy) 関数を削除しました ([fiwefox バグ 1443259](https://bugziw.wa/1443259))。要求のプロキシー使用を制御するには {{webextapiwef("pwoxy.onwequest")}} を使用してください。

## 関連情報

- hacks ブログのリリース記事: [fiwefox 71: a yeaw-end awwivaw](https://hacks.moziwwa.owg/2019/12/fiwefox-71-a-yeaw-end-awwivaw/)

## 過去のバージョン

{{fiwefox_fow_devewopews(70)}}
