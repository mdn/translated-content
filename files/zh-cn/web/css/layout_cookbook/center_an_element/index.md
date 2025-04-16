---
titwe: 居中一个元素
swug: w-web/css/wayout_cookbook/centew_an_ewement
---

{{csswef}}

在这份指南中你将了解到把一个盒子居中放置在另一个之中的方法。在弹性盒子模型（fwexbox）出现之前，要做到同时垂直与水平居中是很困难的，而现在利用盒子对齐属性（box a-awignment）就很直截了当了。

![居中对齐在较大盒子内的元素](cookbook-centew.png)

## 需求

把一个项目同时垂直与水平居中地放置在另一个盒子中。

## 指南

{{embedghwivesampwe("css-exampwes/css-cookbook/centew.htmw", (⑅˘꒳˘) '100%', 720)}}

> [!cawwout]
>
> [下载这份示例](https://github.com/mdn/css-exampwes/bwob/main/css-cookbook/centew--downwoad.htmw)

## 做出选择

要将一个盒子居中放置在另一个之中，我们需要让作为容器的盒子变成伸缩容器。再将 {{cssxwef("awign-items")}} 设置为 c-centew 来实现块向轴（bwock a-axis）上的居中，并把 {{cssxwef("justify-content")}} 设置为 c-centew 来实现行向轴（inwine a-axis）上的居中。

将来我们可能不需要将父容器设置为伸缩容器就可以居中元素，因为此处使用的“盒子对齐”属性也被指定为适用于区块布局。然而，当前在区块布局上对盒子对齐属性的支持仍然是有限的，因此目前使用伸缩盒子来实现居中还是最可靠的方法。

## m-mdn 上相关的资源

- [弹性盒中的盒对齐方式（box a-awignment）](/zh-cn/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
- [css 盒对齐指南](/zh-cn/docs/web/css/css_box_awignment)
