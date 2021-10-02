---
title: WebGLRenderingContext.bindBuffer()
slug: Web/API/WebGLRenderingContext/bindBuffer
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/bindBuffer
---
<div>{{APIRef("WebGL")}}</div>

<p>La méthode <strong><code>WebGLRenderingContext.bindBuffer()</code></strong> de l'<a href="/fr-FR/docs/Web/API/WebGL_API">API WebGL</a> lie un {{domxref("WebGLBuffer")}} donné à une cible.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">void <var>gl</var>.bindBuffer(<var>cible</var>, <var>tampon</var>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt>cible</dt>
 <dd>Un {{domxref ("GLenum")}} spécifiant le point de liaison (cible). Valeurs possibles :</dd>
</dl>

<ul>
 <li><code>gl.ARRAY_BUFFER</code> : tampon contenant des attributs de sommet, tels que des coordonnées de vertex, des données de coordonnées de texture ou des données de couleurs de sommet ;</li>
 <li><code>gl.ELEMENT_ARRAY_BUFFER</code> : tampon utilisé pour les indices d'éléments ;</li>
 <li>Lors de l'utilisation d'un {{domxref("WebGL2RenderingContext", "WebGL context 2", "", 1)}}, les valeurs suivantes sont disponibles en plus :
  <ul>
   <li><code>gl.COPY_READ_BUFFER</code> : tampon pour la copie d'un objet tampon à un autre ;</li>
   <li><code>gl.COPY_WRITE_BUFFER</code> : tampon pour la copie d'un objet tampon à un autre ;</li>
   <li><code>gl.TRANSFORM_FEEDBACK_BUFFER</code> : tampon pour les opérations de retour de la transformation ;</li>
   <li><code>gl.UNIFORM_BUFFER</code> : tampon utilisé pour stocker des blocs uniformes ;</li>
   <li><code>gl.PIXEL_PACK_BUFFER</code> : tampon utilisé pour les opérations de transfert de pixels ;</li>
   <li><code>gl.PIXEL_UNPACK_BUFFER</code> : tampon utilisé pour les opérations de transfert de pixels.</li>
  </ul>
 </li>
</ul>

<dl>
 <dt>tampon</dt>
 <dd>Un {{domxref ("WebGLBuffer")}} à lier.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Aucune.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Une seule cible peut être liée à un {{domxref ("WebGLBuffer")}} donné. Une tentative de lier le tampon à une autre cible déclenchera une erreur <code>INVALID_OPERATION</code> et la liaison du tampon en cours restera la même.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Liaison_d'un_tampon_à_une_cible">Liaison d'un tampon à une cible</h3>

<pre class="brush: js">var canevas = document.getElementById('canevas');
var gl = canevas.getContext('webgl');
var tampon = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, tampon);
</pre>

<h3 id="Récupération_des_liaisons_en_cours">Récupération des liaisons en cours</h3>

<p>Pour vérifier les liaisons de tampon en cours, interrogez les constantes ARRAY_BUFFER_BINDING et ELEMENT_ARRAY_BUFFER_BINDING.</p>

<pre class="brush: js">gl.getParameter(gl.ARRAY_BUFFER_BINDING);
gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
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
   <td>{{SpecName('WebGL', "#5.14.5", "bindBuffer")}}</td>
   <td>{{Spec2('WebGL')}}</td>
   <td>
    <p>Définition initiale pour WebGL.</p>
   </td>
  </tr>
  <tr>
   <td>{{SpecName('OpenGL ES 2.0', "glBindBuffer.xml", "glBindBuffer")}}</td>
   <td>{{Spec2('OpenGL ES 2.0')}}</td>
   <td>Page man de l’API OpenGL ES 2 (similaire).</td>
  </tr>
  <tr>
   <td>{{SpecName('WebGL2', "#3.7.1", "bindBuffer")}}</td>
   <td>{{Spec2('WebGL2')}}</td>
   <td>
    <p>Définition mise à jour pour WebGL 2.</p>

    <p>Ajoute de nouveaux tampons <code>cible</code> :<br>
     <code>gl.COPY_READ_BUFFER</code>,<br>
     <code>gl.COPY_WRITE_BUFFER</code>,<br>
     <code>gl.TRANSFORM_FEEDBACK_BUFFER</code>,<br>
     <code>gl.UNIFORM_BUFFER</code>,<br>
     <code>gl.PIXEL_PACK_BUFFER</code>,<br>
     <code>gl.PIXEL_UNPACK_BUFFER</code></p>
   </td>
  </tr>
  <tr>
   <td>{{SpecName('OpenGL ES 3.0', "glBindBuffer.xhtml", "glBindBuffer")}}</td>
   <td>{{Spec2('OpenGL ES 3.0')}}</td>
   <td>Page man de l’API OpenGL ES 3 (similaire).</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WebGLRenderingContext.bindBuffer")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext.createBuffer()")}}</li>
 <li>{{domxref("WebGLRenderingContext.deleteBuffer()")}}</li>
 <li>{{domxref("WebGLRenderingContext.isBuffer()")}}</li>
 <li>Autres tampons : {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}</li>
</ul>
