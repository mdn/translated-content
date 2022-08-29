---
title: ServiceWorkerContainer.register()
slug: Web/API/ServiceWorkerContainer/register
translation_of: Web/API/ServiceWorkerContainer/register
---
<div>{{SeeCompatTable}}{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">El método <strong><code>register()</code></strong>de la interfaz {{domxref("ServiceWorkerContainer")}} crea o actualiza un {{domxref("ServiceWorkerRegistration")}} para un <code>scriptURL</code>. dado</span></p>

<p>Si tiene éxito, el registro de un "service worker" relaciona la URL del script proporcionada con un ámbito, que posteriormente se utiliza para la coincidencia de navegación. Puede llamar a este método incondicionalmente desde la página controlada. Es decir, no necesita verificar primero si hay un registro activo.</p>

<p>Existe una confusión frecuente en torno al significado y uso del alcance. Dado que un trabajador de servicio no puede tener un alcance más amplio que su propia ubicación, solo use la opción de ámbito cuando necesite un alcance que sea más estrecho que el predeterminado.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">ServiceWorkerContainer.register(scriptURL, options)
  .then(function(ServiceWorkerRegistration) { ... });</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>scriptURL</code></dt>
 <dd>La URL del script de trabajador de servicio.</dd>
 <dt><code>options</code> <code>{{optional_inline}}</code></dt>
 <dd>Un objeto que contiene opciones de registro. Las opciones disponibles actualmente son:
 <ul>
  <li><code>alcance</code>: {{domxref("USVString")}} representa una URL que define el alcance de registro de un "service worker"; es decir, qué rango de URL puede controlar un "service worker". Esto es generalmente una URL relativa. El valor predeterminado es la URL que obtendría si resolviera './' utilizando la ubicación de la página web como base. No es, como se cree comúnmente, relativo a la ubicación del "service worker". Vea la sección de Ejemplos para más información sobre cómo funciona.</li>
 </ul>
 </dd>
</dl>

<h3 id="Valor_retornado">Valor retornado</h3>

<p>A {{domxref("Promise")}} that resolves with a {{domxref("ServiceWorkerRegistration")}} object.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<p>The examples described here should be taken together to get a better understanding of how service workers scope applies to a page.</p>

<p>The following example uses the default value of <code>scope</code> (by omitting it). The service worker in this case will control <code>example.com/index.html</code> as well as pages underneath it, like <code>example.com/product/description.html</code>.</p>

<pre class="brush: js">if ('serviceWorker' in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('Service worker registration succeeded:', registration);
  }).catch(function(error) {
    console.log('Service worker registration failed:', error);
  });
} else {
  console.log('Service workers are not supported.');
}</pre>

<p>The following code, if included in a page at the root of a site, would apply to exactly the same pages as the example above. Remember the scope, when included, uses the page's location as its base. Alternatively, if this code were included in a page at <code>example.com/product/description.html</code>, the scope of <code>'./'</code> would mean that the service worker only applies to resources under <code>example.com/product</code>. If I needed to register a service worker on <code>example.com/product/description.html</code> that applied to all of <code>example.com</code>, I would leave off the scope as above.</p>

<pre class="brush: js">if ('serviceWorker' in navigator) {
  // Register a service worker hosted at the root of the
  // site using a more restrictive scope.
  navigator.serviceWorker.register('/sw.js', {scope: './'}).then(function(registration) {
    console.log('Service worker registration succeeded:', registration);
  }).catch(function(error) {
    console.log('Service worker registration failed:', error);
  });
} else {
  console.log('Service workers are not supported.');
}
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#service-worker-container', 'ServiceWorkerContainer')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>


<p>{{Compat("api.ServiceWorkerContainer.register")}}</p>
</div>
