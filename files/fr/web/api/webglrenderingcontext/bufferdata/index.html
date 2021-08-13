---
title: WebGLRenderingContext.bufferData()
slug: Web/API/WebGLRenderingContext/bufferData
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/bufferData
---
<div>{{APIRef("WebGL")}}</div>

<p>La méthode <strong><code>WebGLRenderingContext.bufferData()</code></strong> de l'<a href="/fr-FR/docs/Web/API/WebGL_API">API WebGL</a> initialise et crée le magasin de données de l'objet tampon.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">// WebGL1:
void gl.bufferData(cible, taille, utilisation);
void gl.bufferData(cible, ArrayBuffer? donneesSrc, utilisation);
void gl.bufferData(cible, ArrayBufferView donneesSrc, utilisation);

// WebGL2:
void gl.bufferData(cible, ArrayBufferView donneesSrc, utilisation, decalageSrc, longueur);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt>cible</dt>
 <dd>Un {{domxref ("GLenum")}} spécifiant le point de liaison (cible). Valeurs possibles :
 <ul>
  <li><code>gl.ARRAY_BUFFER</code> : tampon contenant des attributs de sommet, tels que des coordonnées de sommet, des données de coordonnées de texture ou des données de couleurs de sommet ;</li>
  <li><code>gl.ELEMENT_ARRAY_BUFFER</code> : tampon utilisé pour les indices d'éléments ;</li>
  <li>lors de l'utilisation d'un {{domxref ("WebGL2RenderingContext", "WebGL context 2", "", 1)}}, les valeurs suivantes sont en outre disponibles :
   <ul>
    <li><code>gl.COPY_READ_BUFFER</code> : tampon pour la copie d'un objet tampon à un autre ;</li>
    <li><code>gl.COPY_WRITE_BUFFER</code> : tampon pour la copie d'un objet tampon à un autre ;</li>
    <li><code>gl.TRANSFORM_FEEDBACK_BUFFER</code> : tampon pour les opérations de retour de transformation ;</li>
    <li><code>gl.UNIFORM_BUFFER</code> : tampon utilisé pour stocker des blocs uniform ;</li>
    <li><code>gl.PIXEL_PACK_BUFFER</code> : tampon utilisé pour les opérations de transfert de pixels ;</li>
    <li><code>gl.PIXEL_UNPACK_BUFFER</code> : tampon utilisé pour les opérations de transfert de pixels.</li>
   </ul>
  </li>
 </ul>
 </dd>
 <dt>taille</dt>
 <dd>Un {{domxref("GLsizeiptr")}} définissant la taille du magasin de données de l'objet tampon.</dd>
 <dt>donneesSrc {{optional_inline}}</dt>
 <dd>Un {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}} ou l'un des types de tableau typés {{domxref("ArrayBufferView")}} à copier dans le magasin de données. Si <code>null</code>, un magasin de données est quand même créé, mais son contenu n'est ni initialisé, ni défini.</dd>
 <dt>utilisation</dt>
 <dd>Un {{domxref("GLenum")}} indiquant le modèle d'utilisation du magasin de données. Valeurs possibles :
 <ul>
  <li><code>gl.STATIC_DRAW</code> : le contenu du tampon est susceptible d'être utilisé souvent mais de ne pas changer souvent ; du contenu est écrit dans le tampon, mais non lu ;</li>
  <li><code>gl.DYNAMIC_DRAW</code> : le contenu du tampon est susceptible d'être souvent utilisé et de changer souvent ; du contenu est écrit dans le tampon, mais non lu ;</li>
  <li><code>gl.STREAM_DRAW</code> : le contenu du tampon est susceptible de ne pas être utilisé souvent ; du contenu est écrit dans le tampon, mais non lu ;</li>
  <li>lors de l'utilisation d'un {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, les valeurs suivantes the following values sont en outre disponibles :
   <ul>
    <li><code>gl.STATIC_READ</code> : le contenu du tampon est susceptible d'être utilisé souvent et de ne pas changer souvent ; du contenu est lu depuis le tampon, mais non écrit ;</li>
    <li><code>gl.DYNAMIC_READ</code> : le contenu du tampon est susceptible d'être utilisé souvent et de changer souvent ; du contenu est lu depuis le tampon, mais non écrit ;</li>
    <li><code>gl.STREAM_READ</code> : le contenu du tampon est susceptible de ne pas être utilisé souvent ; du contenu est lu depuis le tampon, mais non écrit ;</li>
    <li><code>gl.STATIC_COPY</code> : le contenu du tampon est susceptible d'être utilisé souvent et de ne pas changer souvent ; aucun contenu n'est écrit ou lu par l'utilisateur ;</li>
    <li><code>gl.DYNAMIC_COPY</code> : le contenu du tampon est susceptible d'être utilisé souvent et de changer souvent ; aucun contenu n'est écrit ou lu par l'utilisateur ;</li>
    <li><code>gl.STREAM_COPY</code> : le contenu du tampon est susceptible d'être utilisé souvent et de ne pas changer souvent ; aucun contenu n'est écrit ou lu par l'utilisateur.</li>
   </ul>
  </li>
 </ul>
 </dd>
 <dt>decalageSrc</dt>
 <dd>Un {{domxref("GLuint")}} indiquant le décalage d'indice d'élément où commencer à lire dans le tampon.</dd>
 <dt><code>longueur</code> {{optional_inline}}</dt>
 <dd>Un {{domxref("GLuint")}} valant 0 par défaut.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Aucune.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
 <li>Une erreur <code>gl.OUT_OF_MEMORY</code> est déclenchée si le contexte ne peut pas créer un magasin de données de la <code>taille</code> indiquée.</li>
 <li>Une erreur<code>gl.INVALID_VALUE</code> est déclenchée si <code>taille</code> est négative.</li>
 <li>Une erreur <code>gl.INVALID_ENUM</code> est déclenchée si <code>cible</code> ou<code>utilisation</code> ne sont pas l'un des enums autorisés.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utilisation_de_bufferData">Utilisation de <code>bufferData</code></h3>

<pre class="brush: js">var canevas = document.getElementById('canevas');
var gl = canevas.getContext('webgl');
var tampon = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, tampon);
gl.bufferData(gl.ARRAY_BUFFER, 1024, gl.STATIC_DRAW);
</pre>

