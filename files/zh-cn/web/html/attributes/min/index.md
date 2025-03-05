---
title: HTML 属性：min
slug: Web/HTML/Attributes/min
l10n:
  sourceCommit: 77e46a5b43f828fcc6bd30facddc6fc4bfe84f9b
---

{{HTMLSidebar}}

**`min`** 属性定义了可接受和有效的输入最小值。如果元素的 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 小于此值，则该元素将无法通过[验证](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation)。此值必须小于等于 `max` 属性的值。

某些输入类型具有默认的最小值。如果输入项没有默认的最小值，且 `min` 指定的值无法转换为有效的数字（或未设置最小值），则输入没有最小值。

以下输入类型支持该属性：{{HTMLElement("input/date", "date")}}、{{HTMLElement("input/month", "month")}}、{{HTMLElement("input/week", "week")}}、{{HTMLElement("input/time", "time")}}、{{HTMLElement("input/datetime-local", "datetime-local")}}、{{HTMLElement("input/number", "number")}} 和 {{HTMLElement("input/range", "range")}} 类型，以及 {{htmlelement('meter')}} 元素。

## 语法

<table class="no-markdown">
  <caption>
    不同输入类型的
    <code>min</code>
    值语法
  </caption>
  <thead>
    <tr>
      <th>输入类型</th>
      <th>语法</th>
      <th>示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td><code>yyyy-mm-dd</code></td>
      <td><code>&#x3C;input type="date" min="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>yyyy-mm</code></td>
      <td><code>&#x3C;input type="month" min="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>yyyy-W##</code></td>
      <td><code>&#x3C;input type="week" min="2019-W23" step=""></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>HH:mm</code></td>
      <td><code>&#x3C;input type="time" min="09:00" step="900"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/datetime-local", "datetime-local")}}</td>
      <td><code>yyyy-mm-ddTHH:mm</code></td>
      <td><code>&#x3C;input type="datetime-local" min="2019-12-25T19:30"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td><a href="/zh-CN/docs/Web/CSS/number">&#x3C;number></a></td>
      <td><code>&#x3C;input type="number" min="0" step="5" max="100"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td><a href="/zh-CN/docs/Web/CSS/number">&#x3C;number></a></td>
      <td><code>&#x3C;input type="range" min="60" step="5" max="100"></code></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 当用户输入的数据不符合设置的 min 值时，该值在约束验证中被视为无效，并会匹配 {{cssxref(':invalid')}} 和 {{cssxref(':out-of-range')}} 伪类。

参阅[客户端验证](/zh-CN/docs/Web/HTML/Constraint_validation)和 {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}} 获取更多信息。

对于 {{htmlelement('meter')}} 元素，`min` 属性定义了测量范围的最小数值边界。若指定，则该值必须小于最大值（[`max`](/zh-CN/docs/Web/HTML/Attributes/max) 属性）。在两种情况下，如果省略，则默认值为 1。

<table class="no-markdown">
  <caption>
    其他元素的
    <code>min</code>
    值语法
  </caption>
  <thead>
    <tr>
      <th>输入类型</th>
      <th>语法</th>
      <th>示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("meter")}}</td>
      <td><a href="/zh-CN/docs/Web/CSS/number">&#x3C;number></a></td>
      <td><code>&#x3C;meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="40"> at 40/100&#x3C;/meter></code></td>
    </tr>
  </tbody>
</table>

### 对 step 的影响

`min` 和 `step` 的值决定了有效的值范围，即使未包含 `step` 属性，`step` 也会默认取值为 `1`。

我们可以为无效输入添加一个红色边框：

```css
input:invalid {
  border: solid red 3px;
}
```

然后定义一个最小值为 7.2 且省略了 step 属性的输入元素，此时 step 默认值为 1。

```html
<input id="myNumber" name="myNumber" type="number" min="7.2" value="8" />
```

由于 `step` 的默认值为 1，因此有效值包括 `7.2`、`8.2`、`9.2` 等。而值 8 是无效的。由于我们包含了无效值，支持的浏览器将显示该值为无效。

{{EmbedLiveSample("Impact_on_step",200,55)}}

如果没有明确指定，`number` 和 `range` 类型的 `step` 默认值为 1，而日期、时间输入类型的 `step` 默认值为 1 个单位（秒、周、月、天）。

## 无障碍考虑

提供说明以帮助用户理解如何填写表单及使用各个表单控件。指明必填和可选输入、数据格式及其他相关信息。在使用 `min` 属性时，确保用户理解该最小值要求。将说明放置在 {{htmlelement('label')}} 标签内通常即可满足需求。如果需要在标签之外提供上述说明以实现更灵活的布局设计，请考虑使用 [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 或 [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`step`](/zh-CN/docs/Web/HTML/Attributes/step)
- [`max`](/zh-CN/docs/Web/HTML/Attributes/max)
- 其他 meter 属性：[`low`](/zh-CN/docs/Web/HTML/Attributes/low)、[`high`](/zh-CN/docs/Web/HTML/Attributes/high)、[`optimum`](/zh-CN/docs/Web/HTML/Attributes/optimum)
- [约束验证](/zh-CN/docs/Web/HTML/Constraint_validation)
- [表单验证](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation)
- {{domxref('validityState.rangeUnderflow')}}
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}、{{HTMLElement("input/month", "month")}}、{{HTMLElement("input/week", "week")}}、{{HTMLElement("input/time", "time")}}、{{HTMLElement("input/datetime-local", "datetime-local")}}、{{HTMLElement("input/number", "number")}} 和 {{HTMLElement("input/range", "range")}} 类型，以及 {{htmlelement('meter')}}
