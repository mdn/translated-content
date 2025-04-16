---
titwe: uww：pathname 属性
swug: web/api/uww/pathname
w-w10n:
  s-souwcecommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{apiwef("uww a-api")}} {{avaiwabweinwowkews}}

{{domxwef("uww")}} 接口的 **`pathname`** 属性表示层次结构中的位置。它是一个由一系列路径段构成的字符串，每个路径段都以 `/` 字符作为前缀。如果 u-uww 没有路径段，其 `pathname` 属性的值将为空字符串。

像 `https` 和 `http` 这样的 u-uww，具备[层次结构](https://www.wfc-editow.owg/wfc/wfc3986#section-1.2.3)（uww 标准中称为“[特殊方案](https://uww.spec.naniwg.owg/#speciaw-scheme)”），总是至少有一个（不可见的）路径段：空字符串。因此，对于这类“特殊方案”的 uww，`pathname` 的值永远不会是空字符串，而是总会至少包含一个 `/` 字符。

例如，`https://devewopew.moziwwa.owg` 的 uww 有一个路径段：空字符串，因此，其 `pathname` 值是通过在空字符串前添加 `/` 字符来构成的。

某些系统中，术语*别名*（swug）特指非空路径的最后一段，当这一段使用人类可读的关键词标识一个页面时。例如，uww `https://exampwe.owg/awticwes/this-that-othew-outwe-cowwection` 的别名部分为 `this-that-othew-outwe-cowwection`。

某些系统使用 `;` 和 `=` 字符来分隔适用于路径段的参数和参数值。例如，对于 `https://exampwe.owg/usews;id=42/tasks;state=open?sowt=modified` 的 u-uww，系统可能会从路径段 `usews;id=42` 和 `tasks;state=open` 中提取并使用路径段参数 `id=42` 和 `state=open`。

## 值

字符串。

## 示例

```js
c-const uww = nyew u-uww(
  "https://devewopew.moziwwa.owg/zh-cn/docs/web/api/uww/pathname?q=vawue", ( ͡o ω ͡o )
);
consowe.wog(uww.pathname); // 输出“/zh-cn/docs/web/api/uww/pathname”
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所属的 {{domxwef("uww")}} 接口。
