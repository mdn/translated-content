---
title: HTMLTrackElement
slug: Web/API/HTMLTrackElement
l10n:
  sourceCommit: 9d5c9fbe387ba7c143fdd7c73a265b209b7f6ec4
---

{{APIRef("HTML DOM")}}

**`HTMLTrackElement`** 接口表示 {{Glossary("DOM")}} 中的 {{Glossary("HTML")}} {{HTMLElement("track")}} 元素。此元素可以作为 {{HTMLElement("audio")}} 或 {{HTMLElement("video")}} 的子元素，以指定包含隐藏式字幕或标题等信息的文本轨道使用。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLTrackElement.kind")}}
  - : 反映 [`kind`](/zh-CN/docs/Web/HTML/Reference/Elements/track#kind) HTML 属性的字符串，指示如何使用文本轨道。可能的值有：`subtitles`、`captions`、`descriptions`、`chapters` 或 `metadata`。
- {{domxref("HTMLTrackElement.src")}}
  - : 反映 [`src`](/zh-CN/docs/Web/HTML/Reference/Elements/track#src) HTML 属性的字符串，指示文本轨道数据的地址。
- {{domxref("HTMLTrackElement.srclang")}}
  - : 反映 [`srclang`](/zh-CN/docs/Web/HTML/Reference/Elements/track#srclang) HTML 属性的字符串，指示文本轨道数据的语言。
- {{domxref("HTMLTrackElement.label")}}
  - : 反映 [`label`](/zh-CN/docs/Web/HTML/Reference/Elements/track#label) HTML 属性的字符串，指示轨道的用户可读的标题。
- {{domxref("HTMLTrackElement.default")}}
  - : 反映 [`default`](/zh-CN/docs/Web/HTML/Reference/Elements/track#default) 属性的布尔值，如果用户的偏好没有指示另一个轨道更合适，则指示要启用该轨道。
- {{domxref("HTMLTrackElement.readyState")}} {{ReadOnlyInline}}
  - : 返回 `unsigned short` 显示轨道的准备状态：

    | 常量      | 值  | 描述                                                                                                  |
    | --------- | --- | ----------------------------------------------------------------------------------------------------- |
    | `NONE`    | 0   | 表示尚未获得文本轨道的提示（cue）。                                                                   |
    | `LOADING` | 1   | 表示正在加载文本轨道，到目前为止还没有遇到致命错误。解析器可能湘轨道中添加更多 cue。                  |
    | `LOADED`  | 2   | 表示已加载文本轨道，没有出现致命错误。                                                                |
    | `ERROR`   | 3   | 表示文本轨道已启用，但当用户代理尝试获取它时，以某种方式失败了。部分或全部 cue 可能丢失，且无法获得。 |

- {{domxref("HTMLTrackElement.track")}} {{ReadOnlyInline}}
  - : 返回 {{Domxref("TextTrack")}} 是轨道元素的文本轨道数据。

## 实例方法

_无特定方法；从其父接口 {{domxref("HTMLElement")}} 继承方法。_

## 事件

_从其父接口 {{domxref("HTMLElement")}} 继承事件。_

使用 {{domxref("EventTarget/addEventListener", "addEventListener()")}} 或为此接口的 `oneventname` 属性分配一个事件监听器来监听这些事件：

- {{domxref("HTMLTrackElement.cuechange_event", "cuechange")}}
  - : 当底层的 {{domxref("TextTrack")}} 更改了当前呈现的 cue 时发送事件。此事件始终发送到 `TextTrack`，但如果与轨道关联，则*也*会发送到 `HTMLTrackElement`。你可以使用 `oncuechange` 事件为此事件建立处理器。

## 使用说明

### 加载轨道的文本资源

如果轨道的 {{domxref("TextTrack.mode", "mode")}} 最初处于 `disabled` 状态，则描述文本轨道实际 cue 的 WebVTT 或 TTML 数据不加载。如果你需要在设置 `<track>` 之后对轨道执行任何处理，你应该确保轨道的 `mode` 是 `hidden`（如果你不想让它呈现给用户）或 `showing`（初始时显示轨道）。你可以以后根据需要更改模式。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("track")}}。
