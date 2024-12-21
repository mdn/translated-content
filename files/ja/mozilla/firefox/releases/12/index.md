---
title: Firefox 12 for developers
slug: Mozilla/Firefox/Releases/12
---

{{FirefoxSidebar}}

Firefox 12 は 米国時間 2012 年 4 月 24 日にリリースされました。この記事は開発者に影響がある Firefox 12 での変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### HTML

- `title` の値に含めた改行文字が反映され、複数行のツールチップを表示できるようになりました。
- JavaScript が無効である場合、[仕様](https://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html) に従ったフォールバックコンテンツではなく {{ HTMLElement("canvas") }} 要素が表示されていましたが、フォールバックコンテンツが表示されるようになりました。

### CSS

- {{ cssxref("text-align-last") }} プロパティに対応しました。(接頭辞付き)

### JavaScript

- [シャープ変数](/ja/docs/JavaScript/Sharp_variables_in_JavaScript) (Netscape 由来の非標準拡張仕様) への対応が打ち切られました。

### DOM

- [DOMParser](/ja/docs/Web/API/DOMParser) が HTML ドキュメントのソース解析に対応しました。
- {{ domxref("XMLHttpRequest") }} で `timeout` プロパティと {{ domxref("XMLHttpRequestEventTarget") }} インターフェイス 上の `ontimeout` イベントハンドラーである "timeout" イベントを用いた、タイムアウトがサポートされました。
- {{ domxref("XMLHttpRequest") }} が[`data:` URI](/ja/docs/Web/URI/Schemes/data) から読み込めるようになりました。
- {{ domxref("XMLHttpRequest") }} で巨大なデータをダウンロードしているとき、`responseType` に "moz-blob" を設定していると、 これまでに受信したデータのすべてを含む {{ domxref("Blob") }} であるレスポンスを参照できる progress イベントハンドラーが定期的に呼び出されるようになりました。これによって、progress ハンドラーでデータのすべてが到着するまで待つことなしにデータを処理し始められます。
- Gecko が Android 上で [マルチタッチ](/ja/docs/Web/API/Touch_events) をサポートしました。今までは一度に一つのタッチ操作しか認識しかできませんでした。
- エディター (フォーム) 上で IME を使った文字入力を行っている場合、従来は確定後に `input` イベントが発生していましたが、Firefox 12 では、IME で編集中の文字列が変更されたことを示す `compositionupdate` イベントの直後にも `input` イベントが発生するようになりました。これにより、`input` イベントハンドラーを使って、日本語入力中にも未確定文字列を含めたフォームの入力内容を取得することが可能となりました。
- DOM 4 仕様で定義されている {{ domxref("DOMError") }} が実装されました。
- {{ domxref("Document.createNodeIterator()") }} メソッドが DOM 4 仕様に適合するように更新されました。これにより、`whatToShow` および `filter` 引数がオプションになり、非標準の 4 番目の引数である `entityReferenceExpansion` が削除されます。
- {{ domxref("Blob") }} インターフェイスの `slice()` メソッドは符号付き 64 ビット整数の範囲外の `start` の値と `end` の値を正しく受け取れないバグによる影響を受けていましたが、この問題は修正されました。`
- {{ domxref("element.getBoundingClientRect()") }} メソッドが要素の矩形の境界を算出するときに [CSS transforms](/ja/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) の効果を考慮するようになりました。

#### 新しい WebAPI

- Network Information API: {{ domxref("window.navigator.connection") }} の実験的サポートが追加されました。（接頭辞付き）
- WebTelephony API: {{ domxref("window.navigator.mozTelephony") }} が実装されました。デバイス上での電話の発信、応答、管理をするためのサポートを提供します。
- WebSMS API: モバイルデバイスで SMS テキストメッセージを送信できる {{ domxref("window.navigator.mozSms") }} が利用可能になりました。

### SVG

- {{ domxref("SVGTests") }} DOM API に対応しました。([Firefox バグ 607854](https://bugzil.la/607854))
- {{ domxref("SVGStringList") }} DOM インターフェイスが非標準の `length` プロパティに対応しました。([Firefox バグ 711958](https://bugzil.la/711958))

### MathML

- MathML 式の方向性を制御する `dir` 属性に対応しました。{{ MathMLElement("math") }}、{{ MathMLElement("mrow") }}、{{ MathMLElement("mstyle") }} の各要素と、[MathML トークン要素](/Special:Tags?tag=MathML:Token+Elements) で使用できます。これは特に一部の [アラビア語数学的表記](https://www.w3.org/TR/arabic-math/) で必要とされるものです。
- MathML3 で定義された配置属性 `align` に対応しました。{{ MathMLElement("munder") }}、{{ MathMLElement("mover") }}、{{ MathMLElement("munderover") }} の各要素で使用できます。

### ネットワーク

- 以前は、WebSocket チャンネルが、予期せぬエラーのためにクローズしたとき、あるいは、仕様がカバーしていないエラー状況のためにクローズした場合、Gecko は `CLOSE_NORMAL` クローズコードを報告していましたが、代わりに `CLOSE_GOING_AWAY コードを報告するようになりました。`

### 開発者ツール

- [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) がコンソールが開いていない状態の場合にエラーメッセージと {{ domxref("console.log()") }} を用いて追加したログエントリーをキャッシュし、コンソールが開いたときにそれらを表示するようになりました。
- [3D view](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) で "r" キーを押すことにより、ズームレベル、移動、回転をリセットできるようになりました。
- [3D view](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) でノードを選択した後に "x" キーを押すことにより、そのノードを隠すことができるようになりました。
- [ソースエディター](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#Source_editor) にいくつかの新しい編集機能とキーボードショートカットが追加されました。詳細は、[ソースエディターの利用](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#Source_editor) を参照してください。

Mozilla は人気のアドオン [Firebug](https://getfirebug.com/) に依存するだけではなく、自身のウェブ開発者ツールの統合作業を進めています。これらのツールについてのさらなる情報および Firefox でのウェブ開発を支援する外部リソースの一覧は、[Web developer tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) にあります。

### その他の変更点

- GEOSTD8 文字セットは、これまでも完全にはサポートされていませんでしたが、まったくサポートされなくなりました。

## Mozilla 開発者とアドオン開発者向けの変更点

### JavaScript code modules

#### source-editor.jsm

- The [`resetUndo()`](/ja/docs/JavaScript_code_modules/source-editor.jsm#resetUndo%28%29) method was added; this lets you clear the undo stack.
- The source editor now offers methods for providing search capability: [`find()`](</ja/docs/JavaScript_code_modules/source-editor.jsm#find()> "JavaScript_code_modules/source-editor.jsm#find()"), [`findNext()`](</ja/docs/JavaScript_code_modules/source-editor.jsm#findNext()> "JavaScript_code_modules/source-editor.jsm#findNext()"), and [`findPrevious()`](</ja/docs/JavaScript_code_modules/source-editor.jsm#findPrevious()> "JavaScript_code_modules/source-editor.jsm#findPrevious()").

### XUL

- `chromemargin` 属性の値の定義が若干変更されました。これにより、デフォルトのウィンドウ枠幅が異なる各プラットフォームで、クロスプラットフォームな XUL コードの見た目を簡単に揃えられるようになりました。

### XPCOM

- [`nsISupports` プロキシ](/ja/docs/nsISupports_proxies) が削除されました。代わりに [runnable を使ってください](/ja/docs/XPCOM/Making_cross-thread_calls_using_runnables)。

<!---->

- Firefox 11 changed the behavior of [`Components.utils.getWeakReference()`](/ja/docs/Components.utils.getWeakReference) to throw an exception when the object reference is null; the previous behavior of silently failing has been restored.

### XPConnect

- The [`PRUint64`](/ja/docs/PRUint64) data type was incorrectly essentially identical to [`PRint64`](/ja/docs/PRInt64) when used with XPConnect. This has been fixed.

### インターフェイスの変更

- `nsIScreen_MOZILLA_2_0_BRANCH` インターフェイスが `nsIScreen` へ統合されました。このインターフェイスで定義されていた API (画面の最低輝度の調節) はこれまで文書化されていませんでしたが、これを機に文書化されました。
- The `nsIScriptError2` interface has been merged into `nsIScriptError`.
- `nsIDownloadManager.addDownload` is now handled asynchronously rather than synchronously.
- The `imgIContainerObserver.frameChanged` method now receives as its first parameter an `imgIRequest` object identifying the corresponding request.
- The `nsIDOMWindowUtils.sendTouchEvent` method has been added to allow synthesizing touch events.
- You can now scroll the specified content to the vertical center of the view by specifying `SCROLL_CENTER_VERTICALLY` as the scroll constant when calling `nsISelectionController.scrollSelectionIntoView`.
- The new `nsIMemoryMultiReporter.explicitNonHeap` attribute has been added; this is a more efficient way to obtain the sum of all of the multi-reporter's measurements that have a path that starts with "explicit" **and** are of the kind `KIND_NONHEAP`.
- The `nsIDOMWindowUtils.paintingSuppressed` attribute has been added; this boolean value indicates whether or not painting is currently suppressed on the window. This is used on mobile to prevent bouncy rendering that occurs when attempts to draw the page begin before enough content is available to do so smoothly.
- The `nsIDocCharset` and `nsIDocumentCharsetInfo` interfaces have been merged into `nsIDocShell`. As part of this work, the old `forcedDetector` attribute has been removed; it never did anything.

### SpiderMonkey

- `JSThread` has been eliminated.
- `JSThreadData` has been merged into `JSRuntime`.

### Building

- When building on Windows, you must have the Windows 7 SDK installed.

### Other changes

- The editor component (known as [Midas](/ja/docs/Midas)) now [only accepts events](/ja/docs/Using_the_Editor_from_XUL#Editor_event_handling) from privileged code.

## 関連記事

- [Firefox 12 のサイト互換性に関わる修正のまとめ](https://dev.mozilla.jp/2012/03/firefox-12-site-compatibility/)
- [Firefox 12 のアドオン互換性に関わる修正のまとめ](https://dev.mozilla.jp/2012/03/firefox-12-addon-compatibility/)
- [Aurora 12 is out – improvements and updated Developer Tools](https://hacks.mozilla.org/2012/02/aurora-12-is-out-improvements-and-updated-developer-tools/)

{{Firefox_for_developers('11')}}
