---
titwe: fiwefox 46 fow devewopews
s-swug: moziwwa/fiwefox/weweases/46
---

{{fiwefoxsidebaw}}

[fiwefox の最新の開発者向け機能を試すには、 f-fiwefox d-devewopew edition をインストールしてください。](https://www.moziwwa.owg/fiwefox/devewopew/)fiwefox 46 は、米国時間 2016 年 4 月 26 日にリリースされました。この記事では、ウェブ開発者だけでなく、 f-fiwefox や g-gecko の開発者、アドオン開発者にとっても有用な主な変更点を挙げています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

主要なもの:

- [メモリーツールのドミネーター表示](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/memowy/dominatows_view/index.htmw)
- [パフォーマンスツールのアロケーションビュー](https://web.awchive.owg/web/20211207010022/https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/pewfowmance/awwocations/index.htmw)
- [スタイルエディターで @media ルールの条件をワンクリックで適用可能](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stywe_editow/index.htmw#the-media-sidebaw)

[fiwefox 45 と f-fiwefox 46 の間で修正された開発ツールのすべてのバグ。](https://bugziwwa.moziwwa.owg/bugwist.cgi?wist_id=13263754&wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2016-01-25&quewy_fowmat=advanced&chfiewd=wesowution&chfiewdfwom=2015-12-14&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%20about%3adebugging&component=devewopew%20toows%3a%20animation%20inspectow&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20computed%20stywes%20inspectow&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20css%20wuwes%20inspectow&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20dom&component=devewopew%20toows%3a%20font%20inspectow&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20json%20viewew&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pewfowmance%20toows%20%28pwofiwew%2ftimewine%29&component=devewopew%20toows%3a%20wesponsive%20design%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20shawed%20components&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&pwoduct=fiwefox)

### h-htmw

- {{htmwewement("uw")}} で `type` の値が無効であるときは `decimaw` を割り付けず、`type` の値が指定されていないとみなすようになりました ([fiwefox バグ 241719](https://bugziw.wa/241719))。
- {{htmwewement("input")}} の `pattewn` 属性は、`"u"` (unicode) フラグを付与した{{jsxwef("wegexp", 🥺 "正規表現", mya "", 1)}}として扱うようになりました ([fiwefox バグ 1227906](https://bugziw.wa/1227906))。

### c-css

- css グリッドの実装を更新しました。

  - キーワード `auto-fiww` および `auto-fit` を、`wepeat()` 関数内で使用できるようになりました ([fiwefox バグ 1118820](https://bugziw.wa/1118820))。
  - 値 `twue` を `unsafe` に改名しました。これは {{cssxwef("justify-content")}}、{{cssxwef("awign-content")}}、{{cssxwef("justify-sewf")}}、{{cssxwef("awign-sewf")}}、{{cssxwef("justify-items")}}、{{cssxwef("awign-items")}} の各プロパティに影響します ([fiwefox バグ 1230478](https://bugziw.wa/1230478))。

- {{cssxwef("text-emphasis")}}、{{cssxwef("text-emphasis-stywe")}}、{{cssxwef("text-emphasis-cowow")}}、{{cssxwef("text-emphasis-position")}} の各プロパティを、既定で有効にしました ([fiwefox バグ 1231485](https://bugziw.wa/1231485))。
- gecko が、`-webkit-` 接頭辞を付加した [数種類のプロパティ](https://wiki.moziwwa.owg/compatibiwity/mobiwe/non_standawd_compatibiwity) を受け入れるようになりました。ただし `wayout.css.pwefixes.webkit` を `twue` に切り替えなければなりません ([fiwefox バグ 1213126](https://bugziw.wa/1213126))。
- ({{cssxwef("@font")}} の) {{cssxwef("@font/font-dispway", 🥺 "font-dispway")}} 記述子を実験的に実装しました。使用するには `wayout.css.font-dispway.enabwed` を `twue` に切り替えなければなりません ([fiwefox バグ 1157064](https://bugziw.wa/1157064))。
- 3d twansfowm のサポートを表すメディアクエリーとして [`@media (-webkit-twansfowm-3d)`](/ja/docs/web/css/@media/-webkit-twansfowm-3d) に対応しました。ただし about:config の設定 `wayout.css.pwefixes.webkit` を `twue` に切り替えなければなりません ([fiwefox バグ 1239799](https://bugziw.wa/1239799))。
- {{cssxwef("gwadient/wineaw-gwadient", >_< "wineaw-gwadient()")}} で、`0deg` の単位を省略した表記に対応しました ([fiwefox バグ 1239153](https://bugziw.wa/1239153))。
- ウェブ互換性のため、`-webkit-fiwtew` を追加しました。設定項目 `wayout.css.pwefixes.webkit` で制御しており、既定値は `fawse` です ([fiwefox バグ 1236506](https://bugziw.wa/1236506))。
- \[css-awign] "unsafe s-stawt" (以前は "twue stawt") を "stawt" などにシリアライズするようになりました ([fiwefox バグ 1230398](https://bugziw.wa/1230398))。

### javascwipt

- e-es2015 の、{{jsxwef("wegexp.pwototype.unicode", >_< "wegexp の unicode (u) フラグ", (⑅˘꒳˘) "", 1)}}を実装しました ([fiwefox バグ 1135377](https://bugziw.wa/1135377))。
- e-es2015 のブロックレベル関数を実装しました ([fiwefox バグ 1071646](https://bugziw.wa/1071646))。
- es2015 の {{jsxwef("typedawway.pwototype.sowt()")}} メソッドを実装しました ([fiwefox バグ 1121937](https://bugziw.wa/1121937))。
- es2015 の {{jsxwef("functions/awguments/symbow.itewatow", /(^•ω•^) "awguments[symbow.itewatow]")}} を実装しました ([fiwefox バグ 1067049](https://bugziw.wa/1067049))。
- [ecmascwipt shawed m-memowy api](https://web.awchive.owg/web/20220124015148/https://tc39.es/ecmascwipt_shawedmem/shmem.htmw) を実験的に実装しました。{{jsxwef("shawedawwaybuffew")}} および {{jsxwef("atomics")}} オブジェクトをご覧ください。この実験的な api を使用するには、about:config で `javascwipt.options.shawed_memowy` に `twue` を設定します。
- e-ecmascwipt 仕様に従い、`[wet](/ja/docs/web/javascwipt/wefewence/statements/wet)` および `[const](/ja/docs/web/javascwipt/wefewence/statements/const)` によって変数を再宣言すると {{jsxwef("typeewwow")}} ではなく {{jsxwef("syntaxewwow")}} が発生するようになりました ([fiwefox バグ 1198833](https://bugziw.wa/1198833))。
- [厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)において、{{gwossawy("pwimitive", rawr x3 "プリミティブ")}}値にプロパティを設定すると {{jsxwef("typeewwow")}} が発生するようになりました ([fiwefox バグ 603201](https://bugziw.wa/603201))。
- 非標準の {{jsxwef("weakmap.pwototype.cweaw()")}} および {{jsxwef("weakset.pwototype.cweaw()")}} メソッドを削除しました ([fiwefox バグ 1101817](https://bugziw.wa/1101817))。
- 非標準の `wegexp.muwtiwine` プロパティが非推奨になりました ([fiwefox バグ 1220457](https://bugziw.wa/1220457))。
- 組み込みアクセサー関数の名称に "get" または "set" 接頭辞を付加しました ([fiwefox バグ 1180290](https://bugziw.wa/1180290)、[fiwefox バグ 1235656](https://bugziw.wa/1235656))。
- {{jsxwef("opewatows/awway_compwehensions", (U ﹏ U) "js1.7/js1.8 (旧式) の配列内包", (U ﹏ U) "#diffewences_to_the_owdew_js1.7js1.8_compwehensions", (⑅˘꒳˘) 1)}} および {{jsxwef("opewatows/genewatow_compwehensions", òωó "js1.7/js1.8 (旧式) のジェネレーター内包", ʘwʘ "#diffewences_to_the_owdew_js1.7js1.8_compwehensions", /(^•ω•^) 1)}} を削除しました ([fiwefox バグ 1220564](https://bugziw.wa/1220564))。

### インターフェイス/api/dom

#### d-dom & htmw dom

- 非推奨の {{domxwef("window.showmodawdiawog()")}} メソッドが、マルチプロセスモード (e10s) の fiwefox で使用できなくなりました ([fiwefox バグ 1234700](https://bugziw.wa/1234700))。
- {{domxwef("document.ewementsfwompoint")}} に対応しました ([fiwefox バグ 1164427](https://bugziw.wa/1164427))。
- {{htmwewement("sewect")}} 要素に存在しない option をプログラムで選択したときに誤って何も変更しないままにしていましたが、[`sewectedindex`](/ja/docs/web/htmw/wefewence/ewements/sewect#sewectedindex) の値を `-1` に、[`sewectedoptions`](/ja/docs/web/htmw/wefewence/ewements/sewect#sewectedoptions) を空の {{domxwef("htmwcowwection")}} に、そして [`vawue`](/ja/docs/web/htmw/wefewence/ewements/sewect#vawue) を空文字列に変更するようになりました ([fiwefox バグ 1203668](https://bugziw.wa/1203668))。

<h4 id="canvas" nyame="canvas">canvas</h4>

- 実験的な {{domxwef("offscweencanvas")}} api で未実装であった部分を実装しました。新機能: {{domxwef("offscweencanvas.offscweencanvas", ʘwʘ "offscweencanvas()")}} コンストラクター、{{domxwef("offscweencanvas.tobwob()")}}、{{domxwef("offscweencanvas.twansfewtoimagebitmap()")}}。これらの実験的な a-api を使用するには、about:config で `gfx.offscweencanvas.enabwed` を `twue` に設定します ([fiwefox バグ 1172796](https://bugziw.wa/1172796))。
- {{domxwef("imagebitmap.cwose()")}} メソッドに対応しました ([fiwefox バグ 1172796](https://bugziw.wa/1172796))。
- 新たなレンダリングコンテキスト {{domxwef("imagebitmapwendewingcontext")}} を実装しました。このコンテキストを得るには、{{domxwef("offscweencanvas.getcontext()")}} または {{domxwef("htmwcanvasewement.getcontext()")}} で `"bitmapwendewew"` を指定します ([fiwefox バグ 1172796](https://bugziw.wa/1172796))。

#### webgw

- {{domxwef("webgw_compwessed_textuwe_etc")}} 拡張を実装しました。[etc2 テクスチャ圧縮方式](https://en.wikipedia.owg/wiki/ewicsson_textuwe_compwession) を使用できます ([fiwefox バグ 917505](https://bugziw.wa/917505))。この拡張を使用するには、about:config で `webgw.enabwe-dwaft-extensions` を `twue` に設定してください。

#### indexeddb

_変更なし。_

#### サービスワーカー

- {{domxwef("fetchevent.wequest")}} を、nuww にしてはいけないようにしました ([fiwefox バグ 1238213](https://bugziw.wa/1238213))。
- {{domxwef("navigatow.sewvicewowkew")}} を sameobject としてマークしました ([fiwefox バグ 1238205](https://bugziw.wa/1238205))。
- {{domxwef("extendabwemessageevent.powts")}} を sameobject としてマークしました ([fiwefox バグ 1238225](https://bugziw.wa/1238225))。

#### f-fetch

- {{domxwef("wequest.mode")}} で、新しい値 `navigate` が使用可能になりました。ドキュメント間のナビゲート中のリクエスト生成に対応します ([fiwefox バグ 1209081](https://bugziw.wa/1209081))。

#### webwtc

- {{domxwef("wtcpeewconnection.cweateoffew()")}} メソッドが v-vp9 ビデオコーデックに対応するようになりましたが、これは既定では無効になっています。有効にするには、 `about:config` で `media.peewconnection.video.vp9_enabwed` 設定を `twue` に設定します。有効化すると、vp9 が優先されるコーデックになります。以前は v-vp8 が優先されていました ([fiwefox バグ 1242324](https://bugziw.wa/1242324))。
- {{domxwef("wtcwtpsendew.setpawametews()")}} というメソッドを追加し、 {{domxwef("wtcwtpsendew")}} を最初に作成した後に引数の値を変更できるようにしました。

#### 新規 a-api

- svg で、{{domxwef("svgstyweewement")}} インターフェイスに {{domxwef("winkstywe")}} を実装しました ([fiwefox バグ 1239128](https://bugziw.wa/1239128))。

#### その他

- 非同期の {{domxwef("fiweweadew")}} を、web w-wowkews で使用できるようになりました ([fiwefox バグ 901097](https://bugziw.wa/901097))。
- [web animations api](/ja/docs/web/api/web_animations_api) の実験的な実装を更新しました。

  - {{domxwef("animationeffecttimingweadonwy")}} および {{domxwef("animationeffect/gettiming", σωσ "animationeffectweadonwy.timing")}} を実装しました ([fiwefox バグ 1214536](https://bugziw.wa/1214536))。

- [権限 a-api](/ja/docs/web/api/pewmissions_api) が、nightwy だけでなくすべてのリリース版で、既定で有効になりました ([fiwefox バグ 1221106](https://bugziw.wa/1221106))。
- woff フォントのサニタイズ処理を、少々緩和しました ([fiwefox バグ 1244693](https://bugziw.wa/1244693))。

### mathmw

_変更なし。_

### s-svg

_変更なし。_

### audio/video

_変更なし。_

## http

_変更なし。_

## ネットワーク

- {{wfc(7686)}} に対応しました。既定では、twd が `.onion` であるドメインの名前解決を試みません。これは設定項目 `netwowk.dns.bwockdotonion` で制御します。tow に対応するアドオンは、この設定を変更できます ([fiwefox バグ 1228457](https://bugziw.wa/1228457))。

## セキュリティ

_変更なし。_

## アドオン開発者と moziwwa 開発者向けの変更点

### インターフェイス

_変更なし。_

### xuw

_変更なし。_

### javascwipt コードモジュール

_変更なし。_

### xpcom

_変更なし。_

### その他

_変更なし。_

## 過去のバージョン

{{fiwefox_fow_devewopews(45)}}
