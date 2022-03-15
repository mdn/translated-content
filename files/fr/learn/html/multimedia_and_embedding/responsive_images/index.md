---
title: Images adaptatives
slug: Learn/HTML/Multimedia_and_embedding/Responsive_images
translation_of: Learn/HTML/Multimedia_and_embedding/Responsive_images
original_slug: Apprendre/HTML/Comment/Ajouter_des_images_adaptatives_à_une_page_web
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}

Dans cet article, nous allons préciser le concept d'images adaptatives — images qui s'adaptent aux appareils selon les différentes tailles d'écran, résolutions et autres caractéristiques de ce type — et examiner les outils fournis par HTML pour faciliter leur mise en œuvre. Les images adaptatives ne sont qu'une partie (elles préparent le terrain) de la conception de sites web adaptatifs, sujet sur lequel vous en apprendrez beaucoup plus dans un prochain module au sujet des CSS.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Vous devriez connaître
        <a href="/fr/docs/Learn/HTML/Introduction_to_HTML"
          >les fondamentaux de HTML</a
        >
        et
        <a
          href="/fr/docs/conflicting/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          >comment ajouter des images statiques à une page web</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs :</th>
      <td>
        Apprendre comment utiliser des fonctionnalités comme
        <a href="/fr/docs/Web/HTML/Element/Img#attr-srcset"
          ><code>srcset</code></a
        >
        et l'élément
        <a href="/fr/docs/Web/HTML/Element/picture"
          ><code>&#x3C;picture></code></a
        >
        pour implémenter des solutions d'images adaptatives sur les sites web.
      </td>
    </tr>
  </tbody>
</table>

## Pourquoi des images adaptatives ?

Quel problème essayons-nous de résoudre avec des images adaptatives ? Examinons un scénario typique. Un site web classique a peut-être une image d'en-tête pour flatter le regard des visiteurs, plus peut-être quelques images de contenu plus loin. Imaginons que vous souhaitez que l'image d'en-tête couvre toute la largeur de l'en-tête et que l'image de contenu s'insère quelque part à l'intérieur de la colonne de contenu. Voici un exemple simple :

![Cet exemple de site est montré tel qu'il s'affiche sur un écran large - ici la première image s'affiche bien, et comme elle est suffisamment grande on voit le détail de l'image (promeneurs) en son centre](picture-element-wide.png)

Cela fonctionne bien sur un appareil avec un grand écran, comme un portable ou un ordinateur de bureau (vous pouvez [voir cet exemple en direct](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) et trouver son [code source](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/not-responsive.html) sur GitHub). Nous ne nous attarderons pas sur les CSS, excepté pour préciser ceci :

- Le contenu du corps a été fixé à une largeur maximale de 1200 pixels — dans les fenêtres de largeur supérieure, il s'affiche sur 1200 pixels et se centre dans l'espace disponible. Dans celles de largeur inférieure, le contenu occupe 100 % de la largeur de la vue.
- L'image d'en-tête est définie de sorte que son milieu soit toujours au centre de l'en-tête, quelle que soit sa largeur. Ainsi, si le site est regardé sur un écran moins large, le détail important au centre de l'image (les gens) peut toujours être vu, et l'excès est perdu de part et d'autre. L'image a une hauteur de 200 pixels.
- Les images de contenu sont définies de sorte que si l'élément corps devient plus petit que l'image, les images se contractent pour rester toujours à l'intérieur du corps sans jamais déborder.

Tout cela c'est très bien, mais le problème apparaît lorsque vous commencez à regarder le site sur un écran étroit — l'en-tête semble correct, mais commence à prendre beaucoup de hauteur pour un mobile, et la première image de contenu d'autre part n'est pas terrible — à cette taille, vous avez du mal à distinguer les personnes !

