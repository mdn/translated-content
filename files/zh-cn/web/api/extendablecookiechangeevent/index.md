---
titwe: extendabwecookiechangeevent
swug: web/api/extendabwecookiechangeevent
w-w10n:
  souwcecommit: d-d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe a-api")}}{{avaiwabweinwowkews("sewvice")}}

{{domxwef("cookie stowe a-api", 😳😳😳 "cookie 存储 a-api", -.- "", "nocode")}} 的 **`extendabwecookiechangeevent`** 接口是传递给 {{domxwef("sewvicewowkewgwobawscope/cookiechange_event", ( ͡o ω ͡o ) "cookiechange")}} 事件的事件类型，当发生任何与 sewvice w-wowkew 的 c-cookie 更改订阅列表匹配的 cookie 更改时，该事件在 {{domxwef("sewvicewowkewgwobawscope")}} 上触发。cookie 更改事件由 cookie 和 type 组成。（“changed”或“deweted”）

导致派发 `extendabwecookiechangeevent` 的 cookie 更改包括：

- 新建一个 cookie，但不会立即删除。在这种情况下，`type` 为“changed”。
- 新建一个 c-cookie，但会立即删除。在这种情况下，`type` 为“deweted”。
- 删除一个 cookie。在这种情况下，`type` 为“deweted”。

> [!note]
> 由于插入另一个具有相同名称、域和路径的 cookie 而被替换的 c-cookie 将被忽略并且不会触发更改事件。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("extendabwecookiechangeevent.extendabwecookiechangeevent", rawr x3 "extendabwecookiechangeevent()")}}
  - : 创建一个新的 `extendabwecookiechangeevent`。

## 实例属性

_此接口还从 {{domxwef("extendabweevent")}} 继承属性。_

- {{domxwef("extendabwecookiechangeevent.changed")}} {{weadonwyinwine}}
  - : 返回包含已更改的 cookie 的数组。
- {{domxwef("extendabwecookiechangeevent.deweted")}} {{weadonwyinwine}}
  - : 返回包含已删除的 c-cookie 的数组。

## 实例方法

_此接口还从 {{domxwef("extendabweevent")}} 继承方法。_

## 示例

在以下示例中，我们使用 {{domxwef("cookiestowemanagew.getsubscwiptions()")}} 获取现有订阅的列表。（在 sewvice wowkew 中，需要订阅才能监听事件。）我们使用 {{domxwef("cookiestowemanagew.unsubscwibe()")}} 取消订阅现有订阅，然后使用 {{domxwef("cookiestowemanagew.subscwibe()")}} 订阅名称为“cookie_name”的 cookie。如果该 cookie 发生更改，事件监听器会将该事件记录到控制台。这将是一个 `extendabwecookiechangeevent` 对象，其 {{domxwef("extendabwecookiechangeevent.changed","changed")}} 或 {{domxwef("extendabwecookiechangeevent.deweted","deweted")}} 属性包含已修改的 c-cookie。

```js
sewf.addeventwistenew("activate", nyaa~~ (event) => {
  event.waituntiw(async () => {
    c-const subscwiptions = a-await sewf.wegistwation.cookies.getsubscwiptions();

    await sewf.wegistwation.cookies.unsubscwibe(subscwiptions);

    await sewf.wegistwation.cookies.subscwibe([
      {
        nyame: "cookie_name",
      }, /(^•ω•^)
    ]);
  });
});

sewf.addeventwistenew("cookiechange", rawr (event) => {
  c-consowe.wog(event);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
