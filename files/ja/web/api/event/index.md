---
title: Event
slug: Web/API/Event
page-type: web-api-interface
tags:
  - インターフェイス
  - リファレンス
browser-compat: api.Event
translation_of: Web/API/Event
---
{{APIRef("DOM")}}

**`Event`** インターフェイスは DOM で発生するイベントを表します。

ユーザーの操作によって発生するイベント（マウスボタンのクリック、キーボードを叩くなど）もありますし、非同期タスクの進捗を表すための API によって生成されるイベントもあります。要素の [`HTMLElement.click()`](/ja/docs/Web/API/HTMLElement/click) の呼び出しや、イベントを定義し、 [`EventTarget.dispatchEvent()`](/ja/docs/Web/API/EventTarget/dispatchEvent) を使用して指定されたターゲットに送信するなどのようにプログラムから起動されるものもあります。

イベントには様々な型があり、イベントによっては基本の `Event` インターフェイスを基にした他のインターフェイスを使用することもあります。。 `Event` 自体は、すべてのイベントで共通のプロパティやメソッドを持っています。

多くの DOM 要素は、これらのイベントを受け入れる（または「待ち受けする」）ように設定することができ、それに応じてコードを実行してイベントを処理する（または「取り扱う」）ことができます。イベントハンドラーはふつう、様々な [HTML 要素](/ja/docs/Web/HTML/Element)（`<button>`, `<div>`, `<span>`, など）に [`EventTarget.addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用して結び付けられ（または「装着され」）、これが一般に古い HTML の[イベントハンドラー属性](/ja/docs/Web/HTML/Global_attributes)を使用する方法を置き換えています。さらに、このようなハンドラーは正しく追加されたら、必要に応じて [`removeEventListener()`](/ja/docs/Web/API/EventTarget/removeEventListener) を使用して切り離すことができます。

> **Note:** 1 つの要素が、まったく同じイベントに対して複数のハンドラーを持つこともできます。特に、別々の独立したコードモジュールが、それぞれ独立した目的のためにハンドラーを装着する場合（例えば、広告モジュールと統計モジュールの両方がビデオ視聴を監視しているウェブページ）です。

数多くの入れ子になった要素があり、それぞれに独自のイベントハンドラーがあった場合、イベントの処理はとても複雑になります。特に、親要素が子要素と全く同じイベントを受け取る場合、「空間的に」重なり合っているので、技術的にはイベントは両方で発生し、そのようなイベントの処理順序は、トリガーされた各ハンドラーの[イベントのバブリングとキャプチャ](/ja/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture)の設定次第で決まります。

## Event を基にしたインターフェイス

以下のリストは `Event` インターフェイスを基にしたインターフェイスの一覧であり、 MDN API リファレンスのそれぞれのドキュメントにリンクしています。

なお、すべてのイベントインターフェイスは、名称の末尾が "Event" になっています。

- {{domxref("AnimationEvent")}}
- {{domxref("AudioProcessingEvent")}}
- {{domxref("BeforeUnloadEvent")}}
- {{domxref("BlobEvent")}}
- {{domxref("ClipboardEvent")}}
- {{domxref("CloseEvent")}}
- {{domxref("CompositionEvent")}}
- {{domxref("CustomEvent")}}
- {{domxref("DeviceMotionEvent")}}
- {{domxref("DeviceOrientationEvent")}}
- {{domxref("DeviceProximityEvent")}}
- {{domxref("DragEvent")}}
- {{domxref("ErrorEvent")}}
- {{domxref("FetchEvent")}}
- {{domxref("FocusEvent")}}
- {{domxref("FormDataEvent")}}
- {{domxref("GamepadEvent")}}
- {{domxref("HashChangeEvent")}}
- {{domxref("HIDInputReportEvent")}}
- {{domxref("IDBVersionChangeEvent")}}
- {{domxref("InputEvent")}}
- {{domxref("KeyboardEvent")}}
- {{domxref("MediaStreamEvent")}}
- {{domxref("MessageEvent")}}
- {{domxref("MouseEvent")}}
- {{domxref("MutationEvent")}}
- {{domxref("OfflineAudioCompletionEvent")}}
- {{domxref("PageTransitionEvent")}}
- {{domxref("PaymentRequestUpdateEvent")}}
- {{domxref("PointerEvent")}}
- {{domxref("PopStateEvent")}}
- {{domxref("ProgressEvent")}}
- {{domxref("RTCDataChannelEvent")}}
- {{domxref("RTCPeerConnectionIceEvent")}}
- {{domxref("StorageEvent")}}
- {{domxref("SubmitEvent")}}
- {{domxref("SVGEvent")}}
- {{domxref("TimeEvent")}}
- {{domxref("TouchEvent")}}
- {{domxref("TrackEvent")}}
- {{domxref("TransitionEvent")}}
- {{domxref("UIEvent")}}
- {{domxref("UserProximityEvent")}}
- {{domxref("WebGLContextEvent")}}
- {{domxref("WheelEvent")}}

## コンストラクター

- {{domxref("Event.Event", "Event()")}}
  - : `Event` オブジェクトを生成して、呼び出し元に返します。

## プロパティ

- {{domxref("Event.bubbles")}} {{readonlyinline}}
  - : 論理値で、イベントが DOM を通してバブリングするかどうかを示します。
- {{domxref("Event.cancelable")}} {{readonlyinline}}
  - : 論理値で、イベントがキャンセル可能かを示します。
- {{domxref("Event.composed")}} {{readonlyinline}}
  - : 論理値で、シャドウ DOM と 通常の DOM の間の境界を越えてイベントがバブリングできるかどうかを示します。
- {{domxref("Event.currentTarget")}} {{readonlyinline}}
  - : イベントが現在登録されているターゲットへの参照。これは、現在イベントの送信先として予定されているオブジェクトです。これは*再ターゲティング*によって、途中で変更される可能性があります。
- {{domxref("Event.defaultPrevented")}} {{readonlyinline}}
  - : このイベントをキャンセルするために {{domxref("event.preventDefault()")}} が呼び出されたかどうかを示します。
- {{domxref("Event.eventPhase")}} {{readonlyinline}}
  - : イベントフローのどのフェーズで処理されているかを示します。 `NONE`, `CAPTURING_PHASE`, `AT_TARGET`, `BUBBLING_PHASE` のうちのいずれかの数値です。
- {{domxref("Event.srcElement")}} {{non-standard_inline}}
  - : {{domxref("Event.target")}} の、(古いバージョンの Microsoft Internet Explorer 由来の) 標準外の別名であり、ウェブの互換性の目的で一部の他のブラウザーでも対応が始められています。
- {{domxref("Event.target")}} {{readonlyinline}}
  - : イベントが最初に送出されたターゲットへの参照。
- {{domxref("Event.timeStamp")}} {{readonlyinline}}
  - : イベントが生成された時刻をミリ秒単位で示します。仕様書ではこの値を元期からの経過時間としていますが、実際のブラウザーでの定義は様々です。また、値を {{domxref("DOMHighResTimeStamp")}} に変更する作業が進行中です。
- {{domxref("Event.type")}} {{readonlyinline}}
  - : イベントの種類を識別する名前で、大文字小文字を区別しません。

### 古い標準外のプロパティ

- {{domxref("Event.cancelBubble")}} {{deprecated_inline}}
  - : {{domxref("Event.stopPropagation()")}} の過去の別名であり、そちらを使用してください。イベントハンドラーから戻る前に値 `true` を設定すると、イベントの伝播を抑制します。
- {{domxref("Event.explicitOriginalTarget")}} {{non-standard_inline}} {{readonlyinline}}
  - : イベントの明確な最初のターゲットです。
- {{domxref("Event.originalTarget")}} {{non-standard_inline}} {{readonlyinline}}
  - : イベントの再ターゲティング前の最初のターゲットです。
- {{domxref("Event.returnValue")}} {{deprecated_inline}}
  - : 過去のプロパティで、既存のサイトが動作するように対応されているものです。代わりに {{domxref("Event.preventDefault()")}} および {{domxref("Event.defaultPrevented")}} を使用してください。
- {{domxref("Event.composed", "Event.scoped")}} {{readonlyinline}} {{deprecated_inline}}
  - : 論理値で、指定されたイベントがシャドウルートを通過して標準 DOM までバブリングするかどうかを示します。代わりに {{domxref("Event.composed", "composed")}} を使用してください。
- {{domxref("Event.srcElement")}} {{readonlyinline}} {{deprecated_inline}}
  - : （Microsoft Internet Explorer の古いバージョンからの） {{domxref("Event.target")}} の別名です。代わりに {{domxref("Event.target")}} を使用してください。

## メソッド

- {{domxref("Event.composedPath()")}}
  - : （リスナーが呼び出されるオブジェクトへの）イベントのパスを返します。これはシャドウルートの {{domxref("ShadowRoot.mode")}} が閉じた状態で作成されたシャドウツリーのノードは含みません。

- {{domxref("Event.preventDefault()")}}
  - : （キャンセル可能な場合）イベントをキャンセルします。
- {{domxref("Event.stopImmediatePropagation()")}}
  - : この特定のイベントにおいて、他のすべてのイベントリスナーの呼び出しを防止します。これには、同じ要素に装着されたリスナーだけでなく、後で（例えばキャプチャ段階で）到達する要素に装着されたリスナーも含みます。
- {{domxref("Event.stopPropagation()")}}
  - : この DOM 内でこれ以上イベントが伝播することを停止します。

### 非推奨のメソッド

- {{domxref("Event.initEvent()")}} {{deprecated_inline}}
  - : 生成されたイベントの値を初期化します。イベントがすでに配信されている場合は、何も行いません。代わりにコンストラクター ({{domxref("Event.Event", "Event()")}}) を使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 利用できるイベントの種類: [イベントリファレンス](/ja/docs/Web/Events)
- [イベントターゲットの比較](/ja/docs/Web/API/Event/Comparison_of_Event_Targets) (`target` vs `currentTarget` vs `relatedTarget` vs `originalTarget`)
- [カスタムイベントの生成と発行](/ja/docs/Web/Events/Creating_and_triggering_events)
