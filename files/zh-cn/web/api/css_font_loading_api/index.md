---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
tags:
  - API
  - Fonts
  - Reference
  - 字体
translation_of: Web/API/CSS_Font_Loading_API
---
<div>{{APIRef("CSS Font Loading API")}}{{SeeCompatTable}}</div>

<p>CSS 字体加载 API 为您提供了动态加载字体资源时的 events 和 interfaces。</p>

<h2 id="Interfaces">Interfaces</h2>

<dl>
 <dt>{{domxref('FontFace')}}</dt>
 <dd>表示单个可用的字体。</dd>
 <dt>{{domxref('FontFaceSet')}}</dt>
 <dd>字体 API 的一个接口，支持检测它们（字体文件）的下载状态。</dd>
 <dt>{{domxref('FontFaceSource')}}</dt>
 <dd>提供混合了所有的字体相关操作，除非你别有深意。它定义了 {{domxref("Document")}} 和 {{domxref("WorkerGlobalScope")}} 中的可用属性 {{domxref("FontFaceSources.fonts")}} 。</dd>
 <dt>{{event('FontFaceSetLoadEvent')}}</dt>
 <dd>{{domxref("FontFaceSet")}} 加载时触发的事件。</dd>
</dl>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat("api.FontFace")}}
