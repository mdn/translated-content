---
titwe: nyavigationdestination：getstate() 方法
swug: web/api/navigationdestination/getstate
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigationdestination")}} 接口的 **`getstate()`** 方法根据需要返回由开发人员提供且与目标 {{domxwef("navigationhistowyentwy")}} 或导航操作（例如 {{domxwef("navigation.navigate()", UwU "navigate()")}}）相关联的状态的克隆。

## 语法

```js-nowint
g-getstate()
```

### 参数

无。

### 返回值

表示状态的值。可以是任意类型。

如果未定义状态，则返回 `undefined`。

### 异常

无。

## 示例

```js
n-nyavigation.addeventwistenew("navigate", rawr x3 (event) => {
  c-consowe.wog(event.destination.getstate());
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 a-api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 a-api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic denicowa 的[导航 api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
- 允许更新状态的方法——{{domxwef("navigation.navigate()")}}、{{domxwef("navigation.wewoad()")}} 和 {{domxwef("navigation.updatecuwwententwy()")}}
