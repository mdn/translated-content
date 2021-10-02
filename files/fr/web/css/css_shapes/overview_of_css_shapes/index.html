---
title: Aperçu des formes CSS
slug: Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes
tags:
  - Aperçu
  - CSS
  - CSS Shapes
  - Formes CSS
translation_of: Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes
original_slug: Web/CSS/CSS_Shapes/Aperçu_formes_CSS
---
<div>{{CSSRef}}</div>

<p>La spécification <a href="https://www.w3.org/TR/css-shapes/">CSS Shapes Level 1</a> définit les formes géométriques en CSS. Pour ce module de niveau 1, ces formes s'appliquent aux éléments qui utilisent une disposition flottante. Dans cet article, nous verrons un aperçu de ce qu'il est possible de faire avec les formes en CSS.</p>

<p>Si on fait flotter un élément à gauche d'un texte, on verra le texte écrit autour de cet élément en suivant un contour rectangulaire. Si on applique une forme circulaire à cet élément, le texte suivra alors le contour du cercle.</p>

<p>Il existe différentes façons de créer des formes CSS et nous verrons, dans ces guides, leur fonctionnement et les cas d'utilisation.</p>

<h2 id="Que_définit_la_spécification">Que définit la spécification ?</h2>

<p>La spécification définit trois nouvelles propriétés :</p>

<ul>
 <li>{{cssxref("shape-outside")}} qui permet de définir des formes simples</li>
 <li>{{cssxref("shape-image-threshold")}} qui permet d'indiquer un seuil d'opacité. Si une image est utilisée afin de définir une forme, seuls les fragments de l'image qui sont d'une opacité supérieure ou égale à ce seuil seront utilisés afin de créer la forme. Les autres fragments de l'image sont ignorés.</li>
 <li>{{cssxref("shape-margin")}} définit une marge autour d'une forme</li>
</ul>

<h2 id="Définir_des_formes_simples">Définir des formes simples</h2>

<p>La propriété <code>shape-outside</code> permet de définir une forme. Cette propriété peut prendre différentes valeurs dont chacune définit une forme différente. Ces valeurs sont définies par le type de donnée {{cssxref("&lt;basic-shape&gt;")}}. Prenons un exemple simple pour commencer.</p>

<p>Dans l'exemple qui suit, on a une image qui flotte à gauche. Ensuite, on lui applique <code>shape-outside</code> avec la valeur <code>circle(50%)</code>. Grâce à cette règle, le contenu épouse alors une forme circulaire plutôt que le rectangle qui était formé par la boîte de l'image.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}</p>

<p>À l'heure actuelle, la spécification indique qu'un élément doit flotter si on veut lui appliquer <code>&lt;basic-shape&gt;</code>. De cette façon, l'amélioration progressive est rapidement obtenue car si le navigateur ne prend pas en charge les formes CSS, l'utilisateur verra le contenu épouser une forme rectangulaire (comme auparavant). Si le navigateur prend en charge les formes, la disposition visuelle sera améliorée.</p>

<h3 id="Formes_simples_(Basic_Shapes)">Formes simples (<em>Basic Shapes</em>)</h3>

<p>La valeur <code>circle(50%)</code> est une exemple de forme simple. La spécification fournit quatre valeur de types <code>&lt;basic-shape&gt;</code> :</p>

<ul>
 <li><code>inset()</code></li>
 <li><code>circle()</code></li>
 <li><code>ellipse()</code></li>
 <li><code>polygon()</code></li>
</ul>

<p>Avec la valeur <code>inset()</code>, le texte environnant continue d'épouser une forme rectangulaire mais on peut décaler ce rectangle afin de rapprocher le texte de l'objet flottant par exemple.</p>

<p>Nous avons vu le fonctionnement de <code>circle()</code> dans l'exemple précédent : cette notation fonctionnelle permet de créer une forme circulaire. <code>ellipse()</code> est assez proche et permet de créer une ellipse (qu'on peut voir comme un cercle aplati). Si aucune de ces formes ne vous convient, vous pouvez utiliser <code>polygon()</code> afin de créer un polygone correspondant à une forme complexe.</p>

<p>Dans <a href="/fr/docs/Web/CSS/CSS_Shapes/Formes_simples">le guide sur les formes simples</a>, nous verrons comment créer et exploiter ces formes.</p>

<h3 id="Boîtes_de_référence">Boîtes de référence</h3>

<p>Les formes sont créées sur une boîte donnée. Aussi, on peut créer une boîte par rapport à chacune des boîtes du <a href="/fr/docs/Apprendre/CSS/Introduction_%C3%A0_CSS/Le_mod%C3%A8le_de_bo%C3%AEte">modèle de boîte</a> et utiliser les valeurs :</p>

<ul>
 <li><code>border-box</code></li>
 <li><code>padding-box</code></li>
 <li><code>content-box</code></li>
 <li><code>margin-box</code></li>
</ul>

<p>Dans l'exemple qui suit, vous pouvez modifier la valeur <code>border-box</code> afin d'utiliser une autre valeur et observer comment se déplace la forme par rapport à la boîte.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/box.html", '100%', 810)}}</p>

<p>Pour en savoir plus, voir <a href="/fr/docs/Web/CSS/CSS_Shapes/Shapes_From_Box_Values">le guide sur les formes et les boîtes</a>.</p>

<h3 id="Générer_une_forme_à_partir_d'une_image">Générer une forme à partir d'une image</h3>

<p>Une autre méthode qui peut s'avérer utile consiste à générer une forme à partir d'une image et de son canal alpha :  le texte épousera alors la forme non-transparente de l'image. On peut alors avoir un texte qui « s'écoule » dans une image ou autour. Cette méthode permet aussi d'avoir une forme plus complexe sans avoir à recourir à un polygone (il n'est pas nécessaire que  l'image  soit visible).</p>

