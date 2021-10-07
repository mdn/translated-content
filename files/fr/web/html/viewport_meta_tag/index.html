---
title: >-
  Utilisation de la balise meta viewport pour contrôler la mise en page sur
  mobile
slug: Web/HTML/Viewport_meta_tag
tags:
  - Layout
  - Responsiveness
  - Mobile
  - viewport
translation_of: Web/HTML/Viewport_meta_tag
---
<p>Le <a href="/fr/docs/Glossary/Viewport"><i>viewport</i></a> du navigateur est la zone de la fenêtre dans laquelle le contenu web peut être vu. Souvent, cette zone n'a pas la même taille que la page rendue, auquel cas le navigateur fournit des barres de défilement pour que l'utilisateur et l'utilisatrice puissent faire défiler la page et accéder à tout le contenu.</p>

<h2 id="Background">Contexte</h2>

<p>Les appareils à écran étroit (par exemple, les mobiles) rendent les pages dans une fenêtre virtuelle ou viewport, qui est généralement plus large que l'écran, puis réduisent le résultat rendu afin qu'il puisse être vu en une seule fois. Les utilisateurs et utilisatrices peuvent alors effectuer un panoramique et un zoom pour voir différentes zones de la page. Par exemple, si l'écran d'un téléphone mobile a une largeur de 640 pixels, les pages peuvent être affichées dans une fenêtre virtuelle de 980 pixels, puis réduites pour tenir dans l'espace de 640 pixels.</p>

<p>En effet, de nombreuses pages ne sont pas optimisées pour les mobiles et ne fonctionnent pas (ou du moins n'ont pas l'air de fonctionner correctement) lorsqu'elles sont affichées sur un écran de petite taille. Cette fenêtre virtuelle est un moyen d'améliorer l'aspect des sites non optimisés pour les mobiles sur les appareils à écran étroit.</p>

<h3 id="Enter_viewport_meta_tag">Voici la métabalise viewport</h3>

<p>Cependant, ce mécanisme n'est pas aussi bon pour les pages qui sont optimisées pour les écrans étroits à l'aide de <a href="/fr/docs/Web/CSS/Media_Queries"><i>media queries</i></a> - si le viewport virtuel est de 980px par exemple, les media queries qui se déclenchent à 640px, 480px ou moins ne seront jamais utilisées, ce qui limite l'efficacité de ces techniques de <i>responsive design</i>.</p>

<p>Pour atténuer ce problème de fenêtre virtuelle sur les appareils à écran étroit, Apple a introduit la «&nbsp;métabalise viewport&nbsp;» dans Safari iOS pour permettre à une page web de contrôler la taille et l'échelle de la fenêtre. De nombreux autres navigateurs mobiles prennent désormais en charge cette balise, bien qu'elle ne fasse partie d'aucune norme web. La <a href="https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html">documentation</a> <small>(en)</small> d'Apple explique bien comment utiliser cette balise, mais nous avons dû faire un travail de détective pour savoir exactement comment l'implémenter dans Fennec. Par exemple, la documentation de Safari indique que le contenu est une « liste délimitée par des virgules », mais les navigateurs et pages web existants utilisent n'importe quel mélange de virgules, points-virgules et espaces comme séparateurs.</p>

<p>Pour en savoir plus sur les fenêtres d'affichage dans les différents navigateurs mobiles, consultez <a href="http://www.quirksmode.org/mobile/viewports2.html">A Tale of Two Viewports</a> sur quirksmode.org.</p>

<h2 id="Viewport_basics">Un viewport de base</h2>

<p>Un site type, optimisé pour les mobiles, contient quelque chose comme ce qui suit :</p>

<pre class="brush: html">&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</pre>

<p>La propriété <code>width</code> contrôle la taille de la zone d'affichage. Elle peut être définie sur un nombre spécifique de pixels comme <code>width=600</code> ou sur la valeur spéciale <code>device-width</code>, qui est la largeur de l'écran en pixels CSS à une échelle de 100%. (Il existe des valeurs <code>height</code> et <code>device-height</code> correspondantes, qui peuvent être utiles pour les pages comportant des éléments qui changent de taille ou de position en fonction de la hauteur du viewport).</p>

