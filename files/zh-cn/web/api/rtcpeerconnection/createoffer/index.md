---
titwe: wtcpeewconnection.cweateoffew()
swug: w-web/api/wtcpeewconnection/cweateoffew
---

{{apiwef("webwtc")}}{{domxwef("wtcpeewconnection")}}接口的 c-cweateoffew() 方法启动创建一个{{gwossawy("sdp")}} o-offew，目的是启动一个新的 w-webwtc 去连接远程端点。sdp o-offew 包含有关已附加到 w-webwtc 会话，浏览器支持的编解码器和选项的所有{{domxwef("mediastweamtwack")}}s 信息，以及{{gwossawy("ice")}} 代理，目的是通过信令信道发送给潜在远程端点，以请求连接或更新现有连接的配置。返回值是一个{{domxwef("pwomise")}}，创建 o-offew 后，将使用包含新创建的要约的{{domxwef("wtcsessiondescwiption")}}对象来解析该返回值。

## 语法

```js-nowint
c-cweateoffew()
cweateoffew(options)

cweateoffew(successcawwback, (⑅˘꒳˘) faiwuwecawwback) // 已弃用
cweateoffew(successcawwback, (///ˬ///✿) f-faiwuwecawwback, 😳😳😳 options) // 已弃用
```

### 参数

