---
title: PerformanceEventTiming
slug: Web/API/PerformanceEventTiming
l10n:
  sourceCommit: 1b6ae1c429b5a495fada425cc88ec2a3c7ab77db
---

{{APIRef("Performance API")}}

`PerformanceEventTiming` はイベントタイミング API のインターフェイスで、ユーザー操作によって発生させる特定のイベント型の待ち時間に関する分析結果を提供します。

## 解説

この API により、特定のイベント型（[下記参照](#公開されるイベント)）のイベントのタイムスタンプと処理時間が提供されるので、遅いイベントを可視化することができるようになります。例えば、ユーザー操作からそのイベントハンドラーが始まるまでの時間や、イベントハンドラーが実行するまでにかかる時間を監視することができます。

この API は、{{Glossary("first input delay")}} (FID) （ユーザーがこのアプリを最初に操作した時点から、ブラウザーが実際にその操作に応答することができるまでの時間）を測定するのに特に有益です。

通常、 `PerformanceEventTiming` オブジェクトを扱うには、 {{domxref("PerformanceObserver")}} インスタンスを作成し、 [`observe()`](/ja/docs/Web/API/PerformanceObserver/observe) メソッドを呼び出して、 [`type`](/ja/docs/Web/API/PerformanceEntry/entryType) オプションに `"event"` または `"first-input"` を渡します。 `PerformanceObserver` オブジェクトのコールバックは、 `PerformanceEventTiming` オブジェクトのリストとともに呼び出されます。例えば[下記の例](#イベントタイミング情報の取得)をご覧ください。

既定では、`PerformanceEventTiming` 項目は `duration` が 104ms 以上の場合に公開されます。調査によると、 100ms 以内に処理されないユーザー入力は遅いと考えられており、 104ms は 100ms より大きい最初の 8 の倍数です（セキュリティ上の理由から、この API は最も近い 8 の倍数に丸められます）。
しかし、[`observe()`](/ja/docs/Web/API/PerformanceObserver/observe) メソッドの `durationThreshold` オプションを使用して、{{domxref("PerformanceObserver")}} を別の閾値に設定することができます。

このインターフェイスは、親である {{domxref("PerformanceEntry")}} のメソッドとプロパティを継承しています。

{{InheritanceDiagram}}

### 公開されるイベント

イベントタイミング API で公開されるイベント型は以下の通りです。

<table>
  <tbody>
    <tr>
      <th scope="row">クリックイベント</th>
      <td>
        {{domxref("Element/auxclick_event", "auxclick")}},
        {{domxref("Element/click_event", "click")}},
        {{domxref("Element/contextmenu_event", "contextmenu")}},
        {{domxref("Element/dblclick_event", "dblclick")}}
      </td>
    </tr>
    <tr>
      <th scope="row">変換イベント</th>
      <td>
        {{domxref("Element/compositionend_event", "compositionend")}},
        {{domxref("Element/compositionstart_event", "compositionstart")}},
        {{domxref("Element/compositionupdate_event", "compositionupdate")}}
      </td>
    </tr>
    <tr>
      <th scope="row">ドラッグ &amp; ドロップイベント</th>
      <td>
        {{domxref("HTMLElement/dragend_event", "dragend")}},
        {{domxref("HTMLElement/dragenter_event", "dragenter")}},
        {{domxref("HTMLElement/dragleave_event", "dragleave")}},
        {{domxref("HTMLElement/dragover_event", "dragover")}},
        {{domxref("HTMLElement/dragstart_event", "dragstart")}},
        {{domxref("HTMLElement/drop_event", "drop")}}
      </td>
    </tr>
    <tr>
      <th scope="row">入力イベント</th>
      <td>
        {{domxref("Element/beforeinput_event", "beforeinput")}},
        {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <th scope="row">キーボードイベント</th>
      <td>
        {{domxref("Element/keydown_event", "keydown")}},
        {{domxref("Element/keypress_event", "keypress")}},
        {{domxref("Element/keyup_event", "keyup")}}
      </td>
    </tr>
    <tr>
      <th scope="row">マウスイベント</th>
      <td>
        {{domxref("Element/mousedown_event", "mousedown")}},
        {{domxref("Element/mouseenter_event", "mouseenter")}},
        {{domxref("Element/mouseleave_event", "mouseleave")}},
        {{domxref("Element/mouseout_event", "mouseout")}},
        {{domxref("Element/mouseover_event", "mouseover")}},
        {{domxref("Element/mouseup_event", "mouseup")}}
      </td>
    </tr>
    <tr>
      <th scope="row">ポインターイベント</th>
      <td>
        {{domxref("Element/pointerover_event", "pointerover")}},
        {{domxref("Element/pointerenter_event", "pointerenter")}},
        {{domxref("Element/pointerdown_event", "pointerdown")}},
        {{domxref("Element/pointerup_event", "pointerup")}},
        {{domxref("Element/pointercancel_event", "pointercancel")}},
        {{domxref("Element/pointerout_event", "pointerout")}},
        {{domxref("Element/pointerleave_event", "pointerleave")}},
        {{domxref("Element/gotpointercapture_event", "gotpointercapture")}},
        {{domxref("Element/lostpointercapture_event", "lostpointercapture")}}
      </td>
    </tr>
    <tr>
      <th scope="row">タッチイベント</th>
      <td>
        {{domxref("Element/touchstart_event", "touchstart")}},
        {{domxref("Element/touchend_event", "touchend")}},
        {{domxref("Element/touchcancel_event", "touchcancel")}}
      </td>
    </tr>
  </tbody>
</table>

なお、連続イベントであり、この時点では意味のあるイベントカウントやパフォーマンス指標を得ることができないため、リストに含まれていないイベントがあります。 {{domxref("Element/mousemove_event", "mousemove")}}, {{domxref("Element/pointermove_event", "pointermove")}}、{{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}}、{{domxref("Element/touchmove_event", "touchmove")}}、{{domxref("Element/wheel_event", "wheel")}}、{{domxref("HTMLElement/drag_event", "drag")}} です。

公開されるすべてのイベントのリストを取得するには、 {{domxref("performance.eventCounts")}} マップのキーを見ていくこともできます。

```js
const exposedEventsList = [...performance.eventCounts.keys()];
```

## コンストラクター

このインターフェイスは自分自身でコンストラクター持っていません。 `PerformanceEventTiming` インターフェイスが保持している情報を取得する一般的な方法については、[下記の例](#イベントタイミング情報の取得)を参照してください。

## インスタンスプロパティ

このインターフェイスは、イベントタイミングパフォーマンス項目型の以下の {{domxref("PerformanceEntry")}} プロパティを、次のように修飾子して拡張します。

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : {{domxref("DOMHighResTimeStamp")}} で、 `startTime` から次の描画までの時間（8ms に丸めたもの）を返します。
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : `"event"` （長いイベント）または `"first-input"` （最初のユーザー操作）を返します。
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : 関連するイベントの型を返します。
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : {{domxref("DOMHighResTimeStamp")}} で、関連付けられたイベントの [`timestamp`](/ja/docs/Web/API/Event/timeStamp) プロパティを表す値を返します。これはイベントが作成された時刻であり、ユーザーの操作が発生した時刻のプロキシーと考えることができます。

このインターフェイスは以下のプロパティにも対応しています。

- {{domxref("PerformanceEventTiming.cancelable")}} {{ReadOnlyInline}}
  - : 関連するイベントの [`cancelable`](/ja/docs/Web/API/Event/cancelable) プロパティを返します。
- {{domxref("PerformanceEventTiming.interactionId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 関連するイベントを発生させたユーザー操作を一意に識別する ID を返します。
- {{domxref("PerformanceEventTiming.processingStart")}} {{ReadOnlyInline}}
  - : イベント配信が開始された時刻を表す {{domxref("DOMHighResTimeStamp")}} を返します。ユーザー操作からイベントハンドラーが実行し始めるまでの時間を計測するには、 `processingStart-startTime` を計算します。
- {{domxref("PerformanceEventTiming.processingEnd")}} {{ReadOnlyInline}}
  - : イベント配信が終わった時刻を表す {{domxref("DOMHighResTimeStamp")}} を返します。イベントハンドラーが実行するのにかかった時間を計測するには、 `processingEnd-processingStart` を計算します。
- {{domxref("PerformanceEventTiming.target")}} {{ReadOnlyInline}}
  - : 関連付けられたイベントの最後の対象が除去されていない場合、それを返します。

## インスタンスメソッド

- {{domxref("PerformanceEventTiming.toJSON()")}}
  - : この `PerformanceEventTiming` オブジェクトの JSON 表現を返します。

## 例

### イベントタイミング情報の取得

イベントのタイミング情報を取得するには、 {{domxref("PerformanceObserver")}} のインスタンスを作成し、 [`observe()`](/ja/docs/Web/API/PerformanceObserver/observe) メソッドを呼び出して、 [`type`](/ja/docs/Web/API/PerformanceEntry/entryType) オプションの値として `"event"` または `"first-input"` を渡してください。また、ユーザーエージェントが文書の構築中にバッファリングしたイベントにアクセスするには、 `buffered` を `true` に設定する必要があります。 `PerformanceObserver` オブジェクトのコールバックは、 `PerformanceEventTiming` オブジェクトのリストとともに呼び出されます。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    // 時間全体
    const duration = entry.duration;

    // 入力遅延（イベント処理前）
    const delay = entry.processingStart - entry.startTime;

    // 同期イベント処理時間
    // （配信の開始と終了）
    const eventHandlerTime = entry.processingEnd - entry.processingStart;
    console.log(`Total duration: ${duration}`);
    console.log(`Event delay: ${delay}`);
    console.log(`Event handler duration: ${eventHandlerTime}`);
  });
});

// イベントのオブザーバーを登録
observer.observe({ type: "event", buffered: true });
```

異なる [`durationThreshold`](/ja/docs/Web/API/PerformanceObserver/observe#durationthreshold) を設定することもできます。既定では 104ms で、最小可能な閾値は 16ms です。

```js
observer.observe({ type: "event", durationThreshold: 16, buffered: true });
```

### First Input Delay (FID) の報告

{{Glossary("first input delay")}} または FID は、ユーザーが最初にページを操作した時（つまり、リンクをクリックしたりボタンをタップしたりした時）から、その操作に応答してブラウザーが実際にイベントハンドラーの処理を始めることができるまでの時刻を測定します。

```js
// Keep track of whether (and when) the page was first hidden, see:
// https://github.com/w3c/page-visibility/issues/29
// NOTE: ideally this check would be performed in the document <head>
// to avoid cases where the visibility state changes before this code runs.
let firstHiddenTime = document.visibilityState === "hidden" ? 0 : Infinity;
document.addEventListener(
  "visibilitychange",
  (event) => {
    firstHiddenTime = Math.min(firstHiddenTime, event.timeStamp);
  },
  { once: true },
);

// Sends the passed data to an analytics endpoint. This code
// uses `/analytics`; you can replace it with your own URL.
function sendToAnalytics(data) {
  const body = JSON.stringify(data);
  // Use `navigator.sendBeacon()` if available,
  // falling back to `fetch()`.
  (navigator.sendBeacon && navigator.sendBeacon("/analytics", body)) ||
    fetch("/analytics", { body, method: "POST", keepalive: true });
}

// Use a try/catch instead of feature detecting `first-input`
// support, since some browsers throw when using the new `type` option.
// https://webkit.org/b/209216
try {
  function onFirstInputEntry(entry) {
    // Only report FID if the page wasn't hidden prior to
    // the entry being dispatched. This typically happens when a
    // page is loaded in a background tab.
    if (entry.startTime < firstHiddenTime) {
      const fid = entry.processingStart - entry.startTime;

      // Report the FID value to an analytics endpoint.
      sendToAnalytics({ fid });
    }
  }

  // Create a PerformanceObserver that calls
  // `onFirstInputEntry` for each entry.
  const po = new PerformanceObserver((entryList) => {
    entryList.getEntries().forEach(onFirstInputEntry);
  });

  // Observe entries of type `first-input`, including buffered entries,
  // i.e. entries that occurred before calling `observe()` below.
  po.observe({
    type: "first-input",
    buffered: true,
  });
} catch (e) {
  // Do nothing if the browser doesn't support this API.
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
