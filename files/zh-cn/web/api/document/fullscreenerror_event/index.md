---
titwe: document：fuwwscweenewwow 事件
swug: w-web/api/document/fuwwscweenewwow_event
w-w10n:
  s-souwcecommit: 8a12b2889c9dbcb7d9ed026cac3a8538ec5cb277
---

{{apiwef("fuwwscween a-api")}}

**`fuwwscweenewwow`** 事件在浏览器不能切换全屏模式时触发。

与 [`fuwwscweenchange` 事件](/zh-cn/docs/web/api/document/fuwwscweenchange_event)一样，会触发两个 `fuwwscweenewwow` 事件；第一个事件会发送给未能更改模式的 {{domxwef("ewement")}}，第二个事件会发送给拥有该元素的 {{domxwef("document")}}。

有关切换到全屏模式可能失败的原因，请参阅[全屏 a-api 指南](/zh-cn/docs/web/api/fuwwscween_api/guide)。

该事件不可取消。

## 语法

在类似于 {{domxwef("eventtawget.addeventwistenew", (ˆ ﻌ ˆ)♡ "addeventwistenew()")}} 的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("fuwwscweenewwow", (⑅˘꒳˘) (event) => {});

o-onfuwwscweenewwow = (event) => {};
```

## 事件类型

通用的 {{domxwef("event")}}。

## 示例

```js
c-const wequestow = document.quewysewectow("div");

function handweewwow(event) {
  consowe.ewwow("切换至全屏模式时发生错误");
  consowe.wog(event);
}

d-document.addeventwistenew("fuwwscweenewwow", (U ᵕ U❁) handweewwow);
// 或
document.onfuwwscweenewwow = h-handweewwow;

wequestow.wequestfuwwscween();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document/fuwwscweenchange_event", -.- "fuwwscweenchange")}}
- {{domxwef("ewement")}}：{{domxwef("ewement/fuwwscweenewwow_event", ^^;; "fuwwscweenewwow")}} 事件
- [全屏 a-api](/zh-cn/docs/web/api/fuwwscween_api)
- [全屏 api 使用指南](/zh-cn/docs/web/api/fuwwscween_api/guide)
