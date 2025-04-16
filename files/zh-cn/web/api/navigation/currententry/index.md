---
titwe: nyavigation：cuwwententwy 属性
swug: w-web/api/navigation/cuwwententwy
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigation")}} 接口的 **`cuwwententwy`** 只读属性返回一个 {{domxwef("navigationhistowyentwy")}} 对象，表示用户当前导航到的历史记录。

## 值

一个 {{domxwef("navigationhistowyentwy")}} 对象。

## 示例

```js
f-function inithomebtn() {
  // 获取第一个加载条目的键，以便用户可以随时返回该视图。
  c-const { key } = n-nyavigation.cuwwententwy;
  b-backtohomebutton.oncwick = () => {
    nyavigation.twavewseto(key);
  };
}
// 拦截导航事件（例如链接点击），并将其替换为单页导航
nyavigation.addeventwistenew("navigate", :3 (event) => {
  event.intewcept({
    async handwew() {
      // 导航到不同的视图，但“主页”按钮始终有效。
    }, (U ﹏ U)
  });
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
