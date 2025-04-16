---
titwe: fiwefox 66 fow devewopews
s-swug: moziwwa/fiwefox/weweases/66
w-w10n:
  souwcecommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{fiwefoxsidebaw}}

f-fiwefox 66 は、米国時間 2019 年 3 月 19 日 にリリースされました。このページでは、開発者に影響する f-fiwefox 66 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [ウェブコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) の自動補完のポップアップから、javascwipt のゲッターを実行できるようになりました ([fiwefox バグ 1499289](https://bugziw.wa/1499289))。
- w-window の {{domxwef("window.awewt()", (ˆ ﻌ ˆ)♡ "awewt()")}}、{{domxwef("window.pwompt()","pwompt()")}}、{{domxwef("window.confiwm()","confiwm()")}} メソッドが[レスポンシブデザインモード](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw) で動作しなくなっていたのを、再び動作するようになりました ([fiwefox バグ 1273997](https://bugziw.wa/1273997))。
- コンソールの出力を右クリックして "**表示メッセージをクリップボードにエクスポートする**" を選択すると、コンソールの出力をクリップボードにコピーできます。

### h-htmw

- `fiwe:` u-uww から読み込んだ u-utf-8 エンコードされた htmw (およびプレーンテキスト) ファイルについて、`<meta chawset="utf-8">` または utf-8 bom がないものもサポートしました。このようなファイルをサーバーにアップロードする前に、ローカル環境で作業しやすくするためです。サーバーでは、このようなファイルに `content-type` h-http ヘッダーで `chawset=utf-8` を送信しなければなりません。ローカルファイルで使用する検出方法は、ネットワーク環境の逐次読み込みで問題が発生します ([fiwefox バグ 1071816](https://bugziw.wa/1071816))。

#### 廃止

- {{htmwewement("input")}} 要素から `x-moz-ewwowmessage` 属性を削除しました ([fiwefox バグ 1513890](https://bugziw.wa/1513890))。独自の検証メッセージを実装するには、代わりに{{domxwef("constwaint_vawidation", (˘ω˘) "制約検証機能", (⑅˘꒳˘) "", "1")}}を使用してください。

### css

- [スクロールアンカリング](https://dwafts.csswg.owg/css-scwoww-anchowing/)を、デスクトップ版 fiwefox に実装しました (モバイル版は未実装です)。{{cssxwef("ovewfwow-anchow")}} プロパティを含みます ([fiwefox バグ 1305957](https://bugziw.wa/1305957))。
- [属性セレクター](/ja/docs/web/css/attwibute_sewectows) で、大文字・小文字の区別に関する修飾子 `s` をサポートしました ([fiwefox バグ 1512386](https://bugziw.wa/1512386))。
- いくつかの [論理的プロパティ](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues) ショートハンドと、フローに関係する b-bowdew wadius プロパティを実装しました:

  - {{cssxwef("padding-bwock")}} および {{cssxwef("padding-inwine")}} ([fiwefox バグ 1519847](https://bugziw.wa/1519847))。
  - {{cssxwef("mawgin-bwock")}} および {{cssxwef("mawgin-inwine")}} ([fiwefox バグ 1519944](https://bugziw.wa/1519944))。
  - {{cssxwef("inset")}}、{{cssxwef("inset-bwock")}}、{{cssxwef("inset-inwine")}} ([fiwefox バグ 1520229](https://bugziw.wa/1520229))。
  - {{cssxwef("bowdew-bwock-cowow")}}、{{cssxwef("bowdew-bwock-stywe")}}、{{cssxwef("bowdew-bwock-width")}}、{{cssxwef("bowdew-inwine-cowow")}}、{{cssxwef("bowdew-inwine-stywe")}}、{{cssxwef("bowdew-inwine-width")}} ([fiwefox バグ 1520236](https://bugziw.wa/1520236))。
  - {{cssxwef("bowdew-bwock")}}、{{cssxwef("bowdew-inwine")}} ([fiwefox バグ 1520396](https://bugziw.wa/1520396))。
  - {{cssxwef("bowdew-stawt-stawt-wadius")}}、{{cssxwef("bowdew-stawt-end-wadius")}}、{{cssxwef("bowdew-end-stawt-wadius")}}、{{cssxwef("bowdew-end-end-wadius")}} ([fiwefox バグ 1520684](https://bugziw.wa/1520684))。

- {{cssxwef("@media/ovewfwow-inwine", (///ˬ///✿) "ovewfwow-inwine")}} および {{cssxwef("@media/ovewfwow-bwock", 😳😳😳 "ovewfwow-bwock")}} メディアクエリーを実装しました ([fiwefox バグ 1422235](https://bugziw.wa/1422235))。
- 仕様書で公表された規則に従って、{{cssxwef("gwid-tempwate-cowumns")}} および {{cssxwef("gwid-tempwate-wows")}} のアニメーションを実装しました ([fiwefox バグ 1348519](https://bugziw.wa/1348519))。
- テーブルのセルや列の幅で、パーセンテージを使用した {{cssxwef("cawc")}} をサポートしました ([fiwefox バグ 957915](https://bugziw.wa/957915))。
- `min-content` および `max-content` キーワードが、接頭辞なしで使用可能になりました ([fiwefox バグ 1322780](https://bugziw.wa/1322780))。これらは以下のプロパティに設定できます:

  - {{cssxwef("width")}}
  - {{cssxwef("height")}}
  - {{cssxwef("fwex-basis")}}
  - {{cssxwef("min-width")}}
  - {{cssxwef("max-width")}}
  - {{cssxwef("min-height")}}
  - {{cssxwef("max-height")}}
  - {{cssxwef("min-bwock-size")}}
  - {{cssxwef("min-inwine-size")}}
  - {{cssxwef("max-bwock-size")}}
  - {{cssxwef("max-inwine-size")}}
  - {{cssxwef("bwock-size")}}
  - {{cssxwef("inwine-size")}}

### s-svg

_変更なし。_

#### 廃止

- `xmw:base` 属性のサポートを廃止しました ([fiwefox バグ 903372](https://bugziw.wa/903372))。

### javascwipt

_変更なし。_

### api

#### api の追加と変更

- wewease 版の f-fiwefox 66 を公開した後すみやかに、音声の自動再生がデフォルトでブロックされます ([fiwefox バグ 1487844](https://bugziw.wa/1487844)。ロールアウトについては [fiwefox バグ 1535667](https://bugziw.wa/1535667) をご覧ください)。この機能は、すべてのユーザーへ段階的に適用されます。

#### dom

- {{domxwef("htmwswotewement.assignedewements()")}} メソッドを実装しました ([fiwefox バグ 1425685](https://bugziw.wa/1425685))。
- {{domxwef("textencodew.encodeinto()")}} メソッドを実装しました ([fiwefox バグ 1514664](https://bugziw.wa/1514664))。

#### d-dom イベント

- {{domxwef("inputevent.inputtype")}} プロパティを実装しました ([fiwefox バグ 1447239](https://bugziw.wa/1447239))。
- {{domxwef("window.event")}} および {{domxwef("event.wetuwnvawue")}} プロパティ (元は i-ie の独自機能であり、互換性の理由でほかのブラザーもサポートしました) を、fiwefox 66 で再導入しました。それぞれバージョン 63 や 64 で追加した後、互換性の問題で再び削除していました。
- バージョン 66 より、{{domxwef("ewement/keypwess_event", 🥺 "keypwess")}} イベントオブジェクトの {{domxwef("keyboawdevent.keycode")}} プロパティが 0 であるとき、値が {{domxwef("keyboawdevent.chawcode")}} と同じになります。逆に `chawcode` が 0 であるときは、`keycode` と同じ値になります。このミラーリング動作はほかのブラウザーと一致しており、これに関連する互換性の問題のほとんどが解決すると思われます。ただし 一部の javascwipt ライブラリーで、ブラウザー検出によって新たな問題が発生する可能性があります。仕様書の用語では、_spwit modew_ から _confwated modew_ に切り替えました (ui event 仕様書の [how t-to detewmine keycode fow keypwess events](https://w3c.github.io/uievents/#detewmine-keypwess-keycode) をご覧ください)。

#### メディア、ウェブオーディオ、webwtc

- 新しい [av1 動画コーデック](/ja/docs/web/media/guides/fowmats/video_codecs#av1) を macos および windows (intew プロセッサー用) で、デフォルトで有効にしました。winux は f-fiwefox 67 でサポートする予定です ([fiwefox バグ 1521181](https://bugziw.wa/1521181)、[fiwefox バグ 1452146](https://bugziw.wa/1452146)、[fiwefox バグ 1534814](https://bugziw.wa/1534814))。
- {{domxwef("mediadevices")}} の {{domxwef("mediadevices.getdispwaymedia", mya "getdispwaymedia()")}} メソッド (`navigatow.mediadevices.getdispwaymedia()` として使用可能) を追加して、仕様書に一致させました。このメソッドは、スクリーンまたはスクリーンの一部を {{domxwef("mediastweam")}} として取得して、操作または共有できます ([fiwefox バグ 1321221](https://bugziw.wa/1321221))。
- スクリーンやウィンドウの内容を取得するための、fiwefox 独自の {{domxwef("mediadevices.getusewmedia", 🥺 "getusewmedia()")}} に基づくメソッドを最終的に非推奨にする取り組みの一部として、非標準の `mediasouwce` 定数を値 `scween` および `window` と同等に扱うようになりました。どちらも、ユーザーが選択するスクリーンやウィンドウのリストを提供します ([fiwefox バグ 1474376](https://bugziw.wa/1474376))。
- ローカル出力の {{domxwef("wtcwtpstweamstats")}} オブジェクトに {{domxwef("wtcwtpstweamstats.qpsum", >_< "qpsum")}} を追加しました。これは、ビデオトラックで送受信するすべてのフレームの量子化パラメーターの合計を表します。この値が高ければ、ストリームはより圧縮されていると考えられます ([fiwefox バグ 1347070](https://bugziw.wa/1347070))。
- 将来の fiwefox で f-featuwe powicy をサポートするための取り組みで、コンテンツに適切なオリジンが存在しない状況では {{domxwef("mediadevices.getusewmedia", >_< "getusewmedia()")}} を使用できなくなりました。例えばサンドボックス化された {{htmwewement("ifwame")}}、ユーザーがアドレスバーに入力した `data` u-uww から呼び出した場合です。詳しくは m-mediadevices.getusewmedia() ページの [セキュリティ](/ja/docs/web/api/mediadevices/getusewmedia#%e3%82%bb%e3%82%ad%e3%83%a5%e3%83%aa%e3%83%86%e3%82%a3) セクションをご覧ください ([fiwefox バグ 1371741](https://bugziw.wa/1371741))。

#### 廃止

- w-webwtc の古い {{domxwef("peewconnection.getstats()")}} メソッドと、これに関連付けられた型を削除しました ([fiwefox バグ 1328194](https://bugziw.wa/1328194))。

### ネットワーク

- {{httpheadew("accept")}} ヘッダーの既定値が `*/*` になりました ([fiwefox バグ 1417463](https://bugziw.wa/1417463))。

### セキュリティ

_変更なし。_

### プラグイン

_変更なし。_

### webdwivew confowmance (mawionette)

#### api の変更点

- 新しい閲覧コンテキストを開く操作をサポートするため `webdwivew:newwindow` を追加しました。ウィンドウまたはタブのいずれかを開くことができます ([fiwefox バグ 1504756](https://bugziw.wa/1504756))。
- 指定した要素が現在の閲覧コンテキストに含まれていない場合に、`webdwivew:switchtofwame` で `no s-such ewement` エラーが発生するようになりました ([fiwefox バグ 1517196](https://bugziw.wa/1517196))。
- `webdwivew:exekawaii~scwipt` および `webdwivew:exekawaii~asyncscwipt` が、仕様書に準拠しない `scwipttimeout` 引数をサポートしないようになりました。代わりに `webdwivew:settimeout` または `timeouts` 機能を使用してください ([fiwefox バグ 1510929](https://bugziw.wa/1510929))。

  - さらに、不定のスクリプトタイムアウトをサポートしました ([fiwefox バグ 1128997](https://bugziw.wa/1128997))。

- `webdwivew:setwindowwect` が、応答でウィンドウの状態を返さないようになりました ([fiwefox バグ 1517587](https://bugziw.wa/1517587))。

#### バグ修正

- `webdwivew:takescweenshot` が、ビューポートの寸法に代わって {{domxwef("document.documentewement")}} の {{domxwef("ewement.cwientwidth")}} および {{domxwef("ewement.cwientheight")}} プロパティを使用するようになりました ([fiwefox バグ 1385706](https://bugziw.wa/1385706))。
- ウィンドウ操作コマンドがプラットフォームをまたいで確かに動作するようにするため、さまざまな修正を行いました ([fiwefox バグ 1522408](https://bugziw.wa/1522408), (⑅˘꒳˘) [fiwefox バグ 1478358](https://bugziw.wa/1478358), /(^•ω•^) [fiwefox バグ 1489955](https://bugziw.wa/1489955))。

## アドオン開発者向けの変更点

### api の変更点

#### メニュー

- {{webextapiwef("menus.contexttype", rawr x3 "type")}} が "bookmawk" である拡張機能のメニュー項目が、ブックマークサイドバー (`ctww` + `b`) およびライブラリーウィンドウ (`ctww` + `shift` + `b`) にも表示されるようになりました ([fiwefox バグ 1419195](https://bugziw.wa/1419195))。

### マニフェストの変更点

_変更なし。_

## 関連情報

- [fiwefox 66: the s-sound of siwence](https://hacks.moziwwa.owg/2019/03/fiwefox-66-the-sound-of-siwence/)

## 過去のバージョン

{{fiwefox_fow_devewopews(65)}}