<p>La propriété <code>initial-scale</code> contrôle le niveau de zoom lors du premier chargement de la page. Les propriétés <code>maximum-scale</code>, <code>minimum-scale</code> et <code>user-scalable</code> contrôlent la manière dont les utilisateurs et utilisatrices sont autorisé·e·s à zoomer ou dézoomer la page.</p>

<div class="warning">
  <p><strong>Attention :</strong> L'utilisation du <code>user-scalable=no</code> peut causer des problèmes d'accessibilité aux utilisateurs et utilisatrices ayant des déficiences visuelles telles qu'une vision faible.</p>
</div>

<h2 id="A_pixel_is_not_a_pixel">Un pixel n'est pas un pixel</h2>

<p>Ces dernières années, les résolutions d'écran ont atteint une taille telle que les pixels individuels sont difficiles à distinguer à l'œil nu. Par exemple, les smartphones récents ont généralement un écran de 5 pouces avec des résolutions supérieures à 1920-1080 pixels (~400 dpi). Pour cette raison, de nombreux navigateurs peuvent afficher leurs pages dans une taille physique plus petite en convertissant plusieurs pixels matériels pour chaque « pixel » CSS. Au départ, cela a causé des problèmes de convivialité et de lisibilité sur de nombreux sites Web optimisés pour le tactile. Peter-Paul Koch a écrit sur ce problème dans <a href="http://www.quirksmode.org/blog/archives/2010/04/a_pixel_is_not.html">A pixel is not a pixel</a> (en anglais).</p>

<p>Sur les écrans à haute résolution, les pages avec <code>initial-scale=1</code> seront effectivement zoomées par les navigateurs. Leur texte sera lisse et net, mais leurs images bitmap ne profiteront probablement pas de la pleine résolution de l'écran. Pour obtenir des images plus nettes sur ces écrans, les développeurs web peuvent vouloir concevoir des images - ou des mises en page entières - à une échelle plus élevée que leur taille finale, puis les réduire à l'aide de CSS ou de propriétés viewport. Cette méthode est conforme à la spécification <a href="http://www.w3.org/TR/CSS2/syndata.html#length-units">CSS 2.1</a>, qui stipule ce qui suit :</p>

<blockquote>
  <p>Si la densité de pixels, du périphérique de sortie, est très différente de celle d'un écran d'ordinateur typique, l'agent utilisateur doit redimensionner les valeurs des pixels. Il est recommandé que l'unité de pixel fasse référence au nombre entier, de pixels du dispositif, qui se rapproche le plus du pixel de référence. Il est recommandé que le pixel de référence corresponde à l'angle visuel d'un pixel sur un dispositif, dont la densité de pixels est de 96 dpi et qui se trouve à une distance d'une longueur de bras du lecteur.</p>
</blockquote>

<p>Pour les développeurs et développeuses web, cela signifie que la taille d'une page est beaucoup plus petite que le nombre réel de pixels et que les navigateurs peuvent dimensionner leurs mises en page et leurs images en conséquence. Mais n'oubliez pas que tous les appareils mobiles n'ont pas la même largeur ; vous devez vous assurer que vos pages fonctionnent bien dans une grande variété de tailles d'écran et d'orientations.</p>

<p>Le rapport de pixels par défaut dépend de la densité de l'affichage. Sur un écran dont la densité est inférieure à 200 dpi, le rapport est de 1,0. Sur les écrans dont la densité est comprise entre 200 et 300dpi, le ratio est de 1,5. Sur les écrans dont la densité est supérieure à 300dpi, le ratio est le chiffre entier inférieur (<em>densité</em>/150dpi). Notez que le ratio par défaut n'est vrai que lorsque l'échelle du viewport est égale à 1. Sinon, le rapport entre les pixels CSS et les pixels du périphérique dépend du niveau de zoom actuel.</p>

<h2 id="Viewport_width_and_screen_width">Largeur de la zone d'affichage et largeur de l'écran</h2>

