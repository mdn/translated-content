---
title: Firefox 3.6 for developers
slug: Mozilla/Firefox/Releases/3.6
tags:
  - CSS
  - Firefox
  - Firefox 3.6
  - Gecko
  - Gecko 1.9.2
  - HTML
  - JavaScript
  - XUL
translation_of: Mozilla/Firefox/Releases/3.6
---
Firefox 3.6 では新規あるいは開発中のウェブ標準のサポート、性能の向上、ウェブユーザと開発者にとってより良い体験が提供されます。このページは Firefox 3.6 で新しく利用出来るようになった機能に関する記事のリンクを提供します。

## Web サイトとアプリケーション開発者向け

### CSS

- [グラデーションの利用](/ja/docs/Using_gradients "Using gradients")
  - : Firefox 3.6 では [`background`](/ja/docs/Web/CSS/background "CSS の background 一括指定プロパティは、色、画像、原点と寸法、反復方法、その他の機能など、背景に関するすべてのスタイルプロパティを一括で設定します。") において、Mozilla が提案中の [`-moz-linear-gradient`](/ja/docs/Web/CSS/-moz-linear-gradient "この項目についての文書はまだ書かれていません。書いてみませんか？") と [`-moz-radial-gradient`](/ja/docs/Web/CSS/-moz-radial-gradient "この項目についての文書はまだ書かれていません。書いてみませんか？") プロパティのサポートが追加されました。
- [複数の背景](/ja/docs/CSS/Multiple_backgrounds "CSS/Multiple backgrounds")
  - : [`background`](/ja/docs/Web/CSS/background "CSS の background 一括指定プロパティは、色、画像、原点と寸法、反復方法、その他の機能など、背景に関するすべてのスタイルプロパティを一括で設定します。") プロパティ（および [`background-color`](/ja/docs/Web/CSS/background-color "CSS の background-color プロパティは、要素の背景色を設定します。")、[`background-image`](/ja/docs/Web/CSS/background-image "CSS の background-image プロパティは、要素に1つ以上の背景画像を設定します。")、[`background-position`](/ja/docs/Web/CSS/background-position "CSS の background-position プロパティは、それぞれの背景画像の初期位置を設定します。位置は background-origin で設定された位置レイヤーからの相対です。")、[`background-repeat`](/ja/docs/Web/CSS/background-repeat "CSS の background-repeat プロパティは、背景画像をどのように繰り返すかを設定します。背景画像は水平軸方向と垂直軸方向に繰り返したり、まったく繰り返さないようにしたりすることができます。")、[`background-attachment`](/ja/docs/Web/CSS/background-attachment "CSS の background-attachment プロパティは、背景画像の位置をビューポートの中に固定するか、包含ブロックと一緒にスクロールするかを設定します。")）が複数の背景をサポートしました。これによりひとつのレイヤーの中で他に重なるような背景を指定できます。
