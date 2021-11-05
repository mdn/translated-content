---
title: Animation SVG avec SMIL
slug: Web/SVG/SVG_animation_with_SMIL
tags:
  - Animation
  - Firefox 4
  - Gecko 2.0
  - HTML Animation
  - SVG
  - SVG Animation
  - XML
translation_of: Web/SVG/SVG_animation_with_SMIL
---
<div class="warning">
  <p><strong>Attention :</strong> Bien que Chrome 45 déprécie SMIL en faveur des animations CSS et des animations Web, les développeurs Chrome ont depuis <a href="https://groups.google.com/a/chromium.org/d/msg/blink-dev/5o0yiO440LM/YGEJBsjUAwAJ">suspendu</a> cette décision.</p>
</div>

<p>Firefox 4 introduit le support pour les animations <a href="/fr/SVG" title="en/SVG">SVG</a> en utilisant <a href="http://www.w3.org/TR/REC-smil">Synchronized Multimedia Integration Language</a> (SMIL). SMIL permet :</p>

<ul>
 <li>d'animer les attributs numériques d'un élément (x, y, ...)</li>
 <li>d'animer la transformation des attributs (translation ou rotation)</li>
 <li>d'animer les attributs de couleur</li>
 <li>de créer un mouvement en suivant un tracé donné</li>
</ul>

<p>Pour ce faire, on utilise un élément SVG tel que {{ SVGElement("animate") }}. Vous trouverez ci-dessous des exemples illustrant les quatres différents manières de procéder.</p>

<h2 id="Animation_pour_un_attribut">Animation pour un attribut</h2>

<p>L'exemple suivant anime l'attribut <code><strong>cx</strong></code> d'un cercle. Pour ce faire, on ajoute un élément {{ SVGElement("animate") }}  dans l'élément {{ SVGElement("circle") }}. Les attributs importants pour {{ SVGElement("animate") }} sont :</p>

<dl>
 <dt><code><strong>attributeName</strong></code></dt>
 <dd>Le nom de l'attribut à animer.</dd>
 <dt><code>from</code></dt>
 <dd>La valeur initiale de l'attribut.</dd>
 <dt><code>to</code></dt>
 <dd>La valeur finale.</dd>
 <dt><code>dur</code></dt>
 <dd>La durée de l'animation (par exemple, écrire '5s' pour 5 secondes).</dd>
</dl>

<p>Si vous voulez animer plus d'attributs dans le même élément, ajoutez simplement d'autres éléments {{ SVGElement("animate") }}.</p>

<pre class="brush: html">&lt;svg width="300" height="100"&gt;
  &lt;title&gt;Attribute Animation with SMIL&lt;/title&gt;
  &lt;rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" /&gt;
  &lt;circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1"&gt;
    &lt;animate
       attributeName="cx" from="0" to="100"
       dur="5s" repeatCount="indefinite" /&gt;
  &lt;/circle&gt;
&lt;/svg&gt;</pre>

<p>{{ EmbedLiveSample("Animation_pour_un_attribut", '100%', 120) }}</p>

<h2 id="Animer_une_transformation_des_attributs">Animer une transformation d'attributs</h2>

<p>L'élement {{ SVGElement("animateTransform") }} permet d'animer la <strong>transformation</strong> d'attributs. Ce nouvel élément est nécéssaire parce que nous n'animons pas un simple attribut tel que <strong>x, </strong>qui est juste un nombre.<br>
 Les attributs pour la rotation sont ainsi : <code>rotation(theta, x, y)</code>, où <code>theta</code> est l'angle en degrés, <code>x</code> et <code>y</code> sont les positions absolues.<br>
 Dans l'exemple ci dessous, on anime le centre de rotation et l'angle.</p>

<pre class="brush: html">&lt;svg width="300" height="100"&gt;
  &lt;title&gt;SVG SMIL Animate with transform&lt;/title&gt;
  &lt;rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" /&gt;
  &lt;rect x="0" y="50" width="15" height="34" fill="blue" stroke="black" stroke-width="1"&gt;
    &lt;animateTransform
       attributeName="transform"
       begin="0s"
       dur="20s"
       type="rotate"
       from="0 60 60"
       to="360 100 60"
       repeatCount="indefinite"
			/&gt;
  &lt;/rect&gt;
&lt;/svg&gt;
</pre>

<p>{{ EmbedLiveSample("Animer_une_transformation_des_attributs", '100%', 120) }}</p>

<h2 id="Animation_suivant_un_tracé_(chemin)">Animation suivant un tracé (chemin)</h2>

<p>L'élement {{ SVGElement("animateMotion") }} permet d'animer la position et la rotation d'éléments en suivant un tracé spécifique. Ce chemin est définit de la même manière que dans  {{ SVGElement("path") }}.</p>

<h3 id="Exemple_1_Mouvement_linéaire">Exemple 1: Mouvement linéaire</h3>

<p>Dans cet exemple, un cercle bleu rebondit indéfiniment entre les bords gauche et droit d'une boîte noir. L'animation est ici gérée par l'élément {{ SVGElement("animateMotion") }}.</p>

<p>On crée ici un chemin avec les commandes<strong> M</strong>oveTo, pour définir le point de départ de l'animation<strong>, H</strong>orizontal-line, pour déplacer le cercle de 300 pixels vers la droite, et la commande <strong>Z</strong>, pour fermer le chemin — ce qui permet d'établir une boucle qui revient au début. En définissant la valeur de l'attribut <strong>repeatCount</strong> à <code>indefinite</code>, on indique que l'animation doit boucler indéfiniment, tant que l'image SVG existe.</p>

<pre class="brush: html">&lt;svg xmlns="http://www.w3.org/2000/svg" width="300" height="100"&gt;
  &lt;title&gt;SVG SMIL Animate with Path&lt;/title&gt;
  &lt;rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" /&gt;
  &lt;circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1"&gt;
    &lt;animateMotion
       path="M 0 0 H 300 Z"
       dur="3s" repeatCount="indefinite" /&gt;
  &lt;/circle&gt;
&lt;/svg&gt;
</pre>

<p>{{ EmbedLiveSample('Exemple_1_Mouvement_linéaire', '100%', 120) }}</p>

<h3 id="Exemple_2_Mouvement_en_courbe">Exemple 2: Mouvement en courbe</h3>

<p>Le même exemple que précédemment mais avec une trajectoire courbe.</p>

<pre class="brush: html">&lt;svg width="300" height="100"&gt;
  &lt;title&gt;SVG SMIL Animate with Path&lt;/title&gt;
  &lt;rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" /&gt;
  &lt;rect x="0" y="0" width="20" height="20" fill="blue" stroke="black" stroke-width="1"&gt;
    &lt;animateMotion
       path="M 250,80 H 50 Q 30,80 30,50 Q 30,20 50,20 H 250 Q 280,20,280,50 Q 280,80,250,80Z"
       dur="3s" repeatCount="indefinite" rotate="auto" /&gt;
  &lt;/rect&gt;
&lt;/svg&gt;
</pre>

<p>{{ EmbedLiveSample('Exemple_2_Mouvement_en_courbe', '100%', 120) }}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/SVG" title="en/SVG">SVG</a></li>
 <li><a href="http://www.w3.org/TR/SVG/animate.html">SVG Animation Specification</a></li>
 <li><a href="http://www.w3.org/TR/REC-smil">SMIL Specification</a></li>
</ul>
