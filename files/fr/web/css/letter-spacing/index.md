---
title: letter-spacing
slug: Web/CSS/letter-spacing
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/letter-spacing
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>letter-spacing</code></strong> définit <a href="https://fr.wikipedia.org/wiki/Interlettre">l'interlettre</a> utilisée pour les caractères qui composent le texte.</p>

<div>{{EmbedInteractiveExample("pages/css/letter-spacing.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs de longueur */
/* Type &lt;length&gt;       */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: .3px;

/* Valeur avec mot-clé */
letter-spacing: normal;

/* Valeurs globales */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>L'interlettre est dictée par la police utilisée. À la différence de 0, cette valeur permet à l'agent utilisateur de modifier l'espace entre les caractères afin de le justifier.</dd>
 <dt><code>&lt;length&gt;</code></dt>
 <dd>Cette valeur indique l'espace <strong>ajouté</strong> à l'espace par défaut. Les valeurs peuvent être négatives mais les limites imposées dépendent de l'implémentation du moteur. Les agents utilisateurs ne pourront plus augmenter ou réduire l'interlettre afin de justifier le texte. Pour les différentes unités possibles, se référer à la page {{cssxref("&lt;length&gt;")}}.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.premier    { letter-spacing: 0.4em; }
.deuxieme   { letter-spacing: 1em; }
.troisieme  { letter-spacing: -0.05em; }
.quatrieme  { letter-spacing: 6px; }</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="premier"&gt;Et voici l'interlettre&lt;/p&gt;
&lt;p class="deuxieme"&gt;Et voici l'interlettre&lt;/p&gt;
&lt;p class="troisieme"&gt;Et voici l'interlettre&lt;/p&gt;
&lt;p class="quatrieme"&gt;Et voici l'interlettre&lt;/p&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples', 440, 185)}}</p>

<h2 id="Accessibilité">Accessibilité</h2>

<p>Utiliser une valeur trop grande (positive ou négative) pour <code>letter-spacing</code> rendra les mots illisibles. Si une valeur positive trop importante est utilisée, les lettres seront trop éloignées les unes des autres et on ne pourra pas distinguer les mots. Si une valeur négative trop faible est employée, les lettres se chevaucheront et on ne pourra pas lire le texte.</p>

<p>L'espacement doit être déterminé au cas par cas car chaque famille de polices utilise des caractères de largeurs différentes. Il n'existe pas de valeur unique qui permette de s'assurer que, quelle que soit la police utilisée, le texte soit lisible.</p>

<ul>
 <li><a href="/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">Comprendre les règles WCAG 1.4</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html" rel="noopener"><em>Understanding Success Criterion 1.4.8, W3C Understanding WCAG 2.0</em> (en anglais)</a></li>
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
   <td>{{SpecName('CSS3 Text', '#letter-spacing-property', 'letter-spacing')}}</td>
   <td>{{Spec2('CSS3 Text')}}</td>
   <td>Aucune modification.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Transitions', '#animatable-css', 'letter-spacing')}}</td>
   <td>{{Spec2('CSS3 Transitions')}}</td>
   <td><code>letter-spacing</code> peut désormais être animée.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'text.html#propdef-letter-spacing', 'letter-spacing')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Aucune modification.</td>
  </tr>
  <tr>
   <td>{{SpecName('SVG1.1', 'text.html#LetterSpacingProperty', 'letter-spacing')}}</td>
   <td>{{Spec2('SVG1.1')}}</td>
   <td>Définition initiale pour SVG.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#letter-spacing', 'letter-spacing')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.letter-spacing")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("font-kerning")}}</li>
</ul>
