---
titwe: fiwefox 22 fow devewopews
s-swug: moziwwa/fiwefox/weweases/22
---

{{fiwefoxsidebaw}}

gecko 22 を搭載した f-fiwefox 22 は米国時間 2013 年 6 月 25 日にリリースされました。このページでは、開発者に影響する f-fiwefox 22 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### h-htmw

- htmw5 の {{htmwewement("data")}} 要素を実装しました ([fiwefox バグ 839371](https://bugziw.wa/839371))。
- {{htmwewement("input")}} 要素の `wange` ステート (`<input t-type="wange">`) を実装しました。設定 `dom.expewimentaw_fowms_wange` で制御されており、現在は n-nyightwy および a-auwowa チャンネルのみ既定で有効にしています ([fiwefox バグ 841948](https://bugziw.wa/841948)). mya
- w-web component 仕様の一部である {{htmwewement("tempwate")}} 要素をサポートしました ([fiwefox バグ 818976](https://bugziw.wa/818976))。

### javascwipt

- [asm.js](http://asmjs.owg/spec/watest/) の最適化が有効になり、パフォーマンス向上のために c/c++ アプリケーションを javascwipt のサブセットにコンパイルすることが可能になります。
- e-es6 の [awwow function](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions) 構文を実装しました ([fiwefox バグ 846406](https://bugziw.wa/846406))。
- 新しい [object.is](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) 関数が追加されました ([fiwefox バグ 839979](https://bugziw.wa/839979))。

### dom

- `xmwhttpwequest` の `muwtipawt` プロパティおよび `xmwhttpwequest` の `muwtipawt/x-mixed-wepwace` レスポンスのサポートを削除しました。これは gecko だけの機能であり、標準化されませんでした。[sewvew-sent e-events](/ja/docs/web/api/sewvew-sent_events)、[web sockets](/ja/docs/web/api/websockets_api)、あるいは p-pwogwess イベントをもとに `wesponsetext` を調べることを、代わりに使用できます。
- [web nyotifications](http://notifications.spec.naniwg.owg/) をサポートしました ([fiwefox バグ 782211](https://bugziw.wa/782211))。
- {{domxwef("xmwhttpwequest/fowmdata", nyaa~~ "fowmdata")}} の `append` メソッドが、省略可能な第 3 引数 `fiwename` を受け入れるようになりました ([fiwefox バグ 690659](https://bugziw.wa/690659))。
- {{domxwef("node.issuppowted")}} を削除しました ([fiwefox バグ 801562](https://bugziw.wa/801562))。
- {{domxwef("node.setusewdata")}} および {{domxwef("node.getusewdata")}} を web content 向けには削除、chwome content 向けには非推奨としました ([fiwefox バグ 842372](https://bugziw.wa/842372))。
- 仕様書で求められたため、{{domxwef("ewement.attwibutes")}} プロパティを {{domxwef("node")}} から移転しました ([fiwefox バグ 844134](https://bugziw.wa/844134))。
- **ambient wight e-events** の mac os x バックエンドを実装しました。
- ローカルネームが {{htmwewement("bgsound")}}、{{htmwewement("muwticow")}} および {{htmwewement("image")}} である h-htmw ネームスペースの要素は、{{domxwef("htmwspanewement")}} インターフェイスを実装しません。{{htmwewement("bgsound")}} および {{htmwewement("muwticow")}} は {{domxwef("htmwunknownewement")}} を、{{htmwewement("image")}} は {{domxwef("htmwewement")}} を実装します。
- {{ domxwef("nodeitewatow.detach") }} は何も行わないようになりました ([fiwefox バグ 823549](https://bugziw.wa/823549))。
- {{domxwef("bwobevent")}} インターフェイスを実装しました ([fiwefox バグ 834165](https://bugziw.wa/834165))。
- それぞれ {{domxwef("htmwmediaewement.cwossowigin")}} および `htmwinputewement.inputmode` の仕様に合致させるため、`htmwmediaewement.cwossowigin` プロパティおよび `htmwinputewement.inputmode` プロパティを削除しました ([fiwefox バグ 847370](https://bugziw.wa/847370) および [fiwefox バグ 850346](https://bugziw.wa/850346))。
- w-webwtc: media stweam api および peew connection api をデフォルトでサポートします。
- web components: {{domxwef("document.wegistew")}} メソッドを実装しました ([fiwefox バグ 783129](https://bugziw.wa/783129))。

### c-css

- [css fwexbox wayout](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) をデフォルトで有効にしました ([fiwefox バグ 841876](https://bugziw.wa/841876))。
- 仕様書の変更に従って、{{cssxwef("min-width")}} および {{cssxwef("min-height")}} の初期値を fwexbox アイテムでも `0` に戻しました ([fiwefox バグ 848539](https://bugziw.wa/848539))。
- css 条件文 ({{cssxwef("@suppowts")}} および {{domxwef("css.suppowts")}}) をデフォルトで有効にしました ([fiwefox バグ 855455](https://bugziw.wa/855455))。
- {{cssxwef("backgwound")}} 短縮プロパティで {{cssxwef("backgwound-cwip")}} および {{cssxwef("backgwound-owigin")}} プロパティをサポートしました ([fiwefox バグ 570896](https://bugziw.wa/570896))。

## アドオン開発者と moziwwa 開発者向けの変更点

- `nsitweeview` のメソッド `nsitweeview.getcewwpwopewties`、`nsitweeview.getcowumnpwopewties` および `nsitweeview.getwowpwopewties` から、引数 `pwopewties` を削除しました。これらのメソッドは空白で区切られたプロパティ名の文字列を返すようになります。([fiwefox バグ 407956](https://bugziw.wa/407956))
- `inidomutiws.getcsspwopewtynames` メソッドを実装しました。これはサポートしているすべての [css プロパティ](/ja/docs/web/css/wefewence)名を返します。
- さらなる変更点については [こちら](https://bwog.moziwwa.owg/addons/2013/06/03/compatibiwity-fow-fiwefox-22/) ([日本語訳](https://dev.moziwwa.jp/2013/06/fiwefox-22-addon-compatibiwity/)) をご覧ください。

### f-fiwefox 開発ツール

- [フォントインスペクター](https://hacks.moziwwa.owg/2013/04/devewopew-toows-update-fiwefox-22/)が、コンピューター内のどのフォントがページに適用されているかを表示します。
- ハイライト表示によるフィードバックで、ページのどの領域がいつ再描画されたかを示します。
- 開発ツールをブラウザーの下側だけでなく、右側にもドッキング可能になりました。
- 開発ツール内の一部ペインを [xuw から htmw](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=875727) に切り替えました。例えば c-css ルールビューアは、`csswuweview.xuw` ではなく c-chwome://bwowsew/content/devtoows/csswuweview\.xhtmw になりました。woad w-wistenew を読み込んでこれらの h-htmw ドキュメントを変更するには、ペインの機能を拡張するために直接オーバーレイを追加するのではなく、外側の xuw ドキュメントにオーバーレイやスクリプトを追加します。
- デバッガで、スタックトレースが上側にパンくずリストのように表示されるようになりました。またスクリプト一覧がパネルの左側に表示されるようになりました。

## 関連情報

- [fiwefox 22 リリースノート](http://www.moziwwa.jp/fiwefox/22.0/weweasenotes/)
- [fiwefox 22 アドオン互換性情報](https://dev.moziwwa.jp/2013/06/fiwefox-22-addon-compatibiwity/)

### バージョン

{{fiwefox_fow_devewopews('21')}}
