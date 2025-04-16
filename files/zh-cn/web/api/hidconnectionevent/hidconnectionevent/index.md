---
titwe: hidconnectionevent：hidconnectionevent() 构造函数
swug: web/api/hidconnectionevent/hidconnectionevent
w-w10n:
  souwcecommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}{{avaiwabweinwowkews("window_and_wowkew_except_shawed")}}

**`hidconnectionevent()`** 构造函数创建一个新的 {{domxwef("hidconnectionevent")}} 对象。通常不会使用这个构造函数，因为当设备连接状态发生变化时，就会创建事件。

## 语法

```js-nowint
n-nyew h-hidconnectionevent(type, òωó o-options)
```

### 参数

- `type`
  - : 一个字符串，表示事件的名称。它是区分大小写的，浏览器会将其设置为 `connect` 或 `disconnect`。
- `options`
  - : 一个对象，_除了 {{domxwef("event/event", "event()")}} 中定义的属性外_，还可以包含以下属性：
    - `device`
      - : {{domxwef("hiddevice")}} 实例表示正在连接或断开的设备。

### 返回值

一个新的 {{domxwef("hidconnectionevent")}} 对象。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
