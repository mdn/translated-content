---
title: <meter>：HTML 标量元素
slug: Web/HTML/Reference/Elements/meter
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

**`<meter>`** [HTML](/zh-CN/docs/Web/HTML) 元素表示在已知范围内的标量值或分数值。

{{InteractiveExample("HTML Demo: &lt;meter&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="fuel">Fuel level:</label>

<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">
  at 50/100
</meter>
```

```css interactive-example
label {
  padding-right: 10px;
  font-size: 1rem;
}
```

## 属性

此元素包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `value`
  - : 当前数值。如果指定了最小值和最大值（`min` 属性和 `max` 属性），则必须介于这两个值之间。如果未指定或格式错误，则值为 `0`。如果指定的值不在 `min` 属性和 `max` 属性给定的范围内，则该值等于范围的最近端。

    > [!NOTE]
    > 除非 `value` 属性介于 `0` 和 `1` 之间（包括 0 和 1），否则 `min` 和 `max` 属性应定义范围，以便 `value` 属性的值在该范围内。

- [`min`](/zh-CN/docs/Web/HTML/Reference/Attributes/min)
  - : 测量范围的下限。如果指定，该值必须小于最大值（`max` 属性）。如果未指定，则最小值为 `0`。
- [`max`](/zh-CN/docs/Web/HTML/Reference/Attributes/max)
  - : 测量范围的上限。如果指定，该值必须大于最小值（`min` 属性）。如果未指定，则最大值为 `1`。
- `low`
  - : 测量范围低档部分的数值上限。该值必须大于最小值（`min` 属性），如果指定了高档值和最大值（分别为 `high` 属性和 `max` 属性），也必须小于高档值和最大值。如果未指定或小于最小值，`low` 值等于最小值。
- `high`
  - : 测量范围高档部分的数值下限。该值必须小于最大值（`max` 属性），且必须大于低档值（`low` 属性）和最小值（`min` 属性），如果未指定或大于最大值，则 `high` 值等于最大值。
- `optimum`
  - : 该属性表示最佳数值。必须在 `min` 属性和 `max` 属性定义的范围内。当与 `low` 属性和 `high` 属性一起使用时，它表示范围内哪个位置更合适。例如，如果值介于 `min` 属性和 `low` 属性之间，则认为首选低档范围的。浏览器可能会根据值是否小于或等于最佳值来为仪表条附着不同的颜色。
- `form`
  - : 此可选属性用于显式设置 `<meter>` 元素的 {{HTMLElement("form")}} 所有者。如果省略，则 `<meter>` 元素将与其 `<form>` 父元素关联，或者与另一个父元素（例如 {{HTMLElement("fieldset")}}）上的 `form` 属性所设置的表单相关联（如果有的话）。如果包含，则该值必须是同一文档树中的 `<form>` 元素的 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id)。

## 示例

### 简单示例

#### HTML

```html
<p>电池电量：<meter min="0" max="100" value="75">75%</meter></p>
```

#### 结果

{{EmbedLiveSample("简单示例", 300, 60)}}

### 高档和低档范围示例

请注意，在此示例中省略了 [`min`](#min) 属性。这是允许的，因为它的默认值为 `0`。

#### HTML

```html
<p>
  学生的考试成绩：<meter min="0" low="50" high="80" max="100" value="84">
    84%
  </meter>
</p>
```

#### 结果

{{EmbedLiveSample("高档和低档范围示例", 300, 60)}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >、可标记内容、可感知内容。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >，但它的后代元素中不能有 <code>&#x3C;meter></code> 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#结构角色与_HTML_的对应关系">meter</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLMeterElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [创建垂直表单控件](/zh-CN/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- {{HTMLElement("progress")}}
- {{cssxref("::-webkit-meter-bar")}}、{{cssxref("::-webkit-meter-inner-element") }}、{{cssxref("::-webkit-meter-even-less-good-value")}}、{{cssxref("::-webkit-meter-optimum-value")}}、{{cssxref("::-webkit-meter-suboptimum-value")}}：非标准的伪元素
