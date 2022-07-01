---
title: Navigation directive
slug: Glossary/Navigation_directive
tags:
  - CSP
  - HTTP
  - 安全
translation_of: Glossary/Navigation_directive
---
<p><strong>{{Glossary("CSP")}} 浏览指令（navigation directives</strong>）出现于 {{HTTPHeader("Content-Security-Policy")}} 首部，支配着用户所能浏览的或者提交表单的资源位置。</p>

<p>浏览指令不将 {{CSP("default-src")}} 指令作为回退机制。</p>

<p>以下 CSP 指令属于浏览指令：</p>

<ul>
 <li>{{CSP("form-action")}}</li>
 <li>{{CSP("frame-ancestors")}}</li>
 <li>{{CSP("navigation-to")}}</li>
</ul>

<div>
<h2 id="更多内容">更多内容</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>其他类型的指令：
  <ul>
   <li>{{Glossary("Fetch directive")}}</li>
   <li>{{Glossary("Navigation directive")}}</li>
   <li>{{Glossary("Reporting directive")}}</li>
  </ul>
 </li>
</ul>
</div>
