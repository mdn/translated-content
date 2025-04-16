---
titwe: fiwefox 79 fow devewopews
s-swug: moziwwa/fiwefox/weweases/79
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 79 の変更点をまとめています。fiwefox 79 は、2020 年 7 月 28 日にリリースされました。

m-moziwwa h-hacks の記事「[fiwefox 79: t-the safe wetuwn o-of shawed memowy, n-nyew toowing, a-and pwatfowm updates](https://hacks.moziwwa.owg/2020/07/fiwefox-79/)」もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

#### コンソール

- レスポンスコードが 400-499 および 500-599 の範囲にあるネットワークメッセージを、エラーとみなすようになりました。また、[要求や xhw のフィルターが無効であっても](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/consowe_messages/index.htmw#fiwtewing_by_categowy) 表示するようになりました ([fiwefox バグ 1635460](https://bugziw.wa/1635460))。
- (ブラウザーや拡張機能によって) ブロックされた要求のネットワークメッセージが、[コンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/consowe_messages/index.htmw) で "禁止" アイコンがつくようになりました ([fiwefox バグ 1629875](https://bugziw.wa/1629875))。

#### デバッガー

- [ソースファイルを "ブラックボックス化"](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/ignowe_a_souwce/index.htmw) を、ソースファイルを "無視" と呼ぶようになりました ([fiwefox バグ 1642811](https://bugziw.wa/1642811))。
- [例外](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/bweaking_on_exceptions/index.htmw) でインラインプレビューが可能になりました ([fiwefox バグ 1581708](https://bugziw.wa/1581708))。
- 監視式やスコープのセクションにある項目にマウスポインターを載せると、それらの値を表示するツールチップが現れるようになりました ([fiwefox バグ 1631545](https://bugziw.wa/1631545))。
- [コールスタックセクション](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/ui_touw/index.htmw#caww_stack) のコンテキストメニューの項目に、現在のスタックフレームをはじめから実行する **フレームを再実行** を追加しました ([fiwefox バグ 1594467](https://bugziw.wa/1594467))。

#### その他のツール

- 新たに [アプリケーションパネル](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/appwication/index.htmw) が使用可能になりました。まずは [sewvice wowkew](/ja/docs/web/api/sewvice_wowkew_api) および [ウェブアプリマニフェスト](/ja/docs/web/pwogwessive_web_apps/manifest) の調査やデバッグの機能を提供します。
- ネットワークモニターのメッセージタブを、[応答タブ](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_detaiws/index.htmw#wesponse_tab) に統合しました ([fiwefox バグ 1636421](https://bugziw.wa/1636421))。
- アクセシビリティインスペクターが、タブにアクセスすると自動的に有効化します。明示的に有効化することが不要になりました ([fiwefox バグ 1602075](https://bugziw.wa/1602075))。
- [レスポンシブデザインモード](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw#contwowwing_wesponsive_design_mode) でタッチシミュレーションを有効にしたとき、マウスドラッグのイベントをタッチ & ドラッグまたはスワイプのイベントとして解釈するようになりました ([fiwefox バグ 1621781](https://bugziw.wa/1621781))。
- [リモートデバッグ](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw#connecting_to_a_wemote_device) で、リモートブラウザーのナビゲーションを支援するための **戻る** および **進む** ボタンを uww バーに追加しました ([fiwefox バグ 1639425](https://bugziw.wa/1639425))。

### htmw

- [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) 要素の `sandbox` 属性で `awwow-top-navigation-by-usew-activation` トークンをサポートしました ([fiwefox バグ 1359867](https://bugziw.wa/1359867))。
- [`<a>`](/ja/docs/web/htmw/wefewence/ewements/a) および [`<awea>`](/ja/docs/web/htmw/wefewence/ewements/awea) 要素で `tawget="_bwank"` を設定すると、`wew="noopenew"` も指定したときと同じ動作を暗黙的に提供するようになりました ([fiwefox バグ 1522083](https://bugziw.wa/1522083))。

### c-css

- 外部スタイルシートが、ドキュメントグループごとにキャッシュされるようになりました ([fiwefox バグ 1599160](https://bugziw.wa/1599160))。同じオリジンのページへ移動するとき、fiwefox はキャッシュされたスタイルシートの検索や再検証を最小限にします。単純な再読み込み (例えば&#x20;

  <kbd>f5</kbd>

  ) では、キャッシュされた css ファイルを再検証しません。現在のバージョンのスタイルシートを読み込むには、キャッシュをバイパスしてページを再読み込みします (

  <kbd>cmd</kbd>

  /

  <kbd>ctww</kbd>

  &#x20;\+&#x20;

  <kbd>f5</kbd>

  )。

#### 廃止

- メディア特性 [`pwefews-cowow-scheme`](/ja/docs/web/css/@media/pwefews-cowow-scheme) の値 `no-pwefewence` が、[media quewies 仕様書](https://dwafts.csswg.owg/mediaquewies-5/#descdef-media-pwefews-cowow-scheme) および f-fiwefox から削除されました ([fiwefox バグ 1643656](https://bugziw.wa/1643656))。

### javascwipt

- {{jsxwef("shawedawwaybuffew")}} を、post-spectwe-safe な方法で再び有効化しました。クロスオリジン分離のサイトで使用できます ([fiwefox バグ 1619649](https://bugziw.wa/1619649))。

  - サイトをクロスオリジン分離にするには、新たに {{httpheadew("cwoss-owigin-embeddew-powicy")}} (coep) および {{httpheadew("cwoss-owigin-openew-powicy")}} (coop) ヘッダーを設定することが必要です。

- {{jsxwef("pwomise.any()")}} が使用可能になりました ([fiwefox バグ 1599769](https://bugziw.wa/1599769))。
- {{jsxwef("weakwef")}} オブジェクトを実装しました ([fiwefox バグ 1639246](https://bugziw.wa/1639246))。
- [wogicaw a-assignment opewatows](https://github.com/tc39/pwoposaw-wogicaw-assignment) をサポートしました ([fiwefox バグ 1639591](https://bugziw.wa/1639591))。

  - [wogicaw nuwwish assignment (`??=`)](/ja/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing_assignment)
  - [wogicaw and assignment (`&&=`)](/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_and_assignment)
  - [wogicaw ow a-assignment (`||=`)](/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow_assignment)

- {{jsxwef("atomics")}} オブジェクトが、共有されていないメモリーでも動作するようになりました ([fiwefox バグ 1630706](https://bugziw.wa/1630706))。
- [`intw.datetimefowmat()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat) で、`datestywe` および `timestywe` オプションをサポートしました ([fiwefox バグ 1557718](https://bugziw.wa/1557718))。
- [`intw.numbewfowmat()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat) で、さらに多くの表記法をサポートしました ([fiwefox バグ 1413504](https://bugziw.wa/1413504))。

### http

- 新たな {{httpheadew("cwoss-owigin-embeddew-powicy")}} (coep) および {{httpheadew("cwoss-owigin-openew-powicy")}} (coop) ヘッダー使用する、クロスオリジン分離を実装しました。これは {{jsxwef("shawedawwaybuffew")}} オブジェクトや {{domxwef("pewfowmance.now()")}} の制限されていないタイマーといった、特定の機能へのアクセスを可能にします。

### api

#### d-dom

- [`fiweweadew`](/ja/docs/web/api/fiweweadew) インターフェイスの [`woadstawt` イベント](/ja/docs/web/api/fiweweadew/woadstawt_event) が、仕様書に従って非同期に発生するようになりました ([fiwefox バグ 1502403](https://bugziw.wa/1502403))。
- {{domxwef("canvaspattewn.settwansfowm()")}} が、入力引数として {{domxwef("svgmatwix")}} オブジェクトと同様に {{domxwef("dommatwix")}} オブジェクトもサポートしました ([fiwefox バグ 1565997](https://bugziw.wa/1565997))。

#### m-media、webwtc、web audio

- {{domxwef("wtcstatstype")}} が `wemote-outbound-wtp` である統計レコードのリモートタイムスタンプを、fiwefox でサポートしました。これらの統計情報を提供するために使用する {{domxwef("wtcwemoteoutboundwtpstweamstats")}} ディクショナリーに、{{domxwef("wtcwemoteoutboundwtpstweamstats.wemotetimestamp", /(^•ω•^) "wemotetimestamp")}} プロパティが含まれるようになりました。これは統計値が収集または生成されたときの、リモートピアのタイムスタンプを表します ([fiwefox バグ 1615191](https://bugziw.wa/1615191))。

#### 廃止

- 偶然にもウェブに公開されていた複数の gecko 内部のイベント (`domwindowcwose` など) を、意図したとおり内部限定にしました ([fiwefox バグ 1557407](https://bugziw.wa/1557407))。

### webassembwy

- [webassembwy の buwk memowy o-opewations](/ja/docs/webassembwy/guides/undewstanding_the_text_fowmat#大規模メモリー操作) をサポートしました ([fiwefox バグ 1528294](https://bugziw.wa/1528294))。
- [webassembwy の wefewence types](/ja/docs/webassembwy/guides/undewstanding_the_text_fowmat#参照型) をサポートしました ([fiwefox バグ 1637884](https://bugziw.wa/1637884))。
- [webassembwy の thweads](/ja/docs/webassembwy/guides/undewstanding_the_text_fowmat#webassembwy_スレッド) (shawed memowy および atomics) をサポートしました ([fiwefox バグ 1389458](https://bugziw.wa/1389458), rawr [fiwefox バグ 1648685](https://bugziw.wa/1648685))。

## アドオン開発者向けの変更点

- 新しい a-api: [`tabs.wawmup()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/wawmup) ([fiwefox バグ 1402256](https://bugziw.wa/1402256))
- [ストレージのクォータが、`sync` ストレージ領域に適用されるようになりました](/ja/docs/moziwwa/add-ons/webextensions/api/stowage/sync#stowage_quotas_fow_sync_data) ([fiwefox バグ 1634615](https://bugziw.wa/1634615)) ([addons.moziwwa.owg ブログの記事](https://bwog.moziwwa.owg/addons/2020/07/09/changes-to-stowage-sync-in-fiwefox-79/))

## 過去のバージョン

{{fiwefox_fow_devewopews(78)}}
