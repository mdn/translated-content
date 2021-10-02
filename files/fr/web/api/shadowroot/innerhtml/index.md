---
title: ShadowRoot.innerHTML
slug: Web/API/ShadowRoot/innerHTML
tags:
  - API
  - Propriété
  - Reference
  - ShadowRoot
  - innerHTML
  - shadow dom
translation_of: Web/API/ShadowRoot/innerHTML
---
<div>{{APIRef("Shadow DOM")}}</div>

<p>La propriété <strong><code>innerHTML</code></strong>, rattachée à l'interface {{domxref("ShadowRoot")}}, permet de définir ou de récupérer une référence à l'arbre DOM contenu dans la racine <code>ShadowRoot</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>domString</em> = <em>shadowRoot</em>.innerHTML
<em>shadowRoot</em>.innerHTML = <em>domString</em>
</pre>

<h3 id="Valeur">Valeur</h3>

<p>Une chaîne de caractères {{domxref("DOMString")}}.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">let customElem = document.querySelector('mon-element-shadow-dom');
let shadow = customElem.shadowRoot;

shadow.innerHTML = '&lt;strong&gt;Cet élément devrait être plus important !&lt;/strong&gt;';</pre>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette propriété ne fait pas encore partie d'une spécification. Voir <a href="https://github.com/w3c/DOM-Parsing/issues/21">cette <em>issue</em></a> pour le projet de spécification.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.ShadowRoot.innerHTML")}}</p>
