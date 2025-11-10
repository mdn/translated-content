---
title: DOM 事件
slug: Web/API/Document_Object_Model/Events
---

{{DefaultAPISidebar("DOM")}}

[事件](/zh-CN/docs/Learn_web_development/Core/Scripting/Events)的触发用于通知“对变化感兴趣”的代码以影响代码的执行。这些事件可能来自用户的交互（例如：使用鼠标或调整窗口大小）、底层环境状态的改变（例如：电池电量不足或操作系统的媒体事件）和其他的情况。

每个事件都使用继承自 {{domxref("Event")}} 接口的对象来表示，可以包括额外的自定义成员属性及函数，以获取事件发生时相关的更多信息。本文为每个事件都提供了一个表格（靠近顶部的区域），其中包含了指向相关事件接口的链接和其他相关的信息。[事件 > 基于 `Event` 的接口](/zh-CN/docs/Web/API/Event#基于_event_的接口)中完整地列出了不同的事件类型。

本文提供了你可能感兴趣的主要事件类型（动画、剪切板、worker 等等）的索引，以及实现这些事件的主要的类。

## 事件索引

<table class="standard-table">
  <tbody>
    <tr>
      <th>事件类型</th>
      <th style="width: 50%">描述</th>
      <th>文档</th>
    </tr>
    <tr>
      <td>动画</td>
      <td>
        <p>
          与
          <a href="/zh-CN/docs/Web/API/Web_Animations_API">Web Animation API</a
          > 相关的事件。
        </p>
        <p>
          用于响应动画状态的改变（例如：动画的开始或结束）。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Document#动画事件"
          ><code>Document</code></a
        >、<a href="/zh-CN/docs/Web/API/Window#动画事件"
          ><code>Window</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLElement#动画事件"
          ><code>HTMLElement</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>异步数据获取</td>
      <td><p>与数据获取相关的事件。</p></td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/AbortSignal#事件"
          ><code>AbortSignal</code></a
        >、<a href="/zh-CN/docs/Web/API/XMLHttpRequest#事件"
          ><code>XMLHttpRequest</code></a
        >、<a href="/zh-CN/docs/Web/API/FileReader#事件"
          ><code>FileReader</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>剪切板</td>
      <td>
        <p>
          与
          <a href="/zh-CN/docs/Web/API/Clipboard_API">Clipboard API</a> 相关的事件。
        </p>
        <p>用于在内容被剪切、复制或粘贴时发出通知。</p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Document#剪切板事件"
          ><code>Document</code></a
        >、<a href="/zh-CN/docs/Web/API/Element#剪切板事件"
          ><code>Element</code></a
        >、<a href="/zh-CN/docs/Web/API/Window#剪切板事件"
          ><code>Window</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>合成（Composition）</td>
      <td>
        <p>
          与文本输入相关的事件；“间接”输入文本（而不是直接使用常规的键盘输入）。
        </p>
        <p>
          例如，使用语音转文字的引擎，或使用特殊的组合键以将键入的内容表示成另一种语言中的字符。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Element#合成事件"
          ><code>Element</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>CSS 过渡</td>
      <td>
        <p>
          与
          <a href="/zh-CN/docs/Web/CSS/Guides/Transitions">CSS 过渡</a>相关的事件。
        </p>
        <p>
          当 CSS 过渡开始、停止或取消等事件发生时发出通知。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Document#过渡事件"
          ><code>Document</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLElement#过渡事件"
          ><code>HTMLElement</code></a
        >、<a href="/zh-CN/docs/Web/API/Window#过渡事件"
          ><code>Window</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>数据库</td>
      <td>
        <p>
          与数据库操作相关的事件：打开、关闭、事务、错误，等等。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/IDBDatabase#事件"
          ><code>IDBDatabase</code></a
        >、<a href="/zh-CN/docs/Web/API/IDBOpenDBRequest#事件"
          ><code>IDBOpenDBRequest</code></a
        >、<a href="/zh-CN/docs/Web/API/IDBRequest#事件"
          ><code>IDBRequest</code></a
        >、<a href="/zh-CN/docs/Web/API/IDBTransaction#事件"
          ><code>IDBTransaction</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>DOM 突变</td>
      <td>
        <p>
          与文档对象模型（DOM）层次结构和节点的修改相关的事件。
        </p>
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>警告：</strong>
            <a href="/zh-CN/docs/Web/API/MutationEvent">突变事件</a>已被弃用。请使用 <a href="/zh-CN/docs/Web/API/MutationObserver"
              >MutationObserver</a
            > 代替。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>拖放、滚轮</td>
      <td>
        <p>
          与使用
          <a href="/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API"
            >HTML 拖放 API</a
          > 和<a href="/zh-CN/docs/Web/API/WheelEvent">滚轮事件</a>相关的事件。
        </p>
        <p>
          拖动和滚轮事件派生自鼠标事件。虽然它们在使用鼠标滚轮和拖放时触发，但它们也可以和其他合适的硬件一起使用。
        </p>
      </td>
      <td>
        <p>
          拖放事件在
          <a href="/zh-CN/docs/Web/API/Document#拖放事件"
            ><code>Document</code></a
          > 上触发。
        </p>
        <p>
          滚轮事件在
          <a href="/zh-CN/docs/Web/API/Element/wheel_event"
            ><code>Element</code></a
          > 上触发。
        </p>
      </td>
    </tr>
    <tr>
      <td>焦点</td>
      <td><p>与元素获得和失去焦点相关的事件。</p></td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Element#聚焦事件"
          ><code>Element</code></a
        >、<a href="/zh-CN/docs/Web/API/Window#聚焦事件"><code>Window</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>表单</td>
      <td>
        <p>与创建、重置和提交表单相关的事件。</p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/HTMLFormElement#事件"
          ><code>HTMLFormElement</code></a
        > 上触发。
      </td>
    </tr>
    <tr>
      <td>全屏</td>
      <td>
        <p>
          与
          <a href="/zh-CN/docs/Web/API/Fullscreen_API">Fullscreen API</a> 相关的事件。
        </p>
        <p>
          用于在全屏和窗口模式切换或切换期间发生错误时发送通知。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Document#fullscreen_events"
          ><code>Document</code></a
        >、<a href="/zh-CN/docs/Web/API/Element#fullscreen_events"
          ><code>Element</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>游戏手柄（Gamepad）</td>
      <td>
        <p>
          与
          <a href="/zh-CN/docs/Web/API/Gamepad_API">Gamepad API</a> 相关的事件。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Window#gamepad_事件"
          ><code>Window</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>手势</td>
      <td>
        <p>
          建议使用
          <a href="/zh-CN/docs/Web/API/Touch_events">Touch 事件</a>来实现手势。
        </p>
      </td>
      <td>
        <p>
          在
          <a href="/zh-CN/docs/Web/API/Document#触摸事件"
            ><code>Document</code></a
          >、<a href="/zh-CN/docs/Web/API/Element#触摸事件"
            ><code>Element</code></a
          > 上触发的事件。
        </p>
        <p>此外还有一些非标准的手势事件：</p>
        <ul>
          <li>
            WebKit 非标准的、在 <a href="/zh-CN/docs/Web/API/Element#触摸事件"
              ><code>Element</code></a
            > 上的事件：
            <a href="/zh-CN/docs/Web/API/Element/gesturestart_event"
              ><code>gesturestart</code> 事件</a
            >、<a href="/zh-CN/docs/Web/API/Element/gesturechange_event"
              ><code>gesturechange</code> 事件</a
            >、<a href="/zh-CN/docs/Web/API/Element/gestureend_event"
              ><code>gestureend</code> 事件</a
            >。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>History</td>
      <td>
        <p>
          与
          <a href="/zh-CN/docs/Web/API/History_API">History API</a>
          相关的事件。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Window#历史记录事件"
          ><code>Window</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>HTML 元素内容显示管理</td>
      <td>
        <p>
          与显示或文本元素状态的改变相关的事件。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/HTMLDetailsElement#事件"
          ><code>HTMLDetailsElement</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLDialogElement#事件"
          ><code>HTMLDialogElement</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLSlotElement#事件"
          ><code>HTMLSlotElement</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>输入</td>
      <td>
        <p>
          与 HTML input 元素（如：{{HTMLElement("input")}}、{{HTMLElement("select")}} 或 {{HTMLElement("textarea")}}）相关的事件。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/HTMLElement#输入事件"
          ><code>HTMLElement</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLInputElement#事件"
          ><code>HTMLInputElement</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>键盘</td>
      <td>
        <p>
          与使用<a href="/zh-CN/docs/Web/API/KeyboardEvent">键盘</a>相关的事件。
        </p>
        <p>用于在按键向上、向下或仅仅只是按下时发出通知。</p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Document#键盘事件"
          ><code>Document</code></a
        >、<a href="/zh-CN/docs/Web/API/Element#键盘事件"
          ><code>Element</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>加载/卸载文档</td>
      <td><p>在加载或卸载文档时触发的事件。</p></td>
      <td>
        <p>
          在
          <a href="/zh-CN/docs/Web/API/Document#加载和卸载事件"
            ><code>Document</code></a
          > 和
          <a href="/zh-CN/docs/Web/API/Window#加载和卸载事件"
            ><code>Window</code></a
          > 上触发的事件。
        </p>
      </td>
    </tr>
    <tr>
      <td>清单</td>
      <td>
        <p>
          与安装<a href="/zh-CN/docs/Web/Progressive_web_apps/Manifest">渐进式 web 应用清单</a>相关的事件。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Window#清单事件"
          ><code>Window</code></a
        > 上触发的事件
      </td>
    </tr>
    <tr id="media">
      <td>媒体</td>
      <td>
        <p>
          与媒体使用（包括<a
            href="/zh-CN/docs/Web/API/Media_Capture_and_Streams_API#事件"
            >媒体捕捉与媒体流 API</a
          >、<a href="/zh-CN/docs/Web/API/Web_Audio_API#事件">Web Audio API</a>、<a href="/zh-CN/docs/Web/API/Picture-in-Picture_API#事件"
            >画中画 API</a
          >，等等）相关的事件。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/ScriptProcessorNode#事件"
          ><code>ScriptProcessorNode</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLMediaElement#事件"
          ><code>HTMLMediaElement</code></a
        >、<a href="/zh-CN/docs/Web/API/AudioTrackList#事件"
          ><code>AudioTrackList</code></a
        >、<a href="/zh-CN/docs/Web/API/AudioScheduledSourceNode#事件"
          ><code>AudioScheduledSourceNode</code></a
        >、<a href="/zh-CN/docs/Web/API/MediaRecorder#事件"
          ><code>MediaRecorder</code></a
        >、<a href="/zh-CN/docs/Web/API/MediaStream#事件"
          ><code>MediaStream</code></a
        >、<a href="/zh-CN/docs/Web/API/MediaStreamTrack"
          ><code>MediaStreamTrack</code></a
        >、<a href="/zh-CN/docs/Web/API/VideoTrackList#事件"
          ><code>VideoTrackList</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLTrackElement#事件"
          ><code>HTMLTrackElement</code></a
        >、<a href="/zh-CN/docs/Web/API/OfflineAudioContext#事件"
          ><code>OfflineAudioContext</code></a
        >、<a href="/zh-CN/docs/Web/API/TextTrack#事件"><code>TextTrack</code></a
        >、<a href="/zh-CN/docs/Web/API/TextTrackList#事件"
          ><code>TextTrackList</code></a
        >、<a href="/zh-CN/docs/Web/HTML/Reference/Elements/audio#事件">Element/audio</a>,
        <a href="/zh-CN/docs/Web/HTML/Reference/Elements/video#事件">Element/video</a> 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>消息传递</td>
      <td>
        <p>
          与窗口从另一个浏览上下文接受消息相关的事件。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Window#消息事件"
          ><code>Window</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>鼠标</td>
      <td>
        <p>
          与<a href="/zh-CN/docs/Web/API/MouseEvent">计算机鼠标</a>相关的事件。
        </p>
        <p>
          用于在鼠标单机、双击、释放、按下、右击、移入移除元素/文本、选择等动作时发出通知。
        </p>
        <p>
          指针事件为鼠标事件提供了与硬件无关的代替方案。拖放和滚轮事件派生自鼠标事件。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Element#鼠标事件"
          ><code>Element</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>网络连接</td>
      <td><p>与获得和失去网络连接相关的事件。</p></td>
      <td>
        <p>
          在
          <a href="/zh-CN/docs/Web/API/Window#连接事件"
            ><code>Window</code></a
          > 上触发的事件。
        </p>
        <p>
          在
          <a href="/zh-CN/docs/Web/API/NetworkInformation#事件处理器"
            ><code>NetworkInformation</code></a
          >（<a href="/zh-CN/docs/Web/API/Network_Information_API"
            >网络状况 API</a
          >）上触发的事件。
        </p>
      </td>
    </tr>
    <tr>
      <td>支付</td>
      <td>
        <p>
          与<a href="/zh-CN/docs/Web/API/Payment_Request_API"
            >支付请求 API</a
          > 相关的事件。
        </p>
      </td>
      <td>
        <p>
          在
          <a href="/zh-CN/docs/Web/API/PaymentRequest#事件"
            ><code>PaymentRequest</code></a
          >、<a href="/zh-CN/docs/Web/API/PaymentResponse#事件"
            ><code>PaymentResponse</code></a
          > 上触发的事件。
        </p>
      </td>
    </tr>
    <tr>
      <td>性能</td>
      <td>
        <p>
          与任何性能相关的规范分组为
          <a href="/zh-CN/docs/Web/API/Performance_API"
            >Performance API</a
          > 的相关事件。
        </p>
      </td>
      <td>
        <p>
          在
          <a href="/zh-CN/docs/Web/API/Performance#事件处理器"
            ><code>Performance</code></a
          > 上触发的事件。
        </p>
      </td>
    </tr>
    <tr>
      <td>指针</td>
      <td>
        <p>
          与<a href="/zh-CN/docs/Web/API/Pointer_events">指针事件 API</a> 相关的事件。
        </p>
        <p>
          提供来自指针设备（包括鼠标、触控、笔/触控笔）的与硬件无关的通知。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Document#指针事件"
          ><code>Document</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLElement#指针事件"
          ><code>HTMLElement</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>打印</td>
      <td><p>与打印相关的事件。</p></td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Window#打印事件"><code>Window</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>Promise rejection</td>
      <td>
        <p>
          在任意 JavaScript promise 被拒绝时，发送到全局脚本上下文的事件。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Window#promise_拒绝事件"
          ><code>Window</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>网络套接字</td>
      <td>
        <p>
          与
          <a href="/zh-CN/docs/Web/API/WebSockets_API">WebSockets API</a> 相关的事件。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/WebSocket#事件"><code>Websocket</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>SVG</td>
      <td><p>与 SVG 图像相关的事件。</p></td>
      <td>
        <p>
          在
          <a href="/zh-CN/docs/Web/API/SVGElement#事件"
            ><code>SVGElement</code></a
          >、<a href="/zh-CN/docs/Web/API/SVGAnimationElement#事件"
            ><code>SVGAnimationElement</code></a
          >、<a href="/zh-CN/docs/Web/API/SVGGraphicsElement#事件"
            ><code>SVGGraphicsElement</code></a
          > 上触发的事件。
        </p>
      </td>
    </tr>
    <tr>
      <td>文本选择</td>
      <td>
        <p>
          与选择文本相关的 <a href="/zh-CN/docs/Web/API/Selection">Selection API</a> 事件。
        </p>
      </td>
      <td>
        <p>
          事件（<code>selectionchange</code>）在
          {{domxref("HTMLTextAreaElement/selectionchange_event", "HTMLTextAreaElement")}}、{{domxref("HTMLInputElement/selectionchange_event", "HTMLInputElement")}} 上触发。
        </p>
      </td>
    </tr>
    <tr>
      <td>触控</td>
      <td>
        <p>
          与
          <a href="/zh-CN/docs/Web/API/Touch_events">Touch Events API</a> 相关的事件。
        </p>
        <p>
          在与触控屏交互（例如：用手指或触控笔）时发出通知。与
          <a href="/zh-CN/docs/Web/API/Force_Touch_events#事件"
            >Force Touch API</a
          > 无关。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Document#触摸事件"
          ><code>Document</code></a
        >、<a href="/zh-CN/docs/Web/API/Element#触摸事件"
          ><code>Element</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>虚拟现实</td>
      <td>
        <p>
          与
          <a href="/zh-CN/docs/Web/API/WebXR_Device_API">WebXR Device API</a> 相关的事件。
        </p>
        <div class="notecard warning">
          <p>
            <strong>警告：</strong>
            <a href="/zh-CN/docs/Web/API/WebVR_API">WebVR API</a>（和关联的
            <a href="/zh-CN/docs/Web/API/Window#webvr_事件"
              ><code>Window</code> 事件</a
            >）已被弃用。
          </p>
        </div>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/XRSystem#事件"><code>XRSystem</code></a
        >、<a href="/zh-CN/docs/Web/API/XRSession#事件"><code>XRSession</code></a
        >、<a href="/zh-CN/docs/Web/API/XRReferenceSpace#事件"
          ><code>XRReferenceSpace</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>RTC（实时通信）</td>
      <td>
        <p>
          与
          <a href="/zh-CN/docs/Web/API/WebRTC_API">WebRTC API</a> 相关的事件。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/RTCDataChannel#事件"
          ><code>RTCDataChannel</code></a
        >、<a href="/zh-CN/docs/Web/API/RTCDTMFSender#事件"
          ><code>RTCDTMFSender</code></a
        >、<a href="/zh-CN/docs/Web/API/RTCIceTransport#事件"
          ><code>RTCIceTransport</code></a
        >、<a href="/zh-CN/docs/Web/API/RTCPeerConnection#事件"
          ><code>RTCPeerConnection</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>Server-sent 事件</td>
      <td>
        <p>
          与
          <a href="/zh-CN/docs/Web/API/Server-sent_events"
            >server sent events API</a
          > 相关的事件。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/EventSource#事件"
          ><code>EventSource</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>语音合成</td>
      <td>
        <p>
          与
          <a href="/zh-CN/docs/Web/API/Web_Speech_API">Web Speech API</a> 相关的事件。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/SpeechSynthesisUtterance#事件"
          ><code>SpeechSynthesisUtterance</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>Worker</td>
      <td>
        <p>
          与
          <a href="/zh-CN/docs/Web/API/Web_Workers_API">Web Workers API</a>、<a href="/zh-CN/docs/Web/API/Service_Worker_API">Service Worker API</a
          >、<a href="/zh-CN/docs/Web/API/Broadcast_Channel_API"
            >Broadcast Channel API</a
          > 和
          <a href="/zh-CN/docs/Web/API/Channel_Messaging_API"
            >Channel Messaging API</a
          > 相关的事件。
        </p>
        <p>
          用于相应新消息和消息发送的错误。Service
          worker 还可以收到其他事件的通知，包括推送通知、用户单击显示的通知 push 订阅失效、从内容索引中删除条目，等等。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/ServiceWorkerGlobalScope#事件"
          ><code>ServiceWorkerGlobalScope</code></a
        >、<a href="/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope#事件"
          ><code>DedicatedWorkerGlobalScope</code></a
        >、<a href="/zh-CN/docs/Web/API/SharedWorkerGlobalScope#事件"
          ><code>SharedWorkerGlobalScope</code></a
        >、<a href="/zh-CN/docs/Web/API/WorkerGlobalScope#事件"
          ><code>WorkerGlobalScope</code></a
        >、<a href="/zh-CN/docs/Web/API/Worker#事件"><code>Worker</code></a
        >、<a href="/zh-CN/docs/Web/API/BroadcastChannel#事件"
          ><code>BroadcastChannel</code></a
        >、<a href="/zh-CN/docs/Web/API/MessagePort#事件"
          ><code>MessagePort</code></a
        > 上触发的事件。
      </td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 参见

- [事件介绍](/zh-CN/docs/Learn_web_development/Core/Scripting/Events)
- [事件冒泡](/zh-CN/docs/Learn_web_development/Core/Scripting/Event_bubbling)
