---
title: HTMLElement
slug: Web/API/HTMLElement
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("HTML DOM")}}

**`HTMLElement`** インターフェイスは、任意の [HTML](/ja/docs/Web/HTML) 要素を表します。要素によってはこのインターフェイスで直接実装されていたり、これを継承したインターフェイスを通して実装されていたりします。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{DOMxRef("Element")}} から継承したプロパティもあります。_

- {{DOMxRef("HTMLElement.accessKey")}}
  - : 要素に割り当てられたアクセスキーを表す文字列です。
- {{DOMxRef("HTMLElement.accessKeyLabel")}} {{ReadOnlyInline}}
  - : 要素に割り当てられたアクセスキーを含む文字列を返します。
- {{DOMxRef("HTMLElement.anchorElement")}} {{ReadOnlyInline}}&nbsp;{{non-standard_inline}} {{experimental_inline}}
  - : 要素のアンカー要素への参照を返すか、アンカー要素がない場合は `null` を返します。
- {{DOMxRef("HTMLElement.attributeStyleMap")}} {{ReadOnlyInline}}
  - : {{DOMxRef("StylePropertyMap")}} で、その要素の [`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style) 属性の宣言を表します。
- {{domxref("HTMLElement.autocapitalize")}}
  - : ユーザー入力に対する要素の大文字小文字の動作を表す文字列。有効な値は `none`、`off`、`on`、`characters`、`words`、`sentences` です。
- {{domxref("HTMLElement.autofocus")}}
  - : 論理値で、HTML の [`autofocus`](/ja/docs/Web/HTML/Reference/Elements/select#autofocus) グローバル属性を反映し、ページが読み込まれたとき、または {{htmlelement("dialog")}} 要素やポップオーバー属性が設定されている要素内の要素に指定した場合、ダイアログやポップオーバーが表示されたときに、コントロールにフォーカスを当てるかどうかを示します。
- {{domxref("HTMLElement.autocorrect")}}
  - : ユーザーが入力したテキストを自動的に修正すべきかどうかを表します。
    これは HTML の [`autocorrect`](/ja/docs/Web/HTML/Reference/Global_attributes/autocorrect) グローバル属性を反映します。
- {{domxref("HTMLElement.containerTiming")}} {{Experimental_Inline}}
  - : この要素を {{domxref("PerformanceContainerTiming")}} API による観測対象のコンテナールートとしてマークする文字列です。
    これは HTML の [`containertiming`](/ja/docs/Web/HTML/Reference/Global_attributes/containertiming) グローバル属性を反映します。
- {{domxref("HTMLElement.containerTimingIgnore")}} {{Experimental_Inline}}
  - : 祖先のコンテナールートのタイミング計測への寄与から、この要素とその子孫を除外する論理値です。
    これは HTML の [`containertimingignore`](/ja/docs/Web/HTML/Reference/Global_attributes/containertimingignore) グローバル属性を反映します。
- {{DOMxRef("HTMLElement.contentEditable")}}
  - : 文字列で、 `true` の場合は要素が編集可能、`false` の場合は編集不可であることを表します。
- {{DOMxRef("HTMLElement.dataset")}} {{ReadOnlyInline}}
  - : {{DOMxRef("DOMStringMap")}} で、スクリプトが読み書きできる要素の[カスタムデータ属性](/ja/docs/Web/HTML/How_to/Use_data_attributes) (`data-*`) を表します。
- {{DOMxRef("HTMLElement.dir")}}
  - : 文字列で、要素の書字方向を表す `dir` グローバル属性を反映します。利用可能な値は、`"ltr"` および `"rtl"`、`"auto"` です。
- {{DOMxRef("HTMLElement.draggable")}}
  - : 論理値で、要素がドラッグ可能かどうかを示します。
- {{DOMxRef("HTMLElement.editContext")}} {{experimental_inline}}
  - : この要素に関連付けられた {{DOMxRef("EditContext")}} を返します。なければ `null` を返します。
- {{DOMxRef("HTMLElement.enterKeyHint")}}
  - : 文字列で、仮想キーボードの Enter キーに表示するアクションラベル（またはアイコン）を定義します。
- {{DOMxRef("HTMLElement.hidden")}}
  - : 文字列または論理値で、この要素の [`hidden`](/ja/docs/Web/HTML/Reference/Global_attributes/hidden) 属性の値を反映します。
- {{DOMxRef("HTMLElement.inert")}}
  - : 論理値で、ユーザー操作イベント、ページ内テキスト検索（「ページ内を検索」）、テキストの選択において、ユーザーエージェントが指定したノードがないかのように動作するかどうかを示します。
- {{DOMxRef("HTMLElement.innerText")}}
  - : このノードやその子孫において、表示されるテキストの内容を表します。
    ゲッターとしては、カーソルで要素の内容を選択しクリップボードにコピーした際のテキストに近いものを取得することができます。
    セッターとしては、この要素の子要素を指定された値で置き換え、すべての改行を {{HTMLElement("br")}} 要素に変換します。
- {{DOMxRef("HTMLElement.inputMode")}}
  - : 文字列で、この要素の [`inputmode`](/ja/docs/Web/HTML/Reference/Global_attributes/inputmode) 属性の値を反映します。
- {{DOMxRef("HTMLElement.isContentEditable")}} {{ReadOnlyInline}}
  - : 論理値で、要素のコンテンツが編集可能か否かを示します。
- {{DOMxRef("HTMLElement.lang")}}
  - : 文字列で、要素の属性およびテキスト、要素のコンテンツの言語を表します。
- {{DOMxRef("HTMLElement.nonce")}}
  - : 指定されたフェッチが実行を許可されるかどうかを判断するためにコンテンツセキュリティポリシーが使用する、一度だけ使用される暗号学的な数値を返します。
- {{DOMxRef("HTMLElement.offsetHeight")}} {{ReadOnlyInline}}
  - : `double` 値で、レイアウトに対して相対的な要素の高さを返します。
- {{DOMxRef("HTMLElement.offsetLeft")}} {{ReadOnlyInline}}
  - : `double` 値で、この要素の左境界線からその `offsetParent` の左境界線までの距離を返します。
- {{DOMxRef("HTMLElement.offsetParent")}} {{ReadOnlyInline}}
  - : {{DOMxRef("Element")}} で、すべてのオフセット計算が現在計算されている要素を返します。
- {{DOMxRef("HTMLElement.offsetTop")}} {{ReadOnlyInline}}
  - : `double` 値で、要素の上境界線からその `offsetParent` の上境界線までの距離を返します。
- {{DOMxRef("HTMLElement.offsetWidth")}} {{ReadOnlyInline}}
  - : `double` 値で、レイアウトに対して相対的な要素の幅を返します。
- {{DOMxRef("HTMLElement.outerText")}}
  - : ノードとその子孫の表示されるテキストコンテンツを表します。
    ゲッターとしては {{DOMxRef("HTMLElement.innerText")}} と同じです（要素とその子孫の表示されるテキストの内容を表します）。
    セッターとしては、選択されたノードとその内容を指定された値で置き換え、改行を {{HTMLElement("br")}} 要素に変換します。
- {{domxref("HTMLElement.popover")}}
  - : JavaScript から要素のポップオーバー状態を取得・設定し（`"auto"`、`"hint"`、`"manual"` のいずれか）、機能検出のために使用することもできます。グローバル HTML 属性 [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) の値を反映します。
- {{DOMxRef("HTMLElement.spellcheck")}}
  - : 論理値で、[スペルチェック](/ja/docs/Web/HTML/Reference/Global_attributes/spellcheck) のヒントを制御します。これはすべての HTML 要素で利用できますが、すべての要素に効果があるとは限りません。
- {{DOMxRef("HTMLElement.style")}}
  - : {{DOMxRef("CSSStyleDeclaration")}} で、この要素の [`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style) 属性の宣言を表します。
