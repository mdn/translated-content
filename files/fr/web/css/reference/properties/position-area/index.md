---
title: position-area
slug: Web/CSS/Reference/Properties/position-area
l10n:
  sourceCommit: 3e0ba995376cace7f08f0771635f86f0fb1753b3
---

La propriété [CSS](/fr/docs/Web/CSS) **`position-area`** permet de positionner un élément ancré par rapport aux bords de son élément d'ancrage associé en plaçant l'élément positionné sur une ou plusieurs cases d'une grille implicite 3x3, où l'élément d'ancrage est la case centrale.

`position-area` offre une alternative pratique à l'attachement et au positionnement d'un élément par rapport à son ancre avec les {{Glossary("inset properties", "propriétés d'encart")}} et la fonction {{CSSxRef("anchor()")}}. Le concept basé sur la grille résout le cas d'utilisation courant consistant à positionner les bords du bloc englobant de l'élément positionné par rapport aux bords de son élément d'ancrage par défaut.

Si un élément n'a pas d'élément d'ancrage par défaut, ou n'est pas un élément positionné absolument, cette propriété n'a aucun effet.

> [!NOTE]
> Cette propriété était à l'origine nommée et prise en charge dans les navigateurs Chromium sous le nom de `inset-area`, avec les mêmes valeurs de propriété. Les deux noms de propriété seront pris en charge pendant un certain temps, à des fins de compatibilité ascendante.

## Syntaxe

```css
/* Valeur par défaut */
position-area: none;

/* Deux mots-clés <position-area> définissant une seule case spécifique */
position-area: top left;
position-area: start end;
position-area: block-start center;
position-area: inline-start block-end;
position-area: x-start y-end;
position-area: center self-y-end;

/* Deux mots-clés <position-area> couvrant deux cases */
position-area: top span-left;
position-area: center span-start;
position-area: inline-start span-block-end;
position-area: y-start span-x-end;

/* Deux mots-clés <position-area> couvrant trois cases */
position-area: top span-all;
position-area: block-end span-all;
position-area: self-x-start span-all;

/* Un mot-clé <position-area> avec un deuxième mot-clé <position-area> implicite */
position-area: top; /* équivaut à : top span-all */
position-area: inline-start; /* équivaut à : inline-start span-all */
position-area: center; /* équivaut à : center center */
position-area: span-all; /* équivaut à : center center */
position-area: end; /* équivaut à : end end */

/* Valeurs globales */
position-area: inherit;
position-area: initial;
position-area: revert;
position-area: revert-layer;
position-area: unset;
```

### Valeurs

La valeur de la propriété est composée de deux mots-clés `<position-area>`, ou du mot-clé `none`. Si un seul mot-clé `<position-area>` est fourni, le deuxième mot-clé est implicite.

- {{CSSxRef("position-area_value", "&lt;position-area&gt;")}}
  - : Définit la zone de la grille de la zone de position dans laquelle placer les éléments positionnés sélectionnés.

- `none`
  - : Aucune zone de position n'est définie.

## Description

La propriété `position-area` fournit une alternative à la fonction `anchor()` pour positionner des éléments par rapport à des ancres. `position-area` fonctionne sur le concept d'une grille 3x3 de cases, appelée **grille de la zone de position**, avec l'élément ancre étant la case centrale&nbsp;:

![La grille de la zone de position, comme décrit ci-dessous](position-area.svg)

Les cases de la grille sont réparties en lignes et colonnes&nbsp;:

