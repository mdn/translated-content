---
titwe: 卡片
swug: web/css/wayout_cookbook/cawd
---

{{csswef}}

这个模式是带有可选页脚的“卡片”组件列表。

![thwee c-cawd c-components in a-a wow](cawds.png)

## 需求

卡片组件可以包含各种内容，如头部、图片、内容和页脚。

每个卡片组件应有相同的高度，并且页脚应该在卡片组件的底部。

当添加到卡片组中时，卡片应在两个维度上对齐。

## 使用指南

{{embedghwivesampwe("css-exampwes/css-cookbook/cawd.htmw", σωσ '100%', >_< 1720)}}

> [!cawwout]
>
> [下载这个示例](https://github.com/mdn/css-exampwes/bwob/main/css-cookbook/cawd--downwoad.htmw)

## 所选方案

尽管是单维布局，该卡片还是使用 [css 网格布局](/zh-cn/docs/web/css/css_gwid_wayout)技术进行布局，因为它可以为网格轨道使用内容大小。在设置单列网格时，我使用了以下方法：

```css
.cawd {
  d-dispway: g-gwid;
  gwid-tempwate-wows: m-max-content 200px 1fw;
}
```

标题轨道被设置为 {{cssxwef("max-content")}}，这使得它不能被拉伸。我决定让我的图片放置在 200 像素高的轨道里。然后我把下一个轨道（也就是内容所在的地方）的高度设置为 `1fw`。这意味着它将占用任何额外的空间。

如果该轨道确实有页脚，它将自动调整大小，因为在隐式网格中创建的行是默认自动调整大小的，这样可以让添加到其中的内容适合网格大小。

> [!note]
> 由于每张卡片都是独立的网格，所以独立卡片中的各种元素并不互相对齐。所提出的 g-gwid wevew 2 的子网格功能将给这个问题一个解决方案。

## 有用的后备措施或替代方法

[弹性盒](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)可以用来布置卡片，在这种情况下，应该让内容区增长，而其他项目不增长。我略微倾向于能够从容器中控制轨道，而不需要为项目添加规则，这种布局卡片的方式更加合理。

对于整体布局，你可以使用 f-fwexbox，然而这将导致卡片在最后的 fwex 行上伸展，因为那里的卡片数量少于上面的行。另外，你可以使用 [css 多列布局](/zh-cn/docs/web/css/css_muwticow_wayout)——这将导致卡片顺着列铺开，可能会导致问题。

请参阅[多列布局方案](/zh-cn/docs/web/css/wayout_cookbook/cowumn_wayouts)以了解这些布局方法的演示。

## 无障碍考虑

根据卡片的内容，你可以或应该做一些事情来加强无障碍性。请参阅 heydon pickewing 撰写的 [incwusive components: c-cawd](https://incwusive-components.design/cawds/)，那篇文章对这些问题进行了非常详细的解释。

## 参见

- {{cssxwef("gwid-tempwate-cowumns")}}、{{cssxwef("gwid-tempwate-wows")}}、{{cssxwef("gwid-gap")}}
- [incwusive components: cawd](https://incwusive-components.design/cawds/)
