---
title: Firefox 8 for developers
slug: Mozilla/Firefox/Releases/8
---

Firefox 8 は 2011 年 11 月 8 日にリリースされました。このページでは、開発者に影響する Firefox 8 の変更点をまとめています。

## Web 開発者向けの変更点一覧

### HTML

- [`HTMLImageElement`](/ja/docs/Web/API/HTMLImageElement) に `crossOrigin` プロパティが追加され、また [`<img>`](/ja/docs/Web/HTML/Element/img) 要素に [`crossorigin`](/ja/docs/Web/HTML/Element/img#attr-crossorigin) 属性が追加されました。(参考: [バグ 664299](https://bugzilla.mozilla.org/show_bug.cgi?id=664299))
- [`HTMLSelectElement.add()`](</ja/docs/Web/API/HTMLSelectElement#add()>) メソッドの引数に、インデックスが追加されました。インデックスが指す要素の前に、新たな項目が挿入されます。このメソッドはこれまで、項目のみがサポートされていました。(参考: [バグ 666200](https://bugzilla.mozilla.org/show_bug.cgi?id=666200))
- `HTMLIsIndexElement` コンストラクタが削除されました。Firefox 4 以前から、どの要素もこのインターフェースをインプリメントしていませんでした。
- HTML5 のコンテキストメニュー機能 (contextmenu 属性) がサポートされました。この機能によって、要素固有のメニュー項目をネイティブのコンテキストメニューに追加できます。(この機能は HTML5 仕様の変更を待っている関係で、現時点では試験実装という扱いです。参考: [バグ 617528](https://bugzilla.mozilla.org/show_bug.cgi?id=617528 'FIXED: implement the HTML5 "context menu" feature (contextmenu attribute)'))
- すべての要素に [`accesskeylabel`](/ja/docs/HTML/Global_attributes#attr-accesskeylabel) 属性がサポートされました。
- [`<input>`](/ja/docs/Web/HTML/Element/input) と [`<textarea>`](/ja/docs/Web/HTML/Element/textarea) に `selectionDirection` アトリビュートが追加されました。また、`setSelectionRange()` メソッドが選択方向を指定できるようになりました。
- `tabindex` 属性でフォーカス可能になった要素にフォーカスしたとき、ほとんどの要素でフォーカスリングが描画されるようになりました。

### DOM

- [`insertAdjacentHTML`](/ja/docs/Web/API/Element/insertAdjacentHTML) メソッドが実装されました。
- [`BlobBuilder`](/ja/docs/Web/API/BlobBuilder) に `getFile()` メソッドが追加されました。このメソッドは blob の内容をファイルとして返します。
- 入れ子になった [`<label>`](/ja/docs/Web/HTML/Element/label) のイベントハンドリングが修正されました。
- ウィンドウ間での [`window.postMessage()`](/ja/docs/Web/API/Window/postMessage) に [`File`](/ja/docs/Web/API/File) と [`FileList`](/ja/docs/Web/API/FileList) が使えるようになりました。
- [`element.contenteditable`](/ja/docs/Web/API/Element/contenteditable) な領域において、見出しで改行した際、もしくはリスト編集モードから 2 回開業して抜け出す際、段落が挿入されるようになりました。(これまでは[`<br>`](/ja/docs/Web/HTML/Element/br)でしたが、これからは[`<p>`](/ja/docs/Web/HTML/Element/p)が挿入されます。)
- [`element.contenteditable`](/ja/docs/Web/API/Element/contenteditable) な領域において、1 行目に均等割付を与えたときに適切な処理を妨げるバグを修正しました。
- [`element.contenteditable`](/ja/docs/Web/API/Element/contenteditable) な領域の最初で delete もしくは backspace を押した際に、前のブロックに影響するバグを修正しました。
- [`document.getSelection()`](/ja/docs/Web/API/Document/getSelection "DOM の getSelection() メソッドは、 Window インタフェース及び Document インタフェースで利用可能です。
詳細については window.getSelection() の頁を参照して下さい。") が文字列化ではなく、[`window.getSelection()`](/ja/docs/Web/API/Window/getSelection) と同じ `Selection` オブジェクトを返すようになりました。
- HTML5 の `selectionDirection` プロパティが実装されました。編集可能テキストで選択した方向を指定できます。
- [`HTMLMediaElement`](/ja/docs/Web/API/HTMLMediaElement) の `seekable` プロパティが実装されました。このプロパティは [`TimeRanges`](/ja/docs/Web/API/TimeRanges) を返します。
- [`HTMLMediaElement`](/ja/docs/Web/API/HTMLMediaElement)`.preload` 属性が適切な _enumerated value_ を反映するようになりました。
- [`crossOrigin` プロパティ](/ja/docs/HTML/CORS_settings_attributes) に不正な値が使われた場合は "Anonymous" と扱われるようになりました。
- [`window.navigator.cookieEnabled`](/ja/docs/Web/API/Window/navigator/cookieEnabled) が、サイトごとの設定で Cookie の設定が上書きされている場合においても正しい情報を返すようになりました。

### JavaScript

- 引数なしで呼び出された [`RegExp.exec()`](/ja/docs/JavaScript/Reference/Global_Objects/RegExp/exec), [`RegExp.test()`](/ja/docs/JavaScript/Reference/Global_Objects/RegExp/test) が文字列 "undefined" にマッチするようになりました。
- 引数なし、もしくは `undefined` をとり呼び出された [`String.search()`](/ja/docs/JavaScript/Reference/Global_Objects/String/search), [`String.match()`](/ja/docs/JavaScript/Reference/Global_Objects/String/match) が空文字列にマッチするようになり、つまりはすべての文字列にマッチするようになりました。
- ウォッチリストのサポートが行われました。ウォッチリストは (非標準の) [`watch()`](/ja/docs/JavaScript/Reference/Global_Objects/Object/watch) メソッドおよび [`unwatch()`](/ja/docs/JavaScript/Reference/Global_Objects/Object/unwatch) メソッドから利用できます。

### CSS

- [`<resolution>`](/ja/docs/Web/CSS/resolution) が仕様に従い、[`<integer>`](/ja/docs/Web/CSS/integer) だけでなく [`<number>`](/ja/docs/Web/CSS/number) もサポートしました。
- [`hyphens`](/ja/docs/Web/CSS/hyphens) 利用時のハイフネーション規則がより多くの言語でサポートされました。
- [`background-size`](/ja/docs/Web/CSS/background-size) の処理が仕様により従ったものになりました。
- これまで Quriks モードでの [`text-decoration`](/ja/docs/Web/CSS/text-decoration) は、太い線で描画され、また子孫要素のテキストに沿って描画されていました。Firefox 8 からは、標準モードにより近い表示になります。
- 要素の水平方向への配置がより仕様に沿った実装になりました。この件に関するドキュメントを準備中ですが、今は [バグ 682780](https://bugzilla.mozilla.org/show_bug.cgi?id=682780) のコメント 23 をお読みください。
- [SVG 画像の拡大縮小](/ja/docs/CSS/Scaling_of_SVG_backgrounds) が背景画像においても適切に処理されるようになりました。

### Network

- ダブルクォートが [RFC 2231](https://tools.ietf.org/html/rfc2231)/[RFC 5987](https://tools.ietf.org/html/rfc5987) エンコーディングの区切り子として利用できなくなりました。これはそれらの RFC への準拠によるものです。
- MIME ヘッダフィールドのパーサは、引数に「=」が含まれない `Content-Disposition` ヘッダを受け付けなくなりました。
- JavaScript が無効な環境ではスクリプトファイルをダウンロードしないようになりました。
- SSL 2.0 のサポートが打ち切られました。

### WebSocket

- WebSocket オブジェクトの [`send()`](</ja/docs/WebSockets/WebSockets_reference/WebSocket#send()> "WebSockets/WebSockets_reference/WebSocket#send()") メソッドが不適切に真偽値を返していた挙動が修正されました。
- [`WebSocket`](/ja/docs/WebSockets/WebSockets_reference/WebSocket) オブジェクトの [`close()`](</ja/docs/WebSockets/WebSockets_reference/WebSocket#close()> "WebSockets/WebSockets_reference/WebSocket#close()") メソッドが現在の標準草案に従ったものになりました。また、クローズイベントが適切に [`CloseEvent`](/ja/docs/WebSockets/WebSockets_reference/CloseEvent) インターフェースを利用するようになりました。
- The [`WebSocket`](/ja/docs/WebSockets/WebSockets_reference/WebSocket) オブジェクトの `extensions` アトリビュートがサポートされました。
- WebSocket コンストラクタがひとつのプロトコル文字列だけではなく、プロトコルの配列もサポートするようになりました。
- SSL と 非 SSL の混在が WebSocket で認められなくなりました。
- WebSocket の接続エラーが `onerror` ハンドラをトリガーするようになりました。
- [WebSocket](/ja/docs/WebSockets) API が最新版の仕様に追従しました。(参考: [バグ 674890](https://bugzilla.mozilla.org/show_bug.cgi?id=674890), [バグ 674527](https://bugzilla.mozilla.org/show_bug.cgi?id=674527), [バグ 674716](https://bugzilla.mozilla.org/show_bug.cgi?id=674716))
- WebSocket の deflate-stream 拡張が無効にされました。この拡張は非推奨とされており、またいくつかの Web サイトとの互換性を損ねていました。

### WebGL

- 他のドメインからのテクスチャ読み込みが再び可能になりました。ただし、CORS によってアクセスを許可されている場合に限ります。(参考: [Cross-domain textures](/ja/docs/WebGL/Cross-Domain_Textures))
- Cross-process rendering with Direct2D/Direct3D 10.

### MathML

- [`<math>`](/ja/docs/Web/MathML/Element/math) 要素に `displaystyle` 属性のサポートが追加されました。
- [`<mtable>`](/ja/docs/Web/MathML/Element/mtable) 要素の `align` において、_負の行数_ の解釈が修正されました。

### 開発者ツール

- [`console`](/ja/docs/Using_the_Web_Console#The_console_object) オブジェクトが `dir()` メソッドをサポートしました。個のメソッドは指定したオブジェクトについて、インタラクティブなプロパティリストを表示します。

## Mozilla 開発者とアドオン開発者向けの変更点

アドオンを Firefox 8 互換にする際に必要となりそうな変更点は [Updating add-ons for Firefox 8](/ja/docs/Firefox/Updating_add-ons_for_Firefox_8) にまとめられています。

> **メモ:** Firefox 8 では、従来のメジャーリリースと同様に、バイナリコンポーネントをコンパイルし直す必要があります。詳しくは [バイナリインタフェース](/ja/docs/Developer_Guide/Interface_Compatibility#Binary_Interfaces) をご覧ください。

### XPCOM

- [`Components.utils`](/ja/docs/Components.utils)
  - : 特定のコンパートメントでより簡単にオブジェクトを作成できるようにするため、新しいメソッド [`createObjectIn()`](/ja/docs/Components.utils.createObjectIn) と [`makeObjectPropsNormal()`](/ja/docs/Components.utils.makeObjectPropsNormal) が追加されました。

#### その他の XPCOM 関連の変更

- You can now instantiate DOM [`File`](/ja/docs/Web/API/File) objects from component code by simply doing new File, instead of having to instantiate an [`nsIDOMFile`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMFile) directly.
- The `nsTPtrArray` array type has been removed. Its functionality is now all available on `nsTArray`, which now offers the `SafeElementAt()` method when instantiated using a pointer type. See the section on [`SafeElementAt()`](/ja/docs/XPCOM_array_guide#Bounds-safe_access_to_elements) in the [XPCOM array guide](/ja/docs/XPCOM_array_guide) for more information.

### Workers

ChromeWorkers から XPCOM オブジェクトにアクセスできなくなりました。XPConnect は [バグ 649537](https://bugzilla.mozilla.org/show_bug.cgi?id=649537) によりワーカーコンテキストで無効にされています。

### XUL

- A bug in [`document.execCommand()`](/ja/docs/Web/API/Document/execCommand) that occurred when calling it on the value of `contentDocument` has been fixed. Since Firefox 3, this resulted in errors instead of working correctly.
- [Bootstrapped add-ons](/ja/docs/Extensions/Bootstrapped_extensions) can now load chrome using a [`chrome.manifest`](/ja/docs/Chrome_Registration) file. See the section [Adding user interface with a chrome.manifest](/ja/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) for details.

### JavaScript コードモジュール

#### ISO8601DateUtils.jsm

- このコードモジュールは削除されました。[`Date.parse()`](/ja/docs/JavaScript/Reference/Global_Objects/Date/parse) が ISO 8601 形式の日付を受け付けるようになり、新しい [`Date.toISOString()`](/ja/docs/JavaScript/Reference/Global_Objects/Date/toISOString) で ISO 形式の日付と時刻を出力できます。今後は ISO8601DateUtils.jsm の代わりにこれらのメソッドを使ってください。なお、今のところこれらは [タイムゾーンに対応していません](https://bugzilla.mozilla.org/show_bug.cgi?id=693077)。

### ビルドシステムの変更

- 以下のビルド設定オプションは削除されました。

  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- When compiling IDL files to headers, the header file `jspubtd.h` is automatically included when needed. Manual inclusions of `jspubtd.h` and/or `jsapi.h` in IDL files that use jsval or \[implicit_jscontext] are no longer necessary.

### クロームの登録

- Gecko のバージョン互換性を指定する [`platformversion`](/ja/docs/Chrome_Registration#platformversion) フラグが chrome.manifest でも使えるようになりました。

### インタフェースの変更

- [`mozIJSSubScriptLoader.loadSubScript()`](/ja/docs/XPCOM_Interface_Reference/mozIJSSubScriptLoader#loadSubScript%28%29) メソッドが、可能な場合、起動キャッシュからスクリプトを読み込むようになりました。
- [`nsIAccessNode`](/ja/docs/XPCOM_Interface_Reference/NsIAccessNode) インタフェースから `ownerWindow` 属性が削除されました。
- [`nsIDOMStorageWindow`](/ja/docs/XPCOM_Interface_Reference/nsIDOMStorageWindow) インタフェースは [`nsIDOMWindow`](/ja/docs/XPCOM_Interface_Reference/nsIDOMWindow) インタフェースへ統合されました。
- [`nsIDOMWindowInternal`](/ja/docs/XPCOM_Interface_Reference/nsIDOMWindowInternal) インタフェースの全メンバーが [`nsIDOMWindow`](/ja/docs/XPCOM_Interface_Reference/nsIDOMWindow) インタフェースへ移動されました。インタフェース自体は互換性維持のため Firefox 9 まで (メンバーを持たない状態で) 残されます。
- [`nsIMemoryReporter`](/ja/docs/XPCOM_Interface_Reference/nsIMemoryReporter) の `KIND_MAPPED` 属性が廃止され、代わりに `KIND_NONHEAP` 属性と新しい単位型 `UNITS_COUNT_CUMULATIVE`、`UNITS_PERCENTAGE` が追加されました。
- [`nsINetworkLinkService`](/ja/docs/XPCOM_Interface_Reference/nsINetworkLinkService) インタフェースに `linkType` 属性が追加されました。この属性で使用中のネットワーク接続の種類を参照できます。ただし、今のところすべての OS で `LINK_TYPE_UNKNOWN` が返ります。Android 対応は、セキュリティの懸念が報告されたため、バックアウトされました。
- [`nsISelection2`](/ja/docs/XPCOM_Interface_Reference/nsISelection2) インタフェースは [`nsISelectionPrivate`](/ja/docs/XPCOM_Interface_Reference/nsISelectionPrivate) インタフェースへ統合されました。
- [`nsISelection3`](/ja/docs/XPCOM_Interface_Reference/nsISelection3) インタフェースは [`nsISelection`](/ja/docs/DOM/Selection) インタフェースへ統合されました。
- [`nsISessionStartup`](/ja/docs/XPCOM_Interface_Reference/nsISessionStartup) の属性の状態が、パフォーマンス上の理由から、文字列型ではなく [`jsval`](/ja/docs/SpiderMonkey/JSAPI_Reference/Jsval) 型になりました。
- [`nsIDocShell`](/ja/docs/XPCOM_Interface_Reference/nsIDocShell) の `isActive` 属性は、最小化されたウィンドウでは `false` を返すようになりました。

#### 削除されたインターフェース

次のインターフェースは内部で使用されていたもので、必要がなくなったため削除されました。

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

[`nsIWorkerFactory`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWorkerFactory) インターフェースも削除されました。ワーカーは `Worker`, `ChromeWorker` コンストラクタから生成可能です。

### その他の変更

- ウィンドウが最小化されたとき、最小化から復帰したとき、あるいは全画面表示と通常表示の切り替えが行われたときに、`window` が `sizemodechange` イベントを受け取るようになりました。
- [`extensions.autoDisableScopes` 設定を使う](/ja/docs/Installing_extensions#Preventing_automatic_install_from_specific_locations) ことで、特定の場所からのアドオン自動インストールを無効化できるようになりました。

## 参考

- [Firefox 7 for developers](/ja/docs/Mozilla/Firefox/Releases/7)
- [Firefox 6 for developers](/ja/docs/Mozilla/Firefox/Releases/6)
- [Firefox 5 for developers](/ja/docs/Mozilla/Firefox/Releases/5)
- [Firefox 4 for developers](/ja/docs/Mozilla/Firefox/Releases/4)
- [Firefox 3.6 for developers](/ja/docs/Mozilla/Firefox/Releases/3.6)
- [Firefox 3.5 for developers](/ja/docs/Mozilla/Firefox/Releases/3.5)
- [Firefox 3 for developers](/ja/docs/Mozilla/Firefox/Releases/3)
- [Firefox 2 for developers](/ja/docs/Mozilla/Firefox/Releases/2)
- [Firefox 1.5 for developers](/ja/docs/Mozilla/Firefox/Releases/1.5)
