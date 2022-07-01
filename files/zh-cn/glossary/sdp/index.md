---
title: SDP
slug: Glossary/SDP
translation_of: Glossary/SDP
---
<p><strong>SDP </strong>(Session Description {{glossary("Protocol")}}) 是一个描述{{Glossary("P2P","peer-to-peer")}} 连接的标准。SDP 包含音视频的：编解码 ({{Glossary("codec")}}),源地址，和时间信息。</p>

<p>下面是一个典型的 SDP 信息示例：</p>

<pre>   v=0
   o=alice 2890844526 2890844526 IN IP4 host.anywhere.com
   s=
   c=IN IP4 host.anywhere.com
   t=0 0
   m=audio 49170 RTP/AVP 0
   a=rtpmap:0 PCMU/8000
   m=video 51372 RTP/AVP 31
   a=rtpmap:31 H261/90000
   m=video 53000 RTP/AVP 32
   a=rtpmap:32 MPV/90000</pre>

<p><br>
 SDP 协议从不会被单独使用，而是依靠 {{Glossary("RTP")}} 和{{Glossary("RTSP")}}等协议.SDP 也作为{{Glossary("WebRTC")}}的组件之一，用于描述一个 session 会话。</p>

<h2 id="了解更多">了解更多</h2>

<h3 id="General_knowledge">General knowledge</h3>

<ul>
 <li><a href="/zh-CN/docs/Web/API/WebRTC_API/Protocols">WebRTC protocols</a></li>
 <li>{{Interwiki("wikipedia", "Session Description Protocol")}} on Wikipedia</li>
</ul>
