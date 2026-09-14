---
title: dimension
slug: Web/CSS/Reference/Values/dimension
---

**`<dimension>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types)是一个带有单位的{{CSSxRef("&lt;number&gt;")}}，例如：`10px`

CSS 使用度量值来描述距离 ({{CSSxRef("&lt;length&gt;")}})，时间 ({{CSSxRef("&lt;time&gt;")}})，频率 ({{CSSxRef("&lt;frequency&gt;")}})，分辨率 ({{CSSxRef("&lt;resolution&gt;")}}) 以及其他量。

## 格式

`<dimension>` 的格式是一个{{CSSxRef("&lt;number&gt;")}}后紧随一个是标记符的单位，单位大小写不敏感。

## Examples

### 合法的度量值

```plain example-good
12px      12 像素
1rem      1 rem
1.2pt     1.2 点
2200ms    2200 毫秒
200hz     200 赫兹
200Hz     200 赫兹 (单位大小写不敏感)
```

### 非法的度量值

```plain example-bad
12 px       单位必须紧随数字，不能有空格
12"px"      单位是标识符，不能加引号
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
