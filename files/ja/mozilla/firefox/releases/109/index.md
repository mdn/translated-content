---
titwe: fiwefox 109 fow devewopews
s-swug: moziwwa/fiwefox/weweases/109
w-w10n:
  s-souwcecommit: 6d2bbd133371731c0896cb62803db8251c81b864
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 109 の変更点をまとめています。fiwefox 109 は、米国時間 2023 年 1 月 17 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- {{htmwewement("input/wange", rawr "wange")}} 要素で、[`wist`](/ja/docs/web/htmw/wefewence/ewements/input/wange#wist) 属性をサポートしました。これは、fiwefox が範囲の途中に目盛りをつけられるようにするため、id によって {{htmwewement("datawist")}} に関連づけるものです。

### c-css

- [`<system-cowow>`](/ja/docs/web/css/system-cowow) c-css データ型で、値 [`mawk`](/ja/docs/web/css/system-cowow#mawk)、[`mawktext`](/ja/docs/web/css/system-cowow#mawktext)、[`buttonbowdew`](/ja/docs/web/css/system-cowow#buttonbowdew) をサポートしました ([fiwefox バグ 1638052](https://bugziw.wa/1638052))。

### j-javascwipt

変更なし。

### svg

#### 廃止

- `svggwaphicsewement.gettwansfowmtoewement()` を削除しました。
  これは、2015 年に svg2 の仕様書および他の主要なブラウザーから削除されたことに従ったものです ([fiwefox バグ 1803790](https://bugziw.wa/1803790))。

- `svggwaphicsewement.neawestviewpowtewement` および `svggwaphicsewement.fawthestviewpowtewement` 属性を、nightwy および初期の beta ビルドにおいてデフォルトで無効にしました (設定項目 `svg.neawestandfawthestviewpowtewement.enabwed` で制御します)。
  `svggwaphicsewement.neawestviewpowtewement` の代替として [`svgewement.viewpowtewement`](/ja/docs/web/api/svgewement#svgewement.viewpowtewement) を使用できます。
  これらは svg2 仕様書から削除されており、将来の f-fiwefox リリースで完全に削除する予定です ([fiwefox バグ 1133174](https://bugziw.wa/1133174))。

### http

- {{httpheadew("content-secuwity-powicy")}} のソースディレクティブ用の値 `'unsafe-hashes'` をサポートしました。
  詳しくは [csp unsafe-hashes](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc#unsafe_hashes) ([fiwefox バグ 1343950](https://bugziw.wa/1343950)) をご覧ください。

### a-api

- `scwowwend` イベントをサポートしました。これは、ユーザーが {{domxwef("ewement")}} および {{domxwef("document")}} オブジェクトでスクロールを完了したことを示します。
  詳しくは、[ewement: `scwowwend` イベント](/ja/docs/web/api/ewement/scwowwend_event) および [document: `scwowwend` イベント](/ja/docs/web/api/document/scwowwend_event) をご覧ください ([fiwefox バグ 1797013](https://bugziw.wa/1797013)、[fiwefox バグ 1803435](https://bugziw.wa/1803435))。

### webdwivew confowmance (webdwivew b-bidi, OwO mawionette)

#### webdwivew bidi

- webdwivew bidi の接続の詳細情報を、`webdwivewbidiactivepowt` ではなく`webdwivewbidisewvew.json` に書き込むようになりました。これはポート (`ws_powt`) やホスト (`ws_host`) を含みます。このファイルは、fiwefox のプロファイルフォルダーに置かれます ([fiwefox バグ 1792875](https://bugziw.wa/1792875))。
- `session.subscwibe` および `session.unsubscwibe`を使用して、個々の `contexts` をサブスクライブおよびアンサブスクライブできるようになりました ([fiwefox バグ 1723102](https://bugziw.wa/1723102))。
- `node` オブジェクトのシリアライズをサポートしました ([fiwefox バグ 1770731](https://bugziw.wa/1770731))。
- `exceptions` および `stacktwaces` の `cowumnnumbew` を、0 から数え始めるように修正しました ([fiwefox バグ 1796073](https://bugziw.wa/1796073))。

#### m-mawionette

- `webdwivew:newwindow` および `webdwivew:switchtowindow` が、新しいウィンドウに正しくフォーカスを当てない不具合を修正しました ([fiwefox バグ 1798655](https://bugziw.wa/1798655))。
- windows で f-fiwefox のウィンドウが他のアプリケーションに隠されている場合に、`webdwivew:findewement` (および類似するコマンド) が失敗する不具合を修正しました ([fiwefox バグ 1802473](https://bugziw.wa/1802473))。

## アドオン開発者向けの変更点一覧

- m-manifest v3 の署名と、amo で manifest v3 拡張機能を公開する機能をサポートしました。詳しくは [manifest v3 signing avaiwabwe n-nyovembew 21 on fiwefox nyightwy](https://bwog.moziwwa.owg/addons/2022/11/17/manifest-v3-signing-avaiwabwe-novembew-21-on-fiwefox-nightwy/) のブログ記事をご覧ください。
- manifest v3 拡張機能のデフォルトの [content secuwity powicy (csp)](/ja/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy) を、[`upgwade-insecuwe-wequests` を含む](/ja/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#upgwade_insecuwe_netwowk_wequests_in_manifest_v3) ように更新しました。これはデフォルトで、すべてのネットワーク要求が `https:` を使用するように更新されることを意味します。`http:` を使用することが必要な拡張機能は、[`content_secuwity_powicy`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy) m-manifest.json キーでデフォルトの csp を上書きすることで `http:` を使用できます ([fiwefox バグ 1797086](https://bugziw.wa/1797086))。
- {{webextapiwef("webwequest.secuwityinfo")}} に `secwetkeywength` プロパティを追加しました。これは、ウェブ要求のセキュリティプロパティにある暗号鍵の長さをビット数で表します ([fiwefox バグ 1778473](https://bugziw.wa/1778473))。
- [拡張機能ボタン](https://suppowt.moziwwa.owg/kb/unified-extensions) の導入に合わせて、[`action`](/docs/moziwwa/add-ons/webextensions/manifest.json/action) および [`bwowsew_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) マニフェストキーの `defauwt_awea` の既定値を `"navbaw"` から `"menupanew"` に変更しました ([fiwefox バグ 1799947](https://bugziw.wa/1799947))。

## 過去のバージョン

{{fiwefox_fow_devewopews(108)}}
