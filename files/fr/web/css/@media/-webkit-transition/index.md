---
title: '-webkit-transition'
slug: Web/CSS/@media/-webkit-transition
tags:
  - CSS
  - Caractéristique média
  - Non-standard
  - Obsolete
  - Reference
translation_of: Web/CSS/@media/-webkit-transition
---
<div>{{CSSRef}}{{Non-standard_header}}{{obsolete_header}}</div>

<p><strong><code>-webkit-transition</code></strong> est une <a href="/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries#Cibler_des_caractéristiques_média">caractéristique média</a> booléenne non-standard qui permet d'indiquer si les transitions CSS ({{cssxref("transition")}}) sont prises en charge dans leurs versions préfixées.</p>

<div class="note">
<p><strong>Note :</strong> Cette caractéristique est uniquement prise en charge par les navigateurs basés sur WebKit. L'alternative standard correspondante consiste à utiliser {{cssxref("@supports")}}.</p>
</div>

<h2 id="Privilégier_supports">Privilégier <code>@supports</code></h2>

<p>S'il vous faut déterminer si les transitions CSS sont prises en charges, évitez d'utiliser <code>-webkit-transition</code>. En lieu et place, on utilisera la règle @ {{cssxref("@supports")}} :</p>

<pre class="brush: css">@supports(transition: initial) {
  /* Les règles CSS à utiliser si   */
  /* les transitions sont prises en */
  /* charge. */
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette caractéristique média est une caractéristique média propriétaire liée à WebKit/Blink. Elle ne fait partie d'aucune spécification. Elle est décrite plus en détails dans la <a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3">référence CSS Apple pour Safari (en anglais)</a>.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.at-rules.media.-webkit-transition")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries">Utiliser les media queries</a></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Transitions/Utiliser_transitions_CSS">Utiliser les transitions CSS</a></li>
 <li>{{cssxref("@supports")}}</li>
 <li>{{cssxref("transition")}}</li>
 <li>{{cssxref("-webkit-transform-3d")}}</li>
 <li>{{cssxref("-webkit-transform-2d")}}</li>
 <li>{{cssxref("-webkit-animation")}}</li>
 <li><a href="http://www.quirksmode.org/css/tests/mediaqueries/animation.html">Page de test sur quirksmode.org</a></li>
</ul>
