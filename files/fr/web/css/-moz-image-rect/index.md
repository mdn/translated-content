---
title: '-moz-image-rect'
slug: Web/CSS/-moz-image-rect
tags:
  - CSS
  - Fonction
  - Non-standard
  - Reference
translation_of: Web/CSS/-moz-image-rect
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

<p>La propriété <strong><code>-moz-image-rect</code></strong> permet d'utiliser une seule partie d'une image pour un arrière-plan (contrairement à {{cssxref("background-image")}}). On peut ainsi utiliser une image qui regroupe plusieurs <em>sprites</em> à différentes fins, ce qui permet de diminuer le nombre de transfert réseau.</p>

<p>Cette propriété fonctionne de façon analogue à {{cssxref("-moz-image-region")}} qui peut être utilisée pour déterminer la partie d'une image utilisée pour {{cssxref("list-style-image")}} qui met en forme les puces d'une liste. Grâce à <code>-moz-image-rect</code>, on peut avoir le même fonctionnement pour n'importe quel arrière-plan CSS.</p>

<p>La syntaxe de cette propriété est similaire à la fonction <a href="/fr/docs/Web/CSS/shape#La_fonction_rect()"><code>rect()</code></a> qui génère une valeur de type {{cssxref("&lt;shape&gt;")}}. Les quatre valeurs indiquées font chacune référence au coin supérieur gauche de l'image.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">-moz-image-rect({{cssxref("&lt;uri&gt;")}}, <em>top</em>, <em>right</em>, <em>bottom</em>, <em>left</em>);</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt>{{cssxref("&lt;uri&gt;")}}</dt>
 <dd>L'URI de l'image dont on veut obtenir une portion.</dd>
 <dt><code>top</code></dt>
 <dd>La coordonnée du bord haut de l'image, définie comme un entier ({{cssxref("&lt;integer&gt;")}}) ou un pourcentage ({{cssxref("&lt;percentage&gt;")}}) à partir du coin supérieur gauche.</dd>
 <dt><code>right</code></dt>
 <dd>La coordonnée du bord droit de l'image, définie comme un entier ({{cssxref("&lt;integer&gt;")}}) ou un pourcentage ({{cssxref("&lt;percentage&gt;")}}) à partir du coin supérieur gauche.</dd>
 <dt><code>bottom</code></dt>
 <dd>La coordonnée du bord inférieur de l'image, définie comme un entier ({{cssxref("&lt;integer&gt;")}}) ou un pourcentage ({{cssxref("&lt;percentage&gt;")}}) à partir du coin supérieur gauche.</dd>
 <dt><code>left</code></dt>
 <dd>La coordonnée du bord gauche de l'image, définie comme un entier ({{cssxref("&lt;integer&gt;")}}) ou un pourcentage ({{cssxref("&lt;percentage&gt;")}}) à partir du coin supérieur gauche.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{CSSSyntax}}

<h2 id="Exemples">Exemples</h2>

<p>Dans cet exemple, on charge une image qu'on découpe en quatre zones pour dessiner le logo Firefox dans quatre éléments {{HTMLElement("div")}}. Lorsqu'on clique sur le conteneur, cela fait tourner les images entre les blocs.</p>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#container {
  width:267px;
  height:272px;
  top:100px;
  left:100px;
  position:absolute;
  font-size:16px;
  text-shadow:white 0px 0px 6px;
  text-align:center;
}

#box1 {
  background-image: -moz-image-rect(url(https://mdn.mozillademos.org/files/12053/firefox.png), 0%, 50%, 50%, 0%);
  width:133px;
  height:136px;
  position:absolute;
}

#box2 {
  background-image: -moz-image-rect(url(https://mdn.mozillademos.org/files/12053/firefox.png), 0%, 100%, 50%, 50%);
  width:133px;
  height:136px;
  position:absolute;
}

#box3 {
  background-image: -moz-image-rect(url(https://mdn.mozillademos.org/files/12053/firefox.png), 50%, 50%, 100%, 0%);
  width:133px;
  height:136px;
  position:absolute;
}

#box4 {
  background-image: -moz-image-rect(url(https://mdn.mozillademos.org/files/12053/firefox.png), 50%, 100%, 100%, 50%);
  width:133px;
  height:136px;
  position:absolute;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="container" onclick="rotate()"&gt;
  &lt;div id="box1" style="left:0px;top:0px;"&gt;Top left&lt;/div&gt;
  &lt;div id="box2" style="left:133px;top:0px;"&gt;Top right&lt;/div&gt;
  &lt;div id="box3" style="left:0px;top:136px;"&gt;Bottom left&lt;/div&gt;
  &lt;div id="box4" style="left:133px;top:136px;"&gt;Bottom right&lt;/div&gt;
&lt;/div&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush:js">function rotate() {
  var prevStyle = window.getComputedStyle(document.getElementById("box4"), null).getPropertyValue("background-image");

  // Now that we've saved the last one, start rotating

  for (var i=1; i&lt;=4; i++) {
    var curId = "box" + i;

    // Shift the background images

    var curStyle = window.getComputedStyle(document.getElementById(curId), null).getPropertyValue("background-image");
    document.getElementById(curId).style.backgroundImage = prevStyle;
    prevStyle = curStyle;
  }
}</pre>

<p>Dans ce script, on utilise la méthode {{domxref("window.getComputedStyle()")}} afin de récupérer le style de chaque élément et on le décale à l'élément suivant. On notera qu'avant de commencer ce « défilement », on sauvegarde une version du style de la dernière boîte. En copiant simplement les valeurs de {{cssxref("background-image")}} d'un élément à l'autre lors du clic, on obtient l'effet souhaité.</p>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","400","400")}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.types.-moz-image-rect")}}</p>
