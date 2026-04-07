---
title: position-try-order
slug: Web/CSS/Reference/Properties/position-try-order
l10n:
  sourceCommit: 3e0ba995376cace7f08f0771635f86f0fb1753b3
---

La propriété [CSS](/fr/docs/Web/CSS) **`position-try-order`** permet de définir diverses options de repli qui entraînent l'utilisation d'un repli de position disponible pour définir la position d'un élément positionné par ancre, au lieu de ses paramètres de position initiaux.

> [!NOTE]
> Il existe également une propriété raccourcie — {{CSSxRef("position-try")}}, qui peut être utilisée pour définir les valeurs de `position-try-order` et {{CSSxRef("position-try-fallbacks")}} dans une seule déclaration.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
position-try-order: normal;
position-try-order: most-height;
position-try-order: most-width;
position-try-order: most-block-size;
position-try-order: most-inline-size;

/* Valeurs globales */
position-try-order: inherit;
position-try-order: initial;
position-try-order: revert;
position-try-order: revert-layer;
position-try-order: unset;
```

### Valeurs

La propriété `position-try-order` peut être définie soit avec la valeur clé `normal`, soit avec une `<try-size>`.

- `normal`
  - : La valeur par défaut. Aucune option de repli de position ne sera essayée lorsque l'élément est affiché pour la première fois.
- `<try-size>`
  - : Définit les différentes options de repli de taille, qui définissent les critères déterminant quelle option de repli doit être appliquée à l'élément positionné par ancre lorsqu'il est affiché pour la première fois. Les valeurs disponibles sont&nbsp;:
    - `most-height`
      - : L'option de repli de position sera appliquée pour donner à l'élément contenant le plus de hauteur.
    - `most-width`
      - : L'option de repli de position sera appliquée pour donner à l'élément contenant le plus de largeur.
    - `most-block-size`
      - : L'option de repli de position sera appliquée pour donner à l'élément contenant la plus grande taille dans la direction de bloc.
    - `most-inline-size`
      - : L'option de repli de position sera appliquée pour donner à l'élément contenant la plus grande taille dans la direction en ligne.

## Description

La propriété `position-try-order` a un objectif légèrement différent des autres fonctionnalités de repli de position, en ce qu'elle utilise les options de repli de position lorsque l'élément positionné est affiché pour la première fois, plutôt que lorsqu'il est en cours de défilement. Par exemple, vous pourriez vouloir afficher initialement l'élément dans un espace qui a plus de hauteur ou de largeur disponible que la position initiale par défaut.

Le navigateur testera les options de repli de position disponibles pour déterminer laquelle offre le plus d'espace à l'élément positionné par ancre dans la dimension définie. Il appliquera ensuite cette option, remplaçant le style initial de l'élément.

Si aucune option de repli de position n'est disponible offrant plus de largeur/hauteur que la position initiale assignée à l'élément, aucune option de repli de position ne sera appliquée. En effet, le comportement est comme si `position-try-order` était défini sur `normal`.

Pour des informations détaillées sur les fonctionnalités d'ancrage et l'utilisation des options de repli de position, consultez le module [de positionnement des ancres CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) et le guide [des options de repli et masquage conditionnel pour le débordement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de `position-try-order`

Cette démo montre l'effet de `position-try-order`.

#### HTML

Le HTML inclut deux éléments HTML {{HTMLElement("div")}} qui deviendront une ancre et un élément positionné par ancre, ainsi qu'un `<form>` contenant des boutons radio permettant de sélectionner différentes valeurs de `position-try-order`.

```html
<div class="ancre">⚓︎</div>

<div class="boite-information">
  <p>Ceci est une boîte d'information.</p>
</div>

<form>
  <fieldset>
    <legend>Choisissez un ordre de repli</legend>
    <div>
      <label for="radio-normal">normal</label>
      <input
        type="radio"
        id="radio-normal"
        name="position-try-order"
        value="normal"
        checked />
    </div>
    <div>
      <label for="radio-most-height">most-height</label>
      <input
        type="radio"
        id="radio-most-height"
        name="position-try-order"
        value="most-height" />
    </div>
  </fieldset>
</form>
```

#### CSS

Dans le CSS, l'ancre reçoit un {{CSSxRef("anchor-name")}} et a une grande marge ({{CSSxRef("margin")}}) pour la positionner vers le centre supérieur de la fenêtre d'affichage&nbsp;:

```css hidden
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
.ancre {
  anchor-name: --mon-ancre;
  margin: 90px auto;
}
```

```css hidden
.boite-information {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
}

form {
  position: fixed;
  bottom: 2px;
  right: 2px;
}
```

Nous incluons ensuite une option de position personnalisée nommée `--bas-personnalise` qui positionne l'élément en dessous de l'ancre et lui donne une marge appropriée&nbsp;:

```css
@position-try --bas-personnalise {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Nous positionnons initialement l'élément au-dessus de son ancre, puis nous lui donnons notre option de position personnalisée en utilisant le raccourci `position-try`, qui définit également la propriété `position-try-order` sur `normal`&nbsp;:

```css
.boite-information {
  position: fixed;
  position-anchor: --mon-ancre;

  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;

  position-try: normal --bas-personnalise;
}
```

#### JavaScript

Enfin, nous incluons un peu de JavaScript. Cela définit un gestionnaire d'évènements {{DOMxRef("HTMLElement/change_event", "change")}} sur les boutons radio afin que, lorsqu'une nouvelle valeur est sélectionnée, cette valeur soit appliquée à la propriété `position-try-order` de la boîte d'information.

```js
const boiteInformation = document.querySelector(".boite-information");
const formulaire = document.forms[0];
const radios = formulaire.elements["position-try-order"];

for (const radio of radios) {
  radio.addEventListener("change", definirOrdreRepli);
}

function definirOrdreRepli(e) {
  const ordreRepli = e.target.value;
  boiteInformation.style.positionTryOrder = ordreRepli;
}
```

#### Résultat

{{EmbedLiveSample("Utilisation simple de `position-try-order`", "100%", 310)}}

Essayez de sélectionner l'option d'ordre `most-height`. Cela a pour effet d'appliquer `--bas-personnalise` comme option de repli de position, ce qui positionne l'élément en dessous de l'ancre. Cela se produit parce qu'il y a plus d'espace vertical en dessous de l'ancre qu'au-dessus.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("position-try")}}
- La propriété {{CSSxRef("position-try-fallbacks")}}
- La règle {{CSSxRef("@position-try")}}
- Le module [de positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
- Le guide [d'utilisation du positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Le guide [des options de repli et de masquage conditionnel en cas de débordement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
