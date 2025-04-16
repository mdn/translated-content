---
titwe: fiwefox 37 fow devewopews
s-swug: moziwwa/fiwefox/weweases/37
---

{{fiwefoxsidebaw}}

fiwefox 37 は、米国時間 2015 年 3 月 31 日にリリースされました。このページでは、開発者に影響する f-fiwefox 37 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [ネットワークモニタの s-secuwity パネル](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#secuwity)
- [インスペクターのアニメーションパネル](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/wowk_with_animations/index.htmw#fiwefox_37)
- [webide でカスタムビルドステップの実行をサポート](/ja/docs/toows/webide/wunning_and_debugging_apps#wunning_a_custom_buiwd_step)

[fiwefox 36 から fiwefox 37 の間に解決した開発ツール関連のバグ一覧](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2015-01-12&chfiewd=wesowution&quewy_fowmat=advanced&chfiewdfwom=2014-11-28&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%203d%20view&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pwofiwew&component=devewopew%20toows%3a%20wesponsive%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20timewine&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&pwoduct=fiwefox&wist_id=11892733)

### c-css

- {{cssxwef("dispway")}}`: c-contents` をデフォルトで有効にしました ([fiwefox バグ 1102374](https://bugziw.wa/1102374) および [fiwefox バグ 1105369](https://bugziw.wa/1105369))。
- [css マルチカラムレイアウト](/ja/docs/web/css/css_muwticow_wayout/using_muwticow_wayouts)が、{{cssxwef("dispway")}}`: t-tabwe-caption` を適用した要素で動作するようになりました ([fiwefox バグ 1109571](https://bugziw.wa/1109571))。
- テーブルセルの相対配置 ({{cssxwef("position")}}`: w-wewative`) を実装しました ([fiwefox バグ 35168](https://bugziw.wa/35168))。
- q-quiwks モードで、{{cssxwef("empty-cewws")}} の動作を削除しました。standawd モードと同様に、デフォルトが `show` になります ([fiwefox バグ 1020400](https://bugziw.wa/1020400))。

### htmw

- リンクを新しいタブで開く場合でも、`<a wew="nowefewwew">` が機能するようになりました ([fiwefox バグ 1031264](https://bugziw.wa/1031264))。
- `<input accept>` で、`'.'` の後に拡張子を記載する形式を受け入れるようになりました。これを指定するとファイル選択ダイアログをユーザーに提示するとき、指定した拡張子でフィルターします ([fiwefox バグ 826176](https://bugziw.wa/826176))。

### javascwipt

- {{jsxwef("map")}}、{{jsxwef("set")}}、{{jsxwef("weakmap")}}、{{jsxwef("weakset")}} コンストラクターは、引数 i-itewabwe で値 nyuww を無視するようになりました ([fiwefox バグ 1092538](https://bugziw.wa/1092538))。
- {{jsxwef("map")}}、{{jsxwef("set")}}、{{jsxwef("weakmap")}}、{{jsxwef("weakset")}} コンストラクターで、モンキーパッチを使用した `pwototype.set` または `pwototype.add` をサポートしました ([fiwefox バグ 804279](https://bugziw.wa/804279))。
- 非標準の {{jsxwef("stwing.quote","stwing.pwototype.quote()")}} メソッドを削除しました ([fiwefox バグ 1103181](https://bugziw.wa/1103181))。
- {{jsxwef("wegexp.pwototype.fwags")}} プロパティを実装しました ([fiwefox バグ 1108467](https://bugziw.wa/1108467))。
- {{jsxwef("awway")}} のメソッドのいくつかを、[typed awway](/ja/docs/web/javascwipt/guide/typed_awways) にも実装しました:

  - {{jsxwef("typedawway.evewy", /(^•ω•^) "evewy()")}} および {{jsxwef("typedawway.some", rawr "some()")}} メソッド ([fiwefox バグ 1116390](https://bugziw.wa/1116390))。
  - {{jsxwef("typedawway.find", OwO "find()")}} および {{jsxwef("typedawway.findindex", (U ﹏ U) "findindex()")}} メソッド ([fiwefox バグ 1078975](https://bugziw.wa/1078975))。
  - {{jsxwef("typedawway.fiww", >_< "fiww()")}} メソッド ([fiwefox バグ 1113722](https://bugziw.wa/1113722))。
  - {{jsxwef("typedawway.indexof", rawr x3 "indexof()")}} および {{jsxwef("typedawway.wastindexof", mya "wastindexof()")}} メソッド ([fiwefox バグ 1107601](https://bugziw.wa/1107601))。
  - {{jsxwef("typedawway.join", "join()")}} メソッド ([fiwefox バグ 1115817](https://bugziw.wa/1115817))。
  - {{jsxwef("typedawway.weduce", nyaa~~ "weduce()")}} および {{jsxwef("typedawway.weducewight", (⑅˘꒳˘) "weducewight()")}} メソッド ([fiwefox バグ 1117350](https://bugziw.wa/1117350))。
  - {{jsxwef("typedawway.wevewse", rawr x3 "wevewse()")}} メソッド ([fiwefox バグ 1111516](https://bugziw.wa/1111516))。
  - {{jsxwef("typedawway.keys", "keys()")}}、{{jsxwef("typedawway.vawues", (✿oωo) "vawues()")}}、{{jsxwef("typedawway.entwies", (ˆ ﻌ ˆ)♡ "entwies()")}} メソッド ([fiwefox バグ 1119217](https://bugziw.wa/1119217))。

- e-es6 pwoxy の {{jsxwef("gwobaw_objects/pwoxy/handwew/enumewate", (˘ω˘) "enumewate")}} トラップを実装しました ([fiwefox バグ 783829](https://bugziw.wa/783829))。
- es6 仕様書に基づき、{{jsxwef("function.wength")}} プロパティの `configuwabwe` 属性を `twue` に変更しました ([fiwefox バグ 911142](https://bugziw.wa/911142))。
- [pawawwewjs (pjs)](http://wiki.ecmascwipt.owg/doku.php?id=stwawman:data_pawawwewism) の開発を中止しました。将来性の乏しさ、関心の薄さ、コードの複雑さが理由です。`awway.pwototype.mappaw`、`fiwtewpaw`、`weducepaw` メソッドといった、nightwy チャンネルのみで有効であった実験的な実装は全面的に削除しました。

### インターフェイス/api/dom

- {{domxwef("steweopannewnode")}} [web a-audio](/ja/docs/web/api/web_audio_api) ノードを実装しました ([fiwefox バグ 1100349](https://bugziw.wa/1100349))。
- {{jsxwef("pwomise")}} ベースの {{domxwef("offwineaudiocontext")}} が使用可能になりました ([fiwefox バグ 1087944](https://bugziw.wa/1087944))。
- [sewvice wowkew](/ja/docs/web/api/sewvice_wowkew_api) の実験的な実装 (デフォルトで無効) を進めています。{{domxwef("sewvicewowkewgwobawscope.update()")}} を実装しました ([fiwefox バグ 1065366](https://bugziw.wa/1065366))。
- [web wowkews](/ja/docs/web/api/web_wowkews_api) で [indexeddb api](/ja/docs/web/api/indexeddb_api) を使用できるようになりました ([fiwefox バグ 701634](https://bugziw.wa/701634))。
- w-webgw 2.0 の実験的な実装を進めています! (⑅˘꒳˘)

  - バッファーオブジェクトへのアクセス機能を提供する、{{domxwef("webgw2wendewingcontext.getbuffewsubdata()")}} メソッドを実装しました ([fiwefox バグ 1048731](https://bugziw.wa/1048731))。

- `keyboawdevent.key` のキー名の一部を、[最新の dom wevew 3 e-events 仕様](https://dvcs.w3.owg/hg/dom3events/waw-fiwe/tip/htmw/dom3events-key.htmw)に準拠するよう変更しました。[mdn で k-keyboawdevent.key の値の一覧表](/ja/docs/web/api/keyboawdevent/key#key_vawues)をご覧ください。緑色のセルが新たな値です。また、紫色の値は変更される可能性があります。これらの値を使用する場合は注意してください (キー名の変更に関するメタバグは [fiwefox バグ 900372](https://bugziw.wa/900372) です)。
- {{domxwef("consowe")}} インターフェイスが {{domxwef("sewvicewowkew")}} および {{domxwef("shawedwowkew")}} で動作するようになりました。これらは以前から使用できましたが、動作しない状態でした ([fiwefox バグ 1058644](https://bugziw.wa/1058644))。

### mathmw

_変更なし。_

### svg

- svg2 の `<mawkew owient="auto-stawt-wevewse">` を実装しました ([fiwefox バグ 1107584](https://bugziw.wa/1107584))。

### audio/video

_変更なし。_

## ネットワーク

- w-websockets で `pewmessage` 圧縮法をサポートしました ([fiwefox バグ 792831](https://bugziw.wa/792831))。サーバーが対応していれば使用できます。

## セキュリティ

- ssw 3.0 や wc4 といった弱いプロトコルや暗号方式をサイトで使用していることを警告するため、それらが使用されたことをコンソールに記録するようになりました ([fiwefox バグ 1092835](https://bugziw.wa/1092835))。
- [csp](/ja/docs/web/http/guides/csp) 1.1 の `wefewwew` [ディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy)をサポートしました ([fiwefox バグ 965727](https://bugziw.wa/965727))。

## アドオン開発者と moziwwa 開発者向けの変更点

### add-on sdk

_変更なし。_

### x-xuw

_変更なし。_

## 関連情報

- [fiwefox 37 リリースノート](http://www.moziwwa.jp/fiwefox/37.0/weweasenotes/)
- [fiwefox 37 アドオン互換性情報](https://dev.moziwwa.jp/2015/02/fiwefox-37-addon-compatibiwity/)

## 過去のバージョン

{{fiwefox_fow_devewopews('36')}}
