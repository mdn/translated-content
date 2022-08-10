---
title: Force Touch events
slug: Web/API/Force_Touch_events
translation_of: Web/API/Force_Touch_events
---
<p>{{DefaultAPISidebar("Force Touch events")}}</p>

<p>{{Non-standard_header()}}</p>

<p><strong>Force Touch events</strong> are a proprietary, Apple-specific feature which makes possible (where supported by the input hardware) new interactions based on how hard the user clicks or presses down on the touchscreen or trackpad.</p>

<h2 id="Events">Events</h2>

<dl>
 <dt>{{event("webkitmouseforcewillbegin")}} {{non-standard_inline}}</dt>
 <dd>This event is fired before the {{event("mousedown")}} event. Its main use is that it can be {{domxref("Event.preventDefault()")}}ed.</dd>
 <dt>{{event("webkitmouseforcedown")}} {{non-standard_inline}}</dt>
 <dd>This event is fired after the {{event("mousedown")}} event as soon as sufficient pressure has been applied for it to qualify as a "force click".</dd>
 <dt>{{event("webkitmouseforceup")}} {{non-standard_inline}}</dt>
 <dd>This event is fired after the {{event("webkitmouseforcedown")}} event as soon as the pressure has been reduced sufficiently to end the "force click".</dd>
 <dt>{{event("webkitmouseforcechanged")}} {{non-standard_inline}}</dt>
 <dd>This event is fired each time the amount of pressure changes. This event first fires after the {{event("mousedown")}} event and stops firing before the {{event("mouseup")}} event.</dd>
</dl>

<h2 id="Event_properties">Event properties</h2>

<p>The following property is known to be available on the {{event("webkitmouseforcewillbegin")}}, {{event("mousedown")}}, {{event("webkitmouseforcechanged")}}, {{event("webkitmouseforcedown")}}, {{event("webkitmouseforceup")}}, {{event("mousemove")}}, and {{event("mouseup")}} event objects:</p>

<dl>
 <dt>{{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{readonlyinline}}</dt>
 <dd>当前施加于触控板/触摸屏的压力量</dd>
</dl>

<h2 id="常量">常量</h2>

<p>这些常数对于确定由{{domxref("MouseEvent.webkitForce")}}指示的压力的相对强度是有用的：</p>

<dl>
 <dt>{{domxref("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN")}} {{non-standard_inline}} {{readonlyinline}}</dt>
 <dd>正常点击所需的最小力量</dd>
 <dt>{{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}} {{non-standard_inline}} {{readonlyinline}}</dt>
 <dd>强制点击所需的最小力量</dd>
</dl>

<h2 id="产品规格">产品规格</h2>

<p><em>不是任何规格的一部分。</em>苹果<a href="https://developer.apple.com/library/prerelease/mac/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html">在 Mac 开发者图书馆</a>有<a href="https://developer.apple.com/library/prerelease/mac/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html">一个描述</a>。</p>
