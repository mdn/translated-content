---
title: Propriété CSS `position-anchor`
short-title: position-anchor
slug: Web/CSS/Reference/Properties/position-anchor
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`position-anchor`** définit le nom de l'ancre de **l'élément d'ancrage** (c'est-à-dire un élément qui a un **nom d'ancre** défini avec la propriété {{CSSxRef("anchor-name")}}) auquel un élément positionné est associé.

## Syntaxe

```css
/* Valeurs uniques */
position-anchor: auto;
position-anchor: none;
position-anchor: --anchor-name;

/* Valeurs globales */
position-anchor: inherit;
position-anchor: initial;
position-anchor: revert;
position-anchor: revert-layer;
position-anchor: unset;
```

### Valeurs

- `auto`
  - : Associe un élément positionné à son élément d'ancrage implicite, s'il en a un — par exemple, comme défini par l'attribut HTML non standard [`anchor`](/fr/docs/Web/HTML/Reference/Global_attributes/anchor).

- `none`
  - : La valeur initiale (par défaut). L'élément positionné n'est pas associé à un élément d'ancrage.

- {{CSSxRef("dashed-ident")}}
  - : Le nom de l'élément d'ancrage auquel associer l'élément positionné, tel qu'indiqué dans la propriété {{CSSxRef("anchor-name")}} de l'élément d'ancrage. Cela est connu sous le nom de **spécificateur d'ancrage par défaut**.

## Description

Cette propriété n'est pertinente que pour les éléments «&nbsp;positionnés&nbsp;» — les éléments et pseudo-éléments qui ont une {{CSSxRef("position")}} qui est `absolute` ou `fixed`.

Pour positionner un élément par rapport à un élément d'ancrage, l'élément positionné nécessite trois fonctionnalités&nbsp;: une association, une position et un emplacement. Les propriétés `position-anchor` et {{CSSxRef("anchor-name")}} fournissent une association explicite.

L'élément d'ancrage accepte un ou plusieurs noms d'ancrage `<dashed-ident>` définis sur lui par la propriété `anchor-name`. Lorsqu'un de ces noms est ensuite défini comme valeur de la propriété `position-anchor` de l'élément positionné, les deux éléments sont associés.

S'il y a plusieurs éléments d'ancrage avec le même nom d'ancrage listé dans la propriété `position-anchor`, l'élément positionné sera associé au dernier élément d'ancrage dans l'ordre source avec ce nom d'ancrage.

Pour annuler une association précédemment établie entre un élément positionné et un élément d'ancrage, vous pouvez définir la valeur de `position-anchor` de l'élément positionné sur `none`.

Pour attacher un élément positionné à son ancre, il doit être placé par rapport à un élément d'ancrage en utilisant une fonctionnalité de positionnement d'ancrage, telle que la fonction {{CSSxRef("anchor()")}} (définie comme valeur sur les {{Glossary("inset properties", "propriétés d'encart")}}) ou la propriété {{CSSxRef("position-area")}}.

Si l'ancre associée est masquée, par exemple avec {{CSSxRef("display", "display: none")}} ou {{CSSxRef("visibility", "visibility: hidden")}}, ou si elle fait partie des [contenus ignorés](/fr/docs/Web/CSS/Guides/Containment/Using#ignorer_son_contenu) d'un autre élément en raison de la définition de {{CSSxRef("content-visibility", "content-visibility: hidden")}} sur celui-ci, l'élément positionné par rapport à l'ancre ne sera pas affiché.

La propriété `position-anchor` est prise en charge sur tous les éléments positionnés, y compris les [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) comme {{CSSxRef("::before")}} et {{CSSxRef("::after")}}. Les pseudo-éléments sont implicitement ancrés au même élément que l'élément d'origine du pseudo-élément, sauf indication contraire.

