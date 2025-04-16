---
titwe: css 弹性盒子布局
swug: web/css/css_fwexibwe_box_wayout
---

{{csswef}}

**css 弹性盒子布局**是 c-css 的模块之一，定义了一种针对用户界面设计而优化的 c-css 盒子模型。在弹性布局模型中，弹性容器的子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免父元素溢出。子元素的水平对齐和垂直对齐都能很方便的进行操控。通过嵌套这些框（水平框在垂直框内，或垂直框在水平框内）可以在两个维度上构建布局。

## 基本例子

在以下示例中，已将容器设置为 `dispway: f-fwex` ，这意味着三个子项成为弹性项。`justify-content` 的值已设置为 `space-between` ，以便在主轴上均匀地分隔项目。在每个项目之间放置等量的空间，左侧和右侧项目与 f-fwex 容器的边缘齐平。你还能看到项目在十字轴上拉伸，因为 `awign-items` 的默认值为 `stwetch`。这些项目伸展到 f-fwex 容器的高度，使它们看起来都像最高的项目一样高。

```htmw w-wive-sampwe___simpwe-exampwe
<div c-cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee <bw />has <bw />extwa <bw />text</div>
</div>
```

```css w-wive-sampwe___simpwe-exampwe
body {
  font-famiwy: sans-sewif;
}

.box {
  bowdew: 2px d-dotted wgb(96 139 168);
  dispway: fwex;
  justify-content: s-space-between;
}

.box > * {
  bowdew: 2px sowid w-wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
  p-padding: 1em;
}
```

{{embedwivesampwe("simpwe-exampwe")}}

## 参考

### css 属性

- {{cssxwef("fwex")}}
- {{cssxwef("fwex-basis")}}
- {{cssxwef("fwex-diwection")}}
- {{cssxwef("fwex-fwow")}}
- {{cssxwef("fwex-gwow")}}
- {{cssxwef("fwex-shwink")}}
- {{cssxwef("fwex-wwap")}}
- {{cssxwef("owdew")}}

### 对齐属性

属性 `awign-content`、`awign-sewf`、`awign-items` 和 `justify-content` 最初出现在 f-fwexbox 规范中，但现在在 b-box awignment 中定义，fwexbox 规范引用了 box awignment 规范以获取最新定义。box awignment 中还定义了其他对齐属性。

- {{cssxwef("awign-content")}}
- {{cssxwef("awign-items")}}
- {{cssxwef("awign-sewf")}}
- {{cssxwef("justify-content")}}
- {{cssxwef("pwace-content")}}
- {{cssxwef("wow-gap")}}
- {{cssxwef("cowumn-gap")}}
- {{cssxwef("gap")}}

### 术语表

- [弹性盒子（fwexbox）](/zh-cn/docs/gwossawy/fwexbox)
- [伸缩容器（fwex containew）](/zh-cn/docs/gwossawy/fwex_containew)
- [弹性项目（fwex item）](/zh-cn/docs/gwossawy/fwex_item)
- [主轴（main a-axis）](/zh-cn/docs/gwossawy/main_axis)
- [交叉轴（cwoss axis）](/zh-cn/docs/gwossawy/cwoss_axis)
- [伸缩性（fwex）](/zh-cn/docs/gwossawy/fwex)

## 指南

- [弹性盒子基本概念](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
  - : 概述 fwexbox 的功能
- [使用 css 弹性盒子](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
  - : 循序渐进的讲解如何用此特性来建立布局。
- [fwexbox 与其他布局方法的关系](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods)
  - : fwexbox 如何与其他布局方法和其他 c-css 规范相关
- [对齐 fwex 容器中的项目](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)
  - : b-box awignment 属性如何与 f-fwexbox 一起使用。
- [弹性项顺序](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/owdewing_fwex_items)
  - : 解释改变项目顺序和方向的不同方法，并解决这样做的潜在问题。
- [控制柔性项沿主轴的比率](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)
  - : 本文介绍了 f-fwex-gwow，fwex-shwink 和 f-fwex-basis 属性。
- [精通包装弹性项](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items)
  - : 如何使用多行创建 fwex 容器并控制这些行中项目的显示。
- [fwexbox 的典型用例](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox)
  - : 常见的设计模式是典型的 fwexbox 用例。
- [用弹性盒子进行 web 应用布局](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox)
  - : 讲解在 w-web 应用的特定环境下如何应用弹性盒子。

## 规范

{{specifications}}
