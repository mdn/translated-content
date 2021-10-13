---
title: '<rb> : l''élément de base ruby'
slug: Web/HTML/Element/rb
tags:
  - Element
  - HTML
  - Reference
  - Ruby
translation_of: Web/HTML/Element/rb
---
<div>{{HTMLRef}}</div>

<p>L'élément de <strong>base ruby (<code>&lt;rb&gt;</code>) </strong>est utilisé afin de délimiter le composant texte de base d'une annotation {{HTMLElement("ruby")}}. Autrement dit, le texte qui est annoté. Un élément <code>&lt;rb&gt;</code> devrait encadrer chaque segment atomique du texte de base.</p>

<h2 id="Attributs">Attributs</h2>

<p>Seuls les <a href="/fr/docs/Web/HTML/Attributs_universels">attributs universels</a> peuvent être utilisés sur cet élément.</p>

<h2 id="Notes_d'utilisation">Notes d'utilisation</h2>

<ul>
 <li>Les annotations ruby sont utilisées afin d'afficher la prononciation pour les caractères d'Asie orientale tels que les caractères japonais furigana ou les caractères taïwanais bopomofo. L'élément <code>&lt;rb&gt;</code> permet de séparer chaque segment du texte de base ruby.</li>
 <li>Bien que <code>&lt;rb&gt;</code> ne soit pas un élément vide, il est courant de n'inclure que la balise d'ouverture de chaque élément afin de simplifier le balisage dédié aux annotations ruby.</li>
 <li>Il faut inclure un élément {{htmlelement("rt")}} pour chaque segment de base <code>&lt;rb&gt;</code> qu'on souhaite annoter.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Dans cet exemple, on fournit une annotation pour le caractère original correspondant à "Kanji" :</p>

<pre class="brush: html">&lt;ruby&gt;
  &lt;rb&gt;漢&lt;rb&gt;字
  &lt;rp&gt;(&lt;/rp&gt;&lt;rt&gt;kan&lt;rt&gt;ji&lt;rp&gt;)&lt;/rp&gt;
&lt;/ruby&gt;</pre>

<p>On voit ici que deux éléments <code>&lt;rb&gt;</code> sont inclus et permettent de délimiter les deux segments du texte de base. Pour l'annotation, chaque partie correspondante est délimitée par un élément {{htmlelement("rt")}}.</p>

<p>On aurait également pu écrire cet exemple avec les deux parties du texte de base complètement séparées. Dans ce cas, il n'aurait pas été nécessaire d'inclure les éléments <code>&lt;rb&gt;</code> :</p>

<pre class="brush: html">&lt;ruby&gt;
  漢 &lt;rp&gt;(&lt;/rp&gt;&lt;rt&gt;Kan&lt;/rt&gt;&lt;rp&gt;)&lt;/rp&gt;
  字 &lt;rp&gt;(&lt;/rp&gt;&lt;rt&gt;ji&lt;/rt&gt;&lt;rp&gt;)&lt;/rp&gt;
&lt;/ruby&gt;</pre>

<h3 id="Avec_prise_en_charge_de_ruby">Avec prise en charge de ruby</h3>

<pre class="brush: html hidden">&lt;ruby&gt; &lt;rb&gt;漢&lt;rb&gt;字 &lt;rp&gt;(&lt;/rp&gt;&lt;rt&gt;kan&lt;rt&gt;ji&lt;rp&gt;)&lt;/rp&gt; &lt;/ruby&gt;
</pre>

<pre class="brush: css hidden">body {
  font-size: 22px;
}</pre>

<p>Voici le résultat obtenu :</p>

<p>{{EmbedLiveSample("Avec_prise_en_charge_de_ruby", "100%", 60)}}</p>

<p>Pour un navigateur qui ne prend pas en charge les annotations ruby, voici à quoi aurait ressemblé le résultat :</p>

<h3 id="Sans_prise_en_charge_de_ruby">Sans prise en charge de ruby</h3>

<pre class="brush: html hidden">漢字 (kan ji)</pre>

<pre class="brush: css hidden">body {
  font-size: 22px;
}
</pre>

<p>{{EmbedLiveSample("Sans_prise_en_charge_de_ruby", "100%", 60)}}</p>

<div class="note">
<p><strong>Note :</strong> Voir l'article sur l'élément {{HTMLElement("ruby")}} pour de plus amples exemples.</p>
</div>
<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/fr/docs/Web/Guide/HTML/Catégories_de_contenu">Catégories de contenu</a></th>
   <td>Aucune.</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td>Cet élément peut être l'élément fils d'un élément {{htmlelement("ruby")}}.</td>
  </tr>
  <tr>
   <th scope="row">Omission de balise</th>
   <td>La balise de fin peut être omise si l'élément est immédiatement suivi d'un élément {{HTMLElement("rt")}}, {{HTMLElement("rtc")}} ou {{HTMLElement("rp")}} ou encore par un autre élément <code>&lt;rb&gt;</code> ou s'il n'y a plus de contenu dans l'élément parent.</td>
  </tr>
  <tr>
   <th scope="row">Éléments parents autorisés</th>
   <td>Un élément {{HTMLElement("ruby")}}.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>N'importe quel rôle</td>
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
   <td>{{SpecName('HTML5 W3C', 'text-level-semantics.html#the-rb-element', '&lt;rb&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.rb")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTMLElement("ruby")}}</li>
 <li>{{HTMLElement("rt")}}</li>
 <li>{{HTMLElement("rp")}}</li>
 <li>
  <p>{{HTMLElement("rtc")}}</p>
 </li>
</ul>
