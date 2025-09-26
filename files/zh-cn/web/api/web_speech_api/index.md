---
title: Web Speech API
slug: Web/API/Web_Speech_API
---

{{DefaultAPISidebar("Web Speech API")}}{{seecompattable}}

Web Speech API 使你能够将语音数据合并到 Web 应用程序中。Web Speech API 有两个部分：SpeechSynthesis 语音合成（文本到语音 TTS）和 SpeechRecognition 语音识别（异步语音识别）。

## Web Speech 的概念及用法

Web Speech API 使 Web 应用能够处理语音数据，该项 API 包含以下两个部分：

- 语音识别通过 {{domxref("SpeechRecognition")}} 接口进行访问，它提供了识别从音频输入（通常是设备默认的语音识别服务）中识别语音情景的能力。一般来说，你将使用该接口的构造函数来构造一个新的 {{domxref("SpeechRecognition")}} 对象，该对象包含了一系列有效的对象处理函数来检测识别设备麦克风中的语音输入。{{domxref("SpeechGrammar")}} 接口则表示了你应用中想要识别的特定文法。文法则通过 [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**.) 来定义。
- 语音合成通过 {{domxref("SpeechSynthesis")}} 接口进行访问，它提供了文字到语音（TTS）的能力，这使得程序能够读出它们的文字内容（通常使用设备默认的语音合成器）。不同的声音类类型通过 {{domxref("SpeechSynthesisVoice")}} 对象进行表示，不同部分的文字则由 {{domxref("SpeechSynthesisUtterance")}} 对象来表示。你可以将它们传递给 {{domxref("SpeechSynthesis.speak()")}} 方法来产生语音。

更多关于这些特性的细节请参考 [Using the Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)。

## Web Speech 的 API 接口

### 语音识别

- {{domxref("SpeechRecognition")}}
  - : 语音识别服务的控制器接口；它也处理由语音识别服务发来的 {{domxref("SpeechRecognitionEvent")}} 事件。
- {{domxref("SpeechRecognitionAlternative")}}
  - : 表示由语音识别服务识别出的一个词汇。
- {{domxref("SpeechRecognitionError")}}
  - : 表示语音识别服务发出的报错信息。
- {{domxref("SpeechRecognitionEvent")}}
  - : {{domxref("SpeechRecognition.result_event", "result")}} 和 {{domxref("SpeechRecognition.nomatch_event", "nomatch")}} 的事件对象，包含了与语音识别过程中间或最终结果相关的全部数据。
- {{domxref("SpeechGrammar")}}
  - : 我们将要交由语音识别服务进行识别的词汇或者词汇的模式。
- {{domxref("SpeechGrammarList")}}
  - : 表示一个由 {{domxref("SpeechGrammar")}} 对象构成的列表。
- {{domxref("SpeechRecognitionResult")}}
  - : 表示一次识别中的匹配项，其中可能包含多个 {{domxref("SpeechRecognitionAlternative")}} 对象。
- {{domxref("SpeechRecognitionResultList")}}
  - : 表示包含 {{domxref("SpeechRecognitionResult")}} 对象的一个列表，如果是以 {{domxref("SpeechRecognition.continuous","continuous")}} 模式捕获的结果，则是单个对象。

### 语音合成

- {{domxref("SpeechSynthesis")}}
  - : 语音合成服务的控制器接口，可用于获取设备上可用的合成语音，开始、暂停以及其他相关命令的信息。
- {{domxref("SpeechSynthesisErrorEvent")}}
  - : 包含了在发音服务处理 {{domxref("SpeechSynthesisUtterance")}} 对象过程中的信息及报错信息。
- {{domxref("SpeechSynthesisEvent")}}
  - : 包含了经由发音服务处理过的 {{domxref("SpeechSynthesisUtterance")}} 对象当前状态的信息。
- {{domxref("SpeechSynthesisUtterance")}}
  - : 表示一次发音请求。其中包含了将由语音服务朗读的内容，以及如何朗读它（例如：语种、音高、音量）。
- {{domxref("SpeechSynthesisVoice")}}
  - : 表示系统提供的一个声音。每个 `SpeechSynthesisVoice` 都有与之相关的发音服务，包括了语种、名称 和 URI 等信息。
- {{domxref("Window.speechSynthesis")}}
  - : 由规格文档指定的，被称为 `SpeechSynthesisGetter` 的 `[NoInterfaceObject]` 接口的一部分，在 `Window` 对象中实现，`speechSynthesis` 属性可用于访问 {{domxref("SpeechSynthesis")}} 控制器，从而获取语音合成功能的入口。

## 示例

GitHub 上的 [Web Speech API repo](https://github.com/mdn/dom-examples/tree/main/web-speech-api) 的示例程序展示了语音识别及合成。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Using the Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [SitePoint article](https://www.sitepoint.com/talking-web-pages-and-the-speech-synthesis-api/)
- [HTML5Rocks article](http://updates.html5rocks.com/2014/01/Web-apps-that-talk---Introduction-to-the-Speech-Synthesis-API)
- [Demo](https://aurelio.audero.it/demo/speech-synthesis-api-demo.html) \[aurelio.audero.it]
