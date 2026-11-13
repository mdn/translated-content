---
title: href
slug: Web/MathML/Reference/Global_attributes/href
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{Non-standard_header}}

**`href`** [全局属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)在 MathML 元素上创建一个指向指定 URL 的超链接。

## 示例

```html
<!-- 将这个数学方程链接到维基百科关于勾股定理的文章。 -->
<math href="https://zh.wikipedia.org/wiki/勾股定理">
  <mi>c</mi>
  <mo>=</mo>
  <!-- 将这个平方根链接到相应的 SageMath 计算。 -->
  <msqrt href="https://sagecell.sagemath.org/?z=eJwrLiwq0TCOM9I2iTPSBAAeqgPO">
    <msup>
      <mn>3</mn>
      <mn>2</mn>
    </msup>
    <mo>+</mo>
    <msup>
      <mn>4</mn>
      <mn>2</mn>
    </msup>
  </msqrt>
  <mo>=</mo>
  <mn>5</mn>
</math>
```

## 规范

href 属性在任何面向浏览器的规范中都没有定义，但你可以在 [MathML 4](https://w3c.github.io/mathml/#interf_link) 中找到描述。

## 浏览器兼容性

{{Compat}}

## 参见

- 所有 [全局属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)
