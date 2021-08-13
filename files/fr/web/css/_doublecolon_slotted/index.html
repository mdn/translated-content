---
title: '::slotted()'
slug: 'Web/CSS/::slotted'
tags:
  - CSS
  - Pseudo-element
  - Reference
  - Web
translation_of: 'Web/CSS/::slotted'
---
<div>{{CSSRef}}</div>

<p>Le <a href="/fr/docs/Web/CSS/Pseudo-éléments">pseudo-élément</a> CSS <strong><code>::slotted()</code></strong> représente n'importe quel élément ayant été placé à l'intérieur d'un emplacement (<em>slot</em>) au sein d'un gabarit (<em>template</em>) HTML (cf. <a href="/fr/docs/Web/Web_Components/Using_templates_and_slots">Utiliser les gabarits et les emplacements</a> pour plus d'informations).</p>

<p>Cela ne fonctionne que pour du CSS placé à l'intérieur d'un élément {{htmlelement("template")}} et/ou dans le <em><a href="/fr/docs/Web/Web_Components/Using_shadow_DOM">shadow DOM</a></em>. On notera également que ce sélecteur ne sélectionnera pas les noeuds texte placés dans les emplacements, il ne cible que les éléments.</p>

<pre class="brush: css no-line-numbers">/* Cible n'importe quel élément placé dans un emplacement */
::slotted(*) {
  font-weight: bold;
}

/* Cible n'importe quel élément &lt;span&gt; placé dans un emplacement */
::slotted(span) {
  font-weight: bold;
}
</pre>

<h2 id="Syntax">Syntax</h2>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<p>Les fragments de code suivants sont tirés du dépôt <code><a href="https://github.com/mdn/web-components-examples/tree/master/slotted-pseudo-element">slotted-pseudo-element</a></code> (<a href="https://mdn.github.io/web-components-examples/slotted-pseudo-element/">voir le résultat en <em>live</em></a>).</p>

<p>Dans cette démonstration, on utilise un gabarit avec trois emplacements :</p>

<pre class="brush: html">&lt;template id="person-template"&gt;
  &lt;div&gt;
    &lt;h2&gt;Carte d'identité d'une personne&lt;/h2&gt;
    &lt;slot name="person-name"&gt;NOM ABSENT&lt;/slot&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;slot name="person-age"&gt;AGE ABSENT&lt;/slot&gt;&lt;/li&gt;
      &lt;li&gt;&lt;slot name="person-occupation"&gt;POSTE ABSENT&lt;/slot&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;</pre>

<p>Un élément personnalisé — <code>&lt;person-details&gt;</code> — est défini de la façon suivante :</p>

<pre class="brush: js">customElements.define('person-details',
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById('person-template');
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'});

      let style = document.createElement('style');
      style.textContent = 'div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }' +
                           'h2 { margin: 0 0 10px; }' +
                           'ul { margin: 0; }' +
                           'p { margin: 10px 0; }' +
                           '::slotted(*) { color: gray; font-family: sans-serif; } ';

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(templateContent.cloneNode(true));
  }
})</pre>

<p>On voit ici que, lorsqu'on renseigne le <code>style</code> de l'élément, on sélectionne tous les éléments présents dans les emplacements (<code>::slotted(*)</code>) afin de leur fournir différentes polices et couleurs. Cela permet d'avoir une meilleur vision des emplacements qui ne sont pas encore occupés.</p>

<p>Voici ce à quoi ressemblera l'élément lorsqu'il sera inséré dans la page :</p>

<pre class="brush: html">&lt;person-details&gt;
  &lt;p slot="person-name"&gt;Dr. Shazaam&lt;/p&gt;
  &lt;span slot="person-age"&gt;Immortel&lt;/span&gt;
  &lt;span slot="person-occupation"&gt;Super-héros&lt;/span&gt;
&lt;/person-details&gt;</pre>

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
   <td>{{SpecName('CSS Scope', '#slotted-pseudo', '::slotted')}}</td>
   <td>{{Spec2('CSS Scope')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.slotted")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/Web_Components">Les composants web</a></li>
</ul>
