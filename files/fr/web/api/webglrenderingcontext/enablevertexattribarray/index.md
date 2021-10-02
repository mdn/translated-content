---
title: WebGLRenderingContext.enableVertexAttribArray()
slug: Web/API/WebGLRenderingContext/enableVertexAttribArray
tags:
  - 3D
  - API
  - API WebGL
  - Attributs des Sommets
  - Graphiques
  - Méthode
  - Reference
  - Tableau des Attributs
  - WebGL
  - WebGLRenderingContext
  - enableVertexAttribArray
  - shader de sommet
  - sommet
translation_of: Web/API/WebGLRenderingContext/enableVertexAttribArray
---
<div>{{APIRef("WebGL")}}</div>

<p>La méthode {{domxref ("WebGLRenderingContext")}} <strong><code>enableVertexAttribArray()</code> -</strong> qui fait partie de l'API WebGL - active le tableau générique des attributs de sommet à l'indice spécifié dans la liste des tableaux d'attributs.</p>

<div class="note">
<p><strong>Note :</strong> Vous pouvez désactiver le tableau d'attributs en appelant {{domxref("WebGLRenderingContext.disableVertexAttribArray", "disableVertexAttribArray()")}}.</p>
</div>

<p>Dans WebGL, les valeurs s'appliquant à un sommet particulier sont stockées dans des attributs. Ceux-ci ne sont disponibles que pour le code JavaScript et le shader de sommet. Les attributs sont référencés par un numéro d'indice dans la liste des attributs gérés par la GPU. Certains indices d'attributs de sommet peuvent avoir des buts prédéfinis, suivant la plate-forme et/ou la GPU. D'autres sont affectés par la couche WebGL lorsque vous créez les attributs.</p>

<p>De toute façon, puisque les attributs ne peuvent pas être utilisés sauf s'ils sont activés, et ils sont désactivés par défaut, vous devez appeler <code>enableVertexAttribArray()</code> pour activer les attributs individuels, afin qu'ils puissent être utilisés. Ceci fait, d'autres méthodes peuvent être utilisées pour accéder à l'attribut, y compris {{domxref("WebGLRenderingContext.vertexAttribPointer", "vertexAttribPointer()")}}, {{domxref("WebGLRenderingContext.vertexAttrib", "vertexAttrib*()")}}, et {{domxref("WebGLRenderingContext.getVertexAttrib"," getVertexAttrib()")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">void <var>gl</var>.enableVertexAttribArray(<var>indice</var>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>indice</code></dt>
 <dd>Un {{domxref("GLuint")}} indiquant le numéro d'indice identifiant de façon unique l'attribut de sommet à activer. Si vous connaissez le nom de l'attribut mais pas son indice, vous pouvez obtenir l'indice en appelant {{domxref ("WebGLRenderingContext.getAttribLocation", "getAttribLocation()")}}.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p><code>undefined</code>.</p>

<h3 id="Erreurs">Erreurs</h3>

<p>Pour vérifier d'éventuelles erreurs  après l'appel à <code>enableVertexAttribArray()</code>, appelez {{domxref("WebGLRenderingContext.getError", "getError()")}}.</p>

<dl>
 <dt><code>WebGLRenderingContext.INVALID_VALUE</code></dt>
 <dd>L'<code>indice</code> spécifié est invalide, c'est-à-dire qu'il est supérieur ou égal au nombre maximal d'entrées autorisées dans la liste des attributs de sommet du contexte, comme indiqué par la valeur de <code>WebGLRenderingContext.MAX_VERTEX_ATTRIBS</code>.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<p>Ce code — un extrait de l'exemple complet <a href="/fr-FR/docs/Web/API/WebGL_API/Basic_2D_animation_example">Un exemple d'animation 2D WebGL de base</a> — montre l'utilisation de <code>enableVertexArray()</code> pour activer l'attribut qui sera utilisé par la couche WebGL pour passer des sommets individuels depuis le tampon des sommets à la fonction shader de sommet.</p>

<pre class="brush: js">gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

aVertexPosition =
    gl.getAttribLocation(programmeShader, "aVertexPosition");

gl.enableVertexAttribArray(aVertexPosition);
gl.vertexAttribPointer(aVertexPosition, vertexNumComponents,
      gl.FLOAT, false, 0, 0);

gl.drawArrays(gl.TRIANGLES, 0, vertexCount);</pre>

<div class="note">
  <p><strong>Note :</strong> Cet extrait de code provient de <a href="/fr-FR/docs/Web/API/WebGL_API/Basic_2D_animation_example#Drawing_and_animating_the_scene">la fonction animateScene()</a> dans "Un exemple d'animation WebGL 2D de base". Voir cet article pour l'exemple complet et pour voir l'animation résultante en action.</p>
</div>

<p>Ce code définit le tampon des sommets qui sera utilisé pour dessiner les triangles de la forme en appelant {{domxref("WebGLRenderingContext.bindBuffer", "bindBuffer()")}}. Ensuite, l'indice de l'attribut de position des sommets est obtenu à partir du programme shader en appelant {{domxref("WebGLRenderingContext.getAttribLocation", "getAttribLocation()")}}.</p>

<p>Avec l'indice de l'attribut de position des sommets maintenant disponible dans <code>aVertexPosition</code>, nous appelons <code>enableVertexAttribArray()</code> pour activer l'attribut de position afin qu'il puisse être utilisé par le programme shader (en particulier, par le shader de sommet).</p>

<p>Le tampon des sommets est alors lié à l'attribut <code>aVertexPosition</code> en appelant {{domxref("WebGLRenderingContext.vertexAttribPointer", "vertexAttribPointer()")}}. Cette étape n'est pas évidente, puisque cette liaison est presque un effet de biais. Mais cela a pour résultat qu'un accès à <code>aVertexPosition</code> récupére désormais des données à partir du tampon des sommets.</p>

<p>Avec l'association définie entre le tampon des sommets de notre forme et l'attribut <code>aVertexPosition</code> utilisé pour fournir les sommets un par un dans le shader de sommet, nous sommes prêts à dessiner la forme en appelant {{domxref ("WebGLRenderingContext.drawArrays", "drawArrays()")}}.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('WebGL', "#5.14.10", "enableVertexAttribArray")}}</td>
   <td>{{Spec2('WebGL')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('OpenGL ES 2.0', "glEnableVertexAttribArray.xml", "glEnableVertexAttribArray")}}</td>
   <td>{{Spec2('OpenGL ES 2.0')}}</td>
   <td>
    <p>Page man de l’API OpenGL.</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WebGLRenderingContext.enableVertexAttribArray")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr-FR/docs/Web/API/WebGL_API/Data">Données en WebGL</a></li>
 <li><a href="/fr-FR/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context">Ajout de contenu 2D à un contexte WebGL</a></li>
 <li><a href="/fr-FR/docs/Web/API/WebGL_API/Basic_2D_animation_example">Un exemple d'animation WebGL 2D de base</a></li>
 <li>{{domxref("WebGLRenderingContext.disableVertexAttribArray", "disableVertexAttribArray()")}}</li>
</ul>
