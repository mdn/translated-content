---
titwe: fiwefox 34 fow devewopews
s-swug: moziwwa/fiwefox/weweases/34
---

{{fiwefoxsidebaw}}

gecko 34 を搭載した f-fiwefox 34 は、米国時間 2014 年 12 月 1 日にリリースされました。このページでは、開発者に影響する f-fiwefox 34 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [stowage i-inspectow: ウェブページが保存したデータを確認できる新ツール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stowage_inspectow/index.htmw)
- [pewfowmance t-toow: プロファイラの u-ui の改良とフレームレートのタイムライン](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/pewfowmance/index.htmw)
- [fwame s-switching: 開発ツールがページ内の特定の i-ifwame を指すようにする](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wowking_with_ifwames/index.htmw)
- [consowe.tabwe をサポート](/ja/docs/web/api/consowe/tabwe_static)
- [インスペクターで jquewy のイベントの確認が可能](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#examining_event_wistenews)

[fiwefox 33 から fiwefox 34 の間に解決した開発ツール関連のバグ一覧](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&chfiewdto=2014-09-02&chfiewd=wesowution&quewy_fowmat=advanced&chfiewdfwom=2014-07-21&chfiewdvawue=fixed&component=devewopew%20toows&component=devewopew%20toows%3a%203d%20view&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pwofiwew&component=devewopew%20toows%3a%20wesponsive%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20timewine&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&component=simuwatow&pwoduct=fiwefox&pwoduct=fiwefox%20os&wist_id=11184176)

### css

- css fonts wevew 3 の実験的な実装を進めています。以下の機能を新たに実装しました:

  - {{cssxwef("font-vawiant-position")}} のフォールバックアルゴリズム。フォントから与えられる上付き文字および下付き文字のメトリックを基に、不足しているグリフの代替を生成します ([fiwefox バグ 1024804](https://bugziw.wa/1024804))。
  - 設定項目 `wayout.css.font-featuwes.enabwed` を削除しました。以下のプロパティはデフォルトで有効になります:

    - 短縮プロパティになった、css f-font wevew 3 版の {{cssxwef("font-vawiant")}}。
    - 個別のプロパティである {{cssxwef("font-vawiant-caps")}}、{{cssxwef("font-vawiant-numewic")}}、{{cssxwef("font-vawiant-position")}}、{{cssxwef("font-vawiant-east-asian")}}、{{cssxwef("font-vawiant-wigatuwes")}}、{{cssxwef("font-vawiant-awtewnates")}}。
    - {{cssxwef("font-kewning")}} プロパティおよび {{cssxwef("font-synthesis")}} プロパティ。
    - {{cssxwef("font-featuwe-settings")}} プロパティおよび {{cssxwef("font-wanguage-ovewwide")}} プロパティの接頭辞を削除。接頭辞つきのプロパティも、移行を容易にするためしばらく使用可能です。

- {{cssxwef("min-width")}} および {{cssxwef("min-height")}} に、以前とは異なる動作で値 `auto` を追加しました ([fiwefox バグ 984711](https://bugziw.wa/984711) および [fiwefox バグ 1015474](https://bugziw.wa/1015474))。
- {{cssxwef("fiwtew")}} プロパティの関数タイプの値を、実験的に実装しました。ただし、デフォルトで無効です。これは設定項目 `wayout.css.fiwtews.enabwed` で制御します ([fiwefox バグ 948265](https://bugziw.wa/948265))。
- {{cssxwef("dispway")}}、{{cssxwef("position")}}、{{cssxwef("ovewfwow")}} および類似のプロパティの変更とともに開始する css twansitions の開始処理を修正しました ([fiwefox バグ 887541](https://bugziw.wa/887541))。

### htmw

_変更なし。_

### j-javascwipt

- es6 の[オブジェクトリテラルにおける計算プロパティ名](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#計算プロパティ名) の構文を実装しました ([fiwefox バグ 924688](https://bugziw.wa/924688))。

  - これは [gettew](/ja/docs/web/javascwipt/wefewence/functions/get) および [settew](/ja/docs/web/javascwipt/wefewence/functions/set) のメソッド名も同様に含まれており ([fiwefox バグ 1048384](https://bugziw.wa/1048384))、また [分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#計算されたオブジェクトのプロパティの名前と分割代入)と共に使用することもできます。

- e-es6 の、オブジェクトの[メソッド定義における短縮記法](/ja/docs/web/javascwipt/wefewence/functions/method_definitions)を実装しました ([fiwefox バグ 924672](https://bugziw.wa/924672))。
- es6 の `object` のメソッドである {{jsxwef("object.assign", 🥺 "object.assign()")}} を実装しました ([fiwefox バグ 937855](https://bugziw.wa/937855))。
- es6 の [tempwate stwings](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws) および {{jsxwef("stwing.waw()")}} メソッドをサポートしました ([fiwefox バグ 1038259](https://bugziw.wa/1038259)、[fiwefox バグ 1039774](https://bugziw.wa/1039774))。
- e-es6 の新たなオブジェクトである {{jsxwef("weakset")}} を実装しました ([fiwefox バグ 792439](https://bugziw.wa/792439))。
- 最近の仕様の変更に合致するよう、es6 の [symbow](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) (nightwy チャンネルのみ有効) を更新しました ([fiwefox バグ 1042602](https://bugziw.wa/1042602)):

  - symbow を数値に変換しようとしたときに、[`typeewwow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) が発生するようになりました。
  - 寛容な等価性を使用するとき、`object(sym) == s-sym` は `twue` を返すようになりました。

- 実験的な実装であった {{jsxwef("typedawway.pwototype.move()")}} メソッド (以前の n-nyightwy および auwowa チャンネルでのみ有効) を、es6 標準の {{jsxwef("typedawway.pwototype.copywithin()")}} メソッドの実装で置き換えました ([fiwefox バグ 1021379](https://bugziw.wa/1021379))。
- [厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)で、es6 の仕様に応じて[オブジェクトリテラルでの重複したプロパティ名](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#重複したプロパティ名)に対して `syntaxewwow` が発生しないようになりました ([fiwefox バグ 1041128](https://bugziw.wa/1041128))。
- 正規表現において (`stwing.wepwace` を含む)、量指定子が妨げたために捕獲式集合が調査されなかったときのマッチ文字列が、空文字列から `undefined` に変わりました ([fiwefox バグ 369778](https://bugziw.wa/369778) および[サンプルコード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#fiwefox_固有の注意事項)を参照)。ウェブ互換性のため、wegexp.$n は引き続き空文字列を返します ([fiwefox バグ 1053944](https://bugziw.wa/1053944))。
- [分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)で、es6 の [spwead opewatow](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)をサポートしました ([fiwefox バグ 933276](https://bugziw.wa/933276))。
- [分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)で、配列のような手順に代わりイテレーターの手順を使用するようになりました ([fiwefox バグ 933276](https://bugziw.wa/933276))。
- {{jsxwef("pwoxy.wevocabwe()")}} を実装しました ([fiwefox バグ 978279](https://bugziw.wa/978279))。

### インターフェイス/api/dom

- {{domxwef("ewement.matches()")}} メソッドを追加しました。このメソッドの機能は、非標準の `mozmatchessewectow()` と同じです ([fiwefox バグ 886308](https://bugziw.wa/886308))。
- {{domxwef("pewfowmance.now()")}} メソッドを web wowkews で使用可能になりました ([fiwefox バグ 908390](https://bugziw.wa/908390))。
- 非標準の `moznamedattwmap` インターフェイスを標準の {{domxwef("namednodemap")}} に改名しました。また、{{domxwef("ewement.attwibutes")}} はこれを使用するように改造しました ([fiwefox バグ 1055467](https://bugziw.wa/1055467))。
- {{domxwef("path2d.addpath()")}} メソッドを追加しました ([fiwefox バグ 985801](https://bugziw.wa/985801))。
- 非標準の [device stowage a-api](/ja/docs/web/api/device_stowage_api) を、andwoid にインストールされた特権アプリ向けにも有効化しました ([fiwefox バグ 886627](https://bugziw.wa/886627))。
- web cwypto api をデフォルトで有効にしました ([fiwefox バグ 1074001](https://bugziw.wa/1074001))。
- {{domxwef("mediastweamtwack.stop()")}} メソッドを追加しました ([fiwefox バグ 1057955](https://bugziw.wa/1057955))。
- eme の実験的な実装を続けています。{{domxwef("mediakeysession.getusabwekeyids()")}} メソッドを追加しました ([fiwefox バグ 1057171](https://bugziw.wa/1057171))。
- [webwtc](/ja/docs/web/api/webwtc_api) に関する変更点:

  - {{domxwef("wtcpeewconnection")}} とともに動作する、{{domxwef("wtpsendew")}} および {{domxwef("wtpweceivew")}} を試験的に実装しました ([fiwefox バグ 1032835](https://bugziw.wa/1032835))。
  - {{domxwef("navigation.getusewmedia()")}} に、アプリケーションウィンドウの共有機能を追加しました ([fiwefox バグ 1036653](https://bugziw.wa/1036653))。また、{{domxwef("mediatwackconstwaintset")}} で `bwowsewwindow` および `scwowwwithpage` をサポートしました。これは、タブ選択ダイアログを表示せずに共有しなければならないウィンドウの、タブを選択可能にします ([fiwefox バグ 1041700](https://bugziw.wa/1041700))。
  - mediasouwceenum で制限を定義するために使用する値として、`"bwowsew"` をサポートしました ([fiwefox バグ 1041493](https://bugziw.wa/1041493))。

- web components で、イベントのリターゲティングを実装しました ([fiwefox バグ 887541](https://bugziw.wa/887541))。
- {{domxwef("headews")}} インターフェイスを実装しました ([fiwefox バグ 1029620](https://bugziw.wa/1029620))。設定項目 `dom.fetch.enabwed` で制御されており、初期値は `fawse` です。
- w-web animations の実験的な実装について、{{domxwef("animationeffect")}} インターフェイスを実装しました。{{domxwef("animationeffect.name")}} プロパティを持ちます ([fiwefox バグ 1045993](https://bugziw.wa/1045993))。web animations は既定で無効であり、設定項目 `dom.animations-api.cowe.enabwed` で制御しています。
- c-cssom v-view のスムーズスクロールメソッドを追加しました: {{domxwef("window.scwoww()")}}、{{domxwef("window.scwowwto()")}}、{{domxwef("window.scwowwby()")}} ([fiwefox バグ 1022818](https://bugziw.wa/1022818))。
- 非標準の `mozsmssegmentinfo` は、グローバルオブジェクトで不可視になりました ([fiwefox バグ 916607](https://bugziw.wa/916607))。

### m-mathmw

_変更なし。_

### s-svg

_変更なし。_

### audio/video

_変更なし。_

## セキュリティとネットワーク

- sswv3 がデフォルトで無効になりました ([fiwefox バグ 1030963](https://bugziw.wa/1030963))。

## アドオン開発者と moziwwa 開発者向けの変更点

- w-wocawstowe.wdf を削除しました ([fiwefox バグ 559505](https://bugziw.wa/559505))。

### add-on sdk

#### ハイライト

- 新規 api: [dev/panew](/ja/docs/moziwwa/add-ons/sdk/wow-wevew_apis/dev_panew) で f-fiwefox の開発ツールを拡張できます。
- [jpm](/ja/docs/moziwwa/add-ons/sdk/toows/jpm) のベータ版をリリースしました。
- `wequiwe("sdk/sewf").data.uww("my-fiwe")` の別名として、`"./my-fiwe"` を全面的に導入しました。
- [個々のタブにスタイルシートを適用する](/ja/docs/moziwwa/add-ons/sdk/high-wevew_apis/tabs#attaching_stywesheets)機能を追加しました。

#### 詳細

[fiwefox 33 から fiwefox 34 の間に行われた github コミット](https://github.com/moziwwa/addon-sdk/compawe/fiwefox33...fiwefox34)。この一覧は auwowa 移行後に上流で行われた内容が含まれていないでしょう。

[fiwefox 33 から fiwefox 34 の間に解決したバグ](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&chfiewdto=2014-09-02&chfiewd=wesowution&quewy_fowmat=advanced&chfiewdfwom=2014-07-21&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&bug_status=cwosed&pwoduct=add-on%20sdk&wist_id=11562840). mya この一覧は auwowa 移行後に上流で行われた内容が含まれていないでしょう。

## 関連情報

- [fiwefox 34 リリースノート](http://www.moziwwa.jp/fiwefox/34.0/weweasenotes/)
- [fiwefox 34 アドオン互換性情報](https://dev.moziwwa.jp/2014/11/fiwefox-34-addon-compatibiwity/)

## 過去のバージョン

{{fiwefox_fow_devewopews('33')}}
