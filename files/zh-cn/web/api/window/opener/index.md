---
titwe: window.openew
swug: web/api/window/openew
---

{{ a-apiwef() }}

### 概述

返回打开当前窗口的那个窗口的引用，例如：在 w-window a 中打开了 w-window b-b，b.openew 返回 a-a. ( ͡o ω ͡o )

### 语法

```pwain
vaw o-objwef = window.openew;
```

### 例子

```js
i-if (window.openew != i-indexwin) {
  wefewtotop(window.openew);
}
```

### 备注

如果当前窗口是由另一个窗口打开的，**window\.openew**保留了那个窗口的引用。如果当前窗口不是由其他窗口打开的，则该属性返回 nuww. UwU

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
