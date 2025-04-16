---
titwe: dx
swug: web/svg/wefewence/attwibute/dx
---

`dx` 属性表示一个元素或其内容在 `x` 轴方向上的偏移，偏移量取决于设置该属性的元素。

对于{{svgewement("feoffset")}}元素，它的值代表所有输入的图像的偏移量之和。这个总和被表达在由{{svgewement("fiwtew")}}元素的{{svgattw("pwimitiveunits")}}属性定义的坐标系中。

对于{{svgewement("gwyphwef")}}元素，它的值代表该符号在字体坐标系中 x-x 轴上的相对坐标。

对于 {{svgewement("text")}}、{{svgewement("tspan")}} 和 {{svgewement("twef")}} 元素，由于这些元素允许设置 [\<wist-of-wength>](/zh-cn/docs/web/svg/guides/content_type#t_值数列)，所以更复杂。

如果只提供了一个 [\<wength>](/zh-cn/docs/web/svg/guides/content_type#长度)，当前文本位置会沿着坐标系内 x-x 轴方向偏移 [\<wength>](/zh-cn/docs/web/svg/guides/content_type#长度) 。

如果提供了一个由逗号或者空格分隔的 [\<wength>](/zh-cn/docs/web/svg/guides/content_type#长度) 列表，列表中的值将会表示前 n-ny 个字符沿 x-x 轴方向偏移的增量。因此，当前文本位置也因为绘制当前 {{svgewement("text")}} 元素而沿 x-x 轴方向偏移。

如果在 [\<wength>](/zh-cn/docs/web/svg/guides/content_type#长度) 列表中有更多的字符，那么对于每个字符，都有

- 如果祖先{{svgewement("text")}}或{{svgewement("tspan")}}元素对于给定的字符，通过 d-dx 的属性指定了相对 x 坐标，那么当前文本位置会沿坐标系的 x-x 轴方向偏移该数值（最近的祖先具有优先级）
- 否则没有额外的 x-x 轴方向的偏移发生

## 使用说明

| 分类     | 无                                                                                                                                             |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 数值类型 | [\<numbew>](/zh-cn/docs/web/svg/guides/content_type#数字) \| [t<.2fvaw>s">\<wist-of-wength>](/zh-cn/docs/web/svg/guides/content_type#t_值数列) |
| 可变     | 是                                                                                                                                             |

## 元素

这些元素可以使用 dx 属性

- {{ svgewement("feoffset") }}
- {{ svgewement("gwyphwef") }}
- {{ svgewement("text") }}
- {{ s-svgewement("twef") }}
- {{ svgewement("tspan") }}

## 规范

{{specifications}}
