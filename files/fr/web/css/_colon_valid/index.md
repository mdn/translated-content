---
title: ':valid'
slug: 'Web/CSS/:valid'
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: 'Web/CSS/:valid'
---
<div>{{CSSRef}}</div>

<p>La <a href="/fr/docs/Web/CSS/Pseudo-classes">pseudo-classe</a> <strong><code>:valid</code></strong> permet de cibler tout élément {{HTMLElement("input")}} ou {{HTMLElement("form")}} dont la <a href="/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation">validation</a> du contenu s'effectue correctement par rapport au type de donnée attendu. On peut ainsi facilement mettre en forme les champs correctement remplis par l'utilisateur.</p>

<pre class="brush: css no-line-numbers">input:valid {
  background-color: #ddffdd;
}</pre>

<h2 id="Syntaxe">Syntaxe</h2>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<p>Cet exemple présente un formulaire dont les éléments se colorent en vert lorsqu'ils sont valides et en rouge lorsqu'ils sont invalides.</p>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">input:invalid {
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

input:required:valid {
  border-color: #008000;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;form&gt;
  &lt;label&gt;Veuillez saisir une URL :&lt;/label&gt;
  &lt;input type="url"&gt;
  &lt;br&gt;
  &lt;br&gt;
  &lt;label&gt;Veuillez saisir une adresse électronique :&lt;/label&gt;
  &lt;input type="email" required&gt;
&lt;/form&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples',600,150)}}</p>

<h2 id="Accessibilité">Accessibilité</h2>

<p>La couleur rouge est généralement utilisée afin d'indiquer une valeur invalide. Les personnes ayant du mal à différencier les couleurs ne seront pas capables de déterminer la validité du champ si celui-ci n'est pas accompagné d'un indicateur qui n'est pas basé sur une couleur. Pour résoudre ce problème, on pourra utiliser un texte indicatif et/ou une icône.</p>

<ul>
 <li><a href="/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">Explications des recommendation WCAG 1.4</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" rel="noopener">Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0</a></li>
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
   <td>{{SpecName('HTML WHATWG', '#selector-valid', ':valid')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Aucune modification.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', '#selector-valid', ':valid')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Définition de la sémantique relative à HTML et aux contraintes de validation.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#validity-pseudos', ':valid')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Aucune modification.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.valid")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref(":invalid")}}</li>
 <li>{{cssxref(":required")}}</li>
 <li>{{cssxref(":optional")}}</li>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Validation_donnees_formulaire">La validation des données d'un formulaire</a></li>
 <li><a href="/fr/docs/Web/API/ValidityState">Accéder à l'état de validité en JavaScript</a></li>
</ul>
