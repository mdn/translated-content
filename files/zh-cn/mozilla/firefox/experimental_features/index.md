---
title: Experimental features in Firefox
slug: Mozilla/Firefox/Experimental_features
---

{{FirefoxSidebar}}

Mozilla 发布了测试的 nightly 版本，用于测试新的浏览器特性。实验性特性，例如所提议的可用的 Web 平台标准的实现。这个页面列出了 Firefox Nightly 中的一些新特性和启用方法等信息。在发布这些功能之前，你可以测试 Web 站点和应用程序，并确保一切都能与最新的 Web 技术功能协同工作。

你需要下载隔夜版或是开发者版，来测试下面这些实验性特性。

## HTML

| 功能                                                                                                                                                                           | Firefox Nightly                                      | Firefox 开发者版                 | Firefox 测试版                   | Firefox 发行版 | Preference                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | -------------------------------- | -------------------------------- | -------------- | ---------------------------- |
| **日期和时间输入**{{HTMLElement("input")}}为 [日期](/zh-CN/docs/Web/HTML/Element/input/date) 和 [时间](/zh-CN/docs/Web/HTML/Element/input/time) 相关的输入类型提供的新用户界面 | 开启 <sub>(从 51 开始支持，从 55 开始默认开启)</sub> | 开启 <sub>(从 51 开始支持)</sub> | 关闭 <sub>(从 51 开始支持)</sub> | ---            | `dom.forms.datetime`         |
| **{{HTMLElement("dialog")}}** 包含与之交互的 DOM 元素的对话框元素。Implementation of modal dialogs and accessibility still missing.                                            | 关闭 <sub>(从 53 开始支持)</sub>                     | 关闭 <sub>(从 53 开始支持)</sub> | ---                              | ---            | `dom.dialog_element.enabled` |

## CSS

