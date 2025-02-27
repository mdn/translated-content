---
title: Firefox 44 for developers
slug: Mozilla/Firefox/Releases/44
l10n:
  sourceCommit: 1ee49b729dc4cd02b862d910f279861f4b30e704
---

{{FirefoxSidebar}}

[Firefox の最新の開発者向け機能を試すには、 Firefox Developer Edition をインストールしてください。](https://www.mozilla.org/firefox/developer/)Firefox 44 は、米国時間 2016 年 1 月 26 日にリリースされました。この記事では、ウェブ開発者だけでなく、 Firefox や Gecko の開発者、アドオン開発者にとっても有用な主な変更点を挙げています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

主要なもの:

- [メモリーツール](https://firefox-source-docs.mozilla.org/devtools-user/memory/index.html)
- [アニメーションインスペクターの改良](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [新しいウォーターフォールマーカー: DomContentLoaded、load、ワーカーメッセージ](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#markers)

[Firefox 43 と Firefox 44 の間で修正された開発ツールのすべてのバグ。](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-11-03&query_format=advanced&chfield=resolution&chfieldfrom=2015-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678)

### HTML

- [`<link rel="prefetch">`](/ja/docs/Glossary/Prefetch) が、[`crossorigin`](/ja/docs/Web/HTML/Element/link#crossorigin) 属性に従うようになりました ([Firefox バグ 1214819](https://bugzil.la/1214819))。

### CSS

- `position: fixed;` が、常に新たな重ね合わせコンテキストを生成するようになりました ([Firefox バグ 1179288](https://bugzil.la/1179288))。
- {{cssxref('unicode-range')}} の対応を、既定で有効にしました ([Firefox バグ 1119062](https://bugzil.la/1119062))。
- CSS 書字方向の実験的な実装を更新して、最新の仕様を反映しました。

  - {{cssxref("text-orientation")}} プロパティの値 `sideways` を実装して、`sideways-right` をこの値の別名にしました ([Firefox バグ 1193488](https://bugzil.la/1193488))。
  - `sideways-rl` および `sideways-lr` の値を{{cssxref("writing-mode")}} プロパティに実装しました ([Firefox バグ 1193488](https://bugzil.la/1193488) および [Firefox バグ 1193519](https://bugzil.la/1193519))。

- 非標準のプロパティ {{cssxref("-moz-math-display")}} および {{cssxref("-moz-window-shadow")}} は、ウェブコンテンツで使用できなくなりました ([Firefox バグ 1207002](https://bugzil.la/1207002)、[Firefox バグ 1211040](https://bugzil.la/1211040)、[Firefox バグ 1212607](https://bugzil.la/1212607))。
- {{cssxref("font-style")}} で、`oblique` と `italic` の両方を使用できる場合は、両者を区別するようになりました ([Firefox バグ 543715](https://bugzil.la/543715))。
- 未対応であるにもかかわらず {{cssxref("@page/marks")}}、{{cssxref("orphans")}}、{{cssxref("page")}}、{{cssxref("size")}}、{{cssxref("widows")}} の各プロパティがパースされ、{{cssxref("@supports")}} で誤って対応済みであると報告していました。この問題を修正してパースしないように、また対応済みとしないようになりました ([Firefox バグ 1215702](https://bugzil.la/1215702))。
- 内部で使用する値 `-moz-mac-unified-toolbar` を、{{cssxref("appearance")}} プロパティで使用できる値から外しました ([Firefox バグ 1206468](https://bugzil.la/1206468))。
- いくつかの `-webkit` 接頭辞付きプロパティおよび値を、ウェブ互換性のために対応しました。設定項目 `layout.css.prefixes.webkit` で制御しており、既定値は `false` です ([Firefox バグ 837211](https://bugzil.la/837211))。

  - `-webkit-animation`
  - `-webkit-animation-delay`
  - `-webkit-animation-direction`
  - `-webkit-animation-duration`
  - `-webkit-animation-fill-mode`
  - `-webkit-animation-iteration-count`
  - `-webkit-animation-name`
  - `-webkit-animation-play-state`
  - `-webkit-animation-timing-function`
  - `-webkit-text-size-adjust`
  - `-webkit-transform`
  - `-webkit-transform-origin`
  - `-webkit-transform-style`
  - `-webkit-transition`
  - `-webkit-transition-delay`
  - `-webkit-transition-duration`
  - `-webkit-transition-property`
  - `-webkit-transition-timing-function`
  - `-webkit-border-radius`
  - `-webkit-border-top-left-radius`
  - `-webkit-border-top-right-radius`
  - `-webkit-border-bottom-left-radius`
  - `-webkit-border-bottom-right-radius`
  - `-webkit-appearance`
  - `-webkit-background-clip`
  - `-webkit-background-origin`
  - `-webkit-background-size`
  - `-webkit-border-image`
  - `-webkit-box-shadow`
  - `-webkit-box-sizing`
  - `-webkit-user-select`
  - `-webkit-linear-gradient()` [Firefox バグ 1210575](https://bugzil.la/1210575)
  - `-webkit-radial-gradient"()` [Firefox バグ 1210575](https://bugzil.la/1210575)
  - `-webkit-repeating-linear-gradient()` [Firefox バグ 1210575](https://bugzil.la/1210575)
  - `-webkit-repeating-radial-gradient()` [Firefox バグ 1210575](https://bugzil.la/1210575)

### JavaScript

#### 新規 API

- {{jsxref("Symbol.toPrimitive")}}、{{jsxref("Symbol.prototype.@@toPrimitive", "Symbol.prototype[@@toPrimitive]")}}、{{jsxref("Date.prototype.@@toPrimitive", "Date.prototype[@@toPrimitive]")}} を実装しました ([Firefox バグ 1054756](https://bugzil.la/1054756))。

#### 変更点

- グローバルレベルにおける [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) および [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) のバインディングを、ES2015 に準拠させました。[Firefox バグ 589199](https://bugzil.la/589199) およびブログ記事 ["Breaking changes in let and const in Firefox Nightly 44"](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/) をご覧ください。また、`let` が既定でウェブ JavaScript （厳格モードおよび非厳格モード）で使用できるようになり、バージョンのオプトインが不要になりました ([Firefox バグ 932517](https://bugzil.la/932517))。
- [型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays) ({{jsxref("Int8Array", "Int8Array")}} や {{jsxref("ArrayBuffer", "ArrayBuffer")}} など) のコンストラクターを {{jsxref("Operators/new", "new")}} 演算子をつけずに関数として呼び出した場合に、ES6 仕様に従って {{jsxref("TypeError")}} が発生するようになりました ([Firefox バグ 980945](https://bugzil.la/980945)、[Firefox バグ 1214936](https://bugzil.la/1214936))。
- {{jsxref("RegExp")}} のスティッキーフラグが、ES2015 標準の [anchored sticky regular expressions](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#anchored_sticky_flag) に従うようになりました ([Firefox バグ 773687](https://bugzil.la/773687))。
- JavaScript シェル (SpiderMonkey の REPL) の既定 JS バージョンが、ウェブ互換の JS バージョンになりました (JS1.7 以降ではありません) ([Firefox バグ 1192329](https://bugzil.la/1192329))。

#### 廃止

- 非標準の [`let` ブロック](/ja/docs/Web/JavaScript/Reference/Statements/let#let_blocks)を廃止しました ([Firefox バグ 1167029](https://bugzil.la/1167029))。
- 非標準かつ非推奨である `Object.prototype.__noSuchMethod__` プロパティを削除しました ([Firefox バグ 683218](https://bugzil.la/683218))。

### インターフェイス/API/DOM

#### DOM & HTML DOM

- 既存のサイトとの互換性を確保するため、 `Document.charset` を {{domxref("Document.characterSet")}} の別名として実装しました ([Firefox バグ 647621](https://bugzil.la/647621))。
- ウェブページから Sherlock プラグインをインストールすることを可能にする [`window.sidebar.addSearchEngine()`](/ja/docs/Web/OpenSearch#installing_sherlock_plugins) メソッドの対応を廃止して、ウェブコンソールに警告を出力するようになりました ([Firefox バグ 862148](https://bugzil.la/862148))。
- 望まないポップアップに対抗するため、対話がないページでは {{domxref("Window/beforeunload_event", "beforeunload")}} イベントで要求されたプロンプトを表示しないようになりました ([Firefox バグ 636905](https://bugzil.la/636905))。
- 非推奨メソッド {{domxref("MessageEvent.initMessageEvent()")}} を、後方互換性のために再実装しました ([Firefox バグ 949376](https://bugzil.la/949376))。
- 廃止した `DocumentType.internalSubset` プロパティを削除しました ([Firefox バグ 801545](https://bugzil.la/801545))。
- 既存のサイトとの互換性を確保するため {{domxref("Window.orientation")}} プロパティ、{{domxref("Window.onorientationchange")}} プロパティおよび {{domxref("Window.orientationchange_event", "orientationchange")}} イベントを実装しました ([Firefox バグ 920734](https://bugzil.la/920734))。
- 明示的に全画面表示を要求した {{HTMLElement("iframe")}} は、暗黙的に全画面表示が解除されないようになりました ([Firefox バグ 1187801](https://bugzil.la/1187801))。
- イベント {{domxref("Element/mouseover_event", "mouseover")}}, {{domxref("Element/mouseout_event", "mouseout")}}, {{domxref("Element/mouseenter_event", "mouseenter")}}, {{domxref("Element/mouseleave_event", "mouseleave")}}, {{domxref("Element/pointermove_event", "pointermove")}}, {{domxref("Element/pointerover_event", "pointerover")}}, {{domxref("Element/pointerout_event", "pointerout")}}, {{domxref("Element/pointerenter_event", "pointerenter")}}, {{domxref("Element/pointerleave_event", "pointerleave")}} が、無効化したフォーム要素で発生するようになりました ([Firefox バグ 218093](https://bugzil.la/218093))。
- 相互運用性を高めるため、{{domxref("Element.webkitMatchesSelector()")}} メソッドを追加しました ([Firefox バグ 1216193](https://bugzil.la/1216193))。
- 仕様書に合致させるため、{{domxref("Document.createAttribute()")}} は入力内容を小文字に変換するようになりました ([Firefox バグ 1176313](https://bugzil.la/1176313))。
- {{domxref("Window.open()")}} の非標準機能である `dialog` はウェブコンテンツで使用できなくなりました。拡張機能や chrome 特権を持つコードでは引き続き使用可能です ([Firefox バグ 1095236](https://bugzil.la/1095236))。

#### Canvas

- {{domxref("OffscreenCanvas")}} API の実験的な実装を追加し、レンダリングコンテキスト ([WebGL](/ja/docs/Web/API/WebGL_API) など) が[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)内で実行することができるようになりました。この実験的な API を使用するには、about:config で `gfx.offscreencanvas.enabled` を `true` に設定してください ([Firefox バグ 709490](https://bugzil.la/709490))。この API に含まれるものは以下のとおりです。

  - {{domxref("OffscreenCanvas")}} インターフェイス
  - {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}
  - {{domxref("WebGLRenderingContext.commit()")}}
  - この API を有効にすると、いくつかの WebGL インターフェイスもワーカーで使用可能になりました。

#### WebGL

- Uniform Buffer Objects を実装しました ([Firefox バグ 1048747](https://bugzil.la/1048747))。

#### IndexedDB

- {{domxref("IDBIndex.getAll()")}} および {{domxref("IDBIndex.getAllKeys()")}}、それに反対側の {{domxref("IDBObjectStore")}} を既定で有効にしました ([Firefox バグ 1196841](https://bugzil.la/1196841))。

#### サービスワーカー

- `ServiceWorkerMessageEvent` および {{domxref("ExtendableMessageEvent")}} インターフェイスを実装しました ([Firefox バグ 1143717](https://bugzil.la/1143717) および [Firefox バグ 1207068](https://bugzil.la/1207068))。
- {{domxref("Headers")}} オブジェクトが組イテレーターに対応しました。すなわち、 {{domxref("Headers.entries()")}}, {{domxref("Headers.keys()")}}, {{domxref("Headers.values()")}} の各メソッドが利用できるようになりました。 {{jsxref("Symbol.iterator")}} も既定のイテレーターを返すようになりました ([Firefox バグ 1108181](https://bugzil.la/1108181))。
- {{domxref('XMLHttpRequest')}} API がサービスワーカーで無効化されました ([Firefox バグ 931243](https://bugzil.la/931243))。
- {{domxref("FetchEvent")}} インターフェイスが {{domxref("ExtendableEvent")}} を継承するようになり、 {{domxref("ExtendableEvent.waitUntil()")}} メソッドにアクセスできるようになりました ([Firefox バグ 1214772](https://bugzil.la/1214772))。
- 仕様書の最新の変更に従い、 `FetchEvent.client` が削除されました ([Firefox バグ 1218135](https://bugzil.la/1218135))。
- 最新の仕様書に一致するように、 {{domxref("ServiceWorkerContainer.onreloadpage")}} が削除されました。 ([Firefox バグ 1218139](https://bugzil.la/1218139)).
- {{domxref("ServiceWorkerGlobalScope.beforeevicted_event", "onbeforeevicted")}} および {{domxref("ServiceWorkerGlobalScope.evicted_event", "onevicted")}} イベントハンドラーは、仕様書に準拠していなかったので削除されました。将来的に再導入される予定ですが、削除することで期待通りの機能検出が可能になります ([Firefox バグ 1218142](https://bugzil.la/1218142))。
- {{domxref("FetchEvent.FetchEvent", "FetchEvent()")}} コンストラクターで、 `isReload` が options 辞書に存在しなかった場合の既定値が `false` になりました ([Firefox バグ 1216401](https://bugzil.la/1216401))。
- {{domxref("Client.frameType")}} プロパティが正しいインターフェイスに実装されました。以前は {{domxref("WindowClient")}} にありました ([Firefox バグ 1218146](https://bugzil.la/1218146))。
- AppCache がページをオフラインに対応させるために使用された場合、コンソールに警告メッセージを表示し、開発者に[サービスワーカー](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)を使用するよう助言するようになりました ([Firefox バグ 1204581](https://bugzil.la/1204581))。
- Gecko で、サービスワーカーが既定で有効化されました。

#### WebRTC

- WebRTC インターフェイスの*接頭辞が外されました* ([Firefox バグ 1155923](https://bugzil.la/1155923))。具体的には、

  - `mozRTCPeerConnection` が {{domxref("RTCPeerConnection")}} になりました。
  - `mozRTCIceCandidate` が {{domxref("RTCIceCandidate")}} になりました。
  - `mozRTCSessionDescription` が {{domxref("RTCSessionDescription")}} になりました。

- {{domxref("RTCDataChannel.bufferedAmountLowThreshold")}} プロパティおよび {{domxref("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}} イベントを実装しました ([Firefox バグ 1178091](https://bugzil.la/1178091))。
- {{domxref("RTCPeerConnection.canTrickleIceCandidates")}} 属性を追加して、非標準メソッド {{domxref("RTCPeerConnection.updateIce()")}} を削除しました ([Firefox バグ 1209744](https://bugzil.la/1209744))。
- {{domxref("MediaStream")}} インターフェイスで {{domxref("MediaStream.addTrack()")}} および {{domxref("MediaStream.removeTrack()")}} メソッドに対応しました ([Firefox バグ 1103188](https://bugzil.la/1103188))。
- {{domxref("MediaStream.MediaStream", "MediaStream()")}} コンストラクターを実装しました ([Firefox バグ 1070216](https://bugzil.la/1070216))。
- {{domxref("RTCOfferOptions")}} の、非標準である制約的なオプションリストの対応を廃止しました。

#### 新規 API

- Workers での Canvas API を実験的に実装しました。 {{domxref("OfflineCanvas")}} および {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} が使用できます。設定項目 `gfx.offscreencanvas.enabled` で制御しており、現在は既定で無効化しています ([Firefox バグ 709490](https://bugzil.la/709490))。
- Web Speech API の一部である Text2Speech API で、OS X のバックエンドに対応しました。ただし、既定で無効化しています ([Firefox バグ 1003452](https://bugzil.la/1003452))。

#### その他

- {{domxref("URLSearchParams")}} オブジェクトで組イテレーターに対応しました。{{domxref("URLSearchParams.entries()")}}、{{domxref("URLSearchParams.keys()")}}、{{domxref("URLSearchParams.values()")}} の各メソッドを使用できます。また {{jsxref("Symbol.iterator")}} は、既定のイテレーターを返すようになりました ([Firefox バグ 1085284](https://bugzil.la/1085284))。
- {{domxref("FormData")}} オブジェクトで組イテレーターに対応しました。{{domxref("FormData.entries()")}}、{{domxref("FormData.keys")}}、{{domxref("FormData.values()")}} の各メソッドを使用できます。また {{jsxref("Symbol.iterator")}} は、既定のイテレーターを返すようになりました ([Firefox バグ 1127703](https://bugzil.la/1127703))。
- {{domxref("XMLHttpRequest.send()")}} を HTML 文書で使用したとき、`application/xml` に代わり `text/html` を使用するようになりました ([Firefox バグ 918771](https://bugzil.la/918771))。
- 音声合成 (text-to-speech) を Mac および Linux 向けのデスクトップ版 Firefox に実装しました。ただし、`about:config` の `media.webspeech.synth.enabled` フラグで無効化しています ([Firefox バグ 1003452](https://bugzil.la/1003452)、[Firefox バグ 1003464](https://bugzil.la/1003464))。詳しくは [Web Speech API](/ja/docs/Web/API/Web_Speech_API) をご覧ください。
- {{HTMLElement("frame")}} または {{HTMLElement('object')}} の内部にある要素は、全画面表示できないようになりました ([Firefox バグ 1212299](https://bugzil.la/1212299))。
- WOFF フォントのサニタイズ処理を、少々強化しました。誤りがあるフォントをより多く拒否するようになりましたが、 Firefox 46 でやや緩和しました ([Firefox バグ 1193050](https://bugzil.la/1193050) および [Firefox バグ 1244693](https://bugzil.la/1244693))。

### MathML

_変更なし。_

### SVG

_変更なし。_

### Audio/Video

_変更なし。_

## HTTP

- [Brotli](https://en.wikipedia.org/wiki/Brotli) アルゴリズムに対応しました。また、 [`Accept-Encoding`](/ja/docs/Web/HTTP/Content_negotiation#the_accept-encoding_header) および [`Content-Encoding`](/ja/docs/Web/HTTP/Headers/Content-Encoding) ヘッダーで値 `br` に対応しました ([Firefox バグ 366559](https://bugzil.la/366559) および [Firefox バグ 1211916](https://bugzil.la/1211916))。
- 改行 (`'/n'`) を含む HTTP/2 ヘッダーについて、HTTP/1 とは異なり仕様書で許可されていないため、誤って対応していた箇所を削除しました ([Firefox バグ 1197847](https://bugzil.la/1197847))。

## ネットワーク

_変更なし。_

## セキュリティ

- Beta および Release 版のブラウザーでも、RC4 が既定で無効になりました ([Firefox バグ 1201025](https://bugzil.la/1201025))。また、ホワイトリストが既定で空になりました ([Firefox バグ 1215796](https://bugzil.la/1215796))。

## アドオン開発者と Mozilla 開発者向けの変更点

### インターフェイス

_変更なし。_

### XUL

_変更なし。_

### JavaScript コードモジュール

- Sqlite.jsm で `LIKE` に対応しました ([Firefox バグ 1188760](https://bugzil.la/1188760))。
- [Snackbars.jsm](/ja/docs/Mozilla/Add-ons/Firefox_for_Android/API/Snackbars.jsm) モジュールを [Android 版 Firefox](/ja/docs/Mozilla/Firefox_for_Android) に追加しました ([Firefox バグ 1215026](https://bugzil.la/1215026))。

### XPCOM

- `nsIDOMWindow` インターフェイスが空になりました。存在していたアイテムは使用されない、他のインターフェイスに移転、あるいは C++ に限り使用するものになりました。C++ コードから利用できるアイテムは、[nsPIDOMWindow](https://dxr.mozilla.org/mozilla-central/source/dom/base/nsPIDOMWindow.h) インターフェイスに存在しています ([Firefox バグ 1216401](https://bugzil.la/1216401))。

### その他

- Firefox 44 での大幅な変更 ([bug 1202902](https://bugzilla.mozilla.org/show_bug.cgi?id=1202902)) により、[cfx](/ja/docs/Mozilla/Add-ons/SDK/Tools/cfx) でパックしたアドオンが動作しなくなります。再びアドオンが互換性を持つようにするために、[jpm](/ja/docs/Mozilla/Add-ons/SDK/Tools/jpm) を使用してください。 _cfx_ から _jpm_ に移行する手順は[こちらに記載しています](/ja/docs/Mozilla/Add-ons/SDK/Tools/cfx_to_jpm)。

## 過去のバージョン

{{Firefox_for_developers(43)}}
