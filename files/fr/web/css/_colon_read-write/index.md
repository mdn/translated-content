---
title: ':read-write'
slug: 'Web/CSS/:read-write'
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: 'Web/CSS/:read-write'
---
<div>{{CSSRef}}</div>

<p>La <a href="/fr/docs/Web/CSS/Pseudo-classes">pseudo-classe</a> <strong><code>:read-write</code></strong> permet de cibler un élément lorsque celui-ci peut être édité par l'utilisateur (par exemple les champs texte d'un formulaire ou les éléments {{HTMLElement("textarea")}}).</p>

<pre class="brush: css no-line-numbers">/* Cible tout élément éditable */
/* Pris en charge dans Firefox avec un préfixe */
input:-moz-read-write {
  background-color: #ccc;
}

/* Pris en charge sans préfixe pour Blink/WebKit/Edge */
input:read-write {
  background-color: #ccc;
}</pre>

<div class="note">
<p><strong>Note :</strong> Ce sélecteur ne sélectionne pas que les champs de saisie textuels ({{HTMLElement("input")}} ou {{HTMLElement("textarea")}}). Il permet de sélectionner n'importe quel élément qui peut être édité par l'utilisateur (par exemple un élément {{htmlelement("p")}} avec un attribut {{htmlattrxref("contenteditable")}}).</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css line-numbers  language-css">input { min-width: 25em; }
input:-moz-read-write { background: cyan; }
input:read-write { background: cyan; }

p:-moz-read-write { background: lightgray; }
p:read-write { background: lightgray; }
p[contenteditable="true"] { color: blue; }
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;input type="text" value="Un champ en lecture seule"/&gt;
&lt;p contenteditable&gt;Essayez un peu d'éditer ce paragraphe.&lt;/p&gt;
&lt;p&gt;Bonne chance pour celui-là !&lt;/p&gt;</pre>

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
   <td>{{SpecName('HTML WHATWG', '#selector-read-write', ':read-write')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Aucune modification.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', '#selector-read-write', ':read-write')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Définition de la sémantique relative à HTML et aux contraintes de validation.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#rw-pseudos', ':read-write')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Définition de la pseudo-classe mais pas de la sémantique associée.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.read-write")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref(":read-only")}}</li>
 <li>L'attribut HTML {{htmlattrxref("contenteditable")}}</li>
</ul>
