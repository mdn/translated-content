---
title: Les animations CSS
slug: Web/CSS/CSS_Animations
tags:
  - CSS
  - Reference
translation_of: Web/CSS/CSS_Animations
original_slug: Web/CSS/Animations_CSS
---
<div>{{CSSRef}}</div>

<p>Les <strong>animations CSS</strong> sont un module CSS qui définit la façon dont les valeurs des propriétés CSS peuvent être animées au fur et à mesure d'une période via des étapes intermédiaires (<em>keyframes</em> en anglais). Le comportement de ces animations séquencées peut être défini en termes de durée, de nombre de répétitions et de la façon dont elles sont répétées.</p>

<h2 id="Référence">Référence</h2>

<h3 id="Propriétés_CSS">Propriétés CSS</h3>

<ul>
 <li>{{cssxref("animation")}}</li>
 <li>{{cssxref("animation-delay")}}</li>
 <li>{{cssxref("animation-direction")}}</li>
 <li>{{cssxref("animation-duration")}}</li>
 <li>{{cssxref("animation-fill-mode")}}</li>
 <li>{{cssxref("animation-iteration-count")}}</li>
 <li>{{cssxref("animation-name")}}</li>
 <li>{{cssxref("animation-play-state")}}</li>
 <li>{{cssxref("animation-timing-function")}}</li>
</ul>

<h3 id="Règles_CSS">Règles @ CSS</h3>

<ul>
 <li>{{cssxref("@keyframes")}}</li>
</ul>

<h2 id="Guides">Guides</h2>

<dl>
 <dt><a href="/fr/docs/Web/CSS/CSS_Animations/Detecting_CSS_animation_support">Détecter la prise en charge des animations CSS</a></dt>
 <dd>Cet article décrit une technique permettant de détecter si le navigateur prend en charge les animations CSS.</dd>
 <dt><a href="/fr/docs/Web/CSS/CSS_Animations/Utiliser_les_animations_CSS">Manipuler les animations CSS</a></dt>
 <dd>Un tutoriel pas-à-pas qui explique comment créer des animations CSS. Cet article décrit les différentes propriétés et règles @ relatives aux animations et comment elles interagissent.</dd>
 <dt><a href="/fr/docs/Web/CSS/Animations_CSS/Conseils">Conseils pour les animations CSS</a></dt>
 <dd>Des conseils et astuces pour tirer le meilleur parti des animations CSS. Dans cet article, on décrit une technique qui permet de relancer une animation qui a déjà été exécutée, ce que l'API ne permet pas de faire nativement.</dd>
</dl>

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
   <td>{{SpecName('CSS3 Animations')}}</td>
   <td>{{Spec2('CSS3 Animations')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<h3 id="Propriété_animation">Propriété <code>animation</code></h3>

<p>{{Compat("css.properties.animation")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/CSS_Transitions">Les transitions CSS</a> qui permettent de déclencher des animations suite à des actions utilisateur.</li>
</ul>
