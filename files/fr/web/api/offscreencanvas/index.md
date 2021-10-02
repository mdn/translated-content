---
title: OffscreenCanvas
slug: Web/API/OffscreenCanvas
tags:
  - API
  - Canevas
  - Experimental
  - Interface
  - Reference
translation_of: Web/API/OffscreenCanvas
---
<div>{{APIRef("Canvas API")}} {{SeeCompatTable}}</div>

<p>L'interface <code>OffscreenCanvas</code> fournit un canevas qui peut être restitué hors écran. Il est disponible dans les contextes à la fois window et <a href="/fr-FR/docs/Web/API/Web_Workers_API">worker</a>.</p>

<div class="note">
<p><strong>Note :</strong> Cette API n'est actuellement implémentée que pour les contextes <a href="/fr-FR/docs/Web/API/WebGLRenderingContext">WebGL1</a> et<a href="/fr-FR/docs/Web/API/WebGL2RenderingContext">WebGL2</a>. Voir {{bug(801176)}} pour le support de l'<a href="/fr-FR/docs/Web/API/Canvas_API">API canvas</a> depuis les workers.</p>
</div>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("OffscreenCanvas.OffscreenCanvas", "OffscreenCanvas()")}}</dt>
 <dd>Constructeur <code>OffscreenCanvas</code>. Crée un nouvel objet <code>OffscreenCanvas</code>.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("OffscreenCanvas.height")}}</dt>
 <dd>La hauteur du canevas hors écran.</dd>
 <dt>{{domxref("OffscreenCanvas.width")}}</dt>
 <dd>La largeur du canevas hors écran.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{domxref("OffscreenCanvas.getContext()")}}</dt>
 <dd>Retourne un contexte de rendu pour le canevas hors écran.</dd>
</dl>

<dl>
 <dt>{{domxref("OffscreenCanvas.toBlob()")}}</dt>
 <dd>Crée un objet {{domxref("Blob")}} représentant l'image contenue dans le canevas.</dd>
</dl>

<dl>
 <dt>{{domxref("OffscreenCanvas.transferToImageBitmap()")}}</dt>
 <dd>Crée un objet {{domxref("ImageBitmap")}} à partir de l'image la plus récemment générée du <code>OffscreenCanvas</code>.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Affichage_synchrone_d'images_produites_par_un_OffscreenCanvas">Affichage synchrone d'images produites par un <code>OffscreenCanvas</code></h3>

<p>Une façon d'utiliser l'API <code>OffscreenCanvas</code> est d'utiliser un {{domxref("RenderingContext")}} obtenu à partir d'un objet <code>OffscreenCanvas</code> pour générer de nouvelles images. Une fois qu'une nouvelle image a fini d'être générée dans ce contexte, la méthode {{domxref("OffscreenCanvas.transferToImageBitmap", "transferToImageBitmap()")}} peut être appelée pour sauvegarder l'image générée la plus récente. Cette méthode retourne un objet {{domxref("ImageBitmap")}}, qui peut être utilisé dans une grande variété d'API Web et également dans un second canevas, sans créer de copie par transfert.</p>

<p>Pour afficher l'<code>ImageBitmap</code>, vous pouvez utiliser un contexte {{domxref("ImageBitmapRenderingContext")}}, qui peut être créé en appelant <code>canvas.getContext("bitmaprenderer")</code> sur un élément canevas (visible). Ce contexte fournit uniquement des fonctionnalités pour remplacer le contenu du canevas par l'<code>ImageBitmap</code> donnée. Un appel à {{domxref("ImageBitmapRenderingContext.transferImageBitmap()")}} avec l'<code>ImageBitmap</code> précédemment affichée et enregistrée à partir de OffscreenCanvas, affichera l'<code>ImageBitmap</code> sur le canevas et transférera son appartenance au canevas. Un seul <code>OffscreenCanvas</code> peut transférer des images dans un nombre arbitraire d'autres objets <code>ImageBitmapRenderingContext</code>.</p>

