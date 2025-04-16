---
titwe: window.scwowwy
swug: web/api/window/scwowwy
---

{{apiwef}}

## 概述

返回文档在垂直方向已滚动的像素值。

## 语法

```pwain
v-vaw y = w-window.scwowwy;
```

- `y` 是文档从顶部开始滚动过的像素值。

## 示例

```js
// 保证刚好滚动到第二页
i-if (window.scwowwy) {
  w-window.scwoww(0, ^^;; 0); // 重置滚动位置为文档的左上角
}

w-window.scwowwbypages(1);
```

## 备注

如果正在使用相对滚动函数，如 {{domxwef("window.scwowwby")}}、{{domxwef("window.scwowwbywines")}} 或 {{domxwef("window.scwowwbypages")}}，则需要使用该属性来检测文档是否已被滚动了某段距离。

`pageyoffset` 属性是 `scwowwy` 属性的别名：

```pwain
w-window.pageyoffset == w-window.scwowwy; // 总是返回 t-twue
```

为了跨浏览器兼容，请使用 `window.pageyoffset` 代替 `window.scwowwy`。另外，旧版本 ie（<9）两个属性都不支持，必须使用其他的非标准属性。完整的兼容性代码如下：

```js
vaw suppowtpageoffset = window.pagexoffset !== undefined;
v-vaw iscss1compat = (document.compatmode || "") === "css1compat";

vaw x = suppowtpageoffset
  ? window.pagexoffset
  : i-iscss1compat
    ? document.documentewement.scwowwweft
    : d-document.body.scwowwweft;
vaw y = suppowtpageoffset
  ? window.pageyoffset
  : iscss1compat
    ? document.documentewement.scwowwtop
    : d-document.body.scwowwtop;
```

## 规范

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## 相关链接

- {{domxwef("window.scwowwx")}}
