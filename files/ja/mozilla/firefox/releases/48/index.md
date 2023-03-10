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

- コンテンツ内で要素の位置を変更できるようになりました ({{bug(1139187)}})。
- コンソールの出力を消去するための {{domxref("console.clear()")}} を実装しました ({{bug(659625)}})。
- ウェブコンソールに [HTTP ログの調査機能](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#viewing-network-request-details) を追加しました ({{bug(1211525)}})。
- [Firebug のテーマ](https://firefox-source-docs.mozilla.org/devtools-user/tools_toolbox/index.html#choose-devtools-theme) を追加しました ({{bug(1244054)}})。
- [DOM 調査ツール](https://firefox-source-docs.mozilla.org/devtools-user/dom_property_viewer/index.html)を追加しました ({{bug(1201475)}})。
- [フォントインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#fonts-view)を、再びデフォルトで有効にしました ({{bug(1280121)}})。
- CSS プロパティの[補完機能を改良しました](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#edit-rules) ({{bug(1168246)}})。
- Cookie、ローカルストレージ、セッションストレージの項目を、ダブルクリックして編集できます ({{bug(1231154)}}、{{bug(1231179)}}、{{bug(1231155)}})。

### HTML

- {{HTMLElement("details")}} および {{HTMLElement("summary")}} 要素を、Nightly および Aurora (DevTools) でデフォルトで有効にしました。Beta および Release では無効です:

  - これらの要素のデフォルトのスタイルが、仕様書に合致するようになりました ({{bug(1258657)}})。
  - {{domxref("HTMLDetailsElement/toggle_event", "toggle")}} イベントが、{{HTMLElement("details")}} 要素を開いたり閉じたりしたときに送られるようになりました ({{bug(1225412)}})。

- {{htmlattrxref("meta", "referrer")}} 属性で、値 `no-referrer-when-downgrade` および `origin-when-cross-origin` をサポートしました ({{bug(1178337)}})。

### CSS

- 仕様書に準拠するよう、{{cssxref("calc", "calc()")}} を改良しました。

  - {{cssxref("line-height")}} プロパティで {{cssxref("calc", "calc()")}} をサポートしました ({{bug(594933)}})。
  - CSS {{cssxref("calc", "calc()")}} の入れ子をサポートしました ({{bug(968761)}})。

- CSS グリッドの実験的な実装を更新しました。

  - グリッドレイアウトでフラグメンテーションを実装しました ({{bug(1144096)}})。
  - \[css-grid] グリッドコンテナーのサイズが不定である場合は、パーセンテージ指定されたトラックのサイズを `auto` として扱うようになりました ({{bug(1264607)}})。
  - {{HTMLElement("fieldset")}} で grid および flex レイアウトをサポートしました ({{bug(1230207)}})。

- {{cssxref("mask-mode")}} で値 `luminance` をサポートしました。また、仕様書に合わせて値 `auto` を `match-source` に改名しました ({{bug(1228354)}})。
- CSS Animation および CSS Transition で、 {{cssxref("clip-path")}} の基本シェイプの補間処理をサポートしました ({{bug(1110460)}})。
- {{cssxref("text-combine-upright")}} プロパティの値 `all` で縦中横 (_horizontal-in-vertical_) テキストをサポートしました ({{bug(1097499)}}).
- 画像や背景の印刷をページから許可できるようにするための {{cssxref("color-adjust")}} プロパティを実験的にサポートしました ({{bug(1209273)}})。
- {{cssxref("::first-letter")}} 擬似要素が、実際の先頭文字の前または直後にあるタイプ Pd の句読点にも一致するようになりました。これは CSS Pseudo-element module level 4 の新たな要求です ({{bug(1260366)}})。
- いくつかの `-webkit` 接頭辞付きプロパティおよび値を、ウェブの互換性のためにサポートしました。設定項目 `layout.css.prefixes.webkit` で制御しており、既定値は `false` です:

  - {{cssxref("-webkit-text-fill-color")}} ({{bug(1247777)}})
  - {{cssxref("-webkit-text-stroke")}}, {{cssxref("-webkit-text-stroke-color")}}, {{cssxref("-webkit-text-stroke-width")}} ({{bug(1248708)}})
  - `-webkit-background-clip` (background-clip として) の値 text ({{bug(759568)}}).
  - `-webkit-box-direction`、`-webkit-box-orient` ({{bug(1262049)}}.
  - {{cssxref("display")}} プロパティの値 `-webkit-inline-box` を、`inline-flex` の別名としてサポートしました ({{bug(1257661)}})。
  - `-webkit-flex-direction`、`-webkit-flex-wrap`、`-webkit-flex-flow`、`-webkit-order`、`-webkit-flex`、`-webkit-flex-grow`、`-webkit-flex-shrink`、`-webkit-flex-basis`、`-webkit-justify-content`、`-webkit-align-items`、`-webkit-align-self`、`-webkit-align-content` を接頭辞なしプロパティの別名として、また {{cssxref("display")}} プロパティの値 `-webkit-flex` および `-webkit-inline-flex` を接頭辞なし値の別名として追加しました ({{bug(1274096)}})。
  - `-webkit-box-flex`、`-webkit-box-ordinal-group`、`-webkit-box-align`、`-webkit-box-pack` プロパティおよび {{cssxref("display")}} プロパティの値 `-webkit-box` を、最新の [CSS フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox) の別名として追加しました ({{bug(1208635)}})。

- {{cssxref("background-clip")}} の値 `text` が、(Release 以外のビルドだけでなく) すべてのタイプの Firefox で使用可能になりました ({{bug(1263516)}})。
- {{cssxref("position")}} プロパティの値 `absolute` を、最上位レイヤーの要素でサポートしました ({{bug(1236828)}})。
- 設定を検出するため、{{domxref("@supports")}} の内部利用限定の構文をサポートしました ({{bug(1259889)}})。

### JavaScript

#### 新規 API

- {{jsxref("String.prototype.padStart()")}} および {{jsxref("String.prototype.padEnd()")}} メソッドを実装しました ({{bug(1260509)}})。
- ES2015 (ES6) の {{jsxref("Symbol.unscopables")}} および {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}} プロパティを実装しました ({{bug(1054759)}} および {{bug(1258163)}})。
- ES2015 (ES6) の {{jsxref("Symbol.isConcatSpreadable")}} シンボルを実装しました ({{bug(1041586)}})。
- ES2015 (ES6) の {{jsxref("Array.@@species", "Array[@@species]")}} getter を実装しました ({{bug(1165052)}})。
- ES2015 (ES6) の {{jsxref("ArrayBuffer.@@species", "ArrayBuffer[@@species]")}} getter および {{jsxref("TypedArray.@@species", "%TypedArray%[@@species]")}} getter を実装しました ({{bug(1165053)}})。
- ECMAScript Internationalization API 草案の {{jsxref("Intl.getCanonicalLocales()")}} メソッドを実装しました ({{bug(1263040)}})。

#### 非推奨化および削除

- 非推奨の [古い Proxy API](/ja/docs/Archive/Web/Old_Proxy_API) (`Proxy.create` および `Proxy.createFunction()`) を廃止しました。代わりに標準の {{jsxref("Proxy")}} オブジェクトを使用してください ({{bug(892903)}})。
- `String.prototype.contains()` メソッドを削除しました (バージョン 40 より非推奨でした)。代わりに {{jsxref("String.prototype.includes()")}} メソッドを使用してください ({{bug(1103588)}})。
- 非標準の `RegExp.multiline` プロパティ ({{jsxref("RegExp.prototype.multiline")}} ではありません) を削除しました。代わりに標準の [m フラグ](/ja/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags) を使用してください ({{bug(1219757)}})。
- [`Object.prototype.__defineGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) および [`Object.prototype.__defineSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) メソッドは、オブジェクトを伴わないグローバルスコープでは呼び出すことができなくなりました ({{bug(1253016)}})。

### インターフェイス/API/DOM

#### DOM & HTML DOM

- {{domxref("CSSKeyframeRule")}} および {{domxref("CSSKeyframesRule")}} インターフェイスから "Moz" 接頭辞を削除しました ({{bug(1256178)}})。
- {{domxref("NavigatorConcurrentHardware")}} {{Glossary("mixin")}} を実装しました。これは、{{domxref("Navigator")}} インターフェイスに {{domxref("NavigatorConcurrentHardware.hardwareConcurrency", "window.navigator.hardwareConcurrency")}} プロパティを追加します。このプロパティにより、{{domxref("Worker")}} を実行できるプロセッシングコアがいくつあるか (少なくとも概算値) をウェブサイトやアプリが取得できます ({{bug(1008453)}})。
- Firefox 10 で削除した {{domxref("Node.isSameNode()")}} メソッドを再追加しました。仕様書に長く存在していませんでしたが、再び追加されました ({{bug(1256299)}})。
- {{domxref("Navigator.registerProtocolHandler()")}} を呼び出す際に誤りがあった場合に、Firefox が数値ではなく適切な例外を返すようになりました。
- {{domxref("Element.animate()")}} をデフォルトで有効にしました ({{bug(1245000)}})。
- {{domxref("Element.insertAdjacentText()")}} および {{domxref("Element.insertAdjacentElement()")}} メソッドを実装しました ({{bug(811259)}})。
- {{domxref("Document.scrollingElement")}} をデフォルトで有効にしました ({{bug(1265032)}})。
- `Node.localName`、`Node.namespaceURI`、`Node.prefix` を {{domxref("Element")}} および {{domxref("Attr")}} API に移動しました ({{bug(1055776)}})。
- 最新の仕様書に従って、以下のキーについて {{domxref("KeyboardEvent.code")}} が返す値を変更しました ({{bug(1264150)}} を参照):

  - `"OSLeft"` および `"OSRight"` が `"MetaLeft"` および `"MetaRight"` になりました。
  - `"VolumeDown"`、`"VolumeUp"`、`"VolumeMute"` が `"AudioVolumeDown"`、`"AudioVolumeUp"`、`"AudoVolumeMute"` になりました。
  - `"IntlHash"` を削除しました。
  - 以前のバージョンの Firefox で `code` の値が "" になっていたすべてのキーが、"Unidentified" を知らせるようになりました。

#### Canvas 2D

- {{domxref("CanvasRenderingContext2D.ellipse()")}} メソッドを実装しました ({{bug(910138)}})。

#### WebRTC

- {{domxref("MediaStream.clone()")}} および {{domxref("MediaStreamTrack.clone()")}} メソッドを実装しました ({{bug(1208371)}})。
- `iceRestart` 項目を `RTCOfferOptions` で対応しました。 {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} で ICE の再開や更新を可能にします ({{bug(906986)}})。
- {{domxref("RTCPeerConnection.createOffer()")}} メソッドが、デフォルトで VP9 動画コーデックを選択するようになりました。以前は VP8 を選択していました ({{bug(1242324)}})。

#### その他

- [Web Crypto API](/ja/docs/Web/API/Web_Crypto_API) が [Web workers](/ja/docs/Web/API/Web_Workers_API) で使用可能になりました ({{bug(842818)}})。
- {{domxref("CustomEvent")}} インターフェイスが [Web Workers](/ja/docs/Web/API/Web_Workers_API) で使用可能になりました ({{bug(1003432)}})。
- `DOMApplicationsManager.getNotInstalled()` メソッドを削除しました ({{bug("1255036")}})。
- 誤ってウェブに公開されていた Firefox OS の API を、本来すべきであったとおりに隠蔽しました。対象は {{domxref("mozContact")}}、{{domxref("MozContactChangeEvent")}}、{{domxref("navigator.mozContacts")}}、{{domxref("MozPowerManager")}}、{{domxref("MozSettingsEvent")}} です ({{bug("1043562")}}、{{bug("1256414")}}、{{bug("1256046")}})。
- {{domxref("TextEncoder")}} で UTF-16 のサポートを廃止しました ({{bug(1257877)}})。
- {{domxref("RTCStatsReport")}} が真に `maplike` なインターフェイスになりました。{{domxref("RTCStatsReport.forEach()", "forEach()")}}、{{domxref("RTCStatsReport.get()", "get()")}}、{{domxref("RTCStatsReport.has()", "has()")}} に加えて、{{domxref("RTCStatsReport.entries", "entries()")}}、{{domxref("RTCStatsReport.values", "values()")}}、{{domxref("RTCStatsReport.keys()", "keys()")}} メソッド、および {{domxref("RTCStatsReport.size", "size")}} ゲッターを実装しました ({{bug(906986)}})。
- [キャッシュの動作](https://hacks.mozilla.org/2016/03/referrer-and-cache-control-apis-for-fetch/) を制御できるようにするため、{{domxref("Request.cache")}} プロパティを追加しました ({{bug(1120715)}})。
- Mac OS X におけるデッドキーの扱いを、他のプラットフォームと同じ動作に変更しました。フォーカスがある要素が編集可能ではなく、テキストが生成されなかったときに {{domxref("Element/keypress_event", "keypress")}} イベントは発生しません（フォーカスがある要素が編集可能であるとき、Mac OS X ではデッドキーでキーボードイベントではなく composition イベントが発生します）。また他のプラットフォームと同様に、ほかの状況でテキストを生成しないデッドキー押下について、{{domxref("KeyboardEvent.key")}} の値が `"Dead"` になりました。

## HTTP

- {{HTTPHeader("Upgrade-Insecure-Requests")}} ヘッダーをサポートしました ({{bug(1243586)}})。
- CSP ディレクティブ {{CSP("block-all-mixed-content")}} を実装しました ({{bug(1122236)}})。

## アドオン開発者と Mozilla 開発者向けの変更点

- [Social Worker API](/ja/docs/Mozilla/Projects/Social_API/Service_worker_API_reference) を削除しました。
- [`-moz-bool-pref()`](/ja/docs/Mozilla/Gecko/Chrome/CSS/-moz-bool-pref) という [CSS](/ja/docs/Web/CSS) の {{CSSxRef("@supports")}} 関数を追加し、クロームスタイルシートの一部を論理環境設定に隠すことができるようになりました。 ({{bug(1259889)}})

## 過去のバージョン

{{Firefox_for_developers(47)}}
