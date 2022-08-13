---
title: GlobalEventHandlers
slug: Web/API/GlobalEventHandlers
tags:
  - API
  - DOM
  - GlobalEventHandlers
  - HTML DOM
  - Mixin
  - Reference
  - events
  - ミックスイン
translation_of: Web/API/GlobalEventHandlers
---
{{ApiRef("HTML DOM")}}

**`GlobalEventHandlers`** ミックスインは、 {{domxref("HTMLElement")}} や {{domxref("Document")}} 、 {{domxref("Window")}} といったインターフェイスに共通のイベントハンドラーを示します。もちろん、これらのインターフェイスには、以下のものに加えて他のイベントハンドラーがある場合もあります。

> **Note:** **メモ**: `GlobalEventHandlers` はミックスインであり、インターフェイスではありません。 `GlobalEventHandlers` 型のオブジェクトは作成できません。

## プロパティ

_このインターフェイスには、以下のイベントハンドラー以外のプロパティはありません。_

### イベントハンドラー

以下のイベントハンドラーは {{domxref("GlobalEventHandlers")}} ミックスインで定義されており、 {{domxref("HTMLElement")}}, {{domxref("Document")}}, {{domxref("Window")}}、さらに Web Worker 向けには {{domxref("WorkerGlobalScope")}} が実装しています。

- {{domxref("GlobalEventHandlers.onabort")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{domxref("HTMLMediaElement/abort_event", "abort")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onanimationcancel")}} {{Non-standard_inline}}
  - : {{event("Event_handlers", "event handler")}} で、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)がキャンセルされたことを示す {{event("animationcancel")}} イベントが送信されたときに呼び出されます。
- {{domxref("GlobalEventHandlers.onanimationend")}} {{Non-standard_inline}}
  - : {{event("Event_handlers", "event handler")}} で、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)の再生が停止したことを示す、 {{event("animationend")}} イベントが送信されたときに呼び出されます。
- {{domxref("GlobalEventHandlers.onanimationiteration")}} {{Non-standard_inline}}
  - : {{event("Event_handlers", "event handler")}} で、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)のアニメーションシーケンスが新たなな繰り返しに入ったことを示す、{{event("animationiteration")}} イベントが送信されたときに呼び出されます。
- {{domxref("GlobalEventHandlers.onanimationstart")}} {{Non-standard_inline}}
  - : {{event("Event_handlers", "event handler")}} で、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)の再生が開始したことを示す、{{event("animationstart")}} イベントが送信されたときに呼び出されます。
- {{domxref("GlobalEventHandlers.onauxclick")}} {{Non-standard_inline}}
  - : {{event("Event_handlers", "event handler")}} で、入力デバイスで非プライマリーボタン (例えばマウスの中ボタン) が押下されたことを示す、 {{event("auxclick")}} イベントが送信されたときに呼び出されます。
- {{domxref("GlobalEventHandlers.onblur")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("blur")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onerror")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("error")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onfocus")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("focus")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.oncancel")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("cancel")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.oncanplay")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("canplay")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.oncanplaythrough")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("canplaythrough")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onchange")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("change")}} イベントが発生した時にときび出すコードを表します。
- {{domxref("GlobalEventHandlers.onclick")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("click")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onclose")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("close")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.oncontextmenu")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("contextmenu")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.oncuechange")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("cuechange")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.ondblclick")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("dblclick")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.ondrag")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("drag")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.ondragend")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("dragend")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.ondragenter")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("dragenter")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.ondragexit")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("dragexit")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.ondragleave")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("dragleave")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.ondragover")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("dragover")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.ondragstart")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("dragstart")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.ondrop")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("drop")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.ondurationchange")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("durationchange")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onemptied")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("emptied")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onended")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("ended")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onformdata")}}
  - : {{event("Event_handlers", "event handler")}} で、フォームデータが構築されたことを表す入力リストの後で発生する {{event("formdata")}} イベントの処理をします。
