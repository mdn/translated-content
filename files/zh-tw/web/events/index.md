---
title: Event reference
slug: Web/Events
---

事件為一些有趣事情，發生後會被傳出以通知 code。每個事件被表示為一個根據 {{domxref("Event")}} 所定義的物件，且可能會有額外自訂欄位與(或)函式來描述發生了什麼事。事件可以表示從使用者互動到自動通知等渲染 model 所有的事情。

This article offers a list of events that can be sent; some are standard events defined in official specifications, while others are events used internally by specific browsers; for example, Mozilla-specific events are listed so that [add-ons](/zh-TW/docs/Mozilla/Add-ons) can use them to interact with the browser.no

## 事件索引

<table class="standard-table">
  <tbody>
    <tr>
      <th>事件類型</th>
      <th style="width: 50%">描述</th>
      <th>文件</th>
    </tr>
    <tr>
      <td>Animation</td>
      <td>
        <p>
          Events related to the
          <a href="/zh-TW/docs/Web/API/Web_Animations_API">Web Animation API</a
          >.
        </p>
        <p>
          Used to respond to changes in animation status (e.g. when an animation
          starts or ends).
        </p>
      </td>
      <td>
        Animation events fired on
        <a href="/zh-TW/docs/Web/API/Document#animation_events"
          ><code>Document</code></a
        >,
        <a href="/zh-TW/docs/Web/API/Window#animation_events"
          ><code>Window</code></a
        >,
        <a href="/zh-TW/docs/Web/API/HTMLElement#animation_events"
          ><code>HTMLElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Asynchronous data fetching</td>
      <td><p>Events related to the fetching data.</p></td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/AbortSignal#events"
          ><code>AbortSignal</code></a
        >,
        <a href="/zh-TW/docs/Web/API/XMLHttpRequest#events"
          ><code>XMLHttpRequest</code></a
        >,
        <a href="/zh-TW/docs/Web/API/FileReader#events"
          ><code>FileReader</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Clipboard</td>
      <td>
        <p>
          Events related to the
          <a href="/zh-TW/docs/Web/API/Clipboard_API">Clipboard API</a>.
        </p>
        <p>Used to notify when content is cut, copied, or pasted.</p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/Document#clipboard_events"
          ><code>Document</code></a
        >,
        <a href="/zh-TW/docs/Web/API/Element#clipboard_events"
          ><code>Element</code></a
        >,
        <a href="/zh-TW/docs/Web/API/Window#clipboard_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Composition</td>
      <td>
        <p>
          Events related to composition; entering text "indirectly" (rather than
          using normal keyboard presses).
        </p>
        <p>
          For example, text entered via a speech to text engine, or using
          special key combinations that modify keyboard presses to represent new
          characters in another language.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/Element#composition_events"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>CSS transition</td>
      <td>
        <p>
          Events related to
          <a href="/zh-TW/docs/Web/CSS/CSS_transitions">CSS Transitions</a>.
        </p>
        <p>
          Provides notification events when CSS transitions start, stop, are
          cancelled, etc.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/Document#transition_events"
          ><code>Document</code></a
        >,
        <a href="/zh-TW/docs/Web/API/HTMLElement#transition_events"
          ><code>HTMLElement</code></a
        >,
        <a href="/zh-TW/docs/Web/API/Window#transition_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Database</td>
      <td>
        <p>
          Events related to database operations: opening, closing, transactions,
          errors, etc.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/IDBDatabase#events"
          ><code>IDBDatabase</code></a
        >,
        <a href="/zh-TW/docs/Web/API/IDBOpenDBRequest#events"
          ><code>IDBOpenDBRequest</code></a
        >,
        <a href="/zh-TW/docs/Web/API/IDBRequest#events"
          ><code>IDBRequest</code></a
        >,
        <a href="/zh-TW/docs/Web/API/IDBTransaction#events"
          ><code>IDBTransaction</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>DOM mutation</td>
      <td>
        <p>
          Events related to modifications to the Document Object Model (DOM)
          hierarchy and nodes.
        </p>
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warning:</strong>
            <a href="/zh-TW/docs/Web/API/MutationEvent">Mutation Events</a> are
            deprecated.
            <a href="/zh-TW/docs/Web/API/MutationObserver"
              >Mutation Observers</a
            >
            should be used instead.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>Drag'n'drop, Wheel</td>
      <td>
        <p>
          Events related to using the
          <a href="/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API"
            >HTML Drag and Drop API</a
          >
          and <a href="/zh-TW/docs/Web/API/WheelEvent">wheel events</a>.
        </p>
        <p>
          Drag and Wheel events are derived from mouse events. While they are
          fired when using mouse wheel or drag/drop, they may also be used with
          other appropriate hardware.
        </p>
      </td>
      <td>
        <p>
          Drag events fired on
          <a href="/zh-TW/docs/Web/API/Document#drag_drop_events"
            ><code>Document</code></a
          >
        </p>
        <p>
          Wheel events fired on
          <a href="/zh-TW/docs/Web/API/Document/wheel_event"
            ><code>Document</code></a
          >
          and
          <a href="/zh-TW/docs/Web/API/Element/wheel_event"
            ><code>Element</code></a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>Focus</td>
      <td><p>Events related to elements gaining and losing focus.</p></td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/Element#focus_events"
          ><code>Element</code></a
        >,
        <a href="/zh-TW/docs/Web/API/Window#focus_events"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Form</td>
      <td>
        <p>Events related to forms being constructed, reset and submitted.</p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/HTMLFormElement#events"
          ><code>HTMLFormElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Fullscreen</td>
      <td>
        <p>
          Events related to the
          <a href="/zh-TW/docs/Web/API/Fullscreen_API">Fullscreen API</a>.
        </p>
        <p>
          Used to notify when the transitioning between full screen and windowed
          modes, and also of errors occurring during this transition.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/Document#fullscreen_events"
          ><code>Document</code></a
        >,
        <a href="/zh-TW/docs/Web/API/Element#fullscreen_events"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Gamepad</td>
      <td>
        <p>
          Events related to the
          <a href="/zh-TW/docs/Web/API/Gamepad_API">Gamepad API</a>.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/Window#gamepad_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Gestures</td>
      <td>
        <p>
          <a href="/zh-TW/docs/Web/API/Touch_events">Touch events</a> are
          recommended for implementing gestures.
        </p>
      </td>
      <td>
        <p>
          Events fired on
          <a href="/zh-TW/docs/Web/API/Document#touch_events"
            ><code>Document</code></a
          >,
          <a href="/zh-TW/docs/Web/API/Element#touch_events"
            ><code>Element</code></a
          >.
        </p>
        <p>In addition there are a number of non-standard gesture events:</p>
        <ul>
          <li>
            Non-standard WebKit specific events on
            <a href="/zh-TW/docs/Web/API/Element#touch_events"
              ><code>Element</code></a
            >:
            <a href="/zh-TW/docs/Web/API/Element/gesturestart_event"
              ><code>gesturestart</code> event</a
            >,
            <a href="/zh-TW/docs/Web/API/Element/gesturechange_event"
              ><code>gesturechange</code> event</a
            >,
            <a href="/zh-TW/docs/Web/API/Element/gestureend_event"
              ><code>gestureend</code> event</a
            >.
          </li>
          <li>
            Non-standard IE specific events on
            <a href="/zh-TW/docs/Web/API/Element#touch_events"
              ><code>Element</code></a
            >:
            <a href="/zh-TW/docs/Web/API/Element/MSGestureStart_event"
              ><code>MSGestureStart</code></a
            >,
            <a href="/zh-TW/docs/Web/API/Element/MSGestureChange_event"
              ><code>MSGestureChange</code></a
            >,
            <a href="/zh-TW/docs/Web/API/Element/MSGestureEnd_event"
              ><code>MSGestureEnd</code></a
            >,
            <a href="/zh-TW/docs/Web/API/Element/MSGestureHold_event"
              ><code>MSGestureHold</code></a
            >,
            <a href="/zh-TW/docs/Web/API/Element/MSGestureTap_event"
              ><code>MSGestureTap</code></a
            >.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>History</td>
      <td>
        <p>
          Events related to the
          <a href="/zh-TW/docs/Web/API/History_API">History API</a>.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/Window#history_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>HTML element content display management</td>
      <td>
        <p>
          Events related to changing the state of a display or textual element.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/HTMLDetailsElement#events"
          ><code>HTMLDetailsElement</code></a
        >,
        <a href="/zh-TW/docs/Web/API/HTMLDialogElement#events"
          ><code>HTMLDialogElement</code></a
        >,
        <a href="/zh-TW/docs/Web/API/HTMLSlotElement#events"
          ><code>HTMLSlotElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Inputs</td>
      <td>
        <p>
          Events related to HTML input elements e.g.
          {{HTMLElement("input")}}, {{HTMLElement("select")}}, or
          {{HTMLElement("textarea")}}.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/HTMLElement#input_events"
          ><code>HTMLElement</code></a
        >,
        <a href="/zh-TW/docs/Web/API/HTMLInputElement#events"
          ><code>HTMLInputElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Keyboard</td>
      <td>
        <p>
          Events related to using a
          <a href="/zh-TW/docs/Web/API/KeyboardEvent">keyboard</a>.
        </p>
        <p>Used to notify when keys are moved up, down, or just pressed.</p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/Document#keyboard_events"
          ><code>Document</code></a
        >,
        <a href="/zh-TW/docs/Web/API/Element#keyboard_events"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Loading/unloading documents</td>
      <td><p>Events related to loading and unloading documents.</p></td>
      <td>
        <p>
          Events fired on
          <a href="/zh-TW/docs/Web/API/Document#load_unload_events"
            ><code>Document</code></a
          >
          and
          <a href="/zh-TW/docs/Web/API/Window#load_unload_events"
            ><code>Window</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Manifests</td>
      <td>
        <p>
          Events related to installation of
          <a href="/zh-TW/docs/Web/Manifest">progressive web app manifests</a>.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/Window#manifest_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr id="media">
      <td>Media</td>
      <td>
        <p>
          Events related to media usage (including the
          <a href="/zh-TW/docs/Web/API/Media_Capture_and_Streams_API#events"
            >Media Capture and Streams API</a
          >,
          <a href="/zh-TW/docs/Web/API/Web_Audio_API#events">Web Audio API</a>,
          <a href="/zh-TW/docs/Web/API/Picture-in-Picture_API#events"
            >Picture-in-Picture API</a
          >, etc.).
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/ScriptProcessorNode#events"
          ><code>ScriptProcessorNode</code></a
        >,
        <a href="/zh-TW/docs/Web/API/HTMLMediaElement#events"
          ><code>HTMLMediaElement</code></a
        >,
        <a href="/zh-TW/docs/Web/API/AudioTrackList#events"
          ><code>AudioTrackList</code></a
        >,
        <a href="/zh-TW/docs/Web/API/AudioScheduledSourceNode#events"
          ><code>AudioScheduledSourceNode</code></a
        >,
        <a href="/zh-TW/docs/Web/API/MediaRecorder#events"
          ><code>MediaRecorder</code></a
        >,
        <a href="/zh-TW/docs/Web/API/MediaStream#events"
          ><code>MediaStream</code></a
        >,
        <a href="/zh-TW/docs/Web/API/MediaStreamTrack"
          ><code>MediaStreamTrack</code></a
        >,
        <a href="/zh-TW/docs/Web/API/VideoTrackList#events"
          ><code>VideoTrackList</code></a
        >,
        <a href="/zh-TW/docs/Web/API/HTMLTrackElement#events"
          ><code>HTMLTrackElement</code></a
        >,
        <a href="/zh-TW/docs/Web/API/OfflineAudioContext#events"
          ><code>OfflineAudioContext</code></a
        >,
        <a href="/zh-TW/docs/Web/API/TextTrack#events"><code>TextTrack</code></a
        >,
        <a href="/zh-TW/docs/Web/API/TextTrackList#events"
          ><code>TextTrackList</code></a
        >,
        <a href="/zh-TW/docs/Web/HTML/Element/audio#events">Element/audio</a>,
        <a href="/zh-TW/docs/Web/HTML/Element/video#events">Element/video</a>.
      </td>
    </tr>
    <tr>
      <td>Messaging</td>
      <td>
        <p>
          Events related to a window receiving a message from another browsing
          context.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/Window#messaging_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Mouse</td>
      <td>
        <p>
          Events related to using a
          <a href="/zh-TW/docs/Web/API/MouseEvent">computer mouse</a>.
        </p>
        <p>
          Used to notify when the mouse is clicked, doubleclicked, up and down
          events, right-click, movement in and out of an element, text
          selection, etc.
        </p>
        <p>
          Pointer events provide a hardware-agnostic alternative to mouse
          events. Drag and Wheel events are derived from mouse events.
        </p>
      </td>
      <td>
        Mouse events fired on
        <a href="/zh-TW/docs/Web/API/Element#mouse_events"
          ><code>Element</code></a
        >
      </td>
    </tr>
    <tr>
      <td>Network/Connection</td>
      <td><p>Events related to gaining and losing network connection.</p></td>
      <td>
        <p>
          Events fired on
          <a href="/zh-TW/docs/Web/API/Window#connection_events"
            ><code>Window</code></a
          >.
        </p>
        <p>
          Events fired on
          <a href="/zh-TW/docs/Web/API/NetworkInformation#event_handler"
            ><code>NetworkInformation</code></a
          >
          (<a href="/zh-TW/docs/Web/API/Network_Information_API"
            >Network Information API</a
          >).
        </p>
      </td>
    </tr>
    <tr>
      <td>Payments</td>
      <td>
        <p>
          Events related to the
          <a href="/zh-TW/docs/Web/API/Payment_Request_API"
            >Payment Request API</a
          >.
        </p>
      </td>
      <td>
        <p>
          Events fired on
          <a href="/zh-TW/docs/Web/API/PaymentRequest#events"
            ><code>PaymentRequest</code></a
          >,
          <a href="/zh-TW/docs/Web/API/PaymentResponse#events"
            ><code>PaymentResponse</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Performance</td>
      <td>
        <p>
          Events related to
          <a href="/zh-TW/docs/Web/API/Performance_API"
            >High Resolution Time API</a
          >,
          <a href="/zh-TW/docs/Web/API/Performance_Timeline"
            >Performance Timeline API</a
          >,
          <a href="/zh-TW/docs/Web/API/Navigation_timing_API"
            >Navigation Timing API</a
          >, <a href="/zh-TW/docs/Web/API/User_Timing_API">User Timing API</a>,
          and
          <a href="/zh-TW/docs/Web/API/Resource_Timing_API"
            >Resource Timing API</a
          >.
        </p>
      </td>
      <td>
        <p>
          Events fired on
          <a href="/zh-TW/docs/Web/API/Performance#events"
            ><code>Performance</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Pointer</td>
      <td>
        <p>
          Events related to the
          <a href="/zh-TW/docs/Web/API/Pointer_events">Pointer Events API</a>.
        </p>
        <p>
          Provides hardware-agnostic notification from pointing devices
          including Mouse, Touch, pen/stylus.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/Document#pointer_events"
          ><code>Document</code></a
        >,
        <a href="/zh-TW/docs/Web/API/HTMLElement#pointer_events"
          ><code>HTMLElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Print</td>
      <td><p>Events related to printing.</p></td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/Window#print_events"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Promise rejection</td>
      <td>
        <p>
          Events sent to the global script context when any JavaScript promise
          is rejected.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/Window#promise_rejection_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Sockets</td>
      <td>
        <p>
          Events related to the
          <a href="/zh-TW/docs/Web/API/WebSockets_API">WebSockets API</a>.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/WebSocket#events"><code>Websocket</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>SVG</td>
      <td><p>Events related to SVG images.</p></td>
      <td>
        <p>
          Events fired on
          <a href="/zh-TW/docs/Web/API/SVGElement#events"
            ><code>SVGElement</code></a
          >,
          <a href="/zh-TW/docs/Web/API/SVGAnimationElement#events"
            ><code>SVGAnimationElement</code></a
          >,
          <a href="/zh-TW/docs/Web/API/SVGGraphicsElement#events"
            ><code>SVGGraphicsElement</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Text selection</td>
      <td>
        <p>
          <a href="/zh-TW/docs/Web/API/Selection">Selection API</a> events
          related to selecting text.
        </p>
      </td>
      <td>
        <p>
          Event (<code>selectionchange</code>) fired on
          {{domxref("HTMLTextAreaElement/selectionchange_event", "HTMLTextAreaElement")}},
          {{domxref("HTMLInputElement/selectionchange_event", "HTMLInputElement")}}.
        </p>
      </td>
    </tr>
    <tr>
      <td>Touch</td>
      <td>
        <p>
          Events related to the
          <a href="/zh-TW/docs/Web/API/Touch_events">Touch Events API</a>.
        </p>
        <p>
          Provides notification events from interacting with a touch sensitive
          screen (i.e. using a finger or stylus). Not related to the
          <a href="/zh-TW/docs/Web/API/Force_Touch_events#events"
            >Force Touch API</a
          >.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/Document#touch_events"
          ><code>Document</code></a
        >,
        <a href="/zh-TW/docs/Web/API/Element#touch_events"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Virtual reality</td>
      <td>
        <p>
          Events related to the
          <a href="/zh-TW/docs/Web/API/WebXR_Device_API">WebXR Device API</a>.
        </p>
        <div class="notecard warning">
          <p>
            <strong>Warning:</strong> The
            <a href="/zh-TW/docs/Web/API/WebVR_API">WebVR API</a> (and
            associated
            <a href="/zh-TW/docs/Web/API/Window#webvr_events"
              ><code>Window</code> events</a
            >) are deprecated.
          </p>
        </div>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/XRSystem#events"><code>XRSystem</code></a
        >,
        <a href="/zh-TW/docs/Web/API/XRSession#events"><code>XRSession</code></a
        >,
        <a href="/zh-TW/docs/Web/API/XRReferenceSpace#events"
          ><code>XRReferenceSpace</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>RTC (real time communication)</td>
      <td>
        <p>
          Events related to the
          <a href="/zh-TW/docs/Web/API/WebRTC_API">WebRTC API</a>.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/RTCDataChannel#events"
          ><code>RTCDataChannel</code></a
        >,
        <a href="/zh-TW/docs/Web/API/RTCDTMFSender#events"
          ><code>RTCDTMFSender</code></a
        >,
        <a href="/zh-TW/docs/Web/API/RTCIceTransport#events"
          ><code>RTCIceTransport</code></a
        >,
        <a href="/zh-TW/docs/Web/API/RTCPeerConnection#events"
          ><code>RTCPeerConnection</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Server-sent events</td>
      <td>
        <p>
          Events related to the
          <a href="/zh-TW/docs/Web/API/Server-sent_events"
            >server sent events API</a
          >.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/EventSource#events"
          ><code>EventSource</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Speech</td>
      <td>
        <p>
          Events related to the
          <a href="/zh-TW/docs/Web/API/Web_Speech_API">Web Speech API</a>.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/SpeechSynthesisUtterance#events"
          ><code>SpeechSynthesisUtterance</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Workers</td>
      <td>
        <p>
          Events related to the
          <a href="/zh-TW/docs/Web/API/Web_Workers_API">Web Workers API</a>,
          <a href="/zh-TW/docs/Web/API/Service_Worker_API">Service Worker API</a
          >,
          <a href="/zh-TW/docs/Web/API/Broadcast_Channel_API"
            >Broadcast Channel API</a
          >, and
          <a href="/zh-TW/docs/Web/API/Channel_Messaging_API"
            >Channel Messaging API</a
          >.
        </p>
        <p>
          Used to respond to new messages and message sending errors. Service
          workers can also be notified of other events, including push
          notifications, users clicking on displayed notifications, that push
          subscription has been invalidated, deletion of items from the content
          index, etc.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/zh-TW/docs/Web/API/ServiceWorkerGlobalScope#events"
          ><code>ServiceWorkerGlobalScope</code></a
        >,
        <a href="/zh-TW/docs/Web/API/DedicatedWorkerGlobalScope#events"
          ><code>DedicatedWorkerGlobalScope</code></a
        >,
        <a href="/zh-TW/docs/Web/API/SharedWorkerGlobalScope#events"
          ><code>SharedWorkerGlobalScope</code></a
        >,
        <a href="/zh-TW/docs/Web/API/WorkerGlobalScope#events"
          ><code>WorkerGlobalScope</code></a
        >, <a href="/zh-TW/docs/Web/API/Worker#events"><code>Worker</code></a
        >,
        <a href="/zh-TW/docs/Web/API/WorkerGlobalScope#events"
          ><code>WorkerGlobalScope</code></a
        >,
        <a href="/zh-TW/docs/Web/API/BroadcastChannel#events"
          ><code>BroadcastChannel</code></a
        >,
        <a href="/zh-TW/docs/Web/API/MessagePort#events"
          ><code>MessagePort</code></a
        >.
      </td>
    </tr>
  </tbody>
