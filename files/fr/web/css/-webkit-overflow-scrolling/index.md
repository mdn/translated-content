---
title: '-webkit-overflow-scrolling'
slug: Web/CSS/-webkit-overflow-scrolling
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-webkit-overflow-scrolling
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>La propriété <strong><code>-webkit-overflow-scrolling</code></strong> permet de contrôler si l'appareil tactile utilise l'inertie pour faire défiler l'élément visé par la déclaration.</p>

<h2 id="Valeurs">Valeurs</h2>

<dl>
 <dt><code>auto</code></dt>
 <dd>Le défilement « normal » est utilisé : le défilement s'arrête dès que le doigt ne touche plus l'écran.</dd>
 <dt><code>touch</code></dt>
 <dd>Le défilement simule une certaine inertie : le contenu continue à défiler légèrement après que le toucher soit fini. La vitesse et la durée du défilement sont proportionnelles à la vitesse de déplacement du doigt sur l'écran. Cela crée un nouveau contexte d'empilement.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">div {
  width: 100%;
  overflow: auto;
}

p {
  width: 200%;
  background: #f5f9fa;
  border: 2px solid #eaf2f4;
  padding: 10px;
}

.scroll-touch {
  -webkit-overflow-scrolling: touch; /* on laisse le défilement se poursuivre */
}

.scroll-auto {
  -webkit-overflow-scrolling: auto; /* on arrête le défilement immédiatement */
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="scroll-touch"&gt;
  &lt;p&gt;
    Ce paragraphe a un défilement inertiel.
  &lt;/p&gt;
&lt;/div&gt;
&lt;div class="scroll-auto"&gt;
  &lt;p&gt;
     Pas celui-ci.
  &lt;/p&gt;
&lt;/div&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples')}}</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette propriété est une propriété propriétaire liée à WebKit/Blink et ne fait partie d'aucune spécification. Elle est documentée dans <a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/css/property/-webkit-overflow-scrolling">la référence CSS de Safari</a>.</p>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.-webkit-overflow-scrolling")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/">L'article de CSS-Tricks sur cette fonctionnalité, avec une démonstration (en anglais)</a></li>
 <li><a href="https://www.smashingmagazine.com/2018/08/scroll-bouncing-websites/">Article de Smashing Magazine (en anglais) : décrire l'effet du rebondissement du scroll et le fonctionnement dans les différents navigateurs</a></li>
</ul>
