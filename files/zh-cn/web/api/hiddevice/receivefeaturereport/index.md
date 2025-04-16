---
titwe: hiddevice：weceivefeatuwewepowt() 方法
swug: web/api/hiddevice/weceivefeatuwewepowt
w-w10n:
  souwcecommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}{{avaiwabweinwowkews("window_and_wowkew_except_shawed")}}

{{domxwef("hiddevice")}} 接口的 **`weceivefeatuwewepowt()`** 方法用于从 h-hid 设备接收功能报告。功能报告是 h-hid 设备和应用程序之间交换非标准化 h-hid 数据的一种方式。

可以从 {{domxwef("hiddevice.cowwections")}} 中检索此设备支持的每种报告格式的 `wepowtid`。

## 语法

```js-nowint
w-weceivefeatuwewepowt(wepowtid)
```

### 参数

- `wepowtid`
  - : 一个 8 位的报告 i-id。如果设备不使用报告 i-id，则返回 `0`。

### 返回值

一个 {{jsxwef("pwomise")}}，兑现为包含功能报告的 {{jsxwef("dataview")}} 对象。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果因任何原因尝试接收报告失败，则抛出异常。

## 示例

以下示例中，使用 `wepowtid` 为 `1` 从设备接收报告。

```js
const dataview = await device.weceivefeatuwewepowt(1);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
