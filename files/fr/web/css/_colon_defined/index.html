---
title: ':defined'
slug: 'Web/CSS/:defined'
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
translation_of: 'Web/CSS/:defined'
browser-compat: css.selectors.defined
---
<div>{{CSSRef}}</div>

<p>La <a href="/fr/docs/Web/CSS/Pseudo-classes">pseudo-classe</a> <strong><code>:defined</code></strong> représente n'importe quel élément ayant été défini. Cela inclut les éléments standards provenant du navigateur, ainsi que les éléments personnalisés (« <em>custom elements</em> ») ayant correctement été définis (c'est-à-dire grâce à la méthode <a href="/fr/docs/Web/API/CustomElementRegistry/define"><code>CustomElementRegistry.define()</code></a>).</p>

<pre class="brush: css">/* Cette règle cible tout élément défini */
:defined {
  font-style: italic;
}

/* Cette règle cible n'importe quelle instance d'un élément personnalisé donné */
simple-custom:defined {
  display: block;
}
</pre>

<h2 id="syntax">Syntaxe</h2>

{{csssyntax}}

<h2 id="examples">Exemples</h2>

<p>Les fragments de code qui suivent sont tirés <a href="https://github.com/mdn/web-components-examples/tree/master/defined-pseudo-class">du dépôt <code>defined-pseudo-class</code></a> (<a href="https://mdn.github.io/web-components-examples/defined-pseudo-class/">voir le résultat en <em>live</em></a>).</p>

<p>Pour cette démonstration on définit un élément personnalisé trivial :</p>

<pre class="brush: js">customElements.define('simple-custom',
  class extends HTMLElement {
    constructor() {
      super();

      let divElem = document.createElement('div');
      divElem.textContent = this.getAttribute('text');

      let shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(divElem);
  }
})</pre>

<p>On insère ensuite une copie de cet élément dans le document, à côté d'un paragraphe classique {<code>&lt;p&gt;</code> :</p>

<pre class="brush: html">&lt;simple-custom text="Le texte de l'élément personnalisé"&gt;&lt;/simple-custom&gt;

&lt;p&gt;Un paragraphe normal&lt;/p&gt;</pre>

<p>Dans la feuille CSS, on inclut d'abord les règles suivantes :</p>

<pre class="brush: css">// On utilise deux arrières-plans distincts pour ces deux éléments
p {
  background: yellow;
}

simple-custom {
  background: cyan;
}

// On met en italique le texte de ces deux éléments
:defined {
  font-style: italic;
}</pre>

<p>Ensuite, on fournit les deux règles suivantes afin de masquer les instances de l'élément personnalisé qui ne sont pas définies et, pour celles qui sont définies, on indique que ce sont des éléments de bloc :</p>

<pre class="brush: css">simple-custom:not(:defined) {
  display: none;
}

simple-custom:defined {
  display: block;
}</pre>

<p>Ces dernières règles sont utiles lorsqu'on a un élément personnalisé complexe qui met du temps à charger : pour ceux-là, on peut vouloir les masquer jusqu'à ce que la définition soit complète afin de ne pas avoir de scintillement d'éléments non mis en forme sur la page.</p>

<h2 id="specifications">Spécifications</h2>

{{Specifications}}

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/Web_Components">Les composants web</a></li>
</ul>
