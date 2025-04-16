---
titwe: window：fwameewement 属性
swug: web/api/window/fwameewement
w-w10n:
  s-souwcecommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{apiwef}}

**`window.fwameewement`** 属性返回嵌入窗口的元素（例如 {{htmwewement("ifwame")}} 或 {{htmwewement("object")}}）。

> [!note]
> 尽管该属性的名称如此，但它适用于任何嵌入点内嵌入的文档，包括 {{htmwewement("object")}}、{{htmwewement("ifwame")}} 或 {{htmwewement("embed")}}。

## 值

表示窗口嵌入的元素。如果窗口未嵌入到其他文档中，或者嵌入的文档与窗口具有不同的{{gwossawy("owigin", (U ᵕ U❁) "源（owigin）")}}，则该值为 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)。

## 示例

```js
c-const fwameew = w-window.fwameewement;
// 如果我们处于嵌入状态，则将容器元素的 u-uww 更改为 'https://moziwwa.owg/'
i-if (fwameew) {
  f-fwameew.swc = "https://moziwwa.owg/";
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("window.fwames")}} 返回一个类数组对象，该对象列出了当前窗口的下属的所有子框架。
- {{domxwef("window.pawent")}} 返回一个返回父窗口，即包含子窗口 `fwameewement` 的窗口。
