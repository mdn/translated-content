---
title: background-blend-mode
slug: Web/CSS/background-blend-mode
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/background-blend-mode
---
<div>{{CSSRef}}</div>

<p>La propriété CSS <strong><code>background-blend-mode</code></strong> définit la façon dont les images d'arrière-plan doivent être fusionnées entre elles et avec la couleur d'arrière-plan.</p>

<div>{{EmbedInteractiveExample("pages/css/background-blend-mode.html")}}</div>

<p>Les modes de fusions (<em>blending modes</em>) doivent être définis dans le même ordre que les images sont définies avec {{cssxref("background-image")}}. Si la liste des modes de fusion et la liste des images d'arrière-plan ne sont pas de la même longueur, la première liste sera répétée ou tronquée pour que les longueurs soient égales.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Une valeur qui s'applique à toutes les images */
background-blend-mode: normal;

/* Deux valeurs, chacune pour une image */
background-blend-mode: darken, luminosity;

/* Valeurs globales */
background-blend-mode: initial;
background-blend-mode: inherit;
background-blend-mode: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;blend-mode&gt;</code></dt>
 <dd>Une valeur décrivant un mode de fusion (type {{cssxref("&lt;blend-mode&gt;")}}) qui doit être appliqué. On peut avoir plusieurs valeurs et dans ce cas, elles doivent être séparées par des virgules.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

<pre>Syntaxe Formelle: normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: screen;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;

&lt;select id="select"&gt;
    &lt;option&gt;normal&lt;/option&gt;
    &lt;option&gt;multiply&lt;/option&gt;
    &lt;option selected&gt;screen&lt;/option&gt;
    &lt;option&gt;overlay&lt;/option&gt;
    &lt;option&gt;darken&lt;/option&gt;
    &lt;option&gt;lighten&lt;/option&gt;
    &lt;option&gt;color-dodge&lt;/option&gt;
    &lt;option&gt;color-burn&lt;/option&gt;
    &lt;option&gt;hard-light&lt;/option&gt;
    &lt;option&gt;soft-light&lt;/option&gt;
    &lt;option&gt;difference&lt;/option&gt;
    &lt;option&gt;exclusion&lt;/option&gt;
    &lt;option&gt;hue&lt;/option&gt;
    &lt;option&gt;saturation&lt;/option&gt;
    &lt;option&gt;color&lt;/option&gt;
    &lt;option&gt;luminosity&lt;/option&gt;
&lt;/select&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js ">document.getElementById("select").onchange = function(event) {
    document.getElementById("div").style.backgroundBlendMode = document.getElementById("select").selectedOptions[0].innerHTML;
}
console.log(document.getElementById('div'));</pre>

<p>{{EmbedLiveSample('Exemples', "330", "330")}}</p>

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
   <td>{{SpecName('Compositing', '#background-blend-mode', 'background-blend-mode')}}</td>
   <td>{{Spec2('Compositing')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.background-blend-mode")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("&lt;blend-mode&gt;")}}</li>
 <li>{{cssxref("mix-blend-mode")}}</li>
</ul>
