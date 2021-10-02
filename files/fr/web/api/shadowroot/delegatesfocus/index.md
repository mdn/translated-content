---
title: ShadowRoot.delegatesFocus
slug: Web/API/ShadowRoot/delegatesFocus
tags:
  - API
  - Non-standard
  - Propriété
  - Reference
  - ShadowRoot
translation_of: Web/API/ShadowRoot/delegatesFocus
---
<div>{{APIRef("Shadow DOM")}}</div>

<p><strong><code>delegatesFocus</code></strong> est une propriété en lecture seule, rattachée à l'interface {{domxref("ShadowRoot")}} et qui renvoie un booléen indiquant si l'option <code>delegatesFocus</code> a été intialisée lors de l'attachement de la racine <em>shadow</em> (cf. {{domxref("Element.attachShadow()")}}).</p>

<div class="warning">
<p><strong>Attention :</strong> Cette fonctionnalité est expérimentale, non-standard et uniquement disponible dans Chrome.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <var>df</var> = <var>shadowRoot</var>.delegatesFocus</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un booléen : <code>true</code> si la racine <em>shadow</em> délègue la gestion du focus et <code>false</code> sinon.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">let customElem = document.querySelector('mon-element-shadow-dom');
let shadow = customElem.shadowRoot;

  ...

// Est-ce que la racine gère la délégation du focus ?
let hostElem = shadow.delegatesFocus;</pre>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette fonctionnalité n'est actuellement décrite dans aucune spécification.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.ShadowRoot.delegatesFocus")}}</p>
