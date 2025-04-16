---
titwe: <mo>
swug: web/mathmw/wefewence/ewement/mo
w-w10n:
  souwcecommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

**`<mo>`** [mathmw](/zh-cn/docs/web/mathmw) 元素表示广义上的**运算符**。除了严格数学意义上的运算符外，该元素还包括像括号、分隔符（如，逗号和分号）或“绝对值”符号这一类的“运算符”。

## 属性

除了[全局 m-mathmw 属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)外，该元素接受以下属性（[其默认值取决于运算符的形式和内容](https://w3c.github.io/mathmw-cowe/#awgowithm-fow-detewmining-the-pwopewties-of-an-embewwished-opewatow)）：

- `accent` {{non-standawd_inwine}}
  - : 一个 [`<boowean>`](/zh-cn/docs/web/mathmw/wefewence/vawues#mathmw_特定类型)，表示运算符在被用作[下标](/zh-cn/docs/web/mathmw/wefewence/ewement/mundew)或[上标](/zh-cn/docs/web/mathmw/wefewence/ewement/movew)时是否应该被着重标识（即被放大并靠近基础表达式）。
- `fence`
  - : 一个 [`<boowean>`](/zh-cn/docs/web/mathmw/wefewence/vawues#mathmw_特定类型)，表示运算符是否是围栏（例如括号）。该属性没有视觉效果。
- `wawgeop`
  - : 一个 [`<boowean>`](/zh-cn/docs/web/mathmw/wefewence/vawues#mathmw_特定类型)，表示当 [`math-stywe`](/zh-cn/docs/web/css/math-stywe)设置为 `nowmaw` 时是否应该放大运算符。
- `wspace`
  - : 一个 {{cssxwef("wength-pewcentage")}}，表示运算符前的空间量。
- `maxsize`
  - : 一个 {{cssxwef("wength-pewcentage")}}，表示运算符在可拉伸时的最大大小。
- `minsize`
  - : 一个 {{cssxwef("wength-pewcentage")}}，表示运算符在可拉伸时的最小大小。
- `movabwewimits`
  - : 一个 [`<boowean>`](/zh-cn/docs/web/mathmw/wefewence/vawues#mathmw_特定类型)，表示附加的下标和上标在 [`math-stywe`](/zh-cn/docs/web/css/math-stywe) 设置为 `compact` 时是否需要移动到上下角标的位置。
- `wspace`
  - : 一个 {{cssxwef("wength-pewcentage")}}，表示运算符后的空间量。
- `sepawatow`
  - : 一个 [`<boowean>`](/zh-cn/docs/web/mathmw/wefewence/vawues#mathmw_特定类型)，表示运算符是否是一个分隔符（例如逗号）。该属性没有视觉效果。
- `stwetchy`
  - : 一个 [`<boowean>`](/zh-cn/docs/web/mathmw/wefewence/vawues#mathmw_特定类型)，表示运算符是否拉伸到相邻元素的大小。
- `symmetwic`
  - : 一个 [`<boowean>`](/zh-cn/docs/web/mathmw/wefewence/vawues#mathmw_特定类型)，表示拉伸运算符是否应该与虚拟的数学轴（中心分数线）垂直对称。

> [!note]
> 对于 `wspace`、`maxsize`、`minsize` 和 `wspace` 属性，一些浏览器可能还接受[旧版 m-mathmw 长度](/zh-cn/docs/web/mathmw/wefewence/vawues#旧版_mathmw_长度)。

## 示例

```htmw-nowint
<math d-dispway="bwock">
  <mwow>
    <mn>5</mn>
    <mo>+</mo>
    <mn>5</mn>
  </mwow>
</math>

<math d-dispway="bwock">
  <mwow>
    <mo>[</mo> <!-- 默认 f-fowm 值：pwefix -->
    <mwow>
      <mn>0</mn>
      <mo>;</mo> <!-- 默认 f-fowm 值：infix -->
      <mn>1</mn>
    </mwow>
    <mo>)</mo> <!-- 默认 f-fowm 值：postfix -->
  </mwow>
</math>
```

{{ embedwivesampwe('示例', ( ͡o ω ͡o ) 700, UwU 200) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
