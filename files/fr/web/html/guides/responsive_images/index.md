---
title: Utiliser les images adaptatives en HTML
short-title: Images adaptatives
slug: Web/HTML/Guides/Responsive_images
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dans cet article, nous allons préciser le concept d'images adaptatives — images qui s'adaptent aux appareils selon les différentes tailles d'écran, résolutions et autres caractéristiques de ce type — et examiner les outils fournis par HTML pour faciliter leur mise en œuvre. Les images adaptatives ne sont qu'une partie (elles préparent le terrain) de la conception de sites web adaptatifs, sujet sur lequel vous en apprendrez beaucoup plus dans un prochain module au sujet des CSS.

## Pourquoi des images adaptatives ?

Quel problème essayons-nous de résoudre avec des images adaptatives&nbsp;? Examinons un scénario typique. Un site web classique a peut-être une image d'en-tête pour flatter le regard des visiteurs, plus peut-être quelques images de contenu plus loin. Imaginons que vous souhaitez que l'image d'en-tête couvre toute la largeur de l'en-tête et que l'image de contenu s'insère quelque part à l'intérieur de la colonne de contenu. Voici un exemple simple&nbsp;:

![Cet exemple de site est montré tel qu'il s'affiche sur un écran large - ici la première image s'affiche bien, et comme elle est suffisamment grande on voit le détail de l'image (promeneurs) en son centre](picture-element-wide.png)

Cela fonctionne bien sur un appareil avec un grand écran, comme un portable ou un ordinateur de bureau (vous pouvez [voir cet exemple en direct <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) et trouver son [code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/not-responsive.html) sur GitHub). Nous ne nous attarderons pas sur les CSS, excepté pour préciser ceci&nbsp;:

- Le contenu du corps a été fixé à une largeur maximale de 1200 pixels — dans les fenêtres de largeur supérieure, il s'affiche sur 1200 pixels et se centre dans l'espace disponible. Dans celles de largeur inférieure, le contenu occupe 100 % de la largeur de la vue.
- L'image d'en-tête est définie de sorte que son milieu soit toujours au centre de l'en-tête, quelle que soit sa largeur. Ainsi, si le site est regardé sur un écran moins large, le détail important au centre de l'image (les gens) peut toujours être vu, et l'excès est perdu de part et d'autre. L'image a une hauteur de 200 pixels.
- Les images de contenu sont définies de sorte que si l'élément corps devient plus petit que l'image, les images se contractent pour rester toujours à l'intérieur du corps sans jamais déborder.

Tout cela c'est très bien, mais le problème apparaît lorsque vous commencez à regarder le site sur un écran étroit — l'en-tête semble correct, mais commence à prendre beaucoup de hauteur pour un mobile, et la première image de contenu d'autre part n'est pas terrible — à cette taille, vous avez du mal à distinguer les personnes&nbsp;!

