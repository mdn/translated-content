---
title: '<b> : l''élément portant à l''attention'
slug: Web/HTML/Element/b
tags:
  - Attention
  - Element
  - HTML
  - HTML text-level semantics
  - HTML:Flow content
  - HTML:Palpable Content
  - HTML:Phrasing content
  - Reference
  - Web
translation_of: Web/HTML/Element/b
browser-compat: html.elements.b
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;b&gt;</code></strong> permet d'attirer l'attention du lecteur sur un contenu qui n'a pas, pour autant, d'importance significative. Anciennement utilisé pour mettre le texte en gras. Cet élément ne doit pas être utilisé pour mettre en forme des éléments, c'est la propriété CSS <a href="/fr/docs/Web/CSS/font-weight"><code>font-weight</code></a> qu'il faut utiliser. Si l'élément est d'une importance particulière, on utilisera l'élément HTML <a href="/fr/docs/Web/HTML/Element/strong"><code>&lt;strong&gt;</code></a>.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/b.html", "tabbed-shorter")}}</div>

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
      <td>Tout élément acceptant du <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content">contenu phrasé</a>.</td>
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
      <td><a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a></td>
    </tr>
  </tbody>
</table>

<h2 id="attributes">Attributs</h2>

<p>Seuls <a href="/fr/docs/Web/HTML/Global_attributes">les attributs universels</a> peuvent être utilisés pour cet élément.</p>

<h2 id="usage_notes"><strong>Notes d'utilisation</strong></h2>

<ul>
 <li><code>&lt;b&gt;</code> est habituellement utilisé pour les mots-clés dans les résumés, les noms de produits dans des tests (sans que ceux-ci aient une importance particulière). Il peut également être utilisé afin d'indiquer la première phrase de chaque paragraphe d'un article.</li>
 <li>Il ne faut pas confondre l'élément <code>&lt;b&gt;</code> avec les éléments <a href="/fr/docs/Web/HTML/Element/strong"><code>&lt;strong&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/em"><code>&lt;em&gt;</code></a>, ou <a href="/fr/docs/Web/HTML/Element/mark"><code>&lt;mark&gt;</code></a>. L'élément <a href="/fr/docs/Web/HTML/Element/strong"><code>&lt;strong&gt;</code></a> représente un texte d'une certaine <em>importance</em>, <a href="/fr/docs/Web/HTML/Element/em"><code>&lt;em&gt;</code></a> met une emphase sur le texte et <a href="/fr/docs/Web/HTML/Element/mark"><code>&lt;mark&gt;</code></a> représente un texte avec une certaine <em>pertinence</em>. L'élément <code>&lt;b&gt;</code> ne porte aucune information sémantique particulière ; utilisez-le lorsque qu'aucun autre ne convient.</li>
 <li>De la même façon, ne balisez pas les titres en utilisant l'élément <code>&lt;b&gt;</code>. Pour cet usage, utilisez les balises <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h1&gt;</code></a> à <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h6&gt;</code></a>. De plus, les feuilles de style peuvent changer le style par défaut de ces éléments. Ils ne seront pas <em>forcément</em> affichés en gras.</li>
 <li>C'est généralement une bonne pratique d'utiliser l'attribut <a href="/fr/docs/Web/HTML/Global_attributes#attr-class"><code>class</code></a> sur l'élément <code>&lt;b&gt;</code> lorsqu'on souhaite transporter des informations sémantiques supplémentaires. Cela facilitera le développement des styles à appliquer sur le document, sans avoir à modifier le code HTML.</li>
 <li>Historiquement, l'élément <code>&lt;b&gt;</code> a été pensé pour rendre du texte avec une police grasse. Les éléments à seul but stylistique ont été dépréciés avec HTML 4. Ainsi, le sens de l'élément <code>&lt;b&gt;</code> a évolué.</li>
 <li>S'il n'y a aucune raison particulière d'utiliser l'élément <code>&lt;b&gt;</code>, en dehors de son apparence en gras, l'utilisation de la propriété <a href="/fr/docs/Web/CSS">CSS</a> <a href="/fr/docs/Web/CSS/font-weight"><code>font-weight</code></a> avec une valeur <code>bold</code> est à privilégier.</li>
</ul>

<h2 id="examples">Exemple</h2>

<pre class="brush: html">&lt;p&gt;
  Cet article décrit plusieurs éléments &lt;b class="keyword"&gt;texte&lt;/b&gt;.
  Il explique leur usage dans un document &lt;b class="keyword"&gt;HTML&lt;/b&gt;.
&lt;/p&gt;
Les mots-clés sont affichés avec le style par défaut de
l'élément &amp;lt;b&amp;gt;, sûrement en gras.
</pre>

<h3 id="result">Résultat</h3>

<p>{{EmbedLiveSample("example")}}</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>Les autres éléments portants une sémantique textuelle : <a href="/fr/docs/Web/HTML/Element/a"><code>&lt;a&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/em"><code>&lt;em&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/strong"><code>&lt;strong&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/small"><code>&lt;small&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/cite"><code>&lt;cite&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/q"><code>&lt;q&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/dfn"><code>&lt;dfn&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/abbr"><code>&lt;abbr&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/time"><code>&lt;time&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/code"><code>&lt;code&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/var"><code>&lt;var&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/samp"><code>&lt;samp&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/kbd"><code>&lt;kbd&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/sub"><code>&lt;sub&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/sup"><code>&lt;sup&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/i"><code>&lt;i&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/mark"><code>&lt;mark&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/ruby"><code>&lt;ruby&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/rp"><code>&lt;rp&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/rt"><code>&lt;rt&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/bdo"><code>&lt;bdo&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/span"><code>&lt;span&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/br"><code>&lt;br&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/wbr"><code>&lt;wbr&gt;</code></a>.</li>
  <li><a href="https://www.w3.org/International/questions/qa-b-and-i-tags">Utiliser les éléments <code>&lt;b&gt;</code> et <code>&lt;i&gt;</code> (W3C)</a></li>
</ul>