Pour plus d'informations sur les fonctionnalités et l'utilisation des ancres, consultez le module [de positionnement par ancrage CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) et le guide [d'utilisation du positionnement par ancrage CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Voir la documentation de `anchor-name` pour [l'utilisation de base](/fr/docs/Web/CSS/Reference/Properties/anchor-name#utilisation_simple) et des [exemples supplémentaires de `position-anchor`](/fr/docs/Web/CSS/Reference/Properties/anchor-name#exemples).

### Plusieurs éléments positionnés et ancres

Dans cet exemple, vous pouvez déplacer plusieurs éléments positionnés, en les associant à différentes ancres. Cet exemple montre comment une ancre peut être associée à plusieurs éléments positionnés, mais un élément positionné par une ancre ne peut être associé qu'à une seule ancre à la fois, l'ancre définie par la propriété `anchor-position`.

#### HTML

Nous avons quatre ancres et deux éléments positionnés, distingués par des valeurs `id` différentes. Les éléments positionnés contiennent des boîtes {{HTMLElement("select")}} qui vous permettent de choisir l'ancre à laquelle vous souhaitez les associer.

```html
<div id="conteneur-ancres">
  <div class="ancre" id="ancre1">⚓︎</div>
  <div class="ancre" id="ancre2">⚓︎</div>
  <div class="ancre" id="ancre3">⚓︎</div>
  <div class="ancre" id="ancre4">⚓︎</div>
</div>

<div class="boite-information" id="boite-information1">
  <form>
    <label for="selecteur-ancre-ancre1"
      >Placer la boîte d'information sur&nbsp;:</label
    >
    <select id="selecteur-ancre-ancre1">
      <option value="1">Ancre 1</option>
      <option value="2">Ancre 2</option>
      <option value="3">Ancre 3</option>
      <option value="4">Ancre 4</option>
    </select>
  </form>
</div>

<div class="boite-information" id="boite-information2">
  <form>
    <label for="selecteur-ancre-ancre2"
      >Placer la boîte d'information sur&nbsp;:</label
    >
    <select id="selecteur-ancre-ancre2">
      <option value="1">Ancre 1</option>
      <option value="2">Ancre 2</option>
      <option value="3">Ancre 3</option>
      <option value="4">Ancre 4</option>
    </select>
  </form>
</div>
```

#### CSS

Nous déclarons le premier `<div>` `ancre` comme une ancre en utilisant la propriété `anchor-name`, à laquelle sont attribués deux noms d'ancre séparés par des virgules, un pour chaque élément positionné. C'est l'état initial de la démo — les deux éléments positionnés seront attachés à la première ancre.

```css hidden
body {
  height: 100vh;
}

#conteneur-ancres {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
}

.ancre {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
#ancre1 {
  anchor-name: --mon-ancre1, --mon-ancre2;
}
```

Each of the positioned elements is given a `position-anchor` property with a value matching one of the two anchor names. The positioned elements are then given anchor-relative positioning information using a combination of inset, alignment, and margin properties.

```css hidden
.boite-information {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  width: 120px;
}
```

```css
#boite-information1 {
  position-anchor: --mon-ancre1;
  position: fixed;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#boite-information2 {
  position-anchor: --mon-ancre2;
  position: fixed;
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### JavaScript

Nous changeons dynamiquement les éléments d'ancrage sur lesquels les valeurs `anchor-name` sont définies en réponse aux différentes ancres sélectionnées dans les menus `<select>` des éléments positionnés. La fonctionnalité clé ici est le gestionnaire d'évènements {{DOMxRef("HTMLElement/change_event", "change")}}, `changerNomAncre()`. Il définit les deux noms d'ancre sur une seule ancre, si les ancres choisies dans les deux menus `<select>` sont les mêmes. Sinon, il définit un seul nom d'ancre sur deux ancres distinctes, selon le cas.

```js
// Obtenir des références aux deux menus select
const selecteur1 = document.querySelector("#selecteur-ancre-ancre1");
const selecteur2 = document.querySelector("#selecteur-ancre-ancre2");
// Obtenir des références à toutes les ancres dans un NodeList (semblable à un tableau)
const ancres = document.querySelectorAll("#conteneur-ancres > div");

// Définir le même gestionnaire d'événements de changement sur les deux menus select
selecteur1.addEventListener("change", changerNomAncre);
selecteur2.addEventListener("change", changerNomAncre);

function changerNomAncre() {
  // Supprimer tous les noms d'ancre de toutes les ancres
  for (const ancre of ancres) {
    ancre.style.anchorName = "none";
  }

  // Convertir les valeurs des menus select en nombres, et en soustraire un pour
  // les faire correspondre aux positions des ancres sélectionnées dans le NodeList
  const valeur1 = Number(selecteur1.value) - 1;
  const valeur2 = Number(selecteur2.value) - 1;

  if (valeur1 === valeur2) {
    // Si les ancres choisies sont les mêmes, définir les deux noms d'ancre
    // sur la même ancre
    ancres[valeur1].style.anchorName = "--mon-ancre1, --mon-ancre2";
  } else {
    // Si elles ne sont pas les mêmes, définir les noms d'ancre séparément
    // sur chaque ancre sélectionnée
    ancres[valeur1].style.anchorName = "--mon-ancre1";
    ancres[valeur2].style.anchorName = "--mon-ancre2";
  }
}
```

#### Résultat

Sélectionnez différentes valeurs dans les menus déroulants pour changer les ancres par rapport auxquelles les éléments sont positionnés.

{{EmbedLiveSample("Plusieurs éléments positionnés et ancres", "100%", 400)}}

### Utiliser le curseur d'une plage comme ancre

Dans cet exemple, un élément HTML {{HTMLElement("output")}} est positionné par rapport à une ancre qui est le curseur d'une plage de valeurs.

#### HTML

Nous incluons un élément HTML [`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range) et un élément HTML {{HTMLElement("output")}} pour afficher la valeur de la plage. La valeur affichée dans l'élément `<output>` est mise à jour via JavaScript lorsque la valeur du curseur change.