</table>

## 事件分類

- {{DOMxRef("AbortSignal")}}

  - [abort 事件](/zh-TW/docs/Web/API/AbortSignal/abort_event)

- {{DOMxRef("AudioScheduledSourceNode")}}

  - [ended 事件](/zh-TW/docs/Web/API/AudioScheduledSourceNode/ended_event)

- {{DOMxRef("AudioTrackList")}}

  - [addtrack 事件](/zh-TW/docs/Web/API/AudioTrackList/addtrack_event)
  - [change 事件](/zh-TW/docs/Web/API/AudioTrackList/change_event)
  - [removetrack 事件](/zh-TW/docs/Web/API/AudioTrackList/removetrack_event)

- {{DOMxRef("BroadcastChannel")}}

  - [messageerror 事件](/zh-TW/docs/Web/API/BroadcastChannel/messageerror_event)
  - [message 事件](/zh-TW/docs/Web/API/BroadcastChannel/message_event)

- {{DOMxRef("DedicatedWorkerGlobalScope")}}

  - [messageerror 事件](/zh-TW/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
  - [message 事件](/zh-TW/docs/Web/API/DedicatedWorkerGlobalScope/message_event)

- {{DOMxRef("Document")}}

  - [animationcancel 事件](/zh-TW/docs/Web/API/Document/animationcancel_event)
  - [animationend 事件](/zh-TW/docs/Web/API/Document/animationend_event)
  - [animationiteration 事件](/zh-TW/docs/Web/API/Document/animationiteration_event)
  - [animationstart 事件](/zh-TW/docs/Web/API/Document/animationstart_event)
  - [copy 事件](/zh-TW/docs/Web/API/Document/copy_event)
  - [cut 事件](/zh-TW/docs/Web/API/Document/cut_event)
  - [DOMContentLoaded 事件](/zh-TW/docs/Web/API/Document/DOMContentLoaded_event)
  - [dragend 事件](/zh-TW/docs/Web/API/Document/dragend_event)
  - [dragenter 事件](/zh-TW/docs/Web/API/Document/dragenter_event)
  - [dragleave 事件](/zh-TW/docs/Web/API/Document/dragleave_event)
  - [dragover 事件](/zh-TW/docs/Web/API/Document/dragover_event)
  - [dragstart 事件](/zh-TW/docs/Web/API/Document/dragstart_event)
  - [drag 事件](/zh-TW/docs/Web/API/Document/drag_event)
  - [drop 事件](/zh-TW/docs/Web/API/Document/drop_event)
  - [fullscreenchange 事件](/zh-TW/docs/Web/API/Document/fullscreenchange_event)
  - [fullscreenerror 事件](/zh-TW/docs/Web/API/Document/fullscreenerror_event)
  - [gotpointercapture 事件](/zh-TW/docs/Web/API/Document/gotpointercapture_event)
  - [keydown 事件](/zh-TW/docs/Web/API/Document/keydown_event)
  - [keypress 事件](/zh-TW/docs/Web/API/Document/keypress_event)
  - [keyup 事件](/zh-TW/docs/Web/API/Document/keyup_event)
  - [lostpointercapture 事件](/zh-TW/docs/Web/API/Document/lostpointercapture_event)
  - [paste 事件](/zh-TW/docs/Web/API/Document/paste_event)
  - [pointercancel 事件](/zh-TW/docs/Web/API/Document/pointercancel_event)
  - [pointerdown 事件](/zh-TW/docs/Web/API/Document/pointerdown_event)
  - [pointerenter 事件](/zh-TW/docs/Web/API/Document/pointerenter_event)
  - [pointerleave 事件](/zh-TW/docs/Web/API/Document/pointerleave_event)
  - [pointerlockchange 事件](/zh-TW/docs/Web/API/Document/pointerlockchange_event)
  - [pointerlockerror 事件](/zh-TW/docs/Web/API/Document/pointerlockerror_event)
  - [pointermove 事件](/zh-TW/docs/Web/API/Document/pointermove_event)
  - [pointerout 事件](/zh-TW/docs/Web/API/Document/pointerout_event)
  - [pointerover 事件](/zh-TW/docs/Web/API/Document/pointerover_event)
  - [pointerup 事件](/zh-TW/docs/Web/API/Document/pointerup_event)
  - [readystatechange 事件](/zh-TW/docs/Web/API/Document/readystatechange_event)
  - [scroll 事件](/zh-TW/docs/Web/API/Document/scroll_event)
  - [selectionchange 事件](/zh-TW/docs/Web/API/Document/selectionchange_event)
  - [touchcancel 事件](/zh-TW/docs/Web/API/Document/touchcancel_event)
  - [touchend 事件](/zh-TW/docs/Web/API/Document/touchend_event)
  - [touchmove 事件](/zh-TW/docs/Web/API/Document/touchmove_event)
  - [touchstart 事件](/zh-TW/docs/Web/API/Document/touchstart_event)
  - [transitioncancel 事件](/zh-TW/docs/Web/API/Document/transitioncancel_event)
  - [transitionend 事件](/zh-TW/docs/Web/API/Document/transitionend_event)
  - [transitionrun 事件](/zh-TW/docs/Web/API/Document/transitionrun_event)
  - [transitionstart 事件](/zh-TW/docs/Web/API/Document/transitionstart_event)
  - [visibilitychange 事件](/zh-TW/docs/Web/API/Document/visibilitychange_event)
  - [wheel 事件](/zh-TW/docs/Web/API/Document/wheel_event)

- {{DOMxRef("Element")}}

  - [animationcancel 事件](/zh-TW/docs/Web/API/Element/animationcancel_event)
  - [animationend 事件](/zh-TW/docs/Web/API/Element/animationend_event)
  - [animationiteration 事件](/zh-TW/docs/Web/API/Element/animationiteration_event)
  - [animationstart 事件](/zh-TW/docs/Web/API/Element/animationstart_event)
  - [afterscriptexecute 事件](/zh-TW/docs/Web/API/Element/afterscriptexecute_event)
  - [auxclick 事件](/zh-TW/docs/Web/API/Element/auxclick_event)
  - [beforescriptexecute 事件](/zh-TW/docs/Web/API/Element/beforescriptexecute_event)
  - [blur 事件](/zh-TW/docs/Web/API/Element/blur_event)
  - [click 事件](/zh-TW/docs/Web/API/Element/click_event)
  - [compositionend 事件](/zh-TW/docs/Web/API/Element/compositionend_event)
  - [compositionstart 事件](/zh-TW/docs/Web/API/Element/compositionstart_event)
  - [compositionupdate 事件](/zh-TW/docs/Web/API/Element/compositionupdate_event)
  - [contextmenu 事件](/zh-TW/docs/Web/API/Element/contextmenu_event)
  - [copy 事件](/zh-TW/docs/Web/API/Element/copy_event)
  - [cut 事件](/zh-TW/docs/Web/API/Element/cut_event)
  - [dblclick 事件](/zh-TW/docs/Web/API/Element/dblclick_event)
  - [DOMActivate 事件](/zh-TW/docs/Web/API/Element/DOMActivate_event)
  - [DOMMouseScroll 事件](/zh-TW/docs/Web/API/Element/DOMMouseScroll_event)
  - [error 事件](/zh-TW/docs/Web/API/Element/error_event)
  - [focusin 事件](/zh-TW/docs/Web/API/Element/focusin_event)
  - [focusout 事件](/zh-TW/docs/Web/API/Element/focusout_event)
  - [focus 事件](/zh-TW/docs/Web/API/Element/focus_event)
  - [fullscreenchange 事件](/zh-TW/docs/Web/API/Element/fullscreenchange_event)
  - [fullscreenerror 事件](/zh-TW/docs/Web/API/Element/fullscreenerror_event)
  - [gesturechange 事件](/zh-TW/docs/Web/API/Element/gesturechange_event)
  - [gestureend 事件](/zh-TW/docs/Web/API/Element/gestureend_event)
  - [gesturestart 事件](/zh-TW/docs/Web/API/Element/gesturestart_event)
  - [gotpointercapture 事件](/zh-TW/docs/Web/API/Element/gotpointercapture_event)
  - [keydown 事件](/zh-TW/docs/Web/API/Element/keydown_event)
  - [keypress 事件](/zh-TW/docs/Web/API/Element/keypress_event)
  - [keyup 事件](/zh-TW/docs/Web/API/Element/keyup_event)
  - [lostpointercapture 事件](/zh-TW/docs/Web/API/Element/lostpointercapture_event)
  - [mousedown 事件](/zh-TW/docs/Web/API/Element/mousedown_event)
  - [mouseenter 事件](/zh-TW/docs/Web/API/Element/mouseenter_event)
  - [mouseleave 事件](/zh-TW/docs/Web/API/Element/mouseleave_event)
  - [mousemove 事件](/zh-TW/docs/Web/API/Element/mousemove_event)
  - [mouseout 事件](/zh-TW/docs/Web/API/Element/mouseout_event)
  - [mouseover 事件](/zh-TW/docs/Web/API/Element/mouseover_event)
  - [mouseup 事件](/zh-TW/docs/Web/API/Element/mouseup_event)
  - [mousewheel 事件](/zh-TW/docs/Web/API/Element/mousewheel_event)
  - [msContentZoom 事件](/zh-TW/docs/Web/API/Element/msContentZoom_event)
  - [MSGestureChange 事件](/zh-TW/docs/Web/API/Element/MSGestureChange_event)
  - [MSGestureEnd 事件](/zh-TW/docs/Web/API/Element/MSGestureEnd_event)
  - [MSGestureHold 事件](/zh-TW/docs/Web/API/Element/MSGestureHold_event)
  - [MSGestureStart 事件](/zh-TW/docs/Web/API/Element/MSGestureStart_event)
  - [MSGestureTap 事件](/zh-TW/docs/Web/API/Element/MSGestureTap_event)
  - [MSInertiaStart 事件](/zh-TW/docs/Web/API/Element/MSInertiaStart_event)
  - [MSManipulationStateChanged 事件](/zh-TW/docs/Web/API/Element/MSManipulationStateChanged_event)
  - [paste 事件](/zh-TW/docs/Web/API/Element/paste_event)
  - [pointercancel 事件](/zh-TW/docs/Web/API/Element/pointercancel_event)
  - [pointerdown 事件](/zh-TW/docs/Web/API/Element/pointerdown_event)
  - [pointerenter 事件](/zh-TW/docs/Web/API/Element/pointerenter_event)
  - [pointerleave 事件](/zh-TW/docs/Web/API/Element/pointerleave_event)
  - [pointermove 事件](/zh-TW/docs/Web/API/Element/pointermove_event)
  - [pointerout 事件](/zh-TW/docs/Web/API/Element/pointerout_event)
  - [pointerover 事件](/zh-TW/docs/Web/API/Element/pointerover_event)
  - [pointerup 事件](/zh-TW/docs/Web/API/Element/pointerup_event)
  - [scroll 事件](/zh-TW/docs/Web/API/Element/scroll_event)
  - [select 事件](/zh-TW/docs/Web/API/Element/select_event)
  - [show 事件](/zh-TW/docs/Web/API/Element/show_event)
  - [touchcancel 事件](/zh-TW/docs/Web/API/Element/touchcancel_event)
  - [touchend 事件](/zh-TW/docs/Web/API/Element/touchend_event)
  - [touchmove 事件](/zh-TW/docs/Web/API/Element/touchmove_event)
  - [touchstart 事件](/zh-TW/docs/Web/API/Element/touchstart_event)
  - [transitioncancel 事件](/zh-TW/docs/Web/API/Element/transitioncancel_event)
  - [transitionend 事件](/zh-TW/docs/Web/API/Element/transitionend_event)
  - [transitionrun 事件](/zh-TW/docs/Web/API/Element/transitionrun_event)
  - [transitionstart 事件](/zh-TW/docs/Web/API/Element/transitionstart_event)
  - [webkitmouseforcechanged 事件](/zh-TW/docs/Web/API/Element/webkitmouseforcechanged_event)
  - [webkitmouseforcedown 事件](/zh-TW/docs/Web/API/Element/webkitmouseforcedown_event)
  - [webkitmouseforceup 事件](/zh-TW/docs/Web/API/Element/webkitmouseforceup_event)
  - [webkitmouseforcewillbegin 事件](/zh-TW/docs/Web/API/Element/webkitmouseforcewillbegin_event)
  - [wheel 事件](/zh-TW/docs/Web/API/Element/wheel_event)

- {{DOMxRef("EventSource")}}

  - [error 事件](/zh-TW/docs/Web/API/EventSource/error_event)
  - [message 事件](/zh-TW/docs/Web/API/EventSource/message_event)
  - [open 事件](/zh-TW/docs/Web/API/EventSource/open_event)

- {{DOMxRef("FileReader")}}

  - [abort 事件](/zh-TW/docs/Web/API/FileReader/abort_event)
  - [error 事件](/zh-TW/docs/Web/API/FileReader/error_event)
  - [loadend 事件](/zh-TW/docs/Web/API/FileReader/loadend_event)
  - [loadstart 事件](/zh-TW/docs/Web/API/FileReader/loadstart_event)
  - [load 事件](/zh-TW/docs/Web/API/FileReader/load_event)
  - [progress 事件](/zh-TW/docs/Web/API/FileReader/progress_event)

- {{DOMxRef("HTMLCanvasElement")}}

  - [webglcontextcreationerror 事件](/zh-TW/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
  - [webglcontextlost 事件](/zh-TW/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
  - [webglcontextrestored 事件](/zh-TW/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)

- {{DOMxRef("HTMLDetailsElement")}}

  - [toggle 事件](/zh-TW/docs/Web/API/HTMLDetailsElement/toggle_event)

- {{DOMxRef("HTMLDialogElement")}}

  - [cancel 事件](/zh-TW/docs/Web/API/HTMLDialogElement/cancel_event)
  - [close 事件](/zh-TW/docs/Web/API/HTMLDialogElement/close_event)

- {{DOMxRef("HTMLElement")}}

  - [beforeinput 事件](/zh-TW/docs/Web/API/HTMLElement/beforeinput_event)
  - [change 事件](/zh-TW/docs/Web/API/HTMLElement/change_event)
  - [input 事件](/zh-TW/docs/Web/API/HTMLElement/input_event)

- {{DOMxRef("HTMLFormElement")}}

  - [formdata 事件](/zh-TW/docs/Web/API/HTMLFormElement/formdata_event)
  - [reset 事件](/zh-TW/docs/Web/API/HTMLFormElement/reset_event)
  - [submit 事件](/zh-TW/docs/Web/API/HTMLFormElement/submit_event)

- {{DOMxRef("HTMLInputElement")}}

  - [invalid 事件](/zh-TW/docs/Web/API/HTMLInputElement/invalid_event)
  - [search 事件](/zh-TW/docs/Web/API/HTMLInputElement/search_event)

- {{DOMxRef("HTMLMediaElement")}}

  - [abort 事件](/zh-TW/docs/Web/API/HTMLMediaElement/abort_event)
  - [canplaythrough 事件](/zh-TW/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - [canplay 事件](/zh-TW/docs/Web/API/HTMLMediaElement/canplay_event)
  - [durationchange 事件](/zh-TW/docs/Web/API/HTMLMediaElement/durationchange_event)
  - [emptied 事件](/zh-TW/docs/Web/API/HTMLMediaElement/emptied_event)
  - [ended 事件](/zh-TW/docs/Web/API/HTMLMediaElement/ended_event)
  - [error 事件](/zh-TW/docs/Web/API/HTMLMediaElement/error_event)
  - [loadeddata 事件](/zh-TW/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - [loadedmetadata 事件](/zh-TW/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - [loadstart 事件](/zh-TW/docs/Web/API/HTMLMediaElement/loadstart_event)
  - [pause 事件](/zh-TW/docs/Web/API/HTMLMediaElement/pause_event)
  - [playing 事件](/zh-TW/docs/Web/API/HTMLMediaElement/playing_event)
  - [play 事件](/zh-TW/docs/Web/API/HTMLMediaElement/play_event)
  - [progress 事件](/zh-TW/docs/Web/API/HTMLMediaElement/progress_event)
  - [ratechange 事件](/zh-TW/docs/Web/API/HTMLMediaElement/ratechange_event)
  - [seeked 事件](/zh-TW/docs/Web/API/HTMLMediaElement/seeked_event)
  - [seeking 事件](/zh-TW/docs/Web/API/HTMLMediaElement/seeking_event)
  - [stalled 事件](/zh-TW/docs/Web/API/HTMLMediaElement/stalled_event)
  - [suspend 事件](/zh-TW/docs/Web/API/HTMLMediaElement/suspend_event)
  - [timeupdate 事件](/zh-TW/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - [volumechange 事件](/zh-TW/docs/Web/API/HTMLMediaElement/volumechange_event)
  - [waiting 事件](/zh-TW/docs/Web/API/HTMLMediaElement/waiting_event)

- {{DOMxRef("HTMLSlotElement")}}

  - [slotchange 事件](/zh-TW/docs/Web/API/HTMLSlotElement/slotchange_event)

- {{DOMxRef("HTMLTrackElement")}}

  - [cuechange 事件](/zh-TW/docs/Web/API/HTMLTrackElement/cuechange_event)

- {{DOMxRef("HTMLVideoElement")}}

  - [enterpictureinpicture 事件](/zh-TW/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - [leavepictureinpicture 事件](/zh-TW/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)

- {{DOMxRef("IDBDatabase")}}

  - [abort 事件](/zh-TW/docs/Web/API/IDBTransaction/abort_event)
  - [close 事件](/zh-TW/docs/Web/API/IDBDatabase/close_event)
  - [error 事件](/zh-TW/docs/Web/API/IDBTransaction/error_event)
  - [versionchange 事件](/zh-TW/docs/Web/API/IDBDatabase/versionchange_event)

- {{DOMxRef("IDBOpenDBRequest")}}

  - [blocked 事件](/zh-TW/docs/Web/API/IDBOpenDBRequest/blocked_event)
  - [upgradeneeded 事件](/zh-TW/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)

- {{DOMxRef("IDBRequest")}}

  - [error 事件](/zh-TW/docs/Web/API/IDBRequest/error_event)
  - [success 事件](/zh-TW/docs/Web/API/IDBRequest/success_event)

- {{DOMxRef("IDBTransaction")}}

  - [abort 事件](/zh-TW/docs/Web/API/IDBTransaction/abort_event)
  - [complete 事件](/zh-TW/docs/Web/API/IDBTransaction/complete_event)
  - [error 事件](/zh-TW/docs/Web/API/IDBTransaction/error_event)

- {{DOMxRef("MediaDevices")}}

  - [devicechange 事件](/zh-TW/docs/Web/API/MediaDevices/devicechange_event)

- {{DOMxRef("MediaRecorder")}}

  - [error 事件](/zh-TW/docs/Web/API/MediaRecorder/error_event)

- {{DOMxRef("MediaStream")}}

  - [addtrack 事件](/zh-TW/docs/Web/API/MediaStream/addtrack_event)
  - [removetrack 事件](/zh-TW/docs/Web/API/MediaStream/removetrack_event)

- {{DOMxRef("MediaStreamTrack")}}

  - [ended 事件](/zh-TW/docs/Web/API/MediaStreamTrack/ended_event)
  - [mute 事件](/zh-TW/docs/Web/API/MediaStreamTrack/mute_event)
  - [unmute 事件](/zh-TW/docs/Web/API/MediaStreamTrack/unmute_event)

- {{DOMxRef("MessagePort")}}

  - [messageerror 事件](/zh-TW/docs/Web/API/MessagePort/messageerror_event)
  - [message 事件](/zh-TW/docs/Web/API/MessagePort/message_event)

- {{DOMxRef("OfflineAudioContext")}}

  - [complete 事件](/zh-TW/docs/Web/API/OfflineAudioContext/complete_event)

- {{DOMxRef("PaymentRequest")}}

  - [merchantvalidation 事件](/zh-TW/docs/Web/API/PaymentRequest/merchantvalidation_event)
  - [paymentmethodchange 事件](/zh-TW/docs/Web/API/PaymentRequest/paymentmethodchange_event)
  - [shippingaddresschange 事件](/zh-TW/docs/Web/API/PaymentRequest/shippingaddresschange_event)
  - [shippingoptionchange 事件](/zh-TW/docs/Web/API/PaymentRequest/shippingoptionchange_event)

- {{DOMxRef("PaymentResponse")}}

  - [payerdetailchange 事件](/zh-TW/docs/Web/API/PaymentResponse/payerdetailchange_event)

- {{DOMxRef("Performance")}}

  - [resourcetimingbufferfull 事件](/zh-TW/docs/Web/API/Performance/resourcetimingbufferfull_event)

- {{DOMxRef("PictureInPictureWindow")}}

  - [resize 事件](/zh-TW/docs/Web/API/PictureInPictureWindow/resize_event)

- {{DOMxRef("RTCDataChannel")}}

  - [bufferedamountlow 事件](/zh-TW/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - [close 事件](/zh-TW/docs/Web/API/RTCDataChannel/close_event)
  - [closing 事件](/zh-TW/docs/Web/API/RTCDataChannel/closing_event)
  - [error 事件](/zh-TW/docs/Web/API/RTCDataChannel/error_event)
  - [message 事件](/zh-TW/docs/Web/API/RTCDataChannel/message_event)
  - [open 事件](/zh-TW/docs/Web/API/RTCDataChannel/open_event)

- {{DOMxRef("RTCDtlsTransport")}}

  - [error 事件](/zh-TW/docs/Web/API/RTCDtlsTransport/error_event)

- {{DOMxRef("RTCDTMFSender")}}

  - [tonechange 事件](/zh-TW/docs/Web/API/RTCDTMFSender/tonechange_event)

- {{DOMxRef("RTCIceTransport")}}

  - [gatheringstatechange 事件](/zh-TW/docs/Web/API/RTCIceTransport/gatheringstatechange_event)
  - [selectedcandidatepairchange 事件](/zh-TW/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)
  - [statechange 事件](/zh-TW/docs/Web/API/RTCIceTransport/statechange_event)

- {{DOMxRef("RTCPeerConnection")}}

  - [addstream 事件](/zh-TW/docs/Web/API/RTCPeerConnection/addstream_event)
  - [connectionstatechange 事件](/zh-TW/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - [datachannel 事件](/zh-TW/docs/Web/API/RTCPeerConnection/datachannel_event)
  - [icecandidateerror 事件](/zh-TW/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - [icecandidate 事件](/zh-TW/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - [iceconnectionstatechange 事件](/zh-TW/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - [icegatheringstatechange 事件](/zh-TW/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - [negotiationneeded 事件](/zh-TW/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - [removestream 事件](/zh-TW/docs/Web/API/RTCPeerConnection/removestream_event)
  - [signalingstatechange 事件](/zh-TW/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - [track 事件](/zh-TW/docs/Web/API/RTCPeerConnection/track_event)

- {{DOMxRef("ScriptProcessorNode")}}

  - [audioprocess 事件](/zh-TW/docs/Web/API/ScriptProcessorNode/audioprocess_event)

- {{DOMxRef("ServiceWorkerContainer")}}

  - [message 事件](/zh-TW/docs/Web/API/ServiceWorkerContainer/message_event)

- {{DOMxRef("ServiceWorkerGlobalScope")}}

  - [activate 事件](/zh-TW/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
  - [contentdelete 事件](/zh-TW/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event)
  - [install 事件](/zh-TW/docs/Web/API/ServiceWorkerGlobalScope/install_event)
  - [message 事件](/zh-TW/docs/Web/API/ServiceWorkerGlobalScope/message_event)
  - [notificationclick 事件](/zh-TW/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)
  - [pushsubscriptionchange 事件](/zh-TW/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
  - [push 事件](/zh-TW/docs/Web/API/ServiceWorkerGlobalScope/push_event)

- {{DOMxRef("SharedWorkerGlobalScope")}}

  - [connect 事件](/zh-TW/docs/Web/API/SharedWorkerGlobalScope/connect_event)

- {{DOMxRef("SpeechRecognition")}}

  - [audioend 事件](/zh-TW/docs/Web/API/SpeechRecognition/audioend_event)
  - [audiostart 事件](/zh-TW/docs/Web/API/SpeechRecognition/audiostart_event)
  - [end 事件](/zh-TW/docs/Web/API/SpeechRecognition/end_event)
  - [error 事件](/zh-TW/docs/Web/API/SpeechRecognition/error_event)
  - [nomatch 事件](/zh-TW/docs/Web/API/SpeechRecognition/nomatch_event)
  - [result 事件](/zh-TW/docs/Web/API/SpeechRecognition/result_event)
  - [soundend 事件](/zh-TW/docs/Web/API/SpeechRecognition/soundend_event)
  - [soundstart 事件](/zh-TW/docs/Web/API/SpeechRecognition/soundstart_event)
  - [speechend 事件](/zh-TW/docs/Web/API/SpeechRecognition/speechend_event)
  - [speechstart 事件](/zh-TW/docs/Web/API/SpeechRecognition/speechstart_event)
  - [start 事件](/zh-TW/docs/Web/API/SpeechRecognition/start_event)

- {{DOMxRef("SpeechSynthesis")}}

  - [voiceschanged 事件](/zh-TW/docs/Web/API/SpeechSynthesis/voiceschanged_event)

- {{DOMxRef("SpeechSynthesisUtterance")}}

  - [boundary 事件](/zh-TW/docs/Web/API/SpeechSynthesisUtterance/boundary_event)
  - [end 事件](/zh-TW/docs/Web/API/SpeechSynthesisUtterance/end_event)
  - [error 事件](/zh-TW/docs/Web/API/SpeechSynthesisUtterance/error_event)
  - [mark 事件](/zh-TW/docs/Web/API/SpeechSynthesisUtterance/mark_event)
  - [pause 事件](/zh-TW/docs/Web/API/SpeechSynthesisUtterance/pause_event)
  - [resume 事件](/zh-TW/docs/Web/API/SpeechSynthesisUtterance/resume_event)
  - [start 事件](/zh-TW/docs/Web/API/SpeechSynthesisUtterance/start_event)

- {{DOMxRef("SVGAnimationElement")}}

  - [beginEvent 事件](/zh-TW/docs/Web/API/SVGAnimationElement/beginEvent_event)
  - [endEvent 事件](/zh-TW/docs/Web/API/SVGAnimationElement/endEvent_event)
  - [repeatEvent 事件](/zh-TW/docs/Web/API/SVGAnimationElement/repeatEvent_event)

- {{DOMxRef("SVGElement")}}

  - [abort 事件](/zh-TW/docs/Web/API/SVGElement/abort_event)
  - [error 事件](/zh-TW/docs/Web/API/SVGElement/error_event)
  - [load 事件](/zh-TW/docs/Web/API/SVGElement/load_event)
  - [resize 事件](/zh-TW/docs/Web/API/SVGElement/resize_event)
  - [scroll 事件](/zh-TW/docs/Web/API/SVGElement/scroll_event)
  - [unload 事件](/zh-TW/docs/Web/API/SVGElement/unload_event)

- {{DOMxRef("SVGGraphicsElement")}}

  - [copy 事件](/zh-TW/docs/Web/API/SVGGraphicsElement/copy_event)
  - [cut 事件](/zh-TW/docs/Web/API/SVGGraphicsElement/cut_event)
  - [paste 事件](/zh-TW/docs/Web/API/SVGGraphicsElement/paste_event)

- {{DOMxRef("TextTrack")}}

  - [cuechange 事件](/zh-TW/docs/Web/API/TextTrack/cuechange_event)

- {{DOMxRef("TextTrackList")}}

  - [addtrack 事件](/zh-TW/docs/Web/API/TextTrackList/addtrack_event)
  - [change 事件](/zh-TW/docs/Web/API/TextTrackList/change_event)
  - [removeTrack 事件](/zh-TW/docs/Web/API/TextTrackList/removeTrack_event)

- {{DOMxRef("VideoTrackList")}}

  - [addtrack 事件](/zh-TW/docs/Web/API/VideoTrackList/addtrack_event)
  - [change 事件](/zh-TW/docs/Web/API/VideoTrackList/change_event)
  - [removetrack 事件](/zh-TW/docs/Web/API/VideoTrackList/removetrack_event)

- {{DOMxRef("VisualViewport")}}

  - [resize 事件](/zh-TW/docs/Web/API/VisualViewport/resize_event)
  - [scroll 事件](/zh-TW/docs/Web/API/VisualViewport/scroll_event)

- {{DOMxRef("WebSocket")}}

  - [close 事件](/zh-TW/docs/Web/API/WebSocket/close_event)
  - [error 事件](/zh-TW/docs/Web/API/WebSocket/error_event)
  - [message 事件](/zh-TW/docs/Web/API/WebSocket/message_event)
  - [open 事件](/zh-TW/docs/Web/API/WebSocket/open_event)

- {{DOMxRef("Window")}}

  - [afterprint 事件](/zh-TW/docs/Web/API/Window/afterprint_event)
  - [animationcancel 事件](/zh-TW/docs/Web/API/Window/animationcancel_event)
  - [animationend 事件](/zh-TW/docs/Web/API/Window/animationend_event)
  - [animationiteration 事件](/zh-TW/docs/Web/API/Window/animationiteration_event)
  - [animationstart 事件](/zh-TW/docs/Web/API/Window/animationstart_event)
  - [appinstalled 事件](/zh-TW/docs/Web/API/Window/appinstalled_event)
  - [beforeprint 事件](/zh-TW/docs/Web/API/Window/beforeprint_event)
  - [beforeunload 事件](/zh-TW/docs/Web/API/Window/beforeunload_event)
  - [blur 事件](/zh-TW/docs/Web/API/Window/blur_event)
  - [copy 事件](/zh-TW/docs/Web/API/Window/copy_event)
  - [cut 事件](/zh-TW/docs/Web/API/Window/cut_event)
  - [devicemotion 事件](/zh-TW/docs/Web/API/Window.devicemotion_event)
  - [deviceorientation 事件](/zh-TW/docs/Web/API/Window.deviceorientation_event)
  - [error 事件](/zh-TW/docs/Web/API/Window/error_event)
  - [focus 事件](/zh-TW/docs/Web/API/Window/focus_event)
  - [gamepadconnected 事件](/zh-TW/docs/Web/API/Window/gamepadconnected_event)
  - [gamepaddisconnected 事件](/zh-TW/docs/Web/API/Window/gamepaddisconnected_event)
  - [hashchange 事件](/zh-TW/docs/Web/API/Window/hashchange_event)
  - [languagechange 事件](/zh-TW/docs/Web/API/Window/languagechange_event)
  - [load 事件](/zh-TW/docs/Web/API/Window/load_event)
  - [messageerror 事件](/zh-TW/docs/Web/API/Window/messageerror_event)
  - [message 事件](/zh-TW/docs/Web/API/Window/message_event)
  - [offline 事件](/zh-TW/docs/Web/API/Window/offline_event)
  - [online 事件](/zh-TW/docs/Web/API/Window/online_event)
  - [orientationchange 事件](/zh-TW/docs/Web/API/Window/orientationchange_event)
  - [pagehide 事件](/zh-TW/docs/Web/API/Window/pagehide_event)
  - [pageshow 事件](/zh-TW/docs/Web/API/Window/pageshow_event)
  - [paste 事件](/zh-TW/docs/Web/API/Window/paste_event)
  - [popstate 事件](/zh-TW/docs/Web/API/Window/popstate_event)
  - [rejectionhandled 事件](/zh-TW/docs/Web/API/Window/rejectionhandled_event)
  - [resize 事件](/zh-TW/docs/Web/API/Window/resize_event)
  - [storage 事件](/zh-TW/docs/Web/API/Window/storage_event)
  - [transitioncancel 事件](/zh-TW/docs/Web/API/Window/transitioncancel_event)
  - [transitionend 事件](/zh-TW/docs/Web/API/Window/transitionend_event)
  - [transitionrun 事件](/zh-TW/docs/Web/API/Window/transitionrun_event)
  - [transitionstart 事件](/zh-TW/docs/Web/API/Window/transitionstart_event)
  - [unhandledrejection 事件](/zh-TW/docs/Web/API/Window/unhandledrejection_event)
  - [unload 事件](/zh-TW/docs/Web/API/Window/unload_event)
  - [vrdisplayactivate 事件](/zh-TW/docs/Web/API/Window/vrdisplayactivate_event)
  - [vrdisplayblur 事件](/zh-TW/docs/Web/API/Window/vrdisplayblur_event)
  - [vrdisplayconnect 事件](/zh-TW/docs/Web/API/Window/vrdisplayconnect_event)
  - [vrdisplaydeactivate 事件](/zh-TW/docs/Web/API/Window/vrdisplaydeactivate_event)
  - [vrdisplaydisconnect 事件](/zh-TW/docs/Web/API/Window/vrdisplaydisconnect_event)
  - [vrdisplayfocus 事件](/zh-TW/docs/Web/API/Window/vrdisplayfocus_event)
  - [vrdisplaypointerrestricted 事件](/zh-TW/docs/Web/API/Window/vrdisplaypointerrestricted_event)
  - [vrdisplaypointerunrestricted 事件](/zh-TW/docs/Web/API/Window/vrdisplaypointerunrestricted_event)
  - [vrdisplaypresentchange 事件](/zh-TW/docs/Web/API/Window/vrdisplaypresentchange_event)

- {{DOMxRef("Worker")}}

  - [messageerror 事件](/zh-TW/docs/Web/API/Worker/messageerror_event)
  - [message 事件](/zh-TW/docs/Web/API/Worker/message_event)

- {{DOMxRef("WorkerGlobalScope")}}

  - [languagechange 事件](/zh-TW/docs/Web/API/WorkerGlobalScope/languagechange_event)

- {{DOMxRef("XMLHttpRequest")}}

  - [abort 事件](/zh-TW/docs/Web/API/XMLHttpRequest/abort_event)
  - [error 事件](/zh-TW/docs/Web/API/XMLHttpRequest/error_event)
  - [loadend 事件](/zh-TW/docs/Web/API/XMLHttpRequest/loadend_event)
  - [loadstart 事件](/zh-TW/docs/Web/API/XMLHttpRequest/loadstart_event)
  - [load 事件](/zh-TW/docs/Web/API/XMLHttpRequest/load_event)
  - [progress 事件](/zh-TW/docs/Web/API/XMLHttpRequest/progress_event)
  - [timeout 事件](/zh-TW/docs/Web/API/XMLHttpRequest/timeout_event)

- {{DOMxRef("XRReferenceSpace")}}

  - [reset 事件](/zh-TW/docs/Web/API/XRReferenceSpace/reset_event)

- {{DOMxRef("XRSession")}}

  - [end 事件](/zh-TW/docs/Web/API/XRSession/end_event)
  - [inputsourceschange 事件](/zh-TW/docs/Web/API/XRSession/inputsourceschange_event)
  - [selectend 事件](/zh-TW/docs/Web/API/XRSession/selectend_event)
  - [selectstart 事件](/zh-TW/docs/Web/API/XRSession/selectstart_event)
  - [select 事件](/zh-TW/docs/Web/API/XRSession/select_event)
  - [squeezeend 事件](/zh-TW/docs/Web/API/XRSession/squeezeend_event)
  - [squeezestart 事件](/zh-TW/docs/Web/API/XRSession/squeezestart_event)
  - [squeeze 事件](/zh-TW/docs/Web/API/XRSession/squeeze_event)
  - [visibilitychange 事件](/zh-TW/docs/Web/API/XRSession/visibilitychange_event)

- {{DOMxRef("XRSystem")}}

  - [devicechange 事件](/zh-TW/docs/Web/API/XRSystem/devicechange_event)

## 規範

{{Specifications}}

<section id="Quick_links">
  <ol>
    <li><a href="/zh-TW/docs/Learn/JavaScript/Building_blocks/Events">事件介紹</a></li>
  </ol>{{ListSubpages}}
</section>
