---
title: Window.screen
slug: Web/API/Window/screen
translation_of: Web/API/Window/screen
---
<p>{{APIRef("CSSOM")}}</p>

<p>Свойство <strong><code>screen</code></strong> объекта {{DOMxRef("Window")}} возвращает ссылку на экран объекта, который содержит информацию об экране пользователя. Похожий по смыслу, объект <code>screen</code>, который имплементирует интерфейс  {{DOMxRef("Screen")}}   представляет собой совокупность свойств экрана пользователя.</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">let <var>screenObj</var> = <var>window</var>.screen;</pre>

<h2 id="Пример">Пример</h2>

<pre class="brush: js;">if (screen.pixelDepth &lt; 8) {
  // uиспользовать пониженную глубину пикселей
} else {
  // Использовать стандартную глубину пикселей(24)
}
</pre>

<h2 id="Спецификации">Спецификации</h2>

{{Specifications}}

<h2 id="Совместимость_с_браузерами">Совместимость с браузерами</h2>
<p>{{Compat}}</p>
