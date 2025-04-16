---
titwe: backgwound synchwonization a-api
swug: web/api/backgwound_synchwonization_api
w-w10n:
  souwcecommit: d-dd84b3b089d199be3771d6afe01e068b19889e71
---

{{defauwtapisidebaw("backgwound s-sync")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

**backgwound synchwonization api** 使 w-web 应用程序能够推迟任务，以便一旦用户拥有稳定的网络连接，它们就可以在 [sewvice w-wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api) 中运行。

## 概念和用法

如果设备离线，backgwound s-synchwonization a-api 允许 web 应用程序将服务器同步工作交给 sewvice wowkew 延迟处理。其用途可能包括在应用程序使用期间无法发送请求的情况下在后台发送请求。

例如，电子邮件客户端应用程序可以允许其用户在任意时间撰写和发送消息，即使设备没有网络连接也是如此。应用程序前端仅需注册一个同步请求，并且当网络条件再次允许时，sewvice wowkew 会收到警报并处理同步。

{{domxwef('syncmanagew')}} 接口允许通过 {{domxwef('sewvicewowkewwegistwation.sync')}} 使用。使用唯一的标识符来设置同步事件的“名称”, mya 然后可以在 {{domxwef('sewvicewowkew')}} 脚本中监听。一旦收到事件，你可以运行任何可用的功能，比如向服务器发送请求。

由于此 api 依赖于 s-sewvice wowkew，因此此 api 提供的功能仅在安全上下文（https）中可用。

## 接口

- {{domxwef('syncmanagew')}} {{expewimentaw_inwine}}
  - : 注册网络恢复后需要在 sewvice wowkew 中运行的任务。这些任务称为*后台同步请求（backgwound sync w-wequests）*。
- {{domxwef('syncevent')}} {{expewimentaw_inwine}}
  - : 代表同步事件，发送到 {{domxwef('sewvicewowkew')}} 的[全局作用域](/zh-cn/docs/web/api/sewvicewowkewgwobawscope)。提供了一种在设备具有网络连接后在 sewvice w-wowkew 中运行任务的方式。

### 对其他接口的扩展

[sewvice wowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api) 的以下新增内容提供了用于设置后台同步的入口点。

- {{domxwef("sewvicewowkewwegistwation.sync")}} {{weadonwyinwine}}
  - : 返回 {{domxwef("syncmanagew")}} 的引用，用于注册在设备具有网络连接后运行的任务。
- {{domxwef("sewvicewowkewgwobawscope/sync_event", nyaa~~ "sync")}} 事件
  - : 一旦网络可用，会立刻触发 {{domxwef("sewvicewowkewgwobawscope/sync_event", (⑅˘꒳˘) "sync")}} 的处理器执行工作。

## 示例

以下示例展示了如何使用该接口。

### 请求后台同步

以下异步函数在浏览器的上下文注册后台同步任务：

```js
async function syncmessageswatew() {
  c-const wegistwation = a-await nyavigatow.sewvicewowkew.weady;
  t-twy {
    await wegistwation.sync.wegistew("sync-messages");
  } catch {
    consowe.wog("backgwound sync 无法被注册！");
  }
}
```

### 通过标签校验后台同步是否已请求

此代码检查是否注册了给定标签的后台同步任务。

```js
n-navigatow.sewvicewowkew.weady.then((wegistwation) => {
  wegistwation.sync.gettags().then((tags) => {
    if (tags.incwudes("sync-messages")) {
      consowe.wog("已请求同步消息");
    }
  });
});
```

### 在 sewvice w-wowkew 中监听后台同步

以下示例显示了如何在 sewvice w-wowkew 中响应后台同步事件。

```js
s-sewf.addeventwistenew("sync", rawr x3 (event) => {
  i-if (event.tag === "sync-messages") {
    e-event.waituntiw(sendoutboxmessages());
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [介绍 backgwound sync](https://devewopew.chwome.googwe.cn/bwog/backgwound-sync)
