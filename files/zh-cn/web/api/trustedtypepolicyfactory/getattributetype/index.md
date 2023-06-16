---
title: "TrustedTypePolicyFactory: getAttributeType() 方法"
---

{{DefaultAPISidebar("可信类型 API")}}

**`getAttributeType()`** 方法是 {{domxref("TrustedTypePolicyFactory")}} 接口的一部分，它允许 Web 开发者检查一个元素是否需要一个可信类型，如果需要，使用哪个可信类型。

## 语法

```js-nolint
getAttributeType(tagName, attribute)
getAttributeType(tagName, attribute, elementNS)
getAttributeType(tagName, attribute, elementNS, attrNS)
```

### 参数

- `tagName`
  - : 包含 HTML 标签名称的字符串。
- `attribute`
  - : 包含属性的字符串。
- `elementNS` {{optional_inline}}
  - : 包含命名空间的字符串，如果为空则默认为 HTML 命名空间。
- `attrNS` {{optional_inline}}
  - : 包含命名空间的字符串，如果为空则默认为 null。
### 返回值

一个字符串，其中之一：

- `"可信HTML"`
- `"可信脚本"`
- `"可信脚本URL"`

或者，空值。
## 示例

在此示例中，将 {{htmlelement("script")}} 元素和 [`src`](/zh-CN/docs/Web/HTML/Global_attributes#src) 属性传递给 `getAttributeType` 会返回 "TrustedScriptURL"。

```js
console.log(trustedTypes.getAttributeType("script", "src")); // "TrustedScriptURL"
```

## 规范
{{规格说明}}

## 浏览器兼容性

{{Compat}}
