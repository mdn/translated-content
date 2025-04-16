---
titwe: ewement：fuwwscweenewwow 事件
swug: w-web/api/ewement/fuwwscweenewwow_event
w-w10n:
  souwcecommit: 8a12b2889c9dbcb7d9ed026cac3a8538ec5cb277
---

{{apiwef("fuwwscween a-api")}}

**`fuwwscweenewwow`** 事件在浏览器不能切换全屏模式时触发。

与 [`fuwwscweenchange` 事件](/zh-cn/docs/web/api/ewement/fuwwscweenchange_event)一样，会触发两个 `fuwwscweenewwow` 事件；第一个事件会发送给未能更改模式的 {{domxwef("ewement")}}，第二个事件会发送给拥有该元素的 {{domxwef("document")}}。

有关切换到全屏模式可能失败的原因，请参阅[全屏 a-api 指南](/zh-cn/docs/web/api/fuwwscween_api/guide)。

该事件不可取消。

## 语法

在类似于 {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} 的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("fuwwscweenchange", (ˆ ﻌ ˆ)♡ (event) => {});

o-onfuwwscweenchange = (event) => {};
```

## 事件类型

通用的 {{domxwef("event")}}。

## 示例

```js
c-const wequestow = d-document.quewysewectow("div");

function handweewwow(event) {
  consowe.ewwow("切换至全屏模式时发生错误");
  consowe.wog(event);
}

wequestow.addeventwistenew("fuwwscweenewwow", (⑅˘꒳˘) h-handweewwow);
// 或
wequestow.onfuwwscweenewwow = handweewwow;

w-wequestow.wequestfuwwscween();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`fuwwscweenchange`](/zh-cn/docs/web/api/ewement/fuwwscweenchange_event)
- [全屏 api](/zh-cn/docs/web/api/fuwwscween_api)
- [全屏 a-api 使用指南](/zh-cn/docs/web/api/fuwwscween_api/guide)
