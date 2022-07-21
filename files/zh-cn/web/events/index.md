---
title: 事件参考
slug: Web/Events
tags:
  - Event
  - Web
  - 事件
  - 参考
  - 总览
translation_of: Web/Events
---
发送 DOM 事件是为了将发生的相关事情通知代码。每个事件都是继承自{{DOMxRef("Event")}} 接口的对象，可以包括自定义的成员属性及函数用于获取事件发生时相关的更多信息。事件可以表示任何从基本的用户交互、到发生在渲染模型自动通知的任何事情。

本文提供了一个可以发送的事件的列表；一些是官方标准中的标准事件，另一些则是在特定浏览器内部使用的事件；例如，列出的 Mozilla 特定事件，使[附加组件](/zh-CN/docs/Mozilla/Add-ons)可以借助它们与浏览器进行交互。

## 最常见的类别

| 事件名称                         | 何时触发                              |
| -------------------------------- | ------------------------------------- |
| {{Event("error")}}         | 资源加载失败时。                      |
| {{Event("abort")}}         | 正在加载资源已经被中止时。            |
| {{Event("load")}}         | 资源及其相关资源已完成加载。          |
| {{Event("beforeunload")}} | window，document 及其资源即将被卸载。 |
| {{Event("unload")}}         | 文档或一个依赖资源正在被卸载。        |

### 网络事件

| 事件名称                     | 何时触发               |
| ---------------------------- | ---------------------- |
| {{Event("online")}}     | 浏览器已获得网络访问。 |
| {{Event("offline")}} | 浏览器已失去网络访问。 |

### 焦点事件

| 事件名称                 | 何时触发                   |
| ------------------------ | -------------------------- |
| {{Event("focus")}} | 元素获得焦点（不会冒泡）。 |
| {{Event("blur")}} | 元素失去焦点（不会冒泡）。 |

### WebSocket 事件

| 事件名称                                                        | 何时触发                                           |
| --------------------------------------------------------------- | -------------------------------------------------- |
| [`open`](/zh-CN/docs/Web/Reference/Events/open_websocket)       | WebSocket 连接已建立。                             |
| [`message`](/zh-CN/docs/Web/Reference/Events/message_websocket) | 通过 WebSocket 接收到一条消息。                    |
| {{Event("error")}}                                        | WebSocket 连接异常被关闭（比如有些数据无法发送）。 |
| [`close`](/zh-CN/docs/Web/Reference/Events/close_websocket)     | WebSocket 连接已关闭。                             |

### 会话历史事件

| 事件名称                     | 何时触发                                                          |
| ---------------------------- | ----------------------------------------------------------------- |
| {{Event("pagehide")}} | A session history entry is being traversed from.                  |
| {{Event("pageshow")}} | A session history entry is being traversed to.                    |
| {{Event("popstate")}} | A session history entry is being navigated to (in certain cases). |

### CSS 动画事件

| 事件名称                                 | 何时触发                            |
| ---------------------------------------- | ----------------------------------- |
| {{Event("animationstart")}}     | 某个 CSS 动画开始时触发。           |
| {{Event("animationend")}}         | 某个 CSS 动画完成时触发。           |
| {{Event("animationiteration")}} | 某个 CSS 动画完成后重新开始时触发。 |

### CSS 过渡事件

| 事件名称                                 | 何时触发                                                                                                   |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| {{Event("transitionstart")}}     | A [CSS transition](/zh-CN/docs/Web/CSS/CSS_Transitions) has actually started (fired after any delay).      |
| {{Event("transitioncancel")}} | CSS 过渡被取消                                                                                             |
| {{Event("transitionend")}}     | CSS 过渡已经完成                                                                                           |
| {{Event("transitionrun")}}     | A [CSS transition](/zh-CN/docs/Web/CSS/CSS_Transitions) has begun running (fired before any delay starts). |

### 表单事件

| 事件名称                 | 何时触发       |
| ------------------------ | -------------- |
| {{Event("reset")}} | 点击重置按钮时 |
| {{Event("submit")}} | 点击提交按钮   |

### 打印事件

| 事件名称                         | 何时触发             |
| -------------------------------- | -------------------- |
| {{Event("beforeprint")}} | 打印机已经就绪时触发 |
| {{Event("afterprint")}} | 打印机关闭时触发     |

### 文本写作事件

| Event Name                               | Fired When                                                                                                                                          |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{Event("compositionstart")}} | The composition of a passage of text is prepared (similar to keydown for a keyboard input, but works with other inputs such as speech recognition). |
| {{Event("compositionupdate")}} | A character is added to a passage of text being composed.                                                                                           |
| {{Event("compositionend")}}     | The composition of a passage of text has been completed or canceled.                                                                                |

### 视图事件

| Event Name                               | Fired When                                                                                                 |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| {{Event("fullscreenchange")}} | An element was turned to fullscreen mode or back to normal mode.                                           |
| {{Event("fullscreenerror")}}     | It was impossible to switch to fullscreen mode for technical reasons or because the permission was denied. |
| {{Event("resize")}}                 | The document view has been resized.                                                                        |
| {{Event("scroll")}}                 | The document view or an element has been scrolled.                                                         |

### 剪贴板事件

| Event Name               | Fired When                                 |
| ------------------------ | ------------------------------------------ |
| {{Event("cut")}}     | 已经剪贴选中的文本内容并且复制到了剪贴板。 |
| {{Event("copy")}} | 已经把选中的文本内容复制到了剪贴板。       |
| {{Event("paste")}} | 从剪贴板复制的文本内容被粘贴。             |

### 键盘事件

| Event Name                   | Fired When                                              |
| ---------------------------- | ------------------------------------------------------- |
| {{Event("keydown")}} | 按下任意按键。                                          |
| {{Event("keypress")}} | 除 Shift、Fn、CapsLock 外的任意键被按住。（连续触发。） |
| {{Event("keyup")}}     | 释放任意按键。                                          |

### 鼠标事件

| Event Name                               | Fired When                                                                                     |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------- |
| {{Event("auxclick")}}             | A pointing device button (ANY non-primary button) has been pressed and released on an element. |
| {{Event("click")}}                 | 在元素上按下并释放任意鼠标按键。                                                               |
| {{Event("contextmenu")}}         | 右键点击（在右键菜单显示前触发）。                                                             |
| {{Event("dblclick")}}             | 在元素上双击鼠标按钮。                                                                         |
| {{Event("mousedown")}}             | 在元素上按下任意鼠标按钮。                                                                     |
| {{Event("mouseenter")}}         | 指针移到有事件监听的元素内。                                                                   |
| {{Event("mouseleave")}}         | 指针移出元素范围外（不冒泡）。                                                                 |
| {{Event("mousemove")}}             | 指针在元素内移动时持续触发。                                                                   |
| {{Event("mouseover")}}             | 指针移到有事件监听的元素或者它的子元素内。                                                     |
| {{Event("mouseout")}}             | 指针移出元素，或者移到它的子元素上。                                                           |
| {{Event("mouseup")}}             | 在元素上释放任意鼠标按键。                                                                     |
| {{Event("pointerlockchange")}} | 鼠标被锁定或者解除锁定发生时。                                                                 |
| {{Event("pointerlockerror")}} | 可能因为一些技术的原因鼠标锁定被禁止时。                                                       |
| {{Event("select")}}                 | 有文本被选中。                                                                                 |
| {{Event("wheel")}}                 | 滚轮向任意方向滚动。                                                                           |

### 拖放事件

| Event Name                   | Fired When                                                                              |
| ---------------------------- | --------------------------------------------------------------------------------------- |
| {{Event("drag")}}     | 正在拖动元素或文本选区（在此过程中持续触发，每 350ms 触发一次）                         |
| {{Event("dragend")}} | 拖放操作结束。（松开鼠标按钮或按下 Esc 键）                                             |
| {{Event("dragenter")}} | 被拖动的元素或文本选区移入有效释放目标区                                                |
| {{Event("dragstart")}} | 用户开始拖动 HTML 元素或选中的文本                                                      |
| {{Event("dragleave")}} | 被拖动的元素或文本选区移出有效释放目标区                                                |
| {{Event("dragover")}} | 被拖动的元素或文本选区正在有效释放目标上被拖动（在此过程中持续触发，每 350ms 触发一次） |
| {{Event("drop")}}     | 元素在有效释放目标区上释放                                                              |

### 媒体事件

| Event Name                           | Fired When                                                                                                                                                                                                                              |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{Event("audioprocess")}}     | The input buffer of a {{DOMxRef("ScriptProcessorNode")}} is ready to be processed.                                                                                                                                            |
| {{Event("canplay")}}         | The browser can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.                                                             |
| {{Event("canplaythrough")}} | The browser estimates it can play the media up to its end without stopping for content buffering.                                                                                                                                       |
| {{Event("complete")}}         | The rendering of an {{DOMxRef("OfflineAudioContext")}} is terminated.                                                                                                                                                         |
| {{Event("durationchange")}} | The `duration` attribute has been updated.                                                                                                                                                                                              |
| {{Event("emptied")}}         | The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the [`load()`](/zh-CN/docs/XPCOM_Interface_Reference/NsIDOMHTMLMediaElement) method is called to reload it. |
| {{Event("ended")}}             | Playback has stopped because the end of the media was reached.                                                                                                                                                                          |
| {{Event("loadeddata")}}     | The first frame of the media has finished loading.                                                                                                                                                                                      |
| {{Event("loadedmetadata")}} | The metadata has been loaded.                                                                                                                                                                                                           |
| {{Event("pause")}}             | Playback has been paused.                                                                                                                                                                                                               |
| {{Event("play")}}             | Playback has begun.                                                                                                                                                                                                                     |
| {{Event("playing")}}         | Playback is ready to start after having been paused or delayed due to lack of data.                                                                                                                                                     |
| {{Event("ratechange")}}     | The playback rate has changed.                                                                                                                                                                                                          |
| {{Event("seeked")}}             | A _seek_ operation completed.                                                                                                                                                                                                           |
| {{Event("seeking")}}         | A _seek_ operation began.                                                                                                                                                                                                               |
| {{Event("stalled")}}         | The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.                                                                                                                                                 |
| {{Event("suspend")}}         | Media data loading has been suspended.                                                                                                                                                                                                  |
| {{Event("timeupdate")}}     | The time indicated by the `currentTime` attribute has been updated.                                                                                                                                                                     |
| {{Event("volumechange")}}     | The volume has changed.                                                                                                                                                                                                                 |
| {{Event("waiting")}}         | Playback has stopped because of a temporary lack of data.                                                                                                                                                                               |

### 进度事件

| Event Name                                                | Fired When                                                                    |
| --------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`abort`](/zh-CN/docs/Web/API/XMLHttpRequest/abort_event) | Progression has been terminated (not due to an error).                        |
| {{Event("error")}}                                  | Progression has failed.                                                       |
| [`load`](/zh-CN/docs/Web/API/XMLHttpRequest/load_event)   | Progression has been successful.                                              |
| {{Event("loadend")}}                              | Progress has stopped (after "error", "abort" or "load" have been dispatched). |
| {{Event("loadstart")}}                              | Progress has begun.                                                           |
| {{Event("progress")}}                              | In progress.                                                                  |
| {{Event("timeout")}}                              | Progression is terminated due to preset time expiring.                        |

### 存储事件

