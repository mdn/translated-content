---
title: scrollbar-color
slug: Web/CSS/scrollbar-color
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/scrollbar-color
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`scrollbar-color`** permet à un auteur de définir la couleur utilisée pour le curseur et la piste (la ligne sur laquelle se déplace le curseur) de la barre de défilement.

{{EmbedInteractiveExample("pages/css/scrollbar-color.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scrollbar-color: auto;
scrollbar-color: dark;
scrollbar-color: light;

/* Valeur de couleur */
/* La première cible le curseur et la seconde la piste */
/* type <color> */
scrollbar-color: rebeccapurple green;

/* Valeurs globales */
scrollbar-color: inherit;
scrollbar-color: initial;
scrollbar-color: unset;
```

### Valeurs

- `<scrollbar-face-color>`

  - : Une valeur définissant la couleur.

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>auto</code></td>
          <td>
            <p>
              Utilise le rendu par défaut du système pour la piste de la barre de
              défilement si aucune autre couleur n'est indiquée pour la mise en
              forme CSS de la barre de défilement.
            </p>
          </td>
        </tr>
        <tr>
          <td><code>dark</code></td>
          <td>
            Affiche une barre de défilement sombre. Ce peut être la variante sombre
            fournie par le système sous-jacent ou une barre de défilement
            personnalisée avec des couleurs sombres.
          </td>
        </tr>
        <tr>
          <td><code>light</code></td>
          <td>
            Affiche une barre de défilement claire. Ce peut être la variante claire
            fournie par le système sous-jacent ou une barre de défilement
            personnalisée avec des couleurs claires.
          </td>
        </tr>
        <tr>
          <td><code>&#x3C;color> &#x3C;color></code></td>
          <td>
            La première couleur est appliquée au curseur et la seconde à la piste
            sur laquelle se déplace le curseur.
          </td>
        </tr>
      </tbody>
    </table>

    > **Note :** Pour toute valeur de `scrollbar-color`, les agents utilisateur doivent appliquer la valeur sur l'élément racine de la zone d'affichage (_viewport_).

    > **Note :** Si la couleur d'une partie de la barre de défilement est indiquée, les implémentations peuvent afficher une barre de défilement simple (plutôt que celle provenant du système) afin de la colorer avec la/les couleur(s) indiquée(s).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
}
```

### HTML

```html
<div class="scroller">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</div>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Accessibilité

Lorsqu'on utilise `scrollbar-color` avec certains couleurs spécifiques, il est nécessaire de s'assurer que le contraste entre le curseur et la piste est suffisant. Lorsque des mots-clés sont utilisés, c'est à l'agent utilisateur de s'assurer que le contraste est suffisant. Voir [les techniques WCAG 2.0 G183 : Utiliser un ratio de contraste de 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html).

## Spécifications

| Spécification                                                                                | État                                 | Commentaires         |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName("CSS Scrollbars", "#scrollbar-color", "scrollbar-color")}} | {{Spec2("CSS Scrollbars")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.scrollbar-color")}}
