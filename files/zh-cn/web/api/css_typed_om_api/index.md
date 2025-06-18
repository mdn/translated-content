---
title: CSS 类型对象模型 API
slug: Web/API/CSS_Typed_OM_API
l10n:
  sourceCommit: 9151632d3aacb4f7d7228d5446ca66c7f44f406a
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

CSS 类型对象模型 API（CSS Typed Object Model API）通过将 CSS 的值暴露为类型化的 JavaScript 对象而不是字符串的方式简化了 CSS 属性操作。与 {{domxref('HTMLElement.style')}} 相比，这不仅简化了 CSS 操作还提高了性能。

通常，CSS 值可以在 JavaScript 中以字符串形式读取和写入，这很慢且很麻烦。CSS 类型对象模型 API 提供了与底层值交互的接口，并通过使用专门的 JS 对象来表示它们，这些对象比字符串解析和连接更容易、更可靠地进行操作和理解。这对作者来说更容易（例如，数值反映为实际的 JS 数字，并为其定义了单位感知的数学运算）。它通常也更快，因为可以直接操作值，然后廉价地转换回底层值，而无需同时构建和解析 CSS 字符串。

CSS 类型对象模型既允许对分配给 CSS 属性的值进行高性能操作，又可以实现更易于理解和编写的可维护代码。

## 接口

### `CSSStyleValue`

CSS 类型对象模型 API 的 {{domxref('CSSStyleValue')}} 接口是所有可通过类型对象模型访问 CSS 值的基类。此类的实例可用于任何需要字符串的地方。

- {{domxref('CSSStyleValue/parse_static', 'CSSStyleValue.parse()')}}
  - : 此方法允许通过 CSS 字符串构造 `CSSNumericValue`。它将特定 CSS 属性设置为指定值，并将第一个值作为 `CSSStyleValue` 对象返回。
- {{domxref('CSSStyleValue.parseAll_static', 'CSSStyleValue.parseAll()')}}
  - : 此方法将特定 CSS 属性的所有出现设置为指定值，并返回 `CSSStyleValue` 对象数组，每个对象包含一个提供的值。

### `StylePropertyMap`

CSS 类型对象模型 API 的 {{domxref('StylePropertyMap')}} 接口提供了 CSS 声明块的表示，它是 `CSSStyleDeclaration` 的替代。

- {{domxref('StylePropertyMap.set()')}}
  - : `此方法将具有给定属性的 CSS 声明更改为给定的值。
- {{domxref('StylePropertyMap.append()')}}
  - : 此方法基于给定的属性和值，向 `StylePropertyMap` 添加新的 CSS 声明的方法。
- {{domxref('StylePropertyMap.delete()')}}
  - : 此方法将从 `StylePropertyMap` 中删除具有给定属性的 CSS。
- {{domxref('StylePropertyMap.clear()')}}
  - : `此方法将从 `StylePropertyMap` 删除所有声明。

### `CSSUnparsedValue`

CSS 类型对象模型 API 的 {{domxref('CSSUnparsedValue')}} 接口表示引用自定义属性的属性值。它由字符串片段和变量引用列表组成。

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}} 构造器
  - : 创建一个新的 `CSSUnparsedValue` 对象，该对象代表引用自定义属性的属性值。
- {{domxref('CSSUnparsedValue.entries()')}}
  - : 返回给定对象自有的可枚举属性 `[key, value]` 对的数组，其顺序与 `for...in` 循环提供的顺序相同（不同之处在于 `for...in` 循环也会枚举原型链中的属性）。
- {{domxref('CSSUnparsedValue.forEach()')}}
  - : 针对 `CSSUnparsedValue` 的每个元素执行一次提供的回调函数。
- {{domxref('CSSUnparsedValue.keys()')}}
  - : 方法返回一个新的*数组迭代器*对象，该对象包含数组中每个索引的键。

### `CSSKeywordValue` 序列化

CSS 类型对象模型 API 的 {{domxref('CSSUnparsedValue')}} 接口创建一个对象来表示 CSS 关键字和其他标识符。

- {{domxref("CSSKeywordValue.CSSKeywordValue", "CSSKeywordValue()")}} 构造函数
  - : 构造函数创建一个新的代表 CSS 关键字和其他标识符的 {{domxref("CSSKeywordValue.CSSKeywordValue", "CSSKeywordValue()")}} 对象。
