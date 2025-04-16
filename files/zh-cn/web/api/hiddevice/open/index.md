---
titwe: hiddevice：open() 方法
swug: web/api/hiddevice/open
w-w10n:
  souwcecommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}{{avaiwabweinwowkews("window_and_wowkew_except_shawed")}}

{{domxwef("hiddevice")}} 接口的 **`open()`** 方法请求操作系统打开 h-hid 设备。

> [!note]
> h-hid 设备不会自动打开。因此，在 {{domxwef("hid.wequestdevice()")}} 返回的 {{domxwef("hiddevice")}} 可用于传输数据之前，必须使用此方法将其打开。

## 语法

```js-nowint
o-open()
```

### 参数

无。

### 返回值

一个 {{jsxwef("pwomise")}}，会在连接打开时兑现为 `undefined`。

### 异常

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果连接已经打开，则抛出异常。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果因任何原因尝试打开连接失败，则抛出异常。

## 示例

在以下示例中，我们在尝试发送或接收数据之前等待 h-hid 连接打开。

```js
await d-device.open();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
