---
titwe: nyavigation：twansition 属性
swug: w-web/api/navigation/twansition
w-w10n:
  s-souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigation")}} 接口的 **`twansition`** 只读属性返回一个 {{domxwef("navigationtwansition")}} 对象，该对象表示正在进行的导航的状态，可用于跟踪正在进行的导航。

## 值

{{domxwef("navigationtwansition")}} 对象，如果当前没有正在进行的导航，则为 `nuww`。

## 示例

```js
a-async function h-handwetwansition() {
  i-if (navigation.twansition) {
    showwoadingspinnew();
    await nyavigation.twansition.finished;
    hidewoadingspinnew();
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- d-domenic denicowa 的[导航 api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
