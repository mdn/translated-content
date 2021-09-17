---
title: '::-webkit-meter-suboptimum-value'
slug: 'Web/CSS/::-webkit-meter-suboptimum-value'
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
translation_of: 'Web/CSS/::-webkit-meter-suboptimum-value'
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>Le pseudo-élément <strong><code>::-webkit-meter-suboptimum-value</code></strong> donne une couleur jaune à l'élément {{HTMLElement("meter")}} lorsque la valeur de l'attribut est en dehors de l'intervalle haut des valeurs.</p>

<h2 id="Exemples"><strong>Exemples</strong></h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">meter::-webkit-meter-suboptimum-value {
  background: -webkit-gradient linear, left top, left bottom;
  height: 100%;
  box-sizing: border-box;
}</pre>

<h3 id="HTML"><strong>HTML</strong></h3>

<pre class="brush: html">&lt;meter min="0" max="10" value="6"&gt;Score sur 10&lt;/meter&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Examples', '100%', 50)}}</p>

<div class="note">
<p><strong>Note :</strong> Cette fonctionnalité ne sera visible que depuis un navigateur WebKit/Blink.</p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<p>Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.-webkit-meter-suboptimum-value")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<p>Les pseudo-éléments utilisés par WebKit/Blink pour mettre en forme les autres parties d'un élément {{htmlelement("meter")}} :</p>

<ul>
 <li>{{cssxref("::-webkit-meter-inner-element")}}</li>
 <li>{{cssxref("::-webkit-meter-bar")}}</li>
 <li>{{cssxref("::-webkit-meter-even-less-good-value")}}</li>
 <li>{{cssxref("::-webkit-meter-optimum-value")}}</li>
</ul>
