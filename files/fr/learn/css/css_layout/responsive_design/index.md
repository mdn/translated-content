---
title: Responsive design
slug: Learn/CSS/CSS_layout/Responsive_Design
tags:
  - Images
  - Media Queries
  - RWD
  - Responsive web design
  - Typographie
  - flexbox
  - grid
  - grille fluide
translation_of: Learn/CSS/CSS_layout/Responsive_Design
original_slug: Apprendre/CSS/CSS_layout/Responsive_Design
---
{{learnsidebar}}{{PreviousMenuNext("Apprendre/CSS/CSS_layout/Multiple-column_Layout", "Apprendre/CSS/CSS_layout/Media_queries", "Apprendre/CSS/CSS_layout")}}

Aux débuts de la conception Web, les pages étaient construites pour cibler une taille d'écran particulière. Si l'utilisateur avait un écran plus grand ou plus petit que celui du concepteur, les résultats attendus pouvaient aller de barres de défilement indésirables, à des longueurs de lignes trop longues, et à une mauvaise utilisation de l'espace. À mesure que des tailles d'écran plus variées devenaient disponibles, le concept de _responsive web design_ (RWD) est apparu, un ensemble de pratiques qui permet aux pages Web de modifier leur disposition et leur apparence pour s'adapter à différentes largeurs d'écran, résolutions, etc. C'est une idée qui a changé notre façon de concevoir pour un web multi-périphériques, et dans cet article nous vous aiderons à comprendre les principales techniques que vous devez connaître pour la maîtriser.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        Les bases du HTML (étudier
        <a href="/fr/docs/Apprendre/HTML/Introduction_à_HTML"
          >Introduction au HTML</a
        >), et une idée du fonctionnement du CSS (édutier
        <a href="/fr/docs/Learn/CSS/First_steps">Premiers pas en CSS</a> et
        <a href="/fr/docs/Apprendre/CSS/Building_blocks">Blocs de base en CSS</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>
        Comprendre les concepts fondamentaux et l'histoire du responsive design.
      </td>
    </tr>
  </tbody>
</table>

## Historique de la mise en page des sites Web

A une époque, vous aviez deux options pour concevoir un site Web :

- Vous pourriez créer un _site liquide_, qui s'étirerait pour remplir la fenêtre du navigateur
- ou un site _à largeur fixe_, qui aurait une taille fixe en pixels.

Ces deux approches donnaient lieu à un site Web qui avait fière allure sur l'écran de la personne qui le concevait ! Les site liquides avaient pour résultat un design écrasé sur les petits écrans (comme on le voit ci-dessous) et des longueurs de lignes illisibles sur les plus grands.

![Une mise en page avec deux colonnes écrasées dans une fenêtre de taille mobile.](mdn-rwd-liquid.png)

> **Note :** Voir cette simple mise en page "liquide" : [exemple](https://mdn.github.io/css-examples/learn/rwd/liquid-width.html), [code source](https://github.com/mdn/css-examples/blob/master/learn/rwd/liquid-width.html). Lorsque vous regardez l'exemple, faites glisser la fenêtre de votre navigateur vers l'intérieur et vers l'extérieur pour voir comment cela se présente en fonction des différentes tailles.

Les sites à largeur fixe risquaient d'avoir une barre de défilement horizontale sur les écrans plus petits que la largeur du site (comme on le voit ci-dessous), et beaucoup d'espace blanc sur les bords sur les écrans plus grands.

![Une mise en page avec une barre de défilement horizontale dans une fenêtre de visualisation mobile.](mdn-rwd-fixed.png)

> **Note :** Voir cette simple mise en page à largeur fixe : [exemple](https://mdn.github.io/css-examples/learn/rwd/fixed-width.html), [code source](https://github.com/mdn/css-examples/blob/master/learn/rwd/fixed-width.html). Là encore, observez le résultat lorsque vous modifiez la taille de la fenêtre du navigateur.

> **Note :** Les captures d'écran ci-dessus sont réalisées à l'aide de la [Vue adaptative](/fr/docs/Outils/Vue_adaptative) de la boîte à outils de Firefox.

Lorsque le web mobile a commencé à devenir une réalité avec les premiers téléphones à fonctions, les entreprises qui souhaitaient adopter le mobile créaient généralement une version mobile spéciale de leur site, avec une URL différente (souvent quelque chose comme m.example.com, ou example.mobi). Cela signifiait qu'il fallait développer deux versions distinctes du site et les tenir à jour.

De plus, ces sites mobiles offraient souvent une expérience très réduite. Les appareils mobiles devenant plus puissants et capables d'afficher des sites Web complets, cela était frustrant pour les utilisateurs mobiles qui se retrouvaient coincés dans la version mobile du site et incapables d'accéder à l'information qu'ils savaient disponible sur la version de bureau complète du site.

## Mise en page flexible avant le responsive design

Un certain nombre d'approches ont été développées pour tenter de résoudre les inconvénients des méthodes de construction de sites Web liquide et à largeur fixe. En 2004, Cameron Adams a écrit un article intitulé [Mise en page en fonction de la résolution](http://www.themaninblue.com/writing/perspective/2004/09/21/), décrivant une méthode de création de design pouvant s'adapter à différentes résolutions d'écran. Cette approche nécessitait l'utilisation de JavaScript pour détecter la résolution d'écran et charger la bonne CSS.

Zoe Mickley Gillenwater a grandement contribué au travail de description et de formalisation des différentes façons de créer des sites flexibles, en essayant de trouver un juste milieu entre remplir l'écran ou être complètement fixe en taille.

## Responsive design

Le terme de responsive design a été [inventé par Ethan Marcotte en 2010](https://alistapart.com/article/responsive-web-design/), et décrit la combinaison de trois techniques.

1.  La première était l'idée des grilles fluides, une idée déjà explorée par Gillenwater, que l'on peut lire dans l'article de Marcotte, [Fluid Grids](https://alistapart.com/article/fluidgrids/) (publié en 2009 sur A List Apart).
2.  La deuxième technique était l'idée [d'images fluides](http://unstoppablerobotninja.com/entry/fluid-images). En utilisant une technique très simple de réglage de la propriété `max-width` à `100%`,  les images deviennent plus petites si leur colonne de contenu devient plus étroite que la taille intrinsèque de l'image, mais ne deviennent jamais plus grandes. Cela permet à une image de se réduire pour s'intégrer dans une colonne de taille flexible, plutôt que de la déborder, mais de ne pas s'agrandir et de devenir pixélisée si la colonne devient plus large que l'image.
3.  Le troisième élément clé était la [media query](/fr/docs/Web/CSS/Media_Queries). Les Media Queries permettent de changer le type de mise en page que Cameron Adams avait précédemment exploré en utilisant JavaScript, en utilisant uniquement CSS. Au lieu d'avoir une seule mise en page pour toutes les tailles d'écran, la mise en page pouvait être modifiée. Les barres latérales pouvaient être repositionnées pour l'écran plus petit, ou une autre navigation pouvait être affichée.

Il est important de comprendre que **le responsive web design n'est pas une technologie à part** - c'est un terme utilisé pour décrire une approche de la conception web, ou un ensemble de bonnes pratiques, utilisées pour créer une mise en page qui peut correspondre à l'appareil utilisé pour visualiser le contenu. Dans la recherche initiale de Marcotte, cela impliquait des grilles flexibles (en utilisant des flotteurs) et des média queries, mais depuis la rédaction de cet article, il y a presque 10 ans, le concept de responsive design est devenu la norme. Les méthodes modernes de mise en page CSS sont par nature responsives, et nous avons intégré de nouvelles choses à la plateforme Web pour faciliter la conception de sites responsives.

Le reste de cet article vous indiquera les différentes fonctionnalités de la plate-forme web que vous pourriez vouloir utiliser pour créer un site réactif.

## Media Queries

Le responsive design n'a pu voir le jour uniquement grâce aux média queries. La spécification de niveau 3 des média queries est devenue une Recommandation Candidate en 2009, ce qui signifie qu'elle a été jugée prête à être mise en œuvre dans les navigateurs. Les Media Queries nous permettent d'effectuer une série de tests (par exemple, si l'écran de l'utilisateur dépasse une certaine largeur, ou une certaine résolution) et d'appliquer le CSS de manière sélective pour donner à la page le style approprié aux besoins de l'utilisateur.

Par exemple, la média query suivante teste si la page Web actuelle est affichée comme média d'écran (donc pas un document à imprimer) et si la fenêtre de visualisation a au moins 800 pixels de large. Le CSS du sélecteur `.container` ne sera appliqué que si ces deux éléments sont vrais.

```css
@media screen and (min-width: 800px) {
  .container {
    margin: 1em 2em;
  }
}
```

Vous pouvez ajouter plusieurs medias queries dans une feuille de style, afin de modifier votre mise en page ou certaines de ses parties pour les adapter aux différentes tailles d'écran. Les endroits où une média query est introduite et où la mise en page est modifiée sont appelés points d'arrêt.

Une approche courante lors de l'utilisation de Media Queries consiste à créer une disposition à colonne unique simple pour les appareils à écran étroit (par exemple les téléphones portables), puis à vérifier si les écrans sont plus grands et à mettre en œuvre une disposition à colonnes multiples lorsque vous savez que vous avez suffisamment de largeur d'écran pour la prendre en charge. Ceci est souvent décrit comme la conception mobile en priorité.

Pour en savoir plus, consultez la documentation MDN pour les [Media Queries](/fr/docs/Web/CSS/Media_Queries).

## Grilles flexibles

Les sites responsives ne se contentent pas de changer leur mise en page entre les points de rupture, ils sont construits sur des grilles flexibles. Une grille flexible signifie que vous n'avez pas besoin de cibler toutes les tailles d'appareils possibles et de construire une mise en page parfaite au pixel près. Cette approche serait impossible étant donné le grand nombre de dispositifs de tailles différentes qui existent, et le fait que sur les ordinateurs de bureau au moins, les gens n'ont pas toujours la fenêtre de leur navigateur maximisée.

En utilisant une grille flexible, vous n'avez qu'à ajouter un point d'arrêt et à modifier le design au moment où le contenu commence à avoir une piètre apparence. Par exemple, si la longueur des lignes devient illisible à mesure que la taille de l'écran augmente, ou si une boîte se retrouve écrasée avec deux mots sur chaque ligne lorsqu'elle se rétrécit.

Aux débuts du responsive design, notre seule option pour réaliser la mise en page était d'utiliser [floats](/fr/docs/Apprendre/CSS/CSS_layout/Floats). Aux débuts du responsive design, notre seule option pour réaliser la mise en page était d'utiliser des flotteurs. Des mises en page flottantes flexibles ont été réalisées en donnant à chaque élément un pourcentage de largeur et en s'assurant que les totaux ne dépassent pas 100 % dans toute la mise en page. Dans sa publication originale sur les grilles fluides, Marcotte a détaillé une formule pour convertir en pourcentages une mise en page conçue à l'aide de pixels.

    target / context = result

Par exemple, si la taille de notre colonne cible est de 60 pixels et que le contexte (ou conteneur) dans lequel elle se trouve est de 960 pixels, nous divisons 60 par 960 pour obtenir une valeur que nous pouvons utiliser dans notre CSS, après avoir déplacé le point décimal de deux places vers la droite.

```css
.col {
  width: 6.25%; /* 60 / 960 = 0.0625 */
}
```

Cette approche se retrouve aujourd'hui à de nombreux endroits sur le Web, et elle est documentée dans notre article sur les [méthodes de mises en page traditionnelles](/fr/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods). Il est probable que vous rencontrerez des sites web utilisant cette approche dans votre travail, donc il est utile de la comprendre, même si vous ne construiriez pas un site moderne en utilisant une grille flexible basée sur le flottement.

L'exemple suivant montre une conception simple et responsive en utilisant des médias queries et une grille flexible. Sur des écrans étroits, la mise en page affiche les boîtes entassées les unes sur les autres :



![A mobile view of the layout with boxes stacked on top of each other vertically.](mdn-rwd-mobile.png)

Sur des écrans plus larges, ils se positionnent sur deux colonnes :

![A desktop view of a layout with two columns.](mdn-rwd-desktop.png)

> **Note :** Vous pouvez trouver l'[exemple en direct](https://mdn.github.io/css-examples/learn/rwd/float-based-rwd.html) et le [code source](https://github.com/mdn/css-examples/blob/master/learn/rwd/float-based-rwd.html) pour cet exemple sur GitHub.

## Techniques modernes de mise en page

Les méthodes de mise en page modernes telles que [Multiple-column layout](/fr/docs/Learn/CSS/CSS_layout/Multiple-column_Layout), [Flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox), et [Grid](/fr/docs/Learn/CSS/CSS_layout/Grids) sont responsives par défaut. Elles partent toutes du principe que vous essayez de créer une grille flexible et vous donnent des moyens plus faciles de le faire.

### Multicol

La plus ancienne de ces méthodes de mise en page est multicol — lorsque vous spécifiez un `column-count`, cela indique en combien de colonnes vous voulez que votre contenu soit divisé. Le navigateur calcule alors la taille de celles-ci, une taille qui changera en fonction de la taille de l'écran.

```css
.container {
  column-count: 3;
}
```

Si vous spécifiez plutôt une largeur de colonne, vous spécifiez une largeur minimale. Le navigateur créera autant de colonnes de cette largeur qu'il en faudra pour que le conteneur soit parfaitement adapté, puis répartira l'espace restant entre toutes les colonnes. Par conséquent, le nombre de colonnes changera en fonction de l'espace disponible.

```css
.container {
  column-width: 10em;
}
```

### Flexbox

Dans Flexbox, les articles flexibles se rétréciront et répartiront l'espace entre les articles en fonction de l'espace dans leur conteneur, en fonction de leur comportement initial. En modifiant les valeurs de `flex-grow` et `flex-shrink`  vous pouvez indiquer comment vous souhaitez que les articles se comportent lorsqu'ils rencontrent plus ou moins d'espace autour d'eux.

Dans l'exemple ci-dessous, les éléments flex prendront chacun autant d'espace dans le conteneur flex, en utilisant la notation `flex: 1` comme décrit dans la rubrique de mise en page [Flexbox: Taille modulable des éléments flex](/fr/docs/Apprendre/CSS/CSS_layout/Flexbox#Taille_modulable_des_éléments_flex).

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

> **Note :** À titre d'exemple, nous avons reconstruit la mise en page simple et réactive ci-dessus, en utilisant cette fois-ci la méthode flexbox. Vous pouvez voir comment nous n'avons plus besoin d'utiliser des pourcentages étranges pour calculer la taille des colonnes : [exemple](https://mdn.github.io/css-examples/learn/rwd/flex-based-rwd.html), [code source](https://github.com/mdn/css-examples/blob/master/learn/rwd/flex-based-rwd.html).

### CSS grid

Dans la mise en page en grille CSS, l'unité `fr` permet la répartition de l'espace disponible sur les différentes sections de la grille. L'exemple suivant crée un conteneur de grille avec trois rangées dont la taille est de `1fr`. Cela créera trois colonnes, chacune prenant une partie de l'espace disponible dans le conteneur. Vous pouvez en savoir plus sur cette approche pour créer une grille dans la rubrique Apprendre la mise en place en grille, dans la section [Trames adaptables avec l'unité "fr"](/fr/docs/Apprendre/CSS/CSS_layout/Grids#Trames_adaptables_avec_lunité_«_fr_»).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

> **Note :** La version à grille est encore plus simple puisque nous pouvons définir les colonnes sur le .wrapper : [exemple](https://mdn.github.io/css-examples/learn/rwd/grid-based-rwd.html), [code source](https://github.com/mdn/css-examples/blob/master/learn/rwd/grid-based-rwd.html).

## Images responsives

L'approche la plus simple pour les images responsive est celle décrite dans les premiers articles de Marcotte sur le design responsive. En gros, vous preniez une image qui était à la plus grande taille possible et vous la réduisiez. C'est encore une approche utilisée aujourd'hui, et dans la plupart des feuilles de style, vous trouverez le CSS suivant quelque part :

```css
img {
  max-width: 100%:
}
```

Cette approche présente des inconvénients évidents. L'image peut être affichée à une taille beaucoup plus petite que sa taille réelle, ce qui est un gaspillage de bande passante - un utilisateur mobile peut télécharger une image dont la taille est beaucoup plus grande que ce qu'il voit réellement dans la fenêtre du navigateur. De plus, il se peut que vous ne vouliez pas le même rapport hauteur/largeur de l'image sur le mobile que sur le bureau. Par exemple, il peut être agréable d'avoir une image carrée pour le mobile, mais de montrer la même image en format paysage sur le bureau. Ou, en tenant compte de la taille plus petite d'une image sur le mobile, vous pouvez vouloir montrer une image différente, qui est plus facile à comprendre sur un écran de petite taille. Ces choses ne peuvent pas être réalisées par une simple réduction de la taille d'une image.

Les images responsives, en utilisant l'élément {{htmlelement("picture")}}  et les attributs {{htmlelement("img")}} `srcset` et `sizes`  permettent de résoudre ces deux problèmes. Vous pouvez fournir plusieurs tailles ainsi que des " indices " (méta-données qui décrivent la taille de l'écran et la résolution pour lesquelles l'image est la mieux adaptée), et le navigateur choisira l'image la plus appropriée pour chaque dispositif, en s'assurant qu'un utilisateur téléchargera une taille d'image appropriée pour le dispositif qu'il utilise.

Vous pouvez également créer des images directes utilisées à différentes tailles, ce qui permet d'obtenir un recadrage différent ou une image complètement différente pour différentes tailles d'écran.

Vous pouvez trouver un [guide détaillé sur les Images Responsives dans la section Apprendre le HTML](/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) ici sur MDN.

## Typographie responsive

L'idée d'une typographie responsive est un élément du responsive design qui n'a pas été abordé dans les documents précédents. Elle décrit essentiellement la modification de la taille des polices de caractères dans les médias queries pour tenir compte d'un nombre plus ou moins important de pixels à l'écran.

Dans cet exemple, nous voulons fixer notre titre de niveau 1 à `4rem`, ce qui signifie qu'il sera quatre fois plus gros que notre police de base. C'est un très grand titre ! Nous voulons que ce titre géant ne soit utilisé que sur des écrans de grande taille, c'est pourquoi nous créons d'abord un titre plus petit, puis nous utilisons des média queries pour le remplacer par un titre de plus grande taille si nous savons que l'utilisateur a une taille d'écran d'au moins `1200px`.

```css
html {
  font-size: 1em;
}

h1 {
  font-size: 2rem;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 4rem;
  }
}
```

Nous avons modifié notre exemple de grilles réactives ci-dessus pour inclure également les type responsives en utilisant la méthode décrite. Vous pouvez voir comment le titre change de taille au fur et à mesure que la mise en page passe à la version à deux colonnes.

Sur un mobile, le titre est plus petit :

![A stacked layout with a small heading size.](mdn-rwd-font-mobile.png)

Sur le bureau cependant, nous voyons la plus grande taille de titre :

![A two column layout with a large heading.](mdn-rwd-font-desktop.png)

> **Note :** Voir cet exemple en action : [exemple](https://mdn.github.io/css-examples/learn/rwd/type-rwd.html), [code source](https://github.com/mdn/css-examples/blob/master/learn/rwd/type-rwd.html).

Comme le montre cette approche de la typographie, vous n'avez pas besoin de limiter les requêtes des médias à la seule modification de la mise en page. Elles peuvent être utilisées pour modifier n'importe quel élément afin de le rendre plus utilisable ou plus attrayant à des tailles d'écran différentes.

### Utilisation d'unités de visualisation pour une typographie réactive

Une approche intéressante consiste à utiliser l'unité viewport `vw` pour permettre une typographie réactive. `1vw` est égal à un pour cent de la largeur de la fenêtre, ce qui signifie que si vous définissez la taille de votre police à l'aide de `vw`, elle sera toujours liée à la taille de la fenêtre.

```css
h1 {
  font-size: 6vw;
}
```

Le problème est que l'utilisateur perd la possibilité de zoomer sur un ensemble de texte en utilisant l'unité `vw`, car ce texte est toujours lié à la taille de la fenêtre de visualisation. **Par conséquent, vous ne devez jamais définir un texte en utilisant uniquement les unités de viewport.**

Il existe une solution, et elle consiste à utiliser [`calc()`](/fr/docs/Web/CSS/calc). Si vous ajoutez l'unité `vw` à un ensemble de valeurs utilisant une taille fixe telle que `em`s ou `rem`s, le texte sera toujours zoomable. En fait, l'unité `vw` s'ajoute à cette valeur zoomée :

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Cela signifie que nous n'avons besoin de spécifier la taille de la police pour l'en-tête qu'une seule fois, plutôt que de la configurer pour les mobiles et de la redéfinir dans les requêtes des médias. La police augmente ensuite progressivement à mesure que l'on augmente la taille de la zone d'affichage.

> **Note :** Voir un exemple de cela en action : [exemple](https://mdn.github.io/css-examples/learn/rwd/type-vw.html), [code source](https://github.com/mdn/css-examples/blob/master/learn/rwd/type-vw.html).

## Le méta-tag du viewport

Si vous regardez le code source d'une page HTML responsive, vous verrez généralement la balise suivante {{htmlelement("meta")}} dans la section `<head>` du document.

```html
<meta name="viewport" content="width=device-width,initial-scale=1">
```

Cette balise meta dit aux navigateurs mobiles qu'ils doivent ajuster la largeur de la fenêtre à la largeur de l'écran de l'appareil, et mettre l'échelle du document à 100% de sa taille prévue, affichant le document à la taille optimisée pour les mobiles que vous vouliez.

Pourquoi est-ce nécessaire? Parce que les navigateurs mobiles ont tendance à mentir à propos de leur taille de fenêtre.

Cette balise meta existe car lorsque l'Iphone original fut lancé et que les gens commencèrent à regarder des sites web sur un petit écran de téléphone, la plupart des sites n'étaient pas optimisés pour les mobiles. Le navigateur mobile définissait donc la largeur de la fenêtre d'affichage à 960 pixels, affichait la page à cette largeur et affichait le résultat sous la forme d'une version zoomée de la disposition du bureau. Les autres navigateurs mobiles (comme sur Google Android) faisaient la même chose. Les utilisateurs pouvaient zoomer et parcourir le site Web pour voir les éléments qui les intéressaient, mais l'affichage était mauvais. Vous le verrez toujours aujourd'hui si vous avez le malheur de tomber sur un site qui n'est pas responsive.

Le problème est que votre responsive design avec des points de coupure et des media queries ne fonctionnera pas comme prévu sur les navigateurs mobiles. Si vous avez une disposition pour écran étroit qui démarre à une largeur de fenêtre de 480 pixels ou moins, et que la fenêtre est définie à 960 pixels, vous ne verrez jamais votre disposition pour écran étroit sur mobile. En définissant `width = device-width`, vous remplacez la largeur par défaut d'Apple de `width = 960px` par la largeur réelle de l'appareil, afin que vos requêtes multimédias fonctionnent comme prévu.

**Vous devriez donc toujours inclure la ligne HTML ci-dessus dans la tête de vos documents.**

Il existe d'autres paramètres que vous pouvez utiliser avec la balise meta viewport, mais en général, la ligne ci-dessus est celle que vous utiliserez.

- `initial-scale`: Définit le zoom initial de la page, que nous définissons à 1.
- `height`: Definit une hauteur spécifique pour la fenêtre.
- `minimum-scale`: Définit le niveau minimal de zoom
- `maximum-scale`: Définit le niveau maximal de zoom.
- `user-scalable`: Empêche le zoom si défini à `no`.

Vous devriez éviter d'utiliser `minimum-scale`, `maximum-scale`, et en particulier la définition de `user-scalable` sur `no`. Les utilisateurs devraient être autorisés à zoomer autant ou aussi peu que nécessaire; éviter cela entraîne des problèmes d'accessibilité.

> **Note :** Il existe une règle @ CSS conçue pour remplacer la métabalise viewport — [@viewport](/fr/docs/Web/CSS/@viewport) — Cependant, son support par navigateur est médiocre. Il a été mis en œuvre dans Internet Explorer et Edge, mais une fois que Edgium (La version Edge basée sur Chromium) sera livré, il ne fera plus partie du navigateur Edge.

## Sommaire

Le responsive design fait référence à la conception d'un site ou d'une application qui répond à l'environnement dans lequel il est vu. Elle englobe un certain nombre de caractéristiques et de techniques CSS et HTML, et c'est essentiellement la façon dont nous construisons les sites web par défaut. Considérez les sites que vous visitez sur votre téléphone - il est probablement assez inhabituel de tomber sur un site dont la version de bureau est réduite, ou sur lequel vous devez faire défiler les pages pour trouver des choses. Cela s'explique par le fait que le web a adopté cette approche de design réactif.

Il est également devenu beaucoup plus facile de réaliser des responsives designs à l'aide des méthodes de mise en page que vous avez apprises dans ces leçons. Si vous êtes novice en matière de développement web, vous disposez aujourd'hui de beaucoup plus d'outils qu'aux premiers jours du responsive design. Il est donc utile de vérifier l'âge des documents que vous référencez. Si les articles historiques sont toujours utiles, l'utilisation moderne des CSS et du HTML facilite grandement la création de designs élégants et utiles, quel que soit le dispositif avec lequel votre visiteur consulte le site.

{{PreviousMenuNext("Apprendre/CSS/CSS_layout/Multiple-column_Layout", "Apprendre/CSS/CSS_layout/Media_queries", "Apprendre/CSS/CSS_layout")}}

## Dans ce module

- [Introduction à la mise en page en CSS](/fr/docs/Apprendre/CSS/CSS_layout/Introduction)
- [Cours normal](/fr/docs/Apprendre/CSS/CSS_layout/Normal_Flow)
- [Flexbox](/fr/docs/Apprendre/CSS/CSS_layout/Flexbox)
- [Grid](/fr/docs/Apprendre/CSS/CSS_layout/Grids)
- [Les boîtes flottantes](/fr/docs/Apprendre/CSS/CSS_layout/Floats)
- [Le positionnement](/fr/docs/Apprendre/CSS/CSS_layout/Le_positionnement)
- [Disposition sur plusieurs colonnes](/fr/docs/Apprendre/CSS/CSS_layout/Multiple-column_Layout)
- [Responsive design](/fr/docs/Apprendre/CSS/CSS_layout/Responsive_Design)
- [Guide du débutant pour les Medias Queries](/fr/docs/Apprendre/CSS/CSS_layout/Media_queries)
- [Méthodes de mises en page traditionnelles](/fr/docs/Apprendre/CSS/CSS_layout/Legacy_Layout_Methods)
- [Prise en charge des anciens navigateurs](/fr/docs/Apprendre/CSS/CSS_layout/Prise_en_charge_des_anciens_navigateurs)
- [Compréhension fondamentale de la mise en page](/fr/docs/Apprendre/CSS/CSS_layout/Fundamental_Layout_Comprehension)
