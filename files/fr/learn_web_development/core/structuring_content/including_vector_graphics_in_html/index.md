---
title: Inclure des images vectorielles en HTML
short-title: Images vectorielles
slug: Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Les images vectorielles sont très utiles dans de nombreuses circonstances — elles ont de petites tailles de fichier et sont très évolutives, donc elles ne deviennent pas pixelisées lorsqu'on les agrandit ou qu'on les zoome. Dans cet article, nous allons vous montrer comment en inclure une dans votre page web.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Vous devez connaître les
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content">bases du HTML</a>
        et savoir comment
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/HTML_images"
          >insérer une image dans votre document</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>Apprendre à intégrer une image SVG (vectorielle) dans une page web.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Cet article n'a pas pour but de vous enseigner le langage SVG&nbsp;; il vise uniquement à vous expliquer ce que c'est et comment l'intégrer à des pages web.

## Qu'est-ce qu'une image vectorielle ?

Sur le Web, vous allez voir et manipuler deux types d'image — les images **matricielles** et **vectorielles**&nbsp;:

- **Les images matricielles** sont définies à l'aide d'une grille de pixels — un fichier d'image matricielle contient des informations indiquant exactement où chaque pixel doit être placé et quelle couleur il doit avoir. Parmi les formats matriciels courants sur le Web, on trouve le Bitmap (`.bmp`), le PNG (`.png`), le JPEG (`.jpg`) et le GIF (`.gif`).
- **Les images vectorielles** sont définies à l'aide d'algorithmes — un fichier d'image vectorielle contient des définitions de formes et de tracés que l'ordinateur peut utiliser pour déterminer à quoi doit ressembler l'image une fois affichée à l'écran. Le format {{Glossary("SVG")}} nous permet de créer des graphiques vectoriels performants destinés à être utilisés sur le Web.

Pour mieux saisir la différence entre les deux, prenons un exemple qui se trouve sur GitHub&nbsp;: [`vector-versus-raster.html`](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html). Sur cette page, on voit deux images qui semblent identiques à première vue, avec une étoile rouge et une ombre portée noire. Celle de gauche est une image PNG et celle de droite est une image SVG.

La différence s'accentue lorsqu'on zoome sur la page. L'image PNG devient de plus en plus pixelisée, car le format matriciel contient des informations sur chaque pixel et lorsqu'on zoome, chaque pixel de l'image devient plus grand et occupe plusieurs pixels de l'écran, ce qui crée ce crènelage. Ce n'est pas le cas de l'image vectorielle qui est toujours nette. En effet, quelle que soit sa taille, l'ordinateur utilise les algorithmes indiqués dans l'image pour redessiner la forme et ce qui est à l'écran s'adapte à la taille demandée.

