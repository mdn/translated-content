---
title: Détection de collisions en 2D
slug: Games/Techniques/2D_collision_detection
tags:
  - 2D
  - Algorithmes
  - Détection de collisions
  - JavaScript
  - Jeux
translation_of: Games/Techniques/2D_collision_detection
---
<div>{{GamesSidebar}}</div><p>  {{IncludeSubnav("/fr/docs/Jeux")}}  </p>

<p>Les algorithmes de détection de collisions dans les jeux en 2 dimensions dépendent de la forme des objets à détecter (par exemple : rectangle contre rectangle, cercle contre rectangle, cercle contre cercle…). Habituellement, il est préférable d’utiliser une forme générique appelée masque de collision (« <em>hitbox</em> ») qui couvrira l’entité. Ainsi, les collisions ne seront pas assurées au pixel près mais cela permettra d’avoir de bonnes performances pour un grand nombre d’entités à tester.</p>

<p>Cet article donne un résumé des techniques les plus utilisées pour la détection des collisions dans les jeux en deux dimensions.</p>

<h2 id="Boîtes_englobantes_alignées_sur_les_axes">Boîtes englobantes alignées sur les axes</h2>

<p>Une des formes les plus simples de détection de collision est une collision entre deux rectangles alignés sur les mêmes axes (c’est-à-dire sans rotation). L’algorithme suivant fonctionne en vérifiant qu’il n’y a pas d’espace vide entre les 4 côtés du rectangle. Si l’ensemble du rectangle est entouré de vide, on en conclut qu’il n’y a pas de collision.</p>

<pre class="brush: js">var rect1 = {x: 5, y: 5, width: 50, height: 50}
var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x &lt; rect2.x + rect2.width &amp;&amp;
   rect1.x + rect1.width &gt; rect2.x &amp;&amp;
   rect1.y &lt; rect2.y + rect2.height &amp;&amp;
   rect1.height + rect1.y &gt; rect2.y) {
    // collision détectée !
}

// remplissage des valeurs =&gt;

if (5 &lt; 30 &amp;&amp;
    55 &gt; 20 &amp;&amp;
    5 &lt; 20 &amp;&amp;
    55 &gt; 10) {
    // collision détectée !
}</pre>

<div class="note">
<p><strong>Note :</strong> vous pouvez tester un <a class="external" href="http://jsfiddle.net/knam8/">exemple interactif de cet algorithme</a> sur jsFiddle, pour mieux comprendre le fonctionnement de ce code.</p>
</div>

<h2 id="Collision_de_cercles">Collision de cercles</h2>

<p>Une autre forme simple de détection de collision est la collision entre deux cercles. Cet algorithme fonctionne en prenant le point central de deux cercles puis il vérifie que la distance entre ces deux points est inférieure à la somme des rayons de ces deux cercles.</p>

<pre class="brush: js">var circle1 = {radius: 20, x: 5, y: 5};
var circle2 = {radius: 12, x: 10, y: 5};

var dx = circle1.x - circle2.x;
var dy = circle1.y - circle2.y;
var distance = Math.sqrt(dx * dx + dy * dy);

if (distance &lt; circle1.radius + circle2.radius) {
    // collision détectée !
}</pre>

<div class="note">
<p><strong>Note :</strong> vous pouvez tester un <a class="external" href="http://jsfiddle.net/gQ3hD/2/">exemple interactif de cet algorithme</a> sur jsFiddle, pour mieux comprendre le fonctionnement de ce code.</p>
</div>

<h2 id="Théorème_des_axes_séparateurs">Théorème des axes séparateurs</h2>

<p>Cet algorithme permet de détecter une collision entre deux polygones <em>convexes</em>. Cet algorithme est plus compliqué à implémenter que les deux précédents mais il est bien plus puissant. La complexité d’un tel algorithme induit de prendre en considération l’optimisation des performances (voir section suivante).</p>

<p>L’implémentation de cet algorithme est hors de propos sur cette page, nous vous conseillons les articles suivants :</p>

<ol>
 <li><a class="external" href="http://www.sevenson.com.au/actionscript/sat/">Separating Axis Theorem (SAT) explanation</a> ;</li>
 <li><a class="external" href="http://www.metanetsoftware.com/technique/tutorialA.html">(Anglais) Collision detection and response (en)</a> ;</li>
 <li><a class="external" href="http://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169">Collision detection Using the Separating Axis Theorem (en)</a> ;</li>
 <li><a class="external" href="http://www.codezealot.org/archives/55">SAT (Separating Axis Theorem) (en)</a> ;</li>
 <li><a class="external" href="http://rocketmandevelopment.com/blog/separation-of-axis-theorem-for-collision-detection/">Separation of Axis Theorem (SAT) for Collision Detection (en)</a>.</li>
</ol>

<h2 id="Performances">Performances</h2>

<p>Alors que la plupart de ces algorithmes de détection de collision sont très simples à calculer, cela peut être une perte de ressources de tester <em>chaque entité</em> avec les autres entités. Habituellement les jeux découpent les collisions en deux phases : large (« <em>broad</em> ») et étroite (« <em>narrow</em> »).</p>

<h3 id="Phase_large">Phase large</h3>

<p>La phase large sert à récupérer une liste d’entités qui <em>pourraient</em> entrer en collision. Cela peut être facilement implémenté avec une structure de données spaciale qui vous donnera une meilleure idée d’où est situé chaque entité et de ce qui existe autour d’elle. Par exemple :</p>

<ul>
 <li>Les <em>Quad Trees</em> (exemple : <a class="external" href="http://blogs.adobe.com/digitalmedia/2011/03/javascript-quadtree-implementation/">JavaScript QuadTree Implementation (en)</a>) ;</li>
 <li>Les <em>R-Trees</em> (voir <a class="external" href="http://en.wikipedia.org/wiki/R-tree">R-Tree sur Wikipedia.org (en)</a>) ;</li>
 <li>Une « <em>hashmap</em> ».</li>
</ul>

<h3 id="Phase_étroite">Phase étroite</h3>

<p>Quand vous avez une liste réduite d’entités à vérifier, il convient d’utiliser un algorithme de phase étroite tels que ceux décrits ci-dessus afin de détecter s’il y a bien une collision entre deux objets ou non.</p>
