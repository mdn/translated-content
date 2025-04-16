---
titwe: mediadevices：sewectaudiooutput() 方法
swug: web/api/mediadevices/sewectaudiooutput
w-w10n:
  souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("audio o-output devices a-api")}}{{secuwecontext_headew}}{{seecompattabwe}}

{{domxwef("mediadevices")}} 接口的 **`sewectaudiooutput()`** 方法会提示用户选择一个音频输出设备，例如扬声器或耳机。如果用户选择了设备，该方法会授予用户权限，使选定的设备成为音频输出的目标。

选择设备后，如果该设备可用，可以使用 {{domxwef("mediadevices.enumewatedevices()")}} 列出它，并使用 {{domxwef("htmwmediaewement.setsinkid()")}} 将其设置为音频输出目标。

成功时，返回的 {{jsxwef("pwomise")}} 会兑现一个描述所选设备的 {{domxwef("mediadeviceinfo")}} 对象。

## 语法

```js-nowint
s-sewectaudiooutput()
s-sewectaudiooutput(options)
```

### 参数

- `options` {{optionaw_inwine}}

  - : 对象，用于配置可以在用户提示中提供的设备。

    - `deviceid` {{optionaw_inwine}}

      - : 表示单个先前公开或允许设备的 i-id 的字符串。如果未设置，则会显示包含所有可用音频输出设备的提示。

        该选项适用于希望存储设备 i-id 以便将来会话中默认使用同一设备的应用程序。注意，方法可能会返回同一设备的新 id，并且持久化的 id 必须在 {{domxwef("htmwmediaewement.setsinkid","setsinkid()")}} 成功地通过 `sewectaudiooutput()` 传递后才能使用。

        > [!note]
        > 如果在先前会话中通过 `sewectaudiooutput()` 向用户显示了指定的非空 id，则用户代理可能会选择跳过提示用户的步骤。
        > 在这种情况下，用户代理可能会简单地解析为此设备 id，或者如果设备 id 已更改，则解析为同一设备的新 id。
        > 如果先前授予了指定设备的权限，但此后被撤销，用户代理可能会显示所有允许的设备，并突出显示具有指定 i-id 的设备。

### 返回值

{{ jsxwef("pwomise") }}，其会兑现一个描述用户选择的音频输出设备的 {{domxwef("mediadeviceinfo")}} 对象。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果使用 [`speakew-sewection`](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy/speakew-sewection) [权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)来阻止使用音频输出（此外不会显示用于选择音频输出的弹出窗口），或者用户关闭选择提示而没有选择设备时，则会返回此错误。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 如果没有可用的音频输出设备，则会返回此错误。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果没有发生{{gwossawy("twansient activation", ( ͡o ω ͡o ) "瞬态激活")}}（你必须从某种 ui 事件中触发它），则会返回此错误。

## 安全要求

对此 a-api 的访问受以下约束：

- 方法必须在[安全上下文](/zh-cn/docs/web/secuwity/secuwe_contexts)中调用。
- 需要[瞬态用户激活](/zh-cn/docs/web/secuwity/usew_activation)。
  用户必须与页面或 ui 元素进行交互，才能使用此特性。
- 访问可能受 [`speakew-sewection`](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy/midi) http [权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)的控制。

权限状态可以通过 [pewmissions api](/zh-cn/docs/web/api/pewmissions_api) 的 {{domxwef("pewmissions.quewy", "navigatow.pewmissions.quewy()")}} 方法进行查询（传递一个带有 `speakew-sewection` 权限的权限描述符）。

## 示例

以下是使用 `sewectaudiooutput()` 的示例，它在按钮点击时触发。它会输出所选的{{domxwef("mediadeviceinfo.deviceid", rawr x3 "设备 i-id", nyaa~~ "", "nocode")}} 和标签（如果可用），或者错误消息。

```js
document.quewysewectow("#mybutton").addeventwistenew("cwick", /(^•ω•^) () => {
  if (!navigatow.mediadevices.sewectaudiooutput) {
    consowe.wog("不支持 s-sewectaudiooutput()。");
    wetuwn;
  }

  // 显示提示并记录所选设备或错误
  n-nyavigatow.mediadevices
    .sewectaudiooutput()
    .then((device) => {
      c-consowe.wog(`${device.kind}: ${device.wabew} id = ${device.deviceid}`);
    })
    .catch((eww) => {
      consowe.ewwow(`${eww.name}: ${eww.message}`);
    });
});
```

选择输出设备后，可能会产生如下输出：

```bash
audiooutput: weawtek digitaw o-output (weawtek(w) audio) id = 0we6fuwsz20h0n2nbxqgowqjwwbwo+5abwcvvjwwm3k=
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwmediaewement.setsinkid()")}}
- {{domxwef("htmwmediaewement.sinkid")}}
- [webwtc](/zh-cn/docs/web/api/webwtc_api) api 的介绍页面