<h3 id="Récupération_de_l'information_de_tampon">Récupération de l'information de tampon</h3>

<p>Pour vérifier l'utilisation du tampon en cours et la taille du tampon, utiliser la méthode {{domxref("WebGLRenderingContext.getBufferParameter()")}}.</p>

<pre class="brush: js">gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_USAGE);
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
   <td>{{SpecName('WebGL', "#5.14.5", "bufferData")}}</td>
   <td>{{Spec2('WebGL')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('OpenGL ES 2.0', "glBufferData.xml", "glBufferData")}}</td>
   <td>{{Spec2('OpenGL ES 2.0')}}</td>
   <td>
    <p>Page man de l’API OpenGL.</p>
   </td>
  </tr>
  <tr>
   <td>{{SpecName('OpenGL ES 3.0', "glBufferData.xhtml", "glBufferData")}}</td>
   <td>{{Spec2('OpenGL ES 3.0')}}</td>
   <td>
    <p>Page man de l’API OpenGL ES 3 (similaire).</p>
    Ajoute les noouveaux tampons <code>cible</code> :<br>
    <code>gl.COPY_READ_BUFFER</code>,<br>
    <code>gl.COPY_WRITE_BUFFER</code>,<br>
    <code>gl.TRANSFORM_FEEDBACK_BUFFER</code>,<br>
    <code>gl.UNIFORM_BUFFER</code>,<br>
    <code>gl.PIXEL_PACK_BUFFER</code>,<br>
    <code>gl.PIXEL_UNPACK_BUFFER</code><br>
    <br>
    Ajoute les nouvelles indications d'<code>utilisation</code> :<br>
    <code>gl.STATIC_READ</code>,<br>
    <code>gl.DYNAMIC_READ</code>,<br>
    <code>gl.STREAM_READ</code>,<br>
    <code>gl.STATIC_COPY</code>,<br>
    <code>gl.DYNAMIC_COPY</code>,<br>
    <code>gl.STREAM_COPY</code>.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WebGLRenderingContext.bufferData")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext.createBuffer()")}}</li>
 <li>{{domxref("WebGLRenderingContext.bufferSubData()")}}</li>
 <li>Autres tampons : {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}</li>
</ul>
