---
title: transition
slug: Web/CSS/transition
tags:
  - CSS
  - Propriété
  - Reference
  - Transitions CSS
translation_of: Web/CSS/transition
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>transition</code></strong> est <a href="/fr/docs/Web/CSS/Propriétés_raccourcies">une propriété raccourcie</a> pour les propriétés {{cssxref("transition-property")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-timing-function")}} et {{cssxref("transition-delay")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/transition.html")}}</div>

<p>Elle permet de définir la transition entre deux états d'un élément. Les différents états peuvent être définis à l'aide <a href="/fr/docs/Web/CSS/Pseudo-classes">de pseudo-classes</a> telles que {{cssxref(":hover")}} ou {{cssxref(":active")}} ou être définis dynamiquement avec JavaScript.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* S'applique à une propriété */
/* on a le nom et la durée */
transition: margin-right 4s;

/* nom de la propriété | durée | retard */
transition: margin-right 4s 1s;

/* nom | durée | fonction */
transition: margin-right 4s ease-in-out;

/* nom | durée | fonction | retard */
transition: margin-right 4s ease-in-out 1s;

/* S'applique à deux propriétés */
transition: margin-right 4s, color 1s;

/* S'applique à toutes les propriétés modifiées */
transition: all 0.5s ease-out;

/* Valeurs globales */
transition: inherit;
transition: initial;
transition: unset;
</pre>

<p>La propriété <code>transition</code> se définit comme une ou plusieurs propriétés de transitions, séparées par des virgules.</p>

<p>Chacune des propriétés de transition décrit la transition qui devrait être appliquée à une propriété donnée (ou pour les valeurs spéciales <code>all</code> et <code>none</code>). Une propriété de transition inclut :</p>

<ul>
 <li>zéro ou une valeur qui représente la propriété à laquelle la transition s'applique. Ça peut être :
  <ul>
   <li>le mot-clé <code>none</code></li>
   <li>le mot-clé <code>all</code></li>
   <li>Un identifiant ({{cssxref("&lt;custom-ident&gt;")}}) qui nomme une propriété CSS.</li>
  </ul>
 </li>
 <li>zéro ou une valeur {{cssxref("&lt;single-transition-timing-function&gt;")}} qui représente la fonction de temporisation utilisée pour la transition</li>
 <li>zéro, une ou deux valeurs {{cssxref("&lt;time&gt;")}}. La première valeur qui peut être interprétée comme un temps sera affectée à la propriété {{cssxref("transition-duration")}} et la seconde valeur qui peut être affectée comme un temps sera affectée à la propriété {{cssxref("transition-delay")}}.</li>
</ul>

<p>Si la liste des valeurs est trop courte pour les différentes propriétés, les valeurs seront répétées. Si la liste est trop longue, elle sera tronquée.</p>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<p>Plusieurs exemples de transitions CSS sont présentés <a href="/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions" title="en/CSS/CSS transitions">sur l'article sur les transitions CSS</a>.</p>

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
   <td>{{SpecName('CSS3 Transitions', '#transition-shorthand-property', 'transition')}}</td>
   <td>{{Spec2('CSS3 Transitions')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.transition")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions" title="en/CSS/CSS transitions">Utiliser les transitions CSS</a></li>
 <li>{{domxref("TransitionEvent")}}</li>
</ul>