```html
<label for="glissiere">Changer la valeur&nbsp;:</label>
<input type="range" min="0" max="100" value="25" id="glissiere" />
<output>25</output>
```

#### CSS

Nous donnons au curseur, représenté par les pseudo-éléments {{CSSxRef("::-webkit-slider-thumb")}} et {{CSSxRef("::-moz-range-thumb")}}, un nom d'ancre `--thumb`. Nous définissons ensuite ce nom comme valeur de la propriété `position-anchor` de l'élément `<output>`, et lui donnons une valeur {{CSSxRef("position")}} de `fixed`. Ces étapes associent l'élément `<output>` au curseur.

Enfin, nous utilisons les propriétés {{CSSxRef("left")}} et {{CSSxRef("top")}} avec des valeurs {{CSSxRef("anchor()")}} pour positionner l'élément `<output>` par rapport au curseur.

```css hidden
body {
  display: grid;
  place-items: center;
  height: 100vh;
  font-size: 1.4rem;
  font-family: sans-serif;
}
input {
  width: 33vw;
}
output {
  background: cyan;
  border: 2px solid darkblue;
  padding: 3px 6px;
  border-radius: 10px;
  font-size: 1.2rem;
}
```

```css
input::-webkit-slider-thumb {
  anchor-name: --thumb;
}

input::-moz-range-thumb {
  anchor-name: --thumb;
}

output {
  position-anchor: --thumb;
  position: absolute;
  left: anchor(right);
  bottom: anchor(top);
}
```

#### JavaScript

Nous incluons un écouteur d'évènements qui met à jour le contenu de l'élément `<output>` lorsque la valeur de l'élément `<input>` change&nbsp;:

```js
const entree = document.querySelector("input");
const sortie = document.querySelector("output");

entree.addEventListener("input", (event) => {
  sortie.innerText = `${entree.value}`;
});
```

#### Résultats

La sortie est ancrée au curseur. Modifiez la valeur et la sortie restera au-dessus et à droite du curseur, quelle que soit sa position sur la glissière.

{{EmbedLiveSample("Utiliser le curseur d'une plage comme ancre", "100%", 225)}}

> [!NOTE]
> Le positionnement par ancre CSS pour cette démonstration ne fonctionne actuellement pas dans Firefox. Le curseur de la glissière peut être ciblé avec le pseudo-élément {{CSSxRef("::-moz-range-thumb")}} dans Firefox, mais il n'est actuellement pas disponible en tant qu'ancre (voir [bogue Firefox 1993699 <sup>(angl.)</sup>](https://bugzil.la/1993699)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("anchor-name")}}
- La propriété {{CSSxRef("anchor-scope")}}
- L'attribut HTML [`anchor`](/fr/docs/Web/HTML/Reference/Global_attributes/anchor)
- Le module [de positionnement par ancre CSS anchor positioning](/fr/docs/Web/CSS/Guides/Anchor_positioning)
- Le guide [d'utilisation du positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using)
