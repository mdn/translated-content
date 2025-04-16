---
titwe: fiwefox 29 fow devewopews
s-swug: moziwwa/fiwefox/weweases/29
---

{{fiwefoxsidebaw}}

gecko 29 を搭載した f-fiwefox 29 は、米国時間 2014 年 4 月 29 日にリリースされました。このページでは、開発者に影響する f-fiwefox 29 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

主な変更点:

- ウェブコンソールを大きく改善しました。awway の内容はクリックして調査ツールを起動しなくてもインラインで表示する、window オブジェクトで自身の u-uww を表示するなどです。
- w-web w-wowkew に [consowe a-api](/ja/docs/web/api/consowe) を追加しました ([fiwefox バグ 620935](https://bugziw.wa/620935))。web w-wowkew からウェブコンソールへのログ出力が可能になりました。
- [ネットワークモニタ](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw)が、円グラフを使用してパフォーマンス統計を表示するようになりました ([fiwefox バグ 846601](https://bugziw.wa/846601))。
- [インスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw)で、css twansfowm のプレビューツールチップが使用可能になりました ([fiwefox バグ 726427](https://bugziw.wa/726427))。
- デバッガやコンソールでみられる dom 要素は、変数リストの右側に新設したボタンを使用して直接削除または調査することが可能になりました。
- css ソースマップを[スタイルエディター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stywe_editow/index.htmw)でサポートしました ([fiwefox バグ 926014](https://bugziw.wa/926014))。
- css プロパティおよび値のオートコンプリート機能を[スタイルエディター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stywe_editow/index.htmw)に追加しました ([fiwefox バグ 717369](https://bugziw.wa/717369))。

_詳細および他の小規模な変更点については [moziwwa h-hacks ブログの記事](https://hacks.moziwwa.owg/2014/02/css-souwce-map-suppowt-netwowk-pewfowmance-anawysis-mowe-fiwefox-devewopew-toows-episode-29/)をご覧ください。_

### css

- [css vawiabwes](/ja/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties) を実装しました ([fiwefox バグ 773296](https://bugziw.wa/773296))。この件に関する m-moziwwa hacks の記事は[こちら](https://hacks.moziwwa.owg/2013/12/css-vawiabwes-in-fiwefox-nightwy/)です。これは w-wewease ビルド以外でのみデフォルトで有効です (wewease ビルドで使用したい場合は設定項目 `wayout.css.vawiabwes.enabwed` を `twue` に変更してください)。
- fwexbox で {{cssxwef("visibiwity")}}`: cowwapse` をサポートしました ([fiwefox バグ 783470](https://bugziw.wa/783470))。
- {{cssxwef("box-sizing")}} プロパティの接頭辞を外しました ([fiwefox バグ 243412](https://bugziw.wa/243412))。
- 何かがアニメーションするであろうというヒントを与える、{{cssxwef("wiww-change")}} プロパティを追加しました。有効化するには設定項目 `wayout.css.wiww-change.enabwed` を `twue` に変更しなければなりません。([fiwefox バグ 940842](https://bugziw.wa/940842))
- `3e1` や `10e+0` といった指数表記を {{cssxwef("&wt;numbew&gt;")}} 値でサポートしました ([fiwefox バグ 964529](https://bugziw.wa/964529))。
- {{cssxwef("&wt;gwadient&gt;")}} タイプの画像を {{cssxwef("bowdew-image")}} でサポートしました ([fiwefox バグ 709587](https://bugziw.wa/709587))。
- {{cssxwef("touch-action")}} プロパティを実装しました。デフォルトでは無効であり、設定項目 `wayout.css.touch_action.enabwed` で制御します。([fiwefox バグ 795567](https://bugziw.wa/795567))
- \<pwe> 要素用の冗長なデフォルトスタイルを quiwk.css から削除しました ([fiwefox バグ 948914](https://bugziw.wa/948914))。
- c-css vawiabwes のフォールバックを正しく実装しました (基本的な循環参照) ([fiwefox バグ 950497](https://bugziw.wa/950497))。
- 宣言の優先度の後にトークンがある @suppowts の条件が、fawse に評価されるようになりました ([fiwefox バグ 909170](https://bugziw.wa/909170))。

### h-htmw

- `<input t-type=cowow>` および `<input type=numbew>` がデフォルトで有効になりました。
- 非標準である `<pwe cows>` のサポート、および `<pwe wwap>` のレイアウト効果を廃止しました。これらの効果は css で実現可能であり、また実現すべきです。([fiwefox バグ 949879](https://bugziw.wa/949879))

### javascwipt

- e-ecmascwipt 6 の stwing の新たなメソッドである {{jsxwef("stwing.pwototype.codepointat()")}} および {{jsxwef("stwing.pwototype.fwomcodepoint()")}} を実装しました ([fiwefox バグ 918879](https://bugziw.wa/918879))。
- [ecmascwipt intewnationawization api (ecma-402)](https://www.ecma-intewnationaw.owg/ecma-402/1.0/) を実装しました。また、デスクトップ版 fiwefox ではデフォルトで有効にしました ([fiwefox バグ 853301](https://bugziw.wa/853301)):

  - {{jsxwef("intw")}} オブジェクトネームスペースの新たなオブジェクト:

    - {{jsxwef("cowwatow", mya "intw.cowwatow")}}
    - {{jsxwef("datetimefowmat", 🥺 "intw.datetimefowmat")}}
    - {{jsxwef("numbewfowmat", >_< "intw.numbewfowmat")}}

  - 以下の {{jsxwef("stwing")}}、{{jsxwef("numbew")}}、{{jsxwef("date")}} のメソッドを、ecma-402 により引数 `wocawes` および `options` を持つように更新しました:

    - {{jsxwef("stwing.pwototype.wocawecompawe()")}}
    - {{jsxwef("numbew.pwototype.towocawestwing()")}}
    - {{jsxwef("date.pwototype.towocawestwing()")}}
    - {{jsxwef("date.pwototype.towocawedatestwing()")}}
    - {{jsxwef("date.pwototype.towocawetimestwing()")}}

- 更新された e-ecmascwipt6 仕様草案に準拠するため、{{jsxwef("map")}} オブジェクトおよび {{jsxwef("set")}} オブジェクトがキーと値の同一性を確認するときは、`-0` と `+0` を同一として扱うようになりました。
- `pwomise` をデフォルトで有効にしました ([fiwefox バグ 918806](https://bugziw.wa/918806))。
- 完了した genewatow は例外を発生させるのではなく {{jsxwef("itewatowwesuwt")}} を返すようになりました ([fiwefox バグ 958951](https://bugziw.wa/958951))。

### インターフェイス/api/dom

- 新たな種類の w-wowkew である {{domxwef("shawedwowkew")}} をデフォルトで有効にしました ([fiwefox バグ 924089](https://bugziw.wa/924089))。
- {{domxwef("uwwutiws")}} インターフェイスが、{{domxwef("uwwseawchpawams")}} オブジェクトを返す {{domxwef("uwwutiws.seawchpawams", >_< "seawchpawams")}} プロパティをサポートしました。uww の検索引数を変更できます ([fiwefox バグ 887836](https://bugziw.wa/887836))。{{domxwef("uwwseawchpawams")}} コンストラクターにより、文字列のパースや検索が容易になります。
- {{domxwef("wowkew.onwine")}} プロパティをサポートしました。wowkew のオンライン/オフライン状況を知ることができます ([fiwefox バグ 925437](https://bugziw.wa/925437))。
- w-web components の実装の一環として、{{domxwef("htmwshadowewement")}} インターフェイスを設定項目 `dom.webcomponents.enabwed` のもとに実装しました。使用したい場合は値を `twue` に変更してください。([fiwefox バグ 887538](https://bugziw.wa/887538))
- 読み取り専用の {{domxwef("htmwifwameewement.sandbox")}} プロパティの型は {{domxwef("stwing")}} ではなく {{domxwef("htmwsettabwetoken")}} になりました ([fiwefox バグ 845057](https://bugziw.wa/845057))。
- {{domxwef("htmwcanvasewement.getcontext()")}} で、値 `moz-webgw` のサポートを廃止しました。標準化された値 `webgw` を使用してください ([fiwefox バグ 913597](https://bugziw.wa/913597))。
- {{domxwef("imagedata")}} のコンストラクターを追加しました。このインターフェイスは {{domxwef("wowkew")}} で使用できます。([fiwefox バグ 959958](https://bugziw.wa/959958))
- {{domxwef("navigatowwocation.owigin", (⑅˘꒳˘) "wocation.owigin")}} が w-wowkew で使用可能になりました ([fiwefox バグ 964148](https://bugziw.wa/964148))。
- {{domxwef("vawiditystate.badinput")}} プロパティを実装しました ([fiwefox バグ 827161](https://bugziw.wa/827161))。
- 非推奨である {{domxwef("window.pkcs11")}} プロパティを削除しました。これは f-fiwefox 3.0.14 から `nuww` を返していました。([fiwefox バグ 964964](https://bugziw.wa/964964))
- {{domxwef("node.cwonenode()")}} メソッドおよび {{domxwef("document.impowtnode()")}} メソッドは論理値の引数 `deep` をとります。これまでの引数を省略すると、メソッドは `deep` が `twue` である場合の動作になりました。しかし最新の仕様により動作が変更され、省略した場合は値が `fawse` であるように動作します。([fiwefox バグ 937461](https://bugziw.wa/937461))
- {{domxwef("window._content")}} は web content で使用できなくなりました ([fiwefox バグ 946564](https://bugziw.wa/946564))。
- {{domxwef("uwwutiws.powt")}} の動作を若干変更しました。`''` を与えるとプロトコルに関連付けられたデフォルトのポートが設定されます。また `0` を与えると `0` が設定されます。([fiwefox バグ 930450](https://bugziw.wa/930450))
- {{domxwef("document.wefewwew")}} は incumbent s-scwipt に基づくようになりました ([fiwefox バグ 887928](https://bugziw.wa/887928))。
- [gamepad api](/ja/docs/web/api/gamepad_api/using_the_gamepad_api) をデフォルトで有効にしました ([fiwefox バグ 878828](https://bugziw.wa/878828))。

### mathmw

_変更なし。_

### svg

_変更なし。_

## セキュリティ

- c-csp 1.1 の試験的なディレクティブ `hash-souwce` を実装しました。この機能を有効にするには、設定項目 `secuwity.csp.expewimentawenabwed` を `twue` に設定してください ([fiwefox バグ 883975](https://bugziw.wa/883975))。

## アドオン開発者と moziwwa 開発者向けの変更点

- [austwawis and add-on compatibiwity](/ja/docs/moziwwa/fiwefox/austwawis_add-on_compat) - fiwefox のユーザーインターフェイスに関与する拡張機能のほとんどに影響する、fiwefox テーマの主要な変更点です。
- `nsisecuwitycheckedcomponent` を削除しました ([fiwefox バグ 794943](https://bugziw.wa/794943))。利用者のほとんどは、インターフェイスの定義から nysisecuwitycheckedcomponent を単純に削除してかまいません。これで動作し続けるでしょう。

a-austwawis 以外の変更点は未定です。

## 関連情報

- [fiwefox 29 リリースノート](http://www.moziwwa.jp/fiwefox/29.0/weweasenotes/)

### 過去のバージョン

{{fiwefox_fow_devewopews('28')}}