- {{domxref('CSSKeywordValue.value()')}}
  - : `CSSKeywordValue` 接口的属性，返回或设置 `CSSKeywordValue` 的值。

## CSSStyleValue 接口

{{domxref('CSSStyleValue')}} 接口是所有可通过类型对象模型访问 CSS 值的基类。子类包括：

- {{domxref('CSSImageValue')}}
  - : 表示采用图像的属性值的接口，例如：[`background-image`](/zh-CN/docs/Web/CSS/background-image)、[`list-style-image`](/zh-CN/docs/Web/CSS/list-style-image) 或 [`border-image-source`](/zh-CN/docs/Web/CSS/border-image-source)。
- {{domxref('CSSKeywordValue')}}
  - : 用于创建一个表示 CSS 关键字和其他标识符的对象的接口。当在需要字符串的地方使用时，它将返回 `CSSKeyword.value` 的值。
- {{domxref('CSSMathValue')}}

  - : 表示比单个值和单位更复杂的数值的子类树，包括：

    - {{domxref('CSSMathInvert')}}——代表 CSS {{cssxref("calc","calc()")}} 值，被用作 `calc(1 / <value>)`。
    - {{domxref('CSSMathMax')}}——代表 CSS {{cssxref("max","max()")}} 函数。
    - {{domxref('CSSMathMin')}}——代表 CSS {{cssxref("min","min()")}} 函数。
    - {{domxref('CSSMathNegate')}}——对传递进来的值取反。
    - {{domxref('CSSMathProduct')}}——表示在 {{domxref('CSSNumericValue')}} 上调用 {{domxref('CSSNumericValue.add','add()')}}、{{domxref('CSSNumericValue.sub','sub()')}} 或 {{domxref('CSSNumericValue.toSum','toSum()')}} 得到的结果。
    - {{domxref('CSSMathSum')}}——表示在 {{domxref('CSSNumericValue')}} 上调用 {{domxref('CSSNumericValue.add','add()')}}、{{domxref('CSSNumericValue.sub','sub()')}} 或 {{domxref('CSSNumericValue.toSum','toSum()')}} 得到的结果。

- {{domxref('CSSNumericValue')}}

  - : 表示所有数值可以执行的操作的接口，包括：

    - {{domxref('CSSNumericValue.add')}}——`CSSNumericValue` 加上提供的数字。
    - {{domxref('CSSNumericValue.sub')}}——`CSSNumericValue` 减去提供的数字。
    - {{domxref('CSSNumericValue.mul')}}——`CSSNumericValue` 乘上提供的数字。
    - {{domxref('CSSNumericValue.div')}}——`CSSNumericValue` 除以提供的数字，如果为 0，则抛出错误。
    - {{domxref('CSSNumericValue.min')}}——返回传递的最小值。
    - {{domxref('CSSNumericValue.max')}}——返回传递的最大值。
    - {{domxref('CSSNumericValue.equals')}}——如果所有值的类型和值完全相同，且顺序相同，则返回 true。否则返回 false。
    - {{domxref('CSSNumericValue.to')}}——将 `value` 转换为指定的*单位*。
    - {{domxref('CSSNumericValue.toSum')}}
    - {{domxref('CSSNumericValue.type')}}
    - {{domxref('CSSNumericValue/parse_static', 'CSSNumericValue.parse')}}——返回从 CSS 字符串解析的数字。

- {{domxref('CSSPositionValue')}}
  - : 表示采用某个位置的属性（例如 object-position）的值。
- {{domxref('CSSTransformValue')}}
  - : 表示 [`transform`](/zh-CN/docs/Web/CSS/transform) 列表值的接口。“包含”一个或多个表示 `transform` 函数值的 {{domxref('CSSTransformComponent')}}。
- {{domxref('CSSUnitValue')}}
  - : 表示可以表示为单个单位或具名数字和百分比的数值的接口。
- {{domxref('CSSUnparsedValue')}}
  - : 表示引用[自定义属性](/zh-CN/docs/Web/CSS/--*)的属性值。它由字符串片段和变量引用的列表组成。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 绘图 API](/zh-CN/docs/Web/API/CSS_Painting_API)
- [使用 CSS 类型对象模型](/zh-CN/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Houdini](/zh-CN/docs/Web/API/Houdini_APIs)
