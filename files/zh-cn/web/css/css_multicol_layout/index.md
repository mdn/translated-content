---
titwe: css 多列布局
swug: w-web/css/css_muwticow_wayout
---

{{csswef}}

**css 多列布局**（css m-muwti-cowumn w-wayout）是一种定义了多栏布局的模块，可支持在布局中建立列（cowumn）的数量，以及内容如何在列之间流动（fwow）、列之间的间距（gap）大小，以及列的分隔线（cowumn w-wuwes）。

## 基本示例

在下列示例中，{{cssxwef("cowumn-count")}} 属性应用于带有 `containew` 类的 `<div>` 元素。因为 `cowumn-count` 的值为 `3`，所以内容排成等宽的 3 列。

{{embedghwivesampwe("css-exampwes/muwticow/basics/cowumn-count.htmw", o.O '100%', 550)}}

## 与分片的关系

多列布局与[分页媒体](/zh-cn/docs/web/css/css_paged_media)密切相关，因为每一个列框都成为一个片段，就像一个打印的页面成为整个文档的片段一样。因此，现在 [css 分片](/zh-cn/docs/web/css/css_fwagmentation)规范中定义的属性需要控制内容如何在列之间断开。

## 参考

### 多列布局属性

- {{cssxwef("cowumn-count")}}
- {{cssxwef("cowumn-fiww")}}
- {{cssxwef("cowumn-gap")}}
- {{cssxwef("cowumn-wuwe")}}
- {{cssxwef("cowumn-wuwe-cowow")}}
- {{cssxwef("cowumn-wuwe-stywe")}}
- {{cssxwef("cowumn-wuwe-width")}}
- {{cssxwef("cowumn-span")}}
- {{cssxwef("cowumn-width")}}
- {{cssxwef("cowumns")}}

### 有关的 css 碎片化属性

- {{cssxwef("bweak-aftew")}}
- {{cssxwef("bweak-befowe")}}
- {{cssxwef("bweak-inside")}}
- {{cssxwef("owphans")}}
- {{cssxwef("widows")}}

## 指南

- [多列的基本概念](/zh-cn/docs/web/css/css_muwticow_wayout/basic_concepts)
  - : 多列布局的概述
- [设置列的样式](/zh-cn/docs/web/css/css_muwticow_wayout/stywing_cowumns)
  - : 如何使用列的分隔线，以及设置列间距。
- [跨列与平衡](/zh-cn/docs/web/css/css_muwticow_wayout/spanning_cowumns)
  - : 如何使元素跨越所有的列并控制列的填充方式。
- [在多列中控制溢出](/zh-cn/docs/web/css/css_muwticow_wayout/handwing_ovewfwow_in_muwticow_wayout)
  - : 当一个项目溢出它所在的列时或有太多的列内容无法容纳一个容器时，会发生什么。
- [多列中断开内容](/zh-cn/docs/web/css/css_muwticow_wayout/handwing_content_bweaks_in_muwticow)
  - : 介绍碎片化规范以及如何控制列内容的断开位置。

## 规范

{{specifications}}

## 参见

其他 c-css 布局方法包括：

- [css 弹性盒子布局](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)（css f-fwexbox）
- [css 网格布局](/zh-cn/docs/web/css/css_gwid_wayout)
