---
title: Polices variables
slug: Web/CSS/Guides/Fonts/Variable_fonts
l10n:
  sourceCommit: 3c91c067a4d36b532a4bce72e5d8a2c5a9279db5
---

Les **polices variables** constituent une évolution de la spécification OpenType qui permet d'intégrer de nombreuses variantes d'une police dans un seul fichier, plutôt que d'avoir un fichier de police distinct pour chaque largeur, épaisseur ou style. Elles vous permettent d'accéder à toutes les variantes contenues dans un fichier de police donné par le biais du CSS et d'une seule référence {{CSSxRef("@font-face")}}. Cet article vous fournit toutes les informations nécessaires pour vous lancer dans l'utilisation des polices variables.

> [!WARNING]
> Pour utiliser les polices variables sur votre système d'exploitation, vous devez vous assurer qu'il est à jour. Par exemple, les systèmes d'exploitation Linux nécessitent la dernière version de Linux FreeType, et les versions de macOS antérieures à High Sierra (10.13) ne prennent pas en charge les polices variables. Si votre système d'exploitation n'est pas à jour, vous ne pouvez pas utiliser les polices variables dans les pages Web ni dans les outils de développement de Firefox, par exemple.

## Polices variables : de quoi s'agit-il et en quoi diffèrent-elles

Pour mieux comprendre en quoi les polices variables se distinguent, il est utile de rappeler les caractéristiques des polices statiques et de les comparer.

### Les polices standard (ou statiques)

Par le passé, une police de caractères était déclinée en plusieurs polices distinctes, chacune correspondant à une combinaison spécifique de largeur, d'épaisseur et de style. On disposait donc de fichiers distincts pour «&nbsp;Roboto Regular&nbsp;», «&nbsp;Roboto Bold&nbsp;» et «&nbsp;Roboto Bold Italic&nbsp;» — ce qui signifiait qu'on pouvait se retrouver avec 20 ou 30 fichiers de polices différents pour représenter une police complète (ce nombre pouvait être multiplié par plusieurs pour une grande police comportant également différentes largeurs).

Dans un tel scénario, pour utiliser une police de caractères de manière classique sur un site web pour le corps du texte, il fallait au moins quatre fichiers&nbsp;: normal, italique, gras et gras italique. Si l'on souhaitait ajouter d'autres graisses, comme une plus légère pour les légendes ou une plus épaisse pour mettre davantage l'accent, cela impliquait plusieurs fichiers supplémentaires. Cela se traduisait par davantage de requêtes HTTP et un volume de données plus important à télécharger (généralement environ 20ko ou plus par fichier).

### Les polices variables

Avec une police variable, toutes ces combinaisons de style et de graisse sont contenues dans un seul fichier. On a donc un fichier plus gros qu'un fichier de police classique mais dont la taille est inférieure ou proche de celle des 4 fichiers qu'on charge pour la police principale d'un site. L'avantage d'une police variable est qu'on peut accéder à l'intégralité des corps, graisses et italiques sans être plus contraint par ceux du ou des fichiers chargés séparément.

Cela permet d'utiliser des techniques typographiques courantes, telles que la mise en page de titres de tailles différentes avec des graisses variées pour une meilleure lisibilité à chaque taille, ou l'utilisation d'une largeur légèrement plus étroite pour les affichages riches en données. À titre de comparaison, il est courant, dans le système typographique d'un magazine, d'utiliser entre 10 et 15 combinaisons différentes de graisses et de largeurs, voire davantage, tout au long de la publication — ce qui offre une palette de styles bien plus large que celle qui est actuellement courante sur le Web (ou même réalisable pour des raisons de performances).

#### Quelques notes à propos des familles de polices, des corps et des variantes

Vous pouvez remarquer que nous avons parlé d'avoir un fichier de police spécifique pour chaque graisse et chaque style (c'est-à-dire gras, italique et gras italique), plutôt que de compter sur le navigateur pour les synthétiser. La raison en est que la plupart des polices ont des dessins très spécifiques pour les graisses plus épaisses et les italiques, qui incluent souvent des caractères complètement différents (par exemple, les lettres minuscules «&nbsp;a&nbsp;» et «&nbsp;g&nbsp;» sont souvent assez différentes en italique). Pour refléter le plus fidèlement possible le design de la police et éviter les différences entre les navigateurs et la manière dont ils peuvent ou non synthétiser les différents styles, il est plus précis de charger les fichiers de police spécifiques là où c'est nécessaire lorsqu'on utilise une police non variable.

