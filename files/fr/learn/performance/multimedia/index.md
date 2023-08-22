---
title: "Multimédia : Images"
slug: Learn/Performance/Multimedia
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/measuring_performance", "Learn/Performance/video", "Learn/Performance")}}

Les fichiers média, et plus précisément les images et les vidéos, représentent plus de 70 % des octets téléchargés sur un site web classique. En termes de performance lors du téléchargement des ressources d'une page, la suppression des fichiers média et la réduction de la taille des fichiers est la solution de facilité pour produire des sites performants. Cet article s'intéresse à l'optimisation des images et des vidéos dans le but d'améliorer les performances.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requis :</th>
      <td>
        Bases de l'informatique,
        <a
          href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >logiciels de base</a
        >
        installés et connaissances de base
        <a href="/fr/docs/Learn/Getting_started_with_the_web"
          >des technologies web opérant côté client</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs :</th>
      <td>
        Connaître les différents formats d'images, apprendre leur impact sur les
        performances et savoir comment réduire l'impact des images sur le temps
        de chargement général d'une page web.
      </td>
    </tr>
  </tbody>
</table>

> **Note :** Cet article est une introduction à l'optimisation des éléments multimédia sur le web, couvrant les principes généraux et les techniques de base. Pour aller plus loin, consultez des ressources plus spécialisées, telles que [https://images.guide (en anglais)](https://images.guide).

## Pourquoi optimiser vos éléments multimédia ?

On considère que pour un site classique, en moyenne 51 % de la bande passante utilisée provient des images, et 25 % provient des vidéos ([source](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367), en anglais). Il est donc raisonnable de dire qu'il est important de porter une attention particulière à l'optimisation du contenu multimédia.

