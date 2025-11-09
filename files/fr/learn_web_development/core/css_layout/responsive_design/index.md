---
title: Responsive design
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
original_slug: Learn/CSS/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 9b73bdea5458572f77a401596fef9a06ed8bba1b
---

{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}

La conception réactive, plus souvent appelée <i lang="en">responsive design</i> (ou RWD pour <i lang="en">responsive web design</i>) est une approche de la conception web visant à ce que les pages web s'affichent correctement pour toutes les tailles et résolution d'écran, tout en ayant une utilisabilité correcte. Il s'agit de concevoir un site ou une application web à destination de l'ensemble des appareils existants. Dans cet article, nous verrons certaines techniques liées au <i lang="en">responsive design</i>.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>Notions fondamentales de HTML (voir <a href="/fr/docs/Learn/HTML/Introduction_to_HTML">Introduction au HTML</a>), une idée générale du fonctionnement de CSS (voir <a href="/fr/docs/Learn/CSS/First_steps">Premiers pas en CSS</a> et <a href="/fr/docs/Learn/CSS/Building_blocks">Blocs de construction CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Comprendre les fonctionnalités CSS permettant d'implémenter une conception <i lang="en">responsive</i>.
      </td>
    </tr>
  </tbody>
</table>

## Un précurseur du <i lang="en">responsive design</i>&nbsp;: la conception mobile

Avant que le <i lang="en">responsive design</i> devienne l'approche standard pour avoir des sites web fonctionnels sur les différents types d'appareils, on pouvait parler de conception (adaptée au) mobile. L'objectif était principalement le même qu'avec le <i lang="en">responsive design</i>&nbsp;: s'assurer que les sites web fonctionnent sur les différents appareils, quelles que soient leurs caractéristiques physiques (taille d'écran, résolution), en ayant une disposition, du contenu (texte et média), et des performances correctes.

La différence entre les deux approches porte principalement sur les appareils visés et les technologies disponibles pour les solutions&nbsp;:

- Opposer ordinateur de bureau et appareil mobile n'est pas suffisant&nbsp;: il existe de nombreux types d'appareils (ordinateur de bureau, ordinateur portable, téléphone mobile, tablette, montre, etc.). Plutôt que de cibler quelques tailles d'écran en particulier, il faut concevoir les sites pour s'adapter aux tailles et résolutions les plus répandues, mais aussi pouvoir gérer les facteurs de forme inconnus.
- Les appareils mobiles avaient auparavant peu de puissance processeur/graphique et une bande passante faible. Certains ne disposaient pas de navigateur pour prendre en charge CSS voire HTML et il était donc usuel d'avoir une détection côté serveur pour déterminer le type d'appareil ou de navigateur avant de servir un site qui serait fonctionnel. Aujourd'hui, les appareils mobiles prennent en charge les mêmes technologies que les appareils de bureau et ces techniques de discrimination sont moins répandues.
  - Il est toujours nécessaire d'utiliser les techniques décrites dans cet article afin que les personnes utilisant un appareil mobile aient une expérience correcte, notamment pour tenir compte des contraintes liées à la batterie ou à la bande passante.
  - L'ergonomie doit aussi être réfléchie. Quelqu'un qui utilise un appareil mobile pour navigateur sur un site de réservation de voyage voudra peut-être simplement vérifier les horaires de train et les éventuels retard plutôt que de voir un globe en 3D avec le tracé des trajets. Cela peut être résolu avec des techniques de <i lang="en">responsive design</i>.
