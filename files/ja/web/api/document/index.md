---
title: Document
slug: Web/API/Document
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("DOM")}}

**`Document`** インターフェイスはブラウザーに読み込まれたウェブページを表し、 [DOM ツリー](/ja/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core)であるウェブページのコンテンツへの入口としての役割を果たします。

DOM ツリーには {{HTMLElement("body")}} や {{HTMLElement("table")}} など、[多数の要素](/ja/docs/Web/HTML/Element)があります。これはページの URL を取得したり文書で新たな要素を作成するなど、文書全体に関わる機能を提供します。

{{InheritanceDiagram}}

`Document` インターフェイスは、あらゆる種類の文書に対して共通のプロパティやメソッドを提供します。また、文書の種類（例: [HTML](/ja/docs/Web/HTML)、[XML](/ja/docs/Web/XML)、SVG など）に応じて、より大規模な API を使用できます。コンテンツタイプ `"text/html"` で提供される HTML 文書では、 {{DOMxRef("HTMLDocument")}} インターフェイスも実装します。一方 XML や SVG 文書では、 {{DOMxRef("XMLDocument")}} インターフェイスを実装します。

## コンストラクター

- {{DOMxRef("Document.Document", "Document()")}}
  - : 新しい `Document` オブジェクトを作成します。

## プロパティ

_このインターフェイスは、 {{DOMxRef("Node")}} インターフェイスおよび {{DOMxRef("EventTarget")}} インターフェイスのプロパティも継承しています。_

- {{DOMxRef("Document.activeElement")}} {{ReadOnlyInline}}
  - : 現在フォーカスのある {{DOMxRef('Element')}} を返します。
- {{DOMxRef("Document.adoptedStyleSheets")}}
  - : 文書で使用するために構築したスタイルシートの配列を追加します。
    これらのスタイルシートは、同じ文書のシャドウ DOM のサブツリーと共有されます。
- {{DOMxRef("Document.body")}}
  - : 現在の文書の {{HTMLElement("body")}} または {{htmlelement("frameset")}} ノードを返します。
- {{DOMxRef("Document.characterSet")}} {{ReadOnlyInline}}
  - : 文書に適用されている文字セットを返します。
- {{domxref("Document.childElementCount")}} {{ReadOnlyInline}}
  - : 現在の文書の子要素の数を返します。
- {{domxref("Document.children")}} {{ReadOnlyInline}}
  - : 現在の文書の子要素を返します。
- {{DOMxRef("Document.compatMode")}} {{ReadOnlyInline}}
  - : 文書が _Quirks_ モードと _Strict_ モードのどちらで描画されているかを示します。
- {{DOMxRef("Document.contentType")}} {{ReadOnlyInline}}
  - : 現在の文書の MIME ヘッダーから Content-Type を返します。
