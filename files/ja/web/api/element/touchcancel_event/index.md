---
title: 'Element: touchcancel event'
slug: Web/API/Element/touchcancel_event
---

{{APIRef}}

`touchcancel` イベントは、１つ以上のタッチポイントが実装固有の方法で中断されたときに発生します(例えば、タッチポイントが多すぎるとき)。

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("TouchEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{ DOMxRef("GlobalEventHandlers.ontouchcancel","ontouchcancel")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

サンプルコードはこちらです。 [Touch events](/ja/DOM/Touch_events).

## 仕様

| Specification                                                        | Status                           |
| -------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('Touch Events', '#event-touchcancel')}} | {{Spec2('Touch Events')}} |

## ブラウザ互換性

{{Compat}}

## 参照

- {{ domxref("GlobalEventHandlers.ontouchcancel","ontouchcancel")}}
- This event on [`Document`](/ja/docs/Web/API/Document) targets: [`touchcancel`](/ja/docs/Web/API/Document/touchcancel_event)
