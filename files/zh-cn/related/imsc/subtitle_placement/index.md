---
title: IMSC 中的字幕位置
slug: Related/IMSC/Subtitle_placement
l10n:
  sourceCommit: 95e0fbb78a16450188753d0b53ca02a9fbd2a641
---

IMSC 允许对显示在视频内容之上的文本进行非常精确的位置控制。为简化屏幕文本的位置设置，可采用一些技巧和最佳实践。

## 考虑正确的文本位置

创建一个具备恰当文本位置与排版流向的 IMSC 文档，是需要确保准确性的最关键事项之一。与其他某些字幕格式不同，IMSC 允许将文本精确定位到屏幕上的任意位置。尽管如此，目前最常用的字幕样式仍是居中显示于屏幕底部或顶部。

## `<region>` 元素

`<region>` 元素本质上是在屏幕上创建一个用于容纳文本的矩形区域。屏幕上的文本永远不会显示在此区域之外。除了定义该文本区域的尺寸与位置外，`<region>` 元素还定义了文本的水平与垂直对齐方式。

在下方示例中，我们定义了两个具有相同尺寸（图像宽度的 80% 和图像高度的 80%）区域。盒子居中显示于屏幕之上。

{{EmbedGHLiveSample("imsc-examples/layout-top-bottom/layout-top-bottom.html", '100%', 1000)}}

此处需重点考虑以下各项：

- `tts:origin`——区域框的左上角坐标（X Y 值），应以百分比形式表示。
- `tts:extent`——描述区域框向右延伸至视频画面的范围，以及向下延伸的范围。
- `tts:backgroundColor`——描述区域框的背景颜色。通常设为透明，但若要符合你的设计需求，你也可以选择填充为指定颜色。
- `tts:showBackground`——应设为 `whenActive`。另一个允许的值为 `always`，它指示 IMSC 解码器同时显示所有设为 `always` 的区域框。这种情况极不可能是你希望实现的效果。
- `tts:textAlign`——文本的水平对齐方式。与文字处理软件类似，可设为 `left`、`center` 或 `right`。对于字幕而言，`center` 是最常用的文本对齐方式。
- `tts:displayAlign`——文本的垂直对齐方式。可设为 `before`、`center` 或 `after`。`before` 表示文本从区域框最顶端开始并向下排版；`center` 表示文本在区域框内垂直居中；`after` 表示文本从区域框最底端开始并向上排版。
