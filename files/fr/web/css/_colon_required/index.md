---
title: ':required'
slug: 'Web/CSS/:required'
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: 'Web/CSS/:required'
---
<div>{{CSSRef}}</div>

<p>La <a href="/fr/docs/Web/CSS/Pseudo-classes">pseudo-classe</a> <strong><code>:required</code></strong> permet de cibler un élément {{HTMLElement("input")}} pour lequel l'attribut {{htmlattrxref("required", "input")}} est activé. Cela permet de mettre en forme les éléments obligatoires pour remplir correctement un formulaire.</p>

<pre class="brush: css no-line-numbers">/* Cible les éléments &lt;input&gt; qui ont */
/* l'attribut required */
input:required {
  border: 1px dashed red;
}</pre>

<div class="note">
<p><strong>Note :</strong> La pseudo-classe {{cssxref(":optional")}} pourra être utilisée pour mettre en forme les champs facultatifs.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">input {
  border-width: 3px;
}
input:optional {
  border-color: #008000;
}
input:required {
  border-color: #800000;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;form&gt;
  &lt;label for="url-input"&gt;Tapez une URL :&lt;/label&gt;
  &lt;input type="url" id="url-input"&gt;
  &lt;br&gt;
  &lt;br&gt;
  &lt;label for="email-input"&gt;Tapez une adresse courriel :&lt;/label&gt;
  &lt;input type="email" id="email-input" required&gt;
&lt;/form&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples','100%',150)}}</p>

<p> </p>

<h2 id="Accessibilité">Accessibilité</h2>

<p>Si un formulaire ({{HTMLElement("form")}}) contient des champs ({{htmlelement("input")}}) optionnels, les champs obligatoires doivent être indiqués avec l'attribut {{htmlattrxref("input","required")}}. Ainsi, les personnes utilisant des outils d'assistance (par exemple un lecteur d'écran) pourront savoir que ces champs ont besoin d'un contenu valide afin de pouvoir envoyer le formulaire.</p>

<p>Les champs obligatoires devraient également être indiqués visuellement et cette indication ne doit pas uniquement être fournie avec une couleur. Généralement, un texte descriptif ou une icône est utilisé.</p>

<ul>
 <li><a href="/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">Explications des recommendation WCAG 1.4</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" rel="noopener">Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0</a></li>
</ul>

<p> </p>

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
   <td>{{SpecName('HTML WHATWG', '#selector-required', ':required')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Aucune modification.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', '#selector-required', ':required')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Définition de la sémantique relative à HTML et aux contraintes de validation.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#opt-pseudos', ':required')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Aucune modification.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Basic UI', '#pseudo-required-value', ':required')}}</td>
   <td>{{Spec2('CSS3 Basic UI')}}</td>
   <td>Définition de la pseudo-classe mais pas de la sémantique associée.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.required")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref(":optional")}}</li>
 <li>{{cssxref(":invalid")}}</li>
 <li>{{cssxref(":valid")}}</li>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Validation_donnees_formulaire">La validation des données d'un formulaire</a></li>
</ul>
