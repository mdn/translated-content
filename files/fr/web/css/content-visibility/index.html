---
title: content-visibility
slug: Web/CSS/content-visibility
browser-compat: css.properties.content-visibility
translation_of: Web/CSS/content-visibility
---
<p>{{CSSRef}}</p>

<p>La propriété <a href="/fr/docs/Web/CSS">CSS</a> <strong><code>content-visibility</code></strong> détermine si un élément affiche son contenu ou non, tout en forçant un solide jeu de restrictions permettant aux agents utilisateurs de potentiellement omettre de larges pans de la mise en page et du travail de rendu jusqu'au moment où le contenu doit être affiché. Fondamentalement, cela permet à l'agent utilisateur d'éviter le travail de rendu d'un élément (comprenant sa mise en page et sa peinture) tant qu'il n'y en a pas besoin — ce qui accélère la vitesse de chargement de la page initiale.</p>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: css no-line-numbers">/* Valeurs avec un mot-clé */
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;

/* Valeurs globales */
content-visibility: inherit;
content-visibility: initial;
content-visibility: revert;
content-visibility: unset;
</pre>

<h3 id="values">Valeurs</h3>

<dl>
 <dt><code>visible</code></dt>
 <dd>Aucun effet. Les contenus de l'élément sont disposés et rendus normalement.</dd>
 <dt><code>hidden</code></dt>
 <dd>L'élément n'affiche pas son contenu. Les contenus de l'élément ne doivent pas être accessibles aux fonctionnalités de l'agent utilisateur telles que la recherche au sein de la page, la navigation par ordre de tabulation, etc., et il n'est pas possible de les sélectionner ou d'y placer le focus. Cela est similaire à l'utilisation de <code>display: none</code> sur ces contenus.</dd>
 <dt><code>auto</code></dt>
 <dd>L'élément suit les restrictions de mise en page, de style et de peinture. Si l'élément n'est pas pertinent pour l'utilisateur, cela évite également son contenu. Contrairement à la valeur <code>hidden</code>, le contenu évité doit toujours être disponible normalement pour les fonctionnalités de l'agent utilisateur telles que la recherche au sein de la page, la navigation par ordre de tabulation, etc., et il est possible de les sélectionner ou d'y placer le focus.</dd>
</dl>

<h2 id="formal_definition">Définition formelle</h2>

<p>{{cssinfo}}</p>

<h2 id="accessibility_concerns">Accessibilité</h2>

<p>Les titres et les autres contenus seront supprimés par <code>content-visibility</code> s'ils sont considérés comme s'affichant en dehors de l'écran. Cela signifie que les utilisateurs de lecteurs d'écrans pourraient perdre le bénéfice d'avoir une page complète disponible à des fins de vocalisation.</p>

<p>Pour plus d'informations, consultez l'article <a href="https://marcysutton.com/content-visibility-accessible-semantics">Content-visibility and Accessible Semantics</a> <small>(en anglais)</small>.</p>

<h2 id="examples">Exemples</h2>

<h3 id="using_auto_to_reduce_rendering_cost_of_long_pages">Utilisation de la valeur auto pour réduire les coûts de rendu des pages longues</h3>

<p>L'exemple suivant montre l'utilisation de la valeur <code>auto</code> pour éviter la peinture et le rendu des sections situées en dehors de l'écran. Cela aide à la fois le chargement et les interactions sur la page, car le contenu situé en dehors de la fenêtre d'affichage n'est pas rendu.</p>

<pre class="brush: html">&lt;style&gt;
section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}

&lt;section&gt;...
&lt;section&gt;...
&lt;section&gt;...
&lt;section&gt;...
...
</pre>

<h3 id="using_hidden_to_manually_manage_visibility">Utilisation de la valeur hidden pour gérer la visibilité manuellement</h3>

<p>L'exemple suivant montre qu'il est possible de gérer la visibilité à l'aide d'un script. La valeur ajoutée de l'utilisation de <code>content-visibility: hidden</code> par exemple à la place de <code>display: none</code> est que le contenu rendu masqué avec <code>content-visibility</code> préservera l'état de son rendu. Cela signifie que si le contenu est à nouveau affiché, il sera rendu plus rapidement qu'en modifiant la propriété <code>display</code>.</p>

<pre class="brush: html">&lt;style&gt;
.hidden {
  content-visibility: hidden;
  /* lorsqu'il est masqué, nous voulons que la taille de l'élément soit la même que si celui-ci avait un élément enfant de 0x500 pixels */
  contain-intrinsic-size: 0 500px;
}
.visible {
  content-visibility: visible;
  /* ceci est ajouté afin d'éviter tout décalage de mise en page lors de la bascule entre .hidden et .visible */
  contain: style layout paint;
}

&lt;div class=hidden&gt;...
&lt;div class=visible&gt;...
&lt;div class=hidden&gt;...
&lt;div class=hidden&gt;...
</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
 <li><a href="https://web.dev/content-visibility/">content-visibility : la nouvelle propriété CSS qui améliore vos performances de rendu</a> <small>(en anglais)</small> (web.dev)</li>
</ul>
