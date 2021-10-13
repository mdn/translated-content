---
title: '<em> : l''élément d''emphase'
slug: Web/HTML/Element/em
tags:
  - Element
  - HTML
  - HTML text-level semantics
  - Reference
  - Web
translation_of: Web/HTML/Element/em
browser-compat: html.elements.em
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;em&gt;</code></strong> (pour emphase) est utilisé afin de marquer un texte sur lequel on veut insister. Les éléments <code>&lt;em&gt;</code> peuvent être imbriqués, chaque degré d'imbrication indiquant un degré d'insistance plus élevé.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/em.html", "tabbed-shorter")}}</div>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content">contenu phrasé</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content">contenu tangible</a>.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content">Contenu phrasé</a>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
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
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a>. Jusqu'à Gecko 1.9.2 inclus (Firefox 4), Firefox implémentait l'interface <a href="/fr/docs/Web/API/HTMLSpanElement"><code>HTMLSpanElement</code></a> pour cet élément.</td>
    </tr>
  </tbody>
</table>

<h2 id="attributes">Attributs</h2>

<p>Comme tous les éléments HTML, cet élément prend en charge <a href="/fr/docs/Web/HTML/Global_attributes">les attributs universels</a>.</p>

<h2 id="Usage_notes">Notes d'utilisation</h2>

<p>L'élément <code>&lt;em&gt;</code> est destiné aux mots dont l'accent est souligné par rapport au texte environnant, ce qui est souvent limité à un ou plusieurs mots d'une phrase et affecte le sens de la phrase elle-même.</p>

<p>Habituellement, cet élément est affiché avec une police italique. Cependant, il ne doit pas être utilisé pour appliquer un style italique ; pour la mise en forme, on utilisera l'élément <a href="/fr/docs/Web/HTML/Element/i"><code>&lt;i&gt;</code></a> ou des styles CSS. Pour marquer le titre d'une œuvre (livre, chanson, pièce, etc.), on utilisera l'élément <a href="/fr/docs/Web/HTML/Element/cite"><code>&lt;cite&gt;</code></a> ; il est aussi habituellement affiché avec une police italique, mais porte un sens différent. Enfin, on utilisera l'élément <a href="/fr/docs/Web/HTML/Element/strong"><code>&lt;strong&gt;</code></a> pour marquer un texte plus important que le texte qui l'entoure.</p>

<h3 id="i_vs._em">&lt;i&gt; ou &lt;em&gt; ?</h3>

<p>Lorsqu'on débute en développement web, on peut être dérouté⋅e de voir plusieurs éléments qui produisent des résultats similaires. <code>&lt;em&gt;</code> et <code>&lt;i&gt;</code> sont un exemple courant, car ils mettent tous deux le texte en italique. Quelle est la différence ? Laquelle doit-on utiliser ?</p>

<p>Par défaut, le résultat visuel est le même. Cependant, la signification sémantique est différente. L'élément <code>&lt;em&gt;</code> représente l'accentuation de son contenu, tandis que l'élément <code>&lt;i&gt;</code> représente le texte qui se détache de la prose normale, comme un mot étranger, les pensées d'un personnage fictif, ou lorsque le texte fait référence à la définition d'un mot au lieu de représenter son sens sémantique. (Le titre d'une œuvre, comme le nom d'un livre ou d'un film, devrait utiliser <code>&lt;cite&gt;</code>).</p>

<p>Cela signifie que le choix de l'option à utiliser dépend de la situation. Ni l'un ni l'autre ne sont destinés à des fins purement décoratives, c'est à cela que sert le style CSS.</p>

<p>Un exemple pour <code>&lt;em&gt;</code> pourrait être : « <em>Faites</em>-le déjà ! », ou : « Nous <em>devions</em> faire quelque chose à ce sujet ». Une personne ou un logiciel lisant le texte prononcerait les mots en italique avec une emphase, en utilisant l'accentuation verbale.</p>

<p>Un exemple pour <code>&lt;i&gt;</code> pourrait être : « Le <i>Queen Mary</i> a pris la mer la nuit dernière ». Ici, il n'y a pas d'accentuation ou d'importance supplémentaire sur le mot « Queen Mary ». Il est simplement indiqué que l'objet en question n'est pas une reine nommée Mary, mais un navire nommé <em>Queen Mary</em>. Un autre exemple de <code>&lt;i&gt;</code> pourrait être : « Le mot <i>the</i> est un article ».</p>

<h2 id="example">Exemple</h2>

<p>L'élément <code>&lt;em&gt;</code> est souvent utilisé pour indiquer un contraste, implicite ou explicite.</p>

<pre class="brush: html">&lt;p&gt;
  Dans HTML5, ce qui était appelé contenu de &lt;em&gt;type bloc&lt;/em&gt;
  est maintenant appelé contenu de &lt;em&gt;flux&lt;/em&gt;.
&lt;/p&gt;</pre>

<h3 id="result">Résultat</h3>

<p>{{EmbedLiveSample("example", "", 100)}}</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/HTML/Element/i"><code>&lt;i&gt;</code></a></li>
</ul>
