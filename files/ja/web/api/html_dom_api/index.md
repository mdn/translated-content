---
title: HTML DOM API
slug: Web/API/HTML_DOM_API
tags:
  - API
  - 初心者
  - DOM
  - 文書
  - 要素
  - HTML DOM
  - HTML DOM API
  - ノード
  - 概要
  - ウェブ
  - ウィンドウ
  - 階層
translation_of: Web/API/HTML_DOM_API
---
{{DefaultAPISidebar("HTML DOM")}}

**HTML DOM API** は、{{Glossary("HTML")}} の各{{Glossary("element", "要素")}}の機能を定義するインターフェイスと、それらが依存する補助的な型やインターフェイスから構成されています。

HTML DOM API に含まれる機能領域には、以下のようなものがあります。

- {{Glossary("DOM")}} を介した HTML 要素へのアクセスと制御。
- フォームデータへのアクセスと操作。
- 二次元画像の内容と HTML の {{HTMLElement("canvas")}} のコンテキストとの相互作用、例えば、それらの上に描画すること。
- HTML のメディア要素 ({{HTMLElement("audio")}} と {{HTMLElement("video")}} に接続されたメディアの管理。
- ウェブページ上のコンテンツのドラッグ＆ドロップ。
- ブラウザーのナビゲーション履歴へのアクセス。
- [ウェブコンポーネント](/ja/docs/Web/Web_Components)、{{DOMxRef("Web_Storage_API", "ウェブストレージ", "", "1")}}、{{DOMxRef("Web_Workers_API", "ウェブワーカー", "", "1")}}、{{DOMxRef("WebSockets_API", "ウェブソケット", "", "1")}}、{{DOMxRef("Server-sent_events", "サーバー側イベント", "", "1")}} などの他の API のサポートおよび接続インターフェイス。

## HTML DOM の概念と利用方法

この記事では、HTML DOM の中で HTML 要素に関係する部分に焦点を当てます。{{DOMxRef("HTML_Drag_and_Drop_API", "ドラッグアンドドロップ", "", "1")}}、{{DOMxRef("WebSockets_API", "ウェブソケット", "", "1")}}、{{DOMxRef("Web_Storage_API", "ウェブストレージ", "", "1")}}などの他の分野についての議論は、それらの API のドキュメントを参照してください。

### HTML 文書の構造

ドキュメントオブジェクトモデル ({{Glossary("DOM")}}) は、文書 ({{domxref("document")}}) の構造を記述する構造で、それぞれの文書は {{domxref("Document")}} インターフェイスのインスタンスで表現されます。文書は**ノード**の階層ツリーで構成され、ノードは文書内の単一のオブジェクト（要素やテキストノードなど）を表す基本的なレコードです。

ノードは厳密に組織化することができ、他のノードをグループ化する手段を提供したり、階層構造を構築するためのポイントを提供したりします。各ノードは、そのノードに関する情報を取得するためのプロパティと、DOM 内でノードを作成、削除、整理するためのメソッドを提供する {{domxref("Node")}} インタフェースに基づいています。

ノードには、実際に文書に表示されるコンテンツを含むという概念はありません。これは空っぽの器です。視覚的な内容を表現できるノードの基本的な概念は {{domxref("Element")}} インターフェイスで紹介されています。 `Element` オブジェクトのインスタンスは、 HTML または {{glossary("XML")}} の語彙（{{glossary("SVG")}} など）を用いて作成された文書内の 1 つの要素を表します。

例えば、 2 つの要素を持つ文書があり、そのうちの 1 つの要素の中にさらに 2 つの要素がネストされている場合を考えてみましょう。

![ウィンドウ内の文書に要素を持たせた構造](dom-structure.svg)

{{domxref("Document")}} インターフェイスは {{DOMxRef("Document_Object_Model", "DOM", "", "1")}} 仕様の一部として定義されていますが、 HTML 仕様ではこれを大幅に拡張して Web ブラウザのコンテキストで DOM を使うための固有の情報と HTML 文書を表すための固有の情報が追加されています。

HTML 標準によって `Document` に追加されたものには、次のようなものがあります。

- ページを読み込む際に、 {{Glossary("HTTP")}} ヘッダーが提供する様々な情報へのアクセスに対応すること。例えば {{DOMxRef("Document/location", "location", "", "1")}} から文書を読み込んだ場所、{{DOMxRef("Document/cookie", "Cookie", "", "1")}}、{{DOMxRef("Document/lastModified", "最終更新日時", "", "1")}}、{{DOMxRef("Document/referrer", "リファラーサイト", "", "1")}}などです。
- 文書の {{HTMLElement("head")}} ブロックや{{DOMxRef("Document/body", "本文", "", "1")}}に含まれている要素リストへのアクセス、また文書に含まれている{{DOMxRef("Document/images", "画像", "", "1")}}や{{DOMxRef("Document/links", "リンク", "", "1")}}のリストへのアクセス。
- [編集可能なコンテンツ](/ja/docs/Web/HTML/Global_attributes/contenteditable)の {{DOMxRef("Document/hasFocus", "focus", "", "1")}} 検査やコマンドの実行によるユーザーとの対話への対応。
- HTML 標準で定義されている文書の{{DOMxRef("GlobalEventHandlers", "イベントハンドラー", "", "1")}}で、{{DOMxRef("MouseEvent", "マウス", "", "1")}}や{{DOMxRef("KeyboardEvent", "キーボード", "", "1")}}イベント、{{DOMxRef("HTML_Drag_and_Drop_API", "ドラッグ＆ドロップ", "", "1")}}や{{DOMxRef("HTMLMediaElement", "メディア制御", "", "1")}}などのイベントにアクセスできるようにすること。
- 要素と文書の両方に配信できるイベントのイベントハンドラー。現在のところ、{{DOMxRef("HTMLElement/copy_event", "コピー", "", "1")}}、{{DOMxRef("HTMLElement/cut_event", "切り取り", "", "1")}}、{{DOMxRef("HTMLElement/paste_event", "貼り付け", "", "1")}}操作のみが含まれています。

### HTML 要素インターフェイス

`Element` インターフェイスは、さらに HTML 要素の具体的な表現に適応するため、さらに {{domxref("HTMLElement")}} インターフェイスが導入されており、これがもっと具体的な HTML 要素のクラスすべてから継承されています。これにより `Element` クラスが拡張され、要素ノードに HTML 固有の全般的な機能が追加できるようになりました。 `HTMLElement` によって追加されているプロパティには、例えば {{domxref("HTMLElement.hidden", "hidden")}} や {{domxref("HTMLElement.innerText", "innerText")}} があります。 `HTMLElement` はまた、すべての{{DOMxRef("GlobalEventHandlers", "グローバルイベントハンドラー", "", "1")}}を追加します。

{{Glossary("HTML")}} 文書は DOM ツリーで、その中の各ノードは HTML 要素であり、 {{domxref("HTMLElement")}} インターフェイスで表されています。 `HTMLElement` クラスは `Node` を実装しているので、すべての要素はノードでもあります（逆は成立しません）。すなわち、 {{domxref("Node")}} インターフェイスが実装している構造的な機能は HTML 要素でも利用可能で、要素間を入れ子にしたり、生成と削除、移動などを行ったりすることができます。

しかし、 `HTMLElement` インターフェイスは汎用的であり、要素の ID、座標、要素を構成する HTML、スクロール位置に関する情報など、すべての HTML 要素に共通する機能のみを提供します。

コアの `HTMLElement` インターフェイスの機能を拡張して、具体的な要素に必要な機能を提供するよう拡張するために、 `HTMLElement` クラスはサブクラス化されて必要なプロパティやメソッドが追加されています。例えば、 {{HTMLElement("canvas")}} 要素は {{domxref("HTMLCanvasElement")}} 型のオブジェクトで表現されます。 `HTMLCanvasElement` は `HTMLElement` 型に {{domxref("HTMLCanvasElement.height", "height")}} などのプロパティと {{domxref("HTMLCanvasElement.getContext", "getContext()")}} などのメソッドを追加して拡張し、キャンバス固有の機能を提供しています。

HTML の要素クラスの全体的な継承は次のようになります。

![HTML要素のインターフェイスの階層](html-dom-hierarchy.svg)

このように、要素はそのすべての祖先のプロパティとメソッドを継承します。例えば、 {{HTMLElement("a")}} 要素が DOM 内で {{domxref("HTMLAnchorElement")}} という型のオブジェクトで表現されているとします。この要素は、そのクラスのドキュメントで説明されているアンカー固有のプロパティとメソッドを含んでいますが、 {{domxref("HTMLElement")}} と {{domxref("Element")}} で定義されているもの、さらに {{domxref("Node")}} や、さらには {{domxref("EventTarget")}} からのものも含まれています。

それぞれのレベルは、要素の実用性に関する重要な側面を定義します。 `Node` からは、その要素が他の要素に含まれたり、他の要素を含んだりすることができる機能に関する概念を継承しています。特に重要なのは、 `EventTarget` を継承することで得られるものであり、マウスのクリックや再生・一時停止イベントなどのイベントを受信して処理することができるようになります。

共通点を持つ要素があり、そのために追加の中間型を持つことがあります。例えば、 {{HTMLElement("audio")}} と {{HTMLElement("video")}} 要素は共にオーディオビジュアルメディアを提示します。対応する型である {{domxref("HTMLAudioElement")}} と {{domxref("HTMLVideoElement")}} は共に共通の型 {{domxref("HTMLMediaElement")}} に基づいており、それが {{domxref("HTMLElement")}} などに基づいています。 `HTMLMediaElement` は、 audio 要素と video 要素の間で共通に保持されるメソッドとプロパティを定義しています。

これらの要素固有のインターフェイスは HTML DOM API の大部分を構成しており、この記事の焦点となっています。 {{DOMxRef("Document_Object_Model", "DOM", "", "1")}} の実際の構造については {{DOMxRef("Document_Object_Model/Introduction", "DOM の紹介", "", "1")}}を参照してください。

## HTML DOM の対象読者

HTML DOM が公開する機能は、ウェブ開発者が最もよく使う API の一つです。最も単純なウェブアプリケーションを除いて、すべて HTML DOM のいくつかの機能を使用します。

## HTML DOM API インターフェイス

HTML DOM API を構成するインターフェイスの大部分は、個々の HTML 要素、または類似の機能を持つ小さな要素群にほぼ一対一で対応します。さらに、 HTML DOM API には、 HTML 要素のインターフェイスを対応するためのいくつかのインターフェイスと型が含まれています。

### HTML 要素インターフェイス

これらのインターフェイスは、特定の HTML 要素（または、同じプロパティとメソッドを関連付けた関連要素のセット）を表します。

- {{DOMxRef("HTMLAnchorElement")}}
- {{DOMxRef("HTMLAreaElement")}}
- {{DOMxRef("HTMLAudioElement")}}
- {{DOMxRef("HTMLBaseElement")}}
- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLBRElement")}}
- {{DOMxRef("HTMLButtonElement")}}
- {{DOMxRef("HTMLCanvasElement")}}
- {{DOMxRef("HTMLDataElement")}}
- {{DOMxRef("HTMLDataListElement")}}
- {{DOMxRef("HTMLDetailsElement")}}
- {{DOMxRef("HTMLDialogElement")}}
- {{DOMxRef("HTMLDirectoryElement")}}
- {{DOMxRef("HTMLDivElement")}}
- {{DOMxRef("HTMLDListElement")}}
- {{DOMxRef("HTMLElement")}}
- {{DOMxRef("HTMLEmbedElement")}}
- {{DOMxRef("HTMLFieldSetElement")}}
- {{DOMxRef("HTMLFormElement")}}
- {{DOMxRef("HTMLHRElement")}}
- {{DOMxRef("HTMLHeadElement")}}
- {{DOMxRef("HTMLHeadingElement")}}
- {{DOMxRef("HTMLHtmlElement")}}
- {{DOMxRef("HTMLIFrameElement")}}
- {{DOMxRef("HTMLImageElement")}}
- {{DOMxRef("HTMLInputElement")}}
- {{DOMxRef("HTMLLabelElement")}}
- {{DOMxRef("HTMLLegendElement")}}
- {{DOMxRef("HTMLLIElement")}}
- {{DOMxRef("HTMLLinkElement")}}
- {{DOMxRef("HTMLMapElement")}}
- {{DOMxRef("HTMLMediaElement")}}
- {{DOMxRef("HTMLMenuElement")}}
- {{DOMxRef("HTMLMetaElement")}}
- {{DOMxRef("HTMLMeterElement")}}
- {{DOMxRef("HTMLModElement")}}
- {{DOMxRef("HTMLObjectElement")}}
- {{DOMxRef("HTMLOListElement")}}
- {{DOMxRef("HTMLOptGroupElement")}}
- {{DOMxRef("HTMLOptionElement")}}
- {{DOMxRef("HTMLOutputElement")}}
- {{DOMxRef("HTMLParagraphElement")}}
- {{DOMxRef("HTMLPictureElement")}}
- {{DOMxRef("HTMLPreElement")}}
- {{DOMxRef("HTMLProgressElement")}}
- {{DOMxRef("HTMLQuoteElement")}}
- {{DOMxRef("HTMLScriptElement")}}
- {{DOMxRef("HTMLSelectElement")}}
- {{DOMxRef("HTMLSlotElement")}}
- {{DOMxRef("HTMLSourceElement")}}
- {{DOMxRef("HTMLSpanElement")}}
- {{DOMxRef("HTMLStyleElement")}}
- {{DOMxRef("HTMLTableCaptionElement")}}
- {{DOMxRef("HTMLTableCellElement")}}
- {{DOMxRef("HTMLTableColElement")}}
- {{DOMxRef("HTMLTableElement")}}
- {{DOMxRef("HTMLTableRowElement")}}
- {{DOMxRef("HTMLTableSectionElement")}}
- {{DOMxRef("HTMLTemplateElement")}}
- {{DOMxRef("HTMLTextAreaElement")}}
- {{DOMxRef("HTMLTimeElement")}}
- {{DOMxRef("HTMLTitleElement")}}
- {{DOMxRef("HTMLTrackElement")}}
- {{DOMxRef("HTMLUListElement")}}
- {{DOMxRef("HTMLUnknownElement")}}
- {{DOMxRef("HTMLVideoElement")}}

#### 非推奨の HTML Element インターフェイス

- {{DOMxRef("HTMLMarqueeElement")}} {{deprecated_inline}}

#### 廃止された HTML Element インターフェイス

- {{DOMxRef("HTMLBaseFontElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLFontElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLFrameElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLFrameSetElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLIsIndexElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLMenuItemElement")}} {{deprecated_inline}}

### ウェブアプリやブラウザーとの連携インターフェイス

これらのインターフェイスは、 HTML を含むブラウザーウィンドウや文書へのアクセス、ブラウザーの状態、利用可能なプラグイン（ある場合）、さまざまな設定オプションへのアクセスを提供します。

- {{DOMxRef("BarProp")}}
- {{DOMxRef("Navigator")}}
- {{DOMxRef("Window")}}

#### 非推奨のウェブアプリやブラウザーとの連携インターフェイス

- {{DOMxRef("External")}} {{deprecated_inline}}

#### 廃止されたウェブアプリやブラウザーとの連携インターフェイス

- {{DOMxRef("ApplicationCache")}} {{deprecated_inline}}
- {{DOMxRef("Plugin")}} {{deprecated_inline}}
- {{DOMxRef("PluginArray")}} {{deprecated_inline}}

### フォームサポートインターフェイス

これらのインターフェイスは、 {{HTMLElement("form")}} や {{HTMLElement("input")}} 要素など、フォームを作成・管理するための要素に必要な構造と機能を提供するものです。

- {{DOMxRef("FormDataEvent")}}
- {{DOMxRef("HTMLFormControlsCollection")}}
- {{DOMxRef("HTMLOptionsCollection")}}
- {{DOMxRef("RadioNodeList")}}
- {{DOMxRef("ValidityState")}}

### キャンバスと画像インターフェイス

これらのインターフェイスは、キャンバス API で使用されるオブジェクトや、 {{HTMLElement("img")}} 要素、{{HTMLElement("picture")}} 要素を表します。

- {{DOMxRef("CanvasGradient")}}
- {{DOMxRef("CanvasPattern")}}
- {{DOMxRef("CanvasRenderingContext2D")}}
- {{DOMxRef("ImageBitmap")}}
- {{DOMxRef("ImageBitmapRenderingContext")}}
- {{DOMxRef("ImageData")}}
- {{DOMxRef("OffscreenCanvas")}}
- {{DOMxRef("OffscreenCanvasRenderingContext2D")}}
- {{DOMxRef("Path2D")}}
- {{DOMxRef("TextMetrics")}}

### メディアインターフェイス

メディアインターフェイスは、メディア要素 {{HTMLElement("audio")}} および {{HTMLElement("video")}} のコンテンツに

- {{DOMxRef("AudioTrack")}}
- {{DOMxRef("AudioTrackList")}}
- {{DOMxRef("MediaError")}}
- {{DOMxRef("TextTrack")}}
- {{DOMxRef("TextTrackCue")}}
- {{DOMxRef("TextTrackCueList")}}
- {{DOMxRef("TextTrackList")}}
- {{DOMxRef("TimeRanges")}}
- {{DOMxRef("TrackEvent")}}
- {{DOMxRef("VideoTrack")}}
- {{DOMxRef("VideoTrackList")}}

### ドラッグ＆ドロップインターフェイス

これらのインターフェイスは {{DOMxRef("HTML_Drag_and_Drop_API", "HTML ドラッグ＆ドロップ API", "", "1")}} によって、ドラッグできる（またはドラッグした）個々のアイテム、ドラッグまたはドラッグできるアイテムのグループ、およびドラッグ＆ドロップ処理を表すために使用されています。

- {{DOMxRef("DataTransfer")}}
- {{DOMxRef("DataTransferItem")}}
- {{DOMxRef("DataTransferItemList")}}
- {{DOMxRef("DragEvent")}}

### ページ履歴インターフェイス

履歴 API では、ブラウザーの履歴に関する情報にアクセスしたり、現在のタブの履歴を前後に移動させたりすることができます。

- {{DOMxRef("BeforeUnloadEvent")}}
- {{DOMxRef("HashChangeEvent")}}
- {{DOMxRef("History")}}
- {{DOMxRef("Location")}}
- {{DOMxRef("PageTransitionEvent")}}
- {{DOMxRef("PopStateEvent")}}

### ウェブコンポーネントインターフェイス

これらのインターフェイスは[ウェブコンポーネント API](/ja/docs/Web/Web_Components)で使用され、利用可能な[カスタム要素](/ja/docs/Web/Web_Components/Using_custom_elements)を作成・管理します。

- {{DOMxRef("CustomElementRegistry")}}

### その他、および補助的インターフェイス

これらの補助的なオブジェクト型は、 HTML DOM API の中で様々な形で利用されています。また、{{domxref("PromiseRejectionEvent")}} は {{Glossary("JavaScript")}} のプロミス ({{jsxref("Promise")}}) が拒否されたときに配信されるイベントを表します。

- {{DOMxRef("DOMStringList")}}
- {{DOMxRef("DOMStringMap")}}
- {{DOMxRef("ErrorEvent")}}
- {{DOMxRef("HTMLAllCollection")}}
- {{DOMxRef("MimeType")}}
- {{DOMxRef("MimeTypeArray")}}
- {{DOMxRef("PromiseRejectionEvent")}}

### 他の API に所属するインターフェイス

一部のインターフェイスは、技術的には HTML 仕様書で定義されていますが、実際には他の API の一部となっています。

#### ウェブストレージインターフェイス

{{DOMxRef("Web_Storage_API", "ウェブストレージ API", "", "1")}} は、ウェブサイトがユーザーの端末に一時的または恒久的にデータを保存し、後で再利用できるようにする機能を提供します。

- {{DOMxRef("Storage")}}
- {{DOMxRef("StorageEvent")}}

#### ウェブワーカーインターフェイス

これらのインターフェイスは{{DOMxRef("Web_Workers_API", "ウェブワーカー API", "", "1")}} によって、ワーカーがアプリやそのコンテンツと対話する機能を確立し、さらにウィンドウまたはアプリ間のメッセージングをサポートするためにも使用されます。

- {{DOMxRef("BroadcastChannel")}}
- {{DOMxRef("DedicatedWorkerGlobalScope")}}
- {{DOMxRef("MessageChannel")}}
- {{DOMxRef("MessageEvent")}}
- {{DOMxRef("MessagePort")}}
- {{DOMxRef("SharedWorker")}}
- {{DOMxRef("SharedWorkerGlobalScope")}}
- {{DOMxRef("Worker")}}
- {{DOMxRef("WorkerGlobalScope")}}
- {{DOMxRef("WorkerLocation")}}
- {{DOMxRef("WorkerNavigator")}}

#### WebSocket インターフェイス

これらのインターフェイスは、 HTML 仕様書で定義されており、 {{DOMxRef("WebSockets_API", "WebSocket API", "", "1")}} で使用されます。

- {{DOMxRef("CloseEvent")}}
- {{DOMxRef("WebSocket")}}

#### サーバー送信イベントインターフェイス

{{domxref("EventSource")}} インターフェイスは、{{DOMxRef("Server-sent_events", "サーバー送信イベント", "", "1")}}を送信した、または送信しようとしているソースを表します。

- {{DOMxRef("EventSource")}}

## 例

この例では、 {{HTMLElement("input")}} 要素の {{domxref("HTMLElement/input_event", "input")}} イベントを監視し、与えられたフィールドに現在値があるかどうかによって、フォームの「送信」ボタンの状態を更新しています。

#### JavaScript

```js
const nameField = document.getElementById("userName");
const sendButton = document.getElementById("sendButton")

sendButton.disabled = true;
// [注：このサンプルにフォーカスし、スクロールして表示した状態でこの記事を常に読み込むことになるため、無効にしています。]
//nameField.focus();

nameField.addEventListener("input", event => {
  const elem = event.target;
  const valid = elem.value.length != 0;

  if (valid && sendButton.disabled) {
    sendButton.disabled = false;
  } else if (!valid && !sendButton.disabled) {
    sendButton.disabled = true;
  }
});
```

このコードは {{domxref("Document")}} インターフェイスの {{domxref("Document.getElementById", "getElementById()")}} メソッドを用いて、 ID が `userName` と `sendButton` である {{HTMLElement("input")}} 要素を表す DOM オブジェクトを取得するものです。これらを使用して、これらの要素に関する情報を提供したり、これらの要素に対する制御を許可するプロパティやメソッドにアクセスすることができます。

「送信」ボタンの {{domxref("HTMLInputElement")}} オブジェクトの {{domxref("HTMLInputElement.disabled", "disabled")}} 属性は `true` に設定されており、「送信」ボタンがクリックできないように無効化されています。さらに、 {{domxref("HTMLElement/focus", "focus()")}} から継承したメソッドを呼び出して、ユーザー名入力フィールドをアクティブフォーカスに設定しています。

次に {{domxref("EventTarget.addEventListener", "addEventListener()")}} が呼び出されて `input` イベント用のハンドラーがユーザー名の入力に追加されます。このコードでは、入力の現在値の長さを調べます。もしそれがゼロであれば、「送信」ボタンがまだ無効になっていない場合は、無効になります。それ以外の場合は、ボタンが有効であることを確認するコードです。

このコードにより、ユーザー名の入力フィールドに値があるときは常に「送信」ボタンが有効になり、空のときは無効になります。

#### HTML

このフォームの HTML は次のようになります。

```html
<p>以下の情報を教えてください。 * の付いた項目は必須です。</p>
<form action="" method="get">
  <p>
    <label for="userName" required>あなたの名前:</label>
    <input type="text" id="userName"> (*)
  </p>
  <p>
    <label for="email">メールアドレス:</label>
    <input type="email" id="userEmail">
  </p>
  <input type="submit" value="送信" id="sendButton">
</form>
```

#### 結果

{{EmbedLiveSample("Examples", 640, 300)}}

## 仕様書

| 仕様書                        | 状態                           | 備考                                         |
| ------------------------------------ | -------------------------------- | ----------------------------------------------- |
| {{SpecName('HTML WHATWG')}} | {{Spec2('HTML WHATWG')}} | WHATWG HTML 仕様書                       |
| {{SpecName('HTML5 W3C')}}     | {{Spec2('HTML5 W3C')}}     | {{SpecName("DOM2 HTML")}} から変更なし |
| {{SpecName('DOM2 HTML')}}     | {{Spec2('DOM2 HTML')}}     | {{SpecName("DOM1")}} から変更なし   |
| {{SpecName('DOM1')}}         | {{Spec2('DOM1')}}         | 初回定義                             |

## ブラウザーの互換性

{{Compat("api.HTMLElement")}}

## 関連情報

### リファレンス

- [HTML 要素リファレンス](/ja/docs/Web/HTML/Element)
- [HTML 属性リファレンス](/ja/docs/Web/HTML/Attributes)
- {{DOMxRef("Document_Object_Model", "ドキュメントオブジェクトモデル (DOM)", "", "1")}} インターフェイス

### ガイド

- [文書の操作](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents): DOM を操作するための初心者向けガイド。
