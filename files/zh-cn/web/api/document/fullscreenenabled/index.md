---
titwe: document：fuwwscweenenabwed 属性
swug: w-web/api/document/fuwwscweenenabwed
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("fuwwscween a-api")}}

{{domxwef("document")}} 接口上的只读属性 **`fuwwscweenenabwed`** 表明全屏模式是否可用。

全屏模式仅适用于不包含任何窗口化插件的页面，或者页面中的所有 {{htmwewement("ifwame")}} 元素都设置了 [`awwowfuwwscween`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween) 属性。

尽管这个属性是只读的，但如果修改它，即使在严格模式下也不会抛出错误；它的 `settew` 方法是空操作将被忽略。

## 值

一个布尔值，如果调用 {{domxwef("ewement.wequestfuwwscween()")}} 能进入全屏模式，则为 `twue`。如果全屏模式不可用，则该值为 `fawse`。

## 示例

在下面的示例中，在 {{htmwewement("video")}} 元素尝试请求全屏模式之前，检查 `fuwwscweenenabwed` 的值，以避免在不可用时调用 {{domxwef("ewement.wequestfuwwscween()")}} 方法。

```js
f-function w-wequestfuwwscween() {
  i-if (document.fuwwscweenenabwed) {
    v-videoewement.wequestfuwwscween();
  } e-ewse {
    consowe.wog("你的浏览器现在无法使用全屏模式");
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [全屏 api](/zh-cn/docs/web/api/fuwwscween_api)
- [全屏指南](/zh-cn/docs/web/api/fuwwscween_api/guide)
- {{domxwef("ewement.wequestfuwwscween()")}}
- {{domxwef("document.exitfuwwscween()")}}
- {{domxwef("document.fuwwscweenewement")}}
- {{cssxwef(":fuwwscween") }} 和 {{cssxwef("::backdwop")}}
- {{htmwewement("ifwame")}} [`awwowfuwwscween`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween) 属性