{{Event("change")}} (参见 [非标准事件](#非标准事件))
{{Event("storage")}}

### 更新事件

{{Event("checking")}}
{{Event("downloading")}}
{{Event("error")}}
{{Event("noupdate")}}
{{Event("obsolete")}}
{{Event("updateready")}}

### 值变化事件

{{Event("broadcast")}}
{{Event("CheckboxStateChange")}}
{{Event("hashchange")}}
{{Event("input")}}
{{Event("RadioStateChange")}}
{{Event("readystatechange")}}
{{Event("ValueChange")}}

### 未分类的事件

{{Event("invalid")}}
[`message`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/message_event)
[`message`](/zh-CN/docs/Web/API/EventSource/message_event)
[`open`](/zh-CN/docs/Web/API/EventSource/open_event)
[`show`](/zh-CN/docs/Web/API/Element/show_event)

## 不常见和非标准事件

### Abortable Fetch events

| Event name                                             | Fired when                                                                                 |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| [`abort`](/zh-CN/docs/Web/API/AbortSignal/abort_event) | A DOM request is aborted, i.e. using {{DOMxRef("AbortController.abort()")}}. |

### WebVR events

| Event name                                       | Fired when                                                                                                                                                                                                                                        |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{Event("vrdisplayactivate")}}         | When a VR display is able to be presented to, for example if an HMD has been moved to bring it out of standby, or woken up by being put on.                                                                                                       |
| {{Event("vrdisplayblur")}}             | when presentation to a {{DOMxRef("VRDisplay")}} has been paused for some reason by the browser, OS, or VR hardware — for example, while the user is interacting with a system menu or browser, to prevent tracking or loss of experience. |
| {{Event("vrdisplayconnect")}}         | when a compatible {{DOMxRef("VRDisplay")}} is connected to the computer.                                                                                                                                                                  |
| {{Event("vrdisplaydeactivate")}}     | When a {{DOMxRef("VRDisplay")}} can no longer be presented to, for example if an HMD has gone into standby or sleep mode due to a period of inactivity.                                                                                   |
| {{Event("vrdisplaydisconnect")}}     | When a compatible {{DOMxRef("VRDisplay")}} is disconnected from the computer.                                                                                                                                                             |
| {{Event("vrdisplayfocus")}}             | When presentation to a {{DOMxRef("VRDisplay")}} has resumed after being blurred.                                                                                                                                                          |
| {{Event("vrdisplaypresentchange")}} | The presenting state of a {{DOMxRef("VRDisplay")}} changes — i.e. goes from presenting to not presenting, or vice versa.                                                                                                                  |

### SVG 事件

{{Event("SVGAbort")}}
{{Event("SVGError")}}
{{Event("SVGLoad")}}
{{Event("SVGResize")}}
{{Event("SVGScroll")}}
{{Event("SVGUnload")}}
{{Event("SVGZoom")}}

### 数据库事件

[`abort`](/zh-CN/docs/Web/Reference/Events/abort_indexedDB)
[`blocked`](/zh-CN/docs/Web/Reference/Events/blocked_indexedDB)
[`complete`](/zh-CN/docs/Web/Reference/Events/complete_indexedDB)
{{Event("error")}}
[`success`](/zh-CN/docs/Web/Reference/Events/success_indexedDB)
[`upgradeneeded`](/zh-CN/docs/Web/Reference/Events/upgradeneeded_indexedDB)
[`versionchange`](/zh-CN/docs/Web/Reference/Events/versionchange_indexedDB)

### 脚本事件

{{Event("afterscriptexecute")}}
{{Event("beforescriptexecute")}}

### 菜单事件

{{Event("DOMMenuItemActive")}}
{{Event("DOMMenuItemInactive")}}

### 窗口事件

[`close`](/zh-CN/docs/Mozilla/Tech/XUL/Events/close_event)

### 弹出事件

{{Event("popuphidden")}}
{{Event("popuphiding")}}
{{Event("popupshowing")}}
{{Event("popupshown")}}

### Tab 事件

{{Event("visibilitychange")}}

### 电池事件

{{Event("chargingchange")}}
{{Event("chargingtimechange")}}
{{Event("dischargingtimechange")}}
{{Event("levelchange")}}

### 呼叫事件

{{Event("alerting")}}
{{Event("busy")}}
{{Event("callschanged")}}
{{Event("cfstatechange")}}
{{Event("connected")}}
{{Event("connecting")}}
{{Event("dialing")}}
{{Event("disconnected")}}
{{Event("disconnecting")}}
{{Event("error_(Telephony)","error")}}
{{Event("held")}}, {{Event("holding")}}
{{Event("incoming")}}
{{Event("resuming")}}
{{Event("statechange")}}
{{Event("voicechange")}}

### 传感器事件

{{Event("compassneedscalibration")}}
{{Event("devicemotion")}}
{{Event("deviceorientation")}}
{{Event("orientationchange")}}

### 智能卡事件

{{Event("icccardlockerror")}}
{{Event("iccinfochange")}}
{{Event("smartcard-insert")}}
{{Event("smartcard-remove")}}
{{Event("stkcommand")}}
{{Event("stksessionend")}}
{{Event("cardstatechange")}}

### 短信和 USSD 事件

{{Event("delivered")}}
{{Event("received")}}
{{Event("sent")}}
{{Event("ussdreceived")}}

### 帧事件

{{Event("mozbrowserclose")}}
{{Event("mozbrowsercontextmenu")}}
{{Event("mozbrowsererror")}}
{{Event("mozbrowsericonchange")}}
{{Event("mozbrowserlocationchange")}}
{{Event("mozbrowserloadend")}}
{{Event("mozbrowserloadstart")}}
{{Event("mozbrowseropenwindow")}}
{{Event("mozbrowsersecuritychange")}}
{{Event("mozbrowsershowmodalprompt")}}
{{Event("mozbrowsertitlechange")}}

### DOM 变异事件

[`DOMAttributeNameChanged`](/zh-CN/docs/DOM/Mutation_events)
[`DOMAttrModified`](/zh-CN/docs/DOM/Mutation_events)
[`DOMCharacterDataModified`](/zh-CN/docs/DOM/Mutation_events)
{{Event("DOMContentLoaded")}}
[`DOMElementNameChanged`](/zh-CN/docs/DOM/Mutation_events)
[`DOMNodeInserted`](/zh-CN/docs/DOM/Mutation_events)
[`DOMNodeInsertedIntoDocument`](/zh-CN/docs/DOM/Mutation_events)
[`DOMNodeRemoved`](/zh-CN/docs/DOM/Mutation_events)
[`DOMNodeRemovedFromDocument`](/zh-CN/docs/DOM/Mutation_events)
[`DOMSubtreeModified`](/zh-CN/docs/DOM/Mutation_events)

### 触摸事件

{{Event("touchcancel")}}
{{Event("touchend")}}
{{Event("touchmove")}}
{{Event("touchstart")}}

### 指针事件

{{Event("pointerover")}}
{{Event("pointerenter")}}
{{Event("pointerdown")}}
{{Event("pointermove")}}
{{Event("pointerup")}}
{{Event("pointercancel")}}
{{Event("pointerout")}}
{{Event("pointerleave")}}
{{Event("gotpointercapture")}}
{{Event("lostpointercapture")}}

## 标准事件

这些事件在官方 Web 规范中定义，并且应在各个浏览器中通用。 每个事件都和代表事件接收方的对象（由此您可以查到每个事件提供的数据），定义这个事件的标准或标准链接会一起列出。

| 事件名称                                                                                              | 事件类型                                                                                                                        | 规范                                                                                                                                                                                                          | 触发时机...                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{Event("abort")}}                                                                              | {{DOMxRef("UIEvent")}}                                                                                                    | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-abort)                                                                                                                                           | 资源载入已被中止                                                                                                                                                                                                                            |
| [`abort`](</zh-CN/docs/Web/Reference/Events/abort_(ProgressEvent)>)                                   | {{DOMxRef("ProgressEvent")}}                                                                                            | [Progress](http://www.w3.org/TR/progress-events/)and[XMLHttpRequest](http://www.w3.org/TR/XMLHttpRequest/#event-xhr-abort)                                                                                    | Progress 被终止 (不是 error 造成的)                                                                                                                                                                                                         |
| [`abort`](/zh-CN/docs/Web/Reference/Events/abort_indexedDB)                                           | {{DOMxRef("Event")}}                                                                                                    | [IndexedDB](http://www.w3.org/TR/IndexedDB/#database-interface)                                                                                                                                               | 事务已被中止                                                                                                                                                                                                                                |
| {{Event("afterprint")}}                                                                      | {{DOMxRef("Event")}}                                                                                                    | [HTML5](http://www.w3.org/TR/html5/webappapis.html#printing)                                                                                                                                                  | 相关文档已开始打印或打印预览已被关闭                                                                                                                                                                                                        |
| {{Event("animationcancel")}}                                                                  | {{DOMxRef("AnimationEvent")}} {{Experimental_Inline}}                                                       | [CSS Animations](http://www.w3.org/TR/css3-animations/#animation-events)                                                                                                                                      | A [CSS animation](/zh-CN/docs/CSS/CSS_animations) has aborted.                                                                                                                                                                              |
| {{Event("animationend")}}                                                                      | {{DOMxRef("AnimationEvent")}} {{Experimental_Inline}}                                                       | [CSS Animations](http://www.w3.org/TR/css3-animations/#animation-events)                                                                                                                                      | 完成一个[CSS 动画](/zh-CN/docs/CSS/CSS_animations)                                                                                                                                                                                          |
| {{Event("animationiteration")}}                                                              | {{DOMxRef("AnimationEvent")}} {{Experimental_Inline}}                                                       | [CSS Animations](http://www.w3.org/TR/css3-animations/#animation-events)                                                                                                                                      | 重复播放一个[CSS 动画](/zh-CN/docs/CSS/CSS_animations)                                                                                                                                                                                      |
| {{Event("animationstart")}}                                                                  | {{DOMxRef("AnimationEvent")}} {{Experimental_Inline}}                                                       | [CSS Animations](http://www.w3.org/TR/css3-animations/#animation-events)                                                                                                                                      | 一个 [CSS 动画](/zh-CN/docs/CSS/CSS_animations)已开始                                                                                                                                                                                       |
| {{Event("appinstalled")}}                                                                      | {{DOMxRef("Event")}}                                                                                                    | [Web App Manifest](/zh-CN/docs/Web/Manifest)                                                                                                                                                                  | A web application is successfully installed as a [progressive web app](/en-US/Apps/Progressive).                                                                                                                                            |
| {{Event("audioprocess")}}                                                                      | {{DOMxRef("AudioProcessingEvent")}} {{Deprecated_Inline}}                                                   | {{SpecName('Web Audio API', '#AudioProcessingEvent', 'audioprocess')}}                                                                                                                  | 一个{{DOMxRef("ScriptProcessorNode")}} 的输入缓冲区可处理                                                                                                                                                                         |
| {{Event("audioend")}} {{Experimental_Inline}}                                         | {{DOMxRef("Event")}}                                                                                                    | {{SpecName('Web Speech API')}}                                                                                                                                                                      | 用户代理捕捉到用以语音识别的音频                                                                                                                                                                                                            |
| {{Event("audiostart")}} {{Experimental_Inline}}                                     | {{DOMxRef("Event")}}                                                                                                    | {{SpecName('Web Speech API')}}                                                                                                                                                                      | 用户代理开始捕捉用以语音识别的音频                                                                                                                                                                                                          |
| {{Event("beforeprint")}}                                                                      | {{DOMxRef("Event")}}                                                                                                    | [HTML5](http://www.w3.org/TR/html5/webappapis.html#printing)                                                                                                                                                  | 相关文档将要开始打印或准备打印预览                                                                                                                                                                                                          |
| {{Event("beforeunload")}}                                                                      | {{DOMxRef("BeforeUnloadEvent")}}                                                                                    | [HTML5](http://www.w3.org/TR/html5/browsers.html#unloading-documents)                                                                                                                                         | 即将卸载 window，document 及其资源                                                                                                                                                                                                          |
| {{Event("beginEvent")}}                                                                      | {{DOMxRef("TimeEvent")}}                                                                                                | [SVG](http://www.w3.org/TR/SVG/interact.html#SVGEvents)                                                                                                                                                       | A [SMIL](/zh-CN/docs/SVG/SVG_animation_with_SMIL) animation element begins.                                                                                                                                                                 |
| [`blocked`](/zh-CN/docs/Web/Reference/Events/blocked_indexedDB)                                       |                                                                                                                                 | [IndexedDB](http://www.w3.org/TR/IndexedDB/#request-api)                                                                                                                                                      | An open connection to a database is blocking a `versionchange` transaction on the same database.                                                                                                                                            |
| {{Event("blur")}}                                                                              | {{DOMxRef("FocusEvent")}} {{Experimental_Inline}}                                                               | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-blur)                                                                                                                                            | An element has lost focus (does not bubble).                                                                                                                                                                                                |
| {{Event("boundary")}} {{Experimental_Inline}}                                         | {{DOMxRef("SpeechSynthesisEvent")}}                                                                                | {{SpecName('Web Speech API')}}                                                                                                                                                                      | The spoken utterance reaches a word or sentence boundary                                                                                                                                                                                    |
| {{Event("canplay")}}                                                                          | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-canplay)                                                                                         | The user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.                                                              |
| {{Event("canplaythrough")}}                                                                  | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-canplaythrough)                                                                                  | The user agent can play the media up to its end without having to stop for further buffering of content.                                                                                                                                    |
| {{Event("change")}}                                                                              | {{DOMxRef("Event")}}                                                                                                    | [DOM L2](http://www.w3.org/TR/DOM-Level-2-Events/events.html), [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#event-input-change)                   | The `change` event is fired for {{HTMLElement("input")}}, {{HTMLElement("select")}}, and {{HTMLElement("textarea")}} elements when a change to the element's value is committed by the user.                        |
| {{Event("chargingchange")}}                                                                  | {{DOMxRef("Event")}}                                                                                                    | [Battery status](https://dvcs.w3.org/hg/dap/raw-file/tip/battery/Overview.html)                                                                                                                               | The battery begins or stops charging.                                                                                                                                                                                                       |
| {{Event("chargingtimechange")}}                                                              | {{DOMxRef("Event")}}                                                                                                    | [Battery status](https://dvcs.w3.org/hg/dap/raw-file/tip/battery/Overview.html)                                                                                                                               | The `chargingTime` attribute has been updated.                                                                                                                                                                                              |
| {{Event("click")}}                                                                              | {{DOMxRef("MouseEvent")}}                                                                                                | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-click)                                                                                                                                           | A pointing device button has been pressed and released on an element.                                                                                                                                                                       |
| [`close`](/zh-CN/docs/Web/Reference/Events/close_websocket)                                           | {{DOMxRef("Event")}}                                                                                                    | [WebSocket](http://www.w3.org/TR/websockets/)                                                                                                                                                                 | A WebSocket connection has been closed.                                                                                                                                                                                                     |
| [`complete`](/zh-CN/docs/Web/Reference/Events/complete_indexedDB)                                     |                                                                                                                                 | [IndexedDB](http://www.w3.org/TR/IndexedDB/#transaction)                                                                                                                                                      | A transaction successfully completed.                                                                                                                                                                                                       |
| {{Event("complete")}}                                                                          | {{DOMxRef("OfflineAudioCompletionEvent")}} {{Deprecated_Inline}}                                           | {{SpecName('Web Audio API', '#OfflineAudioCompletionEvent-section', 'OfflineAudioCompletionEvent')}}                                                                          | The rendering of an {{DOMxRef("OfflineAudioContext")}} is terminated.                                                                                                                                                             |
| {{Event("compositionend")}}                                                                  | {{DOMxRef("CompositionEvent")}}                                                                                        | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-compositionend)                                                                                                                                  | The composition of a passage of text has been completed or canceled.                                                                                                                                                                        |
| {{Event("compositionstart")}}                                                              | {{DOMxRef("CompositionEvent")}}                                                                                        | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-compositionstart)                                                                                                                                | The composition of a passage of text is prepared (similar to keydown for a keyboard input, but works with other inputs such as speech recognition).                                                                                         |
| {{Event("compositionupdate")}}                                                              | {{DOMxRef("CompositionEvent")}}                                                                                        | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-compositionupdate)                                                                                                                               | A character is added to a passage of text being composed.                                                                                                                                                                                   |
| {{Event("contextmenu")}}                                                                      | {{DOMxRef("MouseEvent")}}                                                                                                | [HTML5](https://html.spec.whatwg.org/multipage/forms.html#context-menus)                                                                                                                                      | The right button of the mouse is clicked (before the context menu is displayed).                                                                                                                                                            |
| {{Event("copy")}}                                                                              | {{DOMxRef("ClipboardEvent")}} {{Experimental_Inline}}                                                       | [Clipboard](http://www.w3.org/TR/clipboard-apis/#copy-event)                                                                                                                                                  | The text selection has been added to the clipboard.                                                                                                                                                                                         |
| {{Event("cut")}}                                                                                  | {{DOMxRef("ClipboardEvent")}} {{Experimental_Inline}}                                                       | [Clipboard](http://www.w3.org/TR/clipboard-apis/#cut-event)                                                                                                                                                   | The text selection has been removed from the document and added to the clipboard.                                                                                                                                                           |
| {{Event("dblclick")}}                                                                          | {{DOMxRef("MouseEvent")}}                                                                                                | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-dblclick)                                                                                                                                        | A pointing device button is clicked twice on an element.                                                                                                                                                                                    |
| {{Event("devicechange")}}                                                                      | {{DOMxRef("Event")}}                                                                                                    | {{SpecName("Media Capture")}}                                                                                                                                                                      | A media device such as a camera, microphone, or speaker is connected or removed from the system.                                                                                                                                            |
| {{Event("devicemotion")}}                                                                      | {{DOMxRef("DeviceMotionEvent")}} {{Experimental_Inline}}                                                   | [Device Orientation Events](http://dev.w3.org/geo/api/spec-source-orientation.html)                                                                                                                           | Fresh data is available from a motion sensor.                                                                                                                                                                                               |
| {{Event("deviceorientation")}}                                                              | {{DOMxRef("DeviceOrientationEvent")}} {{Experimental_Inline}}                                               | [Device Orientation Events](http://dev.w3.org/geo/api/spec-source-orientation.html)                                                                                                                           | Fresh data is available from an orientation sensor.                                                                                                                                                                                         |
| {{Event("dischargingtimechange")}}                                                          | {{DOMxRef("Event")}}                                                                                                    | [Battery status](https://dvcs.w3.org/hg/dap/raw-file/tip/battery/Overview.html)                                                                                                                               | The `dischargingTime` attribute has been updated.                                                                                                                                                                                           |
| `DOMActivate` {{Deprecated_Inline}}                                                            | {{DOMxRef("UIEvent")}}                                                                                                    | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMActivate)                                                                                                                                     | A button, link or state changing element is activated (use {{Event("click")}} instead).                                                                                                                                               |
| [`DOMAttributeNameChanged`](/zh-CN/docs/DOM/Mutation_events) {{Deprecated_Inline}}             | {{DOMxRef("MutationNameEvent")}}                                                                                    | [DOM L3](http://www.w3.org/TR/2011/WD-DOM-Level-3-Events-20110531/#event-type-DOMAttributeNameChanged) Removed                                                                                                | The name of an attribute changed (use [mutation observers](/zh-CN/docs/DOM/MutationObserver) instead).                                                                                                                                      |
| [`DOMAttrModified`](/zh-CN/docs/DOM/Mutation_events) {{Deprecated_Inline}}                     | {{DOMxRef("MutationEvent")}}                                                                                            | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMAttrModified)                                                                                                                                 | The value of an attribute has been modified (use [mutation observers](/zh-CN/docs/DOM/MutationObserver) instead).                                                                                                                           |
| [`DOMCharacterDataModified`](/zh-CN/docs/DOM/Mutation_events) {{Deprecated_Inline}}            | {{DOMxRef("MutationEvent")}}                                                                                            | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMCharacterDataModified)                                                                                                                        | A text or another [CharacterData](/zh-CN/docs/DOM/CharacterData) has changed (use [mutation observers](/zh-CN/docs/DOM/MutationObserver) instead).                                                                                          |
| {{Event("DOMContentLoaded")}}                                                              | {{DOMxRef("Event")}}                                                                                                    | [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-end.html#the-end)                                                                                                                     | The document has finished loading (but not its dependent resources).                                                                                                                                                                        |
| [`DOMElementNameChanged`](/zh-CN/docs/DOM/Mutation_events) {{Deprecated_Inline}}               | {{DOMxRef("MutationNameEvent")}}                                                                                    | [DOM L3](http://www.w3.org/TR/2011/WD-DOM-Level-3-Events-20110531/#event-type-DOMElementNameChanged) Removed                                                                                                  | The name of an element changed (use [mutation observers](/zh-CN/docs/DOM/MutationObserver) instead).                                                                                                                                        |
| `DOMFocusIn` {{Deprecated_Inline}}                                                             | {{DOMxRef("FocusEvent")}} {{Experimental_Inline}}                                                               | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMFocusIn)                                                                                                                                      | An element has received focus (use {{Event("focus")}} or {{Event("focusin")}} instead).                                                                                                                                       |
| `DOMFocusOut` {{Deprecated_Inline}}                                                            | {{DOMxRef("FocusEvent")}} {{Experimental_Inline}}                                                               | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMFocusOut)                                                                                                                                     | An element has lost focus (use {{Event("blur")}} or {{Event("focusout")}} instead).                                                                                                                                           |
| [`DOMNodeInserted`](/zh-CN/docs/DOM/Mutation_events) {{Deprecated_Inline}}                     | {{DOMxRef("MutationEvent")}}                                                                                            | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMNodeInserted)                                                                                                                                 | A node has been added as a child of another node (use [mutation observers](/zh-CN/docs/DOM/MutationObserver) instead).                                                                                                                      |
| [`DOMNodeInsertedIntoDocument`](/zh-CN/docs/DOM/Mutation_events) {{Deprecated_Inline}}         | {{DOMxRef("MutationEvent")}}                                                                                            | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMNodeInsertedIntoDocument)                                                                                                                     | A node has been inserted into the document (use [mutation observers](/zh-CN/docs/DOM/MutationObserver) instead).                                                                                                                            |
| [`DOMNodeRemoved`](/zh-CN/docs/DOM/Mutation_events) {{Deprecated_Inline}}                      | {{DOMxRef("MutationEvent")}}                                                                                            | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMNodeRemoved)                                                                                                                                  | A node has been removed from its parent node (use [mutation observers](/zh-CN/docs/DOM/MutationObserver) instead).                                                                                                                          |
| [`DOMNodeRemovedFromDocument`](/zh-CN/docs/DOM/Mutation_events) {{Deprecated_Inline}}          | {{DOMxRef("MutationEvent")}}                                                                                            | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMNodeRemovedFromDocument)                                                                                                                      | A node has been removed from the document (use [mutation observers](/zh-CN/docs/DOM/MutationObserver) instead).                                                                                                                             |
| [`DOMSubtreeModified`](/zh-CN/docs/DOM/Mutation_events) {{Deprecated_Inline}}                  | {{DOMxRef("MutationEvent")}}                                                                                            | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMSubtreeModified)                                                                                                                              | A change happened in the document (use [mutation observers](/zh-CN/docs/DOM/MutationObserver) instead).                                                                                                                                     |
| {{Event("drag")}}                                                                              | {{DOMxRef("DragEvent")}}                                                                                                | [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/dnd.html#event-drag)                                                                                                                      | An element or text selection is being dragged (every 350ms).                                                                                                                                                                                |
| {{Event("dragend")}}                                                                          | {{DOMxRef("DragEvent")}}                                                                                                | [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/dnd.html#event-dragend)                                                                                                                   | A drag operation is being ended (by releasing a mouse button or hitting the escape key).                                                                                                                                                    |
| {{Event("dragenter")}}                                                                          | {{DOMxRef("DragEvent")}}                                                                                                | [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/dnd.html#event-dragenter)                                                                                                                 | A dragged element or text selection enters a valid drop target.                                                                                                                                                                             |
| {{Event("dragleave")}}                                                                          | {{DOMxRef("DragEvent")}}                                                                                                | [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/dnd.html#event-dragleave)                                                                                                                 | A dragged element or text selection leaves a valid drop target.                                                                                                                                                                             |
| {{Event("dragover")}}                                                                          | {{DOMxRef("DragEvent")}}                                                                                                | [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/dnd.html#event-dragover)                                                                                                                  | An element or text selection is being dragged over a valid drop target (every 350ms).                                                                                                                                                       |
| {{Event("dragstart")}}                                                                          | {{DOMxRef("DragEvent")}}                                                                                                | [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/dnd.html#event-dragstart)                                                                                                                 | The user starts dragging an element or text selection.                                                                                                                                                                                      |
| {{Event("drop")}}                                                                              | {{DOMxRef("DragEvent")}}                                                                                                | [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/dnd.html#event-drop)                                                                                                                      | An element is dropped on a valid drop target.                                                                                                                                                                                               |
| {{Event("durationchange")}}                                                                  | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-durationchange)                                                                                  | The `duration` attribute has been updated.                                                                                                                                                                                                  |
| {{Event("emptied")}}                                                                          | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-emptied)                                                                                         | The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the [`load()`](/zh-CN/docs/XPCOM_Interface_Reference/NsIDOMHTMLMediaElement) method is called to reload it.     |
| {{Event("end_(SpeechRecognition)","end")}} {{Experimental_Inline}}             | {{DOMxRef("Event")}}                                                                                                    | {{SpecName('Web Speech API')}}                                                                                                                                                                      | The speech recognition service has disconnected.                                                                                                                                                                                            |
| {{Event("end_(SpeechSynthesis)","end")}} {{Experimental_Inline}}                 | {{DOMxRef("SpeechSynthesisEvent")}}                                                                                | {{SpecName("Web Speech API")}}                                                                                                                                                                      | The utterance has finished being spoken.                                                                                                                                                                                                    |
| {{Event("ended")}}                                                                              | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-ended)                                                                                           | Playback has stopped because the end of the media was reached.                                                                                                                                                                              |
| {{Event("ended_(Web_Audio)", "ended")}}                                                  | {{DOMxRef("Event")}}                                                                                                    | {{SpecName("Web Audio API")}}                                                                                                                                                                      | Playback has stopped because the end of the media was reached.                                                                                                                                                                              |
| {{Event("endEvent")}}                                                                          | {{DOMxRef("TimeEvent")}}                                                                                                | [SVG](http://www.w3.org/TR/SVG/interact.html#SVGEvents)                                                                                                                                                       | A [SMIL](/zh-CN/docs/SVG/SVG_animation_with_SMIL) animation element ends.                                                                                                                                                                   |
| {{Event("error")}}                                                                              | {{DOMxRef("UIEvent")}}                                                                                                    | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-error)                                                                                                                                           | A resource failed to load.                                                                                                                                                                                                                  |
| {{Event("error")}}                                                                              | {{DOMxRef("ProgressEvent")}}                                                                                            | [Progress](http://www.w3.org/TR/progress-events/) and [XMLHttpRequest](http://www.w3.org/TR/XMLHttpRequest/#event-xhr-error)                                                                                  | Progression has failed.                                                                                                                                                                                                                     |
| {{Event("error")}}                                                                              | {{DOMxRef("Event")}}                                                                                                    | [WebSocket](http://www.w3.org/TR/websockets/)                                                                                                                                                                 | A WebSocket connection has been closed with prejudice (some data couldn't be sent for example).                                                                                                                                             |
| {{Event("error")}}                                                                              | {{DOMxRef("Event")}}                                                                                                    | [Server Sent Events](http://dev.w3.org/html5/eventsource/)                                                                                                                                                    | An event source connection has been failed.                                                                                                                                                                                                 |
| {{Event("error")}}                                                                              | {{DOMxRef("Event")}}                                                                                                    | [IndexedDB](http://www.w3.org/TR/IndexedDB/#request-api)                                                                                                                                                      | A request caused an error and failed.                                                                                                                                                                                                       |
| {{Event("error_(SpeechRecognitionError)","error")}} {{Experimental_Inline}} | {{DOMxRef("Event")}}                                                                                                    | {{SpecName('Web Speech API')}}                                                                                                                                                                      | A speech recognition error occurs.                                                                                                                                                                                                          |
| {{Event("error_(SpeechSynthesisError)","error")}}                                      | {{DOMxRef("SpeechSynthesisErrorEvent")}}                                                                            | {{SpecName('Web Speech API')}}                                                                                                                                                                      | An error occurs that prevents the utterance from being successfully spoken.                                                                                                                                                                 |
| {{Event("focus")}}                                                                              | {{DOMxRef("FocusEvent")}} {{Experimental_Inline}}                                                               | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-focus)                                                                                                                                           | An element has received focus (does not bubble).                                                                                                                                                                                            |
| {{Event("focusin")}}                                                                          | {{DOMxRef("FocusEvent")}} {{Experimental_Inline}}                                                               | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusIn)                                                                                                                                         | An element is about to receive focus (bubbles).                                                                                                                                                                                             |
| {{Event("focusout")}}                                                                          | {{DOMxRef("FocusEvent")}} {{Experimental_Inline}}                                                               | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusout)                                                                                                                                        | An element is about to lose focus (bubbles).                                                                                                                                                                                                |
| {{Event("fullscreenchange")}}                                                              | {{DOMxRef("Event")}}                                                                                                    | [Full Screen](https://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html#api)                                                                                                                               | An element was turned to fullscreen mode or back to normal mode.                                                                                                                                                                            |
| {{Event("fullscreenerror")}}                                                                  | {{DOMxRef("Event")}}                                                                                                    | [Full Screen](https://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html#api)                                                                                                                               | It was impossible to switch to fullscreen mode for technical reasons or because the permission was denied.                                                                                                                                  |
| {{Event("gamepadconnected")}}                                                              | {{DOMxRef("GamepadEvent")}} {{Experimental_Inline}}                                                           | [Gamepad](http://www.w3.org/TR/gamepad/#the-gamepadconnected-event)                                                                                                                                           | A gamepad has been connected.                                                                                                                                                                                                               |
| {{Event("gamepaddisconnected")}}                                                          | {{DOMxRef("GamepadEvent")}} {{Experimental_Inline}}                                                           | [Gamepad](http://www.w3.org/TR/gamepad/#the-gamepaddisconnected-event)                                                                                                                                        | A gamepad has been disconnected.                                                                                                                                                                                                            |
| {{Event("gotpointercapture")}}                                                              | {{DOMxRef("PointerEvent")}}                                                                                            | [Pointer Events](http://www.w3.org/TR/pointerevents/#the-gotpointercapture-event)                                                                                                                             | Element receives pointer capture.                                                                                                                                                                                                           |
| {{Event("hashchange")}}                                                                      | {{DOMxRef("HashChangeEvent")}}                                                                                        | [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#event-hashchange)                                                                                                            | The fragment identifier of the URL has changed (the part of the URL after the #).                                                                                                                                                           |
| {{Event("lostpointercapture")}}                                                              | {{DOMxRef("PointerEvent")}}                                                                                            | [Pointer Events](http://www.w3.org/TR/pointerevents/#the-lostpointercapture-event)                                                                                                                            | Element lost pointer capture.                                                                                                                                                                                                               |
| {{Event("input")}}                                                                              | {{DOMxRef("Event")}}                                                                                                    | [HTML5](http://www.w3.org/TR/html5/forms.html#common-event-behaviors)                                                                                                                                         | The value of an element changes or the content of an element with the attribute [contenteditable](/zh-CN/docs/DOM/Element.contentEditable) is modified.                                                                                     |
| {{Event("invalid")}}                                                                          | {{DOMxRef("Event")}}                                                                                                    | [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#constraint-validation)                                                                             | A submittable element has been checked and doesn't satisfy its constraints.                                                                                                                                                                 |
| {{Event("keydown")}}                                                                          | {{DOMxRef("KeyboardEvent")}}                                                                                            | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-keydown)                                                                                                                                         | A key is pressed down.                                                                                                                                                                                                                      |
| {{Event("keypress")}}                                                                          | {{DOMxRef("KeyboardEvent")}}                                                                                            | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-keypress)                                                                                                                                        | A key is pressed down and that key normally produces a character value (use input instead).                                                                                                                                                 |
| {{Event("keyup")}}                                                                              | {{DOMxRef("KeyboardEvent")}}                                                                                            | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-keyup)                                                                                                                                           | A key is released.                                                                                                                                                                                                                          |
| {{Event("languagechange")}} {{Experimental_Inline}}                                 | {{DOMxRef("Event")}}                                                                                                    | {{ SpecName('HTML5.1', '#dom-navigator-languages', 'NavigatorLanguage.languages') }}                                                                                              | The user's preferred languages have changed.                                                                                                                                                                                                |
| {{Event("levelchange")}}                                                                      | {{DOMxRef("Event")}}                                                                                                    | [Battery status](https://dvcs.w3.org/hg/dap/raw-file/tip/battery/Overview.html)                                                                                                                               | The `level` attribute has been updated.                                                                                                                                                                                                     |
| {{Event("load")}}                                                                              | {{DOMxRef("UIEvent")}}                                                                                                    | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-load)                                                                                                                                            | A resource and its dependent resources have finished loading.                                                                                                                                                                               |
| [`load`](</zh-CN/docs/Web/Reference/Events/load_(ProgressEvent)>)                                     | {{DOMxRef("ProgressEvent")}}                                                                                            | [Progress](http://www.w3.org/TR/progress-events/) and [XMLHttpRequest](http://www.w3.org/TR/XMLHttpRequest/#event-xhr-load)                                                                                   | Progression has been successful.                                                                                                                                                                                                            |
| {{Event("loadeddata")}}                                                                      | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-loadeddata)                                                                                      | The first frame of the media has finished loading.                                                                                                                                                                                          |
| {{Event("loadedmetadata")}}                                                                  | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-loadedmetadata)                                                                                  | The metadata has been loaded.                                                                                                                                                                                                               |
| {{Event("loadend")}}                                                                          | {{DOMxRef("ProgressEvent")}}                                                                                            | [Progress](http://www.w3.org/TR/progress-events/) and [XMLHttpRequest](http://www.w3.org/TR/XMLHttpRequest/#event-xhr-loadend)                                                                                | Progress has stopped (after "error", "abort" or "load" have been dispatched).                                                                                                                                                               |
| {{Event("loadstart")}}                                                                          | {{DOMxRef("ProgressEvent")}}                                                                                            | [Progress ](http://www.w3.org/TR/progress-events/)and [XMLHttpRequest](http://www.w3.org/TR/XMLHttpRequest/#event-xhr-loadstart)                                                                              | Progress has begun.                                                                                                                                                                                                                         |
| {{Event("mark")}} {{Experimental_Inline}}                                             | {{DOMxRef("SpeechSynthesisEvent")}}                                                                                | {{SpecName('Web Speech API')}}                                                                                                                                                                      | The spoken utterance reaches a named SSML "mark" tag.                                                                                                                                                                                       |
| [`message`](/zh-CN/docs/Web/Reference/Events/message_websocket)                                       | {{DOMxRef("MessageEvent")}}                                                                                            | [WebSocket](http://www.w3.org/TR/websockets/)                                                                                                                                                                 | A message is received through a WebSocket.                                                                                                                                                                                                  |
| [`message`](/zh-CN/docs/Web/Reference/Events/message_webworker)                                       | {{DOMxRef("MessageEvent")}}                                                                                            | [Web Workers](http://www.w3.org/TR/workers/#communicating-with-a-dedicated-worker)                                                                                                                            | A message is received from a Web Worker.                                                                                                                                                                                                    |
| [`message`](/zh-CN/docs/Web/Reference/Events/message_webmessaging)                                    | {{DOMxRef("MessageEvent")}}                                                                                            | [Web Messaging](http://www.w3.org/TR/webmessaging/)                                                                                                                                                           | A message is received from a child (i)frame or a parent window.                                                                                                                                                                             |
| [`message`](/zh-CN/docs/Web/Reference/Events/message_serversentevents)                                | {{DOMxRef("MessageEvent")}}                                                                                            | [Server Sent Events](http://dev.w3.org/html5/eventsource/)                                                                                                                                                    | A message is received through an event source.                                                                                                                                                                                              |
| {{Event("messageerror")}}                                                                      | {{DOMxRef("MessageEvent")}}                                                                                            | {{DOMxRef("MessagePort")}}, [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API), [Broadcast Channel](/zh-CN/docs/Web/API/Broadcast_Channel_API), {{DOMxRef("Window")}}                        | A message error is raised when a message is received by an object.                                                                                                                                                                          |
| {{Event("message_(ServiceWorker)","message")}} {{Experimental_Inline}}         | {{DOMxRef("ServiceWorkerMessageEvent")}} or {{DOMxRef("ExtendableMessageEvent")}}, depending on context. | [Service Workers](/zh-CN/docs/Web/API/Service_Worker_API)                                                                                                                                                     | A message is received from a service worker, or a message is received in a service worker from another context.                                                                                                                             |
| {{Event("mousedown")}}                                                                          | {{DOMxRef("MouseEvent")}}                                                                                                | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mousedown)                                                                                                                                       | A pointing device button (usually a mouse) is pressed on an element.                                                                                                                                                                        |
| {{Event("mouseenter")}}                                                                      | {{DOMxRef("MouseEvent")}}                                                                                                | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseenter)                                                                                                                                      | A pointing device is moved onto the element that has the listener attached.                                                                                                                                                                 |
| {{Event("mouseleave")}}                                                                      | {{DOMxRef("MouseEvent")}}                                                                                                | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseleave)                                                                                                                                      | A pointing device is moved off the element that has the listener attached.                                                                                                                                                                  |
| {{Event("mousemove")}}                                                                          | {{DOMxRef("MouseEvent")}}                                                                                                | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mousemove)                                                                                                                                       | A pointing device is moved over an element.                                                                                                                                                                                                 |
| {{Event("mouseout")}}                                                                          | {{DOMxRef("MouseEvent")}}                                                                                                | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseout)                                                                                                                                        | A pointing device is moved off the element that has the listener attached or off one of its children.                                                                                                                                       |
| {{Event("mouseover")}}                                                                          | {{DOMxRef("MouseEvent")}}                                                                                                | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseover)                                                                                                                                       | A pointing device is moved onto the element that has the listener attached or onto one of its children.                                                                                                                                     |
| {{Event("mouseup")}}                                                                          | {{DOMxRef("MouseEvent")}}                                                                                                | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseup)                                                                                                                                         | A pointing device button is released over an element.                                                                                                                                                                                       |
| {{Event("nomatch")}} {{Experimental_Inline}}                                         | {{DOMxRef("SpeechRecognitionEvent")}}                                                                                | {{SpecName('Web Speech API')}}                                                                                                                                                                      | The speech recognition service returns a final result with no significant recognition.                                                                                                                                                      |
| {{Event("notificationclick")}}                                                              | {{DOMxRef("NotificationEvent")}} {{Experimental_Inline}}                                                   | {{SpecName('Web Notifications','#dom-serviceworkerglobalscope-onnotificationclick','onnotificationclick')}}                                                              | A system notification spawned by {{DOMxRef("ServiceWorkerRegistration.showNotification()")}} has been clicked.                                                                                                         |
| {{Event("offline")}}                                                                          | {{DOMxRef("Event")}}                                                                                                    | [HTML5 offline](http://www.whatwg.org/specs/web-apps/current-work/multipage/offline.html#event-offline)                                                                                                       | The browser has lost access to the network.                                                                                                                                                                                                 |
| {{Event("online")}}                                                                              | {{DOMxRef("Event")}}                                                                                                    | [HTML5 offline](http://www.whatwg.org/specs/web-apps/current-work/multipage/offline.html#event-online)                                                                                                        | The browser has gained access to the network (but particular websites might be unreachable).                                                                                                                                                |
| [`open`](/zh-CN/docs/Web/Reference/Events/open_websocket)                                             | {{DOMxRef("Event")}}                                                                                                    | [WebSocket](http://www.w3.org/TR/websockets/)                                                                                                                                                                 | A WebSocket connection has been established.                                                                                                                                                                                                |
| [`open`](/zh-CN/docs/Web/Reference/Events/open_serversentevents)                                      | {{DOMxRef("Event")}}                                                                                                    | [Server Sent Events](http://dev.w3.org/html5/eventsource/)                                                                                                                                                    | An event source connection has been established.                                                                                                                                                                                            |
| {{Event("orientationchange")}}                                                              | {{DOMxRef("Event")}}                                                                                                    | [Screen Orientation](http://www.w3.org/TR/screen-orientation/)                                                                                                                                                | The orientation of the device (portrait/landscape) has changed                                                                                                                                                                              |
| {{Event("pagehide")}}                                                                          | {{DOMxRef("PageTransitionEvent")}}                                                                                    | [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#event-pagehide)                                                                                                              | A session history entry is being traversed from.                                                                                                                                                                                            |
| {{Event("pageshow")}}                                                                          | {{DOMxRef("PageTransitionEvent")}}                                                                                    | [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#event-pageshow)                                                                                                              | A session history entry is being traversed to.                                                                                                                                                                                              |
| {{Event("paste")}}                                                                              | {{DOMxRef("ClipboardEvent")}} {{Experimental_Inline}}                                                       | [Clipboard](http://www.w3.org/TR/clipboard-apis/#paste-event)                                                                                                                                                 | Data has been transferred from the system clipboard to the document.                                                                                                                                                                        |
| {{Event("pause")}}                                                                              | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-pause)                                                                                           | Playback has been paused.                                                                                                                                                                                                                   |
| {{Event("pause_(SpeechSynthesis)", "pause")}} {{Experimental_Inline}}         | {{DOMxRef("SpeechSynthesisEvent")}}                                                                                | {{SpecName('Web Speech API')}}                                                                                                                                                                      | The utterance is paused part way through.                                                                                                                                                                                                   |
| {{Event("pointercancel")}}                                                                  | {{DOMxRef("PointerEvent")}}                                                                                            | [Pointer Events](http://www.w3.org/TR/pointerevents/#the-pointercancel-event)                                                                                                                                 | The pointer is unlikely to produce any more events.                                                                                                                                                                                         |
| {{Event("pointerdown")}}                                                                      | {{DOMxRef("PointerEvent")}}                                                                                            | [Pointer Events](http://www.w3.org/TR/pointerevents/#the-pointerdown-event)                                                                                                                                   | The pointer enters the active buttons state.                                                                                                                                                                                                |
| {{Event("pointerenter")}}                                                                      | {{DOMxRef("PointerEvent")}}                                                                                            | [Pointer Events](http://www.w3.org/TR/pointerevents/#the-pointerenter-event)                                                                                                                                  | Pointing device is moved inside the hit-testing boundary.                                                                                                                                                                                   |
| {{Event("pointerleave")}}                                                                      | {{DOMxRef("PointerEvent")}}                                                                                            | [Pointer Events](http://www.w3.org/TR/pointerevents/#the-pointerleave-event)                                                                                                                                  | Pointing device is moved out of the hit-testing boundary.                                                                                                                                                                                   |
| {{Event("pointerlockchange")}}                                                              | {{DOMxRef("Event")}}                                                                                                    | [Pointer Lock](http://www.w3.org/TR/pointerlock/#pointerlockchange-and-pointerlockerror-events)                                                                                                               | The pointer was locked or released.                                                                                                                                                                                                         |
| {{Event("pointerlockerror")}}                                                              | {{DOMxRef("Event")}}                                                                                                    | [Pointer Lock](http://www.w3.org/TR/pointerlock/#pointerlockchange-and-pointerlockerror-events)                                                                                                               | It was impossible to lock the pointer for technical reasons or because the permission was denied.                                                                                                                                           |
| {{Event("pointermove")}}                                                                      | {{DOMxRef("PointerEvent")}}                                                                                            | [Pointer Events](http://www.w3.org/TR/pointerevents/#the-pointermove-event)                                                                                                                                   | The pointer changed coordinates.                                                                                                                                                                                                            |
| {{Event("pointerout")}}                                                                      | {{DOMxRef("PointerEvent")}}                                                                                            | [Pointer Events](http://www.w3.org/TR/pointerevents/#the-pointerout-event)                                                                                                                                    | The pointing device moved out of hit-testing boundary or leaves detectable hover range.                                                                                                                                                     |
| {{Event("pointerover")}}                                                                      | {{DOMxRef("PointerEvent")}}                                                                                            | [Pointer Events](http://www.w3.org/TR/pointerevents/#the-pointerover-event)                                                                                                                                   | The pointing device is moved into the hit-testing boundary.                                                                                                                                                                                 |
| {{Event("pointerup")}}                                                                          | {{DOMxRef("PointerEvent")}}                                                                                            | [Pointer Events](http://www.w3.org/TR/pointerevents/#the-pointerup-event)                                                                                                                                     | The pointer leaves the active buttons state.                                                                                                                                                                                                |
| {{Event("play")}}                                                                              | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-play)                                                                                            | Playback has begun.                                                                                                                                                                                                                         |
| {{Event("playing")}}                                                                          | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-playing)                                                                                         | Playback is ready to start after having been paused or delayed due to lack of data.                                                                                                                                                         |
| {{Event("popstate")}}                                                                          | {{DOMxRef("PopStateEvent")}}                                                                                            | [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#event-popstate)                                                                                                              | A session history entry is being navigated to (in certain cases).                                                                                                                                                                           |
| {{Event("progress")}}                                                                          | {{DOMxRef("ProgressEvent")}}                                                                                            | [Progress](http://www.w3.org/TR/progress-events/) and [XMLHttpRequest](http://www.w3.org/TR/XMLHttpRequest/#event-xhr-progress)                                                                               | In progress.                                                                                                                                                                                                                                |
| {{Event("push")}}                                                                              | {{DOMxRef("PushEvent")}} {{Experimental_Inline}}                                                               | {{SpecName("Push API")}}                                                                                                                                                                              | A [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API) has received a push message.                                                                                                                                                     |
| {{Event("pushsubscriptionchange")}}                                                      | {{DOMxRef("PushEvent")}} {{Experimental_Inline}}                                                               | {{SpecName("Push API")}}                                                                                                                                                                              | A [PushSubscription](/zh-CN/docs/Web/API/PushSubscription) has expired.                                                                                                                                                                     |
| {{Event("ratechange")}}                                                                      | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-ratechange)                                                                                      | The playback rate has changed.                                                                                                                                                                                                              |
| {{Event("readystatechange")}}                                                              | {{DOMxRef("Event")}}                                                                                                    | HTML5 and [XMLHttpRequest](http://www.w3.org/TR/XMLHttpRequest/#event-xhr-readystatechange)                                                                                                                   | The readyState attribute of a document has changed.                                                                                                                                                                                         |
| {{Event("repeatEvent")}}                                                                      | {{DOMxRef("TimeEvent")}}                                                                                                | [SVG](http://www.w3.org/TR/SVG/interact.html#SVGEvents)                                                                                                                                                       | A [SMIL](/zh-CN/docs/SVG/SVG_animation_with_SMIL) animation element is repeated.                                                                                                                                                            |
| {{Event("reset")}}                                                                              | {{DOMxRef("Event")}}                                                                                                    | [DOM L2](http://www.w3.org/TR/DOM-Level-2-Events/events.html), [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#form-submission-0#resetting-a-form) | A form is reset.                                                                                                                                                                                                                            |
| {{Event("resize")}}                                                                              | {{DOMxRef("UIEvent")}}                                                                                                    | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-resize)                                                                                                                                          | The document view has been resized.                                                                                                                                                                                                         |
| {{Event("resourcetimingbufferfull")}}                                                      | {{DOMxRef("Performance")}}                                                                                            | [Resource Timing](https://w3c.github.io/resource-timing/#dom-performance-onresourcetimingbufferfull)                                                                                                          | The browser's resource timing buffer is full.                                                                                                                                                                                               |
| {{Event("result")}} {{Experimental_Inline}}                                             | {{DOMxRef("SpeechRecognitionEvent")}} {{Experimental_Inline}}                                               | {{SpecName('Web Speech API')}}                                                                                                                                                                      | The speech recognition service returns a result — a word or phrase has been positively recognized and this has been communicated back to the app.                                                                                           |
| {{Event("resume")}} {{Experimental_Inline}}                                             | {{DOMxRef("SpeechSynthesisEvent")}} {{Experimental_Inline}}                                               | {{SpecName('Web Speech API')}}                                                                                                                                                                      | A paused utterance is resumed.                                                                                                                                                                                                              |
| {{Event("scroll")}}                                                                              | {{DOMxRef("UIEvent")}}                                                                                                    | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-scroll)                                                                                                                                          | The document view or an element has been scrolled.                                                                                                                                                                                          |
| {{Event("seeked")}}                                                                              | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-seeked)                                                                                          | A _seek_ operation completed.                                                                                                                                                                                                               |
| {{Event("seeking")}}                                                                          | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-seeking)                                                                                         | A _seek_ operation began.                                                                                                                                                                                                                   |
| {{Event("select")}}                                                                              | {{DOMxRef("UIEvent")}}                                                                                                    | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-select)                                                                                                                                          | Some text is being selected.                                                                                                                                                                                                                |
| {{Event("selectstart")}} {{Experimental_Inline}}                                     | {{DOMxRef("Event")}}                                                                                                    | {{ SpecName('Selection API')}}                                                                                                                                                                      | A selection just started.                                                                                                                                                                                                                   |
| {{Event("selectionchange")}} {{Experimental_Inline}}                                 | {{DOMxRef("Event")}}                                                                                                    | {{ SpecName('Selection API')}}                                                                                                                                                                      | The selection in the document has been changed.                                                                                                                                                                                             |
| {{Event("show")}}                                                                              | {{DOMxRef("MouseEvent")}}                                                                                                | [HTML5](http://www.w3.org/TR/html5/interactive-elements.html#context-menus)                                                                                                                                   | A contextmenu event was fired on/bubbled to an element that has a [contextmenu](/zh-CN/docs/DOM/element.contextmenu) attribute                                                                                                              |
| {{Event("slotchange")}}                                                                      | {{DOMxRef("Event")}}                                                                                                    | {{ SpecName('DOM WHATWG')}}                                                                                                                                                                          | The node contents of a {{DOMxRef("HTMLSlotElement")}} ({{htmlelement("slot")}}) have changed.                                                                                                                            |
| {{Event("soundend")}} {{Experimental_Inline}}                                         | {{DOMxRef("Event")}}                                                                                                    | {{SpecName('Web Speech API')}}                                                                                                                                                                      | Any sound — recognisable speech or not — has stopped being detected.                                                                                                                                                                        |
| {{Event("soundstart")}} {{Experimental_Inline}}                                     | {{DOMxRef("Event")}}                                                                                                    | {{SpecName('Web Speech API')}}                                                                                                                                                                      | Any sound — recognisable speech or not — has been detected.                                                                                                                                                                                 |
| {{Event("speechend")}} {{Experimental_Inline}}                                         | {{DOMxRef("Event")}}                                                                                                    | {{SpecName('Web Speech API')}}                                                                                                                                                                      | Speech recognised by the speech recognition service has stopped being detected.                                                                                                                                                             |
| {{Event("speechstart")}} {{Experimental_Inline}}                                     | {{DOMxRef("Event")}}                                                                                                    | {{SpecName('Web Speech API')}}                                                                                                                                                                      | Sound that is recognised by the speech recognition service as speech has been detected.                                                                                                                                                     |
| {{Event("stalled")}}                                                                          | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-stalled)                                                                                         | The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.                                                                                                                                                     |
| {{Event("start_(SpeechRecognition)","start")}} {{Experimental_Inline}}         | {{DOMxRef("Event")}}                                                                                                    | {{SpecName('Web Speech API')}}                                                                                                                                                                      | The speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current `SpeechRecognition`.                                                                                     |
| {{Event("start_(SpeechSynthesis)","start")}}                                          | {{DOMxRef("SpeechSynthesisEvent")}}                                                                                | {{SpecName('Web Speech API')}}                                                                                                                                                                      | The utterance has begun to be spoken.                                                                                                                                                                                                       |
| {{Event("storage")}}                                                                          | {{DOMxRef("StorageEvent")}}                                                                                            | [Web Storage](http://www.w3.org/TR/webstorage/#the-storage-event)                                                                                                                                             | A storage area ([localStorage](/zh-CN/docs/DOM/Storage#localStorage) or [sessionStorage](/zh-CN/docs/DOM/Storage#sessionStorage)) has changed.                                                                                              |
| {{Event("submit")}}                                                                              | {{DOMxRef("Event")}}                                                                                                    | [DOM L2](http://www.w3.org/TR/DOM-Level-2-Events/events.html), [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#form-submission-algorithm)          | A form is submitted.                                                                                                                                                                                                                        |
| [`success`](/zh-CN/docs/Web/Reference/Events/success_indexedDB)                                       | {{DOMxRef("Event")}}                                                                                                    | [IndexedDB](http://www.w3.org/TR/IndexedDB/#request-api)                                                                                                                                                      | A request successfully completed.                                                                                                                                                                                                           |
| {{Event("suspend")}}                                                                          | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-suspend)                                                                                         | Media data loading has been suspended.                                                                                                                                                                                                      |
| {{Event("SVGAbort")}}                                                                          | {{DOMxRef("SVGEvent")}}                                                                                                | [SVG](http://www.w3.org/TR/SVG/interact.html#SVGEvents)                                                                                                                                                       | Page loading has been stopped before the [SVG](/zh-CN/docs/SVG) was loaded.                                                                                                                                                                 |
| {{Event("SVGError")}}                                                                          | {{DOMxRef("SVGEvent")}}                                                                                                | [SVG](http://www.w3.org/TR/SVG/interact.html#SVGEvents)                                                                                                                                                       | An error has occurred before the [SVG](/zh-CN/docs/SVG) was loaded.                                                                                                                                                                         |
| {{Event("SVGLoad")}}                                                                          | {{DOMxRef("SVGEvent")}}                                                                                                | [SVG](http://www.w3.org/TR/SVG/interact.html#SVGEvents)                                                                                                                                                       | An [SVG](/zh-CN/docs/SVG) document has been loaded and parsed.                                                                                                                                                                              |
| {{Event("SVGResize")}}                                                                          | {{DOMxRef("SVGEvent")}}                                                                                                | [SVG](http://www.w3.org/TR/SVG/interact.html#SVGEvents)                                                                                                                                                       | An [SVG](/zh-CN/docs/SVG) document is being resized.                                                                                                                                                                                        |
| {{Event("SVGScroll")}}                                                                          | {{DOMxRef("SVGEvent")}}                                                                                                | [SVG](http://www.w3.org/TR/SVG/interact.html#SVGEvents)                                                                                                                                                       | An [SVG](/zh-CN/docs/SVG) document is being scrolled.                                                                                                                                                                                       |
| {{Event("SVGUnload")}}                                                                          | {{DOMxRef("SVGEvent")}}                                                                                                | [SVG](http://www.w3.org/TR/SVG/interact.html#SVGEvents)                                                                                                                                                       | An [SVG](/zh-CN/docs/SVG) document has been removed from a window or frame.                                                                                                                                                                 |
| {{Event("SVGZoom")}}                                                                          | {{DOMxRef("SVGZoomEvent")}}                                                                                            | [SVG](http://www.w3.org/TR/SVG/interact.html#SVGEvents)                                                                                                                                                       | An [SVG](/zh-CN/docs/SVG) document is being zoomed.                                                                                                                                                                                         |
| {{Event("timeout")}}                                                                          | {{DOMxRef("ProgressEvent")}}                                                                                            | [XMLHttpRequest](http://www.w3.org/TR/XMLHttpRequest/#event-xhr-timeout)                                                                                                                                      |                                                                                                                                                                                                                                             |
| {{Event("timeupdate")}}                                                                      | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-timeupdate)                                                                                      | The time indicated by the `currentTime` attribute has been updated.                                                                                                                                                                         |
| {{Event("touchcancel")}}                                                                      | {{DOMxRef("TouchEvent")}}                                                                                                | [Touch Events](http://www.w3.org/TR/touch-events/)                                                                                                                                                            | A touch point has been disrupted in an implementation-specific manners (too many touch points for example).                                                                                                                                 |
| {{Event("touchend")}}                                                                          | {{DOMxRef("TouchEvent")}}                                                                                                | [Touch Events](http://www.w3.org/TR/touch-events/#the-touchend-event)                                                                                                                                         | A touch point is removed from the touch surface.                                                                                                                                                                                            |
| {{Event("touchmove")}}                                                                          | {{DOMxRef("TouchEvent")}}                                                                                                | [Touch Events](http://www.w3.org/TR/touch-events/#the-touchmove-event)                                                                                                                                        | A touch point is moved along the touch surface.                                                                                                                                                                                             |
| {{Event("touchstart")}}                                                                      | {{DOMxRef("TouchEvent")}}                                                                                                | [Touch Events](http://www.w3.org/TR/touch-events/#the-touchstart---------event)                                                                                                                               | A touch point is placed on the touch surface.                                                                                                                                                                                               |
| {{Event("transitionend")}}                                                                  | {{DOMxRef("TransitionEvent")}} {{Experimental_Inline}}                                                       | [CSS Transitions](http://www.w3.org/TR/css3-transitions/#transition-events)                                                                                                                                   | A [CSS transition](/zh-CN/docs/CSS/CSS_transitions) has completed.                                                                                                                                                                          |
| {{Event("unload")}}                                                                              | {{DOMxRef("UIEvent")}}                                                                                                    | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-unload)                                                                                                                                          | The document or a dependent resource is being unloaded.                                                                                                                                                                                     |
| [`upgradeneeded`](/zh-CN/docs/Web/Reference/Events/upgradeneeded_indexedDB)                           |                                                                                                                                 | [IndexedDB](http://www.w3.org/TR/IndexedDB/#request-api)                                                                                                                                                      | An attempt was made to open a database with a version number higher than its current version. A `versionchange` transaction has been created.                                                                                               |
| {{Event("userproximity")}}                                                                  | {{DOMxRef("UserProximityEvent")}} {{Experimental_Inline}}                                                   | {{SpecName("Proximity Events")}}                                                                                                                                                                  | Fresh data is available from a proximity sensor (indicates whether the nearby object is `near` the device or not).                                                                                                                          |
| {{Event("voiceschanged")}} {{Experimental_Inline}}                                 | {{DOMxRef("Event")}}                                                                                                    | {{SpecName('Web Speech API')}}                                                                                                                                                                      | The list of {{DOMxRef("SpeechSynthesisVoice")}} objects that would be returned by the {{DOMxRef("SpeechSynthesis.getVoices()")}} method has changed (when the {{Event("voiceschanged")}} event fires.) |
| [`versionchange`](/zh-CN/docs/Web/Reference/Events/versionchange_indexedDB)                           |                                                                                                                                 | [IndexedDB](http://www.w3.org/TR/IndexedDB/#database-interface)                                                                                                                                               | A `versionchange` transaction completed.                                                                                                                                                                                                    |
| {{Event("visibilitychange")}}                                                              | {{DOMxRef("Event")}}                                                                                                    | [Page visibility](http://www.w3.org/TR/page-visibility/#sec-visibilitychange-event)                                                                                                                           | The content of a tab has become visible or has been hidden.                                                                                                                                                                                 |
| {{Event("volumechange")}}                                                                      | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-volumechange)                                                                                    | The volume has changed.                                                                                                                                                                                                                     |
| {{Event("waiting")}}                                                                          | {{DOMxRef("Event")}}                                                                                                    | [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-waiting)                                                                                         | Playback has stopped because of a temporary lack of data.                                                                                                                                                                                   |
| {{Event("wheel")}}                                                                              | {{DOMxRef("WheelEvent")}}                                                                                                | [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-wheel)                                                                                                                                           | A wheel button of a pointing device is rotated in any direction.                                                                                                                                                                            |

## 非标准事件

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Event Name</th>
      <th scope="col">Event Type</th>
      <th scope="col">Specification</th>
      <th scope="col">Fired when...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{Event("afterscriptexecute")}}</td>
      <td>{{DOMxRef("Event")}}</td>
      <td><em>Mozilla Specific</em></td>
      <td>A script has been executed.</td>
    </tr>
    <tr>
      <td>{{Event("beforescriptexecute")}}</td>
      <td>{{DOMxRef("Event")}}</td>
      <td><em>Mozilla Specific</em></td>
      <td>A script is about to be executed.</td>
    </tr>
    <tr>
      <td>{{Event("beforeinstallprompt")}}</td>
      <td>{{DOMxRef("Event")}}</td>
      <td><em>Chrome specific</em></td>
      <td>A user is prompted to save a web site to a home screen on mobile.</td>
    </tr>
    <tr>
      <td>{{Event("cardstatechange")}}</td>
      <td></td>
      <td><em>Firefox OS specific</em></td>
      <td>
        The {{DOMxRef("MozMobileConnection.cardState")}}
        property changes value.
      </td>
    </tr>
    <tr>
      <td>{{Event("change")}}</td>
      <td>{{DOMxRef("DeviceStorageChangeEvent")}}</td>
      <td><em>Firefox OS specific</em></td>
      <td>
        This event is triggered each time a file is created, modified or deleted
        on a given storage area.
      </td>
    </tr>
    <tr>
      <td>{{Event("connectionInfoUpdate")}}</td>
      <td></td>
      <td><em>Firefox OS specific</em></td>
      <td>
        The informations about the signal strength and the link speed have been
        updated.
      </td>
    </tr>
    <tr>
      <td>{{Event("cfstatechange")}}</td>
      <td></td>
      <td><em>Firefox OS specific</em></td>
      <td>The call forwarding state changes.</td>
    </tr>
    <tr>
      <td>{{Event("datachange")}}</td>
      <td></td>
      <td><em>Firefox OS specific</em></td>
      <td>
        The {{DOMxRef("MozMobileConnection.data")}} object changes
        values.
      </td>
    </tr>
    <tr>
      <td>{{Event("dataerror")}}</td>
      <td></td>
      <td><em>Firefox OS specific</em></td>
      <td>
        The {{DOMxRef("MozMobileConnection.data")}} object receive
        an error from the <abbr title="Radio Interface Layer">RIL</abbr>.
      </td>
    </tr>
    <tr>
      <td>{{Event("DOMMouseScroll")}}{{Deprecated_Inline}}</td>
      <td></td>
      <td><em>Mozilla specific</em></td>
      <td>
        The wheel button of a pointing device is rotated (detail attribute is a
        number of lines). (use {{Event("wheel")}} instead)
      </td>
    </tr>
    <tr>
      <td><code>dragdrop</code> {{Deprecated_Inline}}</td>
      <td><code>DragEvent</code></td>
      <td><em>Mozilla specific</em></td>
      <td>An element is dropped (use {{Event("drop")}} instead).</td>
    </tr>
    <tr>
      <td><code>dragexit</code> {{Deprecated_Inline}}</td>
      <td><code>DragEvent</code></td>
      <td><em>Mozilla specific</em></td>
      <td>
        A drag operation is being ended(use {{Event("dragend")}}
        instead).
      </td>
    </tr>
    <tr>
      <td><code>draggesture</code> {{Deprecated_Inline}}</td>
      <td><code>DragEvent</code></td>
      <td><em>Mozilla specific</em></td>
      <td>
        The user starts dragging an element or text selection (use
        {{Event("dragstart")}} instead).
      </td>
    </tr>
    <tr>
      <td>{{Event("icccardlockerror")}}</td>
      <td></td>
      <td><em>Firefox OS specific</em></td>
      <td>
        the {{DOMxRef("MozMobileConnection.unlockCardLock()")}}
        or {{DOMxRef("MozMobileConnection.setCardLock()")}}
        methods fails.
      </td>
    </tr>
    <tr>
      <td>{{Event("iccinfochange")}}</td>
      <td></td>
      <td><em>Firefox OS specific</em></td>
      <td>
        The {{DOMxRef("MozMobileConnection.iccInfo")}} object
        changes.
      </td>
    </tr>
    <tr>
      <td>{{Event("localized")}}</td>
      <td></td>
      <td>
        <em
          ><a href="https://github.com/fabi1cazenave/webL10n"
            >Mozilla Specific</a
          ></em
        >
      </td>
      <td>The page has been localized using data-l10n-* attributes.</td>
    </tr>
    <tr>
      <td>{{Event("mousewheel")}} {{Deprecated_Inline}}</td>
      <td></td>
      <td>
        <a
          href="http://msdn.microsoft.com/en-us/library/ie/ms536951%28v=vs.85%29.aspx"
          ><em>IE invented</em></a
        >
      </td>
      <td>The wheel button of a pointing device is rotated.</td>
    </tr>
    <tr>
      <td>{{Event("MozAudioAvailable")}}</td>
      <td>{{DOMxRef("Event")}}</td>
      <td><em>Mozilla specific</em></td>
      <td>
        The audio buffer is full and the corresponding raw samples are
        available.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/zh-CN/docs/Web/Reference/Events/MozBeforeResize"
          ><code>MozBeforeResize</code></a
        >
        {{Deprecated_Inline}}
      </td>
      <td></td>
      <td><em>Mozilla specific</em></td>
      <td>A window is about to be resized.</td>
    </tr>
    <tr>
      <td>{{Event("mozbrowseractivitydone")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when some activity has been completed (complete description TBD.)
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowserasyncscroll")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when the scroll position within a browser<code
        > </code>{{HTMLElement("iframe")}} changes.
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowseraudioplaybackchange")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when audio starts or stops playing within the browser
        {{HTMLElement("iframe")}} content.
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowsercaretstatechanged")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when the text selected inside the browser
        {{HTMLElement("iframe")}} content changes.
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowserclose")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when window.close() is called within a browser
        {{HTMLElement("iframe")}}.
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowsercontextmenu")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when a browser {{HTMLElement("iframe")}} try to open a
        context menu.
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowserdocumentfirstpaint")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when a new paint occurs on any document in the browser
        {{HTMLElement("iframe")}}.
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowsererror")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when an error occured while trying to load a content within a
        browser iframe
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowserfindchange")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when a search operation is performed on the browser
        {{HTMLElement("iframe")}} content (see
        <a href="/zh-CN/docs/Web/API/HTMLIFrameElement#Search_methods"
          >HTMLIFrameElement search methods</a
        >.)
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowserfirstpaint")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when the {{HTMLElement("iframe")}} paints content for the
        first time (this doesn't include the initial paint from
        <em>about:blank</em>.)
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowsericonchange")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>Sent when the favicon of a browser iframe changes.</td>
    </tr>
    <tr>
      <td>{{Event("mozbrowserlocationchange")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>Sent when an browser iframe's location changes.</td>
    </tr>
    <tr>
      <td>{{Event("mozbrowserloadend")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>Sent when the browser iframe has finished loading all its assets.</td>
    </tr>
    <tr>
      <td>{{Event("mozbrowserloadstart")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>Sent when the browser iframe starts to load a new page.</td>
    </tr>
    <tr>
      <td>{{Event("mozbrowsermanifestchange")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when a the path to the app manifest changes, in the case of a
        browser {{HTMLElement("iframe")}} with an open web app embedded
        in it.
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowsermetachange")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when a {{htmlelement("meta")}} elelment is added to,
        removed from or changed in the browser
        {{HTMLElement("iframe")}}'s content.
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowseropensearch")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>Sent when a link to a search engine is found.</td>
    </tr>
    <tr>
      <td>{{Event("mozbrowseropentab")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when a new tab is opened within a browser
        {{HTMLElement("iframe")}} as a result of the user issuing a
        command to open a link target in a new tab (for example
        <kbd>ctrl</kbd>/<kbd>cmd</kbd> + click.)
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowseropenwindow")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when {{DOMxRef("window.open()")}} is called within a
        browser iframe.
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowserresize")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when the browser {{HTMLElement("iframe")}}'s window size has
        changed.
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowserscroll")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when the browser {{HTMLElement("iframe")}} content scrolls.
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowserscrollareachanged")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when the available scrolling area in the browser
        {{HTMLElement("iframe")}} changes. This can occur on resize and
        when the page size changes (while loading for example.)
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowserscrollviewchange")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>Sent when asynchronous scrolling (i.e. APCZ) starts or stops.</td>
    </tr>
    <tr>
      <td>{{Event("mozbrowsersecuritychange")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>Sent when the SSL state changes within a browser iframe.</td>
    </tr>
    <tr>
      <td>{{Event("mozbrowserselectionstatechanged")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when the text selected inside the browser
        {{HTMLElement("iframe")}} content changes. Note that this is
        deprecated, and newer implementations use
        {{Event("mozbrowsercaretstatechanged")}} instead.
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowsershowmodalprompt")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when {{DOMxRef("window.alert","alert()")}},
        {{DOMxRef("window.confirm","confirm()")}} or
        {{DOMxRef("window.prompt","prompt()")}} are called within a
        browser iframe
      </td>
    </tr>
    <tr>
      <td>{{Event("mozbrowsertitlechange")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>Sent when the document.title changes within a browser iframe.</td>
    </tr>
    <tr>
      <td>
        {{Event("mozbrowserusernameandpasswordrequired")}}
      </td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>Sent when an HTTP authentification is requested.</td>
    </tr>
    <tr>
      <td>{{Event("mozbrowservisibilitychange")}}</td>
      <td></td>
      <td>
        <em
          >Firefox OS
          <a href="/zh-CN/docs/Web/API/Browser_API">Browser API</a>-specific</em
        >
      </td>
      <td>
        Sent when the visibility state of the current browser iframe
        {{HTMLElement("iframe")}} changes, for example due to a call to
        {{DOMxRef("HTMLIFrameElement.setVisible","setVisible()")}}.
      </td>
    </tr>
    <tr>
      <td>{{Event("MozGamepadButtonDown")}}</td>
      <td></td>
      <td><em>To be specified</em></td>
      <td>A gamepad button is pressed down.</td>
    </tr>
    <tr>
      <td>{{Event("MozGamepadButtonUp")}}</td>
      <td></td>
      <td><em>To be specified</em></td>
      <td>A gamepad button is released.</td>
    </tr>
    <tr>
      <td>
        {{Event("MozMousePixelScroll")}}
        {{Deprecated_Inline}}
      </td>
      <td></td>
      <td><em>Mozilla specific</em></td>
      <td>
        The wheel button of a pointing device is rotated (detail attribute is a
        number of pixels). (use wheel instead)
      </td>
    </tr>
    <tr>
      <td>{{Event("MozOrientation")}} {{Deprecated_Inline}}</td>
      <td></td>
      <td><em>Mozilla specific</em></td>
      <td>
        Fresh data is available from an orientation sensor (see
        deviceorientation).
      </td>
    </tr>
    <tr>
      <td>{{Event("MozScrolledAreaChanged")}}</td>
      <td>{{DOMxRef("UIEvent")}}</td>
      <td><em>Mozilla specific</em></td>
      <td>The document view has been scrolled or resized.</td>
    </tr>
    <tr>
      <td>{{Event("moztimechange")}}</td>
      <td></td>
      <td><em>Mozilla specific</em></td>
      <td>The time of the device has been changed.</td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/DOM/Touch_events_(Mozilla_experimental)"
          >MozTouchDown</a
        >
        {{Deprecated_Inline}}
      </td>
      <td></td>
      <td><em>Mozilla specific</em></td>
      <td>
        A touch point is placed on the touch surface (use touchstart instead).
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/DOM/Touch_events_(Mozilla_experimental)"
          >MozTouchMove</a
        >
        {{Deprecated_Inline}}
      </td>
      <td></td>
      <td><em>Mozilla specific</em></td>
      <td>
        A touch point is moved along the touch surface (use touchmove instead).
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/DOM/Touch_events_(Mozilla_experimental)">MozTouchUp</a>
        {{Deprecated_Inline}}
      </td>
      <td></td>
      <td><em>Mozilla specific</em></td>
      <td>
        A touch point is removed from the touch surface (use touchend instead).
      </td>
    </tr>
    <tr>
      <td>{{Event("alerting")}}</td>
      <td>{{DOMxRef("CallEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>The correspondent is being alerted (his/her phone is ringing).</td>
    </tr>
    <tr>
      <td>{{Event("busy")}}</td>
      <td>{{DOMxRef("CallEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>The line of the correspondent is busy.</td>
    </tr>
    <tr>
      <td>{{Event("callschanged")}}</td>
      <td>{{DOMxRef("CallEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>A call has been added or removed from the list of current calls.</td>
    </tr>
    <tr>
      <td>
        <a href="/zh-CN/docs/DOM/onconnected">onconnected</a>
        {{Event("connected")}}
      </td>
      <td>{{DOMxRef("CallEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>A call has been connected.</td>
    </tr>
    <tr>
      <td>{{Event("connecting")}}</td>
      <td>{{DOMxRef("CallEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>A call is about to connect.</td>
    </tr>
    <tr>
      <td>{{Event("delivered")}}</td>
      <td>{{DOMxRef("SMSEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>An SMS has been successfully delivered.</td>
    </tr>
    <tr>
      <td>{{Event("dialing")}}</td>
      <td>{{DOMxRef("CallEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>The number of a correspondent has been dialed.</td>
    </tr>
    <tr>
      <td>{{Event("disabled")}}</td>
      <td></td>
      <td><em>Firefox OS specific</em></td>
      <td>Wifi has been disabled on the device.</td>
    </tr>
    <tr>
      <td>{{Event("disconnected")}}</td>
      <td>{{DOMxRef("CallEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>A call has been disconnected.</td>
    </tr>
    <tr>
      <td>{{Event("disconnecting")}}</td>
      <td>{{DOMxRef("CallEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>A call is about to disconnect.</td>
    </tr>
    <tr>
      <td>{{Event("enabled")}}</td>
      <td></td>
      <td><em>Firefox OS specific</em></td>
      <td>Wifi has been enabled on the device.</td>
    </tr>
    <tr>
      <td>{{Event("error_(Telephony)","error")}}</td>
      <td>{{DOMxRef("CallEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>An error occurred.</td>
    </tr>
    <tr>
      <td>{{Event("held")}}</td>
      <td>{{DOMxRef("CallEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>A call has been held.</td>
    </tr>
    <tr>
      <td>{{Event("holding")}}</td>
      <td>{{DOMxRef("CallEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>A call is about to be held.</td>
    </tr>
    <tr>
      <td>{{Event("incoming")}}</td>
      <td>{{DOMxRef("CallEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>A call is being received.</td>
    </tr>
    <tr>
      <td>{{Event("received")}}</td>
      <td>{{DOMxRef("SMSEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>An SMS has been received.</td>
    </tr>
    <tr>
      <td>{{Event("resuming")}}</td>
      <td>{{DOMxRef("CallEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>A call is about to resume.</td>
    </tr>
    <tr>
      <td>{{Event("sent")}}</td>
      <td>{{DOMxRef("SMSEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>An SMS has been sent.</td>
    </tr>
    <tr>
      <td>{{Event("statechange")}}</td>
      <td>{{DOMxRef("CallEvent")}}</td>
      <td><em>To be specified</em></td>
      <td>The state of a call has changed.</td>
    </tr>
    <tr>
      <td>{{Event("statuschange")}}</td>
      <td></td>
      <td><em>Firefox OS specific</em></td>
      <td>The status of the Wifi connection changed.</td>
    </tr>
    <tr>
      <td>{{Event("overflow")}}</td>
      <td>{{DOMxRef("UIEvent")}}</td>
      <td><em>Mozilla specific</em></td>
      <td>
        An element has been overflowed by its content or has been rendered for
        the first time in this state (only works for elements styled with
        <code>overflow</code> != <code>visible</code>).
      </td>
    </tr>
    <tr>
      <td>{{Event("smartcard-insert")}}</td>
      <td></td>
      <td><em>Mozilla specific</em></td>
      <td>
        A <a href="/zh-CN/docs/JavaScript_crypto">smartcard</a> has been
        inserted.
      </td>
    </tr>
    <tr>
      <td>{{Event("smartcard-remove")}}</td>
      <td></td>
      <td><em>Mozilla specific</em></td>
      <td>
        A <a href="/zh-CN/docs/JavaScript_crypto">smartcard</a> has been
        removed.
      </td>
    </tr>
    <tr>
      <td>{{Event("stkcommand")}}</td>
      <td></td>
      <td><em>Firefox OS specific</em></td>
      <td>
        The <abbr title="SIM Application Toolkit">STK</abbr> Proactive Command
        is issued from <abbr title="Integrated Circuit Card">ICC</abbr>.
      </td>
    </tr>
    <tr>
      <td>{{Event("stksessionend")}}</td>
      <td></td>
      <td><em>Firefox OS specific</em></td>
      <td>
        The <abbr title="SIM Application Toolkit">STK</abbr> Session is
        terminated by <abbr title="Integrated Circuit Card">ICC</abbr>.
      </td>
    </tr>
    <tr>
      <td>{{Event("touchenter")}}</td>
      <td>{{DOMxRef("TouchEvent")}}</td>
      <td>
        <a
          href="http://www.w3.org/TR/touch-events/#the-touchstart---------event"
          >Touch Events</a
        >
        Removed
      </td>
      <td></td>
    </tr>
    <tr>
      <td>{{Event("touchleave")}}</td>
      <td>{{DOMxRef("TouchEvent")}}</td>
      <td>
        <a
          href="http://www.w3.org/TR/touch-events/#the-touchstart---------event"
          >Touch Events</a
        >
        Removed
      </td>
      <td></td>
    </tr>
    <tr>
      <td>{{Event("underflow")}}</td>
      <td>{{DOMxRef("UIEvent")}}</td>
      <td><em>Mozilla specific</em></td>
      <td>
        An element is no longer overflowed by its content (only works for
        elements styled with <code>overflow</code> != <code>visible</code>).
      </td>
    </tr>
    <tr>
      <td><code>uploadprogress</code> {{Deprecated_Inline}}</td>
      <td>{{DOMxRef("ProgressEvent")}}</td>
      <td><em>Mozilla Specific</em></td>
      <td>Upload is in progress (see {{Event("progress")}}).</td>
    </tr>
    <tr>
      <td><p>{{Event("ussdreceived")}}</p></td>
      <td></td>
      <td><em>Firefox OS specific</em></td>
      <td>
        A new
        <abbr title="Unstructured Supplementary Service Data">USSD</abbr>
        message is received
      </td>
    </tr>
    <tr>
      <td>{{Event("voicechange")}}</td>
      <td></td>
      <td><em>Firefox OS specific</em></td>
      <td>
        The {{DOMxRef("MozMobileConnection.voice")}} object changes
        values.
      </td>
    </tr>
    <tr>
      <td>{{Event("msContentZoom")}}</td>
      <td></td>
      <td><em>Microsoft specific</em></td>
      <td></td>
    </tr>
    <tr>
      <td>{{Event("MSManipulationStateChanged")}}</td>
      <td></td>
      <td><em>Microsoft specific</em></td>
      <td></td>
    </tr>
    <tr>
      <td>{{Event("MSPointerHover")}} {{Deprecated_Inline}}</td>
      <td></td>
      <td><em>Microsoft specific</em></td>
      <td></td>
    </tr>
  </tbody>
</table>

## Mozilla 特定事件

> **备注：** 这些事件不会暴露给 Web 内容使用，只能在 chrome 内容的上下文中使用。

### XUL 事件

| Event Name                                            | Event Type   | Specification                                                              | Fired when...                                                                                                 |
| ----------------------------------------------------- | ------------ | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| {{Event("broadcast")}}                          |              | [XUL](/zh-CN/docs/XUL/Tutorial/Broadcasters_and_Observers#Broadcast_event) | An `observer` noticed a change to the attributes of a watched broadcaster.                                    |
| {{Event("CheckboxStateChange")}}          |              | XUL                                                                        | The state of a `checkbox` has been changed either by a user action or by a script (useful for accessibility). |
| [close](/zh-CN/docs/Web/Reference/Events/close_event) |              | XUL                                                                        | The close button of the window has been clicked.                                                              |
| {{Event("command")}}                          |              | XUL                                                                        | An element has been activated.                                                                                |
| {{Event("commandupdate")}}                  |              | XUL                                                                        | A command update occurred on a `commandset` element.                                                          |
| {{Event("DOMMenuItemActive")}}              |              | XUL                                                                        | A menu or menuitem has been hovered or highlighted.                                                           |
| {{Event("DOMMenuItemInactive")}}          |              | _XUL_                                                                      | A menu or menuitem is no longer hovered or highlighted.                                                       |
| {{Event("popuphidden")}}                      | `PopupEvent` | [_XUL_](/zh-CN/docs/XUL/PopupGuide/PopupEvents)                            | A menupopup, panel or tooltip has been hidden.                                                                |
| {{Event("popuphiding")}}                      | `PopupEvent` | [_XUL_](/zh-CN/docs/XUL/PopupGuide/PopupEvents)                            | A menupopup, panel or tooltip is about to be hidden.                                                          |
| {{Event("popupshowing")}}                      | `PopupEvent` | [_XUL_](/zh-CN/docs/XUL/PopupGuide/PopupEvents)                            | A menupopup, panel or tooltip is about to become visible.                                                     |
| {{Event("popupshown")}}                      | `PopupEvent` | [_XUL_](/zh-CN/docs/XUL/PopupGuide/PopupEvents)                            | A menupopup, panel or tooltip has become visible.                                                             |
| {{Event("RadioStateChange")}}              |              | XUL                                                                        | The state of a `radio` has been changed either by a user action or by a script (useful for accessibility).    |
| {{Event("ValueChange")}}                      |              | XUL                                                                        | The value of an element has changed (a progress bar for example, useful for accessibility).                   |

### 附加组件特定事件

| Event Name                                                                          | Event Type | Specification     | Fired when...                                                                                                                   |
| ----------------------------------------------------------------------------------- | ---------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [MozSwipeGesture](/zh-CN/docs/Web/Reference/Events/MozSwipeGesture)                 |            | _Addons specific_ | A touch point is swiped across the touch surface                                                                                |
| [MozMagnifyGestureStart](/zh-CN/docs/Web/Reference/Events/MozMagnifyGestureStart)   |            | _Addons specific_ | Two touch points start to move away from each other.                                                                            |
| [MozMagnifyGestureUpdate](/zh-CN/docs/Web/Reference/Events/MozMagnifyGestureUpdate) |            | _Addons specific_ | Two touch points move away from each other (after a MozMagnifyGestureStart).                                                    |
| [MozMagnifyGesture](/zh-CN/docs/Web/Reference/Events/MozMagnifyGesture)             |            | _Addons specific_ | Two touch points moved away from each other (after a sequence of MozMagnifyGestureUpdate).                                      |
| [MozRotateGestureStart](/zh-CN/docs/Web/Reference/Events/MozRotateGestureStart)     |            | _Addons specific_ | Two touch points start to rotate around a point.                                                                                |
| [MozRotateGestureUpdate](/zh-CN/docs/Web/Reference/Events/MozRotateGestureUpdate)   |            | _Addons specific_ | Two touch points rotate around a point (after a MozRotateGestureStart).                                                         |
| [MozRotateGesture](/zh-CN/docs/Web/Reference/Events/MozRotateGesture)               |            | _Addons specific_ | Two touch points rotate around a point (after a sequence of MozRotateGestureUpdate).                                            |
| [MozTapGesture](/zh-CN/docs/Web/Reference/Events/MozTapGesture)                     |            | _Addons specific_ | Two touch points are tapped on the touch surface.                                                                               |
| [MozPressTapGesture](/zh-CN/docs/Web/Reference/Events/MozPressTapGesture)           |            | _Addons specific_ | A "press-tap" gesture happened on the touch surface (first finger down, second finger down, second finger up, first finger up). |
| [MozEdgeUIGesture](/zh-CN/docs/Web/Reference/Events/MozEdgeUIGesture)               |            | _Addons specific_ | A touch point is swiped across the touch surface to invoke the edge UI (Win8 only).                                             |
| [MozAfterPaint](/zh-CN/docs/Web/Reference/Events/MozAfterPaint)                     |            | _Addons specific_ | Content has been repainted.                                                                                                     |
| [DOMPopupBlocked](/zh-CN/docs/Web/Reference/Events/DOMPopupBlocked)                 |            | _Addons specific_ | A popup has been blocked                                                                                                        |
| [DOMWindowCreated](/zh-CN/docs/Web/Reference/Events/DOMWindowCreated)               |            | _Addons specific_ | A window has been created.                                                                                                      |
| [DOMWindowClose](/zh-CN/docs/Web/Reference/Events/DOMWindowClose)                   |            | _Addons specific_ | A window is about to be closed.                                                                                                 |
| [DOMTitleChanged](/zh-CN/docs/Web/Reference/Events/DOMTitleChanged)                 |            | _Addons specifc_  | The title of a window has changed.                                                                                              |
| [DOMLinkAdded](/zh-CN/docs/Web/Reference/Events/DOMLinkAdded)                       |            | _Addons specifc_  | A link has been added a document.                                                                                               |
| [DOMLinkRemoved](/zh-CN/docs/Web/Reference/Events/DOMLinkRemoved)                   |            | _Addons specifc_  | A link has been removed inside from a document.                                                                                 |
| [DOMMetaAdded](/zh-CN/docs/Web/Reference/Events/DOMMetaAdded)                       |            | _Addons specific_ | A `meta` element has been added to a document.                                                                                  |
| [DOMMetaRemoved](/zh-CN/docs/Web/Reference/Events/DOMMetaRemoved)                   |            | _Addons specific_ | A `meta` element has been removed from a document.                                                                              |
| [DOMWillOpenModalDialog](/zh-CN/docs/Web/Reference/Events/DOMWillOpenModalDialog)   |            | _Addons specific_ | A modal dialog is about to open.                                                                                                |
| [DOMModalDialogClosed](/zh-CN/docs/Web/Reference/Events/DOMModalDialogClosed)       |            | _Addons specific_ | A modal dialog has been closed.                                                                                                 |
| [DOMAutoComplete](/zh-CN/docs/Web/Reference/Events/DOMAutoComplete)                 |            | _Addons specific_ | The content of an element has been auto-completed.                                                                              |
| [DOMFrameContentLoaded](/zh-CN/docs/Web/Reference/Events/DOMFrameContentLoaded)     |            | _Addons specific_ | The frame has finished loading (but not its dependent resources).                                                               |
| [AlertActive](/zh-CN/docs/Web/Reference/Events/AlertActive)                         |            | _Addons specific_ | A [`notification`](/zh-CN/docs/XUL/notification) element is shown.                                                              |
| [AlertClose](/zh-CN/docs/Web/Reference/Events/AlertClose)                           |            | _Addons specific_ | A [`notification`](/zh-CN/docs/XUL/notification) element is closed.                                                             |
| [fullscreen](/zh-CN/docs/Web/Reference/Events/fullscreen)                           |            | _Addons specific_ | Browser fullscreen mode has been entered or left.                                                                               |
| [sizemodechange](/zh-CN/docs/Web/Reference/Events/sizemodechange)                   |            | _Addons specific_ | Window has entered/left fullscreen mode, or has been minimized/unminimized.                                                     |
| [MozEnteredDomFullscreen](/zh-CN/docs/Web/Reference/Events/MozEnteredDomFullscreen) |            | _Addons specific_ | [DOM fullscreen](/zh-CN/docs/DOM/Using_full-screen_mode) mode has been entered.                                                 |
| [SSWindowClosing](/zh-CN/docs/Web/Reference/Events/SSWindowClosing)                 |            | _Addons specific_ | The session store will stop tracking this window.                                                                               |
| [SSTabClosing](/zh-CN/docs/Web/Reference/Events/SSTabClosing)                       |            | _Addons specific_ | The session store will stop tracking this tab.                                                                                  |
| [SSTabRestoring](/zh-CN/docs/Web/Reference/Events/SSTabRestoring)                   |            | _Addons specific_ | A tab is about to be restored.                                                                                                  |
| [SSTabRestored](/zh-CN/docs/Web/Reference/Events/SSTabRestored)                     |            | _Addons specific_ | A tab has been restored.                                                                                                        |
| [SSWindowStateReady](/zh-CN/docs/Web/Reference/Events/SSWindowStateReady)           |            | _Addons specific_ | A window state has switched to "ready".                                                                                         |
| [SSWindowStateBusy](/zh-CN/docs/Web/Reference/Events/SSWindowStateBusy)             |            | _Addons specific_ | A window state has switched to "busy".                                                                                          |
| [TabOpen](/zh-CN/docs/Web/Reference/Events/TabOpen)                                 |            | _Addons specific_ | A tab has been opened.                                                                                                          |
| [TabClose](/zh-CN/docs/Web/Reference/Events/TabClose)                               |            | _Addons specific_ | A tab has been closed.                                                                                                          |
| [TabSelect](/zh-CN/docs/Web/Reference/Events/TabSelect)                             |            | _Addons specific_ | A tab has been selected.                                                                                                        |
| [TabShow](/zh-CN/docs/Web/Reference/Events/TabShow)                                 |            | _Addons specific_ | A tab has been shown.                                                                                                           |
| [TabHide](/zh-CN/docs/Web/Reference/Events/TabHide)                                 |            | _Addons specific_ | A tab has been hidden.                                                                                                          |
| [TabPinned](/zh-CN/docs/Web/Reference/Events/TabPinned)                             |            | _Addons specific_ | A tab has been pinned.                                                                                                          |
| [TabUnpinned](/zh-CN/docs/Web/Reference/Events/TabUnpinned)                         |            | _Addons specific_ | A tab has been unpinned.                                                                                                        |

### 开发者工具特定事件

| Event Name                                                                              | Event Type | Specification       | Fired when...                                                                     |
| --------------------------------------------------------------------------------------- | ---------- | ------------------- | --------------------------------------------------------------------------------- |
| [CssRuleViewRefreshed](/zh-CN/docs/Web/Reference/Events/CssRuleViewRefreshed)           |            | _devtools specific_ | The "Rules" view of the style inspector has been updated.                         |
| [CssRuleViewChanged](/zh-CN/docs/Web/Reference/Events/CssRuleViewChanged)               |            | _devtools specific_ | The "Rules" view of the style inspector has been changed.                         |
| [CssRuleViewCSSLinkClicked](/zh-CN/docs/Web/Reference/Events/CssRuleViewCSSLinkClicked) |            | _devtools specific_ | A link to a CSS file has been clicked in the "Rules" view of the style inspector. |

## 规范

{{Specifications}}

## 参见

- {{DOMxRef("Event")}}
- [事件开发者指南](/zh-CN/docs/Web/Guide/DOM/Events)
