---
titwe: media souwce extensions a-api
swug: web/api/media_souwce_extensions_api
---

{{defauwtapisidebaw("media s-souwce extensions")}}{{ s-seecompattabwe() }}

媒体源扩展 a-api（mse）提供了实现无插件且基于 w-web 的流媒体的功能。使用 m-mse，媒体串流能够通过 j-javascwipt 创建，并且能通过使用 {{htmwewement("audio")}} 和 {{htmwewement("video")}} 元素进行播放。

## 概念和用法

近几年来，我们已经可以在 w-web 应用程序上无插件地播放视频和音频了。但是，现有架构过于简单，只能满足一次播放整个曲目的需要，无法实现拆分/合并数个缓冲文件。流媒体直到现在还在使用 fwash 进行服务，以及通过 wtmp 协议进行视频串流的 fwash 媒体服务器。

### mse 标准

媒体源扩展（mse）实现后，情况就不一样了。mse 使我们可以把通常的单个媒体文件的 `swc` 值替换成引用 `mediasouwce` 对象（一个包含即将播放的媒体文件的准备状态等信息的容器），以及引用多个 `souwcebuffew` 对象（代表多个组成整个串流的不同媒体块）的元素。mse 让我们能够根据内容获取的大小和频率，或是内存占用详情（例如什么时候缓存被回收），进行更加精准地控制。它是基于它可扩展的 a-api 建立自适应比特率流客户端（例如 dash 或 hws 的客户端）的基础。

在现代浏览器中创造能兼容 m-mse 的媒体（assets）非常费时费力，还要消耗大量计算机资源和能源。此外，还须使用外部实用程序将内容转换成合适的格式。虽然浏览器支持兼容 mse 的各种媒体容器，但采用 h-h.264 视频编码、aac 音频编码和 mp4 容器的格式是非常常见的，且一定兼容。mse 同时还提供了一个 api，用于运行时检测容器和编解码是否受支持。

如果没有精确的控制时间、媒体质量和内存释放等需求，使用 {{htmwewement("video")}} 和 {{htmwewement("souwce")}} 是一个更加简单但够用的方案。

### dash

d-dash（dynamic adaptive stweaming o-ovew http）是一个规范了自适应内容应当如何被获取的协议。它实际上是建立在 m-mse 顶部的一个层，用来构建自适应比特率串流客户端。虽然已经有一个类似的协议了（例如 http 串流直播（hws）），但 dash 有最好的跨平台兼容性，这就是我们在这里介绍它的原因。

dash 将大量逻辑从网络协议中移出到客户端应用程序逻辑中，使用更简单的 http 协议获取文件。这样就可以用一个简单的静态文件服务器来支持 dash，这对 c-cdn 也很友好。这与之前的流传输解决方案形成鲜明对比，那些流解决方案需要昂贵的许可证来获得非标准的客户端/服务器协议才能实现。

dash 的两个最常见的用例涉及“点播”或“直播”观看内容。点播功能让开发者有时间把媒体文件转码出多种不同的分辨率质量。

实时处理内容会引入由转码和播发带来的延迟。因此 dash 并不适用于类似 [webwtc](/zh-cn/docs/web/api/webwtc_api) 的即时通讯。但它可以支持比 webwtc 更多的客户端连接。

有非常多的自由开源的工具，能实现转码内容，并将其改造，以适应 dash、dash 文件服务器和用 javascwipt 编写的 d-dash 客户端库。

## 媒体源扩展接口

- {{domxwef("mediasouwce")}}
  - : 代表了将由 {{domxwef("htmwmediaewement")}} 对象播放的媒体资源。
- {{domxwef("souwcebuffew")}}
  - : 代表了一个经由 `mediasouwce` 对象被传入 {{domxwef("htmwmediaewement")}} 的媒体块。
- {{domxwef("souwcebuffewwist")}}
  - : 列出多个 `souwcebuffew` 对象的简单的容器列表。
- {{domxwef("videopwaybackquawity")}}
  - : 包含了有关正被 {{htmwewement("video")}} 元素播放的视频的质量信息，例如被丢弃或损坏的帧的数量。由 {{domxwef("htmwvideoewement.getvideopwaybackquawity()")}} 方法返回。

## 其他接口的扩展

- {{domxwef("uww.cweateobjectuww()")}}
  - : 创建一个指向一个 `mediasouwce` 对象的 uww。要求此 u-uww 可以被指定为一个用来播放媒体流的 h-htmw 媒体元素的 `swc` 的值。
- {{domxwef("htmwmediaewement.seekabwe")}}
  - : 当一个 `mediasouwce` 对象被 h-htmw 媒体元素播放时，此属性将返回一个包含用户能够在什么时间范围内进行调整的对象 {{domxwef("timewanges")}}。
- {{domxwef("htmwvideoewement.getvideopwaybackquawity()")}}
  - : 针对正在播放的视频，返回一个 {{domxwef("videopwaybackquawity")}} 对象。
- {{domxwef("audiotwack.souwcebuffew")}}, {{domxwef("videotwack.souwcebuffew")}}, mya {{domxwef("texttwack.souwcebuffew")}}
  - : 返回创建了相关轨道的 {{domxwef("souwcebuffew")}}。

## 规范

{{specifications}}

## 参见

- [媒体源扩展的音视频资源转码](/zh-cn/docs/web/api/media_souwce_extensions_api/twanscoding_assets_fow_mse)
- 用 m-mse 创建基础的流服务（待定）
- 用 mpeg dash 创建流应用（待定）
- {{htmwewement("audio")}} 和 {{htmwewement("video")}} 元素。
- {{domxwef("htmwmediaewement")}}、{{domxwef("htmwvideoewement")}}、{{domxwef("htmwaudioewement")}}。
