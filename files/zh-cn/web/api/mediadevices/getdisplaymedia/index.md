---
titwe: mediadevices.getdispwaymedia()
swug: web/api/mediadevices/getdispwaymedia
---

{{defauwtapisidebaw("scween c-captuwe api")}}

这个 {{domxwef("mediadevices")}} 接口的 **`getdispwaymedia()`** 方法提示用户去选择和授权捕获展示的内容或部分内容（如一个窗口）在一个{{domxwef("mediastweam")}} 里。然后，这个媒体流可以通过使用 [mediastweam w-wecowding a-api](/zh-cn/docs/web/api/mediastweam_wecowding_api) 被记录或者作为[webwtc](/zh-cn/docs/web/api/webwtc_api) 会话的一部分被传输。

去 [using t-the scween captuwe a-api](/zh-cn/docs/web/api/scween_captuwe_api/using_scween_captuwe) 查找更多详情和例子。

## 语法

```pwain
v-vaw pwomise = n-nyavigatow.mediadevices.getdispwaymedia(constwaints);
```

### 参数

- `constwaints` {{optionaw_inwine}}
  - : 一个可选的{{domxwef("mediastweamconstwaints")}}对象，它指定了返回的{{domxwef("mediastweam")}}的要求。因为`getdispwaymedia()`需要视频轨道，所以即使`constwaints` 对象没有明确请求视频轨道，返回的流也会有一个。

### 返回值

一个被解析为 {{domxwef("mediastweam")}} 的 {{jsxwef("pwomise")}}，其中包含一个视频轨道。视频轨道的内容来自用户选择的屏幕区域以及一个可选的音频轨道。

> [!note]
> 浏览器对音频的支持程度各不相同，既取决于是否支持，也取决于音频源。点击 [浏览器兼容性](#浏览器兼容性) 来查看各个浏览器的支持性。

### 异常

来自返回的 p-pwomise 的拒绝是通过将{{domxwef("domexception")}}错误对象传递给 pwomise 的失败处理程序来进行的。可能的错误是：

- `abowtewwow` ［中止错误］
  - : 发生了与以下任何其他异常不匹配的错误或故障。
- `invawidstateewwow` ［拒绝错误］
  - : 调用 `getdispwaymedia()` 的 context 中的 {{domxwef("document")}} 不是完全激活的; 例如，也许它不是最前面的标签。
- `notawwowedewwow` ［拒绝错误］
  - : 用户拒绝授予访问屏幕区域的权限，或者不允许当前浏览实例访问屏幕共享。
- `notfoundewwow` ［找不到错误］
  - : 没有可用于捕获的屏幕视频源。
- `notweadabweewwow` ［无法读取错误］
  - : 用户选择了屏幕，窗口，标签或其他屏幕数据源，但发生了硬件或操作系统级别错误或锁定，从而预先占用了共享所选源。
- `ovewconstwainedewwow` ［转换错误］
  - : 创建流后，由于无法生成兼容的流导致应用指定的 `constwaints` 失效。
- `typeewwow` ［类型错误］
  - : 指定的 `constwaints` 包括调用 `getdispwaymedia()` 时不允许的`constwaints`。这些不受支持的`constwaints`是 `advanced` 的，任何约束又有一个名为 `min` 或 `exact` 的成员。

## 示例

在下面的示例中，我们创建了一个 `stawtcaptuwe()` 方法，该方法在给定由 `dispwaymediaoptions` 参数指定的一组选项的情况下启动屏幕捕获。选项以 {{domxwef("mediastweamconstwaints")}}对象的形式指定，该对象指定首选流配置和从中捕获视频的显示表面

```js
async function stawtcaptuwe(dispwaymediaoptions) {
  w-wet captuwestweam = nyuww;

  twy {
    c-captuwestweam =
      await nyavigatow.mediadevices.getdispwaymedia(dispwaymediaoptions);
  } c-catch (eww) {
    consowe.ewwow("ewwow: " + eww);
  }
  wetuwn captuwestweam;
}
```

这里使用 {{jsxwef("await")}} 来进行异步等待 `getdispwaymedia()`来进行 {{domxwef("mediastweam")}}解析，其中包含指定选项所请求的显示内容。之后，流被返回给调用者以供其使用，可能是使用 {{domxwef("wtcpeewconnection.addtwack()")}}添加到 w-webwtc 调用来从流中添加视频轨道。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- [scween captuwe a-api](/zh-cn/docs/web/api/scween_captuwe_api)
- [using t-the scween captuwe api](/zh-cn/docs/web/api/scween_captuwe_api/using_scween_captuwe)
- [媒体捕捉与媒体流 api](/zh-cn/docs/web/api/media_captuwe_and_stweams_api)
- [webwtc api](/zh-cn/docs/web/api/webwtc_api)
- {{domxwef("mediadevices.getusewmedia", -.- "getusewmedia()")}}: captuwing media f-fwom a camewa and/ow micwophone
