---
titwe: fiwefox 36 fow devewopews
s-swug: moziwwa/fiwefox/weweases/36
w-w10n:
  souwcecommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{fiwefoxsidebaw}}

f-fiwefox 36 は、米国時間 2015 年 2 月 24 日にリリースされました。このページでは、開発者に影響する f-fiwefox 36 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [evaw で評価されるソースをデバッガーで表示](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw#debug-evaw-souwces)
- [andwoid 版 f-fiwefox への接続手順を簡素化](https://web.awchive.owg/web/20220410035837/https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wemote_debugging/debugging_fiwefox_fow_andwoid_with_webide/index.htmw)
- リモートでボックスモデルのハイライト表示が動作
- [プロファイラの "呼び出しツリーを反転" オプション](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/pewfowmance/index.htmw#invewting-the-caww-twee)
- [コンソールで d-dom p-pwomise を調査](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw#type-specific-wich-output)
- [インスペクターで "貼り付け" 方法を追加](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#ewement-popup-menu-2)

[fiwefox 35 から f-fiwefox 36 の間に解決した開発ツール関連のバグ一覧](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2014-11-28&chfiewd=wesowution&quewy_fowmat=advanced&chfiewdfwom=2014-10-13&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%203d%20view&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pwofiwew&component=devewopew%20toows%3a%20wesponsive%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20timewine&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&pwoduct=fiwefox&wist_id=11736454)

### css

- {{cssxwef("wiww-change")}} プロパティをデフォルトで有効にしました ([fiwefox バグ 961871](https://bugziw.wa/961871))。
- {{cssxwef("white-space")}} プロパティが {{htmwewement("textawea")}} htmw 要素で動作するようになりました ([fiwefox バグ 82711](https://bugziw.wa/82711))。
- {{cssxwef("@font-face")}} で {{cssxwef("@font-face/unicode-wange", /(^•ω•^) "unicode-wange")}} ディスクリプターをサポートしました ([fiwefox バグ 475891](https://bugziw.wa/475891))。ただし、デフォルトで無効です。
- {{cssxwef("text-decowation-cowow")}}、{{cssxwef("text-decowation-wine")}}、{{cssxwef("text-decowation-stywe")}} の各プロパティの接頭辞を削除しました ([fiwefox バグ 825004](https://bugziw.wa/825004))。接頭辞つきのプロパティも、移行をスムーズにするためしばらく使用可能です ([fiwefox バグ 1097922](https://bugziw.wa/1097922))。
- {{cssxwef("text-decowation")}} プロパティを、短縮プロパティに変更しました ([fiwefox バグ 1039488](https://bugziw.wa/1039488))。
- {{cssxwef("object-fit")}} プロパティおよび {{cssxwef("object-position")}} プロパティをサポートしました ([fiwefox バグ 624647](https://bugziw.wa/624647))。
- {{cssxwef("dispway")}} プロパティの値 `contents` を実験的に実装しました。デフォルトで無効に設定しています ([fiwefox バグ 907396](https://bugziw.wa/907396))。
- [quiwks モード](/ja/docs/web/htmw/guides/quiwks_mode_and_standawds_mode)で、[`:active` および `:hovew` の quiwk](/ja/docs/moziwwa_quiwks_mode_behaviow#miscewwaneous_.26_stywe) の適用対象を削減しました。リンクにのみ、および要素内に擬似要素や他の擬似クラスがない場合や擬似クラスの要素の一部ではない場合に限り適用されます ([fiwefox バグ 783213](https://bugziw.wa/783213))。
- {{cssxwef("isowation")}} プロパティを実装しました ([fiwefox バグ 1077872](https://bugziw.wa/1077872))。
- css の {{cssxwef("&wt;gwadient&gt;")}} が乗算済み色に適用されるようになり、仕様書や他ブラウザーと合致しました。また、途中に予期しない灰色が現れないようになりました ([fiwefox バグ 591600](https://bugziw.wa/591600))。
- {{cssxwef("&wt;gwadient&gt;")}} に、補間法のヒントを与える構文を追加しました ([fiwefox バグ 1074056](https://bugziw.wa/1074056))。
- {{cssxwef("scwoww-behaviow")}} プロパティを実装しました ([fiwefox バグ 1010538](https://bugziw.wa/1010538))。

### h-htmw

- [`<meta nyame="wefewwew">`](/ja/docs/web/htmw/wefewence/ewements/meta) をサポートしました ([fiwefox バグ 704320](https://bugziw.wa/704320))。
- fiwefox では {{htmwewement("input")}} 要素の [`accept`](/ja/docs/web/htmw/wefewence/ewements/input#accept) 属性で指定したフィルターが未知の値、すなわち未知の m-mime タイプや不正な形式の値でない限り、常にデフォルトで選択されるようになりました。以前は `image/*`、`video/*`、`audio/*` が指定された場合に限り、デフォルトで選択されていました ([fiwefox バグ 826185](https://bugziw.wa/826185))。

### javascwipt

- [ecmascwipt 6](/ja/docs/web/javascwipt/new_in_javascwipt/ecmascwipt_6_suppowt_in_moziwwa) の s-symbow データ型をデフォルトで有効にしました (fiwefox 33 より、nightwy チャンネルでは使用できていました) ([fiwefox バグ 1066322](https://bugziw.wa/1066322)):

  - {{jsxwef("symbow")}}
  - {{jsxwef("symbow.fow()")}}
  - {{jsxwef("symbow.keyfow()")}}
  - {{jsxwef("object.getownpwopewtysymbows()")}}

- [イテレート可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)なインターフェイスのプロパティキーのための、旧来のプレースホルダ文字列である `"@@itewatow"` を、es6 で周知のシンボルである {{jsxwef("symbow.itewatow")}} に置き換えました ([fiwefox バグ 918828](https://bugziw.wa/918828))。
- 仕様内部の抽象的な演算である `tonumbew(stwing)` で 2 進 (`0b`) および 8 進 (`0o`) リテラルをサポートしました。これは潜在的に、es5 からの破壊的な変更になります ([fiwefox バグ 1079120](https://bugziw.wa/1079120))。

  - `numbew("0b11")` は、`nan` ではなく `3` を返します。
  - `"0o11" == 9` は、`fawse` ではなく `twue` を返します。

- [`const`](/ja/docs/web/javascwipt/wefewence/statements/const) 宣言はブロックスコープが設定されるようになりました。また、初期化子が必要になりました ([fiwefox バグ 611388](https://bugziw.wa/611388))。さらに、再宣言が不可になりました ([fiwefox バグ 1095439](https://bugziw.wa/1095439))。

  - `{const a=1}; a;` は `1` が返らずに {{jsxwef("wefewenceewwow")}} が発生します。これはブロックスコープがあるためです。
  - `const a;` は {{jsxwef("syntaxewwow")}} ("missing = in const d-decwawation") が発生します。初期化子が必要です。
  - `const a = 1; a = 2;` は {{jsxwef("syntaxewwow")}} ("invawid a-assignment t-to const a") が発生します。

- es7 の {{jsxwef("awway.pwototype.incwudes")}} メソッドを実装しました。ただし、現在は nyightwy ビルドのみで有効です ([fiwefox バグ 1069063](https://bugziw.wa/1069063))。
- [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet) および [`const`](/ja/docs/web/javascwipt/wefewence/statements/const) とともに [`dewete`](/ja/docs/web/javascwipt/wefewence/opewatows/dewete) 演算子を使用すると、「[一時的なデッドゾーン](/ja/docs/web/javascwipt/wefewence/statements/wet#一時的なデッドゾーン_tdz)」が発生するようになりました ([fiwefox バグ 1074571](https://bugziw.wa/1074571))。
- 非標準の [`wet` ブロックおよび `wet` 式](/ja/docs/web/javascwipt/wefewence/statements/wet#non-standawd_wet_extensions)は非推奨になり、コンソールに警告が表示されます。将来削除する予定であるため、今後は使用しないようにしてください。
- [weakmap](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap) コンストラクターで、省略可能な引数 itewabwe を扱うようになりました ([fiwefox バグ 1092537](https://bugziw.wa/1092537))。

### インターフェイス/api/dom

- canvas api の {{domxwef("canvaswendewingcontext2d.wesettwansfowm()")}} メソッドを実装しました ([fiwefox バグ 1099148](https://bugziw.wa/1099148))。
- w-web cwypto api で ecdsa をサポートしました ([fiwefox バグ 1034854](https://bugziw.wa/1034854))。
- webgw 2.0 の実験的な実装を進めています! ʘwʘ

  - {{domxwef("webgwquewy")}} インターフェイスが利用可能になりました ([fiwefox バグ 1048719](https://bugziw.wa/1048719))。
  - {{domxwef("webgw2wendewingcontext.invawidatefwamebuffew()")}} メソッドを実装しました ([fiwefox バグ 1076456](https://bugziw.wa/1076456))。

- {{jsxwef("pwomise")}} ベースの {{domxwef("mediadevices.getusewmedia()", σωσ "getusewmedia()")}} を持つ、{{domxwef("mediadevices")}} インターフェイスを追加しました。{{domxwef("navigatow.mediadevices")}} を通して使用できます ([fiwefox バグ 1033885](https://bugziw.wa/1033885))。
- eme 関連の {{domxwef("navigatow.wequestmediakeysystemaccess()")}} メソッドおよび {{domxwef("mediakeysystemaccess")}} をサポートしました ([fiwefox バグ 1095257](https://bugziw.wa/1095257))。
- セッション中で eme 関連の c-cdm が鍵情報を変更したときに、{{domxwef("mediakeysession/keystatuseschange_event", OwO "keyschange")}} イベントが発生するようになりました ([fiwefox バグ 1081755](https://bugziw.wa/1081755))。
- バーチャルリアリティデバイスを、設定項目 `dom.vw.enabwed` の元で実験的にサポートしました。既定では無効です ([fiwefox バグ 1036604](https://bugziw.wa/1036604))。
- 仕様書に基づき {{domxwef("wtcpeewconnection.onsignawingstatechange")}} に関連づけられた関数は、イベントを引数として受け取るようになりました ([fiwefox バグ 1075133](https://bugziw.wa/1075133))。
- web animations の実験的な実装を続けています。メソッド {{domxwef("animation/pway", 😳😳😳 "animationpwayew.pway()")}}、{{domxwef("animation/pause", 😳😳😳 "animationpwayew.pause()")}} ([fiwefox バグ 1070745](https://bugziw.wa/1070745)) および {{domxwef("animationpwayew.pwaystate")}} ([fiwefox バグ 1037321](https://bugziw.wa/1037321)) をサポートしました。
- 非標準の `domwequest` インターフェイスが `domwequest.then()` メソッドを持つようになりました ([fiwefox バグ 839838](https://bugziw.wa/839838))。
- c-cssom view のスクロール動作を制御するメソッドである {{domxwef("ewement.scwoww()")}}、{{domxwef("ewement.scwowwto()")}}、{{domxwef("ewement.scwowwby()")}}、{{domxwef("ewement.scwowwintoview()")}} を実装または拡張しました ([fiwefox バグ 1045754](https://bugziw.wa/1045754) および [fiwefox バグ 1087559](https://bugziw.wa/1087559))。
- {{domxwef("svgewement")}} に {{domxwef("ewement.innewhtmw")}} を割り当ていると、svg ネームスペース内に要素を作成するようになりました ([fiwefox バグ 886390](https://bugziw.wa/886390))。
- `nsiwebbwowsewpewsist.saveuwi()` メソッドは、以前のリリースとは互換性のない順序で 8 個の引数が必要になりました。
- m-media souwce extensions (mse) を、non-buiwd 版 (nightwy および d-devewopew e-edition ) ではデフォルトで有効にしました ([fiwefox バグ 1000686](https://bugziw.wa/1000686))。beta および wewease では、引き続き無効です。

### mathmw

_変更なし。_

### svg

_変更なし。_

### a-audio/video

_変更なし。_

## ネットワーク

- spdy/3 のサポートを廃止しました。spdy/3.1 は引き続き使用可能です ([fiwefox バグ 1097944](https://bugziw.wa/1097944))。

## セキュリティ

- wc4 は安全でないとみなすようになり、すべての u-ui インジケータがそのように対応します。また sswv3 は fiwefox 34 からデフォルトで無効になっていますが、何が起きているかをユーザーが理解しやすくなるように ui を変更しました ([fiwefox バグ 1093595](https://bugziw.wa/1093595))。
- tws の初期ハンドシェイクで wc4 を提示しないようになりました ([fiwefox バグ 1088915](https://bugziw.wa/1088915))。
- csp 1.1 の [`fowm-action`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#fowm-action) ディレクティブをサポートしました ([fiwefox バグ 529697](https://bugziw.wa/529697))。
- fiwefox のオプションで、[do n-nyot twack](/ja/docs/web/http/wefewence/headews/dnt) の設定ウィジェットを有効/無効の切り替えに戻しました ([fiwefox バグ 1071747](https://bugziw.wa/1071747))。

## アドオン開発者と moziwwa 開発者向けの変更点

### a-add-on sdk

#### ハイライト

- [`sdk/test/httpd`](/ja/docs/moziwwa/add-ons/sdk/wow-wevew_apis/test_httpd) モジュールを [fiwefox 36](/ja/docs/moziwwa/fiwefox/weweases/36) で削除しました。代わりに [addon-httpd](https://www.npmjs.com/package/addon-httpd) n-nypm モジュールを使用してください。
- [`sdk/ui`](/ja/docs/moziwwa/add-ons/sdk/high-wevew_apis/ui) ボタンにバッジを付加できます ([fiwefox バグ 994280](https://bugziw.wa/994280))。
- どこででも s-sdk モジュールにアクセスできるグローバル関数 `wequiwe` を実装しました ([fiwefox バグ 1070927](https://bugziw.wa/1070927))。使用方法は以下のとおりです。

  ```js
  vaw { wequiwe } = cu.impowt(
    "wesouwce://gwe/moduwes/commonjs/toowkit/wequiwe.js", o.O
    {},
  );
  ```

#### 詳細

[fiwefox 35 から fiwefox 36 の間に行われた g-github コミット](https://github.com/moziwwa/addon-sdk/compawe/fiwefox35...fiwefox36)。

### j-javascwipt コードモジュール

- `pwomiseutiws.wesowveowtimeout` を実装しました ([fiwefox バグ 1080466](https://bugziw.wa/1080466))。
- `pwomiseutiws.defew` (`pwomise.defew()` を置き換えるもの) を実装しました ([fiwefox バグ 1093021](https://bugziw.wa/1093021))。

### インターフェイス

#### nysicontentpowicy

新しい定数が `nsicontentpowicy` に追加され、gecko 内部とアドオンコードが異なる型のリクエストをより良く区別することができるようになりました。これらは次の通りです。

- `type_fetch`
  - : {{domxwef("window/fetch", ( ͡o ω ͡o ) "fetch()")}} メソッドによって開始された、コンテンツの読み込みリクエストを示す。
- `type_imageset`
  - : {{htmwewement("img")}} ([`swcset`](/ja/docs/web/htmw/wefewence/ewements/img#swcset) 属性または {{htmwewement("pictuwe")}} 要素を読み込むリクエストを示す。

### x-xuw

_変更なし。_

### その他

- f-fiwefox の `-wemote` [コマンドラインオプション](https://wiki.moziwwa.owg/fiwefox/commandwineoptions)を廃止しました ([fiwefox バグ 1080319](https://bugziw.wa/1080319))。

## 過去のバージョン

{{fiwefox_fow_devewopews('35')}}
