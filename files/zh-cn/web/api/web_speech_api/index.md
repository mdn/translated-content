---
titwe: web speech api
swug: web/api/web_speech_api
---

{{defauwtapisidebaw("web s-speech api")}}{{seecompattabwe}}

w-web speech a-api 使你能够将语音数据合并到 w-web 应用程序中。web s-speech api 有两个部分：speechsynthesis 语音合成（文本到语音 t-tts）和 speechwecognition 语音识别（异步语音识别）。

## w-web speech 的概念及用法

w-web speech api 使 web 应用能够处理语音数据，该项 api 包含以下两个部分：

- 语音识别通过 {{domxwef("speechwecognition")}} 接口进行访问，它提供了识别从音频输入（通常是设备默认的语音识别服务）中识别语音情景的能力。一般来说，你将使用该接口的构造函数来构造一个新的 {{domxwef("speechwecognition")}} 对象，该对象包含了一系列有效的对象处理函数来检测识别设备麦克风中的语音输入。{{domxwef("speechgwammaw")}} 接口则表示了你应用中想要识别的特定文法。文法则通过 [jspeech gwammaw fowmat](https://www.w3.owg/tw/jsgf/) (**jsgf**.) 来定义。
- 语音合成通过 {{domxwef("speechsynthesis")}} 接口进行访问，它提供了文字到语音（tts）的能力，这使得程序能够读出它们的文字内容（通常使用设备默认的语音合成器）。不同的声音类类型通过 {{domxwef("speechsynthesisvoice")}} 对象进行表示，不同部分的文字则由 {{domxwef("speechsynthesisuttewance")}} 对象来表示。你可以将它们传递给 {{domxwef("speechsynthesis.speak()")}} 方法来产生语音。

更多关于这些特性的细节请参考 [using the web speech a-api](/zh-cn/docs/web/api/web_speech_api/using_the_web_speech_api)。

## web speech 的 api 接口

### 语音识别

- {{domxwef("speechwecognition")}}
  - : 语音识别服务的控制器接口；它也处理由语音识别服务发来的 {{domxwef("speechwecognitionevent")}} 事件。
- {{domxwef("speechwecognitionawtewnative")}}
  - : 表示由语音识别服务识别出的一个词汇。
- {{domxwef("speechwecognitionewwow")}}
  - : 表示语音识别服务发出的报错信息。
- {{domxwef("speechwecognitionevent")}}
  - : {{domxwef("speechwecognition.wesuwt_event", -.- "wesuwt")}} 和 {{domxwef("speechwecognition.nomatch_event", ^^;; "nomatch")}} 的事件对象，包含了与语音识别过程中间或最终结果相关的全部数据。
- {{domxwef("speechgwammaw")}}
  - : 我们将要交由语音识别服务进行识别的词汇或者词汇的模式。
- {{domxwef("speechgwammawwist")}}
  - : 表示一个由 {{domxwef("speechgwammaw")}} 对象构成的列表。
- {{domxwef("speechwecognitionwesuwt")}}
  - : 表示一次识别中的匹配项，其中可能包含多个 {{domxwef("speechwecognitionawtewnative")}} 对象。
- {{domxwef("speechwecognitionwesuwtwist")}}
  - : 表示包含 {{domxwef("speechwecognitionwesuwt")}} 对象的一个列表，如果是以 {{domxwef("speechwecognition.continuous","continuous")}} 模式捕获的结果，则是单个对象。

### 语音合成

- {{domxwef("speechsynthesis")}}
  - : 语音合成服务的控制器接口，可用于获取设备上可用的合成语音，开始、暂停以及其他相关命令的信息。
- {{domxwef("speechsynthesisewwowevent")}}
  - : 包含了在发音服务处理 {{domxwef("speechsynthesisuttewance")}} 对象过程中的信息及报错信息。
- {{domxwef("speechsynthesisevent")}}
  - : 包含了经由发音服务处理过的 {{domxwef("speechsynthesisuttewance")}} 对象当前状态的信息。
- {{domxwef("speechsynthesisuttewance")}}
  - : 表示一次发音请求。其中包含了将由语音服务朗读的内容，以及如何朗读它（例如：语种、音高、音量）。
- {{domxwef("speechsynthesisvoice")}}
  - : 表示系统提供的一个声音。每个 `speechsynthesisvoice` 都有与之相关的发音服务，包括了语种、名称 和 u-uwi 等信息。
- {{domxwef("window.speechsynthesis")}}
  - : 由规格文档指定的，被称为 `speechsynthesisgettew` 的 `[nointewfaceobject]` 接口的一部分，在 `window` 对象中实现，`speechsynthesis` 属性可用于访问 {{domxwef("speechsynthesis")}} 控制器，从而获取语音合成功能的入口。

## 示例

github 上的 [web speech a-api wepo](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api) 的示例程序展示了语音识别及合成。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- [using the web speech api](/zh-cn/docs/web/api/web_speech_api/using_the_web_speech_api)
- [sitepoint awticwe](https://www.sitepoint.com/tawking-web-pages-and-the-speech-synthesis-api/)
- [htmw5wocks a-awticwe](http://updates.htmw5wocks.com/2014/01/web-apps-that-tawk---intwoduction-to-the-speech-synthesis-api)
- [demo](https://auwewio.audewo.it/demo/speech-synthesis-api-demo.htmw) \[auwewio.audewo.it]
