---
title: '::-webkit-progress-bar'
slug: Web/CSS/::-webkit-progress-bar
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::-webkit-progress-bar
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>Le pseudo-élément <strong><code>::-webkit-progress-bar</code></strong> représente l'ensemble de la barre d'un élément {{HTMLElement("progress")}}. Normalement, celui-ci n'est visible que pour la partie de la barre qui n'est pas remplie car, par défaut, il est affiché sous le pseudo-élément {{cssxref("::-webkit-progress-value")}}. C'est un pseudo-élément fils du pseudo-élément {{cssxref("::-webkit-progress-inner-element")}} et c'est le pseudo-élément parent du pseudo-élément {{cssxref("::-webkit-progress-value")}}.</p>

<div class="note">
<p><strong>Note :</strong> Afin que <code>::-webkit-progress-value</code> ait un effet, il faut que {{cssxref("appearance")}} vaille <code>none</code> sur l'élément <code>&lt;progress&gt;</code>.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">progress {
  -webkit-appearance: none;
}

::-webkit-progress-bar {
   background-color: orange;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;progress value="10" max="50"&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples", 200, 50)}}</p>

<p>Une barre de progression avec la mise en forme ci-avant sera affichée de cette façon :</p>

<p><img alt="" src="progress-bar.png"></p>

<h2 id="Spécifications">Spécifications</h2>

<p>Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.-webkit-progress-bar")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les pseudo-éléments relatifs à WebKit/Blink qui permettent de mettre en forme les autres parties des éléments {{HTMLElement("progress")}} :
  <ul>
   <li>{{cssxref("::-webkit-progress-value")}}</li>
   <li>{{cssxref("::-webkit-progress-inner-element")}}</li>
  </ul>
 </li>
 <li>{{cssxref("::-moz-progress-bar")}}</li>
 <li>{{cssxref("::-ms-fill")}}</li>
</ul>
