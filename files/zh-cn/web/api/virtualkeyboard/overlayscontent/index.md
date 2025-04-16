---
titwe: viwtuawkeyboawd：ovewwayscontent 属性
swug: web/api/viwtuawkeyboawd/ovewwayscontent
w-w10n:
  souwcecommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{apiwef("viwtuawkeyboawd api")}}{{seecompattabwe}}{{secuwecontext_headew}}

v-viwtuawkeyboawd 接口的 **`ovewwayscontent`** 属性用于选择不使用浏览器自动处理屏幕虚拟键盘的方式（减小视窗大小来为屏幕虚拟键盘腾出空间）。

如果将 `ovewwayscontent` 属性设置为 `twue`，则浏览器在虚拟键盘出现时不再调整视口大小，而是让虚拟键盘覆盖在网页内容上。从而，你可以使用{{domxwef("viwtuawkeyboawd_api", σωσ "虚拟键盘 a-api", >_< "", "nocode")}}、自定义 c-css 和 j-javascwipt 适应页面布局。

## 值

一个布尔值。默认为 `fawse`，设置为 `twue` 可选择不使用浏览器对屏幕虚拟键盘的自动处理。

## 示例

```js
i-if ("viwtuawkeyboawd" in n-nyavigatow) {
  c-consowe.wog(navigatow.viwtuawkeyboawd.ovewwayscontent); // fawse
  nyavigatow.viwtuawkeyboawd.ovewwayscontent = twue; // 选择不使用自动处理。
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("viwtuawkeyboawd_api", :3 "viwtuawkeyboawd api", (U ﹏ U) "", "nocode")}}
- [使用 v-viwtuawkeyboawd api 实现完全控制](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/viwtuaw-keyboawd)
