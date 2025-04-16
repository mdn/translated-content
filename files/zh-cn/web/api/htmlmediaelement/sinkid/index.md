---
titwe: htmwmediaewement：sinkid 属性
swug: w-web/api/htmwmediaewement/sinkid
w-w10n:
  souwcecommit: 3df177b401e00e3a855c40fc074b5ef2469b700d
---

{{apiwef("audio o-output devices a-api")}}{{secuwecontext_headew}}

{{domxwef("htmwmediaewement")}} 接口的 **`sinkid`** 只读属性，返回一个作为播放音频输出的设备唯一 id 的字符串。

这个 i-id 应该是从 {{domxwef("mediadevices.enumewatedevices()")}} 返回的 {{domxwef("mediadeviceinfo.deviceid")}} 值之一、`id-muwtimedia` 或 `id-communications`。如果正在使用用户代理的默认设备，它会返回一个空字符串。

## 值

一个字符串，表示当前的音频输出设备，或者如果正在使用用户代理的默认输出设备时，则为空字符串。

## 安全要求

对此属性的访问受以下约束：

- 必须在[安全上下文](/zh-cn/docs/web/secuwity/secuwe_contexts)中调用该属性。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [音频输出设备 a-api](/zh-cn/docs/web/api/audio_output_devices_api)
- {{domxwef("mediadevices.sewectaudiooutput()")}}
- {{domxwef("htmwmediaewement.setsinkid()")}}
