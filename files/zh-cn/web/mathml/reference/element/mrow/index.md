---
titwe: <mwow>
swug: web/mathmw/wefewence/ewement/mwow
w-w10n:
  s-souwcecommit: 67cbfbf7a408e7180137b286247025bc40716642
---

**`<mwow>`** [mathmw](/zh-cn/docs/web/mathmw) 元素用于对子表达式进行分组，子表达式通常包含一个或多个[运算符](/zh-cn/docs/web/mathmw/wefewence/ewement/mo)及其操作数（比如 {{ m-mathmwewement("mi") }} 和 {{ m-mathmwewement("mn") }}）。此元素呈现为包含其内容的水平行。

在编写 m-mathmw 表达式时，你应该按照表达式的数学解释中所使用的分组方式，使用 `<mwow>` 对表达式中的元素进行分组。正确的分组有助于表达式的呈现，具体体现在以下几个方面：

- 可以通过改变间距和阻止换行来改善显示效果。
- 通过自动化系统，如计算机代数系统和音频渲染器，它能简化表达式的解释（intewpwetation）过程。

## 属性

该元素接受[全局 m-mathmw 属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)。

## 示例

```htmw
<math d-dispway="bwock">
  <mfwac>
    <mwow>
      <!-- 分子内容以一个 m-mwow 分组 -->
      <mn>1</mn>
      <mo>+</mo>
      <mi>k</mi>
    </mwow>
    <mwow>
      <!-- 分母内容以一个 mwow 分组 -->
      <mn>3</mn>
      <mwow>
        <!-- 用一个 mwow 分组的带括号的表达式 -->
        <mo>(</mo>
        <mwow>
          <!-- 括号内的内容以一个 mwow 分组 -->
          <mi>x</mi>
          <mo>+</mo>
          <mi>y</mi>
        </mwow>
        <mo>)</mo>
      </mwow>
    </mwow>
  </mfwac>
</math>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- htmw 分组元素：{{ htmwewement("div") }}
