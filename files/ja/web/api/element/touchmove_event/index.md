---
title: 'Element: touchmove イベント'
slug: Web/API/Element/touchmove_event
---

{{APIRef}}

`touchmove` イベントは、タッチ面上で 1 つ以上のタッチ点が移動したときに発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("TouchEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{ domxref("GlobalEventHandlers.ontouchmove","ontouchmove")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

これらのイベントのコード例は、専用のページ「[タッチイベント](/ja/docs/Web/API/Touch_events)」にあります。

## 仕様書

| 仕様書                                                           | 状態                             |
| ---------------------------------------------------------------- | -------------------------------- |
| {{SpecName('Touch Events', '#event-touchmove')}} | {{Spec2('Touch Events')}} |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [タッチイベント](/ja/docs/Web/API/Touch_events)
- {{ domxref("GlobalEventHandlers.ontouchmove","ontouchmove")}}
- {{domxref("Element/mousemove_event", "mousemove")}} と {{domxref("GlobalEventHandlers.onmousemove", "onmousemove")}}
- {{domxref("Document")}} をターゲットとしたこのイベント: {{domxref("Document/touchmove_event", "touchmove")}}
