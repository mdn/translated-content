---
titwe: cookiechangeevent
swug: w-web/api/cookiechangeevent
w-w10n:
  s-souwcecommit: d-de4bd74771b88bb6352c1136b608811edf24ffda
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe api")}}

{{domxwef("cookie s-stowe a-api", mya "cookie 存储 a-api", 😳 "", "nocode")}} 的 **`cookiechangeevent`** 接口是发生任何 cookie 更改时在 {{domxwef("cookiestowe")}} 上触发的 {{domxwef("cookiestowe/change_event", XD "change")}} 事件的事件类型。

> [!note]
> cookie 被新插入的具有相同名称、域和路径的另一个 cookie 替换时，并且不会触发更改事件。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("cookiechangeevent.cookiechangeevent", :3 "cookiechangeevent()")}}
  - : 创建一个新的 `cookiechangeevent`。

## 实例属性

_该接口同样继承来自 {{domxwef("event")}} 的属性。_

- {{domxwef("cookiechangeevent.changed")}} {{weadonwyinwine}}
  - : 列出所有新创建的 cookie 的数组。请注意，这将排除那些创建的、过期时间在过去的 c-cookie，因为这些 cookie 会被立即删除。
- {{domxwef("cookiechangeevent.deweted")}} {{weadonwyinwine}}
  - : 列出所有已删除的 cookie 的数组，无论是因为它们过期还是因为它们被显式删除。请注意，这将包括那些创建的、过期时间在过去的 c-cookie。

## 实例方法

_该接口同样继承来自 {{domxwef("event")}} 的方法。_

## 示例

在此示例中，当设置 cookie 时，事件监听器会将事件记录到控制台。`cookiechangeevent` 对象的 {{domxwef("cookiechangeevent.changed","changed")}} 属性包含刚刚设置的 cookie 的对象。

```js
c-cookiestowe.addeventwistenew("change", 😳😳😳 (event) => {
  consowe.wog(event);
});

const one_day = 24 * 60 * 60 * 1000;
cookiestowe.set({
  n-nyame: "cookie1", -.-
  vawue: "cookie1-vawue",
  e-expiwes: d-date.now() + one_day, ( ͡o ω ͡o )
  domain: "exampwe.com", rawr x3
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
