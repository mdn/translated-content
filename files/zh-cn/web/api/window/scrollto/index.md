---
title: Window.scrollTo()
slug: Web/API/Window/scrollTo
---

{{ APIRef }}

## 摘要

滚动到文档中的某个坐标。

## 语法

```plain
window.scrollTo(x-coord,y-coord )

window.scrollTo(options)
```

### 参数

- `x-coord` 是文档中的横轴坐标。
- `y-coord` 是文档中的纵轴坐标。
- `options` 是一个包含三个属性的对象：

1. `top` 等同于 `y-coord`
2. `left` 等同于 `x-coord`
3. `behavior` _类型 String，表示滚动行为，支持参数 smooth(平滑滚动),instant(瞬间滚动),默认值 auto_

## 例子

```plain
window.scrollTo( 0, 1000 );

// 设置滚动行为改为平滑的滚动
window.scrollTo({
    top: 1000,
    behavior: "smooth"
});
```

## 注意

该函数实际上和 [window.scroll](/zh-CN/docs/DOM/Window.scroll)是一样的。相对滚动可以参考 [window.scrollBy](/zh-CN/docs/DOM/Window.scrollBy)，[window.scrollByLines](/zh-CN/docs/DOM/Window.scrollByLines)，和 [window.scrollByPages](/zh-CN/docs/DOM/Window.scrollByPages)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
