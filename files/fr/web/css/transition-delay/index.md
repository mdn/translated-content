---
title: transition-delay
slug: Web/CSS/transition-delay
tags:
  - CSS
  - Propriété
  - Reference
  - Transitions
translation_of: Web/CSS/transition-delay
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>transition-delay</code></strong> indique la durée à attendre avant de débuter la transition qui s'applique pour un changement de propriété.</p>

<div>{{EmbedInteractiveExample("pages/css/transition-delay.html")}}</div>

<p>Cette durée peut être nulle, positive ou négative :</p>

<ul>
 <li>Une valeur de <code>0s</code> ou <code>0ms</code> indique que l'animation correspondante démarrera immédiatement lorsque la valeur sera modifiée.</li>
 <li>Une valeur positive permettra d'attendre avant de démarrer l'effet de transition.</li>
 <li>Une valeur négative lancera l'animation immédiatement mais à partir d'un état intermédiaire (comme si la  transition avait déjà commencé).</li>
</ul>

<p>Il est possible d'indiquer plusieurs valeurs d'attente. Chaque valeur sera appliquée à la propriété correspondante donnée par la liste {{cssxref("transition-property")}} (qui agit comme un index des propriétés concernées par les transitions). S'il n'y a pas suffisamment de valeurs dans cette liste, les valeurs précédentes seront répétées jusqu'à ce qu'il y en ait suffisamment. S'il y a plus de valeurs d'attente que d'éléments dans {{cssxref("transition-property")}}, la liste est simplement tronquée. Dans les deux cas, la déclaration CSS est considérée comme valide.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css no-line-numbers">/* Valeurs temporelles */
/* Type &lt;time&gt; */
transition-delay: 3s;
transition-delay: 2s, 4ms;

/* Valeurs globales */
transition-delay: inherit;
transition-delay: initial;
transition-delay: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;time&gt;</code></dt>
 <dd>Une valeur {{cssxref("&lt;time&gt;")}} qui indique la durée à attendre avant de démarrer l'effet de transition déclenché par le changement de valeur d'une propriété.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="exemple_illustrant_differentes_temporisations">Exemple illustrant différentes temporisations</h3>

<h4>HTML</h4>

<pre class="brush:html">
  &lt;div class="box delay-1"&gt;0,5 secondes&lt;/div&gt;

  &lt;div class="box delay-2"&gt;2 secondes&lt;/div&gt;

  &lt;div class="box delay-3"&gt;4 secondes&lt;/div&gt;

  &lt;button id="change"&gt;Changer&lt;/button&gt;
</pre>

<h4>CSS</h4>

<pre class="brush:css;">
.box {
  margin: 20px;
  padding: 10px;
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 18px;
  transition-property: background-color font-size transform color;
  transition-timing-function: ease-in-out;
  transition-duration: 3s;
}

.transformed-state {
  transform: rotate(270deg);
  background-color: blue;
  color: yellow;
  font-size: 12px;
  transition-property: background-color font-size transform color;
  transition-timing-function: ease-in-out;
  transition-duration: 3s;
}

.delay-1 {
  transition-delay: 0.5s;
}

.delay-2 {
  transition-delay: 2s;
}

.delay-3 {
  transition-delay: 4s;
}
</pre>

<h4>JavaScript</h4>

<pre class="brush:js">function change() {
  const elements = document.querySelectorAll("div.box");
  for (let element of elements) {
    element.classList.toggle("transformed-state");
  }
}

const changeButton = document.querySelector("#change");
changeButton.addEventListener("click", change);
</pre>

<h4>Résultat</h4>

<div>{{EmbedLiveSample("exemple_illustrant_differentes_temporisations",275,200)}}</div>

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
   <td>{{SpecName('CSS3 Transitions', '#transition-delay-property', 'transition-delay')}}</td>
   <td>{{Spec2('CSS3 Transitions')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.transition-delay")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions">Utiliser les transitions CSS</a></li>
 <li>L'API {{domxref("TransitionEvent")}}</li>
</ul>
