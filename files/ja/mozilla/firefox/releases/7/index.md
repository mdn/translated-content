---
title: Firefox 7 開発者向けリリースノート
short-title: Firefox 7
slug: Mozilla/Firefox/Releases/7
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 7 は 2011 年 9 月 27 日にリリースされました。このページは Firefox 7 のリリースにあたり、開発者に関係する変更についてまとめたものです。

## ウェブ開発者向けの変更点一覧

### HTML

- {{ domxref("HTMLHeadElement") }} の `profile` プロパティが削除されました。このプロパティは Gecko 2.0 から非推奨となっていました。
- {{ domxref("HTMLImageElement") }} の `x` プロパティと `y` プロパティが削除されました。
- {{ domxref("HTMLSelectElement") }} の `add()` メソッドの `before` 引数が optional となりました。
- {{ HTMLElement("body") }} の [`background`](/ja/docs/Web/HTML/Reference/Elements/body#background) 属性が URI として解決されなくなりました。この変更は HTML 仕様への準拠によるものです。
- {{ HTMLElement("option") }} の [`label`](/ja/docs/Web/HTML/Reference/Elements/option#label) 属性が指定されていない場合、要素の内容テキストを反映するようになりました。

#### キャンバス

- [Azure project](https://web.archive.org/web/20160304084025/https://blog.mozilla.org/joe/2011/04/26/introducing-the-azure-project/) の一環として、Direct2D Azure Backend が[実装され](https://bugzil.la/651858)、2D キャンバスのパフォーマンスが著しく向上します。
- `setTransform()`, `bezierCurveTo()`, `arcTo()` に不正な値を与え呼び出したとき、例外が投げられなくなりました。これらは無視されます。
- [`isPointInPath()`](/ja/docs/Web/API/CanvasRenderingContext2D/isPointInPath) メソッドに与えられた点と現在のパスを比較するにあたり、変換行列を適切に考慮するようになりました。
- `strokeRect()` メソッドが幅 0 高さ 0 で呼び出された場合、何もしなくなりました。
- [`drawImage()`](/ja/docs/Web/API/CanvasRenderingContext2D/drawImage) メソッドが幅 0 もしくは高さ 0 で呼び出された場合、{{ HTMLElement("canvas") }} は `INVALID_STATE_ERR` を投げるようになりました。
- [`drawImage()`](/ja/docs/Web/API/CanvasRenderingContext2D/drawImage) メソッドが非定形の座標で呼び出された場合に、例外が投げられなくなりました。
- `toDataURL()` が JPEG の品質を制御する引数を受け付けるようになりました。
- `globalCompositeOperation` の値から、標準外だった `clear` と `over` が削除されました。
- [影](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#影)が `source-over` 合成処理の場合にのみ描画されるようになりました。
- コンテキストに `mozFillRule` 属性を設定することで、キャンバスで使用される塗りつぶしルールを構成できるようになりました。
- 実験的な `mozDash`、`mozDashOffset`、`mozCurrentTransform`、`mozCurrentTransformInverse` 属性の対応が追加されました。
- 標準外メソッド `mozDrawText()`、`mozMeasureText()`、`mozPathText()`、`mozTextAlongPath()` の対応が削除されました。

### CSS

- {{ cssxref("text-overflow") }} が対応されました
- {{ cssxref("orient", "-moz-orient") }} が修正され、縦配置の {{ HTMLElement("progress") }} でも進行方向が適切なものになりました。

### MathML

- XLink href が復活し、また MathML3 の `href` 属性もサポートされました。リンクには後者の属性を使うことが望まれます。
- {{ MathMLElement("mpadded") }} 要素に `voffset` 属性のサポートが追加されました。また `lspace` 属性の挙動も修正されました。
- トップレベル要素である {{ MathMLElement("math") }} 要素が {{ MathMLElement("mstyle") }} 要素のもつ属性すべてを受け入れるようになりました。
- [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/) フォントのサポートが追加されました。
- {{ MathMLElement("mfrac") }} 要素によって表される分数の線の太さ `medium` が修正され、規定の太さになりました。
- [負のスペースを表すキーワード](/ja/docs/Web/MathML/Reference/Values#定数)がサポートされました。

### DOM

- {{ domxref("File") }} インターフェイスの非標準なメソッド `getAsBinary()`, `getAsDataURL()`, `getAsText()` が削除されました。あわせて、非標準なプロパティ `fileName` と `fileSize`も削除されました。
- {{ domxref("Blob") }} によってデータが指定され、また `Content-Disposition` HTTP ヘッダーが送信されたとき、{{ domxref("FormData", "FormData") }} インターフェイスはファイル名を空文字列として報告しないようになりました。これによって幾つかのサーバーに起こっていたエラーが解消されます。
- {{ domxref("HTMLelement.dir") }} 属性が結果を常に小文字で返すようになりました。これは HTML 仕様の要件によるものです。
- {{ domxref("FileReader") }} の `readAsArrayBuffer()` メソッドが実装されました。
- `Document.createEntityReference` が削除されました。このメソッドは適切に実装されておらず、他のブラウザーのほとんどで実装されていませんでした。
- `document.normalizeDocument` が削除されました。今後は {{ domxref("Node.normalize") }} を利用してください。
- `index` が範囲外の場合、{{ domxref("DOMTokenList.item") }} が `undefined` を返すようになりました。これまでは `null` を返していました。
- `Node.getFeature` が削除されました。
- `HTMLInsElement` インターフェイスと `HTMLDelElement` インターフェイスが削除されました。これは {{ HTMLElement("ins") }} と {{ HTMLElement("del") }} 要素が実際には {{ domxref("HTMLModElement") }} を使用していたためです。
- 新しい [DOM4](https://dom.spec.whatwg.org/) 仕様にある {{ domxref("Attr") }} が {{ domxref("Node") }} を継承しない (DOM Core 1, 2, 3 まではしていた) という定義に準拠するため、{{ domxref("Attr") }} インターフェイス上の {{ domxref("Node") }} プロパティやメソッドについて、将来的にこれらを削除するといった意味の警告を出すようになりました。
- {{ domxref("window") }} オブジェクトに {{ domxref("window.ondeviceorientation") }} プロパティと {{ domxref("window.ondevicemotion") }} プロパティのサポートを追加しました。
- {{ domxref("window.resizeTo") }}、{{ domxref("window.resizeBy") }}、{{ domxref("window.moveTo") }}、{{ domxref("window.moveBy") }} はメインウィンドウに適用されなくなりました。

### JavaScript

- `Function.arity` プロパティが削除されました。今後は [`Function.length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/length) を利用してください。

### WebSocket

- 設定項目に `network.websocket.max-connections` が導入されました。これは WebSocket の同時最大接続数を決定するために使用されます。既定値は 200 です。
- WebSocket プロトコルで使用するプロトコルバージョンが、[IETF draft 10](https://datatracker.ietf.org/doc/html/draft-ietf-hybi-thewebsocketprotocol-10) で指定されているバージョン 8 になりました。Firefox 6 ではバージョン 7 が使われていました。
- WebSocket API が Firefox Mobile でも利用可能になりました。

### コンソール API

- [ウェブコンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) が開かれる前に `console.log` によって記録されたメッセージもあらかじめ記録され、ウェブコンソールが開かれた時に表示されるようになりました。

### Web timing

- [Navigation Timing](/ja/docs/Web/API/Performance_API/Navigation_timing) 仕様の初期実装が完了しました。ウェブサイトのパフォーマンス測定に利用できるデータを提供します。

### XML

- XSLT スタイルシートは、これまでサポートされていた `text/xsl` に加えて、正式なインターネットメディア (MIME) 型 `application/xslt+xml` も利用可能になりました（[スタイルシート処理命令](https://www.w3.org/TR/xml-stylesheet/)もしくは [HTTP Link ヘッダー](https://datatracker.ietf.org/doc/html/rfc5988)で利用できます）。

## Mozilla 開発者とアドオン開発者向けの変更点

これらの変更は、アドオン開発者と、Mozilla 本体のコードに関わっている開発者の双方に影響するものです。アドオン開発者は[アドオンの Firefox 7 対応](/ja/docs/Mozilla/Firefox/Releases/7/Updating_extensions)に書かれている追加情報も参照してください。

> [!NOTE]
> Firefox 7 では、従来のメジャーリリースと同様に、バイナリーコンポーネントをコンパイルし直す必要があります。

### JavaScript コードモジュール

#### FileUtils.jsm

- 書き込みのための、安全でない状態のファイル出力ストリームを開ける `openFileOutputStream()` メソッドが追加されました。

#### AddonManager.jsm

- アプリケーション起動中に変更が行われたアドオンの一覧を管理できるメソッドがアドオンマネージャに追加されました。`AddonManager.addStartupChange()`、`AddonManager.removeStartupChange()`、`AddonManager.getStartupChanges()` です。

### XUL

- `<tree>` 要素で、`datasources` 属性によって参照されたノードがすべて `id` 属性で指定された固有 ID を持っていた場合、3 種類の公開状態を記憶できるようになりました。
- `<panel>` 要素で、新しい `backdrag` 属性を使って、ユーザーがバックグラウンドの任意の場所をクリックして、その要素をドラッグできるように設定することが可能となりました。

### XPCOM

- `Components.utils.schedulePreciseGC()` メソッドが追加されました。これは、以後どこかの時点で JavaScript コードが何も実行されていないときに、完全なガベージコレクション処理を行う予定を入れられるものです。
- `Components.utils.unload()` メソッドが追加されました。これは、`Components.utils.load()` で読み込まれた JavaScript コードモジュールを破棄できるようにするものです。

### メモリーレポーター

マルチレポーターの対応が追加されました。これは、要求に応じてデータを収集し、生成された結果ごとにコールバックを呼び出すメモリレポーターを指します。関連するインターフェイスについては `nsIMemoryMultiReporter` および `nsIMemoryMultiReporterCallback` を参照してください。また、`nsIMemoryReporterManager.registerMultiReporter()` および `nsIMemoryReporterManager.unregisterMultiReporter()` メソッドも参照してください。

### ユーザー体験の変更

- 拡張機能のオプションが、再起動不要型と従来型のいずれでもアドオンマネージャ内に表示されるようになりました。
- ダウンロードされたファイルの保存先がサイトごとに記憶されるようになりました。このデータは `DownloadLastDir.jsm` を使ってアクセスできます。

### ビルドシステムの変更

- ActiveX 組み込み API はビルドされなくなり、ビルドシステムでのサポートも削除されました。関連インターフェイスも削除されました。下記 [削除されたインターフェイス](#削除されたインターフェイス) を参照してください。
- Windows でのビルド時に `-Zc:wchar_t-` を指定できなくなりました。

### インターフェイスの変更

- `nsISocketTransport` に新しい接続フラグ `DISABLE_IPV6` が追加されました。これは、利用可能な IPv6 アドレスがあってもそれを無視して、IPv4 アドレスのみに接続するようソケットを設定するものです。また、`nsIDNSService` に新しい解決フラグ `RESOLVE_DISABLE_IPV6` が追加されました。これは、利用可能な IPv6 アドレスがあってもそれを無視して、IPv4 ホストのみを考慮してドメイン名解決を行うものです。これらの変更は、IPv4 と IPv6 の両方に対応している (その中でも特に IPv6 接続がうまくいかない) ホストへ接続する際の応答時間を短縮する [「幸せな目玉」戦略](https://datatracker.ietf.org/doc/html/draft-wing-http-new-tech-00) を実装するために使われます。
- `inIDOMUtils` に 2 つのメソッドが追加されました。あるノードの子ノード一覧を返す `inIDOMUtils.getChildrenForNode()` と、選択範囲内で使用されているフォントフェイス一覧を返す `inIDOMUtils.getUsedFontFaces()` です。
- `nsIMarkupDocumentViewer_MOZILLA_2_0_BRANCH` インターフェイスは `nsIMarkupDocumentViewer` インターフェイスへ統合されました。
- `nsIDOMWindow2` インターフェイスは `nsIDOMWindow` インターフェイスへ統合されました。
- `nsIDOMWindow_2_0_BRANCH` インターフェイスは `nsIDOMWindowInternal` インターフェイスへ統合されました。
- URI 引数付きで `nsINavHistoryObserver` メソッドを使う場合、GUID も必要となります。
- `nsISHistory_2_0_BRANCH` インターフェイスは `nsISHistory` インターフェイスへ統合されました。
- `nsITelemetry` に、ID からヒストグラムを返す `nsITelemetry.getHistogramById()` メソッドと、`false` 設定時に使用統計情報 (Telemetry) の記録を無効化できる `canRecord` 属性が追加されました。使用統計情報はプライベートブラウジングモードでは記録されなくなりました。([Firefox バグ 661574](https://bugzil.la/661574)、[Firefox バグ 661573](https://bugzil.la/661573))
  `nsITelemetry.newHistogram()` で定義された使用統計ヒストグラムは、Mozilla への定期報告に含まれません。
- `nsIMemoryReporter` インターフェイスに大幅な変更が行われました。使用する場合はコードに変更を加える必要があるでしょう。
- `nsIXMLHttpRequest.setRequestHeader()` によって設定されたヘッダーが、リダイレクトを辿る際にもリクエストに含まれて送信されるようになりました。これまでこの方法で設定されたヘッダーは送信されていませんでした。
- `nsIDocShell` に `allowWindowControl` 属性が追加されました。`true` を設定すると、docshell のコンテンツがウィンドウをコントロールできるようになります (ウィンドウの移動やサイズ変更など)。
- `nsIThreadInternal2` インターフェイスは `nsIThreadInternal` インターフェイスへ統合されました。

#### 新しいインターフェイス

- `nsIDOMFontFace`
  - : ひとつのフォントフェイスを表します。
- `nsIDOMFontFaceList`
  - : `nsIDOMFontFace` で表されたフォントフェイスの一覧を表します。

#### 削除されたインターフェイス

以下のインターフェイスは、不要となり削除された実装です。

- `nsIDOM3Attr`
- `nsIDOM3Node`
- `nsIDOM3TypeInfo`
- `nsIDOM3Text`
- `nsIDOMDocumentStyle`
- `nsIDOMNSDocument`
- `nsIDOMNSFeatureFactory`
- `nsIDOMNSHTMLDocument`
- `nsIDOMNSHTMLFormElement`
- `nsIDOMNSHTMLHRElement`
- `nsIDOMNSHTMLTextAreaElement`

以下のインターフェイスは、ActiveX 組み込み API 廃止の一環として削除されました。

- `DITestScriptHelper`
- `DWebBrowserEvents`
- `DWebBrowserEvents2`
- `IDispatch`
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
- `nsIDispatchSupport`
- `nsIMozAxPlugin`
- `nsIScriptEventHandler`
- `nsIScriptEventManager`

### その他の変更

- ライブラリウィンドウの構造 (`places.xul`) が[クリーンアップされました](https://bugzil.la/588027)。これにより拡張機能やテーマが[動作しなくなる可能性があります](https://bugzil.la/677417)。
- 印刷プレビューウィンドウの外観が[刷新されました](https://bugzil.la/663028)。テーマ作成者は、CSS 擬似要素 `::-moz-page`、`::-moz-page-sequence`、`::-moz-scrolled-page-sequence` を使用してスタイル設定することが推奨されます。
