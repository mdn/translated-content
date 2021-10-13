---
title: '<br> : l''élément de saut de ligne'
slug: Web/HTML/Element/br
tags:
  - Element
  - HTML
  - HTML text-level semantics
  - Reference
  - Web
translation_of: Web/HTML/Element/br
browser-compat: html.elements.br
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <code><strong>&lt;br&gt;</strong></code> crée un saut de ligne (un retour chariot) dans le texte. Il s'avère utile lorsque les sauts de ligne ont une importance (par exemple lorsqu'on écrit une adresse ou un poème).</p>

<div>{{EmbedInteractiveExample("pages/tabbed/br.html", "tabbed-standard")}}</div>

<p>Comme vous pouvez le voir dans l'exemple ci-dessus, un élément <code>&lt;br&gt;</code> est inclus à chaque point où nous voulons que le texte soit interrompu. Le texte après le <code>&lt;br&gt;</code> recommence au début de la ligne suivante du bloc de texte.</p>

<div class="note">
  <p><strong>Note :</strong>Attention, <code>&lt;br&gt;</code> ne doit pas être utilisé de façon abusive afin d'augmenter l'espace entre les lignes d'un texte. Pour cela, on utilisera la propriété <a href="/fr/docs/Web/CSS">CSS</a> <a href="/fr/docs/Web/CSS/margin"><code>margin</code></a> sur l'élément HTML <a href="/fr/docs/Web/HTML/Element/p"><code>&lt;p&gt;</code></a>.</p>
</div>

<h2 id="attributes">Attributs</h2>

<p>Comme pour tous les éléments, on peut utiliser <a href="/fr/docs/Web/HTML/Global_attributes">les attributs universels</a>.</p>

<h3 id="deprecated_attributes">Attributs obsolètes</h3>

<dl>
  <dt><strong><code>clear</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut indique où commencer la prochaine ligne après le saut de ligne.</dd>
</dl>

<h2 id="styling_with_css">Mise en forme avec CSS</h2>

<p><code>&lt;br&gt;</code> n'a aucun rôle purement stylistique et il sert uniquement à créer une rupture de ligne au sein d'un bloc de texte. Cet élément pourra très peu être mis en forme avec CSS.</p>

<p>Bien qu'il soit possible d'appliquer une marge (<a href="/fr/docs/Web/CSS/margin"><code>margin</code></a> sur les éléments <code>&lt;br&gt;</code> afin d'augmenter l'espacement entre les lignes de texte d'un même bloc, ce n'est pas une bonne pratique. Pour obtenir le même effet, on pourra utiliser la propriété <a href="/fr/docs/Web/CSS/line-height"><code>line-height</code></a>.</p>

<h2 id="examples">Exemples</h2>

<h3 id="simple_br">Simple rupture de ligne</h3>

<p>Dans l'exemple suivant, nous utilisons des éléments <code>&lt;br&gt;</code> pour créer des sauts de ligne entre les différentes lignes d'une adresse postale :</p>

<pre class="brush:html">Mozilla&lt;br&gt;
331 E. Evelyn Avenue&lt;br&gt;
Mountain View, CA&lt;br&gt;
94041&lt;br&gt;
USA&lt;br&gt;</pre>

<p>Le résultat ressemble à ceci :</p>

<p>{{EmbedLiveSample('simple_br', '', '130')}}</p>

<h2 id="accessibility_concerns">Accessibilité</h2>

<p>Utiliser une suite d'éléments <code>&lt;br&gt;</code> pour uniquement rajouter un espace entre des paragraphes sera source de confusion ou de frustration pour les personnes qui utilisent des outils d'assistance. Les lecteurs d'écran, par exemple, pourront annoncer la présence de l'élément alors qu'il n'y a aucun contenu associé.</p>

<p>Si on souhaite ajouter un espace supplémentaire, on utilisera plutôt la propriété CSS <a href="/fr/docs/Web/CSS/margin"><code>margin</code></a>.</p>

<h2 id="technical_summary">Résumé technique</h2>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content">contenu phrasé</a>.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, c'est un <a href="/fr/docs/Glossary/Empty_element">élément vide</a>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>Cet élément doit avoir une balise de début et ne doit pas avoir de balise de fin. Pour les documents XHTML, on écrira cet élément <code>&lt;br/&gt;</code>.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte du <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content">contenu phrasé</a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant</a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td><a href="https://w3c.github.io/aria/#none"><code>none</code></a>, <a href="https://w3c.github.io/aria/#presentation"><code>presentation</code></a></td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLBRElement"><code>HTMLBRElement</code></a></td>
    </tr>
  </tbody>
</table>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>L'élément <a href="/fr/docs/Web/HTML/Element/address"><code>&lt;address&gt;</code></a></li>
  <li>L'élément <a href="/fr/docs/Web/HTML/Element/p"><code>&lt;p&gt;</code></a></li>
  <li>L'élément <a href="/fr/docs/Web/HTML/Element/wbr"><code>&lt;wbr&gt;</code></a></li>
</ul>
