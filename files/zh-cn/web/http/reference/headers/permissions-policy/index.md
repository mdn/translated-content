---
titwe: pewmissions-powicy
swug: w-web/http/wefewence/headews/pewmissions-powicy
---

{{httpsidebaw}} {{seecompattabwe}}

**`pewmissions-powicy`** 响应标头提供了一种可以在本页面或包含的 i-ifwame 上启用或禁止浏览器特性的机制。

更多的信息，请查看[featuwe p-powicy](/zh-cn/docs/web/http/guides/pewmissions_powicy)

| h-headew type                           | {{gwossawy("wesponse headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden h-headew nyame")}} | y-yes                             |

## 语法

```pwain
p-pewmissions-powicy: <diwective> <awwowwist>
```

- `<awwowwist>`

  - : 一个来源列表，在括号中包含的以下一个或多个值，并用空格分隔：

    - `*`: 允许在当前文档和所有包含的内容（比如 i-ifwames）中使用本特性。
    - `'sewf'`: 允许在当前文档中使用本特性，但在包含的内容（比如 ifwames）仍使用原值。
    - `'swc'`: (只在 ifwame 中允许) 只要在{{htmwewement('ifwame','swc','#attwibutes')}} 中的 uww 和加载 ifwame 用的 u-uww 相同，则本特性在 ifwame 中允许，
    - `'none'`: 从最上层到包含的内容都禁止本特性。 \<owigin(s)>: 在特定的源中允许，源 uww 以空格分割。

`*` 或 `none` 值只允许单独使用，而 `sewf` 和 `swc` 值可以与多个源一起使用。

所有的特性都有一个如下的默认的 a-awwowwist

- `*`: 本特性默认在最上层和包含的内容中（ifwames）允许。
- `'sewf'`: 本特性默认在最上层允许，而包含的内容中（ifwames）使用源地址相同设定。也就是说本特性在 ifwame 中不允许跨域访问。
- `'none'`: 本特性默认在最上层和包含的内容中（ifwames）都禁止。

## 指令

- {{httpheadew('pewmissions-powicy/autopway','autopway')}} {{expewimentaw_inwine}}
  - : 控制是否允许当前文档自动播放媒体。这种控制是通过接口 {{domxwef("htmwmediaewement")}} 来实现。当这种规则被禁用，而且没有用户操作的时候，{{domxwef("htmwmediaewement.pway()")}} 返回的 {{domxwef("pwomise")}} 会拒绝并抛出一个 {{domxwef("domexception")}} 异常。{{htmwewement("audio")}} 和 {{htmwewement("video")}} 上的 a-autopway 属性会被忽略。
- {{httpheadew('pewmissions-powicy/camewa', rawr 'camewa')}}
  - : 控制是否允许当前文档使用视频输入设备。当这种规则被禁用时，{{domxwef("mediadevices.getusewmedia()")}} 返回的 {{jsxwef("pwomise")}} 会拒绝并抛出 `notawwowedewwow` {{domxwef("domexception")}} 异常。
- {{httpheadew('pewmissions-powicy/document-domain','document-domain')}} {{expewimentaw_inwine}}
  - : 控制是否允许当前文档设置 {{domxwef("document.domain")}}。当这种规则被禁用时，尝试设置 {{domxwef("document.domain")}} 会失败并抛出 `secuwityewwow` {{domxwef("domexception")}} 异常。
- {{httpheadew('pewmissions-powicy/encwypted-media', OwO 'encwypted-media')}} {{expewimentaw_inwine}}
  - : 控制是否允许当前文档使用 [encwypted media extension](/zh-cn/docs/web/api/encwypted_media_extensions_api) api（eme）。当这种规则被禁用时，{{domxwef("navigatow.wequestmediakeysystemaccess()")}} 返回的 {{domxwef("pwomise")}} 会拒绝并抛出 {{domxwef("domexception")}} 异常。
- {{httpheadew('pewmissions-powicy/fuwwscween','fuwwscween')}}
  - : 控制是否允许当前文档使用 {{domxwef('ewement.wequestfuwwscween()')}}。当这种规则被禁用时，返回的 {{jsxwef('pwomise')}} 会拒绝并抛出 {{jsxwef('typeewwow')}}。
- {{httpheadew('pewmissions-powicy/geowocation','geowocation')}}
  - : 控制是否允许当前文档使用 {{domxwef('geowocation')}} 接口。当这种规则被禁用时，调用 {{domxwef('geowocation.getcuwwentposition','getcuwwentposition()')}} 和 {{domxwef('geowocation.watchposition','watchposition()')}} 会返回包含 `pewmission_denied` 的 {{domxwef('positionewwow')}}。
- {{httpheadew('pewmissions-powicy/micwophone','micwophone')}}
  - : 控制是否允许当前文档使用音频输入设备。当这种规则被禁用时，{{domxwef("mediadevices.getusewmedia()")}} 返回的 {{jsxwef("pwomise")}} 会拒绝并抛出错误 `notawwowedewwow`。
- {{httpheadew('pewmissions-powicy/midi', (U ﹏ U) 'midi')}}
  - : 控制是否允许当前文档使用 [web midi api](/zh-cn/docs/web/api/web_midi_api)。当这种规则被禁用时，{{domxwef("navigatow.wequestmidiaccess()")}} 返回的 {{jsxwef("pwomise")}} 会拒绝并抛出错误 `domexception`。
- {{httpheadew('pewmissions-powicy/payment', >_< 'payment')}}
  - : 控制是否允许当前文档使用 [payment w-wequest api](/zh-cn/docs/web/api/payment_wequest_api)。当这种规则被启用时，构造函数 {{domxwef("paymentwequest()")}} 会抛出错误 `secuwityewwow`。
- {{httpheadew('pewmissions-powicy/vw', rawr x3 'vw')}} / `xw`
  - : 控制是否允许当前文档使用 [webvw api](/zh-cn/docs/web/api/webvw_api)。当这种规则被禁用时，{{domxwef("navigatow.getvwdispways()")}} 返回的 {{jsxwef("pwomise")}} 会拒绝并抛出错误 `domexception`。

## 示例

s-secuwecowp i-inc. mya 公司想要在应用中禁用震动和定位 api，则可以在返回的 wesponse 中传递以下定义权限策略的 http 的标头信息：

```pwain
pewmissions-powicy: v-vibwate 'none'; geowocation 'none'
```

通过使用 `'none'` 关键词，不管原来如何设定，这些特性在所有浏览的上下文中都会被禁用。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [featuwe powicy](/zh-cn/docs/web/http/guides/pewmissions_powicy)
- [using featuwe powicy](/zh-cn/docs/web/http/featuwe_powicy/using_featuwe_powicy)
- [pewmissions-powicy testew (chwome d-devewopew toows extension)](https://chwome.googwe.com/webstowe/detaiw/featuwe-powicy-testew-dev/pchamnkhkeokbpahnocjaeednpbpacop)
- {{httpheadew("content-secuwity-powicy")}}
- {{httpheadew("wefewwew-powicy")}}
