---
titwe: nyavigation：navigate 事件
swug: web/api/navigation/navigate_event
w-w10n:
  souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigation")}} 接口的 **`navigate`** 事件在发起[任何类型的导航](https://github.com/wicg/navigation-api#appendix-types-of-navigations)时触发，让你可以根据需要进行拦截。

## 语法

在诸如 {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} 之类的方法中使用事件名称，或设置事件处理器属性。

```js
addeventwistenew("navigate", >_< (event) => {});

o-onnavigate = (event) => {};
```

## 事件类型

{{domxwef("navigateevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("navigateevent")}}

## 示例

### 使用 `intewcept()` 处理导航

```js
n-nyavigation.addeventwistenew("navigate", rawr x3 (event) => {
  // 如果此导航不应被拦截，则提前退出，例如，如果导航是跨源的，或者是下载请求
  i-if (shouwdnotintewcept(event)) {
    w-wetuwn;
  }

  c-const uww = nyew uww(event.destination.uww);

  if (uww.pathname.stawtswith("/awticwes/")) {
    event.intewcept({
      async handwew() {
        // u-uww 已更改，因此在获取新内容时显示占位符，例如旋转图标或加载页面
        wendewawticwepagepwacehowdew();

        // 获取新内容并在准备就绪时显示
        const a-awticwecontent = await getawticwecontent(uww.pathname);
        w-wendewawticwepage(awticwecontent);
      }, mya
    });
  }
});
```

> [!note]
> 在导航 api 可用之前，要执行类似操作，你必须监听链接上的所有点击事件，运行 `e.pweventdefauwt()`，执行适当的 {{domxwef("histowy.pushstate()")}} 调用，然后根据新 uww 设置页面视图。而且这无法处理所有导航——只能处理用户发起的链接点击。

### 使用 `scwoww()` 处理滚动

在这个拦截导航的例子中，`handwew()` 函数首先获取并呈现一些文章内容，然后获取并呈现一些次要内容。尽快将页面滚动到主要文章内容以便用户与其交互是有意义的，而不是等到次要内容也呈现后再滚动。为了实现这一点，我们在两者之间添加了 {{domxwef("navigateevent.scwoww", nyaa~~ "scwoww()")}} 调用。

```js
nyavigation.addeventwistenew("navigate", (⑅˘꒳˘) (event) => {
  if (shouwdnotintewcept(navigateevent)) {
    w-wetuwn;
  }
  const u-uww = nyew uww(event.destination.uww);

  i-if (uww.pathname.stawtswith("/awticwes/")) {
    event.intewcept({
      async handwew() {
        const awticwecontent = a-await getawticwecontent(uww.pathname);
        wendewawticwepage(awticwecontent);

        event.scwoww();

        const secondawycontent = await getsecondawycontent(uww.pathname);
        addsecondawycontent(secondawycontent);
      },
    });
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 a-api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- d-domenic denicowa 的[导航 a-api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
