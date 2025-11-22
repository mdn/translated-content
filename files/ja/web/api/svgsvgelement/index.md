---
title: SVGSVGElement
slug: Web/API/SVGSVGElement
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

{{APIRef("SVG")}}

**`SVGSVGElement`** インターフェイスは、 {{SVGElement("svg")}} 要素のプロパティへのアクセスと、それらを操作するためのメソッドを提供します。このインターフェイスには、行列演算や視覚的レンダリングデバイス上での再描画タイミングの制御など、一般的に使用される様々なユーティリティメソッドも含まれています。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("SVGGraphicsElement")}} から継承したプロパティもあります。_

- {{domxref("SVGSVGElement.x")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この {{SVGElement("svg")}} 要素の {{SVGAttr("x")}} 属性に対応します。
- {{domxref("SVGSVGElement.y")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この {{SVGElement("svg")}} 要素の {{SVGAttr("y")}} 属性に対応します。
- {{domxref("SVGSVGElement.width")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この {{SVGElement("svg")}} 要素の {{SVGAttr("width")}} 属性に対応します。
- {{domxref("SVGSVGElement.height")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この {{SVGElement("svg")}} 要素の {{SVGAttr("height")}} 属性に対応します。
- {{domxref("SVGSVGElement.viewBox")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedRect")}} で、この {{SVGElement("svg")}} 要素の {{SVGAttr("viewBox")}} 属性に対応します。
- {{domxref("SVGSVGElement.preserveAspectRatio")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedPreserveAspectRatio")}} で、この {{SVGElement("svg")}} 要素の {{SVGAttr("preserveAspectRatio")}} 属性に対応します。
- {{domxref("SVGSVGElement.pixelUnitToMillimeterX")}} {{Deprecated_Inline}}
  - : 浮動小数点数で、ビューポートの X 軸方向のピクセル単位のサイズ（CSS2 で定義する通り）を表します。この単位は 70dpi から 120dpi の範囲内の値であり、これを対応しているシステムでは、実際にターゲットメディアの特性に一致することがあります。ピクセルサイズが判別できないシステムでは、適切なデフォルトのピクセルサイズが指定されます。
- {{domxref("SVGSVGElement.pixelUnitToMillimeterY")}} {{Deprecated_Inline}}
  - : 浮動小数点数で、ビューポートの Y 軸方向におけるピクセル単位のサイズを表します。
- {{domxref("SVGSVGElement.screenPixelToMillimeterX")}} {{Deprecated_Inline}}
  - : DOM レベル 2 におけるユーザーインターフェイス (UI) イベントは、指定された UI イベントが発生した画面上の位置を示します。ブラウザーが実際に「画面単位」の物理サイズを認識している場合、この浮動小数点数の属性は、その情報を表します。そうでない場合、ユーザーエージェントは適切なデフォルト値（`.28mm` など）を提供します。
- {{domxref("SVGSVGElement.screenPixelToMillimeterY")}} {{Deprecated_Inline}}
  - : ビューポートの Y 軸方向の画面ピクセルに対応するサイズです。
- {{domxref("SVGSVGElement.useCurrentView")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 現在の最も内側の SVG 文書フラグメントの初期ビュー（つまり、拡大やパンを行う前の状態）は、「標準」ビュー（{{SVGElement("svg")}} 要素の {{SVGAttr("viewBox")}} などの属性に基づく）か、「カスタム」ビュー（具体的な {{SVGElement("view")}} 要素や他の要素へのハイパーリンク）のいずれかになります。初期表示が「標準」ビューの場合、この属性は `false` になります。初期表示が「カスタム」ビューの場合、この属性は `true` になります。
- {{domxref("SVGSVGElement.currentView")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 現在の最も内側の SVG 文書フラグメントの初期ビュー（つまり、拡大やパン操作前の状態）を定義する {{domxref("SVGViewSpec")}} です。その意味は状況によって異なります。初期ビューが「標準」ビューだった場合、
    - `currentView` 内の `viewBox`、`preserveAspectRatio`、`zoomAndPan` の値は、`SVGSVGElement` 上に直接存在する対応する DOM 属性の値と一致します
    - `currentView` 内の `transform` の値は `null` です

    初期ビューが {{SVGElement("view")}} 要素へのリンクである場合、次のようになります。
    - `currentView` 内の `viewBox`、`preserveAspectRatio`、`zoomAndPan` の値は、指定された {{SVGElement("view")}} 要素の対応するこの属性に対応します
    - `currentView` 内の `transform` の値は `null` です

    初期ビューが別の要素へのリンクであった場合（つまり、{{SVGElement("view")}} 以外の要素へのリンクであった場合）、次のようになります。
    - `currentView` 内の `viewBox`、`preserveAspectRatio`、`zoomAndPan` の値は、最も近い祖先の {{SVGElement("svg")}} 要素に対して、`SVGSVGElement` 上に直接存在する対応する DOM 属性の値と一致します
    - `currentView` 内の `transform` の値は `null` です

    初期ビューが、SVG ビュー指定フラグメント識別子（`#svgView(…)` など）を使用した SVG 文書フラグメントへのリンクであった場合、次のようになります。
    - `currentView` 内の `viewBox`、`preserveAspectRatio`、`zoomAndPan`、`transform` の値は、SVG ビュー指定フラグメント識別子からの値に対応します

- {{domxref("SVGSVGElement.currentScale")}}
  - : 最も外側の {{SVGElement("svg")}} 要素において、この浮動小数点属性は、ユーザーの拡大縮小やパン操作を考慮した、初期ビューに対する現在の相対的な変倍率を示します。DOM 属性 `currentScale` と `currentTranslate` は、2×3 行列 `[a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y]` に相当します。「拡大」が有効化されている場合（つまり `zoomAndPan="magnify"` の場合）、その効果は、SVG 文書フラグメントの最外層（つまり最も外側の {{SVGElement("svg")}} 要素の外側）に追加の座標変換が配置されたかのように作用します。
- {{domxref("SVGSVGElement.currentTranslate")}} {{ReadOnlyInline}}
  - : {{domxref("DOMPointReadOnly")}} で、最も外側の {{SVGElement("svg")}} 要素に対応するユーザーの「拡大率」を考慮した変換係数を表します。最も外側にない `<svg>` 要素については動作は未定義です。

## インスタンスメソッド

_このインターフェイスには、親である {{domxref("SVGGraphicsElement")}} から継承したメソッドもあります。_

- {{domxref("SVGSVGElement.suspendRedraw()")}} {{Deprecated_Inline}}
  - : 再描画が以下の条件を満たすまで行われないことを示すタイムアウト値を取ります。

    対応する `unsuspendRedraw()` 呼び出しが行われた、`unsuspendRedrawAll()` 呼び出しが行われた、またはそのタイマーがタイムアウトした。

    インタラクティブ性をサポートしない環境（例：印刷媒体）では、再描画は中断されないものとします。`suspendRedraw()` および `unsuspendRedraw()` の呼び出しは、対をなす形でバランスよく行うべきであるが、必ずしもそうする必要はない。

    SVG DOM の変更が複数発生する際に再描画処理を一時停止するには、SVG DOM への変更の前に以下のようなメソッドを先に呼び出してください。

    ```js
    const suspendHandleID = suspendRedraw(maxWaitMilliseconds);
    ```

    そして、次のようなメソッド呼び出しで変更を追跡します。

    ```js
    unsuspendRedraw(suspendHandleID);
    ```

    複数の `suspendRedraw()` 呼び出しを同時に使用できることに注意してください。また、各メソッド呼び出しは他の `suspendRedraw()` メソッド呼び出しとは独立して処理されます。

- {{domxref("SVGSVGElement.unsuspendRedraw()")}} {{Deprecated_Inline}}
  - : 指定された `suspendRedraw()` をキャンセルします。これには、以前の `suspendRedraw()` 呼び出しで返された一意のサスペンドハンドル ID を指定します。
- {{domxref("SVGSVGElement.unsuspendRedrawAll()")}} {{Deprecated_Inline}}
  - : 現在アクティブなすべての `suspendRedraw()` メソッド呼び出しをキャンセルします。このメソッドは、一連の SVG DOM 呼び出しの最終段階で、保留中の `suspendRedraw()` メソッド呼び出しがすべてキャンセルされたことを保証するために最も有用です。
- {{domxref("SVGSVGElement.forceRedraw()")}} {{Deprecated_Inline}}
  - : インタラクティブ性をサポートするレンダリング環境において、ユーザーエージェントに対し、更新が必要なビューポートの全領域を直ちに再描画するよう強制します。
- {{domxref("SVGSVGElement.pauseAnimations()")}}
  - : この {{SVGElement("svg")}} 要素に対応する SVG 文書フラグメント内で定義されている、現在実行中のすべてのアニメーションを一時停止（すなわち、一時停止）します。これにより、この文書フラグメントに対応するアニメーションクロックは、一時停止が解除されるまで停止したままになります。
- {{domxref("SVGSVGElement.unpauseAnimations()")}}
  - : SVG 文書フラグメント内で定義されたアニメーションを再開（一時停止解除）し、アニメーションクロックを一時停止した時点から継続させます。
- {{domxref("SVGSVGElement.animationsPaused()")}}
  - : この SVG 文書フラグメントが一時停止状態にある場合、`true` を返します。
- {{domxref("SVGSVGElement.getCurrentTime()")}}
  - : 現在の SVG 文書フラグメントの開始時刻からの相対的な秒単位の現在時刻を返します。 文書のタイムラインが開始される前に `getCurrentTime()` が呼び出された場合（例えば、文書の `SVGLoad` イベントが配信される前に {{SVGElement("script")}} 要素内でスクリプトが実行される場合）、`0` が返されます。
- {{domxref("SVGSVGElement.setCurrentTime()")}}
  - : この SVG 文書フラグメントの時計を調整し、新しい現在の時点を設定します。文書のタイムラインが開始される前に `setCurrentTime()` が呼び出された場合（例：文書の `SVGLoad` イベントが配信される前に {{SVGElement("script")}} 要素内でスクリプトが実行される場合）、このメソッドの最終呼び出しにおける秒数の値が、文書のタイムライン開始後に文書が到達しようとする時刻となります。
- {{domxref("SVGSVGElement.getIntersectionList()")}}
  - : 指定された矩形と描画コンテンツが交差するグラフィック要素の候補の {{domxref("NodeList")}} を返します。各グラフィック要素の候補は、{{SVGAttr("pointer-events")}} 処理で定義されるポインターイベントの対象となり得る場合のみ、一致したとみなさなされます。
- {{domxref("SVGSVGElement.getEnclosureList()")}}
  - : 指定された矩形内に完全に含まれる描画済みコンテンツを持つグラフィック要素の {{domxref("NodeList")}} を返します。各グラフィック要素の候補は、{{SVGAttr("pointer-events")}} 処理で定義されるポインターイベントの対象となり得る場合のみ、一致するものと見なされます。
- {{domxref("SVGSVGElement.checkIntersection()")}}
  - : 指定された要素の描画済みコンテンツが渡された矩形と交差する場合に `true` を返します。各グラフィック要素の候補は、 {{SVGAttr("pointer-events")}} 処理で定義されるポインターイベントの対象となり得る場合のみ一致するものと考えることができます。
- {{domxref("SVGSVGElement.checkEnclosure()")}}
  - : 指定された要素のレンダリング済みコンテンツが、渡された矩形内に完全に収まっている場合に `true` を返します。各グラフィック要素の候補は、{{SVGAttr("pointer-events")}} 処理で定義されるポインターイベントの対象となり得る場合のみ、一致するものと見なされます。
- {{domxref("SVGSVGElement.deselectAll()")}}
  - : 選択されているすべてのオブジェクト（テキスト文字列や入力バーの選択範囲を含む）の選択を解除します。
- {{domxref("SVGSVGElement.createSVGNumber()")}}
  - : {{domxref("SVGNumber")}} オブジェクトを文書ツリーの外側に作成します。このオブジェクトは `0` で初期化されます。
- {{domxref("SVGSVGElement.createSVGLength()")}}
  - : {{domxref("SVGLength")}} オブジェクトを文書ツリーの外側に作成します。このオブジェクトは `0` ユーザー単位で初期化されます。
- {{domxref("SVGSVGElement.createSVGAngle()")}}
  - : {{domxref("SVGAngle")}} オブジェクトを文書ツリーの外側に作成します。このオブジェクトは `0` 度の値（単位なし）で初期化されます。
- {{domxref("SVGSVGElement.createSVGPoint()")}}
  - : {{domxref("DOMPoint")}} オブジェクトを文書ツリーの外側に作成します。このオブジェクトはユーザー座標系の点 `(0,0)` で初期化されます。
- {{domxref("SVGSVGElement.createSVGMatrix()")}}
  - : {{domxref("DOMMatrix")}} オブジェクトを文書ツリーの外側に作成します。このオブジェクトは単位行列で初期化されます。
- {{domxref("SVGSVGElement.createSVGRect()")}}
  - : {{domxref("SVGRect")}} オブジェクトを文書ツリーの外側に作成します。このオブジェクトはすべての値が `0` ユーザー単位になるように初期化されます。
- {{domxref("SVGSVGElement.createSVGTransform()")}}
  - : {{domxref("SVGTransform")}} オブジェクトを文書ツリーの外側に作成します。このオブジェクトは単位変換行列 (`SVG_TRANSFORM_MATRIX`) で初期化されます。
- {{domxref("SVGSVGElement.createSVGTransformFromMatrix()")}}
  - : {{domxref("SVGTransform")}} オブジェクトを文書ツリーの外側に作成します。オブジェクトは指定された行列変換（つまり `SVG_TRANSFORM_MATRIX`）で初期化されます。引数の行列の値はコピーされますが、行列引数は `SVGTransform::matrix` として採用されません。
- {{domxref("SVGSVGElement.getElementById()")}}
  - : この SVG 文書フラグメントから、`elementId` で指定された `id` を持つ要素を検索します（つまり、検索は文書ツリーのサブセットに制限されます）。該当する要素が見つかった場合、その要素が返されます。該当する要素が存在しない場合、`null` を返します。複数の要素がこのIDを持つ場合、動作は定義されていません。

## イベントハンドラー

以下の {{domxref("Window")}} `onXYZ` イベントハンドラープロパティは、`window` オブジェクトを対象とする別名としても利用可能です。ただし、`SVGSVGElement` ではなく `window` オブジェクト上で直接これらのイベントを監視することを推奨します。

> [!NOTE]
> `addEventListener()` を `SVGSVGElement` に対して使用しても、以下に示した `onXYZ` イベントハンドラーは動作しません。代わりに {{domxref("window")}} オブジェクトでイベントを待ち受けしてください。

- {{domxref("window.afterprint_event", "SVGSVGElement.onafterprint")}}
  - : 関連付けられた文書の印刷が開始された後、または印刷プレビューが閉じられた後に発生します。
- {{domxref("window.beforeprint_event", "SVGSVGElement.onbeforeprint")}}
  - : 関連付けられた文書が印刷される直前、または印刷プレビューされる直前に発生します。
- {{domxref("window.beforeunload_event", "SVGSVGElement.onbeforeunload")}}
  - : ウィンドウ、文書、およびそのリソースがアンロードされようとする際に発生します。
- {{domxref("window.gamepadconnected_event", "SVGSVGElement.ongamepadconnected")}}
  - : ブラウザーがゲームパッドの接続を検知したとき、またはゲームパッドのボタン/軸が最初に使用された時点で発行されます。
- {{domxref("window.gamepaddisconnected_event", "SVGSVGElement.ongamepaddisconnected")}}
  - : ブラウザーがゲームパッドの切断を検出した際に発生します。
- {{domxref("window.hashchange_event", "SVGSVGElement.onhashchange")}}
  - : URL のフラグメント識別子（`#` 記号で始まる URL の一部）が変更されたときに発行されます。
- {{domxref("window.languagechange_event", "SVGSVGElement.onlanguagechange")}}
  - : ユーザーの優先言語が変更されたときに発行されます。
- {{domxref("window.message_event", "SVGSVGElement.onmessage")}}
  - : ウィンドウがメッセージを受信した際に発行されます。例えば、別の閲覧コンテキストからの [`Window.postMessage()`](/ja/docs/Web/API/Window/postMessage) の呼び出しなどです。
- {{domxref("window.messageerror_event", "SVGSVGElement.onmessageerror")}}
  - : ウィンドウがデシリアライズできないメッセージを受信したときに発行されます。
- {{domxref("window.offline_event", "SVGSVGElement.onoffline")}}
  - : ブラウザーがネットワークへアクセスでなくなり、{{domxref("Navigator.onLine")}} の値が `false` に切り替わったときに発行されます。
- {{domxref("window.online_event", "SVGSVGElement.ononline")}}
  - : ブラウザーがネットワークにアクセスできるようになり、{{domxref("Navigator.onLine")}} の値が `true` に切り替わったときに発行されます。
- {{domxref("window.pagehide_event", "SVGSVGElement.onpagehide")}}
  - : セッションの履歴から別のページを表示する過程で、ブラウザーが現在のページを非表示にしたときに発行されます。
- {{domxref("window.pageshow_event", "SVGSVGElement.onpageshow")}}
  - : ブラウザーがナビゲーションによりウィンドウの文書を表示させた際に発行されます。
- {{domxref("window.popstate_event", "SVGSVGElement.onpopstate")}}
  - : ユーザーがセッション履歴を移動中にアクティブな履歴項目が変更されたときに発行されます。
- {{domxref("window.rejectionhandled_event", "SVGSVGElement.onrejectionhandled")}}
  - : JavaScriptの {{jsxref("Promise")}} が拒否され、その拒否が処理された際に発行されます。
- {{domxref("window.storage_event", "SVGSVGElement.onstorage")}}
  - : 別の文書のコンテキスト内でストレージ領域 (`localStorage`) が変更された際に発行されます。
- {{domxref("window.unhandledrejection_event", "SVGSVGElement.onunhandledrejection")}}
  - : {{jsxref("Promise")}} が拒否されたが、その拒否が処理されなかった場合に発行されます。
- {{domxref("window.unload_event", "SVGSVGElement.onunload")}}
  - : 文書がアンロードされる際に発行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("circle")}}
