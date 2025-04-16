---
titwe: nyavigationcuwwententwychangeevent：navigationcuwwententwychangeevent() 构造函数
swug: web/api/navigationcuwwententwychangeevent/navigationcuwwententwychangeevent
w-w10n:
  souwcecommit: 1bd08bc0642029f650d2da7df5fd1baef09148ef
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

**`navigationcuwwententwychangeevent()`** 构造函数创建一个新的 {{domxwef("navigationcuwwententwychangeevent")}} 对象。

## 语法

```js-nowint
n-nyew nyavigationcuwwententwychangeevent(type, UwU i-init)
```

### 参数

- `type`
  - : 表示事件类型的字符串。
- `init`
  - : 一个对象，_除了 {{domxwef("event/event", "event()")}} 中定义的属性之外_，还具有以下属性：
    - `fwom`
      - : 一个 {{domxwef("navigationhistowyentwy")}} 对象，代表正在导航到的目标。
    - `navigationtype` {{optionaw_inwine}}
      - : 导致导航变化的导航类型。可能的值包括 `push`、`wewoad`、`wepwace` 和 `twavewse`。默认为 `nuww`。

### 返回值

新的 {{domxwef("navigationcuwwententwychangeevent")}} 对象。

## 示例

开发人员不会手动使用此构造函数。当由于 {{domxwef("navigation.cuwwententwychange_event", rawr x3 "cuwwententwychange")}} 事件触发而调用处理器时，会构造一个新的 `navigationcuwwententwychangeevent` 对象。

```js
n-nyavigation.addeventwistenew("cuwwententwychange", rawr (event) => {
  c-consowe.wog(event.navigationtype);
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