Vous pouvez également remarquer que certaines polices variables sont fournies avec deux fichiers&nbsp;: un contenant les caractères sans italique et toutes leurs variations, et un autre contenant les variations italiques. Cette méthode est parfois choisie afin de réduire la taille globale du fichier dans les cas où les italiques ne sont pas nécessaires ou utilisés. Dans tous les cas, il est toujours possible de les lier avec un nom {{CSSxRef("font-family")}} commun afin de pouvoir les appeler en utilisant le même `font-family` et la valeur appropriée pour {{CSSxRef("font-style")}}.

## Introduction de « l'axe de variation »

Le cœur du nouveau format de polices variables est le concept **d'axe de variation** qui décrit l'intervalle autorisé pour faire varier un aspect particulier du design de la police. Ainsi, «&nbsp;l'axe de la graisse&nbsp;» décrit l'étendue entre les caractères les plus fins et les plus gras qui puissent être&nbsp;; «&nbsp;l'axe de la largeur&nbsp;» décrit l'étroitesse ou la largeur de la police&nbsp;; «&nbsp;l'axe italique&nbsp;» décrit si des formes italiques sont présentes et peuvent être activées ou désactivées en conséquence, etc. Notez qu'un axe peut être un intervalle ou un choix binaire. La graisse peut varier entre 1 et 999 tandis que l'italique peut être uniquement activable ou désactivable (`1` ou `0` respectivement).

Comme défini dans la spécification, il existe deux types d'axes&nbsp;: **enregistrés** et **spécifiques**&nbsp;:

- Les axes enregistrés sont ceux qui sont le plus fréquemment rencontrés, et suffisamment courants pour que les auteur·ice·s de la spécification aient jugé utile de les standardiser. Les cinq axes actuellement enregistrés sont la graisse, la largeur, l'inclinaison, l'italique et la taille optique. Le W3C s'est engagé à les associer aux attributs CSS existants, et dans un cas a introduit un nouvel attribut, que vous voyez ci-dessous.
- Les axes spécifiques n'ont pas de limites&nbsp;: le·la concepteur·ice du type de police peut définir et délimiter n'importe quel axe qu'il souhaite et doit simplement lui donner un **libellé** de quatre lettres pour l'identifier dans le format de fichier de police lui-même. Vous pouvez utiliser ces libellés de quatre lettres en CSS pour définir un point le long de cet axe de variation, comme montré dans les exemples de code ci-dessous.

### Les axes enregistrés et les attributs CSS existants

Dans cette section, nous allons démontrer les cinq axes enregistrés définis avec des exemples et le CSS correspondant. Dans la mesure du possible, la syntaxe standard et la syntaxe de plus bas niveau sont incluses. La syntaxe de plus bas niveau ({{CSSxRef("font-variation-settings")}}) a été le premier mécanisme mis en œuvre pour tester les premières implémentations de la prise en charge des polices variables et est nécessaire pour utiliser de nouveaux axes ou des axes spécifiques au-delà des cinq axes enregistrés. Cependant, l'intention du W3C était que cette syntaxe ne soit pas utilisée lorsque d'autres attributs sont disponibles. Par conséquent, dans la mesure du possible, la propriété appropriée doit être utilisée, la syntaxe de plus bas niveau de `font-variation-settings` n'étant utilisée que pour définir des valeurs ou des axes non disponibles autrement.

#### Notes

1. Les noms d'axes utilisés avec `font-variation-settings` sont sensibles à la casse. Les noms des axes enregistrés doivent être écrits en minuscules et les noms des axes spécifiques doivent être écrits en majuscules. Ainsi, dans ce cas&nbsp;:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (<i lang="en">weight</i>) correspond à l'axe enregistré du même nom et `GRAD` (grade) à un axe spécifique.

2. Si on a défini des valeurs avec `font-variation-settings` et qu'on souhaite changer une de ces valeurs, il est nécessaire de redéclarer l'ensemble des valeurs (de la même façon qu'on doit redéclarer l'ensemble des caractéristiques OpenType avec {{CSSxRef("font-feature-settings")}}). Il est possible de contourner cet écueil en utilisant [des propriétés CSS personnalisées](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) pour les valeurs individuelles et en modifiant uniquement la valeur d'une des propriétés personnalisée. L'exemple de code suit à la fin de ce guide.

### Graisse

