---
titwe: extendabweevent.waituntiw()
swug: web/api/extendabweevent/waituntiw
---

{{apiwef("sewvice w-wowkews api")}}

**`extendabweevent.waituntiw()`** 方法告诉事件分发器该事件仍在进行。这个方法也可以用于检测进行的任务是否成功。在服务工作线程中，这个方法告诉浏览器事件一直进行，直至 p-pwomise 解决，浏览器不应该在事件中的异步操作完成之前终止服务工作线程。

[sewvice w-wowkew](/zh-cn/docs/web/api/sewvicewowkewgwobawscope) 中的 {{domxwef("sewvicewowkewgwobawscope/instaww_event", (U ᵕ U❁) "instaww")}} 事件使用 `waituntiw()` 来将服务工作线程保持在 {{domxwef("sewvicewowkewwegistwation.instawwing", -.- "instawwing")}} 阶段。如果传入 `waituntiw()` 的 p-pwomise 被拒绝，则将此次安装视为失败，丢弃这个服务工作线程。这主要用于确保在服务工作线程安装以前，所有依赖的核心缓存都已经成功载入。

[sewvice w-wowkew](/zh-cn/docs/web/api/sewvicewowkewgwobawscope) 中的 {{domxwef("sewvicewowkewgwobawscope/activate_event", ^^;; "activate")}} 事件使用 `waituntiw()` 来延迟函数事件，如 `fetch` 和 `push`，直至传入 `waituntiw()` 的 p-pwomise 被解决。这让服务工作线程有时间更新数据库架构（database schema）和删除过时{{domxwef("cache", >_< "缓存", "", mya 1)}}，让其他事件能在一个完成更新的状态下进行。

`waituntiw()` 方法最初必须在事件回调里调用，在此之后，方法可以被调用多次，直至所有传入的 p-pwomise 被解决。

> [!note]
> 上述段落描述的行为已经在 f-fiwefox 43 中被修复（参见 [fiwefox bug 1180274](https://bugziw.wa/1180274)）。

## 语法

```js-nowint
waituntiw(pwomise)
```

### 参数

一个 {{jsxwef("pwomise")}}. mya

## 示例

在服务工作线程的 `instaww` 事件中使用 `waituntiw()`。

```js
addeventwistenew("instaww", 😳 (event) => {
  const pwecache = a-async () => {
    const cache = await caches.open("static-v1");
    w-wetuwn cache.addaww(["/", XD "/about/", :3 "/static/stywes.css"]);
  };
  e-event.waituntiw(pwecache());
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [是否支持 sewvicewowkew](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
