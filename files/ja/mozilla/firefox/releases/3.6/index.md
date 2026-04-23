---
title: Firefox 3.6 開発者向け情報
short-title: Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 3.6 では新規あるいは開発中のウェブ標準のサポート、性能の向上、ウェブユーザーと開発者にとってより良い体験が提供されます。このページは Firefox 3.6 で新しく利用出来るようになった機能に関する記事のリンクを提供します。

## ウェブサイトとアプリケーション開発者向け

### CSS

- [グラデーションの利用](/ja/docs/Web/CSS/Guides/Images/Using_gradients)
  - : Firefox 3.6 では `-moz-linear-gradient` および `-moz-radial-gradient` プロパティが {{Cssxref("background")}} において対応が追加されました。
- [複数の背景](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
  - : {{cssxref("background")}} プロパティ（および {{Cssxref("background-color")}}、{{Cssxref("background-image")}}、{{Cssxref("background-position")}}、{{Cssxref("background-repeat")}}、{{Cssxref("background-attachment")}} が複数の背景に対応しました。これによりひとつのレイヤーの中で他に重なるような背景を指定できます。
- [Mozilla 独自のメディア特性](/ja/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
  - : Mozilla 独自のシステムメトリックスに複数のメディア特性が追加されました。このメディア特性により、タッチサポートのような機能の有効性の確認を、[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)を使用してより安全に行えるようになりました。
- [背景画像のスケーリング](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
  - : [CSS 3 Backgrounds and Borders 草案](https://drafts.csswg.org/css-backgrounds-3/)の `background-size` プロパティが `-moz-background-size` として対応しました。
- [WOFF フォントの対応](/ja/docs/Web/CSS/Guides/Fonts/WOFF)
  - : {{cssxref("@font-face")}} が新しい WOFF ウェブフォントファイル形式に対応しました。
- [ポインターイベント](/ja/docs/Web/CSS/Reference/Properties/pointer-events)
  - : {{cssxref("pointer-events")}} プロパティにより、要素がマウスポインターのイベントのターゲットであるかどうかをコンテンツが指定できるようになります。

#### その他の CSS の変更

- 長さの単位 [`rem`](/ja/docs/Web/CSS/Reference/Values/length#relative_length_units) が対応されました。 [Firefox バグ 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} が画像、背景画像、ビデオ、canvas でサポートされました。 [Firefox バグ 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end がサポートされました。[Firefox バグ 299837](https://bugzil.la/299837)
- {{Cssxref("display")}} の table 型の要素に対する DOM の変更がより良く動作するようになりました。
- {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} と {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}} が追加され、左書きと右書きのどちらで描画されるかに応じて、ユーザーインターフェイスが容易にレイアウトをカスタマイズできるようになりました。[Firefox バグ 478416](https://bugzil.la/478416)
- {{cssxref(":indeterminate")}} 擬似クラスの対応が追加され、`checkbox` 型の [`input`](/ja/docs/Web/HTML/Reference/Elements/input) 要素で `indeterminate` 属性が `true` に一致する場合に対応が追加されました。
- ウィンドウ化されたプラグインは CSS 座標変換の中では表示されなくなりました。これはコンポジターによって正しく変換されないためです。

### HTML

- [ウェブアプリケーションからファイルを扱う](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
  - : 新しい HTML5 File API のサポートが Gecko に追加され、ウェブアプリケーションがユーザーの選択したローカルファイルにアクセス出来るようになりました。これには `input type="file"` HTML 要素において複数のファイルを選択する `multiple` 属性のサポートが含まれます。
- HTML5 video がポスターフレームをサポート
  - : [`video`](/ja/docs/Web/HTML/Reference/Elements/video) 要素で `poster` 属性がサポートされ、コンテンツがビデオの再生が開始されるまでに表示されるポスター・フレームを指定できるようになりました。
- チェックボックスとラジオボタンが `indeterminate` 属性をサポート
  - : HTML の [`input`](/ja/docs/Web/HTML/Reference/Elements/input) 要素で `checkbox` と `radio` 型のものが indeterminate 属性をサポートし、3 番目の "indeterminate" 状態を持てるようになりました。
- キャンバスの画像のスムージングが制御可能に
  - : [`canvas`](/ja/docs/Web/API/Canvas_API) 要素のスケーリング時に、新しい [`mozImageSmoothingEnabled`](/ja/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior) プロパティでスムージングの有無を指定できるようになりました。
- 非同期のスクリプト実行
  - : `async` 属性を [`script`](/ja/docs/Web/HTML/Reference/Elements/script) 要素に設定すると、その `script` はページの残りの部分の読み込みや表示をブロックしません。代わりに、`script` はダウンロードが完了次第すぐに実行されます。

### JavaScript

Gecko 1.9.2 は JavaScript 1.8.2 を採用し、[ECMAScript 5 standard](https://web.archive.org/web/20210619182836/https://developer.mozilla.org/ja/docs/Archive/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla) から多くの言語機能が追加されました。

- [`Date.parse()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) は YYYY-MM-DD のような ISO 8601 日付をデコードできるようになりました。
- function インスタンスの [`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) プロパティは列挙可能 (enumerable)ではなくなりました。

### DOM

- ウェブワーカーが自己終了可能に
  - : [ワーカー](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)が `nsIWorkerScope.close()` メソッドに対応し、自分自身で終了できるようになりました。
- ドラッグ＆ドロップがファイルに対応
  - : ドラッグリスナーで提供される [`DataTransfer`](/ja/docs/Web/API/DataTransfer) オブジェクトがドラッグされたファイルを含むようになりました。
- 要素が指定された CSS セレクターに一致するか確認する
  - : 新しい [`Node.mozMatchesSelector`](/ja/docs/Web/API/Element/matches) メソッドを使用すると、要素が指定された CSS セレクターに一致するかどうかを判定できます。詳細は [Firefox バグ518003](https://bugzil.la/518003)を参照してください。
- [デバイスの傾きの検出](/ja/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : コンテンツはデバイスが加速度センサー（accelerometer）をサポートしていれば [`MozOrientation`](/ja/docs/Web/API/Screen/change_event) イベントによりその傾きを検出できるようになりました。Firefox 3.6 は Mac のノートブックで加速度センサーをサポートします。
- 文書の幅と高さの変化の検出
  - : document の `scrollWidth` または `scrollHeight` プロパティが変化すると、 `MozScrollAreaChanged` イベントが発動します。

#### その他の DOM の変更

- `getBoxObjectFor()` メソッドが**削除されました**。このメソッドは非標準であり、さらに非標準なものをウェブにさらすことになるからです。[Firefox バグ 340571](https://bugzil.la/340571) を参照してください。これはまた、Gecko の検出にこのメソッドをコールする MooTools にも影響します。これは最新の MooTools で修正されたのでいずれ更新されるでしょう。
- DOM windows に新しい [`mozInnerScreenX`](/ja/docs/Web/API/Window/mozInnerScreenX) と [`mozInnerScreenY`](/ja/docs/Web/API/Window/mozInnerScreenY) プロパティが追加されました。これらはウィンドウ表示領域の左上コーナーを基準にしたスクリーンの座標を返します。
- chrome に対してのみアクセス可能な新しい `mozScreenPixelsPerCSSPixel` プロパティは CSS ピクセルと画面ピクセルの変換率を提供します。この値はコンテンツのズームレベルに応じて変化します。
- ページ URI の文書フラグメント識別子（"#" (ハッシュ) 文字の後の部分）が変更になったとき、新たな [`hashchange`](/ja/docs/Web/API/Window/hashchange_event) イベントがページに送られるようになりました。[Firefox バグ 385434](https://bugzil.la/385434) を参照してください。
- [`document.readyState`](/ja/docs/Web/API/Document/readyState) 属性がサポートされました。[Firefox バグ 347174](https://bugzil.la/347174)。
- HTML5 の [`element.classList`](/ja/docs/Web/API/Element/classList) がサポートされ、クラス属性の処理が容易になりました。[Firefox バグ 501257](https://bugzil.la/501257)
- HTML 文書の `localName` と `namespaceURI` が XHTML 文書と同じように振舞うようになりました。`localName` は小文字で値を返し、HTML 要素の `namespaceURI` は `"http://www.w3.org/1999/xhtml"` です。
- [`element.getElementsByTagNameNS`](/ja/docs/Web/API/Element/getElementsByTagNameNS) は引数を小文字に変換しなくなったため、引数内の大文字の ASCII 文字が HTML 要素との一致を失敗させます。 [`document.getElementsByTagNameNS`](/ja/docs/Web/API/Document/getElementsByTagNameNS) についても同様です。
- `nsIDOMGeoPositionAddress` インターフェイスによりジオロケーションの address がサポートされ、新しいフィールドが `nsIDOMGeoPosition` に追加されました。[Firefox バグ 503942](https://bugzil.la/503942)
- {{domxref("window.getComputedStyle")}} 関数は `url()` 値の中をクォートして返すようになりました。

### XPath

- choose() XPath メソッドをサポート
  - : [`choose()`](/ja/docs/Web/XML/XPath/Reference/Functions/choose) メソッドが [XPath](/ja/docs/Web/XML/XPath) でサポートされました。

## XUL とアドオン開発者向け

あなたが拡張機能の開発者なら、あなたの拡張機能に影響するかもしれない変更点の役に立つ概要を記した [Updating extensions for Firefox 3.6](/ja/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions) を読むことから始めてください。プラグインの開発者は [Updating plug-ins for Firefox 3.6](/ja/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins) を読んでください。

### 新機能

- [デバイスの傾きの検出](/ja/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : コンテンツはデバイスが加速度センサー（accelerometer）をサポートしていれば [`MozOrientation`](/ja/docs/DOM/MozOrientation) イベントによりその傾きを検出できるようになりました。Firefox 3.6 は Mac のノートブックで加速度センサーをサポートします。
- [HTTP アクティビティのモニタリング](https://web.archive.org/web/20210421090042/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Monitoring_HTTP_activity)
  - : HTTP トランザクションをモニターし、リアルタイムでリクエストとレスポンスを観察できます。
- Windows のタスクバーとの協調
  - : Windows 7 またはそれ以降のタスクバー内で、ウィンドウの設定の変更が可能になりました。_Firefox 3.6 ではこの機能はデフォルトで無効になっています。_

### Places

- Places のクエリーは結果にリダイレクトされたページが含んでいるかどうかを特定できるように `redirectsMode` が `nsINavHistoryQueryOptions` インターフェイスで利用できるようになりました。
- 新しい `nsIFaviconService.expireAllFavicons()` メソッドが `nsIFaviconService` インターフェイスに追加されました。

### ストレージ

- [ストレージ API でデータのロケールを考慮した照合がサポートされました](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Storage#collation_sorting)
  - : Gecko 1.9.2 にロケールを考慮した技術を用いて最適化された照合を提供する複数の新しい（ソート付き）照合メソッドが追加されました。
- [ステートメントのプロパティが列挙可能になりました](https://web.archive.org/web/20210513165422/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageStatementParams#enumeration_of_properties)
  - : ステートメントのすべてのプロパティを列挙する [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) enumeration が利用できるようになりました。
- mozIStorageStatement の getParameterIndex の動作が 3.5 と 3.6 の間で変更された
  - : 詳細は [Firefox バグ 528166](https://bugzil.la/528166) を参照してください。
- 複数の引数のセットを非同期バインドしてステートメントを実行
  - : 詳細は [Firefox バグ 490085](https://bugzil.la/490085) を参照してください。ドキュメント準備中です。

### Preferences

- `nsIContentPrefService` インターフェイスが新しく二つのメソッドを持ちました: `nsIContentPrefService.getPrefsByName()` と `nsIContentPrefService.removePrefsByName()`。

### テーマ

テーマに関する変更の詳細は [Updating themes for Firefox 3.6](/ja/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) を参照してください。

- [軽量テーマ](https://web.archive.org/web/20180617103446/https://developer.mozilla.org/en-US/Add-ons/Themes/Lightweight_themes)
  - : Firefox 3.6 は軽量テーマをサポートします。これは作成するのが簡単なテーマで、ブラウザーウィンドウの上部（URL バーとボタンバー）と下部（ステータスバー）に単純に画像を適用します。これは既存の [Personas](https://addons.mozilla.org/en-US/firefox/themes/) テーマ構造の Firefox への統合です。

### その他

- Firefox は components ディレクトリー内にインストールされたサードパーティのコンポーネントをロードしなくなりました。これはバグのあるサードパーティコンポーネントが実行されるのを防止することによる安定性の向上に貢献します。このやり方でコンポーネントをインストールする開発者は標準的なアドオンとしてインストールできるように[それらコンポーネントを XPI パッケージとして再パッケージする必要があります](https://web.archive.org/web/20170622232046/https://developer.mozilla.org/en-US/docs/Migrating_raw_components_to_add-ons)。
- 拡張において chrome を登録するために用いていた `contents.rdf` は利用できなくなりました。 [`chrome.manifest`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Install_Manifests) ファイルを代わりに利用しなければなりません。 [Firefox バグ 492008](https://bugzil.la/492008) を参照してください。
- メニューバーを自動的に隠すためのサポートが追加されました。[Firefox バグ 477256](https://bugzil.la/477256) を参照してください。
- オブジェクトに対して `container-live-role` 属性を持たせるためのサポートが追加されました。[Firefox バグ 391829](https://bugzil.la/391829) を参照してください。
- `tabs-closebutton` バインディングが削除されました。[Firefox バグ 500971](https://bugzil.la/500971) を参照してください。
- 発生したイベントに基づいて音を鳴らすための `nsISound` に対するサポートが追加されました。 [Firefox バグ 502799](https://bugzil.la/502799) を参照してください。
- Gecko 1.9 での新しいドラッグ＆ドロップ API をサポートするために `nsITreeView` のメソッドである `nsITreeView.canDrop()` および `nsITreeView.drop()` の構文が変更になりました。[Firefox バグ 455590](https://bugzil.la/455590) を参照してください。
- Windows のダイアログとウィザードのデフォルトボタンへのマウスカーソルの移動がサポートされました。[Firefox バグ 76053](https://bugzil.la/76053) を参照してください。これはダイアログとウィザード要素によって自動的に行われます。ただし、XUL アプリケーションが `window` 要素のウィンドウを生成し、それがデフォルトボタンを持つ場合は、ウィンドウの onload イベントで `nsIDOMChromeWindow.notifyDefaultButtonLoaded()` をコールする必要があります。
- `nsILocalFileMac` インターフェイスが二つのメソッドを持ちました: `setFileTypeAndCreatorFromMIMEType()` と `setFileTypeAndCreatorFromExtension()`。
- 新しい [`NetUtils.jsm`](https://web.archive.org/web/20210620035742/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/NetUtil.jsm) コードモジュールは、入力ストリームから出力ストリームに非同期にデータをコピーする簡単に利用できるメソッドを提供します。
- 新しい [`openLocationLastURL.jsm`](https://web.archive.org/web/20210417025317/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/openLocationLastURL.jsm) コードモジュールは、プライベートブラウジングモードであるかを正しく判断して、"Open Location" ダイアログボックスの記憶された URL データの読み込みと変更を容易にします。
- Windows では、`nsIScreen` インターフェイスは、グラフィックスドライバーが 32 ビットをサポートしていても、ピクセルごとに 24 ビットカラーをレポートします。これは 24 ビットは実際に利用されているカラーピクセルの数をより正確に表現するためです。
- Window では [`<xul:toolbar>`](https://web.archive.org/web/20201124231843/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/toolbar) XUL 要素の新しい [`autohide`](https://web.archive.org/web/20201124231843/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/toolbar#autohide) 属性を用いてメニューバーを隠すことができます。
- [`loadOneTab`](https://web.archive.org/web/20201210182023/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/Method/loadOneTab) と [`addTab`](https://web.archive.org/web/20201208182934/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/Method/addTab) メソッドは新しい `relatedToCurrent` 引数をサポートし、加えて、多くの引数が省略可能であるために名前による引数の指定ができます。
- インストールマニフェストで "[hidden](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Install_Manifests#hidden)" プロパティはサポートされなくなりました。アドオンマネージャウィンドウ上でユーザーが見ることのできないアドオンは不可能になりました。
- `@mozilla.org/webshell;1` コンポーネントはもう存在しません。代わりに `@mozilla.org/docshell;1` を使う必要があります。
- タイマーイベントをスケジュールするために、タイマーがコールするオブジェクトをインスタンシエイトすることなく update-timer カテゴリーで登録できるようになりました。代わりに必要になったときにインスタンシエイトされます。詳細は `nsIUpdateTimerManager.registerTimer()` を参照してください。
- [`NPN_GetValue()`](https://web.archive.org/web/20210308202622/https://developer.mozilla.org/en-US/docs/Archive/Plugins/Reference/NPN_GetValue) 関数はもはや変数値 `NPNVserviceManager`, `NPNVDOMelement`, `NPNVDOMWindow`を経由した XPCOM へのアクセスを提供しません。これは将来のバージョンの Gecko バージョンでプラグインを分離したプロセスで動作させるための作業の一部です。
- プラグインは XPCOM (IDL) インターフェースを通じてスクリプト化できなくなりました。プラグインをスクリプト化可能にするには [NPRuntime](https://web.archive.org/web/20211028124814/https://developer.mozilla.org/en-US/docs/Plugins/Guide/Scripting_plugins) API を使用し、[`NPP_GetValue()`](https://web.archive.org/web/20201023225330/https://developer.mozilla.org/en-US/docs/Archive/Plugins/Reference/NPP_GetValue) は、値 `NPPVpluginScriptableInstance` または `NPPVpluginScriptableIID` で呼び出されることはなくなりました。これは、将来の Gecko バージョンでプラグインを別プロセスで実行できるようにするための作業の一環です。

## Firefox/Gecko 開発者向け

いくつかの変更はあなたが Firefox そのものの内部で作業している場合にだけ興味を持つことでしょう。

### マージされたインターフェイス

以下のインターフェイスは統合されました:

- `nsIPluginTagInfo2` は `nsIPluginTagInfo` にマージされました。
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2`, `nsIPluginInstancePeer3` はすべて `nsIPluginInstance` にマージされました。
- `nsIWindowlessPlugInstPeer` は `nsIPluginInstance` にマージされました。
- `nsIPluginManager` と `nsIPluginManager2` は `nsIPluginHost` にマージされました。

### 削除されたインターフェイス

以下のインターフェイスは利用されていない、実装されていないまたは旧式であるためにすべて削除されました:

- `nsIFullScreen`
- `nsIDOMSVGListener`
- `nsIDOMSVGZoomListener`
- `nsIInternetConfigService`
- `nsIDKey`
- `nsIEventHandler`
- `nsIJRILiveConnectPIPeer`
- `nsIJRILiveConnectPlugin`
- `nsIScriptablePlugin`
- `nsIClassicPluginFactory`
- `nsIFileUtilities`

### 移動されたインターフェイス

以下のインターフェイスは以前の IDL ファイルから新しい場所に移動されました:

- `nsIDOMNSCSS2Properties` は専用の IDL ファイル (`dom/interfaces/css/nsIDOMCSS2Properties.idl`) に移動されました。
- `nsIUpdateTimerManager` はそれ自身の IDL ファイル内に配置されます。

多くのインターフェイスが移動されました。完全なリストは [Interfaces moved in Firefox 3.6](/ja/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) を参照してください。

### その他のインターフェイスの変更

以下のようなさまざまな変更が行われました:

- `nsIPlugin` インターフェイスは `nsIFactory` ではなく `nsISupports` から継承します。
- `nsIPluginHost` インターフェイスは `nsIFactory` ではなく `nsISupports` から継承しますす。
- `nsIFrame` インターフェイスは `nsISupports` ではなく `nsQueryFrame` から継承します。
- `nsIDeviceContext` メソッド `getPaletteInfo()` は今まで実装されてことがないので削除されました。
- `nsIScriptContext` メソッド `reportPendingException()` はもう利用されていないので削除されました。

### アクセシビリティコードの変更

- メイン文書の子どもが変更された時と同様に、frame と iframe の子どもが変更されたときに `EVENT_REORDER` [アクセシビリティイベント](https://web.archive.org/web/20210516055347/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAccessibleEvent) が送信されます。[Firefox バグ 420845](https://bugzil.la/420845) を参照してください。
- `nsIAccessibleTable.selectRow()` は指定された列が選択される前にどんなカレントの選択であっても正しく削除します。
