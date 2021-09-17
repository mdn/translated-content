---
title: src
slug: Web/CSS/@font-face/src
tags:
  - CSS
  - Descripteur
  - Reference
translation_of: Web/CSS/@font-face/src
---
<div>{{CSSRef}}</div>

<p>Le descripteur <strong><code>src</code></strong>, associé à la règle @ {{cssxref("@font-face")}}, permet de définir la ressource qui contient les données relatives à une police de caractères. Ce descripteur est obligatoire afin que la règle <code>@font-face</code> soit considérée comme valide.</p>

<p>Sa valeur est composée d'une liste de noms séparés par des virgules, ordonnés par priorité dont chacun fait référence à une police de caractères externe ou locale. Lorsqu'une police doit être utilisée, l'agent utilisateur parcourt la liste de ces références et utilise la première police qui peut être chargée correctement. Si la police de caractères contient des données invalides ou si le nom ne correspond à aucune police de caractères, l'agent utilisateur passe à la suivante.</p>

<p>Là aussi, les URL utilisées peuvent être relatives. Dans le cas où une URL relative est utilisée, elle est résolue grâce à l'emplacement de la feuille de styles qui contient la règle <code>@font-face</code>. Pour les polices SVG, l'URL pointe vers un élément du document qui contient les définitions SVG de la police. Si l'élément de référence est absent, une référence implicite sera construite avec la première police définie. De même, pour les formats contenant plusieurs polices, seule une police est chargée pour une règle <code>@font-face</code> donnée. Les identifiants de fragment de l'URL peuvent être utilisés pour indiquer la police à charger. Si le format conteneur ne possède pas de schéma d'identification des fragments, ce sera un schéma simple d'indexation (ex. "font-collection#1" pour la première police, "font-collection#2" pour la seconde, etc.) qui sera utilisé.</p>

<p>{{cssinfo}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css">/* &lt;url&gt; */
src: url(https://unsiteweb.com/chemin/vers/police.woff); /* URL absolue */
src: url(chemin/vers/police.woff);                       /* URL relative */
src: url(chemin/vers/police.woff) format("woff");        /* format explicite */
src: url('chemin/vers/police.woff');                     /* URL entre quotes */
src: url(chemin/vers/policesvg.svg#exemple);             /* fragment identifiant une police */

/* Valeurs de type &lt;font-face-name&gt; */
src: local(police);      /* nom sans double quote */
src: local(une police); /* nom avec espace */
src: local("police");    /* nom entre double quotes */

/* Liste avec plusieurs éléments */
src: local(police), url(chemin/vers/police.svg) format("svg"),
    url(chemin/vers/police.woff) format("woff"),
    url(chemin/vers/police.otf) format("opentype");
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;url&gt; [ format( &lt;string&gt;# ) ]?</code></dt>
 <dd>Définit une référence externe, composée d'une URL et d'une indication optionnelle quant au format de la police chargée via cette URL. L'indication de format contient une liste de chaînes de caractères dont chacune doit correspondre à un format de police connu. Si un agent utilisateur ne prend pas en charge le format indiqué, il ne téléchargera pas la ressource liée à la police. Si aucune indication de format n'est fournie, la ressource associée est toujours téléchargée.</dd>
 <dt><code>&lt;font-face-name&gt;</code></dt>
 <dd>Définit le nom d'une police installée localement grâce à la fonction <code>local()</code> qui permet d'identifier une police de caractères au sein d'une famille de polices. Le nom de la police peut être entre double quotes.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<pre class="brush: css">@font-face {
  font-family: policeexemple;
  src: local(Police Exemple), url('policeexemple.woff') format("woff"),
      url('policeexemple.otf') format("opentype");
}
</pre>

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
   <td>{{SpecName('CSS3 Fonts', '#src-desc', 'src')}}</td>
   <td>{{Spec2('CSS3 Fonts')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.at-rules.font-face.src")}}</p>