La graisse (représentée par l'étiquette `wght`) définit l'axe de conception de l'épaisseur des traits formant les caractères (fine ou épaisse, en termes typographiques classiques). En CSS, il a longtemps été possible de définir cela par la propriété {{CSSxRef("font-weight")}}, qui prend des valeurs numériques allant de 100 à 900 par incréments de 100, ainsi que des mots-clés comme `normal` ou `bold`, qui sont des alias pour leurs valeurs numériques correspondantes (400 et 700 dans ce cas). Ces valeurs sont toujours appliquées pour les polices non variables ou variables, mais pour les polices variables, tout nombre de 1 à 1000 est désormais valide.

Il convient de noter qu'à ce stade, il n'existe aucun moyen, dans la déclaration `@font-face`, «&nbsp;d'associer&nbsp;» un point spécifique sur l'axe de variation d'une police variable au mot-clé `bold` (ou à tout autre mot-clé). Cela peut généralement être résolu assez facilement, mais nécessite une étape supplémentaire lors de l'écriture de votre CSS&nbsp;:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour éditer l'exemple dans le MDN Playground. Modifiez le code CSS pour jouer avec les valeurs de `font-weight`.

```html hidden live-sample___variable-fonts-weight-example
<div>
  <p class="p1">Graisse</p>
  <span>(font-weight: 625)</span>
</div>
<div>
  <p class="p2">Graisse</p>
  <span>(font-variation-settings: "wght" 625)</span>
</div>
<div class="ajustable">
  <p class="p3">Graisse</p>
  (font-variation-settings: "wght" <span id="angle-texte">625</span>)<br />
  <label for="axe-texte">Ajuster la graisse&nbsp;: </label>
  <input
    type="range"
    id="axe-texte"
    name="axe-texte"
    min="300"
    max="900"
    value="625" />
</div>
```

```css hidden live-sample___variable-fonts-weight-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 35% 100%;
  font-style: normal;
  font-display: swap;
}

p {
  font:
    1.2em "Amstelvar VF",
    "Georgia",
    serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.ajustable {
  border: 1px dashed;
  --axe-texte: 625;
}
```

```css live-sample___variable-fonts-weight-example
/* plage de graisse est de 300 à 900 */
.p1 {
  font-weight: 625;
}

/* plage de graisse est de 300 à 900 */
.p2 {
  font-variation-settings: "wght" 625;
}

/* Ajuster avec le curseur et la propriété personnalisée */
.p3 {
  font-variation-settings: "wght" var(--axe-texte);
}
```

```js hidden live-sample___variable-fonts-weight-example
const angle = document.querySelector("#axe-texte");
const texte = document.querySelector("#angle-texte");
const ajustable = document.querySelector(".ajustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  texte.innerText = angle;
  ajustable.style.setProperty("--axe-texte", angle);
});
```

{{EmbedLiveSample("variable-fonts-weight-example", "", 450)}}

### Largeur

La largeur (représentée par la balise `wdth`) définit l'axe de conception qui détermine à quel point les formes des lettres peuvent être étroites ou larges (condensées ou étendues, en termes typographiques). Ce paramètre est généralement défini en CSS à l'aide de la propriété {{CSSxRef("font-stretch")}}, dont les valeurs sont exprimées en pourcentage au-dessus ou en dessous de la «&nbsp;normale&nbsp;» (100%), tout nombre supérieur à 0 est techniquement valide, bien qu'il soit beaucoup plus probable que la plage se situe plus près de la marque des 100%, par exemple entre 75% et 125%. Si la valeur numérique fournie se situe en dehors de la plage encodée dans la police, le navigateur doit afficher la police avec la valeur autorisée la plus proche.

> [!NOTE]
> Le symbole % n'est pas utilisé avec la propriété `font-variation-settings`.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans MDN Playground. Modifiez le code CSS pour tester différentes valeurs de largeur de police.

```html hidden live-sample___variable-fonts-width-example
<div>
  <p class="p1">Largeur</p>
  <span>(font-stretch: 60%)</span>
</div>
<div>
  <p class="p2">Largeur</p>
  <span>(font-variation-settings: "wdth" 60)</span>
</div>
<div class="ajustable">
  <p class="p3">Largeur</p>
  (font-variation-settings: "wdth" <span id="angle-texte">60</span>)<br />

  <label for="axe-texte">Ajuster la largeur&nbsp;: </label>
  <input
    type="range"
    id="axe-texte"
    name="axe-texte"
    min="55"
    max="100"
    value="60" />
</div>
```

```css hidden live-sample___variable-fonts-width-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 35% 100%;
  font-style: normal;
  font-display: swap;
}

p {
  font:
    1.2em "Amstelvar VF",
    "Georgia",
    serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.ajustable {
  border: 1px dashed;
  --axe-texte: 60;
}
```

```css live-sample___variable-fonts-width-example
/* la plage de largeur va de 55% à 100% */
.p1 {
  font-stretch: 60%;
}

/* la plage de largeur est un nombre entier compris entre 55 et 100 */
.p2 {
  font-variation-settings: "wdth" 60;
}

/* Ajuster avec le curseur et la propriété personnalisée */
.p3 {
  font-variation-settings: "wdth" var(--axe-texte);
}
```

```js hidden live-sample___variable-fonts-width-example
const angle = document.querySelector("#axe-texte");
const texte = document.querySelector("#angle-texte");
const ajustable = document.querySelector(".ajustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  texte.innerText = angle;
  ajustable.style.setProperty("--axe-texte", angle);
});
```

{{EmbedLiveSample("variable-fonts-width-example", "", 450)}}

### Italique

L'axe italique (`ital`) peut être défini dans l'intervalle `[0-1]`, où `0` correspond à «&nbsp;pas d'italique&nbsp;», `0,5` à «&nbsp;italique à mi-chemin&nbsp;» et `1` à «&nbsp;italique complet&nbsp;». Les polices italiques présentent souvent des formes de lettres très différentes de celles de leurs équivalents droits, donc lors de la transition entre le droit et l'italique, plusieurs substitutions de glyphes (ou de caractères) ont généralement lieu. L'italique et l'oblique sont souvent utilisés de manière quelque peu interchangeable, mais sont en réalité très différents. Dans ce contexte, l'oblique est défini par le terme `slant` (voir la section ci-dessous), et une police de caractères comporte généralement l'un ou l'autre, mais pas les deux.

En CSS, l'italique et l'oblique s'appliquent tous deux au texte à l'aide de la propriété {{CSSxRef("font-style")}}. Notez également l'introduction de `font-synthesis: none;`, qui empêche les navigateurs d'appliquer par inadvertance l'axe de variation et un italique synthétisé. Cela permet également d'éviter l'effet de faux gras.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans MDN Playground. Modifiez le code CSS pour tester les polices en italique.

```html hidden live-sample___variable-fonts-italic-example
<div>
  <p class="p1">Italique</p>
  <span>(font-style: italic)</span>
  <p class=".p1-sans-synthesis">Italique</p>
  <span>(font-style: italic; font-synthesis: none)</span>
</div>
<div>
  <p class="p2">Italique</p>
  <span>(font-variation-settings: "ital" 1)</span>
</div>
<div class="ajustable">
  <p class="p3">Italique</p>
  (font-variation-settings: "ital" <span id="angle-texte">1</span>)<br />

  <label for="axe-texte">Ajuster l'italique&nbsp;: </label>
  <input
    type="range"
    id="axe-texte"
    name="axe-texte"
    min="0"
    max="1"
    value="1" />
</div>
```

```css hidden live-sample___variable-fonts-italic-example
@font-face {
  font-family: "Jost VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/jost-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 75% 150%;
  font-display: swap;
}

p {
  font:
    1.2em "Jost VF",
    "Helvetica",
    "Arial",
    sans-serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.ajustable {
  border: 1px dashed;
  --axe-texte: 1;
}
```

```css live-sample___variable-fonts-italic-example
/* font-style: italic, avec et sans font-synthesis */
.p1 {
  font-style: italic;
}

.p1-sans-synthesis {
  font-style: italic;
  font-synthesis: none;
}

/* plage italique est 0 ou 1 */
.p2 {
  font-variation-settings: "ital" 1;
  font-synthesis: none;
}

/* Ajuster avec le curseur et la propriété personnalisée */
.p3 {
  font-synthesis: none;
  font-variation-settings: "ital" var(--axe-texte);
}
```

```js hidden live-sample___variable-fonts-italic-example
const angle = document.querySelector("#axe-texte");
const texte = document.querySelector("#angle-texte");
const ajustable = document.querySelector(".ajustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  texte.innerText = angle;
  ajustable.style.setProperty("--axe-texte", angle);
});
```

{{EmbedLiveSample("variable-fonts-italic-example", "", 450)}}

### Pente

La pente (<i lang="en">slant</i> en anglais) (représentée par l'étiquette `slnt`), ou comme on l'appelle souvent, «&nbsp;oblique&nbsp;» — est différente de l'italique véritable en ce qu'elle modifie l'angle des formes des lettres mais n'effectue aucun type de substitution de caractères. Elle est également variable, car elle s'exprime sous forme d'intervalle numérique. Cela permet de faire varier la police n'importe où le long de l'axe de la pente. La plage autorisée va de -90 à 90 degrés.

Le deux propriétés qui peuvent contrôler la pente sont {{CSSxRef("font-style")}} et {{CSSxRef("font-variation-settings")}}. Les deux déclarations de propriété suivantes sont équivalentes&nbsp;:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Préférez la propriété `font-style` à la propriété `font-variation-settings`. Le mot-clé `deg` n'est pas utilisé lors de l'utilisation de la propriété `font-variation-settings`. De plus, dans le cas de la propriété `font-variation-settings`, un angle positif signifie une inclinaison dans le sens antihoraire.

Dans l'exemple interactif suivant, vous pouvez ajuster la pente.

```html hidden live-sample___slant-example
<div>
  <p class="font-style">Pente</p>
  <span>(font-style: oblique 5deg)</span>
</div>
<div>
  <p class="font-variation">Pente</p>
  <span>(font-variation-settings: 'slnt' -5)</span>
</div>
<div class="boite-ajustable">
  <p class="ajustable">Pente</p>
  (font-variation-settings: 'slnt' <span id="angle-texte">-5</span>)<br />

  <label for="angle-pente">Ajuster la pente&nbsp;: </label>
  <input
    type="range"
    name="range-slider"
    value="5"
    id="angle-pente"
    min="-15"
    max="15" />
</div>
```

```css hidden live-sample___slant-example
@font-face {
  font-family: "SlantFont";
  font-style: oblique -15deg 15deg;
  src: url("https://mdn.github.io/shared-assets/fonts/font_with_slant_axis.woff2")
    format("woff2");
}

p {
  font-family: "SlantFont", sans-serif;
  display: inline-block;
  margin: 1rem;
  font-size: 4rem;
}

.boite-ajustable {
  border: 1px dashed;
  --angle-texte: -5;
}
```

```css live-sample___slant-example
.font-style {
  font-style: oblique 5deg;
}

.font-variation {
  font-variation-settings: "slnt" -5;
}

.ajustable {
  font-variation-settings: "slnt" var(--angle-pente);
}
```

```js hidden live-sample___slant-example
const angle = document.querySelector("#angle-pente");
const texte = document.querySelector("#angle-texte");
const ajustable = document.querySelector(".ajustable");

angle.addEventListener("input", (e) => {
  const angle = -1 * e.target.value;
  texte.innerText = angle;
  ajustable.style.setProperty("--angle-pente", angle);
});
```

{{EmbedLiveSample("slant-example", "", 400)}}

### Taille optique

Cette technique est quelque chose de nouveau pour les polices numériques et le CSS, mais elle est une technique vieille de plusieurs siècles dans la conception et la création de caractères en métal. La taille optique fait référence à la pratique consistant à varier l'épaisseur globale des traits des lettres en fonction de la taille physique. Si la taille est très petite (comme l'équivalent de 10 ou 12px), les caractères ont une épaisseur globale plus importante, et peut-être d'autres petites modifications pour s'assurer qu'ils se reproduisent et soient lisibles à une taille physiquement plus petite. À l'inverse, lorsque l'on utilise une taille beaucoup plus grande (comme 48 ou 60px), il peut y avoir une variation beaucoup plus importante entre les traits épais et fins, montrant le dessin de la police plus en accord avec l'intention originale.

Bien que cela est fait à l'origine pour compenser le processus d'impression à l'encre et sur papier (les lignes très fines à petite taille ne s'impriment souvent pas, donnant aux formes des lettres un aspect cassé), cela se traduit bien sur les écrans numériques lorsqu'on compense la qualité de l'écran et le rendu de la taille physique.

