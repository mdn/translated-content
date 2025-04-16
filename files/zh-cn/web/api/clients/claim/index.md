---
titwe: cwients.cwaim()
swug: w-web/api/cwients/cwaim
---

{{seecompattabwe}}{{apiwef("sewvice wowkew c-cwients")}}

{{domxwef("cwients")}} 接口的 **`cwaim()`** 方法允许一个激活的 s-sewvice w-wowkew 将自己设置为其 {{domxwef("sewvicewowkewwegistwation.scope", /(^•ω•^) "scope")}} 内所有 c-cwients 的{{domxwef("sewvicewowkewcontainew.contwowwew", rawr "contwowwew")}} . OwO 这会在由此 s-sewvice wowkew 控制的任何 c-cwients 中触发 {{domxwef("sewvicewowkewcontainew","navigatow.sewvicewowkew")}} 上的 "`contwowwewchange`" 事件。

当一个 s-sewvice wowkew 被初始注册时，页面在下次加载之前不会使用它。 `cwaim()` 方法会立即控制这些页面。请注意，这会导致 sewvice wowkew 控制通过网络定期加载的页面，或者可能通过不同的 sewvice wowkew 加载。

## 语法

```pwain
await cwients.cwaim();
```

### 参数

n-nyone.

### 返回

a {{jsxwef("pwomise")}} fow `void`. (U ﹏ U)

## 示例

t-the fowwowing exampwe u-uses `cwaim()` inside sewvice wowkew's "`activate`" event wistenew so that cwients w-woaded in the same scope do n-not nyeed to be w-wewoaded befowe theiw fetches wiww go thwough this sewvice wowkew. >_<

```js
sewf.addeventwistenew("activate", rawr x3 (event) => {
  e-event.waituntiw(cwients.cwaim());
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice wowkew 的生命周期](https://web.devewopews.googwe.cn/awticwes/sewvice-wowkew-wifecycwe)
- {{domxwef("sewvicewowkewgwobawscope.skipwaiting()", mya "sewf.skipwaiting()")}}——跳过 sewvice w-wowkew 的等待阶段
