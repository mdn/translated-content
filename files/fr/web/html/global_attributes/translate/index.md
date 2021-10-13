---
title: translate
slug: Web/HTML/Global_attributes/translate
tags:
  - Attribut
  - Attribut universel
  - Experimental
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/translate
original_slug: Web/HTML/Attributs_universels/translate
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<p>L'<a href="/fr/docs/Web/HTML/Attributs_universels">attribut universel</a> <code><strong>translate</strong></code> est un attribut à valeur contrainte qui peut être utilisé afin d'indiquer si les valeurs d'attribut d'un élément et si les valeurs de ses nœuds {{domxref("Text")}} descendants doivent être traduits lorsque la page est localisée ou s'il faut les laisser inchangés. Les valeurs autorisées pour cet attribut sont :</p>

<ul>
 <li><code>"yes"</code> (ou une chaîne vide), qui indique que l'élément devrait être traduit lorsque la page est localisée ;</li>
 <li><code>"no"</code>, qui indique que l'élément ne doit pas être traduit.</li>
</ul>

<div class="blockIndicator note">
<p><strong>Note :</strong> Bien que la prise en charge de cet attribut ne soit pas homogène pour les navigateurs, celui-ci est pris en compte par les outils de traduction automatique (Google Translate par exemple) et les outils de traduction utilisés par les traducteurs. Aussi, cet attribut doit être utilisé par les auteurs web afin d'indiquer correctement le contenu qui ne devrait pas être traduit.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;label for="postcode" translate="no"&gt;
   &lt;span translate="yes"&gt;Enter your postcode to find the nearest store&lt;/span&gt;
&lt;/label&gt;
&lt;input id="postcode" type="text"&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","250","250")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "dom.html#attr-translate", "translate")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Aucun changement depuis la dernière dérivation {{SpecName('HTML5.1')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', "dom.html#the-translate-attribute", "translate")}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>Dérivée de {{SpecName('HTML WHATWG')}}, définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.global_attributes.translate")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/HTML/Attributs_universels">Les différents attributs universels</a></li>
 <li>La propriété {{domxref("HTMLElement.translate")}} qui reflète cet attribut.</li>
</ul>
