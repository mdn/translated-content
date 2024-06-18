---
title: image-rendering
slug: Web/SVG/Attribute/image-rendering
l10n:
  sourceCommit: cd840e78b6027a391fe1f11b745564cf3ebfb8e7
---

{{SVGRef}}

`image-rendering` 属性向浏览器提供了一个提示，即在图片处理时，如何进行速度 vs 质量之间的权衡。

即使原始数据和/或目标设备是索引颜色的，也总是在真彩色（例如，24位）颜色空间中进行重新采样。

> **备注：** 作为一个显示属性，`image-rendering` 可以用作 CSS 属性使用。请参考 {{cssxref("image-rendering", "CSS image-rendering")}} 获取更多的信息。

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
      <th scope="row">可动画的</th>
      <td>Yes</td>
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
