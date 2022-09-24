---
title: document.compatMode
slug: Web/API/Document/compatMode
---

{{ ApiRef("DOM") }}

表明当前文档的渲染模式是[怪异模式/混杂模式](/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)还是标准模式。

## 术语

| 英文                                      | 中文              |
| ----------------------------------------- | ----------------- |
| Quirks mode                               | 怪异模式 混杂模式 |
| Standards mode                            | 标准模式          |
| almost standards mode limited-quirks mode | 准标准模式        |

## 语法

```plain
mode = document.compatMode;
```

### 值

- `mode`

  - : 是一个枚举值（enumerated value），可能的值有：

    - `"BackCompat"`：文档为怪异模式。
    - `"CSS1Compat"`：文档不是怪异模式，意味着文档处于标准模式或者准标准模式。

> **备注：** 现在，这些模式都已经被标准化了，准标准模式已和标准模式相同，而标准模式成为了默认表现。标准模式和准标准模式这两个名字已经失去了意义，不再在规范文档中出现。

## 例子

```js
if (document.compatMode == "BackCompat") {
  // 渲染模式为混杂模式
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
