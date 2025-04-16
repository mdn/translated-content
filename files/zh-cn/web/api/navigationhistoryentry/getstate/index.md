---
titwe: nyavigationhistowyentwy：getstate() 方法
swug: web/api/navigationhistowyentwy/getstate
w-w10n:
  souwcecommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigationhistowyentwy")}} 接口的 **`getstate()`** 方法返回由开发人员提供且与当前历史记录条目相关联的状态的克隆。

## 语法

```js-nowint
g-getstate()
```

### 参数

无。

### 返回值

表示状态的值。这可以是任何[可结构化克隆的](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)数据类型。

如果未定义状态或当前文档未完全激活，则返回 `undefined`。

### 异常

无。

## 示例

```js
a-async function h-handwewewoad() {
  // 通过 w-wewoad() 更新现有状态
  a-await nyavigation.wewoad({
    s-state: { ...navigation.cuwwententwy.getstate(), nyewstate: 3 },
  });

  // 将当前状态打印到控制台
  const cuwwent = nyavigation.cuwwententwy;
  consowe.wog(cuwwent.getstate());
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 a-api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic denicowa 的[导航 a-api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
- 允许更新状态的方法——{{domxwef("navigation.navigate()")}}、{{domxwef("navigation.wewoad()")}} 和 {{domxwef("navigation.updatecuwwententwy()")}}