<table>
  <thead>
    <tr>
      <th scope="col">功能</th>
      <th scope="col">Firefox Nightly</th>
      <th scope="col">Firefox Developer Edition</th>
      <th scope="col">Firefox Beta</th>
      <th scope="col">Firefox Release</th>
      <th scope="col">Preference</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Subgrids</strong></td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td><code>layout.css.grid-template-subgrid-value.enabled</code></td>
    </tr>
    <tr>
      <td>
        <strong>Display stray control characters in CSS as hex boxes</strong
        ><br />This feature renders control characters (Unicode category Cc)
        other than <em>tab</em> (<code>U+0009</code>),
        <em>line feed</em> (<code>U+000A</code>),
        <em>form feed</em> (<code>U+000C</code>), and
        <em>carriage return</em> (<code>U+000D</code>) as a hexbox when they are
        not expected.
      </td>
      <td>43</td>
      <td>43</td>
      <td>
        <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1329613"
          >Disabled</a
        >
      </td>
      <td>
        <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1329613"
          >Disabled</a
        >
      </td>
      <td>
        <code>layout.css.control-characters.enabled</code> or
        <code>layout.css.control-characters.visible</code>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Positioned CSS Masks</strong><br />A subset of CSS Masks that
        includes
        <a href="/zh-CN/docs/Web/CSS/CSS_Masks"
          >longhand properties of CSS Masks</a
        >, as well as a change in the shorthand property
      </td>
      <td>51</td>
      <td>51</td>
      <td>53</td>
      <td>
        <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1251161"
          >Disabled</a
        >
      </td>
      <td>Controlled by a compile flag (MOZ_ENABLE_MASK_AS_SHORTHAND).</td>
    </tr>
    <tr>
      <td>
        <strong
          >The <code>font-display</code> descriptor for
          <code>@font-face</code></strong
        ><br />To improve Web fonts performance,
        {{cssxref("@font-face")}} has an experimental
        {{cssxref("@font-face/font-display", "font-display")}}
        descriptor.
      </td>
      <td>关闭<br /><sub>(available since 46)</sub></td>
      <td>关闭<br /><sub>(available since 46)</sub></td>
      <td>关闭<br /><sub>(available since 46)</sub></td>
      <td>关闭<br /><sub>(available since 46)</sub></td>
      <td><code>layout.css.font-display.enabled</code></td>
    </tr>
    <tr>
      <td>
        <p>
          <strong><code>font-variation-settings</code> 属性</strong
          ><br />{{cssxref("font-variation-settings")}} 提供了
          OpenType 或 TrueType 字体印刷特点的低级别的控制，by specifying the
          four letter axis names of the features you want to vary, along with
          their variation values.
        </p>
      </td>
      <td>关闭<br /><sub>(available since 53)</sub></td>
      <td>关闭<br /><sub>(available since 53)</sub></td>
      <td>关闭<br /><sub>(available since 53)</sub></td>
      <td>关闭<br /><sub>(available since 53)</sub></td>
      <td>
        <p>
          <code>layout.css.font-variations.enabled</code><br />Functions only in
          Mac OS Sierra (and later).<br /><br />For the downloadable fonts on
          axis-praxis, you also need
          <code>gfx.downloadable_fonts.keep_variation_tables</code> (in Firefox
          54 and later)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <strong><code>touch-action</code> CSS 属性</strong><br />The
        {{cssxref("touch-action")}} CSS property is part of the
        <a href="https://www.w3.org/TR/pointerevents1/">Pointer Events</a> specification and allows you to
        specify how and in what way the user is able to manipulate an object by
        touch.
      </td>
      <td>50</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td><code>layout.css.touch_action.enabled</code></td>
    </tr>
    <tr id="shape-outside">
      <td>
        <p>
          <strong>The <code>shape-outside</code> CSS property</strong><br />The
          {{cssxref("shape-outside")}} CSS property is part of the
          <a href="https://drafts.csswg.org/css-shapes/">CSS Shapes Module Level 1</a> specification and allows you to
          specify a float area causing inline contents to wrap around a shape.
        </p>
        <p>
          Firefox currently implements the <code>&#x3C;shape-box></code> values
          (<a href="https://bugzil.la/1309467">Firefox bug 1309467</a>) as well as the
          <code>circle()</code> (<a href="https://bugzil.la/1311244">Firefox bug 1311244</a>),
          <code>ellipse()</code> (<a href="https://bugzil.la/1326406">Firefox bug 1326406</a>), and
          <code>polygon()</code> (<a href="https://bugzil.la/1326409">Firefox bug 1326409</a>) functions.
        </p>
      </td>
      <td>关闭<br /><sub>(available since 53)</sub></td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td><code>layout.css.shape-outside.enabled</code></td>
    </tr>
    <tr>
      <td>
        <strong>The <code>contain</code> CSS property</strong><br />The
        {{cssxref("contain")}} CSS property is part of the
        <a href="https://drafts.csswg.org/css-contain-1/">CSS Containment Module Level 1</a> specification and allows you to
        indicate that an element and its contents are independent of the rest of
        the document tree, allowing
        {{Glossary("User agent", "user agents")}} to optimize the
        rendering of a page.
      </td>
      <td>关闭<br /><sub>(available since 45)</sub></td>
      <td>关闭<br /><sub>(available since 45)</sub></td>
      <td>关闭<br /><sub>(available since 45)</sub></td>
      <td>关闭<br /><sub>(available since 45)</sub></td>
      <td><code>layout.css.contain.enabled</code></td>
    </tr>
    <tr id="column-span">
      <td>
        <p>
          <strong>The <code>column-span</code> CSS property</strong><br />The
          {{cssxref("column-span")}} CSS property is part of the
          <a href="https://drafts.csswg.org/css-multicol-1/">CSS Multi-column Layout Module</a> specification and allows you
          to specify how many columns an element spans across.
        </p>
        <p>
          Firefox currently only parses the property (<a href="https://bugzil.la/1339298">Firefox bug 1339298</a>),
          it's not actually implemented yet (<a href="https://bugzil.la/616436">Firefox bug 616436</a>).
        </p>
      </td>
      <td>
        关闭<br /><sub>(recognized since 55, but not implemented yet)</sub>
      </td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td><code>layout.css.column-span.enabled</code></td>
    </tr>
    <tr>
      <td>
        <strong>The <code>frames()</code> timing function</strong><br />See
        <a
          href="/zh-CN/docs/Web/CSS/single-transition-timing-function#The_frames()_class_of_timing-functions"
          >The frames() class of timing-functions</a
        >
        for more details.
      </td>
      <td>开启</td>
      <td><sub>N/A</sub></td>
      <td>关闭<br /><sub>(available since 55)</sub></td>
      <td>关闭<br /><sub>(available since 55)</sub></td>
      <td>None</td>
    </tr>
  </tbody>
