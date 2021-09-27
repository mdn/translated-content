---
title: Window.getDefaultComputedStyle()
slug: Web/API/Window/getDefaultComputedStyle
tags:
  - API
  - CSS
  - Method
  - Reference
translation_of: Web/API/window/getDefaultComputedStyle
---
<div>{{APIRef("CSSOM")}}{{Non-standard_header}}</div>

<p><code>getDefaultComputedStyle()</code> fournit les valeurs calculées par défaut de toutes les propriétés CSS d'un élément, en ignorant la mise en forme de l'auteur. C'est-à-dire que seules les mises en forme de l'agent utilisateur et de l'utilisateur sont pris en compte.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>miseEnForme</em> = window.getDefaultComputedStyle(<em>element</em>[, <em>pseudoElt</em>]);
</pre>

<dl>
 <dt>element</dt>
 <dd>L'{{domxref("Element")}} dont on veut obtenir la mise en forme calculée.</dd>
 <dt>pseudoElt {{optional_inline}}</dt>
 <dd>Une chaîne indiquant le pseudo-élément à rechercher. Doit être <code>null</code> (ou non indiqué) pour les éléments ordinaires.</dd>
</dl>

<p>Le <code>style</code> retourné est un objet <a href="/fr-FR/docs/Web/API/CSSStyleDeclaration"><code>CSSStyleDeclaration</code></a>.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var elem1 = document.getElementById("IdElem");
var miseEnForme = window.getDefaultComputedStyle(elem1);
</pre>

<pre class="brush: html">&lt;style&gt;
#conteneur-elem {
   position: absolute;
   left:     100px;
   top:      200px;
   height:   100px;
 }
&lt;/style&gt;

&lt;div id="conteneur-elem"&gt;factice&lt;/div&gt;
&lt;div id="sortie"&gt;&lt;/div&gt;

&lt;script&gt;
    var elem = document.getElementById("conteneur-elem");
    var laPropCSS = window.getDefaultComputedStyle(elem).position;
    document.getElementById("sortie").innerHTML = laPropCSS; // affichera "static"
&lt;/script&gt;   </pre>

<h2 id="Description">Description</h2>

<p>L'objet retourné est du même type que l'objet retourné par <code>getComputedStyle</code>, mais il ne prend en compte que les règles user-agent et user.</p>

<h2 id="Utilisation_avec_des_pseudo-éléments">Utilisation avec des pseudo-éléments</h2>

<p><code>getDefaultComputedStyle</code> peut extraire des informations de mise en forme à partir de pseudo-éléments (par exemple, ::after, ::before).</p>

<pre class="brush: html">&lt;style&gt;
 h3:after {
   content: ' déchire !';
 }
&lt;/style&gt;

&lt;h3&gt;contenu généré&lt;/h3&gt;

&lt;script&gt;
  var h3       = document.querySelector('h3'),
      resultat = getDefaultComputedStyle(h3, ':after').content;

  console.log('le contenu généré est : ', resultat); // retourne 'none'
&lt;/script&gt;
</pre>

<h2 id="Notes">Notes</h2>

<p>La valeur retournée est, dans certains cas connus, expressément incorrecte par intention délibérée. En particulier, pour éviter le problème de sécurité appelé CSS History Leak, les navigateurs peuvent "mentir" sur la valeur utilisée pour un lien et toujours retourner des valeurs comme si l'utilisateur n'avait jamais visité le site concerné, et/ou limiter les styles qui peuvent être appliqués via l'utilisation du pseudo-sélecteur <code>:visited</code>. Voir <a href="http://blog.mozilla.com/security/2010/03/31/plugging-the-css-history-leak/">http://blog.mozilla.com/security/2010/03/31/plugging-the-css-history-leak/</a> et <a href="http://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/">http://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-visited/</a> pour le détail des exemples de la manière dont cela est implémenté.</p>

<h2 id="Specifications">Spécifications</h2>

<p>Proposé au groupe de travail CSS.</p>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Window.getDefaultComputedStyle")}}</p>
