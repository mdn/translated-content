---
title: WebGLFramebuffer
slug: Web/API/WebGLFramebuffer
tags:
  - API
  - Reference
  - WebGL
translation_of: Web/API/WebGLFramebuffer
---
<div>{{APIRef("WebGL")}}</div>

<p>L'interface <strong>WebGL Framebuffer</strong> fait partie de l'<a href="/fr-FR/docs/Web/API/WebGL_API">API WebGL</a> et représente une collection de tampons servant de destination de rendu.</p>

<h2 id="Description">Description</h2>

<p>L'objet <code>WebGLFramebuffer</code> ne définit aucune méthode ou propriété en propre, et son contenu n'est pas directement accessible. Lorsque vous travaillez avec des objets <code>WebGLFramebuffer</code>, les méthodes suivantes du {{domxref("WebGLRenderingContext")}} sont utiles :</p>

<ul>
 <li>{{domxref("WebGLRenderingContext.bindFramebuffer()")}}</li>
 <li>{{domxref("WebGLRenderingContext.createFramebuffer()")}}</li>
 <li>{{domxref("WebGLRenderingContext.deleteFramebuffer()")}}</li>
 <li>{{domxref("WebGLRenderingContext.isFramebuffer()")}}</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<h3 id="Création_d'un_tampon_d'image">Création d'un tampon d'image</h3>

<pre class="brush: js">var canevas = document.getElementById('canevas');
var gl = canevas.getContext('webgl');
var tampon = gl.createFramebuffer();
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
   <td>{{SpecName('WebGL', "#5.5", "WebGLFramebuffer")}}</td>
   <td>{{Spec2('WebGL')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WebGLFramebuffer")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext.bindFramebuffer()")}}</li>
 <li>{{domxref("WebGLRenderingContext.createFramebuffer()")}}</li>
 <li>{{domxref("WebGLRenderingContext.deleteFramebuffer()")}}</li>
 <li>{{domxref("WebGLRenderingContext.isFramebuffer()")}}</li>
 <li>Autres tampon : {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}</li>
</ul>
