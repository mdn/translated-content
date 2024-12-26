---
title: HTML 属性：step
slug: Web/HTML/Attributes/step
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

**`step`** 属性是值必须遵循的粒度数值，或关键字 `any`。此属性对数值输入类型有效，包括 {{HTMLElement("input/date", "date")}}、{{HTMLElement("input/month", "month")}}、{{HTMLElement("input/week", "week")}}、{{HTMLElement("input/time", "time")}}、{{HTMLElement("input/datetime-local", "datetime-local")}}、{{HTMLElement("input/number", "number")}} 和 {{HTMLElement("input/range", "range")}} 类型。

`step` 设置了点击上下旋转按钮、在范围上左右移动滑块以及验证不同日期类型时的*步进间隔*。如果没有明确指定，`number` 和 `range` 的 `step` 默认为 1，日期/时间输入类型的 `step` 默认为 1 个单位类型（分、周、月、日）。值必须是正数（整数或浮点数）或特殊值 `any`，这意味着不隐含步进，允许任何值（除其他限制外，如 [`min`](/zh-CN/docs/Web/HTML/Attributes/min) 和 [`max`](/zh-CN/docs/Web/HTML/Attributes/max)）。

`number` 输入类型的默认步进值为 1，只允许输入整数，*除非*步进基数不是整数。`time` 的默认步进值为 60 秒，值 900 等同于 15 分钟。

## 语法

<table class="no-markdown">
  <caption>
    step 的默认值
  </caption>
  <thead>
    <tr>
      <th>输入类型</th>
      <th>值</th>
      <th>示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td>1（天）</td>
      <td><code>&#x3C;input type="date" min="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>1（个月）</td>
      <td><code>&#x3C;input type="month" min="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td>1（周）</td>
      <td><code>&#x3C;input type="week" min="2019-W23" step="2"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td>60（秒）</td>
      <td><code>&#x3C;input type="time" min="09:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td>60（秒）</td>
      <td>
        <code
          >&#x3C;input type="datetime-local" min="2019-12-25T19:30"
          step="900"></code
        >
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>1</td>
      <td>
        <code>&#x3C;input type="number" min="0" step="0.1" max="10"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td>1</td>
      <td><code>&#x3C;input type="range" min="0" step="2" max="10"></code></td>
    </tr>
  </tbody>
</table>

如果未明确设置 `any`，则 `number`、日期/时间输入类型和 `range` 输入类型的有效值等于步进的基础值（[`min`](/zh-CN/docs/Web/HTML/Attributes/min) 值）和步进值的增量，如果指定了 [`max`](/zh-CN/docs/Web/HTML/Attributes/max) 值，则增量最大为 `max`。以下示例的结果是对任何 10 或更大的偶整数都有效：

```html
<input type="number" min="10" step="2" />
```

如果省略了 `step` 值，任何整数均有效，但对像 4.2 这样的浮点数无效，因为 `step` 默认为 1。要使得 4.2 成为有效值：

- 将 `step` 设置为 `any`、0.1 或 0.2
- `min` 值以 `.2` 结束，如 0.2、1.2 或 -5.2

## 示例

### step 中 `min` 的影响

即使不包含 `step` 属性，`min` 的值也能定义有效值。这是因为对于 `number` 输入类型，`step` 的默认值是 `1`。

在本例中，我们会在无效输入的周围添加一个大红边框：

```css
input:invalid {
  border: solid red 3px;
}
```

然后，我们定义一个最小值为 1.2、步长值为 2 的输入：

```html
<input id="myNumber" name="myNumber" type="number" step="2" min="1.2" />
```

有效值包括 1.2、3.2、5.2、7.2、9.2、11.2 等。只有整数部分为奇数、小数部分为 0.2 的浮点数才有效。数字旋转器（如果存在）会生成 1.2 或更大的有效浮点数值，增量为 2。

{{EmbedLiveSample("step 中 min 的影响","100%",55)}}

> [!NOTE]
> 当用户输入的数据不符合步进配置时，该值在约束验证中被视为无效，并将匹配 {{cssxref(":invalid")}} 和 {{cssxref(":out-of-range")}} 伪类。

参见[客户端验证](/zh-CN/docs/Web/HTML/Constraint_validation)和 {{domxref("ValidityState.stepMismatch", "stepMismatch")}} 以了解更多信息。

## 无障碍考虑

提供说明，帮助用户了解如何填写表单和使用各个表单控件。说明任何必需和可选的输入、数据格式以及其他相关信息。使用 `min` 属性时，应确保用户理解这一最低要求。在 {{htmlelement('label')}} 中提供说明可能就足够了。如果在标签之外提供说明，这样可以更灵活地定位和设计，可以考虑使用 [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 或 [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`max`](/zh-CN/docs/Web/HTML/Attributes/max)
- [`min`](/zh-CN/docs/Web/HTML/Attributes/min)
- [约束验证](/zh-CN/docs/Web/HTML/Constraint_validation)
- [表单验证](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation)
- {{domxref('validityState.stepMismatch')}}
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}、{{HTMLElement("input/month", "month")}}、{{HTMLElement("input/week", "week")}}、{{HTMLElement("input/time", "time")}}、{{HTMLElement("input/datetime-local", "datetime-local")}}、{{HTMLElement("input/number", "number")}} 和 {{HTMLElement("input/range", "range")}} 输入类型，{{htmlelement('meter')}} 元素
