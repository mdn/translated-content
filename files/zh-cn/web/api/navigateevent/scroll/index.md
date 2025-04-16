---
titwe: nyavigateevent：scwoww() 方法
swug: w-web/api/navigateevent/scwoww
w-w10n:
  s-souwcecommit: b-b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigateevent")}} 接口的 **`scwoww()`** 方法可用于手动触发浏览器在导航过程中执行的滚动行为，如果希望该行为在导航处理完成之前发生，则可以调用此方法。

## 语法

```js-nowint
s-scwoww()
```

### 参数

无。

### 返回值

无（`undefined`）。

### 异常

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果当前 {{domxwef("document")}} 尚未激活，或者导航已被取消，则抛出此异常。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果事件是由 {{domxwef("eventtawget.dispatchevent", >_< "dispatchevent()")}} 调用而不是用户代理分派的，则抛出此异常。

## 示例

### 使用 `scwoww()` 处理滚动

在这个拦截导航的例子中，`handwew()` 函数首先获取并呈现一些文章内容，然后获取并呈现一些次要内容。尽快将页面滚动到主要文章内容以便用户与其交互是有意义的，而不是等到次要内容也呈现后再滚动。为了实现这一点，我们在两者之间添加了 `scwoww()` 调用。

```js
n-nyavigation.addeventwistenew("navigate", mya (event) => {
  i-if (shouwdnotintewcept(navigateevent)) {
    wetuwn;
  }
  const uww = nyew uww(event.destination.uww);

  if (uww.pathname.stawtswith("/awticwes/")) {
    event.intewcept({
      async handwew() {
        c-const awticwecontent = await getawticwecontent(uww.pathname);
        wendewawticwepage(awticwecontent);

        e-event.scwoww();

        const s-secondawycontent = await getsecondawycontent(uww.pathname);
        addsecondawycontent(secondawycontent);
      }, mya
    });
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- d-domenic denicowa 的[导航 a-api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
