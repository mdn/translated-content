---
title: Window
slug: Web/API/Window
---

{{APIRef("DOM")}}

**`Window`** インターフェイスは、 {{glossary("DOM")}} 文書を収めるウィンドウを表します。 `document` プロパティは、そのウィンドウに読み込まれた [DOM の document オブジェクト](/ja/docs/Web/API/Document) を指します。

特定の文書が属するウィンドウは、 {{domxref("document.defaultView")}} プロパティを使用して取得できます。

グローバル変数の `window` は、スクリプトを実行しているウィンドウを表しており、 JavaScript コードに公開されます。

`Window` インターフェイスは、ユーザーインターフェイスのウィンドウの概念とは必ずしも直接関連づかない、さまざまな関数、名前空間、オブジェクト、コンストラクターのホームです。一方、 `Window` インターフェイスはグローバルで使用可能であることが必要な、さまざまなアイテムを含むのに適した場所です。これらの多くは [JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference) や [DOM リファレンス](/ja/docs/Web/API/Document_Object_Model) で文書化しています。

タブブラウザーでは、それぞれのタブが個々の `Window` オブジェクトで表されます。タブ内で実行している JavaScript から見えるグローバルの `window` は、常にコードを実行しているタブを表します。しかし、タブブラウザーであっても {{Domxref("Window.resizeTo", "resizeTo()")}} や {{Domxref("Window.innerHeight", "innerHeight")}} のように、タブを含むウィンドウ全体に適用されるプロパティやメソッドがあります。一般に、タブに所属することができない合理的な理由があるものは、代わりにウィンドウに属します。

{{InheritanceDiagram}}

## コンストラクター

[DOM インターフェイス](/ja/docs/Web/API/Document_Object_Model)もご覧ください。

- {{domxref("DOMParser")}}
  - : `DOMParser` は文字列で保存された XML や HTML ソースを DOM [Document](/ja/docs/Web/API/Document) に解釈することができます。 `DOMParser` は [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/) で定められています。
- {{domxref("Image")}}
  - : {{domxref("HTMLImageElement")}} を生成します。
- {{domxref("Option")}}
  - : {{domxref("HTMLOptionElement")}} を生成します。
- {{domxref("StaticRange")}} {{experimental_inline}} {{readonlyinline}}
  - : {{domxref('StaticRange')}} オブジェクトを作成する {{domxref('StaticRange.StaticRange','StaticRange()')}} コンストラクターを返します。
- {{domxref("Worker")}}
  - : [ウェブワーカー](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)を生成します。
- {{domxref("XMLSerializer")}}
  - : DOM ツリーを XML または HTML ソースに変換します。

## プロパティ

_このインターフェイスは {{domxref("EventTarget")}} インターフェイスからプロパティを継承しています。_

オブジェクトであるプロパティ（例えば、組み込み要素のプロトタイプを上書きするためのもの）は、後述の個別セクションに記載しています。

- {{domxref("Window.navigator", "Window.clientInformation")}} {{readOnlyInline}}
  - : {{domxref("Window.navigator")}} の別名です。
- {{domxref("Window.closed")}} {{readOnlyInline}}
  - : このプロパティは、現在のウィンドウが閉じているかどうかを示します。
- {{domxref("Window.console")}} {{ReadOnlyInline}}
  - : ブラウザーのデバッグコンソールへアクセスするための console オブジェクトへの参照を返します。
- {{domxref("Window.customElements")}} {{ReadOnlyInline}}
  - : {{domxref("CustomElementRegistry")}} オブジェクトへの参照を返します。これは新しい[カスタム要素](/ja/docs/Web/Web_Components/Using_custom_elements)の登録や、以前に登録したカスタム要素の情報を取得するために使用できます。
- {{domxref("crypto_property", "Window.crypto")}} {{readOnlyInline}}
  - : ブラウザーの crypto オブジェクトを返します。
- {{domxref("Window.devicePixelRatio")}} {{ReadOnlyInline}}
  - : 現在のディスプレイの、物理ピクセルと端末非依存ピクセルの比率を返します。
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : 指定ウィンドウにある文書への参照を返します。
- {{domxref("Window.event")}} {{deprecated_inline}} {{readOnlyInline}}
  - : **現在のイベント**を返します。これは現在 JavaScript のコードのコンテキストが処理しているイベントです。また、現在処理しているイベントがない場合は `undefined` を返します。可能な限り、イベントハンドラーに直接渡した {{domxref("Event")}} オブジェクトを代わりに使用してください。
- {{domxref("Window.external")}} {{deprecated_inline}} {{readOnlyInline}}
  - : 外部の検索プロバイダーをブラウザーに追加するための関数を持つオブジェクトを返します。
