---
title: Window.opener
slug: Web/API/Window/opener
translation_of: Web/API/Window/opener
---
<div>{{APIRef}}</div>

<h2 id="Summary" name="Summary">Resumen</h2>

<p>Devuelve una referencia de, la ventana que abrió la ventana actuál.</p>

<h2 id="Syntax" name="Syntax">Sintaxis</h2>

<pre class="syntaxbox"><var>objRef</var> = window.opener;
</pre>

<h2 id="Example" name="Example">Ejemplo</h2>

<pre class="brush:js">if (window.opener != indexWin) {
  referToTop(window.opener);
}
</pre>

<h2 id="Notes" name="Notes">Notas</h2>

<p>Cuando una ventana es abierta desde otra utilizando "Window.open()", esta, mantiene una referencia a la primera mediante "window.opener".  Si la ventana actuál no fué abierta, el metodo retorna NULL.</p>

<p>El navegador de Windows Phone no soporta window.opener. Tampoco es soportado en Internet Explorer si la ventana nueva se encuentra en una zona de seguridad distinta.</p>
