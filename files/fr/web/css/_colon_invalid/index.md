---
title: ':invalid'
slug: 'Web/CSS/:invalid'
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: 'Web/CSS/:invalid'
---
<div>{{CSSRef}}</div>

<p>La <a href="/fr/docs/Web/CSS/Pseudo-classes">pseudo-classe</a> <strong><code>:invalid</code></strong> cible tout élément {{HTMLElement("input")}} pour lequel <a href="/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation" title="en/HTML/HTML5/Constraint_validation">la validation</a> du contenu échoue par rapport au type de donnée attendu. Ceci permet de mettre en forme les champs non valides pour aider l'utilisateur à identifier et à corriger les erreurs.</p>

<pre class="brush: css no-line-numbers">/* Cible n'importe quel élément input  */
/* dont la valeur ne satisfait pas aux */
/* critères de validation */
input:invalid {
  background-color: pink;
}</pre>

<h2 id="Syntaxe">Syntaxe</h2>

{{csssyntax}}

<h2 id="Exemple">Exemple</h2>

<p>Cet exemple présente un formulaire simple dont les éléments sont verts lors qu'ils sont valides et rouges lorsqu'ils ne le sont pas.</p>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">label {
  display: block;
  margin: 1px;
  padding: 1px;
}

.field {
  margin: 1px;
  padding: 1px;
}

input:invalid {
  background-color: #ffdddd;
}

form:invalid {
  border: 5px solid #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

form:valid {
  border: 5px solid #ddffdd;
}

input:required {
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;form&gt;
  &lt;div class="field"&gt;
    &lt;label for="url_input"&gt;Veuillez saisir une URL :&lt;/label&gt;
    &lt;input type="url" id="url_input"&gt;
  &lt;/div&gt;

  &lt;div class="field"&gt;
    &lt;label for="email_input"&gt;Veuillez saisir une adresse électronique :&lt;/label&gt;
    &lt;input type="email" id="email_input" required&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemple','600',120)}}</p>

<h2 id="Accessibilité">Accessibilité</h2>

<p>La couleur rouge est généralement utilisée afin d'indiquer une valeur invalide. Les personnes ayant du mal à différencier les couleurs ne seront pas capables de déterminer la validité du champ si celui-ci n'est pas accompagné d'un indicateur qui n'est pas basé sur une couleur. Pour résoudre ce problème, on pourra utiliser un texte indicatif et/ou une icône.</p>

<ul>
 <li><a href="/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">Explications des recommendations WCAG 1.4</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" rel="noopener">Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Notes">Notes</h2>

<h3 id="Boutons_radio">Boutons radio</h3>

<p>Si un quelconque bouton radio dans un groupe (c'est-à-dire, avec la même valeur pour leur attribut <code>name</code>) possède l'attribut <code>required</code> , la pseudo-classe <code>:invalid</code> est appliquée à tous les boutons si aucun d'entre eux n'est sélectionné.</p>

<h3 id="Gestion_dans_Gecko">Gestion dans Gecko</h3>

<p>Par défaut, Gecko n'applique pas de style particulier à la pseudo-classe <code>:invalid</code> . Toutefois un style différent est appliqué (un halo rouge utilisant la propriété {{cssxref("box-shadow")}}) via la pseudo-classe {{cssxref(":-moz-ui-invalid")}}, qui s'applique dans un sous-ensemble des cas de <code>:invalid</code>.</p>

<p>Ce halo peut être désactivé avec les règles suivantes :</p>

<pre class="brush: css">:invalid {
  box-shadow: none;
}

:-moz-submit-invalid {
  box-shadow: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#selector-invalid', ':invalid')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Aucune modification.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', '#selector-invalid', ':invalid')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Définition de la sémantique relative à HTML et aux contraintes de validation.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#validity-pseudos', ':invalid')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.invalid")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref(":valid")}}</li>
 <li>{{cssxref(":-moz-submit-invalid")}} et {{cssxref(":-moz-ui-invalid")}}</li>
 <li>{{cssxref(":required")}}</li>
 <li>{{cssxref(":optional")}}</li>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Validation_donnees_formulaire">La validation des données d'un formulaire</a></li>
 <li><a href="/fr/docs/Web/API/ValidityState">Accéder à l'état de validité en JavaScript</a></li>
</ul>
