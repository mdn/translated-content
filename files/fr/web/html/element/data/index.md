---
title: "<data> : l'élément de données"
slug: Web/HTML/Element/data
tags:
  - Element
  - HTML
  - HTML text-level semantics
  - Reference
  - Web
translation_of: Web/HTML/Element/data
browser-compat: html.elements.data
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;data&gt;</code></strong> relie un contenu à une version de ce contenu interprétable par un ordinateur. Si le contenu possède une composante temporelle, l'élément <a href="/fr/docs/Web/HTML/Element/time"><code>&lt;time&gt;</code></a> doit être utilisé.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/data.html", "tabbed-shorter")}}</div>

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
      <td> 	Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Éléments parents autorisés</th>
      <td>Tout élément acceptant du <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content">contenu phrasé</a>.</td>
     </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant</a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLDataElement"><code>HTMLDataElement</code></a></td>
    </tr>
  </tbody>
</table>

<h2 id="attributes">Attributs</h2>

<p>Comme pour tous les autres éléments, on peut utiliser <a href="/fr/docs/Web/HTML/Global_attributes">les attributs universels</a> sur <code>&lt;data&gt;</code>.</p>

<dl>
  <dt><code>value</code></dt>
  <dd>Cet attribut définit la version du contenu qui doit être interprétée par une machine.</dd>
</dl>

<h2 id="examples">Exemples</h2>

<p>Dans l'exemple suivant, on affiche des noms de produits avec des codes correspondants :</p>

<pre class="brush: html">&lt;p&gt;Nouveaux produits&lt;/p&gt;
&lt;ul&gt;
  &lt;li&gt;&lt;data value="3251546"&gt;Mini voiture&lt;/data&gt;&lt;/li&gt;
  &lt;li&gt;&lt;data value="5867654"&gt;Grande voiture&lt;/data&gt;&lt;/li&gt;
  &lt;li&gt;&lt;data value="9887635"&gt;Énorme voiture&lt;/data&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
 <li>L'élément <a href="/fr/docs/Web/HTML/Element/time"><code>&lt;time&gt;</code></a>.</li>
</ul>