- {{DOMxRef("Document.currentScript")}} {{ReadOnlyInline}}
  - : {{HTMLElement("script")}} 要素のうち、現在処理中で、かつ [JavaScript モジュールでないもの](https://github.com/whatwg/html/issues/997)を返します。
- {{DOMxRef("Document.doctype")}} {{ReadOnlyInline}}
  - : 現在の文書の文書型宣言 (DTD) を返します。
- {{DOMxRef("Document.documentElement")}} {{ReadOnlyInline}}
  - : 文書の直接の子である {{DOMxRef("Element")}} を返します。 HTML 文書では、これは通常は {{DOMxRef("HTMLHtmlElement")}} オブジェクトで、文書の {{HTMLElement("html")}} 要素を表します。
- {{DOMxRef("Document.documentURI")}} {{ReadOnlyInline}}
  - : 文書の場所を文字列で返します。
- {{DOMxRef("Document.embeds")}} {{ReadOnlyInline}}
  - : {{DOMxRef("HTMLCollection")}} で、現在の文書に含まれる埋め込まれた {{HTMLElement('embed')}} 要素のリストを返します。
- {{domxref("Document.firstElementChild")}} {{ReadOnlyInline}}
  - : 現在の文書における最初の子要素を返します。
- {{DOMxRef("Document.fonts")}}
  - : 現在の文書の {{DOMxRef("FontFaceSet")}} インターフェイスを返します。
- {{DOMxRef("Document.forms")}} {{ReadOnlyInline}}
  - : {{DOMxRef("HTMLCollection")}} で現在の文書の {{HTMLElement("form")}} 要素を返します。
- {{DOMxRef("Document.fullscreenElement")}} {{ReadOnlyInline}}
  - : この文書で現在全画面モードになっている要素です。
- {{DOMxRef("Document.head")}} {{ReadOnlyInline}}
  - : 現在の文書の {{HTMLElement("head")}} 要素を返します。
- {{DOMxRef("Document.hidden")}} {{ReadOnlyInline}}
  - : このページが非表示と見なされているかどうかを論理値で返します。
- {{DOMxRef("Document.images")}} {{ReadOnlyInline}}
  - : {{DOMxRef("HTMLCollection")}} で、現在の文書の画像のリストを返します。
- {{DOMxRef("Document.implementation")}} {{ReadOnlyInline}}
  - : 現在の文書に関連付けられた DOM 実装を返します。
- {{domxref("Document.lastElementChild")}} {{ReadOnlyInline}}
  - : 現在の文書における最後の子要素を返します。
- {{DOMxRef("Document.links")}} {{ReadOnlyInline}}
  - : {{DOMxRef("HTMLCollection")}} で、文書内のすべてのハイパーリンクのリストを返します。
- {{DOMxRef("Document.mozSyntheticDocument")}} {{Non-standard_Inline}}
  - : 単独の画像、動画、音声ファイルなど、文書が合成されたものである限り `true` を返します。
- {{DOMxRef("Document.pictureInPictureElement")}} {{ReadOnlyInline}}
  - : この文書で現在、ピクチャインピクチャモードで表示されている要素 ({{DOMxRef('Element')}}) を返します。
- {{DOMxRef("Document.pictureInPictureEnabled")}} {{ReadOnlyInline}}
  - : ピクチャインピクチャ機能が有効であれば true を返します。
- {{DOMxRef("Document.plugins")}} {{ReadOnlyInline}}
  - : {{DOMxRef("HTMLCollection")}} で、利用可能なプラグインのリストを返します。
- {{DOMxRef("Document.pointerLockElement")}} {{ReadOnlyInline}}
  - : ポインターがロックされている場合、マウスイベントのターゲットとして設定された要素を返します。ロック町の場合、ポインターがロックされていない場合、ターゲットが他の文書にある場合は `null` を返します。
- {{DOMxRef("Document.featurePolicy")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 特定の文書に適用される機能ポリシーを簡単に導入するための API を提供する {{DOMxRef("FeaturePolicy")}} インターフェイスを返します。
- {{DOMxRef("Document.scripts")}} {{ReadOnlyInline}}
  - : {{DOMxRef("HTMLCollection")}} で、文書内のすべての {{HTMLElement("script")}} 要素を返します。
- {{DOMxRef("Document.scrollingElement")}} {{ReadOnlyInline}}
  - : 文書をスクロールする {{DOMxRef("Element")}} への参照を返します。
- {{DOMxRef("Document.styleSheets")}} {{ReadOnlyInline}}
  - : {{DOMxRef('StyleSheetList')}} で、文書で明示的にリンクされているスタイルシートや、文書に埋め込まれているスタイルシート（{{DOMxRef('CSSStyleSheet')}} オブジェクトのリスト）を返します。
- {{DOMxRef("Document.timeline")}} {{ReadOnlyInline}}
  - : タイムラインを {{domxref("DocumentTimeline")}} の特別なインスタンスで返します。これはページの読み込み時に自動的に生成されます。
- {{DOMxRef("Document.visibilityState")}} {{ReadOnlyInline}}
  - : 文書の可視性を表す文字列を返します。 `visible`, `hidden`, `prerender`, `unloaded` のいずれかの値になります。

### HTML 文書向けの拡張

_HTML 文書用の `Document` インターフェイスは {{DOMxRef("HTMLDocument")}} インターフェイスから継承されていたり、拡張されていたりします。_

- {{DOMxRef("Document.cookie")}}
  - : 文書のクッキーをセミコロンで区切られたリストで返すか、単一のクッキーを設定するかします。
- {{DOMxRef("Document.defaultView")}} {{ReadOnlyInline}}
  - : window オブジェクトへの参照を返します。
- {{DOMxRef("Document.designMode")}}
  - : 文書全体を編集可能かを取得/設定します。
- {{DOMxRef("Document.dir")}}
  - : 文書の書字方向 (rtl/ltr) を取得/設定します。
- {{DOMxRef("Document.domain")}} {{Deprecated_Inline}}
  - : 現在の文書のドメインを取得/設定します。
- {{DOMxRef("Document.fullscreenEnabled")}} {{ReadOnlyInline}}
  - : 全画面モードが利用できるかどうかを示します。
- {{DOMxRef("Document.lastModified")}} {{ReadOnlyInline}}
  - : 文書の最終更新日を返します。
- {{DOMxRef("Document.location")}} {{ReadOnlyInline}}
  - : 現在の文書の URI を返します。
- {{DOMxRef("Document.readyState")}} {{ReadOnlyInline}}
  - : 文書の読み込み状況を表す文字列を返します。
- {{DOMxRef("Document.referrer")}} {{ReadOnlyInline}}
  - : このページへリンクしたページの URI を返します。
- {{DOMxRef("Document.title")}}
  - : 現在の文書のタイトルを設定または取得します。
- {{DOMxRef("Document.URL")}} {{ReadOnlyInline}}
  - : 現在の文書の URL を含む文字列を返します。

### 非推奨のプロパティ

- {{DOMxRef("Document.alinkColor")}} {{Deprecated_Inline}}
  - : 文書本文内のアクティブなリンクの色を取得または設定します。
- {{DOMxRef("Document.all")}} {{Deprecated_Inline}}
  - : 文書内のすべての要素にアクセスできます。文書ノードを起点とする {{DOMxRef('HTMLAllCollection')}} を返します。これは古い標準外のプロパティですので、使用しないようにしてください。
- {{DOMxRef("Document.anchors")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : 文書内のすべてのアンカーのリストを返します。
- {{DOMxRef("Document.applets")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : 文書内にあるアプレットのリスト (出現順) を返します。
- {{DOMxRef("Document.bgColor")}} {{Deprecated_Inline}}
  - : 現在の文書の背景色を取得または設定します。
- {{DOMxRef("Document.characterSet","Document.charset")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : {{DOMxRef("Document.characterSet")}} の別名です。代わりに {{DOMxRef("Document.characterSet")}} を使用してください。
- {{DOMxRef("Document.fgColor")}} {{Deprecated_Inline}}
  - : 現在の文書の前景色または文字色を取得/設定します。
- {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}
  - : 文書が[全画面モード](/ja/docs/Web/API/Fullscreen_API)にあるときに `true` になります。
- {{DOMxRef("Document.height")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 現在の文書の高さを取得/設定します。
- {{DOMxRef("Document.characterSet", "Document.inputEncoding")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : {{DOMxRef("Document.characterSet")}} の別名です。代わりにそちらを使用してください。
- {{DOMxRef("Document.lastStyleSheetSet")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 直前に有効であったスタイルシートセットの名称を返します。 {{DOMxRef("Document.selectedStyleSheetSet","selectedStyleSheetSet")}} に値を設定してスタイルシートを変更するまで、この値は `null` になります。
- {{DOMxRef("Document.linkColor")}} {{Deprecated_Inline}}
  - : document 内のハイパーリンクの色を取得/設定します。
- {{DOMxRef("Document.preferredStyleSheetSet")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : ページの作者によって設定された、優先的なスタイルシートを返します。
- {{DOMxRef("Document.rootElement")}} {{Deprecated_Inline}}
  - : {{DOMxRef("Document.documentElement")}} と同様ですが、 {{SVGElement("svg")}} ルート要素専用です。こちらのプロパティを代わりに使用してください。
- {{DOMxRef("Document.selectedStyleSheetSet")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 現在どのスタイルシートセットを使用しているかを返します。
- {{DOMxRef("Document.styleSheetSets")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 文書で使用できるスタイルシートセットのリストを返します。
- {{DOMxRef("Document.vlinkColor")}} {{Deprecated_Inline}}
  - : 訪問済みのハイパーリンクの色を取得/設定します。
- {{DOMxRef("Document.width")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 現在の文書の幅を返します。
- {{DOMxRef("Document.xmlEncoding")}} {{Deprecated_Inline}}
  - : XML 宣言によって決められたエンコーディングを返します。
- {{DOMxRef("Document.xmlStandalone")}} {{Deprecated_Inline}}
  - : XML 宣言で文書がスタンドアロンである (_例_: DTD の外部パートが文書のコンテンツに影響する) 場合に `true` を、そうでない場合に `false` を返します。
- {{DOMxRef("Document.xmlVersion")}} {{Deprecated_Inline}}
  - : XML 宣言で指定されたバージョン番号、または宣言が省略されている場合に `"1.0"` を返します。

## メソッド

_このインターフェイスは、{{DOMxRef("Node")}} インターフェイスおよび {{DOMxRef("EventTarget")}} インターフェイスのメソッドを継承します。_

- {{DOMxRef("Document.adoptNode()")}}
  - : 外部文書からノードを取り込みます。
- {{DOMxRef("Document.append()")}}
  - : 文書の最後の子の後に {{domxref("Node")}} オブジェクトまたは文字列の集合を挿入します。
- {{DOMxRef("Document.captureEvents()")}} {{Deprecated_Inline}}
  - : {{DOMxRef("Window.captureEvents")}} をご覧ください。
- {{DOMxRef("Document.caretPositionFromPoint()")}}
  - : キャレットを含む DOM ノードと、そのノード内でのキャレットの文字オフセットを含む {{DOMxRef('CaretPosition')}} オブジェクトを返します。
- {{DOMxRef("Document.caretRangeFromPoint()")}} {{Non-standard_Inline}}
  - : 指定した座標にある文書の断片の {{DOMxRef("Range")}} オブジェクトを取得します。
- {{DOMxRef("Document.createAttribute()")}}
  - : 新しい {{DOMxRef("Attr")}} オブジェクトを生成して、返します。
- {{DOMxRef("Document.createAttributeNS()")}}
  - : 指定した名前空間に新しい属性ノードを生成して、返します。
- {{DOMxRef("Document.createCDATASection()")}}
  - : 新しい CDATA ノードを生成して、返します。
- {{DOMxRef("Document.createComment()")}}
  - : 新しいコメントノードを生成して、返します。
- {{DOMxRef("Document.createDocumentFragment()")}}
  - : 新しい文書断片を生成します。
- {{DOMxRef("Document.createElement()")}}
  - : 指定したタグ名で新しい要素を生成します。
- {{DOMxRef("Document.createElementNS()")}}
  - : 指定したタグ名およびネームスペース URI で、新しい要素を生成します。
- {{DOMxRef("Document.createEntityReference()")}} {{Deprecated_Inline}}
  - : 新しい実体参照オブジェクトを生成して、返します。
- {{DOMxRef("Document.createEvent()")}}
  - : イベントオブジェクトを生成します。
- {{DOMxRef("Document.createNodeIterator()")}}
  - : {{DOMxRef("NodeIterator")}} オブジェクトを生成します。
- {{DOMxRef("Document.createProcessingInstruction()")}}
  - : 新しい {{DOMxRef("ProcessingInstruction")}} オブジェクトを生成します。
- {{DOMxRef("Document.createRange()")}}
  - : {{DOMxRef("Range")}} オブジェクトを生成します。
- {{DOMxRef("Document.createTextNode()")}}
  - : テキストノードを生成します。
- {{DOMxRef("Document.createTouch()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : {{DOMxRef("Touch")}} オブジェクトを生成します。
- {{DOMxRef("Document.createTouchList()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : {{DOMxRef("TouchList")}} オブジェクトを生成します。
- {{DOMxRef("Document.createTreeWalker()")}}
  - : {{DOMxRef("TreeWalker")}} オブジェクトを生成します。
- {{DOMxRef("Document.elementFromPoint()")}}
  - : 指定された座標の最上位の要素を返します。
- {{DOMxRef("Document.elementsFromPoint()")}}
  - : 指定された座標にあるすべての要素の配列を返します。
- {{DOMxRef("Document.enableStyleSheetsForSet()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 指定したスタイルシートセットのスタイルシートを有効化します。
- {{DOMxRef("Document.exitFullscreen()")}}
  - : 文書の全画面モードにある要素の全画面表示を止めます。
- {{DOMxRef("Document.exitPictureInPicture()")}}
  - : 浮動ピクチャーインピクチャーウィンドウから動画を取り外し、元のコンテナーに戻します。
- {{DOMxRef("Document.exitPointerLock()")}}
  - : ポインターロックを解放します。
- {{DOMxRef("Document.getAnimations()")}}
  - : 現在実行中であるすべての {{DOMxRef("Animation")}} オブジェクトの配列を返します。この対象要素は、`document` の子孫要素です。
- {{domxref("Document.getBoxQuads()")}} {{Experimental_Inline}}
  - : このノードの CSS フラグメントを表す {{domxref("DOMQuad")}} オブジェクトのリストを返します。
- {{DOMxRef("Document.getElementById", "Document.getElementById()")}}
  - : 識別された要素のオブジェクト参照を返します。
- {{DOMxRef("Document.getElementsByClassName()")}}
  - : 指定されたクラス名を持つ要素のリストを返します。
- {{DOMxRef("Document.getElementsByTagName()")}}
  - : 指定されたタグ名を持つ要素のリストを返します。
- {{DOMxRef("Document.getElementsByTagNameNS()")}}
  - : 指定されたタグ名と名前空間を持つ要素のリストを返します。
- {{DOMxRef("Document.getSelection()")}}
  - : ユーザーが現在選択しているテキスト範囲、または現在のキャレットの位置を表す {{DOMxRef('Selection')}} オブジェクトを返します。
- {{DOMxRef("Document.hasStorageAccess()")}}
  - : 文書が自分自身 (first-party) のストレージにアクセスしたかどうかを示す論理値で解決する {{jsxref("Promise")}} を返します。
- {{DOMxRef("Document.importNode()")}}
  - : 外部文書のノードの複製を返します。
- {{DOMxRef("Document.normalizeDocument()")}} {{Deprecated_Inline}}
  - : エンティティの置換や、テキストノードの正規化などを行います。
- {{DOMxRef("Document.prepend()")}}
  - : 文書の最初の子の前に、 {{domxref("Node")}} オブジェクトまたは文字列の集合を挿入します。
- {{DOMxRef("Document.querySelector()")}}
  - : 指定したセレクターに一致する、文書内で最初の要素ノードを返します。
- {{DOMxRef("Document.querySelectorAll()")}}
  - : 指定したセレクターに一致する、文書内のすべての要素ノードのリストを返します。
- {{DOMxRef("Document.releaseCapture()")}} {{Non-standard_Inline}}
  - : この文書内の要素でマウスキャプチャを行っている場合、マウスキャプチャを解放します。
- {{DOMxRef("Document.releaseEvents()")}} {{Deprecated_Inline}}
  - : {{DOMxRef("Window.releaseEvents()")}} をご覧ください。
- {{DOMxRef("Document.replaceChildren()")}}
  - : 文書の既存の子を、指定された新しい子の集合で置き換えます。
- {{DOMxRef("Document.requestStorageAccess()")}}
  - : 自分自身 (first-party) のストレージへのアクセスが許可された場合は解決し、拒否された場合は拒否されるプロミス ({{jsxref("Promise")}}) を返します。
- {{DOMxRef("Document.mozSetImageElement()")}} {{Non-standard_Inline}}
  - : 指定した ID を持つ要素の背景画像として使用する要素を変更できます。

`Document` インターフェイスは、{{DOMxRef("XPathEvaluator")}} インターフェイスによって拡張されています。

- {{DOMxRef("Document.createExpression()")}}
  - : (繰り返し) 評価に使用できる [`XPathExpression`](/ja/docs/Web/API/XPathExpression) をコンパイルします。
- {{DOMxRef("Document.createNSResolver()")}}
  - : {{DOMxRef("XPathNSResolver")}} オブジェクトを生成します。
- {{DOMxRef("Document.evaluate()")}}
  - : XPath 表現を評価します。

### HTML 文書向けの拡張

HTML 文書用の `Document` インターフェイスは {{DOMxRef("HTMLDocument")}} インターフェイスから継承または拡張されています。

- {{DOMxRef("Document.clear()")}} {{Deprecated_Inline}}
  - : 最近の Firefox や Internet Explorer を含む大部分の現行ブラウザーは、何も行いません。
- {{DOMxRef("Document.close()")}}
  - : 書き込み用の文書ストリームを閉じます。
- {{DOMxRef("Document.execCommand()")}} {{Deprecated_Inline}}
  - : 編集可能な文書で、フォーマットコマンドを実行します。
- {{DOMxRef("Document.getElementsByName()")}}
  - : (引数で) 与えられた名前 (name) を持つ要素のリストを返します。
- {{DOMxRef("Document.hasFocus()")}}
  - : 指定した文書内にフォーカスがある場合に、 `true` を返します。
- {{DOMxRef("Document.open()")}}
  - : 書き込み用の文書ストリームを開きます。
- {{DOMxRef("Document.queryCommandEnabled()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 現在の領域でフォーマットコマンドを実行できる場合に、 true を返します。
- {{DOMxRef("Document.queryCommandIndeterm()")}} {{Deprecated_Inline}}
  - : 現在の領域でフォーマットコマンドの状態が不確定である場合に true を返します。
- {{DOMxRef("Document.queryCommandState()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 現在の領域でフォーマットコマンドを実行した場合に true を返します。
- {{DOMxRef("Document.queryCommandSupported()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 現在の領域でフォーマットコマンドをサポートしている場合に、true を返します。
- {{DOMxRef("Document.queryCommandValue()")}} {{Deprecated_Inline}}
  - : 指定したフォーマットコマンドについて、現在の領域における値を返します。
- {{DOMxRef("Document.write()")}}
  - : 文書にテキストを書き込みます。
- {{DOMxRef("Document.writeln()")}}
  - : 文書にテキスト行を書き込みます。

## イベント

これらのイベントを待ち受けするには、 `addEventListener()` を使用するか、本インターフェイスの `onイベント名` プロパティへイベントリスナーを代入するかしてください。

- {{DOMxRef("Document.afterscriptexecute_event", "afterscriptexecute")}} {{Non-standard_Inline}}
  - : 静的な {{HTMLElement("script")}} 要素でスクリプトの実行が完了した時に発生します。
- {{DOMxRef("Document.beforescriptexecute_event", "beforescriptexecute")}} {{Non-standard_Inline}}
  - : 静的な {{HTMLElement("script")}} で実行を開始しようとしている時に発生します。
- {{DOMxRef("Document.securitypolicyviolation_event", "securitypolicyviolation")}}
  - : コンテンツセキュリティポリシーに違反した場合に発行されます。
- {{DOMxRef("Document/scroll_event", "scroll")}}
  - : 文書のビューまたは要素がスクロールしたときに発行されます。
- {{DOMxRef("Document/visibilitychange_event", "visibilitychange")}}
  - : タブの内容の表示・非表示の状態が切り替わった時に発行されます。
- {{DOMxRef("Document/wheel_event","wheel")}}
  - : ユーザーがポインティングデバイス (通常はマウス) のホイールボタンを回転した時に発行されます。

### アニメーションイベント

- {{DOMxRef("Document/animationcancel_event", "animationcancel")}}
  - : アニメーションが予期せず中断された時に発行されます。
- {{DOMxRef("Document/animationend_event", "animationend")}}
  - : アニメーションが正常に完了したときに発行されます。
- {{DOMxRef("Document/animationiteration_event", "animationiteration")}}
  - : アニメーションの1周期が完了したときに発行されます。
- {{DOMxRef("Document/animationstart_event", "animationstart")}}
  - : アニメーションが始まった時に発行されます。

### クリップボードイベント

- {{DOMxRef("Document/copy_event", "copy")}}
  - : ユーザーがブラウザーのユーザーインターフェイスからコピー操作を開始した時に発行されます。
- {{DOMxRef("Document/cut_event", "cut")}}
  - : ユーザーがブラウザーのユーザーインターフェイスから切り取り操作を開始したときに発行されます。
- {{DOMxRef("Document/paste_event", "paste")}}
  - : ユーザーがブラウザーのユーザーインターフェイスから貼り付け操作を開始したときに発行されます。

### ドラッグ＆ドロップイベント

- {{DOMxRef("Document/drag_event", "drag")}}
  - : 要素またはテキストの選択範囲をユーザーがドラッグしている間、数百ミリ秒ごとに発行されます。
- {{DOMxRef("Document/dragend_event", "dragend")}}
  - : ドラッグ操作が終了したとき (マウスボタンを離したときやエスケープキーを押したとき) に発行されます。
- {{DOMxRef("Document/dragenter_event", "dragenter")}}
  - : ドラッグ中の要素またはテキストの選択範囲が妥当なドロップ対象に入ったときに発行されます。
- {{DOMxRef("Document/dragleave_event", "dragleave")}}
  - : ドラッグ中の要素またはテキストの選択範囲が妥当なドロップ対象から外れたときに発行されます。
- {{DOMxRef("Document/dragover_event", "dragover")}}
  - : 要素またはテキストの選択範囲が妥当なドロップ対象の上をドラッグされているときに (数ミリ秒ごとに) 発行されます。
- {{DOMxRef("Document/dragstart_event", "dragstart")}}
  - : ユーザーが要素またはテキストの選択範囲のドラッグを開始したときに発行されます。
- {{DOMxRef("Document/drop_event", "drop")}}
  - : 要素またはテキストの選択範囲が妥当なドロップ対象にドロップされたときに発行されます。

### 全画面イベント

- {{DOMxRef("Document/fullscreenchange_event", "fullscreenchange")}}
  - : `Document` が[全画面](/ja/docs/Web/API/Fullscreen_API/Guide)モードへ移行したとき、または解除されたときに発行されます。
- {{DOMxRef("Document/fullscreenerror_event", "fullscreenerror")}}
  - : [全画面](/ja/docs/Web/API/Fullscreen_API/Guide)モードへ切り替えようとしたとき、または解除しようとしたときにエラーが発生した場合に発行されます。

### キーボードイベント

- {{DOMxRef("Document/keydown_event", "keydown")}}
  - : キーが押されたときに発行されます。
- {{DOMxRef("Document/keypress_event", "keypress")}} {{Deprecated_Inline}}
  - : 文字値を生成するキーが押下されたときに発行されます。
- {{DOMxRef("Document/keyup_event", "keyup")}}
  - : キーを離したときに発行されます。

### ロード＆アンロードイベント

- {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - : 文書が完全に読み込まれて解釈されたときに、スタイルシート、画像、サブフレームの読み込みが完了するのを待たずに発行されます。
- {{DOMxRef("Document/readystatechange_event", "readystatechange")}}
  - : 文書の {{DOMxRef("Document/readyState", "readyState")}} 属性が変更されたときに発行されます。

### ポインターイベント

- {{DOMxRef("Document/gotpointercapture_event", "gotpointercapture")}}
  - : [`setPointerCapture()`](/ja/docs/Web/API/Element/setPointerCapture) を使用して要素がポインターをキャプチャしたときに発行されます。
- {{DOMxRef("Document/lostpointercapture_event", "lostpointercapture")}}
  - : [キャプチャされたポインター](/ja/docs/Web/API/Pointer_events#pointer_capture)が解放されたときに発行されます。
- {{DOMxRef("Document/pointercancel_event", "pointercancel")}}
  - : ポインターイベントがキャンセルされたときに発行されます。
- {{DOMxRef("Document/pointerdown_event", "pointerdown")}}
  - : ポインターがアクティブになったときに発行されます。
- {{DOMxRef("Document/pointerenter_event", "pointerenter")}}
  - : ポインターが要素やその子孫のヒットテスト境界の中へ移動したときに発行されます。
- {{DOMxRef("Document/pointerleave_event", "pointerleave")}}
  - : ポインターが要素のヒットテスト境界の外へ移動したときに発行されます。
- {{DOMxRef("Document/pointerlockchange_event", "pointerlockchange")}}
  - : ポインターがロックまたはアンロックされたときに発行されます。
- {{DOMxRef("Document/pointerlockerror_event", "pointerlockerror")}}
  - : ポインターをロックしようとして失敗したときに発行されます。
- {{DOMxRef("Document/pointermove_event", "pointermove")}}
  - : ポインターの座標が変化したときに発行されます。
- {{DOMxRef("Document/pointerout_event", "pointerout")}}
  - : ポインターが (訳あって) 要素の _ヒットテスト_ 境界の外へ移動したときに発行されます。
- {{DOMxRef("Document/pointerover_event", "pointerover")}}
  - : ポインターが要素のヒットテスト境界の中へ移動したときに発行されます。
- {{DOMxRef("Document/pointerup_event", "pointerup")}}
  - : ポインターがアクティブではなくなったときに発行されます。

### 選択イベント

- {{DOMxRef("Document/selectionchange_event", "selectionchange")}}
  - : 文書でのテキスト選択範囲が変化したときに発行されます。

### タッチイベント

- {{DOMxRef("Document/touchcancel_event", "touchcancel")}}
  - : 1 つ以上のタッチ点が実装固有の方法で中断された場合に発行されます (例えば、作成されたタッチ点が多すぎた場合など)。
- {{DOMxRef("Document/touchend_event", "touchend")}}
  - : 1 つ以上のタッチ点がタッチ面から取り除かれたときに発行されます。
- {{DOMxRef("Document/touchmove_event", "touchmove")}}
  - : 1 つ以上のタッチ点がタッチ面に沿って移動したときに発行されます。
- {{DOMxRef("Document/touchstart_event", "touchstart")}}
  - : 1 つ以上のタッチ点がタッチ面に配置されたときに発行されます。

### トランジションイベント

- {{DOMxRef("Document/transitioncancel_event", "transitioncancel")}}
  - : [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)がキャンセルされたときに発行されます。
- {{DOMxRef("Document/transitionend_event", "transitionend")}}
  - : [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)が完了したときに発行されます。
- {{DOMxRef("Document/transitionrun_event", "transitionrun")}}
  - : [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)が初めて作成されたときに発行されます。
- {{DOMxRef("Document/transitionstart_event", "transitionstart")}}
  - : [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)が実際に開始されたときに発行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