<p>Les sites peuvent définir leur viewport à une taille spécifique. Par exemple, la définition <code>"width=320, initial-scale=1"</code> peut être utilisée pour s'adapter précisément à l'écran d'un petit téléphone en mode portrait. Cela peut causer <a href="http://starkravingfinkle.org/blog/2010/01/perils-of-the-viewport-meta-tag/">des problèmes</a> <small>(en)</small> lorsque le navigateur ne rend pas une page à une taille supérieure. Pour remédier à cela, les navigateurs étendent la largeur de la fenêtre d'affichage si nécessaire pour remplir l'écran à l'échelle demandée. Cela est particulièrement utile sur les appareils à grand écran comme l'iPad. (L'article d'Allen Pike <a href="http://www.antipode.ca/2010/choosing-a-viewport-for-ipad-sites/">Choosing a viewport for iPad sites</a> (en anglais) contient une bonne explication pour les développeurs et développeuses web).</p>

<p>Pour les pages qui définissent une échelle initiale ou maximale, cela signifie que la propriété <code>width</code> se traduit en fait par une largeur <em>minimum</em> de viewport. Par exemple, si votre mise en page nécessite une largeur d'au moins 500 pixels, vous pouvez utiliser le balisage suivant. Lorsque la largeur de l'écran est supérieure à 500 pixels, le navigateur élargira la fenêtre d'affichage (plutôt que de zoomer) pour s'adapter à l'écran :</p>

<pre class="brush: html">&lt;meta name="viewport" content="width=500, initial-scale=1"&gt;</pre>

<p>Les autres <a href="/fr/docs/Web/HTML/Element/meta#attributes">attributs</a> disponibles sont <code>minimum-scale</code>, <code>maximum-scale</code> et <code>user-scalable</code>. Ces propriétés affectent l'échelle et la largeur initiales, ainsi que la limitation des changements de niveau de zoom.</p>

<p>Tous les navigateurs mobiles ne gèrent pas les changements d'orientation de la même manière. Par exemple, Mobile Safari se contente souvent de zoomer la page lors du passage du portrait au paysage, au lieu de la disposer comme elle le ferait si elle était initialement chargée en paysage. Si les développeurs et développeuses Web veulent que leurs paramètres d'échelle restent cohérents lors du changement d'orientation sur l'iPhone, ils/elles doivent ajouter une valeur <code>maximum-scale</code> pour empêcher ce zoom, ce qui a l'effet secondaire parfois indésirable d'empêcher les utilisateurs/utilisatrices de faire un zoom avant&nbsp;:</p>

<pre class="brush: html">&lt;meta name="viewport" content="initial-scale=1, maximum-scale=1"&gt;</pre>

<p>Supprimer le petit zoom appliqué par de nombreux smartphones en définissant les valeurs d'échelle initiale et d'échelle minimale à 0,86. Le résultat est que le défilement horizontal est supprimé dans n'importe quelle orientation et que l'utilisateur peut zoomer s'il le souhaite.</p>

<pre class="brush: html">&lt;meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"&gt;</pre>

<h2 id="Common_viewport_sizes_for_mobile_and_tablet_devices">Tailles communes des fenêtres d'affichage pour les appareils mobiles et les tablettes</h2>

<p>Si vous voulez savoir quels appareils mobiles et tablettes ont quelles largeurs de visualisation, il existe une liste complète de <a href="https://docs.adobe.com/content/help/en/target/using/experiences/vec/mobile-viewports.html">tailles de visualisation des appareils mobiles et tablettes ici</a>. Elle donne des informations telles que la largeur du viewport en orientation portrait et paysage ainsi que la taille physique de l'écran, le système d'exploitation et la densité de pixels de l'appareil.</p>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaire</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('CSS3 Device', '#viewport-meta', '&lt;meta name="viewport"&gt;')}}</td>
      <td>{{Spec2('CSS3 Device')}}</td>
      <td>Décrit de manière non normative l'élément META Viewport</td>
    </tr>
  </tbody>
</table>

<p>Il existe manifestement une demande pour la métabalise viewport, puisqu'elle est prise en charge par la plupart des navigateurs mobiles populaires et utilisée par des milliers de sites web. Il serait bon de disposer d'une véritable norme permettant aux pages web de contrôler les propriétés de la fenêtre d'affichage. Au fur et à mesure que le processus de normalisation avance, Mozilla s'efforcera de se tenir au courant de tout changement.</p>

<p>{{QuickLinksWithSubpages("/fr/docs/Web/HTML")}}</p>