- {{domxref("Window.frameElement")}} {{readOnlyInline}}
  - : ウィンドウが埋め込まれた要素を返します。ウィンドウが埋め込まれていない場合は、 null を返します。
- {{domxref("Window.frames")}} {{readOnlyInline}}
  - : 現在のウィンドウでのサブフレームの配列を返します。
- {{domxref("Window.fullScreen")}}
  - : このプロパティはウィンドウが全画面で表示されているかどうかを示します。
- {{domxref("Window.history")}} {{readOnlyInline}}
  - : history オブジェクトへの参照を返します。
- {{domxref("Window.innerHeight")}} {{readOnlyInline}}
  - : ブラウザーウィンドウのコンテンツ領域の高さを取得し、もしあれば、水平スクロールバーを含みます。
- {{domxref("Window.innerWidth")}} {{readOnlyInline}}
  - : ブラウザーウィンドウのコンテンツ領域の幅を取得し、もしあれば、垂直スクロールバーを含みます。
- {{domxref("isSecureContext")}} {{experimental_inline}} {{readOnlyInline}}
  - : コンテキストが、安全なコンテキストを必要とする機能を使用することができるかどうかを表します。
- {{domxref("Window.length")}} {{readOnlyInline}}
  - : ウィンドウ内のフレームの数を返します。 {{domxref("window.frames")}} も参照してください。
- {{domxref("Window.location")}}
  - : window オブジェクトのロケーション、または現在の URL を取得 / 設定します。
- {{domxref("Window.locationbar")}} {{ReadOnlyInline}}
  - : ウィンドウ内で表示 / 非表示の切り替え (トグル) が可能な locationbar オブジェクトを返します。
- {{domxref("Window.localStorage")}} {{readOnlyInline}}
  - : 生成元のオリジンからのみアクセスが可能なデータを保存するために使用する、ローカルストレージオブジェクトへの参照を返します。
- {{domxref("Window.menubar")}} {{ReadOnlyInline}}
  - : ウィンドウ内で表示 / 非表示の切り替え (トグル) が可能な menubar オブジェクトを返します。
- {{domxref("Window.messageManager")}} {{non-standard_inline}}
  - : このウィンドウの [message manager](/ja/docs/The_message_manager) オブジェクトを返します。