![Deux images d'étoiles](raster-vector-default-size.png)

![Les deux étoiles qu'on a zoomées, celle de droite est nette et celle de gauche est pixelisée/floue.](raster-vector-zoomed.png)

> [!NOTE]
> Les deux images affichées ci-dessus sont des PNG qui illustrent le rendu des deux étoiles (l'une en SVG, l'autre en PNG) à des niveaux de zoom différent. N'hésitez surtout pas à aller sur [`vector-versus-raster.html`](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) pour voir l'exemple en direct&nbsp;!

De plus, les fichiers des images vectorielles sont plus légers que les équivalents matriciels. En effet, ils n'ont qu'à contenir quelques déclarations de chemins/formes avec des algorithmes plutôt que des informations spécifiques pour tous les pixels.

## Qu'est-ce que SVG ?

[SVG](/fr/docs/Web/SVG) est un langage basé sur {{Glossary("XML")}}, utilisé pour décrire des images vectorielles. Il s'agit d'un langage à balises, comme HTML, où les différents éléments permettent de décrire les formes qu'on veut dans l'image et les effets qui s'appliquent à ces formes. SVG sert à baliser des graphiques et pas du contenu. SVG définit des éléments pour créer des formes simples, comme {{SVGElement("circle")}} (pour dessiner un cercle) et {{SVGElement("rect")}} (pour dessiner un rectangle), ainsi que des éléments pour des formes plus complexes comme {{SVGElement("path")}} et {{SVGElement("polygon")}}. On a d'autres éléments pour les fonctionnalités les plus avancées de SVG, comme {{SVGElement("feColorMatrix")}} (qui permet d'appliquer une transformation des couleurs à l'aide d'une matrice), {{SVGElement("animate")}} (qui permet d'animer certaines parties de l'image), et {{SVGElement("mask")}} (qui permet d'appliquer des masques par-dessus l'image).

Dans le fragment de code qui suit, on crée un cercle et un rectangle&nbsp;:

```html
<svg
  version="1.1"
  baseProfile="full"
  width="300"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black" />
  <circle cx="150" cy="100" r="90" fill="blue" />
</svg>
```

Cela crée l'image suivante&nbsp;:

{{EmbedLiveSample("Qu'est-ce que SVG ?", 300, 240)}}

Après avoir lu l'exemple précédent, vous pouvez avoir l'impression qu'il est facile d'écrire du SVG à la main. Et oui, on peut éditer du SVG à l'aide d'un éditeur de texte. Toutefois, cela devient vite très compliqué pour les images plus riches. Pour créer des images SVG, on utilise généralement un éditeur d'image vectorielle comme [Inkscape](https://inkscape.org/fr/) ou [Adobe Illustrator](https://fr.wikipedia.org/wiki/Adobe_Illustrator). Ces logiciels permettent de créer des images vectorielles à l'aide de différents outils graphiques (par exemple pour créer des approximations de photos à l'aide de la fonctionnalité «&nbsp;Vectoriser un objet matriciel&nbsp;»).

SVG possède d'autres avantages&nbsp;:

- Le texte contenu dans les images vectorielles reste accessible (ce qui peut aussi servir pour {{Glossary("SEO", "le référencement")}}).
- SVG se prête bien à la mise en forme avec CSS et à la modification dynamique avec JavaScript.

Si SVG a tant d'avantages, pourquoi continuer à utiliser des formats matriciels&nbsp;? SVG a aussi quelques inconvénients&nbsp;:

- Le contenu d'un fichier SVG peut vite devenir très compliqué. Cela implique une taille de fichier qui va croissante, mais aussi un temps de traitement plus long de la part du navigateur.
- Selon le cas de figure, il est parfois plus compliqué de créer des images SVG plutôt qu des images matricielles.

C'est pour ces raisons que les images matricielles sont plus pertinentes pour les images complexes et avec de nombreux détails, comme les photos.

Les graphiques SVG exportés depuis des éditeurs tels qu'Inkscape offrent un grand potentiel d'optimisation de taille. Avant de les déployer sur le web, il est recommandé de les passer par un optimiseur SVG tel que [SVGO <sup>(angl.)</sup>](https://www.npmjs.com/package/svgo).

## Ajouter des images SVG à une page web

Dans cette section, nous allons voir différentes méthodes pour ajouter des images SVG aux pages web.

### La méthode rapide : l'élément `<img>`

Pour intégrer une image SVG à l'aide d'un élément {{HTMLElement("img")}}, il suffit de la référencer dans l'attribut `src` comme vous le faites normalement. Vous devez inclure un attribut `height` ou `width` (ou les deux si votre SVG n'a pas de {{Glossary("aspect ratio", "rapport d'aspect")}} inhérent). Si vous ne l'avez pas déjà fait, veuillez lire [le guide sur les images en HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_images).

```html
<img
  src="equilateral.svg"
  alt="un triangle avec trois côtés égaux"
  height="87"
  width="100" />
```

#### Avantages

- Une syntaxe rapide et similaire aux images matricielles, avec une prise en charge native de l'attribut `alt`.
- L'image peut être transformée en hyperlien en imbriquant l'élément `<img>` au sein d'un élément {{HTMLElement("a")}}.
- Le fichier SVG peut être mis en cache par le navigateur, améliorant les temps de chargement pour les pages qui utiliseraient cette image par la suite.

#### Inconvénients

- L'image ne peut pas être manipulée avec JavaScript.
- Si on souhaite contrôler le contenu SVG avec CSS, il faut inclure des styles CSS en incise dans le code SVG (les feuilles de styles externes appelées depuis le fichier SVG n'ont pas d'effet).
- L'image ne peut pas être mise en forme avec les pseudo-classes CSS (comme `:focus`).

#### Diagnostic et prise en charge des anciens navigateurs

Pour les navigateurs qui ne prennent pas en charge SVG (IE8 et antérieur, Android 2.3 et antérieur), vous pouvez pointer l'attribut `src` vers un fichier PNG ou JPH et utiliser un attribut [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset) (pris en charge par les navigateurs plus récents) pour faire référence à l'image SVG. Ainsi, seuls les navigateurs qui prennent en charge `srcset` chargent le fichier SVG et les navigateurs plus anciens chargent le fichier PNG&nbsp;:

```html
<img
  src="equilateral.png"
  alt="un triangle avec trois côtés égaux"
  srcset="equilateral.svg" />
```

Vous pouvez aussi utiliser des SVG comme images d'arrière-plan en CSS. Dans le fragment de code qui suit, les navigateurs plus anciens appliquent le PNG et les plus récents chargent le SVG&nbsp;:

```css
background: url("image_alternative.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Comme pour la méthode HTML avec l'élément `<img>`, l'insertion de fichier SVG dans des images d'arrière-plan CSS signifie que le contenu SVG ne peut pas être manipulé avec JavaScript (et obéit aux mêmes limitations pour le CSS).

Si vos images SVG ne s'affichent pas du tout, il se peut que votre serveur ne soit pas configuré correctement. Dans ce cas, [cet article vous aidera à corriger ce qui doit l'être](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started#un_mot_sur_les_serveurs_web_pour_les_fichiers_.svgz).

### Inclure du code SVG dans le document HTML

Vous pouvez également ouvrir le fichier SVG dans un éditeur de texte, copier le code SVG, puis le coller dans votre document HTML — ce qu'on appelle parfois en anglais <i lang="en">inlining SVG</i>, qu'on peut traduire par inscrire le SVG en incise. Assurez-vous que le fragment de code SVG commence par une balise initiale `<svg>` et se termine par une balise finale `</svg>`. Voici un exemple très simple de ce que vous pouvez coller dans votre document&nbsp;:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Avantages

- Placer le SVG en incise permet d'économiser une requête HTTP et peut donc réduire légèrement le temps de chargement.
- Vous pouvez affecter des classes et des identifiants aux éléments SVG afin de le mettre en forme à l'aide de CSS (directement depuis le SVG ou depuis les règles CSS qui s'appliquent au document). Vous pouvez en fait utiliser [tout attribut SVG de présentation](/fr/docs/Web/SVG/Reference/Attribute#attributs_de_présentation) comme une propriété CSS.
- C'est la seule méthode qui permet d'utiliser les pseudo-classes CSS (comme `:focus`) et les animations CSS sur une image SVG.
- Le contenu SVG peut être transformé en hyperlien en l'insérant dans un élément {{HTMLElement("a")}}.

#### Inconvénients

- Cette méthode s'applique uniquement si le SVG est utilisé à un seul endroit. Dupliquer du contenu intégré de cette manière complique largement la maintenance.
- Tout code SVG supplémentaire augmente la taille du fichier HTML.
- Le navigateur ne peut pas mettre en cache le SVG en incise, comme il peut le faire pour les autres images. Aussi, toute page qui inclut cette image en incise (dupliquée) n'est pas chargée plus rapidement.
- Un contenu de secours peut être inclus dans un élément {{SVGElement("foreignObject")}}, mais les navigateurs qui prennent en charge SVG téléchargent quand même l'image de secours. C'est à vous d'estimer si le coût supplémentaire du chargement de contenu de secours est pertinent pour la prise en charge des anciens navigateurs.

### Inclure du contenu SVG dans une `<iframe>`

Vous pouvez ouvrir des images SVG dans votre navigateur, tout comme des pages Web. L'intégration d'un document SVG à l'aide de la balise `<iframe>` s'effectue donc exactement comme nous l'avons vu dans [De \<object> à \<iframe> — techniques générales d'intégration](/fr/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies).

Voici un aperçu rapide&nbsp;:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox></iframe>
```

Cette méthode n'est définitivement pas la meilleure à choisir&nbsp;:

#### Inconvénients

- Il n'y a pas de mécanisme pour charger un contenu alternatif en cas d'absence de prise en charge du SVG. Le contenu alternatif du cadre intégré (`<iframe>`) est uniquement affiché si le navigateur ne prend pas en charge `<iframe>`.
- De plus, sauf si le SVG et la page courante partagent bien la même {{Glossary("origin", "origine")}}, JavaScript ne peut pas être utilisé sur la page web pour manipuler le SVG.

## Jouer avec SVG

Dans cet exercice, nous vous invitons à expérimenter avec SVG. Appuyez sur le bouton **Exécuter** pour ouvrir l'exemple suivant dans le MDN Playground et le modifier directement.

Allez à la [référence des éléments SVG](/fr/docs/Web/SVG/Reference/Element) pour voir quels autres éléments vous pouvez utiliser qui offrent beaucoup de fonctionnalités intégrées.
Il y a d'autres formes que vous pouvez essayer, comme les ellipses, ou vous pouvez expérimenter avec des [motifs](/fr/docs/Web/SVG/Reference/Element/pattern), ou même des [effets de filtre](/fr/docs/Web/SVG/Reference/Element/filter).
Cette section est entièrement consacrée à vos compétences en recherche, à essayer quelque chose de nouveau et à vous amuser.

Si vous êtes bloqué et que votre code ne fonctionne pas, vous pouvez toujours le réinitialiser en utilisant le bouton _Réinitialiser_ dans le Playground.

```html live-sample___playing-with-svg
<svg width="100%" height="100%">
  <rect width="100%" height="100%" fill="red" />
  <circle cx="100%" cy="100%" r="150" fill="blue" stroke="black" />
  <polygon points="120,0 240,225 0,225" fill="green" />
  <text
    x="50"
    y="100"
    font-family="Verdana"
    font-size="55"
    fill="white"
    stroke="black"
    stroke-width="2">
    Bonjour !
  </text>
</svg>
```

{{EmbedLiveSample("playing-with-SVG", 700, 300)}}

## Résumé

Cet article vous a donné un aperçu rapide de ce que sont les images vectorielles et le format SVG, des raisons pour lesquelles il est utile de les connaître, et de la manière d'intégrer du contenu SVG dans vos pages Web. Il n'a jamais eu pour but d'être un guide complet pour apprendre le SVG, mais simplement de vous donner quelques repères afin que vous sachiez de quoi il s'agit si vous le rencontrez au cours de vos navigations sur le Web. Ne vous inquiétez donc pas si vous ne vous sentez pas encore expert en SVG. Nous avons inclus ci-dessous quelques liens qui pourraient vous aider si vous souhaitez en savoir plus sur son fonctionnement.

## Voir aussi

- [Un tutoriel SVG](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started) sur MDN
- [Un tutoriel de Sara Soueidan sur les images SVG adaptatives <sup>(angl.)</sup>](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Les propriétés SVG et CSS <sup>(angl.)</sup>](https://css-tricks.com/svg-properties-and-css/)
- [Comment redimensionner des images SVG <sup>(angl.)</sup>](https://css-tricks.com/scale-svg/) (ce n'est pas aussi simple que pour les images matricielles&nbsp;!)
