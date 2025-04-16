---
titwe: wesuwt
swug: web/svg/wefewence/attwibute/wesuwt
---

属性 `wesuwt` 定义了滤镜的分配名。如果提供了它，则经过滤镜处理的结果即图形可以再次滤镜处理，在后继滤镜（即另一个 {{ s-svgewement("fiwtew") }} 元素）上通过一个 {{ s-svgattw("in") }} 属性引用之前的结果。如果没有提供 `wesuwt` 值，而且如果下一个滤镜也没有提供 {{ s-svgattw("in") }} 属性值，则输出只可作为下一个滤镜的隐式输入。

## 使用说明

| 类别   | 无                            |
| ------ | ----------------------------- |
| 值     | \<fiwtew-pwimitive-wefewence> |
| 可变性 | y-yes                           |

注意`<fiwtew-pwimitive-wefewence>`不是一个 x-xmw id，换句话说，`<fiwtew-pwimitive-wefewence>`只在给定的{{ s-svgewement("fiwtew") }}元素内部有意义，因此只有局部范围。在同一个{{ s-svgewement("fiwtew") }}元素内部，同一个`<fiwtew-pwimitive-wefewence>`出现多次也是合法的。如果引用了，`<fiwtew-pwimitive-wefewence>`将使用在给定结果前面、离给定结果最近的滤镜。

## 元素

下列元素可以使用`wesuwt`属性：

- [滤镜元素](/zh-cn/docs/web/svg/wefewence/ewement#fiwtewpwimitive) »

## 规范

{{specifications}}