- {{domxref("Window.mozInnerScreenX")}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : スクリーン座標系でウィンドウのビューポートの左上隅の水平 (X) 座標を返します。この値は CSS ピクセルで表します。必要に応じて画面のピクセルに換算するための係数については、`nsIDOMWindowUtils` の `mozScreenPixelsPerCSSPixel` をご覧ください。
- {{domxref("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : スクリーン座標系で、ウィンドウビューポートの左上隅の垂直 (Y) 座標を返します。この値は CSS ピクセルで表します。必要に応じて画面のピクセルに換算するための係数については `mozScreenPixelsPerCSSPixel` をご覧ください。
- {{domxref("Window.name")}}
  - : ウィンドウ名を取得 / 設定します。
- {{domxref("Window.navigator")}} {{readOnlyInline}}
  - : navigator オブジェクトへの参照を返します。
- {{domxref("Window.opener")}}
  - : 現在のウィンドウを開いたウィンドウへの参照を返します。
- {{domxref("Window.outerHeight")}} {{readOnlyInline}}
  - : ブラウザーウィンドウの外側の高さを取得します。
- {{domxref("Window.outerWidth")}} {{readOnlyInline}}
  - : ブラウザーウィンドウの外側の幅を取得します。
- {{domxref("Window.scrollX","Window.pageXOffset")}} {{readOnlyInline}}
  - : {{domxref("window.scrollX")}} のエイリアスです。
- {{domxref("Window.scrollY","Window.pageYOffset")}} {{readOnlyInline}}
  - : {{domxref("window.scrollY")}} のエイリアスです。
- {{domxref("Window.parent")}} {{readOnlyInline}}
  - : 現在のウィンドウまたはサブフレームの親ウィンドウへの参照を返します。
- {{domxref("Window.performance")}} {{readOnlyInline}}
  - : {{domxref("Performance")}} オブジェクトを返します。これは {{domxref("Performance.timing", "timing")}} や {{domxref("Performance.navigation", "navigation")}} 属性が含まれており、それぞれが [パフォーマンス関連](/ja/docs/Navigation_timing) のデータを提供するオブジェクトです。詳細情報や使用例は[ナビゲーションタイミングの使用](/ja/docs/Web/API/Navigation_timing_API/Using_Navigation_Timing)をご覧ください。
- {{domxref("Window.personalbar")}} {{readOnlyInline}}
  - : ウィンドウ内で表示/非表示の切り替え (トグル) が可能な、 personalbar オブジェクトを返す
- {{domxref("Window.screen")}} {{readOnlyInline}}
  - : ウィンドウに関連付けられた screen オブジェクトへの参照を返す
- {{domxref("Window.screenX")}} および {{domxref("Window.screenLeft")}} {{readOnlyInline}}
  - : どちらのプロパティも、ユーザーのブラウザーのビューポートの左端から画面の左端までの水平方向の距離を返します。
- {{domxref("Window.screenY")}} および {{domxref("Window.screenTop")}} {{readOnlyInline}}
  - : どちらのプロパティも、ユーザーのブラウザーのビューポートの上端から画面の上端までの垂直方向の距離を返します。
- {{domxref("Window.scrollbars")}} {{readOnlyInline}}
  - : ウィンドウ内で表示 / 非表示の切り替え (トグル) が可能な、 scrollbars オブジェクトを返す
- {{domxref("Window.scrollMaxX")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : ウィンドウが水平スクロールされ得る最大オフセット、すなわち、文書の幅からビューポートの幅を引いたものです。
- {{domxref("Window.scrollMaxY")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : ウィンドウが垂直スクロールされ得る最大オフセット (すなわち、文書の高さからビューポートの高さを引いたもの) です。
- {{domxref("Window.scrollX")}} {{readOnlyInline}}
  - : 文書が現在水平にスクロールされているピクセル数を返します。
- {{domxref("Window.scrollY")}} {{readOnlyInline}}
  - : 文書が現在垂直にスクロールされているピクセル数を返します。
- {{domxref("Window.self")}} {{ReadOnlyInline}}
  - : window オブジェクト自身へのオブジェクト参照を返す
- {{domxref("Window.sessionStorage")}}
  - : 生成元のオリジンからのみアクセスが可能なデータを保存するために使用する、セッションストレージへの参照を返します。
- {{domxref("Window.sidebar")}} {{deprecated_inline}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : サイドバーの window オブジェクトへの参照を返します。
- {{domxref("Window.speechSynthesis")}} {{ReadOnlyInline}}
  - : {{domxref("SpeechSynthesis")}} オブジェクトを返します。これは、[ウェブ発声 API](/ja/docs/Web/API/Web_Speech_API) の音声合成機能を使用するためのエントリーポイントです。
- {{domxref("Window.status")}} {{deprecated_inline}}
  - : ブラウザー下部のステータスバーのテキストを取得 / 設定します。
- {{domxref("Window.statusbar")}} {{readOnlyInline}}
  - : ウィンドウ内で表示 / 非表示の切り替え (トグル) が可能な statusbar オブジェクトを返します。
- {{domxref("Window.toolbar")}} {{readOnlyInline}}
  - : ウィンドウ内で表示 / 非表示の切り替え (トグル) が可能な toolbar オブジェクトを返します。
- {{domxref("Window.top")}} {{readOnlyInline}}
  - : ウィンドウ階層における最上位のウィンドウへの参照を返します。このプロパティは読み取り専用です。
- {{domxref("Window.visualViewport")}} {{readOnlyInline}}
  - : 指定したウィンドウの視覚的なビューポートを表す {{domxref("VisualViewport")}} オブジェクトを返します。
- {{domxref("Window.window")}} {{ReadOnlyInline}}
  - : 現在のウィンドウへの参照を返します。
- `window[0]`、`window[1]` など
  - : フレーム内の `window` オブジェクトへの参照を返します。詳しくは {{domxref("Window.frames")}} をご覧ください。

### 他のところで実装されているプロパティ

- {{domxref("caches")}} {{readOnlyinline}}
  - : 現在のコンテキストに関連付けられた {{domxref("CacheStorage")}} オブジェクトを返します。このオブジェクトはオフラインで使用する資産を格納したり、リクエストに対して独自のレスポンスを生成したりするような機能が利用できます。
- {{domxref("indexedDB")}} {{readonlyInline}}
  - : Indexed データベースにアプリケーションが非同期にアクセスできる仕組みを提供します。このプロパティは {{domxref("IDBFactory")}} オブジェクトを返します。
- {{domxref("origin")}} {{readOnlyinline}}
  - : グローバルオブジェクトのオリジンを、文字列としてシリアライズして返します。
- {{domxref("Window.scheduler")}} {{readOnlyInline}}
  - : 現在のコンテキストに関連付けられた {{domxref("Scheduler")}} オブジェクトを返します。
    この点は、[優先タスクスケジューリング API](/ja/docs/Web/API/Prioritized_Task_Scheduling_API) を使用するためのエントリーポイントです。

### 廃止されたプロパティ

- {{domxref("Window.content")}} および `Window._content` {{Non-standard_inline}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : 現在のウィンドウでのコンテンツ要素への参照を返します。 Firefox 57 より (当初は Nightly のみ) どちらも chrome (特権付き) コードに限り使用でき、ウェブでは使用できません。
- {{domxref("Window.defaultStatus")}} {{deprecated_inline}}
  - : 指定ウィンドウのステータスバーのテキストを取得 / 設定
- {{domxref("Window.orientation")}} {{readOnlyInline}} {{deprecated_inline}}
  - : {{domxref("window.personalbar")}} と同義
- {{domxref("Window.returnValue")}} {{deprecated_inline}}
  - : ウィンドウをモーダルダイアログとして表示する {{domxref("window.showModalDialog()")}} メソッドを呼び出した関数へ返却される返値です。

## メソッド

_このインターフェイスは {{domxref("EventTarget")}} インターフェイスからメソッドを継承しています。_

- {{domxref("Window.alert()")}}
  - : 警告ダイアログを表示します。
- {{domxref("Window.blur()")}}
  - : ウィンドウからフォーカスを外します。
- {{domxref("Window.cancelAnimationFrame()")}} {{experimental_inline}}
  - : {{domxref("Window.requestAnimationFrame")}} によって過去にスケジューリングされたコールバックをキャンセルできます。
- {{domxref("Window.cancelIdleCallback()")}} {{experimental_inline}}
  - : {{domxref("Window.requestIdleCallback")}} によって過去にスケジューリングされたコールバックをキャンセルできます。
- {{domxref("Window.clearImmediate()")}}
  - : `setImmediate` で設定した繰り返し処理をキャンセルします。
- {{domxref("Window.close()")}}
  - : 現在のウィンドウを閉じます。
- {{domxref("Window.confirm()")}}
  - : ユーザーの応答が必要なメッセージを持つダイアログを表示します。
- {{domxref("Window.dump()")}} {{Non-standard_inline}}
  - : コンソールにメッセージを出力します。
- {{domxref("Window.find()")}}
  - : ウィンドウ内で指定された文字列を検索します。
- {{domxref("Window.focus()")}}
  - : 現在のウィンドウにフォーカスを当てます。
- {{domxref("Window.getComputedStyle()")}}
  - : 特定の要素の計算済みスタイルを取得します。計算済みスタイルは、要素のすべての CSS プロパティの計算値を示します。
- {{domxref("Window.getDefaultComputedStyle()")}} {{Non-standard_inline}}
  - : 特定の要素について、作者のスタイルシートを無視したデフォルトの計算済みスタイルを取得します。
- {{domxref("Window.getSelection()")}}
  - : 選択されたアイテムを表す、セレクションオブジェクトを返します。
- {{domxref("Window.matchMedia()")}}
  - : 指定したメディアクエリ文字列を表す {{domxref("MediaQueryList")}} オブジェクトを返します。
- {{domxref("Window.moveBy()")}}
  - : 現在のウィンドウを指定した距離移動します。
- {{domxref("Window.moveTo()")}}
  - : ウィンドウを指定した位置に移動します。
- {{domxref("Window.open()")}}
  - : 新しいウィンドウを開きます。
- {{domxref("Window.postMessage()")}}
  - : あるウィンドウから別のウィンドウへ、安全にデータ文字列を送信する手段を提供します。送信先ウィンドウは、送信元と同じドメインでなくてもかまいません。
- {{domxref("Window.print()")}}
  - : 現在の文書を印刷するためのダイアログを開きます。
- {{domxref("Window.prompt()")}}
  - : ユーザーが入力ダイアログに入力したテキストを返します。
- {{domxref("Window.requestAnimationFrame()")}}
  - : アニメーションが進行中であることをブラウザーに伝えて、次のアニメーションフレームのためにウィンドウの再描画を予定するよう要求します。
- {{domxref("Window.requestIdleCallback()")}} {{experimental_inline}}
  - : ブラウザーがアイドル状態であるときに実行するタスクをスケジューリングします。
- {{domxref("Window.resizeBy()")}}
  - : 現在のウィンドウを、指定した大きさの分だけ変更します。
- {{domxref("Window.resizeTo()")}}
  - : ウィンドウを動的にリサイズします。
- {{domxref("Window.scroll()")}}
  - : ウィンドウを文書内の特定の位置にスクロールします。
- {{domxref("Window.scrollBy()")}}
  - : ウィンドウ内の文書を、指定した距離の分だけスクロールします。
- {{domxref("Window.scrollByLines()")}} {{Non-standard_inline}}
  - : 文書を指定した行数分、スクロールします。
- {{domxref("Window.scrollByPages()")}} {{Non-standard_inline}}
  - : 文書を指定したページ数分、スクロールします。
- {{domxref("Window.scrollTo()")}}
  - : 文書内の特定の位置に、ウィンドウをスクロールします。
- {{domxref("Window.setImmediate()")}} {{Non-standard_inline}}
  - : ブラウザーで他の高負荷なタスクが完了した後に、関数を実行します。
- {{domxref("Window.setResizable()")}} {{Non-standard_inline}}
  - : ユーザーがウィンドウをリサイズできるかを切り替えます。
- {{domxref("Window.sizeToContent()")}} {{Non-standard_inline}}
  - : コンテンツに応じてウィンドウのサイズを調整します。
- {{domxref("Window.showOpenFilePicker()")}}
  - : ユーザーがファイルまたは複数のファイルを選択できるファイルピッカーを表示します。
- {{domxref("Window.showSaveFilePicker()")}}
  - : ユーザーがファイルを保存するためのファイルピッカーを表示します。
- {{domxref("Window.showDirectoryPicker()")}}
  - : ディレクトリーを選択するピッカーが表示されます。
- {{domxref("Window.stop()")}}
  - : ウィンドウの読み込み処理を停止します。
- {{domxref("Window.updateCommands()")}} {{Non-standard_inline}}
  - : 現在の chrome ウィンドウ (UI) のコマンドの状態を更新します。

### 他のところで実装されているメソッド

- {{domxref("EventTarget.addEventListener()")}}
  - : ウィンドウの特定の種類のイベントにイベントハンドラーを登録します。
- {{domxref("EventTarget.dispatchEvent()")}}
  - : イベントを動作させるために使用します。
- {{domxref("atob", "atob()")}}
  - : Base64 エンコーディングを使用してエンコードされたデータの文字列をデコードします。
- {{domxref("btoa", "btoa()")}}
  - : バイナリデータを Base64 でエンコードした ASCII 文字列を生成します。
- {{domxref("clearInterval()")}}
  - : {{domxref("setInterval()")}} で繰り返し実行されるよう設定された命令をキャンセルします。
- {{domxref("clearTimeout()")}}
  - : {{domxref("setTimeout()")}} で遅延実行するよう設定した命令をキャンセルします。
- {{domxref("createImageBitmap()")}}
  - : さまざまな画像ソースを受け入れて、{{domxref("ImageBitmap")}} に解決される {{jsxref("Promise")}} を返します。任意で、始点 _(sx, sy)_ から幅 sw、高さ sh の長方形でソースを切り抜くことができます。
- {{domxref("fetch()")}}
  - : ネットワークからリソースを取り込む処理を開始します。
- {{domxref("EventTarget.removeEventListener()")}}
  - : window からイベントリスナーを削除します。
- {{domxref("setInterval()")}}
  - : ミリ秒単位で指定した時間が経過するたびに関数を実行するようスケジューリングします。
- {{domxref("setTimeout()")}}
  - : 指定した時間が経過したら関数を実行するようスケジューリングします。
- {{domxref("reportError()")}}
  - : 処理されない例外をエミュレートして、スクリプトのエラーを報告します。

### 廃止されたメソッド

- {{domxref("Window.back()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : ウィンドウの履歴をひとつ戻ります。このメソッドは廃止されました。代わりに {{domxref("History.back", "window.history.back()")}} を使用してください。
- {{domxref("Window.captureEvents()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : 特定のタイプのイベントをすべてキャプチャするよう、ウィンドウに登録します。
- {{domxref("Window.forward()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : 履歴でひとつ先の文書に移動します。このメソッドは廃止されました。代わりに {{domxref("History.forward", "window.history.forward()")}} を使用してください。
- {{domxref("Window.home()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : ブラウザーのホームページに戻ります。
- {{domxref("Window.openDialog()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : 新しいダイアログウィンドウを開きます。
- {{domxref("Window.releaseEvents()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : 特定のタイプのイベントのキャプチャを解放します。
- {{domxref("Window.showModalDialog()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : モーダルダイアログを表示します。

## イベントハンドラー

これらは window オブジェクトのプロパティで、ウィンドウで発生する可能性がある、関心事となる可能性がある様々な出来事に対するイベントハンドラーを設定して有効にすることができます。

_このインターフェイスは、 {{domxref("EventTarget")}} インターフェイスからイベントハンドラーを継承しています。_

- {{domxref("Window.onuserproximity")}} {{deprecated_inline}}
  - : ユーザーの近接イベントのためのイベントハンドラープロパティです（{{domxref("UserProximityEvent")}} を参照してください）。

### 他で実装されているイベントハンドラー

- {{domxref("GlobalEventHandlers.onabort")}}
  - : ユーザーが読み込み処理中にキャンセルしたなど、リソースの読み込みが異常終了した際に呼び出されます。
- {{domxref("GlobalEventHandlers.oncontextmenu")}}
  - : 右マウスボタンを押したときに呼び出されます。
- {{domxref("GlobalEventHandlers.onerror")}}
  - : リソースの読み込みが失敗したとき、あるいは実行時にエラーが発生したときに呼び出されます。 {{domxref("Window/error_event", "error")}} イベントをご覧ください。
- {{domxref("GlobalEventHandlers.onload")}}
  - : すべてのリソースおよび DOM が完全に読み込まれた後に呼び出されます。戻るボタンなどで、キャッシュからページが読み込まれたときは呼び出されません。

## イベント

これらのイベントを待ち受けするには、 [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用するか、イベントリスナーをこのインターフェイスの `onイベント名` プロパティに代入するかしてください。

- {{domxref("Window/error_event", "error")}}
  - : リソースの読み込みに失敗したか、利用できないときに発生します。例えば、スクリプトに実行エラーがあった場合や、画像が見つからなかったり、向こうであったりした場合です。
    {{domxref("GlobalEventHandlers/onerror", "onerror")}} プロパティからも利用できます。
- {{domxref("Window/languagechange_event", "languagechange")}}
  - : ユーザーの推奨される言語が変更されたときに、グローバルスコープオブジェクトに発生します。
- {{domxref("Window/orientationchange_event", "orientationchange")}} {{deprecated_inline}}
  - : 端末の向きが変化したときに発生します。
- {{domxref("Window.devicemotion_event", "devicemotion")}}
  - : 定期的に発生し、利用できる場合は、端末にかかっている物理的な加速度の量と傾きを示します。
- {{domxref("Window.deviceorientation_event", "deviceorientation")}}
  - : 現在の端末の向きを地球の座標軸と比較する時期包囲センサーから新しいデータが利用できるようになったときに発生します。
- {{domxref("Window/resize_event", "resize")}}
  - : ウィンドウのサイズが変更されたときに発行されます。
    {{domxref("GlobalEventHandlers/onresize", "onresize")}} プロパティからも利用できます。
- {{domxref("Window/storage_event", "storage")}}
  - : ストレージ領域 (`localStorage` または `sessionStorage`) が他の文書のコンテキストから変更されたときに発生します。
- {{domxref("Window.vrdisplayconnect_event", "vrdisplayconnect")}} {{deprecated_inline}}
  - : 対応する VR 機器が接続されている場合に発行されます。
- {{domxref("Window.vrdisplaydisconnect_event", "vrdisplaydisconnect")}} {{deprecated_inline}}
  - : 対応する VR 機器がコンピューターから切り離されたときに発行されます。
- {{domxref("Window.vrdisplayactivate_event", "vrdisplayactivate")}} {{deprecated_inline}}
  - : ディスプレイが表示できるようになったときに発行されます。
- {{domxref("Window.vrdisplaydeactivate_event", "vrdisplaydeactivate")}} {{deprecated_inline}}
  - : ディスプレイが表示されなくなったときに発行されます。
- {{domxref("Window.vrdisplayblur_event", "vrdisplayblur")}} {{deprecated_inline}}
  - : ブラウザー、OS、VR ハードウェアの何らかの理由でディスプレイへの表示が一時停止されたときに発行されます。
- {{domxref("Window.vrdisplayfocus_event", "vrdisplayfocus")}} {{deprecated_inline}}
  - : 不鮮明であったディスプレイへの表示が再開されたときに発行されます。
- {{domxref("Window.vrdisplaypresentchange_event", "vrdisplaypresentchange")}} {{deprecated_inline}}
  - : VR 機器の表示状態が変化したとき（表示から非表示、または非表示から非表示になったとき）に発行されます。

### アニメーションイベント

- {{domxref("Window/animationcancel_event", "animationcancel")}}
  - : アニメーションが予期せず中断されたときに発生します。
    {{domxref("GlobalEventHandlers/onanimationcancel", "onanimationcancel")}} プロパティからも利用できます。
- {{domxref("Window/animationend_event", "animationend")}}
  - : アニメーションが正常に終了したときに発生します。
    {{domxref("GlobalEventHandlers/onanimationend", "onanimationend")}} プロパティからも利用できます。
- {{domxref("Window/animationiteration_event", "animationiteration")}}
  - : アニメーションが一巡したときに発生します。
    {{domxref("GlobalEventHandlers/onanimationiteration", "onanimationiteration")}} プロパティからも利用できます。
- {{domxref("Window/animationstart_event", "animationstart")}}
  - : アニメーションが開始されたときに発生します。
    {{domxref("GlobalEventHandlers/onanimationstart", "onanimationstart")}} プロパティからも利用できます。

### クリップボードイベント

- {{domxref("Window/copy_event", "copy")}}
  - : ブラウザーのユーザーインターフェイスからユーザーがコピー操作を行ったときに発生します。
    {{domxref("HTMLElement/oncopy", "oncopy")}} プロパティからも利用できます。
- {{domxref("Window/cut_event", "cut")}}
  - : ブラウザーのユーザーインターフェイスからユーザーが切り取り操作を行ったときに発生します。
    {{domxref("HTMLElement/oncut", "oncut")}} プロパティからも利用できます。
- {{domxref("Window/paste_event", "paste")}}
  - : ブラウザーのユーザーインターフェイスからユーザーが貼り付け操作を行ったときに発生します。
    {{domxref("HTMLElement/onpaste", "onpaste")}} プロパティからも利用できます。

### 接続イベント

- {{domxref("Window/offline_event", "offline")}}
  - : ブラウザーがネットワークへのアクセスから切断され、 `navigator.onLine` の値が `false` に変わったときに発生します。
- {{domxref("Window/online_event", "online")}}
  - : ブラウザーがネットワークへのアクセスに接続され、 `navigator.onLine` の値が `true` に変わったときに発生します。

### フォーカスイベント

- {{domxref("Window/blur_event", "blur")}}
  - : 要素がフォーカスを失ったときに発生します。
    {{domxref("GlobalEventHandlers/onblur", "onblur")}} プロパティからも利用できます。
- {{domxref("Window/focus_event", "focus")}}
  - : 要素がフォーカスを得たときに発生します。
    {{domxref("GlobalEventHandlers/onfocus", "onfocus")}} プロパティからも利用できます。

### ゲームパッドイベント

- {{domxref("Window/gamepadconnected_event", "gamepadconnected")}}
  - : ゲームパッドが接続された、またはゲームパッドのボタンや軸が初めて使用されたことをブラウザーが検出したときに発生します。
- {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}}
  - : ゲームパッドが切断されたことをブラウザーが検出したときに発生します。

### 履歴イベント

- {{domxref("Window/hashchange_event", "hashchange")}}
  - : URL のフラグメント識別子 (URL の中で `#` 記号で始まり、それに続く部分) が変化したときに発生します。
- {{domxref("Window/pagehide_event", "pagehide")}}
  - : ブラウザーが現在の文書を非表示にして、その場所にセッションの履歴とは異なる文書を表示するよう切り替えているときに送信されます。これはたとえば、ユーザーが「戻る」ボタンをクリックしたとき、または「進む」ボタンをクリックしてセッション履歴を先に進めたときに発生します。
- {{domxref("Window/pageshow_event", "pageshow")}}
  - : ページが最初に読み込まれたときだけでなく、ユーザーが同じタブ内で別のページに移動した後にページに戻ったときなど、ナビゲーションタスクのためにブラウザーが文書を表示するときに送信されます。
- {{domxref("Window/popstate_event", "popstate")}}
  - : アクティブな履歴項目が変化したときに発生します。

### ロード・アンロードイベント

- {{domxref("Window/beforeunload_event", "beforeunload")}}
  - : ウィンドウ、文書、そのリソースがアンロードされるときに発生します。
- {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}
  - : 文書が完全に読み込まれて解析されたときに、スタイルシート、画像、サブフレームの読み込みが完了するのを待たずに発生します。
- {{domxref("Window/load_event", "load")}}
  - : スタイルシートや画像などの依存するすべてのリソースを含め、ページ全体の読み込みが完了したときに発生します。
    {{domxref("GlobalEventHandlers/onload", "onload")}} プロパティからも利用できます。
- {{domxref("Window/unload_event", "unload")}}
  - : 文書や子リソースがアンロードされるときに発生します。

### マニフェストイベント

- {{domxref("Window/appinstalled_event", "appinstalled")}}
  - : ブラウザーがページをアプリケーションとしてインストールすることに成功したときに発生します。
- {{domxref("Window/beforeinstallprompt_event", "beforeinstallprompt")}}
  - : ウェブアプリケーションをインストールすることをユーザーに問い合わせようとするときに発生します。

### メッセージイベント

- {{domxref("Window/message_event", "message")}}
  - : ウィンドウがメッセージを受け取ったとき、例えば他のブラウザーのコンテキストから {{domxref("Window/postMessage", "Window.postMessage()")}} が呼び出された時に発生します。
- {{domxref("Window/messageerror_event", "messageerror")}}
  - : `Window` オブジェクトが復元できないメッセージを受信したときに発生します。

### 印刷イベント

- {{domxref("Window/afterprint_event", "afterprint")}}
  - : 関連づけられた文書の印刷が始まったか、印刷プレビューが閉じた後に発生します。
- {{domxref("Window/beforeprint_event", "beforeprint")}}
  - : 関連づけられた文書の印刷が始まるか、印刷プレビューが表示されるときに発生します。

### プロミス拒否イベント

- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
  - : 拒否を処理するハンドラーがあるかどうかにかかわらず、 JavaScript の {{jsxref("Promise")}} が拒否されるたびに送られます。
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
  - : JavaScript の {{jsxref("Promise")}} が拒否されたものの、拒否を処理するハンドラーがないときに送られます。

### トランジションイベント

- {{domxref("Window/transitioncancel_event", "transitioncancel")}}
  - : [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)が中止されたときに発生します。
    {{domxref("GlobalEventHandlers/ontransitioncancel", "ontransitioncancel")}} プロパティからも利用できます。
- {{domxref("Window/transitionend_event", "transitionend")}}
  - : [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)が完了したときに発生します。
    {{domxref("GlobalEventHandlers/ontransitionend", "ontransitionend")}} プロパティからも利用できます。
- {{domxref("Window/transitionrun_event", "transitionrun")}}
  - : [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)が初めて作成されたときに発生します。
    {{domxref("GlobalEventHandlers/ontransitionrun", "ontransitionrun")}} プロパティからも利用できます。
- {{domxref("Window/transitionstart_event", "transitionstart")}}
  - : [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)が実際に開始されたときに発生します。
    {{domxref("GlobalEventHandlers/ontransitionstart", "ontransitionstart")}} プロパティからも利用できます。

### WebVR イベント

- {{domxref("Window/vrdisplayactivate_event", "vrdisplayactivate")}}
  - : VR ディスプレイが表示する準備ができたとき、例えば HMD がスタンバイ状態に移行したり、装着して準備ができたときに発生します。
    {{domxref("Window/onvrdisplayactivate", "onvrdisplayactivate")}} プロパティからも利用できます。
- {{domxref("Window/vrdisplayblur_event", "vrdisplayblur")}}
  - : ブラウザー、 OS、 VR ハードウェアの何れかが原因で、 VR ディスプレイの表示が停止したときに発生します。
    {{domxref("Window/onvrdisplayblur", "onvrdisplayblur")}} プロパティからも利用できます。
- {{domxref("Window/vrdisplayconnect_event", "vrdisplayconnect")}}
  - : 互換性のある VR ディスプレイがコンピューターに接続されたときに発生します。
    {{domxref("Window/onvrdisplayconnect", "onvrdisplayconnect")}} プロパティからも利用できます。
- {{domxref("Window/vrdisplaydeactivate_event", "vrdisplaydeactivate")}}
  - : VR ディスプレイが表示をやめる可能性があるとき、例えば HMD が一定時間使用されなかったためにスタンバイまたはスリープモードに入ったときなどに発生します。
    {{domxref("Window/onvrdisplaydeactivate", "onvrdisplaydeactivate")}} プロパティからも利用できます。
- {{domxref("Window/vrdisplaydisconnect_event", "vrdisplaydisconnect")}}
  - : 互換性のある VR ディスプレイがコンピュータから切り離されたときに発生します。
    {{domxref("Window/onvrdisplaydisconnect", "onvrdisplaydisconnect")}} プロパティからも利用できます。
- {{domxref("Window/vrdisplayfocus_event", "vrdisplayfocus")}}
  - : VR ディスプレイへの表示を休んだ後で復帰したときに発生します。
    {{domxref("Window/onvrdisplayfocus", "onvrdisplayfocus")}} プロパティからも利用できます。
- {{domxref("Window/vrdisplaypresentchange_event", "vrdisplaypresentchange")}}
  - : VR ディスプレイの表示状態が変化したときに発生します。 — すなわち、表示を始めたり、表示を消したり、などです。
    {{domxref("Window/onvrdisplaypresentchange", "onvrdisplaypresentchange")}} プロパティからも利用できます。
- {{domxref("Window/vrdisplaypointerrestricted_event", "vrdisplaypointerrestricted")}}
  - : VR ディスプレイのポインター入力の消費が [pointerlocked 要素](/ja/docs/Web/API/Pointer_Lock_API)によって抑止されたときに発生します。
    {{domxref("Window/onvrdisplaypointerrestricted", "onvrdisplaypointerrestricted")}} プロパティからも利用できます。
- {{domxref("Window/vrdisplaypointerunrestricted_event", "vrdisplaypointerunrestricted")}}
  - : VR ディスプレイのポインター入力の消費が [pointerlocked 要素](/ja/docs/Web/API/Pointer_Lock_API)によって抑止が解除されたときに発生します。
    {{domxref("Window/onvrdisplaypointerunrestricted", "onvrdisplaypointerunrestricted")}} プロパティからも利用できます。

## インターフェイス

[DOM リファレンス](/ja/docs/Web/API/Document_Object_Model)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
