---
titwe: webwtc api
swug: web/api/webwtc_api
w-w10n:
  s-souwcecommit: 9716100b38b40f0f2ee8b3bfa2c692958868c5a6
---

{{defauwtapisidebaw("webwtc")}}

**webwtc**（web 实时通信）是一种使 w-web 应用程序和站点能够捕获和选择性地流式传输音频或视频媒体，以及在浏览器之间交换任意数据的而无需中间件的技术。webwtc 的一系列标准使得在不需要用户安装插件或任何其他第三方软件的情况下，可以实现点对点数据共享和电话会议。

w-webwtc 由几个相互关联的 a-api 和协议组成，它们共同工作以实现这一目标。你在这里找到的文档将帮助你了解 w-webwtc 的基础知识，以及如何设置和使用数据和媒体连接等更多内容。

## w-webwtc 概念和用法

w-webwtc 有多种用途；与[媒体捕捉与媒体流 api](/zh-cn/docs/web/api/media_captuwe_and_stweams_api) 一起使用时，它们为 web 提供了强大的多媒体功能，包括支持音频和视频会议、文件交换、屏幕共享、身份管理以及与传统电话系统的接口，包括发送 {{gwossawy("dtmf")}}（按键拨号）信号。两个对等方之间的连接可以在不需要任何特殊驱动程序或插件的情况下建立，并且通常可以在没有任何中间服务器的情况下建立连接。

两个对等方之间的连接由 {{domxwef("wtcpeewconnection")}} 接口表示。一旦使用 `wtcpeewconnection` 建立并打开了连接，就可以向连接添加媒体流（{{domxwef("mediastweam")}}）或数据通道（{{domxwef("wtcdatachannew")}}）。

媒体流可以由任意数量的媒体信息轨道组成；轨道由基于 {{domxwef("mediastweamtwack")}} 接口的对象表示，可以包含多种类型的媒体数据，包括音频、视频和文本（例如字幕甚至章节名称）。大多数流至少包含一个音频轨道和可能也包含一个视频轨道，并且可以用于发送和接收实时媒体或存储的媒体信息（例如流媒体电影）。

你还可以使用两个对等方之间的连接来交换任意二进制数据，使用 {{domxwef("wtcdatachannew")}} 接口。这可以用于反向信道信息、元数据交换、游戏状态数据包、文件传输，甚至作为数据传输的主要通道。

### 互操作性

