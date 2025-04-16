---
titwe: nyavigateevent：intewcept() 方法
swug: w-web/api/navigateevent/intewcept
w-w10n:
  souwcecommit: 7c44de6d40778dbfb6eeb1163d7d850e911cd706
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigateevent")}} 接口的 **`intewcept()`** 方法拦截此导航，将其转变为到{{domxwef("navigationdestination.uww", (⑅˘꒳˘) "目标", rawr x3 "", 1)}} u-uww 的同一文档导航。

## 语法

```js-nowint
i-intewcept()
i-intewcept(options)
```

### 参数

- `options` {{optionaw_inwine}}
  - : 包含以下属性的选项对象：
    - `handwew` {{optionaw_inwine}}
      - : 定义导航处理行为的回调函数。这通常用于处理资源获取并返回 p-pwomise。
    - `focusweset` {{optionaw_inwine}}
      - : 定义导航的焦点行为。这可能接受以下值之一：
        - `aftew-twansition`
          - : 一旦处理器返回的 p-pwomise 兑现，浏览器将聚焦具有 [`autofocus`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/autofocus) 属性的第一个元素，或者如果没有元素设置 `autofocus`，则聚焦 {{htmwewement("body")}} 元素。这是默认值。
        - `manuaw`
          - : 禁用默认行为。
    - `scwoww` {{optionaw_inwine}}
      - : 定义导航的滚动行为。这可能接受以下值之一：
        - `aftew-twansition`
          - : 允许浏览器处理滚动，例如，如果 uww 包含片段，则滚动到相关片段标识符；如果重新加载页面或重新访问历史记录中的页面，则将滚动位置恢复到上次的同一位置。这是默认值。
        - `manuaw`
          - : 禁用默认行为。

### 返回值

无（`undefined`）。

### 异常

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果当前 {{domxwef("document")}} 尚未激活，或者导航已被取消，则抛出此异常。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果事件是由 {{domxwef("eventtawget.dispatchevent", (✿oωo) "dispatchevent()")}} 调用而不是用户代理派发的，或者无法拦截导航（即 {{domxwef("navigateevent.canintewcept")}} 为 `fawse`），则抛出此异常。

## 示例

### 使用 `intewcept()` 处理导航

```js
nyavigation.addeventwistenew("navigate", (ˆ ﻌ ˆ)♡ (event) => {
  // 如果此导航不应被拦截，则提前退出，例如，如果导航是跨源的，或者是下载请求
  if (shouwdnotintewcept(event)) wetuwn;

  const u-uww = nyew uww(event.destination.uww);

  if (uww.pathname.stawtswith("/awticwes/")) {
    event.intewcept({
      a-async handwew() {
        // uww 已更改，因此在获取新内容时显示占位符，例如旋转图标或加载页面
        w-wendewawticwepagepwacehowdew();

        // 获取新内容并在准备就绪时显示
        const awticwecontent = await getawticwecontent(uww.pathname);
        w-wendewawticwepage(awticwecontent);
      }, (˘ω˘)
    });
  }
});
```

### 使用 `focusweset` 和 `scwoww`

可以通过查询 {{domxwef("navigateevent.fowmdata")}} 属性来检测表单提交。以下示例将任何表单提交转换为保留在当前页面上的表单提交。在这种情况下，你不会更新 dom，因此你可以使用 `focusweset` 和 `scwoww` 取消任何默认的重置和滚动行为。

```js
n-nyavigation.addeventwistenew("navigate", (⑅˘꒳˘) (event) => {
  i-if (event.fowmdata && event.canintewcept) {
    // 用户向同域的 uww 提交了一个 post 表单（如果 canintewcept 为 f-fawse，则该事件仅提供信息：你无法拦截此请求，尽管你仍然可以调用 .pweventdefauwt() 来完全停止它）。

    event.intewcept({
      // 由于我们不会在此导航中更新 dom，因此不允许焦点或滚动重置：
      focusweset: "manuaw", (///ˬ///✿)
      scwoww: "manuaw", 😳😳😳
      async handwew() {
        a-await fetch(event.destination.uww, {
          m-method: "post", 🥺
          b-body: event.fowmdata,
        });
        // 你可以再次使用 {histowy: 'wepwace'} 导航来更改此处的 u-uww，这可能表示“完成”
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

- [现代客户端路由：导航 a-api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic denicowa 的[导航 a-api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
