---
title: word-spacing
slug: Web/CSS/word-spacing
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/word-spacing
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>word-spacing</code></strong> définit la règle d'espacement utilisée entre les balises et entre les mots.</p>

<div>{{EmbedInteractiveExample("pages/css/word-spacing.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Avec un mot-clé */
word-spacing: normal;

/* Valeurs de longueur */
/* type &lt;length&gt; */
word-spacing: 3px;
word-spacing: 0.3em;

/* Valeurs en pourcentages */
/* type &lt;percentage&gt; */
word-spacing: 50%;
word-spacing: 200%;

/* Valeurs globales */
word-spacing: inherit;
word-spacing: initial;
word-spacing: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>L'espace normale entre les mots (ou inter-mot), tel qu'il est défini par la police courante et/ou le navigateur.</dd>
 <dt><code>&lt;length&gt;</code></dt>
 <dd>Une valeur de longueur définit l'espace qu'on ajoute à l'inter-mot intrinsèque défini par la police. Voir {{cssxref("&lt;length&gt;")}} pour les différentes valeurs et unités possibles.</dd>
 <dt><code>&lt;percentage&gt;</code></dt>
 <dd>Une valeur en pourcentages définit la taille de l'inter-mot à utiliser par rapport à la position du prochain caractère (si on utilise <code>-100%</code>, l'espace sera nul et si on utilise <code>100%</code>, il sera doublé). Voir {{cssxref("&lt;percentage&gt;")}} pour les différentes valeurs et unités possibles.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemple">Exemple</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p id="ligne1"&gt;Voici le texte de la ligne 1 &lt;/p&gt;
&lt;p id="ligne2" &gt;Et voilà celui de la ligne 2 &lt;/p&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#ligne1 {
  word-spacing: 15px;
}

#ligne2 {
  word-spacing: 5em;
}
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemple")}}</p>

<h2 id="Accessibilité">Accessibilité</h2>

<p>Utiliser des valeurs trop importantes (positives ou négatives) pour <code>word-spacing</code> rend le texte illisible. Si l'espacement utilisé est trop grand, la structure visuelle ne permettra plus d'identifier une phrase. Si l'espacement est trop petit, les mots se chevaucheront et on ne pourra plus distinguer le début et la fin de chaque mot.</p>

<p>La bonne valeur à utiliser pour <code>word-spacing</code> doit être déterminée au cas par cas, en fonction du type de police utilisé et de la largeur de celle-ci.</p>

<ul>
 <li><a href="/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">Comprendre les règles WCAG 1.4</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html" rel="noopener">Understanding Success Criterion 1.4.8 - W3C Understanding WCAG 2.0</a></li>
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
   <td>{{SpecName('CSS3 Text', '#propdef-word-spacing', 'word-spacing')}}</td>
   <td>{{Spec2('CSS3 Text')}}</td>
   <td>Remplace les valeurs précédentes avec une valeur <code>&lt;spacing-limit&gt;</code> qui définit la même valeur et la valeur <code>&lt;percentage&gt;</code> et permet d'avoir trois valeurs pour décrire un optimum, un minimum, et un maximum.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Transitions', '#animatable-css', 'word-spacing')}}</td>
   <td>{{Spec2('CSS3 Transitions')}}</td>
   <td><code>word-spacing</code> peut désormais être animé.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'text.html#propdef-word-spacing', 'word-spacing')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Aucun changement.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#word-spacing', 'word-spacing')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.word-spacing")}}</p>
