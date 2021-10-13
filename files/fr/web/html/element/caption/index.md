---
title: '<caption> : l''élément de légende d''un tableau'
slug: Web/HTML/Element/caption
tags:
  - Element
  - HTML
  - HTML Tables
  - HTML tabular data
  - Reference
  - Table Captions
  - Table Titles
  - Tables
  - Web
  - caption
translation_of: Web/HTML/Element/caption
browser-compat: html.elements.caption
---
<div>{{HTMLRef}}</div>

<p>L'élément <strong><code>&lt;caption&gt;</code></strong> définit la légende (ou le titre) d'un tableau.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/caption.html", "tabbed-standard")}}</div>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>La balise de fin peut être absente si l'élément n'est pas immédiatement suivi d'un blanc ASCII ou d'un commentaire.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Un élément <a href="/fr/docs/Web/HTML/Element/table"><code>&lt;table&gt;</code></a> dont il doit être le premier descendant.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant</a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLTableCaptionElement"><code>HTMLTableCaptionElement</code></a></td>
    </tr>
  </tbody>
</table>

<h2 id="attributes">Attributs</h2>

<p>On peut utiliser<a href="/fr/docs/Web/HTML/Global_attributes"> les attributs universels</a> sur cet élément.</p>

<h3 id="deprecated_attributes">Attributs obsolètes</h3>

<dl>
  <dt><strong><code>align</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut à valeur contrainte indique l'alignement de la légende du tableau par rapport au tableau lui-même. Il peut valoir :
  <dl>
    <dt><code>left</code></dt>
    <dd>La légende est affichée à gauche du tableau</dd>
    <dt><code>top</code></dt>
    <dd>La légende est affichée au-dessus du tableau</dd>
    <dt><code>right</code></dt>
    <dd>La légende est affichée à droite du tableau</dd>
    <dt><code>bottom</code></dt>
    <dd>La légende est affichée en dessous du tableau</dd>
  </dl>

  <div class="note">
    <p><strong>Note :</strong> Ne pas utiliser cet attribut. Il a été déprécié. L'élément <code>&lt;caption&gt;</code> devrait être mis en forme grâce au <a href="/fr/docs/Web/CSS">CSS</a>. Afin d'obtenir des effets similaires à cet attribut, on utilisera les propriétés CSS <a href="/fr/docs/Web/CSS/caption-side"><code>caption-side</code></a> et <a href="/fr/docs/Web/CSS/text-align"><code>text-align</code></a>.</p>
  </div>
  </dd>
</dl>

<h2 id="usage_notes">Notes d'utilisation</h2>

<p>L'élément <code>&lt;caption&gt;</code> devrait être le premier élément enfant de l'élément parent <a href="/fr/docs/Web/HTML/Element/table"><code>&lt;table&gt;</code></a>.</p>

<p>Quand l'élément <a href="/fr/docs/Web/HTML/Element/table"><code>&lt;table&gt;</code></a> (étant le parent de l'élément <code>&lt;caption&gt;</code>) n'est que l'unique descendant d'un élément <a href="/fr/docs/Web/HTML/Element/figure"><code>&lt;figure&gt;</code></a>, c'est l'élément <a href="/fr/docs/Web/HTML/Element/figcaption"><code>&lt;figcaption&gt;</code></a> doit être utilisé.</p>

<p>Utiliser la propriété <a href="/fr/docs/Web/CSS/background-color"><code>background-color</code></a> sur le tableau ne modifiera pas l'apparence de la légende. Il est également nécessaire d'ajouter une déclaration CSS avec <code>background-color</code> sur l'élément <code>&lt;caption&gt;</code> pour que celui-ci ait la même couleur.</p>

<h2 id="Exemple">Exemple</h2>

<p>Cet exemple simple présente un tableau qui comprend une légende.</p>

<h3 id="html">HTML</h3>

<pre class="brush: html">&lt;table&gt;
  &lt;caption&gt;Légende de l'exemple&lt;/caption&gt;
  &lt;tr&gt;
    &lt;th&gt;Connexion&lt;/th&gt;
    &lt;th&gt;Courriel :&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;utilisateur1&lt;/td&gt;
    &lt;td&gt;utilisateur1@test.fr&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;utilisateur2&lt;/td&gt;
    &lt;td&gt;utilisateur2@test.fr&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</pre>

<pre class="brush: css hidden">caption {
    caption-side: top;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0px;
  }
  table, th, td {
    border: 1px solid black;
  }
</pre>

<h3 id="result">Résultat</h3>

<p>{{EmbedLiveSample('Exemple', '', 120)}}</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>Les propriétés CSS particulièrement utiles pour styliser l'élément <code>&lt;caption&gt;</code> :
   <ul>
    <li><a href="/fr/docs/Web/CSS/text-align"><code>text-align</code></a></li>
    <li><a href="/fr/docs/Web/CSS/caption-side"><code>caption-side</code></a>.</li>
   </ul>
  </li>
 </ul>
