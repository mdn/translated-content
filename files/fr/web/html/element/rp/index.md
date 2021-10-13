---
title: '<rp> : l''élément de parenthèses alternatif aux annotations Ruby'
slug: Web/HTML/Element/rp
tags:
  - Element
  - HTML
  - Reference
  - Ruby
  - Web
translation_of: Web/HTML/Element/rp
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;rp&gt;</code> </strong>est utilisé pour fournir ce qui fera office de parenthèse aux navigateurs qui ne prennent pas en charge les annotations Ruby.</p>

<p>Les annotations Ruby permettent d'afficher la prononciation des caractères d'Asie orientale, notamment lors de l'usage de caractères furigana Japonais ou bopomofo Taïwanais.</p>

<p>Un élément <code>&lt;rp&gt;</code> devrait encadrer chaque parenthèse ouvrante et fermante englobant l'élément {{HTMLElement("rt")}} contenant les annotations.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/rp.html", "tabbed-shorter")}}</div>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut uniquement <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Avec_prise_en_charge_de_ruby">Avec prise en charge de ruby</h3>
<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;ruby&gt;
  漢 &lt;rp&gt;(&lt;/rp&gt;&lt;rt&gt;Kan&lt;/rt&gt;&lt;rp&gt;)&lt;/rp&gt;
  字 &lt;rp&gt;(&lt;/rp&gt;&lt;rt&gt;ji&lt;/rt&gt;&lt;rp&gt;)&lt;/rp&gt;
&lt;/ruby&gt;</pre>


<pre class="brush: css hidden">body {
  font-size: 22px;
}</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Avec_prise_en_charge_de_ruby","300","150")}}</p>

<h3 id="Sans_prise_en_charge_de_ruby">Sans prise en charge de ruby</h3>

<p>Avec un navigateur ne prenant pas en charge les annotations Ruby, on aurait :</p>

<pre class="brush: html hidden">漢 (Kan) 字 (ji)</pre>

<pre class="brush: css hidden">body {
  font-size: 22px;
}
</pre>

<p>{{EmbedLiveSample("Sans_prise_en_charge_de_ruby", 600, 60)}}</p>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><dfn><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></dfn></th>
   <td>Aucune.</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td><a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9">Contenu phrasé</a>. Texte.</td>
  </tr>
  <tr>
   <th scope="row">Omission de balises</th>
   <td>La balise de fin peut être absente si l'élément est immédiatement suivi d'un élément {{HTMLElement("rt")}} ou d'un autre élément <code>&lt;rp&gt;</code> ou s'il n'y a plus de contenu dans l'élément parent.</td>
  </tr>
  <tr>
   <th scope="row">Parents autorisés</th>
   <td>Un élément {{HTMLElement("ruby")}}. <code>&lt;rp&gt;</code> doit être positionné immédiatement avant ou après un élément {{HTMLElement("rt")}}.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>Tous les rôles sont autorisés.</td>
  </tr>
  <tr>
   <th scope="row">Interface DOM</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

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
   <td>{{SpecName('HTML WHATWG', 'text-level-semantics.html#the-rp-element', '&lt;rp&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'text-level-semantics.html#the-rp-element', '&lt;rp&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.rp")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTMLElement("ruby")}}</li>
 <li>{{HTMLElement("rt")}}</li>
 <li>{{HTMLElement("rb")}}</li>
 <li>{{HTMLElement("rtc")}}</li>
</ul>
