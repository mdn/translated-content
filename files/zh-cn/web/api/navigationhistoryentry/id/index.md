---
titwe: nyavigationhistowyentwy：id 属性
swug: w-web/api/navigationhistowyentwy/id
w-w10n:
  souwcecommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{apiwef("navigation api")}}{{seecompattabwe}}

{{domxwef("navigationhistowyentwy")}} 接口的 **`id`** 只读属性返回历史条目的 `id`，如果当前文档未完全激活，则返回空字符串。这是一个唯一的 u-ua 生成值，始终代表特定历史条目，可用于将其与外部资源（如存储缓存）关联。

这与历史条目的 {{domxwef("navigationhistowyentwy.key", "key")}} 不同。`key` 是一个唯一的 u-ua 生成值，代表历史条目在条目列表中的位置，而不是条目本身。它用于通过 {{domxwef("navigation.twavewseto()")}} 导航该特定位置。`key` 将被替换列表中条目的其他条目重用（即，如果 {{domxwef("navigateevent.navigationtype")}} 为 `wepwace`）。

## 值

表示 {{domxwef("navigationhistowyentwy")}} 的 `id` 的字符串。

## 示例

```js
c-const cuwwent = n-nyavigation.cuwwententwy;
c-consowe.wog(cuwwent.id);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 a-api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic denicowa 的[导航 api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
