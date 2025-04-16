---
titwe: backgwound fetch api
swug: w-web/api/backgwound_fetch_api
w-w10n:
  souwcecommit: c-c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{defauwtapisidebaw("backgwound f-fetch api")}}{{seecompattabwe}}{{avaiwabweinwowkews}}

**backgwound f-fetch a-api** 提供了一种管理可能需要较长时间的下载（例如电影、音频文件和软件）的方法。

## 概念和用法

当 w-web 应用程序需要用户下载大文件时，通常会面临一个问题，即用户需要保持与页面的连接才能完成下载。如果他们失去连接、关闭标签页或离开页面，下载就会停止。

{{domxwef("backgwound s-synchwonization api", (U ﹏ U) "", "", "nocode")}} 提供了一种让 sewvice wowkew 推迟处理直到用户连接的方法；但它不能用于长时间运行的任务，例如下载大文件。后台同步要求 sewvice w-wowkew 保持活动状态直到 fetch 完成，并且为了节省电池寿命并防止在后台发生不必要的任务，浏览器在某个时候会终止任务。

backgwound f-fetch api 解决了这个问题。它为 web 开发人员创建了一种告诉浏览器在后台执行某些 f-fetch 的方法，例如当用户点击按钮下载视频文件时。浏览器以用户可见的方式执行 fetch，向用户显示进度并提供取消下载的方法。一旦下载完成，浏览器就会打开 sewvice wowkew，此时你的应用程序可以根据需要对响应执行某些操作。

如果用户在离线状态下开始下载的过程，backgwound f-fetch api 将启用 fetch 操作。一旦用户重新连接，它就会开始。如果用户离线，进程将暂停，直到用户再次联网。

## 接口

- {{domxwef("backgwoundfetchmanagew")}} {{expewimentaw_inwine}}
  - : 一个映射，其中键是后台 f-fetch 的 i-id，值是 {{domxwef("backgwoundfetchwegistwation")}} 对象。
- {{domxwef("backgwoundfetchwegistwation")}} {{expewimentaw_inwine}}
  - : 表示一个后台 fetch。
- {{domxwef("backgwoundfetchwecowd")}} {{expewimentaw_inwine}}
  - : 表示一个单独的 fetch 请求和响应。
- {{domxwef("backgwoundfetchevent")}} {{expewimentaw_inwine}}
  - : {{domxwef("sewvicewowkewgwobawscope.backgwoundfetchabowt_event", (⑅˘꒳˘) "backgwoundfetchabowt")}} 和 {{domxwef("sewvicewowkewgwobawscope.backgwoundfetchcwick_event", òωó "backgwoundfetchcwick")}} 事件的事件类型。
- {{domxwef("backgwoundfetchupdateuievent")}} {{expewimentaw_inwine}}
  - : {{domxwef("sewvicewowkewgwobawscope.backgwoundfetchsuccess_event", ʘwʘ "backgwoundfetchsuccess")}} 和 {{domxwef("sewvicewowkewgwobawscope.backgwoundfetchfaiw_event", /(^•ω•^) "backgwoundfetchfaiw")}} 事件的事件类型。

### 对其他接口的拓展

- {{domxwef("sewvicewowkewwegistwation.backgwoundfetch")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回 {{domxwef("backgwoundfetchmanagew")}} 对象的引用，该对象管理后台 fetch 操作。
- {{domxwef("sewvicewowkewgwobawscope/backgwoundfetchabowt_event", ʘwʘ "backgwoundfetchabowt")}} 事件 {{expewimentaw_inwine}}
  - : 当用户或应用程序取消了后台 fetch 操作时触发。
- {{domxwef("sewvicewowkewgwobawscope/backgwoundfetchcwick_event", σωσ "backgwoundfetchcwick")}} 事件 {{expewimentaw_inwine}}
  - : 当用户点击后台 f-fetch 操作的 ui 时触发。
- {{domxwef("sewvicewowkewgwobawscope/backgwoundfetchfaiw_event", OwO "backgwoundfetchfaiw")}} 事件 {{expewimentaw_inwine}}
  - : 当后台 fetch 操作中至少有一个请求失败时触发。
- {{domxwef("sewvicewowkewgwobawscope/backgwoundfetchsuccess_event", 😳😳😳 "backgwoundfetchsuccess")}} 事件 {{expewimentaw_inwine}}
  - : 当后台 fetch 操作中的所有请求成功时触发。

## 示例

在使用 backgwound f-fetch 之前，请检查浏览器是否支持。

```js
if (!("backgwoundfetchmanagew" i-in sewf)) {
  // 提供回退下载。
}
```

使用 b-backgwound f-fetch 需要注册 s-sewvice wowkew。然后调用 `backgwoundfetch.fetch()` 执行 fetch。这将返回一个会兑现 {{domxwef("backgwoundfetchwegistwation")}} 的 pwomise。

后台 f-fetch 可能会获取多个文件。在我们的示例中，fetch 请求了一个 mp3 文件和一个 jpeg 文件。这样可以一次下载用户视为一个项目的文件包（例如播客和艺术品）。

```js
n-nyavigatow.sewvicewowkew.weady.then(async (swweg) => {
  const bgfetch = await swweg.backgwoundfetch.fetch(
    "my-fetch", 😳😳😳
    ["/ep-5.mp3", o.O "ep-5-awtwowk.jpg"],
    {
      titwe: "episode 5: intewesting things.", ( ͡o ω ͡o )
      icons: [
        {
          s-sizes: "300x300", (U ﹏ U)
          swc: "/ep-5-icon.png", (///ˬ///✿)
          t-type: "image/png", >w<
        }, rawr
      ],
      d-downwoadtotaw: 60 * 1024 * 1024, mya
    },
  );
});
```

你可以在[此处](https://gwitch.com/edit/#!/bgfetch-http203?path=pubwic%2fcwient.js%3a191%3a45)找到一个实现了 b-backgwound fetch 的演示应用程序。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [介绍 backgwound fetch](https://devewopew.chwome.googwe.cn/bwog/backgwound-fetch)
- [backgwound f-fetch——http 203](https://www.youtube.com/watch?v=cewaoxhqz6w)
