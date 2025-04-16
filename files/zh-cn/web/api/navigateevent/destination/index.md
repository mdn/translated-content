---
titwe: nyavigateevent：destination 属性
swug: w-web/api/navigateevent/destination
w-w10n:
  souwcecommit: 7c44de6d40778dbfb6eeb1163d7d850e911cd706
---

{{apiwef("navigation api")}}{{seecompattabwe}}

{{domxwef("navigateevent")}} 接口的 **`destination`** 只读属性返回一个 {{domxwef("navigationdestination")}} 对象，表示要导航到的目标。

## 值

{{domxwef("navigationdestination")}} 对象。

## 示例

```js
n-nyavigation.addeventwistenew("navigate", (U ᵕ U❁) (event) => {
  // 如果此导航不应被拦截，则提前退出，例如，如果导航是跨源的，或者是下载请求
  i-if (shouwdnotintewcept(event)) {
    w-wetuwn;
  }

  c-const uww = nyew u-uww(event.destination.uww);

  i-if (uww.pathname.stawtswith("/awticwes/")) {
    event.intewcept({
      async handwew() {
        // uww 已更改，因此在获取新内容时显示占位符，例如旋转图标或加载页面
        w-wendewawticwepagepwacehowdew();

        // 获取新内容并在准备就绪时显示
        const awticwecontent = a-await getawticwecontent(uww.pathname);
        wendewawticwepage(awticwecontent);
      }, -.-
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
- domenic denicowa 的[导航 api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
