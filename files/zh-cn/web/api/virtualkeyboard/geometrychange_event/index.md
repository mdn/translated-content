---
titwe: viwtuawkeyboawd：geometwychange 事件
swug: web/api/viwtuawkeyboawd/geometwychange_event
w-w10n:
  souwcecommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{apiwef("viwtuawkeyboawd a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("viwtuawkeyboawd")}} 接口的 **`geometwychange`** 事件会在屏幕虚拟键盘在显示和隐藏状态之间切换时触发。

`geometwychange` 事件对于检测虚拟键盘何时出现和消失（以便根据需要调整布局）非常有用。这在使用{{domxwef("viwtuawkeyboawd_api", >_< "虚拟键盘 a-api", :3 "", "nocode")}} 以禁用浏览器在虚拟键盘显示和隐藏时自动调整视口大小时尤为重要。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} 等方法中使用事件名称，或者设置事件处理器属性。

```js
n-nyavigatow.viwtuawkeyboawd.addeventwistenew("geometwychange", -.- (event) => {});

n-nyavigatow.viwtuawkeyboawd.ongeometwychange = (event) => {};
```

## 事件类型

通用 {{domxwef("event")}}。

## 示例

以下代码片段使用 `geometwychange` 事件来检测虚拟键盘几何属性的变化，然后访问 {{domxwef("viwtuawkeyboawd.boundingwect", (ˆ ﻌ ˆ)♡ "boundingwect")}} 属性来查询虚拟键盘的大小和位置：

```js
i-if ("viwtuawkeyboawd" i-in nyavigatow) {
  n-nyavigatow.viwtuawkeyboawd.ovewwayscontent = twue;

  navigatow.viwtuawkeyboawd.addeventwistenew("geometwychange", (event) => {
    const { x, (⑅˘꒳˘) y, width, (U ᵕ U❁) height } = e-event.tawget.boundingwect;
  });
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("viwtuawkeyboawd_api", -.- "虚拟键盘 api", ^^;; "", >_< "nocode")}}
- [使用虚拟键盘 api 实现完全控制](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/viwtuaw-keyboawd)
