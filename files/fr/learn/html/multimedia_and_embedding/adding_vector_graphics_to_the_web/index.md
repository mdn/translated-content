---
title: Ajouter des images vectorielles à une page web
slug: Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web
l10n:
  sourceCommit: cae0c87750df678bf635db5d9f903a17f6cab035
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

Les graphiques vectoriels sont utiles dans de nombreuses circonstances. Ils sont légers et permettent un redimensionnement à volonté, quand on les agrandit, ils ne deviennent pas pixelisés et la taille des fichiers n'explose pas. Dans cet article, nous verrons comment inclure des images vectorielles dans une page web.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>Connaître <a href="/fr/docs/Learn/HTML/Introduction_to_HTML">les fondamentaux en HTML</a>, savoir comment <a href="/fr/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML">insérer une image dans un document</a>.</td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>Savoir intégrer une image SVG (une image vectorielle) dans une page web.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Cet article n'a pas pour objectif de vous enseigner SVG. Nous verrons à quoi sert ce format et comment ajouter des images SVG aux pages web.

## Qu'est-ce qu'une image vectorielle&nbsp;?

Sur le Web, vous verrez et manipulerez deux types d'image&nbsp;: les images **matricielles** et les images **vectorielles**.

- Les images matricielles
  - : Elles sont définies en utilisant une grille de pixels. Un fichier d'une image matricielle contient des informations qui indiquent l'emplacement et la couleur de chaque pixel. Parmi les formats les plus fréquemment utilisés pour les images matricielles, on a PNG (`.png`), JPEG (`.jpg`), GIF (`.gif`.), et Bitmap (`.bmp`).
- Les images vectorielles
  - : Elles sont définies à l'aide d'algorithmes. Un fichier d'une image vectorielle contient des définitions de formes et de chemins qu'un ordinateur pourra utiliser pour construire l'image à l'écran. Le format [SVG](/fr/docs/Glossary/SVG) permet de créer des graphiques vectoriels qu'on pourra utiliser sur le Web.

Pour mieux saisir la différence entre les deux, prenons un exemple qui se trouve sur GitHub&nbsp;: [`vector-versus-raster.html`](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html). Sur cette page, on voit deux images qui semblent identiques à première vue, avec une étoile rouge et une ombre portée noire. Celle de gauche est une image PNG et celle de droite est une image SVG.

La différence s'accentue lorsqu'on zoome sur la page. L'image PNG devient de plus en plus pixelisée, car le format matriciel contient des informations sur chaque pixel et lorsqu'on zoome, chaque pixel de l'image devient plus grand et occupe plusieurs pixels de l'écran, ce qui crée ce crénelage. Ce n'est pas le cas de l'image vectorielle qui est toujours nette. En effet, quelle que soit sa taille, l'ordinateur utilise les algorithmes indiqués dans l'image pour redessiner la forme et ce qui est à l'écran s'adapte à la taille demandée.

