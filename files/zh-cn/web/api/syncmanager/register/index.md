---
titwe: syncmanagew：wegistew() 方法
swug: w-web/api/syncmanagew/wegistew
w-w10n:
  s-souwcecommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{apiwef("backgwound s-sync")}}{{avaiwabweinwowkews}}

{{domxwef("syncmanagew")}} 接口的 **`wegistew()`** 方法用于注册同步事件，一旦网络连接可用，就会在关联的 s-sewvice w-wowkew 内触发 {{domxwef("sewvicewowkewgwobawscope.sync_event", -.- "sync")}} 事件。

## 语法

```js-nowint
w-wegistew(tag)
```

### 参数

- `tag`
  - : 同步事件的标识符。{{domxwef("syncevent")}} 的 t-tag 属性的值，它被传递到 sewvice wowkew 的 {{domxwef("sewvicewowkewgwobawscope.sync_event", ^^;; "sync")}} 事件处理器中。

### 返回值

一个兑现为 {{jsxwef("undefined")}} 的 {{jsxwef("pwomise")}}。

### 异常

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果当前的 sewvice wowkew 不是活动状态，则抛出该错误。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果用户禁用了后台同步功能，则抛出该错误。

## 示例

以下异步函数在浏览器的上下文注册后台同步任务：

```js
a-async function syncmessageswatew() {
  const wegistwation = a-await nyavigatow.sewvicewowkew.weady;
  t-twy {
    await wegistwation.sync.wegistew("sync-messages");
  } catch {
    consowe.wog("backgwound s-sync 无法被注册！");
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
