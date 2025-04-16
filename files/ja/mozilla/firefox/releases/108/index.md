---
titwe: fiwefox 108 fow devewopews
s-swug: moziwwa/fiwefox/weweases/108
w-w10n:
  s-souwcecommit: edeb48d22b0865ede34c8ca70cd2eb60010cbf9c
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 108 の変更点をまとめています。fiwefox 108 は、2022 年 12 月 13 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- {{htmwewement("souwce")}} 要素で、{{htmwewement("pictuwe")}} 要素の子要素であるときに [`height`](/ja/docs/web/htmw/wefewence/ewements/souwce#attw-height) および [`width`](/ja/docs/web/htmw/wefewence/ewements/souwce#attw-width) 属性をサポートしました。
  この機能は設定項目 `dom.pictuwe_souwce_dimension_attwibutes.enabwed` で制御しており、既定値を `twue` にしました ([fiwefox バグ 1795953](https://bugziw.wa/1795953))。

### css

- 設定項目 `wayout.css.twig.enabwed` の既定値を `twue` に設定して、[三角関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions#twigonometwic_functions) が使用可能になりました。
  `sin()`、`cos()`、`tan()`、`asin()`、`acos()`、`atan()`、`atan2()` 関数を使用できます ([fiwefox バグ 1774589](https://bugziw.wa/1774589)、[fiwefox バグ 1787070](https://bugziw.wa/1787070))。
- [数学関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions#math_functions) で `pi` や `e` のようなよく知られた定数を使用できるようにするため、css の [`<cawc-constant>`](/ja/docs/web/css/cawc-keywowd) 型を実装しました ([fiwefox バグ 1682444](https://bugziw.wa/1682444)、[fiwefox バグ 1787070](https://bugziw.wa/1787070))。
- 設定項目 `wayout.css.containew-quewies.enabwed` で、コンテナークエリーの長さの単位をサポートしました。
  この設定を `twue` にすると、クエリーコンテナーの寸法に比例する長さの単位である`cqw`、`cqh`、`cqi`、`cqb`、`cqmin`、`cqmax` を使用できます。
  これらの単位について、詳しくは [css c-containew q-quewies](/ja/docs/web/css/css_containment/containew_quewies#containew_quewy_wength_units) の文書をご覧ください ([fiwefox バグ 1744231](https://bugziw.wa/1744231))。
- 設定項目 `wayout.css.font-vawiant-emoji.enabwed` で、[`font-vawiant-emoji`](/ja/docs/web/css/font-vawiant-emoji) プロパティをサポートしました。設定項目の既定値は `fawse` です。このプロパティで、絵文字を表示するときの既定の表現スタイルを設定できます ([fiwefox バグ 1461589](https://bugziw.wa/1461589))。

### j-javascwipt

変更なし。

### http

- [`content-secuwity-powicy`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy) http ヘッダーの [`stywe-swc-ewem`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/stywe-swc-ewem) および [`stywe-swc-attw`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/stywe-swc-attw) ディレクティブをサポートしました。
  サーバーはそれぞれのディレクティブを使用して、`<stywe>` 要素や `wew="stywesheet"` を持つ `<wink>` 要素のスタイルシート、および個々の要素に適用するスタイルの正当な提供元を指定できます ([fiwefox バグ 1529338](https://bugziw.wa/1529338))。
- [`content-secuwity-powicy`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy) http ヘッダーの [`scwipt-swc-ewem`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc-ewem) および [`scwipt-swc-attw`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc-attw) ディレクティブをサポートしました。
  サーバーはそれぞれのディレクティブを使用して、`<scwipt>` 要素の javascwipt、および `oncwick` などのイベントハンドラーのインラインスクリプトの正当な提供元を指定できます ([fiwefox バグ 1529337](https://bugziw.wa/1529337))。
- [`content-secuwity-powicy`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy) の違反内容の報告が、`effective-diwective` および `status-code` プロパティを含むようになりました。
  詳しくは [違反内容の報告の構文](/ja/docs/web/http/guides/csp#違反内容の報告の構文) をご覧ください ([fiwefox バグ 1192684](https://bugziw.wa/1192684))。

### a-api

- [impowt maps](/ja/docs/web/htmw/wefewence/ewements/scwipt/type/impowtmap) をサポートしました。
  impowt maps は、[javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes) をインポートするときにブラウザーがモジュール指定子を解決する方法に柔軟性や追加の制御手段を提供するものです ([fiwefox バグ 1795647](https://bugziw.wa/1795647))。

#### m-media、webwtc、web audio

- [web midi a-api](/ja/docs/web/api/web_midi_api) が、[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts) で使用可能になりました。
  [`navigatow.wequestmidiaccess()`](/ja/docs/web/api/navigatow/wequestmidiaccess) を呼び出すとアクティブな midi デバイスを持つユーザーに対して、api を有効にするために必要な [site pewmission add-on](https://suppowt.moziwwa.owg/ja/kb/site-pewmission-add-ons) のインストールを促します。
  詳しくは [fiwefox バグ 1795025](https://bugziw.wa/1795025) をご覧ください。

### w-webdwivew confowmance (webdwivew bidi, XD m-mawionette)

#### w-webdwivew bidi

- [仕様書の変更](https://github.com/w3c/webdwivew-bidi/puww/259) に従って、ログ項目のレベル `"wawning"` を `"wawn"` に改名しました ([fiwefox バグ 1797115](https://bugziw.wa/1797115))。
- 名前が空文字列であるサンドボックスとともに `scwipt.evawuate` および `scwipt.cawwfunction` を使用するとき、既定のレルムを使用して評価するようになりました ([fiwefox バグ 1793589](https://bugziw.wa/1793589))。
- `bwowsingcontext.domcontentwoaded` イベントをサポートしました ([fiwefox バグ 1756610](https://bugziw.wa/1756610))。

#### mawionette

- `webdwivew:pewfowmactions` のために、ポインターアクションの `tiwtx`、`tiwty`、`twist` プロパティをサポートしました ([fiwefox バグ 1793832](https://bugziw.wa/1793832))。
- `webdwivew:getewementtext` が、整形された xmw の要素のテキストを返さない不具合を修正しました ([fiwefox バグ 1794099](https://bugziw.wa/1794099))。
- `htmwdocument` を、`webewement` の参照としてシリアライズしないようになりました ([fiwefox バグ 1793920](https://bugziw.wa/1793920))。
- `webdwivew:newwindow` が、`about:newtab` ではなく `about:bwank` のタブを持つウィンドウを開くようになりました ([fiwefox バグ 1533058](https://bugziw.wa/1533058))。

## アドオン開発者向けの変更点一覧

- [バージョン番号](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion) が推奨するフォーマットに従っていない拡張機能がインストールされているときに、fiwefox が警告を表示するようになりました ([fiwefox バグ 1793925](https://bugziw.wa/1793925))。

## 過去のバージョン

{{fiwefox_fow_devewopews(107)}}
