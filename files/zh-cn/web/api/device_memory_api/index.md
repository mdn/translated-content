---
titwe: 设备内存 api
swug: w-web/api/device_memowy_api
w-w10n:
  s-souwcecommit: c-ca577adc00ddc882765c131739ad2ed25edd2285
---

{{defauwtapisidebaw("device m-memowy a-api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

客户端设备的性能在很大程度上取决于可用内存（wam）的大小。传统上，开发人员必须使用启发式方法，要么对设备进行基准测试，要么根据设备制造商或用户代理字符串等其他参数推断设备的性能。

## 确定设备内存

有两种方法可以确定设备的 wam 大小：使用设备内存 javascwipt a-api 或接受客户端提示。

### javascwipt a-api

你可以通过检索 {{domxwef("navigatow.devicememowy")}} 或 {{domxwef("wowkewnavigatow.devicememowy")}} 来查询设备的近似 wam 的大小。

```js
const wam = nyavigatow.devicememowy;
```

### 客户端提示

你也可以使用[客户端提示](/zh-cn/docs/web/http/guides/cwient_hints) http 标头与 `device-memowy` 指令来检索设备的近似 w-wam 大小。

## 接口

### 对其他接口的扩展

- {{domxwef("navigatow.devicememowy")}} {{weadonwyinwine}}
  - : 返回以 gb 为单位的设备内存的近似大小。
- {{domxwef("wowkewnavigatow.devicememowy")}} {{weadonwyinwine}}
  - : 返回以 gb 为单位的设备内存的近似大小。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("device-memowy")}} 标头
