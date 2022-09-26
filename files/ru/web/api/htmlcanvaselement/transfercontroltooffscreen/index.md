---
title: HTMLCanvasElement.transferControlToOffscreen()
slug: Web/API/HTMLCanvasElement/transferControlToOffscreen
translation_of: Web/API/HTMLCanvasElement/transferControlToOffscreen
tags:
- API
- Experimental
- HTMLCanvasElement
- Method
- OffscreenCanvas
- Reference
---
<div>{{APIRef("Canvas API")}} {{SeeCompatTable}}</div>

<p><code><strong>HTMLCanvasElement</strong></code><strong><code>.transferControlToOffscreen()</code></strong>
    передаёт управление объекту {{domxref("OffscreenCanvas")}}, который может использоваться либо в основном потоке, либо в {{domxref("Worker")}}.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre
        class="brush: js">OffscreenCanvas HTMLCanvasElement.transferControlToOffscreen()</pre>

<h3 id="Return_value">Возвращаемое значение</h3>

<p>Объект {{domxref("OffscreenCanvas")}}.</p>

<h2 id="Examples">Примеры</h2>

<pre class="brush: js">var htmlCanvas = document.createElement('canvas');
var offscreen = htmlCanvas.transferControlToOffscreen();
var gl = offscreen.getContext('webgl');

// ... отрисовка с помощью  gl контекста ...

// Возвращаем кадры в исходный HTMLCanvasElement
gl.commit();
</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Поддержка браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
    <li>Интерфейс, определяющий метод: {{domxref("HTMLCanvasElement")}}</li>
    <li>{{domxref("OffscreenCanvas")}}</li>
    <li>{{domxref("WebGLRenderingContext.commit()")}}</li>
</ul>
