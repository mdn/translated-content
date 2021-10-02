---
title: ShadowRoot.mode
slug: Web/API/ShadowRoot/mode
tags:
  - API
  - Propriété
  - Reference
  - ShadowRoot
  - mode
  - shadow dom
translation_of: Web/API/ShadowRoot/mode
---
<div>{{APIRef("Shadow DOM")}}</div>

<p>La propriété <strong><code>mode</code></strong>, rattachée à l'interface {{domxref("ShadowRoot")}}, indique son mode. Celui-ci peut valoir <code>open</code> ou <code>closed</code> et indique si les fonctionnalités internes de la racine sont accessibles en JavaScript.</p>

<p>Lorsque le mode d'une racine <em>shadow</em> vaut <code>closed</code>, les détails d'implémentation internes sont inaccessibles et inchangeables avec JavaScript (de la même façon que les détails du fonctionnement de l'élément {{HTMLElement("video")}} sont inaccessibles et inchangeables en JavaScript).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>mode</em> = <em>shadowRoot</em>.mode</pre>

<h3 id="Valeur">Valeur</h3>

<p>Une valeur définie via l'énumération <code><a href="https://dom.spec.whatwg.org/#enumdef-shadowrootmode">ShadowRootMode</a></code> : soit <code>open</code>, soit <code>closed</code>.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">let customElem = document.querySelector('mon-element-shadow-dom');
let shadow = customElem.shadowRoot;

// Une autre façon de vérifier si la racine est ouverte :
// on obtiendra null si elle est fermée
if(shadow) {
  // Si elle est ouverte, on ferme la racine pour
  // cacher ce qu'il y a à l'intérieur.
  shadow.mode = 'closed';
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG','#dom-shadowroot-mode','ShadowRoot.mode')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.ShadowRoot.mode")}}</p>
