---
title: HTMLFormElement.reset()
slug: Web/API/HTMLFormElement/reset
tags:
  - API
  - HTML DOM
  - HTMLFormElement
  - Méthode
  - Reference
translation_of: Web/API/HTMLFormElement/reset
---
<div>{{APIRef("HTML DOM")}}</div>

<p>La méthode <strong><code>HTMLFormElement.reset()</code></strong> restaure les valeurs par défaut des éléments du formulaire. Cette méthode fait la même chose que lorsqu'on clique sur un bouton de type <code>reset</code>.</p>

<p>Si un élément du formulaire (comme un bouton reset par exemple) a un <code>name</code> ou <code>id</code> valant <var>reset</var>, celui-ci remplacera la méthode reset du formulaire. Les attributs des éléments, comme <code>disabled</code>, ne sont pas réinitialisés.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="eval"><em>HTMLFormElement</em>.reset()
</pre>

<h2 id="Example">Exemple</h2>

<pre class="eval">document.getElementById("myform").reset();
</pre>

<h2 id="Specification">Spécification</h2>
