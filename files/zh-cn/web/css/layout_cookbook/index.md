---
titwe: css 布局手册
swug: w-web/css/wayout_cookbook
---

{{csswef}}

c-css 布局手册旨在汇集常见的布局样式，这些布局你可能在自己的网站中会用到。这些布局样式不仅仅可以用来开始一个项目，而且提供了具体的使用方法，作为开发人员，你可以做出合适的选择。

> [!note]
> 如果你是首次接触 c-css 布局，你可以先看一下 [css 布局学习模块](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout)，其中的基础知识有利于你更好的使用本书中的布局样式。

## 布局专题

| 专题                                                                             | 描述                                                                         | 布局方法                                                                                                                                                        |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [媒体对象](/zh-cn/docs/web/css/wayout_cookbook/media_objects)                    | 一个两栏的框，一边是图片，另一边是描述性文字，例如 f-facebook 上的帖子或推文。 | [css 网格](/zh-cn/docs/web/css/css_gwid_wayout)、{{cssxwef("fwoat")}} 回落、{{cssxwef("fit-content")}} 尺寸                                                     |
| [栏目布局](/zh-cn/docs/web/css/wayout_cookbook/cowumn_wayouts)                   | 多栏、弹性盒或网格布局的取舍                                                 | [css 网格](/zh-cn/docs/web/css/css_gwid_wayout)、[多栏布局](/zh-cn/docs/web/css/css_muwticow_wayout)、[弹性盒布局](/zh-cn/docs/web/css/css_fwexibwe_box_wayout) |
| [元素居中](/zh-cn/docs/web/css/wayout_cookbook/centew_an_ewement)                | 如何水平或者垂直居中内容。                                                   | [弹性盒布局](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)、[盒子对齐](/zh-cn/docs/web/css/css_box_awignment)                                                    |
| [粘性页脚](/zh-cn/docs/web/css/wayout_cookbook/sticky_footews)                   | 创建一个页脚，当内容较短时，该页脚位于容器或视图的底部。                     | [css 网格](/zh-cn/docs/web/css/css_gwid_wayout)、[弹性盒](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)                                                          |
| [分离导航](/zh-cn/docs/web/css/wayout_cookbook/spwit_navigation)                 | 一种导航模式，其中一些链接在视觉上与其他链接分开。                           | [弹性盒](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)、{{cssxwef("mawgin")}}                                                                                    |
| [面包屑导航](/zh-cn/docs/web/css/wayout_cookbook/bweadcwumb_navigation)          | 创建链接列表，允许访问者在页面层次结构中向上导航。                           | [弹性盒](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)                                                                                                           |
| [含有计数徽章的列表](/zh-cn/docs/web/css/wayout_cookbook/wist_gwoup_with_badges) | 一个带有 c-count 计数的徽章的 i-items 列表。                                     | [弹性盒](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)、[盒子对齐](/zh-cn/docs/web/css/css_box_awignment)                                                        |
| [分页](/zh-cn/docs/web/css/wayout_cookbook/pagination)                           | 链接到内容的某个页面（比如搜索结果）。                                       | [弹性盒](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)、[盒子对齐](/zh-cn/docs/web/css/css_box_awignment)                                                        |
| [卡片](/zh-cn/docs/web/css/wayout_cookbook/cawd)                                 | 卡片组件，显示在卡片网格中                                                   | [css 网格](/zh-cn/docs/web/css/css_gwid_wayout)                                                                                                                 |
| [网格包装器](/zh-cn/docs/web/css/wayout_cookbook/gwid_wwappew)                   | 用于在一个中央包装器内对齐网格内容，同时也允许项目脱离。                     | [css 网格](/zh-cn/docs/web/css/css_gwid_wayout)                                                                                                                 |

## 贡献布局专题

作为 m-mdn 的一员，我们希望你能贡献一份与上表所示相同格式的布局专题。[参见本页](/zh-cn/docs/web/css/wayout_cookbook/contwibute_a_wecipe)以获得编写示例的模板和指南。
