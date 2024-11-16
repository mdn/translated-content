---
title: Firefox 7 for developers
slug: Mozilla/Firefox/Releases/7
---

{{FirefoxSidebar}}

Firefox 7 は 2011 年 9 月 27 日にリリースされました。このページは Firefox 7 のリリースにあたり、開発者に関係する変更についてまとめたものです。

## ウェブ開発者向けの変更点一覧

### HTML

- {{ domxref("HTMLHeadElement") }} の `profile` プロパティが削除されました。このプロパティは Gecko 2.0 から非推奨となっていました。
- {{ domxref("HTMLImageElement") }} の `x` プロパティと `y` プロパティが削除されました。
- {{ domxref("HTMLSelectElement") }} の `add()` メソッドの `before` 引数が optional となりました。
- {{ HTMLElement("body") }} の [`background`](/ja/docs/Web/HTML/Element/body#background) 属性が URI として解決されなくなりました。この変更は HTML 仕様への準拠によるものです。
- {{ HTMLElement("option") }} の [`label`](/ja/docs/Web/HTML/Element/option#label) 属性が指定されていない場合、要素の内容テキストを反映するようになりました。

#### Canvas

- `setTransform()`, `bezierCurveTo()`, `arcTo()` に不正な値を与え呼び出したとき、例外が投げられなくなりました。これらは無視されます。
- [`isPointInPath()`](</ja/docs/DOM/CanvasRenderingContext2D#isPointInPath()> "DOM/CanvasRenderingContext2D#isPointInPath()") メソッドに与えられた点と現在のパスを比較するにあたり、変換マトリクスを適切に考慮するようになりました。
- `strokeRect()` メソッドが幅 0 高さ 0 で呼び出された場合、何もしなくなりました。
- [`drawImage()`](</ja/docs/DOM/CanvasRenderingContext2D#drawImage()> "DOM/CanvasRenderingContext2D#drawImage()") メソッドが幅 0 もしくは高さ 0 で呼び出された場合、{{ HTMLElement("canvas") }} は `INVALID_STATE_ERR` を投げるようになりました。
- [`drawImage()`](</ja/docs/DOM/CanvasRenderingContext2D#drawImage()> "DOM/CanvasRenderingContext2D#drawImage()") メソッドが非定形の座標で呼び出された場合に、例外が投げられなくなりました。
- `toDataURL()` が JPEG の品質を制御する引数を受け付けるようになりました。
- `globalCompositeOperation` の値から、非標準だった `clear` と `over` が削除されました。
- [影](/ja/docs/Canvas_tutorial/Applying_styles_and_colors#Shadows) が `source-over` 合成処理の場合にのみ描画されるようになりました。
- Canvas の塗りつぶし方を設定する [`mozFillRule`](/ja/docs/DOM/CanvasRenderingContext2D#Attributes) アトリビュートが追加されました。

### CSS

- {{ cssxref("text-overflow") }} がサポートされました。
- {{ cssxref("orient", "-moz-orient") }} が修正され、縦配置の {{ HTMLElement("progress") }} でも進行方向が適切なものになりました。

### MathML

- XLink href が復活し、また MathML3 の `href` 属性もサポートされました。リンクには後者の属性を使うことが望まれます。
- {{ MathMLElement("mpadded") }} 要素に `voffset` 属性のサポートが追加されました。また `lspace` 属性の挙動も修正されました。
- トップレベル要素である {{ MathMLElement("math") }} 要素が {{ MathMLElement("mstyle") }} 要素のもつ属性すべてを受け入れるようになりました。
- [Asana Math](http://www.ctan.org/tex-archive/fonts/Asana-Math/) フォントのサポートが追加されました。
- {{ MathMLElement("mfrac") }} 要素によって表される分数の線の太さ `medium` が修正され、規定の太さになりました。
- [負のスペースを表すキーワード](</ja/docs/MathML/Attributes/Values#Constants_(namedspaces)> "MathML/Attributes/Values#Constants_(namedspaces)") がサポートされました。

### DOM

- {{ domxref("File") }} インターフェイスの非標準なメソッド `getAsBinary()`, `getAsDataURL()`, `getAsText()` が削除されました。あわせて、非標準なプロパティ `fileName` と `fileSize`も削除されました。
- {{ domxref("Blob") }} によってデータが指定され、また `Content-Disposition` HTTP ヘッダーが送信されたとき、{{ domxref("XMLHttpRequest/FormData", "FormData") }} インターフェイスはファイル名を空文字列として報告しないようになりました。これによって幾つかのサーバーに起こっていたエラーが解消されます。
- {{ domxref("element.dir") }} 属性が結果を常に小文字で返すようになりました。これは HTML 仕様の要件によるものです。
- {{ domxref("FileReader") }} の `readAsArrayBuffer()` メソッドが実装されました。
- {{ domxref("document.createEntityReference") }} が削除されました。このメソッドは適切に実装されておらず、他のブラウザーのほとんどで実装されていませんでした。
- `document.normalizeDocument` が削除されました。今後は {{ domxref("Node.normalize") }} を利用してください。
- `index` が範囲外の場合、{{ domxref("DOMTokenList.item") }} が `undefined` を返すようになりました。これまでは `null` を返していました。
- `Node.getFeature` が削除されました。
- `HTMLInsElement` インターフェイスと `HTMLDelElement` インターフェイスが削除されました。これは {{ HTMLElement("ins") }} と {{ HTMLElement("del") }} 要素が実際には {{ domxref("HTMLModElement") }} を使用していたためです。
- 新しい [DOM4](http://www.w3.org/TR/dom/) 仕様にある {{ domxref("Attr") }} が {{ domxref("Node") }} を継承しない (DOM Core 1, 2, 3 まではしていた) という定義に準拠するため、{{ domxref("Attr") }} インターフェイス上の {{ domxref("Node") }} プロパティやメソッドについて、将来的にこれらを削除するといった意味の [警告を出す](/ja/docs/DOM/Attr#Deprecated_properties_and_methods) ようになりました。
- {{ domxref("Window") }} オブジェクトに {{ domxref("window.ondeviceorientation") }} プロパティと {{ domxref("window.ondevicemotion") }} プロパティのサポートを追加しました。
- {{ domxref("window.resizeTo") }}、{{ domxref("window.resizeBy") }}、{{ domxref("window.moveTo") }}、{{ domxref("window.moveBy") }} はメインウィンドウに適用されなくなりました。

### JavaScript

- [`Function.arity`](/ja/docs/JavaScript/Reference/Global_Objects/Function/arity) プロパティが削除されました。今後は [`Function.length`](/ja/docs/JavaScript/Reference/Global_Objects/Function/length) を利用してください。

### WebSocket

- 設定項目に `network.websocket.max-connections` が導入されました。これは WebSocket の同時最大接続数を決定するために使用されます。既定値は 200 です。
- WebSocket プロトコルで使用するプロトコルバージョンが、IETF draft 10 で指定されているバージョン 8 になりました。Firefox 6 ではバージョン 7 が使われていました。
- WebSocket API が Firefox Mobile でも利用可能になりました。

### Console API

- [web console](/ja/docs/Using_the_Web_Console) が開かれる前に `console.log` によって記録されたメッセージもあらかじめ記録され、[web console](/ja/docs/Using_the_Web_Console) が開かれた時に表示されるようになりました。

### Web Timing

- [Navigation Timing](http://www.w3.org/TR/navigation-timing/) 仕様の初期実装が完了しました。

### XML

- XSLT スタイルシートはこれまでサポートされていた `text/xsl` に加えて、正式な `MIME` 型 `application/xslt+xml` も利用可能になりました。(スタイルシート処理命令もしくは [HTTP Link ヘッダー](http://tools.ietf.org/html/rfc5988)で利用できます。)

## Mozilla 開発者とアドオン開発者向けの変更点

これらの変更は、アドオン開発者と、Mozilla 本体のコードに関わっている開発者の双方に影響するものです。アドオン開発者は [アドオンの Firefox 7 対応](/ja/docs/Firefox/Updating_extensions_for_Firefox_7) に書かれている追加情報も参照してください。

> [!NOTE]
> Firefox 7 では、従来のメジャーリリースと同様に、バイナリーコンポーネントをコンパイルし直す必要があります。詳しくは [バイナリーインターフェイス](/ja/docs/Developer_Guide/Interface_Compatibility#Binary_Interfaces) をご覧ください。

### JavaScript コードモジュール

#### FileUtils.jsm

- 書き込みのための、安全でない状態のファイル出力ストリームを開ける `openFileOutputStream()` メソッドが追加されました。

#### AddonManager.jsm

- アプリケーション起動中に変更が行われたアドオンの一覧を管理できるメソッドがアドオンマネージャに追加されました。[`addStartupChange()`](/ja/docs/Addons/Add-on_Manager/AddonManager#addStartupChange%28%29)、[`removeStartupChange()`](/ja/docs/Addons/Add-on_Manager/AddonManager#removeStartupChange%28%29)、[`getStartupChanges()`](/ja/docs/Addons/Add-on_Manager/AddonManager#getStartupChanges%28%29) の 3 つです。

### XUL

- [`tree`](/ja/docs/XUL/tree) 要素で、[`datasources`](/ja/docs/XUL/Attribute/datasources) 属性によって参照されたノードがすべて `id` 属性で指定された固有 ID を持っていた場合、3 種類の公開状態を記憶できるようになりました。
- [`panel`](/ja/docs/XUL/panel) 要素で、新しい [`backdrag`](/ja/docs/XUL/Attribute/backdrag) 属性を使って、[ユーザーがバックグラウンドの任意の場所をクリックして、その要素をドラッグできるように](/ja/docs/XUL/PopupGuide/Panels#Letting_panels_be_dragged_by_grabbing_the_background) 設定することが可能となりました。

### XPCOM

- [`Components.utils.schedulePreciseGC()`](/ja/docs/Components.utils.schedulePreciseGC) メソッドが追加されました。これは、以後どこかの時点で JavaScript コードが何も実行されていないときに、完全なガベージコレクション処理を行う予定を入れられるものです。
- [`Components.utils.unload()`](/ja/docs/Components.utils.unload) メソッドが追加されました。これは、[`Components.utils.load()`](/ja/docs/Components.utils.load) で読み込まれた JavaScript コードモジュールを破棄できるようにするものです。

### ユーザー体験の変更

- 拡張機能のオプションが、再起動不要型と従来型のいずれでも [アドオンマネージャ内に表示](/ja/docs/Extensions/Inline_Options) されるようになりました。
- ダウンロードされたファイルの保存先がサイトごとに記憶されるようになりました。このデータは [DownloadLastDir.jsm](/ja/docs/JavaScript_code_modules/DownloadLastDir.jsm) を使ってアクセスできます。

### ビルドシステムの変更

- ActiveX 組み込み API はビルドされなくなり、ビルドシステムでのサポートも削除されました。関連インターフェイスも削除されました。下記 [削除されたインターフェイス](#削除されたインターフェイス) を参照してください。
- Windows でのビルド時に `-Zc:wchar_t-` を指定できなくなりました。詳しくは、更新された [ビルド手順](/ja/docs/Developer_Guide/Build_Instructions#Build_and_install) をご覧ください。

### インターフェイスの変更

- [`nsISocketTransport`](/ja/docs/XPCOM_Interface_Reference/nsISocketTransport) に新しい接続フラグ `DISABLE_IPV6` が追加されました。これは、利用可能な IPv6 アドレスがあってもそれを無視して、IPv4 アドレスのみに接続するようソケットを設定するものです。また、[`nsIDNSService`](/ja/docs/XPCOM_Interface_Reference/nsIDNSService) に新しい解決フラグ `RESOLVE_DISABLE_IPV6` が追加されました。これは、利用可能な IPv6 アドレスがあってもそれを無視して、IPv4 ホストのみを考慮してドメイン名解決を行うものです。これらの変更は、IPv4 と IPv6 の両方に対応している (その中でも特に IPv6 接続がうまくいかない) ホストへ接続する際の応答時間を短縮する [「幸せな目玉」戦略](http://tools.ietf.org/html/draft-wing-http-new-tech-00) を実装するために使われます。
- [`inIDOMUtils`](/ja/docs/XPCOM_Interface_Reference/inIDOMUtils) に 2 つのメソッドが追加されました。あるノードの子ノード一覧を返す [`getChildrenForNode()`](/ja/docs/XPCOM_Interface_Reference/inIDOMUtils#getChildrenForNode%28%29) と、選択範囲内で使用されているフォントフェイス一覧を返す [`getUsedFontFaces()`](/ja/docs/XPCOM_Interface_Reference/inIDOMUtils#getUsedFontFaces%28%29) です。
- `nsIMarkupDocumentViewer_MOZILLA_2_0_BRANCH` インターフェイスは [`nsIMarkupDocumentViewer`](/ja/docs/XPCOM_Interface_Reference/nsIMarkupDocumentViewer) インターフェイスへ統合されました。
- `nsIDOMWindow2` インターフェイスは [`nsIDOMWindow`](/ja/docs/XPCOM_Interface_Reference/nsIDOMWindow) インターフェイスへ統合されました。
- `nsIDOMWindow_2_0_BRANCH` インターフェイスは [`nsIDOMWindowInternal`](/ja/docs/XPCOM_Interface_Reference/nsIDOMWindowInternal) インターフェイスへ統合されました。
- URI 引数付きで [`nsINavHistoryObserver`](/ja/docs/XPCOM_Interface_Reference/nsINavHistoryObserver) メソッドを使う場合、GUID も必要となります。
- `nsISHistory_2_0_BRANCH` インターフェイスは [`nsISHistory`](/ja/docs/XPCOM_Interface_Reference/nsISHistory) インターフェイスへ統合されました。
- [`nsITelemetry`](/ja/docs/XPCOM_Interface_Reference/nsITelemetry) に、ID からヒストグラムを返す [`getHistogramById()`](/ja/docs/XPCOM_Interface_Reference/nsITelemetry#getHistogramById%28%29) メソッドと、`false` 設定時に [使用統計情報 (Telemetry)](http://mozilla.jp/legal/privacy/firefox/#telemetry) の記録を無効化できる `canRecord` 属性が追加されました。使用統計情報はプライベートブラウジングモードでは記録されなくなりました。([Firefox バグ 661574](https://bugzil.la/661574)、[Firefox バグ 661573](https://bugzil.la/661573))
  [`newHistogram()`](/ja/docs/XPCOM_Interface_Reference/nsITelemetry#newHistogram%28%29) で定義された使用統計ヒストグラムは、Mozilla への定期報告に含まれません。
- [`nsIMemoryReporter`](/ja/docs/XPCOM_Interface_Reference/nsIMemoryReporter) インターフェイスに大幅な変更が行われました。使用する場合はコードに変更を加える必要があるでしょう。
- [`nsIXMLHttpRequest.setRequestHeader()`](/ja/docs/nsIXMLHttpRequest#setRequestHeader%28%29) によって設定されたヘッダーが、リダイレクトを辿る際にもリクエストに含まれて送信されるようになりました。これまでこの方法で設定されたヘッダーは送信されていませんでした。
- [`nsIDocShell`](/ja/docs/XPCOM_Interface_Reference/nsIDocShell) に `allowWindowControl` 属性が追加されました。`true` を設定すると、docshell のコンテンツがウィンドウをコントロールできるようになります (ウィンドウの移動やサイズ変更など)。
- `nsIThreadInternal2` インターフェイスは [`nsIThreadInternal`](/ja/docs/XPCOM_Interface_Reference/nsIThreadInternal) インターフェイスへ統合されました。

#### 新しいインターフェイス

- [`nsIDOMFontFace`](/ja/docs/XPCOM_Interface_Reference/nsIDOMFontFace)
  - : ひとつのフォントフェイスを表します。
- [`nsIDOMFontFaceList`](/ja/docs/XPCOM_Interface_Reference/nsIDOMFontFaceList)
  - : [`nsIDOMFontFace`](/ja/docs/XPCOM_Interface_Reference/nsIDOMFontFace) で表されたフォントフェイスの一覧を表します。

#### 削除されたインターフェイス

以下のインターフェイスは、不要となり削除された実装です。

- `nsIDOM3Attr`
- `nsIDOM3Node`
- `nsIDOM3TypeInfo`
- `nsIDOM3Text`
- `nsIDOMDocumentStyle`
- `nsIDOMNSDocument`
- `nsIDOMNSFeatureFactory`
- [`nsIDOMNSHTMLDocument`](/ja/docs/XPCOM_Interface_Reference/nsIDOMNSHTMLDocument)
- `nsIDOMNSHTMLFormElement`
- `nsIDOMNSHTMLHRElement`
- `nsIDOMNSHTMLTextAreaElement`

以下のインターフェイスは、ActiveX 組み込み API 廃止の一環として削除されました。

- `DITestScriptHelper`
- `DWebBrowserEvents`
- `DWebBrowserEvents2`
- [`IDispatch`](/ja/docs/XPCOM_Interface_Reference/IDispatch)
- `IMozControlBridge`
- `IMozPluginHostCtrl`
- `IWebBrowser`
- `IWebBrowser2`
- `IWebBrowserApp`
- `IXMLDocument`
- `IXMLElement`
- `IXMLElementCollection`
- `IXMLError`
- `nsIActiveXSecurityPolicy`
- [`nsIDispatchSupport`](/ja/docs/XPCOM_Interface_Reference/nsIDispatchSupport)
- `nsIMozAxPlugin`
- `nsIScriptEventHandler`
- `nsIScriptEventManager`

## 参考

- [高速リリースサイクルに関するよくある質問](http://mozilla.jp/firefox/preview/faq/)

{{Firefox_for_developers('6')}}
