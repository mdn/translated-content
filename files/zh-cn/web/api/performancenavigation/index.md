---
title: PerformanceNavigation
slug: Web/API/PerformanceNavigation
---

{{APIRef("Navigation Timing")}}

**`PerformanceNavigation`** 接口呈现了如何导航到当前文档的信息。

这个类型的对象可以被只读属性{{domxref("Performance.navigation")}}调用。

## Properties

_`PerformanceNavigation` 接口不继承任何属性。_

- {{domxref("PerformanceNavigation.type")}} {{readonlyInline}}
  - : 一个无符号短整型，表示是如何导航到这个页面的。可能的值如下：
    - `TYPE_NAVIGATE` (0)
      - : 当前页面是通过点击链接，书签和表单提交，或者脚本操作，或者在 url 中直接输入地址，type 值为 0
    - `TYPE_RELOAD` (1)
      - : 点击刷新页面按钮或者通过{{domxref("Location.reload()")}}方法显示的页面，type 值为 1
    - `TYPE_BACK_FORWARD` (2)
      - : 页面通过历史记录和前进后退访问时。type 值为 2
    - `TYPE_RESERVED` (255)
      - : 任何其他方式，type 值为 255

- {{domxref("PerformanceNavigation.redirectCount")}} {{readonlyInline}}
  - : 无符号短整型，表示在到达这个页面之前重定向了多少次。

## Methods

**`Performance` 接口没有继承任何方法**

- {{domxref("PerformanceNavigation.toJSON()")}} {{non-standard_inline}}
  - : 把`PerformanceNavigation`转换成 JSON 对象

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## See also

- The {{domxref("Performance")}} that allows access to an object of this type.
- {{domxref("PerformanceNavigationTiming")}} (part of Navigation Timing Level 2) {{experimental_inline}}
