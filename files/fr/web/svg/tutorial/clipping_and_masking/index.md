---
title: Découpages et masquages
slug: Web/SVG/Tutorial/Clipping_and_masking
tags:
  - SVG
  - SVG:Tutoriel
translation_of: Web/SVG/Tutorial/Clipping_and_masking
original_slug: Web/SVG/Tutoriel/Découpages_et_masquages
---
<p>{{ PreviousNext("SVG/Tutoriel/Transformations_de_base", "Web/SVG/Tutoriel/Contenu_embarque_SVG") }}</p>

<p>Effacer une partie de ce que l'on a créé précédemment peut paraître maladroit, voire totalement contradictoire. Mais cela peut se révéler très utile, par exemple quand vous essayez de dessiner un demi-cercle.</p>

<p>Le <strong>découpage</strong> (<em>clipping</em>) correspond au fait d'enlever des morceaux d'élément. Dans ce cas là, les effets de transparence ne sont pas permis, il s'agit d'une approche du tout-ou-rien.</p>

<p>D'un autre côté, le <strong>masquage</strong> (<em>masking</em>) permet plus de souplesse en prenant en compte la transparence et les niveaux de gris.</p>

<h3 id="Découper">Découper</h3>

<p>Pour créer un demi-cercle, on définit d'abord un élément <code>circle</code>:</p>

<pre class="brush: html">&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
  &lt;defs&gt;
    &lt;clipPath id="cut-off-bottom"&gt;
      &lt;rect x="0" y="0" width="200" height="100" /&gt;
    &lt;/clipPath&gt;
  &lt;/defs&gt;

  &lt;circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" /&gt;
&lt;/svg&gt;
</pre>

<p>On dessine ici un cercle d'un rayon de 100 pixels, dont le centre est placé au point (100,100). L'attribut <code>clip-path</code> fait référence à l'élément <code>clipPath</code> définit plus haut, qui est généralement placé dans la section <code>defs</code>.</p>

<p>L'élément <code>clipPath</code> contient un simple rectangle qui, seul, remplirait en noir la moitié supérieur du canvas. Le rectangle ne sera pas dessiné, parce qu'il est définit dans un élément <code>clipPath</code>, il a pour effet de déterminer quels pixels seront affichés ou non dans le dessin final. Le rectangle ne couvrant que la partie supérieure du cercle, la partie inférieure du cercle ne sera pas affichée:</p>

<p>{{ EmbedLiveSample('Découper','240','240','/files/3224/clipdemo.png') }}</p>

<p>Nous avons maintenant un demi-cercle, sans avoir à passer par un arc dans un élément <code>path</code>. Pour le découpage, chaque forme à l'intérieur de <code>clipPath</code> est inspecté et évalué avec ses propriétés et ses transformations. Chaque zone transparente dans <code>clipPath</code> aura pour effet de masquer le contenu. La couleur, l'opacité et autres n'ont pas d'effet tant qu'ils ne rendent pas les formes complètement transparentes.</p>

<h3 id="Masquage">Masquage</h3>

<p>Le masquage, contrairement au découpage permet de travailler avec des gradients. Si vous voulez qu'un élément disparaisse progressivement, vous y parviendrez en utiilisant des masques.</p>

<pre class="brush: html">&lt;svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
  &lt;defs&gt;
    &lt;linearGradient id="Gradient"&gt;
      &lt;stop offset="0" stop-color="white" stop-opacity="0" /&gt;
      &lt;stop offset="1" stop-color="white" stop-opacity="1" /&gt;
    &lt;/linearGradient&gt;
    &lt;mask id="Mask"&gt;
      &lt;rect x="0" y="0" width="200" height="200" fill="url(#Gradient)"  /&gt;
    &lt;/mask&gt;
  &lt;/defs&gt;

  &lt;rect x="0" y="0" width="200" height="200" fill="green" /&gt;
  &lt;rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" /&gt;
&lt;/svg&gt;
</pre>

<p>Vous pouvez voir qu'on a définit un rectangle vert en-dessous d'un rectangle rouge. Ce dernier a un attribut <code>mask</code> qui pointe vers le masque situé dans les définitions. Le contenu du masque est un simple élément <code>rect</code>, qui est rempli d'un gradient transparent-vers-blanc. Les pixels du rectangle rouge héritent de la valeur alpha (la transparence) du contenu du masque, si bien que le rectangle rouge est progressivement masqué et laisse voir le rectangle vert en-dessous:</p>

<p>{{ EmbedLiveSample('Masquage','240','240','/files/3234/maskdemo.png') }}</p>

<h3 id="Transparence_avec_opacity">Transparence avec <code>opacity</code></h3>

<p>Pour définir la transparence d'un élément entier, on peut utiliser l'attribut <code>opacity</code>:</p>

<pre class="brush: xml">&lt;rect x="0" y="0" width="100" height="100" opacity=".5" /&gt;
</pre>

<p>Le rectangle ci-dessus sera dessiné semi-transparent.</p>

<p>On peut également utiliser deux attributs distincts pour le remplissage et le contour: <code>fill-opacity</code> et <code>stroke-opacity</code>, pour contrôler l'opacité des propriétés <code>fill</code> et <code>stroke</code> respecitvement. Notez que le contour est dessiné au-dessus du remplissage. Ainsi, si vous rendez le contour semi-transparent et non le remplissage, celui-ci sera visible à travers le contour:</p>

<pre class="brush: html">&lt;svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
  &lt;rect x="0" y="0" width="200" height="200" fill="blue" /&gt;
  &lt;circle cx="100" cy="100" r="50" stroke="yellow" stroke-width="40" stroke-opacity=".5" fill="red" /&gt;
&lt;/svg&gt;
</pre>

<p>{{ EmbedLiveSample('Transparence_avec_opacity','240','240','/files/3231/opacitydemo.png') }}</p>

<p>Vous pouvez voir dans cet exemple un cercle rouge sur un fond bleu. Le contour jaune a une opacité de 50%, si bien qu'on se retrouve avec une partie du remplissage en orange.</p>

<h2 id="Utilisation_de_techniques_CSS_bien_connues">Utilisation de techniques CSS bien connues</h2>

<p>Un des outils les plus puissants parmis l'arsenal du développeur web est <code>display: none</code>. Il n'est donc pas étonnant qu'il ait été décidé que cette propriété CSS serait également intégrée à SVG, de même que <code>visibility</code> et <code>clip</code> définis en CSS 2. Pour ré-afficher un élément précédemment caché avec <code>display: none</code> il est important de savoir que la valeur initiale des éléments SVG est <code>inline</code>. </p>

<p>{{ PreviousNext("SVG/Tutoriel/Transformations_de_base", "Web/SVG/Tutoriel/Contenu_embarque_SVG") }}</p>

<p>{{ languages( { "en": "en/SVG/Tutorial/Clipping_and_masking" } ) }}</p>
