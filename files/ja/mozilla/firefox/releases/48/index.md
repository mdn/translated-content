---
title: Firefox 48 for developers
slug: Mozilla/Firefox/Releases/48
l10n:
  sourceCommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{FirefoxSidebar}}

[Firefox の最新の開発者向け機能を試すには、Firefox Developer Edition をインストールしてください。](https://www.mozilla.org/firefox/developer/) Firefox 48 は、米国時間 2016 年 8 月 2 日にリリースされました。このページでは、開発者に影響する Firefox 48 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- コンテンツ内で要素の位置を変更できるようになりました ([Firefox バグ 1139187](https://bugzil.la/1139187))。
- コンソールの出力を消去するための {{domxref("console.clear()")}} を実装しました ([Firefox バグ 659625](https://bugzil.la/659625))。
- ウェブコンソールに [HTTP ログの調査機能](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#viewing-network-request-details) を追加しました ([Firefox バグ 1211525](https://bugzil.la/1211525))。
- [Firebug のテーマ](https://firefox-source-docs.mozilla.org/devtools-user/tools_toolbox/index.html#choose-devtools-theme) を追加しました ([Firefox バグ 1244054](https://bugzil.la/1244054))。
- [DOM 調査ツール](https://firefox-source-docs.mozilla.org/devtools-user/dom_property_viewer/index.html)を追加しました ([Firefox バグ 1201475](https://bugzil.la/1201475))。
- [フォントインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#fonts-view)を、再びデフォルトで有効にしました ([Firefox バグ 1280121](https://bugzil.la/1280121))。
- CSS プロパティの[補完機能を改良しました](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#edit-rules) ([Firefox バグ 1168246](https://bugzil.la/1168246))。
- Cookie、ローカルストレージ、セッションストレージの項目を、ダブルクリックして編集できます ([Firefox バグ 1231154](https://bugzil.la/1231154)、[Firefox バグ 1231179](https://bugzil.la/1231179)、[Firefox バグ 1231155](https://bugzil.la/1231155))。

### HTML

- {{HTMLElement("details")}} および {{HTMLElement("summary")}} 要素を、Nightly および Aurora (DevTools) でデフォルトで有効にしました。Beta および Release では無効です:

  - これらの要素のデフォルトのスタイルが、仕様書に合致するようになりました ([Firefox バグ 1258657](https://bugzil.la/1258657))。
  - {{domxref("HTMLDetailsElement/toggle_event", "toggle")}} イベントが、{{HTMLElement("details")}} 要素を開いたり閉じたりしたときに送られるようになりました ([Firefox バグ 1225412](https://bugzil.la/1225412))。

- [`meta`](/ja/docs/Web/HTML/Element/referrer#meta) 属性で、値 `no-referrer-when-downgrade` および `origin-when-cross-origin` をサポートしました ([Firefox バグ 1178337](https://bugzil.la/1178337))。

### CSS

- 仕様書に準拠するよう、{{cssxref("calc", "calc()")}} を改良しました。

  - {{cssxref("line-height")}} プロパティで {{cssxref("calc", "calc()")}} をサポートしました ([Firefox バグ 594933](https://bugzil.la/594933))。
  - CSS {{cssxref("calc", "calc()")}} の入れ子をサポートしました ([Firefox バグ 968761](https://bugzil.la/968761))。

- CSS グリッドの実験的な実装を更新しました。

  - グリッドレイアウトでフラグメンテーションを実装しました ([Firefox バグ 1144096](https://bugzil.la/1144096))。
  - \[css-grid] グリッドコンテナーのサイズが不定である場合は、パーセンテージ指定されたトラックのサイズを `auto` として扱うようになりました ([Firefox バグ 1264607](https://bugzil.la/1264607))。
  - {{HTMLElement("fieldset")}} で grid および flex レイアウトをサポートしました ([Firefox バグ 1230207](https://bugzil.la/1230207))。

- {{cssxref("mask-mode")}} で値 `luminance` をサポートしました。また、仕様書に合わせて値 `auto` を `match-source` に改名しました ([Firefox バグ 1228354](https://bugzil.la/1228354))。
- CSS Animation および CSS Transition で、 {{cssxref("clip-path")}} の基本シェイプの補間処理をサポートしました ([Firefox バグ 1110460](https://bugzil.la/1110460))。
- {{cssxref("text-combine-upright")}} プロパティの値 `all` で縦中横 (_horizontal-in-vertical_) テキストをサポートしました ([Firefox バグ 1097499](https://bugzil.la/1097499)).
- 画像や背景の印刷をページから許可できるようにするための {{cssxref("color-adjust")}} プロパティを実験的にサポートしました ([Firefox バグ 1209273](https://bugzil.la/1209273))。
- {{cssxref("::first-letter")}} 擬似要素が、実際の先頭文字の前または直後にあるタイプ Pd の句読点にも一致するようになりました。これは CSS Pseudo-element module level 4 の新たな要求です ([Firefox バグ 1260366](https://bugzil.la/1260366))。
- いくつかの `-webkit` 接頭辞付きプロパティおよび値を、ウェブの互換性のためにサポートしました。設定項目 `layout.css.prefixes.webkit` で制御しており、既定値は `false` です:

  - {{cssxref("-webkit-text-fill-color")}} ([Firefox バグ 1247777](https://bugzil.la/1247777))
  - {{cssxref("-webkit-text-stroke")}}, {{cssxref("-webkit-text-stroke-color")}}, {{cssxref("-webkit-text-stroke-width")}} ([Firefox バグ 1248708](https://bugzil.la/1248708))
  - `-webkit-background-clip` (background-clip として) の値 text ([Firefox バグ 759568](https://bugzil.la/759568)).
  - `-webkit-box-direction`、`-webkit-box-orient` ([Firefox バグ 1262049](https://bugzil.la/1262049).
  - {{cssxref("display")}} プロパティの値 `-webkit-inline-box` を、`inline-flex` の別名としてサポートしました ([Firefox バグ 1257661](https://bugzil.la/1257661))。
  - `-webkit-flex-direction`、`-webkit-flex-wrap`、`-webkit-flex-flow`、`-webkit-order`、`-webkit-flex`、`-webkit-flex-grow`、`-webkit-flex-shrink`、`-webkit-flex-basis`、`-webkit-justify-content`、`-webkit-align-items`、`-webkit-align-self`、`-webkit-align-content` を接頭辞なしプロパティの別名として、また {{cssxref("display")}} プロパティの値 `-webkit-flex` および `-webkit-inline-flex` を接頭辞なし値の別名として追加しました ([Firefox バグ 1274096](https://bugzil.la/1274096))。
  - `-webkit-box-flex`、`-webkit-box-ordinal-group`、`-webkit-box-align`、`-webkit-box-pack` プロパティおよび {{cssxref("display")}} プロパティの値 `-webkit-box` を、最新の [CSS フレックスボックス](/ja/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) の別名として追加しました ([Firefox バグ 1208635](https://bugzil.la/1208635))。

- {{cssxref("background-clip")}} の値 `text` が、(Release 以外のビルドだけでなく) すべてのタイプの Firefox で使用可能になりました ([Firefox バグ 1263516](https://bugzil.la/1263516))。
- {{cssxref("position")}} プロパティの値 `absolute` を、最上位レイヤーの要素でサポートしました ([Firefox バグ 1236828](https://bugzil.la/1236828))。
- 設定を検出するため、{{domxref("@supports")}} の内部利用限定の構文をサポートしました ([Firefox バグ 1259889](https://bugzil.la/1259889))。

### JavaScript

#### 新規 API

- {{jsxref("String.prototype.padStart()")}} および {{jsxref("String.prototype.padEnd()")}} メソッドを実装しました ([Firefox バグ 1260509](https://bugzil.la/1260509))。
- ES2015 (ES6) の {{jsxref("Symbol.unscopables")}} および {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}} プロパティを実装しました ([Firefox バグ 1054759](https://bugzil.la/1054759) および [Firefox バグ 1258163](https://bugzil.la/1258163))。
- ES2015 (ES6) の {{jsxref("Symbol.isConcatSpreadable")}} シンボルを実装しました ([Firefox バグ 1041586](https://bugzil.la/1041586))。
- ES2015 (ES6) の {{jsxref("Array.Symbol.species", "Array[Symbol.species]")}} getter を実装しました ([Firefox バグ 1165052](https://bugzil.la/1165052))。
- ES2015 (ES6) の {{jsxref("ArrayBuffer.Symbol.species", "ArrayBuffer[Symbol.species]")}} getter および {{jsxref("TypedArray.Symbol.species", "%TypedArray%[Symbol.species]")}} getter を実装しました ([Firefox バグ 1165053](https://bugzil.la/1165053))。
- ECMAScript Internationalization API 草案の {{jsxref("Intl.getCanonicalLocales()")}} メソッドを実装しました ([Firefox バグ 1263040](https://bugzil.la/1263040))。

#### 非推奨化および削除

- 非推奨の [古い Proxy API](/ja/docs/Archive/Web/Old_Proxy_API) (`Proxy.create` および `Proxy.createFunction()`) を廃止しました。代わりに標準の {{jsxref("Proxy")}} オブジェクトを使用してください ([Firefox バグ 892903](https://bugzil.la/892903))。
- `String.prototype.contains()` メソッドを削除しました (バージョン 40 より非推奨でした)。代わりに {{jsxref("String.prototype.includes()")}} メソッドを使用してください ([Firefox バグ 1103588](https://bugzil.la/1103588))。
- 非標準の `RegExp.multiline` プロパティ ({{jsxref("RegExp.prototype.multiline")}} ではありません) を削除しました。代わりに標準の [m フラグ](/ja/docs/Web/JavaScript/Guide/Regular_expressions#フラグを用いた高度な検索) を使用してください ([Firefox バグ 1219757](https://bugzil.la/1219757))。
- [`Object.prototype.__defineGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) および [`Object.prototype.__defineSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) メソッドは、オブジェクトを伴わないグローバルスコープでは呼び出すことができなくなりました ([Firefox バグ 1253016](https://bugzil.la/1253016))。

### インターフェイス/API/DOM

#### DOM & HTML DOM

- {{domxref("CSSKeyframeRule")}} および {{domxref("CSSKeyframesRule")}} インターフェイスから "Moz" 接頭辞を削除しました ([Firefox バグ 1256178](https://bugzil.la/1256178))。
- {{domxref("NavigatorConcurrentHardware")}} {{Glossary("mixin")}} を実装しました。これは、{{domxref("Navigator")}} インターフェイスに {{domxref("NavigatorConcurrentHardware.hardwareConcurrency", "window.navigator.hardwareConcurrency")}} プロパティを追加します。このプロパティにより、{{domxref("Worker")}} を実行できるプロセッシングコアがいくつあるか (少なくとも概算値) をウェブサイトやアプリが取得できます ([Firefox バグ 1008453](https://bugzil.la/1008453))。
- Firefox 10 で削除した {{domxref("Node.isSameNode()")}} メソッドを再追加しました。仕様書に長く存在していませんでしたが、再び追加されました ([Firefox バグ 1256299](https://bugzil.la/1256299))。
- {{domxref("Navigator.registerProtocolHandler()")}} を呼び出す際に誤りがあった場合に、Firefox が数値ではなく適切な例外を返すようになりました。
- {{domxref("Element.animate()")}} をデフォルトで有効にしました ([Firefox バグ 1245000](https://bugzil.la/1245000))。
- {{domxref("Element.insertAdjacentText()")}} および {{domxref("Element.insertAdjacentElement()")}} メソッドを実装しました ([Firefox バグ 811259](https://bugzil.la/811259))。
- {{domxref("Document.scrollingElement")}} をデフォルトで有効にしました ([Firefox バグ 1265032](https://bugzil.la/1265032))。
- `Node.localName`、`Node.namespaceURI`、`Node.prefix` を {{domxref("Element")}} および {{domxref("Attr")}} API に移動しました ([Firefox バグ 1055776](https://bugzil.la/1055776))。
- 最新の仕様書に従って、以下のキーについて {{domxref("KeyboardEvent.code")}} が返す値を変更しました ([Firefox バグ 1264150](https://bugzil.la/1264150) を参照):

  - `"OSLeft"` および `"OSRight"` が `"MetaLeft"` および `"MetaRight"` になりました。
  - `"VolumeDown"`、`"VolumeUp"`、`"VolumeMute"` が `"AudioVolumeDown"`、`"AudioVolumeUp"`、`"AudoVolumeMute"` になりました。
  - `"IntlHash"` を削除しました。
  - 以前のバージョンの Firefox で `code` の値が "" になっていたすべてのキーが、"Unidentified" を知らせるようになりました。

#### Canvas 2D

- {{domxref("CanvasRenderingContext2D.ellipse()")}} メソッドを実装しました ([Firefox バグ 910138](https://bugzil.la/910138))。

#### WebRTC

- {{domxref("MediaStream.clone()")}} および {{domxref("MediaStreamTrack.clone()")}} メソッドを実装しました ([Firefox バグ 1208371](https://bugzil.la/1208371))。
- `iceRestart` 項目を `RTCOfferOptions` で対応しました。 {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} で ICE の再開や更新を可能にします ([Firefox バグ 906986](https://bugzil.la/906986))。
- {{domxref("RTCPeerConnection.createOffer()")}} メソッドが、デフォルトで VP9 動画コーデックを選択するようになりました。以前は VP8 を選択していました ([Firefox バグ 1242324](https://bugzil.la/1242324))。

#### その他

- [Web Crypto API](/ja/docs/Web/API/Web_Crypto_API) が [Web workers](/ja/docs/Web/API/Web_Workers_API) で使用可能になりました ([Firefox バグ 842818](https://bugzil.la/842818))。
- {{domxref("CustomEvent")}} インターフェイスが [Web Workers](/ja/docs/Web/API/Web_Workers_API) で使用可能になりました ([Firefox バグ 1003432](https://bugzil.la/1003432))。
- `DOMApplicationsManager.getNotInstalled()` メソッドを削除しました ([Firefox バグ 1255036](https://bugzil.la/1255036))。
- 誤ってウェブに公開されていた Firefox OS の API を、本来すべきであったとおりに隠蔽しました。対象は {{domxref("mozContact")}}、{{domxref("MozContactChangeEvent")}}、{{domxref("navigator.mozContacts")}}、{{domxref("MozPowerManager")}}、{{domxref("MozSettingsEvent")}} です ([Firefox バグ 1043562](https://bugzil.la/1043562)、[Firefox バグ 1256414](https://bugzil.la/1256414)、[Firefox バグ 1256046](https://bugzil.la/1256046))。
- {{domxref("TextEncoder")}} で UTF-16 のサポートを廃止しました ([Firefox バグ 1257877](https://bugzil.la/1257877))。
- {{domxref("RTCStatsReport")}} が真に `maplike` なインターフェイスになりました。{{domxref("RTCStatsReport.forEach()", "forEach()")}}、{{domxref("RTCStatsReport.get()", "get()")}}、{{domxref("RTCStatsReport.has()", "has()")}} に加えて、{{domxref("RTCStatsReport.entries", "entries()")}}、{{domxref("RTCStatsReport.values", "values()")}}、{{domxref("RTCStatsReport.keys()", "keys()")}} メソッド、および {{domxref("RTCStatsReport.size", "size")}} ゲッターを実装しました ([Firefox バグ 906986](https://bugzil.la/906986))。
- [キャッシュの動作](https://hacks.mozilla.org/2016/03/referrer-and-cache-control-apis-for-fetch/) を制御できるようにするため、{{domxref("Request.cache")}} プロパティを追加しました ([Firefox バグ 1120715](https://bugzil.la/1120715))。
- Mac OS X におけるデッドキーの扱いを、他のプラットフォームと同じ動作に変更しました。フォーカスがある要素が編集可能ではなく、テキストが生成されなかったときに {{domxref("Element/keypress_event", "keypress")}} イベントは発生しません（フォーカスがある要素が編集可能であるとき、Mac OS X ではデッドキーでキーボードイベントではなく composition イベントが発生します）。また他のプラットフォームと同様に、ほかの状況でテキストを生成しないデッドキー押下について、{{domxref("KeyboardEvent.key")}} の値が `"Dead"` になりました。

## HTTP

- {{HTTPHeader("Upgrade-Insecure-Requests")}} ヘッダーをサポートしました ([Firefox バグ 1243586](https://bugzil.la/1243586))。
- CSP ディレクティブ {{CSP("block-all-mixed-content")}} を実装しました ([Firefox バグ 1122236](https://bugzil.la/1122236))。

## アドオン開発者と Mozilla 開発者向けの変更点

- [Social Worker API](/ja/docs/Mozilla/Projects/Social_API/Service_worker_API_reference) を削除しました。
- [`-moz-bool-pref()`](/ja/docs/Mozilla/Gecko/Chrome/CSS/-moz-bool-pref) という [CSS](/ja/docs/Web/CSS) の {{CSSxRef("@supports")}} 関数を追加し、クロームスタイルシートの一部を論理環境設定に隠すことができるようになりました。 ([Firefox バグ 1259889](https://bugzil.la/1259889))

## 過去のバージョン

{{Firefox_for_developers(47)}}
