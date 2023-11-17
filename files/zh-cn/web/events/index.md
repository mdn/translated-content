---
title: 事件参考
slug: Web/Events
---

[事件](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)的触发用于通知“对变化感兴趣”的代码以影响代码的执行。这些事件可能来自用户的交互（例如：使用鼠标或调整窗口大小）、底层环境状态的改变（例如：电池电量不足或操作系统的媒体事件）和其他的情况。

每个事件都使用继承自 {{domxref("Event")}} 接口的对象来表示，可以包括额外的自定义成员属性及函数，以获取事件发生时相关的更多信息。本文为每个事件都提供了一个表格（靠近顶部的区域），其中包含了指向相关事件接口的链接和其他相关的信息。[事件 > 基于 `Event` 的接口](/zh-CN/docs/Web/API/Event#基于_event_的接口)中完整地列出了不同的事件类型。

本文提供了你可能感兴趣的主要事件类型（动画、剪切板、worker，等等）的索引，以及实现这些事件的主要的类。最后是所有提供了文档的事件列表。

> **备注：** 此页面列出了你会在 web 上遇到的绝大多数常见事件。如果你正在查找一个这里没有列出的事件，请尝试在 MDN 上搜索它的名字、主题或关联的规范。

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
        <a href="/zh-CN/docs/Web/API/Document#animation_events"
          ><code>Document</code></a
        >、<a href="/zh-CN/docs/Web/API/Window#animation_events"
          ><code>Window</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLElement#animation_events"
          ><code>HTMLElement</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>异步数据获取</td>
      <td><p>与数据获取相关的事件。</p></td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/AbortSignal#事件处理"
          ><code>AbortSignal</code></a
        >、<a href="/zh-CN/docs/Web/API/XMLHttpRequest#事件"
          ><code>XMLHttpRequest</code></a
        >、<a href="/zh-CN/docs/Web/API/FileReader#事件处理"
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
        <a href="/zh-CN/docs/Web/API/Document#animation_events"
          ><code>Document</code></a
        >、<a href="/zh-CN/docs/Web/API/Window#animation_events"
          ><code>Window</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLElement#animation_events"
          ><code>HTMLElement</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>文本输入（Composition）</td>
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
        <a href="/zh-CN/docs/Web/API/Element#composition_events"
          ><code>Element</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>CSS 变换</td>
      <td>
        <p>
          与
          <a href="/zh-CN/docs/Web/CSS/CSS_transitions">CSS 变换</a>相关的事件。
        </p>
        <p>
          当 CSS 变换开始、停止或取消等事件发生时发出通知。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Document#animation_events"
          ><code>Document</code></a
        >、<a href="/zh-CN/docs/Web/API/Window#animation_events"
          ><code>Window</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLElement#animation_events"
          ><code>HTMLElement</code></a
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
        <a href="/zh-CN/docs/Web/API/IDBDatabase#event_handlers"
          ><code>IDBDatabase</code></a
        >、<a href="/zh-CN/docs/Web/API/IDBOpenDBRequest#events"
          ><code>IDBOpenDBRequest</code></a
        >、<a href="/zh-CN/docs/Web/API/IDBRequest#event_handlers"
          ><code>IDBRequest</code></a
        >、<a href="/zh-CN/docs/Web/API/IDBTransaction#event_handlers"
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
            <a href="/zh-CN/docs/Web/API/MutationEvent">突变事件</a>已被废弃。请使用 <a href="/zh-CN/docs/Web/API/MutationObserver"
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
          <a href="/zh-CN/docs/Web/API/Document#drag_drop_events"
            ><code>Document</code></a
          > 上触发。
        </p>
        <p>
          滚轮事件在
          <a href="/zh-CN/docs/Web/API/Document/wheel_event"
            ><code>Document</code></a
          >
          和
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
        <a href="/zh-CN/docs/Web/API/Element#focus_events"
          ><code>Element</code></a
        >、<a href="/zh-CN/docs/Web/API/Window#focus_events"><code>Window</code></a
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
        <a href="/zh-CN/docs/Web/API/HTMLFormElement#events"
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
        <a href="/zh-CN/docs/Web/API/Window#gamepad_events"
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
          <a href="/zh-CN/docs/Web/API/Document#touch_events"
            ><code>Document</code></a
          >、<a href="/zh-CN/docs/Web/API/Element#touch_events"
            ><code>Element</code></a
          > 上触发的事件。
        </p>
        <p>此外还有一些非标准的手势事件：</p>
        <ul>
          <li>
            WebKit 非标准的、在 <a href="/zh-CN/docs/Web/API/Element#touch_events"
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
          <li>
            IE 非标准的、在 <a href="/zh-CN/docs/Web/API/Element#touch_events"
              ><code>Element</code></a
            > 上的事件：
            <a href="/zh-CN/docs/Web/API/Element/MSGestureStart_event"
              ><code>MSGestureStart</code></a
            >、<a href="/zh-CN/docs/Web/API/Element/MSGestureChange_event"
              ><code>MSGestureChange</code></a
            >、<a href="/zh-CN/docs/Web/API/Element/MSGestureEnd_event"
              ><code>MSGestureEnd</code></a
            >、<a href="/zh-CN/docs/Web/API/Element/MSGestureHold_event"
              ><code>MSGestureHold</code></a
            >、<a href="/zh-CN/docs/Web/API/Element/MSGestureTap_event"
              ><code>MSGestureTap</code></a
            >。
          </li>
          <li>
            Mozilla 已启用/非标准的 touch 事件
            <a
              href="/zh-CN/docs/Web/API/Touch_events/Mozilla_experimental_events"
              >Touch 事件（Mozilla 实验性）</a
            >。
          </li>
          <li>
            <a href="/zh-CN/docs/Web/Events/Mouse_gesture_events"
              >Firefox 附加组件的鼠标手势事件</a
            >
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
        <a href="/zh-CN/docs/Web/API/Window#history_events"
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
        <a href="/zh-CN/docs/Web/API/HTMLDetailsElement#events"
          ><code>HTMLDetailsElement</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLDialogElement#events"
          ><code>HTMLDialogElement</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLSlotElement#events"
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
        <a href="/zh-CN/docs/Web/API/HTMLElement#input_events"
          ><code>HTMLElement</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLInputElement#events"
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
        <a href="/zh-CN/docs/Web/API/Document#keyboard_events"
          ><code>Document</code></a
        >、<a href="/zh-CN/docs/Web/API/Element#keyboard_events"
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
          <a href="/zh-CN/docs/Web/API/Document#load_unload_events"
            ><code>Document</code></a
          > 和
          <a href="/zh-CN/docs/Web/API/Window#load_unload_events"
            ><code>Window</code></a
          > 上触发的事件。
        </p>
      </td>
    </tr>
    <tr>
      <td>清单</td>
      <td>
        <p>
          与安装<a href="/zh-CN/docs/Web/Manifest">渐进式 web 应用清单</a>相关的事件。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Window#manifest_events"
          ><code>Window</code></a
        > 上触发的事件
      </td>
    </tr>
    <tr id="media">
      <td>媒体</td>
      <td>
        <p>
          与媒体使用（包括
          <a href="/zh-CN/docs/Web/API/Media_Streams_API#events"
            >Media Capture and Streams API</a
          >、<a href="/zh-CN/docs/Web/API/Web_Audio_API#events">Web Audio API</a>、<a href="/zh-CN/docs/Web/API/Picture-in-Picture_API#事件"
            >画中画 API</a
          >，等等）相关的事件。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/ScriptProcessorNode#events"
          ><code>ScriptProcessorNode</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLMediaElement#events"
          ><code>HTMLMediaElement</code></a
        >、<a href="/zh-CN/docs/Web/API/AudioTrackList#events"
          ><code>AudioTrackList</code></a
        >、<a href="/zh-CN/docs/Web/API/AudioScheduledSourceNode#events"
          ><code>AudioScheduledSourceNode</code></a
        >、<a href="/zh-CN/docs/Web/API/MediaRecorder#events"
          ><code>MediaRecorder</code></a
        >、<a href="/zh-CN/docs/Web/API/MediaStream#events"
          ><code>MediaStream</code></a
        >、<a href="/zh-CN/docs/Web/API/MediaStreamTrack"
          ><code>MediaStreamTrack</code></a
        >、<a href="/zh-CN/docs/Web/API/VideoTrackList#events"
          ><code>VideoTrackList</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLTrackElement#events"
          ><code>HTMLTrackElement</code></a
        >、<a href="/zh-CN/docs/Web/API/OfflineAudioContext#events"
          ><code>OfflineAudioContext</code></a
        >、<a href="/zh-CN/docs/Web/API/TextTrack#events"><code>TextTrack</code></a
        >、<a href="/zh-CN/docs/Web/API/TextTrackList#events"
          ><code>TextTrackList</code></a
        >、<a href="/zh-CN/docs/Web/HTML/Element/audio#events">Element/audio</a>,
        <a href="/zh-CN/docs/Web/HTML/Element/video#events">Element/video</a> 上触发的事件。
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
        <a href="/zh-CN/docs/Web/API/Window#messaging_events"
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
        <a href="/zh-CN/docs/Web/API/Element#mouse_events"
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
          <a href="/zh-CN/docs/Web/API/Window#connection_events"
            ><code>Window</code></a
          > 上触发的事件。
        </p>
        <p>
          在
          <a href="/zh-CN/docs/Web/API/NetworkInformation#event_handlers"
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
          <a href="/zh-CN/docs/Web/API/PaymentRequest#events"
            ><code>PaymentRequest</code></a
          >、<a href="/zh-CN/docs/Web/API/PaymentResponse#events"
            ><code>PaymentResponse</code></a
          > 上触发的事件。
        </p>
      </td>
    </tr>
    <tr>
      <td>性能</td>
      <td>
        <p>
          与
          <a href="/zh-CN/docs/Web/API/Performance_API"
            >High Resolution Time API</a
          >、<a href="/zh-CN/docs/Web/API/Performance_API/Navigation_timing"
            >Navigation Timing API</a
          >、<a href="/zh-CN/docs/Web/API/Performance_API/User_timing">User Timing API</a>
          和
          <a href="/zh-CN/docs/Web/API/Performance_API/Resource_timing"
            >Resource Timing API</a
          > 相关的事件。
        </p>
      </td>
      <td>
        <p>
          在
          <a href="/zh-CN/docs/Web/API/Performance#事件处理程序"
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
        <a href="/zh-CN/docs/Web/API/Document#pointer_events"
          ><code>Document</code></a
        >、<a href="/zh-CN/docs/Web/API/HTMLElement#pointer_events"
          ><code>HTMLElement</code></a
        > 上触发的事件。
      </td>
    </tr>
    <tr>
      <td>打印</td>
      <td><p>与打印相关的事件。</p></td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Window#print_events"><code>Window</code></a
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
        <a href="/zh-CN/docs/Web/API/Window#promise_rejection_events"
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
          <a href="/zh-CN/docs/Web/API/SVGElement#events"
            ><code>SVGElement</code></a
          >、<a href="/zh-CN/docs/Web/API/SVGAnimationElement#events"
            ><code>SVGAnimationElement</code></a
          >、<a href="/zh-CN/docs/Web/API/SVGGraphicsElement#events"
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
          <a href="/zh-CN/docs/Web/API/Force_Touch_events#events"
            >Force Touch API</a
          > 无关。
        </p>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/Document#touch_events"
          ><code>Document</code></a
        >、<a href="/zh-CN/docs/Web/API/Element#touch_events"
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
            <a href="/zh-CN/docs/Web/API/Window#webvr_events"
              ><code>Window</code> 事件</a
            >）已被废弃。
          </p>
        </div>
      </td>
      <td>
        在
        <a href="/zh-CN/docs/Web/API/XRSystem#events"><code>XRSystem</code></a
        >、<a href="/zh-CN/docs/Web/API/XRSession#events"><code>XRSession</code></a
        >、<a href="/zh-CN/docs/Web/API/XRReferenceSpace#events"
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
        <a href="/zh-CN/docs/Web/API/RTCDataChannel#events"
          ><code>RTCDataChannel</code></a
        >、<a href="/zh-CN/docs/Web/API/RTCDTMFSender#events"
          ><code>RTCDTMFSender</code></a
        >、<a href="/zh-CN/docs/Web/API/RTCIceTransport#events"
          ><code>RTCIceTransport</code></a
        >、<a href="/zh-CN/docs/Web/API/RTCPeerConnection#events"
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
        <a href="/zh-CN/docs/Web/API/SpeechSynthesisUtterance#events"
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
        <a href="/zh-CN/docs/Web/API/ServiceWorkerGlobalScope#events"
          ><code>ServiceWorkerGlobalScope</code></a
        >、<a href="/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope#事件"
          ><code>DedicatedWorkerGlobalScope</code></a
        >、<a href="/zh-CN/docs/Web/API/SharedWorkerGlobalScope#events"
          ><code>SharedWorkerGlobalScope</code></a
        >、<a href="/zh-CN/docs/Web/API/WorkerGlobalScope#events"
          ><code>WorkerGlobalScope</code></a
        >、<a href="/zh-CN/docs/Web/API/Worker#events"><code>Worker</code></a
        >、<a href="/zh-CN/docs/Web/API/WorkerGlobalScope#events"
          ><code>WorkerGlobalScope</code></a
        >、<a href="/zh-CN/docs/Web/API/BroadcastChannel#事件"
          ><code>BroadcastChannel</code></a
        >、<a href="/zh-CN/docs/Web/API/MessagePort#事件"
          ><code>MessagePort</code></a
        > 上触发的事件。
      </td>
    </tr>
  </tbody>
</table>

## 事件列表

本节列出了在 MDN 上有自己的参考页面的事件。如果下面没有列出你感兴趣的某个事件，请尝试搜索它的名字、主题或关联的规范。

- {{DOMxRef("AbortSignal")}}

  - [abort 事件](/zh-CN/docs/Web/API/AbortSignal/abort_event)

- {{DOMxRef("AudioScheduledSourceNode")}}

  - [ended 事件](/zh-CN/docs/Web/API/AudioScheduledSourceNode/ended_event)

- {{DOMxRef("AudioTrackList")}}

  - [addtrack 事件](/zh-CN/docs/Web/API/AudioTrackList/addtrack_event)
  - [change 事件](/zh-CN/docs/Web/API/AudioTrackList/change_event)
  - [removetrack 事件](/zh-CN/docs/Web/API/AudioTrackList/removetrack_event)

- {{DOMxRef("BroadcastChannel")}}

  - [messageerror 事件](/zh-CN/docs/Web/API/BroadcastChannel/messageerror_event)
  - [message 事件](/zh-CN/docs/Web/API/BroadcastChannel/message_event)

- {{DOMxRef("DedicatedWorkerGlobalScope")}}

  - [messageerror 事件](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
  - [message 事件](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/message_event)

- {{DOMxRef("Document")}}

  - [animationcancel 事件](/zh-CN/docs/Web/API/Document/animationcancel_event)
  - [animationend 事件](/zh-CN/docs/Web/API/Document/animationend_event)
  - [animationiteration 事件](/zh-CN/docs/Web/API/Document/animationiteration_event)
  - [animationstart 事件](/zh-CN/docs/Web/API/Document/animationstart_event)
  - [copy 事件](/zh-CN/docs/Web/API/Document/copy_event)
  - [cut 事件](/zh-CN/docs/Web/API/Document/cut_event)
  - [DOMContentLoaded 事件](/zh-CN/docs/Web/API/Document/DOMContentLoaded_event)
  - [dragend 事件](/zh-CN/docs/Web/API/Document/dragend_event)
  - [dragenter 事件](/zh-CN/docs/Web/API/Document/dragenter_event)
  - [dragleave 事件](/zh-CN/docs/Web/API/Document/dragleave_event)
  - [dragover 事件](/zh-CN/docs/Web/API/Document/dragover_event)
  - [dragstart 事件](/zh-CN/docs/Web/API/Document/dragstart_event)
  - [drag 事件](/zh-CN/docs/Web/API/Document/drag_event)
  - [drop 事件](/zh-CN/docs/Web/API/Document/drop_event)
  - [fullscreenchange 事件](/zh-CN/docs/Web/API/Document/fullscreenchange_event)
  - [fullscreenerror 事件](/zh-CN/docs/Web/API/Document/fullscreenerror_event)
  - [gotpointercapture 事件](/zh-CN/docs/Web/API/Document/gotpointercapture_event)
  - [keydown 事件](/zh-CN/docs/Web/API/Document/keydown_event)
  - [keypress 事件](/zh-CN/docs/Web/API/Document/keypress_event)
  - [keyup 事件](/zh-CN/docs/Web/API/Document/keyup_event)
  - [lostpointercapture 事件](/zh-CN/docs/Web/API/Document/lostpointercapture_event)
  - [paste 事件](/zh-CN/docs/Web/API/Document/paste_event)
  - [pointercancel 事件](/zh-CN/docs/Web/API/Document/pointercancel_event)
  - [pointerdown 事件](/zh-CN/docs/Web/API/Document/pointerdown_event)
  - [pointerenter 事件](/zh-CN/docs/Web/API/Document/pointerenter_event)
  - [pointerleave 事件](/zh-CN/docs/Web/API/Document/pointerleave_event)
  - [pointerlockchange 事件](/zh-CN/docs/Web/API/Document/pointerlockchange_event)
  - [pointerlockerror 事件](/zh-CN/docs/Web/API/Document/pointerlockerror_event)
  - [pointermove 事件](/zh-CN/docs/Web/API/Document/pointermove_event)
  - [pointerout 事件](/zh-CN/docs/Web/API/Document/pointerout_event)
  - [pointerover 事件](/zh-CN/docs/Web/API/Document/pointerover_event)
  - [pointerup 事件](/zh-CN/docs/Web/API/Document/pointerup_event)
  - [readystatechange 事件](/zh-CN/docs/Web/API/Document/readystatechange_event)
  - [scroll 事件](/zh-CN/docs/Web/API/Document/scroll_event)
  - [selectionchange 事件](/zh-CN/docs/Web/API/Document/selectionchange_event)
  - [selectstart 事件](/zh-CN/docs/Web/API/Document/selectstart_event)
  - [touchcancel 事件](/zh-CN/docs/Web/API/Document/touchcancel_event)
  - [touchend 事件](/zh-CN/docs/Web/API/Document/touchend_event)
  - [touchmove 事件](/zh-CN/docs/Web/API/Document/touchmove_event)
  - [touchstart 事件](/zh-CN/docs/Web/API/Document/touchstart_event)
  - [transitioncancel 事件](/zh-CN/docs/Web/API/Document/transitioncancel_event)
  - [transitionend 事件](/zh-CN/docs/Web/API/Document/transitionend_event)
  - [transitionrun 事件](/zh-CN/docs/Web/API/Document/transitionrun_event)
  - [transitionstart 事件](/zh-CN/docs/Web/API/Document/transitionstart_event)
  - [visibilitychange 事件](/zh-CN/docs/Web/API/Document/visibilitychange_event)
  - [wheel 事件](/zh-CN/docs/Web/API/Document/wheel_event)

- {{DOMxRef("Element")}}

  - [afterscriptexecute 事件](/zh-CN/docs/Web/API/Element/afterscriptexecute_event)
  - [auxclick 事件](/zh-CN/docs/Web/API/Element/auxclick_event)
  - [beforescriptexecute 事件](/zh-CN/docs/Web/API/Element/beforescriptexecute_event)
  - [blur 事件](/zh-CN/docs/Web/API/Element/blur_event)
  - [click 事件](/zh-CN/docs/Web/API/Element/click_event)
  - [compositionend 事件](/zh-CN/docs/Web/API/Element/compositionend_event)
  - [compositionstart 事件](/zh-CN/docs/Web/API/Element/compositionstart_event)
  - [compositionupdate 事件](/zh-CN/docs/Web/API/Element/compositionupdate_event)
  - [contextmenu 事件](/zh-CN/docs/Web/API/Element/contextmenu_event)
  - [copy 事件](/zh-CN/docs/Web/API/Element/copy_event)
  - [cut 事件](/zh-CN/docs/Web/API/Element/cut_event)
  - [dblclick 事件](/zh-CN/docs/Web/API/Element/dblclick_event)
  - [DOMActivate 事件](/zh-CN/docs/Web/API/Element/DOMActivate_event)
  - [DOMMouseScroll 事件](/zh-CN/docs/Web/API/Element/DOMMouseScroll_event)
  - [error 事件](/zh-CN/docs/Web/API/Element/error_event)
  - [focusin 事件](/zh-CN/docs/Web/API/Element/focusin_event)
  - [focusout 事件](/zh-CN/docs/Web/API/Element/focusout_event)
  - [focus 事件](/zh-CN/docs/Web/API/Element/focus_event)
  - [fullscreenchange 事件](/zh-CN/docs/Web/API/Element/fullscreenchange_event)
  - [fullscreenerror 事件](/zh-CN/docs/Web/API/Element/fullscreenerror_event)
  - [gesturechange 事件](/zh-CN/docs/Web/API/Element/gesturechange_event)
  - [gestureend 事件](/zh-CN/docs/Web/API/Element/gestureend_event)
  - [gesturestart 事件](/zh-CN/docs/Web/API/Element/gesturestart_event)
  - [keydown 事件](/zh-CN/docs/Web/API/Element/keydown_event)
  - [keypress 事件](/zh-CN/docs/Web/API/Element/keypress_event)
  - [keyup 事件](/zh-CN/docs/Web/API/Element/keyup_event)
  - [mousedown 事件](/zh-CN/docs/Web/API/Element/mousedown_event)
  - [mouseenter 事件](/zh-CN/docs/Web/API/Element/mouseenter_event)
  - [mouseleave 事件](/zh-CN/docs/Web/API/Element/mouseleave_event)
  - [mousemove 事件](/zh-CN/docs/Web/API/Element/mousemove_event)
  - [mouseout 事件](/zh-CN/docs/Web/API/Element/mouseout_event)
  - [mouseover 事件](/zh-CN/docs/Web/API/Element/mouseover_event)
  - [mouseup 事件](/zh-CN/docs/Web/API/Element/mouseup_event)
  - [mousewheel 事件](/zh-CN/docs/Web/API/Element/mousewheel_event)
  - [msContentZoom 事件](/zh-CN/docs/Web/API/Element/msContentZoom_event)
  - [MSGestureChange 事件](/zh-CN/docs/Web/API/Element/MSGestureChange_event)
  - [MSGestureEnd 事件](/zh-CN/docs/Web/API/Element/MSGestureEnd_event)
  - [MSGestureHold 事件](/zh-CN/docs/Web/API/Element/MSGestureHold_event)
  - [MSGestureStart 事件](/zh-CN/docs/Web/API/Element/MSGestureStart_event)
  - [MSGestureTap 事件](/zh-CN/docs/Web/API/Element/MSGestureTap_event)
  - [MSInertiaStart 事件](/zh-CN/docs/Web/API/Element/MSInertiaStart_event)
  - [MSManipulationStateChanged 事件](/zh-CN/docs/Web/API/Element/MSManipulationStateChanged_event)
  - [paste 事件](/zh-CN/docs/Web/API/Element/paste_event)
  - [scroll 事件](/zh-CN/docs/Web/API/Element/scroll_event)
  - [select 事件](/zh-CN/docs/Web/API/Element/select_event)
  - [touchcancel 事件](/zh-CN/docs/Web/API/Element/touchcancel_event)
  - [touchend 事件](/zh-CN/docs/Web/API/Element/touchend_event)
  - [touchmove 事件](/zh-CN/docs/Web/API/Element/touchmove_event)
  - [touchstart 事件](/zh-CN/docs/Web/API/Element/touchstart_event)
  - [webkitmouseforcechanged 事件](/zh-CN/docs/Web/API/Element/webkitmouseforcechanged_event)
  - [webkitmouseforcedown 事件](/zh-CN/docs/Web/API/Element/webkitmouseforcedown_event)
  - [webkitmouseforceup 事件](/zh-CN/docs/Web/API/Element/webkitmouseforceup_event)
  - [webkitmouseforcewillbegin 事件](/zh-CN/docs/Web/API/Element/webkitmouseforcewillbegin_event)
  - [wheel 事件](/zh-CN/docs/Web/API/Element/wheel_event)

- {{DOMxRef("EventSource")}}

  - [error 事件](/zh-CN/docs/Web/API/EventSource/error_event)
  - [message 事件](/zh-CN/docs/Web/API/EventSource/message_event)
  - [open 事件](/zh-CN/docs/Web/API/EventSource/open_event)

- {{DOMxRef("FileReader")}}

  - [abort 事件](/zh-CN/docs/Web/API/FileReader/abort_event)
  - [error 事件](/zh-CN/docs/Web/API/FileReader/error_event)
  - [loadend 事件](/zh-CN/docs/Web/API/FileReader/loadend_event)
  - [loadstart 事件](/zh-CN/docs/Web/API/FileReader/loadstart_event)
  - [load 事件](/zh-CN/docs/Web/API/FileReader/load_event)
  - [progress 事件](/zh-CN/docs/Web/API/FileReader/progress_event)

- {{DOMxRef("HTMLCanvasElement")}}

  - [webglcontextcreationerror 事件](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
  - [webglcontextlost 事件](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
  - [webglcontextrestored 事件](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)

- {{DOMxRef("HTMLDetailsElement")}}

  - [toggle 事件](/zh-CN/docs/Web/API/HTMLDetailsElement/toggle_event)

- {{DOMxRef("HTMLDialogElement")}}

  - [cancel 事件](/zh-CN/docs/Web/API/HTMLDialogElement/cancel_event)
  - [close 事件](/zh-CN/docs/Web/API/HTMLDialogElement/close_event)

- {{DOMxRef("HTMLElement")}}

  - [animationcancel 事件](/zh-CN/docs/Web/API/HTMLElement/animationcancel_event)
  - [animationend 事件](/zh-CN/docs/Web/API/HTMLElement/animationend_event)
  - [animationiteration 事件](/zh-CN/docs/Web/API/HTMLElement/animationiteration_event)
  - [animationstart 事件](/zh-CN/docs/Web/API/HTMLElement/animationstart_event)
  - [beforeinput 事件](/zh-CN/docs/Web/API/HTMLElement/beforeinput_event)
  - [change 事件](/zh-CN/docs/Web/API/HTMLElement/change_event)
  - [gotpointercapture 事件](/zh-CN/docs/Web/API/HTMLElement/gotpointercapture_event)
  - [input 事件](/zh-CN/docs/Web/API/HTMLElement/input_event)
  - [lostpointercapture 事件](/zh-CN/docs/Web/API/HTMLElement/lostpointercapture_event)
  - [pointercancel 事件](/zh-CN/docs/Web/API/HTMLElement/pointercancel_event)
  - [pointerdown 事件](/zh-CN/docs/Web/API/HTMLElement/pointerdown_event)
  - [pointerenter 事件](/zh-CN/docs/Web/API/HTMLElement/pointerenter_event)
  - [pointerleave 事件](/zh-CN/docs/Web/API/HTMLElement/pointerleave_event)
  - [pointermove 事件](/zh-CN/docs/Web/API/HTMLElement/pointermove_event)
  - [pointerout 事件](/zh-CN/docs/Web/API/HTMLElement/pointerout_event)
  - [pointerover 事件](/zh-CN/docs/Web/API/HTMLElement/pointerover_event)
  - [pointerup 事件](/zh-CN/docs/Web/API/HTMLElement/pointerup_event)
  - [transitioncancel 事件](/zh-CN/docs/Web/API/HTMLElement/transitioncancel_event)
  - [transitionend 事件](/zh-CN/docs/Web/API/HTMLElement/transitionend_event)
  - [transitionrun 事件](/zh-CN/docs/Web/API/HTMLElement/transitionrun_event)
  - [transitionstart 事件](/zh-CN/docs/Web/API/HTMLElement/transitionstart_event)

- {{DOMxRef("HTMLFormElement")}}

  - [formdata 事件](/zh-CN/docs/Web/API/HTMLFormElement/formdata_event)
  - [reset 事件](/zh-CN/docs/Web/API/HTMLFormElement/reset_event)
  - [submit 事件](/zh-CN/docs/Web/API/HTMLFormElement/submit_event)

- {{DOMxRef("HTMLInputElement")}}

  - [invalid 事件](/zh-CN/docs/Web/API/HTMLInputElement/invalid_event)
  - [search 事件](/zh-CN/docs/Web/API/HTMLInputElement/search_event)

- {{DOMxRef("HTMLMediaElement")}}

  - [abort 事件](/zh-CN/docs/Web/API/HTMLMediaElement/abort_event)
  - [canplaythrough 事件](/zh-CN/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - [canplay 事件](/zh-CN/docs/Web/API/HTMLMediaElement/canplay_event)
  - [durationchange 事件](/zh-CN/docs/Web/API/HTMLMediaElement/durationchange_event)
  - [emptied 事件](/zh-CN/docs/Web/API/HTMLMediaElement/emptied_event)
  - [ended 事件](/zh-CN/docs/Web/API/HTMLMediaElement/ended_event)
  - [error 事件](/zh-CN/docs/Web/API/HTMLMediaElement/error_event)
  - [loadeddata 事件](/zh-CN/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - [loadedmetadata 事件](/zh-CN/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - [loadstart 事件](/zh-CN/docs/Web/API/HTMLMediaElement/loadstart_event)
  - [pause 事件](/zh-CN/docs/Web/API/HTMLMediaElement/pause_event)
  - [playing 事件](/zh-CN/docs/Web/API/HTMLMediaElement/playing_event)
  - [play 事件](/zh-CN/docs/Web/API/HTMLMediaElement/play_event)
  - [progress 事件](/zh-CN/docs/Web/API/HTMLMediaElement/progress_event)
  - [ratechange 事件](/zh-CN/docs/Web/API/HTMLMediaElement/ratechange_event)
  - [seeked 事件](/zh-CN/docs/Web/API/HTMLMediaElement/seeked_event)
  - [seeking 事件](/zh-CN/docs/Web/API/HTMLMediaElement/seeking_event)
  - [stalled 事件](/zh-CN/docs/Web/API/HTMLMediaElement/stalled_event)
  - [suspend 事件](/zh-CN/docs/Web/API/HTMLMediaElement/suspend_event)
  - [timeupdate 事件](/zh-CN/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - [volumechange 事件](/zh-CN/docs/Web/API/HTMLMediaElement/volumechange_event)
  - [waiting 事件](/zh-CN/docs/Web/API/HTMLMediaElement/waiting_event)

- {{DOMxRef("HTMLSlotElement")}}

  - [slotchange 事件](/zh-CN/docs/Web/API/HTMLSlotElement/slotchange_event)

- {{DOMxRef("HTMLTrackElement")}}

  - [cuechange 事件](/zh-CN/docs/Web/API/HTMLTrackElement/cuechange_event)

- {{DOMxRef("HTMLVideoElement")}}

  - [enterpictureinpicture 事件](/zh-CN/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - [leavepictureinpicture 事件](/zh-CN/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)

- {{DOMxRef("IDBDatabase")}}

  - [abort 事件](/zh-CN/docs/Web/API/IDBTransaction/abort_event)
  - [close 事件](/zh-CN/docs/Web/API/IDBDatabase/close_event)
  - [error 事件](/zh-CN/docs/Web/API/IDBTransaction/error_event)
  - [versionchange 事件](/zh-CN/docs/Web/API/IDBDatabase/versionchange_event)

- {{DOMxRef("IDBOpenDBRequest")}}

  - [blocked 事件](/zh-CN/docs/Web/API/IDBOpenDBRequest/blocked_event)
  - [upgradeneeded 事件](/zh-CN/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)

- {{DOMxRef("IDBRequest")}}

  - [error 事件](/zh-CN/docs/Web/API/IDBRequest/error_event)
  - [success 事件](/zh-CN/docs/Web/API/IDBRequest/success_event)

- {{DOMxRef("IDBTransaction")}}

  - [abort 事件](/zh-CN/docs/Web/API/IDBTransaction/abort_event)
  - [complete 事件](/zh-CN/docs/Web/API/IDBTransaction/complete_event)
  - [error 事件](/zh-CN/docs/Web/API/IDBTransaction/error_event)

- {{DOMxRef("MediaDevices")}}

  - [devicechange 事件](/zh-CN/docs/Web/API/MediaDevices/devicechange_event)

- {{DOMxRef("MediaRecorder")}}

  - [error 事件](/zh-CN/docs/Web/API/MediaRecorder/error_event)

- {{DOMxRef("MediaStream")}}

  - [addtrack 事件](/zh-CN/docs/Web/API/MediaStream/addtrack_event)
  - [removetrack 事件](/zh-CN/docs/Web/API/MediaStream/removetrack_event)

- {{DOMxRef("MediaStreamTrack")}}

  - [ended 事件](/zh-CN/docs/Web/API/MediaStreamTrack/ended_event)
  - [mute 事件](/zh-CN/docs/Web/API/MediaStreamTrack/mute_event)
  - [unmute 事件](/zh-CN/docs/Web/API/MediaStreamTrack/unmute_event)

- {{DOMxRef("MessagePort")}}

  - [messageerror 事件](/zh-CN/docs/Web/API/MessagePort/messageerror_event)
  - [message 事件](/zh-CN/docs/Web/API/MessagePort/message_event)

- {{DOMxRef("OfflineAudioContext")}}

  - [complete 事件](/zh-CN/docs/Web/API/OfflineAudioContext/complete_event)

- {{DOMxRef("PaymentRequest")}}

  - [merchantvalidation 事件](/zh-CN/docs/Web/API/PaymentRequest/merchantvalidation_event)
  - [paymentmethodchange 事件](/zh-CN/docs/Web/API/PaymentRequest/paymentmethodchange_event)
  - [shippingaddresschange 事件](/zh-CN/docs/Web/API/PaymentRequest/shippingaddresschange_event)
  - [shippingoptionchange 事件](/zh-CN/docs/Web/API/PaymentRequest/shippingoptionchange_event)

- {{DOMxRef("PaymentResponse")}}

  - [payerdetailchange 事件](/zh-CN/docs/Web/API/PaymentResponse/payerdetailchange_event)

- {{DOMxRef("Performance")}}

  - [resourcetimingbufferfull 事件](/zh-CN/docs/Web/API/Performance/resourcetimingbufferfull_event)

- {{DOMxRef("PictureInPictureWindow")}}

  - [resize 事件](/zh-CN/docs/Web/API/PictureInPictureWindow/resize_event)

- {{DOMxRef("RTCDataChannel")}}

  - [bufferedamountlow 事件](/zh-CN/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - [close 事件](/zh-CN/docs/Web/API/RTCDataChannel/close_event)
  - [closing 事件](/zh-CN/docs/Web/API/RTCDataChannel/closing_event)
  - [error 事件](/zh-CN/docs/Web/API/RTCDataChannel/error_event)
  - [message 事件](/zh-CN/docs/Web/API/RTCDataChannel/message_event)
  - [open 事件](/zh-CN/docs/Web/API/RTCDataChannel/open_event)

- {{DOMxRef("RTCDtlsTransport")}}

  - [error 事件](/zh-CN/docs/Web/API/RTCDtlsTransport/error_event)

- {{DOMxRef("RTCDTMFSender")}}

  - [tonechange 事件](/zh-CN/docs/Web/API/RTCDTMFSender/tonechange_event)

- {{DOMxRef("RTCIceTransport")}}

  - [gatheringstatechange 事件](/zh-CN/docs/Web/API/RTCIceTransport/gatheringstatechange_event)
  - [selectedcandidatepairchange 事件](/zh-CN/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)
  - [statechange 事件](/zh-CN/docs/Web/API/RTCIceTransport/statechange_event)

- {{DOMxRef("RTCPeerConnection")}}

  - [addstream 事件](/zh-CN/docs/Web/API/RTCPeerConnection/addstream_event)
  - [connectionstatechange 事件](/zh-CN/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - [datachannel 事件](/zh-CN/docs/Web/API/RTCPeerConnection/datachannel_event)
  - [icecandidateerror 事件](/zh-CN/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - [icecandidate 事件](/zh-CN/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - [iceconnectionstatechange 事件](/zh-CN/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - [icegatheringstatechange 事件](/zh-CN/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - [negotiationneeded 事件](/zh-CN/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - [removestream 事件](/zh-CN/docs/Web/API/RTCPeerConnection/removestream_event)
  - [signalingstatechange 事件](/zh-CN/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - [track 事件](/zh-CN/docs/Web/API/RTCPeerConnection/track_event)

- {{DOMxRef("ScriptProcessorNode")}}

  - [audioprocess 事件](/zh-CN/docs/Web/API/ScriptProcessorNode/audioprocess_event)

- {{DOMxRef("ServiceWorkerContainer")}}

  - [message 事件](/zh-CN/docs/Web/API/ServiceWorkerContainer/message_event)

- {{DOMxRef("ServiceWorkerGlobalScope")}}

  - [activate 事件](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
  - [contentdelete 事件](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event)
  - [install 事件](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/install_event)
  - [message 事件](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/message_event)
  - [notificationclick 事件](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)
  - [pushsubscriptionchange 事件](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
  - [push 事件](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/push_event)

- {{DOMxRef("SharedWorkerGlobalScope")}}

  - [connect 事件](/zh-CN/docs/Web/API/SharedWorkerGlobalScope/connect_event)

- {{DOMxRef("SpeechRecognition")}}

  - [audioend 事件](/zh-CN/docs/Web/API/SpeechRecognition/audioend_event)
  - [audiostart 事件](/zh-CN/docs/Web/API/SpeechRecognition/audiostart_event)
  - [end 事件](/zh-CN/docs/Web/API/SpeechRecognition/end_event)
  - [error 事件](/zh-CN/docs/Web/API/SpeechRecognition/error_event)
  - [nomatch 事件](/zh-CN/docs/Web/API/SpeechRecognition/nomatch_event)
  - [result 事件](/zh-CN/docs/Web/API/SpeechRecognition/result_event)
  - [soundend 事件](/zh-CN/docs/Web/API/SpeechRecognition/soundend_event)
  - [soundstart 事件](/zh-CN/docs/Web/API/SpeechRecognition/soundstart_event)
  - [speechend 事件](/zh-CN/docs/Web/API/SpeechRecognition/speechend_event)
  - [speechstart 事件](/zh-CN/docs/Web/API/SpeechRecognition/speechstart_event)
  - [start 事件](/zh-CN/docs/Web/API/SpeechRecognition/start_event)

- {{DOMxRef("SpeechSynthesis")}}

  - [voiceschanged 事件](/zh-CN/docs/Web/API/SpeechSynthesis/voiceschanged_event)

- {{DOMxRef("SpeechSynthesisUtterance")}}

  - [boundary 事件](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/boundary_event)
  - [end 事件](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/end_event)
  - [error 事件](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/error_event)
  - [mark 事件](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/mark_event)
  - [pause 事件](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/pause_event)
  - [resume 事件](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/resume_event)
  - [start 事件](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/start_event)

- {{DOMxRef("SVGAnimationElement")}}

  - [beginEvent 事件](/zh-CN/docs/Web/API/SVGAnimationElement/beginEvent_event)
  - [endEvent 事件](/zh-CN/docs/Web/API/SVGAnimationElement/endEvent_event)
  - [repeatEvent 事件](/zh-CN/docs/Web/API/SVGAnimationElement/repeatEvent_event)

- {{DOMxRef("SVGElement")}}

  - [abort 事件](/zh-CN/docs/Web/API/SVGElement/abort_event)
  - [error 事件](/zh-CN/docs/Web/API/SVGElement/error_event)
  - [load 事件](/zh-CN/docs/Web/API/SVGElement/load_event)
  - [resize 事件](/zh-CN/docs/Web/API/SVGElement/resize_event)
  - [scroll 事件](/zh-CN/docs/Web/API/SVGElement/scroll_event)
  - [unload 事件](/zh-CN/docs/Web/API/SVGElement/unload_event)

- {{DOMxRef("SVGGraphicsElement")}}

  - [copy 事件](/zh-CN/docs/Web/API/SVGGraphicsElement/copy_event)
  - [cut 事件](/zh-CN/docs/Web/API/SVGGraphicsElement/cut_event)
  - [paste 事件](/zh-CN/docs/Web/API/SVGGraphicsElement/paste_event)

- {{DOMxRef("TextTrack")}}

  - [cuechange 事件](/zh-CN/docs/Web/API/TextTrack/cuechange_event)

- {{DOMxRef("TextTrackList")}}

  - [addtrack 事件](/zh-CN/docs/Web/API/TextTrackList/addtrack_event)
  - [change 事件](/zh-CN/docs/Web/API/TextTrackList/change_event)
  - [removeTrack 事件](/zh-CN/docs/Web/API/TextTrackList/removeTrack_event)

- {{DOMxRef("VideoTrackList")}}

  - [addtrack 事件](/zh-CN/docs/Web/API/VideoTrackList/addtrack_event)
  - [change 事件](/zh-CN/docs/Web/API/VideoTrackList/change_event)
  - [removetrack 事件](/zh-CN/docs/Web/API/VideoTrackList/removetrack_event)

- {{DOMxRef("VisualViewport")}}

  - [resize 事件](/zh-CN/docs/Web/API/VisualViewport/resize_event)
  - [scroll 事件](/zh-CN/docs/Web/API/VisualViewport/scroll_event)

- {{DOMxRef("WebSocket")}}

  - [close 事件](/zh-CN/docs/Web/API/WebSocket/close_event)
  - [error 事件](/zh-CN/docs/Web/API/WebSocket/error_event)
  - [message 事件](/zh-CN/docs/Web/API/WebSocket/message_event)
  - [open 事件](/zh-CN/docs/Web/API/WebSocket/open_event)

- {{DOMxRef("Window")}}

  - [afterprint 事件](/zh-CN/docs/Web/API/Window/afterprint_event)
  - [animationcancel 事件](/zh-CN/docs/Web/API/Window/animationcancel_event)
  - [animationend 事件](/zh-CN/docs/Web/API/Window/animationend_event)
  - [animationiteration 事件](/zh-CN/docs/Web/API/Window/animationiteration_event)
  - [animationstart 事件](/zh-CN/docs/Web/API/Window/animationstart_event)
  - [appinstalled 事件](/zh-CN/docs/Web/API/Window/appinstalled_event)
  - [beforeprint 事件](/zh-CN/docs/Web/API/Window/beforeprint_event)
  - [beforeunload 事件](/zh-CN/docs/Web/API/Window/beforeunload_event)
  - [blur 事件](/zh-CN/docs/Web/API/Window/blur_event)
  - [copy 事件](/zh-CN/docs/Web/API/Window/copy_event)
  - [cut 事件](/zh-CN/docs/Web/API/Window/cut_event)
  - [devicemotion 事件](/zh-CN/docs/Web/API/Window.devicemotion_event)
  - [deviceorientation 事件](/zh-CN/docs/Web/API/Window.deviceorientation_event)
  - [error 事件](/zh-CN/docs/Web/API/Window/error_event)
  - [focus 事件](/zh-CN/docs/Web/API/Window/focus_event)
  - [gamepadconnected 事件](/zh-CN/docs/Web/API/Window/gamepadconnected_event)
  - [gamepaddisconnected 事件](/zh-CN/docs/Web/API/Window/gamepaddisconnected_event)
  - [hashchange 事件](/zh-CN/docs/Web/API/Window/hashchange_event)
  - [languagechange 事件](/zh-CN/docs/Web/API/Window/languagechange_event)
  - [load 事件](/zh-CN/docs/Web/API/Window/load_event)
  - [messageerror 事件](/zh-CN/docs/Web/API/Window/messageerror_event)
  - [message 事件](/zh-CN/docs/Web/API/Window/message_event)
  - [offline 事件](/zh-CN/docs/Web/API/Window/offline_event)
  - [online 事件](/zh-CN/docs/Web/API/Window/online_event)
  - [orientationchange 事件](/zh-CN/docs/Web/API/Window/orientationchange_event)
  - [pagehide 事件](/zh-CN/docs/Web/API/Window/pagehide_event)
  - [pageshow 事件](/zh-CN/docs/Web/API/Window/pageshow_event)
  - [paste 事件](/zh-CN/docs/Web/API/Window/paste_event)
  - [popstate 事件](/zh-CN/docs/Web/API/Window/popstate_event)
  - [rejectionhandled 事件](/zh-CN/docs/Web/API/Window/rejectionhandled_event)
  - [resize 事件](/zh-CN/docs/Web/API/Window/resize_event)
  - [storage 事件](/zh-CN/docs/Web/API/Window/storage_event)
  - [transitioncancel 事件](/zh-CN/docs/Web/API/Window/transitioncancel_event)
  - [transitionend 事件](/zh-CN/docs/Web/API/Window/transitionend_event)
  - [transitionrun 事件](/zh-CN/docs/Web/API/Window/transitionrun_event)
  - [transitionstart 事件](/zh-CN/docs/Web/API/Window/transitionstart_event)
  - [unhandledrejection 事件](/zh-CN/docs/Web/API/Window/unhandledrejection_event)
  - [unload 事件](/zh-CN/docs/Web/API/Window/unload_event)
  - [vrdisplayactivate 事件](/zh-CN/docs/Web/API/Window/vrdisplayactivate_event)
  - [vrdisplayblur 事件](/zh-CN/docs/Web/API/Window/vrdisplayblur_event)
  - [vrdisplayconnect 事件](/zh-CN/docs/Web/API/Window/vrdisplayconnect_event)
  - [vrdisplaydeactivate 事件](/zh-CN/docs/Web/API/Window/vrdisplaydeactivate_event)
  - [vrdisplaydisconnect 事件](/zh-CN/docs/Web/API/Window/vrdisplaydisconnect_event)
  - [vrdisplayfocus 事件](/zh-CN/docs/Web/API/Window/vrdisplayfocus_event)
  - [vrdisplaypointerrestricted 事件](/zh-CN/docs/Web/API/Window/vrdisplaypointerrestricted_event)
  - [vrdisplaypointerunrestricted 事件](/zh-CN/docs/Web/API/Window/vrdisplaypointerunrestricted_event)
  - [vrdisplaypresentchange 事件](/zh-CN/docs/Web/API/Window/vrdisplaypresentchange_event)

- {{DOMxRef("Worker")}}

  - [messageerror 事件](/zh-CN/docs/Web/API/Worker/messageerror_event)
  - [message 事件](/zh-CN/docs/Web/API/Worker/message_event)

- {{DOMxRef("WorkerGlobalScope")}}

  - [languagechange 事件](/zh-CN/docs/Web/API/WorkerGlobalScope/languagechange_event)

- {{DOMxRef("XMLHttpRequest")}}

  - [abort 事件](/zh-CN/docs/Web/API/XMLHttpRequest/abort_event)
  - [error 事件](/zh-CN/docs/Web/API/XMLHttpRequest/error_event)
  - [loadend 事件](/zh-CN/docs/Web/API/XMLHttpRequest/loadend_event)
  - [loadstart 事件](/zh-CN/docs/Web/API/XMLHttpRequest/loadstart_event)
  - [load 事件](/zh-CN/docs/Web/API/XMLHttpRequest/load_event)
  - [progress 事件](/zh-CN/docs/Web/API/XMLHttpRequest/progress_event)
  - [timeout 事件](/zh-CN/docs/Web/API/XMLHttpRequest/timeout_event)

- {{DOMxRef("XRReferenceSpace")}}

  - [reset 事件](/zh-CN/docs/Web/API/XRReferenceSpace/reset_event)

- {{DOMxRef("XRSession")}}

  - [end 事件](/zh-CN/docs/Web/API/XRSession/end_event)
  - [inputsourceschange 事件](/zh-CN/docs/Web/API/XRSession/inputsourceschange_event)
  - [selectend 事件](/zh-CN/docs/Web/API/XRSession/selectend_event)
  - [selectstart 事件](/zh-CN/docs/Web/API/XRSession/selectstart_event)
  - [select 事件](/zh-CN/docs/Web/API/XRSession/select_event)
  - [squeezeend 事件](/zh-CN/docs/Web/API/XRSession/squeezeend_event)
  - [squeezestart 事件](/zh-CN/docs/Web/API/XRSession/squeezestart_event)
  - [squeeze 事件](/zh-CN/docs/Web/API/XRSession/squeeze_event)
  - [visibilitychange 事件](/zh-CN/docs/Web/API/XRSession/visibilitychange_event)

- {{DOMxRef("XRSystem")}}

  - [devicechange 事件](/zh-CN/docs/Web/API/XRSystem/devicechange_event)

## 规范

{{Specifications}}

<section id="Quick_links">
  <ol>
    <li><a href="/zh-CN/docs/Learn/JavaScript/Building_blocks/Events">事件介绍</a></li>
  </ol>{{ListSubpages}}
</section>
