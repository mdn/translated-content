---
title: Utilisation des requêtes média pour l'accessibilité
slug: Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility
tags:
  - '@media'
  - Accessibilité
  - CSS
translation_of: Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility
original_slug: Web/CSS/Requêtes_média/Utilisation_requêtes_media_accessibilité
---
<div>{{QuickLinksWithSubpages("/fr/docs/Web/CSS/Requêtes_média/")}}</div>

<p><strong>Les requêtes média (<em>media queries</em>)</strong> peuvent être utilisées afin d'améliorer l'accessibilité d'un site web.</p>

<h2 id="Réduction_de_mouvement_-_prefers-reduced-motion">Réduction de mouvement - <code>prefers-reduced-motion</code></h2>

<p>Le clignotement ou les animations rapides peuvent poser problème, notamment pour les personnes souffrant de troubles tels que le troubles de déficit de l'attention ou d'epilepsie, de migraines, etc.</p>

<p>Cette méthode peut également améliorer l'expérience des utilisateurs en économisant l'énergie nécessaire à l'affichage de la page (avec une amélioration sensible pour les appareils avec une batterie faible ou qui ne sont pas particulièrement récents).</p>

<h3 id="Syntaxe">Syntaxe</h3>

<dl>
 <dt><code><dfn>no-preference</dfn></code></dt>
 <dd>Cette valeur indique que l'utilisateur n'a pas indiqué de préférence particulière dans le système.</dd>
 <dt><code><dfn>reduce</dfn></code></dt>
 <dd>Cette valeur indique que l'utilisateur a signalé au système qu'il préférait une interface minimisant la quantité de mouvement ou d'animation. Idéalement, tous les mouvements qui ne sont pas essentiles doivent être retirés.</dd>
</dl>

<h3 id="Exemple">Exemple</h3>

<p>Cet exemple illustre comment éviter les animations inutiles en activant une préférence pour réduire les mouvements à l'écran.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="animation"&gt;animated box&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.animation {
  -webkit-animation: vibrate 0.3s linear infinite both;
  animation: vibrate 0.3s linear infinite both;
}

@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: none;
  }
}
</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Exemple")}}</p>

<h2 id="Mode_de_contraste_élevéNon-standard_inline">Mode de contraste élevé{{Non-standard_inline}}</h2>

<p>La caractéristique média <code><strong>-ms-high-contrast</strong></code> est <a href="/en-US/docs/Web/CSS/Microsoft_extensions">spécifique à Microsoft</a> mais permet d'indiquer si l'application est affichée avec un mode de contraste élevé et, si c'est le cas, quelle variation de couleur est utilisée.</p>

<p>Cela ne bénéficie pas seulement aux utilisateurs souffrant de troubles de la vision mais aussi aux personnes qui consultent le document avec une lumière ambiante importante (ex. sur un écran faiblement éclairé et en plein soleil).</p>

<h3 id="Syntaxe_2">Syntaxe</h3>

<p>La caractéristique média <strong><code>-ms-high-contrast</code></strong> peut être définie avec l'une des valeurs suivantes.</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>active</code></dt>
 <dd>
 <p>Cette valeur indique que les règles suivantes seront appliquées lorsque le système utilise un mode de contraste élevé, quelle que soit la variation de couleurs.</p>
 </dd>
 <dt><code>black-on-white</code></dt>
 <dd>
 <p>Cette valeur indique que les règles suivantes seront appliquées lorsque le système utilise un mode de contraste élevé avec une dominante noir sur blanc.</p>
 </dd>
 <dt><code>white-on-black</code></dt>
 <dd>
 <p>Cette valeur indique que les règles suivantes seront appliquées lorsque le système utilise un mode de contraste élevé avec une dominante blanc sur noir.</p>
 </dd>
</dl>

<h3 id="Exemple_2">Exemple</h3>

<p>Les déclarations suivantes s'appliqueront respectivement aux applications qui sont affichées avec un mode de contraste élevé, quelle que soit la variation de couleur (1), avec une dominante noir sur blanc (2), avec une dominante blanc sur noir (3).</p>

<pre class="brush: css">@media screen and (-ms-high-contrast: active) {
  /* Toutes les règles appliquées en contraste élevé */
}
@media screen and (-ms-high-contrast: black-on-white) {
  div { background-image: url('image-bw.png'); }
}
@media screen and (-ms-high-contrast: white-on-black) {
  div { background-image: url('image-wb.png'); }
}
</pre>