- {{DOMxRef("HTMLElement.tabIndex")}}
  - : `long` 値で、タブ順内の要素の位置を表します。
- {{DOMxRef("HTMLElement.title")}}
  - : 文字列で、マウスポインターを要素に当てた時に現れるポップアップボックスのテキストを表します。
- {{DOMxRef("HTMLElement.translate")}}
  - : 論理値で、翻訳を行うかどうかを表します。
- {{DOMxRef("HTMLElement.virtualKeyboardPolicy")}} {{Experimental_Inline}}
  - : 文字列で、タブレットやモバイル端末、その他ハードウェアキーボードが利用できない端末において、要素のコンテンツが編集可能な場合（例えば、{{htmlelement("input")}} 要素や {{htmlelement("textarea")}} 要素、[`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性が設定されている要素）、画面に表示される仮想キーボードの動作を示します。
- {{DOMxRef("HTMLElement.writingSuggestions")}}
  - : 文字列で、ブラウザーが提供する文章作成の提案をこの要素のスコープで有効にすべきかどうかを示します。

## インスタンスメソッド

_親である {{DOMxRef("Element")}} から継承したメソッドもあります。_

- {{DOMxRef("HTMLElement.attachInternals()")}}
  - : {{DOMxRef("ElementInternals")}} オブジェクトを返し、カスタム要素を HTML フォームに参加できるようにします。
- {{DOMxRef("HTMLElement.blur()")}}
  - : 現在フォーカスされている要素からキーボードフォーカスを外します。
- {{DOMxRef("HTMLElement.click()")}}
  - : 要素にマウスクリックイベントを送信します。
- {{DOMxRef("HTMLElement.focus()")}}
  - : 要素に現在のキーボードフォーカスを当てます。
- {{DOMxRef("HTMLElement.hidePopover()")}}
  - : ポップオーバー要素を{{glossary("top layer", "最上位レイヤー")}}から取り除き、`display: none` でスタイル設定することで、ポップオーバー要素を非表示にします。
- {{DOMxRef("HTMLElement.showPopover()")}}
  - : ポップオーバー要素を{{glossary("top layer", "最上位レイヤー")}}に追加し、`display: none;` スタイル設定を削除することで、ポップオーバー要素を表示します。
- {{DOMxRef("HTMLElement.togglePopover()")}}
  - : ポップオーバー要素を非表示状態と表示状態を切り替えます。

## イベント

これらのイベントを待ち受けするには {{domxref("EventTarget.addEventListener", "addEventListener()")}} を用いるか、イベントリスナーをこのインターフェイスの `onイベント名` プロパティに代入するかしてください。

_親である {{DOMxRef("Element")}} から継承したイベントもあります。_

- {{DOMxRef("HTMLElement/change_event", "change")}}
  - : {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} のいずれかの要素の `value` が変更され、ユーザーが確定したときに発生します。{{domxref("Element/input_event", "input")}} イベントとは異なり、`change` イベントは要素の `value` が変更されるたびに発生するわけではありません。
- {{domxref("HTMLElement/command_event", "command")}}
  - : {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} および {{domxref("HTMLButtonElement.command", "command")}} の値が有効な{{domxref("HTMLButtonElement", "ボタン")}}によって制御される要素上で、ボタンが操作されるたびに（例えば、クリックされるたびに）発生します。
- {{DOMxRef("HTMLElement/error_event", "error")}}
  - : リソースの読み込みに失敗した、または使用することができない場合に発生します。
- {{DOMxRef("HTMLElement/load_event", "load")}}
  - : リソースが正常に読み込まれたときに、リソースを保持する要素に対して発生します。

### ドラッグ＆ドロップイベント

- {{DOMxRef("HTMLElement/drag_event", "drag")}}
  - : このイベントは、要素またはテキスト選択がドラッグされている間、繰り返し発生します。
    発生頻度はブラウザー、オペレーティングシステム、ポインターの動きによって異なるため、固定の間隔を前提にしないでください。
- {{DOMxRef("HTMLElement/dragend_event", "dragend")}}
  - : このイベントは、ドラッグ操作が（マウスボタンを離すか、エスケープキーを押すかして）終わったときに発生します。
- {{DOMxRef("HTMLElement/dragenter_event", "dragenter")}}
  - : このイベントは、ドラッグされた要素やテキスト選択が有効なドロップ対象に入ると発生します。
- {{DOMxRef("HTMLElement/dragleave_event", "dragleave")}}
  - : このイベントは、ドラッグされた要素やテキスト選択が有効なドロップ対象から外れたときに発生します。
- {{DOMxRef("HTMLElement/dragover_event", "dragover")}}
  - : このイベントは、要素またはテキスト選択をドロップ先の候補の上でドラッグしている間、繰り返し発生します。
    発生頻度はブラウザー、オペレーティングシステム、ポインターの動きによって異なるため、固定の間隔を前提にしないでください。
- {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}}
  - : このイベントは、ユーザーが要素やテキスト選択のドラッグを開始したときに発生します。
- {{DOMxRef("HTMLElement/drop_event", "drop")}}
  - : このイベントは、要素またはテキスト選択が有効なドロップ対象にドロップされたときに発生します。

### 関心インボーカーイベント

- {{domxref("HTMLElement.interest_event", "interest")}} {{experimental_inline}} {{non-standard_inline}}
  - : 関心インボーカーの[対象要素](/ja/docs/Web/API/Popover_API/Using_interest_invokers)で、関心が示されたときに発生します。これに応答するコードを実行できます。
- {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} {{experimental_inline}} {{non-standard_inline}}
  - : 関心インボーカーの対象要素で、関心が失われたときに発生します。これに応答するコードを実行できます。

### トグルイベント

- {{DOMxRef("HTMLElement/beforetoggle_event", "beforetoggle")}}
  - : この要素が[ポップオーバー](/ja/docs/Web/API/Popover_API)または {{htmlelement("dialog")}} である場合、非表示または表示される前に発生します。
- {{DOMxRef("HTMLElement/toggle_event", "toggle")}}
  - : この要素が[ポップオーバー](/ja/docs/Web/API/Popover_API)、{{htmlelement("dialog")}}、{{htmlelement("details")}} のいずれかである場合、非表示または表示された直後に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Element")}}
