---
title: '<rt> : l''élément de texte Ruby'
slug: Web/HTML/Element/rt
tags:
  - Element
  - HTML
  - Reference
  - Ruby
  - Web
translation_of: Web/HTML/Element/rt
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;rt&gt;</code></strong> indique la composante texte d'une annotation Ruby, il est notamment utilisé pour la prononciation, la traduction ou la translitération des caractères d'Asie orientale. Cet élément est toujours contenu dans un élément {{HTMLElement("ruby")}}.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/rt.html", "tabbed-shorter")}}</div>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut uniquement <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Avec_prise_en_charge_de_ruby">Avec prise en charge de ruby</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;ruby&gt;
  漢 &lt;rt&gt;Kan&lt;/rt&gt;
  字 &lt;rt&gt;ji&lt;/rt&gt;
&lt;/ruby&gt;
</pre>

<pre class="brush: css hidden">body {
  font-size: 22px;
}
</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Avec_prise_en_charge_de_ruby","100%","130")}}</p>

<h3 id="Sans_prise_en_charge_de_ruby">Sans prise en charge de ruby</h3>

<p>Pour un navigateur sans prise en charge de Ruby, on aurait le résultat suivant :</p>

<pre class="brush: html hidden">漢 Kan 字 ji</pre>

<pre class="brush: css hidden">body {
  font-size: 22px;
}
</pre>

<p>{{EmbedLiveSample("Sans_prise_en_charge_de_ruby", 600, 60)}}</p>

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
   <td>{{SpecName('HTML WHATWG', 'text-level-semantics.html#the-rt-element', '&lt;rt&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'text-level-semantics.html#the-rt-element', '&lt;rt&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.rt")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTMLElement("ruby")}}</li>
 <li>{{HTMLElement("rp")}}</li>
 <li>{{HTMLElement("rb")}}</li>
 <li>{{HTMLElement("rtc")}}</li>
 <li>{{CSSXRef("text-transform", "text-transform: full-size-kana")}}</li>
</ul>
</div>