- Les trois lignes sont représentées par les [valeurs physiques](/fr/docs/Web/CSS/Reference/Values/position-area_value#mots-clés_de_la_grille_physique) `top`, `center` et `bottom`. Elles ont également des [équivalents logiques](/fr/docs/Web/CSS/Reference/Values/position-area_value#mots-clés_logiques) tels que `block-start`, `center` et `block-end`, et des [équivalents de coordonnées](/fr/docs/Web/CSS/Reference/Values/position-area_value#mots-clés_de_la_grille_par_coordonnées) — `y-start`, `center` et `y-end`.
- Les trois colonnes sont représentées par les valeurs physiques `left`, `center` et `right`. Elles ont également des équivalents logiques tels que `inline-start`, `center` et `inline-end`, et des équivalents de coordonnées — `x-start`, `center` et `x-end`.

Les dimensions de la case centrale sont définies par le [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block) de l'élément ancre, tandis que les dimensions du bord extérieur de la grille sont définies par le bloc englobant de l'élément positionné.

La valeur {{CSSxRef("position-area_value", "&lt;position-area&gt;")}} est composée d'un ou deux mots-clés, qui définissent la région de la grille dans laquelle l'élément positionné doit être placé. Pour être exact, le bloc englobant de l'élément positionné est défini sur la zone de la grille.

Par exemple&nbsp;:

- Vous pouvez définir une valeur de ligne et une valeur de colonne pour placer l'élément positionné dans une seule case de la grille spécifique — par exemple, `top left` (équivalent logique `start start`) ou `bottom center` (équivalent logique `end center`) placera l'élément positionné dans la case en haut à droite ou au centre en bas.
- Vous pouvez définir une valeur de ligne ou de colonne plus une valeur `span-*` pour couvrir deux ou trois cases. La première valeur définit la ligne ou la colonne dans laquelle placer l'élément positionné, le plaçant initialement au centre, et l'autre définit les autres cases de cette ligne ou colonne à couvrir. Par exemple&nbsp;:
  - `top span-left` fait que l'élément positionné est placé au centre de la ligne du haut et s'étend sur les cases du centre et de la gauche de cette ligne.
  - `block-end span-inline-end` fait que l'élément positionné est placé au centre de la ligne de fin de bloc et s'étend sur les cases du centre et de la fin en ligne de cette ligne.
  - `bottom span-all` et `y-end span-all` font que l'élément positionné est placé au centre de la ligne du bas et s'étend sur trois cases, dans ce cas les cases de gauche, du centre et de droite de la ligne du bas.

Pour des informations détaillées sur les fonctionnalités des ancres, leur utilisation et la propriété `position-area`, consultez le module [de positionnement des ancres CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) et le guide [Utilisation du positionnement des ancres CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using), en particulier la section sur [définir une `position-area`](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_a_position-area).

### Ajuster le comportement par défaut

Lorsque une valeur {{CSSxRef("position-area_value", "&lt;position-area&gt;")}} est définie sur un élément positionné, certaines de ses propriétés verront leur comportement par défaut ajusté pour fournir un alignement par défaut approprié.

#### Valeur `normal` des propriétés d'auto-alignement

La valeur `normal` des propriétés d'auto-alignement, y compris {{CSSxRef("align-items")}}, {{CSSxRef("align-self")}}, {{CSSxRef("justify-items")}} et {{CSSxRef("justify-self")}}, se comporte comme `start`, `end` ou [`anchor-center`](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#centrer_sur_lancre_avec_anchor-center). La valeur par défaut d'une propriété d'auto-alignement dépend du positionnement de l'élément&nbsp;:

- Si la valeur de `position-area` définit la région centrale dans un axe, l'alignement par défaut dans cet axe est `anchor-center`.
- Sinon, le comportement est l'opposé de la région définie par la propriété `position-area`. Par exemple, si la valeur de `position-area` définit la région de début de son axe, l'alignement par défaut dans cet axe est `end`.

Par exemple, si le `writing-mode` est défini sur `horizontal-tb`, `position-area: top span-x-start` fait que l'élément positionné est placé au centre de la ligne du haut et s'étend sur les cases du centre et du début de cette ligne. Dans ce cas, les propriétés d'auto-alignement auront par défaut `align-self: end` et `justify-self: anchor-center`.

#### Propriétés d'encart et valeurs

Lorsque un élément positionné par ancre est positionné à l'aide de la propriété `position-area`, toutes les {{Glossary("inset properties", "propriétés d'encart")}} définies, telles que {{CSSxRef("top")}} ou {{CSSxRef("inset-inline-end")}}, définissent des décalages par rapport à la zone de position. Certaines autres valeurs de propriété, comme [`max-block-size: 100%`](/fr/docs/Web/CSS/Reference/Properties/max-block-size), seront également relatives à la zone de position. Toutes les propriétés d'encart définies ou par défaut sur `auto` se comporteront comme si leur valeur était définie sur `0`.

### Digression sur la largeur des éléments positionnés

Si l'élément positionné n'a pas de taille spécifique définie, sa taille par défaut sera sa {{Glossary("Intrinsic_Size", "taille intrinsèque")}}, mais elle sera également affectée par la taille de la grille de la zone de position.

Si l'élément positionné est placé dans une seule cellule haut-centre, bas-centre ou centre-centre, sa taille en bloc sera la même que celle du bloc contenant l'ancre, s'étendant vers le haut, le bas ou dans les deux directions respectivement. L'élément positionné s'alignera avec la case de la grille définie mais adoptera la même largeur que l'élément ancre. Cependant, il ne permettra pas à son contenu de déborder — sa largeur minimale sera son `min-content` (comme défini par la largeur de son mot le plus long).

Si l'élément positionné est placé dans toute autre case unique de la grille (par exemple avec `position-area: top left`) ou est défini pour s'étendre sur deux cases ou plus (par exemple en utilisant `position-area: bottom span-all`), il s'alignera avec la zone de grille définie mais se comportera comme s'il avait une largeur ({{CSSxRef("width")}}) de `max-content` définie dessus. Il est dimensionné en fonction de la taille de son bloc contenant, qui est la taille qui lui est imposée lorsqu'il est défini sur `position: fixed`. Il s'étendra aussi large que le contenu textuel, bien qu'il puisse également être contraint par le bord du `<body>`.

### Utiliser `position-area` pour positionner des fenêtres contextuelles

Lors de l'utilisation de `position-area` pour positionner des [fenêtres contextuelles](/fr/docs/Web/HTML/Reference/Global_attributes/popover), soyez conscient que [les styles par défaut pour les fenêtres contextuelles <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) peuvent entrer en conflit avec la position que vous essayez d'obtenir. Les coupables habituels sont les styles par défaut pour `margin` et `inset`, il est donc conseillé de les réinitialiser&nbsp;:

```css
.ma-fenetre-contextuelle {
  margin: 0;
  inset: auto;
}
```

Le groupe de travail CSS examine [des moyens d'éviter d'avoir besoin de ce contournement <sup>(angl.)</sup>](https://github.com/w3c/csswg-drafts/issues/10258).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Dans cet exemple, un élément positionné est attaché et positionné par rapport à son ancre associée en utilisant la propriété `position-area`.

#### HTML

Le HTML inclut un bloc ({{HTMLElement("div")}}) et un paragraphe ({{HTMLElement("p")}}). Le `<p>` sera positionné par rapport au `<div>` avec CSS. Nous incluons également un bloc de style qui sera rendu visible. Tous les éléments sont définis pour être directement modifiables avec l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable).

```html-nolint
<div class="ancre" contenteditable="true">⚓︎</div>

<p class="elementPositionne" contenteditable="true">Ceci peut être modifié.</p>

<style contenteditable="true">.elementPositionne {
    position-area: top center;
  }
</style>
```

#### CSS

Nous convertissons le `<div>` en un élément d'ancrage avec la propriété {{CSSxRef("anchor-name")}}. Nous associons ensuite le `<p>` positionné absolument à cet ancrage en définissant sa valeur {{CSSxRef("position-anchor")}} sur le même nom d'ancrage.

Nous définissons la valeur initiale de `position-area` sur `top center`. Cette valeur est définie sur un sélecteur `p`, donc la valeur a moins de [spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity) que toute valeur ajoutée au sélecteur de classe `.elementPositionne` du bloc `<style>`. En conséquence, vous pouvez remplacer la valeur initiale de `position-area` en définissant une valeur `position-area` à l'intérieur du bloc de style.

```css
.ancre {
  anchor-name: --infobox;
  background: palegoldenrod;
  font-size: 3em;
  width: fit-content;
  border: 1px solid goldenrod;
  margin: 100px auto;
}

p {
  position: absolute;
  position-anchor: --infobox;
  position-area: top center;
  margin: 0;
  background-color: darkkhaki;
  border: 1px solid darkolivegreen;
}

style {
  display: block;
  white-space: pre;
  font-family: monospace;
  background-color: #ededed;
  -webkit-user-modify: read-write-plaintext-only;
  line-height: 1.5;
  padding: 10px;
}
```

#### Résultats

{{EmbedLiveSample("Exemple simple", "100%", 360)}}

Essayez de modifier la quantité de texte dans l'élément positionné par l'ancre pour voir comment il se développe. Essayez également de changer la valeur de la propriété `position-area` en quelque chose d'autre, comme `center`.

### Comparaison des valeurs de `position-area`

Cette démonstration crée une ancre et attache un élément positionné à celle-ci. Elle fournit également un menu déroulant permettant de choisir différentes valeurs de `position-area` à appliquer à l'élément positionné, pour en voir l'effet. L'une des options fait apparaître un champ de texte permettant de saisir une valeur personnalisée. Enfin, une case à cocher est fournie pour activer ou désactiver `writing-mode: vertical-lr`, permettant d'observer comment les effets des valeurs de `position-area` diffèrent selon les modes d'écriture.

#### HTML

Dans le HTML, nous définissons deux éléments HTML {{HTMLElement("div")}}, l'un avec une classe `ancre` et l'autre avec une classe `infobox`. Ceux-ci sont destinés à être respectivement l'élément d'ancrage et l'élément positionné que nous allons associer à celui-ci. Nous avons inclus l'attribut `contenteditable` sur les deux, les rendant directement modifiables.

Nous avons également inclus deux formulaires contenant les éléments HTML {{HTMLElement("select")}} et [`<input type="text">`](/fr/docs/Web/HTML/Reference/Elements/input/text) pour définir différentes valeurs de `position-area`, et l'élément [`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox) pour activer ou désactiver le mode d'écriture vertical {{CSSxRef("writing-mode")}}. Le code pour ceux-ci, ainsi que le JavaScript, a été masqué pour des raisons de concision.

```html
<div class="ancre" contenteditable>⚓︎</div>

<div class="boite-information">
  <p contenteditable>Vous pouvez modifier ce texte.</p>
</div>
```

```html hidden
<form id="formulaire-position-area">
  <div>
    <label for="position-area-select"
      >Choisissez une position-area&nbsp;:</label
    >
    <select id="position-area-select" name="position-area-select">
      <optgroup label="Entrez une valeur personnalisée">
        <option>Personnalisé</option>
      </optgroup>
      <optgroup label="Physique, une seule tuile">
        <option selected>top left</option>
        <option>bottom right</option>
      </optgroup>
      <optgroup label="Physique, étendre sur deux">
        <option>bottom span-right</option>
        <option>left span-top</option>
      </optgroup>
      <optgroup label="Physique, étendre sur toutes">
        <option>top</option>
        <option>left</option>
      </optgroup>
      <optgroup label="Logique, une seule tuile">
        <option>start center</option>
        <option>inline-start block-end</option>
      </optgroup>
      <optgroup label="Logique, étendre sur deux">
        <option>start span-end</option>
        <option>center span-start</option>
        <option>inline-start span-block-end</option>
        <option>span-block-start center</option>
      </optgroup>
      <optgroup label="Logique, étendre sur toutes">
        <option>start span-all</option>
        <option>block-end</option>
      </optgroup>
      <optgroup label="Coordonnées, une seule tuile">
        <option>x-start center</option>
        <option>x-end y-end</option>
      </optgroup>
      <optgroup label="Coordonnées, étendre sur deux">
        <option>center span-y-start</option>
        <option>y-start span-x-end</option>
      </optgroup>
      <optgroup label="Coordonnées, étendre sur toutes">
        <option>x-start span-all</option>
        <option>y-end</option>
      </optgroup>
    </select>
  </div>
  <div id="conteneur-position-area-personnalise">
    <label for="position-area-personnalise"
      >Entrez une valeur personnalisée&nbsp;:</label
    ><br />
    <input
      type="text"
      id="position-area-personnalise"
      name="position-area-personnalise" />
  </div>
</form>

<form id="writing-mode-form">
  <label for="writing-mode-checkbox">writing-mode: vertical-lr</label><br />
  <input
    type="checkbox"
    id="writing-mode-checkbox"
    name="writing-mode-checkbox" />
</form>
```

#### CSS

Dans le CSS, nous déclarons d'abord le `<div>` `ancre` comme un élément d'ancrage en lui attribuant un nom d'ancrage via la propriété {{CSSxRef("anchor-name")}}.

L'élément positionné est associé à l'élément d'ancrage en définissant son nom d'ancrage comme valeur de la propriété {{CSSxRef("position-anchor")}} de l'élément positionné. Nous lui donnons également une position initiale avec `position-area: top left`&nbsp;; cela sera remplacé lorsque de nouvelles valeurs seront sélectionnées dans le menu `<select>`. Enfin, nous définissons son {{CSSxRef("opacity")}} à `0.8`, de sorte que lorsque l'élément positionné reçoit une valeur `position-area` qui le place au-dessus de l'ancre, vous pouvez toujours voir la position des éléments les uns par rapport aux autres.

```css hidden
.ancre {
  font-size: 1.8rem;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  min-width: 50px;
  min-height: 50px;
  line-height: 50px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

html {
  height: 100%;
}

body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  background: white;
  border: 1px solid black;
  padding: 5px;
  position: fixed;
}

#formulaire-position-area {
  top: 0;
  right: 2px;
}

#formulaire-position-area div:last-child {
  margin-top: 10px;
}

#formulaire-position-area div :last-child {
  margin-top: 5px;
}

#writing-mode-form {
  bottom: 0;
  left: 2px;
  writing-mode: horizontal-tb;
}

#conteneur-position-area-personnalise {
  display: none;
}

.boite-information {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 5px 2px;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
}
```

```css
.ancre {
  anchor-name: --mon-ancre;
}

.boite-information {
  position-anchor: --mon-ancre;
  position: fixed;
  opacity: 0.8;
  position-area: top left;
}
```

```js hidden
const anchorContainer = document.querySelector("body");
const boiteInformation = document.querySelector(".boite-information");

const positionAreaForm = document.querySelector("#formulaire-position-area");
const selectElem = document.querySelector("select");
const inputElemContainer = document.querySelector(
  "#conteneur-position-area-personnalise",
);
const inputElem = document.querySelector("#position-area-personnalise");
const checkboxElem = document.querySelector("#writing-mode-checkbox");

// Empêche le formulaire de se soumettre lorsque la touche Entrée est enfoncée
positionAreaForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Met à jour la position de l'élément positionné en fonction de la valeur sélectionnée dans le menu déroulant
selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  if (area === "Personnalisé") {
    // Affiche le champ de saisie de valeur personnalisée
    inputElemContainer.style.display = "block";
  } else {
    // Masque le champ de saisie de valeur personnalisée
    inputElemContainer.style.display = "none";
    // Définit la propriété position-area sur la valeur choisie dans le menu déroulant
    boiteInformation.style.positionArea = area;
  }
});

// Met à jour la propriété position-area de l'élément positionné avec la valeur saisie
inputElem.addEventListener("change", () => {
  const customArea = inputElem.value;

  // Définit la propriété position-area sur la valeur saisie dans le champ de texte
  boiteInformation.style.positionArea = customArea;
});

// Change le mode d'écriture pour correspondre à l'état de la case à cocher
checkboxElem.addEventListener("change", () => {
  if (checkboxElem.checked) {
    anchorContainer.style.writingMode = "vertical-lr";
  } else {
    anchorContainer.style.writingMode = "horizontal-tb";
  }
});
```

#### Résultat

Le résultat est le suivant&nbsp;:

{{EmbedLiveSample("Comparaison des valeurs de `position-area`", "100%", 360)}}

Essayez de sélectionner de nouvelles valeurs de `position-area` dans le menu `<select>` pour voir l'effet qu'elles ont sur la position de la boîte d'information. Sélectionnez la valeur «&nbsp;Personnalisé&nbsp;» et essayez de saisir des valeurs personnalisées de `position-area` dans le champ de texte pour voir leur effet. Ajoutez du texte à l'ancre et aux éléments positionnés par l'ancre pour voir comment l'élément positionné par l'ancre se développe en fonction de la valeur de `position-area`. Enfin, cochez la case, puis expérimentez avec différentes valeurs de `position-area` pour voir lesquelles donnent le même résultat dans différents modes d'écriture, et lesquelles donnent des résultats différents.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("anchor-name")}}
- La propriété {{CSSxRef("position-anchor")}}
- La propriété {{CSSxRef("position-try-fallbacks")}}
- La fonction {{CSSxRef("anchor()")}}
- Le type de donnée {{CSSxRef("position-area_value", "&lt;position-area&gt;")}}
- Le guide [d'utilisation du positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Le guide [des options de repli et de masquage conditionnel en cas de débordement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- Le module [de positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
