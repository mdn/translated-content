---
title: Element.scrollIntoViewIfNeeded()
slug: Web/API/Element/scrollIntoViewIfNeeded
tags:
  - API
  - DOM
  - Element
  - Méthodes
translation_of: Web/API/Element/scrollIntoViewIfNeeded
---
<div>{{APIRef("DOM")}}{{Non-standard_header}}</div>

<p>La méthode <code><strong>Element.scrollIntoViewIfNeeded()</strong></code> fait défiler l'élément en cours dans la zone visible de la fenêtre du navigateur s'il n'y est pas déjà. Si l'élément est déjà dans la zone visible de la fenêtre du navigateur, aucun défilement n'a lieu. Cette méthode est une variante propriétaire de la méthode standard <a href="/en-US/docs/Web/API/Element/scrollIntoView"><code>Element.scrollIntoView()</code></a>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>À faire.</p>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><em><code>opt_center</code></em></dt>
 <dd>Est une valeur {{jsxref("Boolean")}} facultative avec la valeur <code>true</code> par défaut :
 <ul>
  <li>Si <code>true</code> (<em>vrai</em>), l'élément sera aligné sur le centre de la zone visible de l'ancêtre défilable.</li>
  <li>Si <code>false</code> (<em>faux</em>), l'élément sera aligné sur le bord le plus proche de la zone visible de l'ancêtre défilable. Selon le bord de la zone visible le plus proche de l'élément, soit le haut de l'élément sera aligné sur le bord supérieur de la zone visible, soit le bord inférieur de l'élément sera aligné sur le bord inférieur de la zone visible .</li>
 </ul>
 </dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<p>À faire</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Ne fait partie d'aucune spécification. C'est une méthode propriétaire propre à WebKit.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Element.scrollIntoViewIfNeeded")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://www.w3.org/Bugs/Public/show_bug.cgi?id=17152">W3C CSSOM bug 17152 : Support centrant un élément lors du défilement dans la vue.</a> (demande de fonctionnalité pour un équivalent standardisé à <code>scrollIntoViewIfNeeded</code>)</li>
</ul>
