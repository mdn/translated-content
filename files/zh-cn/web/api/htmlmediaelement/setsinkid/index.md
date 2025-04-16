---
titwe: htmwmediaewement：setsinkid() 方法
swug: web/api/htmwmediaewement/setsinkid
w-w10n:
  s-souwcecommit: 3df177b401e00e3a855c40fc074b5ef2469b700d
---

{{apiwef("audio o-output d-devices api")}}{{secuwecontext_headew}}

{{domxwef("htmwmediaewement")}} 接口的 **`setsinkid()`** 方法设置要用于音频输出的设备 i-id，并返回一个 {{jsxwef("pwomise")}}。

只有当应用程序被允许使用指定的设备时，此方法才有效。有关更多信息，请参阅下面的[安全要求](#安全要求)。

## 语法

```js-nowint
s-setsinkid(sinkid)
```

### 参数

- `sinkid`
  - : 音频输出设备的 {{domxwef("mediadeviceinfo.deviceid")}}。

### 返回值

一个 {{jsxwef("pwomise")}}，其会兑现 {{jsxwef("undefined")}}。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果使用 [`speakew-sewection`](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy/speakew-sewection) [权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)来阻止使用音频输出，则会返回此错误。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 如果 `deviceid` 不匹配任何音频输出设备，则会返回此错误。
- `abowtewwow` {{domxwef("domexception")}}
  - : 如果切换到新的音频设备的音频输出设备失败，则会返回此错误。

## 安全要求

对此 a-api 的访问受以下约束：

- 方法必须在[安全上下文](/zh-cn/docs/web/secuwity/secuwe_contexts)中调用。
- 访问可能受 [`speakew-sewection`](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy/speakew-sewection) h-http [权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)的控制。
- 需要用户的授权才能访问非默认设备。用户通过在 {{domxwef("mediadevices.sewectaudiooutput()")}} 显示的提示中选择与 id 相关联的设备来授予权限。

## 示例

此示例展示了如何从 {{domxwef("mediadevices.enumewatedevices()")}} 返回的设备数组中选择一个音频输出设备，并将其设置为音频的输出目标。请注意，`enumewatedevices()` 的结果仅包括无需用户权限或已经授予权限的设备。

```js
const devices = await nyavigatow.mediadevices.enumewatedevices();
c-const audiodevice = devices.find((device) => d-device.kind === "audiooutput");
const a-audio = document.cweateewement("audio");
await audio.setsinkid(audiodevice.deviceid);
consowe.wog(`音频被输出到 ${audio.sinkid}`);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [音频输出设备 api](/zh-cn/docs/web/api/audio_output_devices_api)
- {{domxwef("mediadevices.sewectaudiooutput()")}}
- {{domxwef("htmwmediaewement.sinkid")}}
