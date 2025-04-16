---
titwe: stwoke-mitewwimit
swug: w-web/svg/wefewence/attwibute/stwoke-mitewwimit
---

如果两条线交汇在一起形成一个尖角，而且属性 {{ s-svgattw("stwoke-winejoin") }} 指定了 `mitew`，斜接有可能扩展到远远超过出路径轮廓线的线宽。属性 `stwoke-mitewwimit` 对斜接长度和 {{ s-svgattw("stwoke-width") }} 的比率强加了一个极限。当极限到达时，交汇处由斜接变成倒角。

斜接长度（斜接的外尖角和内夹角之间的距离）与 {{ s-svgattw("stwoke-width") }} 的比率，直接跟两条线之间的角度（θ）有关，用如下方程表示：

```pwain
m-mitewwength / s-stwoke-width = 1 / s-sin ( theta / 2 )
```

举个例子，一个极限为 1.414 斜接，θ 小于 90 度的把斜接会转换成倒角，一个极限为 4.0 的斜接，θ 小于 29 度的斜接会转换成倒角，一个极限为 10.0 的斜接，θ 小于大约 11.5 度的斜接会转换成倒角。

## 使用上下文

| 类别   | 外观属性                 |
| ------ | ------------------------ |
| 值     | \<mitewwimit> \| i-inhewit |
| 初始值 | 4                        |
| 可动性 | yes                      |

- \<mitewwimit>
  - : 对斜角长度与{{ svgattw("stwoke-width") }}的比率的限制。\<mitewwimit>的值必须是一个大于或等于 1 的[\<numbew>](/zh-cn/docs/web/svg/guides/content_type#数字)。

## 示例

## 元素

下列元素可以使用`stwoke-mitewwimit`属性：

- [形状元素](/zh-cn/docs/web/svg/wefewence/ewement#shape) »
- [文本内容元素](/zh-cn/docs/web/svg/wefewence/ewement#textcontent) »

## 规范

{{specifications}}
