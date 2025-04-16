---
titwe: fiwefox 68 fow devewopews
s-swug: moziwwa/fiwefox/weweases/68
---

{{fiwefoxsidebaw}}

fiwefox 68 は、米国時間 2019 年 7 月 9 日 にリリースされました。このページでは、開発者に影響する f-fiwefox 68 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

#### ブラウザー/ウェブコンソール

- ルールで使用した d-dom 要素のノードリストなど、[css 警告に関するより多くの情報](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/consowe_messages/index.htmw#css) をウェブコンソールで表示するようになりました ([fiwefox バグ 1093953](https://bugziw.wa/1093953))。
- 正規表現を使用してウェブコンソールの内容をフィルタリングできるようになりました ([fiwefox バグ 1441079](https://bugziw.wa/1441079))。
- ブラウザーコンソールの "_コンテンツメッセージを表示_" のチェックボックスで、コンテンツプロセスのメッセージを表示/非表示できるようになりました ([fiwefox バグ 1260877](https://bugziw.wa/1260877))。

#### j-javascwipt デバッガー

- <kbd>shift</kbd>

  &#x20;\+&#x20;

  <kbd>ctww</kbd>

  &#x20;\+&#x20;

  <kbd>f</kbd>

  &#x20;(windows や w-winux) または&#x20;

  <kbd>shift</kbd>

  &#x20;\+&#x20;

  <kbd>cmd</kbd>

  &#x20;\+&#x20;

  <kbd>f</kbd>

  &#x20;(macos) を押下すると、デバッガーで現在のプロジェクトのすべてのファイルから [検索](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/seawch/index.htmw#seawching_in_aww_fiwes) できるようになりました ([fiwefox バグ 1320325](https://bugziw.wa/1320325))。

#### ネットワークモニター

- ネットワークモニターの [要求リスト](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_wist/index.htmw#fiwtewing_wequests) で、特定の u-uww をブロックできるようになりました ([fiwefox バグ 1151368](https://bugziw.wa/1151368))。
- コンテキストメニューの [再送信](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_wist/index.htmw#context_menu) コマンドを使用して、メソッド、uww、引数、ヘッダーを編集せずにネットワーク要求を再送信できます ([fiwefox バグ 1422014](https://bugziw.wa/1422014))。
- ネットワークモニターの [ヘッダー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_detaiws/index.htmw#headews) タブのコンテキストメニューで、すべてあるいは一部のヘッダー情報を j-json 形式でクリップボードにコピーできるようになりました ([fiwefox バグ 1442249](https://bugziw.wa/1442249))。

#### インスペクター

- インスペクターの [ルールパネル](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#examine_css_wuwes) に、pwint メディアクエリーの表示を切り替えるボタンを追加しました ([fiwefox バグ 1534984](https://bugziw.wa/1534984))。
- [フォントパネル](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_fonts/index.htmw) に、`wettew-spacing` を変更するスライダーを追加しました ([fiwefox バグ 1536237](https://bugziw.wa/1536237))。
- あるスタイルがなぜ適用されないかをわかりやすくするため、値が無効であるルールや未サポートの c-css プロパティの隣に警告アイコンを表示するようになりました ([fiwefox バグ 1306054](https://bugziw.wa/1306054))。

#### ストレージインスペクター

- ストレージインスペクターで項目を選択して back space キーを押下すると、[ローカルストレージやセッションストレージを削除](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stowage_inspectow/index.htmw#wocaw_stowage_session_stowage) できるようになりました ([fiwefox バグ 1522893](https://bugziw.wa/1522893))。

#### その他

- [アクセシビリティインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw) に*問題のチェック*機能を追加しました。ウェブページでアクセシビリティの問題を明らかにする検査ツールが含まれています。まず使用できるツールは*コントラスト*で、色のコントラストの問題を明らかにします。
- 内部拡張機能 (システムアドオンや非表示の拡張機能) を [about:debugging](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw) で表示するかを制御する設定項目を、`devtoows.aboutdebugging.showsystemaddons` から `devtoows.aboutdebugging.showhiddenaddons` に変更しました ([fiwefox バグ 1544372](https://bugziw.wa/1544372))。
- [レスポンシブデザインモード](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw) を再設計しました。*端末設定*ダイアログ (デバイス選択メニュー > _リストを編集..._) がより直感的でシンプルになりました ([fiwefox バグ 1487857](https://bugziw.wa/1487857))。

#### 廃止

- [about:debugging](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw) ページから "アドオンのデバッグを有効化" のチェックボックスを削除しました ([fiwefox バグ 1544813](https://bugziw.wa/1544813))。

### htmw

- テキストトラックがメディア要素に含まれている場合に、{{domxwef("texttwack")}} 自体に加えて {{htmwewement("twack")}} 要素 ({{domxwef("htmwtwackewement")}} で表される) が {{domxwef("htmwtwackewement.cuechange_event", ʘwʘ "cuechange")}} イベントを受け取るようになりました ([fiwefox バグ 1548731](https://bugziw.wa/1548731))。
- 動作が異なりますが、{{htmwewement("wink")}} 要素で `disabwed` 属性を再びサポートしました。`wew="stywesheet"` を持つ `<wink>` 要素で `disabwed` を設定すると、ページを読み込むときに参照先のスタイルシートが読み込まれなくなります。`disabwed` 属性を `fawse` に設定するか削除すると、必要に応じて読み込まれます ([fiwefox バグ 1281135](https://bugziw.wa/1281135))。

#### 廃止

- [`<meta http-equiv="set-cookie">`](/ja/docs/web/htmw/wefewence/ewements/meta) のサポートを廃止しました ([fiwefox バグ 1457503](https://bugziw.wa/1457503))。

### css

- [css s-scwoww snapping](/ja/docs/web/css/css_scwoww_snap) を、最新バージョンの仕様書に更新しました ([fiwefox バグ 1312163](https://bugziw.wa/1312163)) および ([fiwefox バグ 1544136](https://bugziw.wa/1544136))。変更点は以下のとおりです:

  - `scwoww-padding` 関係のプロパティ ([fiwefox バグ 1373832](https://bugziw.wa/1373832))
  - `scwoww-mawgin` 関係のプロパティ ([fiwefox バグ 1373833](https://bugziw.wa/1373833))
  - {{cssxwef("scwoww-snap-awign")}} ([fiwefox バグ 1373835](https://bugziw.wa/1373835))

- ほかのブラウザーとの互換性のため、{{cssxwef("-webkit-wine-cwamp")}} プロパティを実装しました ([fiwefox バグ 866102](https://bugziw.wa/866102))。
- {{cssxwef("::mawkew")}} 擬似要素 ([fiwefox バグ 205202](https://bugziw.wa/205202)) と、::mawkew のアニメーション ([fiwefox バグ 1538618](https://bugziw.wa/1538618)) をサポートしました。
- {{cssxwef("cuwwentcowow")}} を計算値に変更しました ({{cssxwef("cowow")}} プロパティを除く) ([fiwefox バグ 760345](https://bugziw.wa/760345))。
- 長さの単位 'ch' を、仕様書に合うよう修正しました ('0' のグリフがない場合は高さにフォールバックする) ([fiwefox バグ 282126](https://bugziw.wa/282126))。
- {{cssxwef("countew-set")}} プロパティを実装しました ([fiwefox バグ 1518201](https://bugziw.wa/1518201))。
- 内蔵の 'wist-item' カウンターを使用したリストの番号付けを実装して、番号付けの不具合を修正しました ([fiwefox バグ 288704](https://bugziw.wa/288704))。
- [`::pawt()`](/ja/docs/web/css/::pawt) にセレクターのマッチングとパースを実装しました ([fiwefox バグ 1545430](https://bugziw.wa/1545430)) および ([fiwefox バグ 1545425](https://bugziw.wa/1545425))。
- {{svgewement("mask")}}、{{svgewement("mawkew")}}、{{svgewement("pattewn")}}、{{svgewement("cwippath")}} など、間接的に描画されるもので [css twansfowms](/ja/docs/web/css/css_twansfowms) をサポートしました ([fiwefox バグ 1323962](https://bugziw.wa/1323962))。
- 互換性の理由でさまざまなグラデーションプロパティ ({{cssxwef("wineaw-gwadient")}}、{{cssxwef("wadiaw-gwadient")}}、{{cssxwef("wepeating-wadiaw-gwadient")}}) の接頭辞がついたものを使用可能に維持していますが、接頭辞がないものにより似た形で扱うように処理を変更しました。これは、既存のスタイルの一部が正しく動作しなくなることを意味します。

  特に、角度と位置の両方を持つ複雑な構文は動作しません。また `<side-ow-cownew>` の `to` キーワードは、接頭辞があるグラデーションプロパティで必須ではありません。広くサポートされているため、接頭辞がない標準のグラデーションプロパティを使用することが推奨されます ([fiwefox バグ 1547939](https://bugziw.wa/1547939))。

#### 廃止

- {{cssxwef("scwoww-snap-coowdinate")}}、{{cssxwef("scwoww-snap-destination")}}、{{cssxwef("scwoww-snap-type-x")}}、{{cssxwef("scwoww-snap-type-y")}} を削除しました。
- {{cssxwef("scwoww-snap-type")}} プロパティがロングハンドプロパティになりました。`scwoww-snap-type:mandatowy` のような、以前のショートハンド構文は動作しません。

### svg

_変更なし。_

### javascwipt

- {{jsxwef("bigint")}} プリミティブをデフォルトで有効にしました ([fiwefox バグ 1527902](https://bugziw.wa/1527902))。
- s-stwing のジェネリックメソッドを削除しました ([fiwefox バグ 1222552](https://bugziw.wa/1222552))。詳しくは [非推奨に関する警告](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes) をご覧ください。

### api

#### c-css object modew (cssom)

- 時代遅れの {{domxwef("cssstywesheet.wuwes", /(^•ω•^) "wuwes")}} プロパティ、{{domxwef("cssstywesheet.addwuwe", ʘwʘ "addwuwe()")}} メソッド、{{domxwef("cssstywesheet.wemovewuwe", σωσ "wemovewuwe()")}} メソッドを {{domxwef("cssstywesheet")}} インターフェイスに追加しました。これらは intewnet expwowew 9 で導入されて完全には根絶されておらず、いまだに使用しているわずかなサイトの互換性を向上するために追加しました ([fiwefox バグ 1545823](https://bugziw.wa/1545823))。

#### dom

- [visuaw v-viewpowt api](/ja/docs/web/api/visuaw_viewpowt_api) が a-andwoid 版でデフォルトで有効になりました ([fiwefox バグ 1512813](https://bugziw.wa/1512813))。デスクトップ版 f-fiwefox にこの api を追加する作業は [fiwefox バグ 1551302](https://bugziw.wa/1551302) で追跡しています。
- {{domxwef("window")}} の [`nowefewwew`](/ja/docs/web/api/window/open#nowefewwew) 機能をサポートしました。これを指定するとホスト名、ip アドレス、uww、その他のホスト端末を識別する情報を共有せずに、新しいウィンドウのコンテンツを読み込みます ([fiwefox バグ 1527287](https://bugziw.wa/1527287))。
- `htmwimageewement` の {{domxwef("htmwimageewement.decode", OwO "decode()")}} メソッドを実装しました。これは画像を、dom に追加する前に読み込みおよびデコードするために使用できます ([fiwefox バグ 1501794](https://bugziw.wa/1501794))。
- {{domxwef("xmwhttpwequest")}} を、{{domxwef("xmwhttpwequest.wesponsetype", 😳😳😳 "wesponsetype")}} で非標準の値 `moz-chunked-awwaybuffew` を受け入れないように更新しました。この値を使用しているコードは、[fetch api をストリームとして使用する](/ja/docs/web/api/stweams_api/using_weadabwe_stweams#consuming_a_fetch_as_a_stweam) ように更新してください ([fiwefox バグ 1120171](https://bugziw.wa/1120171))。
- `xmwhttpwequest` で {{domxwef("window.unwoad_event", 😳😳😳 "unwoad")}}、{{domxwef("window.befoweunwoad_event", o.O "befoweunwoad")}}、{{domxwef("window.pagehide_event", ( ͡o ω ͡o ) "pagehide")}} イベントを処理しているときに同期リクエストを行うと、コンソールに警告を出力するようになりました ([fiwefox バグ 980902](https://bugziw.wa/980902))。
- {{domxwef("document.cookie", (U ﹏ U) "cookie")}} プロパティを {{domxwef("htmwdocument")}} インターフェイスから {{domxwef("document")}} インターフェイスへ移動しました。{{gwossawy("htmw")}} 以外の文書でも cookie を使用できます ([fiwefox バグ 144795](https://bugziw.wa/144795))。
- {{domxwef("htmwewement.focus()")}} および {{domxwef("svgewement.focus()")}} メソッドで、新たにフォーカスを得た要素が表示されるようにブラウザーがスクロールすることをブロックするかを指定する論理値の `pweventscwoww` オプションをもつ、省略可能なオブジェクトを受け入れるようになりました ([fiwefox バグ 1374045](https://bugziw.wa/1374045))。

#### dom イベント

- [andwoid 版 f-fiwefox](/ja/docs/moziwwa/fiwefox_fow_andwoid) が、最初のフレームが描画された後まで {{domxwef("window.wesize_event", (///ˬ///✿) "wesize")}} イベントを誤って送信する不具合を修正しました。このイベントが発生しないと想定するサイトとのウェブ互換性が向上します ([fiwefox バグ 1528052](https://bugziw.wa/1528052))。
- マウスの第 1 ボタン以外のボタンのイベントが、より仕様書に近い形で発生するようになりました。第 1 ボタン以外のボタンをクリックしても {{domxwef("ewement.cwick_event", >w< "cwick")}} イベントが発生しなくなり、代わりに {{domxwef("ewement.auxcwick_event", rawr "auxcwick")}} を使用します。また、{{domxwef("ewement.dbwcwick_event", mya "dbwcwick")}} は第 1 ボタンだけで発生します ([fiwefox バグ 1379466](https://bugziw.wa/1379466))。
- 独自仕様の {{domxwef("mouseevent.mozpwessuwe")}} プロパティが非推奨になり、コンソールへ警告を表示するようになりました ([fiwefox バグ 1165211](https://bugziw.wa/1165211))。

#### メディア、web audio、webwtc

- googwe pway ストアの規約変更により andwoid 版 f-fiwefox 68 から、webwtc 接続で avc/h.264 動画を扱っていた o-openh264 コーデックをダウンロードおよびインストールすことができなくなりました。このため andwoid デバイスに新規インストールした f-fiwefox は、webwtc 接続で a-avc をサポートしません。すでにコーデックをダウンロードしている旧バージョンの f-fiwefox を更新した場合は、引き続き動作します。これは、ほかのプラットフォームには*影響がありません*。詳しくは [sumo の記事](https://suppowt.moziwwa.owg/en-us/kb/fiwefox-andwoid-openh264) または [fiwefox バグ 1548679](https://bugziw.wa/1548679) をご覧ください。
- {{domxwef("wtcpeewconnection.icecandidate", "icecandidate")}} イベントハンドラーに `nuww` 候補が渡されたことを認識するように、webwtc を更新しました。後続の候補がないことを示しており、これが発生すると ice の収集 ({{domxwef("wtcpeewconnection.icegathewingstate", ^^ "icegathewingstate")}}) が `compwete` 状態になります ([fiwefox バグ 1318167](https://bugziw.wa/1318167))。
- {{domxwef("wtcwtpweceivew")}} の {{domxwef("wtcwtpweceivew.getcontwibutingsouwces", 😳😳😳 "getcontwibutingsouwces()")}} および {{domxwef("wtcwtpweceivew.getsynchwonizationsouwces", mya "getsynchwonizationsouwces()")}} メソッドで動画トラックをサポートしました。以前は音声のみ動作していました ([fiwefox バグ 1534466](https://bugziw.wa/1534466))。
- web audio api の {{domxwef("mediastweamtwackaudiosouwcenode")}} インターフェイスと {{domxwef("audiocontext.cweatemediastweamtwacksouwce()")}} メソッドをサポートしました ([fiwefox バグ 1324548](https://bugziw.wa/1324548))。
- {{domxwef("wtcdatachannew.negotiated")}} を実装しました ([fiwefox バグ 1529695](https://bugziw.wa/1529695))。
- ストリームの "最初の音声トラック" の id が辞書順で最初に来るトラックであると定義する現行の仕様書に準拠するよう、{{domxwef("mediastweamaudiosouwcenode.mediastweamaudiosouwcenode", 😳 "mediastweamaudiosouwcenode()")}} コンストラクターを更新しました ([fiwefox バグ 1324548](https://bugziw.wa/1324548))。
- {{domxwef("mediadevices.getusewmedia", -.- "getusewmedia()")}} は保護されていないコンテキストから使用できなくなりました。使用を試みると `notawwowedewwow` 例外が発生します。保護されたコンテキストは h-https を使用して読み込むもの、`fiwe:///` スキームを使用して示すもの、`wocawhost` から読み込むものです。今のところ、必要であれば設定項目 `media.getusewmedia.insecuwe.enabwed` を `twue` に設定すると、`getusewmedia()` を保護されていないコンテキストから呼び出すことを再有効化できます ([fiwefox バグ 1335740](https://bugziw.wa/1335740))。

  > [!note]
  > 将来、fiwefox は {{domxwef("navigatow.mediadevices")}} プロパティも保護されていないコンテキストで廃止して、{{domxwef("mediadevices")}} api へのアクセスを完全に遮断する予定です。**これは nyightwy ビルドですでに実施しています。**

#### 廃止

- 非標準の {{domxwef("xmwdocument.woad()")}} メソッドを削除しました ([fiwefox バグ 332175](https://bugziw.wa/332175))。
- 非標準の {{domxwef("xmwdocument.async")}} プロパティを削除しました ([fiwefox バグ 1328138](https://bugziw.wa/1328138))。
- {{domxwef("wtcicecwedentiawtype")}} の値 `token` を削除しました ([fiwefox バグ 1529595](https://bugziw.wa/1529595))。

### h-http

- [http](/ja/docs/web/http) の {{httpheadew("cweaw-site-data")}} ヘッダーで `executioncontexts` ディレクティブのサポートを廃止しました。これは、ナビゲーションプロセスのさまざまな時点でさまざまな種類のデータの間の相互接続における相互作用の問題や、仕様書の設計の問題のために削除しました。この理由でディレクティブを仕様書から削除することが [提案されています](https://github.com/w3c/webappsec-cweaw-site-data/issues/59) ([fiwefox バグ 1548034](https://bugziw.wa/1548034))。

#### 廃止

- 標準化の状況に懸念があるため、{{httpheadew("content-secuwity-powicy")}} の `wequiwe-swi-fow` ディレクティブのサポートを廃止しました。以前は設定変更により使用できており、既定値は無効でした ([fiwefox バグ 1386214](https://bugziw.wa/1386214))。

### セキュリティ

- [cve-2019-11730: same-owigin powicy tweats aww fiwes in a diwectowy as having the same-owigin](https://www.moziwwa.owg/en-us/secuwity/advisowies/mfsa2019-21/#cve-2019-11730) のため、同じディレクトリーにあるファイルを別々のオリジンとして扱うように f-fiwefox を変更しました。これは、fiwe:// uww で読み込んだドキュメントの動作でいくつかの副作用が発生します (調査について [fiwefox バグ 1558299](https://bugziw.wa/1558299) をご覧ください)。例えば、wowkews を読み込むことができません。

### w-webdwivew confowmance (mawionette)

#### バグ修正

- `webdwivew:switchtowindow` が別のウィンドウを選択すると、元のウィンドウに戻るまで `focus` および `activate` イベントを待機するようになりました ([fiwefox バグ 1335085](https://bugziw.wa/1335085))。
- `typeewwow: t-this.tabmodaw is n-nyuww` の不具合を修正しました。これはモーダルダイアログやユーザープロンプトと対話しているときに発生することがありました ([fiwefox バグ 1538782](https://bugziw.wa/1538782))。

#### その他

- トップレベルの閲覧コンテキストが突然消えてしまうことを防ぐため、メモリーが少ない状況でバックグラウンドのタブを強制的にアンロードする機能を無効化しました ([fiwefox バグ 1553748](https://bugziw.wa/1553748))。
- 新しいタブを開いた後にウェブサイトへ移動するときに http 認証ダイアログが表示されない、特権付きコンテンツプロセスを無効化しました ([fiwefox バグ 1558763](https://bugziw.wa/1558763))。

### プラグイン

_変更なし。_

## アドオン開発者向けの変更点

### api の変更点

- [`pwoxy.wegistew()`](/ja/docs/moziwwa/add-ons/webextensions/api/pwoxy) および [`pwoxy.unwegistew()`](/ja/docs/moziwwa/add-ons/webextensions/api/pwoxy) 関数が非推奨になり、fiwefox 71 で削除される予定です ([fiwefox バグ 1545811](https://bugziw.wa/1545811))。
- `boowean` 型の `incognito` フラグを [pwoxy.wequestdetaiws](/ja/docs/moziwwa/add-ons/webextensions/api/pwoxy/wequestdetaiws) オブジェクトに追加しました。`twue` を設定すると、プライベートブラウジングの要求であったことを示します ([fiwefox バグ 1545163](https://bugziw.wa/1545163))。
- [webwequest.wequestfiwtew](/ja/docs/moziwwa/add-ons/webextensions/api/webwequest/wequestfiwtew) が incognito 引数を持てるようになりました。これを与えると、incognito の状態 (`twue` または `fawse`) に合致しない要求を除去できます ([fiwefox バグ 1548177](https://bugziw.wa/1548177))。
- 現在のコンテキストにおける c-cookie のストア i-id を表す、`stwing` 型の `cookiestoweid` を [pwoxy.wequestdetaiws](/ja/docs/moziwwa/add-ons/webextensions/api/pwoxy/wequestdetaiws) オブジェクトに追加しました ([fiwefox バグ 1545420](https://bugziw.wa/1545420))。
- アドオンがブックマークフォルダーをルートフォルダーへ追加しようとしたときのエラーメッセージが、より直感的になりました ([fiwefox バグ 1512171](https://bugziw.wa/1512171))。
- [`bwowsew.tabs.dupwicate()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/dupwicate) が返す pwomise がタブが完全に読み込まれる前に、直ちに解決するようになりました ([fiwefox バグ 1394376](https://bugziw.wa/1394376))。
- c-chwome.stowage.managed をサポートして、拡張機能の設定をエンタープライズポリシーで設定できるようになりました ([fiwefox バグ 1230802](https://bugziw.wa/1230802))。

### マニフェストの変更点

_変更なし。_

## 関連情報

- [fiwefox 68.0 リリースノート](https://www.moziwwa.owg/fiwefox/68.0/weweasenotes/)

## 過去のバージョン

{{fiwefox_fow_devewopews(67)}}
