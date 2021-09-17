---
title: Valeur utilisée
slug: Web/CSS/used_value
tags:
  - CSS
  - Guide
  - Reference
  - Web
translation_of: Web/CSS/used_value
original_slug: Web/CSS/Valeur_utilisée
---
<div>{{cssref}}</div>

<p>La <strong>valeur utilisée</strong> de n'importe quelle propriété CSS est la valeur finale d'une propriété après que tous les calculs aient été réalisés.</p>

<p>Une fois qu'un agent utilisateur a terminé les calculs, chaque propriété CSS possède une valeur utilisée. Les valeurs utilisées des dimensions (par exemple <code>width</code>,<code> height</code>) sont exprimées en pixels et les propriétés raccourcies (comme <code>background</code>) sont cohérentes avec leurs propriétés composantes (par exemple <code>background-color</code>), <code>display</code> est cohérente avec <code>position</code> et <code>float</code>.</p>

<p>Les valeurs utilisées pour certaines propriétés peuvent être retrouvées en appelant la méthode JavaScript <code><a href="/fr/docs/DOM/window.getComputedStyle">window.getComputedStyle()</a></code>.</p>

<h2 id="Détails">Détails</h2>

<p>Quatre étapes permettent de déterminer la valeur finale de n'importe quelle propriété CSS.</p>

<ol>
 <li>Tout d'abord, la <a href="/fr/docs/CSS/Valeur_spécifiée">valeur spécifiée</a> est le résultat de la cascade (on choisit la règle la plus spécifique qui change la propriété), de l'<a href="/fr/docs/CSS/Héritage">héritage</a> (on utilise la valeur calculée d'un parent si la propriété peut être héritée) ou alors c'est la valeur par défaut est utilisée.</li>
 <li>Ensuite, la <a href="/fr/docs/CSS/Valeur_calculée">valeur calculée</a> est déterminée selon la spécification (par exemple, un <code>span</code> avec <code>position: absolute</code> aura <code>display</code> qui passera à <code>block</code> pour la valeur calculée).</li>
 <li>Ensuite, la mise en page est calculée (les dimensions qui ont pour valeur <code>auto</code> ou des pourcentages relatifs à des parents sont remplacées par des valeurs en pixels), et le résultat est la <strong>valeur utilisée</strong>.</li>
 <li>Enfin, la valeur est transformée selon les limites de l'environnement actuel, le résultat est <a href="/fr/docs/Web/CSS/valeur_reelle">la valeur réelle</a>. La valeur finalement utilisée est la valeur réelle, éventuellement approximée en fonction des contraintes de l'agent utilisateur. Ces valeurs sont calculées de manière interne ; un script peut seulement lire les valeurs utilisées finales grâce à <code><a href="/fr/docs/DOM/window.getComputedStyle">window.getComputedStyle</a></code>  (bien que cette méthode peut renvoyer la valeur calculée selon la propriété, la valeur renvoyée par cette méthode est généralement appelée <a href="/fr/docs/Web/CSS/valeur_r%C3%A9solue">valeur résolue</a>).</li>
</ol>

<h2 id="Différence_avec_les_valeurs_calculées">Différence avec les valeurs calculées</h2>

<p>CSS 2.0 définissait la <a href="/fr/docs/CSS/Valeur_calculée">valeur calculée</a> comme la dernière étape du calcul de la valeur. CSS 2.1 a introduit une définition distincte de la valeur utilisée afin qu'un élément puisse hériter d'une largeur ou d'une hauteur d'un parent de manière explicite si la valeur calculée du parent est un pourcentage. Pour les propriétés CSS qui ne dépendent pas de la mise en page (comme <code>display</code>, <code>font-size</code> ou <code>line-height</code>), les valeurs calculées et les valeurs utilisées sont identiques. Voici les propriétés qui dépendent de la mise en page et dont les valeurs calculées sont différentes des valeurs utilisées (extrait de <em><a href="https://www.w3.org/TR/CSS2/changes.html#q36">CSS 2.1 Changes: Specified, computed, and actual values</a></em>) :</p>

<ul>
 <li><code>background-position</code></li>
 <li><code>bottom</code>, <code>left</code>, <code>right</code>, <code>top</code></li>
 <li><code>height</code>, <code>width</code></li>
 <li><code>margin-bottom</code>, <code>margin-left</code>, <code>margin-right</code>, <code>margin-top</code></li>
 <li><code>min-height</code>, <code>min-width</code></li>
 <li><code>padding-bottom</code>, <code>padding-left</code>, <code>padding-right</code>, <code>padding-top</code></li>
 <li><code>text-indent</code></li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Cet exemple illustre et calcule les largeurs <em>utilisées</em> pour les trois éléments.</p>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* Permet de mieux voir les résultats */
div {
  border: 1px solid red;
  padding: 8px;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="no-width"&gt;
  &lt;p&gt;Pas de largeur explicite.&lt;/p&gt;
  &lt;p class="show-used-width"&gt;..&lt;/p&gt;

  &lt;div id="width-50"&gt;
    &lt;p&gt;Largeur explicite : 50%.&lt;/p&gt;
    &lt;p class="show-used-width"&gt;..&lt;/p&gt;

    &lt;div id="width-inherit"&gt;
      &lt;p&gt;Largeur explicite: héritée avec &lt;code&gt;inherit&lt;/code&gt;.&lt;/p&gt;
      &lt;p class="show-used-width"&gt;..&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function updateUsedWidth(id) {
  var div = document.querySelector(`#${id}`);
  var par = div.querySelector('.show-used-width');
  var wid = window.getComputedStyle(div)["width"];
  par.textContent = `Used width: ${wid}.`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener('resize', updateAllUsedWidths);

</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples', '80%', '372px')}}</p>

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
   <td>{{SpecName("CSS2.2", "cascade.html#used-value", "used value")}}</td>
   <td>{{Spec2("CSS2.2")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "cascade.html#used-value", "used value")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/Reference">La référence CSS</a></li>
 <li><a href="/fr/docs/Web/CSS/Valeur_initiale">La notion de valeur initiale</a></li>
 <li><a href="/fr/docs/Web/CSS/Valeur_calculée">La notion de valeur calculée</a></li>
 <li><a href="/fr/docs/Web/CSS/Valeur_spécifiée">La notion de valeur définie</a></li>
 <li><a href="/fr/docs/Web/CSS/valeur_r%C3%A9solue">La notion de valeur résolue</a></li>
 <li><a href="/fr/docs/Web/CSS/valeur_reelle">La notion de valeur réelle</a></li>
 <li><code><a href="/fr/docs/DOM/window.getComputedStyle">window.getComputedStyle()</a></code></li>
</ul>
