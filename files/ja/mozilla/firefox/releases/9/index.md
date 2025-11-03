---
title: Firefox 9 for developers
slug: Mozilla/Firefox/Releases/9
---

Firefox 9 は Windows 向けに 2011 年 12 月 20 日にリリースされました。その直後に見つかったクラッシュバグを修正した Mac 版および Linux 版のバージョン 9.0.1 は、2011 年 12 月 21 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- [`<li>`](/ja/docs/Web/HTML/Reference/Elements/li) 要素の `value` 属性が負の値を取れるようになりました。これは HTML5 仕様に基づくもので、HTML5 以前は 0 に変換されていました。
- [`<audio>`](/ja/docs/Web/HTML/Reference/Elements/audio) と [`<video>`](/ja/docs/Web/HTML/Reference/Elements/video) 要素を用いるときのメディアの URI において、[メディアの開始時間と終了時間を指定](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio#specifying_playback_range) できるようになりました。
- [`<input>`](/ja/docs/Web/HTML/Reference/Elements/input) 要素と [`<textarea>`](/ja/docs/Web/HTML/Reference/Elements/textarea) 要素が、スペルチェッカーの実行において [`lang` 属性の値を加味](/ja/docs/Web/HTML/Reference/Global_attributes/spellcheck#controlling_the_spellchecker_language)するようになりました。
- Android 版 Firefox において、 `type="file"` と `accept="image/*" を指定している`[`<input>`](/ja/docs/Web/HTML/Reference/Elements/input) 要素`のときに`、ユーザーがブラウザーからアプリを切り替えることなく電話のカメラを用いて写真を撮れるようになりました。
- Windows Vista スタイル PNG ICO イメージがサポートされるようになりました。
- CORS が許可されているときに、CORS アクセスを要求するために [`crossorigin`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) 属性 を用いた画像を描いても、不正に [Canvas を制限状態に](/ja/docs/Web/HTML/How_to/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f)しないようになりました。
- [`rowspan`](/ja/docs/Web/HTML/Reference/Elements/td#attr-rowspan) 属性に指定できる値の最大値が 8190 から 65,534 になりました。

### CSS

- [`font-stretch`](/ja/docs/Web/CSS/Reference/Properties/font-stretch) プロパティがサポートされました。
- [`columns`](/ja/docs/Web/CSS/Reference/Properties/columns) プロパティが [-moz](/ja/docs/Glossary/Vendor_Prefix) 接頭辞付きでサポートされました。このプロパティは [`column-width`](/ja/docs/Web/CSS/Reference/Properties/column-width) と [`column-count`](/ja/docs/Web/CSS/Reference/Properties/column-count) をまとめて記述する短縮形プロパティです。
- [`<link>`](/ja/docs/Web/HTML/Reference/Elements/link) 要素を用いて取り込まれたスタイルシートが完全にロードされてパースされたとき (しかしまだドキュメントに適用されていない状態)、[`load` イベント](/ja/docs/Web/HTML/Reference/Elements/link#stylesheet_load_events) が発生するようになりました。また、スタイルシートの処理においてエラーが起きた場合、`error` イベントが発生します。
- [`text-overflow`](/ja/docs/Web/CSS/Reference/Properties/text-overflow) 向けの 2 つの値を指定できる新しい構文を用いて、左端と右端の両方のオーバフロー設定を指定できるようになりました。

### DOM

- [フルスクリーンモードの利用](/ja/docs/Web/API/Fullscreen_API)
  - : 新しい full-screen API は、ブラウザーインターフェイスを表示せずに、画面全体を用いてコンテンツを表示する方法を提供します。これはビデオおよびゲームにとって素晴らしいものです。この API は現在実験的かつプレフィックス付きです。

<!---->

- [`Node.contains()`](/ja/docs/Web/API/Node/contains) メソッドがサポートされました。このメソッドによって、あるノードが別のノードの子孫であるかを調べられます。
- [`Node.parentElement`](/ja/docs/Web/API/Node/parentElement) 属性が実装されました。このメソッドは DOM ノードの親 [`Element`](/ja/docs/Web/API/Element) 、または、親が要素ではない場合は `null` を返します。
- DOM Level 3 [Composition イベント](/ja/docs/Web/API/CompositionEvent) がサポートされました。
- [`Document.scripts`](/ja/docs/Web/API/Document/scripts) 属性が実装されました。このメソッドはドキュメントのすべての [`<script>`](/ja/docs/Web/HTML/Reference/Elements/script) 要素の [`HTMLCollection`](/ja/docs/Web/API/HTMLCollection) を返します。
- [`Document.queryCommandSupported()`](/ja/docs/Web/API/Document/queryCommandSupported) メソッドが実装されました。
- 標準 IDL インターフェイスとして Event ハンドラーが実装されました。多くのケースで、これはコンテンツに影響を及ぼさないはずですが、[例外が存在します。](/ja/docs/Web/API/Document_Object_Model/Events#event_handler_changes_in_firefox_9)
- 新しいレスポンスタイプ、 "moz-json" が XMLHttpRequest に追加されました。 そのタイプを用いると、 XMLHttpRequest に自動的に [JSON](/ja/docs/Glossary/JSON) 文字列をパースさせられます。つまり、このタイプをリクエストしたときはパースされた JSON 文字列が返るので、`response` プロパティの値がパース結果の JavaScript オブジェクトになります。
- [XMLHttpRequest の progress イベント](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) が受け取ったデータの各チャンクに対して確実に送信されるようになりました。つまり、以前のバージョンでは受け取ったデータの最後のチャンクが progeress イベントを発生させない可能性がありました。データの最後のチャンクを受け取ったかを判定するために load イベントも監視する必要はもう無くなり、progress イベントだけで進捗を追えるようになります。
- 過去に、`null` のリスナーを指定した [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) の呼び出しは例外を投げていましたが、エラーを出すことなく、何の影響も及ぼさずに処理を戻すようになりました。
- 新しい [`navigator.doNotTrack`](/ja/docs/Web/API/Navigator/doNotTrack 'ユーザーの do-not-track 設定を返します。ユーザーがウェブサイトやコンテンツ、広告にトラッキングされたくないと要求している場合、この値は "1" です。') プロパティを用いることで、コンテンツ中で簡単にユーザーが do-no-track 設定を有効にしているかを判定できます。この値が "yes" ならば、ユーザーを追跡するべきではありません。
- [`splitText()`](/ja/docs/Web/API/Text/splitText) や [`normalize()`](/ja/docs/Web/API/Node/normalize) が呼び出されたとき、[`Range`](/ja/docs/Web/API/Range) オブジェクトや [`Selection`](/ja/docs/Web/API/Selection) オブジェクトがとる挙動が仕様通りになりました。
- doctype ノードに対しての [`Node.ownerDocument`](/ja/docs/Web/API/Node/ownerDocument) の値が、`null` ではなく、ノードを作成するために呼ばれた [`createDocumentType()`](/ja/docs/Web/API/DOMImplementation/createDocumentType) 上のドキュメントになるようになりました。
- `window.navigator.taintEnabled` が削除されました。このプロパティは長年サポートされていませんでした。

### Workers

- Firefox 8 では、blob URL で実装された Workers が壊れていましたが、Firefox 9 から再び動作するようになりました。

### MathML

- [`<maction>`](/ja/docs/Web/MathML/Reference/Element/maction) 要素の `actiontype` 属性における非推奨な値 `restyle` が削除されました。
- まだ要素自体はサポートされていませんが、[`<mlabeledtr>`](/ja/docs/Web/MathML/Reference/Element/mlabeledtr) 要素を用いても、描画を完全に壊さないようになりました。この要素の実際のサポートの進捗は [バグ 689641](https://bugzilla.mozilla.org/show_bug.cgi?id=689641) を参照してください。

### Networking

- You can now send the contents of [JavaScript typed arrays](/ja/docs/Web/JavaScript/Guide/Typed_arrays) (that is, the contents of an [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) object) [using XMLHttpRequest](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#sending_typed_arrays_as_binary_data).
- WebSocket connections now permit non-characters in otherwise valid UTF-8 data frames to be received, instead of failing.
- The HTTP `Accept` header for XSLT requests has been changed to simply "\*/\*" for simplicity. Since fetching XSLT has always fallen back to "\*/\*" anyway, it made sense to simplify the initial request.
- Attempts by a server to use the `301 Moved Permanently` or `307 Temporary Redirect` response codes to redirect the user to a `javascript:` URI now [result in a "bad connection" error](/ja/docs/Web/HTTP#more_on_redirection_responses) instead of actually redirecting. This prevents certain types of cross-site scripting attacks.
- Content served with an empty [`Content-Disposition`](/ja/docs/Web/HTTP/Reference/Headers/Content-Disposition) were previously treated as if the [`Content-Disposition`](/ja/docs/Web/HTTP/Reference/Headers/Content-Disposition) were "attachment"; this didn't always work as expected. These are now handled as if the [`Content-Disposition`](/ja/docs/Web/HTTP/Reference/Headers/Content-Disposition) were "inline".
- The default maximum size of an item in the disk cache has been increased to 50 MB; previously, only items up to 5 MB were cached.

### Developer tools

- The web console now supports basic [string substitutions](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string_substitutions) in its logging methods.
- You can now [create visually nested blocks of output](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using_groups_in_the_console) in the web console, to help make it easier to read.

## Mozilla 開発者とアドオン開発者向けの変更点

See [Updating add-ons for Firefox 9](/ja/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_9) for an overview of the changes you may need to make to get your add-ons working in Firefox 9.

### XUL

- The [`tab`](/ja/docs/Mozilla/Tech/XUL/tab) element now has a [`pending`](/ja/docs/Mozilla/Tech/XUL/Attribute/pending) attribute, whose value is `true`, when the tab is in the process of being restored by the session store service. This can be used for styling the tab in themes. The attribute isn't present on tabs that aren't pending.
- The [`tab`](/ja/docs/Mozilla/Tech/XUL/tab) element now has an [`unread`](/ja/docs/Mozilla/Tech/XUL/Attribute/unread) attribute, whose value is `true`, when the tab has changed since the last time it was the active tab or if it hasn't been selected since the current session began. The attribute isn't present on tabs that are not unread.
- You can now use a [`panel`](/ja/docs/Mozilla/Tech/XUL/panel) as a drag image for DOM drag and drop operations. This lets you use the standard drag & drop API for [drag and drop of XUL content](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#using_xul_panels_as_drag_images).
- The [`notificationbox`](/ja/docs/Mozilla/Tech/XUL/notificationbox) element's [`appendNotification`](/ja/docs/Mozilla/Tech/XUL/Method/appendNotification) method now lets you specify a callback that gets called for interesting events related to the notification box. Currently, the only event is "removed", which tells you the box has been removed from its window.

### JavaScript code module changes

- [`FileUtils.jsm`](/ja/docs/JavaScript_code_modules/FileUtils.jsm) now has a `File` constructor that returns an [`nsIFile`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFile) object representing a file specified by its pathname.

### Service changes

- サイト別設定サービスが [プライベートブラウジングモードを考慮するようになりました](/ja/docs/Using_content_preferences#private-browsing) ([バグ 679784](https://bugzilla.mozilla.org/show_bug.cgi?id=679784) 参照)。

### Interface changes

#### Removed interfaces

- [`nsIGlobalHistory3`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIGlobalHistory3) has been removed during streamlining of the Places and DocShell code.

#### Miscellaneous interface changes

- [`nsISound`](/ja/docs/XPCOM_Interface_Reference/nsISound) インターフェイスに新しい定数 `EVENT_EDITOR_MAX_LEN` が導入され、テキスト欄に入力された文字数が制限を超えた場合にシステム効果音を鳴らせるようになりました。今のところ、これは Windows のみで使用されています。
- [`nsIScriptError2`](/ja/docs/XPCOM_Interface_Reference/nsIScriptError2) インターフェイスに新しいプロパティ `timeStamp` と `innerWindowID` が追加されました。また、`initWithWindowID()` メソッドが、外部ウィンドウ ID の代わりに内部ウィンドウ ID を受け取るようになりました。
- [`nsIBidiKeyboard`](/ja/docs/XPCOM_Interface_Reference/nsIBidiKeyboard) インターフェイスに [`haveBidiKeyboards`](/ja/docs/XPCOM_Interface_Reference/nsIBidiKeyboard#haveBidiKeyboards) 属性が追加されました。これは、OS に少なくともひとつ各方向 (LTR もしくは RTL) のキーボードがインストールされているかどうかを判別できるものです。
- The new [`nsIEditor.isSelectionEditable`](/ja/docs/XPCOM_Interface_Reference/nsIEditor#isSelectionEditable) attribute lets you determine if the current selection anchor is editable. This helps to support cases where only parts of the document are editable, by letting you see if the current selection is in an editable section.
- The [`nsIBrowserHistory.registerOpenPage()`](</ja/docs/XPCOM_Interface_Reference/nsIBrowserHistory#registerOpenPage()>) and [`nsIBrowserHistory.unregisterOpenPage()`](</ja/docs/XPCOM_Interface_Reference/nsIBrowserHistory#unregisterOpenPage()>) methods have been removed as part of a performance overhaul in the Places system. You can use the corresponding methods in [`mozIPlacesAutoComplete`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIPlacesAutoComplete) instead.
- The [`nsIDOMWindowUtils.wrapDOMFile()`](</ja/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils#wrapDOMFile()>) method has been added; this returns a DOM [`File`](/ja/docs/Web/API/File) object for a given [`nsIFile`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFile).
- The [`nsIChromeFrameMessageManager.removeDelayedFrameScript()`](</ja/docs/XPCOM_Interface_Reference/nsIChromeFrameMessageManager#removeDelayedFrameScript()>) method was added to support removing delayed load scripts. Bootstrapped add-ons should use this, at shutdown, to remove any scripts it loaded using [`nsIChromeFrameMessageManager.loadFrameScript()`](</ja/docs/XPCOM_Interface_Reference/nsIChromeFrameMessageManager#loadFrameScript()>) with the delayed load flag set. This is exposed to add-ons as `browser.messageManager.removeDelayedFrameScript()`.
- The [`nsIAppStartup`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAppStartup) interface has a new `interrupted` attribute, which lets you know if the startup process was interrupted at any point by an interactive prompt. This can be helpful, for example, when timing startups during performance evaluation, to be able to drop numbers from sessions that were interrupted.
- The [`nsIEditorSpellCheck`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIEditorSpellCheck) interface has been revised to support per-site selection of spell checker dictionaries.

### IDL パーサー

IDL パーサーから、これまで完全に実装されたことのなかったユニークポインターの概念が削除されました。

### Build system changes

- The `--enable-application=standalone` option for building standalone XPConnect has been removed; it hasn't worked since 2007 anyway.
- The build system now looks for `.mozconfig` at `$topsrcdir/.mozconfig` or `$topsrcdir/mozconfig`, and nowhere else, unless you override the `.mozconfig` path using the `MOZCONFIG` environment variable.
- The xpidl utility has been replaced in the SDK with [pyxpidl](/ja/docs/XPIDL/pyxpidl).

### Other changes

- The spell checker no longer has an arbitrary 130-character word-length limit on the length of words it will attempt to spell check. This limit was previously in place to prevent crashes that were occurring in the spell checker, but the underlying bugs have since been fixed.
- You can now register components to add features to the [`window.navigator`](/ja/docs/Web/API/Window/navigator) object by using the "JavaScript-navigator-property" category. See [Adding APIs to the navigator object](/ja/docs/Developer_Guide/Adding_APIs_to_the_navigator_object) for details and examples.

## 参考

- [Firefox 8 for developers](/ja/docs/Mozilla/Firefox/Releases/8)
- [Firefox 7 for developers](/ja/docs/Mozilla/Firefox/Releases/7)
- [Firefox 6 for developers](/ja/docs/Mozilla/Firefox/Releases/6)
- [Firefox 5 for developers](/ja/docs/Mozilla/Firefox/Releases/5)
- [Firefox 4 for developers](/ja/docs/Mozilla/Firefox/Releases/4)
- [Firefox 3.6 for developers](/ja/docs/Mozilla/Firefox/Releases/3.6)
- [Firefox 3.5 for developers](/ja/docs/Mozilla/Firefox/Releases/3.5)
- [Firefox 3 for developers](/ja/docs/Mozilla/Firefox/Releases/3)
- [Firefox 2 for developers](/ja/docs/Mozilla/Firefox/Releases/2)
- [Firefox 1.5 for developers](/ja/docs/Mozilla/Firefox/Releases/1.5)
