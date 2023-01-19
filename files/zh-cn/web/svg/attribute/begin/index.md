---
title: begin
slug: Web/SVG/Attribute/begin
---

« [SVG 属性参考主页](/zh-CN/SVG/Attribute)

这个属性定义了动画何时开始。

这个属性值是一个分号分隔的数列值。SMIL 规范的["Evaluation of begin and end time lists"](http://www.w3.org/TR/2001/REC-smil-animation-20010904/#Timing-EvaluationOfBeginEndTimeLists)章节详细解释了开始时间数列。每个单独的值可以是下述之一：`<offset-value>`、`<syncbase-value>`、`<event-value>`、`<repeat-value>`、`<accessKey-value>`、`<wallclock-sync-value>`或者关键词`indefinite`。

## 用法

| 类别     | 动画定时属性                                                                  |
| -------- | ----------------------------------------------------------------------------- |
| 值       | \<begin-value-list>                                                            |
| 可变性   | No                                                                            |
| 规范文档 | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/animate.html#BeginAttribute) |

`<begin-value-list>`中的每一个值可以是下述之一：

- \<offset-value>
  - : 一个[时钟值](/zh-CN/SVG/Content_type#Clock-value)代表了一个相对于 SVG 文档开头的时间点，SVG 文档开头通常是指 load 事件或者 DOMReady 事件触发的时间点。负值是合法的。
- \<syncbase-value>
  - : 描述一个*syncbase*以及一个可选的来自于*syncbase*的时偏移。元素的动画开始时间被定义为相对于另一个动画的开头或者激活结束。一个 ID 及其后面跟着的 .begin 或 .end 构成了一个 syncbase，ID 引用到另一个动画元素，.begin 或 .end 用来确定到底是与引用的动画元素的动画开头同步、还是与引用的动画元素的动画激活结束同步。
- \<event-value>
  - : 描述了一个事件以及一个可选的时偏移，用来确定动画开始的时点。触发指定事件的时点，被定义为动画开始的时点。一个元素 ID 及其后面跟着的一个点及其后面跟着事件名构成了一个合法的 event-value 值。事件名必须是元素支持的事件名。全部合法的事件（不一定是所有元素都支持的事件）包括这些：focusin、focusout、`activate`、`click`、`mousedown`、`mouseup`、`mouseover`、`mousemove`、`mouseout`、`DOMSubtreeModified`、`DOMNodeInserted`、`DOMNodeRemoved`、`DOMNodeRemovedFromDocument`、`DOMNodeInsertedIntoDocument`、`DOMAttrModified`、`DOMCharacterDataModified`、`SVGLoad`、`SVGUnload`、`SVGAbort`、`SVGError`、`SVGResize`、`SVGScroll`、`SVGZoom`、`beginEvent`、`endEvent` 和 `repeatEvent`。
- \<repeat-value>
  - : 描述了一个符合条件重复事件。repeat 事件发生了指定次数的时间点，被定义为元素动画的开始时间点。
- \<accessKey-value>
  - : 描述了一个用来触发动画的访问键。当用户按下指定的键时，元素动画就开始了。
- \<wallclock-sync-value>
  - : 描述了一个动画开始时间，是真实世界钟的时点。时点的句法遵守 ISO8601 定义的句法。

## 示例

### Offset 示例

» [begin-1-offset.svg](/files/3290/begin-1-offset.svg)

### Syncbase 示例

» [begin-2-syncbase.svg](/files/3291/begin-2-syncbase.svg)

### Event 示例

» [begin-3-event.svg](/files/3292/begin-3-event.svg)

### Repeat 示例

» [begin-4-repeat.svg](/files/3293/begin-4-repeat.svg)

### Accesskey 示例

» [begin-5-accesskey.svg](/files/3294/begin-5-accesskey.svg)

## 元素

下列元素可以使用`begin`属性：

- [动画元素](/zh-CN/SVG/Element#Animation) »

## 规范

{{Specifications}}
