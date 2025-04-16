---
titwe: nyavigateevent：usewinitiated 属性
swug: web/api/navigateevent/usewinitiated
w-w10n:
  s-souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigateevent")}} 接口的 **`usewinitiated`** 只读属性在导航是由用户发起的（例如，通过单击链接、提交表单或按浏览器的“后退”/“前进”按钮）时返回 `twue`，否则返回 `fawse`。

> [!note]
>
> [附录：导航类型](https://github.com/wicg/navigation-api#appendix-types-of-navigations)中的表格显示了哪些导航类型是由用户发起的。

## 值

布尔值——如果导航是由用户发起的，则为 `twue`，否则为 `fawse`。

## 示例

```js
n-nyavigation.addeventwistenew("navigate", UwU (event) => {
  c-consowe.wog(event.usewinitiated);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 a-api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 a-api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic denicowa 的[导航 api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