- Les technologies récentes sont plus adaptées pour des ergonomies réactives. Par exemple, [les techniques pour les images/média responsives](#images/média_responsive) permettent désormais de servir les médias pertinents en fonction des appareils sans avoir à recourir aux techniques de détection côté serveur.

## Introduction au <i lang="en">responsive design</i>

Par essence, HTML est <i lang="en">responsive</i>. Si on crée un page web contenant uniquement du HTML, sans CSS, et qu'on redimensionne la fenêtre, le navigateur adaptera automatiquement le texte et les passages à la ligne pour qu'il soit visible dans la zone d'affichage.

Bien que ce comportement par défaut puisse sembler suffisant, cela ne règle pas tous les problèmes. Si un texte a de longues lignes de texte, cela pourra être difficile à la lire sur un écran large. À l'inverse, si on réduit la largeur des lignes à l'aide de CSS (en créant des colonnes ou en ajoutant du remplissage), le site pourra avoir l'air étriqué et peu lisible sur un appareil mobile.

![Une disposition sur deux colonnes qui se retrouve comprimée sur une zone d'affichage mobile.](mdn-rwd-liquid.png)

Créer une page web qui n'est pas redimensionnable en fixant une largeur donnée ne fonctionne pas non plus, cela créera des barres de défilement sur les appareils plus étroits, et trop d'espace vide sur les écrans larges.

Le <i lang="en">responsive design</i> est une approche qui vise à répondre aux différents appareils et à permettre une adaptation automatique à l'écran, que le contenu soit consulté depuis une tablette, un téléphone, une télévision, ou une montre.

Le <i lang="en">responsive design</i> n'est pas une technologie donnée, il s'agit d'une approche conceptuelle. Ce terme est utilisé pour décrire un ensemble de bonnes pratiques pour créer une disposition qui peut s'adapter à tout appareil utilisé pour consulter le contenu.

L'expression <i lang="en">responsive design</i>, [créée par Ethan Marcotte en 2010](https://alistapart.com/article/responsive-web-design/), décrit l'utilisation de grilles fluides, d'images fluides et des requêtes média (<i lang="en">media queries</i>) afin de créer du contenu adaptatif. Cela est notamment exploré dans le livre [<i lang="en">Flexible Web Design</i>](http://flexiblewebbook.com/) écrit par Zoe Gillenwater.

Par le passé, il était recommandé d'utiliser `float` en CSS avec des requêtes médias pour créer différentes dispositions pour différentes proportions. Les images fluides étaient paramétrées pour ne pas dépasser la largeur de leur conteneur avec la propriété `max-width` fixée à `100%`. Les images fluides rétrécissent lorsque la colonne qui les contient devient plus étroite, mais ne s'agrandissent pas plus que leur taille intrinsèque quand la colonne est plus large. Cela permet de réduire une image afin que son contenu soit visible (plutôt que d'avoir un dépassement), sans devenir trop grande et pixelisée à l'inverse.

Les méthodes de disposition CSS plus récentes sont intrinsèquement adaptatives et de nombreuses fonctionnalités ont été ajoutées à la plateforme web depuis les écrits de Zoe Gillenwater et d'Ethan Marcotte et elles permettent de créer des sites <i lang="en">responsive</i> plus facilement.

Dans la suite de cet article, nous verrons les différentes fonctionnalités de la plateforme web qui vous permettront de créer un site <i lang="en">responsive</i>.

## Les requêtes média (<i lang="en>media queries</i>)

[Les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using) permettent d'effectuer différents tests (par exemple pour déterminer si l'écran utilisé dépasse une largeur ou une résolution donnée) et d'appliquer du CSS en fonction pour mettre en forme la page.

Dans l'exemple qui suit, la requête média teste si la page web est affichée sur un écran (plutôt que d'être imprimée) et si la largeur de la zone d'affichage est supérieure ou égale à `80rem`. Le fragment CSS pour le sélecteur `.container` s'appliquera uniquement si ces deux critères sont vérifiés.

```css
@media screen and (min-width: 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Il est possible d'ajouter plusieurs requêtes média dans une feuille de styles pour adapter tout ou partie de la disposition pour s'ajuster aux différentes tailles d'écran. Les valeurs des critères des différentes requêtes média qui changent la disposition du contenu sont aussi appelées _points d'arrêts_.

Une approche fréquente consiste à créer une disposition simple sur une colonne pour les appareils avec un écran étroit (par exemple les téléphones), puis de tester les tailles plus larges et d'implémenter une disposition sur plusieurs colonnes lorsque l'espace est suffisant. Concevoir un site pour répondre d'abord aux besoins mobiles est parfois qualifié de conception <i lang="en">mobile first</i>.

Lorsqu'on utilise des points d'arrêts, une bonne pratique consiste à utiliser [des unités relatives plutôt que des unités absolues](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) pour un format d'appareil donné.

Il existe différentes approches pour les styles définis à l'intérieur d'un bloc d'une requête média. On peut utiliser des requêtes média, ou des feuilles de styles pointées par des éléments [`<link>`](/fr/docs/Web/HTML/Reference/Elements/link) selon les caractéristiques du navigateur pour inclure uniquement des variables de propriétés personnalisés contenant les valeurs associées à chaque point d'arrêt.

Pour en savoir plus sur les requêtes média, voir [la documentation MDN à ce sujet](/fr/docs/Web/CSS/Guides/Media_queries).

Les requêtes média peuvent aider au <i lang="en">responsive design</i>, mais elles ne sont pas strictement nécessaires. Les grilles flexibles, les unités relatives, les valeurs minimales et maximales des unités peuvent très bien être utilisées sans requêtes média.

## Technologies associées aux dispositions <i lang="en">responsive</i>

Les sites adaptatifs sont construits sur la base d'une grille flexible, pour éviter de cibler toutes les tailles d'appareils possibles et d'essayer d'avoir des dispositions parfaitement alignées au pixel près dans tous les cas.

En utilisant une grille flexible, on peut modifier une partie de la mise en page ou ajouter un point d'arrêt et modifier la disposition à partir du moment où le contenu est mal agencé. Par exemple, afin de s'assurer que les lignes ne deviennent trop longues et difficilement lisibles lorsque la largeur s'accroît, on peut utiliser [`columns`](/fr/docs/Web/CSS/Reference/Properties/columns), et si une boîte devient alors trop étroite, avec deux mots par ligne, on peut alors placer un point d'arrêt.

Plusieurs méthodes de disposition comme [la disposition multi-colonnes](/fr/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout), [les boîtes flexibles (<i lang="en">flexbox</i>)](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox), et [les grilles CSS](/fr/docs/Learn_web_development/Core/CSS_layout/Grids) sont adaptatives par défaut. Ces méthodes permettent de créer plus simplement une grille flexible.

### Multi-colonnes

Avec une disposition en colonnes, à l'aide de la propriété `column-count`, on indique un nombre de colonnes maximum dans lequel on placera le contenu. Le navigateur détermine alors la taille des colonnes, qui pourra varier d'un écran à l'autre en fonction de sa taille.

```css
.container {
  column-count: 3;
}
```

Si on utilise la propriété `column-width` à la place, on indiquera une largeur _minimale_. Le navigateur créera alors autant de colonnes que possible au sein du conteneur et répartira l'espace restant entre les colonnes. Dans ce cas, le nombre de colonnes variera en fonction de l'espace disponible.

```css
.container {
  column-width: 10em;
}
```

La propriété raccourcie [`columns`](/fr/docs/Web/CSS/Reference/Properties/columns) permet d'indiquer un nombre maximum de colonne et une largeur minimale de colonne. Ces propriétés permettent de s'assurer que les lignes ne deviennent pas trop longues sur un écran large, ou trop étroite dans le cas contraire.

### Boîtes flexibles

Avec les boîtes flexibles (<i lang="en">flexbox</i>), les éléments flexibles s'agrandissent ou rétrécissent, distribuant l'espace disponible dans le conteneur entre les éléments. En adaptant les valeurs des propriétés `flex-grow` et `flex-shrink` on indique comment un élément peut consommer plus ou moins d'espace.

Dans l'exemple qui suit, les éléments flexibles prendront le même espace dans le conteneur flexible. On utilise la forme raccourcie `flex: 1` (décrite dans [la section sur le dimensionnement flexible](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox#taille_modulable_des_éléments_flex)).

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

> [!NOTE]
> Nous avons également construit un exemple plus concret d'une disposition adaptative utilisant les boîtes flexibles. Dans celui-ci, nous utilisons un point d'arrêt pour passer sur plusieurs colonnes lorsque l'écran est suffisamment large et nous limitons la taille du contenu principal à l'aide de la propriété [`max-width`](/fr/docs/Web/CSS/Reference/Properties/max-width). Voir [l'exemple en <i lang="en">live</i>](https://mdn.github.io/css-examples/learn/rwd/flex-based-rwd.html), et [le code source correspondant sur GitHub](https://github.com/mdn/css-examples/blob/main/learn/rwd/flex-based-rwd.html).

### Grilles CSS

Les dispositions créées avec les grilles CSS utilisent l'unité `fr` pour répartir l'espace disponible entre les pistes de la grille. Dans l'exemple suivant, on crée un conteneur de grille avec trois pistes dimensionnées avec `1fr`. Cela créera trois pistes de colonnes, chacune occupant une partie égale du conteneur.

Pour en savoir plus sur cette approche utilisant les grilles, voir [les grilles flexibles avec l'unité `fr`](/fr/docs/Learn_web_development/Core/CSS_layout/Grids#trames_adaptables_avec_lunité_fr).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

> [!NOTE]
> La version de notre exemple avec les grilles CSS est encore plus simple, car on définit les colonnes sur le conteneur `.wrapper`. Voir [l'exemple en <i lang="en">live</i>](https://mdn.github.io/css-examples/learn/rwd/grid-based-rwd.html), et [le code source correspondant](https://github.com/mdn/css-examples/blob/main/learn/rwd/grid-based-rwd.html).

## Images/média <i lang="en">responsive</i>

Afin de s'assurer qu'un média ne soit jamais plus grand que son conteneur adaptatif, on peut utiliser l'approche suivante&nbsp;:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Ainsi, le média est redimensionné pour ne jamais dépasser du conteneur. En revanche, utiliser une seule image très grande et la redimensionner ainsi sur les appareils avec un petit écran revient à gaspiller de la bande passante et à télécharger des images plus grandes que ce qui est nécessaire.

À l'aide de l'élément [`<picture>`](/fr/docs/Web/HTML/Reference/Elements/picture) et des attributs [`srcset` et `sizes` de l'élément `<img>`](/fr/docs/Web/HTML/Reference/Elements/img), on peut servir des images adaptées à la résolution et à la taille de la zone d'affichage de l'appareil utilisé. Ainsi, on pourra utiliser une image carrée à destination des mobiles et privilégier une image au format paysage pour la même scène sur un ordinateur.

L'élément `<picture>` permet de fournir plusieurs tailles d'images à l'aide d'indications (des métadonnées qui décrivent la taille de l'écran et la résolution pour lesquelles l'image est la mieux adaptée). C'est le navigateur qui choisira l'image la plus pertinente pour l'appareil, s'assurant ainsi qu'une image de taille appropriée à l'appareil est téléchargée. Utiliser `<picture>` avec `max-width` permet de se passer des requêtes média pour le dimensionnement des images. Cela permet de cibler des images avec différentes proportions en fonction des tailles des zones d'affichage.

[Le guide sur les images adaptatives de MDN](/fr/docs/Web/HTML/Guides/Responsive_images) est utile pour en savoir plus.

Quelques conseils complémentaires&nbsp;:

- Assurez vous d'utiliser un format d'image approprié pour les images de votre site (comme PNG ou JPG), et d'optimiser la taille des fichiers à l'aide d'un éditeur graphique avant de publier les images sur votre site web.
- Vous pouvez utiliser [des dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients) ou [des ombres CSS](/fr/docs/Web/CSS/Reference/Properties/box-shadow) afin d'implémenter des effets visuels sans recourir à des images.
- Il est possible d'utiliser des requêtes média grâce à l'attribut `media` des éléments [`<source>`](/fr/docs/Web/HTML/Reference/Elements/source) dans les éléments [`<video>`](/fr/docs/Web/HTML/Reference/Elements/video)/[`<audio>`](/fr/docs/Web/HTML/Reference/Elements/audio) afin de servir des fichiers pertinents selon l'appareil utilisé.

## Typographie adaptative

La typographie adaptative consiste à adapter la taille de la police utilisée au sein d'une requête média ou à utiliser des unités relatives à la taille de la zone d'affichage pour s'adapter à la quantité d'espace disponible à l'écran.

### Utiliser les requêtes média pour la typographie

Dans cet exemple, on veut que le titre de premier niveau soit écrit avec une police en `4rem`, ce qui correspond à 4 fois la taille de base. Le titre apparaîtra alors très grand par rapport aux autres textes. On souhaite que ce très grand titre soit affiché ainsi uniquement lorsque la taille de l'écran le permet. Aussi, on crée d'abord un titre plus petit et on utilise une requête média pour surcharger la taille si l'écran est au moins aussi large que `1200px`.

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

En repartant de l'exemple précédent avec la grille pour inclure cette méthode, on peut voir que la taille du titre varie lorsque la disposition passe sur deux colonnes.

Sur mobile, le titre sera plus petit&nbsp;:

![Une disposition empilée, avec un titre plutôt petit.](mdn-rwd-font-mobile.png)

Sur ordinateur, on voit un titre plus grand&nbsp;:

![Une disposition sur deux colonnes avec un grand titre.](mdn-rwd-font-desktop.png)

> [!NOTE]
> Voir [l'exemple en <i lang="en">live</i>](https://mdn.github.io/css-examples/learn/rwd/type-rwd.html), et [le code source correspondant](https://github.com/mdn/css-examples/blob/main/learn/rwd/type-rwd.html).

Comme on peut le voir ici, les requêtes média ne se limitent pas au changement de la disposition, on peut les utiliser afin d'adapter tout élément qui concourt à l'attractivité de la page sur les différents écrans.

### Utiliser les unités relatives à la zone d'affichage pour la typographie adaptative

Les unités relatives à la taille de la zone d'affichage (<i lang="en">viewport</i>) comme `vw` peuvent également être utilisées pour la typographie adaptative pour éviter de recourir aux points d'arrêt des requêtes média. `1vw` correspond à un pourcent de la largeur de la zone d'affichage, ce qui signifie qu'avec une taille de police exprimée en `vw`, celle-ci sera toujours relative à la largeur de la zone d'affichage.

```css
h1 {
  font-size: 6vw;
}
```

Le problème avec l'approche précédente est qu'elle empêche de zoomer le texte dimensionné à l'aide de l'unité `vw` (car la taille du texte est toujours relative à celle de la zone d'affichage). **Aussi, il ne faut jamais dimensionner du texte en utilisant uniquement des unités relatives à la zone d'affichage.**

Une solution consiste à utiliser [`calc()`](/fr/docs/Web/CSS/Reference/Values/calc). En ajoutant la valeur exprimée `vw` à une valeur exprimée dans une unité fixe (comme `em` ou `rem`), on pourra zoomer sur le texte. La valeur en unité `vw` sera ajoutée à la valeur zoomée&nbsp;:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Avec cette approche, on peut définir à un seul endroit la taille de la police du titre plutôt que de la définir d'une part pour les mobiles et d'autre part dans d'autres requêtes média. Définie ainsi, la taille de la police augmente graduellement avec la taille de la zone d'affichage.

> [!NOTE]
> Voir [l'exemple en <i lang="en">live</i>](https://mdn.github.io/css-examples/learn/rwd/type-vw.html), et [le code source correspondant](https://github.com/mdn/css-examples/blob/main/learn/rwd/type-vw.html).

## La balise méta `viewport`

En regardant le code source HTML d'une page <i lang="en">responsive</i>, vous rencontrerez probablement la balise [`<meta>`](/fr/docs/Web/HTML/Reference/Elements/meta) suivante dans l'élément `<head>` du document.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

La balise méta [`viewport`](/fr/docs/Web/HTML/Reference/Elements/meta/name/viewport) indique aux navigateurs mobiles de fixer la largeur de la zone d'affichage sur la largeur de l'appareil et de mettre à l'échelle le document à 100% de sa taille voulue, permettant d'afficher le document sous sa forme optimisée pour mobile, comme voulu.

Pourquoi est-ce nécessaire&nbsp;? Eh bien parce que les navigateurs mobiles ont tendance à mentir à propos de la largeur de leur zone d'affichage.

En effet, quand les premiers téléphones permettant de naviguer sur le web sont arrivés, la plupart des sites n'étaient pas optimisés pour être utilisés sur mobile. Le navigateur mobile fixait alors la largeur de la zone d'affichage à 980 pixels, affichait la page dans cette largeur et montrait alors le résultat, comme une version dézoomée de la version pour ordinateur. On pouvait alors zoomer et faire défiler le contenu pour consulter ce qu'on voulait. Toutefois, le rendu obtenu n'était pas élégant.

En fixant `width=device-width`, on surcharge les réglages par défaut du mobile (par exemple `width=980px` utilisé par défaut par Apple) pour utiliser la largeur effective de l'appareil. Sans cette indication, les points d'arrêts et les requêtes média pourraient ne pas fonctionner comme souhaités sur les navigateurs mobiles. Si dans la réalité un écran mesure 480px de large, mais que l'appareil ment en indiquant qu'il mesure 980px, la disposition ciblée grâce à la requête média correspondante ne s'appliquera pas et la personne ne verra pas la disposition adaptée.

**Aussi, il faudrait _toujours_ inclure la balise méta `viewport` dans un document.**

## Résumé

Le <i lang="en">responsive design</i> est une approche qui permet aux sites et applications web de s'adapter à l'environnement dans lequel ils sont vus. Cette approche s'appuie sur certaines fonctionnalités et techniques HTML et CSS, et correspond à la méthode par défaut de conception des sites web aujourd'hui. Lorsque vous utilisez votre téléphone sur le Web, il est peu probable que vous arriviez sur un site qui utilise la version pour ordinateur simplement dézoomée, ou qu'il vous faille faire défiler le contenu pour trouver quelque chose. En effet, le Web a progressivement basculé vers des sites et applications conçus de façon adaptative.

Il est également plus facile d'obtenir des dispositions adaptatives en employant les dispositions CSS vues dans ces articles. Si vous débutez le développement web, sachez qu'il y a bien plus d'outils adaptés au <i lang="en">responsive design</i> qu'auparavant. N'hésitez donc pas à vérifier les dates d'écriture des différents articles et documentation que vous lirez. En effet, si certains articles historiques restent pertinents, l'utilisation des fonctionnalités modernes de HTML et CSS simplifie grandement la création de disposition élégantes et pratiques, quel que soit l'appareil utilisé pour les consulter.

## Voir aussi

- Prendre en charge les appareils tactiles&nbsp;:
  - [L'API des évènements tactiles](/fr/docs/Web/API/Touch_events) permet d'interpréter l'activité du doigt ou du stylet sur les écrans ou surfaces tactiles, pour implémenter des interfaces utilisateurs tactiles complexes.
  - Les caractéristiques média [`pointer`](/fr/docs/Web/CSS/Reference/At-rules/@media/pointer) et [`any-pointer`](/fr/docs/Web/CSS/Reference/At-rules/@media/any-pointer) permettent d'appliquer du CSS différent en fonction de la prise en charge tactile de l'appareil.
- [Le guide CSS Tricks sur les requêtes média (en anglais)](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}