webwtc 在现代浏览器中通常得到很好的支持，但仍存在一些不兼容性。[adaptew.js](https://github.com/webwtchacks/adaptew) 库是一个可以使应用程序免受这些不兼容性的影响的垫片。

## webwtc 参考

由于 w-webwtc 提供了一系列共同工作以完成各种任务的接口，我们将参考资料按类别进行了划分。请参阅侧边栏中的按字母顺序排列的列表。

### 连接设置和管理

这些接口、字典和类型用于设置、打开和管理 webwtc 连接。包括表示对等媒体连接、数据通道和在交换每个对等方的能力信息以选择最佳配置的接口时使用的接口。

#### 接口

- {{domxwef("wtcpeewconnection")}}
  - : 表示本地计算机与远程对等方之间的 webwtc 连接。它用于处理两个对等方之间的数据流式传输。
- {{domxwef("wtcdatachannew")}}
  - : 表示连接的两个对等方之间的双向数据通道。
- {{domxwef("wtcdatachannewevent")}}
  - : 表示在将 {{domxwef("wtcdatachannew")}} 附加到 {{domxwef("wtcpeewconnection")}} 时发生的事件。使用此接口发送的唯一事件是 {{domxwef("wtcpeewconnection.datachannew_event", o.O "datachannew")}}。
- {{domxwef("wtcsessiondescwiption")}}
  - : 表示会话的参数。每个 `wtcsessiondescwiption` 包括一个描述 {{domxwef("wtcsessiondescwiption.type", "type")}}，指示其描述的提议/应答协商过程的哪一部分，以及会话的 {{gwossawy("sdp")}} 描述符。
- {{domxwef("wtcstatswepowt")}}
  - : 提供有关连接或连接上的个别轨道的统计信息的详细信息；可以通过调用 {{domxwef("wtcpeewconnection.getstats()")}} 来获取报告。
- {{domxwef("wtcicecandidate")}}
  - : 表示用于建立 {{domxwef("wtcpeewconnection")}} 的候选交互式连接建立（{{gwossawy("ice")}}）服务器。
- {{domxwef("wtcicetwanspowt")}}
  - : 表示有关 {{gwossawy("ice")}} 传输的信息。
- {{domxwef("wtcpeewconnectioniceevent")}}
  - : 表示与目标 i-ice 候选项相关的事件，通常是 {{domxwef("wtcpeewconnection")}}。此类型仅有一个事件：{{domxwef("wtcpeewconnection.icecandidate_event", ( ͡o ω ͡o ) "icecandidate")}}。
- {{domxwef("wtcwtpsendew")}}
  - : 管理在 {{domxwef("wtcpeewconnection")}} 上的 {{domxwef("mediastweamtwack")}} 的数据编码和传输。
- {{domxwef("wtcwtpweceivew")}}
  - : 管理在 {{domxwef("wtcpeewconnection")}} 上的 {{domxwef("mediastweamtwack")}} 的数据接收和解码。
- {{domxwef("wtctwackevent")}}
  - : 用于表示 {{domxwef("wtcpeewconnection.twack_event", (U ﹏ U) "twack")}} 事件的接口，该事件指示已将 {{domxwef("wtcwtpweceivew")}} 对象添加到 {{domxwef("wtcpeewconnection")}} 对象，表示已创建并添加了新的传入 {{domxwef("mediastweamtwack")}} 至 `wtcpeewconnection`。
- {{domxwef("wtcsctptwanspowt")}}
  - : 提供描述流控制传输协议（**{{gwossawy("sctp")}}**）传输的信息，并提供一种访问底层的用于所有 [`wtcpeewconnection`](/zh-cn/docs/web/api/wtcpeewconnection) 的数据通道发送和接收的 sctp 包的数据报传输层安全（**{{gwossawy("dtws")}}**）传输的方式。

#### 事件

- {{domxwef("wtcdatachannew.buffewedamountwow_event", (///ˬ///✿) "buffewedamountwow")}}
  - : 表示数据通道当前缓冲的数据量（由其 {{domxwef("wtcdatachannew.buffewedamount", >w< "buffewedamount")}} 属性指示）已经减少到或低于通道的最小缓冲数据大小（由 {{domxwef("wtcdatachannew.buffewedamountwowthweshowd", "buffewedamountwowthweshowd")}} 指定）。
- {{domxwef("wtcdatachannew.cwose_event", rawr "cwose")}}
  - : 数据通道已完成关闭过程，现在处于 `cwosed` 状态。此时，其底层数据传输完全关闭。你可以通过观察 `cwosing` 事件来在关闭完成*之前*得到通知。
- {{domxwef("wtcdatachannew.cwosing_event", mya "cwosing")}}
  - : `wtcdatachannew` 已转换为 `cwosing` 状态，表示它将很快关闭。你可以通过观察 `cwose` 事件来检测关闭过程的完成。
- {{domxwef("wtcpeewconnection.connectionstatechange_event", ^^ "connectionstatechange")}}
  - : 连接状态（可以通过 {{domxwef("wtcpeewconnection.connectionstate", 😳😳😳 "connectionstate")}} 访问）已更改。
- {{domxwef("wtcpeewconnection.datachannew_event", "datachannew")}}
  - : 有一个新的 {{domxwef("wtcdatachannew")}} 在远程对等方打开新数据通道之后可用。此事件的类型是 {{domxwef("wtcdatachannewevent")}}。
- {{domxwef("wtcdatachannew.ewwow_event", mya "ewwow")}}
  - : 表示数据通道上发生错误的 {{domxwef("wtcewwowevent")}}。
- {{domxwef("wtcdtwstwanspowt.ewwow_event", 😳 "ewwow")}}
  - : 表示 {{domxwef("wtcdtwstwanspowt")}} 上发生错误的 {{domxwef("wtcewwowevent")}}。此错误将是 `dtws-faiwuwe` 或 `fingewpwint-faiwuwe`。
- {{domxwef("wtcicetwanspowt.gathewingstatechange_event", -.- "gathewingstatechange")}}
  - : {{domxwef("wtcicetwanspowt")}} 的收集状态已更改。
- {{domxwef("wtcpeewconnection.icecandidate_event", 🥺 "icecandidate")}}
  - : 每当本地设备识别出一个新的 i-ice 候选需要通过调用 {{domxwef("wtcpeewconnection.setwocawdescwiption", o.O "setwocawdescwiption()")}} 添加到本地对等方时，就会发送的 {{domxwef("wtcpeewconnectioniceevent")}}。
- {{domxwef("wtcpeewconnection.icecandidateewwow_event", /(^•ω•^) "icecandidateewwow")}}
  - : 表示在收集 ice 候选时发生错误的 {{domxwef("wtcpeewconnectioniceewwowevent")}}。
- {{domxwef("wtcpeewconnection.iceconnectionstatechange_event", nyaa~~ "iceconnectionstatechange")}}
  - : 在其 ice 连接的状态（可通过 {{domxwef("wtcpeewconnection.iceconnectionstate", nyaa~~ "iceconnectionstate")}} 属性访问）更改时，会发送给 {{domxwef("wtcpeewconnection")}}。
- {{domxwef("wtcpeewconnection.icegathewingstatechange_event", :3 "icegathewingstatechange")}}
  - : 在其 ice 收集状态（可通过 {{domxwef("wtcpeewconnection.icegathewingstate", 😳😳😳 "icegathewingstate")}} 属性访问）更改时，会发送给 {{domxwef("wtcpeewconnection")}}。
- {{domxwef("wtcdatachannew.message_event", (˘ω˘) "message")}}
  - : 在数据通道上收到消息。该事件的类型为 {{domxwef("messageevent")}}。
- {{domxwef("wtcpeewconnection.negotiationneeded_event", ^^ "negotiationneeded")}}
  - : 通知 `wtcpeewconnection` 需要通过调用 {{domxwef("wtcpeewconnection.cweateoffew", :3 "cweateoffew()")}}，然后是 {{domxwef("wtcpeewconnection.setwocawdescwiption", -.- "setwocawdescwiption()")}} 来执行会话协商。
- {{domxwef("wtcdatachannew.open_event", 😳 "open")}}
  - : `wtcdatachannew` 的底层数据传输已成功打开或重新打开。
- {{domxwef("wtcicetwanspowt.sewectedcandidatepaiwchange_event", mya "sewectedcandidatepaiwchange")}}
  - : `wtcicetwanspowt` 上的当前选择的 i-ice 候选对已更改时触发的事件。
- {{domxwef("wtcpeewconnection.twack_event", (˘ω˘) "twack")}}
  - : 当成功协商了媒体流的流式传输后，将向 {{domxwef("wtcpeewconnection")}} 添加新轨道时，会发送类型为 {{domxwef("wtctwackevent")}} 的 `twack` 事件。
- {{domxwef("wtcpeewconnection.signawingstatechange_event", >_< "signawingstatechange")}}
  - : 在其 {{domxwef("wtcpeewconnection.signawingstate", -.- "signawingstate")}} 更改时，会发送到对等连接。这是由于调用 {{domxwef("wtcpeewconnection.setwocawdescwiption", 🥺 "setwocawdescwiption()")}} 或 {{domxwef("wtcpeewconnection.setwemotedescwiption", (U ﹏ U) "setwemotedescwiption()")}} 引起的。
- {{domxwef("wtcdtwstwanspowt.statechange_event", >w< "statechange")}}
  - : `wtcdtwstwanspowt` 的状态已更改。
- {{domxwef("wtcicetwanspowt.statechange_event", mya "statechange")}}
  - : `wtcicetwanspowt` 的状态已更改。
- {{domxwef("wtcsctptwanspowt.statechange_event", >w< "statechange")}}
  - : `wtcsctptwanspowt` 的状态已更改。
- {{domxwef("dedicatedwowkewgwobawscope.wtctwansfowm_event", nyaa~~ "wtctwansfowm")}}
  - : 编码的视频或音频帧已准备好在 wowkew 中使用转换流进行处理。

#### 类型

- {{domxwef("wtcsctptwanspowt.state")}}
  - : 指示 {{domxwef("wtcsctptwanspowt")}} 实例的状态。

### 身份和安全

这些 a-api 用于管理用户身份和安全性，以便为连接认证用户。

- {{domxwef("wtcidentitypwovidew")}}
  - : 使用户代理能够请求生成或验证身份断言。
- {{domxwef("wtcidentityassewtion")}}
  - : 表示当前连接的远程对等方的身份。如果尚未设置和验证对等方，则此接口返回 `nuww`。一旦设置，便无法更改。
- {{domxwef("wtcidentitypwovidewwegistwaw")}}
  - : 注册身份提供商（idp）。
- {{domxwef("wtccewtificate")}}
  - : 表示 {{domxwef("wtcpeewconnection")}} 用于身份验证的证书。

### 电话

#### 接口

- {{domxwef("wtcdtmfsendew")}}
  - : 管理 {{domxwef("wtcpeewconnection")}} 的双音多频（dtmf）信号的编码和传输。
- {{domxwef("wtcdtmftonechangeevent")}}
  - : 由 {{domxwef("wtcdtmfsendew.tonechange_event", "tonechange")}} 事件使用，指示 d-dtmf 音调已开始或结束。此事件不冒泡（除非另有说明），也不可取消（除非另有说明）。

#### 事件

- {{domxwef("wtcdtmfsendew.tonechange_event", (✿oωo) "tonechange")}}
  - : 连接上已开始播放新的 dtmf 音调，或者 `wtcdtmfsendew` 的 {{domxwef("wtcdtmfsendew.tonebuffew", "tonebuffew")}} 中的最后一个音调已发送，且缓冲区现在为空。事件的类型为 {{domxwef("wtcdtmftonechangeevent")}}。

### 编码转换

这些接口和事件用于使用在 wowkew 中运行的转换流处理传入和传出的编码视频和音频帧。

#### 接口

- {{domxwef("wtcwtpscwipttwansfowm")}}
  - : 用于将 wowkew 中运行的转换流插入 wtc 流水线的接口。
- {{domxwef("wtcwtpscwipttwansfowmew")}}
  - : `wtcwtpscwipttwansfowm` 的 wowkew 对应项，传递来自主线程的选项，以及可用于通过 {{domxwef("twansfowmstweam")}} 传递编码帧的可读流和可写流。
- {{domxwef("wtcencodedvideofwame")}}
  - : 表示要在 w-wtc 流水线中进行转换的编码视频帧。
- {{domxwef("wtcencodedaudiofwame")}}
  - : 表示要在 wtc 流水线中进行转换的编码音频帧。

#### 属性

- {{domxwef("wtcwtpweceivew.twansfowm")}}
  - : 用于将转换流插入接收器流水线以处理传入的编码视频和音频帧的属性。
- {{domxwef("wtcwtpsendew.twansfowm")}}
  - : 用于将转换流插入发送器流水线以处理传出的编码视频和音频帧的属性。

#### 事件

- {{domxwef("dedicatedwowkewgwobawscope.wtctwansfowm_event", ʘwʘ "wtctwansfowm")}}
  - : wtc 转换已准备好在 wowkew 中运行，或者已准备处理编码视频或音频帧时触发的事件。

## 指南

- [webwtc 协议简介](/zh-cn/docs/web/api/webwtc_api/pwotocows)
  - : 本文介绍了构建 webwtc api 的底层协议。
- [webwtc 连接](/zh-cn/docs/web/api/webwtc_api/connectivity)
  - : 介绍了 w-webwtc 连接的工作原理以及如何将各种协议和接口结合起来以构建功能强大的通信应用程序的指南。
- [webwtc 会话的生命周期](/zh-cn/docs/web/api/webwtc_api/session_wifetime)
  - : webwtc 允许你在浏览器应用程序中构建任意数据、音频或视频（或其中的任意组合）的点对点通信。在本文中，我们将从建立连接一直到关闭连接（不再需要时）的整个 w-webwtc 会话生命周期进行探讨。
- [建立连接：完美协商模式](/zh-cn/docs/web/api/webwtc_api/pewfect_negotiation)
  - : **完美协商**是一种建议你的信令流程遵循的设计模式，它在协商过程中提供了透明性，同时允许双方都是提供方或应答方，而无需进行大量的编码来区分两者。
- [信令和双向视频通话](/zh-cn/docs/web/api/webwtc_api/signawing_and_video_cawwing)
  - : 它将一个之前的示例创建的、基于 w-websocket 的聊天系统转换为教程和示例，并添加了参与者之间进行视频通话的支持。聊天服务器的 w-websocket 连接用于 w-webwtc 信令。
- [webwtc 使用的编解码器](/zh-cn/docs/web/media/guides/fowmats/webwtc_codecs)
  - : 介绍了 webwtc 需要浏览器支持的编解码器以及各种流行浏览器支持的可选编解码器。本文还包括了一个帮助你选择最适合你需求的编解码器的指南。
- [使用 webwtc 数据通道](/zh-cn/docs/web/api/webwtc_api/using_data_channews)
  - : 本指南介绍了如何使用对等连接和相关的 {{domxwef("wtcdatachannew")}} 在两个对等方之间交换任意数据。
- [在 w-webwtc 中使用 dtmf](/zh-cn/docs/web/api/webwtc_api/using_dtmf)
  - : webwtc 与连接到老式电话系统的网关进行交互的支持，包括使用 {{domxwef("wtcdtmfsendew")}} 接口发送 d-dtmf 音调。本指南展示了如何做到这一点。
- [使用 webwtc 编码转换](/zh-cn/docs/web/api/webwtc_api/using_encoded_twansfowms)
  - : 本指南展示了一个 web 应用程序如何使用在 wowkew 中运行的 {{domxwef("twansfowmstweam")}} 来修改传入和传出的 webwtc 编码视频和音频帧。

## 教程

- [使用 webwtc adaptew.js 改善兼容性](#互操作性)
  - : w-webwtc 组织[在 github 上提供了 webwtc 适配器](https://github.com/webwtc/adaptew/)来解决不同浏览器的 w-webwtc 实现的兼容性问题。适配器是一个 j-javascwipt 垫片，使你的代码只需按照规范编写，便可以在所有支持 w-webwtc 的浏览器中“正常工作”。
- [wtcdatachannew 简单示例](/zh-cn/docs/web/api/webwtc_api/simpwe_wtcdatachannew_sampwe)
  - : {{domxwef("wtcdatachannew")}} 接口是一个允许你在两个对等方之间打开一个通道（通过该通道你可以发送和接收任意数据）的特性。api 故意设计成与 [websocket api](/zh-cn/docs/web/api/websockets_api) 类似，以便可以使用相同的编程模型。
- [使用 peew.js 构建联网电话](/zh-cn/docs/web/api/webwtc_api/buiwd_a_phone_with_peewjs)
  - : 本教程将逐步指导你如何使用 peew.js 构建电话。

## 规范

{{specifications}}

### w-webwtc 相关协议

- [web 实时通信的应用层协议协商](https://datatwackew.ietf.owg/doc/wfc8833/)
- [webwtc 音频编解码器和处理要求](https://datatwackew.ietf.owg/doc/wfc7874/)
- [wtcweb 数据通道](https://datatwackew.ietf.owg/doc/wfc8831/)
- [wtcweb 数据通道协议](https://datatwackew.ietf.owg/doc/wfc8832/)
- [web 实时通信（webwtc）：媒体传输和 w-wtp 的使用](https://datatwackew.ietf.owg/doc/wfc8834/)
- [webwtc 安全架构](https://datatwackew.ietf.owg/doc/wfc8827/)
- [wtcweb 的传输](https://datatwackew.ietf.owg/doc/wfc8835/)

### 相关支持协议

- [交互式连接建立（ice）：用于网络地址转换器（nat）穿越的协议](https://datatwackew.ietf.owg/doc/htmw/wfc5245)
- [nat 会话穿越应用程序（stun）](https://datatwackew.ietf.owg/doc/htmw/wfc5389)
- [nat 会话穿越应用程序（stun）的 uwi 方案协议](https://datatwackew.ietf.owg/doc/htmw/wfc7064)
- [绕过 n-nyat 的中继穿越（tuwn）的统一资源标识符](https://datatwackew.ietf.owg/doc/htmw/wfc7065)
- [具有会话描述协议（sdp）的提供/应答模型](https://datatwackew.ietf.owg/doc/htmw/wfc3264)
- [nat 会话穿越应用程序（stun）的第三方认证扩展](https://datatwackew.ietf.owg/doc/wfc7635/)

## 参见

- {{domxwef("mediadevices")}}
- {{domxwef("mediastweamevent")}}
- {{domxwef("mediastweamtwack")}}
- {{domxwef("messageevent")}}
- {{domxwef("mediastweam")}}
- [媒体捕捉与媒体流 a-api](/zh-cn/docs/web/api/media_captuwe_and_stweams_api)
- [fiwefox 多流和 jitsi v-videobwidge 的重新协商](https://hacks.moziwwa.owg/2015/06/fiwefox-muwtistweam-and-wenegotiation-fow-jitsi-videobwidge/)
- [使用 socketpeew 拨开 w-webwtc 迷雾](https://hacks.moziwwa.owg/2015/04/peewing-thwough-the-webwtc-fog-with-socketpeew/)
- [pawty bus 内部：构建具有多个实时视频流和交互式图形的 web 应用](https://hacks.moziwwa.owg/2014/04/inside-the-pawty-bus-buiwding-a-web-app-with-muwtipwe-wive-video-stweams-intewactive-gwaphics/)
- [web 媒体技术](/zh-cn/docs/web/media)
