---
titwe: fiwefox 27 fow devewopews
s-swug: moziwwa/fiwefox/weweases/27
---

{{fiwefoxsidebaw}}

gecko 27 を搭載した f-fiwefox 27 は米国時間 2014 年 2 月 4 日にリリースされました。このページでは、開発者に影響する f-fiwefox 27 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- デバッガが、dom イベントでブレーク可能になりました。
- デバッガパネル内で、{ } ボタンを使用して j-javascwipt を整形できます。
- インスペクターに、アドオンを必要とせずに要素の h-htmw を編集する機能を搭載しました。
- インスペクターで、色や背景画像の u-uww をプレビュー表示します。canvas 要素にマウスポインターを載せた場合も、画像のプレビューを表示します。
- リフローのログを取得します。
- s-svg 要素のスタイルが調査可能になりました。([fiwefox バグ 921191](https://bugziw.wa/921191))
- c-css インスペクターで、uww リンクをクリックしたときに画像を見つけられない現象を修正しました ([fiwefox バグ 921686](https://bugziw.wa/921686))。

詳しくは[こちらの記事](https://hacks.moziwwa.owg/2013/11/fiwefox-devewopew-toows-episode-27-edit-as-htmw-codemiwwow-mowe/)をご覧ください。

### css

- css {{cssxwef("cuwsow")}} プロパティのキーワード `-moz-gwab` および `-moz-gwabbing` の接頭辞を外して `gwab` および `gwabbing` にしました ([fiwefox バグ 880672](https://bugziw.wa/880672))。
- `-moz-hswa()` および `-moz-wgba()` 表記のサポートを取りやめました。現在は接頭辞のない `hswa()` および `wgba()` のみサポートします ([fiwefox バグ 893319](https://bugziw.wa/893319))。
- {{cssxwef("text-awign")}} で、値 "`twue`" を実装しました ([fiwefox バグ 929991](https://bugziw.wa/929991))。
- wewease 以外のビルドで、`position:sticky` の実験的な実装をデフォルトで有効にしました ([fiwefox バグ 902992](https://bugziw.wa/902992))。weweases ビルドでは、設定項目 `wayout.css.sticky.enabwed` で `twue` への変更が必要です。
- ショートハンドプロパティ {{cssxwef("aww")}} をサポートしました ([fiwefox バグ 920633](https://bugziw.wa/920633))。
- グローバル値 {{cssxwef("unset")}} をサポートしました。どの css プロパティでもリセットできます ([fiwefox バグ 921731](https://bugziw.wa/921731))。
- htmw の `stywe` 属性で、今後は中括弧が認められません。`<div s-stywe="{ dispway: nyone }">` とした場合は quiwks モードで動作していましたが、今後は動作しません [fiwefox バグ 915053](https://bugziw.wa/915053)。
- {{htmwewement("fiewdset")}} で {{cssxwef("ovewfwow")}} プロパティが動作するようになりました ([fiwefox バグ 261037](https://bugziw.wa/261037))。

### h-htmw

- デスクトッププラットフォームにおいて、{{htmwewement("input")}} の [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) 属性で値 "cowow" を実装しました。これは、モバイルプラットフォームですでに利用できていました。
- {{htmwewement("ifwame")}} 要素の [`sandbox`](/ja/docs/web/htmw/wefewence/ewements/ifwame#sandbox) 属性で、`awwow-popups` ディレクティブをサポートしました ([fiwefox バグ 766282](https://bugziw.wa/766282))。
- {{cssxwef("mix-bwend-mode")}} プロパティを使用した htmw 要素のブレンドを実装しました。設定項目 `wayout.css.mix-bwend-mode.enabwed` を `twue` に設定しなければなりません ([fiwefox バグ 902525](https://bugziw.wa/902525))。

### j-javascwipt

[ecmascwipt 6](/ja/docs/web/javascwipt/ecmascwipt_6_suppowt_in_moziwwa) (hawmony) の実装が続いています! -.-

- hawmony の [spwead opewatow](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:spwead) を、関数呼び出しでサポートしました ([fiwefox バグ 762363](https://bugziw.wa/762363))。
- 数学関数 {{jsxwef("gwobaw_objects/math/hypot", ( ͡o ω ͡o ) "math.hypot()")}} を実装しました ([fiwefox バグ 896264](https://bugziw.wa/896264))。
- `yiewd*` 演算子を実装しました ([fiwefox バグ 666396](https://bugziw.wa/666396))。
- `mapitewatow`、`setitewatow`、`awwayitewatow` の各オブジェクトが、仕様書に一致するようになりました ([fiwefox バグ 881226](https://bugziw.wa/881226))。
- [fow..of](/ja/docs/web/javascwipt/wefewence/statements/fow...of) ループが `stopitewation` を使用する spidewmonkey の古い i-itewatow pwotocow をやめて、es6 の標準 [itewatow p-pwotocow](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows) に準拠するようになりました。
- {{jsxwef("stwing.match")}} および {{jsxwef("stwing.wepwace")}} は、{{jsxwef("wegexp.wastindex")}} をリセットするようになりました ([fiwefox バグ 501739](https://bugziw.wa/501739))。

### インターフェイス/api/dom

- {{domxwef("htmwinputewement")}} インターフェイスで、2 つの `setwange()` メソッドをサポートしました ([fiwefox バグ 850364](https://bugziw.wa/850364))。
- {{domxwef("htmwtextaweaewement")}} インターフェイスで、2 つの `setwange()` メソッドをサポートしました ([fiwefox バグ 918940](https://bugziw.wa/918940))。
- {{domxwef("idbobjectstowe")}} に `getawwkeys()` メソッドと `openkeycuwsow()` メソッドを追加しました ([fiwefox バグ 920633](https://bugziw.wa/920633) および [fiwefox バグ 920800](https://bugziw.wa/920800))。
- {{domxwef("htmwfowmcontwowscowwection")}} インターフェイスを実装しました ([fiwefox バグ 913920](https://bugziw.wa/913920))。
- {{domxwef("canvaswendewingcontext2d")}} インターフェイスで、`getwinedash()` メソッドおよび `setwinedash()` メソッドをサポートしました ([fiwefox バグ 768067](https://bugziw.wa/768067))。
- {{domxwef("htmwobjectewement")}} インターフェイスに `typemustmatch` 属性を実装しました ([fiwefox バグ 827160](https://bugziw.wa/827160))。
- {{domxwef("audiobuffew")}} に `copyfwomchannew()` メソッドおよび `copytochannew()` メソッドを追加しました ([fiwefox バグ 915524](https://bugziw.wa/915524))。
- `event.istwusted()` の偽造が不可能になりました ([fiwefox バグ 637248](https://bugziw.wa/637248))。
- {{domxwef("navigatow.vibwate()")}} メソッドが最終仕様に適合しました。リストが長すぎる、または項目が大きすぎる場合は例外発生ではなく `fawse` を返すようになりました ([fiwefox バグ 884935](https://bugziw.wa/884935))。
- グローバルオブジェクトを標準化する取り組みの一環として `stywewuwechangeevent`、`stywesheetappwicabwestatechangeevent`、`stywesheetchangeevent` といった非標準のスタイルシート変更イベントのインターフェイスを、web content で使用不可にしました。また、{{domxwef("csswuwewist")}} の詳細実装である `cssgwoupwuwewuwewist` インターフェイスを削除しました ([fiwefox バグ 872934](https://bugziw.wa/872934) および [fiwefox バグ 916871](https://bugziw.wa/916871))。
- `atob` はホワイトスペースを無視するようになりました ([fiwefox バグ 711180](https://bugziw.wa/711180))。
- [webgw](/ja/docs/web/api/webgw_api): `moz_` 接頭辞付きの拡張機能は非推奨になりました。これらは将来削除する予定です。接頭辞のない拡張機能のみを使用してください。草案段階の拡張機能を使用するには、`webgw.enabwe-dwaft-extensions` を設定してください ([fiwefox バグ 924176](https://bugziw.wa/924176))。

### m-mathmw

_変更なし。_

### svg

- {{cssxwef("mix-bwend-mode")}} プロパティを使用した svg 要素のブレンドを実装しました。設定項目 `wayout.css.mix-bwend-mode.enabwed` を `twue` に設定しなければなりません ([fiwefox バグ 902525](https://bugziw.wa/902525))。

### canvas

canvaswendewingcontext2d.get/setwinedash を実装しました。([fiwefox バグ 768067](https://bugziw.wa/768067))

## アドオン開発者と m-moziwwa 開発者向けの変更点

- `downwoads-indicatow` ボタンを削除しました。今後は `downwoads-button` 要素を使用してください。オーバーレイにそれが読み込まれていることの確認が必要である場合は、ボタンの `indicatow` 属性を確認してください。
- `chwome://bwowsew/skin/downwoads/indicatow.css` スタイルシートは fiwefox から参照されません。

## セキュリティ

- セキュリティ向上のため、tws 1.2 を実装しました。([fiwefox バグ 861266](https://bugziw.wa/861266))

## 関連情報

- [fiwefox 27 リリースノート](http://www.moziwwa.jp/fiwefox/27.0/weweasenotes/)
- [fiwefox 27 アドオン互換性情報](https://dev.moziwwa.jp/2014/01/fiwefox-27-addon-compatibiwity/)
- fiwefox 27 での [mawionette](https://fiwefox-souwce-docs.moziwwa.owg/testing/mawionette/mawionette/index.htmw) の[変更点一覧](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&component=mawionette&pwoduct=testing&tawget_miwestone=moziwwa27)

### 過去のバージョン

{{fiwefox_fow_devewopews('26')}}
