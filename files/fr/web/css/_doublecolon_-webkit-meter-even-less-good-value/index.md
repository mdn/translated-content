---
title: '::-webkit-meter-even-less-good-value'
slug: 'Web/CSS/::-webkit-meter-even-less-good-value'
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
translation_of: 'Web/CSS/::-webkit-meter-even-less-good-value'
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>Le pseudo-élément <strong><code>::-webkit-meter-even-less-good-value</code></strong> donne une couleur rouge à l'élément {{HTMLElement("meter")}} lorsque les valeurs de <code>value</code> et d'optimum sont dans des intervalles opposés (par exemple : <code>value</code> &lt; <code>low</code> &lt; <code>high</code> &lt; <code>optimum</code> ou <code>value</code> &gt; <code>high</code> &gt; <code>low</code> &gt; <code>optimum</code>).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">meter::-webkit-meter-even-less-good-value {
  background: linear-gradient(to bottom, #f77, #d44 45%, #d44 55%, #f77);
  height: 100%;
  box-sizing: border-box;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;meter min="0" max="10" value="6"&gt;Score out of 10&lt;/meter&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples', '100%', 50)}}</p>

<div class="note">
<p><strong>Note :</strong> Cela fonctionnera uniquement pour les navigateurs Webkit/Blink.</p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<p>Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.-webkit-meter-even-less-good-value")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<p>Les pseudo-éléments utilisés par WebKit/Blink pour mettre en forme les autres parties d'un élément {{htmlelement("meter")}} :</p>

<ul>
 <li>{{cssxref("::-webkit-meter-inner-element")}}</li>
 <li>{{cssxref("::-webkit-meter-bar")}}</li>
 <li>{{cssxref("::-webkit-meter-optimum-value")}}</li>
 <li>{{cssxref("::-webkit-meter-suboptimum-value")}}</li>
</ul>