![Notre site d'exemple vu sur un écran étroit  la première image est réduite à telle point qu'il est difficile d'y voir les détails.](non-responsive-narrow.png)

Quand le site est vu sur un écran étroit, il serait préférable de montrer une version recadrée de l'image sur les parties importantes de la vue au lieu de faire voir des bâtiments, et peut-être quelque chose entre les deux pour un écran de largeur moyenne comme une tablette — ce problème relève de **décisions de nature artistique**.

De plus, il n'est pas nécessaire d'intégrer des images aussi volumineuses sur une page destinée à être affichée sur l'écran minuscule d'un mobile ; c'est le problème des **changements de résolution** — une image matricielle est définie sur un certain nombre de pixels de large et un certain nombre de pixels de haut ; comme on a pu le voir à propos des [graphiques vectoriels](/fr/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web), une image matricielle paraît pixelisée si elle est affichée plus grande que sa taille d'origine (alors qu'un graphique vectoriel ne l'est pas).

Et si elle est montrée significativement plus petite que sa taille d'origine, c'est un gaspillage de bande passante — les personnes utilisant des navigateurs mobiles en particulier ne veulent pas gaspiller leur bande passante en téléchargeant une grande image destinée à des ordinateurs de bureau, alors qu'une petite image ferait l'affaire pour leur appareil. La solution idéale serait d'avoir plusieurs résolutions disponibles et de servir des tailles appropriées selon le type d'appareil accédant au site web.

Pour compliquer encore plus les choses, certains appareils ont des écrans à haute résolution, écrans qui ont besoin d'images plus grandes que ce à quoi on pourrait s'attendre pour s'afficher correctement. Il s'agit pratiquement du même problème, mais dans un contexte légèrement différent.

Vous pouvez penser que des images vectorielles sont la solution à ces problèmes : elles le sont dans une certaine mesure — elles sont à la fois de petite taille et se mettent à l'échelle. Utilisez‑les partout où c'est possible. Mais elles ne conviennent pas à tous les types d'images — parfaites pour des graphiques simples, des motifs, des éléments d'interface, etc., il devient très compliqué de créer une image vectorielle avec le genre de détails que l'on trouve dans une photo, par exemple. Les formats matriciels comme JPEG sont plus adaptés au type d'images affiché dans l'exemple ci-dessus.

Ce type de problème n'existait pas quand le web a vu le jour, du début jusqu'au milieu des années 90 — à l'époque, les seuls appareils permettant de naviguer sur le web étaient les ordinateurs de bureau et les portables, de sorte que les ingénieurs et rédacteurs de spécifications pour les navigateurs ne pouvaient même pas imaginer l'existence de ces problèmes. Pour résoudre les problèmes indiqués ci-dessus, les techniques d'images adaptatives sont de mise en œuvre récente : elles offrent au navigateur plusieurs fichiers d'images, soit montrant tous la même chose mais avec un nombre de pixels différent (commutation de résolution), soit des images différentes selon l'espace alloué (décisions artistiques).

> **Note :** Toutes les nouvelles fonctionnalités présentées dans cet article — [`srcset`](/fr/docs/Web/HTML/Element/Img#attr-srcset)/[`sizes`](/fr/docs/Web/HTML/Element/Img#attr-sizes)/[`<picture>`](/fr/docs/Web/HTML/Element/picture) — sont toutes prises en charge dans les versions de navigateurs récemment publiées pour les ordinateurs de bureau et pour les mobiles (y compris le navigateur Edge de Microsoft, même si ce n'est pas le cas d'Internet Explorer).

## Comment créer des images adaptatives ?

Dans ce paragraphe, nous allons examiner les deux problèmes illustrés ci-dessus et montrer comment les résoudre à l'aide des fonctions d'images adaptatives du HTML. Notez que nous nous focaliserons sur l'élément [`<img>`](/fr/docs/Web/HTML/Element/Img) du HTML dans cette section, comme vous avez pu le voir dans la zone de contenu de l'exemple ci-dessus — l'image d'en-tête du site n'est là que pour la décoration, et donc implémenté en utilisant des images de fond du CSS. CSS a [sans doute de meilleurs outils](http://blog.cloudfour.com/responsive-images-101-part-8-css-images/) que le HTML pour la conception adaptative : nous en parlerons dans le module CSS à venir.

### Commutations de résolution : tailles différentes

Alors, quel est le problème à résoudre à l'aide des commutations de résolution ? Nous voulons afficher un contenu d'image identique, juste plus grand ou plus petit selon l'appareil — c'est la situation de la deuxième image du contenu de notre exemple précédent. L'élément standard [`<img>`](/fr/docs/Web/HTML/Element/Img) vous permet classiquement de ne faire pointer le navigateur que vers un seul fichier source :

```html
<img src="elva-fairy-800w.jpg" alt="Elva habillée en fée">
```

Mais il est possible d'utiliser deux nouveaux attributs — [`srcset`](/fr/docs/Web/HTML/Element/Img#attr-srcset) et [`sizes`](/fr/docs/Web/HTML/Element/Img#attr-sizes) — permettant de fournir plusieurs images source avec des indications pour permettre au navigateur de faire le bon choix. Vous trouverez un exemple de cela dans le fichier [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sur GitHub (voyez aussi le [code source](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/responsive.html)) :

```html
<img srcset="elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 600px) 480px,
            800px"
     src="elva-fairy-800w.jpg"
     alt="Elva dressed as a fairy">
```

Les attributs `srcset` et `sizes` paraissent complexes, mais ils ne sont pas difficiles à comprendre si vous les formatez comme indiqué ci-dessus, avec une partie différente de la valeur de l'attribut sur chaque ligne. Chaque valeur contient une liste séparée par des virgules et chaque partie de la liste est composée de trois sous-parties. Passons maintenant en revue leur contenu.

**`srcset`** définit l'ensemble des images offertes au choix du navigateur, et la taille de chaque image. Avant chaque virgule, nous avons écrit :

1.  un nom de **fichier image** (`elva-fairy-480w.jpg`),
2.  un espace,
3.  la **largeur intrinsèque en pixels** (`480w`) — notez l'utilisation de l'unité `w`, et non `px` comme vous auriez pu penser. C'est la taille réelle de l'image; qui peut être trouvée en examinant les propriétés du fichier image sur l'ordinateur (par exemple sur un Mac, sélectionnez l'image dans le Finder, puis appuyez sur

    <kbd>Cmd</kbd>

    \+

    <kbd>I</kbd>

    pour faire apparaître l'écran des infos).

**`sizes`** définit un ensemble de conditions pour le média (par ex. des largeurs d'écran) et indique quelle taille d'image serait la plus adaptée si certaines conditions sont satisfaites — ce sont les conditions dont nous avons parlé plus haut. Dans ce cas, nous écrivons avant chaque virgule :

1.  une **condition pour le média** (`(max-width:480px)`) — vous pourrez en savoir plus à ce propos dans l'[article sur les CSS](/fr/docs/Learn/CSS), mais pour le moment disons simplement que cette condition pour le média décrit un état possible de l'écran. Dans notre cas, nous disons « si la largeur de fenêtre est de 480 pixels ou moins »,
2.  une espace,
3.  **la largeur de la place** occupée par l'image si la condition pour le média est vraie (`440px`).

> **Note :** pour définir une largeur d'emplacement, vous pouvez indiquer une taille absolue (`px`, `em`) ou relative au viewport (`vw`), mais pas en pourcentage. Vous avez peut‑être noté que la dernière largeur d'emplacement ne comporte pas d'indication pour le média — c'est la valeur par défaut retenue quand aucune des conditions n'est vraie). Le navigateur ignore tout ce qui suit dès la première condition concordante ; donc soyez attentif à l'ordre de ces conditions pour le média.

Ainsi, une fois ces attributs en place, le navigateur va :

1.  noter la largeur du périphérique,
2.  vérifier quelle est la première condition vraie pour le média dans la liste des tailles,
3.  noter la largeur d'emplacement demandée par le média,
4.  charger l'image référencée dans la liste `srcset` qui est la plus proche de la taille choisie.

Et c'est tout ! Donc à ce stade, si un navigateur prenant en charge une largeur de vue de 480 px charge la page, la condition pour le média `(max-width: 480px)` sera vraie, donc une largeur d'emplacement de 440px sera choisie, donc le fichier `elva-fairy-480w.jpg` sera chargé, car sa largeur intrinsèque (`480w`) est celle qui est la plus proche de `440px`. L'image 800 px a une taille de 128 Ko sur disque alors que la version 480 px n'occupe que 63 Ko — une économie de 65Ko. Imaginez maintenant qu'il s'agisse d'une page avec beaucoup d'images. L'utilisation de cette technique peut permettre aux personnes naviguant sur mobile d'économiser beaucoup de bande passante.

> **Note :** lorsque vous testez cela avec un navigateur de bureau, si ce dernier échoue à charger l'image la plus étroite alors que vous avez réduit la largeur de la fenêtre au maximum, regardez la taille du <i lang="en">viewport</i> (dont vous pouvez avoir une approximation via l'instruction `document.querySelector("html").clientWidth` dans la console JavaScript). Selon les navigateurs, il existe différentes tailles minimales au-delà desquelles on ne pourra pas plus réduire la fenêtre (tailles minimales qui pourraient être plus larges qu'on ne le pense). Lorsque vous testez avec un navigateur mobile, vous pouvez utiliser les outils comme la page `about:debugging` de Firefox pour inspecter la page chargée sur le mobile à l'aide des outils de développement pour navigateur de bureau.
>
> Pour observer les images chargées, vous pouvez utiliser l'onglet [Moniteur réseau](/fr/docs/Tools/Network_Monitor) dans les outils de développement de Firefox.

Les navigateurs les plus anciens qui ne prennent pas en charge ces fonctionnalités les ignorent; poursuivent et chargent normalement l'image référencée dans l'attribut [`src`](/fr/docs/Web/HTML/Element/Img#attr-src).

> **Note :** dans l'élément [`<head>`](/fr/docs/Web/HTML/Element/head) du document, vous trouvez la ligne `<meta name="viewport" content="width=device-width">` : ceci force les navigateurs mobiles de prendre la largeur réelle de leur vue pour charger des pages web (certains navigateurs mobiles mentent à propos de la largeur de leur vue, et à la place chargent des pages pour une vue plus large, puis rétrécissent la page chargée, ce qui n'est pas vraiment une aide pour les pages adaptatives ou pour la conception).

### Commutation de résolution : même taille, résolutions différentes

Si votre ordinateur prend en charge plusieurs résolutions d'affichage, mais que tout le monde voit l'image avec la même taille effective sur l'écran, vous pouvez permettre au navigateur de choisir une image de résolution appropriée en utilisant `srcset` avec `x-descriptors` et sans `sizes` — une syntaxe un peu plus facile en quelque sorte ! Vous pouvez trouver un exemple de ce à quoi cela ressemble dans [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) (voir aussi le [code source](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)) :

```html
<img srcset="elva-fairy-320w.jpg,
             elva-fairy-480w.jpg 1.5x,
             elva-fairy-640w.jpg 2x"
     src="elva-fairy-640w.jpg" alt="Elva habillée en fée">
```

![Une photo d'une petite fille habillée en fée avec un filtre appliqué à l'image pour obtenir l'effet d'une vieille photo.](resolution-example.png)Dans cet exemple, le CSS suivant est appliqué à l'image de façon à ce qu'elle ait une largeur de 320 pixels à l'écran (également nommée pixels CSS) :

```css
img {
  width: 320px;
}
```

Dans ce cas, `sizes` n'est pas nécessaire — le navigateur détermine simplement la résolution d'affichage de l'écran et montre l'image la plus appropriée référencée dans `srcset`. Donc si le dispositif accédant à la page a un affichage standard/basse résolution, avec un pixel de dispositif représentant chaque pixel CSS, l'image `elva-fairy-320w.jpg` sera chargée (le 1x est implicite, donc vous n'avez pas besoin de l'inclure.) Si le dispositif a une haute résolution de deux pixels de dispositif par pixel CSS ou plus, l'image `elva‑fairy-640w.jpg` sera chargée. L'image 640px a une taille de 93 Ko, alors que l'image 320 px n'a qu'une taille de 39 Ko.

### Décision de nature artistique

Pour résumer, le problème des **décisions de nature artistique** réside dans le choix des modifications à apporter à l'image selon les diverses tailles d'affichage. Par exemple, si un instantané d'un grand plan paysager avec une personne au milieu, correctement affiché sur un site web avec le navigateur d'un ordinateur de bureau, est rétréci lorsque ce même site est visionné sur un navigateur de mobile, cet instantané risque d'avoir mauvaise mine, car la personne sera vraiment minuscule et difficile à voir. Il serait probablement préférable de montrer sur un mobile une image portrait plus petite d'un zoom sur la personne. L'élément [`<picture>`](/fr/docs/Web/HTML/Element/picture) nous permet d'implémenter ce type de solution.

Revenons à notre exemple initial du fichier [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html). Cette image nécessite d'opérer un choix de nature artistique :

```html
<img src="elva-800w.jpg" alt="Chris debout tenant sa fille Elva dans ses bras">
```

Arrangeons cela avec [`<picture>`](/fr/docs/Web/HTML/Element/picture)} ! Comme pour `<vidéo>` et `<audio>`, l'élément `<picture>` est une enveloppe conteneur de plusieurs éléments [`<source>`](/fr/docs/Web/HTML/Element/Source)} ; ces éléments indiquent plusieurs sources différentes entre lesquelles le navigateur peut choisir ; ils sont suivis du très important élément [`<img>`](/fr/docs/Web/HTML/Element/Img)}. Le code dans [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) ressemblera à :

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
  <source media="(min-width: 800px)" srcset="elva-800w.jpg">
  <img src="elva-800w.jpg" alt="Chris debout tenant sa fille Elva dans ses bras">
</picture>
```

- Les éléments `<source>` incluent un attribut `media` qui contient une condition pour le média — comme avec le premier exemple `srcset`, ces conditions sont testées pour décider de l'image à montrer — le premier qui renvoie `true` sera affiché. Dans notre cas, si la largeur de la fenêtre est de 799 px ou moins, l'image du premier élément `<source>` sera affichée. Si la largeur de la fenêtre est de 800 px plus, ce sera la deuxième.
- Les attributs `srcset` contiennent le chemin vers l'image à afficher. Noter que comme avec `<img>` plus haut, `<source>` peut prendre plusieurs attributs `srcset` référençant plusieurs images, ainsi qu'un attribut `sizes` également. Ainsi, non seulement vous pouvez offrir plusieurs images par l'intermédiaire d'un élément `<picture>`, mais aussi offrir plusieurs résolutions pour chacune d'entre elles. En réalité, vous ne ferez pas ce type de montage très souvent.
- Dans tous les cas, vous devez fournir un élément `<img>`, avec `src` et `alt`, juste avant `</picture>`, sinon aucune image n'apparaîtra. Cet élément ménage un cas par défaut appliqué si aucune des conditions de média ne renvoie vrai (vous pouvez réellement enlever le deuxième élément `<source>` dans cet exemple), et une solution de repli pour les navigateurs qui ne prennent pas en charge l'élément `<picture>`.

Ce code nous permet d'afficher une image adaptée à la fois sur un écran large et sur un écran étroit, comme montré ci‑dessous :

![Notre exemple vu sur un écran assez large : la première image est OK et on voit le détail au centre.](picture-element-wide.png)![Notre exemple vu sur un écran étroit où l'élément picture permet de passer la première image à une image en portrait, plus utile sur un écran étroit.](picture-element-narrow.png)

> **Note :** vous ne devez utiliser l'attribut `media` qu'avec un scénario de décision de nature artistique ; quand vous utilisez `media`, ne mettez pas de conditions pour le média avec l'attribut `sizes.`

### Pourquoi ne peut-on pas réaliser cela avec le CSS ou du JavaScript ?

Lorsque le navigateur commence à charger une page, il commence à télécharger (précharger) toutes les images avant que l'analyseur principal n'ait commencé à charger et à interpréter le CSS et le JavaScript de la page. Cette technique est utile, car elle permet de réduire de 20 % en moyenne le temps de chargement des pages. Cependant, elle n'est d'aucune aide pour les images adaptatives, d'où la nécessité de mettre en œuvre des solutions comme `srcset`. Vous ne pourriez pas, par exemple, charger l'élément [`<img>`](/fr/docs/Web/HTML/Element/Img)}, puis détecter la largeur de fenêtre avec JavaScript et changer dynamiquement l'image source pour une image plus petite si désiré. À ce moment-là, l'image originale aurait déjà été chargée, et vous chargeriez en plus la petite image, ce qui est encore pire en termes d'image adaptative.

### Utilisez largement les formats d'image modernes

Il existe plusieurs nouveaux formats d'image très intéressants (comme WebP et JPEG-2000) qui sont à la fois de taille réduite et de haute qualité. Toutefois, la prise en charge par les navigateurs est ponctuelle.

`<picture>` nous permet de servir encore les plus vieux navigateurs. Vous pouvez indiquer le type MIME dans les attributs `type` de façon à ce que le navigateur puisse immédiatement rejeter les types de fichiers non pris en charge :

```html
<picture>
  <source type="image/svg+xml" srcset="pyramid.svg">
  <source type="image/webp" srcset="pyramid.webp">
  <img src="pyramid.png" alt="Pyramide régulière constituée de quatre triangles équilatéraux">
</picture>
```

- N'utilisez pas l'attribut `media`, sauf à devoir prendre une décision de nature artistique.
- Dans un élément `<source>`, vous ne pouvez vous référer qu'à des images du type déclaré avec `type`.
- Comme précédemment, il n'y a pas d'inconvénient à utiliser des listes avec une virgule comme séparateur avec `srcset` et `sizes`, selon les besoins.

## Testez vos compétences !

Et vous voici à la fin de cet article, mais saurez-vous vous rappeler les informations les plus importantes ? Vous pourrez trouver une évaluation détaillée pour tester ces compétences à la fin du module : voir [Créer une page de présentation de Mozilla](/fr/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page).

## Résumé

Voilà notre paquet‑cadeau pour des images adaptatives — nous espérons que ces nouvelles techniques vous plaisent. Résumons, nous vous avons exposé deux méthodes distinctes pour résoudre ce problème :

- **les décisions de nature artistique** : cette méthode consiste à servir des images recadrées selon les diverses mises en page — par exemple, une image paysagère offrant toute la scène pour une mise en page destinée aux ordinateurs de bureau et une image portrait montrant le sujet principal zoomé de près pour une mise en page destinée aux mobiles. On résout alors ce problème avec [`<picture>`](/fr/docs/Web/HTML/Element/picture).
- **la commutation de résolution** : cette méthode consiste à servir des images issues de fichiers plus petits pour les périphériques à petit écran, car ils n'ont que faire des grosses images prévues pour les écrans d'ordinateurs de bureau — et en plus, en option, adapter la résolution de l'image aux écrans de faible ou grande densité. On résout ce problème avec l'utilisation de [graphiques vectoriels](/fr/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) (images SVG) ainsi qu'à l'aide des attributs [`srcset`](/fr/docs/Web/HTML/Element/Img#attr-srcset) et [`sizes`](/fr/docs/Web/HTML/Element/Img#attr-sizes).

Cet article est aussi la conclusion de l'ensemble du module [Multimedia et intégration](/fr/docs/Learn/HTML/Multimedia_and_embedding) ! Avant de passer à autre chose, il vous reste à essayer notre évaluation multimédia et à voir comment vous vous en sortez. Amusez-vous bien.

## Voir aussi

- [L'excellente introduction aux images adaptatives de Jason Grigsby](http://blog.cloudfour.com/responsive-images-101-definitions)
- [Images adaptatives : si vous changez juste de résolution, utilisez `srcset`](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — comporte plus d'explications sur la façon dont le navigateur retravaille l'image à utiliser
- [`<img>`](/fr/docs/Web/HTML/Element/Img)
- [`<picture>`](/fr/docs/Web/HTML/Element/picture)
- [`<source>`](/fr/docs/Web/HTML/Element/Source)

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}

## Dans ce module

- [Images en HTML](/fr/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Contenus audio et video](/fr/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [De `<object>` à `<iframe>` — autres techniques d'intégration](/fr/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
- [Ajout de graphiques vectoriels dans le web](/fr/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
- [Écran d'accueil Mozilla](/fr/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
