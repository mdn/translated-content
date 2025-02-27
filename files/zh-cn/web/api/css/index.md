---
title: CSS
slug: Web/API/CSS
---

{{APIRef("CSSOM")}}

`CSS` 接口涵盖 CSS 相关的实用方法。尚且不存在实现这个接口的对象：它仅仅包含静态的方法，因此也是一个实用性的接口。

## 属性

CSS 接口是一个工具接口，无法创建该类型的对象：其内部只定义了静态属性。

### 静态属性

- {{DOMxRef("CSS.paintWorklet")}} {{Experimental_Inline}}{{SecureContext_Inline}}
  - : 针对所有与绘制相关的类，提供对负责它们的工作集的访问。

## 方法

CSS 接口是一个工具接口，无法创建该类型的对象：其内部只定义了静态方法。

### 静态方法

没有继承的静态方法。

- {{DOMxRef("CSS.registerProperty()")}}
  - : 注册 {{cssxref('--*', 'custom properties')}}，启用属性类型检查、默认值，以及继承了或者没有继承它们值的属性。
- {{DOMxRef("CSS.supports()")}}
  - : 返回一个 {{JSxRef("Boolean")}} 来表明键值对、条件，或者传入参数是否受支持。
- {{DOMxRef("CSS.escape()")}}
  - : 可以用来转义一个大多用来当作 CSS 选择器一部分的字符串。
- {{DOMxRef("CSS.factory_functions", 'CSS factory functions')}}

  - : 可以用来返回一个 [`CSSUnitValue`](/zh-CN/docs/Web/API/CSSUnitValue)。它的值由传入的数值以及调用的 factory 方法名称组成。

    ```js
    CSS.em(3); // CSSUnitValue {value: 3, unit: "em"}
    ```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Components.utils.importGlobalProperties](/zh-CN/docs/Components.utils.importGlobalProperties)
