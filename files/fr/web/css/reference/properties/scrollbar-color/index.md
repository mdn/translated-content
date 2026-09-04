---
title: Propriété CSS `scrollbar-color`
short-title: scrollbar-color
slug: Web/CSS/Reference/Properties/scrollbar-color
l10n:
  sourceCommit: 2e2dfb27a085911dd64aa4798d4a1071660c2397
---

La propriété [CSS](/fr/docs/Web/CSS) **`scrollbar-color`** définit la couleur de la piste et du curseur de la barre de défilement.

La **piste** désigne l'arrière-plan de la barre de défilement, qui reste généralement fixe quelle que soit la position de défilement.

Le **curseur** désigne la partie mobile de la barre de défilement, qui flotte généralement au-dessus de la piste.

Lorsque la valeur `scrollbar-color` est définie sur l'élément racine du document, les valeurs s'appliquent aux barres de défilement de la zone d'affichage (<i lang="en">viewport</i> en anglais).

> [!NOTE]
> Les navigateurs ignorent la famille de pseudo-éléments non standard {{CSSxRef("::-webkit-scrollbar")}} sur tout élément dont la valeur _calculée_ de `scrollbar-color` est autre que `auto`.
> Comme `scrollbar-color` est hérité, cela inclut les éléments qui ne le définissent pas eux-mêmes mais héritent d'une valeur non `auto` d'un ancêtre.
> Définir `scrollbar-color: auto` sur un tel élément restaure son style `::-webkit-scrollbar-*` s'il avait été précédemment supprimé par un réglage `scrollbar-color` sur un ancêtre.
> Voir [Ajouter une solution de repli pour les styles de barre de défilement](/fr/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar#ajouter_une_solution_de_repli_pour_les_styles_de_barre_de_défilement).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scrollbar-color: auto;

/* Valeurs de type <color> */
scrollbar-color: rebeccapurple green; /* Deux couleurs valides.
La première s'applique au curseur de la barre de défilement, la seconde à la piste. */

/* Valeurs globales */
scrollbar-color: inherit;
scrollbar-color: initial;
scrollbar-color: revert;
scrollbar-color: revert-layer;
scrollbar-color: unset;
```

### Valeurs

- `<scrollbar-color>`
  - : Définit la couleur de la barre de défilement.

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>auto</code></td>
          <td>
            Rendu par défaut de la plateforme pour la portion de la piste de la barre de défilement, en l'absence de toute autre propriété de couleur de barre de défilement.
          </td>
        </tr>
        <tr>
          <td><code>&#x3C;color> &#x3C;color></code></td>
          <td>
            La première couleur est appliquée au curseur de la barre de défilement, la seconde à la piste.
          </td>
        </tr>
      </tbody>
    </table>

> [!NOTE]
> [`@media (forced-colors: active)`](/fr/docs/Web/CSS/Reference/At-rules/@media/forced-colors) définit `scrollbar-color` sur `auto`.

## Accessibilité

Lorsqu'on utilise `scrollbar-color` avec certains couleurs spécifiques, il est nécessaire de s'assurer que le contraste entre le curseur et la piste est suffisant. Lorsque des mots-clés sont utilisés, c'est à l'agent utilisateur de s'assurer que le contraste est suffisant. Voir [les techniques WCAG 2.0 G183&nbsp;: Utiliser un ratio de contraste de 3:1 <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/G183.html).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Coloration des barres de défilement

#### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: #000077 #bada55;
}
```

#### HTML

```html
<div class="scroller">
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
  corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts
  fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
  earthnut pea peanut soko zucchini.
</div>
```

#### Résultat

{{EmbedLiveSample("Coloration des barres de défilement")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module [de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- Le module [de mise en forme des barres de défilement CSS](/fr/docs/Web/CSS/Guides/Scrollbars_styling)
- La propriété {{CSSxRef("overflow")}}
- La propriété {{CSSxRef("scrollbar-gutter")}}
- La propriété {{CSSxRef("scrollbar-width")}}