Les valeurs de taille optique sont généralement destinées à être appliquées automatiquement en fonction de la `font-size`, mais elles peuvent également être manipulées à l'aide de la syntaxe de niveau inférieur `font-variation-settings`.

Il existe un nouvel attribut, {{CSSxRef("font-optical-sizing")}}, créé pour prendre en charge les polices variables dans CSS. Lors de l'utilisation de `font-optical-sizing`, les seules valeurs autorisées sont `auto` ou `none` — cet attribut ne permet donc que d'activer ou de désactiver la taille optique. Cependant, lors de l'utilisation de `font-variation-settings: 'opsz' <num>`, vous pouvez fournir une valeur numérique. Dans la plupart des cas, vous voulez faire correspondre la `font-size` (la taille physique à laquelle le texte est rendu) avec la valeur `opsz` (qui est la manière dont la taille optique est censée être appliquée lors de l'utilisation de `auto`). L'option de fournir une valeur spécifique est prévue afin que, si nécessaire, il soit possible de remplacer la valeur par défaut — pour la lisibilité, l'esthétique ou toute autre raison — par une valeur spécifique.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans MDN Playground. Modifiez le code CSS pour tester différentes valeurs de taille optique.

```html hidden live-sample___optical-sizing-example
<div>
  <p class="p1">Taille optique</p>
  <span>(font-optical-sizing: none)</span>
</div>
<div>
  <p class="p2">Taille optique</p>
  <span>(font-optical-sizing: auto)</span>
</div>
<div>
  <p class="p3">Taille optique</p>
  <span>(font-variation-settings: "opsz" 64)</span>
</div>

<div class="ajustable">
  <p class="p4">Taille optique</p>
  (font-variation-settings: "opsz" <span id="angle-texte">-64</span>)<br />

  <label for="axe-texte">Ajuster la taille optique&nbsp;: </label>
  <input
    type="range"
    name="axe-texte"
    value="64"
    id="axe-texte"
    min="8"
    max="144" />
</div>
```