- [Mozilla 独自のメディア特性](/ja/docs/CSS/Media_queries#Mozilla-specific_media_features "CSS/Media queries#Mozilla-specific media features")
  - : Mozilla 独自のシステムメトリックスに複数のメディア特性が追加されました。このメディア特性により、タッチサポートのような機能の有効性の確認を、[media queries](/ja/docs/CSS/Media_queries "CSS/Media queries") を使用してより安全に行えるようになりました。
- [背景画像のスケーリング](/ja/docs/CSS/Scaling_background_images "CSS/Scaling background images")
  - : [CSS 3 Backgrounds and Borders 草案](http://dev.w3.org/csswg/css3-background/)の `background-size プロパティが` [`-moz-background-size`](/ja/docs/Web/CSS/-moz-background-size "この項目についての文書はまだ書かれていません。書いてみませんか？") としてサポートされました。
- [WOFF フォントのサポート](/ja/docs/About_WOFF "About WOFF")
  - : [`@font-face`](/ja/docs/Web/CSS/@font-face "CSS の @font-face @-規則は、テキストを表示するための独自フォントを指定します。フォントはリモートサーバーまたはユーザー自身のコンピューターのどちらかから読み込むことができます。") が新しい WOFF ウェブフォントファイルフォーマットをサポートしました。
- [ポインタイベント](/ja/docs/CSS/pointer-events "CSS/pointer-events")
  - : [`pointer-events`](/ja/docs/Web/CSS/pointer-events "CSS の pointer-events プロパティは、特定のグラフィック要素がマウスイベントの対象になる可能性のある環境 (存在する場合) を設定します。") プロパティにより、要素がマウスポインタのイベントのターゲットであるかどうかをコンテンツが指定できるようになります。

#### その他の CSS の変更

- [CSS3 Values and Units](http://www.w3.org/TR/css3-values/#lengths) で定義されている長さの単位 [`rem`](/ja/docs/CSS/Length#Relative_length_units "CSS/length#Relative length units") がサポートされました。 [バグ 472195](https://bugzilla.mozilla.org/show_bug.cgi?id=472195 "FIXED: support css3 root em ('rem' or 're') units")
- [`image-rendering`](/ja/docs/Web/CSS/image-rendering "CSS の image-rendering プロパティは、画像を拡大縮小するアルゴリズムを設定します。このプロパティは要素自身に適用され、他のプロパティで設定されるあらゆる画像、子孫要素に適用されます。") が画像、背景画像、ビデオ、canvas でサポートされました。 [バグ 423756](https://bugzilla.mozilla.org/show_bug.cgi?id=423756 "FIXED: Request: Switch for authors to turn on/off bilinear filtering when enlarging images")
- [`text-align`](/ja/docs/Web/CSS/text-align "CSS の text-align プロパティは、インラインまたは表セルボックスの水平方向の配置を設定します。つまり、 vertical-align のように、ただし水平方向に動作します。"):end がサポートされました。[バグ 299837](https://bugzilla.mozilla.org/show_bug.cgi?id=299837 "FIXED: [FIX]add support for text-align: end")
- table [`display`](/ja/docs/Web/CSS/display "CSS の display プロパティは、要素の表示種別を指定し、これは要素がボックスを生成する方法の二つの基本的な品質から成ります。 — 外部表示種別はボックスがフローレイアウトにどのように加わるのかを定義し、内部表示種別はボックスの子がどのように配置されるのかを定義します。") タイプの要素に対する DOM の変更がより良く動作するようになりました。
- `indeterminate` 属性が `true` である `checkbox` [`input`](/ja/docs/HTML/Element/Input "HTML/Element/Input") 要素にマッチする [`:indeterminate`](/ja/docs/Web/CSS/:indeterminate "CSS の :indeterminate 疑似クラス は、中間の状態にあるフォームの要素を表します。") 擬似クラスのサポートが追加されました。
- [`:-moz-locale-dir(ltr)`](</ja/docs/Web/CSS/:-moz-locale-dir(ltr)> 'CSS の :-moz-locale-dir(ltr) 疑似クラスは Mozilla 拡張であり、ユーザーインターフェイスが左から右へ向けて表示される要素に一致します。これは設定の intl.uidirection.locale (locale は現在のロケール) が "ltr" に設定されていることで特定されます。') と [`:-moz-locale-dir(rtl)`](</ja/docs/Web/CSS/:-moz-locale-dir(rtl)> 'CSS の :-moz-locale-dir(ltr) 疑似クラスは Mozilla 拡張であり、ユーザーインターフェイスが右から左へ向けて表示される要素に一致します。これは設定の intl.uidirection.locale (locale は現在のロケール) が "rtl" に設定されていることで特定されます。') が追加され、ユーザインタフェースが left-to-right または right-to-left のどちらで描画されるかに応じて、容易にレイアウトをカスタマイズできるようになりました。[バグ 478416](https://bugzilla.mozilla.org/show_bug.cgi?id=478416 "FIXED: Replace chromedir with something more sane")
- ウィンドウ化されたプラグインは CSS transforms の中では表示されなくなりました。これはコンポジターによって正しく変換されないためです。

### HTML

- [ウェブアプリケーションからファイルを扱う](/ja/docs/Using_files_from_web_applications "Using files from web applications")
  - : 新しい HTML5 File API のサポートが Gecko に追加され、ウェブアプリケーションがユーザの選択したローカルファイルにアクセス出来るようになりました。これには `input type="file"` HTML 要素において複数のファイルを選択する `multiple` 属性のサポートが含まれます。

<!---->

- HTML5 video がポスター・フレームをサポート
  - : [`video`](/ja/docs/HTML/Element/Video "HTML/Element/Video") 要素で `poster` 属性がサポートされ、コンテンツがビデオの再生が開始されるまでに表示されるポスター・フレームを指定できるようになりました。
- チェックボックスとラジオボタンが `indeterminate` 属性をサポート
  - : `checkbox` と `radio` タイプの HTML [`input`](/ja/docs/HTML/Element/Input "HTML/Element/Input") 要素が indeterminate 属性をサポートし、3 番目の "indeterminate" 状態を持てるようになりました。
- Canvas 画像のスムージングが制御可能に
  - : [`canvas`](/ja/docs/HTML/Canvas "HTML/canvas") 要素のスケーリング時に、新しい [`mozImageSmoothingEnabled`](/ja/docs/Canvas_tutorial/Using_images#Controlling_image_scaling_behavior "Canvas tutorial/Using images#Controlling image scaling behavior") プロパティでスムージングの有無を指定できるようになりました。

### JavaScript

Gecko 1.9.2 は JavaScript 1.8.2 を採用し、[ECMAScript 5 standard](/ja/JavaScript/ECMAScript_5_support_in_Mozilla "https://developer.mozilla.org/En/JavaScript/ECMAScript_5_support_in_Mozilla") から多くの言語機能が追加されました:

- [`Date.parse()`](/ja/docs/JavaScript/Reference/Global_Objects/Date/parse "Core JavaScript 1.5 Reference/Global Objects/Date/parse") は YYYY-MM-DD のような ISO 8601 dates をデコードできるようになりました。
- function インスタンスの [`prototype`](/ja/docs/JavaScript/Reference/Global_Objects/Function/prototype "Core JavaScript 1.5 Reference/Global Objects/Function/prototype") プロパティは列挙可能 (enumerable)ではなくなりました。

### DOM

- Web workers が自己終了可能に
  - : Workers が [`nsIWorkerScope.close()`](</ja/docs/XPCOM_Interface_Reference/nsIWorkerScope#close()>) メソッドをサポートし、自分自身で終了できるようになりました。
- ドラッグ＆ドロップがファイルをサポート
  - : ドラッグリスナーで提供される [`DataTransfer`](/ja/docs/DragDrop/DataTransfer "DragDrop/DataTransfer") オブジェクトがドラッグされたファイルを含むようになりました。
- [デバイスの傾きの検出](/ja/docs/Detecting_device_orientation "Detecting device orientation")
  - : コンテンツはデバイスが加速度センサー（accelerometer）をサポートしていれば [`MozOrientation`](/ja/docs/DOM/MozOrientation "DOM/MozOrientation") イベントによりその傾きを検出できるようになりました。Firefox 3.6 は Mac のノートブックで加速度センサーをサポートします。
- [document の幅と高さの変化の検出](/ja/docs/DOM/Detecting_document_width_and_height_changes "DOM/Detecting document width and height changes")
  - : document の `scrollWidth` または `scrollHeight` プロパティが変化すると、 `MozScrollAreaChanged` イベントが発動します。

#### その他の DOM の変更

- `getBoxObjectFor()` メソッドが**削除されました**。このメソッドは非標準であり、さらに非標準なものを Web にさらすことになるからです。[バグ 340571](https://bugzilla.mozilla.org/show_bug.cgi?id=340571 "FIXED: getBoxObjectFor leaking-onto-the-Web disaster") を参照してください。これはまた、Gecko の検出にこのメソッドをコールする MooTools にも影響します。これは最新の MooTools で修正されたのでいずれ更新されるでしょう。
- DOM windows に新しい [`mozInnerScreenX`](/ja/docs/DOM/window.mozInnerScreenX "DOM/window.mozInnerScreenX") と [`mozInnerScreenY`](/ja/docs/DOM/window.mozInnerScreenY "DOM/window.mozInnerScreenY") プロパティが追加されました。これらはウィンドウ表示領域の左上コーナーを基準にしたスクリーンの座標を返します。
- chrome に対してのみアクセス可能な新しい [`mozScreenPixelsPerCSSPixel`](/ja/docs/DOM/window.mozScreenPixelsPerCSSPixel "DOM/window.mozScreenPixelsPerCSSPixel") プロパティは CSS ピクセルとスクリーン・ピクセルの変換率を提供します。この値はコンテンツのズームレベルに応じて変化します。
- ページ URI の文書フラグメント識別子（"#" (ハッシュ) 文字の後の部分）が変更になったとき、新たな `hashchange` イベントがページに送られます。[バグ 385434](https://bugzilla.mozilla.org/show_bug.cgi?id=385434 "FIXED: Add support for HTML5 onhashchange (event for named anchor changes)")、[バグ 504837](https://bugzilla.mozilla.org/show_bug.cgi?id=504837 (FIXED: hashchange event should not be restricted to firing only when the document's ready state is "complete"))、および [バグ 504220](https://bugzilla.mozilla.org/show_bug.cgi?id=504220 "FIXED: document.body and window should contain onhashchange attribute") を参照してください。
- `document.readystate で` `complete `属性がサポートされました。[バグ 347174](https://bugzilla.mozilla.org/show_bug.cgi?id=347174 'FIXED: Implement document.readystate == "complete"')。
- HTML5 の [`element.classList`](/ja/DOM/element.classList "element.classList") がサポートされ、クラス属性の処理が容易になりました。[バグ 501257](https://bugzilla.mozilla.org/show_bug.cgi?id=501257 "FIXED: Implement HTML 5's HTMLElement.classList property")
- HTML 文書の `localName` と `namespaceURI` が XHTML 文書と同じように振舞うようになりました。`localName` は小文字で値を返し、HTML 要素の `namespaceURI` は `"http://www.w3.org/1999/xhtml"` です。
- [`nsIDOMGeoPositionAddress`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMGeoPositionAddress) インタフェースによりジオロケーションの address がサポートされ、新しいフィールドが [`nsIDOMGeoPosition`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMGeoPosition) に追加されました。[バグ 503942](https://bugzilla.mozilla.org/show_bug.cgi?id=503942 "FIXED: Implement Geolocation Addresses")
- [`window.getComputedStyle`](/ja/docs/Web/API/Window/getComputedStyle "要素の算出スタイルを返します。算出スタイルは、要素に対して適用される全ての CSS プロパティにおいて最終的に算出された値です。") 関数は `url()` 値の中をクォートして返すようになりました。

### XPath

- choose() XPath メソッドをサポート
  - : [`choose()`](/ja/docs/XPath/Functions/choose "XPath/Functions/choose") メソッドが [XPath](/ja/docs/XPath "XPath") でサポートされました。

## XUL とアドオン開発者向け

あなたが拡張機能の開発者なら、あなたの拡張機能に影響するかもしれない変更点の役に立つ概要を記した [Updating extensions for Firefox 3.6](/ja/docs/Updating_extensions_for_Firefox_3.6 "Updating extensions for Firefox 3.6") を読むことから始めてください。プラグインの開発者は [Updating plug-ins for Firefox 3.6](/ja/docs/Updating_plug-ins_for_Firefox_3.6 "Updating plug-ins for Firefox 3.6") を読んでください。

### 新機能

- [デバイスの傾きの検出](/ja/docs/Detecting_device_orientation "Detecting device orientation")
  - : コンテンツはデバイスが加速度センサー（accelerometer）をサポートしていれば [`MozOrientation`](/ja/docs/DOM/MozOrientation "DOM/MozOrientation") イベントによりその傾きを検出できるようになりました。Firefox 3.6 は Mac のノートブックで加速度センサーをサポートします。
- [HTTP アクティビティのモニタリング](/ja/docs/Monitoring_HTTP_activity "Monitoring HTTP activity")
  - : HTTP トランザクションをモニタし、リアルタイムでリクエストとレスポンスを観察できます。
- [Windows のタスクバーとの協調](/ja/docs/Working_with_the_Windows_taskbar "Working with the Windows taskbar")
  - : Windows 7 またはそれ以降のタスクバー内で、ウィンドウの設定の変更が可能になりました。_Firefox 3.6 ではこの機能はデフォルトで無効になっています。_

### Places

- Places のクエリーは結果にリダイレクトされたページが含んでいるかどうかを特定できるように [`nsINavHistoryQueryOptions`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryQueryOptions) インタフェースで `redirectsMode` を利用できるようになりました。
- 新しい [`nsIFaviconService.expireAllFavicons()`](</ja/docs/XPCOM_Interface_Reference/nsIFaviconService#expireAllFavicons()>) メソッドが [`nsIFaviconService`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFaviconService) インターフェースに追加されました。

### Storage

- [Storage API でデータのロケールを考慮した照合がサポートされました](</ja/docs/Storage#Collation_(sorting)> "Storage#Collation (sorting)")
  - : Gecko 1.9.2 にロケールを考慮した技術を用いて最適化された照合を提供する複数の新しい（ソート付き）照合メソッドが追加されました。
- [ステートメントのプロパティが列挙可能になりました](/ja/docs/mozIStorageStatementParams#Enumeration_of_properties "mozIStorageStatementParams#Enumeration of properties")
  - : ステートメントのすべてのプロパティを列挙する [`for..in`](/ja/docs/JavaScript/Reference/Statements/for...in "Core JavaScript 1.5 Reference/Statements/for...in") enumeration が利用できるようになりました。
- mozIStorageStatement の getParameterIndex の動作が 3.5 と 3.6 の間で変更された
  - : 詳細は [バグ 528166](https://bugzilla.mozilla.org/show_bug.cgi?id=528166 "mozIStorageStatement getParameterIndex causes NS_ERROR_ILLEGAL_VALUE") を参照してください。
- 複数のパラメータのセットを非同期バインドしてステートメントを実行
  - : 詳細は [バグ 490085](https://bugzilla.mozilla.org/show_bug.cgi?id=490085 "FIXED: Add ability to bind multiple sets of parameters and execute asynchronously") を参照してください。ドキュメント準備中です。

### Preferences

- [`nsIContentPrefService`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIContentPrefService) インタフェースが新しく二つのメソッドを持ちました: [`nsIContentPrefService.getPrefsByName()`](</ja/docs/XPCOM_Interface_Reference/nsIContentPrefService#getPrefsByName()>) と [`nsIContentPrefService.removePrefsByName()`](</ja/docs/XPCOM_Interface_Reference/nsIContentPrefService#removePrefsByName()>)。

### テーマ

テーマに関する変更の詳細は [Updating themes for Firefox 3.6](/ja/docs/Updating_themes_for_Firefox_3.6 "Updating themes for Firefox 3.6") を参照してください。

- [軽量テーマ](/ja/docs/Themes/Lightweight_themes "Themes/Lightweight themes")
  - : Firefox 3.6 は軽量テーマをサポートします。これは作成するのが簡単なテーマで、ブラウザウィンドウの上部（URL バーとボタンバー）と下部（ステータスバー）に単純に画像を適用します。これは既存の [Personas](http://www.getpersonas.com/) テーマ構造の Firefox への統合です。

### その他

- Firefox は components ディレクトリ内にインストールされたサードパーティのコンポーネントをロードしなくなりました。これはバグのあるサードパーティコンポーネントが実行されるのを防止することによる安定性の向上に貢献します。このやり方でコンポーネントをインストールする開発者は標準的なアドオンとしてインストールできるように[それらコンポーネントを XPI パッケージとして再パッケージする必要があります](/ja/docs/Migrating_raw_components_to_add-ons "Migrating raw components to add-ons")。
- 拡張において chrome を登録するために用いていた `contents.rdf は利用できなくなりました`。 [`chrome.manifest`](/ja/docs/Install_Manifests "Install Manifests") ファイルを代わりに利用しなければなりません。 [バグ 492008](https://bugzilla.mozilla.org/show_bug.cgi?id=492008 "FIXED: Drop support for contents.rdf chrome registrations") を参照してください。
- メニューバーを自動的に隠すためのサポートが追加されました。[バグ 477256](https://bugzilla.mozilla.org/show_bug.cgi?id=477256 "FIXED: Implement menubar auto-hiding in toolkit") を参照してください。
- オブジェクトに対して `container-live-role` 属性を持たせるためのサポートが追加されました。[バグ 391829](https://bugzilla.mozilla.org/show_bug.cgi?id=391829 "FIXED: Add support for container-live-role to object attributes") を参照してください。
- `tabs-closebutton` バインディングが削除されました。[バグ 500971](https://bugzilla.mozilla.org/show_bug.cgi?id=500971 "FIXED: Remove obsolete tabs-closebutton binding") を参照してください。
- 発生したイベントに基づいて音を鳴らすための [`nsISound`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISound) に対するサポートが追加されました。 [バグ 502799](https://bugzilla.mozilla.org/show_bug.cgi?id=502799 "FIXED: add new nsISound method for the event sounds") を参照してください。
- Gecko 1.9 での新しいドラッグ＆ドロップ API をサポートするために [`nsITreeView`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsITreeView) のメソッドである [`nsITreeView.canDrop()`](</ja/docs/XPCOM_Interface_Reference/nsITreeView#canDrop()>) および [`nsITreeView.drop()`](</ja/docs/XPCOM_Interface_Reference/nsITreeView#drop()>) の構文が変更になりました。[バグ 455590](https://bugzilla.mozilla.org/show_bug.cgi?id=455590 "FIXED: Allow new dnd api with tree views") を参照してください。
- Windows のダイアログとウィザードのデフォルトボタンへのマウスカーソルの移動がサポートされました。[バグ 76053](https://bugzilla.mozilla.org/show_bug.cgi?id=76053 'FIXED: Windows mouse integration: "Snap to default button in dialog boxes"') を参照してください。これはダイアログとウィザード要素によって自動的に行われます。ただし、XUL アプリケーションが `window` 要素のウィンドウを生成し、それがデフォルトボタンを持つ場合は、ウィンドウの onload イベントで [`nsIDOMChromeWindow.notifyDefaultButtonLoaded()`](</ja/docs/XPCOM_Interface_Reference/nsIDOMChromeWindow#notifyDefaultButtonLoaded()>) をコールする必要があります。
- [`nsILocalFileMac`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsILocalFileMac) インタフェースが二つのメソッドを持ちました: `setFileTypeAndCreatorFromMIMEType()` と `setFileTypeAndCreatorFromExtension()`。
- 新しい [`NetUtils.jsm`](/ja/docs/JavaScript_code_modules/NetUtil.jsm "JavaScript code modules/NetUtil.jsm") コードモジュールは、入力ストリームから出力ストリームに非同期にデータをコピーする簡単に利用できるメソッドを提供します。
- 新しい [`openLocationLastURL.jsm`](/ja/docs/JavaScript_code_modules/openLocationLastURL.jsm "JavaScript code modules/openLocationLastURL.jsm") コードモジュールは、プライベートブラウジングモードであるかを正しく判断して、"Open Location" ダイアログボックスの記憶された URL データの読み込みと変更を容易にします。
- Windows では、[`nsIScreen`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIScreen) インタフェースは、グラフィックスドライバーが 32 ビットをサポートしていても、ピクセルごとに 24 ビットカラーをレポートします。これは 24 ビットは実際に利用されているカラーピクセルの数をより正確に表現するためです。
- Window では [`toolbar`](/ja/docs/Mozilla/Tech/XUL/toolbar "toolbar") XUL 要素の新しい [`autohide`](/ja/docs/Mozilla/Tech/XUL/Attribute/autohide) アトリビュートを用いてメニューバーを隠すことができます。
- [`loadOneTab`](/ja/docs/Mozilla/Tech/XUL/Method/loadOneTab) と [`addTab`](/ja/docs/Mozilla/Tech/XUL/Method/addTab) メソッドは新しい `relatedToCurrent` パラメータをサポートし、加えて、多くのパラメータが省略可能であるために名前によるパラメータの指定ができます。
- インストール manifests で "hidden" プロパティはサポートされなくなりました。アドオンマネージャウィンドウ上でユーザが見ることのできないアドオンは不可能になりました。
- @mozilla.org/webshell;1 コンポーネントはもう存在しません。代わりに @mozilla.org/docshell;1 を使う必要があります。
- タイマーイベントをスケジュールするために、タイマーがコールするオブジェクトをインスタンシエイトすることなく update-timer カテゴリで登録できるようになりました。代わりに必要になったときにインスタンシエイトされます。詳細は [`nsIUpdateTimerManager.registerTimer()`](</ja/docs/XPCOM_Interface_Reference/nsIUpdateTimerManager#registerTimer()>) を参照してください。
- The [`NPN_GetValue()`](/ja/NPN_GetValue "en/NPN GetValue") 関数はもはや変数値 `NPNVserviceManager`, `NPNVDOMelement`, `NPNVDOMWindow `を経由した XPCOM へのアクセスを提供しません。これは将来のバージョンの Gecko バージョンでプラグインを分離したプロセスで動作させるための作業の一部です。

## Firefox/Gecko 開発者向け

いくつかの変更はあなたが Firefox そのものの内部で作業している場合にだけ興味を持つことでしょう。

### マージされたインタフェース

以下のインタフェースは統合されました:

- `nsIPluginTagInfo2` は `nsIPluginTagInfo` にマージされました。
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2`, `nsIPluginInstancePeer3` はすべて `nsIPluginInstance` にマージされました。
- `nsIWindowlessPlugInstPeer` は `nsIPluginInstance` にマージされました。
- `nsIPluginManager` と `nsIPluginManager2` は `nsIPluginHost` にマージされました。

### 削除されたインタフェース

以下のインタフェースは利用されていない、実装されていないまたは旧式であるためにすべて削除されました:

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

### 移動されたインタフェース

以下のインタフェースは以前の IDL ファイルから新しい場所に移動されました:

- `nsIDOMNSCSS2Properties` は専用の IDL ファイル (`dom/interfaces/css/nsIDOMCSS2Properties.idl`) に移動されました。
- [`nsIUpdateTimerManager`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIUpdateTimerManager) はそれ自身の IDL ファイル内に配置されます。

多くのインタフェースが移動されました。完全なリストは [Interfaces moved in Firefox 3.6](/ja/docs/Interfaces_moved_in_Firefox_3.6 "Interfaces moved in Firefox 3.6") を参照してください。

### その他のインタフェースの変更

以下のようなさまざまな変更が行われました:

- `nsIPlugin` インタフェースは [`nsIFactory`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFactory) ではなく [`nsISupports`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISupports) から継承します。
- `nsIPluginHost` インタフェースは [`nsIFactory`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFactory) ではなく [`nsISupports`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISupports) から継承しますす。
- `nsIFrame` インタフェースは [`nsISupports`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISupports) ではなく `nsQueryFrame` から継承します。
- [`nsIDeviceContext`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDeviceContext) メソッド `getPaletteInfo()` は今まで実装されてことがないので削除されました。
- [`nsIScriptContext`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIScriptContext) メソッド `reportPendingException()` はもう利用されていないので削除されました。

### アクセシビリティコードの変更

- メインドキュメントの子どもが変更された時と同様に、frame と iframe の子どもが変更されたときに EVENT`_REORDER` [アクセシビリティイベント](/ja/docs/XPCOM_Interface_Reference/nsIAccessibleEvent "XPCOM Interface Reference/nsIAccessibleEvent") が送信されます。[バグ 420845](https://bugzilla.mozilla.org/show_bug.cgi?id=420845 "FIXED: Fire event_reorder on any embedded frames/iframes whos document has just loaded.") を参照してください。
- [`nsIAccessibleTable.selectRow()`](</ja/docs/XPCOM_Interface_Reference/nsIAccessibleTable#selectRow()>) は指定された列が選択される前にどんなカレントの選択であっても正しく削除します。

## 参照

- [Firefox 3.5 for developers](/ja/docs/Mozilla/Firefox/Releases/3.5)
- [Firefox 3 for developers](/ja/docs/Mozilla/Firefox/Releases/3)
- [Firefox 2 for developers](/ja/docs/Mozilla/Firefox/Releases/2)
- [Firefox 1.5 for developers](/ja/docs/Mozilla/Firefox/Releases/1.5)
