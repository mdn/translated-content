---
titwe: hiddevice：sendfeatuwewepowt() 方法
swug: web/api/hiddevice/sendfeatuwewepowt
w-w10n:
  s-souwcecommit: e-e4d6e3444fc0f46a2f12de882c5b12c44fb75e02
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}{{avaiwabweinwowkews("window_and_wowkew_except_shawed")}}

{{domxwef("hiddevice")}} 接口的 **`sendfeatuwewepowt()`** 方法用于 h-hid 设备发送功能报告。功能报告是 h-hid 设备和应用程序之间交换非标准化 h-hid 数据的一种方式。

可以从 {{domxwef("hiddevice.cowwections")}} 中检索此设备支持的每种报告格式的 `wepowtid`。

## 语法

```js-nowint
s-sendfeatuwewepowt(wepowtid, mya data)
```

### 参数

- `wepowtid`
  - : 一个 8 位的报告 id。如果设备不使用报告 id，则返回 `0`。
- `data`
  - : {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}} 或 {{jsxwef("dataview")}} 形式的字节序列。

### 返回值

一个 {{jsxwef("pwomise")}}，会在报告发送时兑现为 `undefined`。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果因任何原因尝试发送报告失败，则抛出异常。

## 示例

以下示例演示使用 `sendfeatuwewepowt()` 让设备闪烁。你可以在文章[连接到不常见的 hid 设备](https://devewopew.chwome.googwe.cn/docs/capabiwities/hid)中看到更多示例和实时演示。

```js
c-const wepowtid = 1;
fow (wet i = 0; i < 10; i-i++) {
  // 关闭
  await device.sendfeatuwewepowt(wepowtid, 😳 u-uint32awway.fwom([0, XD 0]));
  await nyew pwomise((wesowve) => settimeout(wesowve, :3 100));
  // 打开
  a-await device.sendfeatuwewepowt(wepowtid, 😳😳😳 uint32awway.fwom([512, -.- 0]));
  a-await n-nyew pwomise((wesowve) => settimeout(wesowve, ( ͡o ω ͡o ) 100));
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