- {{domxref("GlobalEventHandlers.ongotpointercapture")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("gotpointercapture")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.oninput")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("input")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.oninvalid")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("invalid")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onkeydown")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("keydown")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onkeypress")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("keypress")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onkeyup")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("keyup")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onload")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("load")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onloadeddata")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("loadeddata")}} イベントが発生したときに呼び出すコードをします。
- {{domxref("GlobalEventHandlers.onloadedmetadata")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("loadedmetadata")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onloadend")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("loadend")}} イベントが発生した (リソースの読み込みの進行が停止した) ときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onloadstart")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("loadstart")}} イベントが発生した (リソースの読み込みを開始した) ときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onlostpointercapture")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("lostpointercapture")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onmousedown")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("mousedown")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onmouseenter")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("mouseenter")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onmouseleave")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("mouseleave")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onmousemove")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("mousemove")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onmouseout")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("mouseout")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onmouseover")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("mouseover")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onmouseup")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("mouseup")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onmousewheel")}} {{Non-standard_inline}} {{Deprecated_inline}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("mousewheel")}} イベントが発生したときに呼び出すコードを表します。廃止予定です。 代わりに `onwheel` を使ってください。
- {{ domxref("GlobalEventHandlers.onwheel") }}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("wheel")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onpause")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("pause")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onplay")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("play")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onplaying")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("playing")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onpointerdown")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("pointerdown")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onpointermove")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("pointermove")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onpointerup")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("pointerup")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onpointercancel")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("pointercancel")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onpointerover")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("pointerover")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onpointerout")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("pointerout")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onpointerenter")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("pointerenter")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onpointerleave")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("pointerleave")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onpointerlockchange")}} {{experimental_inline}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("pointerlockchange")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onpointerlockerror")}} {{experimental_inline}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("pointerlockerror")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onprogress")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("progress")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onratechange")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("ratechange")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onreset")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("reset")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onresize")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("resize")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onscroll")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("scroll")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onseeked")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("seeked")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onseeking")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("seeking")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onselect")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("select")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onselectstart")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("selectstart")}} イベントが発生した (ユーザーがウェブページで新たにテキスト選択を開始した) ときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onselectionchange")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("selectionchange")}} イベントが発生した (ウェブページで選択されたテキストが替わった) ときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onshow")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("show")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onsort")}} {{experimental_inline}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("sort")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onstalled")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("stalled")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onsubmit")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("submit")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onsuspend")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("suspend")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.ontimeupdate")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("timeupdate")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.onvolumechange")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("volumechange")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.ontouchcancel")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("touchcancel")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.ontouchend")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("touchend")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.ontouchmove")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("touchmove")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.ontouchstart")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("touchstart")}} イベントが発生したときに呼び出すコードを表します。
- {{domxref("GlobalEventHandlers.ontransitioncancel")}}
  - : {{event("Event_handlers", "event handler")}} で、 [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions)がキャンセルされたことを示す、 {{event("transitioncancel")}} イベントが送信されたときに呼び出されます。
- {{domxref("GlobalEventHandlers.ontransitionend")}}
  - : {{event("Event_handlers", "event handler")}} で、 [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions)の再生が停止したことを示す、{{event("transitionend")}} イベントが送信されたときに呼び出されます。
- {{domxref("GlobalEventHandlers.ontransitionrun")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("transitionrun")}} イベントが送信されたときに呼び出され、 [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions)が実行されていることを示しますが、開始されているとは限りません。
- {{domxref("GlobalEventHandlers.ontransitionstart")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("transitionstart")}} イベントが送信されたときに呼び出され、 [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions)が遷移を開始したことを示します。
- {{domxref("GlobalEventHandlers.onwaiting")}}
  - : {{event("Event_handlers", "event handler")}} で、 {{event("waiting")}} イベントが発生したときに呼び出すコードを表します。

## メソッド

_このインターフェイスではメソッドを定義していません。_

## 仕様書

| 仕様書                                                                                                                       | 状態                                 | 備考                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("Selection API",'', 'Extension to GlobalEventHandlers')}}                                 | {{Spec2('Selection API')}} | `onselectionchange` を追加。                                                                                                                |
| {{SpecName('Pointer Lock', '#extensions-to-the-document-interface', 'Extension of Document')}} | {{Spec2('Pointer Lock')}}     | {{domxref("Document")}} で `onpointerlockchange`、`onpointerlockerror` を追加。実験的に `GlobalEventHandlers` で実装されています。 |
| {{SpecName('HTML WHATWG', '#globaleventhandlers', 'GlobalEventHandlers')}}                         | {{Spec2('HTML WHATWG')}}     | 最新のスナップショットである {{SpecName("HTML5.1")}} から変更なし。                                                                |
| {{SpecName('HTML5.1', '#globaleventhandlers', 'GlobalEventHandlers')}}                                 | {{Spec2('HTML5.1')}}         | {{SpecName("HTML WHATWG")}} のスナップショット。{{SpecName("HTML5 W3C")}} のスナップショットに `onsort` を追加。            |
| {{SpecName("HTML5 W3C", "#globaleventhandlers", "GlobalEventHandlers")}}                             | {{Spec2('HTML5 W3C')}}         | {{SpecName("HTML WHATWG")}} のスナップショット。`GlobalEventHandlers` を作成 (以前はプロパティが実装対象に存在していました)。      |

## ブラウザーの互換性

{{Compat("api.GlobalEventHandlers")}}

## 関連情報

- {{domxref("Element")}}
- {{event("Event_handlers", "event handler")}}
- {{domxref("Event")}}