<p>Étant donnés ces deux éléments {{HTMLElement("canvas")}} :</p>

<pre class="brush: html">&lt;canvas id="une"&gt;&lt;/canvas&gt;
&lt;canvas id="deux"&gt;&lt;/canvas&gt;</pre>

<p>le code suivant fournira la restitution, en utilisant un <code>OffscreenCanvas</code> comme décrit ci-dessus.</p>

<pre class="brush: js">var une = document.getElementById("une").getContext("bitmaprenderer");
var deux = document.getElementById("deux").getContext("bitmaprenderer");

var horsEcran = new OffscreenCanvas(256, 256);
var gl = horsEcran.getContext('webgl');

// ... un peu de dessin pour le premier canevas en utilisant le contexte gl ...

// Exécuter la restitution dans le premier canevas
var bitmapUne = horsEcran.transferToImageBitmap();
une.transferImageBitmap(bitmapUne);

// ... davantage de dessin pour le second canevas en utilisant le context gl ...

// Exécuter la restitution pour le second canevas
var bitmapDeux = horsEcran.transferToImageBitmap();
deux.transferImageBitmap(bitmapDeux);
</pre>

<h3 id="Affichage_asynchrone_d'images_produites_par_un_OffscreenCanvas">Affichage asynchrone d'images produites par un <code>OffscreenCanvas</code></h3>

<p>Une autre façon d'utiliser l'API <code>OffscreenCanvas</code> est d'appeler {{domxref("HTMLCanvasElement.transferControlToOffscreen", "transferControlToOffscreen()")}} sur un élément {{HTMLElement("canvas")}}, soit sur un worker, soit sur le thread principal, ce qui retournera un objet <code>OffscreenCanvas</code> à partir d'un objet {{domxref("HTMLCanvasElement")}} depuis le thread principal. Appeler {{domxref("OffscreenCanvas.getContext", "getContext()")}} permettra d'obtienir alors un <code>RenderingContext</code> à partir de ce <code>OffscreenCanvas</code>.</p>

<p>Afin de rendre les cadres visibles, vous pouvez appeler <code>commit()</code> sur ce <code>RenderingContext</code>, afin que les cadres soient renvoyés dans l'élément {{HTMLElement ("canvas")}} original.</p>

<p>Notez que dans Firefox, cette API n'est actuellement implémentée que pour le <a href="/fr-FR/docs/Web/API/WebGL_API">contexte WebGL</a> ({{domxref ("WebGLRenderingContext.commit()")}}). Pour la prise en charge de l'API Canvas 2D par les employés, voir {{bug (801176)}}.</p>

<p>main.js (code du thread principal) :</p>

<pre class="brush: js">var canevasHtml = document.getElementById("canevas");
var horsEcran = canevasHtml.transferControlToOffscreen();

var worker = new Worker("offscreencanvas.js");
worker.postMessage({canvas: offscreen}, [offscreen]);
</pre>

<p>offscreencanvas.js (code worker) :</p>

<pre class="brush: js">onmessage = function(evt) {
  var canevas = evt.data.canvas.
  var gl = canevas.getContext("webgl");

  // ... un peu de dessin en utilisant le contexte gl ...

  // Renvoyer les images dans l'HTMLCanvasElement original
  gl.commit();
};
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#the-offscreencanvas-interface", "OffscreenCanvas")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.OffscreenCanvas")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://hacks.mozilla.org/2016/01/webgl-off-the-main-thread/">WebGL Off the Main Thread – Mozilla Hacks</a></li>
 <li>{{domxref("CanvasRenderingContext2D")}}</li>
 <li>{{domxref("ImageBitmap")}}</li>
 <li>{{domxref("ImageBitmapRenderingContext")}}</li>
 <li>{{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}</li>
 <li>{{domxref("WebGLRenderingContext.commit()")}}</li>
</ul>