![Notre site d'exemple vu sur un écran étroit la première image est réduite à telle point qu'il est difficile d'y voir les détails.](non-responsive-narrow.png)

Une amélioration serait d'afficher une version recadrée de l'image qui montre les détails importants lorsque le site est consulté sur un écran étroit. Une seconde image recadrée pourrait être affichée pour un appareil à écran de largeur moyenne, comme une tablette. Le problème général qui consiste à vouloir servir différentes images recadrées de cette manière, pour divers agencements, est communément appelé le **problème de la direction artistique**.

De plus, il n'est pas nécessaire d'intégrer des images aussi grandes sur la page si elle est consultée sur un écran mobile. Cela peut gaspiller de la bande passante&nbsp;; en particulier, les utilisateur·ice·s mobiles ne veulent pas gaspiller de la bande passante en téléchargeant une grande image destinée aux utilisateur·ice·s de bureau, alors qu'une petite image suffirait pour leur appareil. À l'inverse, une petite [image matricielle](/fr/docs/Glossary/Raster_image) commence à devenir granuleuse lorsqu'elle est affichée plus grande que sa taille d'origine (une image matricielle a un nombre fixe de pixels en largeur et en hauteur). Idéalement, plusieurs résolutions devraient être mises à disposition du navigateur web de l'utilisateur·ice. Le navigateur pourrait alors déterminer la résolution optimale à charger en fonction de la taille d'écran de l'appareil de l'utilisateur·ice. C'est ce qu'on appelle le **problème de commutation de résolution**.

Pour compliquer les choses, certains appareils ont des écrans haute résolution qui nécessitent des images plus grandes que ce que l'on pourrait attendre pour un affichage correct. C'est essentiellement le même problème, mais dans un contexte légèrement différent.

Vous pourriez penser que les images vectorielles résoudraient ces problèmes, et elles le font dans une certaine mesure — elles sont petites en taille de fichier et s'adaptent bien, et vous devriez les utiliser autant que possible. Cependant, elles ne conviennent pas à tous les types d'images. Les images vectorielles sont parfaites pour les graphiques simples, les motifs, les éléments d'interface, etc., mais il devient très complexe de créer une image vectorielle avec le niveau de détail que l'on trouve, par exemple, dans une photo. Les formats d'image matricielle tels que JPEG sont plus adaptés au type d'images que nous voyons dans l'exemple ci-dessus.

Ce type de problème n'existait pas lorsque le web est apparu, au début et au milieu des années 90 — à l'époque, les seuls appareils existants pour naviguer sur le Web étaient des ordinateurs de bureau et des portables, donc les ingénieur·e·s des navigateurs et les rédacteur·ice·s de spécifications n'ont même pas pensé à mettre en œuvre des solutions. Les _technologies d'images adaptatives_ ont été mises en place récemment pour résoudre les problèmes indiqués ci-dessus en vous permettant de proposer au navigateur plusieurs fichiers image, soit tous montrant la même chose mais contenant un nombre différent de pixels (_commutation de résolution_), soit différentes images adaptées à différents espaces (_direction artistique_).

> [!NOTE]
> Toutes les nouvelles fonctionnalités présentées dans cet article — [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#attr-srcset)/[`sizes`](/fr/docs/Web/HTML/Reference/Elements/img#attr-sizes)/{{HTMLElement("picture")}} — sont toutes prises en charge dans les versions de navigateurs récemment publiées pour les ordinateurs de bureau et pour les mobiles (y compris le navigateur Edge de Microsoft, même si ce n'est pas le cas d'Internet Explorer).

## Comment créer des images adaptatives ?

Dans cette section, nous allons examiner les deux problèmes illustrés ci-dessus et montrer comment les résoudre à l'aide des fonctionnalités d'images adaptatives du HTML. Vous noterez que nous nous concentrerons sur les éléments {{HTMLElement("img")}} pour cette section, comme on le voit dans la zone de contenu de l'exemple ci-dessus — l'image de l'en-tête du site est uniquement décorative et donc implémentée avec des images de fond en CSS. [CSS propose sans doute de meilleurs outils pour la conception adaptative <sup>(angl.)</sup>](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) que le HTML, et nous en parlerons dans un module CSS à venir.

### Commutations de résolution : tailles différentes

Alors, quel est le problème à résoudre à l'aide des commutations de résolution&nbsp;? Nous voulons afficher un contenu d'image identique, juste plus grand ou plus petit selon l'appareil — c'est la situation de la deuxième image du contenu de notre exemple précédent. L'élément standard {{HTMLElement("img")}} vous permet classiquement de ne faire pointer le navigateur que vers un seul fichier source&nbsp;:

```html
<img src="elva-fairy-800w.jpg" alt="Elva habillée en fée" />
```

Mais il est possible d'utiliser deux nouveaux attributs — [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset) et [`sizes`](/fr/docs/Web/HTML/Reference/Elements/img#sizes) — permettant de fournir plusieurs images source avec des indications pour permettre au navigateur de faire le bon choix. Vous trouverez un exemple de cela dans le fichier [responsive.html <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sur GitHub (voyez aussi le [code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/responsive.html))&nbsp;:

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(width <= 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva habillée en fée" />
```

Les attributs `srcset` et `sizes` paraissent complexes, mais ils ne sont pas difficiles à comprendre si vous les formatez comme indiqué ci-dessus, avec une partie différente de la valeur de l'attribut sur chaque ligne. Chaque valeur contient une liste séparée par des virgules et chaque partie de la liste est composée de trois sous-parties. Passons maintenant en revue leur contenu.

**`srcset`** définit l'ensemble des images offertes au choix du navigateur, et la taille de chaque image. Avant chaque virgule, nous avons écrit&nbsp;:

1. un nom de **fichier image** (`elva-fairy-480w.jpg`),
2. un espace,
3. la **largeur intrinsèque en pixels** (`480w`) — notez l'utilisation de l'unité `w`, et non `px` comme vous auriez pu penser. C'est la taille réelle de l'image; qui peut être trouvée en examinant les propriétés du fichier image sur l'ordinateur (par exemple sur un Mac, sélectionnez l'image dans le Finder, puis appuyez sur <kbd>Cmd</kbd> \+ <kbd>I</kbd> pour faire apparaître l'écran des infos).

**`sizes`** définit un ensemble de conditions pour le média (par ex. des largeurs d'écran) et indique quelle taille d'image serait la plus adaptée si certaines conditions sont satisfaites — ce sont les conditions dont nous avons parlé plus haut. Dans ce cas, nous écrivons avant chaque virgule&nbsp;:

1. une **condition pour le média** (`(max-width:600px)`) — vous pourrez en savoir plus à ce propos dans l'[article sur les CSS](/fr/docs/Learn_web_development/Core/Styling_basics), mais pour le moment disons simplement que cette condition pour le média décrit un état possible de l'écran. Dans notre cas, nous disons «&nbsp;si la largeur de fenêtre est de 600 pixels ou moins »,
2. une espace,
3. **la largeur de la place** occupée par l'image si la condition pour le média est vraie (`480px`).

> [!NOTE]
> Dans `sizes`, vous pouvez utiliser n'importe quelle [valeur de longueur](/fr/docs/Web/CSS/Reference/Values/length). Par exemple, au lieu de fournir une largeur absolue (par exemple, `480px`), vous pouvez fournir une largeur relative à la zone d'affichage (par exemple, `50vw`). Cependant, vous ne pouvez pas utiliser un pourcentage comme largeur d'emplacement. Vous avez peut-être remarqué que la dernière largeur d'emplacement n'a pas de condition pour le média (c'est la valeur par défaut choisie lorsque aucune des conditions pour le média n'est vraie). Le navigateur ignore tout ce qui suit après la première condition concordante, donc faites attention à l'ordre des conditions pour le média.

Ainsi, une fois ces attributs en place, le navigateur va&nbsp;:

1. Examiner la taille de l'écran, la densité de pixels, le niveau de zoom, l'orientation de l'écran et la vitesse du réseau.
2. Déterminer quelle condition pour le média dans la liste `sizes` est la première à être vraie.
3. Examiner la taille d'emplacement donnée à cette requête média.
4. Charger l'image référencée dans la liste `srcset` qui a la même taille que l'emplacement. S'il n'y a pas de correspondance exacte pour la taille d'affichage, le navigateur choisira la première image plus grande que la taille d'emplacement choisie et la réduira pour l'adapter.

Et c'est tout&nbsp;! À ce stade, si un navigateur compatible avec une largeur de zone d'affichage de 480px charge la page, la condition pour le média `(width <= 600px)` sera vraie, et le navigateur choisira donc l'emplacement `480px`. Le fichier `elva-fairy-480w.jpg` sera chargé, car sa largeur intrinsèque (`480w`) est la plus proche de la taille de l'emplacement. L'image de 800px a une taille de 128 Ko sur le disque, tandis que la version 480px n'occupe que 63 Ko — soit une économie de 65 Ko. Imaginez maintenant qu'il s'agisse d'une page contenant beaucoup d'images. L'utilisation de cette technique peut permettre aux utilisateur·ice·s mobiles d'économiser beaucoup de bande passante.

> [!NOTE]
> Lorsque vous testez cela avec un navigateur de bureau, si ce dernier échoue à charger les images les plus étroites alors que vous avez réduit la fenêtre au maximum, vérifiez la taille de la zone d'affichage (vous pouvez l'estimer en allant dans la console JavaScript du navigateur et en tapant `document.querySelector('html').clientWidth`). Différents navigateurs ont des tailles minimales auxquelles ils permettent de réduire la largeur de la fenêtre, et elles peuvent être plus larges que ce que vous pensez. Lors des tests avec un navigateur mobile, vous pouvez utiliser des outils comme la page `about:debugging` de Firefox pour inspecter la page chargée sur le mobile à l'aide des outils de développement du navigateur de bureau.
>
> Pour voir quelles images ont été chargées, vous pouvez utiliser l'onglet [Moniteur réseau <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) des outils de développement de Firefox ou le panneau [Réseau](https://developer.chrome.com/docs/devtools/network/) des outils de développement de Chrome. Pour Chrome, vous pouvez aussi [désactiver le cache <sup>(angl.)</sup>](https://stackoverflow.com/a/7000899/13725861) pour éviter qu'il ne sélectionne des images déjà téléchargées.

Les navigateurs plus anciens qui ne prennent pas en charge ces fonctionnalités les ignoreront simplement. À la place, ces navigateurs chargeront normalement l'image référencée dans l'attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/img#src).

> [!NOTE]
> Dans l'élément {{HTMLElement("head")}} de l'exemple lié ci-dessus, vous trouverez la ligne `<meta name="viewport" content="width=device-width">`&nbsp;: cela force les navigateurs mobiles à adopter leur largeur réelle de zone d'affichage pour charger les pages web (certains navigateurs mobiles mentent à propos de la largeur de leur zone d'affichage, et chargent à la place les pages avec une largeur plus grande puis rétrécissent la page chargée, ce qui n'est pas très utile pour les images ou la conception adaptatives).

### Commutation de résolution : même taille, résolutions différentes

Supposons que vous ayez une image qui sera affichée à la même taille réelle sur des écrans ayant des résolutions différentes. Vous pouvez offrir une meilleure expérience utilisateur sur les écrans haute résolution en servant une version de l'image en haute résolution.

Pour cela, vous pouvez permettre au navigateur de choisir une image de résolution appropriée en utilisant `srcset` avec des x-descripteurs et sans `sizes` — une syntaxe un peu plus simple&nbsp;! Vous pouvez trouver un exemple de ce à quoi cela ressemble dans [srcset-resolutions.html <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) (voir aussi [le code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html))&nbsp;:

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva habillée en fée" />
```

![Une photo d'une petite fille habillée en fée avec un filtre appliqué à l'image pour obtenir l'effet d'une vieille photo.](resolution-example.png)

Dans cet exemple, le CSS suivant est appliqué à l'image de façon à ce qu'elle ait une largeur de 320 pixels à l'écran (également nommée pixels CSS)&nbsp;:

```css
img {
  width: 320px;
}
```

Dans ce cas, `sizes` n'est pas nécessaire — le navigateur détermine simplement la résolution d'affichage de l'écran et montre l'image la plus appropriée référencée dans `srcset`. Donc si le dispositif accédant à la page a un affichage standard/basse résolution, avec un pixel de dispositif représentant chaque pixel CSS, l'image `elva-fairy-320w.jpg` sera chargée (le 1x est implicite, donc vous n'avez pas besoin de l'inclure.) Si le dispositif a une haute résolution de deux pixels de dispositif par pixel CSS ou plus, l'image `elva‑fairy-640w.jpg` sera chargée. L'image 640px a une taille de 93 Ko, alors que l'image 320 px n'a qu'une taille de 39 Ko.

### Décision de nature artistique

Pour résumer, le problème des **décisions de nature artistique** réside dans le choix des modifications à apporter à l'image selon les diverses tailles d'affichage. Par exemple, si un instantané d'un grand plan paysager avec une personne au milieu, correctement affiché sur un site web avec le navigateur d'un ordinateur de bureau, est rétréci lorsque ce même site est visionné sur un navigateur de mobile, cet instantané risque d'avoir mauvaise mine, car la personne sera vraiment minuscule et difficile à voir. Il serait probablement préférable de montrer sur un mobile une image portrait plus petite d'un zoom sur la personne. L'élément {{HTMLElement("picture")}} nous permet d'implémenter ce type de solution.

Revenons à notre exemple initial du fichier [not-responsive.html <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html). Cette image nécessite d'opérer un choix de nature artistique&nbsp;:

```html
<img
  src="elva-800w.jpg"
  alt="Chris debout tenant sa fille Elva dans ses bras" />
```

Corrigeons cela avec {{HTMLElement("picture")}}&nbsp;! Comme [`<video>` et `<audio>`](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio), l'élément `<picture>` est une enveloppe qui contient plusieurs éléments {{HTMLElement("source")}} fournissant différentes sources parmi lesquelles le navigateur peut choisir, suivis de l'indispensable élément {{HTMLElement("img")}}. Le code dans [responsive.html <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) ressemble à ceci&nbsp;:

```html
<picture>
  <source media="(width < 800px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(width >= 800px)" srcset="elva-800w.jpg" />
  <img
    src="elva-800w.jpg"
    alt="Chris debout tenant sa fille Elva dans ses bras" />
</picture>
```

- Les éléments `<source>` incluent un attribut `media` qui contient une condition pour le média — comme dans le premier exemple `srcset`, ces conditions sont des tests qui déterminent quelle image est affichée — la première qui renvoie vrai sera affichée. Dans ce cas, si la largeur de la zone d'affichage est inférieure à 800 px, l'image du premier élément `<source>` sera affichée. Si la largeur de la zone d'affichage est de 800 px ou plus, ce sera la seconde.
- Les attributs `srcset` contiennent le chemin vers l'image à afficher. Comme nous l'avons vu avec `<img>` plus haut, `<source>` peut prendre un attribut `srcset` référençant plusieurs images, ainsi qu'un attribut `sizes`. Vous pouvez donc proposer plusieurs images via un élément `<picture>`, mais aussi plusieurs résolutions pour chacune d'elles. En pratique, vous ne ferez pas ce type de montage très souvent.
- Dans tous les cas, vous devez fournir un élément `<img>`, avec `src` et `alt`, juste avant `</picture>`, sinon aucune image n'apparaîtra. Cela permet de gérer le cas par défaut lorsque aucune des conditions pour le média ne renvoie vrai (vous pouvez réellement enlever le deuxième élément `<source>` dans cet exemple), et d'assurer une solution de repli pour les navigateurs qui ne prennent pas en charge l'élément `<picture>`.

Ce code nous permet d'afficher une image adaptée à la fois sur un écran large et sur un écran étroit, comme montré ci‑dessous&nbsp;:

![Notre exemple vu sur un écran assez large : la première image est OK et on voit le détail au centre.](picture-element-wide.png)![Notre exemple vu sur un écran étroit où l'élément picture permet de passer la première image à une image en portrait, plus utile sur un écran étroit.](picture-element-narrow.png)

> [!NOTE]
> Vous ne devez utiliser l'attribut `media` qu'avec un scénario de décision de nature artistique&nbsp;; quand vous utilisez `media`, ne mettez pas de conditions pour le média avec l'attribut `sizes.`

### Pourquoi ne peut-on pas réaliser cela avec le CSS ou du JavaScript ?

Lorsque le navigateur commence à charger une page, il commence à télécharger (précharger) toutes les images avant que l'analyseur principal n'ait commencé à charger et à interpréter le CSS et le JavaScript de la page. Cette technique est utile, car elle permet de réduire de 20 % en moyenne le temps de chargement des pages. Cependant, elle n'est d'aucune aide pour les images adaptatives, d'où la nécessité de mettre en œuvre des solutions comme `srcset`. Vous ne pourriez pas, par exemple, charger l'élément {{HTMLElement("img")}}, puis détecter la largeur de fenêtre avec JavaScript et changer dynamiquement l'image source pour une image plus petite si désiré. À ce moment-là, l'image originale aurait déjà été chargée, et vous chargeriez en plus la petite image, ce qui est encore pire en termes d'image adaptative.

## Mettre en œuvre vos propres images adaptatives

Dans cet exercice, nous attendons de vous que vous soyez audacieux·se et que vous le fassiez principalement seul·e. Nous voulons que vous mettiez en œuvre votre propre capture d'écran adaptée à l'art pour écran étroit/large à l'aide de `<picture>`, ainsi qu'un exemple de commutation de résolution utilisant `srcset`.

1. Écrivez du HTML pour contenir votre code (utilisez `not-responsive.html` comme point de départ, si vous le souhaitez).
2. Trouvez une belle image paysagère en écran large avec un détail quelque part. Créez une version adaptée au web à l'aide d'un éditeur graphique, puis recadrez-la pour montrer une partie plus petite qui zoome sur le détail, et créez une seconde image (environ 480 px de large est une bonne taille pour cela).
3. Utilisez l'élément `<picture>` pour mettre en œuvre un sélecteur d'image à direction artistique&nbsp;!
4. Créez plusieurs fichiers image de tailles différentes, chacun montrant la même image.
5. Utilisez `srcset`/`sizes` pour créer un exemple de commutation de résolution, soit pour servir la même image à différentes résolutions selon la résolution de l'appareil, soit pour servir différentes tailles d'image selon la largeur de la zone d'affichage.

## Résumé

Voilà notre paquet‑cadeau pour des images adaptatives — nous espérons que ces nouvelles techniques vous plaisent. Résumons, nous vous avons exposé deux méthodes distinctes pour résoudre ce problème&nbsp;:

- **Direction artistique**&nbsp;: Le problème où vous souhaitez servir des images recadrées pour différentes mises en page — par exemple une image paysagère montrant toute la scène pour une mise en page de bureau, et une image portrait montrant le sujet principal zoomé pour une mise en page mobile. Vous pouvez résoudre ce problème avec l'élément {{HTMLElement("picture")}}.
- **Changement de résolution**&nbsp;: Le problème où vous souhaitez servir des fichiers image plus petits aux appareils à écran étroit, car ils n'ont pas besoin de grandes images comme les écrans d'ordinateur de bureau — et servir des images de résolutions différentes aux écrans à haute ou basse densité. Vous pouvez résoudre ce problème avec [graphiques vectoriels](/fr/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) (images SVG) et les attributs [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset) et [`sizes`](/fr/docs/Web/HTML/Reference/Elements/img#sizes).

## Voir aussi

- [Apprendre&nbsp;: Le design adaptatif](/fr/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [L'excellente introduction aux images adaptatives de Jason Grigsby <sup>(angl.)</sup>](http://blog.cloudfour.com/responsive-images-101-definitions)
- [Images adaptatives&nbsp;: si vous changez juste de résolution, utilisez `srcset` <sup>(angl.)</sup>](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — comporte plus d'explications sur la façon dont le navigateur retravaille l'image à utiliser
- L'élément {{HTMLElement("img")}}
- L'élément {{HTMLElement("picture")}}
- L'élément {{HTMLElement("source")}}
