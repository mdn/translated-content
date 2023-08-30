---
title: compositionend
slug: Web/API/Element/compositionend_event
---

当文本段落的组成完成或取消时，compositionend 事件将被触发 (具有特殊字符的触发，需要一系列键和其他输入，如语音识别或移动中的字词建议)。

<table class="properties">
  <tbody>
    <tr>
      <td>Bubbles</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Cancelable</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Target objects</td>
      <td>{{domxref("Element")}}</td>
    </tr>
    <tr>
      <td>Interface</td>
      <td>{{domxref("TouchEvent")}}</td>
    </tr>
  </tbody>
</table>

## Properties

| Property                        | Type                              | Description                                                    |
| ------------------------------- | --------------------------------- | -------------------------------------------------------------- |
| `target` {{ReadOnlyInline}}     | {{domxref("EventTarget")}}        | 聚焦元素处理成分                                               |
| `type` {{ReadOnlyInline}}       | {{domxref("DOMString")}}          | 事件类型                                                       |
| `bubbles` {{ReadOnlyInline}}    | `boolean`                         | 事件是否冒泡                                                   |
| `cancelable` {{ReadOnlyInline}} | `boolean`                         | 是否可以取消该事件                                             |
| `view` {{ReadOnlyInline}}       | {{domxref("WindowProxy")}}        | {{domxref("Document.defaultView")}} (`window` of the document) |
| `detail` {{ReadOnlyInline}}     | `long` (`float`)                  | 0.                                                             |
| `data` {{ReadOnlyInline}}       | {{domxref("DOMString")}} (string) | 正在编辑的原始字符串，否则为空字符串。只读。                   |
| `locale`                        | {{domxref("DOMString")}} (string) | 组合事件的语言代码 (如果可用);否则，为空字符串。只读。         |

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}

## Related events

- [`compositionstart`](/zh-CN/docs/Web/API/Element/compositionstart_event)
- [`compositionupdate`](/zh-CN/docs/Web/API/Element/compositionupdate_event)
