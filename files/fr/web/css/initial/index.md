---
title: initial
slug: Web/CSS/initial
tags:
  - CSS
  - Cascade
  - Mot-clé
  - Reference
translation_of: Web/CSS/initial
---
<div>{{CSSRef}}</div>

<p>Le mot-clé <strong><code>initial</code></strong> applique la valeur initiale d'une propriété à un élément. La valeur initiale est fournie par le navigateur et peut être utilisée pour chaque propriété CSS. Cette propriété prendra alors <a href="/fr/docs/Web/CSS/Valeur_initiale">la valeur initiale</a> spécifiée pour cette la propriété.</p>

<p>La propriété {{cssxref("all")}} peut être utilisée avec cette valeur afin de réinitialiser l'ensemble des propriétés CSS.</p>

<div class="note">
<p><strong>Note :</strong> Pour <a href="/fr/docs/Web/CSS/Héritage#Propriétés_héritées">les propriétés héritées</a>, la valeur initiale peut donner des résultats étranges et mieux vaudra utiliser les mots-clés {{cssxref("inherit")}}, {{cssxref("unset")}} ou {{cssxref("revert")}}. Attention également à ne pas confondre la valeur initiale avec la valeur décrite dans la feuille de style portée par le navigateur.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">/* On écrit le texte en rouge */
.exemple {
  color: red;
}

/* Et on veut que le texte mis en avant
   prenne la valeur initiale de
   color */
.exemple em {
  color: initial;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html"> &lt;p class="exemple"&gt;
    Texte rouge
       &lt;em&gt;
          ce texte est avec la couleur initiale (noire)
       &lt;/em&gt;
    ce texte est rouge aussi
 &lt;/p&gt; </pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

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
   <td>{{SpecName('CSS4 Cascade', '#initial', 'initial')}}</td>
   <td>{{Spec2('CSS4 Cascade')}}</td>
   <td>Aucun changement.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Cascade', '#initial', 'initial')}}</td>
   <td>{{Spec2('CSS3 Cascade')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.types.global_keywords.initial")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/Valeur_initiale">La notion de valeur initiale</a></li>
 <li>{{cssxref("inherit")}}</li>
 <li>{{cssxref("unset")}}</li>
 <li>{{cssxref("revert")}}</li>
 <li>{{cssxref("all")}}</li>
</ul>
