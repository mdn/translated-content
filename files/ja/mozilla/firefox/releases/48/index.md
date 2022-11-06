---
title: Firefox 48 for developers
slug: Mozilla/Firefox/Releases/48
---

Firefox 48 は、米国時間 2016 年 8 月 2 日にリリースされました。このページでは、開発者に影響する Firefox 48 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- コンテンツ内で要素の位置を変更できるようになりました ({{bug(1139187)}})。
- コンソールの出力を消去するための {{domxref("console.clear()")}} を実装しました ({{bug(659625)}})。
- Web コンソールに [HTTP ログの調査機能](/ja/docs/Tools/Web_Console/Console_messages#Viewing_network_request_details) を追加しました ({{bug(1211525)}})。
- [Firebug のテーマ](/ja/docs/Tools/Tools_Toolbox#Choose_DevTools_theme) を追加しました ({{bug(1244054)}})。
- [DOM 調査ツール](/ja/docs/Tools/DOM_Property_Viewer) を追加しました ({{bug(1201475)}})。
- [フォントインスペクター](/ja/docs/Tools/Page_Inspector/UI_Tour#Fonts_view) を、再びデフォルトで有効にしました ({{bug(1280121)}})。
- CSS プロパティの [補完機能を改良しました](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#Edit_rules) ({{bug(1168246)}})。
- Cookie、ローカルストレージ、セッションストレージの項目を、ダブルクリックして編集できます ({{bug(1231154)}}、{{bug(1231179)}}、{{bug(1231155)}})。

### HTML

- {{HTMLElement("details")}} および {{HTMLElement("summary")}} 要素を、Nightly および Aurora (DevTools) でデフォルトで有効にしました。Beta および Release では無効です:

  - これらの要素のデフォルトのスタイルが、仕様書に合致するようになりました ({{bug(1258657)}})。
  - {{HTMLElement("details")}} 要素を開いたり閉じたりしたときに、{{event("toggle")}} イベントを送るようになりました ({{bug(1225412)}})。

- {{htmlattrxref("referrer", "meta")}} 属性で、値 `no-referrer-when-downgrade` および `origin-when-cross-origin` をサポートしました ({{bug(1178337)}})。

### CSS

- 仕様書に準拠するよう、{{cssxref("calc()")}} を改良しました:

  - {{cssxref("line-height")}} プロパティで {{cssxref("calc()")}} をサポートしました ({{bug(594933)}})。
  - CSS {{cssxref("calc()")}} の入れ子をサポートしました ({{bug(968761)}})。

- CSS Grids の実験的な実装を更新しました:

  - Grid レイアウトでフラグメンテーションを実装しました ({{bug(1144096)}})。
  - \[css-grid] グリッドコンテナーのサイズが不定である場合は、パーセンテージ指定されたトラックのサイズを `auto` として扱うようになりました ({{bug(1264607)}})。
  - {{HTMLElement("fieldset")}} で grid および flex レイアウトをサポートしました ({{bug(1230207)}})。

- {{cssxref("mask-mode")}} で値 `luminance` をサポートしました。また、仕様書に合わせて値 `auto` を `match-source` に改名しました ({{bug(1228354)}})。
- CSS Animation および CSS Transition で、clip-path の basic shape の補間処理をサポートしました ({{bug(1110460)}})。
- {{cssxref("text-combine-upright")}} プロパティの値 `all` で縦中横 (_horizontal-in-vertical_) テキストをサポートしました ({{bug(1097499)}}).
- 画像や背景の印刷をページから許可できるようにするための {{cssxref("color-adjust")}} プロパティを実験的にサポートしました ({{bug(1209273)}})。
- {{cssxref("::first-letter")}} 疑似要素が、実際の先頭文字の前または直後にあるタイプ Pd の句読点にもマッチするようになりました。これは CSS Pseudo-element module level 4 の新たな要求です ({{bug(1260366)}})。
- いくつかの `-webkit` 接頭辞付きプロパティおよび値を、web 互換性のためにサポートしました。設定項目 `layout.css.prefixes.webkit` で制御しており、既定値は `false` です:

  - {{cssxref("-webkit-text-fill-color")}} ({{bug(1247777)}})
  - {{cssxref("-webkit-text-stroke")}}, {{cssxref("-webkit-text-stroke-color")}}, {{cssxref("-webkit-text-stroke-width")}} ({{bug(1248708)}})
  - {{cssxref("-webkit-background-clip")}} (background-clip として) の値 text ({{bug(759568)}}).
  - {{cssxref("-webkit-box-direction")}}, {{cssxref("-webkit-box-orient")}} ({{bug(1262049)}}.
  - {{cssxref("display")}} プロパティの値 `-webkit-inline-box` を、`inline-flex` の別名としてサポートしました ({{bug(1257661)}})。
  - {{cssxref("-webkit-flex-direction")}}、{{cssxref("-webkit-flex-wrap")}}、{{cssxref("-webkit-flex-flow")}}、{{cssxref("-webkit-order")}}、{{cssxref("-webkit-flex")}}、{{cssxref("-webkit-flex-grow")}}、{{cssxref("-webkit-flex-shrink")}}、{{cssxref("-webkit-flex-basis")}}、{{cssxref("-webkit-justify-content")}}、{{cssxref("-webkit-align-items")}}、{{cssxref("-webkit-align-self")}}、{{cssxref("-webkit-align-content")}} を接頭辞なしプロパティの別名として、また {{cssxref("display")}} プロパティの値 `-webkit-flex` および `-webkit-inline-flex` を接頭辞なし値の別名として追加しました ({{bug(1274096)}})。
  - {{cssxref("-webkit-box-flex")}}、{{cssxref("-webkit-box-ordinal-group")}}、{{cssxref("-webkit-box-align")}}、{{cssxref("-webkit-box-pack")}} プロパティおよび {{cssxref("display")}} プロパティの値 `-webkit-box` を、最新の [CSS Flexbox](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_flexbox_to_lay_out_web_applications) の別名として追加しました ({{bug(1208635)}})。

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
- 非標準の `RegExp.multiline` プロパティ ({{jsxref("RegExp.prototype.multiline")}} ではありません) を削除しました。代わりに標準の [m フラグ](/ja/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags) を使用してください ({{bug(1219757)}})。
- {{jsxref("Object.__defineGetter__", "__defineGetter__")}} および {{jsxref("Object.__defineSetter__", "__defineSetter__")}} メソッドは、オブジェクトを伴わないグローバルスコープでは呼び出すことができなくなりました ({{bug(1253016)}})。

### インターフェイス/API/DOM

#### DOM & HTML DOM

- {{domxref("CSSKeyframeRule")}} および {{domxref("CSSKeyframesRule")}} インターフェイスから "Moz" 接頭辞を削除しました ({{bug(1256178)}})。
- {{domxref("NavigatorConcurrentHardware")}} {{Glossary("mixin")}} を実装しました。これは、{{domxref("Navigator")}} インターフェイスに {{domxref("NavigatorConcurrentHardware.hardwareConcurrency", "window.navigator.hardwareConcurrency")}} プロパティを追加します。このプロパティにより、{{domxref("Worker")}} を実行できるプロセッシングコアがいくつあるか (少なくとも概算値) をウェブサイトやアプリが取得できます ({{bug(1008453)}})。
- Firefox 10 で削除した {{domxref("Node.isSameNode()")}} メソッドを再追加しました。仕様書に長く存在していませんでしたが、再び追加されました ({{bug(1256299)}})。
- {{domxref("Navigator.registerProtocolHandler()")}} を呼び出す際に誤りがあった場合に、Firefox が数値ではなく適切な例外を返すようになりました。
- {{domxref("Element.animate()")}} をデフォルトで有効にしました ({{bug(1245000)}})。
- {{domxref("Element.insertAdjacentText()")}} および {{domxref("Element.insertAdjacentElement()")}} メソッドを実装しました ({{bug(811259)}})。
- {{domxref("Document.scrollingElement")}} をデフォルトで有効にしました ({{bug(1265032)}})。
- {{domxref("Node.localName")}}、{{domxref("Node.namespaceURI")}}、{{domxref("Node.prefix")}} を {{domxref("Element")}} および {{domxref("Attr")}} API に移動しました ({{bug(1055776)}})。
- 最新の仕様書に従って、以下のキーについて {{domxref("KeyboardEvent.code")}} が返す値を変更しました ({{bug(1264150)}} を参照):

  - `"OSLeft"` および `"OSRight"` が `"MetaLeft"` および `"MetaRight"` になりました。
  - `"VolumeDown"`、`"VolumeUp"`、`"VolumeMute"` が `"AudioVolumeDown"`、`"AudioVolumeUp"`、`"AudoVolumeMute"` になりました。
  - `"IntlHash"` を削除しました。
  - 以前のバージョンの Firefox で `code` の値が "" になっていたすべてのキーが、"Unidentified" を知らせるようになりました。

#### Canvas 2D

- {{domxref("CanvasRenderingContext2D.ellipse()")}} メソッドを実装しました ({{bug(910138)}})。

#### WebRTC

- {{domxref("MediaStream.clone()")}} および {{domxref("MediaStreamTrack.clone()")}} メソッドを実装しました ({{bug(1208371)}})。
- `RTCOfferOptions` で、ICE の再開や更新を可能にする `iceRestart` をサポートしました ({{bug(906986)}})。
- {{domxref("RTCPeerConnection.createOffer()")}} メソッドが、デフォルトで VP9 動画コーデックを選択するようになりました。以前は VP8 を選択していました ({{bug(1242324)}})。

#### その他

- [Web Crypto API](/ja/docs/Web/API/Web_Crypto_API) が [Web workers](/ja/docs/Web/API/Web_Workers_API) で使用可能になりました ({{bug(842818)}})。
- {{domxref("CustomEvent")}} インターフェイスが [Web Workers](/ja/docs/Web/API/Web_Workers_API) で使用可能になりました ({{bug(1003432)}})。
- `DOMApplicationsManager.getNotInstalled()` メソッドを削除しました ({{bug("1255036")}})。
- 誤ってウェブに公開されていた Firefox OS の API を、本来すべきであったとおりに隠蔽しました。対象は {{domxref("mozContact")}}、{{domxref("MozContactChangeEvent")}}、{{domxref("navigator.mozContacts")}}、{{domxref("MozPowerManager")}}、{{domxref("MozSettingsEvent")}} です ({{bug("1043562")}}、{{bug("1256414")}}、{{bug("1256046")}})。
- {{domxref("TextEncoder")}} で UTF-16 のサポートを廃止しました ({{bug(1257877)}})。
- {{domxref("RTCStatsReport")}} が真に `maplike` なインターフェイスになりました。{{domxref("RTCStatsReport.forEach()", "forEach()")}}、{{domxref("RTCStatsReport.get()", "get()")}}、{{domxref("RTCStatsReport.has()", "has()")}} に加えて、{{domxref("RTCStatsReport.entries", "entries()")}}、{{domxref("RTCStatsReport.values", "values()")}}、{{domxref("RTCStatsReport.keys()", "keys()")}} メソッド、および {{domxref("RTCStatsReport.size", "size")}} ゲッターを実装しました ({{bug(906986)}})。
- [キャッシュの動作](https://hacks.mozilla.org/2016/03/referrer-and-cache-control-apis-for-fetch/) を制御できるようにするため、{{domxref("Request.cache")}} プロパティを追加しました ({{bug(1120715)}})。
- Mac OS X におけるデッドキーの扱いを、他のプラットフォームと同じ動作に変更しました。フォーカスがある要素が編集可能ではなく、テキストが生成されなかったときに {{event("keypress")}} イベントは発生しません (フォーカスがある要素が編集可能であるとき、Mac OS X ではデッドキーでキーボードイベントではなく composition イベントが発生します)。また他のプラットフォームと同様に、ほかの状況でテキストを生成しないデッドキー押下について、{{domxref("KeyboardEvent.key")}} の値が `"Dead"` になりました。

## HTTP

- {{HTTPHeader("Upgrade-Insecure-Requests")}} ヘッダーをサポートしました ({{bug(1243586)}})。
- CSP ディレクティブ {{CSP("block-all-mixed-content")}} を実装しました ({{bug(1122236)}})。

## アドオン開発者と Mozilla 開発者向けの変更点

- [Social Worker API](/ja/docs/Mozilla/Projects/Social_API/Service_worker_API_reference) を削除しました。

## 関連情報

- [Firefox 48.0 リリースノート](https://www.mozilla.jp/firefox/48.0/releasenotes/)
- [Firefox 48 アドオン互換性情報](https://dev.mozilla.jp/2016/05/firefox-48-addon-compatibility/)

## 過去のバージョン

{{Firefox_for_developers(47)}}
