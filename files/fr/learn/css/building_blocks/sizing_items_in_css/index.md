---
title: Définir la taille des éléments en CSS
slug: Learn/CSS/Building_blocks/Sizing_items_in_CSS
translation_of: Learn/CSS/Building_blocks/Sizing_items_in_CSS
original_slug: Apprendre/CSS/Building_blocks/Sizing_items_in_CSS
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks")}}Dans les différentes leçons vues jusqu'à présent vous avez rencontré de nombreuses manières de dimensionner les éléments sur une page en utilisant CSS. Comprendre le dimensionnement des différentes caractéristiques de votre design est important. Cette leçon résumera les diverses méthodes pour appliquer une taille via CSS et définira également quelques termes au sujet du dimensionnement qui vous aideront dans le futur.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        <p>
          Maîtrise élémentaire de l'informatique,
          <a
            href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
            >suite logicielle de base installée</a
          >, compétences élémentaires pour
          <a
            href="/fr/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
            >travailler avec des fichiers</a
          >, connaissance de base du HTML (cf.
          <a href="/fr/docs/Learn/HTML/Introduction_to_HTML"
            >Introduction à HTML</a
          >), et une idée de
          <a href="/fr/docs/Learn/CSS/First_steps">Comment fonctionne CSS</a>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>Découvrir comment spécifier la taille des éléments en CSS.</td>
    </tr>
  </tbody>
</table>

## La taille naturelle ou intrinsèque des choses

Tous les éléments HTML ont une taille « naturelle », définie avant toute modification par CSS. Un exemple parlant est celui d'un élément image. Une image a une largeur et une hauteur définies dans le fichier image qu'elle incorpore dans la page. On parle d'une **taille intrinsèque** — qui provient de l'image elle-même.

Si vous placez une image dans une page sans modifier sa hauteur ni sa largeur (que ce soit à en utilisant un attribut sur la balise `<img>` ou avec CSS), cela l'affichera en utilisant sa taille intrinsèque. Ci-dessous nous avons l'exemple d'une image à laquelle nous avons ajouté une bordure afin de bien délimiter sa taille.

{{EmbedGHLiveSample("css-examples/learn/sizing/intrinsic-image.html", '100%', 600)}}