```css hidden live-sample___optical-sizing-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 75% 150%;
  font-style: normal;
  font-display: swap;
}

p {
  font:
    1.2em "Amstelvar VF",
    "Georgia",
    serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.ajustable {
  border: 1px dashed;
  --axe-texte: 64;
}
```

```css live-sample___optical-sizing-example
.p1 {
  font-optical-sizing: none;
}
/* font-optical-sizing peut être auto ou none */
.p2 {
  font-optical-sizing: auto;
}

/* la plage optique est de 8 à 144 */
.p3 {
  font-variation-settings: "opsz" 64;
}

/* Ajuster avec le curseur et la propriété personnalisée */
.p4 {
  font-variation-settings: "opsz" var(--axe-texte);
}
```

```js hidden live-sample___optical-sizing-example
const angle = document.querySelector("#axe-texte");
const texte = document.querySelector("#angle-texte");
const ajustable = document.querySelector(".ajustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  texte.innerText = angle;
  ajustable.style.setProperty("--axe-texte", angle);
});
```

{{EmbedLiveSample("optical-sizing-example", "", 550)}}

### Axes spécifiques

Les axes spécifiques sont exactement ce que leur nom indique&nbsp;: il peut s'agir de n'importe quel axe de variation de conception imaginé par le·la créateur·ice de la police. Certains peuvent devenir assez courants — voire faire l'objet d'un dépôt de marque — mais seul le temps nous le dira.

