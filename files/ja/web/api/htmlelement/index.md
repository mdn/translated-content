---
title: HTMLElement
slug: Web/API/HTMLElement
l10n:
  sourceCommit: d3cdafcdb4d22e5c55771501e7c80451a96aa032
---

{{APIRef("HTML DOM")}}

**`HTMLElement`** インターフェイスは、任意の [HTML](/ja/docs/Web/HTML) 要素を表します。要素によってはこのインターフェイスで直接実装されていたり、これを継承したインターフェイスを通して実装されていたりします。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{DOMxRef("Element")}} からプロパティを継承しています。_

- {{DOMxRef("HTMLElement.accessKey")}}
  - : 要素に割り当てられたアクセスキーを表す文字列です。
- {{DOMxRef("HTMLElement.accessKeyLabel")}} {{ReadOnlyInline}}
  - : 要素に割り当てられたアクセスキーを含む文字列を返します。
- {{DOMxRef("HTMLElement.attributeStyleMap")}} {{ReadOnlyInline}}
  - : {{DOMxRef("StylePropertyMap")}} で、その要素の [`style`](/ja/docs/Web/HTML/Global_attributes#style) 属性の宣言を表します。
- {{DOMxRef("HTMLElement.contentEditable")}}
  - : 文字列で、 `true` の場合は要素が編集可能、`false` の場合は編集不可であることを表します。
- {{DOMxRef("HTMLElement.isContentEditable")}} {{ReadOnlyInline}}
  - : 論理値で、要素のコンテンツが編集可能か否かを示します。
- {{DOMxRef("HTMLElement.dataset")}} {{ReadOnlyInline}}
  - : {{DOMxRef("DOMStringMap")}} で、スクリプトが読み書きできる要素の[カスタムデータ属性](/ja/docs/Learn/HTML/Howto/Use_data_attributes) (`data-*`) を表します。
- {{DOMxRef("HTMLElement.dir")}}
  - : 文字列で、要素の書字方向を表す `dir` グローバル属性を反映します。利用可能な値は、`"ltr"` および `"rtl"`、`"auto"` です。
- {{DOMxRef("HTMLElement.draggable")}}
  - : 論理値で、要素がドラッグ可能かどうかを示します。
- {{DOMxRef("HTMLElement.enterKeyHint")}}
  - : 文字列で、仮想キーボードの Enter キーに表示するアクションラベル（またはアイコン）を定義します。
- {{DOMxRef("HTMLElement.hidden")}}
  - : 文字列または論理値で、この要素の [`hidden`](/ja/docs/Web/HTML/Global_attributes/hidden) 属性の値を反映します。
- {{DOMxRef("HTMLElement.inert")}}
  - : 論理値で、ユーザー操作イベント、ページ内テキスト検索（「ページ内を検索」）、テキストの選択において、ユーザーエージェントが指定したノードがないかのように動作するかどうかを示します。
- {{DOMxRef("HTMLElement.innerText")}}
  - : このノードやその子孫において、表示されるテキストの内容を表します。
    ゲッターとしては、カーソルで要素の内容を選択しクリップボードにコピーした際のテキストに近いものを取得することができます。
    セッターとしては、この要素の子要素を指定された値で置き換え、すべての改行を {{HTMLElement("br")}} 要素に変換します。
- {{DOMxRef("HTMLElement.inputMode")}}
  - : 文字列で、この要素の [`inputmode`](/ja/docs/Web/HTML/Global_attributes/inputmode) 属性の値を反映します。
- {{DOMxRef("HTMLElement.lang")}}
  - : 文字列で、要素の属性およびテキスト、要素のコンテンツの言語を表します。
- {{DOMxRef("HTMLElement.noModule")}}
  - : 論理値で、モジュールスクリプトに対応しているユーザーエージェントでインポートしたスクリプトが実行されるかどうかを示します。
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
- {{DOMxRef("HTMLElement.properties")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : {{DOMxRef("HTMLPropertiesCollection")}} を返します…
- {{DOMxRef("HTMLElement.spellcheck")}}
  - : 論理値で、[スペルチェック](/ja/docs/Web/HTML/Global_attributes/spellcheck) を制御します。これはすべての HTML 要素に提供されていますが、すべての要素に効果があるとは限りません。
- {{DOMxRef("HTMLElement.style")}}
  - : {{DOMxRef("CSSStyleDeclaration")}} で、この要素の [`style`](/ja/docs/Web/HTML/Global_attributes#style) 属性の宣言を表します。
- {{DOMxRef("HTMLElement.tabIndex")}}
  - : `long` 値で、タブ順内の要素の位置を表します。
- {{DOMxRef("HTMLElement.title")}}
  - : 文字列で、マウスポインターを要素に当てた時に現れるポップアップボックスのテキストを表します。
- {{DOMxRef("HTMLElement.translate")}}
  - : 論理値で、翻訳を行うかどうかを表します。

## インスタンスメソッド

_親である {{DOMxRef("Element")}} からメソッドを継承しています。_

- {{DOMxRef("HTMLElement.attachInternals()")}}
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
  - : ユーザーがブラウザーのユーザーインターフェイスを通じてコピー操作を開始したときに発生します。
- {{DOMxRef("HTMLElement.cut_event", "cut")}}
  - : ユーザーがブラウザーのユーザーインターフェイスから切り取り操作を開始したときに発生します。
- {{DOMxRef("HTMLElement.paste_event", "paste")}}
  - : ユーザーがブラウザーのユーザーインターフェイスを通じて貼り付け操作を開始したときに発生します。
- {{domxref("HTMLInputElement/invalid_event", "invalid")}}
  - : 制約の検証で、要素が制約を満たさなかった場合に発行されます。

### アニメーションイベント

- {{domxref("Element/animationcancel_event", "animationcancel")}}
  - : アニメーションが予期せず中断されたときに発行されます。
- {{domxref("Element/animationend_event", "animationend")}}
  - : アニメーションが正常に完了したときに発行されます。
- {{domxref("Element/animationiteration_event", "animationiteration")}}
  - : アニメーションが 1 回分完了したときに発行されます。
- {{domxref("Element/animationstart_event", "animationstart")}}
  - : アニメーションが開始されたときに発行されます。

### 入力イベント

- {{domxref("HTMLElement/beforeinput_event", "beforeinput")}}
  - : {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} のいずれかの要素が変更される前に発行されます。
- {{domxref("HTMLElement/input_event", "input")}}
  - : {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} のいずれかの要素の `value` が変更されたときに発行されます。
- {{domxref("HTMLElement/change_event", "change")}}
  - : {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} のいずれかの要素の `value` が変更され、ユーザーが確定したときに発行されます。{{domxref("HTMLElement/input_event", "input")}} イベントとは異なり、`change` イベントは要素の `value` が変更されるたびに発行されるわけではありません。

### ポインターイベント

- {{domxref("Element/gotpointercapture_event", "gotpointercapture")}}
  - : {{domxref("Element/setPointerCapture", "setPointerCapture()")}} を用いて要素がポインターをキャプチャしたときに発行されます。
- {{domxref("Element/lostpointercapture_event", "lostpointercapture")}}
  - : [キャプチャされたポインター](/ja/docs/Web/API/Pointer_events#pointer_capture)が解放されたときに発行されます。
- {{domxref("Element/pointercancel_event", "pointercancel")}}
  - : ポインターイベントがキャンセルされたときに発行されます。
- {{domxref("Element/pointerdown_event", "pointerdown")}}
  - : ポインターがアクティブになったときに発行されます。
- {{domxref("Element/pointerenter_event", "pointerenter")}}
  - : ポインターが要素またはその子孫の一つのヒットテスト境界に入ったときに発行されます。
- {{domxref("Element/pointerleave_event", "pointerleave")}}
  - : ポインターが要素のヒットテスト境界から出たときに発行されます。
- {{domxref("Element/pointermove_event", "pointermove")}}
  - : ポインターの座標が変化したときに発行されます。
- {{domxref("Element/pointerout_event", "pointerout")}}
  - : ポインターが要素の*ヒットテスト*境界を (他の理由で) 出たときに発行されます。
- {{domxref("Element/pointerover_event", "pointerover")}}
  - : ポインターが要素のヒットテスト境界に入ったときに発行されます。
- {{domxref("Element/pointerup_event", "pointerup")}}
  - : ポインターがアクティブではなくなったときに発行されます。

### トランジションイベント

- {{domxref("Element/transitioncancel_event", "transitioncancel")}}
  - : [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)がキャンセルされたときに発行されます。
- {{domxref("Element/transitionend_event", "transitionend")}}
  - : [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)が完了したときに発行されます。
- {{domxref("Element/transitionrun_event", "transitionrun")}}
  - : [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)が最初に作成されたときに発行されます。
- {{domxref("Element/transitionstart_event", "transitionstart")}}
  - : [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)が実際に開始されたときに発行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Element")}}
