---
title: HTMLElement
slug: Web/API/HTMLElement
tags:
  - API
  - HTML DOM
  - HTMLElement
  - インターフェイス
  - NeedsNewLayout
  - リファレンス
browser-compat: api.HTMLElement
translation_of: Web/API/HTMLElement
---
{{APIRef("HTML DOM")}}

**`HTMLElement`** インターフェイスは、任意の [HTML](/ja/docs/Web/HTML) 要素を表します。要素によってはこのインターフェイスで直接実装されていたり、これを継承したインターフェイスを通して実装されていたりします。

{{InheritanceDiagram}}

## プロパティ

_親である {{DOMxRef("Element")}} からプロパティを継承しており、 {{DOMxRef("GlobalEventHandlers")}} からのプロパティを実装しています。_

- {{DOMxRef("HTMLElement.accessKey")}}
  - : 要素に割り当てられたアクセスキーを表す文字列です。
- {{DOMxRef("HTMLElement.accessKeyLabel")}} {{ReadOnlyInline}}
  - : 要素に割り当てられたアクセスキーを含む文字列を返します。
- {{DOMxRef("HTMLElement.attributeStyleMap")}} {{ReadOnlyInline}}
  - : {{DOMxRef("StylePropertyMap")}} で、その要素の {{htmlattrxref("style")}} 属性の宣言を表します。
- {{DOMxRef("HTMLElement.contentEditable")}}
  - : 文字列で、 `true` の場合は要素が編集可能、`false` の場合は編集不可であることを表します。
- {{DOMxRef("HTMLElement.isContentEditable")}} {{ReadOnlyInline}}
  - : 論理値で、要素のコンテンツが編集可能か否かを示します。
- {{DOMxRef("HTMLElement.contextMenu")}} {{Deprecated_Inline}}
  - : 要素に割り当てたコンテキストメニューを表す {{DOMxRef("HTMLMenuElement")}} です。`null` になる可能性があります。
- {{DOMxRef("HTMLElement.dataset")}} {{ReadOnlyInline}}
  - : {{DOMxRef("DOMStringMap")}} で、スクリプトが読み書きできる要素の[カスタムデータ属性](/ja/docs/Learn/HTML/Howto/Use_data_attributes) (`data-*`) を表します。
- {{DOMxRef("HTMLElement.dir")}}
  - : 文字列で、要素の書字方向を表す `dir` グローバル属性を反映します。利用可能な値は、`"ltr"` および `"rtl"`、`"auto"` です。
- {{DOMxRef("HTMLElement.draggable")}}
  - : 論理値で、要素がドラッグ可能かどうかを示します。
- {{DOMxRef("HTMLElement.enterkeyhint")}}
  - : 文字列で、仮想キーボードの Enter キーに表示するアクションラベル（またはアイコン）を定義します。
- {{DOMxRef("HTMLElement.hidden")}}
  - : 論理値で、要素が非表示であるかどうかを表します。
- {{DOMxRef("HTMLElement.inert")}}
  - : 論理値で、ユーザー操作イベント、ページ内テキスト検索（「ページ内を検索」）、テキストの選択において、ユーザーエージェントが指定したノードがないかのように動作するかどうかを示します。
- {{DOMxRef("HTMLElement.innerText")}}
  - : ノードやその子孫の「描画される」テキストの内容を表します。
    ゲッターとしては、カーソルで要素の内容を選択しクリップボードにコピーした際のテキストに近いものを取得することができます。
    セッターとしては、この要素の子要素を指定された値で置き換え、すべての改行を {{HTMLElement("br")}} 要素に変換します。
- {{DOMxRef("HTMLElement.itemScope")}} {{Experimental_Inline}}
  - : 論理値で、アイテムのスコープを表します。
