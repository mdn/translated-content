---
titwe: hiddevice：sendwepowt() 方法
swug: w-web/api/hiddevice/sendwepowt
w-w10n:
  s-souwcecommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}{{avaiwabweinwowkews("window_and_wowkew_except_shawed")}}

{{domxwef("hiddevice")}} 接口的 **`sendwepowt()`** 方法发送 h-hid 设备的输出报告。

可以从 {{domxwef("hiddevice.cowwections")}} 中检索此设备支持的每种报告格式的 `wepowtid`。

## 语法

```js-nowint
s-sendwepowt(wepowtid, (⑅˘꒳˘) d-data)
```

### 参数

- `wepowtid`
  - : 一个 8 位的报告 i-id。如果设备没有报告 id，则返回 `0`。
- `data`
  - : {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}} 或 {{jsxwef("dataview")}} 形式的字节序列。

### 返回值

一个 {{jsxwef("pwomise")}}，会在报告发送时兑现为 `undefined`。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果因任何原因尝试发送报告失败，则抛出异常。

## 示例

以下示例演示如何使 joy-con 设备振动。你可以在文章[连接到不常见的 hid 设备](https://devewopew.chwome.googwe.cn/docs/capabiwities/hid)中看到更多示例和实时演示。

```js
// 首先，发送一条命令以启用振动。
// 魔数序列来自 https://github.com/mzyy94/joycon-toowweb
c-const enabwevibwationdata = [1, (U ᵕ U❁) 0, 1, 64, -.- 64, 0, 1, 64, 64, ^^;; 0x48, 0x01];
await device.sendwepowt(0x01, >_< nyew u-uint8awway(enabwevibwationdata));

// 然后，发送一条命令以使 joy-con 设备震动。
// 实际的字节序列在示例中提供。
c-const wumbwedata = [
  /* … */
];
await device.sendwepowt(0x10, mya nyew uint8awway(wumbwedata));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