### Grade

Le grade peut devenir l'un des axes spécifiques les plus courants, car il s'inscrit dans une tradition bien établie de la conception typographique. La pratique consistant à concevoir différents grades d'une police de caractères répond souvent à l'usage prévu et à la technique d'impression. Le terme «&nbsp;grade&nbsp;» fait référence à l'épaisseur ou à la densité relative de la police, mais diffère de la notion traditionnelle «&nbsp;d'épaisseur&nbsp;» dans la mesure où l'espace physique occupé par le texte reste inchangé, de sorte que la modification du grade du texte n'altère pas la mise en page globale du texte ni celle des éléments qui l'entourent. Cela fait du grade un axe de variation utile, car il peut être modifié ou animé sans entraîner de réajustement du texte lui-même.

```css
font-variation-settings: "GRAD" 88;
```

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans MDN Playground. Modifiez le code CSS pour tester différentes valeurs de grade de police.

```html hidden live-sample___grade-example
<div>
  <p class="p1">Grade</p>
  <span>(font-variation-settings: 'GRAD' 88)</span>
</div>

<div class="ajustable">
  <p class="p2">Grade</p>
  (font-variation-settings: 'GRAD' <span id="angle-texte">88</span>)<br />

  <label for="axe-texte">Ajuster le grade&nbsp;: </label>
  <input
    type="range"
    name="axe-texte"
    value="88"
    id="axe-texte"
    min="88"
    max="150" />
</div>
```

```css hidden live-sample___grade-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 75% 150%;
  font-style: normal;
  font-display: swap;
}

p {
  font:
    1.2em "Amstelvar VF",
    "Georgia",
    serif;
  font-size: 64px;
  margin: 1rem;
  display: inline-block;
}

.ajustable {
  border: 1px dashed;
  --axe-texte: 88;
}
```

```css live-sample___grade-example
/* la plage de grade est de 88 à 150 */
.p1 {
  font-size: 64px;
  font-variation-settings: "GRAD" 88;
}

/* Ajuster avec le curseur et la propriété personnalisée */
.p2 {
  font-size: 64px;
  font-variation-settings: "GRAD" var(--axe-texte);
}
```

```js hidden live-sample___grade-example
const angle = document.querySelector("#axe-texte");
const texte = document.querySelector("#angle-texte");
const ajustable = document.querySelector(".ajustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  texte.innerText = angle;
  ajustable.style.setProperty("--axe-texte", angle);
});
```

{{EmbedLiveSample("grade-example", "", 300)}}

### Utiliser une police variable : les changements pour `@font-face`

