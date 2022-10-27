---
title: HTMLAudioElement
slug: Web/API/HTMLAudioElement
tags:
  - DOM
  - HTML
  - Media
  - para_revisar
translation_of: Web/API/HTMLAudioElement
---
<div>
<div>{{APIRef("HTML DOM")}}</div>
</div>

<p>La interfaz <code>HTMLAudioElement</code> proporciona acceso a las propiedades de los elementos {{ HTMLElement("audio") }}, así como métodos para manipularlos. Se deriva de la interfaz <a href="/en/DOM/HTMLMediaElement" title="en/DOM/HTMLMediaElement"><code>HTMLMediaElement</code></a>; se implementa por medio de <code>nsIDOMHTMLMediaElement</code>.</p>

<p>Para obtener más detalles sobre cómo usar las caracterísitcas de transmisión de sonido que expone esta interfaz, por favor consulta <a href="/en/Introducing_the_Audio_API_Extension" title="en/Introducing the Audio API Extension">Introducción a la extensión de la API de sonido</a>.</p>

<h2 id="Propiedades">Propiedades</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Nombre</th>
   <th scope="col">Tipo</th>
   <th scope="col">Descripción</th>
  </tr>
  <tr>
   <td><code>mozCurrentSampleOffset</code> {{ gecko_minversion_inline("2.0") }} {{ non-standard_inline() }}</td>
   <td><span style="font-family: monospace;">unsigned long long</span></td>
   <td>Indica el desplazamiento actual de la transmisión de sonido que fue creada por una llamada a <code>mozWriteAudio()</code>. Esta posición de desplazamiento se especifica como el número de muestras desde que se inició la transmisión.</td>
  </tr>
 </tbody>
</table>

<h2 id="Métodos">Métodos</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Nombre y argumentos</th>
   <th scope="col">Retorno</th>
   <th scope="col">Descripción</th>
  </tr>
  <tr>
   <td><code>Audio()</code></td>
   <td><code>HTMLAudioElement</code></td>
   <td>Constructor para elementos de audio. La propiedad <strong>preload</strong> del objeto devuelto se establece en <code>auto</code>.</td>
  </tr>
  <tr>
   <td><code>Audio(en <a href="/En/DOM/DOMString" title="En/DOM/DOMString">DOMString</a> src)</code></td>
   <td>HTMLAudioElement</td>
   <td>Constructor para elementos de audio. La propiedad <strong>preload</strong> del objeto devuelto se establece a <code>auto</code>; la propiedad <strong>src</strong> se establece al valor del argumento . El navegador comienza una selección asíncrona del recurso antes de que devuelva el objeto.</td>
  </tr>
  <tr>
   <td>
    <p><code>mozSetup(in PRUint32 channels, in PRUint32 rate) </code>{{ gecko_minversion_inline("2.0") }} {{ non-standard_inline() }}</p>
   </td>
   <td>-</td>
   <td>Configura la transmisión de sonido para escritura. Especificas como parámetros el número de canales (1 para mono o 2 para estéreo), a continuación la frecuencia de muestreo ((44100 for 44.1kHz, por ejemplo).</td>
  </tr>
  <tr>
   <td><code>mozWriteAudio(in jsval data)</code> {{ gecko_minversion_inline("2.0") }} {{ non-standard_inline() }}</td>
   <td><code>unsigned long</code></td>
   <td>Inserta en la transmisión la escritura de sonido en la posición de desplazamiento actual . Devuelve el número de bytes que se han escrito en la transmisión.</td>
  </tr>
 </tbody>
</table>

<h2 id="Consulta_también">Consulta también</h2>

<ul>
 <li><a href="/en/Introducing_the_Audio_API_Extension" title="en/Introducing the Audio API Extension">Introducción a la extensión de la API de sonido</a></li>
 <li>{{ HTMLElement("audio") }}</li>
</ul>

<p>{{ languages( { "en": "en/DOM/HTMLAudioElement" } ) }}</p>
