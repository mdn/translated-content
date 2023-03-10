---
title: <meter>
slug: Web/HTML/Element/meter
---

## 摘要

**HTML `<meter>` Element** represents either a scalar value within a known range or a fractional value.

> **備註：** Unless the **value** attribute is between 0 and 1 (inclusive), the **min** attribute and **max** attribute should define the range so that the **value** attribute's value is within it.

- _[Content categories](/zh-TW/docs/HTML/Content_categories)_ [Flow content](/zh-TW/docs/HTML/Content_categories#Flow_content), [phrasing content](/zh-TW/docs/HTML/Content_categories#Phrasing_content), labelable content, palpable content.
- _Permitted content_ [Phrasing content](/zh-TW/docs/HTML/Content_categories#Phrasing_content), but there must be no `<meter>` element among its descendants.
- _Tag omission_ {{no_tag_omission}}
- _Permitted parent elements_ Any element that accepts [phrasing content](/zh-TW/docs/HTML/Content_categories#Phrasing_content).
- _DOM interface_ {{domxref("HTMLMeterElement")}}

## 屬性

This element includes the [global attributes](/zh-TW/docs/HTML/Global_attributes).

- `value`
  - : The current numeric value. This must be between the minimum and maximum values (**min** attribute and **max** attribute) if they are specified. If unspecified or malformed, the value is 0. If specified, but not within the range given by the **min** attribute and **max** attribute, the value is equal to the nearest end of the range.
- `min`
  - : The lower numeric bound of the measured range. This must be less than the maximum value (**max** attribute), if specified. If unspecified, the minimum value is 0.
- `max`
  - : The upper numeric bound of the measured range. This must be greater than the minimum value (**min** attribute), if specified. If unspecified, the maximum value is 1.
- `low`
  - : The upper numeric bound of the low end of the measured range. This must be greater than the minimum value (**min** attribute), and it also must be less than the high value and maximum value (**high** attribute and **max** attribute, respectively), if any are specified. If unspecified, or if less than the minimum value, the **low** value is equal to the minimum value.
- `high`
  - : The lower numeric bound of the high end of the measured range. This must be less than the maximum value (**max** attribute), and it also must be greater than the low value and minimum value (**low** attribute and **min** attribute, respectively), if any are specified. If unspecified, or if greater than the maximum value, the **high** value is equal to the maximum value.
- `optimum`
  - : This attribute indicates the optimal numeric value. It must be within the range (as defined by the **min** attribute and **max** attribute). When used with the **low** attribute and **high** attribute, it gives an indication where along the range is considered preferable. For example, if it is between the **min** attribute and the **low** attribute, then the lower range is considered preferred.
- `form`
  - : This attribute associates the element with a `form` element that has ownership of the `meter` element. For example, a `meter` might be displaying a range corresponding to an `input` element of **type** _number_. This attribute is only used if the `meter` element is being used as a form-associated element; even then, it may be omitted if the element appears as a descendant of a `form` element.

## 範例

### Simple example

```html
<p>Heat the oven to <meter min="200" max="500" value="350">350 degrees</meter>.</p>
```

On Google Chrome, the resulting meter looks like this:

![meter1.png](screen_shot_2020-10-12_at_10.10.53_pm.png)

### 高/低範圍範例

Note that in this example the **min** attribute is omitted; this is allowed, as it will default to 0.

```html
<p>He got a <meter low="69" high="80" max="100" value="84">B</meter> on the exam.</p>
```

On Google Chrome, the resulting meter looks like this:

![meter2.png](screen_shot_2020-10-12_at_10.11.52_pm.png)

## 詳述

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## See also

- {{HTMLElement("progress")}}

{{HTMLSidebar}}