- {{DOMxRef("HTMLElement.itemType")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : {{DOMxRef("DOMTokenList")}} を返します…
- {{DOMxRef("HTMLElement.itemId")}} {{Experimental_Inline}}
  - : 文字列で、アイテム ID を表します。
- {{DOMxRef("HTMLElement.itemRef")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : {{DOMxRef("DOMTokenList")}} を返します…
- {{DOMxRef("HTMLElement.itemProp")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : {{DOMxRef("DOMTokenList")}} を返します…
- {{DOMxRef("HTMLElement.itemValue")}} {{Experimental_Inline}}
  - : {{JSxRef("Object")}} で、アイテムの値を表します。
- {{DOMxRef("HTMLElement.lang")}}
  - : 文字列で、要素の属性およびテキスト、要素のコンテンツの言語を表します。
- {{DOMxRef("HTMLElement.noModule")}}
  - : 論理値で、モジュールスクリプトに対応しているユーザーエージェントでインポートしたスクリプトが実行されるかどうかを示します。
- {{DOMxRef("HTMLElement.nonce")}}
  - : 指定されたフェッチが実行を許可されるかどうかを判断するためにコンテンツセキュリティポリシーが使用する、一度だけ使用される暗号学的な数値を返します。
- {{DOMxRef("HTMLElement.offsetHeight")}} {{ReadOnlyInline}}
  - :  `double` 値で、レイアウトに対して相対的な要素の高さを返します。
- {{DOMxRef("HTMLElement.offsetLeft")}} {{ReadOnlyInline}}
  - :  `double` 値で、この要素の左境界線からその `offsetParent` の左境界線までの距離を返します。
- {{DOMxRef("HTMLElement.offsetParent")}} {{ReadOnlyInline}}
  - : {{DOMxRef("Element")}} で、すべてのオフセット計算が現在計算されている要素を返します。
- {{DOMxRef("HTMLElement.offsetTop")}} {{ReadOnlyInline}}
  - : `double` 値で、要素の上境界線からその `offsetParent` の上境界線までの距離を返します。
- {{DOMxRef("HTMLElement.offsetWidth")}} {{ReadOnlyInline}}
  - : `double` 値で、レイアウトに対して相対的な要素の幅を返します。
- {{DOMxRef("HTMLElement.outerText")}}
  - : ノードとその子孫のレンダリングされたテキストコンテンツを表します。
    ゲッターとしては {{DOMxRef("HTMLElement.innerText")}} と同じです（要素とその子孫のレンダリングされたテキストの内容を表します）。
    セッターとしては、選択されたノードとその内容を指定された値で置き換え、改行を {{HTMLElement("br")}} 要素に変換します。
- {{DOMxRef("HTMLElement.properties")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : {{DOMxRef("HTMLPropertiesCollection")}} を返します…
- {{DOMxRef("HTMLElement.spellcheck")}}
  - : 論理値で、[スペルチェック](/ja/docs/Web/HTML/Global_attributes/spellcheck) を制御します。これはすべての HTML 要素に提供されていますが、すべての要素に効果があるとは限りません。
- {{DOMxRef("HTMLElement.style")}}
  - : {{DOMxRef("CSSStyleDeclaration")}} で、この要素の {{htmlattrxref("style")}} 属性の宣言を表します。
- {{DOMxRef("HTMLElement.tabIndex")}}
  - : `long` 値で、タブ順内の要素の位置を表します。
- {{DOMxRef("HTMLElement.title")}}
  - : 文字列で、マウスポインターを要素に当てた時に現れるポップアップボックスのテキストを表します。
- {{DOMxRef("HTMLElement.translate")}} {{Experimental_Inline}}
  - : 論理値で、翻訳を行うかどうかを表します。

### イベントハンドラー

ほとんどのイベントハンドラープロパティは、`onXYZ` の形であり、 {{DOMxRef("GlobalEventHandlers")}} の何れかのインターフェイスで定義されていて、`HTMLElement` により実装されています。さらに `HTMLElement` 固有のイベントプロパティがいくつかあります。

- {{DOMxRef("TouchEventHandlers.ontouchstart")}} {{Non-standard_Inline}}
  - : {{domxref("Element/touchstart_event", "touchstart")}} イベントのイベントハンドリングコードを返します。
- {{DOMxRef("TouchEventHandlers.ontouchend")}} {{Non-standard_Inline}}
  - : {{domxref("Element/touchend_event", "touchend")}} イベントのイベントハンドリングコードを返します。
- {{DOMxRef("TouchEventHandlers.ontouchmove")}} {{Non-standard_Inline}}
  - : {{domxref("Element/touchmove_event", "touchmove")}} イベントのイベントハンドリングコードを返します。
- {{DOMxRef("TouchEventHandlers.ontouchcancel")}} {{Non-standard_Inline}}
  - : {{domxref("Element/touchcancel_event", "touchcancel")}} イベントのイベントハンドリングコードを返します。

## メソッド

_親である {{DOMxRef("Element")}} からメソッドを継承しており、 {{DOMxRef("GlobalEventHandlers")}} からのメソッドを実装しています。_

- {{DOMxRef("HTMLElement.attachInternals()")}} {{Experimental_Inline}}
  - : {{DOMxRef("ElementInternals")}} オブジェクトを返し、カスタム要素を HTML フォームに参加できるようにします。
- {{DOMxRef("HTMLElement.blur()")}}
  - : 現在フォーカスされている要素からキーボードフォーカスを外します。
- {{DOMxRef("HTMLElement.click()")}}
  - : 要素にマウスクリックイベントを送信します。
- {{DOMxRef("HTMLElement.focus()")}}
  - : 要素に現在のキーボードフォーカスを当てます。

## イベント

これらのイベントを待ち受けするには `addEventListener()` を用いるか、イベントリスナーをこのインターフェイスの `onイベント名` プロパティに代入するかしてください。

- {{DOMxRef("HTMLElement.copy_event", "copy")}}
  - : ユーザーがブラウザのユーザーインターフェイスを通じてコピー操作を開始したときに発生します。
- {{DOMxRef("HTMLElement.cut_event", "cut")}}
  - : ユーザーがブラウザのユーザーインターフェイスから切り取り操作を開始したときに発生します。
- {{DOMxRef("HTMLElement.paste_event", "paste")}}
  - : ユーザーがブラウザのユーザーインターフェイスを通じて貼り付け操作を開始したときに発生します。
- {{domxref("HTMLInputElement/invalid_event", "invalid")}}
  - : 制約の検証で、要素が制約を満たさなかった場合に発行されます。
    {{domxref("GlobalEventHandlers/oninvalid", "oninvalid")}} プロパティからも利用できます。

### アニメーションイベント

- {{domxref("HTMLElement/animationcancel_event", "animationcancel")}}
  - : アニメーションが予期せず中断されたときに発行されます。
    {{domxref("GlobalEventHandlers/onanimationcancel", "onanimationcancel")}} プロパティからも利用できます。
- {{domxref("HTMLElement/animationend_event", "animationend")}}
  - : アニメーションが正常に完了したときに発行されます。
    {{domxref("GlobalEventHandlers/onanimationend", "onanimationend")}} プロパティからも利用できます。
- {{domxref("HTMLElement/animationiteration_event", "animationiteration")}}
  - : アニメーションが 1 回分完了したときに発行されます。
    {{domxref("GlobalEventHandlers/onanimationiteration", "onanimationiteration")}} プロパティからも利用できます。
- {{domxref("HTMLElement/animationstart_event", "animationstart")}}
  - : アニメーションが開始されたときに発行されます。
    {{domxref("GlobalEventHandlers/onanimationstart", "onanimationstart")}} プロパティからも利用できます。

### 入力イベント

- {{domxref("HTMLElement/beforeinput_event", "beforeinput")}}
  - : {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} のいずれかの要素が変更される前に発行されます。
- {{domxref("HTMLElement/input_event", "input")}}
  - : {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} のいずれかの要素の `value` が変更されたときに発行されます。
    {{domxref("GlobalEventHandlers/oninput", "oninput")}} プロパティからも利用できます。
- {{domxref("HTMLElement/change_event", "change")}}
  - : {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} のいずれかの要素の `value` が変更され、ユーザーが確定したときに発行されます。{{domxref("HTMLElement/input_event", "input")}} イベントとは異なり、`change` イベントは要素の `value` が変更されるたびに発行されるわけではありません。

### ポインターイベント

- {{domxref("HTMLElement/gotpointercapture_event", "gotpointercapture")}}
  - : {{domxref("Element/setPointerCapture", "setPointerCapture()")}} を用いて要素がポインターをキャプチャしたときに発行されます。
    {{domxref("GlobalEventHandlers/ongotpointercapture", "ongotpointercapture")}} プロパティからも利用できます。
- {{domxref("HTMLElement/lostpointercapture_event", "lostpointercapture")}}
  - : [キャプチャされたポインター](/ja/docs/Web/API/Pointer_events#pointer_capture)が解放されたときに発行されます。
    {{domxref("GlobalEventHandlers/onlostpointercapture", "onlostpointercapture")}} プロパティからも利用できます。
- {{domxref("HTMLElement/pointercancel_event", "pointercancel")}}
  - : ポインターイベントがキャンセルされたときに発行されます。
    {{domxref("GlobalEventHandlers/onpointercancel", "onpointercancel")}} プロパティからも利用できます。
- {{domxref("HTMLElement/pointerdown_event", "pointerdown")}}
  - : ポインターがアクティブになったときに発行されます。
    {{domxref("GlobalEventHandlers/onpointerdown", "onpointerdown")}} プロパティからも利用できます。
- {{domxref("HTMLElement/pointerenter_event", "pointerenter")}}
  - : ポインターが要素またはその子孫の一つのヒットテスト境界に入ったときに発行されます。
    {{domxref("GlobalEventHandlers/onpointerenter", "onpointerenter")}} プロパティからも利用できます。
- {{domxref("HTMLElement/pointerleave_event", "pointerleave")}}
  - : ポインターが要素のヒットテスト境界から出たときに発行されます。
    {{domxref("GlobalEventHandlers/onpointerleave", "onpointerleave")}} プロパティからも利用できます。
- {{domxref("HTMLElement/pointermove_event", "pointermove")}}
  - : ポインターの座標が変化したときに発行されます。
    {{domxref("GlobalEventHandlers/onpointermove", "onpointermove")}} プロパティからも利用できます。
- {{domxref("HTMLElement/pointerout_event", "pointerout")}}
  - : ポインターが要素の*ヒットテスト*境界を (他の理由で) 出たときに発行されます。
    {{domxref("GlobalEventHandlers/onpointerout", "onpointerout")}} プロパティからも利用できます。
- {{domxref("HTMLElement/pointerover_event", "pointerover")}}
  - : ポインターが要素のヒットテスト境界に入ったときに発行されます。
    {{domxref("GlobalEventHandlers/onpointerover", "onpointerover")}} プロパティからも利用できます。
- {{domxref("HTMLElement/pointerup_event", "pointerup")}}
  - : ポインターがアクティブではなくなったときに発行されます。
    {{domxref("GlobalEventHandlers/onpointerup", "onpointerup")}} プロパティからも利用できます。

### トランジションイベント

- {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}}
  - : [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)がキャンセルされたときに発行されます。
    {{domxref("GlobalEventHandlers/ontransitioncancel", "ontransitioncancel")}} プロパティからも利用できます。
- {{domxref("HTMLElement/transitionend_event", "transitionend")}}
  - : [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)が完了したときに発行されます。
    {{domxref("GlobalEventHandlers/ontransitionend", "ontransitionend")}} プロパティからも利用できます。
- {{domxref("HTMLElement/transitionrun_event", "transitionrun")}}
  - : [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) が最初に作成されたときに発行されます。
    {{domxref("GlobalEventHandlers/ontransitionrun", "ontransitionrun")}} プロパティからも利用できます。
- {{domxref("HTMLElement/transitionstart_event", "transitionstart")}}
  - : [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)が実際に開始されたときに発行されます。
    {{domxref("GlobalEventHandlers/ontransitionstart", "ontransitionstart")}} プロパティからも利用できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Element")}}
