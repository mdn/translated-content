---
title: title
slug: Web/HTML/Global_attributes/title
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/title
original_slug: Web/HTML/Attributs_universels/title
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<p>L'<a href="/fr/docs/Web/HTML/Attributs_universels">attribut universel</a> <code><strong>title</strong></code> contient un texte d'information relatif à l'élément auquel il est rattaché.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/attribute-title.html","tabbed-shorter")}}</div>

<p>On le trouve généralement utilisé pour :</p>

<ul>
 <li>Fournir un libellé pour les éléments {{HTMLElement("iframe")}}</li>
 <li>Fournir un libellé associé automatiquement à un élément {{HTMLElement("input")}}</li>
 <li>Fournir un libellé pour les contrôles des <a href="/fr/docs/Web/HTML/Element/table">tableaux de données</a></li>
</ul>

<p>Si cet attribut est absent, cela signifie que le titre de l'élément ancêtre le plus proche est toujours pertinent (et pourrait être utilisé comme bulle d'information pour l'élément courant). Si cet attribut vaut la chaîne vide, cela signifie explicitement que la valeur du titre de l'ancêtre le plus proche n'est pas pertinent (et ne devrait pas être utilisé comme bulle d'information).</p>

<p>Une sémantique différente est définie pour cet attribut lorsqu'il est utilisé avec les éléments {{HTMLElement("link")}}, {{HTMLElement("abbr")}}, {{HTMLElement("input")}} et {{HTMLElement("menuitem")}}.</p>

<h2 id="Titre_sur_plusieurs_lignes">Titre sur plusieurs lignes</h2>

<p>Un attribut <code>title</code> peut contenir plusieurs lignes. Chaque caractère <code>U+000A LINE FEED</code> (<code>LF</code>) représentera un saut de ligne. Le fragment de code suivant représente donc un élément dont le titre est écrit sur deux lignes.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;
  Les sauts de ligne au sein d'un attribut title doivent être pris en compte :
  &lt;abbr title="Ceci est un
  titre sur plusieurs lignes"&gt;Exemple&lt;/abbr&gt;.
&lt;/p&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Titre_sur_plusieurs_lignes")}}</p>

<h2 id="Héritage_de_title">Héritage de <code>title</code></h2>

<p>Lorsqu'un élément ne possède pas d'attribut <code>title</code>, il hérite de la valeur de l'attribut pour l'élément parent (qui peut également l'hériter de son parent, etc.).</p>

<p>Si cet attribut est défini avec la chaîne vide, cela signifie que le titre provenant d'un élément parent n'est pas pertinent et qu'il ne devrait pas être utilisé.</p>

<h3 id="HTML_2">HTML</h3>

<pre class="brush: html">&lt;div title="Une bubulle"&gt;
  &lt;p&gt;Si vous survolez cet élément, il y aura une bulle d'information "Une bubulle".&lt;/p&gt;
  &lt;p title=""&gt;Et au-dessus de celui-ci, aucune info.&lt;/p&gt;
&lt;/div&gt;</pre>

<h3 id="Résultat_2">Résultat</h3>

<p>{{EmbedLiveSample("Héritage_de_title")}}</p>

<h2 id="Accessibilité">Accessibilité</h2>

<p>L'attribut <code>title</code> est très problématique pour :</p>

<ul>
 <li>Les personnes qui utilisent des appareils à interface tactile</li>
 <li>Les personnes qui naviguent au clavier</li>
 <li>Les personnes qui naviguent en utilisant des outils d'assistance comme des lecteurs d'écran ou des loupes logicielles</li>
 <li>Les personnes souffrant de troubles musculaires ou cognitifs.</li>
</ul>

<p>Cela est dû à une prise en charge hétérogène de la part des navigateurs. Si on souhaite avoir une bulle d'information, mieux vaudra <a href="https://inclusive-components.design/tooltips-toggletips/">utiliser une technique plus accessible</a>.</p>

<ul>
 <li><a href="https://developer.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/">Utiliser l'attribut HTML <code>title</code> - The Paciello Group (en anglais)</a></li>
 <li><em><a href="https://inclusive-components.design/tooltips-toggletips/">Tooltips &amp; Toggletips - Inclusive Components</a></em><a href="https://inclusive-components.design/tooltips-toggletips/"> (en anglais)</a></li>
 <li><a href="https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/"><em>The Trials and Tribulations of the Title Attribute</em> (en anglais) - 24 Accessibility</a></li>
</ul>

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
   <td>{{SpecName('HTML WHATWG', "elements.html#the-title-attribute", "title")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Aucune modification depuis {{SpecName('HTML5.1')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', "dom.html#the-title-attribute", "title")}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>Dérivation de {{SpecName('HTML WHATWG')}}, aucune modification de {{SpecName('HTML5 W3C')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "dom.html#the-title-attribute", "title")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Dérivation de {{SpecName('HTML WHATWG')}}. À partir de {{SpecName("HTML4.01")}}, <code>title</code> est désormais un attribut universel.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'struct/global.html#adef-title', 'title')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td>Pris en charge par l'ensemble des éléments sauf {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("param")}}, {{HTMLElement("script")}} et {{HTMLElement("title")}}.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.global_attributes.title")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/HTML/Attributs_universels">Les différents attributs universels</a></li>
 <li>{{domxref("HTMLElement.title")}} that reflects this attribute.</li>
</ul>