La syntaxe permettant de charger des polices variables est très similaire à celle de n'importe quelle autre police du Web, à quelques différences notables près, qui sont rendues possibles grâce aux améliorations apportées à la syntaxe traditionnelle de {{CSSxRef("@font-face")}} désormais disponible dans les navigateurs modernes.

La syntaxe de base reste la même, mais il est désormais possible de définir la technologie de police utilisée et de définir les plages autorisées pour des descripteurs tels que `font-weight` et `font-stretch`, plutôt que de les nommer en fonction du fichier de police chargé.

#### Exemple d'une police standard réale droite

```css
@font-face {
  font-family: "NomMaPoliceVariable";
  src: url("chemin/vers/fichier/police/ma-police-variable.woff2")
    format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;

  font-style: normal;
}
```

Dans ce cas, la déclaration `font-style: normal` indique que ce fichier de police doit être utilisé lorsque `font-family` est défini sur `NomMaPoliceVariable` et que {{CSSxRef("font-style")}} est défini sur `normal`. Vous pouvez également utiliser `font-style: oblique 0deg` ou `font-style: oblique 0deg 20deg` pour indiquer que la police comporte des glyphes normaux et droits (indiqués par `0deg`).

#### Exemple d'une police qui ne contient que des italiques et aucun caractère droit

```css
@font-face {
  font-family: "NomMaPoliceVariable";
  src: url("chemin/vers/fichier/police/ma-police-variable.woff2")
    format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;

  font-style: italic;
}
```

Dans ce cas, la déclaration `font-style: italic` indique que ce fichier de police doit être utilisé lorsque `font-family` est défini sur `NomMaPoliceVariable` et que {{CSSxRef("font-style")}} est défini sur `italic`. Vous pouvez également utiliser `font-style: oblique 14deg` pour indiquer que la police comporte des glyphes italiques.

#### Exemple d'une police avec un axe de pente

```css
@font-face {
  font-family: "NomMaPoliceVariable";
  src: url("chemin/vers/fichier/police/ma-police-variable.woff2")
    format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;

  font-style: oblique 0deg 12deg;
}
```

Dans ce cas, la valeur `oblique 0deg 12deg` indique que ce fichier de police doit être utilisé lorsque dans une règle de style la propriété `font-family` est `NomMaPoliceVariable` et que la propriété {{CSSxRef("font-style")}} est oblique avec un angle compris entre zéro et 12 degrés inclus.

> [!NOTE]
> Tous les navigateurs n'ont pas encore implémenté la syntaxe complète pour le format des polices, il faut donc tester avec précaution. Tous les navigateurs qui prennent en charge les polices variables les rendent toujours si vous définissez le format sur le format de fichier seul, plutôt que sur format-variations (c'est-à-dire `woff2` au lieu de `woff2-variations`), mais il est préférable d'utiliser la syntaxe correcte si possible.

> [!NOTE]
> Fournir des valeurs d'intervalle pour `font-weight`, `font-stretch` et `font-style` empêche le navigateur d'afficher des polices en dehors de ces intervalles en utilisant les attributs appropriés (c'est-à-dire `font-weight` ou `font-stretch`), mais ne vous empêche pas de fournir une valeur invalide avec `font-variation-settings`, donc utilisez-la avec précaution.

## Travailler avec d'anciens navigateurs

La prise en charge des polices variables peut être vérifiée à l'aide des requêtes de fonctionnalités CSS (voir {{CSSxRef("@supports")}}). Il est donc possible d'utiliser des polices variables en production et de limiter l'application du CSS qui les appelle à l'intérieur d'un bloc de requêtes de fonctionnalités.

```css
h1 {
  font-family: une-famille-de-police-pas-variable;
}

@supports (font-variation-settings: "wdth" 115) {
  h1 {
    font-family: une-famille-de-police-variable;
  }
}
```

## Pages d'exemples

Les exemples suivants illustrent deux façons différentes de structurer votre code CSS. Le premier utilise les attributs standard dans la mesure du possible. Le second exemple utilise les propriétés CSS personnalisées pour définir les valeurs d'une chaîne de caractères `font-variation-settings` et montre comment mettre à jour plus facilement les valeurs d'une variable en la remplaçant individuellement, plutôt que de réécrire la chaîne de caractères entière. Notez l'effet au survol sur le `h2`, qui ne modifie que la valeur de la propriété personnalisée de l'axe de grade. Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html hidden live-sample___sample-page-example
<div class="conteneur conteneur1">
  <h1>Moby-Dick</h1>
  <h2>Chapitre 1. Mirages.</h2>
  <p>
    Appelez-moi Ismaël. Voici quelques années — peu importe combien — le
    porte-monnaie vide ou presque, rien ne me retenant à terre, je songeai à
    naviguer un peu et à voir l'étendue liquide du globe. C'est une méthode à
    moi pour secouer la mélancolie et rajeunir le sang. Quand je sens s'abaisser
    le coin de mes lèvres, quand s'installe en mon âme le crachin d'un humide
    novembre, quand je me surprends à faire halte devant l'échoppe du fabricant
    de cercueils et à emboîter le pas à tout enterrement que je croise, et, plus
    particulièrement, lorsque mon hypocondrie me tient si fortement que je dois
    faire appel à tout mon sens moral pour me retenir de me ruer délibérément
    dans la rue, afin d'arracher systématiquement à tout un chacun son chapeau…
    alors, j'estime qu'il est grand temps pour moi de prendre la mer.
  </p>
</div>
<hr />
<div class="conteneur conteneur2 demo2">
  <h1>Moby-Dick</h1>
  <h2>Chapitre 1. (survolez ici)</h2>
  <p>
    Appelez-moi Ismaël. Voici quelques années — peu importe combien — le
    porte-monnaie vide ou presque, rien ne me retenant à terre, je songeai à
    naviguer un peu et à voir l'étendue liquide du globe. C'est une méthode à
    moi pour secouer la mélancolie et rajeunir le sang. Quand je sens s'abaisser
    le coin de mes lèvres, quand s'installe en mon âme le crachin d'un humide
    novembre, quand je me surprends à faire halte devant l'échoppe du fabricant
    de cercueils et à emboîter le pas à tout enterrement que je croise, et, plus
    particulièrement, lorsque mon hypocondrie me tient si fortement que je dois
    faire appel à tout mon sens moral pour me retenir de me ruer délibérément
    dans la rue, afin d'arracher systématiquement à tout un chacun son chapeau…
    alors, j'estime qu'il est grand temps pour moi de prendre la mer.
  </p>
</div>
```

```css hidden live-sample___sample-page-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 75% 150%;
  font-style: normal;
  font-display: swap;
}

