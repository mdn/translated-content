---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: dd3048a4eb74a53395c9a2015baefaa46ef77a56
---

{{APIRef("DOM")}}

**`Window`** インターフェイスは、 {{glossary("DOM")}} 文書を収めるウィンドウを表します。 `document` プロパティは、そのウィンドウに読み込まれた [DOM の document オブジェクト](/ja/docs/Web/API/Document) を指します。

特定の文書が属するウィンドウは、 {{domxref("document.defaultView")}} プロパティを使用して取得できます。

グローバル変数の `window` は、スクリプトを実行しているウィンドウを表しており、 JavaScript コードに公開されます。

`Window` インターフェイスは、ユーザーインターフェイスのウィンドウの概念とは必ずしも直接関連づかない、さまざまな関数、名前空間、オブジェクト、コンストラクターのホームです。一方、 `Window` インターフェイスはグローバルで使用可能であることが必要な、さまざまなアイテムを含むのに適した場所です。これらの多くは [JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference) や [DOM リファレンス](/ja/docs/Web/API/Document_Object_Model) で文書化しています。

タブブラウザーでは、それぞれのタブが個々の `Window` オブジェクトで表されます。タブ内で実行している JavaScript から見えるグローバルの `window` は、常にコードを実行しているタブを表します。しかし、タブブラウザーであっても {{Domxref("Window.resizeTo", "resizeTo()")}} や {{Domxref("Window.innerHeight", "innerHeight")}} のように、タブを含むウィンドウ全体に適用されるプロパティやメソッドがあります。一般に、タブに所属することができない合理的な理由があるものは、代わりにウィンドウに属します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスは {{domxref("EventTarget")}} インターフェイスからプロパティを継承しています。_

オブジェクトであるプロパティ（例えば、組み込み要素のプロトタイプを上書きするためのもの）は、後述の個別セクションに記載しています。

- {{domxref("Window.caches")}} {{ReadOnlyInline}}
  - : 現在のコンテキストに関連付けられた {{domxref("CacheStorage")}} オブジェクトを返します。このオブジェクトはオフラインで使用する資産を格納したり、リクエストに対して独自のレスポンスを生成したりするような機能が利用できます。
- {{domxref("Window.navigator", "Window.clientInformation")}} {{ReadOnlyInline}}
  - : {{domxref("Window.navigator")}} の別名です。
- {{domxref("Window.closed")}} {{ReadOnlyInline}}
  - : このプロパティは、現在のウィンドウが閉じているかどうかを示します。
- {{domxref("Window.console")}} {{ReadOnlyInline}}
  - : ブラウザーのデバッグコンソールへアクセスするための console オブジェクトへの参照を返します。
