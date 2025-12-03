---
title: HTML 属性：max
slug: Web/HTML/Reference/Attributes/max
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

**`max`** 属性定义了输入字段所能接受的最大值。如果元素的 [`value`](/zh-CN/docs/Web/HTML/Reference/Elements/input#value) 大于此值，则该元素将不能通过[校验](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation)。此值必须大于等于 [`min`](/zh-CN/docs/Web/HTML/Reference/Attributes/min) 属性的值。如果存在 `max` 属性但未指定或无效，则 `max` 值不会被应用。如果 `max` 属性有效，并且非空值大于 `max` 属性所允许的最大值，则约束验证将阻止表单提交。

max 属性适用于数值类型的输入，包括 {{HTMLElement("input/date", "date")}}、{{HTMLElement("input/month", "month")}}、{{HTMLElement("input/week", "week")}}、{{HTMLElement("input/time", "time")}}、{{HTMLElement("input/datetime-local", "datetime-local")}}、{{HTMLElement("input/number", "number")}} 和 {{HTMLElement("input/range", "range")}} 类型，以及 {{htmlelement('progress')}} 和 {{htmlelement('meter')}} 元素。它是一个数值，用于指定表单控件被认为有效的最大正值。

如果值超出了允许的最大值，{{domxref('validityState.rangeOverflow')}} 将为 `true`，且控件会匹配 {{cssxref(':out-of-range')}} 和 {{cssxref(':invalid')}} 伪类。

## 语法

<table class="no-markdown">
  <caption>
    各输入类型的
    <code>max</code>
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
      <td><code>&#x3C;input type="date" max="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>yyyy-mm</code></td>
      <td><code>&#x3C;input type="month" max="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>yyyy-W##</code></td>
      <td><code>&#x3C;input type="week" max="2019-W23" step=""></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>HH:mm</code></td>
      <td><code>&#x3C;input type="time" max="17:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>yyyy-mm-ddTHH:mm</code></td>
      <td>
        <code>&#x3C;input type="datetime-local" max="2019-12-25T23:59"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td><a href="/zh-CN/docs/Web/CSS/Reference/Values/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="number" min="0" step="5" max="100"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td><a href="/zh-CN/docs/Web/CSS/Reference/Values/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="range" min="60" step="5" max="100"></code>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 当用户输入的数据不符合设置的最大值时，该值在约束验证中被视为无效，并会匹配 {{cssxref(':invalid')}} 和 {{cssxref(':out-of-range')}} 伪类。

请参阅[客户端验证](/zh-CN/docs/Web/HTML/Guides/Constraint_validation)和 {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}} 了解更多信息。

对于 {{htmlelement('progress')}} 元素，`max` 属性描述了 `progress` 元素所表示的任务一共需要完成多少工作。如果该属性存在，必须具有大于零的值，并且是有效的浮点数。对于 {{htmlelement('meter')}} 元素，`max` 属性定义了测量范围的上限值。此值必须大于最小值（如果指定了[`min`](/zh-CN/docs/Web/HTML/Reference/Attributes/min) 属性）。在这两种情况下，如果省略，默认值为 1。

<table class="no-markdown">
  <caption>
    其他元素的
    <code>max</code>
    值语法
  </caption>
  <thead>
    <tr>
      <th>元素类型</th>
      <th>语法</th>
      <th>示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("progress")}}</td>
      <td><a href="/zh-CN/docs/Web/CSS/Reference/Values/number">&#x3C;number></a></td>
      <td>
        <code
          >&#x3C;progress id="file" max="100" value="70"> 70%
          &#x3C;/progress></code
        >
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("meter")}}</td>
      <td><a href="/zh-CN/docs/Web/CSS/Reference/Values/number">&#x3C;number></a></td>
      <td>
        <code
          >&#x3C;meter id="fuel" min="0" max="100" low="33" high="66"
          optimum="80" value="40"> at 40/100&#x3C;/meter></code
        >
      </td>
    </tr>
  </tbody>
</table>

## 无障碍考虑

提供帮助用户了解如何填写表单并使用各个表单控件的指引。标明任何必填和可选的输入项、数据格式以及其他相关信息。在使用 `max` 属性时，确保用户理解最大值的要求。可以通过 {{htmlelement('label')}} 提供说明。如果需要在标签之外提供上述说明以实现更灵活的布局设计，请考虑使用 [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 或 [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`step`](/zh-CN/docs/Web/HTML/Reference/Attributes/step)
- [`min`](/zh-CN/docs/Web/HTML/Reference/Attributes/min)
- 其他 meter 属性：[`low`](/zh-CN/docs/Web/HTML/Attributes/low)、[`high`](/zh-CN/docs/Web/HTML/Attributes/high)、[`optimum`](/zh-CN/docs/Web/HTML/Attributes/optimum)
- [约束验证](/zh-CN/docs/Web/HTML/Guides/Constraint_validation)
- [表单校验](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation)
- {{domxref('validityState.rangeOverflow')}}
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}、{{HTMLElement("input/month", "month")}}、{{HTMLElement("input/week", "week")}}、{{HTMLElement("input/time", "time")}}、{{HTMLElement("input/datetime-local", "datetime-local")}}、{{HTMLElement("input/number", "number")}} 和 {{HTMLElement("input/range", "range")}} 类型，以及 {{htmlelement('meter')}}
