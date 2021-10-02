---
title: HTMLCanvasElement.getContext()
slug: Web/API/HTMLCanvasElement/getContext
tags:
  - API
  - Canevas
  - HTMLCanvasElement
  - Méthode
  - Reference
translation_of: Web/API/HTMLCanvasElement/getContext
---
<div>{{APIRef("Canvas API")}}</div>

<p>La méthode <strong><code>HTMLCanvasElement.getContext()</code></strong> retourne un contexte de dessin sur le canevas, ou {{jsxref("null")}} si l'identificateur de contexte n'est pas supporté.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var><em>canvas</em>.getContext(typeDeC<em>ontexte, attributsDeContexte</em>);</var>
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt>typeDeContexte</dt>
 <dd>Est un {{domxref("DOMString")}} contenant l'identifcateur de contexte définissant le contexte de dessin associé au canevas. Les valeurs possibles sont :
 <ul>
  <li><code>"2d</code>", conduisant à la création d'un objet {{domxref("CanvasRenderingContext2D")}} représentant un contexte de représentation bi-dimensionnel.</li>
  <li><code>"webgl"</code> (ou <code>"experimental-webgl"</code>) pour créer un objet {{domxref("WebGLRenderingContext")}} représentant un contexte de représentation tri-dimensionnel. Ce contexte est seulement disponible sur les navigateurs implémentant la version 1 de <a href="/en-US/docs/Web/WebGL">WebGL</a> (OpenGL ES 2.0).</li>
  <li>"<code>webgl2</code>" pour créer un objet {{domxref("WebGL2RenderingContext")}} représentant un contexte de représentation tri-dimensionnel. Ce contexte est seulement disponible sur les navigateurs implémentant la version 2 de <a href="/en-US/docs/Web/WebGL">WebGL</a> (OpenGL ES 3.0). {{experimental_inline}}.</li>
  <li><code>"bitmaprenderer"</code> pour créer un {{domxref("ImageBitmapRenderingContext")}} ne fournissant que la fonctionnalité de remplacement du contenu du canevas par une {{domxref("ImageBitmap")}} donnée.</li>
 </ul>

 <p>Note : l'identificateur "<code>experimental-webgl</code>" est utilisé dans les nouvelles implémentations de WebGL. Ces implémentations n'ont pas encore obtenu la conformité à la suite de test, ou l'emploi des pilotes graphiques sur la plateforme n'est pas encore stable. Le <a href="https://www.khronos.org/">Khronos Group</a> certifie les implémentations WebGL sous certaines <a href="https://www.khronos.org/registry/webgl/sdk/tests/CONFORMANCE_RULES.txt">règles de conformité</a>.</p>
 </dd>
 <dt><code>attributsDeContexte</code></dt>
 <dd>
 <p>Vous pouvez utiliser plusieurs attributs de contexte quand vous créez votre contexte de représentation, par exemple :</p>

 <pre class="brush: js">canvas.getContext('webgl',
                 { antialias: false,
                   depth: false });</pre>
 attributs de contexte 2d :

 <ul>
  <li><strong><code>alpha </code></strong>: booléen indiquant que le canevas contient un canal alpha. Si positionné à <code>false</code>, le navigateur saura ainsi que l'arrière-plan est toujours opaque, ce qui peut alors accélérer le dessin de contenus et d'images transparents.</li>
  <li>{{non-standard_inline}} (Gecko seulement) <strong><code>willReadFrequently </code></strong>: booléen indiquant si de nombreuses opérations de relecture sont prévues ou non. Cela forcera l'utilisation d'un canevas 2D logiciel (au lieu d'un canevas accéléré matériellement) et peut faire économiser de la mémoire lors d'appels fréquents à {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}}. Cette option est seulement disponible si l'indicateur <code>gfx.canvas.willReadFrequently.enable</code> est positionné à <code>true</code> (ce qui, par défaut, est seulement le cas pour B2G/Firefox OS).</li>
  <li>{{non-standard_inline}} (Blink seulement) <strong><code>storage </code></strong>: chaîne indiquant quel stockage est utilisé ("persistent" par défaut).</li>
 </ul>
 attributs de contexte WebGL :

 <ul>
  <li><strong><code>alpha </code></strong>: booléen indiquant que le canevas contient un tampon alpha.</li>
  <li><strong><code>depth </code></strong>: booléen indiquant que le tampon de dessin a un tampon de profondeur d'au moins 16 bits.</li>
  <li><strong><code>stencil </code></strong>: booléen indiquant que le tampon de dessin a un tampon stencil d'au moins 8 bits.</li>
  <li><strong><code>antialias </code></strong>: booléen indiquant si un anti-aliasing doit être effectué ou non.</li>
  <li><strong><code>premultipliedAlpha </code></strong>: booléen indiquant que le composeur de page supposera que le tampon de dessin contient des couleurs avec alpha pré-multiplié.</li>
  <li><strong><code>preserveDrawingBuffer </code></strong>: si la valeur est is true, les tampons ne seront pas effacés et conserveront leurs valeurs jusqu'à ce qu'elles soient effacées ou réécrites par l'auteur.</li>
  <li>
   <p><code><strong>failIfMajorPerformanceCaveat</strong></code><strong><code> </code></strong>: booléen indiquant qu'un contexte sera créé si la performance du système est faible.</p>
  </li>
 </ul>
 </dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée :</h3>

<p>Un {{domxref("RenderingContext")}}, qui est soit un</p>

<ul>
 <li>{{domxref("CanvasRenderingContext2D")}} pour <code>"2d"</code>,</li>
 <li>{{domxref("WebGLRenderingContext")}} pour <code>"webgl"</code> et <code>"experimental-webgl"</code>,</li>
 <li>{{domxref("WebGL2RenderingContext")}} pour <code>"webgl2"</code> ou</li>
 <li>{{domxref("ImageBitmapRenderingContext")}} pour <code>"bitmaprenderer"</code>.</li>
</ul>

<p>Si le <em>typeDeContexte</em> ne correspond pas à un contexte de dessin possible, <code>null</code> est retourné.</p>

<h2 id="Exemples">Exemples</h2>

<p>Étant donné l'élément {{HTMLElement("canvas")}} :</p>

<pre class="brush: html">&lt;canvas id="canvas" width="300" height="300"&gt;&lt;/canvas&gt;
</pre>

<p>vous pouvez obtenir un contexte 2d du canevas grâce au code suivant :</p>

<pre class="brush: js">var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
console.log(ctx); // CanvasRenderingContext2D { ... }
</pre>

<p>Vous avez alors le <a href="/en-US/docs/Web/API/CanvasRenderingContext2D">contexte 2D de représentation</a> pour un canevas, et vous pouvez dessiner à l'intérieur.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-canvas-getcontext", "HTMLCanvasElement.getContext")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Pas de changement depuis l'instantané le plus récent, {{SpecName('HTML5 W3C')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', "scripting-1.html#dom-canvas-getcontext", "HTMLCanvasElement.getContext")}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "scripting-1.html#dom-canvas-getcontext", "HTMLCanvasElement.getContext")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Instantané du {{SpecName('HTML WHATWG')}} contenant la définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>

<p>{{Compat("api.HTMLCanvasElement.getContext")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface la définissant, {{domxref("HTMLCanvasElement")}}.</li>
 <li>{{domxref("OffscreenCanvas.getContext()")}}.</li>
 <li>Contextes de représentation disponibles : {{domxref("CanvasRenderingContext2D")}}, {{domxref("WebGLRenderingContext")}} et {{domxref("WebGL2RenderingContext")}} et {{domxref("ImageBitmapRenderingContext")}}.</li>
</ul>
