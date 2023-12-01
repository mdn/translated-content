---
title: compositionupdate
slug: Web/API/Element/compositionupdate_event
---

**`compositionupdate`** 事件触发于字符被输入到一段文字的时候（这些可见字符的输入可能需要一连串的键盘操作、语音识别或者点击输入法的备选词）

<table class="properties">
  <tbody>
    <tr>
      <td>Bubbles</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Cancelable</td>
      <td>No</td>
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

## 属性

| Property                        | Type                              | Description                                                         |
| ------------------------------- | --------------------------------- | ------------------------------------------------------------------- |
| `target` {{ReadOnlyInline}}     | {{domxref("EventTarget")}}        | 焦点所在的，处理文字输入的元素。                                    |
| `type` {{ReadOnlyInline}}       | {{domxref("DOMString")}}          | The type of event.                                                  |
| `bubbles` {{ReadOnlyInline}}    | `boolean`                         | Does the event normally bubble?                                     |
| `cancelable` {{ReadOnlyInline}} | `boolean`                         | Is it possible to cancel the event?                                 |
| `view` {{ReadOnlyInline}}       | {{domxref("WindowProxy")}}        | {{domxref("Document.defaultView")}} (the `window` of the document). |
| `detail` {{ReadOnlyInline}}     | `long` (`float`)                  | 0.                                                                  |
| `data` {{ReadOnlyInline}}       | {{domxref("DOMString")}} (string) | 要被替换掉的字符串，如果输入时没有字符串被选，则为空字符串。只读。  |
| `locale` {{ReadOnlyInline}}     | {{domxref("DOMString")}} (string) | 输入事件的语言代号，或者空字符串。只读。                            |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [`compositionstart`](/zh-CN/docs/Web/API/Element/compositionstart_event)
- [`compositionupdate`](/zh-CN/docs/Web/API/Element/compositionupdate_event)
- [`compositionend`](/zh-CN/docs/Web/API/Element/compositionend_event)