Un élément [`<div>`](/fr/docs/Web/HTML/Element/div) vide en revanche, n'a pas de taille en soi. Si vous ajouter une [`<div>`](/fr/docs/Web/HTML/Element/div) à votre HTML sans aucun contenu à l'intérieur, et que vous lui ajouter une bordure comme nous l'avons fait avec l'image ci-dessus, vous verrez une ligne s'afficher sur la page. Cette ligne résulte de la juxtaposition des bordures horizontales, car il n'y a aucun contenu entre les deux. De plus les bordures s'étendent sur toute la largeur disponible du conteneur, car il s'agit d'un élément de bloc. Un comportement avec lequel vous devriez déjà être familiarisé. Cet élément n'a pas de hauteur (ou plutôt pas de taille dans l'axe de bloc), car il n'y a pas de contenu à l'intérieur de celui-ci.

{{EmbedGHLiveSample("css-examples/learn/sizing/intrinsic-text.html", '100%', 500)}}

Dans l'exemple ci-dessus; essayez d'ajouter du texte à l'intérieur de l'élément vide. Les bordures contiennent maintenant ce texte, car la hauteur de l'élément est définie par son contenu. De plus, la taille de cette `<div>` dans l'axe de bloc provient maintenant de la taille du contenu. Là aussi il s'agit de la taille intrinsèque de l'élément — sa taille est définie par son contenu.

## Spécifier une taille

Nous pouvons bien entendu donner une taille spécifique aux éléments. Quand une taille est ainsi donnée à un élément (et que son contenu est adapté à cette taille), nous parlons de **taille extrinsèque**. Reprenons notre `<div>` de l'exemple précédent — nous pouvons lui donner une [`width`](/fr/docs/Web/CSS/width) spécifique et une [`height`](/fr/docs/Web/CSS/height) spécifique, l'élément a désormais une taille définie peu importe ce qui est placé à l'intérieur de celui-ci. Comme nous l'avons appris dans [notre précédente leçon sur le concept d'overflow,](/fr/docs/Learn/CSS/Building_blocks/Overflowing_content) une hauteur définie peut générer un débordement du contenu si celui-ci est plus important que l'espace alloué par son conteneur.

{{EmbedGHLiveSample("css-examples/learn/sizing/height.html", '100%', 600)}}

Du fait de ce comportement parfois inattendu, fixer la hauteur d'un élément avec une longueur ou en pourcentage est une pratique à utiliser avec parcimonie sur le web.

### Avec les pourcentages

De bien des manières, les pourcentages agissent de la même manière que les unités de longueur, et comme nous l'avons vu dans [la leçon sur les valeurs et unités en CSS](/fr/docs/Learn/CSS/Building_blocks/Values_and_units), ils peuvent souvent être utilisés de manière interchangeable avec les unités de longueur. Lorsque vous utilisez les pourcentages vous devez seulement être conscient de la valeur à laquelle se réfère le pourcentage. Si vous donnez à un bloc enfant une largeur définie en pourcentage, celui-ci correspond à un pourcentage de la largeur du conteneur parent.

{{EmbedGHLiveSample("css-examples/learn/sizing/percent-width.html", '100%', 600)}}

En effet, les pourcentages sont déterminés en fonction de la taille de l'élément parent. Si aucun pourcentage n'est spécifié, notre `<div>` prendra 100% de l'espace disponible (car il s'agit du comportement par défaut d'un élément de type bloc). En revanche si nous lui donnons une largeur en pourcentage, ce pourcentage fera référence à l'espace que la ` <div``> ` aurait normalement occupé dans l'élément parent.

### Marges et remplissage en pourcentages

Si vous définissez les `margins` (marges extérieures) et les `paddings` (marges intérieurs) avec des pourcentages, vous noterez un comportement inattendu. Dans l'exemple ci-dessous nous avons une boite. Nous avons défini la propriété [`margin`](/fr/docs/Web/CSS/margin) à 10% et la propriété [`padding`](/fr/docs/Web/CSS/padding) à 10% également. Les marges intérieures et extérieures sur le haut et le bas de la boite ont la même taille que les marges extérieures sur la gauche et la droite.

{{EmbedGHLiveSample("css-examples/learn/sizing/percent-mp.html", '100%', 700)}}

On pourrait s'attendre, par exemple, à ce que le pourcentage des marges supérieures et inférieures soit un pourcentage de la hauteur de l'élément, et que le pourcentage des marges gauche et droite soit un pourcentage de la largeur de l'élément. Or, ce n'est pas le cas !

Lorsque vous utilisez des marges et des remplissages définis en pourcentages, la valeur est calculée à partir de la **taille en ligne** — donc de la largeur lorsque vous travaillez dans un langage horizontal. Dans notre exemple, toutes les marges et tous les renforts représentent 10 % de la largeur. Cela signifie que vous pouvez avoir des marges et un remplissage de taille égale tout autour de la boîte. C'est un fait dont il faut se souvenir si vous utilisez les pourcentages de cette manière.

## Tailles min- et max-

En plus de donner aux choses une taille fixe, nous pouvons demander à CSS de donner à un élément une taille minimale ou maximale. Si vous avez une boîte qui pourrait contenir une quantité variable de contenu, et que vous voulez toujours qu'elle ait _au moins_ une certaine hauteur, vous pourriez lui attribuer la propriété [`min-height`](/fr/docs/Web/CSS/min-height). La boîte sera toujours, au minimum, de cette hauteur, mais deviendra plus grande s'il y a plus de contenu que la boîte que sa hauteur minimale.

Dans l'exemple ci-dessous, vous pouvez voir deux boîtes, toutes deux ayant une hauteur définie de 150 pixels. La boîte de gauche a une hauteur de 150 pixels ; la boîte de droite a un contenu qui a besoin de plus d'espace, et elle est donc devenue plus haute que 150 pixels.

{{EmbedGHLiveSample("css-examples/learn/sizing/min-height.html", '100%', 800)}}

C'est très utile pour traiter des quantités variables de contenu tout en évitant les débordements.

Une utilisation courante de [`max-width`](/fr/docs/Web/CSS/max-width) consiste à faire en sorte que les images soient réduites si l'espace est insuffisant pour les afficher à leur largeur intrinsèque, tout en s'assurant qu'elles ne deviennent pas plus grandes que cette largeur.

À titre d'exemple, si vous définissiez `width: 100%` sur une image, et que sa largeur intrinsèque était inférieure à son conteneur, l'image serait forcée de s'étirer et de s'agrandir, ce qui lui donnerait un aspect pixelisé. Si sa largeur intrinsèque était supérieure à celle de son conteneur, elle le déborderait. Aucun des deux cas n'est susceptible de correspondre à ce que vous souhaitez.

Si vous utilisez plutôt `max-width : 100%`, l'image est capable de devenir plus petite que sa taille intrinsèque, mais s'arrêtera à 100% de sa taille.

Dans l'exemple ci-dessous, nous avons utilisé trois fois la même image. La première image a reçu le `width: 100%` et se trouve dans un conteneur plus grand qu'elle, elle s'étire donc à la largeur du conteneur. La deuxième image a été dotée du `max-width : 100%` et ne s'étire donc pas pour remplir le conteneur. La troisième boîte contient à nouveau la même image, également avec `max-width : 100%` défini ; dans ce cas, vous pouvez voir comment elle a été réduite pour entrer dans le conteneur.

{{EmbedGHLiveSample("css-examples/learn/sizing/max-width.html", '100%', 800)}}

Cette technique est utilisée pour rendre les images _responsive_, de sorte que lorsqu'elles sont visualisées sur un appareil plus petit, elles sont réduites de manière appropriée. Vous ne devez cependant pas utiliser cette technique pour charger des images vraiment grandes et les réduire ensuite dans le navigateur. Les images doivent être correctement dimensionnées pour ne pas être plus grandes qu'elles ne doivent l'être pour la plus grande taille à laquelle elles sont affichées dans la conception. Le téléchargement d'images trop grandes ralentira votre site et peut coûter plus cher aux utilisateurs s'ils disposent d'une connexion limitée.

> **Note :** En savoir plus sur [les techniques d'images responsives](/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

## Unités de la fenêtre d'affichage

La fenêtre — la surface de la page montrée par le navigateur lorsqu'on navigue sur un site — a aussi des dimensions. Certaines unités CSS sont dédiées à la description des dimensions de la fenêtre — `vw` pour _viewport width_ (largeur de la fenêtre), et `vh` pour _viewport height_ (hauteur de la fenêtre). Grâce à ces unités vous pouvez dimensionner un objet en fonction de la fenêtre de l'utilisateur.

`1vh` correspond à 1% de la hauteur de la fenêtre, `1vw` à 1% sa largeur. Avec ces unités, on peut dimensionner des boîtes aussi bien que du texte. Dans l'exemple ci-dessous, la boîte a pour dimensions 20vh et 20vw. Elle contient la lettre `A`, de [`font-size`](/fr/docs/Web/CSS/font-size) 10vh.

{{EmbedGHLiveSample("css-examples/learn/sizing/vw-vh.html", '100%', 600)}}

Si vous changez les valeurs `vh` et `vw`, cela modifiera la taille du conteneur ou de la police ; changer la taille de la fenêtre modifiera également leurs tailles, car elles sont dimensionnées par rapport à la fenêtre de vue. Pour voir l'exemple changer lorsque vous modifiez la taille de la fenêtre, vous devrez charger l'exemple dans une nouvelle fenêtre de navigateur que vous pouvez redimensionner (car le `<iframe>` intégré qui contient l'exemple montré ci-dessus est sa fenêtre de vue). [Ouvrez l'exemple](https://mdn.github.io/css-examples/learn/sizing/vw-vh.html), redimensionnez la fenêtre du navigateur et observez ce qui se passe pour la taille de la boîte et du texte.

Dimensionner les objets en fonction de la fenêtre peut s'avérer utile. Par exemple, pour afficher la section principale en pleine page, il suffit de lui attribuer 100vh, cela poussera le reste du contenu sous la fenêtre ; le reste du contenu n'apparaîtra qu'en la faisant défiler.

## Testez vos compétences !

Nous avons abordé beaucoup de choses dans cet article, mais pouvez-vous vous souvenir des informations les plus importantes ? Vous pouvez trouver d'autres tests pour vérifier que vous avez retenu ces informations avant de passer à autre chose — voir [Tester vos compétences : Dimensionnement](/fr/docs/Learn/CSS/Building_blocks/Sizing_tasks).

## Résumé

Cette leçon a voulu vous sensibiliser aux difficultés principales qu'on rencontre dès qu'on veut donner une dimension aux objets sur le Web. Lorsque vous verrez [les dispositions en CSS](/fr/docs/Learn/CSS/CSS_layout), le dimensionnement deviendra crucial pour maîtriser les différents modes de disposition : autant en comprendre les concepts avant d'aller plus loin.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks")}}

## Dans ce module

1.  [Cascade et héritage](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
2.  [Sélecteurs CSS](/fr/docs/Learn/CSS/Building_blocks/Selectors)

    - [Sélecteurs de type, de classe et d'ID](/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [Sélecteurs d'attributs](/fr/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [Pseudo-classes et pseudo-éléments](/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Combinateurs](/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

3.  [Le modèle de boîte](/fr/docs/Learn/CSS/Building_blocks/The_box_model)
4.  [Arrière-plans et bordures](/fr/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
5.  [Gestion de différentes directions de texte](/fr/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
6.  [Débordements de contenu](/fr/docs/Learn/CSS/Building_blocks/Overflowing_content)
7.  [Valeurs et unités CSS](/fr/docs/Learn/CSS/Building_blocks/Values_and_units)
8.  [Définir la taille des éléments en CSS](/fr/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
9.  [Images, médias et éléments de formulaire](/fr/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
10. [Mise en page de tableaux](/fr/docs/Learn/CSS/Building_blocks/Styling_tables)
11. [Débogage de CSS](/fr/docs/Learn/CSS/Building_blocks/Debugging_CSS)
12. [Organiser votre CSS](/fr/docs/Learn/CSS/Building_blocks/Organizing)
