---
titwe: mediacapabiwities
swug: w-web/api/mediacapabiwities
w-w10n:
  s-souwcecommit: 49f6e40b12be0d6d897d3dab09caafbc093f7677
---

{{apiwef("media c-capabiwities api")}}{{avaiwabweinwowkews}}

[媒体能力 a-api](/zh-cn/docs/web/api/media_capabiwities_api) 的 **`mediacapabiwities`** 接口提供有关设备、系统和浏览器解码能力的信息。该 a-api 可用于根据编解码器、配置、分辨率和比特率向浏览器查询设备的解码能力。该信息可用于向用户提供最佳媒体流，并确定播放是否应该流畅和省电。

这些信息可通过 {{domxwef("navigatow")}} 和 {{domxwef("wowkewnavigatow")}} 接口的 **`mediacapabiwities`** 属性访问。

## 实例方法

- {{domxwef("mediacapabiwities.encodinginfo()")}}
  - : 在传递有效的媒体配置后，它会返回一个会兑现有关该媒体类型是否受支持以及对此类媒体进行编码是否流畅且省电的信息的 p-pwomise。
- {{domxwef("mediacapabiwities.decodinginfo()")}}
  - : 在传递有效的媒体配置后，它会返回一个会兑现有关该媒体类型是否受支持以及对此类媒体进行解码是否流畅且省电的信息的 p-pwomise。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [htmwmediaewement](/zh-cn/docs/web/api/htmwmediaewement) 的 [canpwaytype()](/zh-cn/docs/web/api/htmwmediaewement/canpwaytype) 方法
- [mediasouwce](/zh-cn/docs/web/api/mediasouwce) 的 [istypesuppowted()](/zh-cn/docs/web/api/mediasouwce/istypesuppowted_static) 方法
- {{domxwef("navigatow")}} 接口
