---
title: scrollbar-width
slug: Web/CSS/scrollbar-width
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`scrollbar-width`** permet à un auteur de définir l'épaisseur maximale à utiliser pour la barre de défilement si celle-ci est affichée.

{{EmbedInteractiveExample("pages/css/scrollbar-width.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scrollbar-width: auto;
scrollbar-width: thin;
scrollbar-width: none;

/* Valeurs globales */
scrollbar-width: inherit;
scrollbar-width: initial;
scrollbar-width: unset;
```

### Valeurs

- `<scrollbar-width>`

  - : Une valeur qui définit l'épaisseur de la barre de défilement. Cette valeur est une longueur (cf. {{cssxref("&lt;length&gt;")}}) positive ou bien un mot-clé. Si c'est un mot-clé, ce dernier doit avoir l'une des valeurs suivantes :

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>auto</code></td>
          <td>
            La largeur par défaut, fournie par le système, pour la barre de
            défilement.
          </td>
        </tr>
        <tr>
          <td><code>thin</code></td>
          <td>
            Une variante plus fine de la barre de défilement plus fine dans le cas
            des plateformes qui fournissent une telle option ou une barre de
            défilement avec une largeur moindre que la largeur par défaut du
            système.
          </td>
        </tr>
        <tr>
          <td><code>none</code></td>
          <td>
            Aucune barre de défilement n'est affichée mais on peut toujours faire
            défiler l'élément.
          </td>
        </tr>
      </tbody>
    </table>

    > **Note :** Toute valeur de `scrollbar-width` doit être appliquée sur l'élément racine de la zone d'affichage (_viewport_) par les agents utilisateur.

    > **Note :** L'utilisation des longueurs pour `scrollbar-width` est une fonctionnalité qui sera potentiellement abandonnée de la spécification (voir [l'_issue_ 1958](https://github.com/w3c/csswg-drafts/issues/1958)).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-width: thin;
}
```

### HTML

```html
<div class="scroller">
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
  corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts
  fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
  earthnut pea peanut soko zucchini.
</div>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("-ms-overflow-style")}}
- {{CSSxRef("::-webkit-scrollbar")}}
