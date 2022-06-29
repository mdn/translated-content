---
title: Document directive
slug: Glossary/Document_directive
tags:
  - 指令
  - 術語表
translation_of: Glossary/Document_directive
---
<p><strong>{{Glossary("CSP")}} 文件指令</strong> 被用在 {{HTTPHeader("Content-Security-Policy")}} 頭部和管理應用策略的文件或<a href="/en-US/docs/Web/API/Web_Workers_API">工作者</a>環境的屬性。</p>

<p>文件指令不會回退到 {{CSP("default-src")}} 指令。</p>

<p>這些 CSP 指令是文件指令:</p>

<ul>
 <li>{{CSP("base-uri")}}</li>
 <li>{{CSP("plugin-types")}}</li>
 <li>{{CSP("sandbox")}}</li>
 <li>{{CSP("disown-opener")}}</li>
</ul>

<h2 id="了解更多">了解更多</h2>

<h3 id="技術資訊">技術資訊</h3>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>其他類型的指令:
  <ul>
   <li>{{Glossary("Fetch directive")}}</li>
   <li>{{Glossary("Navigation directive")}}</li>
   <li>{{Glossary("Reporting directive")}}</li>
  </ul>
 </li>
</ul>
