---
title: Générer des formes avec des images
slug: Web/CSS/CSS_Shapes/Shapes_From_Images
tags:
  - CSS
  - Formes CSS
  - Guide
translation_of: Web/CSS/CSS_Shapes/Shapes_From_Images
original_slug: Web/CSS/CSS_Shapes/Générer_formes_images
---
<div>{{CSSRef}}</div>

<p>Dans ce guide, nous allons voir comment créer une forme à partir d'une image, que ce soit un fichier avec un canal alpha ou un dégradé CSS. Grâce aux images, on peut suivre une forme complexe sans avoir à dessiner de polygone. On peut créer la forme à partir d'un éditeur graphique et utiliser le contour de cette image formé par la ligne des pixels moins opaques qu'un seuil donné.</p>

<h2 id="Générer_une_forme_simple_avec_une_image">Générer une forme simple avec une image</h2>

<p>Pour utiliser une image afin de créer une forme, il est nécessaire que cette image dispose d'un canal alpha, c'est-à-dire une zone qui n'est pas complètement opaque. La propriété {{cssxref("shape-image-threshold")}} est utilisée afin de fournir un seuil d'opacité. Les pixels qui sont plus opaques que cette valeur seront alors utilisés pour calculer la zone de la forme.</p>

<p>Dans l'exemple suivant, on utilise un image avec une étoile rouge complètement opaque entourée d'une zone complètement transparente. On fournit le chemin de l'image à {{cssxref("shape-outside")}} et le contenu environnant épouse alors la forme de l'image.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/image/simple-example.html", '100%', 800)}}</p>

<p>On peut utiliser {{cssxref("shape-margin")}} afin d'écarter le texte de la forme avec une certaine marge.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/image/margin.html", '100%', 800)}}</p>

<h2 id="Origines_et_compatibilité_CORS">Origines et compatibilité CORS</h2>

<p>Attention, les images utilisées pour créer les formes doivent <a href="/fr/docs/Web/HTTP/CORS">être compatibles pour le CORS</a>. Une image hébergée sur le même domaine que le site devrait fonctionner. En revanche, si les images sont hébergées sur un domaine différent (celui d'un CDN par exemple), il faudra s'assurer que les bons en-têtes HTTP sont fournis afin de construire des images. À cause de ce prérequis, si vous testez un site en local avec vos fichiers, les formes CSS à partir d'images ne fonctionneront pas si vous ne mettez pas en place de serveur web local.</p>

<h3 id="Ai-je_à_faire_à_un_problème_de_CORS">Ai-je à faire à un problème de CORS ?</h3>

<p>Les outils de développement aident à déterminer si le problème vient du CORS. Dans Chrome, les problèmes CORS seront écrits dans la console. Dans Firefox, si vous inspectez la propriété en question, vous verrez une alerte indiquant que l'image ne peut pas être chargée. Dans ce cas, il est probable que l'image ne puisse être utilisée comme forme à cause du CORS.</p>

<h2 id="Utiliser_un_seuil">Utiliser un seuil</h2>

<p>La propriété {{cssxref("shape-image-threshold")}} permet de créer des formes à partir d'une image en utilisant des zones qui ne sont pas totalement transparentes. Si <code>shape-image-threshold</code> vaut <code>0.0</code> (qui correspond à la valeur initiale), ce ne sont que les zones totalement transparentes qui seront utilisées pour fabriquer la forme. Si la valeur <code>1.0</code> est utilisée, le seuil correspondra aux zones totalement opaques et toute l'image seront alors utilisée. Les valeurs intermédiaires permettent d'utiliser des zones partiellement transparentes afin de construire la forme.</p>

<p>Dans l'exemple qui suit, on utilise une image semblable à celle du premier exemple. Toutefois, pour cette image, l'arrière-plan de l'étoile n'est pas totalement transparent : il a une opacité de 20% (créée avec un éditeur graphique). Si on utilise <code>shape-image-threshold</code> avec la valeur <code>0.3</code>, on aura donc la forme de l'étoile mais si on utilise une valeur inférieure à <code>0.2</code>, on aura une forme rectangulaire.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/image/threshold.html", '100%', 800)}}</p>

<h2 id="Utiliser_des_images_avec_du_contenu_généré">Utiliser des images avec du contenu généré</h2>

<p>Dans l'exemple ci-avant, on utilise une image pour {{cssxref("shape-outside")}} et on utilise également cette image dans le document. La plupart des exemples et démos utilisent ce procéder car cela aide à illustrer la forme suivie par le texte environnant. Cependant, il faut comprendre que la propriété <code>shape-outside</code> ne repose pas sur l'image utilisée dans le document et qu'il n'est pas nécessaire d'afficher une image dans le document afin de construire une forme à partir d'une image.</p>

<p>Il est nécessaire d'avoir un contenu flottant pour créer une forme mais ce contenu peut tout à fait être généré grâce à la feuille de style. Dans l'exemple qui suit, on utilise un contenu généré qui est placé dans une disposition flottante, avec une image d'étoile pour créer la forme mais cette image n'est pas affichée sur la page.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/image/generated-content.html", '100%', 800)}}</p>

<h2 id="Créer_des_formes_avec_un_dégradé">Créer des formes avec un dégradé</h2>

<p>En CSS, <a href="/fr/docs/Web/CSS/Utilisation_de_dégradés_CSS">un dégradé</a> est une image. On peut donc utiliser un dégradé afin de générer une forme.</p>

<p>Dans le prochain exemple, on utilise un contenu généré flottant dont l'image d'arrière-plan est un dégradé linéaire. On utilise la même valeur pour {{cssxref("shape-outside")}}. Le dégradé linéaire évolue du mauve vers le transparent. En modifiant la valeur de {{cssxref("shape-image-threshold")}}, on peut donc sélectionner le niveau de transparence nécessaire à la création de la forme. N'hésitez pas à modifier la valeur du seuil dans l'exemple suivant afin de voir le déplacement du contour en fonction du niveau de dégradé.</p>

<p>Vous pouvez également essayer de complètement retirer l'image d'arrière-plan afin d'utiliser uniquement le dégradé afin de créer la forme et ne pas l'afficher sur l'image.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/image/gradient.html", '100%', 800)}}</p>

<p>Dans l'exemple qui suit, on utilise un dégradé radial avec une ellipse et on utilise les zones transparentes du dégradé afin de créer la forme.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/image/radial-gradient.html", '100%', 800)}}</p>

<p>Vous pouvez éditer ces exemples interactifs afin de voir l'évolution de la forme en fonction des modifications.</p>
