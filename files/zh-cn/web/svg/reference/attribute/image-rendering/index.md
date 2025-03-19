---
title: image-rendering
slug: Web/SVG/Reference/Attribute/image-rendering
l10n:
  sourceCommit: cd840e78b6027a391fe1f11b745564cf3ebfb8e7
---

**`image-rendering`** 属性向浏览器提供了一个在图片处理时应如何权衡速度和质量的提示。

即使原始数据和/或目标设备是索引颜色的，也总是在真彩色（例如，24 位）颜色空间中进行重新采样。

> [!NOTE]
> 作为一个表现属性，`image-rendering` 可以用作 CSS 属性。请参考 {{cssxref("image-rendering", "CSS image-rendering")}}，以获取更多的信息。

你可以和下面的 SVG 元素一起使用该属性：

- {{SVGElement("image")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <code>auto</code> | <code>optimizeSpeed</code> |
        <code>optimizeQuality</code>
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : 表示用户代理可以在速度和质量间做适当的权衡，但是质量将比速度更重要一些。
- `optimizeSpeed`
  - : 表示用户代理应该更注重速度。
- `optimizeQuality`
  - : 表示用户代理应该更注重质量。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("image-rendering", "CSS image-rendering")}}