Il est aussi important de prendre en considération la consommation de données. De nombreuses personnes utilisent des forfaits de connexion internet limités voir même des connexions facturées à la donnée téléchargée, où chaque octet de données consommé est facturé. Et cela ne concerne pas que les pays émergents. En 2018, 24 % des habitants du Royaume-Uni utilisaient ce type de connexion internet ([source](https://www.ofcom.org.uk/__data/assets/pdf_file/0021/113169/Technology-Tracker-H1-2018-data-tables.pdf), en anglais).

En outre, il est important de prendre en compte la mémoire utilisée, car de nombreux appareils mobiles ont une RAM limitée. N'oubliez pas que quand les images sont téléchargées, elles sont stockées dans la mémoire vive de l'appareil.

## L'optimisation de la distribution des images

Bien qu'il s'agisse de l'élément consommant le plus de bande passante, l'impact du téléchargement des images sur la [performance perçue](/fr/docs/Learn/Performance/Perceived_performance) et largement moins important que ce à quoi l'on pourrait s'attendre, principalement du fait que le contenu de la page est téléchargé immédiatement et que les personnes qui visitent le site voient les images s'afficher au fur et à mesure du chargement. Mais si l'on veut proposer la meilleure expérience possible, il reste important d'afficher le plus tôt possible des images complètement chargées.

### Stratégie de chargement

Une des plus grandes améliorations utilisable sur la plupart des sites web est le [chargement différé](/fr/docs/Web/Performance/Lazy_loading) des images se situant en dessous de la ligne de flottaison, plutôt que de toutes les téléchargées directement sans se soucier de l'emplacement où elles se trouvent par rapport à l'écran de la personne qui visite le site (elle pourrait même ne jamais faire défiler son écran jusqu'à certaines images situées plus bas dans la page !). Plusieurs bibliothèques JavaScript peuvent implémenter cela pour vous, par exemple [lazysizes (en anglais)](https://github.com/aFarkas/lazysizes), mais sachez que les navigateurs travaillent sur l'attribut `lazyload`, qui est actuellement en phase d'expérimentation.

En plus de charger un sous-ensemble d'images, vous devriez ensuite vous attarder sur les formats d'images que vous utilisez :

- Chargez-vous le format de fichier le plus optimal ?
- Avez-vous bien compressé vos images ?
- Chargez-vous des tailles d'images adaptées ?

#### Le format le plus optimisé

Le format de fichier le plus optimisé dépend directement du type d'image à charger.

> **Note :** Pour obtenir des informations plus générales sur les types d'images, consultez le [guide des types d'images et de formats d'images](/fr/docs/Web/Media/Formats/Image_types).

Le format [SVG](/fr/docs/Web/Media/Formats/Image_types#svg) est le plus approprié pour les images qui ne comprennent que quelques couleurs et qui n'ont pas la complexité d'une photographie. Cela nécessite la mise à disposition d'une source dans un format vectoriel. Si cette image n'est disponible qu'en format bitmap, alors le format [PNG](/fr/docs/Web/Media/Formats/Image_types#png) sera la solution de repli idéale. De bons exemples d'images idéalement fournies en SVG sont les logos, les illustrations, les graphiques ou les icônes (veuillez noter qu'il vaut mieux utiliser des images au format SVG que des polices d'icônes !). Qu'il s'agisse de SVG ou de PNG, les deux formats prennent en charge la transparence.

Les images peuvent être enregistrées au format PNG à l'aide de trois différentes combinaison de traitements :

- Couleurs 24 bits + 8 bits de transparence — propose une précision complète des couleurs et des niveaux de transparence progressifs, mais au détriment de la taille du fichier. WebP est probablement une meilleure solution (voir ci-après) ;
- Couleurs 8 bits color + 8 bits de transparence — ne propose que 255 couleurs mais maintient des niveaux de transparence progressifs. La taille des fichiers n'est pas trop importante. Il s'agit du meilleur cas d'usage du format PNG ;
- Couleurs 8 bits + 1 bit de transparence — ne propose que 255 couleurs et ne propose pas ou peu de transparence par pixels, ce qui rend les limites des zones transparentes visibles et peu esthétiques. La taille de fichier est réduite mais au prix d'importantes dégradations visuelles.

[SVGOMG](https://jakearchibald.github.io/svgomg/) est un bon outil pour optimiser les SVG en ligne. Pour les PNG il existe [ImageOptim online](https://imageoptim.com/online) ou [Squoosh](https://squoosh.app/).

Pour les motifs photographiques qui ne contiennent pas de transparence, il y a un grand nombre de formats disponibles. Si vous voulez jouer la sécurité, alors optez pour le format compressé **JPEG progressif**. Par rapport aux JPEG normaux, les JPEG progressifs s'affichent progressivement (d'où le nom) ce qui veut dire que le visiteur verra d'abord une version basse résolution, puis l'image gagnera en clarté au fur et à mesure que l'image se charge, au lieu de devoir attendre que l'image soit complètement chargée de haut en bas avant qu'elle ne puisse s'afficher. **MozJPEG** est un bon outil de compression. Il est utilisé par l'outil d'optimisation d'images en ligne [Squoosh](https://squoosh.app/). Les meilleurs résultats sont obtenus avec une optimisation à 75 %.

D'autres formats proposent des compressions encore plus efficaces que le format JPEG, mais ils ne sont pas toujours compatibles avec tous les navigateurs.

- [WebP](/fr/docs/Web/Media/Formats/Image_types#webp) : un choix excellent pour les images, qu'elles soient fixes ou animées. WebP offre une meilleure compression que PNG ou JPEG et prend en charge les grandes profondeurs de couleurs, les animations, la transparence et de nombreuses autres fonctionnalités, à l'exception de l'affichage progressif. WebP est pris en charge par tous les navigateurs les plus utilisés à l'exception de Safari 14 sur macOS 14 sur ordinateur.

  > **Note :** en dépit de [la prise en charge annoncée de WebP sur Safari 14](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174), les images `.webp` ne s'affiche pas bien sur macOS sur ordinateur, alors qu'elles s'affichent bien sur iOS 14 sur mobile.

- [AVIF](/fr/docs/Web/Media/Formats/Image_types#avif) : un bon choix pour les images fixes ou animées, du fait du haut niveau de performances et du fait qu'il est libre de droits. AVIF est encore plus efficient que WebP, mais il n'est pas aussi bien pris en charge : il est actuellement pris en charge sur Chrome, Opera et Firefox (à l'aide des [réglages de préférences](/fr/docs/Mozilla/Firefox/Experimental_features#avif_av1_image_file_format_support)).
  Vous pouvez utiliser cet [outil en ligne pour convertir différents formats d'images en AVIF](https://avif-converter.online).
- **JPEG-XR** : un format créé par Microsoft et disponible uniquement sur Internet Explorer en les versions de Edge basées sur EdgeHTML. Ce format ne prend pas en charge l'affichage progressif et le décodage de l'image n'est pas accélérée par matérielle du système et donc consommateur de ressources pour le [fil d'exécution principal](/fr/docs/Glossary/Main_thread) du navigateur. Les JPEG progressifs situés au-dessus de la ligne de flottaison s'affichent progressivement (d'où leur nom), ce qui signifie que l'internaute voit d'abord une version en basse résolution, qui gagne progressivement en netteté au fur et à mesure que l'image se télécharge, au lieu d'avoir une image qui se charge en pleine résolution du haut vers le bas (ou directement en une seule fois).
- **JPEG2000** il était prévu qu'il succède au format JPEG mais n'est pris en charge que par Safari. Ce format ne prend pas non plus en charge l'affichage progressif.

Compte-tenu de la faible prise en charge de JPEG-XR et de JPEG2000 et en prenant en compte les coûts de décodage dans l'équation, le seul format pouvant concurrencer sérieusement JPEG est le format WebP. C'est la raison pour laquelle vous devriez envisager de l'utiliser, pour les navigateurs qui le supportent. Cela peut être fait en utilisant l'élément `<picture>` avec l'aide d'un élément `<source>` équipé d'un [attribut `type`](/fr/docs/Web/HTML/Element/picture#the_type_attribute).

Si tout cela vous semble un peu trop compliqué ou si vous pensez que cela vous demandera trop de travail, sachez qu'il existe des services en ligne que vous pouvez utiliser en tant que CDN d'images et qui vont servir automatiquement et à la volée le bon format d'image, en fonction du type d'appareil ou de navigateur demandant l'affichage de l'image. Les CDN d'images les plus importants sur le marché sont [Cloudinary](https://cloudinary.com/features/responsive_images) et [Image Engine](https://imageengine.io/).

Pour finir, si vous avez besoin d'afficher des images animées sur votre page, sachez que Safari permet l'utilisation de fichiers vidéo à l'intérieur des éléments `<img>` et `<picture>`. Ces éléments vous permettent aussi d'utiliser des **WebP animés** pour tous les autres navigateurs modernes.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" />
</picture>
```

#### Servir la taille optimale

Dans le monde de la livraison d'images, l'approche « universelle » n'est pas celle qui donne les meilleurs résultats. En effet, pour les plus petits écrans, vous pourriez vouloir servir des images avec une résolution plus petite, et inversement pour les écrans les plus larges. En plus de cela, vous pourriez avoir envie de servir des images de haute résolution aux appareils qui ont un écran le plus de DPI (comme les écrans _Retina_). Ainsi, sauf si vous créez de nombreuses variations intermédiaires de vos images, vous allez aussi avoir besoin d'un moyen de servir le bon fichier pour le bon navigateur. Vous pouvez pour cela agrémenter vos éléments `<picture>` et `<source>` avec les attributs [`media`](/fr/docs/Web/HTML/Element/Source#attr-media) et/ou [`sizes`](/fr/docs/Web/HTML/Element/Source#attr-sizes). Un [article détaillé sur la combinaison de ces attributs peut être trouvé ici (en anglais)](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/).

Deux effets intéressants sont à garder en tête concernant les écrans à haut niveau de DPI :

- avec les écrans à haut niveau de DPI, [l'œil humain reconnaîtra les artefacts de compression bien plus tard](https://www.netvlies.nl/tips-updates/algemeen/design-interactie/retina-revolution/), ce qui signifie que pour les images destinées à ces écrans, vous pouvez aller plus loin que d'habitude en termes de compression.
- [seulement une toute petite proportion des gens sont capables de détecter les améliorations supérieures à 2× DPI](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), ce qui signifie que vous n'avez pas besoin de servir des images d'une résolution supérieure à 2×.

#### Contrôler la priorité (et l'ordre) de téléchargement des images

Les images les plus importantes doivent être affichées le plus rapidement possible aux personnes visitant votre site, afin d'améliorer la performance qu'ils perçoivent de votre site.

La première chose à vérifier est que vos images de contenu utilisent bien des éléments `<img>` ou `<picture>`, et que vos images d'arrière-plan sont bien définies à l'aide de la propriété CSS `background-image`. sachez que les images référencées avec les éléments `<img>` ou `<picture>` ont une priorité de chargement plus importante que les images d'arrière-plan.

Deuxièmement, avec l'adoption progressive des indices de priorité (API _Priority Hints_), vous pouvez aller plus loin dans le contrôle de la priorité en utilisant un attribut `importance` sur vos balises d'images. Un cas d'utilisation concret pour l'utilisation des indices de priorité sont les diaporamas d'images où on mettra une priorité plus haute sur la première image que sur les suivantes.

### Stratégie de rendu

Comme les images sont chargées de façon asynchrone et continuent à charger après la première peinture de la page, un _reflow_ du contenu de la page peut survenir si leurs dimensions ne sont pas définies avant le chargement. C'est par exemple le cas lorsque le texte se fait repousser vers le bas au chargement des images. Pour cette raison, il est très important de mettre en place des attributs `width` et `height` pour que le navigateur puisse réserver de l'espace pour la mise en page des images.

Pour les images d'arrière-plan, il est important de mettre en place une valeur pour la propriété `background-color` pour que le contenu éventuellement affiché par-dessus l'image soit lisible même avant que l'image ne soit chargée.

## Conclusion

Dans cette section nous avons vu l'optimisation des images. Vous avez maintenant une compréhension générale de la façon d'optimiser la bande passante de la moitié des sites web. Ce n'est qu'un des types d'optimisation consommant la bande passante des visiteurs et ralentissant le chargement des pages. Dans le prochain article, nous verrons l'optimisation du critère responsable de 20 % de la consommation de bande passante.

{{PreviousMenuNext("Learn/Performance/measuring_performance", "Learn/Performance/video", "Learn/Performance")}}