![Deux images d'étoiles](raster-vector-default-size.png)

![Les deux étoiles qu'on a zoomées, celle de droite est nette et celle de gauche est pixelisée/floue.](raster-vector-zoomed.png)

> [!NOTE]
> Les deux images affichées ci-dessus sont des PNG qui illustrent le rendu des deux étoiles (l'une en SVG, l'autre en PNG) à des niveaux de zoom différent. N'hésitez surtout pas à aller sur [`vector-versus-raster.html`](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) pour voir l'exemple en direct&nbsp;!

De plus, les fichiers des images vectorielles sont plus légers que les équivalents matriciels. En effet, ils n'ont qu'à contenir quelques déclarations de chemins/formes avec des algorithmes plutôt que des informations spécifiques pour tous les pixels.

## Qu'est-ce que SVG&nbsp;?

[SVG](/fr/docs/Web/SVG) est un langage basé sur [XML](/fr/docs/Glossary/XML), utilisé pour décrire des images vectorielles. Il s'agit d'un langage à balises, comme HTML, où les différents éléments permettent de décrire les formes qu'on veut dans l'image et les effets qui s'appliquent à ces formes. SVG sert à baliser des graphiques et pas du contenu. SVG définit des éléments pour créer des formes simples, comme [`<circle>`](/fr/docs/Web/SVG/Element/circle) (pour dessiner un cercle) et [`<rect>`](/fr/docs/Web/SVG/Element/circle) (pour dessiner un rectangle), ainsi que des éléments pour des formes plus complexes comme [`<path>`](/fr/docs/Web/SVG/Element/path) et [`<polygon>`](/fr/docs/Web/SVG/Element/polygon). On aura d'autres éléments pour les fonctionnalités les plus avancées de SVG, comme [`<feColorMatrix>`](/fr/docs/Web/SVG/Element/feColorMatrix) (qui permet d'appliquer une transformation des couleurs à l'aide d'une matrice), [`<animate>`](/fr/docs/Web/SVG/Element/animate) (qui permet d'animer certaines parties de l'image), et [`<mask>`](/fr/docs/Web/SVG/Element/mask) (qui permet d'appliquer des masques par-dessus l'image).

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

{{EmbedLiveSample('', 300, 240, "", "")}}

Après avoir lu l'exemple précédent, vous pourriez avoir l'impression qu'il est facile d'écrire du SVG à la main. Et oui, on peut éditer du SVG à l'aide d'un éditeur de texte. Toutefois, cela devient vite très compliqué pour les images plus riches. Pour créer des images SVG, on utilise généralement un éditeur d'image vectorielle comme [Inkscape](https://inkscape.org/) ou [Adobe Illustrator](https://fr.wikipedia.org/wiki/Adobe_Illustrator). Ces logiciels permettent de créer des images vectorielles à l'aide de différents outils graphiques (par exemple pour créer des approximations de photos à l'aide de la fonctionnalité «&nbsp;Vectoriser un objet matriciel&nbsp;»).

SVG possède d'autres avantages&nbsp;:

- Le texte contenu dans les images vectorielles reste accessible (ce qui peut aussi servir pour [le référencement](/fr/docs/Glossary/SEO)).
- SVG se prête bien à la mise en forme via CSS et à la modification dynamique via JavaScript.

Si SVG a tant d'avantages, pourquoi continuer à utiliser des formats matriciels&nbsp;? SVG a aussi quelques inconvénients&nbsp;:

- Le contenu d'un fichier SVG peut vite devenir très compliqué. Cela implique une taille de fichier qui va croissante, mais aussi un temps de traitement plus long de la part du navigateur.
- Selon le cas de figure, il est parfois plus compliqué de créer des images SVG plutôt qu des images matricielles.

C'est pour ces raisons que les images matricielles sont plus pertinentes pour les images complexes et avec de nombreux détails, comme les photos.

## Ajouter des images SVG à une page web

Dans cette section, nous allons voir différentes méthodes pour ajouter des images SVG aux pages web.

### La méthode rapide&nbsp;: l'élément `<img>`

Pour intégrer une image SVG à l'aide d'un élément [`<img>`](/fr/docs/Web/HTML/Element/svg), il suffit de renseigner l'attribut `src` avec le chemin du fichier. Il faudra également inclure un attribut `height` et/ou `width` (voire les deux au cas où le fichier SVG n'a pas de proportions inhérentes). Si vous ne l'avez pas déjà fait, n'hésitez pas à lire [le guide sur les images en HTML](/fr/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) avant de poursuivre.

```html
<img
  src="equilateral.svg"
  alt="un triangle avec trois côtés égaux"
  height="87"
  width="100" />
```

#### Avantages

- Une syntaxe rapide et similaire aux images matricielles, avec une prise en charge native de l'attribut `alt`.
- L'image peut être transformée en hyperlien en imbriquant l'élément `<img>` au sein d'un élément [`<a>`](/fr/docs/Web/HTML/Element/a).
- Le fichier SVG peut être mis en cache par le navigateur, améliorant les temps de chargement pour les pages qui utiliseraient cette image par la suite.

#### Inconvénients

- L'image ne peut pas être manipulée avec JavaScript.
- Si on souhaite contrôler le contenu SVG avec SS, il faut inclure des styles CSS en incise dans le code SVG (les feuilles de styles externes appelées depuis le fichier SVG n'auront pas d'effet).
- L'image ne peut pas être mise en forme avec les pseudo-classes CSS comme `:focus`.

#### Diagnostic et prise en charge des anciens navigateurs

Pour les navigateurs qui ne prennent pas en charge SVG (IE8 et antérieur, Android 2.3 et antérieur), vous pouvez pointer l'attribut `src` vers un fichier PNG ou JPH et utiliser un attribut [`srcset`](/fr/docs/Web/HTML/Element/img#srcset) (pris en charge par les navigateurs plus récents) pour faire référence à l'image SVG. Ainsi, seuls les navigateurs qui prennent en charge `srcset` chargeront le fichier SVG et les navigateurs plus anciens chargeront le fichier PNG&nbsp;:

```html
<img
  src="equilateral.png"
  alt="un triangle avec trois côtés égaux"
  srcset="equilateral.svg" />
```

Vous pouvez aussi utiliser des SVG comme images d'arrière-plan en CSS. Dans le fragment de code qui suit, les navigateurs plus anciens appliqueront le PNG et les plus récents chargeront le SVG&nbsp;:

```css
background: url("image_alternative.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Comme pour la méthode HTML avec l'élément `<img>`, l'insertion de fichier SVG dans des images d'arrière-plan CSS signifie que le contenu SVG ne peut pas être manipulé avec JavaScript (et obéit aux mêmes limitations pour le CSS).

Si vos images SVG ne s'affichent pas du tout, il se peut que votre serveur ne soit pas configuré correctement. Dans ce cas, [cet article vous aidera à corriger ce qui doit l'être](/fr/docs/Web/SVG/Tutorial/Getting_Started#un_mot_sur_les_serveurs_web).

### Inclure du code SVG dans le document HTML

Vous pouvez également ouvrir le fichier SVG dans un éditeur de texte, copier le code SVG, puis le coller dans votre document HTML (ce qu'on appelle parfois en anglais <i lang="en">inlining SVG</i>, qu'on pourrait traduire par inscrire le SVG en incise). Assurez-vous que le fragment de code SVG commence par une balise initiale `<svg>` et se termine par une balise finale `</svg>`. Voici un exemple très simple de ce que vous pourriez coller dans votre document&nbsp;:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Avantages

- Placer le SVG en incise permet d'économiser une requête HTTP et peut donc réduire légèrement le temps de chargement.
- Vous pouvez affecter des classes et des identifiants aux éléments SVG afin de le mettre en forme à l'aide de CSS (directement depuis le SVG ou depuis les règles CSS qui s'appliquent au document). Vous pouvez en fait utiliser [tout attribut SVG de présentation](/fr/docs/Web/SVG/Attribute#attributs_de_présentation) comme une propriété CSS.
- C'est la seule méthode qui permet d'utiliser les pseudo-classes CSS (comme `:focus`) et les animations CSS sur une image SVG.
- Le contenu SVG peut être transformé en hyperlien en l'insérant dans un élément [`<a>`](/fr/docs/Web/HTML/Element/a).

#### Inconvénients

- Cette méthode s'applique uniquement si le SVG est utilisé à un seul endroit. Dupliquer du contenu intégré de cette manière compliquera largement la maintenance.
- Tout code SVG supplémentaire augmentera la taille du fichier HTML.
- Le navigateur ne pourra pas mettre en cache le SVG en incise, comme il peut le faire pour les autres images. Aussi, toute page qui inclurait cette image en incise (dupliquée) ne serait pas chargée plus rapidement.
- Un contenu de secours peut être inclus dans un élément [`<foreignObject>`](/fr/docs/Web/SVG/Element/foreignObject), mais les navigateurs qui prennent en charge SVG téléchargeront quand même l'image de secours. C'est à vous d'estimer si le coût supplémentaire du chargement de contenu de secours est pertinent pour la prise en charge des anciens navigateurs.

### Inclure du contenu SVG dans une `<iframe>`

Vous pouvez ouvrir des images SVG dans votre navigateur, comme pour des pages web. On peut aussi embarquer un document SVG au sein d'un élément `<iframe>`, comme nous le présentions [dans le guide sur l'intégration de contenu tiers](/fr/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies).

Voici un aperçu rapide&nbsp;:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img
    src="triangle.png"
    alt="Un triangle avec trois côtés de longueur différente" />
</iframe>
```

#### Inconvénients

Cette méthode n'est pas préconisée cependant.

- Il n'y a pas de mécanisme pour charger un contenu alternatif en cas d'absence de prise en charge du SVG. Le contenu alternatif de l'`<iframe>` sera uniquement affiché si le navigateur ne prend pas en charge `<iframe>`.
- De plus, sauf si le SVG et la page courante partagent bien la même [origine](/fr/docs/Glossary/Origin), JavaScript ne pourra pas être utilisé sur la page web pour manipuler le SVG.

## Mise en pratique&nbsp;: jouer avec SVG

Dans cette section de mise en pratique, nous vous invitons à jouer avec SVG. Dans la section intitulée _Code éditable_, nous vous avons fourni du code SVG comme point de départ. Vous pouvez également consulter [la référence des éléments SVG](/fr/docs/Web/SVG/Element), afin de trouver d'autres éléments avec lesquels expérimenter. Cette section est complètement dédiée à l'expérimentation, n'hésitez pas.

Si vous coincez et que votre code ne fonctionne pas, vous pouvez toujours utiliser le bouton _Réinitialiser_.

```html hidden
<h2>Résultat en direct</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Code éditable</h2>
<p class="a11y-label">
  Appuyez sur <kbd>Echap</kbd> pour retirer le focus de la zone de code (<kbd
    >Tab</kbd
  >
  est utilisé pour insérer une tabulation).
</p>

<textarea id="code" class="input" style="width: 95%;min-height: 200px;">
  <svg width="100%" height="100%">
    <rect width="100%" height="100%" fill="red" />
    <circle cx="100%" cy="100%" r="150" fill="blue" stroke="black" />
    <polygon points="120,0 240,225 0,225" fill="green"/>
    <text x="50" y="100" font-family="Verdana" font-size="55"
          fill="white" stroke="black" stroke-width="2">
            Coucou !
    </text>
  </svg>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Réinitialiser" />
  <input id="solution" type="button" value="Afficher la solution" disabled />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Afficher la solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Afficher la solution") {
    textarea.value = solutionEntry;
    solution.value = "Masquer la solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Afficher la solution";
  }
  updateCode();
});

const htmlSolution = "";
let solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// Eviter que la touche de tabulation sorte de l'élément textarea
// et insérer une tabulation au niveau du curseur à la place

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Mettre à jour le contenu à chaque frappe

textarea.onkeyup = function () {
  // On souhaite uniquement enregistrer l'état quand c'est le code
  // et pas la solution qui est affichée
  if (solution.value === "Afficher la solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{EmbedLiveSample('', 700, 540)}}

## Résumé

Dans cet article, nous avons fourni un aperçu des images vectorielles et de SVG. Nous avons vu à quoi ils étaient utiles et comment inclure des images SVG dans des pages web. Cet article n'est pas un guide exhaustif pour tout savoir sur SVG, juste un premier niveau pour que vous puissiez reconnaître SVG si vous le recroisez par la suite. Vous pourrez trouver ci-après quelques articles plus approfondis à propos de SVG.

Dans le dernier article de ce module, nous verrons [les images adaptatives (<i lang="en">responsive</i>)](/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) en détails et comment HTML permet de tirer le meilleur parti des images sur différents appareils.

## Voir aussi

- [Un tutoriel SVG sur MDN](/fr/docs/Web/SVG/Tutorial/Getting_Started)
- [Les billets SVG de La Cascade](https://la-cascade.io/tags/svg)
- [Un tutoriel (en anglais) de Sara Soueidan sur les images SVG adaptatives](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Une note du W3C (en anglais) quant aux bénéfices de SVG sur l'accessibilité](https://www.w3.org/TR/SVG-access/)
- [Les propriétés SVG et CSS (en anglais)](https://css-tricks.com/svg-properties-and-css/)
- [Comment redimensionner des images SVG (en anglais)](https://css-tricks.com/scale-svg/)

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}
