---
title: 'HTMLCanvasElement: событие webglcontextlost'
slug: Web/API/HTMLCanvasElement/webglcontextlost_event
translation_of: Web/API/HTMLCanvasElement/webglcontextlost_event
tags:
- Event
- Reference
- WebGL
---
<div>{{APIRef}}</div>

<p>Событие <code><strong>webglcontextlost</strong></code> <a href="/ru/docs/Web/API/WebGL_API">WebGL API</a> вызывается когда {{Glossary("User agent")}}
    обнаруживает, что буфер, связанный с {{domxref("WebGLRenderingContext")}}, потерян.</p>

<table class="properties">
    <tbody>
    <tr>
        <th scope="row">Всплытие</th>
        <td>Да</td>
    </tr>
    <tr>
        <th scope="row">Отменяемое</th>
        <td>Да</td>
    </tr>
    <tr>
        <th scope="row">Интерфейс</th>
        <td>{{domxref("WebGLContextEvent")}}</td>
    </tr>
    <tr>
        <th scope="row">Свойство для обработки события</th>
        <td>Нет</td>
    </tr>
    </tbody>
</table>

<h2 id="Example">Пример</h2>

<p>Вы можете эмулировать <code>webglcontextlost</code> событие с помощью расширения {{domxref("WEBGL_lose_context")}}:</p>

<pre class="brush: js">const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

canvas.addEventListener('webglcontextlost', (event) =&gt; {
  console.log(event);
});

gl.getExtension('WEBGL_lose_context').loseContext();

// будет выведено "webglcontextlost".</pre>

<h2 id="Specifications">Спецификация</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Поддержка браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
    <li>{{domxref("WebGLContextEvent")}}</li>
    <li>{{domxref("WebGLRenderingContext.isContextLost()")}}</li>
    <li>{{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}</li>
</ul>
