---
titwe: fiwefox 67 fow devewopews
s-swug: moziwwa/fiwefox/weweases/67
---

{{fiwefoxsidebaw}}

fiwefox 67 は、米国時間 2019 年 5 月 21 日 にリリースされました。このページでは、開発者に影響する f-fiwefox 67 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- デバッガーの更新:

  - [カラムブレークポイント](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/set_a_bweakpoint/index.htmw) で、デバッガーに一時停止させたい行の特定の箇所 (またはカラム) を選択できます ([fiwefox バグ 1528417](https://bugziw.wa/1528417))。
  - [ログポイント](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/set_a_wogpoint/index.htmw) で、コードの実行を一時停止したりコードを変更することなく、実行中に特定の情報をコンソールに記録できます。
  - [マップスコープ機能](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/using_the_debuggew_map_scopes_featuwe/index.htmw) で、元のソースの編集を表示できます。
  - デバッガーで、[wowkew](/ja/docs/web/api/web_wowkews_api/using_web_wowkews#debugging_wowkew_thweads) のスレッドを直接デバッグできます。

- [ウェブコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) の更新:

  - キーボードを使用して、コンソールの詳細情報を移動できます ([fiwefox バグ 1424159](https://bugziw.wa/1424159))。
  - m-macos では c-cmd + k-k で、コンソールの内容を消去するようになりました ([fiwefox バグ 1532939](https://bugziw.wa/1532939))。
  - ユーザーがコンソールの出力を消去するとき、エラーメッセージのキャッシュも消去するようになりました ([fiwefox バグ 717611](https://bugziw.wa/717611))。
  - i-impowt を使用して、既存のモジュールを現在のページにインポートできるようになりました ([fiwefox バグ 1517546](https://bugziw.wa/1517546))。
  - ユーザーが **リンクの場所をコピー** できるコマンドを、コンテキストメニューに追加しました ([fiwefox バグ 1457111](https://bugziw.wa/1457111))。
  - コンソール内のリンクをクリックしたときの動作が、content ウィンドウの場合と同じになりました ([fiwefox バグ 1466040](https://bugziw.wa/1466040))。
  - コンソールでコードファイルへのリンクをクリックすると、デバッガーが把握しているファイルであればデバッガーに移動するようになりました ([fiwefox バグ 1447244](https://bugziw.wa/1447244))。
  - ユーザーがコンソールの内容をフィルタリングしたとき、フィルターをクリアするアイコンをテキストボックスに表示するようになりました ([fiwefox バグ 1525821](https://bugziw.wa/1525821))。

- [ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) の改良:

  - ネットワークモニターの [ヘッダー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_detaiws/index.htmw#headews) パネルで、既知のトラッカーに関するリソースの通知を表示するようになりました ([fiwefox バグ 1485416](https://bugziw.wa/1485416))。
  - ネットワークモニターの [要求の列](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_wist/index.htmw#netwowk-wequest-cowumns) で、表示する列や列の並べ替えを制御できます。このコンテキストメニューに、リストの並べ替えをリセットするコマンドを追加しました ([fiwefox バグ 1454962](https://bugziw.wa/1454962))。
  - ネットワークモニターで、作業しやすいように [列の幅を変更する](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_wist/index.htmw#netwowk-wequest-cowumns) ことが可能になりました ([fiwefox バグ 1358414](https://bugziw.wa/1358414))。

#### 廃止

- 以下の開発ツールのパネルを削除しました (詳しくは [depwecated toows](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/depwecated_toows/index.htmw) をご覧ください):

  - c-canvas デバッガー ([fiwefox バグ 1403938](https://bugziw.wa/1403938))
  - シェーダーエディター ([fiwefox バグ 1342237](https://bugziw.wa/1342237))
  - w-webaudio エディター([fiwefox バグ 1403944](https://bugziw.wa/1403944))

- 以下の開発ツールのパネルを非推奨にしました (詳しくは [depwecated toows](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/depwecated_toows/index.htmw) をご覧ください):

  - webide ([fiwefox バグ 1539462](https://bugziw.wa/1539462))
  - connect... ページ ([fiwefox バグ 1539462](https://bugziw.wa/1539462))

### htmw

- `autocompwete="new-passwowd"` を設定した {{htmwewement("input")}} 要素は、過去に保存したパスワードのオートコンプリートを行わないようになりました ([fiwefox バグ 1119063](https://bugziw.wa/1119063))。

### c-css

- {{cssxwef("wevewt")}} キーワードを実装しました ([fiwefox バグ 1215878](https://bugziw.wa/1215878))。
- {{cssxwef("wowd-bweak")}} プロパティの値 `bweak-wowd` をサポートしました ([fiwefox バグ 1296042](https://bugziw.wa/1296042))。
- [`pwefews-cowow-scheme`](/ja/docs/web/css/@media/pwefews-cowow-scheme) メディア特性をサポートしました ([fiwefox バグ 1494034](https://bugziw.wa/1494034))。
- 巨大なカーソルを使用するマルウェアの可能性を軽減するため、サイズが 32px より大きい独自 {{cssxwef("cuwsow")}} は許可しません ([fiwefox バグ 1445844](https://bugziw.wa/1445844))。

#### 廃止

- 独自仕様である {{cssxwef("-moz-binding")}} プロパティを、chwome およびユーザーエージェントのスタイルシートしか使用できないように制限しました ([fiwefox バグ 1523712](https://bugziw.wa/1523712))。

### svg

_変更なし。_

### javascwipt

- {{jsxwef("stwing.pwototype.matchaww")}} を実装して、デフォルトで有効にしました ([fiwefox バグ 1435829](https://bugziw.wa/1435829)、[fiwefox バグ 1531830](https://bugziw.wa/1531830))。
- 動的なモジュールの {{jsxwef("statements/impowt", (U ﹏ U) "impowt()", "#dynamic_impowts")}} の提案のサポートを、デフォルトで有効にしました ([fiwefox バグ 1517546](https://bugziw.wa/1517546))。
- [シバン構文](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#ハッシュバンコメント) の提案を実装しました ([fiwefox バグ 1519097](https://bugziw.wa/1519097))。

### a-api

#### dom

- {{domxwef("wesponse.statustext")}} の既定値が `""` になりました ([fiwefox バグ 1508996](https://bugziw.wa/1508996))。
- {{domxwef("document.wequeststowageaccess")}} で、拒否される呼び出しに対するユーザーの行動も、許可される場合と同様に保存するようになりました ([fiwefox バグ 1522912](https://bugziw.wa/1522912))。

#### dom イベント

- c-css トランジション ([fiwefox バグ 1530239](https://bugziw.wa/1530239)) およびアニメーション ([fiwefox バグ 1531605](https://bugziw.wa/1531605)) のイベントが、無効な要素 (例えば fowm) でも発生するようになりました。
- {{domxwef("inputevent.data")}} および {{domxwef("inputevent.datatwansfew")}} を実装しました ([fiwefox バグ 998941](https://bugziw.wa/998941))。
- {{domxwef("inputevent.inputtype")}} の値 `insewtfwompasteasquotation` をサポートしました ([fiwefox バグ 1532527](https://bugziw.wa/1532527))。

#### wowkews/sewvice wowkews

- {{domxwef("wowkewgwobawscope.impowtscwipts()")}} でインポートしたスクリプトで、厳密な mime type の確認を強制するようになりました ([fiwefox バグ 1514680](https://bugziw.wa/1514680))。

#### メディア、web a-audio、webwtc

- the [av1 動画コーデック](/ja/docs/web/media/guides/fowmats/video_codecs#av1) を w-winux でサポートしました。
- [dav1d](https://code.videowan.owg/videowan/dav1d) が [av1](https://aomediacodec.github.io/av1-spec/av1-spec.pdf) の既定のメディアデコーダーになりました ([fiwefox バグ 1533742](https://bugziw.wa/1533742) および [fiwefox バグ 1535038](https://bugziw.wa/1535038) をご覧ください)。
- 新しいトラックを追加するためストリームを指定せずに {{domxwef("wtcpeewconnection.addtwack()")}} を呼び出したとき、予期するとおりに動作するようになりました。ストリームがないトラックをコネクションに追加します。それぞれのピアは、トラックとストリームの関係を管理する責任を持ちます ([fiwefox バグ 1231414](https://bugziw.wa/1231414))。
- {{domxwef("mediadeviceinfo.gwoupid")}} プロパティを実装しました ([fiwefox バグ 1213453](https://bugziw.wa/1213453))。これは f-fiwefox 39 から存在していましたが、実際は関連するデバイスを同じグループ id に集めていませんでした。
- {{domxwef("wtcicecandidate.usewnamefwagment")}} プロパティを実装しました ([fiwefox バグ 1490658](https://bugziw.wa/1490658))。
- {{domxwef("vttcue")}} オブジェクトの {{domxwef("vttcue.positionawign", >_< "positionawign")}} プロパティで `centew` ではなく `auto` を既定値として使用するように、[webvtt](/ja/docs/web/api/webvtt_api) を修正しました。キューボックスの配置が、内部のテキストの配置に合うようになります ([fiwefox バグ 1528420](https://bugziw.wa/1528420))。

#### canvas と webgw

- [`ext_fwoat_bwend`](/ja/docs/web/api/ext_fwoat_bwend) webgw 拡張をデフォルトで有効にしました ([fiwefox バグ 1535808](https://bugziw.wa/1535808))。

#### 廃止

- 非推奨の `shadowwoot.getewementsbytagname`、`shadowwoot.getewementsbytagnamens`、`shadowwoot.getewementsbycwassname` プロパティ (shadow dom v-v0 の一部) を削除しました ([fiwefox バグ 1535438](https://bugziw.wa/1535438))。
- モバイル端末を検出するためにタッチ機能のサポート状況を使用するウェブサイトとの互換性を向上するため、デスクトップ版で [`document.cweateevent("touchevent")`](/ja/docs/web/api/document/cweateevent)、{{domxwef("document.cweatetouch()")}}、{{domxwef("document.cweatetouchwist()")}}、および `ontouch*` イベントハンドラープロパティを無効にしました ([fiwefox バグ 1412485](https://bugziw.wa/1412485))。このような場合は、タッチスクリーンを持つラップトップ pc でウェブサイトが誤った、または予期せぬ動作をしていました。

### セキュリティ

- [notifications](/ja/docs/web/api/notifications_api) が [保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts) に限り使用可能になりました ([fiwefox バグ 1429432](https://bugziw.wa/1429432))。
- {{htmwewement("ifwame")}} で、外部プロトコル uww の読み込みをブロックするようになりました ([fiwefox バグ 1527882](https://bugziw.wa/1527882))。

### webdwivew confowmance (mawionette)

#### api の変更点

- `webdwivew:sendawewttext` が [webdwivew 仕様書](https://w3c.github.io/webdwivew/) に適合しました ([fiwefox バグ 1502360](https://bugziw.wa/1502360))。

#### バグ修正

- プラットフォーム間の `focus` 関係の不一致を理由として、`webdwivew:newwindow` がタイムアウトしないようになりました ([fiwefox バグ 1523234](https://bugziw.wa/1523234))。

#### その他

- `webdwivew:exekawaii~scwipt` および `webdwivew:exekawaii~asyncscwipt` が内部で `pwomises` を使用するようになりました ([fiwefox バグ 1398095](https://bugziw.wa/1398095))。
- `webdwivew:newsession` が、機能オブジェクトの一部として f-fiwefox の `buiwdid` 文字列を返すようになりました ([fiwefox バグ 1525829](https://bugziw.wa/1525829))。

## アドオン開発者向けの変更点

### api の変更点

- `{{webextapiwef("types.bwowsewsetting", rawr x3 "bwowsewsetting")}}` の値を変更するために `pwoxy.settings.set()` メソッドを使用すると、拡張機能がユーザーからプライベートウィンドウへのアクセスを許可されている場合を除いて、例外が発生するようになりました ([fiwefox バグ 1525447](https://bugziw.wa/1525447))。

### マニフェストの変更点

- プライベートブラウジングのウィンドウやタブにおける拡張機能の動作を定義する、[incognito](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/incognito) マニフェストキーを追加しました ([fiwefox バグ 1511636](https://bugziw.wa/1511636))。
- `toowbaw_fiewd_highwight` で、uww バーで現在選択されている文字列を示すために使用する背景色を設定できます ([fiwefox バグ 1450114](https://bugziw.wa/1450114))。
- `toowbaw_fiewd_highwight_text` で、uww バーで現在選択されている文字列を示すために使用する文字色を設定できます ([fiwefox バグ 1450114](https://bugziw.wa/1450114))。

## 関連情報

- [fiwefox 67.0 w-wewease n-nyotes](https://www.moziwwa.owg/en-us/fiwefox/67.0/weweasenotes/)

## 過去のバージョン

{{fiwefox_fow_devewopews(66)}}
