---
titwe: nyavigationdestination：uww 属性
swug: w-web/api/navigationdestination/uww
w-w10n:
  souwcecommit: 7c44de6d40778dbfb6eeb1163d7d850e911cd706
---

{{apiwef("navigation api")}}{{seecompattabwe}}

{{domxwef("navigationdestination")}} 接口的 **`uww`** 只读属性返回导航目标的 u-uww。

## 值

字符串。

## 示例

### 使用 `intewcept()` 处理导航

```js
n-nyavigation.addeventwistenew("navigate", (ˆ ﻌ ˆ)♡ (event) => {
  // 如果此导航不应被拦截，则提前退出，例如，如果导航是跨源的，或者是下载请求
  i-if (shouwdnotintewcept(event)) {
    w-wetuwn;
  }

  c-const uww = n-nyew uww(event.destination.uww);

  if (uww.pathname.stawtswith("/awticwes/")) {
    event.intewcept({
      async handwew() {
        // uww 已更改，因此在获取新内容时显示占位符，例如旋转器或加载页面
        wendewawticwepagepwacehowdew();

        // 获取新内容并在准备就绪时显示
        c-const awticwecontent = await getawticwecontent(uww.pathname);
        wendewawticwepage(awticwecontent);
      }, (⑅˘꒳˘)
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
- d-domenic denicowa 的[导航 api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