body {
  font:
    1.2em "Amstelvar VF",
    "Georgia",
    serif;
  margin: 20px;
  padding: 0;
}

.conteneur * {
  margin: 0.5rem auto 1rem;
  max-width: 42rem;
}
```

```css live-sample___sample-page-example
.conteneur1 h1 {
  font-optical-sizing: auto;
  font-size: 5rem;
  font-stretch: 85%;
  font-weight: 450;
}
.conteneur1 h2 {
  font-optical-sizing: auto;
  font-size: 2.25rem;
  font-stretch: 90%;
  font-weight: 575;
}
.conteneur1 p {
  font-optical-sizing: auto;
  font-size: 1rem;
  font-stretch: 100%;
  font-weight: 375;
}
.demo2 {
  --text-wght: 375;
  --text-wdth: 100;
  --text-opsz: 16;
  --text-GRAD: 88;
}
.conteneur2 > * {
  font-size: 5rem;
  font-variation-settings:
    "wght" var(--text-wght),
    "wdth" var(--text-wdth),
    "opsz" var(--text-opsz),
    "GRAD" var(--text-GRAD);
}
.conteneur2 h1 {
  --text-wght: 450;
  --text-wdth: 85;
  --text-opsz: 80;
  font-size: 5rem;
}
.conteneur2 h2 {
  --text-wght: 575;
  --text-wdth: 95;
  --text-opsz: 36;
  font-size: 2.25rem;
}
.conteneur2 h2:hover {
  --text-GRAD: 130;
}
.conteneur2 p {
  font-size: 1rem;
}
```

{{EmbedLiveSample("sample-page-example", "", 850)}}

## Resources

- [La spécification W3C du module de polices CSS de niveau 4 <sup>(angl.)</sup>](https://drafts.csswg.org/css-fonts-4/) (brouillon de l'éditeur)
- [La file d'attente des problèmes GitHub du W3C <sup>(angl.)</sup>](https://github.com/w3c/csswg-drafts/issues)
- [L'introduction aux variations Open Type de Microsoft <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Registre des étiquettes d'axe de variation - Microsoft OpenType Design <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue <sup>(angl.)</sup>](https://wakamaifondue.com/) (un site qui vous dit ce que votre police peut faire avec une interface d'inspection par glisser-déposer)
- [Axis Praxis <sup>(angl.)</sup>](https://www.axis-praxis.org/) (le site original de terrain d'essai pour les polices variables)
- [V-Fonts.com <sup>(angl.)</sup>](https://v-fonts.com/) (un catalogue de polices variables et où les obtenir)
- [Font Playground <sup>(angl.)</sup>](https://play.typedetail.com/) (un autre terrain d'essai pour les polices variables avec des approches très uniques de l'interface utilisateur)
