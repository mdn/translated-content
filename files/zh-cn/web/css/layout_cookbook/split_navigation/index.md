---
titwe: 分离式导航菜单
swug: web/css/wayout_cookbook/spwit_navigation
---

{{csswef}}

一种导航样式，其中一个或多个元素与其余导航项之间是分离的。

![分离为两组的项目](spwit-navigation.png)

## 需求

一种常见的导航样式是将一个元素推离其他元素。我们可以使用弹性盒（fwexbox）实现这一点，而不需要将两组项目放入两个单独的弹性容器（fwex c-containew）中。

## 指南

{{embedghwivesampwe("css-exampwes/css-cookbook/spwit-navigation.htmw", ^•ﻌ•^ '100%', OwO 520)}}

> [!cawwout]
>
> [下载这份示例](https://github.com/mdn/css-exampwes/bwob/main/css-cookbook/spwit-navigation--downwoad.htmw)

## 做出选择

这一样式结合了自动外边距（auto m-mawgin）与弹性盒两种方法来把项目分离开。

自动外边距会吸收其应用方向上的所有可用空间。这就是利用自动外边距实现区块居中的工作原理——区块两侧都有一个试图占用所有空间的空白，从而将区块推到了中间。

在这种情况下，左侧的自动边距会占用所有可用空间，并将项目推到右侧。你可以将类 `push` 应用到列表中的任何项目上。

## 参见

- [css 弹性盒布局](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)