- {{domxref("Window.cookieStore")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : 現在の文書コンテキストの {{domxref("CookieStore")}} オブジェクトへの参照を返します。
- {{domxref("Window.credentialless")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 現在の文書が 無信頼の {{htmlelement("iframe")}} 内で読み込まれたかどうかを示す論理値を返します。詳しくは[無信頼の iframe](/ja/docs/Web/Security/IFrame_credentialless) を参照してください。
- {{domxref("Window.crossOriginIsolated")}} {{ReadOnlyInline}}
  - : ウェブサイトがオリジン間分離状態にあるかどうかを示す論理値を返します。
- {{domxref("Window.crypto")}} {{ReadOnlyInline}}
  - : グローバルオブジェクトに関連付けられた {{domxref("Crypto")}} オブジェクトを返します。
- {{domxref("Window.customElements")}} {{ReadOnlyInline}}
  - : {{domxref("CustomElementRegistry")}} オブジェクトへの参照を返します。これは新しい[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)の登録や、以前に登録したカスタム要素の情報を取得するために使用できます。
- {{domxref("Window.devicePixelRatio")}} {{ReadOnlyInline}}
  - : 現在のディスプレイの、物理ピクセルと端末非依存ピクセルの比率を返します。
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : 指定ウィンドウにある文書への参照を返します。
- {{domxref("Window.documentPictureInPicture")}} {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : 現在の文書コンテキストの[ピクチャインピクチャ](/ja/docs/Web/API/Document_Picture-in-Picture_API)ウィンドウへの参照を返します。
- {{domxref("Window.fence")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 現在の文書コンテキストの {{domxref("Fence")}} オブジェクトインスタンスを返します。{{htmlelement("fencedframe")}} 内に埋め込まれた文書でのみ利用できます。
- {{domxref("Window.frameElement")}} {{ReadOnlyInline}}
  - : ウィンドウが埋め込まれた要素を返します。ウィンドウが埋め込まれていない場合は、 null を返します。
- {{domxref("Window.frames")}} {{ReadOnlyInline}}
  - : 現在のウィンドウでのサブフレームの配列を返します。
- {{domxref("Window.fullScreen")}} {{Non-standard_Inline}}
  - : このプロパティはウィンドウが全画面で表示されているかどうかを示します。
- {{domxref("Window.history")}} {{ReadOnlyInline}}
  - : history オブジェクトへの参照を返します。
- {{domxref("Window.indexedDB")}} {{ReadOnlyInline}}
  - : 索引付きデータベースにアプリケーションが非同期にアクセスできる仕組みを提供します。このプロパティは {{domxref("IDBFactory")}} オブジェクトを返します。
- {{domxref("Window.innerHeight")}} {{ReadOnlyInline}}
  - : ブラウザーウィンドウのコンテンツ領域の高さを取得し、もしあれば、水平スクロールバーを含みます。
- {{domxref("Window.innerWidth")}} {{ReadOnlyInline}}
  - : ブラウザーウィンドウのコンテンツ領域の幅を取得し、もしあれば、垂直スクロールバーを含みます。
- {{domxref("Window.isSecureContext")}} {{ReadOnlyInline}}
  - : コンテキストが、安全なコンテキストを必要とする機能を使用することができるかどうかを表します。
- {{domxref("Window.launchQueue")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : [プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) が、[`launch_handler`](/ja/docs/Web/Manifest/launch_handler) の `client_mode` が `focus-existing`、`navigate-new`、`navigate-existing` のいずれかで起動された場合、`launchQueue`　は {{domxref("LaunchQueue")}} クラスへのアクセスを提供し、PWA にカスタム起動ナビゲーション処理を実装することができます。
- {{domxref("Window.length")}} {{ReadOnlyInline}}
  - : ウィンドウ内のフレームの数を返します。 {{domxref("window.frames")}} も参照してください。
- {{domxref("Window.localStorage")}} {{ReadOnlyInline}}
  - : 生成元のオリジンからのみアクセスが可能なデータを保存するために使用する、ローカルストレージオブジェクトへの参照を返します。
- {{domxref("Window.location")}}
  - : window オブジェクトのロケーション、または現在の URL を取得 / 設定します。
- {{domxref("Window.locationbar")}} {{ReadOnlyInline}}
  - : locationbar オブジェクトを返します。
- {{domxref("Window.menubar")}} {{ReadOnlyInline}}
  - : menubar オブジェクトを返します。
- {{domxref("Window.mozInnerScreenX")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : スクリーン座標系でウィンドウのビューポートの左上隅の水平 (X) 座標を返します。この値は CSS ピクセルで表します。必要に応じて画面のピクセルに換算するための係数については、`nsIDOMWindowUtils` の `mozScreenPixelsPerCSSPixel` をご覧ください。
- {{domxref("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : スクリーン座標系で、ウィンドウビューポートの左上隅の垂直 (Y) 座標を返します。この値は CSS ピクセルで表します。必要に応じて画面のピクセルに換算するための係数については `mozScreenPixelsPerCSSPixel` をご覧ください。
- {{domxref("Window.name")}}
  - : ウィンドウ名を取得 / 設定します。
- {{domxref("Window.navigation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 現在の `window` に関連付けられた {{domxref("Navigation")}} オブジェクトを返します。{{domxref("Navigation API")}} のエントリーポイントです。
- {{domxref("Window.navigator")}} {{ReadOnlyInline}}
  - : navigator オブジェクトへの参照を返します。
- {{domxref("Window.opener")}}
  - : 現在のウィンドウを開いたウィンドウへの参照を返します。
- {{domxref("Window.origin")}} {{ReadOnlyInline}}
  - : グローバルオブジェクトのオリジンを、文字列としてシリアライズして返します。
- {{domxref("Window.originAgentCluster")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このウィンドウがオリジンキーエージェントクラスターに属している場合は `true` を返します。
- {{domxref("Window.outerHeight")}} {{ReadOnlyInline}}
  - : ブラウザーウィンドウの外側の高さを取得します。
- {{domxref("Window.outerWidth")}} {{ReadOnlyInline}}
  - : ブラウザーウィンドウの外側の幅を取得します。
- {{domxref("Window.scrollX","Window.pageXOffset")}} {{ReadOnlyInline}}
  - : {{domxref("window.scrollX")}} のエイリアスです。
- {{domxref("Window.scrollY","Window.pageYOffset")}} {{ReadOnlyInline}}
  - : {{domxref("window.scrollY")}} のエイリアスです。
- {{domxref("Window.parent")}} {{ReadOnlyInline}}
  - : 現在のウィンドウまたはサブフレームの親ウィンドウへの参照を返します。
- {{domxref("Window.performance")}} {{ReadOnlyInline}}
  - : {{domxref("Performance")}} オブジェクトを返します。これは {{domxref("Performance.timing", "timing")}} や {{domxref("Performance.navigation", "navigation")}} 属性が含まれており、それぞれが [パフォーマンス関連](/ja/docs/Web/API/Performance_API/Navigation_timing) のデータを提供するオブジェクトです。詳細情報や使用例は[ナビゲーションタイミングの使用](/ja/docs/Web/API/Performance_API/Navigation_timing)をご覧ください。
- {{domxref("Window.personalbar")}} {{ReadOnlyInline}}
  - : personalbar オブジェクトを返します。
- {{domxref("Window.scheduler")}} {{ReadOnlyInline}}
  - : 現在のコンテキストに関連付けられた {{domxref("Scheduler")}} オブジェクトを返します。この項目は[優先タスクスケジューリング API](/ja/docs/Web/API/Prioritized_Task_Scheduling_API) を使用するためのエントリーポイントです。
- {{domxref("Window.screen")}} {{ReadOnlyInline}}
  - : ウィンドウに関連付けられた screen オブジェクトへの参照を返します。
- {{domxref("Window.screenX")}} および {{domxref("Window.screenLeft")}} {{ReadOnlyInline}}
  - : どちらのプロパティも、ユーザーのブラウザーのビューポートの左端から画面の左端までの水平方向の距離を返します。
- {{domxref("Window.screenY")}} および {{domxref("Window.screenTop")}} {{ReadOnlyInline}}
  - : どちらのプロパティも、ユーザーのブラウザーのビューポートの上端から画面の上端までの垂直方向の距離を返します。
- {{domxref("Window.scrollbars")}} {{ReadOnlyInline}}
  - : ウィンドウ内で表示 / 非表示の切り替え (トグル) が可能な、 scrollbars オブジェクトを返す
- {{domxref("Window.scrollMaxX")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : ウィンドウが水平スクロールされ得る最大オフセット、すなわち、文書の幅からビューポートの幅を引いたものです。
- {{domxref("Window.scrollMaxY")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : ウィンドウが垂直スクロールされ得る最大オフセット (すなわち、文書の高さからビューポートの高さを引いたもの) です。
- {{domxref("Window.scrollX")}} {{ReadOnlyInline}}
  - : 文書が現在水平にスクロールされているピクセル数を返します。
- {{domxref("Window.scrollY")}} {{ReadOnlyInline}}
  - : 文書が現在垂直にスクロールされているピクセル数を返します。
- {{domxref("Window.self")}} {{ReadOnlyInline}}
  - : window オブジェクト自身へのオブジェクト参照を返す
- {{domxref("Window.sessionStorage")}}
  - : 生成元のオリジンからのみアクセスが可能なデータを保存するために使用する、セッションストレージへの参照を返します。
- {{domxref("Window.sharedStorage")}} {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : 現在のオリジンの {{domxref("WindowSharedStorage")}} オブジェクトを返します。これは[共有ストレージ API](/ja/docs/Web/API/Shared_Storage_API) を使用して共有ストレージにデータを書き込むためのメインエントリーポイントです。
- {{domxref("Window.speechSynthesis")}} {{ReadOnlyInline}}
  - : {{domxref("SpeechSynthesis")}} オブジェクトを返します。これは、[ウェブ発声 API](/ja/docs/Web/API/Web_Speech_API) の音声合成機能を使用するためのエントリーポイントです。
- {{domxref("Window.statusbar")}} {{ReadOnlyInline}}
  - : statusbar オブジェクトを返します。
- {{domxref("Window.toolbar")}} {{ReadOnlyInline}}
  - : toolbar オブジェクトを返します。
- {{domxref("Window.top")}} {{ReadOnlyInline}}
  - : ウィンドウ階層における最上位のウィンドウへの参照を返します。このプロパティは読み取り専用です。
- {{domxref("Window.trustedTypes")}} {{ReadOnlyInline}}
  - : グローバルオブジェクトに関連付けられた {{domxref("TrustedTypePolicyFactory")}} オブジェクトを返します。これは{{domxref("Trusted Types API", "信頼型 API", "", "nocode")}} を使用するためのエントリーポイントです。
- {{domxref("Window.visualViewport")}} {{ReadOnlyInline}}
  - : 指定したウィンドウの視覚的なビューポートを表す {{domxref("VisualViewport")}} オブジェクトを返します。
- {{domxref("Window.window")}} {{ReadOnlyInline}}
  - : 現在のウィンドウへの参照を返します。
- `window[0]`、`window[1]` など
  - : フレーム内の `window` オブジェクトへの参照を返します。詳しくは {{domxref("Window.frames")}} をご覧ください。

### 非推奨のプロパティ

- {{domxref("Window.event")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : **現在のイベント**を返します。これは現在 JavaScript のコードのコンテキストが処理しているイベントです。また、現在処理しているイベントがない場合は `undefined` を返します。可能な限り、イベントハンドラーに直接渡した {{domxref("Event")}} オブジェクトを代わりに使用してください。
- {{domxref("Window.external")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : 外部の検索プロバイダーをブラウザーに追加するための関数を持つオブジェクトを返します。
- {{domxref("Window.orientation")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : 端末の自然な方向に対するビューポートの方向を度単位（90 度単位で増加）で返します。
- {{domxref("Window.sidebar")}} {{Deprecated_Inline}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : サイドバーの window オブジェクトへの参照を返します。
- {{domxref("Window.status")}} {{Deprecated_Inline}}
  - : ブラウザー下部のステータスバーのテキストを取得 / 設定します。

## インスタンスメソッド

_このインターフェイスは {{domxref("EventTarget")}} インターフェイスからメソッドを継承しています。_

- {{domxref("Window.atob()")}}
  - : Base64 エンコーディングを使用してエンコードされたデータの文字列をデコードします。
- {{domxref("Window.alert()")}}
  - : 警告ダイアログを表示します。
- {{domxref("Window.blur()")}} {{Deprecated_Inline}}
  - : ウィンドウからフォーカスを外します。
- {{domxref("Window.btoa()")}}
  - : バイナリーデータを Base64 でエンコードした ASCII 文字列を生成します。
- {{domxref("Window.cancelAnimationFrame()")}}
  - : {{domxref("Window.requestAnimationFrame")}} によって過去にスケジューリングされたコールバックをキャンセルできます。
- {{domxref("Window.cancelIdleCallback()")}}
  - : {{domxref("Window.requestIdleCallback")}} によって過去にスケジューリングされたコールバックをキャンセルできます。
- {{domxref("clearInterval", "Window.clearInterval()")}}
  - : {{domxref("setInterval()")}} で繰り返し実行されるよう設定された命令をキャンセルします。
- {{domxref("clearTimeout()", "Window.clearTimeout()")}}
  - : {{domxref("setTimeout()")}} で遅延実行するよう設定した命令をキャンセルします。
- {{domxref("Window.close()")}}
  - : 現在のウィンドウを閉じます。
- {{domxref("Window.confirm()")}}
  - : ユーザーの応答が必要なメッセージを持つダイアログを表示します。
- {{domxref("createImageBitmap", "Window.createImageBitmap()")}}
  - : さまざまな画像ソースを受け入れ、{{domxref("ImageBitmap")}} に解決される {{jsxref("Promise")}} を返します。任意で、始点 _(sx, sy)_ から幅 sw、高さ sh の長方形でソースを切り抜くことができます。
- {{domxref("Window.dump()")}} {{Non-standard_Inline}}
  - : コンソールにメッセージを出力します。
- {{domxref("fetch", "Window.fetch()")}}
  - : ネットワークからリソースを取り込む処理を開始します。
- {{domxref("Window.find()")}} {{Non-standard_Inline}}
  - : ウィンドウ内で指定された文字列を検索します。
- {{domxref("Window.focus()")}}
  - : 現在のウィンドウにフォーカスを当てます。
- {{domxref("Window.getComputedStyle()")}}
  - : 特定の要素の計算済みスタイルを取得します。計算済みスタイルは、要素のすべての CSS プロパティの計算値を示します。
- {{domxref("Window.getDefaultComputedStyle()")}} {{Non-standard_Inline}}
  - : 特定の要素について、作者のスタイルシートを無視したデフォルトの計算済みスタイルを取得します。
- {{domxref("Window.getScreenDetails()")}} {{experimental_inline}} {{securecontext_inline}}
  - : ユーザーの端末で利用できるすべての画面の詳細を表す {{domxref("ScreenDetails")}} オブジェクトインスタンスで履行される {{jsxref("Promise")}} を返します。
- {{domxref("Window.getSelection()")}}
  - : 選択されたアイテムを表す、セレクションオブジェクトを返します。
- {{domxref("Window.matchMedia()")}}
  - : 指定したメディアクエリー文字列を表す {{domxref("MediaQueryList")}} オブジェクトを返します。
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
- {{DOMxRef("Window.queryLocalFonts()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : ローカルで利用できるフォントフェイスを表す {{domxref("FontData")}} オブジェクトの配列で履行された {{jsxref("Promise")}} を返します。
- {{domxref("queueMicrotask", "Window.queueMicrotask()")}}
  - : ブラウザーのイベントループに制御を返す前に、安全な時点で実行されるマイクロタスクをキューに入れます。
- {{domxref("reportError", "Window.reportError()")}}
  - : 処理されない例外をエミュレートして、スクリプトのエラーを報告します。
- {{domxref("Window.requestAnimationFrame()")}}
  - : アニメーションが進行中であることをブラウザーに伝えて、次のアニメーションフレームのためにウィンドウの再描画を予定するよう要求します。
- {{domxref("Window.requestIdleCallback()")}}
  - : ブラウザーがアイドル状態であるときに実行するタスクをスケジューリングします。
- {{domxref("Window.resizeBy()")}}
  - : 現在のウィンドウを、指定した大きさの分だけ変更します。
- {{domxref("Window.resizeTo()")}}
  - : ウィンドウを動的にリサイズします。
- {{domxref("Window.scroll()")}}
  - : ウィンドウを文書内の特定の位置にスクロールします。
- {{domxref("Window.scrollBy()")}}
  - : ウィンドウ内の文書を、指定した距離の分だけスクロールします。
- {{domxref("Window.scrollByLines()")}} {{Non-standard_Inline}}
  - : 文書を指定した行数分、スクロールします。
- {{domxref("Window.scrollByPages()")}} {{Non-standard_Inline}}
  - : 文書を指定したページ数分、スクロールします。
- {{domxref("Window.scrollTo()")}}
  - : 文書内の特定の位置に、ウィンドウをスクロールします。
- {{domxref("setInterval", "Window.setInterval()")}}
  - : ミリ秒単位で指定した時間が経過するたびに関数を実行するようスケジューリングします。
- {{domxref("setTimeout()", "Window.setTimeout()")}}
  - : 指定した時間が経過したら関数を実行するようスケジューリングします。
- {{domxref("Window.showDirectoryPicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : ユーザーがディレクトリーを選択できるディレクトリーピッカーを表示します。
- {{domxref("Window.showOpenFilePicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : ユーザーがファイルまたは複数のファイルを選択できるファイルピッカーを表示します。
- {{domxref("Window.showSaveFilePicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : ユーザーがファイルを保存できるファイルピッカーを表示します。
- {{domxref("Window.sizeToContent()")}} {{Non-standard_Inline}}
  - : コンテンツに応じてウィンドウのサイズを調整します。
- {{domxref("Window.stop()")}}
  - : ウィンドウの読み込み処理を停止します。
- {{domxref("structuredClone", "Window.structuredClone()")}}
  - : 指定された値の[ディープクローン](/ja/docs/Glossary/Deep_copy)を、[構造化クローンアルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を用いて作成します。
- {{domxref("Window.updateCommands()")}} {{Non-standard_Inline}}
  - : 現在の chrome ウィンドウ (UI) のコマンドの状態を更新します。

### 非推奨のメソッド

- {{domxref("Window.back()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : ウィンドウの履歴をひとつ戻ります。このメソッドは廃止されました。代わりに {{domxref("History.back", "window.history.back()")}} を使用してください。
- {{domxref("Window.captureEvents()")}} {{Deprecated_Inline}}
  - : 特定のタイプのイベントをすべてキャプチャするよう、ウィンドウに登録します。
- {{domxref("Window.clearImmediate()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : `setImmediate` で設定した繰り返し処理をキャンセルします。
- {{domxref("Window.forward()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 履歴でひとつ先の文書に移動します。このメソッドは廃止されました。代わりに {{domxref("History.forward", "history.forward()")}} を使用してください。
- {{domxref("Window.releaseEvents()")}} {{Deprecated_Inline}}
  - : 特定のタイプのイベントのキャプチャを解放します。
- {{domxref("Window.requestFileSystem()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : ウェブサイトやアプリが自分自身で使用するためにサンドボックス化されたファイルシステムにアクセスすることができます。
- {{domxref("Window.setImmediate()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : ブラウザーで他の高負荷なタスクが完了した後に、関数を実行します。
- {{domxref("Window.setResizable()")}} {{Non-standard_Inline}} {{deprecated_inline}}
  - : ユーザーがウィンドウをリサイズできるかを切り替えます。
- {{domxref("Window.showModalDialog()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : モーダルダイアログを表示します。
- {{domxref("Window.webkitConvertPointFromNodeToPage()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : ノードの座標系からページの座標系へ {{domxref("WebKitPoint")}} を変換します。
- {{domxref("Window.webkitConvertPointFromPageToNode()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : ページの座標系からノードの座標系へ {{domxref("WebKitPoint")}} を変換します。

## イベント

これらのイベントを待ち受けするには、 [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用するか、イベントリスナーをこのインターフェイスの `onイベント名` プロパティに代入するかしてください。下記の一覧のイベントに加えて、多くのイベントがウィンドウオブジェクトに格納されている {{domxref("Document")}} からバブリングしてくる可能性があります。

- {{domxref("Window/error_event", "error")}}
  - : リソースの読み込みに失敗したか、利用できないときに発生します。例えば、スクリプトに実行エラーがあった場合や、画像が見つからなかったり、無効であったりした場合です。
- {{domxref("Window/languagechange_event", "languagechange")}}
  - : ユーザーの推奨される言語が変更されたときに、グローバルスコープオブジェクトに発生します。
- {{domxref("Window/resize_event", "resize")}}
  - : ウィンドウのサイズが変更されたときに発行されます。
- {{domxref("Window/storage_event", "storage")}}
  - : ストレージ領域 (`localStorage` または `sessionStorage`) が他の文書のコンテキストから変更されたときに発生します。

### クリップボードイベント

- {{domxref("Window/copy_event", "copy")}}
  - : ブラウザーのユーザーインターフェイスからユーザーがコピー操作を行ったときに発生します。
    {{domxref("HTMLElement/copy_event", "oncopy")}} プロパティからも利用できます。
- {{domxref("Window/cut_event", "cut")}}
  - : ブラウザーのユーザーインターフェイスからユーザーが切り取り操作を行ったときに発生します。
    {{domxref("HTMLElement/cut_event", "oncut")}} プロパティからも利用できます。
- {{domxref("Window/paste_event", "paste")}}
  - : ブラウザーのユーザーインターフェイスからユーザーが貼り付け操作を行ったときに発生します。
    {{domxref("HTMLElement/paste_event", "onpaste")}} プロパティからも利用できます。

### 接続イベント

- {{domxref("Window/offline_event", "offline")}}
  - : ブラウザーがネットワークへのアクセスから切断され、 `navigator.onLine` の値が `false` に変わったときに発生します。
- {{domxref("Window/online_event", "online")}}
  - : ブラウザーがネットワークへのアクセスに接続され、 `navigator.onLine` の値が `true` に変わったときに発生します。

### 端末方向イベント

- {{domxref("Window.devicemotion_event", "devicemotion")}} {{SecureContext_Inline}}
  - : 定期的に発生し、利用できる場合は、端末にかかっている物理的な加速度の量と傾きを示します。
- {{domxref("Window.deviceorientation_event", "deviceorientation")}} {{SecureContext_Inline}}
  - : 現在の端末の向きを地球の座標軸と比較する時期包囲センサーから新しいデータが利用できるようになったときに発生します。
- {{domxref("Window.deviceorientationabsolute_event", "deviceorientationabsolute")}} {{SecureContext_Inline}}
  - : 磁力計の方位センサーから、地球座標フレームと比較した端末の現在の絶対方位に関する新しいデータが利用できる場合に発行されます。

### フォーカスイベント

- {{domxref("Window/blur_event", "blur")}}
  - : 要素がフォーカスを失ったときに発生します。
    {{domxref("Window/blur_event", "onblur")}} プロパティからも利用できます。
- {{domxref("Window/focus_event", "focus")}}
  - : 要素がフォーカスを得たときに発生します。
    {{domxref("Window/focus_event", "onfocus")}} プロパティからも利用できます。

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
- {{domxref("Window/load_event", "load")}}
  - : スタイルシートや画像などの依存するすべてのリソースを含め、ページ全体の読み込みが完了したときに発生します。
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

### 非推奨のイベント

- {{domxref("Window/orientationchange_event", "orientationchange")}} {{Deprecated_Inline}}
  - : 端末の向きが変化したときに発生します。
- {{domxref("Window/vrdisplayactivate_event", "vrdisplayactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : ディスプレイが表示できるようになったときに発行されます。
- {{domxref("Window/vrdisplayconnect_event", "vrdisplayconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 対応する VR 機器が接続されている場合に発行されます。
- {{domxref("Window/vrdisplaydisconnect_event", "vrdisplaydisconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 対応する VR 機器がコンピューターから切り離されたときに発行されます。
- {{domxref("Window/vrdisplaydeactivate_event", "vrdisplaydeactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : ディスプレイが表示されなくなったときに発行されます。
- {{domxref("Window/vrdisplaypresentchange_event", "vrdisplaypresentchange")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : VR 機器の表示状態が変化したとき（表示から非表示、または非表示から非表示になったとき）に発行されます。

## インターフェイス

[DOM リファレンス](/ja/docs/Web/API/Document_Object_Model)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