</table>

## JavaScript

See also [ECMAScript Next support](/zh-CN/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_Next_support_in_Mozilla) for implemented features of ECMAScript 2016 and later, that are not experimental and thus available without preferences in Firefox Release.

| Feature                                                                                                                                                                                                                                                                                                                                                                   | Firefox Nightly | Firefox Developer Edition | Firefox Beta | Firefox Release | Preference                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------- | ------------ | --------------- | --------------------------- |
| **Additions to the `ArrayBuffer` object** Adds the {{jsxref("ArrayBuffer.transfer()")}} that returns a new `ArrayBuffer` whose contents have been taken from the `oldBuffer`'s data ([spec](https://gist.github.com/lukewagner/2735af7eea411e18cf20)).                                                                                                                    | 36              | Disabled                  | Disabled     | Disabled        | None                        |
| **TypedObject objects** ([spec](https://github.com/dslomov-chromium/typed-objects-es7))                                                                                                                                                                                                                                                                                   | Enabled         | Disabled                  | Disabled     | Disabled        | None                        |
| [SIMD](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SIMD) ([specification and polyfill](https://github.com/johnmccutchan/ecmascript_simd))                                                                                                                                                                                                                         | Enabled         | Disabled                  | Disabled     | Disabled        | None                        |
| **ECMAScript modules** Allows you to use native ECMAScript modules, for example defining modules with `<script type="module">`, defining fallback scripts with `<script nomodule>`, and [importing](/zh-CN/docs/Web/JavaScript/Reference/Statements/import) code features that have been [exported](/zh-CN/docs/Web/JavaScript/Reference/Statements/export) from modules. | Disabled        | Disabled                  | Disabled     | Disabled        | `dom.moduleScripts.enabled` |

## APIs

### Canvas & WebGL

| Feature                                                                                                                                                                                                                                                                                                                                                        | Firefox Nightly                          | Firefox Developer Edition                | Firefox Beta                                                    | Firefox Release                                                 | Preference                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------- |
| **`WEBGL_debug_renderer_info` extension** The {{domxref("WEBGL_debug_renderer_info")}} extension allows you to transmit information useful to help debugging problems to the server.                                                                                                                                                                           | 42                                       | 42                                       | [Disabled](https://bugzilla.mozilla.org/show_bug.cgi?id=742798) | [Disabled](https://bugzilla.mozilla.org/show_bug.cgi?id=742798) | `webgl.enable-debug-renderer-info` |
| **OffscreenCanvas** The {{domxref("OffscreenCanvas")}} interface provides a canvas that can be rendered off screen. It is available in both the window and [worker](/zh-CN/docs/Web/API/Web_Workers_API) contexts.                                                                                                                                             | Disabled <sub>(available since 44)</sub> | Disabled <sub>(available since 44)</sub> | Disabled <sub>(available since 44)</sub>                        | Disabled <sub>(available since 44)</sub>                        | `gfx.offscreencanvas.enabled`      |
| **[Hit regions](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility)** Whether the mouse coordinates are within a particular area on the canvas is a common problem to solve. The hit region API allows you define an area of your canvas and provides another possibility to expose interactive content on a canvas to accessibility tools. | Disabled <sub>(available since 30)</sub> | Disabled <sub>(available since 30)</sub> | Disabled <sub>(available since 30)</sub>                        | Disabled <sub>(available since 30)</sub>                        | `canvas.hitregions.enabled`        |

### DOM

<table>
  <thead>
    <tr>
      <th scope="col">Feature</th>
      <th scope="col">Firefox Nightly</th>
      <th scope="col">Firefox Developer Edition</th>
      <th scope="col">Firefox Beta</th>
      <th scope="col">Firefox Release</th>
      <th scope="col">Preference</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>Mac 上的 WebVR API 1.1</strong><br /><a
          href="/zh-CN/docs/Web/API/WebVR_API"
          >WebVR API</a
        >
        允许你控制并和使用虚拟现实设备。
      </td>
      <td>Enabled</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td><code>dom.vr.enabled</code></td>
    </tr>
    <tr>
      <td>
        <strong>游戏手柄扩展</strong><br /><a
          href="/zh-CN/docs/Web/API/Gamepad_API#Experimental_Gamepad_extensions"
          >The Gamepad Extensions</a
        >
        provide access to additional functionality such as pose information in
        the case of WebVR controllers, and haptic actuator control (e.g.
        controller vibration hardware).
      </td>
      <td>Enabled</td>
      <td>Enabled</td>
      <td>Enabled</td>
      <td>Disabled</td>
      <td><code>dom.gamepad-extensions.enabled</code></td>
    </tr>
    <tr>
      <td>
        <strong>Experimental fetch controller/signal/observer interfaces</strong
        ><br />Also known as "cancellable fetch",
        <a
          href="/zh-CN/docs/Web/API/Fetch_API#Experimental_fetch_controllersignalobserver_interfaces"
          >these interfaces</a
        >
        contain functionality to allow fetch request operations to be observed
        and controlled during their lifetimes.
      </td>
      <td>Disabled<br /><sub>(Available since 55)</sub></td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td>
        <code>dom.fetchObserver.enabled</code> and
        <code>dom.fetchController.enabled</code> (not in
        <code>about:config</code> by default; you must set them yourself).
      </td>
    </tr>
    <tr>
      <td>
        <strong>FlyWeb</strong><br /><a href="https://flyweb.github.io/"
          >FlyWeb</a
        >
        is a project at Mozilla focused on bringing a new set of APIs to the
        browser for advertising and discovering local-area web servers.
      </td>
      <td>51</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td><code>dom.flyweb.enabled</code></td>
    </tr>
    <tr>
      <td>
        <code><strong>HTMLMediaElement.seekToNextFrame()</strong></code
        ><br />Part of an experimentation process around support non-real-time
        access to media for tasks including filtering, editing, and so forth,
        the {{domxref("HTMLMediaElement.seekToNextFrame()")}}
        advances the the current play position to the next frame in the media.
      </td>
      <td>49<br /><sub>(Fundamental update in version 50)</sub></td>
      <td>49<br /><sub>(Fundamental update in version 50)</sub></td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td><code>media.seekToNextFrame.enabled</code></td>
    </tr>
    <tr>
      <td>
        <strong><code>GeometryUtils.getBoxQuads()</code></strong>
        (<a href="https://bugzil.la/917755">Firefox bug 917755</a>)
      </td>
      <td>31</td>
      <td>31</td>
      <td>
        <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1107559"
          >Disabled</a
        >
      </td>
      <td>
        <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1107559"
          >Disabled</a
        >
      </td>
      <td><code>layout.css.getBoxQuads.enabled</code></td>
    </tr>
    <tr>
      <td>
        <strong><code>GeometryUtils.convertPointFromNode()</code></strong
        >,<br /><strong><code>GeometryUtils.RectFromNode()</code></strong
        >, and<br /><code
          ><strong>GeometryUtils.convertQuadFromNode()</strong></code
        ><br />(<a href="https://bugzil.la/918189">Firefox bug 918189</a>)
      </td>
      <td>31</td>
      <td>31</td>
      <td>
        <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1107559"
          >Disabled</a
        >
      </td>
      <td>
        <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1107559"
          >Disabled</a
        >
      </td>
      <td><code>layout.css.convertFromNode.enabled</code></td>
    </tr>
    <tr>
      <td>
        <strong><code>Node.rootNode</code></strong
        ><br />The {{domxref("Node.rootNode")}} property returns a
        {{domxref("Node")}} object representing the topmost node in the
        tree, or the current node if it's the topmost node in the tree.<br /><em
          >This feature is kept experimental as its naming poses Web
          compatibility problems. It will be renamed in the future.</em
        >
      </td>
      <td>48</td>
      <td>48</td>
      <td>
        <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1269155"
          >Disabled</a
        >
      </td>
      <td>
        <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1269155"
          >Disabled</a
        >
      </td>
      <td><code>dom.node.rootNode.enabled</code></td>
    </tr>
    <tr>
      <td>
        <strong>Performance Observer API</strong><br />The
        {{domxref("PerformanceObserver")}} interface is used to
        <em>observe</em> performance measurement events and be notified of new
        <a href="/zh-CN/docs/Web/API/PerformanceEntry">performance entries</a>
        as they are recorded in the browser's <em>performance timeline</em>.
      </td>
      <td>49</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td><code>dom.enable_performance_observer</code></td>
    </tr>
    <tr>
      <td>
        <strong>WebVTT Regions API</strong><br /><a
          href="/zh-CN/docs/Web/API/Web_Video_Text_Tracks_Format"
          >WebVTT</a
        >
        regions are parts of the video viewport that provide a rendering area
        for WebVTT cues. The {{domxref("VTTRegion")}} is the interface
        exposing the WebVTT cues.<br /><em
          >This interface is considered to be in flux and isn't therefore
          activated in any version by default.</em
        >
      </td>
      <td>
        Disabled<br /><sub>(Experimental implementation since version 30)</sub>
      </td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td><code>media.webvtt.regions.enabled</code></td>
    </tr>
    <tr>
      <td>
        <strong>音频和视频轨道支持</strong><br />Implements
        {{domxref("HTMLMediaElement.audioTracks")}} and
        {{domxref("HTMLMediaElement.videoTracks")}}.<br /><em
          >Firefox doesn't support multiple audio or video tracks, preventing
          the most common use cases for these properties to work properly.
          That's why these properties are not activated by default in any
          version.</em
        >
      </td>
      <td>
        Disabled<br /><sub>(Experimental implementation since version 33)</sub>
      </td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td><code>media.track.enabled</code></td>
    </tr>
    <tr>
      <td>
        <strong>Better value for <code>Event.timestamp</code></strong
        ><br />The property {{domxref("Event.timestamp")}} is
        returning a {{domxref("DOMHighResTimeStamp")}}, which is now
        relative to the Unix epoch.
      </td>
      <td>32 (Windows)<br />43 (Linux)</td>
      <td>32 (Windows)<br />43 (Linux)</td>
      <td>
        <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1026804"
          >Disabled</a
        >
      </td>
      <td>
        <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1026804"
          >Disabled</a
        >
      </td>
      <td><code>media.track.enabled</code></td>
    </tr>
    <tr id="pointer-events">
      <td><strong>指针事件</strong></td>
      <td>50</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td><code>dom.w3c_pointer_events.enabled</code></td>
    </tr>
    <tr>
      <td>
        <strong
          >Pointer Events
          {{domxref("PointerEvent.tangentialPressure")}} and
          {{domxref("PointerEvent.twist")}}</strong
        >
      </td>
      <td>54</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td><code>dom.w3c_pointer_events.enabled</code></td>
    </tr>
    <tr>
      <td>
        <strong>Intersection Observer API</strong><br />The
        {{domxref("Intersection Observer API")}} allows you to
        configure a callback that is called whenever one item, called a target,
        intersects either the device viewport or a specified element called.
      </td>
      <td>Disabled<br /><sub>(available since 53)</sub></td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td><code>dom.IntersectionObserver.enabled</code></td>
    </tr>
    <tr>
      <td>
        <strong
          ><a href="/zh-CN/docs/Web/API/Web_Animations_API"
            >Web Animations API: KeyframeEffect and KeyframeEffectReadOnly</a
          ></strong
        ><br />The
        {{domxref("KeyframEffectReadOnly()", "KeyframeEffectReadOnly.KeyframeEffectReadOnly()")}}
        and
        {{domxref("KeyframeEffect()", "KeyframeEffect.KeyframeEffect()")}}
        constructors can be used to clone existing
        {{domxref("KeyframeEffectReadOnly")}} object instances by
        being given the object to clone as their only parameter (see
        <a href="https://bugzil.la/1273784">Firefox bug 1273784</a>.)
      </td>
      <td>52</td>
      <td>52</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td>None</td>
    </tr>
    <tr>
      <td>
        <strong
          >{{domxref("PromiseRejectionEvent")}} and related
          features</strong
        ><br />Providing a way to monitor and more finely control the rejection
        of Promises.<br />
      </td>
      <td>Disabled<br /><sub>(available since 55)</sub></td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td><code>dom.promise_rejection_events.enabled</code></td>
    </tr>
    <tr>
      <td>
        <strong
          ><a href="/zh-CN/docs/Web/API/Payment_Request_API"
            >Payment Request API</a
          ></strong
        ><br />为网络支付提供的一个 API。
      </td>
      <td>Disabled<br /><sub>(available since 55)</sub></td>
      <td>Disabled<br /><sub>(available since 55)</sub></td>
      <td>Disabled<br /><sub>(available since 55)</sub></td>
      <td>Disabled<br /><sub>(available since 55)</sub></td>
      <td><code>dom.payments.request.enabled</code></td>
    </tr>
  </tbody>
</table>

### WebRTC

<table>
  <thead>
    <tr>
      <th scope="col">Feature</th>
      <th scope="col">Firefox Nightly</th>
      <th scope="col">Firefox Developer Edition</th>
      <th scope="col">Firefox Beta</th>
      <th scope="col">Firefox Release</th>
      <th scope="col">Preference</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>TCP ICE candidates</strong><br />ICE candidates that use TCP
        rather than UDP are considered during ICE negotiation.
      </td>
      <td>
        <p>Disabled<br />41</p>
        <p>Enabled<br />54</p>
      </td>
      <td>Disabled<br />41</td>
      <td>Disabled<br />41</td>
      <td>Disabled<br />41</td>
      <td><code>media.peerconnection.ice.tcp</code></td>
    </tr>
  </tbody>
</table>

## 开发者工具

<table>
  <thead>
    <tr>
      <th scope="col">Feature</th>
      <th scope="col">Firefox Nightly</th>
      <th scope="col">Firefox Developer Edition</th>
      <th scope="col">Firefox Beta</th>
      <th scope="col">Firefox Release</th>
      <th scope="col">Preference</th>
    </tr>
  </thead>
  <tbody>
    <tr id="new-debugger-frontend">
      <td><strong>Debugger rewrite in HTML</strong></td>
      <td>52</td>
      <td>52</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td><code>devtools.debugger.new-debugger-frontend</code></td>
    </tr>
    <tr id="new-console-frontend">
      <td><strong>Console rewrite in HTML</strong></td>
      <td>52</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td><code>devtools.webconsole.new-frontend-enabled</code></td>
    </tr>
    <tr id="performance-tool-options">
      <td>
        <strong>Experimental Performance tool options</strong><br />Enables
        options in the UI for JIT optimizations, memory, etc.
      </td>
      <td>41</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td>Disabled</td>
      <td><code>devtools.performance.ui.experimental</code></td>
    </tr>
    <tr id="layout-side-panel">
      <td>
        <strong>Layout side panel</strong><br />The Layout side panel allows to
        inspect and manage different CSS layout types like
        <a href="/zh-CN/docs/Web/CSS/CSS_grid_layout">CSS Grid Layout</a>.
      </td>
      <td>Disabled<br /><sub>(available since 52)</sub></td>
      <td>Disabled<br /><sub>(available since 52)</sub></td>
      <td>Disabled<br /><sub>(available since 52)</sub></td>
      <td>Disabled<br /><sub>(available since 52)</sub></td>
      <td><code>devtools.layoutview.enabled</code></td>
    </tr>
  </tbody>
</table>

## 其他

| Feature                                                                                                                                                                                                                                                                                                                                                                                                                                     | Firefox Nightly                      | Firefox Developer Edition            | Firefox Beta                         | Firefox Release                      | Preference                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | --------------------------------- |
| [**添加到主屏幕**](https://support.mozilla.org/t5/Other/How-to-add-a-shortcut-to-a-website-on-Android/ta-p/21992) The `icons`, `name`, `short_name`, and `theme_color` fields of the [Web App Manifest](/zh-CN/docs/Web/Manifest) (if present) can now be as the source of the homescreen/apps window icons, apps window title, homescreen icon title, and apps window color (respectively) for "Add to home screen" (Firefox Mobile only). | 关闭 <sub>(available since 53)</sub> | 关闭 <sub>(available since 53)</sub> | 关闭 <sub>(available since 53)</sub> | 关闭 <sub>(available since 52)</sub> | `manifest.install.enabled`        |
| **TLS 1.3**                                                                                                                                                                                                                                                                                                                                                                                                                                 | 开启                                 | 开启                                 | 关闭                                 | 关闭                                 | `security.tls.version.max` to `4` |

## See also

- [Firefox 开发者发行日志](/zh-CN/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://nightly.mozilla.org/)
- [Firefox 开发者版本](https://www.mozilla.org/en-US/firefox/developer/)