<p>Attention, les images utilisées ainsi doivent être <a href="/en-US/docs/Web/HTTP/CORS">compatibles avec les règles CORS</a>. Se n'est pass le cas, <code>shape-outside</code> se comportera comme si elle avait reçu la valeur <code>none</code> et il n'y aura alors aucune forme.</p>

<p>Dans l'exemple qui suit, on utilise une image avec une zone complètement transparente et on utilise une image comme valeur d'URL pour <code>shape-outside</code>. La forme ainsi créée utilise la zone opaque de l'image : la forme de la montgolfière.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/image.html", '100%', 800)}}</p>

<h4 id="shape-image-threshold"><code>shape-image-threshold</code></h4>

<p>La propriété <code>shape-image-threshold</code> permet d'ajuster le seuil de transparence utilisé pour créer une forme à partir d'une image. Si la valeur de <code>shape-image-threshold</code> est <code>0.0</code> (la valeur initiale), ce seront les parties totalement transparentes de l'image qui créeront la forme. Si la valeur <code>1.0</code>, toutes les zones de l'image (y compris celles totalement opaques) seront utilisées pour la forme. Les valeurs intermédiaires permettent d'utiliser des zones partiellement transparentes pour définir la forme.</p>

<p>Dans l'exemple suivant, on utilise une image qui est un dégradé et qui permet de définir la forme. Vous pouvez modifier la valeur du seuil afin de faire évoluer la forme.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/threshold.html", '100%', 820)}}</p>

<p>Dans l'article <a href="/fr/docs/Web/CSS/CSS_Shapes/Shapes_From_Images">Créer des formes à partir d'images</a>, nous verrons plus en détails le fonctionnement de ces propriétés.</p>

<h2 id="La_propriété_shape-margin">La propriété <code>shape-margin</code></h2>

<p>La propriété {{cssxref("shape-margin")}} ajoute une marge à <code>shape-outside</code>. Cela permet d'écarter le contenu de la forme.</p>

<p>Dans l'exemple qui suit, on a une forme simple sur laquelle on ajoute <code>shape-margin</code>. Vous pouvez modifier la valeur de cette propriété afin de rapprocher ou d'éloigner le texte de la forme.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/shape-margin.html", '100%', 800)}}</p>

<h2 id="Utiliser_du_contenu_généré_comme_objet_flottant">Utiliser du contenu généré comme objet flottant</h2>

<p>Dans les exemples qui précèdent, nous avons utilisé des images ou des éléments visibles afin de définir la forme. Autrement dit, la forme est visible sur la page. Il se peut également qu'on veuille que le texte suive une ligne invisible qui ne soit pas droite. On pourrait le faire avec une image ensuite rendue invisible mais on aurait alors des éléments redondants dans le document. Aussi, autant utiliser du contenu généré afin de strictement conserver la mise en forme dans la feuille CSS.</p>

<p>Dans l'exemple qui suit, on utilise du contenu généré afin d'inséer un élément avec une hauteur et une largeur de 150 pixels. On peut alors ensuite utiliser les formes simples, les boîtes de référence ou le canal alpha d'une image afin de créer une forme qu'épouserait le texte.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/generated-content.html", '100%', 850)}}</p>

<h2 id="Relations_avec_clip-path">Relations avec <code>clip-path</code></h2>

<p>Les valeurs utilisées pour les formes simples et pour les boîtes de référence sont les mêmes que celles utilisées pour la propriété {{cssxref("clip-path")}}. Ainsi, si on souhaite créer une forme à partir d'une image et rogner une partie de cette image, on pourra utiliser les mêmes valeurs.</p>

<p>Ci-après, on a une image carrée avec un arrière-plan bleu. On a défini la forme avec  <code>shape-outside: ellipse(40% 50%);</code> puis utilisé <code>clip-path: ellipse(40% 50%);</code> afin de rogner l'image pour suivre la forme.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/clip-path.html", '100%', 800)}}</p>

<h2 id="Outils_de_développement_pour_les_formes_CSS">Outils de développement pour les formes CSS</h2>

<p>Avec la prise en charge des formes CSS, Firefox sort également une nouvelle fonctionnalités dans les outils de développement : <a href="/fr/docs/Outils/Inspecteur/Comment/Edit_CSS_shapes">l'éditeur de chemin pour les formes (<em>Shape Path Editor</em>)</a>. Cet outil permet d'inspecter les formes présentes sur la page et de modifier leurs valeurs à la volée. Si votre polygone n'a pas l'aspect escompté, vous pouvez le modifier via l'éditeur puis recopier la nouvelle valeur dans votre fichier CSS.</p>

<p>L'éditeur de chemin pour les formes sera activé par défaut avec Firefox 60 pour les formes générées grâce à <code>clip-path</code>. Vous pouvez également l'utiliser afin d'éditer les formes générées grâce à <code>shape-outside</code> à condition d'avoir activé la préférence <code>layout.css.shape-outside.enabled</code>.</p>

<h2 id="Les_futures_fonctionnalités">Les futures fonctionnalités</h2>

<p>Dans sa version initiale, le module de spécification pour les formes contenait une propriété <code>shape-inside</code> afin de créer des formes à l'intérieur d'un élément. Cette propriété, ainsi que la possibilité de créer des formes sur des éléments non-flottants, a été repoussée à la spécification de <a href="https://drafts.csswg.org/css-shapes-2/">niveau 2</a>. La propriété <code>shape-inside</code> était initialement décrite dans la spécification de niveau 1 et vous pouvez donc trouver certains tutoriels qui détaillent ces deux propriétés.</p>
