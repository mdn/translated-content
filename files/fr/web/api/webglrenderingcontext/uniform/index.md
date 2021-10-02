---
title: 'WebGLRenderingContext.uniform[1234][fi][v]()'
slug: Web/API/WebGLRenderingContext/uniform
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/uniform
---
<div>{{APIRef("WebGL")}}</div>

<p>Les méthodes <strong><code>WebGLRenderingContext.uniform[1234][fi][v]()</code></strong> de l'<a href="/fr-FR/docs/Web/API/WebGL_API">API WebGL</a> indiquent les valeurs des variables uniform.</p>

<div class="note">
<p><strong>Note :</strong> Beaucoup des fonctions décrites ici ont des interfaces WebGL 2 étendues, qui peuvent être trouvées en {{domxref("WebGL2RenderingContext.uniform","WebGL2RenderingContext.uniform[1234][uif][v]()")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">void <var>gl</var>.uniform1f(<var>emplacement</var>, <var>v0</var>);
void <var>gl</var>.uniform1fv(<var>emplacement</var>, <var>valeur</var>);
void <var>gl</var>.uniform1i(<var>emplacement</var>, <var>v0</var>);
void <var>gl</var>.uniform1iv(<var>emplacement</var>, <var>valeur</var>);

void <var>gl</var>.uniform2f(<var>emplacement</var>, <var>v0</var>, <var>v1</var>);
void <var>gl</var>.uniform2fv(<var>emplacement</var>, <var>valeur</var>);
void <var>gl</var>.uniform2i(<var>emplacement</var>, <var>v0</var>, <var>v1</var>);
void <var>gl</var>.uniform2iv(<var>emplacement</var>, <var>valeur</var>);

void <var>gl</var>.uniform3f(<var>emplacement</var>, <var>v0</var>, <var>v1</var>, <var>v2</var>);
void <var>gl</var>.uniform3fv(<var>emplacement</var>, <var>valeur</var>);
void <var>gl</var>.uniform3i(<var>emplacement</var>, <var>v0</var>, <var>v1</var>, <var>v2</var>);
void <var>gl</var>.uniform3iv(<var>emplacement</var>, <var>valeur</var>);

void <var>gl</var>.uniform4f(<var>emplacement</var>, <var>v0</var>, <var>v1</var>, <var>v2</var>, <var>v3</var>);
void <var>gl</var>.uniform4fv(<var>emplacement</var>, <var>valeur</var>);
void <var>gl</var>.uniform4i(<var>emplacement</var>, <var>v0</var>, <var>v1</var>, <var>v2</var>, <var>v3</var>);
void <var>gl</var>.uniform4iv(<var>emplacement</var>, <var>valeur</var>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt>emplacement</dt>
 <dd>Un objet {{domxref("WebGLUniformLocation")}} contenant l'emplacement de l'attribut uniform à modifier.</dd>
 <dt><code>valeur, v0, v1, v2, v3</code></dt>
 <dd>La nouvelle valeur à utiliser pour la variable uniform. Types possibles :
 <ul>
  <li>Un {{jsxref("Number")}} flottant pour les valeurs flottantes (méthodes avec "f").</li>
  <li>Une suite de nombres flottants (par exemple, un {{jsxref("Float32Array")}} ou un {{jsxref("Array")}} de nombres) pour les méthodes de vecteurs de flottants (méthodes avec "fv").</li>
  <li>Un {{jsxref("Number")}} entier pour les valeurs entières (méthodes avec "i").</li>
  <li>Un {{jsxref("int32Array")}} pour les méthodes de vecteur d'entiers (méthodes avec "iv").</li>
 </ul>
 </dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Aucune.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">gl.uniform1f(u_alpha, 0.8);</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('WebGL', "#5.14.10", "uniform")}}</td>
   <td>{{Spec2('WebGL')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('OpenGL ES 2.0', "glUniform.xml", "glUniform")}}</td>
   <td>{{Spec2('OpenGL ES 2.0')}}</td>
   <td>Page man de l'API OpenGL.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WebGLRenderingContext.uniform1f")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext.uniformMatrix()")}}</li>
</ul>
