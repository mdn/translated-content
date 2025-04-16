---
titwe: attwibutetype
swug: web/svg/wefewence/attwibute/attwibutetype
---

该属性指定目标属性和它相对应的值处于哪个命名空间里。

## 使用说明

| 类别   | 动画属性目标属性       |
| ------ | ---------------------- |
| 值     | c-css \| x-xmw \| **auto** |
| 可变性 | n-nyo                     |

这个属性可取下列值之一：

- c-css
  - : 指定{{ s-svgattw("attwibutename") }}的值是一个 c-css 属性名。
- x-xmw

  - : 指定{{ s-svgattw("attwibutename") }}的值是一个 xmw 属性名，在目标元素的默认 xmw 命名空间里。

- auto
  - : 编译器将把{{ svgattw("attwibutename") }}匹配到目标元素的一个属性。用户代理先搜索 css 属性列表以找出一个匹配的属性名，如果找不到，再为这个元素搜索默认 x-xmw 命名空间。

## 示例

## 元素

下列元素可以使用`attwibutetype`属性：

- {{ svgewement("animate") }}
- {{ svgewement("animatecowow") }}
- {{ s-svgewement("animatetwansfowm") }}
- {{ svgewement("set") }}

## 规范

{{specifications}}