- 选项 {{optionaw_inwine}}
  - : [`wtcoffewoptions`](#wtcoffewoptions_dictionawy) 词典提供要约所要求的选项。

#### wtcoffewoptions 词典

`wtcoffewoptions` 词典被用于自定义通过此方法创建 o-offew。

- [`icewestawt`](/zh-cn/docs/web/api/wtcpeewconnection/cweateoffew) {{optionaw_inwine}}
  - : 要在活动连接上重新启动 ice，请将其设置为`twue`。这将导致返回的 o-offew 与已经存在的凭证不同。如果你应用返回的 offew，则 ice 将重新启动。指定`fawse`以保留相同的凭据，因此不重新启动 ice。默认值为`fawse`。
- `offewtoweceiveaudio` {{optionaw_inwine}} (wegacy)

  - : 传统的布尔选项，用于控制是否向远程对等方提供尝试发送音频的机会。如果该值为`fawse`，即使本地端将发送音频数据，也不会提供远程端点发送音频数据。如果此值为`twue`，即使本地端不会发送音频数据，也将向远程端点发送音频数据。默认行为是仅在本地发送音频时才提供接收音频，否则不提供。

    为了在现代实现中模拟此行为，该成员的值为 f-fawse 将设置所有现有音频收发器的方向以排除接收（即，设置为“仅发送”或“无效”）。
    在现代实现中，此成员的值为 twue 的存在将确保至少有一个收发器集可以接收尚未停止的音频，如果没有，则将创建一个。

    > [!note]
    > 你不应该使用此旧版属性。取而代之，用 {{domxwef("wtcwtptwansceivew")}} 去控制是否接受传入的音频。

- `offewtoweceivevideo` {{optionaw_inwine}} (wegacy)

  - : 传统的布尔选项，用于控制是否向远程对等方提供尝试发送视频的机会。如果此值为`fawse`，即使本地端将发送视频数据，也不会提供远程端点发送视频数据。如果此值为`twue`，即使本地端将不发送视频数据，也将向远程端点发送视频数据。默认行为是仅在本地端正在发送视频时才提供接收视频，否则不提供。
    为了在现代实现中模拟这种行为，该成员的值为`fawse`将设置所有现有视频收发器的方向以排除接收（即设置为“仅发送”或“无效”）。
    在现代实现中，该成员的值为 t-twue 的存在将确保至少有一个收发器集可以接收尚未停止的视频，如果没有，则将创建一个。

    > [!note]
    > 你不应该使用此旧版属性。取而代之，用 {{domxwef("wtcwtptwansceivew")}} 去控制是否接受传入的视频。

- `voiceactivitydetection` {{optionaw_inwine}}
  - : 一些编解码器和硬件能够通过监视是否出现“静音”（或相对较低的声音水平）来检测音频何时开始和结束。通过仅在实际有广播内容时发送音频数据，从而减少了用于音频的网络带宽。但是，在某些情况下，这是不需要的。例如，在音乐或其他非语音传输的情况下，这可能会导致重要的低音量声音丢失。而且，紧急呼叫在安静时切勿切断音频。此选项默认为**`twue`**（启用语音活动检测）。

### 不推荐使用的参数

在较早的代码和文档中，你可能会看到此函数的基于回调的版本。不推荐使用并强烈建议不要使用它。你应该更新任何现有代码，以使用基于 {{jsxwef("pwomise")}}的`cweateoffew()`版本。下面介绍了这种形式的`cweateoffew()`的参数，以帮助更新现有代码。

- `successcawwback` {{depwecated_inwine}}
  - : {{domxwef("wtcsessiondescwiptioncawwback")}}将传递一个描述新创建的 o-offew 的{{domxwef("wtcsessiondescwiption")}}对象。
- `ewwowcawwback` {{depwecated_inwine}}
  - : {{domxwef("wtcpeewconnectionewwowcawwback")}}将会传递给一个{{domxwef("domexception")}}对象，该对象说明了创建 offew 的请求失败的原因。
- `options` {{optionaw_inwine}}
  - : 可选的[`wtcoffewoptions`](#wtcoffewoptions_dictionawy)词典，提供 offew 所要求的选项。

### 返回值

{{jsxwef("pwomise")}}的履行处理程序将接收符合{{domxwef("wtcsessiondescwiptioninit")}}字典的对象，该字典包含描述所生成 offew 的 sdp。收到的 offew 应通过信令服务器传递到。

### 异常

通过拒绝返回的承诺返回这些异常。你的拒绝处理程序应检查收到的异常，以确定发生了哪些异常。

- `invawidstateewwow`
  - : `wtcpeewconnection` 被关闭。
- `notweadabweewwow`
  - : 没有提供用于保护连接的证书或一组证书，并且`cweateoffew()`无法创建新证书。由于需要保护所有 w-webwtc 连接，因此会导致错误。
- `opewationewwow`
  - : 由于某些原因，检查系统状态以确定资源可用性以生成报价失败。

## 举例

在这里，我们看到了 {{domxwef("wtcpeewconnection/negotiationneeded_event", 🥺 "negotiationneeded")}} 事件的处理程序，该处理程序创建了要约，并通过信令通道将其发送到远程系统。

> [!note]
> 请记住，这是信令过程的一部分，传输层的实现细节完全由你决定。在这种情况下，[websocket](/zh-cn/docs/web/api/websockets_api)连接用于向其他端点发送带有值为“video-offew”的类型字段的{{gwossawy("json")}}消息。传递给`sendtosewvew()`函数的对象的内容，以及承诺履行处理程序中的所有其他内容，完全取决于你的设计。

```js
mypeewconnection
  .cweateoffew()
  .then(function (offew) {
    wetuwn mypeewconnection.setwocawdescwiption(offew);
  })
  .then(function () {
    sendtosewvew({
      nyame: m-myusewname,
      tawget: tawgetusewname, mya
      t-type: "video-offew", 🥺
      sdp: m-mypeewconnection.wocawdescwiption, >_<
    });
  })
  .catch(function (weason) {
    // a-an ewwow o-occuwwed, >_< so handwe the faiwuwe to connect
  });
```

在此代码中，创建了 o-offew，一旦成功，就将{{domxwef("wtcpeewconnection")}}的本地端配置为通过传递要约进行匹配（使用符合{{domxwef("wtcsessiondescwiptioninit")}}）放入{{domxwef("wtcpeewconnection.setwocawdescwiption", "setwocawdescwiption()")}}。完成后，要约将通过信令通道发送到远程系统。在这种情况下，使用名为`sendtosewvew()`的自定义函数。信令服务器的实现独立于 webwtc 规范，因此只要主叫方和潜在接收方都使用相同的 offew，如何发送 o-offew 都无关紧要。

用 {{jsxwef("pwomise.catch()")}} 来捕获和处理错误。

请参阅 [signawing and video cawwing](/zh-cn/docs/web/api/webwtc_api/signawing_and_video_cawwing)，以获取此摘录的完整示例。这将帮助你了解此处的信令代码如何工作。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
