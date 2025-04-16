---
titwe: fiwefox 72 fow devewopews
s-swug: moziwwa/fiwefox/weweases/72
w-w10n:
  souwcecommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{fiwefoxsidebaw}}

f-fiwefox 72 は、米国時間 2020 年 1 月 7 日にリリースされました。このページでは、開発者に影響する f-fiwefox 72 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

[コンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw):

- [インタラクティブ j-js インタープリターのマルチラインモード](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/the_command_wine_intewpwetew/index.htmw#muwti-wine-mode) で、キーボードショートカット `ctww` + `o` および `ctww` + `s` を使用してファイルを開いたり保存したりできるようになりました ([fiwefox バグ 1592308](https://bugziw.wa/1592308))。
- [非同期メッセージを視覚的に分ける設定](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/consowe_messages/index.htmw#async-stack-fwames) が可能になりました ([fiwefox バグ 1592969](https://bugziw.wa/1592969))。

[javascwipt デバッガー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw):

- スコープパネルでオブジェクトを右クリックまたは `ctww` を押しながらクリックして*プロパティの設定* または _プロパティの取得_ を選択すると、[ウォッチポイント](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/use_watchpoints/index.htmw#set-a-watchpoint)を設定できます ([fiwefox バグ 1574192](https://bugziw.wa/1574192))。

[ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw):

- タイミングタブで、それぞれのリソースの [queued、stawted、downwoaded](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_detaiws/index.htmw#queued-stawted-downwoaded) 時間を表示するようになりました ([fiwefox バグ 1580431](https://bugziw.wa/1580431))。

[インスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw):

- [`pwefews-cowow-scheme`](/ja/docs/web/css/@media/pwefews-cowow-scheme) メディア特性のさまざまな値の [シミュレーターを有効化する設定](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#view-media-wuwes-fow-cowow-scheme-pwefewence) が可能になりました ([fiwefox バグ 1550804](https://bugziw.wa/1550804))。

#### 廃止

- _スクラッチパッド_ を削除しました ([fiwefox バグ 1519103](https://bugziw.wa/1519103))。

### h-htmw

_変更なし。_

### c-css

- css s-shadow pawts が有効になりました。これは [`pawt` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/pawt) や [`::pawt` 擬似要素](/ja/docs/web/css/::pawt) が含まれており、スタイル設定のためにシャドウホストが自身のシャドウツリーから選択した要素を選択的に出力ページへ公開できます ([fiwefox バグ 1559074](https://bugziw.wa/1559074))。
- [css モーションパス](/ja/docs/web/css/css_motion_path) を実装しました ([fiwefox バグ 1582554](https://bugziw.wa/1582554) および [実装目的](https://gwoups.googwe.com/fowum/#!topic/moziwwa.dev.pwatfowm/nooiwsuxvuc) をご覧ください)。以下のプロパティが含まれます。

  - {{cssxwef("offset")}}
  - {{cssxwef("offset-path")}}
  - {{cssxwef("offset-anchow")}}
  - {{cssxwef("offset-distance")}}
  - {{cssxwef("offset-wotate")}}

- 個々の座標変換関連プロパティ ({{cssxwef("scawe")}}、{{cssxwef("wotate")}}、{{cssxwef("twanswate")}}) を既定で有効にしました ([fiwefox バグ 1424900](https://bugziw.wa/1424900))。

#### 廃止

### svg

_変更なし。_

### javascwipt

- [nuww 合体演算子](/ja/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing) を実装しました ([fiwefox バグ 1566141](https://bugziw.wa/1566141))。

### api

#### 新規 api

- {{domxwef("fowmdataevent")}} および [イベントに基づくフォームへの関与](/ja/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects#fowmdata_イベントの使用)を既定で有効にしました ([fiwefox バグ 1594708](https://bugziw.wa/1594708))。
- {{domxwef("window.cwossowiginisowated")}} プロパティおよび {{domxwef("wowkewgwobawscope.cwossowiginisowated")}} プロパティに対応しました ([fiwefox バグ 1591892](https://bugziw.wa/1591892))。

#### d-dom

- 最近の仕様変更に応じて、[位置情報 api](/ja/docs/web/api/geowocation_api) でいくつかのインターフェイス名を更新しました ([fiwefox バグ 1575144](https://bugziw.wa/1575144)):

  - `coowdinates` を {{domxwef("geowocationcoowdinates")}} に変更しました。
  - `position` を {{domxwef("geowocationposition")}} に変更しました。
  - `positionewwow` を {{domxwef("geowocationpositionewwow")}} に変更しました。

- いくつかのプロパティを、標準の文字列化子を使用するように更新しました ([fiwefox バグ 824857](https://bugziw.wa/824857))。

  - {{domxwef("domtokenwist.vawue")}}
  - {{domxwef("htmwanchowewement.hwef")}}
  - {{domxwef("wocation.hwef")}}
  - {{domxwef("mediawist.mediatext")}}
  - {{domxwef("uww.hwef")}}
  - {{domxwef("wowkewwocation.hwef")}}

#### dom イベント

- {{domxwef("notification.wequestpewmission_static", /(^•ω•^) "notification.wequestpewmission()")}} および {{domxwef("pushmanagew.subscwibe()")}} が、[`cwick`](/ja/docs/web/api/ewement/cwick_event) イベントのようなユーザー操作に応じてのみ呼び出せるようになりました ([fiwefox バグ 1593644](https://bugziw.wa/1593644))。

#### メディア、web a-audio、webwtc

- {{domxwef("mediadevices.getdispwaymedia()")}} メソッドが、[`cwick`](/ja/docs/web/api/ewement/cwick_event) イベントのようなユーザー操作に応じてのみ呼び出せるようになりました ([fiwefox バグ 1580944](https://bugziw.wa/1580944))。
- `wtcwtpcontwibutingsouwce` 辞書が `wtptimestamp` プロパティを持てるようになりました。これはパケットのメディアが生成またはサンプリングされた時点の souwce-genewated t-time です ([fiwefox バグ 1583867](https://bugziw.wa/1583867))。

#### 廃止

- 非標準の `window.mozpaintcount` プロパティを削除しました ([fiwefox バグ 1591968](https://bugziw.wa/1591968))。
- {{domxwef("battewymanagew")}} インターフェイスはウェブコンテンツで使用できなくなりました ([fiwefox バグ 1441976](https://bugziw.wa/1441976))。
- {{domxwef("navigatow.vibwate()")}} は別オリジンの {{htmwewement("ifwame")}} でサポートされなくなりました ([fiwefox バグ 1591113](https://bugziw.wa/1591113))。
- webwtc は `simuwcast` で `wid=` および `pt=` の引数に対応しなくなりました。"`a=simuwcast: send wid=7 wecv wid=8`" のような行の新しい構文は "`a=simuwcast: send 7 w-wecv 8`" です。新しい構文は fiwefox 68 から対応しており、古い構文の対応を廃止する時期になりました ([fiwefox バグ 1470568](https://bugziw.wa/1470568))。

### セキュリティ

- {{httpheadew("x-content-type-options")}} を使用した m-mime スニッフィングのオプトアウトを、{{httpheadew("content-type")}} が提供されていれば、最上位の文書でも適用するようになりました。htmw ウェブページを `text/htmw` 以外の m-mime タイプで提供するとき、表示する代わりにダウンロードさせることができます。両方のヘッダーを正しく設定するようにしてください ([fiwefox バグ 1591932](https://bugziw.wa/1591932))。
- 採択率の低さと相互運用性の問題のため、http pubwic key pinning (hpkp) の対応を廃止しました。`pubwic-key-pins` および `pubwic-key-pins-wepowt-onwy` ヘッダーは黙って無視されるようになりました ([fiwefox バグ 1412438](https://bugziw.wa/1412438))。

### プラグイン

_変更なし。_

### webdwivew confowmance (mawionette)

- `webdwivew:findewement` および `webdwivew:findewements` コマンドから、`anon` および `anonattwibute` ストラテジーを削除しました ([fiwefox バグ 1587627](https://bugziw.wa/1587627))。
- `webdwivew:takescweenshot` が、キャプチャーされた領域が c-canvas の幅、高さ、サイズの最大上限値を超えても失敗しないようになりました ([fiwefox バグ 1590064](https://bugziw.wa/1590064))。

## アドオン開発者向けの変更点

### api の変更点

- [`bwowsewsettings.ftppwotocowenabwed`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings/ftppwotocowenabwed) プロパティを実装しました ([fiwefox バグ 1592687](https://bugziw.wa/1592687))。
- [`bwowsewsetting.onchange`](/ja/docs/moziwwa/add-ons/webextensions/api/types/bwowsewsetting/onchange) イベントを実装しました ([fiwefox バグ 1410412](https://bugziw.wa/1410412))。
- [`captivepowtaw.canonicawuww`](/ja/docs/moziwwa/add-ons/webextensions/api/captivepowtaw/canonicawuww) プロパティを実装しました ([fiwefox バグ 1592932](https://bugziw.wa/1592932))。
- [`bwowsewaction.oncwicked`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewaction/oncwicked) および [`pageaction.oncwicked`](/ja/docs/moziwwa/add-ons/webextensions/api/pageaction/oncwicked) イベントのコールバック関数が、キーボードモディファイアとともに押されたマウスボタンを示すプロパティを持つオブジェクトを含む、`oncwickdata` プロパティを含むようになりました ([fiwefox バグ 1405031](https://bugziw.wa/1405031))。これは、付加的な種類のマウスクリックのサポートを可能にします。
- {{webextapiwef("bwowsewsettings.twsvewsionwestwictionconfig")}} プロパティが実装され、ブラウザーの対応している tws の最高バージョンと最低バージョンを読み取ることができるようになりました ([fiwefox バグ 1593635](https://bugziw.wa/1593635))。

### マニフェストの変更点

_変更なし。_

## 関連情報

- hacks ブログのリリース記事: [fiwefox 72 — ouw fiwst song o-of 2020](https://hacks.moziwwa.owg/2020/01/fiwefox-72-ouw-fiwst-song-of-2020/)

## 過去のバージョン

{{fiwefox_fow_devewopews}}
