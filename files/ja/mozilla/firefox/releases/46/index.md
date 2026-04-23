---
title: Firefox 46 for developers
slug: Mozilla/Firefox/Releases/46
---

[Firefox の最新の開発者向け機能を試すには、 Firefox Developer Edition をインストールしてください。](https://www.mozilla.org/firefox/developer/)Firefox 46 は、米国時間 2016 年 4 月 26 日にリリースされました。この記事では、ウェブ開発者だけでなく、 Firefox や Gecko の開発者、アドオン開発者にとっても有用な主な変更点を挙げています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

主要なもの:

- [メモリーツールのドミネーター表示](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators_view/index.html)
- [パフォーマンスツールのアロケーションビュー](https://web.archive.org/web/20211207010022/https://firefox-source-docs.mozilla.org/devtools-user/performance/allocations/index.html)
- [スタイルエディターで @media ルールの条件をワンクリックで適用可能](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#the-media-sidebar)

[Firefox 45 と Firefox 46 の間で修正された開発ツールのすべてのバグ。](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263754&resolution=FIXED&classification=Client%20Software&chfieldto=2016-01-25&query_format=advanced&chfield=resolution&chfieldfrom=2015-12-14&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox)

### HTML

- {{HTMLElement("ul")}} で `type` の値が無効であるときは `decimal` を割り付けず、`type` の値が指定されていないとみなすようになりました ([Firefox バグ 241719](https://bugzil.la/241719))。
- {{HTMLElement("input")}} の `pattern` 属性は、`"u"` (unicode) フラグを付与した{{jsxref("RegExp", "正規表現", "", 1)}}として扱うようになりました ([Firefox バグ 1227906](https://bugzil.la/1227906))。

### CSS

- CSS グリッドの実装を更新しました。
  - キーワード `auto-fill` および `auto-fit` を、`repeat()` 関数内で使用できるようになりました ([Firefox バグ 1118820](https://bugzil.la/1118820))。
  - 値 `true` を `unsafe` に改名しました。これは {{cssxref("justify-content")}}、{{cssxref("align-content")}}、{{cssxref("justify-self")}}、{{cssxref("align-self")}}、{{cssxref("justify-items")}}、{{cssxref("align-items")}} の各プロパティに影響します ([Firefox バグ 1230478](https://bugzil.la/1230478))。

- {{cssxref("text-emphasis")}}、{{cssxref("text-emphasis-style")}}、{{cssxref("text-emphasis-color")}}、{{cssxref("text-emphasis-position")}} の各プロパティを、既定で有効にしました ([Firefox バグ 1231485](https://bugzil.la/1231485))。
- Gecko が、`-webkit-` 接頭辞を付加した [数種類のプロパティ](https://wiki.mozilla.org/Compatibility/Mobile/Non_Standard_Compatibility) を受け入れるようになりました。ただし `layout.css.prefixes.webkit` を `true` に切り替えなければなりません ([Firefox バグ 1213126](https://bugzil.la/1213126))。
- ({{cssxref("@font")}} の) {{cssxref("@font/font-display", "font-display")}} 記述子を実験的に実装しました。使用するには `layout.css.font-display.enabled` を `true` に切り替えなければなりません ([Firefox バグ 1157064](https://bugzil.la/1157064))。
- 3D Transform のサポートを表すメディアクエリーとして [`@media (-webkit-transform-3d)`](/ja/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-3d) に対応しました。ただし about:config の設定 `layout.css.prefixes.webkit` を `true` に切り替えなければなりません ([Firefox バグ 1239799](https://bugzil.la/1239799))。
- {{cssxref("gradient/linear-gradient", "linear-gradient()")}} で、`0deg` の単位を省略した表記に対応しました ([Firefox バグ 1239153](https://bugzil.la/1239153))。
- ウェブ互換性のため、`-webkit-filter` を追加しました。設定項目 `layout.css.prefixes.webkit` で制御しており、既定値は `false` です ([Firefox バグ 1236506](https://bugzil.la/1236506))。
- \[css-align] "unsafe start" (以前は "true start") を "start" などにシリアライズするようになりました ([Firefox バグ 1230398](https://bugzil.la/1230398))。

### JavaScript

- ES2015 の、{{jsxref("RegExp.prototype.unicode", "RegExp の unicode (u) フラグ", "", 1)}}を実装しました ([Firefox バグ 1135377](https://bugzil.la/1135377))。
- ES2015 のブロックレベル関数を実装しました ([Firefox バグ 1071646](https://bugzil.la/1071646))。
- ES2015 の {{jsxref("TypedArray.prototype.sort()")}} メソッドを実装しました ([Firefox バグ 1121937](https://bugzil.la/1121937))。
- ES2015 の {{jsxref("Functions/arguments/Symbol.iterator", "arguments[Symbol.iterator]")}} を実装しました ([Firefox バグ 1067049](https://bugzil.la/1067049))。
- [EcmaScript Shared Memory API](https://web.archive.org/web/20220124015148/https://tc39.es/ecmascript_sharedmem/shmem.html) を実験的に実装しました。{{jsxref("SharedArrayBuffer")}} および {{jsxref("Atomics")}} オブジェクトをご覧ください。この実験的な API を使用するには、about:config で `javascript.options.shared_memory` に `true` を設定します。
- ECMAScript 仕様に従い、`[let](/ja/docs/Web/JavaScript/Reference/Statements/let)` および `[const](/ja/docs/Web/JavaScript/Reference/Statements/const)` によって変数を再宣言すると {{jsxref("TypeError")}} ではなく {{jsxref("SyntaxError")}} が発生するようになりました ([Firefox バグ 1198833](https://bugzil.la/1198833))。
- [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)において、{{Glossary("primitive", "プリミティブ")}}値にプロパティを設定すると {{jsxref("TypeError")}} が発生するようになりました ([Firefox バグ 603201](https://bugzil.la/603201))。
- 非標準の {{jsxref("WeakMap.prototype.clear()")}} および {{jsxref("WeakSet.prototype.clear()")}} メソッドを削除しました ([Firefox バグ 1101817](https://bugzil.la/1101817))。
- 非標準の `RegExp.multiline` プロパティが非推奨になりました ([Firefox バグ 1220457](https://bugzil.la/1220457))。
- 組み込みアクセサー関数の名称に "get" または "set" 接頭辞を付加しました ([Firefox バグ 1180290](https://bugzil.la/1180290)、[Firefox バグ 1235656](https://bugzil.la/1235656))。
- {{jsxref("Operators/Array_comprehensions", "JS1.7/JS1.8 (旧式) の配列内包", "#Differences_to_the_older_JS1.7JS1.8_comprehensions", 1)}} および {{jsxref("Operators/Generator_comprehensions", "JS1.7/JS1.8 (旧式) のジェネレーター内包", "#Differences_to_the_older_JS1.7JS1.8_comprehensions", 1)}} を削除しました ([Firefox バグ 1220564](https://bugzil.la/1220564))。

### インターフェイス/API/DOM

#### DOM & HTML DOM

- 非推奨の {{domxref("Window.showModalDialog()")}} メソッドが、マルチプロセスモード (e10s) の Firefox で使用できなくなりました ([Firefox バグ 1234700](https://bugzil.la/1234700))。
- {{domxref("Document.elementsFromPoint")}} に対応しました ([Firefox バグ 1164427](https://bugzil.la/1164427))。
- {{HTMLElement("select")}} 要素に存在しない option をプログラムで選択したときに誤って何も変更しないままにしていましたが、[`selectedIndex`](/ja/docs/Web/HTML/Reference/Elements/select#selectedindex) の値を `-1` に、[`selectedOptions`](/ja/docs/Web/HTML/Reference/Elements/select#selectedoptions) を空の {{domxref("HTMLCollection")}} に、そして [`value`](/ja/docs/Web/HTML/Reference/Elements/select#value) を空文字列に変更するようになりました ([Firefox バグ 1203668](https://bugzil.la/1203668))。

<h4 id="Canvas" name="Canvas">Canvas</h4>

- 実験的な {{domxref("OffscreenCanvas")}} API で未実装であった部分を実装しました。新機能: {{domxref("OffscreenCanvas.OffscreenCanvas", "OffscreenCanvas()")}} コンストラクター、{{domxref("OffscreenCanvas.toBlob()")}}、{{domxref("OffscreenCanvas.transferToImageBitmap()")}}。これらの実験的な API を使用するには、about:config で `gfx.offscreencanvas.enabled` を `true` に設定します ([Firefox バグ 1172796](https://bugzil.la/1172796))。
- {{domxref("ImageBitmap.close()")}} メソッドに対応しました ([Firefox バグ 1172796](https://bugzil.la/1172796))。
- 新たなレンダリングコンテキスト {{domxref("ImageBitmapRenderingContext")}} を実装しました。このコンテキストを得るには、{{domxref("OffscreenCanvas.getContext()")}} または {{domxref("HTMLCanvasElement.getContext()")}} で `"bitmaprenderer"` を指定します ([Firefox バグ 1172796](https://bugzil.la/1172796))。

#### WebGL

- {{domxref("WEBGL_compressed_texture_etc")}} 拡張を実装しました。[ETC2 テクスチャ圧縮方式](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression) を使用できます ([Firefox バグ 917505](https://bugzil.la/917505))。この拡張を使用するには、about:config で `webgl.enable-draft-extensions` を `true` に設定してください。

#### IndexedDB

_変更なし。_

#### サービスワーカー

- {{domxref("FetchEvent.request")}} を、null にしてはいけないようにしました ([Firefox バグ 1238213](https://bugzil.la/1238213))。
- {{domxref("Navigator.serviceWorker")}} を SameObject としてマークしました ([Firefox バグ 1238205](https://bugzil.la/1238205))。
- {{domxref("ExtendableMessageEvent.ports")}} を SameObject としてマークしました ([Firefox バグ 1238225](https://bugzil.la/1238225))。

#### Fetch

- {{domxref("Request.mode")}} で、新しい値 `navigate` が使用可能になりました。ドキュメント間のナビゲート中のリクエスト生成に対応します ([Firefox バグ 1209081](https://bugzil.la/1209081))。

#### WebRTC

- {{domxref("RTCPeerConnection.createOffer()")}} メソッドが VP9 ビデオコーデックに対応するようになりましたが、これは既定では無効になっています。有効にするには、 `about:config` で `media.peerconnection.video.vp9_enabled` 設定を `true` に設定します。有効化すると、VP9 が優先されるコーデックになります。以前は VP8 が優先されていました ([Firefox バグ 1242324](https://bugzil.la/1242324))。
- {{domxref("RTCRtpSender.setParameters()")}} というメソッドを追加し、 {{domxref("RTCRtpSender")}} を最初に作成した後に引数の値を変更できるようにしました。

#### 新規 API

- SVG で、{{domxref("SVGStyleElement")}} インターフェイスに {{domxref("LinkStyle")}} を実装しました ([Firefox バグ 1239128](https://bugzil.la/1239128))。

#### その他

- 非同期の {{domxref("FileReader")}} を、Web workers で使用できるようになりました ([Firefox バグ 901097](https://bugzil.la/901097))。
- [Web Animations API](/ja/docs/Web/API/Web_Animations_API) の実験的な実装を更新しました。
  - {{domxref("AnimationEffectTimingReadOnly")}} および {{domxref("AnimationEffect/getTiming", "AnimationEffectReadOnly.timing")}} を実装しました ([Firefox バグ 1214536](https://bugzil.la/1214536))。

- [権限 API](/ja/docs/Web/API/Permissions_API) が、Nightly だけでなくすべてのリリース版で、既定で有効になりました ([Firefox バグ 1221106](https://bugzil.la/1221106))。
- WOFF フォントのサニタイズ処理を、少々緩和しました ([Firefox バグ 1244693](https://bugzil.la/1244693))。

### MathML

_変更なし。_

### SVG

_変更なし。_

### Audio/Video

_変更なし。_

## HTTP

_変更なし。_

## ネットワーク

- {{rfc(7686)}} に対応しました。既定では、TLD が `.onion` であるドメインの名前解決を試みません。これは設定項目 `network.dns.blockDotOnion` で制御します。Tor に対応するアドオンは、この設定を変更できます ([Firefox バグ 1228457](https://bugzil.la/1228457))。

## セキュリティ

_変更なし。_

## アドオン開発者と Mozilla 開発者向けの変更点

### インターフェイス

_変更なし。_

### XUL

_変更なし。_

### JavaScript コードモジュール

_変更なし。_

### XPCOM

_変更なし。_

### その他

_変更なし。_

## 過去のバージョン

{{Firefox_for_developers(45)}}
