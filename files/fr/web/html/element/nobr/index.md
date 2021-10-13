---
title: '<nobr> : l''élément de non-rupture de texte (obsolète)'
slug: Web/HTML/Element/nobr
tags:
  - Element
  - HTML
  - Non-standard
  - Obsolete
  - Web
translation_of: Web/HTML/Element/nobr
---
<div>{{HTMLRef}}{{obsolete_header}}{{non-standard_header}}</div>

<p>L'élément HTML <strong><code>&lt;nobr&gt;</code></strong> évite qu'un texte soit coupé par un retour à la ligne automatique ; il est donc affiché sur une seule ligne. Il peut être alors nécessaire d'utiliser les barres de défilement pour lire le texte en intégralité.</p>

<div class="warning">
<p><strong>Attention :</strong> Cet élément n'est pas standard en HTML et ne doit donc pas être utilisé. <strong>C'est la propriété CSS {{cssxref("white-space")}} doit être utilisée à la place</strong>, de cette manière :</p>
</div>

<pre class="brush: html">&lt;span style="white-space: nowrap"&gt;Un texte long sans retour à la ligne.&lt;/span&gt;</pre>

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
   <td>{{SpecName("HTML WHATWG", "obsolete.html#nobr", "&lt;nobr&gt;")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>Rendu obsolète et remplacé par {{CSSxRef("white-space")}}.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>{{Compat("html.elements.nobr")}}</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("white-space")}}</li>
 <li>{{cssxref("overflow")}}</li>
</ul>
