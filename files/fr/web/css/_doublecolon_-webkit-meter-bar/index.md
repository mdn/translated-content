---
title: '::-webkit-meter-bar'
slug: 'Web/CSS/::-webkit-meter-bar'
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
translation_of: 'Web/CSS/::-webkit-meter-bar'
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>Le pseudo-élément <strong><code>::-webkit-meter-bar</code></strong> est un pseudo-élément spécifique à WebKit et permet de mettre en forme l'arrière-plan d'un élément {{HTMLElement("meter")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">meter {
   /* On réinitialise l'apparence par défaut */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

meter::-webkit-meter-bar  {
  background: #eee;
  box-shadow: 0 2px 3px rgba (0, 0, 0, 0.2) inset;
  border-radius: 3px;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;meter min="0" max="10" value="6"&gt;Score sur 10&lt;/meter&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples')}}</p>

<div class="note">
<p><strong>Note :</strong> Cela fonctionnera uniquement pour les navigateurs Webkit/Blink.</p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<p>Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.-webkit-meter-bar")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les pseudo-éléments utilisés par WebKit/Blink pour mettre en forme les autres parties d'un élément {{htmlelement("meter")}} :
  <ul>
   <li>{{cssxref("::-webkit-meter-inner-element")}}</li>
   <li>{{cssxref("::-webkit-meter-even-less-good-value")}}</li>
   <li>{{cssxref("::-webkit-meter-optimum-value")}}</li>
   <li>{{cssxref("::-webkit-meter-suboptimum-value")}}</li>
  </ul>
 </li>
 <li><a href="/fr/docs/Web/CSS/Webkit_Extensions">Les extensions CSS WebKit</a></li>
</ul>

<p> </p>
